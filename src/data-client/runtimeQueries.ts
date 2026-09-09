import type { CatalogueRecord, RuntimeSearchEntry } from './types'

export type RuntimeRowQuery =
  | { kind: 'content'; text: string; limit: number }
  | { kind: 'catalogue'; text: string; limit: number }
  | { kind: 'ids'; ids: string[] }

export interface RuntimeRowResult<T> { records: T[]; totalMatches: number }

const statusOrder: Record<CatalogueRecord['status'], number> = { accepted: 0, synonym: 1, 'ambiguous-synonym': 2, misapplied: 3 }
export function compareCatalogueRecords(left: CatalogueRecord, right: CatalogueRecord): number {
  return statusOrder[left.status] - statusOrder[right.status]
    || left.normalizedName.length - right.normalizedName.length
    || left.scientificName.localeCompare(right.scientificName)
    || (left.authorship ?? '').localeCompare(right.authorship ?? '')
    || left.id.localeCompare(right.id)
}

/** Owned by the worker in browsers; the same evaluator serves the fallback. */
export function createRuntimeRowIndex(data: unknown[]) {
  let content: { row: RuntimeSearchEntry; terms: string[] }[] | undefined
  let catalogue: CatalogueRecord[] | undefined
  let ids: Map<string, unknown> | undefined
  return (query: RuntimeRowQuery): RuntimeRowResult<unknown> => {
    if (query.kind === 'ids') {
      ids ??= new Map(data.map((row) => [(row as { id: string }).id, row]))
      const records = query.ids.flatMap((id) => ids!.has(id) ? [ids!.get(id)] : [])
      return { records, totalMatches: records.length }
    }
    if (query.kind === 'catalogue') {
      catalogue ??= [...data as CatalogueRecord[]].sort(compareCatalogueRecords)
      const matches = catalogue.filter((row) => row.normalizedName.startsWith(query.text))
      // Preserve the existing exact-name ambiguity contract, including all
      // homonyms when the exact set exceeds the normal preview size.
      const exact = matches.filter((row) => row.normalizedName === query.text)
      const records = [...new Set([...matches.slice(0, query.limit), ...exact])]
      return { records, totalMatches: matches.length }
    }
    content ??= (data as RuntimeSearchEntry[]).map((row) => ({ row, terms: [row.title, row.titleEn, row.titleZh, ...row.terms]
      .filter((value) => value !== null && value !== undefined).map((value) => String(value).toLocaleLowerCase()) }))
    const seen = new Set<string>()
    const records: RuntimeSearchEntry[] = []
    let totalMatches = 0
    for (const { row, terms } of content) {
      const key = `${row.kind}:${row.id}`
      if (seen.has(key) || !terms.some((term) => term.includes(query.text))) continue
      seen.add(key)
      totalMatches += 1
      if (records.length < query.limit) records.push(row)
    }
    return { records, totalMatches }
  }
}
