package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"net/url"
	"os"
	"runtime"
	"sort"
	"strings"
	"sync"
	"time"

	"github.com/dajiaohuang/evo/backend/internal/api"
	"github.com/dajiaohuang/evo/backend/internal/store"
)

type sample struct {
	Name          string          `json:"-"`
	Latencies     []time.Duration `json:"-"`
	Errors        int             `json:"errors"`
	ResponseBytes int64           `json:"-"`
	Wall          time.Duration   `json:"-"`
}

func main() {
	root := flag.String("data-root", "..", "Evo repository root containing data/")
	rounds := flag.Int("rounds", 20, "sequential warm requests per endpoint")
	concurrency := flag.Int("concurrency", 16, "parallel workers for the mixed request test")
	fullSync := flag.Bool("full-sync", false, "transfer and hash every current full-release resource, then verify Range resume")
	syncConcurrency := flag.Int("sync-concurrency", 4, "parallel workers for -full-sync")
	serverURL := flag.String("server-url", "", "HTTP server URL for -full-sync; omit to use an in-process httptest server")
	flag.Parse()
	if *fullSync && strings.TrimRight(*serverURL, "/") != "" {
		client := &http.Client{}
		report, err := runFullSync(client, strings.TrimRight(*serverURL, "/"), *syncConcurrency)
		if err != nil {
			panic(err)
		}
		report.Transport = "http-socket"
		b, err := json.MarshalIndent(report, "", "  ")
		if err != nil {
			panic(err)
		}
		fmt.Println(string(b))
		if report.Errors != 0 || report.Mismatches != 0 || report.Resume.Status != http.StatusPartialContent || !report.Resume.HashMatches {
			os.Exit(1)
		}
		return
	}
	started := time.Now()
	data, err := store.New(*root)
	if err != nil {
		panic(err)
	}
	loadDuration := time.Since(started)
	server := httptest.NewServer(api.NewHandler(data))
	defer server.Close()
	client := server.Client()
	if *fullSync {
		report, err := runFullSync(client, server.URL, *syncConcurrency)
		if err != nil {
			panic(err)
		}
		report.Transport = "httptest-in-process"
		b, err := json.MarshalIndent(report, "", "  ")
		if err != nil {
			panic(err)
		}
		fmt.Println(string(b))
		if report.Errors != 0 || report.Mismatches != 0 || report.Resume.Status != http.StatusPartialContent || !report.Resume.HashMatches {
			os.Exit(1)
		}
		return
	}
	measure := func(name, target string, headers map[string]string, count int) sample {
		started := time.Now()
		result := sample{Name: name, Latencies: make([]time.Duration, 0, count)}
		for i := 0; i < count; i++ {
			request, _ := http.NewRequest(http.MethodGet, server.URL+target, nil)
			for key, value := range headers {
				request.Header.Set(key, value)
			}
			requestStarted := time.Now()
			response, requestErr := client.Do(request)
			if requestErr != nil {
				result.Errors++
				continue
			}
			bytes, _ := io.Copy(io.Discard, response.Body)
			_ = response.Body.Close()
			result.Latencies = append(result.Latencies, time.Since(requestStarted))
			result.ResponseBytes += bytes
			if response.StatusCode < 200 || response.StatusCode >= 300 {
				result.Errors++
			}
		}
		result.Wall = time.Since(started)
		return result
	}
	cold := measure("cold routed search", "/v1/search/names?q=perissodactyla&limit=20", nil, 1)
	warm := measure("warm routed search", "/v1/search/names?q=perissodactyla&limit=20", nil, *rounds)
	rootID := data.Snapshot().Taxonomy.RootID()
	treeNode := measure("resident tree node lookup", "/v1/catalogue/taxa/"+url.PathEscape(rootID), nil, *rounds)
	treeChildren := measure("resident tree children page", "/v1/catalogue/taxa/"+url.PathEscape(rootID)+"/children?limit=100", nil, *rounds)
	entity := measure("entity evidence", "/v1/entities/perissodactyla/evidence", nil, *rounds)
	rangeRequest := measure("resource range", "/v1/resources/data/manifest.json", map[string]string{"Range": "bytes=0-1023"}, *rounds)
	mixed := make([]time.Duration, 0, *concurrency**rounds)
	var mixedBytes int64
	mixedStarted := time.Now()
	var mixedMu sync.Mutex
	var waitGroup sync.WaitGroup
	for worker := 0; worker < *concurrency; worker++ {
		waitGroup.Add(1)
		go func() {
			defer waitGroup.Done()
			for i := 0; i < *rounds; i++ {
				target := "/v1/entities/perissodactyla/evidence"
				if i%2 == 0 {
					target = "/v1/search/names?q=perissodactyla&limit=20"
				} else if i%3 == 0 {
					target = "/v1/catalogue/taxa/" + url.PathEscape(rootID) + "/children?limit=100"
				}
				requestStarted := time.Now()
				response, requestErr := client.Get(server.URL + target)
				var bytes int64
				if requestErr == nil {
					bytes, _ = io.Copy(io.Discard, response.Body)
					_ = response.Body.Close()
				}
				if requestErr == nil {
					mixedMu.Lock()
					mixed = append(mixed, time.Since(requestStarted))
					mixedBytes += bytes
					mixedMu.Unlock()
				}
			}
		}()
	}
	waitGroup.Wait()
	mixedWall := time.Since(mixedStarted)
	runtime.GC()
	var memory runtime.MemStats
	runtime.ReadMemStats(&memory)
	treeStorage := data.Snapshot().Taxonomy.StorageStats()
	output := map[string]any{
		"datasetVersion": data.Snapshot().Manifest.DatasetVersion, "goVersion": runtime.Version(), "os": runtime.GOOS, "arch": runtime.GOARCH, "cpuCount": runtime.NumCPU(),
		"startupLoadMs": float64(loadDuration.Microseconds()) / 1000, "heapAllocBytes": memory.HeapAlloc, "heapInuseBytes": memory.HeapInuse,
		"treeStorage": treeStorage,
		"samples":     []any{stats(cold), stats(warm), stats(treeNode), stats(treeChildren), stats(entity), stats(rangeRequest), stats(sample{Name: "mixed concurrent", Latencies: mixed, ResponseBytes: mixedBytes, Wall: mixedWall})},
	}
	b, err := json.MarshalIndent(output, "", "  ")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(b))
}

func stats(value sample) map[string]any {
	result := map[string]any{"name": value.Name, "count": len(value.Latencies), "errors": value.Errors, "responseBytes": value.ResponseBytes}
	if len(value.Latencies) == 0 {
		return result
	}
	values := append([]time.Duration(nil), value.Latencies...)
	sort.Slice(values, func(i, j int) bool { return values[i] < values[j] })
	percentile := func(p float64) float64 {
		index := int(float64(len(values)-1) * p)
		return float64(values[index].Microseconds()) / 1000
	}
	result["p50Ms"] = percentile(.50)
	result["p95Ms"] = percentile(.95)
	result["p99Ms"] = percentile(.99)
	wall := value.Wall
	if wall <= 0 {
		var total time.Duration
		for _, latency := range values {
			total += latency
		}
		wall = total
	}
	if wall > 0 {
		result["throughputPerSecond"] = float64(len(values)) / wall.Seconds()
	}
	return result
}
