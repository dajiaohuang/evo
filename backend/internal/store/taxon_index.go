package store

import (
	"bufio"
	"compress/gzip"
	"context"
	"crypto/sha256"
	"encoding/binary"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"sort"
	"unsafe"
)

const noTaxon = ^uint32(0)

const (
	taxonArtifactVersion = uint32(2)
	taxonArtifactMagic   = "EVOTREE2"
	taxonWireWords       = 12
)

// stringRef addresses immutable bytes owned by TaxonIndex. A zero-length ref
// represents a JSON null for optional fields. Categorical fields use compact
// dictionaries; IDs, names and authorship use offsets into the arena.
type stringRef struct {
	offset uint32
	length uint32
}

type packedTaxon struct {
	id              stringRef
	scientificName  stringRef
	authorship      stringRef
	parent          uint32
	childStart      uint32
	childCount      uint32
	rankID          uint8
	statusID        uint8
	sourceDatasetID uint16
}

// TaxonRecord is the current compact tree API record. Optional source fields
// retain their null shape without keeping the original JSON row in memory.
type TaxonRecord struct {
	ID             string  `json:"id"`
	ParentID       *string `json:"parentId"`
	ScientificName string  `json:"scientificName"`
	Authorship     *string `json:"authorship"`
	Rank           string  `json:"rank"`
	Status         string  `json:"status"`
	SourceDataset  *string `json:"sourceDatasetId"`
	ChildCount     int     `json:"childCount"`
}

type taxonRow struct {
	ID             string  `json:"id"`
	ParentID       *string `json:"parentId"`
	ScientificName string  `json:"scientificName"`
	Authorship     *string `json:"authorship"`
	Rank           string  `json:"rank"`
	Status         string  `json:"status"`
	SourceDataset  *string `json:"sourceDatasetId"`
}

// TaxonIndex is a packed accepted-hierarchy representation. It owns one
// string arena, compact categorical dictionaries, one open-addressed ID table
// and one contiguous adjacency list; no per-row JSON objects, maps or
// duplicated child records are retained.
type TaxonIndex struct {
	arena               []byte
	nodes               []packedTaxon
	children            []uint32
	ids                 packedIDTable
	roots               []uint32
	parentArena         []byte
	parentRefs          []stringRef
	rankValues          []string
	statusValues        []string
	sourceDatasetValues []string
	rankLookup          map[string]uint8
	statusLookup        map[string]uint8
	sourceDatasetLookup map[string]uint16
}

type packedIDTable struct {
	hashes []uint64
	values []uint32
	mask   uint64
}

// TaxonStorageStats reports the resident backing-buffer footprint of the
// packed hierarchy. It deliberately excludes Go object headers and temporary
// shard-decoder allocations, which are not retained after startup.
type TaxonStorageStats struct {
	NodeCount        int   `json:"nodeCount"`
	EdgeCount        int   `json:"edgeCount"`
	NodeBytes        int64 `json:"nodeBytes"`
	StringArenaBytes int64 `json:"stringArenaBytes"`
	CategoricalBytes int64 `json:"categoricalBytes"`
	ChildIndexBytes  int64 `json:"childIndexBytes"`
	IDLookupBytes    int64 `json:"idLookupBytes"`
	RootIndexBytes   int64 `json:"rootIndexBytes"`
	ResidentBytes    int64 `json:"residentBytes"`
}

