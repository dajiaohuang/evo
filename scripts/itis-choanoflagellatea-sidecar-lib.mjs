function clean(value) {
  return value === null || value === undefined ? null : String(value).trim() || null
}

export function normalizeScientificName(value) {
  return String(value ?? '')
    .normalize('NFC')
    .replaceAll('_', ' ')
    .replace(/\s+/gu, ' ')
    .trim()
    .replace(/^(\S+) \([^()\s]+\) (\S+)$/u, '$1 $2')
}

export function colExactMatchName(record) {
  const scientificName = String(record.scientificName ?? '')
  const authorship = clean(record.authorship)
  const suffix = authorship ? ` ${authorship}` : ''
  const canonical = suffix && scientificName.endsWith(suffix)
    ? scientificName.slice(0, -suffix.length)
    : scientificName
  return normalizeScientificName(canonical)
}
