package main

import (
	"bufio"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"sort"
	"sync"
	"sync/atomic"
	"time"
)

type syncManifest struct {
	Kind           string `json:"kind"`
	DatasetVersion string `json:"datasetVersion"`
	TotalFiles     int    `json:"totalFiles"`
	TotalBytes     int64  `json:"totalBytes"`
}

type syncDescriptor struct {
	Kind           string `json:"kind"`
	Path           string `json:"path"`
	Bytes          int64  `json:"bytes"`
	SHA256         string `json:"sha256"`
	MediaType      string `json:"mediaType"`
	Encoding       string `json:"encoding"`
	ReleaseVersion string `json:"releaseVersion"`
	URL            string `json:"url"`
}

type fullSyncReport struct {
	DatasetVersion         string       `json:"datasetVersion"`
	Files                  int          `json:"files"`
	AdvertisedBytes        int64        `json:"advertisedBytes"`
	TransferredBytes       int64        `json:"transferredBytes"`
	Errors                 int          `json:"errors"`
	Mismatches             int          `json:"hashOrSizeMismatches"`
	Concurrency            int          `json:"concurrency"`
	TransferMs             float64      `json:"transferMs"`
	ThroughputMiBPerSecond float64      `json:"throughputMiBPerSecond"`
	Resume                 resumeReport `json:"resume"`
}

type resumeReport struct {
	Path         string `json:"path"`
	FirstBytes   int64  `json:"firstBytes"`
	ResumedBytes int64  `json:"resumedBytes"`
	Status       int    `json:"status"`
	HashMatches  bool   `json:"hashMatches"`
}

func runFullSync(client *http.Client, baseURL string, concurrency int) (fullSyncReport, error) {
	if concurrency < 1 {
		concurrency = 1
	}
	manifest, files, err := readSyncManifest(client, baseURL)
	if err != nil {
		return fullSyncReport{}, err
	}
	report := fullSyncReport{DatasetVersion: manifest.DatasetVersion, Files: len(files), AdvertisedBytes: manifest.TotalBytes, Concurrency: concurrency}
	if len(files) != manifest.TotalFiles {
		return report, fmt.Errorf("sync manifest files=%d, header totalFiles=%d", len(files), manifest.TotalFiles)
	}
	var descriptorBytes int64
	for _, file := range files {
		if file.ReleaseVersion != manifest.DatasetVersion || file.URL != "/v1/resources/"+file.Path {
			return report, fmt.Errorf("sync descriptor is not pinned to current release: %q", file.Path)
		}
		descriptorBytes += file.Bytes
	}
	if descriptorBytes != manifest.TotalBytes {
		return report, fmt.Errorf("sync descriptor bytes=%d, header totalBytes=%d", descriptorBytes, manifest.TotalBytes)
	}
	var transferred atomic.Int64
	var errorsCount atomic.Int64
	var mismatches atomic.Int64
	jobs := make(chan syncDescriptor)
	started := time.Now()
	var workers sync.WaitGroup
	for i := 0; i < concurrency; i++ {
		workers.Add(1)
		go func() {
			defer workers.Done()
			for file := range jobs {
				bytes, digest, status, requestErr := transferResource(client, baseURL+file.URL)
				transferred.Add(bytes)
				if requestErr != nil || status != http.StatusOK {
					errorsCount.Add(1)
					continue
				}
				if bytes != file.Bytes || digest != file.SHA256 {
					mismatches.Add(1)
				}
			}
		}()
	}
	for _, file := range files {
		jobs <- file
	}
	close(jobs)
	workers.Wait()
	report.TransferMs = float64(time.Since(started).Microseconds()) / 1000
	report.TransferredBytes = transferred.Load()
	report.Errors = int(errorsCount.Load())
	report.Mismatches = int(mismatches.Load())
	if report.TransferMs > 0 {
		report.ThroughputMiBPerSecond = float64(report.TransferredBytes) / (1024 * 1024) / (report.TransferMs / 1000)
	}
	report.Resume = resumeResource(client, baseURL, files)
	return report, nil
}

