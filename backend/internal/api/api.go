package api

import (
	"context"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"errors"
	"math"
	"net/http"
	"net/url"
	"os"
	"path"
	"strconv"
	"strings"
	"time"

	"github.com/dajiaohuang/evo/backend/internal/store"
)

type Handler struct{ Store *store.Store }

func NewHandler(s *store.Store) http.Handler { return &Handler{Store: s} }

func (h *Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	setCORS(w)
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusNoContent)
		return
	}
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		errorJSON(w, http.StatusMethodNotAllowed, "method_not_allowed", "only GET and HEAD are supported")
		return
	}
	switch {
	case r.URL.Path == "/healthz":
		writeJSON(w, r, http.StatusOK, map[string]any{"ok": true, "apiVersion": store.ProtocolVersion}, "no-store")
	case r.URL.Path == "/v1/capabilities":
		h.capabilities(w, r)
	case r.URL.Path == "/v1/releases/current":
		h.currentRelease(w, r)
	case r.URL.Path == "/v1/entities":
		h.entities(w, r)
	case strings.HasPrefix(r.URL.Path, "/v1/entities/"):
		h.entityRoute(w, r)
	case r.URL.Path == "/v1/search/names":
		h.search(w, r)
	case r.URL.Path == "/v1/sync/files":
		h.syncFiles(w, r)
	case strings.HasPrefix(r.URL.Path, "/v1/resources/"):
		h.resource(w, r)
	case r.URL.Path == "/v1/catalogue/manifest":
		h.catalogueManifest(w, r)
	case strings.HasPrefix(r.URL.Path, "/v1/catalogue/"):
		h.catalogueRoute(w, r)
	case strings.HasPrefix(r.URL.Path, "/v1/packages/"):
		h.packageRoute(w, r)
	case r.URL.Path == "/v1/maps" || r.URL.Path == "/v1/maps/manifest":
		h.maps(w, r)
	case r.URL.Path == "/v1/maps/frame":
		h.mapFrame(w, r)
	case r.URL.Path == "/v1/scenes":
		h.scenes(w, r)
	default:
		errorJSON(w, http.StatusNotFound, "not_found", "route not found")
	}
}

func setCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Accept,Content-Type,If-None-Match,If-Range,Range")
	w.Header().Set("Access-Control-Expose-Headers", "Accept-Ranges,Content-Length,Content-Range,ETag,Last-Modified,X-Content-Encoding")
}

func (h *Handler) capabilities(w http.ResponseWriter, r *http.Request) {
	s := h.Store.Snapshot()
	writeJSON(w, r, http.StatusOK, map[string]any{
		"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "protocolVersion": store.ProtocolVersion,
		"datasetVersion": s.Manifest.DatasetVersion, "appVersion": s.Manifest.AppVersion,
		"baseUrl": "",
		"profiles": map[string]any{
			"full":      map[string]any{"available": true, "offline": true, "scope": "complete current data release"},
			"web-light": map[string]any{"available": true, "offline": false, "scope": "client-selected subset; not a backend authorization boundary"},
		},
		"features":       []string{"entity-query", "catalogue-name-search", "catalogue-hierarchy", "evidence-and-sources", "package-files", "scene-data", "paleogeography", "paleotopography", "range-etag", "resumable-sync", "atomic-release-reload"},
		"endpoints":      map[string]string{"currentRelease": "/v1/releases/current", "entities": "/v1/entities/{id}", "search": "/v1/search/names?q={query}", "children": "/v1/entities/{id}/children", "evidence": "/v1/entities/{id}/evidence", "resource": "/v1/resources/{data-path}", "sync": "/v1/sync/files?profile=full", "maps": "/v1/maps/manifest"},
		"queryIndexes":   map[string]any{"atlasEntities": "in-memory 403-record registry", "catalogueNames": "COL26.8 prefix gzip-NDJSON shards", "catalogueHierarchy": "SHA-256 first-byte routed gzip-NDJSON shards"},
		"scopeStatement": s.Manifest.ScopeStatement, "wholeLifeCoverageClaim": s.Manifest.WholeLifeClaim,
	}, "public, max-age=60")
}

