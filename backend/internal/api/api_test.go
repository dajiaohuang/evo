package api

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"testing"

	"github.com/dajiaohuang/evo/backend/internal/store"
)

var (
	testStoreOnce sync.Once
	testStore     *store.Store
	testStoreErr  error
)

func testHandler(t *testing.T) http.Handler {
	t.Helper()
	testStoreOnce.Do(func() {
		root, err := filepath.Abs(filepath.Join("..", "..", ".."))
		if err != nil {
			testStoreErr = err
			return
		}
		testStore, testStoreErr = store.New(root)
	})
	if testStoreErr != nil {
		t.Fatal(testStoreErr)
	}
	return NewHandler(testStore)
}

func request(t *testing.T, h http.Handler, method, target string, headers map[string]string) *httptest.ResponseRecorder {
	t.Helper()
	r := httptest.NewRequest(method, target, nil)
	for key, value := range headers {
		r.Header.Set(key, value)
	}
	w := httptest.NewRecorder()
	h.ServeHTTP(w, r)
	return w
}

func TestCapabilitiesAndCurrentRelease(t *testing.T) {
	h := testHandler(t)
	w := request(t, h, "GET", "/v1/capabilities", nil)
	if w.Code != 200 {
		t.Fatalf("capabilities status %d", w.Code)
	}
	var capabilities map[string]any
	if err := json.Unmarshal(w.Body.Bytes(), &capabilities); err != nil {
		t.Fatal(err)
	}
	if capabilities["apiVersion"] != "v1" {
		t.Fatalf("apiVersion=%v", capabilities["apiVersion"])
	}
	if capabilities["profiles"] == nil {
		t.Fatal("profiles missing")
	}
	treeIndex, ok := capabilities["treeIndex"].(map[string]any)
	if !ok || treeIndex["representation"] != "packed-adjacency" || treeIndex["releaseAlias"] == "" {
		t.Fatalf("tree index missing or incomplete: %v", capabilities["treeIndex"])
	}
	if roots, ok := capabilities["treeRoots"].([]any); !ok || len(roots) == 0 {
		t.Fatalf("tree roots missing: %v", capabilities["treeRoots"])
	}
	features, ok := capabilities["features"].([]any)
	if !ok || !contains(features, "catalogue-tree-stream") || !contains(features, "source-registry") {
		t.Fatalf("tree stream capability missing: %v", capabilities["features"])
	}
	w = request(t, h, "GET", "/v1/releases/current", nil)
	if w.Code != 200 {
		t.Fatalf("release status %d", w.Code)
	}
	var release struct {
		DatasetVersion string `json:"datasetVersion"`
	}
	if err := json.Unmarshal(w.Body.Bytes(), &release); err != nil || release.DatasetVersion == "" {
		t.Fatalf("dataset version missing: %s", w.Body.String())
	}
	if !strings.Contains(w.Body.String(), "/v1/resources/data/catalogue-of-life/releases/") {
		t.Fatalf("catalogue manifest URL is not release-derived: %s", w.Body.String())
	}
	w = request(t, h, "HEAD", "/v1/catalogue/tree.ndjson", nil)
	if w.Code != http.StatusOK || w.Header().Get("Content-Type") != "application/x-ndjson; charset=utf-8" {
		t.Fatalf("tree stream HEAD contract: %d %q", w.Code, w.Header().Get("Content-Type"))
	}
	w = request(t, h, "GET", "/v1/sync/files.ndjson?profile=full&prefix=data/manifest.json", nil)
	if w.Code != http.StatusOK || w.Header().Get("Content-Type") != "application/x-ndjson; charset=utf-8" {
		t.Fatalf("sync stream contract: %d %q", w.Code, w.Header().Get("Content-Type"))
	}
	lines := strings.Split(strings.TrimSpace(w.Body.String()), "\n")
	if len(lines) != 2 {
		t.Fatalf("sync stream lines=%d body=%s", len(lines), w.Body.String())
	}
	var manifest, file map[string]any
	if err := json.Unmarshal([]byte(lines[0]), &manifest); err != nil || manifest["kind"] != "manifest" || manifest["totalFiles"] != float64(1) {
		t.Fatalf("sync stream manifest: %s", lines[0])
	}
	if err := json.Unmarshal([]byte(lines[1]), &file); err != nil || file["kind"] != "file" || file["path"] != "data/manifest.json" {
		t.Fatalf("sync stream file: %s", lines[1])
	}
	w = request(t, h, "GET", "/v1/sync/files.ndjson?since=not-current", nil)
	if w.Code != http.StatusConflict {
		t.Fatalf("sync stream release mismatch status %d", w.Code)
	}
}