func (t *TaxonIndex) StorageStats() TaxonStorageStats {
	var categoricalBytes int64
	for _, values := range [][]string{t.rankValues, t.statusValues, t.sourceDatasetValues} {
		categoricalBytes += int64(len(values) * 16)
		for _, value := range values {
			categoricalBytes += int64(len(value))
		}
	}
	nodeBytes := int64(cap(t.nodes)) * int64(unsafe.Sizeof(packedTaxon{}))
	arenaBytes := int64(cap(t.arena))
	childBytes := int64(cap(t.children)) * int64(unsafe.Sizeof(uint32(0)))
	idBytes := int64(cap(t.ids.hashes))*int64(unsafe.Sizeof(uint64(0))) + int64(cap(t.ids.values))*int64(unsafe.Sizeof(uint32(0)))
	rootBytes := int64(cap(t.roots)) * int64(unsafe.Sizeof(uint32(0)))
	return TaxonStorageStats{
		NodeCount: len(t.nodes), EdgeCount: len(t.children), NodeBytes: nodeBytes,
		StringArenaBytes: arenaBytes, CategoricalBytes: categoricalBytes,
		ChildIndexBytes: childBytes, IDLookupBytes: idBytes, RootIndexBytes: rootBytes,
		ResidentBytes: nodeBytes + arenaBytes + categoricalBytes + childBytes + idBytes + rootBytes,
	}
}

func loadTaxonIndex(s *Snapshot) (*TaxonIndex, error) {
	artifactPath := filepath.Join(s.Root, "backend", "index", "catalogue-tree.bin")
	if _, err := os.Stat(artifactPath); err == nil {
		if index, loadErr := loadTaxonArtifact(artifactPath, s); loadErr == nil {
			return index, nil
		}
	}
	return loadTaxonIndexFromShards(s)
}

func loadTaxonIndexFromShards(s *Snapshot) (*TaxonIndex, error) {
	files := s.Catalogue.Hierarchy.Nodes.Files
	if len(files) == 0 {
		return nil, errors.New("catalogue hierarchy has no node shards")
	}
	capacity := 0
	for _, file := range files {
		capacity += file.Records
	}
	index := &TaxonIndex{
		arena:               make([]byte, 0, capacity*32),
		nodes:               make([]packedTaxon, 0, capacity),
		parentArena:         make([]byte, 0, capacity*8),
		parentRefs:          make([]stringRef, 0, capacity),
		rankValues:          []string{""},
		statusValues:        []string{""},
		sourceDatasetValues: []string{""},
		rankLookup:          map[string]uint8{"": 0},
		statusLookup:        map[string]uint8{"": 0},
		sourceDatasetLookup: map[string]uint16{"": 0},
	}
	for _, file := range files {
		if err := index.readShard(filepath.Join(s.Catalogue.RegistryRoot, filepath.FromSlash(file.Path))); err != nil {
			return nil, err
		}
	}
	if len(index.nodes) == 0 {
		return nil, errors.New("catalogue hierarchy contains no nodes")
	}
	index.ids = newPackedIDTable(len(index.nodes))
	for i := range index.nodes {
		if err := index.ids.insert(hashTaxonIDRef(index.arena, index.nodes[i].id), uint32(i), index); err != nil {
			return nil, err
		}
	}
	if err := index.resolveParents(); err != nil {
		return nil, err
	}
	index.buildChildren()
	index.parentArena = nil
	index.parentRefs = nil
	index.rankLookup = nil
	index.statusLookup = nil
	index.sourceDatasetLookup = nil
	return index, nil
}

func taxonSourceFingerprint(s *Snapshot) [32]byte {
	hash := sha256.New()
	var numbers [16]byte
	for _, file := range s.Catalogue.Hierarchy.Nodes.Files {
		_, _ = hash.Write([]byte(file.Path))
		_, _ = hash.Write([]byte{0})
		_, _ = hash.Write([]byte(file.SHA256))
		_, _ = hash.Write([]byte{0})
		binary.LittleEndian.PutUint64(numbers[:8], uint64(file.Records))
		binary.LittleEndian.PutUint64(numbers[8:], uint64(file.Bytes))
		_, _ = hash.Write(numbers[:])
	}
	var result [32]byte
	copy(result[:], hash.Sum(nil))
	return result
}

