package store

import (
	"bufio"
	"compress/gzip"
	"container/heap"
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/fs"
	"math"
	"os"
	"path/filepath"
	"sort"
	"strconv"
	"strings"
	"sync"
	"unicode"
)

const (
	ProtocolVersion    = "v1"
	dataManifestPath   = "data/manifest.json"
	maxShardCacheBytes = 128 << 20
)

// FileInfo is a release file descriptor. Hash is filled from data/manifest.json
// when available and calculated lazily for files outside that generated digest map.
type FileInfo struct {
	Path      string `json:"path"`
	Bytes     int64  `json:"bytes"`
	SHA256    string `json:"sha256"`
	MediaType string `json:"mediaType"`
	Encoding  string `json:"encoding,omitempty"`
	FullPath  string `json:"-"`
}

type DatasetManifest struct {
	Raw            json.RawMessage
	SchemaVersion  int               `json:"schemaVersion"`
	DatasetVersion string            `json:"datasetVersion"`
	AppVersion     string            `json:"appVersion"`
	GeneratedAt    string            `json:"generatedAt"`
	Records        map[string]any    `json:"records"`
	Sources        []map[string]any  `json:"sources"`
	Limitations    []string          `json:"limitations"`
	ScopeStatement string            `json:"scopeStatement"`
	IncludedGroups []string          `json:"includedMajorGroups"`
	ExcludedGroups []string          `json:"excludedMajorGroups"`
	WholeLifeClaim bool              `json:"wholeLifeCoverageClaim"`
	Checksums      map[string]string `json:"checksums"`
}

type Entity struct {
	ID        string `json:"id"`
	PackageID string `json:"packageId"`
	ParentID  string `json:"parentId"`
	Names     struct {
		Scientific string `json:"scientific"`
		EN         string `json:"en"`
		ZH         string `json:"zh"`
	} `json:"names"`
}

type Package struct {
	ID            string          `json:"id"`
	CanonicalPath string          `json:"canonicalPath"`
	RuntimePath   string          `json:"runtimePath"`
	Title         string          `json:"title"`
	TitleZH       string          `json:"titleZh"`
	EntityCount   int             `json:"entityCount"`
	Raw           json.RawMessage `json:"-"`
}

type CatalogueFile struct {
	Prefix      string `json:"prefix"`
	Path        string `json:"path"`
	Records     int    `json:"records"`
	Bytes       int64  `json:"bytes"`
	SourceBytes int64  `json:"sourceBytes"`
	SHA256      string `json:"sha256"`
}

type CatalogueManifest struct {
	Raw             json.RawMessage `json:"-"`
	RegistryPath    string          `json:"-"`
	RegistryRoot    string          `json:"-"`
	ReleaseAlias    string          `json:"releaseAlias"`
	ReleaseDate     string          `json:"releaseDate"`
	AcceptedSpecies int             `json:"-"`
	Search          struct {
		MinimumQueryLength int             `json:"minimumQueryLength"`
		Files              []CatalogueFile `json:"files"`
	} `json:"search"`
	AcceptedTargets struct {
		Files []CatalogueFile `json:"files"`
	} `json:"acceptedTargets"`
	Hierarchy struct {
		Nodes struct {
			Files []CatalogueFile `json:"files"`
		} `json:"nodes"`
		Children struct {
			Files []CatalogueFile `json:"files"`
		} `json:"children"`
	} `json:"hierarchy"`
}

type Snapshot struct {
	Root             string
	DataRoot         string
	Manifest         DatasetManifest
	Entities         []json.RawMessage
	EntitiesByID     map[string]json.RawMessage
	EntityMeta       map[string]Entity
	EntitySearchText map[string]string
	ChildrenByID     map[string][]string
	ProfilesByID     map[string]json.RawMessage
	RangesByEntity   map[string][]json.RawMessage
	ClaimsBySubject  map[string][]json.RawMessage
	ClaimsByID       map[string]json.RawMessage
	ReferencesByID   map[string]json.RawMessage
	PackageRegistry  json.RawMessage
	PackagesByID     map[string]Package
	Catalogue        CatalogueManifest
	Taxonomy         *TaxonIndex
	Files            map[string]FileInfo
	FileOrder        []string
	FilesMu          sync.RWMutex
	HashMu           sync.Mutex
	ShardMu          sync.Mutex
	ShardCache       map[string][]json.RawMessage
	ShardCacheBytes  int64
	ShardLoads       map[string]*shardLoad
	SearchMu         sync.Mutex
	SearchCache      map[string]SearchShard
	SearchCacheBytes int64
	SearchLoads      map[string]*searchLoad
	MapMu            sync.Mutex
	MapManifest      map[string]any
}

type shardLoad struct {
	done   chan struct{}
	values []json.RawMessage
	err    error
}

type searchLoad struct {
	done  chan struct{}
	shard SearchShard
	err   error
}

// Store keeps an immutable snapshot behind a small lock. Reload constructs a
// complete replacement before swapping it, so a request sees one release only.
type Store struct {
	mu     sync.RWMutex
	active *Snapshot
}

func New(root string) (*Store, error) {
	snapshot, err := loadSnapshot(root)
	if err != nil {
		return nil, err
	}
	return &Store{active: snapshot}, nil
}

func (s *Store) Snapshot() *Snapshot {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.active
}

func (s *Store) Reload(root string) error {
	next, err := loadSnapshot(root)
	if err != nil {
		return err
	}
	s.mu.Lock()
	s.active = next
	s.mu.Unlock()
	return nil
}

