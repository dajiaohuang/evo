export function pageAuditAllows(url, item, badUrl, badItem) {
  if (badUrl(url)) return false
  return !item || !badItem(url, item)
}
