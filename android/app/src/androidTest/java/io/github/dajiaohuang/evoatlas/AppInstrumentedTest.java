package io.github.dajiaohuang.evoatlas;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import org.junit.Test;
import org.junit.runner.RunWith;

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
}