func loadTaxonArtifact(path string, s *Snapshot) (*TaxonIndex, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	reader := bufio.NewReaderSize(file, 256<<10)
	header := make([]byte, 8+10*4+32)
	if _, err := io.ReadFull(reader, header); err != nil {
		return nil, fmt.Errorf("read taxonomy artifact header: %w", err)
	}
	if string(header[:8]) != taxonArtifactMagic {
		return nil, errors.New("taxonomy artifact magic mismatch")
	}
	version := binary.LittleEndian.Uint32(header[8:])
	if version != taxonArtifactVersion {
		return nil, fmt.Errorf("unsupported taxonomy artifact version %d", version)
	}
	datasetLength := binary.LittleEndian.Uint32(header[12:])
	aliasLength := binary.LittleEndian.Uint32(header[16:])
	nodeCount := binary.LittleEndian.Uint32(header[20:])
	childCount := binary.LittleEndian.Uint32(header[24:])
	rootCount := binary.LittleEndian.Uint32(header[28:])
	arenaLength := binary.LittleEndian.Uint32(header[32:])
	rankCount := binary.LittleEndian.Uint32(header[36:])
	statusCount := binary.LittleEndian.Uint32(header[40:])
	sourceDatasetCount := binary.LittleEndian.Uint32(header[44:])
	fingerprint := taxonSourceFingerprint(s)
	if string(header[48:80]) != string(fingerprint[:]) {
		return nil, errors.New("taxonomy artifact source fingerprint mismatch")
	}
	dataset, err := readArtifactBytes(reader, datasetLength)
	if err != nil {
		return nil, fmt.Errorf("read taxonomy artifact dataset version: %w", err)
	}
	alias, err := readArtifactBytes(reader, aliasLength)
	if err != nil {
		return nil, fmt.Errorf("read taxonomy artifact release alias: %w", err)
	}
	if string(dataset) != s.Manifest.DatasetVersion || string(alias) != s.Catalogue.ReleaseAlias {
		return nil, errors.New("taxonomy artifact release mismatch")
	}
	rankValues, err := readArtifactCategories(reader, rankCount, 1<<8, "rank")
	if err != nil {
		return nil, err
	}
	statusValues, err := readArtifactCategories(reader, statusCount, 1<<8, "status")
	if err != nil {
		return nil, err
	}
	sourceDatasetValues, err := readArtifactCategories(reader, sourceDatasetCount, 1<<16, "sourceDatasetId")
	if err != nil {
		return nil, err
	}
	if nodeCount == 0 {
		return nil, errors.New("taxonomy artifact contains no nodes")
	}
	index := &TaxonIndex{
		arena:               make([]byte, int(arenaLength)),
		nodes:               make([]packedTaxon, int(nodeCount)),
		children:            make([]uint32, int(childCount)),
		roots:               make([]uint32, int(rootCount)),
		rankValues:          rankValues,
		statusValues:        statusValues,
		sourceDatasetValues: sourceDatasetValues,
	}
	if _, err := io.ReadFull(reader, index.arena); err != nil {
		return nil, fmt.Errorf("read taxonomy string arena: %w", err)
	}
	wire := make([]byte, taxonWireWords*4)
	for i := range index.nodes {
		if _, err := io.ReadFull(reader, wire); err != nil {
			return nil, fmt.Errorf("read taxonomy node %d: %w", i, err)
		}
		var words [taxonWireWords]uint32
		for word := range words {
			words[word] = binary.LittleEndian.Uint32(wire[word*4:])
		}
		if words[9] >= rankCount || words[10] >= statusCount || words[11] >= sourceDatasetCount || words[9] >= 1<<8 || words[10] >= 1<<8 || words[11] >= 1<<16 {
			return nil, fmt.Errorf("taxonomy node %d contains an invalid categorical value", i)
		}
		index.nodes[i] = packedTaxon{
			id:             stringRef{offset: words[0], length: words[1]},
			scientificName: stringRef{offset: words[2], length: words[3]},
			authorship:     stringRef{offset: words[4], length: words[5]},
			parent:         words[6], childStart: words[7], childCount: words[8],
			rankID: uint8(words[9]), statusID: uint8(words[10]), sourceDatasetID: uint16(words[11]),
		}
	}
	for i := range index.children {
		if _, err := io.ReadFull(reader, wire[:4]); err != nil {
			return nil, fmt.Errorf("read taxonomy child index %d: %w", i, err)
		}
		index.children[i] = binary.LittleEndian.Uint32(wire[:4])
	}
	for i := range index.roots {
		if _, err := io.ReadFull(reader, wire[:4]); err != nil {
			return nil, fmt.Errorf("read taxonomy root index %d: %w", i, err)
		}
		index.roots[i] = binary.LittleEndian.Uint32(wire[:4])
	}
	if err := index.validate(); err != nil {
		return nil, err
	}
	index.ids = newPackedIDTable(len(index.nodes))
	for i := range index.nodes {
		if err := index.ids.insert(hashTaxonIDRef(index.arena, index.nodes[i].id), uint32(i), index); err != nil {
			return nil, err
		}
	}
	return index, nil
}

