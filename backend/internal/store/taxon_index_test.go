package store

import (
	"bytes"
	"context"
	"path/filepath"
	"strings"
	"testing"
)

func TestTaxonArtifactRoundTrip(t *testing.T) {
	const datasetVersion = "test-dataset"
	const releaseAlias = "test-release"
	index := &TaxonIndex{
		arena: []byte("rootRootchildChild"),
		nodes: []packedTaxon{
			{id: stringRef{0, 4}, scientificName: stringRef{4, 4}, parent: noTaxon, childStart: 0, childCount: 1, rankID: 1, statusID: 1, sourceDatasetID: 1},
			{id: stringRef{8, 5}, scientificName: stringRef{13, 5}, parent: 0, childStart: 1, childCount: 0, rankID: 2, statusID: 1, sourceDatasetID: 1},
		},
		children:            []uint32{1},
		roots:               []uint32{0},
		rankValues:          []string{"", "class", "species"},
		statusValues:        []string{"", "accepted"},
		sourceDatasetValues: []string{"", "source"},
	}
	index.ids = newPackedIDTable(len(index.nodes))
	for i := range index.nodes {
		if err := index.ids.insert(hashTaxonIDRef(index.arena, index.nodes[i].id), uint32(i), index); err != nil {
			t.Fatal(err)
		}
	}
	snapshot := &Snapshot{
		Manifest:  DatasetManifest{DatasetVersion: datasetVersion},
		Catalogue: CatalogueManifest{ReleaseAlias: releaseAlias},
		Taxonomy:  index,
	}
	snapshot.Catalogue.Hierarchy.Nodes.Files = []CatalogueFile{{Path: "hierarchy/nodes/00.jsonl.gz", Records: 2, Bytes: 123, SHA256: "test-sha"}}
	path := filepath.Join(t.TempDir(), "catalogue-tree.bin")
	if err := snapshot.WriteTaxonArtifact(path); err != nil {
		t.Fatal(err)
	}
	loaded, err := loadTaxonArtifact(path, snapshot)
	if err != nil {
		t.Fatal(err)
	}
	root, ok := loaded.Record("root")
	if !ok || root.ScientificName != "Root" || root.ChildCount != 1 || root.Rank != "class" || root.SourceDataset == nil || *root.SourceDataset != "source" {
		t.Fatalf("unexpected root record: %#v", root)
	}
	children, total, ok := loaded.ChildrenPage("root", 0, 1)
	if !ok || total != 1 || len(children) != 1 || children[0].ID != "child" || children[0].ParentID == nil || *children[0].ParentID != "root" {
		t.Fatalf("unexpected child page: %#v total=%d found=%v", children, total, ok)
	}
}

func TestTaxonTreeJSONLStreamIsBoundedAndComplete(t *testing.T) {
	index := &TaxonIndex{
		arena: []byte("rootRootchildChild"),
		nodes: []packedTaxon{
			{id: stringRef{0, 4}, scientificName: stringRef{4, 4}, parent: noTaxon, childCount: 1, rankID: 1, statusID: 1},
			{id: stringRef{8, 5}, scientificName: stringRef{13, 5}, parent: 0, childCount: 0, rankID: 2, statusID: 1},
		},
		children:            []uint32{1},
		roots:               []uint32{0},
		rankValues:          []string{"", "class", "species"},
		statusValues:        []string{"", "accepted"},
		sourceDatasetValues: []string{""},
	}
	var output bytes.Buffer
	if err := index.StreamJSONL(context.Background(), &output); err != nil {
		t.Fatal(err)
	}
	lines := strings.Split(strings.TrimSpace(output.String()), "\n")
	if len(lines) != 2 || !strings.Contains(lines[0], `"id":"root"`) || !strings.Contains(lines[1], `"id":"child"`) {
		t.Fatalf("unexpected stream: %q", output.String())
	}
}