func (h *Handler) currentRelease(w http.ResponseWriter, r *http.Request) {
	s := h.Store.Snapshot()
	files := s.ListFiles("")
	var bytes int64
	known := 0
	for _, file := range files {
		bytes += file.Bytes
		if file.SHA256 != "" {
			known++
		}
	}
	writeJSON(w, r, http.StatusOK, map[string]any{
		"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "protocolVersion": store.ProtocolVersion,
		"datasetVersion": s.Manifest.DatasetVersion, "appVersion": s.Manifest.AppVersion, "generatedAt": s.Manifest.GeneratedAt,
		"releaseBase": "data/", "publication": "immutable local source snapshot", "profile": "full",
		"scopeStatement": s.Manifest.ScopeStatement, "includedMajorGroups": s.Manifest.IncludedGroups, "excludedMajorGroups": s.Manifest.ExcludedGroups, "wholeLifeCoverageClaim": s.Manifest.WholeLifeClaim,
		"counts": s.Manifest.Records, "sources": s.Manifest.Sources, "limitations": s.Manifest.Limitations,
		"files":     map[string]any{"count": len(files), "bytes": bytes, "checksummedAtStartup": known, "hashes": "manifest-known plus lazy SHA-256 for sync/resource requests", "inventory": "/v1/sync/files?profile=full"},
		"catalogue": map[string]any{"releaseAlias": s.Catalogue.ReleaseAlias, "releaseDate": s.Catalogue.ReleaseDate, "manifestResource": "/v1/resources/data/catalogue-of-life/releases/2026-08-20/registry/manifest.json"},
	}, "public, max-age=30, must-revalidate")
}

func (h *Handler) entities(w http.ResponseWriter, r *http.Request) {
	s := h.Store.Snapshot()
	limit, offset := pagination(r, 50, 200)
	if offset > len(s.Entities) {
		offset = len(s.Entities)
	}
	end := offset + limit
	if end > len(s.Entities) {
		end = len(s.Entities)
	}
	items := make([]json.RawMessage, end-offset)
	copy(items, s.Entities[offset:end])
	out := map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "records": items, "total": len(s.Entities), "limit": limit, "cursor": offset}
	if end < len(s.Entities) {
		out["nextCursor"] = encodeCursor(end)
	}
	writeJSON(w, r, http.StatusOK, out, "public, max-age=60")
}

func (h *Handler) entityRoute(w http.ResponseWriter, r *http.Request) {
	rest := strings.TrimPrefix(r.URL.Path, "/v1/entities/")
	parts := strings.Split(strings.Trim(rest, "/"), "/")
	if len(parts) < 1 || parts[0] == "" {
		errorJSON(w, http.StatusBadRequest, "invalid_id", "entity id is required")
		return
	}
	id, err := decodeSegment(parts[0])
	if err != nil {
		errorJSON(w, http.StatusBadRequest, "invalid_id", err.Error())
		return
	}
	s := h.Store.Snapshot()
	if len(parts) == 1 {
		raw, ok := s.EntitiesByID[id]
		if !ok {
			errorJSON(w, http.StatusNotFound, "entity_not_found", "atlas entity not found")
			return
		}
		h.entityResponse(w, r, s, id, raw)
		return
	}
	if len(parts) != 2 {
		errorJSON(w, http.StatusNotFound, "not_found", "unknown entity route")
		return
	}
	switch parts[1] {
	case "children":
		h.children(w, r, s, id)
	case "evidence":
		h.evidence(w, r, s, id)
	default:
		errorJSON(w, http.StatusNotFound, "not_found", "unknown entity route")
	}
}

func (h *Handler) entityResponse(w http.ResponseWriter, r *http.Request, s *store.Snapshot, id string, raw json.RawMessage) {
	var object map[string]json.RawMessage
	if json.Unmarshal(raw, &object) != nil {
		errorJSON(w, http.StatusInternalServerError, "invalid_entity", "stored entity is invalid")
		return
	}
	if profile, ok := s.ProfilesByID[id]; ok {
		object["profile"] = profile
	} else {
		object["profile"] = json.RawMessage("null")
	}
	values := s.RangesByEntity[id]
	ranges, _ := json.Marshal(values)
	object["rangeEvidence"] = ranges
	object["schemaVersion"] = json.RawMessage("1")
	object["apiVersion"] = json.RawMessage(`"v1"`)
	object["datasetVersion"] = json.RawMessage(strconv.Quote(s.Manifest.DatasetVersion))
	object["entityId"] = json.RawMessage(strconv.Quote(id))
	object["queryStatus"] = json.RawMessage(`"represented-descendant-closure"`)
	writeJSON(w, r, http.StatusOK, object, "public, max-age=60")
}