func readArtifactBytes(reader io.Reader, length uint32) ([]byte, error) {
	value := make([]byte, int(length))
	_, err := io.ReadFull(reader, value)
	return value, err
}

func readArtifactCategories(reader io.Reader, count, maxCount uint32, name string) ([]string, error) {
	if count == 0 || count > maxCount {
		return nil, fmt.Errorf("taxonomy %s dictionary count %d is invalid", name, count)
	}
	values := make([]string, int(count))
	for i := uint32(1); i < count; i++ {
		var lengthBytes [4]byte
		if _, err := io.ReadFull(reader, lengthBytes[:]); err != nil {
			return nil, fmt.Errorf("read taxonomy %s dictionary length: %w", name, err)
		}
		value, err := readArtifactBytes(reader, binary.LittleEndian.Uint32(lengthBytes[:]))
		if err != nil {
			return nil, fmt.Errorf("read taxonomy %s dictionary value: %w", name, err)
		}
		values[i] = string(value)
	}
	return values, nil
}

func writeArtifactCategories(writer io.Writer, values []string) error {
	if len(values) == 0 || len(values) > 1<<16 {
		return errors.New("taxonomy categorical dictionary has an invalid size")
	}
	var lengthBytes [4]byte
	for _, value := range values[1:] {
		if len(value) > int(^uint32(0)) {
			return errors.New("taxonomy categorical value exceeds uint32 limit")
		}
		binary.LittleEndian.PutUint32(lengthBytes[:], uint32(len(value)))
		if _, err := writer.Write(lengthBytes[:]); err != nil {
			return err
		}
		if _, err := io.WriteString(writer, value); err != nil {
			return err
		}
	}
	return nil
}

func (t *TaxonIndex) validate() error {
	nodeCount := uint32(len(t.nodes))
	for i, node := range t.nodes {
		if !validStringRef(node.id, len(t.arena)) || !validStringRef(node.scientificName, len(t.arena)) ||
			!validStringRef(node.authorship, len(t.arena)) || int(node.rankID) >= len(t.rankValues) ||
			int(node.statusID) >= len(t.statusValues) || int(node.sourceDatasetID) >= len(t.sourceDatasetValues) {
			return fmt.Errorf("taxonomy node %d contains an invalid string reference", i)
		}
		if node.parent != noTaxon && node.parent >= nodeCount {
			return fmt.Errorf("taxonomy node %d contains an invalid parent index", i)
		}
		if uint64(node.childStart)+uint64(node.childCount) > uint64(len(t.children)) {
			return fmt.Errorf("taxonomy node %d contains an invalid child range", i)
		}
	}
	for i, child := range t.children {
		if child >= nodeCount {
			return fmt.Errorf("taxonomy child index %d is out of range", i)
		}
	}
	for i, root := range t.roots {
		if root >= nodeCount || t.nodes[root].parent != noTaxon {
			return fmt.Errorf("taxonomy root index %d is invalid", i)
		}
	}
	return nil
}

