package io.github.dajiaohuang.evoatlas;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import android.app.Activity;
import android.content.Intent;
import android.view.View;
import android.webkit.WebView;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import org.json.JSONObject;
import org.json.JSONTokener;
import org.junit.Test;
import org.junit.runner.RunWith;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.atomic.AtomicBoolean;

@RunWith(AndroidJUnit4.class)
public class AppWebViewRuntimeTest {
    @Test
    public void capacitorWebViewServesBundledApplicationData() throws Exception {
        Activity activity = InstrumentationRegistry.getInstrumentation().startActivitySync(
                new Intent(InstrumentationRegistry.getInstrumentation().getTargetContext(), MainActivity.class)
                        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK));
        AtomicReference<WebView> activeWebView = new AtomicReference<>();
        AtomicReference<Runnable> activePageReadyPoll = new AtomicReference<>();
        AtomicReference<Runnable> activeResultPoll = new AtomicReference<>();
        AtomicBoolean cancelled = new AtomicBoolean(false);
        try {
            AtomicReference<WebView> webViewReference = new AtomicReference<>();
            InstrumentationRegistry.getInstrumentation().runOnMainSync(() ->
                    webViewReference.set(findWebView(activity.getWindow().getDecorView())));
            WebView webView = webViewReference.get();
            assertNotNull("MainActivity must render a WebView", webView);
            activeWebView.set(webView);
            CountDownLatch completed = new CountDownLatch(1);
            AtomicReference<String> callback = new AtomicReference<>();
            Runnable resultPoll = new Runnable() {
                @Override public void run() {
                    if (cancelled.get()) return;
                    webView.evaluateJavascript(
                            "typeof window.__nativeRuntimeSmoke === 'undefined' || window.__nativeRuntimeSmoke === null ? null : JSON.stringify(window.__nativeRuntimeSmoke)",
                            value -> { if (!"null".equals(value)) { callback.set(value); completed.countDown(); } else if (!cancelled.get()) webView.postDelayed(this, 200); });
                }
            };
            activeResultPoll.set(resultPoll);
            Runnable pageReadyPoll = new Runnable() {
                @Override public void run() {
                    if (cancelled.get()) return;
                    webView.evaluateJavascript(
                            "location.href !== 'about:blank' && document.readyState === 'complete' && document.querySelector('#root')?.children.length > 0 ? 'ready' : 'wait'",
                            value -> { if ("\"ready\"".equals(value)) webView.evaluateJavascript(
                                    "window.__nativeRuntimeSmoke = null; (async function () {"
                            + "const read = async (path) => { const response = await fetch('/data/' + path.replace(/^\\/+/, '')); if (!response.ok) throw new Error(path + ': ' + response.status); return response.json(); };"
                            + "const bytes = async (path) => { const response = await fetch('/data/' + path.replace(/^\\/+/, '')); if (!response.ok) throw new Error(path + ': ' + response.status); return (await response.arrayBuffer()).byteLength; };"
                            + "const current = await read('current.json'); const packageId = Object.keys(current.packages.manifests)[0];"
                            + "const packageManifest = await read(current.packages.manifests[packageId].url); const maps = await read(current.maps.manifest.url); const catalogue = await read(current.catalogue.manifest.url);"
                            + "const payload = Object.values(packageManifest.files).find(file => file.encoding === 'gzip'); const payloadBytes = payload ? await bytes(payload.url) : 0;"
                            + "window.__nativeRuntimeSmoke = {ready: document.readyState, appRoot: !!document.querySelector('#root'), profile: current.deliveryProfile, datasetVersion: current.datasetVersion, packageId: packageManifest.packageId, packageFiles: Object.keys(packageManifest.files).length, payloadBytes: payloadBytes, observations: maps.observations.totalRecords, catalogueAlias: catalogue.releaseAlias};"
                            + "})().catch(error => { window.__nativeRuntimeSmoke = {error: String(error)}; });",
                                    ignored -> webView.post(resultPoll));
                                else if (!cancelled.get()) webView.postDelayed(this, 200); });
                }
            };
            activePageReadyPoll.set(pageReadyPoll);
            webView.post(pageReadyPoll);
            assertTrue("WebView data fetch timed out", completed.await(45, TimeUnit.SECONDS));
            Object decoded = new JSONTokener(callback.get()).nextValue();
            assertTrue("WebView JavaScript result must be a JSON string", decoded instanceof String);
            JSONObject result = new JSONObject((String) decoded);
            assertTrue(result.optString("error"), !result.has("error"));
            assertEquals("complete", result.getString("ready"));
            assertTrue("Capacitor app root must render", result.getBoolean("appRoot"));
            assertEquals("native-full", result.getString("profile"));
            assertTrue("dataset version must be present", !result.getString("datasetVersion").isEmpty());
            assertTrue("package manifest must identify its package", !result.getString("packageId").isEmpty());
            assertTrue("package manifest must contain runtime files", result.getInt("packageFiles") > 0);
            assertTrue("a bundled gzip payload must be fetchable", result.getInt("payloadBytes") > 0);
            assertTrue("map observations must be present", result.getInt("observations") > 0);
            assertTrue("catalogue release alias must be present", !result.getString("catalogueAlias").isEmpty());
        } finally {
            InstrumentationRegistry.getInstrumentation().runOnMainSync(() -> {
                cancelled.set(true);
                WebView webView = activeWebView.get();
                if (webView != null) {
                    webView.removeCallbacks(activePageReadyPoll.get());
                    webView.removeCallbacks(activeResultPoll.get());
                }
                activity.finish();
            });
        }
    }

    private WebView findWebView(View view) {
        if (view instanceof WebView) return (WebView) view;
        if (view instanceof android.view.ViewGroup) {
            android.view.ViewGroup group = (android.view.ViewGroup) view;
            for (int index = 0; index < group.getChildCount(); index += 1) {
                WebView result = findWebView(group.getChildAt(index));
                if (result != null) return result;
            }
        }
        return null;
    }
}