func (h *Handler) children(w http.ResponseWriter, r *http.Request, s *store.Snapshot, id string) {
	if _, ok := s.EntitiesByID[id]; ok {
		ids := s.ChildrenByID[id]
		limit, offset := pagination(r, 100, 500)
		if offset > len(ids) {
			offset = len(ids)
		}
		end := offset + limit
		if end > len(ids) {
			end = len(ids)
		}
		items := make([]json.RawMessage, 0, end-offset)
		for _, childID := range ids[offset:end] {
			items = append(items, s.EntitiesByID[childID])
		}
		out := map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "parentId": id, "queryStatus": "represented-descendant-closure", "records": items, "total": len(ids), "limit": limit}
		if end < len(ids) {
			out["nextCursor"] = encodeCursor(end)
		}
		writeJSON(w, r, http.StatusOK, out, "public, max-age=60")
		return
	}
	items, err := s.CatalogueChildren(id)
	if err != nil {
		errorJSON(w, http.StatusInternalServerError, "catalogue_read_failed", err.Error())
		return
	}
	if items == nil {
		errorJSON(w, http.StatusNotFound, "entity_not_found", "entity or catalogue parent not found")
		return
	}
	limit, offset := pagination(r, 100, 500)
	if offset > len(items) {
		offset = len(items)
	}
	end := offset + limit
	if end > len(items) {
		end = len(items)
	}
	out := map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "parentId": id, "queryStatus": "catalogue-direct-children", "records": items[offset:end], "total": len(items), "limit": limit}
	if end < len(items) {
		out["nextCursor"] = encodeCursor(end)
	}
	writeJSON(w, r, http.StatusOK, out, "public, max-age=60")
}

func (h *Handler) evidence(w http.ResponseWriter, r *http.Request, s *store.Snapshot, id string) {
	if _, ok := s.EntitiesByID[id]; !ok {
		raw, _ := s.CatalogueNode(id)
		if raw == nil {
			errorJSON(w, http.StatusNotFound, "entity_not_found", "entity not found")
			return
		}
	}
	ranges, claims, references := s.Evidence(id)
	writeJSON(w, r, http.StatusOK, map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "entityId": id, "ranges": ranges, "claims": claims, "references": references, "status": "source-bounded"}, "public, max-age=60")
}

func (h *Handler) search(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")
	s := h.Store.Snapshot()
	catalogue, catalogueTotal, err := s.SearchCatalogue(query)
	if err != nil {
		errorJSON(w, http.StatusInternalServerError, "search_failed", err.Error())
		return
	}
	core := s.EntitySearch(query)
	records := make([]map[string]any, 0, len(core)+len(catalogue))
	for _, raw := range core {
		var value struct {
			ID        string            `json:"id"`
			Names     map[string]string `json:"names"`
			PackageID string            `json:"packageId"`
			Rank      string            `json:"rank"`
			Kind      string            `json:"entityKind"`
		}
		if json.Unmarshal(raw, &value) == nil {
			records = append(records, map[string]any{"id": value.ID, "kind": value.Kind, "title": value.Names["scientific"], "titleEn": value.Names["en"], "titleZh": value.Names["zh"], "packageId": value.PackageID, "rank": value.Rank, "source": "atlas-dossier-registry"})
		}
	}
	for _, value := range catalogue {
		records = append(records, map[string]any{"id": value.ID, "kind": "catalogue-name", "title": value.ScientificName, "authorship": value.Authorship, "status": value.Status, "acceptedId": value.AcceptedID, "parentId": value.ParentID, "sourceDatasetId": value.SourceDatasetID, "source": "COL26.8-nomenclatural-registry", "recordUrl": "/v1/catalogue/taxa/" + value.ID})
	}
	limit, offset := pagination(r, 20, 100)
	if offset > len(records) {
		offset = len(records)
	}
	end := offset + limit
	if end > len(records) {
		end = len(records)
	}
	out := map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "query": query, "normalizedQuery": normalizeForResponse(query), "records": records[offset:end], "totalMatches": len(core) + catalogueTotal, "limit": limit, "sources": []string{"atlas-dossier-registry", "COL26.8-nomenclatural-registry"}}
	if end < len(records) {
		out["nextCursor"] = encodeCursor(end)
	}
	writeJSON(w, r, http.StatusOK, out, "public, max-age=30")
}