// WriteTaxonArtifact writes the current packed hierarchy as a strict runtime
// artifact. It is a rebuildable derived cache, not another scientific source.
func (s *Snapshot) WriteTaxonArtifact(path string) error {
	if s.Taxonomy == nil {
		return errors.New("taxonomy index is not loaded")
	}
	return s.Taxonomy.writeArtifact(path, s.Manifest.DatasetVersion, s.Catalogue.ReleaseAlias, taxonSourceFingerprint(s))
}

func (t *TaxonIndex) writeArtifact(path, datasetVersion, releaseAlias string, fingerprint [32]byte) error {
	if len(datasetVersion) > int(^uint32(0)) || len(releaseAlias) > int(^uint32(0)) || len(t.arena) > int(^uint32(0)) || len(t.nodes) > int(^uint32(0)) || len(t.children) > int(^uint32(0)) || len(t.roots) > int(^uint32(0)) || len(t.rankValues) > 1<<8 || len(t.statusValues) > 1<<8 || len(t.sourceDatasetValues) > 1<<16 {
		return errors.New("taxonomy artifact exceeds uint32 limits")
	}
	directory := filepath.Dir(path)
	if err := os.MkdirAll(directory, 0755); err != nil {
		return err
	}
	temporary, err := os.CreateTemp(directory, ".catalogue-tree-*")
	if err != nil {
		return err
	}
	temporaryPath := temporary.Name()
	defer os.Remove(temporaryPath)
	writer := bufio.NewWriterSize(temporary, 256<<10)
	header := make([]byte, 8+10*4+32)
	copy(header[:8], taxonArtifactMagic)
	binary.LittleEndian.PutUint32(header[8:], taxonArtifactVersion)
	binary.LittleEndian.PutUint32(header[12:], uint32(len(datasetVersion)))
	binary.LittleEndian.PutUint32(header[16:], uint32(len(releaseAlias)))
	binary.LittleEndian.PutUint32(header[20:], uint32(len(t.nodes)))
	binary.LittleEndian.PutUint32(header[24:], uint32(len(t.children)))
	binary.LittleEndian.PutUint32(header[28:], uint32(len(t.roots)))
	binary.LittleEndian.PutUint32(header[32:], uint32(len(t.arena)))
	binary.LittleEndian.PutUint32(header[36:], uint32(len(t.rankValues)))
	binary.LittleEndian.PutUint32(header[40:], uint32(len(t.statusValues)))
	binary.LittleEndian.PutUint32(header[44:], uint32(len(t.sourceDatasetValues)))
	copy(header[48:], fingerprint[:])
	if _, err := writer.Write(header); err != nil {
		_ = temporary.Close()
		return err
	}
	if _, err := writer.WriteString(datasetVersion); err != nil {
		_ = temporary.Close()
		return err
	}
	if _, err := writer.WriteString(releaseAlias); err != nil {
		_ = temporary.Close()
		return err
	}
	if err := writeArtifactCategories(writer, t.rankValues); err != nil {
		_ = temporary.Close()
		return err
	}
	if err := writeArtifactCategories(writer, t.statusValues); err != nil {
		_ = temporary.Close()
		return err
	}
	if err := writeArtifactCategories(writer, t.sourceDatasetValues); err != nil {
		_ = temporary.Close()
		return err
	}
	if _, err := writer.Write(t.arena); err != nil {
		_ = temporary.Close()
		return err
	}
	wire := make([]byte, taxonWireWords*4)
	for _, node := range t.nodes {
		words := [...]uint32{node.id.offset, node.id.length, node.scientificName.offset, node.scientificName.length, node.authorship.offset, node.authorship.length, node.parent, node.childStart, node.childCount, uint32(node.rankID), uint32(node.statusID), uint32(node.sourceDatasetID)}
		for i, word := range words {
			binary.LittleEndian.PutUint32(wire[i*4:], word)
		}
		if _, err := writer.Write(wire); err != nil {
			_ = temporary.Close()
			return err
		}
	}
	for _, child := range t.children {
		binary.LittleEndian.PutUint32(wire[:4], child)
		if _, err := writer.Write(wire[:4]); err != nil {
			_ = temporary.Close()
			return err
		}
	}
	for _, root := range t.roots {
		binary.LittleEndian.PutUint32(wire[:4], root)
		if _, err := writer.Write(wire[:4]); err != nil {
			_ = temporary.Close()
			return err
		}
	}
	if err := writer.Flush(); err != nil {
		_ = temporary.Close()
		return err
	}
	if err := temporary.Sync(); err != nil {
		_ = temporary.Close()
		return err
	}
	if err := temporary.Close(); err != nil {
		return err
	}
	if err := os.Rename(temporaryPath, path); err != nil {
		if removeErr := os.Remove(path); removeErr != nil {
			return err
		}
		if err := os.Rename(temporaryPath, path); err != nil {
			return err
		}
	}
	return nil
}

