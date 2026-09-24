import UIKit
import XCTest
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
    func testCapacitorWebViewRendersAndReadsNativeCoreData() async throws {
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

        let probe = try await evaluateAsync("""
        const response = await fetch('./data/current.json', { cache: 'no-store' });
        if (!response.ok) throw new Error('./data/current.json: HTTP ' + response.status);
        const current = await response.json();
        const paths = [
          './data/' + current.core.packages.url,
          './data/' + current.catalogue.manifest.url,
          './data/' + current.maps.manifest.url
        ];
        const files = await Promise.all(paths.map(async path => {
          const file = await fetch(path, { cache: 'no-store' });
          if (!file.ok) throw new Error(path + ': HTTP ' + file.status);
          return { path, bytes: (await file.arrayBuffer()).byteLength };
        }));
        const maps = await (await fetch('./data/' + current.maps.manifest.url)).json();
        return {
          edition: current.edition,
          deliveryProfile: current.deliveryProfile,
          packageIds: current.previewScope.packageIds,
          catalogueScope: current.previewScope.catalogue,
          downloadsAvailable: current.downloads.available,
          mapProfile: maps.paleotopography.delivery.profile,
          mapResolutionDegrees: maps.paleotopography.delivery.resolutionDegrees,
          files
        };
        """, in: webView)
        let state = try XCTUnwrap(probe as? [String: Any], "Native core data probe returned an unexpected result")
        XCTAssertEqual(state["edition"] as? String, "native-core")
        XCTAssertEqual(state["deliveryProfile"] as? String, "web-light")
        XCTAssertEqual(state["catalogueScope"] as? String, "omitted")
        XCTAssertEqual(state["downloadsAvailable"] as? Bool, false)
        let packageIds = try XCTUnwrap(state["packageIds"] as? [String])
        XCTAssertEqual(packageIds, ["atlas-core", "primates", "perissodactyla", "cetartiodactyla", "dinosauria"])
        XCTAssertEqual(state["mapProfile"] as? String, "web-preview")
        XCTAssertEqual(state["mapResolutionDegrees"] as? Double, 0.3)
        let files = try XCTUnwrap(state["files"] as? [[String: Any]])
        XCTAssertEqual(files.count, 3)
        for file in files {
            XCTAssertGreaterThan(file["bytes"] as? Int ?? 0, 0, "Empty core payload: \(file["path"] as? String ?? "unknown")")
        }
    }

    func testOfflineSqlRuntimeIsExcludedFromCoreOnlyApp() throws {
        let root = try XCTUnwrap(Bundle.main.resourceURL).appendingPathComponent("public", isDirectory: true)
        XCTAssertFalse(FileManager.default.fileExists(atPath: root.appendingPathComponent("native-runtime-manifest.json").path))
        XCTAssertFalse(FileManager.default.fileExists(atPath: root.appendingPathComponent("sql", isDirectory: true).path))
    }

    func testCurrentManifestDeclaresOnlySelectedCoreScope() throws {
        let dataRoot = try XCTUnwrap(Bundle.main.resourceURL).appendingPathComponent("public/data", isDirectory: true)
        let current = try jsonObject(at: dataRoot.appendingPathComponent("current.json"))
        XCTAssertEqual(current["edition"] as? String, "native-core")
        XCTAssertEqual(current["deliveryProfile"] as? String, "web-light")
        let scope = try XCTUnwrap(current["previewScope"] as? [String: Any])
        XCTAssertEqual(scope["catalogue"] as? String, "omitted")
        XCTAssertEqual(scope["packageIds"] as? [String], ["atlas-core", "primates", "perissodactyla", "cetartiodactyla", "dinosauria"])
        let downloads = try XCTUnwrap(current["downloads"] as? [String: Any])
        XCTAssertEqual(downloads["available"] as? Bool, false)

        let maps = try XCTUnwrap(current["maps"] as? [String: Any])
        let manifestPath = try XCTUnwrap((maps["manifest"] as? [String: Any])?["url"] as? String)
        let mapManifest = try jsonObject(at: dataRoot.appendingPathComponent(manifestPath))
        let paleo = try XCTUnwrap(mapManifest["paleotopography"] as? [String: Any])
        let delivery = try XCTUnwrap(paleo["delivery"] as? [String: Any])
        XCTAssertEqual(delivery["profile"] as? String, "web-preview")
        XCTAssertEqual(delivery["resolutionDegrees"] as? Double, 0.3)
        XCTAssertEqual(delivery["fullResolutionAvailableInNativeApps"] as? Bool, false)
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
