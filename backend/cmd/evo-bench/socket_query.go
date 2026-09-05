package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"sync"
	"time"
)

type socketCapabilities struct {
	DatasetVersion string `json:"datasetVersion"`
	TreeIndex      struct {
		NodeCount int `json:"nodeCount"`
		RootCount int `json:"rootCount"`
	} `json:"treeIndex"`
	TreeRoots []struct {
		ID string `json:"id"`
	} `json:"treeRoots"`
}

type socketNodeResponse struct {
	Record struct {
		ID         string `json:"id"`
		ChildCount int    `json:"childCount"`
	} `json:"record"`
}

type socketChildrenResponse struct {
	Records []struct {
		ID string `json:"id"`
	} `json:"records"`
}

func runSocketQueryBench(client *http.Client, baseURL string, rounds, concurrency int) (map[string]any, error) {
	capabilities, err := getJSON[socketCapabilities](client, baseURL+"/v1/capabilities")
	if err != nil {
		return nil, err
	}
	if len(capabilities.TreeRoots) == 0 || capabilities.TreeIndex.NodeCount < 1 {
		return nil, fmt.Errorf("capabilities did not advertise a resident tree")
	}
	rootID := capabilities.TreeRoots[0].ID
	lineage, err := discoverLineage(client, baseURL, rootID)
	if err != nil {
		return nil, err
	}
	leafID := lineage[len(lineage)-1]
	measure := func(name, target string, count int) sample {
		result := sample{Name: name, Latencies: make([]time.Duration, 0, count)}
		started := time.Now()
		for i := 0; i < count; i++ {
			requestStarted := time.Now()
			response, requestErr := client.Get(baseURL + target)
			if requestErr != nil {
				result.Errors++
				continue
			}
			bytes, _ := io.Copy(io.Discard, response.Body)
			_ = response.Body.Close()
			if response.StatusCode < 200 || response.StatusCode >= 300 {
				result.Errors++
				continue
			}
			result.Latencies = append(result.Latencies, time.Since(requestStarted))
			result.ResponseBytes += bytes
		}
		result.Wall = time.Since(started)
		return result
	}
	searchTarget := "/v1/search/names?q=perissodactyla&limit=20"
	nodeTarget := "/v1/catalogue/taxa/" + url.PathEscape(leafID)
	childrenTarget := "/v1/catalogue/taxa/" + url.PathEscape(rootID) + "/children?limit=100"
	cold := measure("cold routed search", searchTarget, 1)
	warm := measure("warm routed search", searchTarget, rounds)
	node := measure("resident leaf node lookup", nodeTarget, rounds)
	children := measure("resident root children page", childrenTarget, rounds)
	lineageSample := measureLineage(client, baseURL, lineage, rounds)
	mixed := make([]time.Duration, 0, concurrency*rounds)
	var mixedBytes int64
	var mixedErrors int
	var mixedMu sync.Mutex
	started := time.Now()
	var waitGroup sync.WaitGroup
	for worker := 0; worker < concurrency; worker++ {
		waitGroup.Add(1)
		go func() {
			defer waitGroup.Done()
			for i := 0; i < rounds; i++ {
				target := nodeTarget
				if i%2 == 0 {
					target = searchTarget
				} else if i%3 == 0 {
					target = childrenTarget
				}
				requestStarted := time.Now()
				response, requestErr := client.Get(baseURL + target)
				if requestErr != nil {
					mixedMu.Lock()
					mixedErrors++
					mixedMu.Unlock()
					continue
				}
				bytes, _ := io.Copy(io.Discard, response.Body)
				_ = response.Body.Close()
				mixedMu.Lock()
				if response.StatusCode < 200 || response.StatusCode >= 300 {
					mixedErrors++
				} else {
					mixed = append(mixed, time.Since(requestStarted))
					mixedBytes += bytes
				}
				mixedMu.Unlock()
			}
		}()
	}
	waitGroup.Wait()
	mixedSample := sample{Name: "mixed concurrent", Latencies: mixed, Errors: mixedErrors, ResponseBytes: mixedBytes, Wall: time.Since(started)}
	return map[string]any{
		"transport": "http-socket", "datasetVersion": capabilities.DatasetVersion,
		"treeNodeCount": capabilities.TreeIndex.NodeCount, "rootCount": capabilities.TreeIndex.RootCount,
		"lineageDepth": len(lineage), "rounds": rounds, "concurrency": concurrency,
		"samples": []any{stats(cold), stats(warm), stats(node), stats(children), stats(lineageSample), stats(mixedSample)},
	}, nil
}

func getJSON[T any](client *http.Client, target string) (T, error) {
	var value T
	response, err := client.Get(target)
	if err != nil {
		return value, err
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return value, fmt.Errorf("GET %s returned %d", target, response.StatusCode)
	}
	if err := json.NewDecoder(response.Body).Decode(&value); err != nil {
		return value, err
	}
	return value, nil
}

func discoverLineage(client *http.Client, baseURL, rootID string) ([]string, error) {
	path := []string{}
	current := rootID
	for len(path) < 128 {
		node, err := getJSON[socketNodeResponse](client, baseURL+"/v1/catalogue/taxa/"+url.PathEscape(current))
		if err != nil {
			return nil, err
		}
		path = append(path, node.Record.ID)
		if node.Record.ChildCount == 0 {
			return path, nil
		}
		children, err := getJSON[socketChildrenResponse](client, baseURL+"/v1/catalogue/taxa/"+url.PathEscape(current)+"/children?limit=1")
		if err != nil || len(children.Records) == 0 {
			return path, err
		}
		current = children.Records[0].ID
	}
	return nil, fmt.Errorf("lineage exceeds 128 nodes")
}

func measureLineage(client *http.Client, baseURL string, lineage []string, rounds int) sample {
	result := sample{Name: "sequential lineage lookup", Latencies: make([]time.Duration, 0, rounds)}
	started := time.Now()
	for i := 0; i < rounds; i++ {
		requestStarted := time.Now()
		var bytes int64
		failed := false
		for _, id := range lineage {
			response, err := client.Get(baseURL + "/v1/catalogue/taxa/" + url.PathEscape(id))
			if err != nil {
				failed = true
				break
			}
			count, _ := io.Copy(io.Discard, response.Body)
			_ = response.Body.Close()
			bytes += count
			if response.StatusCode < 200 || response.StatusCode >= 300 {
				failed = true
				break
			}
		}
		if failed {
			result.Errors++
			continue
		}
		result.Latencies = append(result.Latencies, time.Since(requestStarted))
		result.ResponseBytes += bytes
	}
	result.Wall = time.Since(started)
	return result
}