func validStringRef(ref stringRef, arenaLength int) bool {
	return uint64(ref.offset)+uint64(ref.length) <= uint64(arenaLength)
}

func (t *TaxonIndex) readShard(path string) error {
	file, err := os.Open(path)
	if err != nil {
		return fmt.Errorf("open catalogue node shard %s: %w", path, err)
	}
	defer file.Close()
	reader, err := gzip.NewReader(file)
	if err != nil {
		return fmt.Errorf("open gzip catalogue node shard %s: %w", path, err)
	}
	defer reader.Close()
	decoder := json.NewDecoder(bufio.NewReaderSize(reader, 256<<10))
	for {
		var row taxonRow
		err := decoder.Decode(&row)
		if err == io.EOF {
			break
		}
		if err != nil {
			return fmt.Errorf("decode catalogue node shard %s: %w", path, err)
		}
		if row.ID == "" || row.ScientificName == "" {
			return fmt.Errorf("catalogue node shard %s contains an incomplete row", path)
		}
		rankID, err := t.intern8(row.Rank, t.rankLookup, &t.rankValues)
		if err != nil {
			return fmt.Errorf("catalogue node shard %s: %w", path, err)
		}
		statusID, err := t.intern8(row.Status, t.statusLookup, &t.statusValues)
		if err != nil {
			return fmt.Errorf("catalogue node shard %s: %w", path, err)
		}
		sourceDatasetID, err := t.intern16(optionalString(row.SourceDataset), t.sourceDatasetLookup, &t.sourceDatasetValues)
		if err != nil {
			return fmt.Errorf("catalogue node shard %s: %w", path, err)
		}
		node := packedTaxon{
			id:              t.append(row.ID),
			scientificName:  t.append(row.ScientificName),
			authorship:      t.appendOptional(row.Authorship),
			parent:          noTaxon,
			rankID:          rankID,
			statusID:        statusID,
			sourceDatasetID: sourceDatasetID,
		}
		t.nodes = append(t.nodes, node)
		t.parentRefs = append(t.parentRefs, t.appendParentOptional(row.ParentID))
	}
	return nil
}

func (t *TaxonIndex) append(value string) stringRef {
	if value == "" {
		return stringRef{}
	}
	offset := uint32(len(t.arena))
	t.arena = append(t.arena, value...)
	return stringRef{offset: offset, length: uint32(len(value))}
}

func (t *TaxonIndex) appendOptional(value *string) stringRef {
	if value == nil {
		return stringRef{}
	}
	return t.append(*value)
}

func optionalString(value *string) string {
	if value == nil {
		return ""
	}
	return *value
}

func (t *TaxonIndex) intern8(value string, lookup map[string]uint8, values *[]string) (uint8, error) {
	if id, ok := lookup[value]; ok {
		return id, nil
	}
	if len(*values) >= 1<<8 {
		return 0, errors.New("taxonomy categorical dictionary exceeds uint8 capacity")
	}
	id := uint8(len(*values))
	lookup[value] = id
	*values = append(*values, value)
	return id, nil
}

