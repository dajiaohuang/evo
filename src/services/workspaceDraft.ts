const KEY = 'evo-research-draft-v1'
export interface WorkspaceDraft { sql: string; title: string; text: string; favorite: boolean }

export function readWorkspaceDraft(): Partial<WorkspaceDraft> {
  try {
    const value: unknown = JSON.parse(sessionStorage.getItem(KEY) ?? 'null')
    if (!value || typeof value !== 'object') return {}
    const row = value as Record<string, unknown>
    return {
      sql: typeof row.sql === 'string' && row.sql.length <= 20_000 ? row.sql : undefined,
      title: typeof row.title === 'string' ? row.title.slice(0, 120) : undefined,
      text: typeof row.text === 'string' ? row.text.slice(0, 4000) : undefined,
      favorite: typeof row.favorite === 'boolean' ? row.favorite : undefined,
    }
  } catch { return {} }
}

export function saveWorkspaceDraft(draft: WorkspaceDraft): void {
  try { sessionStorage.setItem(KEY, JSON.stringify(draft)) } catch { /* In-memory editing remains available. */ }
}
