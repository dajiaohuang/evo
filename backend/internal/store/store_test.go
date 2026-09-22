package store

import (
	"context"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestInventoryRejectsSymlinksOutsideDataRoot(t *testing.T) {
	root := t.TempDir()
	dataRoot := filepath.Join(root, "data")
	if err := os.Mkdir(dataRoot, 0700); err != nil {
		t.Fatal(err)
	}
	outside := filepath.Join(root, "private.txt")
	if err := os.WriteFile(outside, []byte("not public data"), 0600); err != nil {
		t.Fatal(err)
	}
	if err := os.Symlink(outside, filepath.Join(dataRoot, "public.txt")); err != nil {
		t.Skipf("symlinks unavailable: %v", err)
	}
	snapshot := &Snapshot{Root: root, DataRoot: dataRoot, Files: map[string]FileInfo{}}
	if err := indexFiles(snapshot); err == nil || !strings.Contains(err.Error(), "non-regular file") {
		t.Fatalf("expected symlink rejection, got %v", err)
	}
}

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
			"abc": {Records: records, Prefix3: map[string][]uint32{"abc": {0, 1, 2, 3}}},
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
