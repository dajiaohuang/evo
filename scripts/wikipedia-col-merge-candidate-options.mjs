// Preserve evidence from duplicate links only when the Wikidata identity agrees.
export function mergeCandidateOptions(options) {
  const byUrl = new Map()
  for (const option of options) {
    const existing = byUrl.get(option.url)
    if (!existing) {
      byUrl.set(option.url, { ...option, parentNames: [...(option.parentNames ?? [])] })
    } else if (existing.item === option.item) {
      existing.parentNames = [...new Set([...existing.parentNames, ...(option.parentNames ?? [])])]
    }
  }
  return [...byUrl.values()]
}