func TestSourceRegistryLookup(t *testing.T) {
	h := testHandler(t)
	w := request(t, h, "GET", "/v1/sources/ChecklistBank/1008", nil)
	if w.Code != http.StatusOK {
		t.Fatalf("source status %d: %s", w.Code, w.Body.String())
	}
	var value struct {
		DatasetVersion string `json:"datasetVersion"`
		SourceKey      string `json:"sourceKey"`
		Source         struct {
			Authority string `json:"authority"`
			SourceID  string `json:"sourceId"`
			Title     string `json:"title"`
			Citation  string `json:"citation"`
		} `json:"source"`
	}
	if err := json.Unmarshal(w.Body.Bytes(), &value); err != nil {
		t.Fatal(err)
	}
	if value.DatasetVersion == "" || value.SourceKey != "ChecklistBank:1008" || value.Source.Authority != "ChecklistBank" || value.Source.SourceID != "1008" || value.Source.Title != "The Reptile Database" || value.Source.Citation == "" {
		t.Fatalf("unexpected source response: %s", w.Body.String())
	}
	w = request(t, h, "GET", "/v1/sources/World%20Spider%20Catalog%20via%20ChecklistBank/56185", nil)
	if w.Code != http.StatusOK || !strings.Contains(w.Body.String(), "The World Spider Catalog") {
		t.Fatalf("sidecar source status/body %d: %s", w.Code, w.Body.String())
	}
	w = request(t, h, "GET", "/v1/sources/unknown-authority/1008", nil)
	if w.Code != http.StatusNotFound {
		t.Fatalf("unknown source status %d", w.Code)
	}
	w = request(t, h, "GET", "/v1/sources/ChecklistBank", nil)
	if w.Code != http.StatusBadRequest {
		t.Fatalf("incomplete source status %d", w.Code)
	}
}

func contains(values []any, want string) bool {
	for _, value := range values {
		if value == want {
			return true
		}
	}
	return false
}

func TestCatalogueTreePagingContract(t *testing.T) {
	h := testHandler(t)
	s := h.(*Handler).Store.Snapshot()
	if s.Taxonomy == nil || s.Taxonomy.NodeCount() < 1000000 {
		t.Fatalf("resident taxonomy is not loaded: %#v", s.Taxonomy)
	}
	rootID := s.Taxonomy.RootID()
	w := request(t, h, "GET", "/v1/catalogue/taxa/"+url.PathEscape(rootID)+"/children?limit=3", nil)
	if w.Code != http.StatusOK {
		t.Fatalf("tree children status %d: %s", w.Code, w.Body.String())
	}
	var value struct {
		SchemaVersion   int                 `json:"schemaVersion"`
		APIVersion      string              `json:"apiVersion"`
		ProtocolVersion string              `json:"protocolVersion"`
		DatasetVersion  string              `json:"datasetVersion"`
		ParentID        string              `json:"parentId"`
		Total           int                 `json:"total"`
		Records         []store.TaxonRecord `json:"records"`
	}
	if err := json.Unmarshal(w.Body.Bytes(), &value); err != nil {
		t.Fatal(err)
	}
	if value.SchemaVersion != 1 || value.APIVersion != store.ProtocolVersion || value.ProtocolVersion != store.ProtocolVersion || value.DatasetVersion == "" || value.ParentID != rootID || value.Total < len(value.Records) || len(value.Records) > 3 {
		t.Fatalf("unexpected tree page: %s", w.Body.String())
	}
	if len(value.Records) > 0 && value.Records[0].ID == "" {
		t.Fatal("tree child has no id")
	}
}

