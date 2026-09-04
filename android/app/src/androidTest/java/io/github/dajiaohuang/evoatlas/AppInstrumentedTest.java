package io.github.dajiaohuang.evoatlas;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
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
import java.util.Iterator;

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
        assertEquals("native-full", current.getString("deliveryProfile"));
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

        JSONObject paleotopography = maps.getJSONObject("paleotopography");
        assertEquals("scotese-wright-2018-paleodem-v2", paleotopography.getString("id"));
        assertEquals("CC-BY-4.0", paleotopography.getJSONObject("source").getString("license"));
        JSONObject terrainDelivery = paleotopography.getJSONObject("delivery");
        assertEquals("native-full", terrainDelivery.getString("profile"));
        assertEquals(0.1, terrainDelivery.getDouble("resolutionDegrees"), 0.0);
        assertEquals(168418483, terrainDelivery.getInt("gridBytes"));
        JSONArray terrainFrames = paleotopography.getJSONArray("frames");
        assertEquals(109, terrainFrames.length());
        for (int terrainIndex = 0; terrainIndex < terrainFrames.length(); terrainIndex += 1) {
            JSONObject terrainFrame = terrainFrames.getJSONObject(terrainIndex);
            assertEquals(terrainIndex * 5, terrainFrame.getInt("archiveNominalAgeMa"));
            assertEquals("NETCDF4_CLASSIC", terrainFrame.getString("format"));
            assertEquals(64, terrainFrame.getString("memberSha256").length());
            JSONObject terrainGrid = terrainFrame.getJSONObject("grid");
            JSONObject sourceFullGrid = terrainFrame.getJSONObject("sourceFullGrid");
            assertEquals(6485401, terrainGrid.getInt("cellCount"));
            assertEquals(3601, terrainGrid.getInt("width"));
            assertEquals(1801, terrainGrid.getInt("height"));
            assertEquals(0.1, terrainGrid.getDouble("resolutionDegrees"), 0.0);
            assertEquals(sourceFullGrid.getInt("bytes"), terrainGrid.getInt("bytes"));
            assertEquals(sourceFullGrid.getString("sha256"), terrainGrid.getString("sha256"));
            assertEquals(sourceFullGrid.getString("decodedSha256"), terrainGrid.getString("sourceSha256"));
            JSONObject terrainGridInventory = findInventoryRecord(files, terrainGrid.getString("url"));
            assertNotNull("full-resolution palaeotopography grid missing from native release inventory", terrainGridInventory);
            assertEquals(terrainGrid.getInt("bytes"), terrainGridInventory.getInt("bytes"));
            assertEquals(terrainGrid.getString("sha256"), terrainGridInventory.getString("sha256"));
            verifyAssetRecord(context, terrainGridInventory);
        }

        JSONObject richManifests = current.getJSONObject("packages").getJSONObject("manifests");
        assertEquals(24, richManifests.length());
        int researchExamples = 0;
        int researchClaimLinks = 0;
        int phylogenyPackages = 0;
        int wormsNomenclatureRecords = 0;
        int richItisNomenclatureRecords = 0;
        int arthropodItisFiles = 0;
        int arthropodItisNomenclatureRecords = 0;
        int reptiliaItisFiles = 0;
        int reptiliaItisNomenclatureRecords = 0;
        int crocodyliaItisFiles = 0;
        int crocodyliaItisNomenclatureRecords = 0;
        int mammalItisFiles = 0;
        int mammalItisNomenclatureRecords = 0;
        int fishItisFiles = 0;
        int fishItisNomenclatureRecords = 0;
        int fishItisUpstreamRecords = 0;
        int sarcopterygiiItisFiles = 0;
        int sarcopterygiiItisNomenclatureRecords = 0;
        int wfoRichRecords = 0;
        Iterator<String> richPackageIds = richManifests.keys();
        while (richPackageIds.hasNext()) {
            String packageId = richPackageIds.next();
            JSONObject manifestDescriptor = richManifests.getJSONObject(packageId);
            JSONObject manifestInventoryRecord = findInventoryRecord(files, manifestDescriptor.getString("url"));
            assertNotNull("rich-package manifest missing from release inventory", manifestInventoryRecord);
            verifyAssetRecord(context, manifestInventoryRecord);
            JSONObject pack = readJsonAsset(context, "public/data/" + manifestDescriptor.getString("url"));
            JSONObject payloads = pack.getJSONObject("files");
            JSONObject researchDescriptor = payloads.getJSONObject("researchExamples");
            JSONObject researchInventoryRecord = findInventoryRecord(files, researchDescriptor.getString("url"));
            assertNotNull("research examples missing from release inventory", researchInventoryRecord);
            assertEquals(researchDescriptor.getInt("bytes"), researchInventoryRecord.getInt("bytes"));
            assertEquals(researchDescriptor.getString("sha256"), researchInventoryRecord.getString("sha256"));
            verifyAssetRecord(context, researchInventoryRecord);
            researchExamples += pack.getInt("researchExampleCount");
            researchClaimLinks += pack.getInt("researchClaimLinkCount");
            if (payloads.has("phylogeny")) phylogenyPackages += 1;
            if (packageId.equals("echinoderms")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(2, collections.length());
                JSONObject worms = findCollection(collections, "worms-aphiaid-crosswalk");
                assertNotNull(worms);
                assertEquals("WoRMS", worms.getString("provider"));
                assertEquals("CC-BY-4.0", worms.getJSONObject("source").getString("license"));
                assertEquals(11891, worms.getJSONObject("counts").getInt("total"));
                JSONObject collectionFile = worms.getJSONObject("file");
                JSONObject collectionInventoryRecord = findInventoryRecord(files, collectionFile.getString("url"));
                assertNotNull("WoRMS collection missing from release inventory", collectionInventoryRecord);
                assertEquals(collectionFile.getInt("bytes"), collectionInventoryRecord.getInt("bytes"));
                assertEquals(collectionFile.getString("sha256"), collectionInventoryRecord.getString("sha256"));
                verifyAssetRecord(context, collectionInventoryRecord);
                wormsNomenclatureRecords += worms.getJSONObject("counts").getInt("total");
                richItisNomenclatureRecords += verifyRichItisCollection(context, files,
                        findCollection(collections, "itis-echinodermata-tsn-crosswalk"),
                        2, 1, 11891, 278, "ITIS Echinodermata");
            } else if (packageId.equals("molluscs-brachiopods") || packageId.equals("sponges-cnidarians")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(packageId.equals("molluscs-brachiopods") ? 2 : 3, collections.length());
                if (packageId.equals("molluscs-brachiopods")) {
                    verifyAuthorityArchiveCollection(context, files, findCollection(collections, "worms-mollusca-archive-crosswalk"),
                            56, 1, 154718, 1253, "WoRMS Mollusca");
                } else {
                    verifyAuthorityArchiveCollection(context, files, findCollection(collections, "worms-porifera-archive-crosswalk"),
                            4, 1, 9899, 60, "WoRMS Porifera");
                    verifyAuthorityArchiveCollection(context, files, findCollection(collections, "worms-cnidaria-archive-crosswalk"),
                            8, 1, 20622, 1328, "WoRMS Cnidaria");
                }
                String collectionId = packageId.equals("molluscs-brachiopods")
                        ? "itis-mollusca-brachiopoda-tsn-crosswalk"
                        : "itis-porifera-cnidaria-tsn-crosswalk";
                int expectedFiles = packageId.equals("molluscs-brachiopods") ? 59 : 5;
                int expectedUpstreamFiles = 1;
                int expectedRecords = packageId.equals("molluscs-brachiopods") ? 159801 : 30521;
                int expectedUpstreamRecords = packageId.equals("molluscs-brachiopods") ? 4289 : 2218;
                richItisNomenclatureRecords += verifyRichItisCollection(context, files,
                        findCollection(collections, collectionId), expectedFiles, expectedUpstreamFiles,
                        expectedRecords, expectedUpstreamRecords, "ITIS " + packageId);
            } else if (packageId.equals("crustaceans-insects") || packageId.equals("trilobites-chelicerates")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                if (packageId.equals("crustaceans-insects")) {
                    assertEquals(5, collections.length());
                    verifyAuthorityArchiveCollection(context, files, findCollection(collections, "osf-orthoptera-archive-crosswalk"),
                            11, 1, 30859, 53, "OSF Orthoptera");
                }
                String[] expectedIds = packageId.equals("crustaceans-insects")
                        ? new String[]{"itis-insecta-tsn-crosswalk", "itis-crustacea-tsn-crosswalk", "itis-myriapoda-tsn-crosswalk", "itis-collembola-protura-tsn-crosswalk"}
                        : new String[]{"itis-chelicerata-tsn-crosswalk"};
                int[] expectedFiles = packageId.equals("crustaceans-insects")
                        ? new int[]{99, 40, 2, 2} : new int[]{16};
                int[] expectedUpstreamFiles = packageId.equals("crustaceans-insects")
                        ? new int[]{1, 1, 1, 1} : new int[]{1};
                int[] expectedRecords = packageId.equals("crustaceans-insects")
                        ? new int[]{941223, 80890, 14210, 9668} : new int[]{99511};
                int[] expectedUpstreamRecords = packageId.equals("crustaceans-insects")
                        ? new int[]{27357, 5991, 3445, 411} : new int[]{5714};
                String[] expectedDescriptorShas = packageId.equals("crustaceans-insects")
                        ? new String[]{
                        "c168f706a7067fd6d95548777b6fe5cadf0c6b2b67b9442698d9350c521c2cdf",
                        "9fb4271dce81e92f2df706da26c379053e649f21416d81ec1d8db6bb2031490b",
                        "7eeea9a62f0a51150f643c6f14d02511f8ab042b8264e64bbb0ec505520a5ac8",
                        "bf90e217fa6871bb1e59807b721ed88403c47e9aa2712a782ef40146b906fdf2"}
                        : new String[]{"90383cc2bf44dc092b59c7ed131169317a0a613699aa6485c6f3e9b74decfa3c"};
                assertEquals(expectedIds.length + (packageId.equals("crustaceans-insects") ? 1 : 0), collections.length());
                for (int index = 0; index < expectedIds.length; index += 1) {
                    JSONObject collection = findCollection(collections, expectedIds[index]);
                    assertNotNull(packageId + " ITIS collection missing: " + expectedIds[index], collection);
                    assertEquals(expectedDescriptorShas[index], collection.getString("descriptorSha256"));
                    int collectionRecords = verifyRichItisCollection(context, files, collection,
                            expectedFiles[index], expectedUpstreamFiles[index], expectedRecords[index],
                            expectedUpstreamRecords[index], "ITIS " + expectedIds[index]);
                    arthropodItisFiles += expectedFiles[index] + expectedUpstreamFiles[index];
                    arthropodItisNomenclatureRecords += collectionRecords + expectedUpstreamRecords[index];
                }
            } else if (packageId.equals("angiospermae") || packageId.equals("gymnosperms") || packageId.equals("early-land-plants")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(1, collections.length());
                JSONObject collection = collections.getJSONObject(0);
                assertEquals("wfo-plant-list-crosswalk", collection.getString("id"));
                assertEquals("World Flora Online Plant List", collection.getString("provider"));
                assertEquals("CC0-1.0", collection.getJSONObject("source").getString("license"));
                JSONArray collectionFiles = collection.getJSONArray("files");
                int collectionRecords = 0;
                for (int index = 0; index < collectionFiles.length(); index += 1) {
                    JSONObject collectionFile = collectionFiles.getJSONObject(index);
                    JSONObject inventoryRecord = findInventoryRecord(files, collectionFile.getString("url"));
                    assertNotNull("WFO rich-package shard missing from release inventory", inventoryRecord);
                    assertEquals(collectionFile.getInt("bytes"), inventoryRecord.getInt("bytes"));
                    assertEquals(collectionFile.getString("sha256"), inventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, inventoryRecord);
                    collectionRecords += collectionFile.getInt("records");
                }
                assertEquals(collection.getJSONObject("counts").getInt("total"), collectionRecords);
                wfoRichRecords += collectionRecords;
            } else if (packageId.equals("amphibia")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(1, collections.length());
                JSONObject collection = collections.getJSONObject(0);
                assertEquals("itis-2026-08-26-tsn-crosswalk", collection.getString("id"));
                assertEquals("Integrated Taxonomic Information System", collection.getString("provider"));
                JSONObject delivery = collection.getJSONObject("delivery");
                assertEquals("native-full", delivery.getString("profile"));
                assertTrue(delivery.getBoolean("completeRows"));
                JSONArray colFiles = collection.getJSONArray("files");
                JSONArray upstreamFiles = collection.getJSONArray("upstreamOnlyFiles");
                assertEquals(8, colFiles.length() + upstreamFiles.length());
                for (int index = 0; index < colFiles.length() + upstreamFiles.length(); index += 1) {
                    JSONObject file = index < colFiles.length() ? colFiles.getJSONObject(index) : upstreamFiles.getJSONObject(index - colFiles.length());
                    JSONObject inventoryRecord = findInventoryRecord(files, file.getString("url"));
                    assertNotNull("ITIS Amphibia shard missing from native release inventory", inventoryRecord);
                    assertEquals(file.getInt("bytes"), inventoryRecord.getInt("bytes"));
                    assertEquals(file.getString("sha256"), inventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, inventoryRecord);
                }
                assertEquals(8923, collection.getJSONObject("counts").getInt("total"));
                assertEquals(8, collection.getJSONObject("counts").getInt("itisUpstreamOnly"));
            } else if (packageId.equals("actinopterygii") || packageId.equals("chondrichthyes") || packageId.equals("early-fishes")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(1, collections.length());
                String collectionId = packageId.equals("actinopterygii")
                        ? "itis-actinopterygii-tsn-crosswalk"
                        : packageId.equals("chondrichthyes")
                        ? "itis-chondrichthyes-tsn-crosswalk"
                        : "itis-agnatha-myxini-tsn-crosswalk";
                int expectedFiles = packageId.equals("actinopterygii") ? 23 : 1;
                int expectedRecords = packageId.equals("actinopterygii") ? 35928 : packageId.equals("chondrichthyes") ? 1359 : 141;
                int expectedUpstreamRecords = packageId.equals("actinopterygii") ? 3732 : packageId.equals("chondrichthyes") ? 183 : 17;
                fishItisNomenclatureRecords += verifyRichItisCollection(context, files,
                        findCollection(collections, collectionId), expectedFiles, 1,
                        expectedRecords, expectedUpstreamRecords, "ITIS " + collectionId);
                fishItisFiles += expectedFiles + 1;
                fishItisUpstreamRecords += expectedUpstreamRecords;
            } else if (packageId.equals("tetrapod-transition")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(1, collections.length());
                sarcopterygiiItisNomenclatureRecords += verifyRichItisCollection(context, files,
                        findCollection(collections, "itis-sarcopterygii-tsn-crosswalk"), 1, 0,
                        8, 0, "ITIS Sarcopterygii");
                sarcopterygiiItisFiles += 1;
            } else if (packageId.equals("perissodactyla") || packageId.equals("cetartiodactyla")
                    || packageId.equals("primates") || packageId.equals("carnivora")
                    || packageId.equals("other-mammals")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(1, collections.length());
                String collectionId;
                int expectedRecords;
                int expectedUpstreamRecords;
                if (packageId.equals("perissodactyla")) {
                    collectionId = "itis-perissodactyla-tsn-crosswalk";
                    expectedRecords = 19;
                    expectedUpstreamRecords = 0;
                } else if (packageId.equals("cetartiodactyla")) {
                    collectionId = "itis-cetartiodactyla-tsn-crosswalk";
                    expectedRecords = 503;
                    expectedUpstreamRecords = 0;
                } else if (packageId.equals("primates")) {
                    collectionId = "itis-primates-tsn-crosswalk";
                    expectedRecords = 530;
                    expectedUpstreamRecords = 0;
                } else if (packageId.equals("carnivora")) {
                    collectionId = "itis-carnivora-tsn-crosswalk";
                    expectedRecords = 310;
                    expectedUpstreamRecords = 0;
                } else {
                    collectionId = "itis-other-mammals-tsn-crosswalk";
                    expectedRecords = 5099;
                    expectedUpstreamRecords = 3;
                }
                int expectedFiles = expectedUpstreamRecords == 0 ? 1 : 4;
                int expectedUpstreamFiles = expectedUpstreamRecords == 0 ? 0 : 1;
                int collectionRecords = verifyRichItisCollection(context, files,
                        findCollection(collections, collectionId), expectedFiles, expectedUpstreamFiles,
                        expectedRecords, expectedUpstreamRecords, "ITIS " + collectionId);
                mammalItisFiles += expectedFiles + expectedUpstreamFiles;
                mammalItisNomenclatureRecords += collectionRecords + expectedUpstreamRecords;
            } else if (packageId.equals("mammal-origins")) {
                assertFalse("mammal-origins must not publish an ITIS nomenclature collection",
                        pack.has("nomenclatureCollections"));
            } else if (packageId.equals("turtles-lepidosaurs")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(1, collections.length());
                richItisNomenclatureRecords += verifyRichItisCollection(context, files,
                        findCollection(collections, "itis-reptilia-tsn-crosswalk"),
                        9, 1, 12622, 655, "ITIS non-Crocodylia Reptilia");
                reptiliaItisFiles += 10;
                reptiliaItisNomenclatureRecords += 13277;
            } else if (packageId.equals("crocodylomorphs-birds")) {
                JSONArray collections = pack.getJSONArray("nomenclatureCollections");
                assertEquals(2, collections.length());
                JSONObject avilist = findCollection(collections, "avilist-v2025b-avibase-concepts");
                assertNotNull("AviList collection missing", avilist);
                assertEquals("AviList Core Team", avilist.getString("provider"));
                JSONObject delivery = avilist.getJSONObject("delivery");
                assertEquals("native-full", delivery.getString("profile"));
                assertTrue(delivery.getBoolean("completeRows"));
                JSONArray allFiles = new JSONArray();
                JSONArray colFiles = avilist.getJSONArray("files");
                JSONArray upstreamFiles = avilist.getJSONArray("upstreamOnlyFiles");
                for (int index = 0; index < colFiles.length(); index += 1) allFiles.put(colFiles.getJSONObject(index));
                for (int index = 0; index < upstreamFiles.length(); index += 1) allFiles.put(upstreamFiles.getJSONObject(index));
                assertEquals(4, allFiles.length());
                for (int index = 0; index < allFiles.length(); index += 1) {
                    JSONObject file = allFiles.getJSONObject(index);
                    JSONObject inventoryRecord = findInventoryRecord(files, file.getString("url"));
                    assertNotNull("AviList shard missing from native release inventory", inventoryRecord);
                    assertEquals(file.getInt("bytes"), inventoryRecord.getInt("bytes"));
                    assertEquals(file.getString("sha256"), inventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, inventoryRecord);
                }
                assertEquals(11071, avilist.getJSONObject("counts").getInt("packageAcceptedSpecies"));
                assertEquals(609, avilist.getJSONObject("counts").getInt("upstreamOnly"));
                richItisNomenclatureRecords += verifyRichItisCollection(context, files,
                        findCollection(collections, "itis-crocodylia-tsn-crosswalk"),
                        1, 0, 27, 0, "ITIS Crocodylia");
                crocodyliaItisFiles += 1;
                crocodyliaItisNomenclatureRecords += 27;
            } else {
                assertTrue("only the declared authority-backed rich packages may carry nomenclature collections", !pack.has("nomenclatureCollections"));
            }
        }
        assertEquals(312, researchExamples);
        assertEquals(513, researchClaimLinks);
        assertEquals(2, phylogenyPackages);
        assertEquals(11891, wormsNomenclatureRecords);
        assertEquals(214862, richItisNomenclatureRecords);
        assertEquals(164, arthropodItisFiles);
        assertEquals(1188420, arthropodItisNomenclatureRecords);
        assertEquals(10, reptiliaItisFiles);
        assertEquals(13277, reptiliaItisNomenclatureRecords);
        assertEquals(1, crocodyliaItisFiles);
        assertEquals(27, crocodyliaItisNomenclatureRecords);
        assertEquals(9, mammalItisFiles);
        assertEquals(6464, mammalItisNomenclatureRecords);
        assertEquals(28, fishItisFiles);
        assertEquals(37428, fishItisNomenclatureRecords);
        assertEquals(3932, fishItisUpstreamRecords);
        assertEquals(1, sarcopterygiiItisFiles);
        assertEquals(8, sarcopterygiiItisNomenclatureRecords);
        assertEquals(387988, wfoRichRecords);

        JSONObject catalogueDescriptor = current.getJSONObject("catalogue").getJSONObject("manifest");
        JSONObject catalogue = readJsonAsset(context, "public/data/" + catalogueDescriptor.getString("url"));
        JSONObject resourcePacks = catalogue.getJSONObject("resourcePacks");
        assertEquals(7, resourcePacks.getInt("packageCount"));
        assertEquals(363160, resourcePacks.getInt("acceptedSpeciesCount"));
        JSONObject packManifests = resourcePacks.getJSONObject("manifests");
        int resourcePackRecords = 0;
        int lpsnIdentifierRecords = 0;
        int indexFungorumIdentifierRecords = 0;
        int foraminiferaAuthorityRecords = 0;
        int otherAnimalsItisRecords = 0;
        int protistsItisRecords = 0;
        int ictvSpeciesRecords = 0;
        int ictvIsolateRecords = 0;
        int wfoSupplementRecords = 0;
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
            if (packageId.equals("archaea") || packageId.equals("bacteria")) {
                JSONArray extensions = pack.getJSONArray("extensions");
                assertEquals(packageId.equals("bacteria") ? 2 : 1, extensions.length());
                JSONObject extension = findCollection(extensions, "lpsn-identifiers");
                assertEquals("lpsn-identifiers", extension.getString("id"));
                assertEquals("LPSN", extension.getString("provider"));
                int expectedResolved = packageId.equals("archaea") ? 790 : 21570;
                assertEquals(expectedResolved, extension.getJSONObject("counts").getInt("resolved"));
                JSONArray extensionFiles = extension.getJSONArray("files");
                for (int fileIndex = 0; fileIndex < extensionFiles.length(); fileIndex += 1) {
                    JSONObject extensionFile = extensionFiles.getJSONObject(fileIndex);
                    JSONObject extensionInventoryRecord = findInventoryRecord(files, extensionFile.getString("url"));
                    assertNotNull("LPSN extension shard missing from release inventory", extensionInventoryRecord);
                    assertEquals(extensionFile.getInt("bytes"), extensionInventoryRecord.getInt("bytes"));
                    assertEquals(extensionFile.getString("sha256"), extensionInventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, extensionInventoryRecord);
                    lpsnIdentifierRecords += extensionFile.getInt("records");
                }
                if (packageId.equals("bacteria")) {
                    JSONObject itis = findCollection(extensions, "itis-bacteria-tsn-crosswalk");
                    assertNotNull(itis);
                    assertEquals("CC0-1.0", itis.getJSONObject("source").getString("license"));
                    assertEquals("native-full", itis.getJSONObject("delivery").getString("profile"));
                    assertEquals(4827, itis.getJSONObject("counts").getInt("eligible"));
                    assertEquals(9348, itis.getJSONObject("counts").getInt("upstreamOnly"));
                    JSONArray itisFiles = itis.getJSONArray("files");
                    assertEquals(8, itisFiles.length());
                    int itisRecords = 0;
                    for (int index = 0; index < itisFiles.length(); index += 1) {
                        JSONObject file = itisFiles.getJSONObject(index);
                        JSONObject record = findInventoryRecord(files, file.getString("url"));
                        assertNotNull("ITIS Bacteria shard missing from release inventory", record);
                        assertEquals(file.getInt("bytes"), record.getInt("bytes"));
                        assertEquals(file.getString("sha256"), record.getString("sha256"));
                        verifyAssetRecord(context, record);
                        itisRecords += file.getInt("records");
                    }
                    assertEquals(14175, itisRecords);
                }
            } else if (packageId.equals("fungi")) {
                JSONArray extensions = pack.getJSONArray("extensions");
                assertEquals(2, extensions.length());
                JSONObject authority = findCollection(extensions, "index-fungorum-identifiers");
                assertNotNull(authority);
                assertEquals("index-fungorum-identifiers", authority.getString("id"));
                assertEquals("Species Fungorum / Index Fungorum", authority.getString("provider"));
                JSONObject counts = authority.getJSONObject("counts");
                assertEquals(157044, counts.getInt("accepted"));
                assertEquals(0, counts.getInt("redirect"));
                assertEquals(0, counts.getInt("ambiguous"));
                assertEquals(0, counts.getInt("unmatched"));
                assertEquals(0, counts.getInt("withheld"));
                assertEquals(201, counts.getInt("upstreamOnly"));
                assertEquals("lexicographic-colId-range-v1", authority.getJSONObject("integration").getJSONObject("lookup").getString("strategy"));
                JSONArray extensionFiles = authority.getJSONArray("files");
                assertEquals(6, extensionFiles.length());
                String previousMax = null;
                for (int fileIndex = 0; fileIndex < extensionFiles.length(); fileIndex += 1) {
                    JSONObject extensionFile = extensionFiles.getJSONObject(fileIndex);
                    assertTrue(extensionFile.getString("minColId").compareTo(extensionFile.getString("maxColId")) <= 0);
                    if (previousMax != null) assertTrue(previousMax.compareTo(extensionFile.getString("minColId")) < 0);
                    previousMax = extensionFile.getString("maxColId");
                    JSONObject extensionInventoryRecord = findInventoryRecord(files, extensionFile.getString("url"));
                    assertNotNull("Fungi authority shard missing from release inventory", extensionInventoryRecord);
                    assertEquals(extensionFile.getInt("bytes"), extensionInventoryRecord.getInt("bytes"));
                    assertEquals(extensionFile.getString("sha256"), extensionInventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, extensionInventoryRecord);
                    indexFungorumIdentifierRecords += extensionFile.getInt("records");
                }
                JSONObject itis = findCollection(extensions, "itis-fungi-tsn-crosswalk");
                assertNotNull("ITIS Fungi authority missing", itis);
                assertEquals("Integrated Taxonomic Information System", itis.getString("provider"));
                assertEquals("555705", itis.getJSONObject("source").getString("rootTsn"));
                assertEquals(158805, itis.getJSONObject("counts").getInt("records"));
                JSONObject itisDelivery = itis.getJSONObject("delivery");
                assertEquals("native-full", itisDelivery.getString("profile"));
                assertTrue(itisDelivery.getBoolean("completeRows"));
                assertEquals(57, itisDelivery.getInt("canonicalFileCount"));
                JSONArray itisFiles = itis.getJSONArray("files");
                assertEquals(57, itisFiles.length());
                int itisRecords = 0;
                for (int fileIndex = 0; fileIndex < itisFiles.length(); fileIndex += 1) {
                    JSONObject file = itisFiles.getJSONObject(fileIndex);
                    JSONObject record = findInventoryRecord(files, file.getString("url"));
                    assertNotNull("ITIS Fungi shard missing from native release inventory", record);
                    assertEquals(file.getInt("bytes"), record.getInt("bytes"));
                    assertEquals(file.getString("sha256"), record.getString("sha256"));
                    verifyAssetRecord(context, record);
                    itisRecords += file.getInt("records");
                }
                assertEquals(158805, itisRecords);
            } else if (packageId.equals("other-animals")) {
                JSONArray extensions = pack.getJSONArray("extensions");
                assertEquals(29, extensions.length());
                verifyAuthorityArchiveCollection(context, files, findCollection(extensions, "worms-annelida-archive-crosswalk"),
                        8, 1, 18982, 1090, "WoRMS Annelida");
                String[] expectedIds = new String[]{
                    "itis-platyhelminthes-tsn-crosswalk", "itis-rotifera-tsn-crosswalk", "itis-bryozoa-tsn-crosswalk",
                    "itis-nemertea-tsn-crosswalk", "itis-tunicata-cephalochordata-tsn-crosswalk", "itis-acanthocephala-tsn-crosswalk",
                    "itis-entoprocta-tsn-crosswalk", "itis-tardigrada-tsn-crosswalk", "itis-chaetognatha-tsn-crosswalk",
                    "itis-ctenophora-tsn-crosswalk", "itis-kinorhyncha-tsn-crosswalk", "itis-gastrotricha-tsn-crosswalk",
                    "itis-priapulida-tsn-crosswalk", "itis-onychophora-tsn-crosswalk", "itis-hemichordata-tsn-crosswalk",
                    "itis-sipuncula-tsn-crosswalk", "itis-nematomorpha-tsn-crosswalk", "itis-phoronida-tsn-crosswalk",
                    "itis-gnathostomulida-tsn-crosswalk", "itis-loricifera-tsn-crosswalk",
                    "itis-micrognathozoa-tsn-crosswalk", "itis-cycliophora-tsn-crosswalk", "itis-placozoa-tsn-crosswalk",
                    "itis-xenacoelomorpha-tsn-crosswalk", "itis-orthonectida-tsn-crosswalk", "itis-dicyemida-tsn-crosswalk",
                    "itis-nematoda-tsn-crosswalk", "itis-annelida-tsn-crosswalk"
                };
                int[] expectedFiles = new int[]{15, 3, 3, 2, 2, 3, 2, 3, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 4, 4};
                int[] expectedRecords = new int[]{28252, 2662, 20754, 1416, 3242, 1330, 171, 1461, 156, 204, 420, 997, 23, 235, 139, 205, 404, 19, 104, 46, 1, 2, 4, 499, 27, 128, 20849, 24074};
                for (int expectedIndex = 0; expectedIndex < expectedIds.length; expectedIndex += 1) {
                    JSONObject authority = findCollection(extensions, expectedIds[expectedIndex]);
                    assertNotNull("ITIS other-animals authority missing", authority);
                    assertEquals("Integrated Taxonomic Information System", authority.getString("provider"));
                    assertEquals("CC0-1.0", authority.getJSONObject("source").getString("license"));
                    JSONObject delivery = authority.getJSONObject("delivery");
                    assertEquals("native-full", delivery.getString("profile"));
                    assertTrue(delivery.getBoolean("completeRows"));
                    assertEquals(expectedFiles[expectedIndex], delivery.getInt("canonicalFileCount"));
                    assertEquals(expectedFiles[expectedIndex], delivery.getInt("publishedFileCount"));
                    JSONArray extensionFiles = authority.getJSONArray("files");
                    assertEquals(expectedFiles[expectedIndex], extensionFiles.length());
                    int extensionRecords = 0;
                    for (int fileIndex = 0; fileIndex < extensionFiles.length(); fileIndex += 1) {
                        JSONObject extensionFile = extensionFiles.getJSONObject(fileIndex);
                        JSONObject extensionInventoryRecord = findInventoryRecord(files, extensionFile.getString("url"));
                        assertNotNull("ITIS other-animals shard missing from native release inventory", extensionInventoryRecord);
                        assertEquals(extensionFile.getInt("bytes"), extensionInventoryRecord.getInt("bytes"));
                        assertEquals(extensionFile.getString("sha256"), extensionInventoryRecord.getString("sha256"));
                        verifyAssetRecord(context, extensionInventoryRecord);
                        extensionRecords += extensionFile.getInt("records");
                    }
                    assertEquals(expectedRecords[expectedIndex], extensionRecords);
                    otherAnimalsItisRecords += extensionRecords;
                }
            } else if (packageId.equals("protists-chromists")) {
                JSONArray extensions = pack.getJSONArray("extensions");
                JSONObject authority = extensions.getJSONObject(0);
                assertEquals("foraminifera-wfd-identifiers", authority.getString("id"));
                assertEquals("World Foraminifera Database (WoRMS) through ChecklistBank", authority.getString("provider"));
                JSONObject delivery = authority.getJSONObject("delivery");
                assertEquals("native-full", delivery.getString("profile"));
                assertTrue(delivery.getBoolean("completeRows"));
                JSONArray extensionFiles = authority.getJSONArray("files");
                assertEquals(5, extensionFiles.length());
                for (int fileIndex = 0; fileIndex < extensionFiles.length(); fileIndex += 1) {
                    JSONObject extensionFile = extensionFiles.getJSONObject(fileIndex);
                    JSONObject extensionInventoryRecord = findInventoryRecord(files, extensionFile.getString("url"));
                    assertNotNull("Foraminifera authority shard missing from native release inventory", extensionInventoryRecord);
                    assertEquals(extensionFile.getInt("bytes"), extensionInventoryRecord.getInt("bytes"));
                    assertEquals(extensionFile.getString("sha256"), extensionInventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, extensionInventoryRecord);
                    foraminiferaAuthorityRecords += extensionFile.getInt("records");
                }
                String[] expectedIds = new String[]{
                    "itis-ciliophora-tsn-crosswalk", "itis-apicomplexa-tsn-crosswalk", "itis-dinoflagellata-tsn-crosswalk",
                    "itis-euglenozoa-tsn-crosswalk", "itis-cercozoa-tsn-crosswalk", "itis-haptophyta-tsn-crosswalk",
                    "itis-ochrophyta-tsn-crosswalk", "itis-amoebozoa-tsn-crosswalk", "itis-rhodophyta-tsn-crosswalk",
                    "itis-oomycota-tsn-crosswalk", "itis-cryptophyta-tsn-crosswalk", "itis-choanoflagellatea-tsn-crosswalk",
                    "itis-bigyra-tsn-crosswalk", "itis-perkinsozoa-tsn-crosswalk", "itis-labyrinthulomycetes-tsn-crosswalk",
                    "itis-opalozoa-tsn-crosswalk", "itis-radiolaria-tsn-crosswalk", "itis-metamonada-tsn-crosswalk",
                    "itis-chlorophyta-tsn-crosswalk", "itis-glaucophyta-tsn-crosswalk", "itis-picozoa-tsn-crosswalk",
                    "itis-telonemia-tsn-crosswalk", "itis-centrohelida-tsn-crosswalk", "itis-katablepharidota-tsn-crosswalk",
                    "itis-hemimastigophora-tsn-crosswalk"
                };
                int[] expectedFiles = new int[]{4, 1, 2, 1, 1, 1, 2, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0};
                int[] expectedRecords = new int[]{8665, 21, 1110, 276, 52, 90, 3397, 1337, 1616, 1536, 0, 0, 53, 0, 0, 0, 0, 0, 1416, 4, 0, 0, 0, 0, 0};
                assertEquals(expectedIds.length + 1, extensions.length());
                for (int extensionIndex = 0; extensionIndex < expectedIds.length; extensionIndex += 1) {
                    JSONObject itisAuthority = findCollection(extensions, expectedIds[extensionIndex]);
                    assertNotNull("ITIS protists/chromists authority missing", itisAuthority);
                    assertEquals(expectedIds[extensionIndex], itisAuthority.getString("id"));
                    assertEquals("Integrated Taxonomic Information System", itisAuthority.getString("provider"));
                    assertEquals("CC0-1.0", itisAuthority.getJSONObject("source").getString("license"));
                    JSONObject itisDelivery = itisAuthority.getJSONObject("delivery");
                    assertEquals("native-full", itisDelivery.getString("profile"));
                    assertTrue(itisDelivery.getBoolean("completeRows"));
                    assertEquals(expectedFiles[extensionIndex], itisDelivery.getInt("canonicalFileCount"));
                    JSONArray itisFiles = itisAuthority.getJSONArray("files");
                    assertEquals(expectedFiles[extensionIndex], itisFiles.length());
                    int authorityRecords = 0;
                    for (int fileIndex = 0; fileIndex < itisFiles.length(); fileIndex += 1) {
                        JSONObject itisFile = itisFiles.getJSONObject(fileIndex);
                        JSONObject itisInventoryRecord = findInventoryRecord(files, itisFile.getString("url"));
                        assertNotNull("ITIS protists/chromists shard missing from native release inventory", itisInventoryRecord);
                        assertEquals(itisFile.getInt("bytes"), itisInventoryRecord.getInt("bytes"));
                        assertEquals(itisFile.getString("sha256"), itisInventoryRecord.getString("sha256"));
                        verifyAssetRecord(context, itisInventoryRecord);
                        authorityRecords += itisFile.getInt("records");
                    }
                    assertEquals(expectedRecords[extensionIndex], authorityRecords);
                    protistsItisRecords += authorityRecords;
                }
            } else if (packageId.equals("viruses")) {
                JSONArray extensions = pack.getJSONArray("extensions");
                assertEquals(1, extensions.length());
                JSONObject ictv = extensions.getJSONObject(0);
                assertEquals("ictv-virus-metadata", ictv.getString("id"));
                assertEquals("ICTV", ictv.getString("provider"));
                assertEquals("CC-BY-4.0", ictv.getJSONObject("source").getString("license"));
                JSONObject counts = ictv.getJSONObject("counts");
                assertEquals(17552, counts.getInt("accepted"));
                assertEquals(0, counts.getInt("redirect"));
                assertEquals(0, counts.getInt("ambiguous"));
                assertEquals(0, counts.getInt("unmatched"));
                assertEquals(0, counts.getInt("withheld"));
                assertEquals(17554, counts.getInt("officialSpecies"));
                assertEquals(2, counts.getInt("upstreamOnly"));
                assertEquals(19285, counts.getInt("vmrIsolates"));
                JSONArray extensionFiles = ictv.getJSONArray("files");
                assertEquals(1, extensionFiles.length());
                for (int fileIndex = 0; fileIndex < extensionFiles.length(); fileIndex += 1) {
                    JSONObject extensionFile = extensionFiles.getJSONObject(fileIndex);
                    assertEquals(1346739, extensionFile.getInt("bytes"));
                    assertEquals("99253ddc92392bdb0a03465eda99e9c2ee3d6660ac690d3b52cb8c9caf3a1443", extensionFile.getString("sha256"));
                    JSONObject extensionInventoryRecord = findInventoryRecord(files, extensionFile.getString("url"));
                    assertNotNull("ICTV extension shard missing from release inventory", extensionInventoryRecord);
                    assertEquals(extensionFile.getInt("bytes"), extensionInventoryRecord.getInt("bytes"));
                    assertEquals(extensionFile.getString("sha256"), extensionInventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, extensionInventoryRecord);
                    ictvSpeciesRecords += extensionFile.getInt("records");
                }
                ictvIsolateRecords += counts.getInt("vmrIsolates");
            } else if (packageId.equals("other-plants")) {
                JSONArray extensions = pack.getJSONArray("extensions");
                assertEquals(1, extensions.length());
                JSONObject wfo = extensions.getJSONObject(0);
                assertEquals("wfo-plant-list-crosswalk", wfo.getString("id"));
                assertEquals("World Flora Online Plant List", wfo.getString("provider"));
                JSONObject counts = wfo.getJSONObject("counts");
                assertEquals(698, counts.getInt("packageColRecords"));
                assertEquals(60751, counts.getInt("upstreamOnly"));
                assertEquals(61449, counts.getInt("records"));
                JSONArray extensionFiles = wfo.getJSONArray("files");
                for (int fileIndex = 0; fileIndex < extensionFiles.length(); fileIndex += 1) {
                    JSONObject extensionFile = extensionFiles.getJSONObject(fileIndex);
                    JSONObject wfoInventoryRecord = findInventoryRecord(files, extensionFile.getString("url"));
                    assertNotNull("WFO supplement shard missing from release inventory", wfoInventoryRecord);
                    assertEquals(extensionFile.getInt("bytes"), wfoInventoryRecord.getInt("bytes"));
                    assertEquals(extensionFile.getString("sha256"), wfoInventoryRecord.getString("sha256"));
                    verifyAssetRecord(context, wfoInventoryRecord);
                    wfoSupplementRecords += extensionFile.getInt("records");
                }
            } else {
                assertTrue("only Archaea, Bacteria, Fungi, Viruses and Other Plants may carry resource-pack extensions", !pack.has("extensions"));
            }
            resourcePackRecords += packageRecords;
        }
        assertEquals(363160, resourcePackRecords);
        assertEquals(22360, lpsnIdentifierRecords);
        assertEquals(157044, indexFungorumIdentifierRecords);
        assertEquals(47975, foraminiferaAuthorityRecords);
        assertEquals(107824, otherAnimalsItisRecords);
        assertEquals(19573, protistsItisRecords);
        assertEquals(17554, ictvSpeciesRecords);
        assertEquals(19285, ictvIsolateRecords);
        assertEquals(61449, wfoSupplementRecords);
    }

    private JSONObject findCollection(JSONArray collections, String id) throws Exception {
        for (int index = 0; index < collections.length(); index += 1) {
            JSONObject collection = collections.getJSONObject(index);
            if (collection.getString("id").equals(id)) return collection;
        }
        return null;
    }

    private int verifyRichItisCollection(Context context, JSONArray inventory, JSONObject collection,
                                         int expectedFiles, int expectedUpstreamFiles,
                                         int expectedRecords, int expectedUpstreamRecords,
                                         String label) throws Exception {
        assertNotNull(label + " collection missing", collection);
        assertEquals("Integrated Taxonomic Information System", collection.getString("provider"));
        assertEquals("CC0-1.0", collection.getJSONObject("source").getString("license"));
        JSONObject delivery = collection.getJSONObject("delivery");
        assertEquals("native-full", delivery.getString("profile"));
        assertTrue(delivery.getBoolean("completeRows"));
        assertEquals(expectedFiles + expectedUpstreamFiles, delivery.getInt("publishedFileCount"));
        assertEquals(expectedFiles + expectedUpstreamFiles, delivery.getInt("canonicalFileCount"));
        assertEquals(expectedRecords, collection.getJSONObject("counts").getInt("total"));
        assertEquals(expectedUpstreamRecords, collection.getJSONObject("counts").getInt("itisUpstreamOnly"));
        JSONArray files = collection.getJSONArray("files");
        JSONArray upstreamFiles = collection.getJSONArray("upstreamOnlyFiles");
        assertEquals(expectedFiles, files.length());
        assertEquals(expectedUpstreamFiles, upstreamFiles.length());
        JSONArray canonicalInventory = collection.getJSONArray("canonicalFileInventory");
        assertEquals(expectedFiles + expectedUpstreamFiles, canonicalInventory.length());
        int records = 0;
        for (int group = 0; group < 2; group += 1) {
            JSONArray shardGroup = group == 0 ? files : upstreamFiles;
            for (int index = 0; index < shardGroup.length(); index += 1) {
                JSONObject shard = shardGroup.getJSONObject(index);
                JSONObject inventoryRecord = findInventoryRecord(inventory, shard.getString("url"));
                assertNotNull(label + " shard missing from native release inventory", inventoryRecord);
                assertEquals(shard.getInt("bytes"), inventoryRecord.getInt("bytes"));
                assertEquals(shard.getString("sha256"), inventoryRecord.getString("sha256"));
                verifyAssetRecord(context, inventoryRecord);
                records += shard.getInt("records");
            }
        }
        assertEquals(expectedRecords + expectedUpstreamRecords, records);
        for (int index = 0; index < canonicalInventory.length(); index += 1) {
            JSONObject canonical = canonicalInventory.getJSONObject(index);
            String canonicalPath = canonical.getString("path");
            String canonicalName = canonicalPath.substring(canonicalPath.lastIndexOf('/') + 1);
            JSONObject runtime = null;
            for (int group = 0; group < 2 && runtime == null; group += 1) {
                JSONArray shardGroup = group == 0 ? files : upstreamFiles;
                for (int shardIndex = 0; shardIndex < shardGroup.length(); shardIndex += 1) {
                    JSONObject candidate = shardGroup.getJSONObject(shardIndex);
                    String candidatePath = candidate.getString("url");
                    if (candidatePath.substring(candidatePath.lastIndexOf('/') + 1).equals(canonicalName)) {
                        runtime = candidate;
                        break;
                    }
                }
            }
            assertNotNull(label + " canonical shard inventory mismatch", runtime);
            assertEquals(canonical.getInt("records"), runtime.getInt("records"));
            assertEquals(canonical.getInt("bytes"), runtime.getInt("bytes"));
            assertEquals(canonical.getString("sha256"), runtime.getString("sha256"));
        }
        return expectedRecords;
    }

    private void verifyAuthorityArchiveCollection(Context context, JSONArray inventory, JSONObject collection,
                                                   int expectedFiles, int expectedUpstreamFiles,
                                                   int expectedRecords, int expectedUpstreamRecords,
                                                   String label) throws Exception {
        assertNotNull(label + " collection missing", collection);
        assertEquals("release-pinned-authority-archive-crosswalk", collection.getString("recordType"));
        assertEquals("CC-BY-4.0", collection.getJSONObject("source").getString("license"));
        JSONObject delivery = collection.getJSONObject("delivery");
        assertEquals("native-full", delivery.getString("profile"));
        assertTrue(delivery.getBoolean("completeRows"));
        assertEquals(expectedFiles + expectedUpstreamFiles, delivery.getInt("publishedFileCount"));
        assertEquals(expectedFiles + expectedUpstreamFiles, delivery.getInt("canonicalFileCount"));
        assertEquals(expectedRecords, collection.getJSONObject("counts").getInt("total"));
        assertEquals(expectedUpstreamRecords, collection.getJSONObject("counts").getInt("upstreamOnly"));
        JSONArray files = collection.getJSONArray("files");
        JSONArray upstreamFiles = collection.getJSONArray("upstreamOnlyFiles");
        assertEquals(expectedFiles, files.length());
        assertEquals(expectedUpstreamFiles, upstreamFiles.length());
        JSONArray canonicalInventory = collection.getJSONArray("canonicalFileInventory");
        assertEquals(expectedFiles + expectedUpstreamFiles, canonicalInventory.length());
        int records = 0;
        for (int group = 0; group < 2; group += 1) {
            JSONArray shardGroup = group == 0 ? files : upstreamFiles;
            for (int index = 0; index < shardGroup.length(); index += 1) {
                JSONObject shard = shardGroup.getJSONObject(index);
                JSONObject inventoryRecord = findInventoryRecord(inventory, shard.getString("url"));
                assertNotNull(label + " shard missing from native release inventory", inventoryRecord);
                assertEquals(shard.getInt("bytes"), inventoryRecord.getInt("bytes"));
                assertEquals(shard.getString("sha256"), inventoryRecord.getString("sha256"));
                verifyAssetRecord(context, inventoryRecord);
                records += shard.getInt("records");
            }
        }
        assertEquals(expectedRecords + expectedUpstreamRecords, records);
        for (int index = 0; index < canonicalInventory.length(); index += 1) {
            JSONObject canonical = canonicalInventory.getJSONObject(index);
            String canonicalPath = canonical.getString("path");
            String canonicalName = canonicalPath.substring(canonicalPath.lastIndexOf('/') + 1);
            JSONObject runtime = null;
            for (int group = 0; group < 2 && runtime == null; group += 1) {
                JSONArray shardGroup = group == 0 ? files : upstreamFiles;
                for (int shardIndex = 0; shardIndex < shardGroup.length(); shardIndex += 1) {
                    JSONObject candidate = shardGroup.getJSONObject(shardIndex);
                    String candidatePath = candidate.getString("url");
                    if (candidatePath.substring(candidatePath.lastIndexOf('/') + 1).equals(canonicalName)) {
                        runtime = candidate;
                        break;
                    }
                }
            }
            assertNotNull(label + " canonical shard inventory mismatch", runtime);
            assertEquals(canonical.getInt("records"), runtime.getInt("records"));
            assertEquals(canonical.getInt("bytes"), runtime.getInt("bytes"));
            assertEquals(canonical.getString("sha256"), runtime.getString("sha256"));
        }
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