func loadSnapshot(root string) (*Snapshot, error) {
	root, err := filepath.Abs(root)
	if err != nil {
		return nil, fmt.Errorf("resolve data root: %w", err)
	}
	dataRoot := filepath.Join(root, "data")
	if info, statErr := os.Stat(dataRoot); statErr != nil || !info.IsDir() {
		if statErr == nil {
			statErr = errors.New("not a directory")
		}
		return nil, fmt.Errorf("data root %s: %w", dataRoot, statErr)
	}

	manifestRaw, err := os.ReadFile(filepath.Join(root, dataManifestPath))
	if err != nil {
		return nil, fmt.Errorf("read %s: %w", dataManifestPath, err)
	}
	var manifest DatasetManifest
	if err := json.Unmarshal(manifestRaw, &manifest); err != nil {
		return nil, fmt.Errorf("decode %s: %w", dataManifestPath, err)
	}
	manifest.Raw = json.RawMessage(manifestRaw)

	s := &Snapshot{
		Root: root, DataRoot: dataRoot, Manifest: manifest,
		EntitiesByID: map[string]json.RawMessage{}, EntityMeta: map[string]Entity{}, EntitySearchText: map[string]string{}, ChildrenByID: map[string][]string{},
		ProfilesByID: map[string]json.RawMessage{}, RangesByEntity: map[string][]json.RawMessage{}, ClaimsBySubject: map[string][]json.RawMessage{}, ClaimsByID: map[string]json.RawMessage{}, ReferencesByID: map[string]json.RawMessage{},
		PackagesByID: map[string]Package{}, Files: map[string]FileInfo{}, ShardCache: map[string][]json.RawMessage{}, ShardLoads: map[string]*shardLoad{}, SearchCache: map[string]SearchShard{}, SearchLoads: map[string]*searchLoad{},
	}
	if err := loadEntities(s); err != nil {
		return nil, err
	}
	if err := loadProfiles(s); err != nil {
		return nil, err
	}
	if err := loadRanges(s); err != nil {
		return nil, err
	}
	if err := loadClaims(s); err != nil {
		return nil, err
	}
	if err := loadReferences(s); err != nil {
		return nil, err
	}
	if err := loadPackages(s); err != nil {
		return nil, err
	}
	if err := loadCatalogue(s); err != nil {
		return nil, err
	}
	taxonomy, err := loadTaxonIndex(s)
	if err != nil {
		return nil, err
	}
	s.Taxonomy = taxonomy
	if err := indexFiles(s); err != nil {
		return nil, err
	}
	return s, nil
}

func readRaw(path string) (json.RawMessage, error) {
	b, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	return json.RawMessage(b), nil
}

func readRawArray(path string) ([]json.RawMessage, error) {
	b, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	var values []json.RawMessage
	if err := json.Unmarshal(b, &values); err != nil {
		return nil, fmt.Errorf("decode %s: %w", path, err)
	}
	return values, nil
}

func loadEntities(s *Snapshot) error {
	values, err := readRawArray(filepath.Join(s.Root, "data/registry/entities/entities.json"))
	if err != nil {
		return fmt.Errorf("load entity registry: %w", err)
	}
	s.Entities = values
	for _, raw := range values {
		var meta Entity
		if err := json.Unmarshal(raw, &meta); err != nil || meta.ID == "" {
			return fmt.Errorf("invalid entity record")
		}
		s.EntitiesByID[meta.ID] = raw
		s.EntityMeta[meta.ID] = meta
		var search struct {
			Names    map[string]string `json:"names"`
			Synonyms []string          `json:"synonyms"`
		}
		if json.Unmarshal(raw, &search) == nil {
			names := make([]string, 0, len(search.Names)+len(search.Synonyms))
			for _, name := range search.Names {
				names = append(names, name)
			}
			names = append(names, search.Synonyms...)
			s.EntitySearchText[meta.ID] = normalizeQuery(strings.Join(names, " "))
		}
		if meta.ParentID != "" {
			s.ChildrenByID[meta.ParentID] = append(s.ChildrenByID[meta.ParentID], meta.ID)
		}
	}
	for id := range s.ChildrenByID {
		sort.Strings(s.ChildrenByID[id])
	}
	return nil
}

func loadProfiles(s *Snapshot) error {
	values, err := readRawArray(filepath.Join(s.Root, "data/registry/taxon-profiles.json"))
	if err != nil {
		return fmt.Errorf("load taxon profiles: %w", err)
	}
	for _, raw := range values {
		var value struct {
			ID string `json:"id"`
		}
		if json.Unmarshal(raw, &value) != nil || value.ID == "" {
			return fmt.Errorf("invalid taxon profile")
		}
		s.ProfilesByID[value.ID] = raw
	}
	return nil
}

func loadRanges(s *Snapshot) error {
	values, err := readRawArray(filepath.Join(s.Root, "data/ranges/range-evidence.json"))
	if err != nil {
		return fmt.Errorf("load ranges: %w", err)
	}
	for _, raw := range values {
		var value struct {
			EntityID string `json:"entityId"`
		}
		if json.Unmarshal(raw, &value) != nil || value.EntityID == "" {
			continue
		}
		s.RangesByEntity[value.EntityID] = append(s.RangesByEntity[value.EntityID], raw)
	}
	return nil
}