func (t *TaxonIndex) intern16(value string, lookup map[string]uint16, values *[]string) (uint16, error) {
	if id, ok := lookup[value]; ok {
		return id, nil
	}
	if len(*values) >= 1<<16 {
		return 0, errors.New("taxonomy categorical dictionary exceeds uint16 capacity")
	}
	id := uint16(len(*values))
	lookup[value] = id
	*values = append(*values, value)
	return id, nil
}

func (t *TaxonIndex) appendParentOptional(value *string) stringRef {
	if value == nil || *value == "" {
		return stringRef{}
	}
	offset := uint32(len(t.parentArena))
	t.parentArena = append(t.parentArena, (*value)...)
	return stringRef{offset: offset, length: uint32(len(*value))}
}

func (t *TaxonIndex) resolveParents() error {
	for i := range t.nodes {
		parentID := textArena(t.parentArena, t.parentRefs[i])
		if parentID == "" {
			t.roots = append(t.roots, uint32(i))
			continue
		}
		parent, ok := t.lookup(parentID)
		if !ok {
			return fmt.Errorf("catalogue node %s references missing parent %s", t.text(t.nodes[i].id), parentID)
		}
		t.nodes[i].parent = parent
	}
	return nil
}

func (t *TaxonIndex) buildChildren() {
	counts := make([]uint32, len(t.nodes))
	for i := range t.nodes {
		if t.nodes[i].parent != noTaxon {
			counts[t.nodes[i].parent]++
		}
	}
	total := uint64(0)
	for i := range t.nodes {
		t.nodes[i].childStart = uint32(total)
		t.nodes[i].childCount = counts[i]
		total += uint64(counts[i])
	}
	t.children = make([]uint32, int(total))
	next := make([]uint32, len(t.nodes))
	for i := range t.nodes {
		next[i] = t.nodes[i].childStart
	}
	for i := range t.nodes {
		parent := t.nodes[i].parent
		if parent == noTaxon {
			continue
		}
		t.children[next[parent]] = uint32(i)
		next[parent]++
	}
	for i := range t.nodes {
		start := int(t.nodes[i].childStart)
		end := start + int(t.nodes[i].childCount)
		sort.Slice(t.children[start:end], func(a, b int) bool {
			left := t.nodes[t.children[start+a]]
			right := t.nodes[t.children[start+b]]
			leftName := t.text(left.scientificName)
			rightName := t.text(right.scientificName)
			if leftName != rightName {
				return leftName < rightName
			}
			return t.text(left.id) < t.text(right.id)
		})
	}
	sort.Slice(t.roots, func(i, j int) bool {
		left := t.nodes[t.roots[i]]
		right := t.nodes[t.roots[j]]
		leftName := t.text(left.scientificName)
		rightName := t.text(right.scientificName)
		if leftName != rightName {
			return leftName < rightName
		}
		return t.text(left.id) < t.text(right.id)
	})
}

func newPackedIDTable(nodeCount int) packedIDTable {
	size := 1
	for size < nodeCount*10/7+1 {
		size <<= 1
	}
	return packedIDTable{hashes: make([]uint64, size), values: make([]uint32, size), mask: uint64(size - 1)}
}

func hashTaxonID(value string) uint64 {
	hash := uint64(14695981039346656037)
	for i := 0; i < len(value); i++ {
		hash ^= uint64(value[i])
		hash *= 1099511628211
	}
	if hash == 0 {
		return 1
	}
	return hash
}

func hashTaxonIDRef(arena []byte, ref stringRef) uint64 {
	hash := uint64(14695981039346656037)
	for _, value := range arena[ref.offset : ref.offset+ref.length] {
		hash ^= uint64(value)
		hash *= 1099511628211
	}
	if hash == 0 {
		return 1
	}
	return hash
}