func normalizeForResponse(query string) string {
	return store.NormalizeQuery(query)
}

func (h *Handler) catalogueRoute(w http.ResponseWriter, r *http.Request) {
	rest := strings.TrimPrefix(r.URL.Path, "/v1/catalogue/")
	parts := strings.Split(strings.Trim(rest, "/"), "/")
	if len(parts) < 2 || parts[0] != "taxa" {
		errorJSON(w, http.StatusNotFound, "not_found", "unknown catalogue route")
		return
	}
	id, err := decodeSegment(parts[1])
	if err != nil {
		errorJSON(w, http.StatusBadRequest, "invalid_id", err.Error())
		return
	}
	s := h.Store.Snapshot()
	if len(parts) == 2 {
		raw, err := s.CatalogueNode(id)
		if err != nil {
			errorJSON(w, http.StatusInternalServerError, "catalogue_read_failed", err.Error())
			return
		}
		if raw == nil {
			errorJSON(w, http.StatusNotFound, "catalogue_taxon_not_found", "catalogue record not found")
			return
		}
		writeJSON(w, r, http.StatusOK, map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "entityId": id, "record": raw, "releaseAlias": s.Catalogue.ReleaseAlias}, "public, max-age=300")
		return
	}
	if len(parts) == 3 && parts[2] == "children" {
		raw, err := s.CatalogueNode(id)
		if err != nil {
			errorJSON(w, 500, "catalogue_read_failed", err.Error())
			return
		}
		if raw == nil {
			errorJSON(w, 404, "catalogue_taxon_not_found", "catalogue parent not found")
			return
		}
		items, err := s.CatalogueChildren(id)
		if err != nil {
			errorJSON(w, 500, "catalogue_read_failed", err.Error())
			return
		}
		limit, offset := pagination(r, 100, 500)
		if offset > len(items) {
			offset = len(items)
		}
		end := offset + limit
		if end > len(items) {
			end = len(items)
		}
		out := map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "parentId": id, "queryStatus": "catalogue-direct-children", "records": items[offset:end], "total": len(items), "limit": limit}
		if end < len(items) {
			out["nextCursor"] = encodeCursor(end)
		}
		writeJSON(w, r, 200, out, "public, max-age=60")
		return
	}
	errorJSON(w, http.StatusNotFound, "not_found", "unknown catalogue route")
}

func (h *Handler) catalogueManifest(w http.ResponseWriter, r *http.Request) {
	s := h.Store.Snapshot()
	writeJSON(w, r, http.StatusOK, json.RawMessage(s.Catalogue.Raw), "public, max-age=300")
}

func (h *Handler) packageRoute(w http.ResponseWriter, r *http.Request) {
	rest := strings.TrimPrefix(r.URL.Path, "/v1/packages/")
	parts := strings.Split(strings.Trim(rest, "/"), "/")
	if len(parts) != 1 {
		errorJSON(w, http.StatusNotFound, "not_found", "unknown package route")
		return
	}
	id, err := decodeSegment(parts[0])
	if err != nil {
		errorJSON(w, http.StatusBadRequest, "invalid_id", err.Error())
		return
	}
	s := h.Store.Snapshot()
	p, ok := s.Package(id)
	if !ok {
		errorJSON(w, http.StatusNotFound, "package_not_found", "package not found")
		return
	}
	files := s.PackageFiles(id)
	writeJSON(w, r, http.StatusOK, map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "package": p.Raw, "files": files, "fileCount": len(files), "offline": true, "download": "Use /v1/resources/{path} with each descriptor's sha256 and Range support."}, "public, max-age=300")
}

func (h *Handler) maps(w http.ResponseWriter, r *http.Request) {
	s := h.Store.Snapshot()
	data, err := s.MapManifestData()
	if err != nil {
		errorJSON(w, http.StatusInternalServerError, "map_index_failed", err.Error())
		return
	}
	writeJSON(w, r, http.StatusOK, data, "public, max-age=300")
}