func loadClaims(s *Snapshot) error {
	values, err := readRawArray(filepath.Join(s.Root, "data/evidence/claims.json"))
	if err != nil {
		return fmt.Errorf("load evidence claims: %w", err)
	}
	for _, raw := range values {
		var value struct {
			ID        string `json:"id"`
			SubjectID string `json:"subjectId"`
		}
		if json.Unmarshal(raw, &value) != nil || value.SubjectID == "" {
			continue
		}
		s.ClaimsBySubject[value.SubjectID] = append(s.ClaimsBySubject[value.SubjectID], raw)
		if value.ID != "" {
			s.ClaimsByID[value.ID] = raw
		}
	}
	return nil
}

func loadReferences(s *Snapshot) error {
	values, err := readRawArray(filepath.Join(s.Root, "data/references.json"))
	if err != nil {
		return fmt.Errorf("load references: %w", err)
	}
	for _, raw := range values {
		var value struct {
			ID string `json:"id"`
		}
		if json.Unmarshal(raw, &value) != nil || value.ID == "" {
			continue
		}
		s.ReferencesByID[value.ID] = raw
	}
	return nil
}

func loadPackages(s *Snapshot) error {
	raw, err := readRaw(filepath.Join(s.Root, "data/registry/package-registry.json"))
	if err != nil {
		return fmt.Errorf("load package registry: %w", err)
	}
	s.PackageRegistry = raw
	var doc struct {
		Packages []json.RawMessage `json:"packages"`
	}
	if err := json.Unmarshal(raw, &doc); err != nil {
		return fmt.Errorf("decode package registry: %w", err)
	}
	for _, packageRaw := range doc.Packages {
		var p Package
		if err := json.Unmarshal(packageRaw, &p); err != nil || p.ID == "" {
			return fmt.Errorf("invalid package registry entry")
		}
		p.Raw = packageRaw
		s.PackagesByID[p.ID] = p
	}
	return nil
}

func loadCatalogue(s *Snapshot) error {
	path, resourcePath, err := currentCatalogueRegistryPath(s.Root, s.Manifest.Checksums)
	if err != nil {
		return err
	}
	raw, err := readRaw(path)
	if err != nil {
		return fmt.Errorf("load catalogue manifest: %w", err)
	}
	if err := json.Unmarshal(raw, &s.Catalogue); err != nil {
		return fmt.Errorf("decode catalogue manifest: %w", err)
	}
	s.Catalogue.Raw = raw
	s.Catalogue.RegistryPath = resourcePath
	s.Catalogue.RegistryRoot = filepath.Dir(path)
	return nil
}

func currentCatalogueRegistryPath(root string, checksums map[string]string) (string, string, error) {
	const prefix = "data/catalogue-of-life/releases/"
	const suffix = "/registry/manifest.json"
	var matches []string
	for resourcePath := range checksums {
		if strings.HasPrefix(resourcePath, prefix) && strings.HasSuffix(resourcePath, suffix) {
			matches = append(matches, resourcePath)
		}
	}
	if len(matches) != 1 {
		return "", "", fmt.Errorf("expected exactly one current catalogue registry manifest in data manifest, found %d", len(matches))
	}
	resourcePath := matches[0]
	return filepath.Join(root, filepath.FromSlash(resourcePath)), resourcePath, nil
}

func indexFiles(s *Snapshot) error {
	err := filepath.WalkDir(s.DataRoot, func(filePath string, entry fs.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}
		if entry.IsDir() {
			return nil
		}
		info, err := entry.Info()
		if err != nil {
			return err
		}
		rel, err := filepath.Rel(s.Root, filePath)
		if err != nil {
			return err
		}
		rel = filepath.ToSlash(rel)
		// The generated manifest checksum map is release metadata, not a
		// verified digest of the bytes currently on disk. Keep delivery hashes
		// empty until EnsureHash reads the current file, so stale metadata can
		// never become a false ETag or an invalid resume validator.
		file := FileInfo{Path: rel, Bytes: info.Size(), FullPath: filePath, MediaType: mediaType(rel), Encoding: fileEncoding(rel)}
		s.Files[rel] = file
		s.FileOrder = append(s.FileOrder, rel)
		return nil
	})
	if err != nil {
		return fmt.Errorf("index data files: %w", err)
	}
	sort.Strings(s.FileOrder)
	return nil
}

func mediaType(path string) string {
	switch {
	case strings.HasSuffix(path, ".json.gz"), strings.HasSuffix(path, ".jsonl.gz"):
		return "application/gzip"
	case strings.HasSuffix(path, ".json"), strings.HasSuffix(path, ".jsonl"):
		return "application/json"
	case strings.HasSuffix(path, ".webp"):
		return "image/webp"
	case strings.HasSuffix(path, ".nc"):
		return "application/x-netcdf"
	default:
		return "application/octet-stream"
	}
}

func fileEncoding(path string) string {
	if strings.HasSuffix(path, ".gz") {
		return "gzip"
	}
	return ""
}

func (s *Snapshot) File(path string) (FileInfo, bool) {
	s.FilesMu.RLock()
	defer s.FilesMu.RUnlock()
	file, ok := s.Files[path]
	return file, ok
}