func TestEntityChildrenEvidenceAndSearch(t *testing.T) {
	h := testHandler(t)
	for _, target := range []string{"/v1/entities/perissodactyla", "/v1/entities/perissodactyla/children", "/v1/entities/perissodactyla/evidence", "/v1/search/names?q=perissodactyla&limit=10"} {
		w := request(t, h, "GET", target, nil)
		if w.Code != 200 {
			t.Fatalf("%s status %d: %s", target, w.Code, w.Body.String())
		}
	}
}

func TestAtlasLeafChildrenDoNotFallbackToCatalogue(t *testing.T) {
	h := testHandler(t)
	handler := h.(*Handler)
	s := handler.Store.Snapshot()
	var leafID string
	for id := range s.EntitiesByID {
		if len(s.ChildrenByID[id]) == 0 {
			leafID = id
			break
		}
	}
	if leafID == "" {
		t.Fatal("no atlas leaf found")
	}
	w := request(t, h, "GET", "/v1/entities/"+leafID+"/children", nil)
	if w.Code != http.StatusOK {
		t.Fatalf("leaf children status %d: %s", w.Code, w.Body.String())
	}
	var value struct {
		QueryStatus string `json:"queryStatus"`
		Total       int    `json:"total"`
	}
	if err := json.Unmarshal(w.Body.Bytes(), &value); err != nil {
		t.Fatal(err)
	}
	if value.QueryStatus != "represented-descendant-closure" || value.Total != 0 {
		t.Fatalf("unexpected leaf response %s", w.Body.String())
	}
}

func TestResourceRangeAndETag(t *testing.T) {
	h := testHandler(t)
	w := request(t, h, "GET", "/v1/resources/data/manifest.json", map[string]string{"Range": "bytes=0-9"})
	if w.Code != 206 {
		t.Fatalf("range status %d", w.Code)
	}
	if w.Header().Get("Accept-Ranges") != "bytes" {
		t.Fatal("missing ranges")
	}
	if !strings.Contains(w.Header().Get("Access-Control-Expose-Headers"), "Content-Range") {
		t.Fatal("range headers are not exposed to browser clients")
	}
	etag := w.Header().Get("ETag")
	if etag == "" {
		t.Fatal("missing etag")
	}
	w = request(t, h, "GET", "/v1/resources/data/manifest.json", map[string]string{"If-None-Match": etag})
	if w.Code != 304 {
		t.Fatalf("conditional status %d", w.Code)
	}
	w = request(t, h, "GET", "/v1/resources/data/../manifest.json", nil)
	if w.Code != 400 && w.Code != 404 {
		t.Fatalf("traversal status %d", w.Code)
	}
}

func TestResourceRangeResumeWithSyncDigest(t *testing.T) {
	h := testHandler(t)
	resourcePath := "/v1/resources/data/manifest.json"
	disk, err := os.ReadFile(filepath.Join("..", "..", "..", "data", "manifest.json"))
	if err != nil {
		t.Fatal(err)
	}
	if len(disk) < 32 {
		t.Fatalf("manifest is unexpectedly small: %d", len(disk))
	}

	first := request(t, h, "GET", resourcePath, map[string]string{"Range": "bytes=0-15"})
	if first.Code != http.StatusPartialContent || !bytes.Equal(first.Body.Bytes(), disk[:16]) {
		t.Fatalf("first range status/body: %d %d", first.Code, first.Body.Len())
	}
	etag := first.Header().Get("ETag")
	if len(etag) < 2 {
		t.Fatalf("missing strong etag: %q", etag)
	}
	second := request(t, h, "GET", resourcePath, map[string]string{
		"Range":    "bytes=16-",
		"If-Range": strings.Trim(etag, `"`),
	})
	if second.Code != http.StatusPartialContent || !bytes.Equal(second.Body.Bytes(), disk[16:]) {
		t.Fatalf("resumed range status/body: %d %d want %d", second.Code, second.Body.Len(), len(disk)-16)
	}
}

