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

        let packageDescriptors = try XCTUnwrap((current["packages"] as? [String: Any])?["manifests"] as? [String: [String: Any]])
        XCTAssertEqual(packageDescriptors.count, 24)
        var researchExamples = 0
        var researchClaimLinks = 0
        var phylogenyPackages = 0
        var wormsNomenclatureRecords = 0
        for (packageId, manifestDescriptor) in packageDescriptors {
            let manifestPath = try XCTUnwrap(manifestDescriptor["url"] as? String)
            let manifestInventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == manifestPath }, "Rich-package manifest missing from release inventory")
            try verifyBundled(record: manifestInventoryRecord, below: dataRoot)
            let package = try jsonObject(at: dataRoot.appendingPathComponent(manifestPath))
            XCTAssertEqual(package["packageId"] as? String, packageId)
            let payloads = try XCTUnwrap(package["files"] as? [String: [String: Any]])
            let researchDescriptor = try XCTUnwrap(payloads["researchExamples"])
            let researchPath = try XCTUnwrap(researchDescriptor["url"] as? String)
            let researchInventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == researchPath }, "Research examples missing from release inventory")
            XCTAssertEqual(researchDescriptor["bytes"] as? Int, researchInventoryRecord["bytes"] as? Int)
            XCTAssertEqual(researchDescriptor["sha256"] as? String, researchInventoryRecord["sha256"] as? String)
            try verifyBundled(record: researchInventoryRecord, below: dataRoot)
            researchExamples += try XCTUnwrap(package["researchExampleCount"] as? Int)
            researchClaimLinks += try XCTUnwrap(package["researchClaimLinkCount"] as? Int)
            if payloads["phylogeny"] != nil { phylogenyPackages += 1 }
            if packageId == "echinoderms" {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 1)
                let collection = try XCTUnwrap(collections.first)
                XCTAssertEqual(collection["id"] as? String, "worms-aphiaid-crosswalk")
                XCTAssertEqual(collection["provider"] as? String, "WoRMS")
                XCTAssertEqual((collection["source"] as? [String: Any])?["license"] as? String, "CC-BY-4.0")
                let collectionCounts = try XCTUnwrap(collection["counts"] as? [String: Any])
                XCTAssertEqual(collectionCounts["total"] as? Int, 11_891)
                let collectionFile = try XCTUnwrap(collection["file"] as? [String: Any])
                let collectionPath = try XCTUnwrap(collectionFile["url"] as? String)
                let collectionInventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == collectionPath }, "WoRMS collection missing from release inventory")
                XCTAssertEqual(collectionFile["bytes"] as? Int, collectionInventoryRecord["bytes"] as? Int)
                XCTAssertEqual(collectionFile["sha256"] as? String, collectionInventoryRecord["sha256"] as? String)
                try verifyBundled(record: collectionInventoryRecord, below: dataRoot)
                wormsNomenclatureRecords += try XCTUnwrap(collectionCounts["total"] as? Int)
            } else {
                XCTAssertNil(package["nomenclatureCollections"], "Only echinoderms may carry the WoRMS collection")
            }
        }
        XCTAssertEqual(researchExamples, 24)
        XCTAssertEqual(researchClaimLinks, 34)
        XCTAssertEqual(phylogenyPackages, 2)
        XCTAssertEqual(wormsNomenclatureRecords, 11_891)

        let catalogueDescriptor = try XCTUnwrap((current["catalogue"] as? [String: Any])?["manifest"] as? [String: Any])
        let cataloguePath = try XCTUnwrap(catalogueDescriptor["url"] as? String)
        let catalogue = try jsonObject(at: dataRoot.appendingPathComponent(cataloguePath))
        let resourcePacks = try XCTUnwrap(catalogue["resourcePacks"] as? [String: Any])
        XCTAssertEqual(resourcePacks["packageCount"] as? Int, 7)
        XCTAssertEqual(resourcePacks["acceptedSpeciesCount"] as? Int, 363_160)
        let packManifests = try XCTUnwrap(resourcePacks["manifests"] as? [String: [String: Any]])
        var resourcePackRecords = 0
        var lpsnIdentifierRecords = 0
        var ictvSpeciesRecords = 0
        var ictvIsolateRecords = 0
        for packageId in ["archaea", "bacteria", "fungi", "other-animals", "other-plants", "protists-chromists", "viruses"] {
            let manifestDescriptor = try XCTUnwrap(packManifests[packageId])
            let manifestPath = try XCTUnwrap(manifestDescriptor["url"] as? String)
            let manifestInventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == manifestPath }, "Resource-pack manifest missing from release inventory")
            try verifyBundled(record: manifestInventoryRecord, below: dataRoot)
            let pack = try jsonObject(at: dataRoot.appendingPathComponent(manifestPath))
            XCTAssertEqual(pack["packageId"] as? String, packageId)
            XCTAssertEqual(pack["version"] as? String, datasetVersion)
            let shards = try XCTUnwrap(pack["files"] as? [[String: Any]])
            var packageRecords = 0
            for shard in shards {
                let shardPath = try XCTUnwrap(shard["url"] as? String)
                let shardInventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == shardPath }, "Resource-pack shard missing from release inventory")
                XCTAssertEqual(shard["bytes"] as? Int, shardInventoryRecord["bytes"] as? Int)
                XCTAssertEqual(shard["sha256"] as? String, shardInventoryRecord["sha256"] as? String)
                try verifyBundled(record: shardInventoryRecord, below: dataRoot)
                packageRecords += try XCTUnwrap(shard["records"] as? Int)
            }
            XCTAssertEqual(pack["acceptedSpeciesCount"] as? Int, packageRecords)
            if packageId == "archaea" || packageId == "bacteria" {
                let extensions = try XCTUnwrap(pack["extensions"] as? [[String: Any]])
                XCTAssertEqual(extensions.count, 1)
                let lpsn = try XCTUnwrap(extensions.first)
                XCTAssertEqual(lpsn["id"] as? String, "lpsn-identifiers")
                XCTAssertEqual(lpsn["provider"] as? String, "LPSN")
                XCTAssertEqual((lpsn["counts"] as? [String: Any])?["resolved"] as? Int, packageId == "archaea" ? 790 : 21_570)
                let extensionFiles = try XCTUnwrap(lpsn["files"] as? [[String: Any]])
                for extensionFile in extensionFiles {
                    let extensionPath = try XCTUnwrap(extensionFile["url"] as? String)
                    let extensionInventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == extensionPath }, "LPSN extension shard missing from release inventory")
                    XCTAssertEqual(extensionFile["bytes"] as? Int, extensionInventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(extensionFile["sha256"] as? String, extensionInventoryRecord["sha256"] as? String)
                    try verifyBundled(record: extensionInventoryRecord, below: dataRoot)
                    lpsnIdentifierRecords += try XCTUnwrap(extensionFile["records"] as? Int)
                }
            } else if packageId == "viruses" {
                let extensions = try XCTUnwrap(pack["extensions"] as? [[String: Any]])
                XCTAssertEqual(extensions.count, 1)
                let ictv = try XCTUnwrap(extensions.first)
                XCTAssertEqual(ictv["id"] as? String, "ictv-virus-metadata")
                XCTAssertEqual(ictv["provider"] as? String, "ICTV")
                XCTAssertEqual((ictv["source"] as? [String: Any])?["license"] as? String, "CC-BY-4.0")
                let counts = try XCTUnwrap(ictv["counts"] as? [String: Any])
                XCTAssertEqual(counts["accepted"] as? Int, 17_552)
                XCTAssertEqual(counts["redirect"] as? Int, 0)
                XCTAssertEqual(counts["ambiguous"] as? Int, 0)
                XCTAssertEqual(counts["unmatched"] as? Int, 0)
                XCTAssertEqual(counts["withheld"] as? Int, 0)
                XCTAssertEqual(counts["officialSpecies"] as? Int, 17_554)
                XCTAssertEqual(counts["upstreamOnly"] as? Int, 2)
                XCTAssertEqual(counts["vmrIsolates"] as? Int, 19_285)
                let extensionFiles = try XCTUnwrap(ictv["files"] as? [[String: Any]])
                XCTAssertEqual(extensionFiles.count, 1)
                for extensionFile in extensionFiles {
                    XCTAssertEqual(extensionFile["bytes"] as? Int, 1_346_739)
                    XCTAssertEqual(extensionFile["sha256"] as? String, "99253ddc92392bdb0a03465eda99e9c2ee3d6660ac690d3b52cb8c9caf3a1443")
                    let extensionPath = try XCTUnwrap(extensionFile["url"] as? String)
                    let extensionInventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == extensionPath }, "ICTV extension shard missing from release inventory")
                    XCTAssertEqual(extensionFile["bytes"] as? Int, extensionInventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(extensionFile["sha256"] as? String, extensionInventoryRecord["sha256"] as? String)
                    try verifyBundled(record: extensionInventoryRecord, below: dataRoot)
                    ictvSpeciesRecords += try XCTUnwrap(extensionFile["records"] as? Int)
                }
                ictvIsolateRecords += try XCTUnwrap(counts["vmrIsolates"] as? Int)
            } else {
                XCTAssertNil(pack["extensions"], "Only Archaea, Bacteria and Viruses may carry resource-pack extensions")
            }
            resourcePackRecords += packageRecords
        }
        XCTAssertEqual(resourcePackRecords, 363_160)
        XCTAssertEqual(lpsnIdentifierRecords, 22_360)
        XCTAssertEqual(ictvSpeciesRecords, 17_554)
        XCTAssertEqual(ictvIsolateRecords, 19_285)
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