func (s *Snapshot) EnsureHash(ctx context.Context, path string) (FileInfo, error) {
	s.FilesMu.RLock()
	file, ok := s.Files[path]
	if !ok {
		s.FilesMu.RUnlock()
		return FileInfo{}, os.ErrNotExist
	}
	if file.SHA256 != "" {
		s.FilesMu.RUnlock()
		return file, nil
	}
	s.FilesMu.RUnlock()

	// Serialize lazy hashing without blocking readers of the file index.
	s.HashMu.Lock()
	defer s.HashMu.Unlock()
	s.FilesMu.RLock()
	file, ok = s.Files[path]
	if !ok {
		s.FilesMu.RUnlock()
		return FileInfo{}, os.ErrNotExist
	}
	if file.SHA256 != "" {
		s.FilesMu.RUnlock()
		return file, nil
	}
	s.FilesMu.RUnlock()
	if err := ctx.Err(); err != nil {
		return FileInfo{}, err
	}
	input, err := os.Open(file.FullPath)
	if err != nil {
		return FileInfo{}, err
	}
	hash := sha256.New()
	_, copyErr := io.CopyBuffer(hash, contextReader{ctx: ctx, reader: input}, make([]byte, 256<<10))
	closeErr := input.Close()
	if copyErr != nil {
		if err := ctx.Err(); err != nil {
			return FileInfo{}, err
		}
		return FileInfo{}, copyErr
	}
	if closeErr != nil {
		return FileInfo{}, closeErr
	}
	if err := ctx.Err(); err != nil {
		return FileInfo{}, err
	}
	file.SHA256 = hex.EncodeToString(hash.Sum(nil))
	s.FilesMu.Lock()
	s.Files[path] = file
	s.FilesMu.Unlock()
	return file, nil
}

type contextReader struct {
	ctx    context.Context
	reader io.Reader
}

func (r contextReader) Read(p []byte) (int, error) {
	if err := r.ctx.Err(); err != nil {
		return 0, err
	}
	return r.reader.Read(p)
}

func (s *Snapshot) ListFiles(prefix string) []FileInfo {
	s.FilesMu.RLock()
	defer s.FilesMu.RUnlock()
	result := make([]FileInfo, 0)
	for _, path := range s.FileOrder {
		if prefix == "" || strings.HasPrefix(path, prefix) {
			result = append(result, s.Files[path])
		}
	}
	return result
}

func (s *Snapshot) Resource(path string) (FileInfo, error) {
	path, err := NormalizeResourcePath(path)
	if err != nil {
		return FileInfo{}, err
	}
	file, ok := s.File(path)
	if !ok {
		return FileInfo{}, os.ErrNotExist
	}
	return file, nil
}

func NormalizeResourcePath(resourcePath string) (string, error) {
	resourcePath = strings.TrimPrefix(resourcePath, "/")
	resourcePath = filepath.ToSlash(filepath.Clean(filepath.FromSlash(resourcePath)))
	if resourcePath == "." || resourcePath == "" || resourcePath == "data" ||
		!strings.HasPrefix(resourcePath, "data/") || resourcePath == ".." ||
		strings.HasPrefix(resourcePath, "../") || strings.Contains(resourcePath, "/../") {
		return "", errors.New("resource path must remain inside data/")
	}
	return resourcePath, nil
}

func (s *Snapshot) ReadJSON(resourcePath string) (json.RawMessage, error) {
	resourcePath, err := NormalizeResourcePath(resourcePath)
	if err != nil {
		return nil, err
	}
	file, ok := s.File(resourcePath)
	if !ok {
		return nil, os.ErrNotExist
	}
	if file.Encoding == "gzip" {
		return nil, errors.New("compressed JSON must be fetched as a resource")
	}
	return readRaw(filepath.Join(s.Root, filepath.FromSlash(resourcePath)))
}

func (s *Snapshot) Package(id string) (Package, bool) {
	p, ok := s.PackagesByID[id]
	return p, ok
}

func (s *Snapshot) PackageFiles(id string) []FileInfo {
	p, ok := s.Package(id)
	if !ok {
		return nil
	}
	return s.ListFiles(filepath.ToSlash(p.CanonicalPath) + "/")
}

func (s *Snapshot) ReadShard(path string) ([]json.RawMessage, error) {
	return s.ReadShardContext(context.Background(), path)
}

func (s *Snapshot) ReadShardContext(ctx context.Context, path string) ([]json.RawMessage, error) {
	path = filepath.ToSlash(path)
	s.ShardMu.Lock()
	if values, ok := s.ShardCache[path]; ok {
		s.ShardMu.Unlock()
		return values, nil
	}
	if load, ok := s.ShardLoads[path]; ok {
		s.ShardMu.Unlock()
		select {
		case <-load.done:
			return load.values, load.err
		case <-ctx.Done():
			return nil, ctx.Err()
		}
	}
	load := &shardLoad{done: make(chan struct{})}
	s.ShardLoads[path] = load
	s.ShardMu.Unlock()

	values, err := s.readShardFileContext(ctx, path)
	s.ShardMu.Lock()
	delete(s.ShardLoads, path)
	load.values, load.err = values, err
	if err == nil {
		cost := shardCacheCost(values)
		if cost <= maxShardCacheBytes {
			if s.ShardCacheBytes+cost > maxShardCacheBytes {
				s.ShardCache = map[string][]json.RawMessage{}
				s.ShardCacheBytes = 0
			}
			s.ShardCache[path] = values
			s.ShardCacheBytes += cost
		}
	}
	close(load.done)
	s.ShardMu.Unlock()
	return values, err
}

func (s *Snapshot) readShardFile(path string) ([]json.RawMessage, error) {
	return s.readShardFileContext(context.Background(), path)
}

