package api

import (
	"encoding/base64"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strconv"
	"testing"
)

// Exercises the production Handler and local release fixture; no listener/network.
func TestCatalogueChildrenRejectInvalidCursorAndPreservePaging(t *testing.T) {
	h := testHandler(t)
	root := h.(*Handler).Store.Snapshot().Taxonomy.RootID()
	base := "/v1/catalogue/taxa/" + url.PathEscape(root) + "/children"
	invalid := []struct{ name, value string }{
		{"malformed base64", "not*base64"},
		{"not an integer", base64.RawURLEncoding.EncodeToString([]byte("bad"))},
		{"NaN", base64.RawURLEncoding.EncodeToString([]byte("NaN"))},
		{"negative", base64.RawURLEncoding.EncodeToString([]byte("-1"))},
		{"partial numeric", base64.RawURLEncoding.EncodeToString([]byte("1x"))},
		{"noncanonical offset", base64.RawURLEncoding.EncodeToString([]byte("+1"))},
		{"integer overflow", base64.RawURLEncoding.EncodeToString([]byte("999999999999999999999999999999999999"))},
		{"empty supplied", ""},
	}
	for _, tc := range invalid {
		t.Run(tc.name, func(t *testing.T) {
			w := cursorRequest(t, h, base+"?limit=1&cursor="+url.QueryEscape(tc.value))
			if w.Code != http.StatusBadRequest {
				t.Fatalf("status=%d body=%s", w.Code, w.Body.String())
			}
			var body struct {
				Error struct {
					Code string `json:"code"`
				} `json:"error"`
			}
			if err := json.Unmarshal(w.Body.Bytes(), &body); err != nil || body.Error.Code != "invalid_cursor" {
				t.Fatalf("expected structured invalid_cursor, got %s (err=%v)", w.Body.String(), err)
			}
		})
	}

	first := cursorRequest(t, h, base+"?limit=1") // omitted cursor: first page
	if first.Code != http.StatusOK {
		t.Fatalf("first page: %d %s", first.Code, first.Body.String())
	}
	var defaultPage struct {
		Limit int `json:"limit"`
	}
	if err := json.Unmarshal(cursorRequest(t, h, base).Body.Bytes(), &defaultPage); err != nil || defaultPage.Limit != 100 {
		t.Fatalf("omitted limit must remain default 100: %+v err=%v", defaultPage, err)
	}
	var p1 struct {
		Records []struct {
			ID string `json:"id"`
		} `json:"records"`
		Next  string `json:"nextCursor"`
		Total int    `json:"total"`
	}
	if err := json.Unmarshal(first.Body.Bytes(), &p1); err != nil {
		t.Fatal(err)
	}
	if p1.Total <= 1 || len(p1.Records) != 1 || p1.Next == "" {
		t.Fatalf("fixture lacks a multi-page root: %s", first.Body.String())
	}
	second := cursorRequest(t, h, base+"?limit=1&cursor="+url.QueryEscape(p1.Next))
	if second.Code != http.StatusOK {
		t.Fatalf("valid page-2 cursor %q: %d %s", p1.Next, second.Code, second.Body.String())
	}
	var p2 struct {
		Records []struct {
			ID string `json:"id"`
		} `json:"records"`
		Next  string `json:"nextCursor"`
		Total int    `json:"total"`
	}
	if err := json.Unmarshal(second.Body.Bytes(), &p2); err != nil {
		t.Fatal(err)
	}
	if len(p2.Records) != 1 || p2.Records[0].ID == p1.Records[0].ID || p2.Total != p1.Total || p2.Next == "" {
		t.Fatalf("page 2 failed progress/hasNext contract: first=%s second=%s", first.Body.String(), second.Body.String())
	}
	offset, err := strconv.Atoi(string(stringMustDecode(t, p1.Next)))
	if err != nil || offset != len(p1.Records) {
		t.Fatalf("unexpected emitted cursor %q", p1.Next)
	}
}

func cursorRequest(t *testing.T, h http.Handler, target string) *httptest.ResponseRecorder {
	t.Helper()
	w := httptest.NewRecorder()
	h.ServeHTTP(w, httptest.NewRequest(http.MethodGet, target, nil))
	return w
}
func stringMustDecode(t *testing.T, token string) []byte {
	t.Helper()
	b, err := base64.RawURLEncoding.DecodeString(token)
	if err != nil {
		t.Fatalf("decode cursor: %v", err)
	}
	return b
}