func readSyncManifest(client *http.Client, baseURL string) (syncManifest, []syncDescriptor, error) {
	response, err := client.Get(baseURL + "/v1/sync/files.ndjson?profile=full")
	if err != nil {
		return syncManifest{}, nil, err
	}
	defer response.Body.Close()
	if response.StatusCode != http.StatusOK {
		return syncManifest{}, nil, fmt.Errorf("sync manifest status %d", response.StatusCode)
	}
	scanner := bufio.NewScanner(response.Body)
	scanner.Buffer(make([]byte, 64*1024), 1024*1024)
	var header syncManifest
	var files []syncDescriptor
	for scanner.Scan() {
		if len(scanner.Bytes()) == 0 {
			continue
		}
		if len(files) == 0 && header.Kind == "" {
			if err := json.Unmarshal(scanner.Bytes(), &header); err != nil {
				return syncManifest{}, nil, err
			}
			if header.Kind != "manifest" {
				return syncManifest{}, nil, fmt.Errorf("first sync line kind=%q", header.Kind)
			}
			continue
		}
		var file syncDescriptor
		if err := json.Unmarshal(scanner.Bytes(), &file); err != nil {
			return syncManifest{}, nil, err
		}
		if file.Kind != "file" || file.Path == "" || file.URL == "" {
			return syncManifest{}, nil, fmt.Errorf("invalid sync descriptor for %q", file.Path)
		}
		files = append(files, file)
	}
	if err := scanner.Err(); err != nil {
		return syncManifest{}, nil, err
	}
	return header, files, nil
}

func transferResource(client *http.Client, target string) (int64, string, int, error) {
	response, err := client.Get(target)
	if err != nil {
		return 0, "", 0, err
	}
	defer response.Body.Close()
	hash := sha256.New()
	bytes, copyErr := io.Copy(hash, response.Body)
	return bytes, hex.EncodeToString(hash.Sum(nil)), response.StatusCode, copyErr
}

func resumeResource(client *http.Client, baseURL string, files []syncDescriptor) resumeReport {
	candidates := append([]syncDescriptor(nil), files...)
	sort.Slice(candidates, func(i, j int) bool { return candidates[i].Bytes > candidates[j].Bytes })
	for _, file := range candidates {
		if file.Bytes < 2 {
			continue
		}
		cut := file.Bytes / 2
		hash := sha256.New()
		first, ok := rangedResource(client, baseURL+file.URL, 0, cut-1, file.SHA256, hash, cut)
		if !ok {
			return resumeReport{Path: file.Path, Status: http.StatusPartialContent}
		}
		second, ok := rangedResource(client, baseURL+file.URL, cut, -1, file.SHA256, hash, file.Bytes-cut)
		if !ok {
			return resumeReport{Path: file.Path, FirstBytes: first.bytes, Status: http.StatusPartialContent}
		}
		return resumeReport{Path: file.Path, FirstBytes: first.bytes, ResumedBytes: second.bytes, Status: http.StatusPartialContent, HashMatches: hex.EncodeToString(hash.Sum(nil)) == file.SHA256}
	}
	return resumeReport{HashMatches: true}
}

type rangeResult struct {
	bytes  int64
	status int
}

func rangedResource(client *http.Client, target string, start, end int64, digest string, destination io.Writer, expected int64) (rangeResult, bool) {
	request, err := http.NewRequest(http.MethodGet, target, nil)
	if err != nil {
		return rangeResult{}, false
	}
	rangeValue := fmt.Sprintf("bytes=%d-", start)
	if end >= start {
		rangeValue = fmt.Sprintf("bytes=%d-%d", start, end)
	}
	request.Header.Set("Range", rangeValue)
	request.Header.Set("If-Range", digest)
	response, err := client.Do(request)
	if err != nil {
		return rangeResult{}, false
	}
	defer response.Body.Close()
	bytes, err := io.Copy(destination, response.Body)
	if err != nil || response.StatusCode != http.StatusPartialContent || bytes != expected {
		return rangeResult{status: response.StatusCode}, false
	}
	return rangeResult{bytes: bytes, status: response.StatusCode}, true
}