func (t *packedIDTable) insert(hash uint64, index uint32, owner *TaxonIndex) error {
	slot := hash & t.mask
	for {
		if t.hashes[slot] == 0 {
			t.hashes[slot] = hash
			t.values[slot] = index + 1
			return nil
		}
		if t.hashes[slot] == hash {
			existing := t.values[slot] - 1
			if owner.text(owner.nodes[existing].id) == owner.text(owner.nodes[index].id) {
				return fmt.Errorf("duplicate catalogue node id %s", owner.text(owner.nodes[index].id))
			}
		}
		slot = (slot + 1) & t.mask
	}
}

func (t *packedIDTable) lookup(id string, owner *TaxonIndex) (uint32, bool) {
	hash := hashTaxonID(id)
	slot := hash & t.mask
	for {
		stored := t.hashes[slot]
		if stored == 0 {
			return 0, false
		}
		if stored == hash {
			index := t.values[slot] - 1
			if owner.text(owner.nodes[index].id) == id {
				return index, true
			}
		}
		slot = (slot + 1) & t.mask
	}
}

func (t *TaxonIndex) lookup(id string) (uint32, bool) {
	return t.ids.lookup(id, t)
}

func (t *TaxonIndex) Record(id string) (TaxonRecord, bool) {
	index, ok := t.lookup(id)
	if !ok {
		return TaxonRecord{}, false
	}
	return t.record(index), true
}

func (t *TaxonIndex) ChildrenPage(parentID string, offset, limit int) ([]TaxonRecord, int, bool) {
	parent, ok := t.lookup(parentID)
	if !ok {
		return nil, 0, false
	}
	node := t.nodes[parent]
	total := int(node.childCount)
	if offset > total {
		offset = total
	}
	end := offset + limit
	if end > total {
		end = total
	}
	result := make([]TaxonRecord, 0, end-offset)
	for _, child := range t.children[int(node.childStart)+offset : int(node.childStart)+end] {
		result = append(result, t.record(child))
	}
	return result, total, true
}

func (t *TaxonIndex) RootID() string {
	if len(t.roots) == 0 {
		return ""
	}
	return t.text(t.nodes[t.roots[0]].id)
}

func (t *TaxonIndex) NodeCount() int { return len(t.nodes) }

func (t *TaxonIndex) RootRecords() []TaxonRecord {
	result := make([]TaxonRecord, 0, len(t.roots))
	for _, root := range t.roots {
		result = append(result, t.record(root))
	}
	return result
}

// StreamJSONL writes every resident hierarchy node as one JSON object per
// line. It keeps memory bounded to one encoded record for full-tree transfer.
func (t *TaxonIndex) StreamJSONL(ctx context.Context, output io.Writer) error {
	writer := bufio.NewWriterSize(output, 256<<10)
	encoder := json.NewEncoder(writer)
	for i := range t.nodes {
		if i&1023 == 0 {
			if err := ctx.Err(); err != nil {
				return err
			}
		}
		if err := encoder.Encode(t.record(uint32(i))); err != nil {
			return err
		}
		if i&1023 == 1023 {
			if err := writer.Flush(); err != nil {
				return err
			}
		}
	}
	return writer.Flush()
}

func (t *TaxonIndex) record(index uint32) TaxonRecord {
	node := t.nodes[index]
	result := TaxonRecord{
		ID:             t.text(node.id),
		ScientificName: t.text(node.scientificName),
		Rank:           t.rankValues[node.rankID],
		Status:         t.statusValues[node.statusID],
		ChildCount:     int(node.childCount),
	}
	if node.parent != noTaxon {
		parentID := t.text(t.nodes[node.parent].id)
		result.ParentID = &parentID
	}
	if node.authorship.length > 0 {
		value := t.text(node.authorship)
		result.Authorship = &value
	}
	if node.sourceDatasetID != 0 {
		value := t.sourceDatasetValues[node.sourceDatasetID]
		result.SourceDataset = &value
	}
	return result
}

func (t *TaxonIndex) text(ref stringRef) string {
	return textArena(t.arena, ref)
}

func textArena(arena []byte, ref stringRef) string {
	if ref.length == 0 {
		return ""
	}
	return unsafe.String(&arena[ref.offset], ref.length)
}