func (s *Snapshot) readShardFileContext(ctx context.Context, path string) ([]json.RawMessage, error) {
	fullPath := filepath.Join(s.Catalogue.RegistryRoot, filepath.FromSlash(path))
	file, err := os.Open(fullPath)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	reader, err := gzip.NewReader(contextReader{ctx: ctx, reader: file})
	if err != nil {
		return nil, fmt.Errorf("open gzip shard %s: %w", path, err)
	}
	defer reader.Close()
	decoder := json.NewDecoder(bufio.NewReaderSize(reader, 256<<10))
	values := make([]json.RawMessage, 0)
	for {
		if err := ctx.Err(); err != nil {
			return nil, err
		}
		var value json.RawMessage
		if err := decoder.Decode(&value); err == io.EOF {
			break
		} else if err != nil {
			return nil, fmt.Errorf("decode shard %s: %w", path, err)
		}
		values = append(values, append(json.RawMessage(nil), value...))
	}
	return values, nil
}

func shardCacheCost(values []json.RawMessage) int64 {
	cost := int64(len(values)) * 24
	for _, value := range values {
		cost += int64(len(value)) + int64(cap(value)-len(value))
	}
	return cost
}

func routePrefix(id string) string {
	digest := sha256.Sum256([]byte(id))
	return hex.EncodeToString(digest[:1])
}

func selectFiles(files []CatalogueFile, id string) []CatalogueFile {
	prefix := routePrefix(id)
	result := make([]CatalogueFile, 0, 1)
	for _, file := range files {
		if file.Prefix == prefix {
			result = append(result, file)
		}
	}
	return result
}

func (s *Snapshot) lookup(files []CatalogueFile, id, field string) (json.RawMessage, error) {
	for _, file := range selectFiles(files, id) {
		values, err := s.ReadShard(file.Path)
		if err != nil {
			return nil, err
		}
		for _, raw := range values {
			var object map[string]json.RawMessage
			if json.Unmarshal(raw, &object) != nil {
				continue
			}
			var value string
			if json.Unmarshal(object[field], &value) == nil && value == id {
				return raw, nil
			}
		}
	}
	return nil, nil
}

func (s *Snapshot) CatalogueNode(id string) (json.RawMessage, error) {
	if s.Taxonomy != nil {
		if record, ok := s.Taxonomy.Record(id); ok {
			return json.Marshal(record)
		}
	}
	raw, err := s.lookup(s.Catalogue.Hierarchy.Nodes.Files, id, "id")
	if err != nil || raw != nil {
		return raw, err
	}
	return s.lookup(s.Catalogue.AcceptedTargets.Files, id, "id")
}

// CatalogueChildrenPage uses the resident packed hierarchy for current-tree
// traversal. The raw-shard path remains only for accepted-target records that
// are outside the hierarchy index.
func (s *Snapshot) CatalogueChildrenPage(parentID string, offset, limit int) ([]json.RawMessage, int, bool, error) {
	if s.Taxonomy != nil {
		records, total, exists := s.Taxonomy.ChildrenPage(parentID, offset, limit)
		if exists {
			result := make([]json.RawMessage, 0, len(records))
			for _, record := range records {
				raw, err := json.Marshal(record)
				if err != nil {
					return nil, 0, false, err
				}
				result = append(result, raw)
			}
			return result, total, true, nil
		}
	}
	items, err := s.CatalogueChildren(parentID)
	if err != nil {
		return nil, 0, false, err
	}
	if items == nil {
		return nil, 0, false, nil
	}
	if offset > len(items) {
		offset = len(items)
	}
	end := offset + limit
	if end > len(items) {
		end = len(items)
	}
	return items[offset:end], len(items), true, nil
}

func (s *Snapshot) CatalogueChildren(parentID string) ([]json.RawMessage, error) {
	parent, err := s.CatalogueNode(parentID)
	if err != nil {
		return nil, err
	}
	if parent == nil {
		return nil, nil
	}
	result := []json.RawMessage{}
	for _, file := range selectFiles(s.Catalogue.Hierarchy.Children.Files, parentID) {
		values, err := s.ReadShard(file.Path)
		if err != nil {
			return nil, err
		}
		for _, raw := range values {
			var value struct {
				ParentID string `json:"parentId"`
			}
			if json.Unmarshal(raw, &value) == nil && value.ParentID == parentID {
				result = append(result, raw)
			}
		}
	}
	sort.Slice(result, func(i, j int) bool {
		return rawString(result[i], "scientificName") < rawString(result[j], "scientificName")
	})
	return result, nil
}

func rawString(raw json.RawMessage, field string) string {
	var value map[string]json.RawMessage
	if json.Unmarshal(raw, &value) != nil {
		return ""
	}
	var result string
	_ = json.Unmarshal(value[field], &result)
	return result
}

type CatalogueRecord struct {
	NormalizedName  string  `json:"normalizedName"`
	ID              string  `json:"id"`
	ScientificName  string  `json:"scientificName"`
	Authorship      *string `json:"authorship"`
	Rank            string  `json:"rank"`
	Status          string  `json:"status"`
	AcceptedID      *string `json:"acceptedId"`
	ParentID        *string `json:"parentId"`
	SourceDatasetID *string `json:"sourceDatasetId"`
}

type SearchShard struct {
	Records []CatalogueRecord
	// Prefix3 stores record positions instead of copying each record into a
	// second slice. Search shards can contain many records, so this keeps the
	// resident prefix index at four bytes per position plus slice overhead.
	Prefix3 map[string][]uint32
}

