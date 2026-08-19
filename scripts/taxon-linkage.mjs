export const normalizeTaxonName = (value) => String(value ?? '').trim().toLocaleLowerCase()

export function descendantTaxonScope(node, output = { ids: new Set(), names: new Set() }) {
  if (node.taxonId) output.ids.add(node.taxonId)
  if (node.name) output.names.add(normalizeTaxonName(node.name))
  for (const child of node.children ?? []) descendantTaxonScope(child, output)
  return output
}

export function occurrenceClassificationNames(record) {
  return Object.values(record.classification ?? {})
    .map(normalizeTaxonName)
    .filter(Boolean)
}

export function occurrenceMatchesTaxonScope(record, scope) {
  if (record.tid && scope.ids.has(record.tid)) return true
  return occurrenceClassificationNames(record).some((name) => scope.names.has(name))
}
