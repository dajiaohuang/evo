package io.github.dajiaohuang.evoatlas;

import static org.junit.Assert.assertEquals;

import java.net.URI;
import org.junit.Test;

public class DeepLinkContractTest {

    @Test
    public void explorerDeepLinkPreservesRouteAndQuery() {
        URI deepLink = URI.create("evoatlas://open/explore?age=375&taxon=tiktaalik");

        assertEquals("evoatlas", deepLink.getScheme());
        assertEquals("open", deepLink.getHost());
        assertEquals("/explore", deepLink.getPath());
        assertEquals("age=375&taxon=tiktaalik", deepLink.getQuery());
    }
}
