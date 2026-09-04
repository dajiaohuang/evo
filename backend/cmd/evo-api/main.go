package main

import (
	"flag"
	"log"
	"net/http"
	"time"

	"github.com/dajiaohuang/evo/backend/internal/api"
	"github.com/dajiaohuang/evo/backend/internal/store"
)

func main() {
	dataRoot := flag.String("data-root", ".", "Evo repository root containing data/")
	addr := flag.String("addr", ":8787", "HTTP listen address")
	flag.Parse()
	s, err := store.New(*dataRoot)
	if err != nil {
		log.Fatalf("load release: %v", err)
	}
	snapshot := s.Snapshot()
	server := &http.Server{Addr: *addr, Handler: api.NewHandler(s), ReadHeaderTimeout: 5 * time.Second, ReadTimeout: 30 * time.Second, WriteTimeout: 10 * time.Minute, IdleTimeout: 2 * time.Minute}
	log.Printf("evo-api api=%s dataset=%s files=%d addr=%s", store.ProtocolVersion, snapshot.Manifest.DatasetVersion, len(snapshot.FileOrder), *addr)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
}