func (h *Handler) mapFrame(w http.ResponseWriter, r *http.Request) {
	layer := r.URL.Query().Get("layer")
	age, err := strconv.ParseFloat(r.URL.Query().Get("ageMa"), 64)
	if layer == "" || err != nil || math.IsNaN(age) || math.IsInf(age, 0) {
		errorJSON(w, http.StatusBadRequest, "invalid_map_query", "layer and finite ageMa are required")
		return
	}
	s := h.Store.Snapshot()
	frame, ok := s.SelectMapFrame(layer, age)
	if !ok {
		errorJSON(w, http.StatusNotFound, "map_frame_unavailable", "no nearest map frame exists inside the published range")
		return
	}
	writeJSON(w, r, http.StatusOK, map[string]any{
		"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion,
		"selection": map[string]any{"layerId": layer, "requestedAgeMa": age, "selectedAgeMa": frame.AgeMa, "deltaMa": absFloat(frame.AgeMa - age), "method": "nearest", "tieBreak": "younger"},
		"frame":     frame, "resourceUrl": "/v1/resources/" + frame.File.Path,
	}, "public, max-age=300")
}

func (h *Handler) scenes(w http.ResponseWriter, r *http.Request) {
	s := h.Store.Snapshot()
	kind := r.URL.Query().Get("kind")
	if kind == "stories" || kind == "" {
		stories, err := s.ReadJSON("data/stories.json")
		if err != nil {
			errorJSON(w, 500, "scene_read_failed", err.Error())
			return
		}
		if kind == "stories" {
			writeJSON(w, r, 200, map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "kind": "stories", "records": json.RawMessage(stories)}, "public, max-age=300")
			return
		}
	}
	if kind == "events" {
		events, err := s.ReadJSON("data/events.json")
		if err != nil {
			errorJSON(w, 500, "scene_read_failed", err.Error())
			return
		}
		writeJSON(w, r, 200, map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "kind": "events", "records": json.RawMessage(events)}, "public, max-age=300")
		return
	}
	if kind == "" {
		stories, _ := s.ReadJSON("data/stories.json")
		events, _ := s.ReadJSON("data/events.json")
		writeJSON(w, r, 200, map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "stories": json.RawMessage(stories), "events": json.RawMessage(events)}, "public, max-age=300")
		return
	}
	errorJSON(w, http.StatusNotFound, "scene_not_found", "scene kind must be stories or events")
}

