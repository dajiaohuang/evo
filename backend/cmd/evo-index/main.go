package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"
	"path/filepath"

	"github.com/dajiaohuang/evo/backend/internal/store"
)

func main() {
	dataRoot := flag.String("data-root", ".", "Evo repository root containing data/")
	out := flag.String("out", "backend/index/current.json", "atomic output path")
	flag.Parse()
	s, err := store.New(*dataRoot)
	if err != nil {
		log.Fatal(err)
	}
	snapshot := s.Snapshot()
	files, total, err := snapshot.BuildFileIndex(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	doc := map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": snapshot.Manifest.DatasetVersion, "generatedAt": snapshot.Manifest.GeneratedAt, "totalBytes": total, "files": files}
	b, err := json.MarshalIndent(doc, "", "  ")
	if err != nil {
		log.Fatal(err)
	}
	b = append(b, '\n')
	if err := os.MkdirAll(filepath.Dir(*out), 0755); err != nil {
		log.Fatal(err)
	}
	tmp, err := os.CreateTemp(filepath.Dir(*out), ".evo-index-*")
	if err != nil {
		log.Fatal(err)
	}
	tmpName := tmp.Name()
	defer os.Remove(tmpName)
	if _, err = tmp.Write(b); err == nil {
		err = tmp.Sync()
	}
	if closeErr := tmp.Close(); err == nil {
		err = closeErr
	}
	if err != nil {
		log.Fatal(err)
	}
	if err = os.Rename(tmpName, *out); err != nil {
		log.Fatal(err)
	}
	fmt.Printf("indexed %d files (%d bytes) for %s -> %s\n", len(files), total, snapshot.Manifest.DatasetVersion, *out)
}
