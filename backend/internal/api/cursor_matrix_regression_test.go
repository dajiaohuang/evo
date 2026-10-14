package api

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"math"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strconv"
	"testing"
)

// Independent acceptance matrix against the patched production Handler.
func TestReviewCursorTokenCompatibilityAndPageBoundaries(t *testing.T) {
	h := testHandler(t)
	root := h.(*Handler).Store.Snapshot().Taxonomy.RootID()
	base := "/v1/catalogue/taxa/" + url.PathEscape(root) + "/children?limit=1&cursor="

	for _, offset := range []int{0, 1, 9007199254740991, math.MaxInt} {
		t.Run(fmt.Sprintf("canonical_offset_%d", offset), func(t *testing.T) {
			token := base64.RawURLEncoding.EncodeToString([]byte(strconv.Itoa(offset)))
			// Model an ordinary URLSearchParams/query-string client. QueryUnescape
			// on the server must recover the exact emitted unpadded base64url token.
			w := cursorRequest(t, h, base+url.QueryEscape(token))
			if w.Code != http.StatusOK {
				t.Fatalf("canonical token %q: status=%d body=%s", token, w.Code, w.Body.String())
			}
			var page struct {
				Records []json.RawMessage `json:"records"`
				Total int `json:"total"`
				Next string `json:"nextCursor"`
			}
			if err := json.Unmarshal(w.Body.Bytes(), &page); err != nil {
				t.Fatal(err)
			}
			if offset == 0 && len(page.Records) != 1 {
				t.Fatalf("zero offset should select first record: %s", w.Body.String())
			}
			if offset >= page.Total && (len(page.Records) != 0 || page.Next != "") {
				t.Fatalf("out-of-range canonical offset should be a terminal empty page: %s", w.Body.String())
			}
		})
	}

	// The actual emitted form is RawURLEncoding (unpadded); padded encoding is
	// not emitted and must not be confused with a token after URL decoding.
	padded := base64.URLEncoding.EncodeToString([]byte("1"))
	w := cursorRequest(t, h, base+url.QueryEscape(padded))
	if w.Code != http.StatusBadRequest || !containsInvalidCursor(w) {
		t.Fatalf("padded non-emitted token %q should return structured invalid_cursor: %d %s", padded, w.Code, w.Body.String())
	}

	// A real taxonomy leaf has a valid empty children result, distinct from
	// an invalid token and with no continuation cursor.
	rootPage := cursorRequest(t, h, "/v1/catalogue/taxa/"+url.PathEscape(root)+"/children?limit=500")
	var rootRecords struct {
		Records []struct {
			ID string `json:"id"`
			ChildCount int `json:"childCount"`
		} `json:"records"`
	}
	if err := json.Unmarshal(rootPage.Body.Bytes(), &rootRecords); err != nil { t.Fatal(err) }
	leafID := ""
	frontier := make([]string, 0, len(rootRecords.Records))
	for _, record := range rootRecords.Records { frontier = append(frontier, record.ID) }
	for len(frontier) > 0 && leafID == "" {
		id := frontier[0]
		frontier = frontier[1:]
		children := cursorRequest(t, h, "/v1/catalogue/taxa/"+url.PathEscape(id)+"/children?limit=500")
		if children.Code != http.StatusOK { t.Fatalf("child probe %q: %d %s", id, children.Code, children.Body.String()) }
		var page struct { Records []struct { ID string `json:"id"` } `json:"records"`; Total int `json:"total"` }
		if err := json.Unmarshal(children.Body.Bytes(), &page); err != nil { t.Fatal(err) }
		if page.Total == 0 { leafID = id; break }
		for _, child := range page.Records { frontier = append(frontier, child.ID) }
	}
	if leafID == "" { t.Fatal("fixture has no reachable taxonomy leaf") }
	leafPage := cursorRequest(t, h, "/v1/catalogue/taxa/"+url.PathEscape(leafID)+"/children")
	var emptyPage struct {
		Records []json.RawMessage `json:"records"`
		Total int `json:"total"`
		Next string `json:"nextCursor"`
	}
	if leafPage.Code != http.StatusOK { t.Fatalf("leaf children: %d %s", leafPage.Code, leafPage.Body.String()) }
	if err := json.Unmarshal(leafPage.Body.Bytes(), &emptyPage); err != nil { t.Fatal(err) }
	if len(emptyPage.Records) != 0 || emptyPage.Total != 0 || emptyPage.Next != "" { t.Fatalf("unexpected leaf page: %s", leafPage.Body.String()) }

	// Fully drain the fixture branch: every emitted continuation advances and
	// terminates exactly at total, without repeats or a nextCursor cycle.
	seen := map[string]bool{}
	cursor := ""
	var expectedTotal = -1
	for i := 0; i < 8; i++ {
		target := "/v1/catalogue/taxa/" + url.PathEscape(root) + "/children?limit=1"
		if cursor != "" {
			target += "&cursor=" + url.QueryEscape(cursor)
		}
		pageResponse := cursorRequest(t, h, target)
		if pageResponse.Code != http.StatusOK {
			t.Fatalf("page %d: %d %s", i, pageResponse.Code, pageResponse.Body.String())
		}
		var page struct {
			Records []struct{ ID string `json:"id"` } `json:"records"`
			Total int `json:"total"`
			Next string `json:"nextCursor"`
		}
		if err := json.Unmarshal(pageResponse.Body.Bytes(), &page); err != nil { t.Fatal(err) }
		if expectedTotal < 0 { expectedTotal = page.Total }
		if page.Total != expectedTotal { t.Fatalf("total changed across pages: %d != %d", page.Total, expectedTotal) }
		for _, record := range page.Records {
			if seen[record.ID] { t.Fatalf("duplicate child %q at page %d", record.ID, i) }
			seen[record.ID] = true
		}
		if page.Next == "" {
			if len(seen) != expectedTotal { t.Fatalf("terminal page after %d records, total=%d", len(seen), expectedTotal) }
			return
		}
		if page.Next == cursor { t.Fatalf("cursor did not advance: %q", cursor) }
		cursor = page.Next
	}
	t.Fatal("pagination did not terminate within fixture bound")
}

func containsInvalidCursor(w *httptest.ResponseRecorder) bool {
	var payload struct { Error struct { Code string `json:"code"` } `json:"error"` }
	return json.Unmarshal(w.Body.Bytes(), &payload) == nil && payload.Error.Code == "invalid_cursor"
}