func normalizeQuery(input string) string {
	var builder strings.Builder
	lastSpace := true
	for _, r := range strings.ToLower(input) {
		r = foldLatin(r)
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			builder.WriteRune(r)
			lastSpace = false
		} else if !lastSpace {
			builder.WriteByte(' ')
			lastSpace = true
		}
	}
	return strings.TrimSpace(builder.String())
}

// NormalizeQuery exposes the release search normalization to transport code.
func NormalizeQuery(input string) string { return normalizeQuery(input) }

func foldLatin(r rune) rune {
	groups := map[rune]rune{
		'á': 'a', 'à': 'a', 'â': 'a', 'ä': 'a', 'ã': 'a', 'å': 'a', 'ā': 'a', 'ă': 'a', 'ą': 'a',
		'ç': 'c', 'ć': 'c', 'č': 'c', 'ď': 'd',
		'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e', 'ē': 'e', 'ė': 'e', 'ę': 'e',
		'ğ': 'g', 'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i', 'ī': 'i', 'į': 'i', 'ł': 'l',
		'ń': 'n', 'ñ': 'n', 'ň': 'n', 'ó': 'o', 'ò': 'o', 'ô': 'o', 'ö': 'o', 'õ': 'o', 'ø': 'o', 'ō': 'o', 'ő': 'o',
		'ŕ': 'r', 'ř': 'r', 'ś': 's', 'š': 's', 'ť': 't', 'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u', 'ū': 'u', 'ů': 'u', 'ű': 'u',
		'ý': 'y', 'ÿ': 'y', 'ž': 'z',
	}
	if value, ok := groups[r]; ok {
		return value
	}
	return r
}

const maxSearchPageWindow = 100_000

var ErrSearchPageWindow = errors.New("catalogue search page exceeds bounded window")

type catalogueSearchHeap struct {
	values []CatalogueRecord
}

func (h catalogueSearchHeap) Len() int { return len(h.values) }
func (h catalogueSearchHeap) Less(i, j int) bool {
	// Keep the worst retained record at the root so memory stays bounded to the
	// requested page window while the source shards are scanned.
	return catalogueRecordLess(h.values[j], h.values[i])
}
func (h catalogueSearchHeap) Swap(i, j int)   { h.values[i], h.values[j] = h.values[j], h.values[i] }
func (h *catalogueSearchHeap) Push(value any) { h.values = append(h.values, value.(CatalogueRecord)) }
func (h *catalogueSearchHeap) Pop() any {
	last := len(h.values) - 1
	value := h.values[last]
	h.values = h.values[:last]
	return value
}

func catalogueRecordLess(a, b CatalogueRecord) bool {
	if statusOrder(a.Status) != statusOrder(b.Status) {
		return statusOrder(a.Status) < statusOrder(b.Status)
	}
	if len(a.NormalizedName) != len(b.NormalizedName) {
		return len(a.NormalizedName) < len(b.NormalizedName)
	}
	if a.ScientificName != b.ScientificName {
		return a.ScientificName < b.ScientificName
	}
	return a.ID < b.ID
}

func statusOrder(status string) int {
	switch status {
	case "accepted":
		return 0
	case "synonym":
		return 1
	case "ambiguous-synonym":
		return 2
	case "misapplied":
		return 3
	default:
		return 4
	}
}

func (s *Snapshot) SearchCatalogue(query string) ([]CatalogueRecord, int, error) {
	return s.SearchCatalogueContext(context.Background(), query)
}

func (s *Snapshot) SearchCatalogueContext(ctx context.Context, query string) ([]CatalogueRecord, int, error) {
	return s.SearchCataloguePage(ctx, query, 0, maxSearchPageWindow)
}

func (s *Snapshot) SearchCataloguePage(ctx context.Context, query string, offset, limit int) ([]CatalogueRecord, int, error) {
	if offset < 0 || limit < 0 || offset > maxSearchPageWindow || limit > maxSearchPageWindow-offset {
		return nil, 0, fmt.Errorf("%w of %d records", ErrSearchPageWindow, maxSearchPageWindow)
	}
	normalized := normalizeQuery(query)
	compact := strings.ReplaceAll(normalized, " ", "")
	if len([]rune(compact)) < s.Catalogue.Search.MinimumQueryLength {
		return []CatalogueRecord{}, 0, nil
	}
	files := make([]CatalogueFile, 0)
	for _, file := range s.Catalogue.Search.Files {
		if strings.HasPrefix(compact, file.Prefix) || strings.HasPrefix(file.Prefix, compact) {
			files = append(files, file)
		}
	}
	window := offset + limit
	queue := &catalogueSearchHeap{values: make([]CatalogueRecord, 0, minInt(window, 256))}
	heap.Init(queue)
	total := 0
	for _, file := range files {
		if err := ctx.Err(); err != nil {
			return nil, 0, err
		}
		shard, err := s.searchRecordsContext(ctx, file.Path)
		if err != nil {
			return nil, 0, err
		}
		visit := func(record CatalogueRecord) {
			if strings.HasPrefix(record.NormalizedName, normalized) {
				total++
				if window == 0 {
					return
				}
				if len(queue.values) < window {
					heap.Push(queue, record)
				} else if catalogueRecordLess(record, queue.values[0]) {
					queue.values[0] = record
					heap.Fix(queue, 0)
				}
			}
		}
		if len([]rune(normalized)) >= 3 {
			key := firstRunes(normalized, 3)
			if indexed, ok := shard.Prefix3[key]; ok {
				for recordIndex, index := range indexed {
					if recordIndex&1023 == 0 {
						if err := ctx.Err(); err != nil {
							return nil, 0, err
						}
					}
					visit(shard.Records[index])
				}
			} else {
				continue
			}
		} else {
			for recordIndex, record := range shard.Records {
				if recordIndex&1023 == 0 {
					if err := ctx.Err(); err != nil {
						return nil, 0, err
					}
				}
				visit(record)
			}
		}
	}
	result := queue.values
	sort.Slice(result, func(i, j int) bool { return catalogueRecordLess(result[i], result[j]) })
	if offset > total {
		offset = total
	}
	end := offset + limit
	if end > total {
		end = total
	}
	if end > len(result) {
		end = len(result)
	}
	return result[offset:end], total, nil
}