func TestOptionalExtensionResourceIsBytePreserving(t *testing.T) {
	h := testHandler(t)
	handler := h.(*Handler)
	s := handler.Store.Snapshot()
	const resourcePath = "data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/trichomycetes-sidecar.json"
	file, ok := s.File(resourcePath)
	if !ok {
		t.Skip("optional Trichomycetes extension is not in this release")
	}
	disk, err := os.ReadFile(filepath.Join(s.Root, filepath.FromSlash(resourcePath)))
	if err != nil {
		t.Fatal(err)
	}
	w := request(t, h, "GET", "/v1/resources/"+resourcePath, nil)
	if w.Code != http.StatusOK {
		t.Fatalf("extension resource status %d: %s", w.Code, w.Body.String())
	}
	if !bytes.Equal(w.Body.Bytes(), disk) {
		t.Fatal("extension resource was transformed instead of served byte-for-byte")
	}
	if file.Bytes != int64(len(disk)) {
		t.Fatalf("extension bytes=%d, disk bytes=%d", file.Bytes, len(disk))
	}
}

func TestSyncCursorAndScene(t *testing.T) {
	h := testHandler(t)
	w := request(t, h, "GET", "/v1/sync/files?profile=full&prefix=data/manifest.json&limit=1", nil)
	if w.Code != 200 {
		t.Fatalf("sync status %d: %s", w.Code, w.Body.String())
	}
	var value struct {
		Records []map[string]any `json:"records"`
	}
	if err := json.Unmarshal(w.Body.Bytes(), &value); err != nil || len(value.Records) != 1 {
		t.Fatalf("sync payload %s", w.Body.String())
	}
	for _, field := range []string{"path", "profile", "bytes", "sha256", "mediaType", "releaseVersion", "deltaFrom"} {
		if _, ok := value.Records[0][field]; !ok {
			t.Fatalf("sync descriptor missing %s: %s", field, w.Body.String())
		}
	}
	w = request(t, h, "GET", "/v1/scenes?kind=stories", nil)
	if w.Code != 200 {
		t.Fatalf("scene status %d", w.Code)
	}
	w = request(t, h, "GET", "/v1/sync/files?profile=full&prefix=../", nil)
	if w.Code != http.StatusBadRequest {
		t.Fatalf("invalid prefix status %d", w.Code)
	}
	w = request(t, h, "GET", "/v1/entities/not-a-real-id/children", nil)
	if w.Code != http.StatusNotFound {
		t.Fatalf("unknown child parent status %d", w.Code)
	}
}

func TestCatalogueAndMapContracts(t *testing.T) {
	h := testHandler(t)
	w := request(t, h, "GET", "/v1/catalogue/manifest", nil)
	if w.Code != 200 || !strings.Contains(w.Body.String(), "COL26.8") {
		t.Fatalf("catalogue manifest status/body %d", w.Code)
	}
	w = request(t, h, "GET", "/v1/maps/frame?layer=coastlines&ageMa=12.4", nil)
	if w.Code != 200 {
		t.Fatalf("map frame status %d: %s", w.Code, w.Body.String())
	}
	var value struct {
		Selection struct {
			SelectedAgeMa float64 `json:"selectedAgeMa"`
		} `json:"selection"`
	}
	if err := json.Unmarshal(w.Body.Bytes(), &value); err != nil {
		t.Fatal(err)
	}
	if value.Selection.SelectedAgeMa != 12.81 {
		t.Fatalf("nearest frame=%v", value.Selection.SelectedAgeMa)
	}
	w = request(t, h, "GET", "/v1/maps/frame?layer=coastlines&ageMa=9999", nil)
	if w.Code != 404 {
		t.Fatalf("out-of-range map status %d", w.Code)
	}
}
