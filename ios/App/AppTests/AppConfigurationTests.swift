import XCTest
import CryptoKit
@testable import App

final class AppConfigurationTests: XCTestCase {
    func testApplicationIdentityAndDeepLinkScheme() throws {
        let bundle = Bundle.main
        XCTAssertEqual(bundle.bundleIdentifier, "io.github.dajiaohuang.evoatlas")
        XCTAssertEqual(bundle.object(forInfoDictionaryKey: "CFBundleDisplayName") as? String, "Evo Atlas")

        let urlTypes = try XCTUnwrap(bundle.object(forInfoDictionaryKey: "CFBundleURLTypes") as? [[String: Any]])
        let schemes = urlTypes.flatMap { $0["CFBundleURLSchemes"] as? [String] ?? [] }
        XCTAssertTrue(schemes.contains("evoatlas"))
    }

    func testSceneDelegateCanCreateTheCapacitorHost() {
        XCTAssertNotNil(SceneDelegate())
    }

    func testCompleteScientificReleaseIsBundledForOfflineStartup() throws {
        let dataRoot = try XCTUnwrap(Bundle.main.resourceURL).appendingPathComponent("public/data", isDirectory: true)
        let current = try jsonObject(at: dataRoot.appendingPathComponent("current.json"))
        let datasetVersion = try XCTUnwrap(current["datasetVersion"] as? String)
        XCTAssertEqual(current["releaseBase"] as? String, "releases/\(datasetVersion)/")

        let indexURL = dataRoot
            .appendingPathComponent("releases", isDirectory: true)
            .appendingPathComponent(datasetVersion, isDirectory: true)
            .appendingPathComponent("release-files.json")
        let inventory = try jsonObject(at: indexURL)
        XCTAssertEqual(inventory["datasetVersion"] as? String, datasetVersion)
        let files = try XCTUnwrap(inventory["files"] as? [[String: Any]])
        XCTAssertGreaterThan(files.count, 3_700)

        for area in ["/core/", "/packages/", "/occurrences/", "/maps/", "/catalogue/"] {
            let sample = files.first { record in
                guard let path = record["url"] as? String else { return false }
                return !path.contains("/downloads/") && path.contains(area)
            }
            let record = try XCTUnwrap(sample, "Missing bundled inventory area \(area)")
            try verifyBundled(record: record, below: dataRoot)
        }

        let mapsDescriptor = try XCTUnwrap((current["maps"] as? [String: Any])?["manifest"] as? [String: Any])
        let mapsPath = try XCTUnwrap(mapsDescriptor["url"] as? String)
        let maps = try jsonObject(at: dataRoot.appendingPathComponent(mapsPath))
        let observations = try XCTUnwrap(maps["observations"] as? [String: Any])
        XCTAssertEqual(observations["totalRecords"] as? Int, 44_175)
        XCTAssertEqual(observations["reconstructedRecords"] as? Int, 41_320)
        let datasets = try XCTUnwrap(observations["datasets"] as? [String: [String: Any]])
        XCTAssertEqual(datasets.count, 5)
        var observationFiles = 0
        for datasetId in ["paleomagnetic-poles", "geochemistry", "metamorphic-gradient-orogen", "metamorphic-gradient-rift", "metamorphic-gradient-subduction-zone"] {
            let dataset = try XCTUnwrap(datasets[datasetId])
            let descriptors = try XCTUnwrap(dataset["files"] as? [[String: Any]])
            for descriptor in descriptors {
                let path = try XCTUnwrap(descriptor["url"] as? String)
                let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "Observation shard missing from release inventory")
                XCTAssertEqual(descriptor["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                XCTAssertEqual(descriptor["sha256"] as? String, inventoryRecord["sha256"] as? String)
                try verifyBundled(record: inventoryRecord, below: dataRoot)
                observationFiles += 1
            }
        }
        XCTAssertEqual(observationFiles, 20)
    }

    private func verifyBundled(record: [String: Any], below dataRoot: URL) throws {
        let path = try XCTUnwrap(record["url"] as? String)
        let sampleURL = dataRoot.appendingPathComponent(path)
        XCTAssertTrue(FileManager.default.fileExists(atPath: sampleURL.path), "Missing bundled file \(path)")
        let data = try Data(contentsOf: sampleURL)
        XCTAssertEqual(data.count, record["bytes"] as? Int, "Bundled byte count \(path)")
        XCTAssertEqual(SHA256.hash(data: data).map { String(format: "%02x", $0) }.joined(), record["sha256"] as? String, "Bundled checksum \(path)")
    }

    private func jsonObject(at url: URL) throws -> [String: Any] {
        let data = try Data(contentsOf: url)
        return try XCTUnwrap(JSONSerialization.jsonObject(with: data) as? [String: Any])
    }
}