func (s *Snapshot) searchRecords(path string) (SearchShard, error) {
	return s.searchRecordsContext(context.Background(), path)
}

func (s *Snapshot) searchRecordsContext(ctx context.Context, path string) (SearchShard, error) {
	s.SearchMu.Lock()
	if shard, ok := s.SearchCache[path]; ok {
		s.SearchMu.Unlock()
		return shard, nil
	}
	if load, ok := s.SearchLoads[path]; ok {
		s.SearchMu.Unlock()
		select {
		case <-load.done:
			return load.shard, load.err
		case <-ctx.Done():
			return SearchShard{}, ctx.Err()
		}
	}
	load := &searchLoad{done: make(chan struct{})}
	s.SearchLoads[path] = load
	s.SearchMu.Unlock()

	values, err := s.readShardFileContext(ctx, path)
	if err != nil {
		s.SearchMu.Lock()
		delete(s.SearchLoads, path)
		load.err = err
		close(load.done)
		s.SearchMu.Unlock()
		return SearchShard{}, err
	}
	records := make([]CatalogueRecord, 0, len(values))
	prefix3 := map[string][]uint32{}
	for _, raw := range values {
		var record CatalogueRecord
		if json.Unmarshal(raw, &record) == nil {
			records = append(records, record)
			key := firstRunes(record.NormalizedName, 3)
			prefix3[key] = append(prefix3[key], uint32(len(records)-1))
		}
	}
	shard := SearchShard{Records: records, Prefix3: prefix3}
	s.SearchMu.Lock()
	delete(s.SearchLoads, path)
	load.shard = shard
	cost := searchShardCost(shard)
	if cost <= maxShardCacheBytes {
		if s.SearchCacheBytes+cost > maxShardCacheBytes {
			s.SearchCache = map[string]SearchShard{}
			s.SearchCacheBytes = 0
		}
		s.SearchCache[path] = shard
		s.SearchCacheBytes += cost
	}
	close(load.done)
	s.SearchMu.Unlock()
	return shard, nil
}

func searchShardCost(shard SearchShard) int64 {
	cost := int64(len(shard.Records)) * 128
	for _, record := range shard.Records {
		cost += int64(len(record.NormalizedName) + len(record.ID) + len(record.ScientificName) + lenPtr(record.Authorship) + len(record.Rank) + len(record.Status) + lenPtr(record.AcceptedID) + lenPtr(record.ParentID) + lenPtr(record.SourceDatasetID))
	}
	for key, values := range shard.Prefix3 {
		cost += int64(len(key) + 16 + len(values)*24)
	}
	return cost
}

func lenPtr(value *string) int {
	if value == nil {
		return 0
	}
	return len(*value)
}

func firstRunes(value string, count int) string {
	runes := []rune(value)
	if len(runes) > count {
		runes = runes[:count]
	}
	return string(runes)
}

func minInt(left, right int) int {
	if left < right {
		return left
	}
	return right
}

func (s *Snapshot) EntitySearch(query string) []json.RawMessage {
	normalized := normalizeQuery(query)
	if normalized == "" {
		return nil
	}
	result := make([]json.RawMessage, 0)
	for _, raw := range s.Entities {
		var entity struct {
			ID string `json:"id"`
		}
		if json.Unmarshal(raw, &entity) != nil {
			continue
		}
		if strings.Contains(s.EntitySearchText[entity.ID], normalized) {
			result = append(result, raw)
		}
	}
	return result
}

func (s *Snapshot) Evidence(entityID string) ([]json.RawMessage, []json.RawMessage, []json.RawMessage) {
	ranges := append([]json.RawMessage(nil), s.RangesByEntity[entityID]...)
	claims := append([]json.RawMessage(nil), s.ClaimsBySubject[entityID]...)
	claimIDs := map[string]bool{}
	for _, raw := range claims {
		var value struct {
			ID string `json:"id"`
		}
		_ = json.Unmarshal(raw, &value)
		claimIDs[value.ID] = true
	}
	for _, raw := range ranges {
		var value struct {
			ClaimIDs []string `json:"claimIds"`
		}
		_ = json.Unmarshal(raw, &value)
		for _, id := range value.ClaimIDs {
			if claimIDs[id] {
				continue
			}
			if candidate, ok := s.ClaimsByID[id]; ok {
				claims = append(claims, candidate)
				claimIDs[id] = true
			}
		}
	}
	refs := []json.RawMessage{}
	seen := map[string]bool{}
	addReference := func(id string) {
		if raw, ok := s.ReferencesByID[id]; ok && !seen[id] {
			refs = append(refs, raw)
			seen[id] = true
		}
	}
	if raw, ok := s.EntitiesByID[entityID]; ok {
		for _, id := range referenceIDs(raw) {
			addReference(id)
		}
	}
	if raw, ok := s.ProfilesByID[entityID]; ok {
		for _, id := range referenceIDs(raw) {
			addReference(id)
		}
	}
	for _, raw := range claims {
		var value struct {
			ReferenceLinks []struct {
				ReferenceID string `json:"referenceId"`
			} `json:"referenceLinks"`
		}
		_ = json.Unmarshal(raw, &value)
		for _, link := range value.ReferenceLinks {
			addReference(link.ReferenceID)
		}
	}
	return ranges, claims, refs
}

