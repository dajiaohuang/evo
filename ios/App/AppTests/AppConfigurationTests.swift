import UIKit
import XCTest
import CryptoKit
import WebKit
import Capacitor
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

    @MainActor
    func testCapacitorWebViewRendersAndReadsNativeFullData() async throws {
        let controller = try XCTUnwrap(UIApplication.shared.connectedScenes
            .compactMap { $0 as? UIWindowScene }
            .flatMap { $0.windows }
            .compactMap { $0.rootViewController as? CAPBridgeViewController }
            .first, "Hosted application did not create its Capacitor scene")
        controller.loadViewIfNeeded()

        let webView = try XCTUnwrap(findWebView(in: controller.view), "Capacitor host did not create a WKWebView")
        var ready = false
        for _ in 0..<450 {
            ready = try await evaluateAsync("""
            return Boolean(document.readyState === 'complete'
              && location.protocol !== 'about:'
              && document.querySelector('#root')?.children.length > 0
              && document.querySelector('main'))
            """, in: webView) as? Bool ?? false
            if ready { break }
            try await Task.sleep(nanoseconds: 100_000_000)
        }
        XCTAssertTrue(ready, "Capacitor WKWebView did not render the app within 45 seconds")

        let result = try await evaluateAsync("""
        const currentResponse = await fetch('./data/current.json', { cache: 'no-store' });
        if (!currentResponse.ok) throw new Error(`./data/current.json: HTTP ${currentResponse.status}`);
        const current = await currentResponse.json();
        if (current.deliveryProfile !== 'native-full') throw new Error('Bundled current.json is not native-full');
        const paths = [
          './data/current.json',
          `./data/${current.core.packages.url}`,
          `./data/${current.catalogue.manifest.url}`,
          `./data/${current.maps.manifest.url}`
        ];
        return await Promise.all(paths.map(async (path) => {
          const response = await fetch(path, { cache: 'no-store' });
          if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
          const bytes = await response.arrayBuffer();
          return { path, bytes: bytes.byteLength };
        }));
        """, in: webView)
        let files = try XCTUnwrap(result as? [[String: Any]], "Native data probe returned an unexpected result")
        XCTAssertEqual(files.count, 4)
        for file in files {
            XCTAssertGreaterThan(file["bytes"] as? Int ?? 0, 0, "Empty native payload: \(file["path"] as? String ?? "unknown")")
        }
    }

    func testCompleteScientificReleaseIsBundledForOfflineStartup() throws {
        let dataRoot = try XCTUnwrap(Bundle.main.resourceURL).appendingPathComponent("public/data", isDirectory: true)
        let current = try jsonObject(at: dataRoot.appendingPathComponent("current.json"))
        XCTAssertEqual(current["deliveryProfile"] as? String, "native-full")
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

        var interactiveFileCount = 0
        for record in files {
            let path = try XCTUnwrap(record["url"] as? String)
            if path.contains("/downloads/") { continue }
            try verifyBundled(record: record, below: dataRoot)
            interactiveFileCount += 1
        }
        print("Verified \(interactiveFileCount) interactive inventory files in the compiled iOS bundle")

        for area in ["/core/", "/packages/", "/occurrences/", "/maps/", "/catalogue/"] {
            let sample = files.first { record in
                guard let path = record["url"] as? String else { return false }
                return !path.contains("/downloads/") && path.contains(area)
            }
            _ = try XCTUnwrap(sample, "Missing bundled inventory area \(area)")
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

        let paleotopography = try XCTUnwrap(maps["paleotopography"] as? [String: Any])
        XCTAssertEqual(paleotopography["id"] as? String, "scotese-wright-2018-paleodem-v2")
        XCTAssertEqual((paleotopography["source"] as? [String: Any])?["license"] as? String, "CC-BY-4.0")
        let terrainDelivery = try XCTUnwrap(paleotopography["delivery"] as? [String: Any])
        XCTAssertEqual(terrainDelivery["profile"] as? String, "native-full")
        XCTAssertEqual(terrainDelivery["resolutionDegrees"] as? Double, 0.1)
        XCTAssertEqual(terrainDelivery["gridBytes"] as? Int, 168_418_483)
        let terrainFrames = try XCTUnwrap(paleotopography["frames"] as? [[String: Any]])
        XCTAssertEqual(terrainFrames.count, 109)
        for (terrainIndex, terrainFrame) in terrainFrames.enumerated() {
            XCTAssertEqual(terrainFrame["archiveNominalAgeMa"] as? Int, terrainIndex * 5)
            XCTAssertEqual(terrainFrame["format"] as? String, "NETCDF4_CLASSIC")
            XCTAssertEqual((terrainFrame["memberSha256"] as? String)?.count, 64)
            let terrainGrid = try XCTUnwrap(terrainFrame["grid"] as? [String: Any])
            let sourceFullGrid = try XCTUnwrap(terrainFrame["sourceFullGrid"] as? [String: Any])
            XCTAssertEqual(terrainGrid["cellCount"] as? Int, 6_485_401)
            XCTAssertEqual(terrainGrid["width"] as? Int, 3_601)
            XCTAssertEqual(terrainGrid["height"] as? Int, 1_801)
            XCTAssertEqual(terrainGrid["resolutionDegrees"] as? Double, 0.1)
            XCTAssertEqual(terrainGrid["bytes"] as? Int, sourceFullGrid["bytes"] as? Int)
            XCTAssertEqual(terrainGrid["sha256"] as? String, sourceFullGrid["sha256"] as? String)
            XCTAssertEqual(terrainGrid["sourceSha256"] as? String, sourceFullGrid["decodedSha256"] as? String)
            let terrainGridPath = try XCTUnwrap(terrainGrid["url"] as? String)
            let terrainGridInventory = try XCTUnwrap(files.first { ($0["url"] as? String) == terrainGridPath }, "Full-resolution palaeotopography grid missing from native release inventory")
            XCTAssertEqual(terrainGrid["bytes"] as? Int, terrainGridInventory["bytes"] as? Int)
            XCTAssertEqual(terrainGrid["sha256"] as? String, terrainGridInventory["sha256"] as? String)
            try verifyBundled(record: terrainGridInventory, below: dataRoot)
        }

        let packageDescriptors = try XCTUnwrap((current["packages"] as? [String: Any])?["manifests"] as? [String: [String: Any]])
        XCTAssertEqual(packageDescriptors.count, 24)
        var researchExamples = 0
        var researchClaimLinks = 0
        var phylogenyPackages = 0
        var wormsNomenclatureRecords = 0
        var richItisNomenclatureRecords = 0
        var arthropodItisFiles = 0
        var arthropodItisNomenclatureRecords = 0
        var reptiliaItisFiles = 0
        var reptiliaItisNomenclatureRecords = 0
        var crocodyliaItisFiles = 0
        var crocodyliaItisNomenclatureRecords = 0
        var mammalItisFiles = 0
        var mammalItisNomenclatureRecords = 0
        var fishItisFiles = 0
        var fishItisNomenclatureRecords = 0
        var fishItisUpstreamRecords = 0
        var sarcopterygiiItisFiles = 0
        var sarcopterygiiItisNomenclatureRecords = 0
        var wfoRichRecords = 0
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
                XCTAssertEqual(collections.count, 2)
                let collection = try XCTUnwrap(collections.first { ($0["id"] as? String) == "worms-aphiaid-crosswalk" })
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
                richItisNomenclatureRecords += try verifyRichItisCollection(
                    collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "itis-echinodermata-tsn-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 2, expectedUpstreamFiles: 1,
                    expectedRecords: 11_891, expectedUpstreamRecords: 278, label: "ITIS Echinodermata")
            } else if packageId == "molluscs-brachiopods" || packageId == "sponges-cnidarians" {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, packageId == "molluscs-brachiopods" ? 2 : 3)
                if packageId == "molluscs-brachiopods" {
                    try verifyAuthorityArchiveCollection(
                        collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "worms-mollusca-archive-crosswalk" }),
                        inventory: files, below: dataRoot, expectedFiles: 56, expectedUpstreamFiles: 1,
                        expectedRecords: 154_718, expectedUpstreamRecords: 1_253, label: "WoRMS Mollusca")
                } else {
                    try verifyAuthorityArchiveCollection(
                        collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "worms-porifera-archive-crosswalk" }),
                        inventory: files, below: dataRoot, expectedFiles: 4, expectedUpstreamFiles: 1,
                        expectedRecords: 9_899, expectedUpstreamRecords: 60, label: "WoRMS Porifera")
                    try verifyAuthorityArchiveCollection(
                        collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "worms-cnidaria-archive-crosswalk" }),
                        inventory: files, below: dataRoot, expectedFiles: 8, expectedUpstreamFiles: 1,
                        expectedRecords: 20_622, expectedUpstreamRecords: 1_328, label: "WoRMS Cnidaria")
                }
                let isMolluscs = packageId == "molluscs-brachiopods"
                let collectionId = isMolluscs ? "itis-mollusca-brachiopoda-tsn-crosswalk" : "itis-porifera-cnidaria-tsn-crosswalk"
                richItisNomenclatureRecords += try verifyRichItisCollection(
                    collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == collectionId }),
                    inventory: files, below: dataRoot, expectedFiles: isMolluscs ? 59 : 5,
                    expectedUpstreamFiles: 1, expectedRecords: isMolluscs ? 159_801 : 30_521,
                    expectedUpstreamRecords: isMolluscs ? 4_289 : 2_218, label: "ITIS \(packageId)")
            } else if packageId == "crustaceans-insects" || packageId == "trilobites-chelicerates" {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                if packageId == "crustaceans-insects" {
                    XCTAssertEqual(collections.count, 6)
                    try verifyAuthorityArchiveCollection(
                        collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "osf-orthoptera-archive-crosswalk" }),
                        inventory: files, below: dataRoot, expectedFiles: 11, expectedUpstreamFiles: 1,
                        expectedRecords: 30_859, expectedUpstreamRecords: 53, label: "OSF Orthoptera")
                    try verifyAuthorityArchiveCollection(
                        collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "worms-crustacea-archive-crosswalk" }),
                        inventory: files, below: dataRoot, expectedFiles: 30, expectedUpstreamFiles: 3,
                        expectedRecords: 80_890, expectedUpstreamRecords: 8_675, label: "WoRMS Crustacea")
                }
                let expectedIds = packageId == "crustaceans-insects"
                    ? ["itis-insecta-tsn-crosswalk", "itis-crustacea-tsn-crosswalk", "itis-myriapoda-tsn-crosswalk", "itis-collembola-protura-tsn-crosswalk"]
                    : ["itis-chelicerata-tsn-crosswalk"]
                let expectedFiles = packageId == "crustaceans-insects" ? [99, 40, 3, 2] : [16]
                let expectedUpstreamFiles = packageId == "crustaceans-insects" ? [1, 1, 1, 1] : [1]
                let expectedRecords = packageId == "crustaceans-insects" ? [941_223, 80_890, 17_351, 9_668] : [99_511]
                let expectedUpstreamRecords = packageId == "crustaceans-insects" ? [27_357, 5_991, 544, 411] : [5_714]
                let expectedDescriptorShas = packageId == "crustaceans-insects"
                    ? [
                        "c168f706a7067fd6d95548777b6fe5cadf0c6b2b67b9442698d9350c521c2cdf",
                        "9fb4271dce81e92f2df706da26c379053e649f21416d81ec1d8db6bb2031490b",
                        "d2f836dc4b21afffb7fe1dbfcc9826556895a1fecff707ef514f69bc2053a296",
                        "bf90e217fa6871bb1e59807b721ed88403c47e9aa2712a782ef40146b906fdf2",
                    ]
                    : ["90383cc2bf44dc092b59c7ed131169317a0a613699aa6485c6f3e9b74decfa3c"]
                XCTAssertEqual(collections.count, expectedIds.count + (packageId == "crustaceans-insects" ? 2 : 0))
                for index in expectedIds.indices {
                    let collection = try XCTUnwrap(collections.first { ($0["id"] as? String) == expectedIds[index] }, "ITIS collection missing: \(expectedIds[index])")
                    XCTAssertEqual(collection["descriptorSha256"] as? String, expectedDescriptorShas[index])
                    let collectionRecords = try verifyRichItisCollection(
                        collection: collection, inventory: files, below: dataRoot,
                        expectedFiles: expectedFiles[index], expectedUpstreamFiles: expectedUpstreamFiles[index],
                        expectedRecords: expectedRecords[index], expectedUpstreamRecords: expectedUpstreamRecords[index],
                        label: "ITIS \(expectedIds[index])")
                    arthropodItisFiles += expectedFiles[index] + expectedUpstreamFiles[index]
                    arthropodItisNomenclatureRecords += collectionRecords + expectedUpstreamRecords[index]
                }
            } else if ["angiospermae", "gymnosperms", "early-land-plants"].contains(packageId) {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 1)
                let collection = try XCTUnwrap(collections.first)
                XCTAssertEqual(collection["id"] as? String, "wfo-plant-list-crosswalk")
                XCTAssertEqual(collection["provider"] as? String, "World Flora Online Plant List")
                XCTAssertEqual((collection["source"] as? [String: Any])?["license"] as? String, "CC0-1.0")
                let collectionFiles = try XCTUnwrap(collection["files"] as? [[String: Any]])
                var collectionRecords = 0
                for collectionFile in collectionFiles {
                    let path = try XCTUnwrap(collectionFile["url"] as? String)
                    let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "WFO rich-package shard missing from release inventory")
                    XCTAssertEqual(collectionFile["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(collectionFile["sha256"] as? String, inventoryRecord["sha256"] as? String)
                    try verifyBundled(record: inventoryRecord, below: dataRoot)
                    collectionRecords += try XCTUnwrap(collectionFile["records"] as? Int)
                }
                XCTAssertEqual((collection["counts"] as? [String: Any])?["total"] as? Int, collectionRecords)
                wfoRichRecords += collectionRecords
            } else if packageId == "amphibia" {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 1)
                let collection = try XCTUnwrap(collections.first)
                XCTAssertEqual(collection["id"] as? String, "itis-2026-08-26-tsn-crosswalk")
                XCTAssertEqual(collection["provider"] as? String, "Integrated Taxonomic Information System")
                let delivery = try XCTUnwrap(collection["delivery"] as? [String: Any])
                XCTAssertEqual(delivery["profile"] as? String, "native-full")
                XCTAssertEqual(delivery["completeRows"] as? Bool, true)
                let colFiles = try XCTUnwrap(collection["files"] as? [[String: Any]])
                let upstreamFiles = try XCTUnwrap(collection["upstreamOnlyFiles"] as? [[String: Any]])
                XCTAssertEqual(colFiles.count + upstreamFiles.count, 8)
                for file in colFiles + upstreamFiles {
                    let path = try XCTUnwrap(file["url"] as? String)
                    let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "ITIS Amphibia shard missing from native release inventory")
                    XCTAssertEqual(file["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(file["sha256"] as? String, inventoryRecord["sha256"] as? String)
                    try verifyBundled(record: inventoryRecord, below: dataRoot)
                }
                XCTAssertEqual((collection["counts"] as? [String: Any])?["total"] as? Int, 8_923)
                XCTAssertEqual((collection["counts"] as? [String: Any])?["itisUpstreamOnly"] as? Int, 8)
            } else if ["actinopterygii", "chondrichthyes", "early-fishes"].contains(packageId) {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 1)
                let collectionId = packageId == "actinopterygii"
                    ? "itis-actinopterygii-tsn-crosswalk"
                    : packageId == "chondrichthyes"
                    ? "itis-chondrichthyes-tsn-crosswalk"
                    : "itis-agnatha-myxini-tsn-crosswalk"
                let expectedFiles = packageId == "actinopterygii" ? 23 : 1
                let expectedRecords = packageId == "actinopterygii" ? 35_928 : packageId == "chondrichthyes" ? 1_359 : 141
                let expectedUpstreamRecords = packageId == "actinopterygii" ? 3_732 : packageId == "chondrichthyes" ? 183 : 17
                fishItisNomenclatureRecords += try verifyRichItisCollection(
                    collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == collectionId }),
                    inventory: files, below: dataRoot, expectedFiles: expectedFiles, expectedUpstreamFiles: 1,
                    expectedRecords: expectedRecords, expectedUpstreamRecords: expectedUpstreamRecords,
                    label: "ITIS \(collectionId)")
                fishItisFiles += expectedFiles + 1
                fishItisUpstreamRecords += expectedUpstreamRecords
            } else if packageId == "tetrapod-transition" {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 1)
                sarcopterygiiItisNomenclatureRecords += try verifyRichItisCollection(
                    collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "itis-sarcopterygii-tsn-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 1, expectedUpstreamFiles: 0,
                    expectedRecords: 8, expectedUpstreamRecords: 0, label: "ITIS Sarcopterygii")
                sarcopterygiiItisFiles += 1
            } else if ["perissodactyla", "cetartiodactyla", "primates", "carnivora", "other-mammals"].contains(packageId) {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 1)
                let expected: (id: String, files: Int, upstreamFiles: Int, records: Int, upstreamRecords: Int, descriptorSha: String)
                switch packageId {
                case "perissodactyla":
                    expected = ("itis-perissodactyla-tsn-crosswalk", 1, 0, 19, 0, "3c7d327c1941e11ff192b3b451d0fa5fb5728fad9236bd4064f99afcd83a73e2")
                case "cetartiodactyla":
                    expected = ("itis-cetartiodactyla-tsn-crosswalk", 1, 0, 503, 0, "f452207ad017e0b128470650dc4f71490cbe2a637279af6fd9f6785a5b99df8d")
                case "primates":
                    expected = ("itis-primates-tsn-crosswalk", 1, 0, 530, 0, "b8f921704919fae007f45bfdecde5fefcfeb0c004fcc6a69b9d35e399405cf36")
                case "carnivora":
                    expected = ("itis-carnivora-tsn-crosswalk", 1, 0, 310, 0, "983a47c1a148f9a6f200a06807ae04470a0b6506a47e1fd7c58457a7bc75431f")
                default:
                    expected = ("itis-other-mammals-tsn-crosswalk", 4, 1, 5_099, 3, "90e1ae6357c2f08fad63a6329b4a81d0770379738cd8d87acea11c11fc40131f")
                }
                let collection = try XCTUnwrap(collections.first { ($0["id"] as? String) == expected.id })
                XCTAssertEqual(collection["descriptorSha256"] as? String, expected.descriptorSha)
                let collectionRecords = try verifyRichItisCollection(
                    collection: collection, inventory: files, below: dataRoot,
                    expectedFiles: expected.files, expectedUpstreamFiles: expected.upstreamFiles,
                    expectedRecords: expected.records, expectedUpstreamRecords: expected.upstreamRecords,
                    label: "ITIS \(expected.id)")
                mammalItisFiles += expected.files + expected.upstreamFiles
                mammalItisNomenclatureRecords += collectionRecords + expected.upstreamRecords
            } else if packageId == "mammal-origins" {
                XCTAssertNil(package["nomenclatureCollections"], "mammal-origins must not publish an ITIS nomenclature collection")
            } else if packageId == "turtles-lepidosaurs" {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 1)
                richItisNomenclatureRecords += try verifyRichItisCollection(
                    collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "itis-reptilia-tsn-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 9, expectedUpstreamFiles: 1,
                    expectedRecords: 12_622, expectedUpstreamRecords: 655, label: "ITIS non-Crocodylia Reptilia")
                reptiliaItisFiles += 10
                reptiliaItisNomenclatureRecords += 13_277
            } else if packageId == "crocodylomorphs-birds" {
                let collections = try XCTUnwrap(package["nomenclatureCollections"] as? [[String: Any]])
                XCTAssertEqual(collections.count, 2)
                let avilist = try XCTUnwrap(collections.first { ($0["id"] as? String) == "avilist-v2025b-avibase-concepts" })
                XCTAssertEqual(avilist["provider"] as? String, "AviList Core Team")
                let delivery = try XCTUnwrap(avilist["delivery"] as? [String: Any])
                XCTAssertEqual(delivery["profile"] as? String, "native-full")
                XCTAssertEqual(delivery["completeRows"] as? Bool, true)
                let colFiles = try XCTUnwrap(avilist["files"] as? [[String: Any]])
                let upstreamFiles = try XCTUnwrap(avilist["upstreamOnlyFiles"] as? [[String: Any]])
                XCTAssertEqual(colFiles.count + upstreamFiles.count, 4)
                for file in colFiles + upstreamFiles {
                    let path = try XCTUnwrap(file["url"] as? String)
                    let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "AviList shard missing from native release inventory")
                    XCTAssertEqual(file["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(file["sha256"] as? String, inventoryRecord["sha256"] as? String)
                    try verifyBundled(record: inventoryRecord, below: dataRoot)
                }
                XCTAssertEqual((avilist["counts"] as? [String: Any])?["packageAcceptedSpecies"] as? Int, 11_071)
                XCTAssertEqual((avilist["counts"] as? [String: Any])?["upstreamOnly"] as? Int, 609)
                richItisNomenclatureRecords += try verifyRichItisCollection(
                    collection: try XCTUnwrap(collections.first { ($0["id"] as? String) == "itis-crocodylia-tsn-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 1, expectedUpstreamFiles: 0,
                    expectedRecords: 27, expectedUpstreamRecords: 0, label: "ITIS Crocodylia")
                crocodyliaItisFiles += 1
                crocodyliaItisNomenclatureRecords += 27
            } else {
                XCTAssertNil(package["nomenclatureCollections"], "Only declared authority-backed rich packages may carry nomenclature collections")
            }
        }
        XCTAssertEqual(researchExamples, 312)
        XCTAssertEqual(researchClaimLinks, 513)
        XCTAssertEqual(phylogenyPackages, 2)
        XCTAssertEqual(wormsNomenclatureRecords, 11_891)
        XCTAssertEqual(richItisNomenclatureRecords, 214_862)
        XCTAssertEqual(arthropodItisFiles, 165)
        XCTAssertEqual(arthropodItisNomenclatureRecords, 1_188_660)
        XCTAssertEqual(reptiliaItisFiles, 10)
        XCTAssertEqual(reptiliaItisNomenclatureRecords, 13_277)
        XCTAssertEqual(crocodyliaItisFiles, 1)
        XCTAssertEqual(crocodyliaItisNomenclatureRecords, 27)
        XCTAssertEqual(mammalItisFiles, 9)
        XCTAssertEqual(mammalItisNomenclatureRecords, 6_464)
        XCTAssertEqual(fishItisFiles, 28)
        XCTAssertEqual(fishItisNomenclatureRecords, 37_428)
        XCTAssertEqual(fishItisUpstreamRecords, 3_932)
        XCTAssertEqual(sarcopterygiiItisFiles, 1)
        XCTAssertEqual(sarcopterygiiItisNomenclatureRecords, 8)
        XCTAssertEqual(wfoRichRecords, 387_988)

        let catalogueDescriptor = try XCTUnwrap((current["catalogue"] as? [String: Any])?["manifest"] as? [String: Any])
        let cataloguePath = try XCTUnwrap(catalogueDescriptor["url"] as? String)
        let catalogue = try jsonObject(at: dataRoot.appendingPathComponent(cataloguePath))
        let resourcePacks = try XCTUnwrap(catalogue["resourcePacks"] as? [String: Any])
        XCTAssertEqual(resourcePacks["packageCount"] as? Int, 7)
        XCTAssertEqual(resourcePacks["acceptedSpeciesCount"] as? Int, 363_160)
        let packManifests = try XCTUnwrap(resourcePacks["manifests"] as? [String: [String: Any]])
        var resourcePackRecords = 0
        var lpsnIdentifierRecords = 0
        var indexFungorumIdentifierRecords = 0
        var foraminiferaAuthorityRecords = 0
        var otherAnimalsItisRecords = 0
        var protistsItisRecords = 0
        var ictvSpeciesRecords = 0
        var ictvIsolateRecords = 0
        var wfoSupplementRecords = 0
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
                XCTAssertEqual(extensions.count, packageId == "bacteria" ? 2 : 1)
                let lpsn = try XCTUnwrap(extensions.first { ($0["id"] as? String) == "lpsn-identifiers" })
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
                if packageId == "bacteria" {
                    let itis = try XCTUnwrap(extensions.first { ($0["id"] as? String) == "itis-bacteria-tsn-crosswalk" })
                    XCTAssertEqual((itis["source"] as? [String: Any])?["license"] as? String, "CC0-1.0")
                    XCTAssertEqual((itis["delivery"] as? [String: Any])?["profile"] as? String, "native-full")
                    XCTAssertEqual((itis["counts"] as? [String: Any])?["eligible"] as? Int, 4_827)
                    XCTAssertEqual((itis["counts"] as? [String: Any])?["upstreamOnly"] as? Int, 9_348)
                    let itisFiles = try XCTUnwrap(itis["files"] as? [[String: Any]])
                    XCTAssertEqual(itisFiles.count, 8)
                    var itisRecords = 0
                    for file in itisFiles {
                        let path = try XCTUnwrap(file["url"] as? String)
                        let record = try XCTUnwrap(files.first { ($0["url"] as? String) == path })
                        XCTAssertEqual(file["bytes"] as? Int, record["bytes"] as? Int)
                        XCTAssertEqual(file["sha256"] as? String, record["sha256"] as? String)
                        try verifyBundled(record: record, below: dataRoot)
                        itisRecords += try XCTUnwrap(file["records"] as? Int)
                    }
                    XCTAssertEqual(itisRecords, 14_175)
                }
            } else if packageId == "fungi" {
                let extensions = try XCTUnwrap(pack["extensions"] as? [[String: Any]])
                XCTAssertEqual(extensions.count, 2)
                let authority = try XCTUnwrap(extensions.first { ($0["id"] as? String) == "index-fungorum-identifiers" })
                XCTAssertEqual(authority["id"] as? String, "index-fungorum-identifiers")
                XCTAssertEqual(authority["provider"] as? String, "Species Fungorum / Index Fungorum")
                let counts = try XCTUnwrap(authority["counts"] as? [String: Any])
                XCTAssertEqual(counts["accepted"] as? Int, 157_044)
                XCTAssertEqual(counts["redirect"] as? Int, 0)
                XCTAssertEqual(counts["ambiguous"] as? Int, 0)
                XCTAssertEqual(counts["unmatched"] as? Int, 0)
                XCTAssertEqual(counts["withheld"] as? Int, 0)
                XCTAssertEqual(counts["upstreamOnly"] as? Int, 201)
                XCTAssertEqual(((authority["integration"] as? [String: Any])?["lookup"] as? [String: Any])?["strategy"] as? String, "lexicographic-colId-range-v1")
                let extensionFiles = try XCTUnwrap(authority["files"] as? [[String: Any]])
                XCTAssertEqual(extensionFiles.count, 6)
                var previousMax: String?
                for extensionFile in extensionFiles {
                    let minColId = try XCTUnwrap(extensionFile["minColId"] as? String)
                    let maxColId = try XCTUnwrap(extensionFile["maxColId"] as? String)
                    XCTAssertLessThanOrEqual(minColId, maxColId)
                    if let previousMax { XCTAssertLessThan(previousMax, minColId) }
                    previousMax = maxColId
                    let extensionPath = try XCTUnwrap(extensionFile["url"] as? String)
                    let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == extensionPath }, "Fungi authority shard missing from release inventory")
                    XCTAssertEqual(extensionFile["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(extensionFile["sha256"] as? String, inventoryRecord["sha256"] as? String)
                    try verifyBundled(record: inventoryRecord, below: dataRoot)
                    indexFungorumIdentifierRecords += try XCTUnwrap(extensionFile["records"] as? Int)
                }
                let itis = try XCTUnwrap(extensions.first { ($0["id"] as? String) == "itis-fungi-tsn-crosswalk" })
                XCTAssertEqual(itis["provider"] as? String, "Integrated Taxonomic Information System")
                XCTAssertEqual((itis["source"] as? [String: Any])?["rootTsn"] as? String, "555705")
                XCTAssertEqual((itis["counts"] as? [String: Any])?["records"] as? Int, 158_805)
                let itisDelivery = try XCTUnwrap(itis["delivery"] as? [String: Any])
                XCTAssertEqual(itisDelivery["profile"] as? String, "native-full")
                XCTAssertEqual(itisDelivery["completeRows"] as? Bool, true)
                XCTAssertEqual(itisDelivery["canonicalFileCount"] as? Int, 57)
                let itisFiles = try XCTUnwrap(itis["files"] as? [[String: Any]])
                XCTAssertEqual(itisFiles.count, 57)
                var itisRecords = 0
                for file in itisFiles {
                    itisRecords += try XCTUnwrap(file["records"] as? Int)
                    let path = try XCTUnwrap(file["url"] as? String)
                    let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "ITIS Fungi shard missing from native release inventory")
                    try verifyBundled(record: inventoryRecord, below: dataRoot)
                }
                XCTAssertEqual(itisRecords, 158_805)
            } else if packageId == "other-animals" {
                let extensions = try XCTUnwrap(pack["extensions"] as? [[String: Any]])
                XCTAssertEqual(extensions.count, 30)
                try verifyAuthorityArchiveCollection(
                    collection: try XCTUnwrap(extensions.first { ($0["id"] as? String) == "worms-annelida-archive-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 8, expectedUpstreamFiles: 1,
                    expectedRecords: 18_982, expectedUpstreamRecords: 1_090, label: "WoRMS Annelida")
                try verifyAuthorityArchiveCollection(
                    collection: try XCTUnwrap(extensions.first { ($0["id"] as? String) == "worms-nematoda-archive-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 8, expectedUpstreamFiles: 1,
                    expectedRecords: 19_604, expectedUpstreamRecords: 2_104, label: "WoRMS Nematoda")
                let expectedIds = [
                    "itis-platyhelminthes-tsn-crosswalk", "itis-rotifera-tsn-crosswalk", "itis-bryozoa-tsn-crosswalk",
                    "itis-nemertea-tsn-crosswalk", "itis-tunicata-cephalochordata-tsn-crosswalk", "itis-acanthocephala-tsn-crosswalk",
                    "itis-entoprocta-tsn-crosswalk", "itis-tardigrada-tsn-crosswalk", "itis-chaetognatha-tsn-crosswalk",
                    "itis-ctenophora-tsn-crosswalk", "itis-kinorhyncha-tsn-crosswalk", "itis-gastrotricha-tsn-crosswalk",
                    "itis-priapulida-tsn-crosswalk", "itis-onychophora-tsn-crosswalk", "itis-hemichordata-tsn-crosswalk",
                    "itis-sipuncula-tsn-crosswalk", "itis-nematomorpha-tsn-crosswalk", "itis-phoronida-tsn-crosswalk",
                    "itis-gnathostomulida-tsn-crosswalk", "itis-loricifera-tsn-crosswalk",
                    "itis-micrognathozoa-tsn-crosswalk", "itis-cycliophora-tsn-crosswalk", "itis-placozoa-tsn-crosswalk",
                    "itis-xenacoelomorpha-tsn-crosswalk", "itis-orthonectida-tsn-crosswalk", "itis-dicyemida-tsn-crosswalk",
                    "itis-nematoda-tsn-crosswalk", "itis-annelida-tsn-crosswalk",
                ]
                let expectedFiles = [15, 3, 3, 2, 2, 3, 2, 3, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 4, 4]
                let expectedRecords = [28_252, 2_662, 20_754, 1_416, 3_242, 1_330, 171, 1_461, 156, 204, 420, 997, 23, 235, 139, 205, 404, 19, 104, 46, 1, 2, 4, 499, 27, 128, 20_849, 24_074]
                for expectedIndex in expectedIds.indices {
                    let authority = try XCTUnwrap(extensions.first { ($0["id"] as? String) == expectedIds[expectedIndex] }, "ITIS other-animals authority missing")
                    XCTAssertEqual(authority["provider"] as? String, "Integrated Taxonomic Information System")
                    XCTAssertEqual((authority["source"] as? [String: Any])?["license"] as? String, "CC0-1.0")
                    let delivery = try XCTUnwrap(authority["delivery"] as? [String: Any])
                    XCTAssertEqual(delivery["profile"] as? String, "native-full")
                    XCTAssertEqual(delivery["completeRows"] as? Bool, true)
                    XCTAssertEqual(delivery["canonicalFileCount"] as? Int, expectedFiles[expectedIndex])
                    XCTAssertEqual(delivery["publishedFileCount"] as? Int, expectedFiles[expectedIndex])
                    let extensionFiles = try XCTUnwrap(authority["files"] as? [[String: Any]])
                    XCTAssertEqual(extensionFiles.count, expectedFiles[expectedIndex])
                    var extensionRecords = 0
                    for extensionFile in extensionFiles {
                        let path = try XCTUnwrap(extensionFile["url"] as? String)
                        let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "ITIS other-animals shard missing from native release inventory")
                        XCTAssertEqual(extensionFile["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                        XCTAssertEqual(extensionFile["sha256"] as? String, inventoryRecord["sha256"] as? String)
                        try verifyBundled(record: inventoryRecord, below: dataRoot)
                        extensionRecords += try XCTUnwrap(extensionFile["records"] as? Int)
                    }
                    XCTAssertEqual(extensionRecords, expectedRecords[expectedIndex])
                    otherAnimalsItisRecords += extensionRecords
                }
            } else if packageId == "protists-chromists" {
                let extensions = try XCTUnwrap(pack["extensions"] as? [[String: Any]])
                let authority = try XCTUnwrap(extensions.first { ($0["id"] as? String) == "foraminifera-wfd-identifiers" })
                XCTAssertEqual(authority["id"] as? String, "foraminifera-wfd-identifiers")
                XCTAssertEqual(authority["provider"] as? String, "World Foraminifera Database (WoRMS) through ChecklistBank")
                let delivery = try XCTUnwrap(authority["delivery"] as? [String: Any])
                XCTAssertEqual(delivery["profile"] as? String, "native-full")
                XCTAssertEqual(delivery["completeRows"] as? Bool, true)
                let extensionFiles = try XCTUnwrap(authority["files"] as? [[String: Any]])
                XCTAssertEqual(extensionFiles.count, 5)
                for extensionFile in extensionFiles {
                    let path = try XCTUnwrap(extensionFile["url"] as? String)
                    let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "Foraminifera authority shard missing from native release inventory")
                    XCTAssertEqual(extensionFile["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(extensionFile["sha256"] as? String, inventoryRecord["sha256"] as? String)
                    try verifyBundled(record: inventoryRecord, below: dataRoot)
                    foraminiferaAuthorityRecords += try XCTUnwrap(extensionFile["records"] as? Int)
                }
                try verifyAuthorityArchiveCollection(
                    collection: try XCTUnwrap(extensions.first { ($0["id"] as? String) == "worms-radiozoa-archive-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 1, expectedUpstreamFiles: 1,
                    expectedRecords: 444, expectedUpstreamRecords: 54, label: "WoRMS Radiozoa")
                try verifyAuthorityArchiveCollection(
                    collection: try XCTUnwrap(extensions.first { ($0["id"] as? String) == "trichomycetes-archive-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 1, expectedUpstreamFiles: 0,
                    expectedRecords: 96, expectedUpstreamRecords: 0, label: "Trichomycetes source1033")
                try verifyAuthorityArchiveCollection(
                    collection: try XCTUnwrap(extensions.first { ($0["id"] as? String) == "cilcat-1113-archive-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 1, expectedUpstreamFiles: 1,
                    expectedRecords: 8505, expectedUpstreamRecords: 27, label: "CilCat")
                try verifyAuthorityArchiveCollection(
                    collection: try XCTUnwrap(extensions.first { ($0["id"] as? String) == "eumycetozoa-archive-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 1, expectedUpstreamFiles: 0,
                    expectedRecords: 1337, expectedUpstreamRecords: 0, label: "Eumycetozoa")
                try verifyAuthorityArchiveCollection(
                    collection: try XCTUnwrap(extensions.first { ($0["id"] as? String) == "gymnodinium-archive-crosswalk" }),
                    inventory: files, below: dataRoot, expectedFiles: 1, expectedUpstreamFiles: 1,
                    expectedRecords: 259, expectedUpstreamRecords: 0, expectedLicense: "CC0-1.0", label: "Gymnodinium")
                let expectedIds = [
                    "itis-ciliophora-tsn-crosswalk", "itis-apicomplexa-tsn-crosswalk", "itis-dinoflagellata-tsn-crosswalk",
                    "itis-euglenozoa-tsn-crosswalk", "itis-cercozoa-tsn-crosswalk", "itis-haptophyta-tsn-crosswalk",
                    "itis-ochrophyta-tsn-crosswalk", "itis-amoebozoa-tsn-crosswalk", "itis-rhodophyta-tsn-crosswalk",
                    "itis-oomycota-tsn-crosswalk", "itis-cryptophyta-tsn-crosswalk", "itis-choanoflagellatea-tsn-crosswalk",
                    "itis-bigyra-tsn-crosswalk", "itis-perkinsozoa-tsn-crosswalk", "itis-labyrinthulomycetes-tsn-crosswalk",
                    "itis-opalozoa-tsn-crosswalk", "itis-radiolaria-tsn-crosswalk", "itis-metamonada-tsn-crosswalk",
                    "itis-chlorophyta-tsn-crosswalk", "itis-glaucophyta-tsn-crosswalk", "itis-picozoa-tsn-crosswalk",
                    "itis-telonemia-tsn-crosswalk",
                    "itis-centrohelida-tsn-crosswalk", "itis-katablepharidota-tsn-crosswalk",
                    "itis-hemimastigophora-tsn-crosswalk",
                ]
                let expectedFiles = [4, 1, 2, 1, 1, 1, 2, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
                let expectedRecords = [8_665, 21, 1_110, 276, 52, 90, 3_399, 1_337, 1_616, 1_536, 0, 0, 53, 0, 0, 0, 0, 0, 1_416, 4, 0, 0, 0, 0, 0]
                let itisAuthorities = extensions.filter { ($0["provider"] as? String) == "Integrated Taxonomic Information System" }
                XCTAssertEqual(extensions.count, expectedIds.count + 6)
                XCTAssertEqual(itisAuthorities.count, expectedIds.count)
                for extensionIndex in expectedIds.indices {
                    let itisAuthority = try XCTUnwrap(itisAuthorities.first { ($0["id"] as? String) == expectedIds[extensionIndex] }, "ITIS protists/chromists authority missing")
                    XCTAssertEqual((itisAuthority["source"] as? [String: Any])?["license"] as? String, "CC0-1.0")
                    let itisDelivery = try XCTUnwrap(itisAuthority["delivery"] as? [String: Any])
                    XCTAssertEqual(itisDelivery["profile"] as? String, "native-full")
                    XCTAssertEqual(itisDelivery["completeRows"] as? Bool, true)
                    XCTAssertEqual(itisDelivery["canonicalFileCount"] as? Int, expectedFiles[extensionIndex])
                    let itisFiles = try XCTUnwrap(itisAuthority["files"] as? [[String: Any]])
                    XCTAssertEqual(itisFiles.count, expectedFiles[extensionIndex])
                    var authorityRecords = 0
                    for itisFile in itisFiles {
                        let path = try XCTUnwrap(itisFile["url"] as? String)
                        let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "ITIS protists/chromists shard missing from native release inventory")
                        XCTAssertEqual(itisFile["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                        XCTAssertEqual(itisFile["sha256"] as? String, inventoryRecord["sha256"] as? String)
                        try verifyBundled(record: inventoryRecord, below: dataRoot)
                        authorityRecords += try XCTUnwrap(itisFile["records"] as? Int)
                    }
                    XCTAssertEqual(authorityRecords, expectedRecords[extensionIndex])
                    protistsItisRecords += authorityRecords
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
            } else if packageId == "other-plants" {
                let extensions = try XCTUnwrap(pack["extensions"] as? [[String: Any]])
                XCTAssertEqual(extensions.count, 1)
                let wfo = try XCTUnwrap(extensions.first)
                XCTAssertEqual(wfo["id"] as? String, "wfo-plant-list-crosswalk")
                XCTAssertEqual(wfo["provider"] as? String, "World Flora Online Plant List")
                let counts = try XCTUnwrap(wfo["counts"] as? [String: Any])
                XCTAssertEqual(counts["packageColRecords"] as? Int, 698)
                XCTAssertEqual(counts["upstreamOnly"] as? Int, 60_751)
                XCTAssertEqual(counts["records"] as? Int, 61_449)
                let extensionFiles = try XCTUnwrap(wfo["files"] as? [[String: Any]])
                for extensionFile in extensionFiles {
                    let path = try XCTUnwrap(extensionFile["url"] as? String)
                    let inventoryRecord = try XCTUnwrap(files.first { ($0["url"] as? String) == path }, "WFO supplement shard missing from release inventory")
                    XCTAssertEqual(extensionFile["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
                    XCTAssertEqual(extensionFile["sha256"] as? String, inventoryRecord["sha256"] as? String)
                    try verifyBundled(record: inventoryRecord, below: dataRoot)
                    wfoSupplementRecords += try XCTUnwrap(extensionFile["records"] as? Int)
                }
            } else {
                XCTAssertNil(pack["extensions"], "Only Archaea, Bacteria, Fungi, Viruses and Other Plants may carry resource-pack extensions")
            }
            resourcePackRecords += packageRecords
        }
        XCTAssertEqual(resourcePackRecords, 363_160)
        XCTAssertEqual(lpsnIdentifierRecords, 22_360)
        XCTAssertEqual(indexFungorumIdentifierRecords, 157_044)
        XCTAssertEqual(foraminiferaAuthorityRecords, 47_975)
        XCTAssertEqual(otherAnimalsItisRecords, 107_824)
        XCTAssertEqual(protistsItisRecords, 19_575)
        XCTAssertEqual(ictvSpeciesRecords, 17_554)
        XCTAssertEqual(ictvIsolateRecords, 19_285)
        XCTAssertEqual(wfoSupplementRecords, 61_449)
    }

    private func verifyRichItisCollection(collection: [String: Any], inventory: [[String: Any]], below dataRoot: URL,
                                          expectedFiles: Int, expectedUpstreamFiles: Int,
                                          expectedRecords: Int, expectedUpstreamRecords: Int,
                                          label: String) throws -> Int {
        XCTAssertEqual(collection["provider"] as? String, "Integrated Taxonomic Information System")
        XCTAssertEqual((collection["source"] as? [String: Any])?["license"] as? String, "CC0-1.0")
        let delivery = try XCTUnwrap(collection["delivery"] as? [String: Any])
        XCTAssertEqual(delivery["profile"] as? String, "native-full")
        XCTAssertEqual(delivery["completeRows"] as? Bool, true)
        XCTAssertEqual(delivery["publishedFileCount"] as? Int, expectedFiles + expectedUpstreamFiles)
        XCTAssertEqual(delivery["canonicalFileCount"] as? Int, expectedFiles + expectedUpstreamFiles)
        let counts = try XCTUnwrap(collection["counts"] as? [String: Any])
        XCTAssertEqual(counts["total"] as? Int, expectedRecords)
        XCTAssertEqual(counts["itisUpstreamOnly"] as? Int, expectedUpstreamRecords)
        let files = try XCTUnwrap(collection["files"] as? [[String: Any]])
        let upstreamFiles = try XCTUnwrap(collection["upstreamOnlyFiles"] as? [[String: Any]])
        XCTAssertEqual(files.count, expectedFiles, "\(label) canonical shard count")
        XCTAssertEqual(upstreamFiles.count, expectedUpstreamFiles, "\(label) upstream shard count")
        let canonicalInventory = try XCTUnwrap(collection["canonicalFileInventory"] as? [[String: Any]])
        XCTAssertEqual(canonicalInventory.count, expectedFiles + expectedUpstreamFiles)
        var records = 0
        for file in files + upstreamFiles {
            let path = try XCTUnwrap(file["url"] as? String)
            let inventoryRecord = try XCTUnwrap(inventory.first { ($0["url"] as? String) == path }, "\(label) shard missing from release inventory")
            XCTAssertEqual(file["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
            XCTAssertEqual(file["sha256"] as? String, inventoryRecord["sha256"] as? String)
            try verifyBundled(record: inventoryRecord, below: dataRoot)
            records += try XCTUnwrap(file["records"] as? Int)
        }
        XCTAssertEqual(records, expectedRecords + expectedUpstreamRecords, "\(label) shard records")
        let runtimeFiles = files + upstreamFiles
        for canonical in canonicalInventory {
            let canonicalPath = try XCTUnwrap(canonical["path"] as? String)
            let canonicalName = String(canonicalPath.split(separator: "/").last ?? "")
            let runtime = try XCTUnwrap(runtimeFiles.first { file in
                guard let path = file["url"] as? String else { return false }
                return path.split(separator: "/").last.map(String.init) == canonicalName
            }, "\(label) canonical shard inventory mismatch")
            XCTAssertEqual(canonical["records"] as? Int, runtime["records"] as? Int)
            XCTAssertEqual(canonical["bytes"] as? Int, runtime["bytes"] as? Int)
            XCTAssertEqual(canonical["sha256"] as? String, runtime["sha256"] as? String)
        }
        return expectedRecords
    }

    private func verifyAuthorityArchiveCollection(collection: [String: Any], inventory: [[String: Any]], below dataRoot: URL,
                                                  expectedFiles: Int, expectedUpstreamFiles: Int,
                                                  expectedRecords: Int, expectedUpstreamRecords: Int,
                                                  expectedLicense: String = "CC-BY-4.0",
                                                  label: String) throws {
        XCTAssertEqual(collection["recordType"] as? String, "release-pinned-authority-archive-crosswalk")
        XCTAssertEqual((collection["source"] as? [String: Any])?["license"] as? String, expectedLicense)
        let delivery = try XCTUnwrap(collection["delivery"] as? [String: Any])
        XCTAssertEqual(delivery["profile"] as? String, "native-full")
        XCTAssertEqual(delivery["completeRows"] as? Bool, true)
        XCTAssertEqual(delivery["publishedFileCount"] as? Int, expectedFiles + expectedUpstreamFiles)
        XCTAssertEqual(delivery["canonicalFileCount"] as? Int, expectedFiles + expectedUpstreamFiles)
        let counts = try XCTUnwrap(collection["counts"] as? [String: Any])
        XCTAssertEqual(counts["total"] as? Int, expectedRecords)
        XCTAssertEqual(counts["upstreamOnly"] as? Int, expectedUpstreamRecords)
        let files = try XCTUnwrap(collection["files"] as? [[String: Any]])
        let upstreamFiles = try XCTUnwrap(collection["upstreamOnlyFiles"] as? [[String: Any]])
        XCTAssertEqual(files.count, expectedFiles)
        XCTAssertEqual(upstreamFiles.count, expectedUpstreamFiles)
        let canonicalInventory = try XCTUnwrap(collection["canonicalFileInventory"] as? [[String: Any]])
        XCTAssertEqual(canonicalInventory.count, expectedFiles + expectedUpstreamFiles)
        var records = 0
        for file in files + upstreamFiles {
            let path = try XCTUnwrap(file["url"] as? String)
            let inventoryRecord = try XCTUnwrap(inventory.first { ($0["url"] as? String) == path }, "\(label) shard missing from release inventory")
            XCTAssertEqual(file["bytes"] as? Int, inventoryRecord["bytes"] as? Int)
            XCTAssertEqual(file["sha256"] as? String, inventoryRecord["sha256"] as? String)
            try verifyBundled(record: inventoryRecord, below: dataRoot)
            records += try XCTUnwrap(file["records"] as? Int)
        }
        XCTAssertEqual(records, expectedRecords + expectedUpstreamRecords, "\(label) shard records")
        for canonical in canonicalInventory {
            let canonicalPath = try XCTUnwrap(canonical["path"] as? String)
            let canonicalName = String(canonicalPath.split(separator: "/").last ?? "")
            let runtime = try XCTUnwrap((files + upstreamFiles).first { file in
                guard let path = file["url"] as? String else { return false }
                return path.split(separator: "/").last.map(String.init) == canonicalName
            }, "\(label) canonical shard inventory mismatch")
            XCTAssertEqual(canonical["records"] as? Int, runtime["records"] as? Int)
            XCTAssertEqual(canonical["bytes"] as? Int, runtime["bytes"] as? Int)
            XCTAssertEqual(canonical["sha256"] as? String, runtime["sha256"] as? String)
        }
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

    @MainActor
    private func findWebView(in view: UIView) -> WKWebView? {
        if let webView = view as? WKWebView { return webView }
        for subview in view.subviews {
            if let webView = findWebView(in: subview) { return webView }
        }
        return nil
    }

    @MainActor
    private func evaluateAsync(_ script: String, in webView: WKWebView) async throws -> Any? {
        try await webView.callAsyncJavaScript(
            script,
            arguments: [:],
            in: nil,
            contentWorld: .page
        )
    }
}
