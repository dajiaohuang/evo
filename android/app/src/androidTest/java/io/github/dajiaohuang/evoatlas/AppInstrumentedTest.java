package io.github.dajiaohuang.evoatlas;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

@RunWith(AndroidJUnit4.class)
public class AppInstrumentedTest {

    @Test
    public void applicationIdentityMatchesNativeShell() {
        Context context = InstrumentationRegistry.getInstrumentation().getTargetContext();

        assertEquals("io.github.dajiaohuang.evoatlas", context.getPackageName());
        assertEquals("Evo Atlas", context.getString(R.string.app_name));
        Intent launchIntent = context.getPackageManager().getLaunchIntentForPackage(context.getPackageName());
        assertNotNull(launchIntent);
        assertNotNull(launchIntent.getComponent());
        assertEquals(MainActivity.class.getName(), launchIntent.getComponent().getClassName());
    }

    @Test
    public void evoAtlasDeepLinkResolvesToMainActivity() {
        Context context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("evoatlas://open/home"));
        ResolveInfo resolved = context.getPackageManager().resolveActivity(intent, 0);

        assertNotNull(resolved);
        assertEquals(context.getPackageName(), resolved.activityInfo.packageName);
        assertEquals(MainActivity.class.getName(), resolved.activityInfo.name);
    }

    @Test
    public void completeScientificReleaseIsBundledForOfflineStartup() throws Exception {
        Context context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        JSONObject current = readJsonAsset(context, "public/data/current.json");
        String datasetVersion = current.getString("datasetVersion");
        assertEquals("releases/" + datasetVersion + "/", current.getString("releaseBase"));

        String filesIndexPath = "public/data/releases/" + datasetVersion + "/release-files.json";
        JSONObject filesIndex = readJsonAsset(context, filesIndexPath);
        assertEquals(datasetVersion, filesIndex.getString("datasetVersion"));
        JSONArray files = filesIndex.getJSONArray("files");
        assertTrue("full interactive inventory", files.length() > 3700);

        String[] requiredAreas = {"/core/", "/packages/", "/occurrences/", "/maps/", "/catalogue/"};
        for (String area : requiredAreas) {
            JSONObject sample = null;
            for (int index = 0; index < files.length(); index += 1) {
                JSONObject candidateRecord = files.getJSONObject(index);
                String candidate = candidateRecord.getString("url");
                if (!candidate.contains("/downloads/") && candidate.contains(area)) {
                    sample = candidateRecord;
                    break;
                }
            }
            assertNotNull("missing bundled inventory area " + area, sample);
            String path = sample.getString("url");
            try (InputStream stream = context.getAssets().open("public/data/" + path)) {
                MessageDigest digest = MessageDigest.getInstance("SHA-256");
                byte[] buffer = new byte[8192];
                int read;
                int total = 0;
                while ((read = stream.read(buffer)) != -1) {
                    digest.update(buffer, 0, read);
                    total += read;
                }
                assertEquals("bundled byte count " + path, sample.getInt("bytes"), total);
                assertEquals("bundled checksum " + path, sample.getString("sha256"), hex(digest.digest()));
            }
        }
    }

    private JSONObject readJsonAsset(Context context, String path) throws Exception {
        try (InputStream stream = context.getAssets().open(path)) {
            ByteArrayOutputStream output = new ByteArrayOutputStream();
            byte[] buffer = new byte[8192];
            int read;
            while ((read = stream.read(buffer)) != -1) output.write(buffer, 0, read);
            return new JSONObject(output.toString(StandardCharsets.UTF_8.name()));
        }
    }

    private String hex(byte[] bytes) {
        StringBuilder output = new StringBuilder(bytes.length * 2);
        for (byte value : bytes) output.append(String.format("%02x", value & 0xff));
        return output.toString();
    }
}