func referenceIDs(raw json.RawMessage) []string {
	var value struct {
		ReferenceIDs []string `json:"referenceIds"`
	}
	_ = json.Unmarshal(raw, &value)
	return value.ReferenceIDs
}

func (s *Snapshot) BuildFileIndex(ctx context.Context) ([]FileInfo, int64, error) {
	files := s.ListFiles("")
	var total int64
	for i := range files {
		if err := ctx.Err(); err != nil {
			return nil, 0, err
		}
		file, err := s.EnsureHash(ctx, files[i].Path)
		if err != nil {
			return nil, 0, err
		}
		files[i] = file
		total += file.Bytes
	}
	return files, total, nil
}

type MapFrame struct {
	Layer string   `json:"layer"`
	AgeMa float64  `json:"ageMa"`
	File  FileInfo `json:"file"`
}

func (s *Snapshot) MapManifestData() (map[string]any, error) {
	s.MapMu.Lock()
	defer s.MapMu.Unlock()
	if s.MapManifest != nil {
		return s.MapManifest, nil
	}
	layers := map[string][]MapFrame{}
	seriesRoot := filepath.Join(s.Root, "data/paleogeography/series")
	err := filepath.WalkDir(seriesRoot, func(filePath string, entry fs.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}
		if entry.IsDir() {
			return nil
		}
		name := entry.Name()
		if !strings.HasPrefix(name, "ma-") || !strings.HasSuffix(name, ".json.gz") {
			return nil
		}
		age, err := strconv.ParseFloat(strings.TrimSuffix(strings.TrimPrefix(name, "ma-"), ".json.gz"), 64)
		if err != nil {
			return nil
		}
		rel, err := filepath.Rel(s.Root, filePath)
		if err != nil {
			return err
		}
		rel = filepath.ToSlash(rel)
		parts := strings.Split(filepath.ToSlash(filePath), "/")
		if len(parts) < 2 {
			return nil
		}
		layer := parts[len(parts)-2]
		file, ok := s.File(rel)
		if ok {
			layers[layer] = append(layers[layer], MapFrame{Layer: layer, AgeMa: age, File: file})
		}
		return nil
	})
	if err != nil {
		return nil, fmt.Errorf("index paleogeography frames: %w", err)
	}
	outputLayers := map[string]any{}
	for layer, frames := range layers {
		sort.Slice(frames, func(i, j int) bool { return frames[i].AgeMa < frames[j].AgeMa })
		output := make([]map[string]any, 0, len(frames))
		for _, frame := range frames {
			output = append(output, map[string]any{"ageMa": frame.AgeMa, "file": frame.File})
		}
		outputLayers[layer] = map[string]any{"role": "reconstructed-geometry", "frames": output}
	}
	result := map[string]any{"schemaVersion": 1, "protocolVersion": ProtocolVersion, "datasetVersion": s.Manifest.DatasetVersion, "selectionPolicy": map[string]any{"method": "nearest", "tieBreak": "younger", "outsideRange": "unavailable"}, "layers": outputLayers}
	if raw, err := s.ReadJSON("data/paleogeography/observations/manifest.json"); err == nil {
		var value any
		if json.Unmarshal(raw, &value) == nil {
			result["observations"] = value
		}
	}
	if raw, err := s.ReadJSON("data/paleotopography/scotese-wright-2018-v2/manifest.json"); err == nil {
		var value any
		if json.Unmarshal(raw, &value) == nil {
			result["paleotopography"] = value
		}
	}
	s.MapManifest = result
	return result, nil
}

func (s *Snapshot) SelectMapFrame(layer string, requested float64) (MapFrame, bool) {
	if math.IsNaN(requested) || math.IsInf(requested, 0) {
		return MapFrame{}, false
	}
	manifest, err := s.MapManifestData()
	if err != nil {
		return MapFrame{}, false
	}
	layers, ok := manifest["layers"].(map[string]any)
	if !ok {
		return MapFrame{}, false
	}
	value, ok := layers[layer].(map[string]any)
	if !ok {
		return MapFrame{}, false
	}
	frames, ok := value["frames"].([]map[string]any)
	if !ok {
		return MapFrame{}, false
	}
	var best MapFrame
	found := false
	for _, raw := range frames {
		age, ok := raw["ageMa"].(float64)
		file, fileOK := raw["file"].(FileInfo)
		if !ok || !fileOK {
			continue
		}
		if !found && requested < age {
			return MapFrame{}, false
		}
		if !found || abs(age-requested) < abs(best.AgeMa-requested) || (abs(age-requested) == abs(best.AgeMa-requested) && age < best.AgeMa) {
			best = MapFrame{Layer: layer, AgeMa: age, File: file}
			found = true
		}
	}
	if !found || requested > best.AgeMa {
		return MapFrame{}, false
	}
	return best, found
}

func abs(value float64) float64 {
	if value < 0 {
		return -value
	}
	return value
}