func (h *Handler) syncFiles(w http.ResponseWriter, r *http.Request) {
	s := h.Store.Snapshot()
	profile := r.URL.Query().Get("profile")
	if profile == "" {
		profile = "full"
	}
	if profile != "full" {
		errorJSON(w, 400, "unsupported_profile", "full is the complete offline profile; preview filtering belongs to clients")
		return
	}
	since := r.URL.Query().Get("since")
	if since == s.Manifest.DatasetVersion {
		writeJSON(w, r, 200, map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": since, "releaseVersion": since, "profile": profile, "upToDate": true, "complete": true, "files": []any{}}, "no-store")
		return
	}
	prefix := r.URL.Query().Get("prefix")
	if prefix != "" && prefix != "data/" {
		var err error
		prefix, err = store.NormalizeResourcePath(prefix)
		if err != nil {
			errorJSON(w, http.StatusBadRequest, "invalid_prefix", err.Error())
			return
		}
	}
	files := s.ListFiles(prefix)
	limit, offset := pagination(r, 500, 5000)
	if offset > len(files) {
		offset = len(files)
	}
	end := offset + limit
	if end > len(files) {
		end = len(files)
	}
	descriptors := make([]map[string]any, 0, end-offset)
	for _, file := range files[offset:end] {
		file, err := s.EnsureHash(r.Context(), file.Path)
		if err != nil {
			if errors.Is(err, context.Canceled) {
				errorJSON(w, 499, "request_canceled", "sync request canceled")
				return
			}
			errorJSON(w, 500, "hash_failed", err.Error())
			return
		}
		descriptors = append(descriptors, map[string]any{"path": file.Path, "profile": profile, "bytes": file.Bytes, "sha256": file.SHA256, "mediaType": file.MediaType, "encoding": file.Encoding, "releaseVersion": s.Manifest.DatasetVersion, "url": "/v1/resources/" + file.Path})
	}
	out := map[string]any{"schemaVersion": 1, "apiVersion": store.ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "releaseVersion": s.Manifest.DatasetVersion, "fromVersion": since, "deltaFrom": since, "profile": profile, "complete": end == len(files), "totalFiles": len(files), "records": descriptors, "files": descriptors, "resourceBase": "/v1/resources/", "range": "Use Range and If-Range with each file descriptor's ETag."}
	if end < len(files) {
		out["nextCursor"] = encodeCursor(end)
	}
	writeJSON(w, r, 200, out, "no-store")
}

func absFloat(value float64) float64 {
	if value < 0 {
		return -value
	}
	return value
}

func (h *Handler) resource(w http.ResponseWriter, r *http.Request) {
	resourcePath, err := decodePath(strings.TrimPrefix(r.URL.Path, "/v1/resources/"))
	if err != nil {
		errorJSON(w, 400, "invalid_resource_path", err.Error())
		return
	}
	s := h.Store.Snapshot()
	file, err := s.Resource(resourcePath)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			errorJSON(w, 404, "resource_not_found", "resource not found")
			return
		}
		errorJSON(w, 400, "invalid_resource_path", err.Error())
		return
	}
	if file.SHA256 == "" {
		file, err = s.EnsureHash(r.Context(), resourcePath)
		if err != nil {
			errorJSON(w, 500, "hash_failed", err.Error())
			return
		}
	}
	etag := `"` + file.SHA256 + `"`
	w.Header().Set("ETag", etag)
	w.Header().Set("Accept-Ranges", "bytes")
	w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
	w.Header().Set("Content-Type", file.MediaType)
	w.Header().Set("X-Content-Encoding", file.Encoding)
	if r.Header.Get("If-None-Match") == etag {
		w.WriteHeader(http.StatusNotModified)
		return
	}
	input, err := os.Open(file.FullPath)
	if err != nil {
		errorJSON(w, 500, "resource_open_failed", err.Error())
		return
	}
	defer input.Close()
	if ifRange := r.Header.Get("If-Range"); ifRange != "" && ifRange != etag {
		request := r.Clone(r.Context())
		request.Header = r.Header.Clone()
		request.Header.Del("Range")
		r = request
	}
	http.ServeContent(w, r, path.Base(file.Path), time.Time{}, input)
}

func writeJSON(w http.ResponseWriter, r *http.Request, status int, value any, cache string) {
	b, err := json.Marshal(value)
	if err != nil {
		errorJSON(w, 500, "encode_failed", err.Error())
		return
	}
	digest := sha256.Sum256(b)
	etag := `"` + hex.EncodeToString(digest[:]) + `"`
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("ETag", etag)
	if cache != "" {
		w.Header().Set("Cache-Control", cache)
	}
	if r.Header.Get("If-None-Match") == etag {
		w.WriteHeader(http.StatusNotModified)
		return
	}
	w.WriteHeader(status)
	if r.Method != http.MethodHead {
		_, _ = w.Write(b)
	}
}

func errorJSON(w http.ResponseWriter, status int, code, message string) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	payload, _ := json.Marshal(map[string]any{"error": map[string]string{"code": code, "message": message}})
	_, _ = w.Write(payload)
}
func decodeSegment(value string) (string, error) { return url.PathUnescape(value) }
func decodePath(value string) (string, error)    { return url.PathUnescape(value) }
func pagination(r *http.Request, defaultLimit, maxLimit int) (int, int) {
	limit := defaultLimit
	if value, _ := strconv.Atoi(r.URL.Query().Get("limit")); value > 0 {
		limit = value
	}
	if limit > maxLimit {
		limit = maxLimit
	}
	offset := 0
	if cursor := r.URL.Query().Get("cursor"); cursor != "" {
		if value, err := decodeCursor(cursor); err == nil && value >= 0 {
			offset = value
		}
	}
	return limit, offset
}
func encodeCursor(value int) string {
	return base64.RawURLEncoding.EncodeToString([]byte(strconv.Itoa(value)))
}
func decodeCursor(value string) (int, error) {
	bytes, err := base64.RawURLEncoding.DecodeString(value)
	if err != nil {
		return 0, err
	}
	return strconv.Atoi(string(bytes))
}
