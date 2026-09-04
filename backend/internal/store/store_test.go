package store

import (
	"context"
	"path/filepath"
	"testing"
)

func TestCurrentCatalogueRegistryPathComesFromManifestInventory(t *testing.T) {
	checksums := map[string]string{
		"data/catalogue-of-life/releases/2026-08-20/registry/manifest.json": "digest",
	}
	path, resourcePath, err := currentCatalogueRegistryPath("D:/evo", checksums)
	if err != nil {
		t.Fatal(err)
	}
	if resourcePath != "data/catalogue-of-life/releases/2026-08-20/registry/manifest.json" || path != filepath.Join("D:/evo", filepath.FromSlash(resourcePath)) {
		t.Fatalf("unexpected catalogue path: %q %q", path, resourcePath)
	}
}

func TestCurrentCatalogueRegistryPathRejectsAmbiguousInventory(t *testing.T) {
	_, _, err := currentCatalogueRegistryPath("D:/evo", map[string]string{
		"data/catalogue-of-life/releases/one/registry/manifest.json": "one",
		"data/catalogue-of-life/releases/two/registry/manifest.json": "two",
	})
	if err == nil {
		t.Fatal("expected ambiguous current catalogue inventory to fail")
	}
}

func TestSearchCataloguePageKeepsOnlyBoundedSortedWindow(t *testing.T) {
	records := []CatalogueRecord{
		{NormalizedName: "abc z", ID: "4", ScientificName: "Z", Status: "accepted"},
		{NormalizedName: "abc a", ID: "1", ScientificName: "A", Status: "accepted"},
		{NormalizedName: "abc c", ID: "3", ScientificName: "C", Status: "accepted"},
		{NormalizedName: "abc b", ID: "2", ScientificName: "B", Status: "accepted"},
	}
	snapshot := &Snapshot{
		Catalogue: CatalogueManifest{Search: struct {
			MinimumQueryLength int             `json:"minimumQueryLength"`
			Files              []CatalogueFile `json:"files"`
		}{MinimumQueryLength: 3, Files: []CatalogueFile{{Prefix: "abc", Path: "abc"}}}},
		SearchCache: map[string]SearchShard{
			"abc": {Records: records, Prefix3: map[string][]CatalogueRecord{"abc": records}},
		},
		SearchLoads: map[string]*searchLoad{},
	}
	page, total, err := snapshot.SearchCataloguePage(context.Background(), "abc", 1, 2)
	if err != nil {
		t.Fatal(err)
	}
	if total != 4 || len(page) != 2 || page[0].ID != "2" || page[1].ID != "3" {
		t.Fatalf("unexpected page total=%d page=%#v", total, page)
	}
}
