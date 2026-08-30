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
            verifyAssetRecord(context, sample);
        }

        JSONObject mapsDescriptor = current.getJSONObject("maps").getJSONObject("manifest");
        JSONObject maps = readJsonAsset(context, "public/data/" + mapsDescriptor.getString("url"));
        JSONObject observations = maps.getJSONObject("observations");
        assertEquals(44175, observations.getInt("totalRecords"));
        assertEquals(41320, observations.getInt("reconstructedRecords"));
        JSONObject datasets = observations.getJSONObject("datasets");
        assertEquals(5, datasets.length());
        int observationFiles = 0;
        for (String datasetId : new String[]{"paleomagnetic-poles", "geochemistry", "metamorphic-gradient-orogen", "metamorphic-gradient-rift", "metamorphic-gradient-subduction-zone"}) {
            JSONArray datasetFiles = datasets.getJSONObject(datasetId).getJSONArray("files");
            for (int fileIndex = 0; fileIndex < datasetFiles.length(); fileIndex += 1) {
                JSONObject descriptor = datasetFiles.getJSONObject(fileIndex);
                JSONObject inventoryRecord = null;
                for (int index = 0; index < files.length(); index += 1) {
                    if (files.getJSONObject(index).getString("url").equals(descriptor.getString("url"))) {
                        inventoryRecord = files.getJSONObject(index);
                        break;
                    }
                }
                assertNotNull("observation shard missing from release inventory", inventoryRecord);
                assertEquals(descriptor.getInt("bytes"), inventoryRecord.getInt("bytes"));
                assertEquals(descriptor.getString("sha256"), inventoryRecord.getString("sha256"));
                verifyAssetRecord(context, inventoryRecord);
                observationFiles += 1;
            }
        }
        assertEquals(20, observationFiles);

        JSONObject catalogueDescriptor = current.getJSONObject("catalogue").getJSONObject("manifest");
        JSONObject catalogue = readJsonAsset(context, "public/data/" + catalogueDescriptor.getString("url"));
        JSONObject resourcePacks = catalogue.getJSONObject("resourcePacks");
        assertEquals(7, resourcePacks.getInt("packageCount"));
        assertEquals(363160, resourcePacks.getInt("acceptedSpeciesCount"));
        JSONObject packManifests = resourcePacks.getJSONObject("manifests");
        int resourcePackRecords = 0;
        for (String packageId : new String[]{"archaea", "bacteria", "fungi", "other-animals", "other-plants", "protists-chromists", "viruses"}) {
            JSONObject manifestDescriptor = packManifests.getJSONObject(packageId);
            JSONObject inventoryRecord = findInventoryRecord(files, manifestDescriptor.getString("url"));
            assertNotNull("resource-pack manifest missing from release inventory", inventoryRecord);
            verifyAssetRecord(context, inventoryRecord);
            JSONObject pack = readJsonAsset(context, "public/data/" + manifestDescriptor.getString("url"));
            assertEquals(packageId, pack.getString("packageId"));
            assertEquals(datasetVersion, pack.getString("version"));
            JSONArray shards = pack.getJSONArray("files");
            int packageRecords = 0;
            for (int shardIndex = 0; shardIndex < shards.length(); shardIndex += 1) {
                JSONObject shard = shards.getJSONObject(shardIndex);
                JSONObject shardInventoryRecord = findInventoryRecord(files, shard.getString("url"));
                assertNotNull("resource-pack shard missing from release inventory", shardInventoryRecord);
                assertEquals(shard.getInt("bytes"), shardInventoryRecord.getInt("bytes"));
                assertEquals(shard.getString("sha256"), shardInventoryRecord.getString("sha256"));
                verifyAssetRecord(context, shardInventoryRecord);
                packageRecords += shard.getInt("records");
            }
            assertEquals(pack.getInt("acceptedSpeciesCount"), packageRecords);
            resourcePackRecords += packageRecords;
        }
        assertEquals(363160, resourcePackRecords);
    }

    private JSONObject findInventoryRecord(JSONArray files, String url) throws Exception {
        for (int index = 0; index < files.length(); index += 1) {
            JSONObject record = files.getJSONObject(index);
            if (record.getString("url").equals(url)) return record;
        }
        return null;
    }

    private void verifyAssetRecord(Context context, JSONObject record) throws Exception {
        String path = record.getString("url");
        try (InputStream stream = context.getAssets().open("public/data/" + path)) {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] buffer = new byte[8192];
            int read;
            int total = 0;
            while ((read = stream.read(buffer)) != -1) {
                digest.update(buffer, 0, read);
                total += read;
            }
            assertEquals("bundled byte count " + path, record.getInt("bytes"), total);
            assertEquals("bundled checksum " + path, record.getString("sha256"), hex(digest.digest()));
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
