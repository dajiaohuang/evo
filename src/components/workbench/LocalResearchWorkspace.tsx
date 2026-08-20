import { useEffect, useState } from 'react'
import { exportLocalSqlParquet, runLocalSql, type LocalSqlResult } from '../../services/localSql'
import { deleteWorkspaceNote, listWorkspaceNotes, saveWorkspaceNote, type WorkspaceNote } from '../../services/workspaceDb'
import type { LabQuery, LabResult } from '../../services/lab'
import type { UserDataPreview } from '../../services/userData'
import { useI18n } from '../../i18n'

const DEFAULT_SQL = `SELECT
  period,
  country,
  count(*) AS occurrence_count,
  count(DISTINCT accepted_name) AS observed_names
FROM occurrences
GROUP BY period, country
ORDER BY occurrence_count DESC
LIMIT 100`

type SqlStatus = 'idle' | 'loading' | 'ready' | 'exporting' | 'failed'

function cellText(value: unknown): string {
  if (value === null || value === undefined) return '—'
  return typeof value === 'object' ? JSON.stringify(value) : String(value)
}

function downloadBytes(bytes: Uint8Array, filename: string) {
  const copy = new Uint8Array(bytes.byteLength)
  copy.set(bytes)
  const url = URL.createObjectURL(new Blob([copy.buffer], { type: 'application/vnd.apache.parquet' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

interface LocalResearchWorkspaceProps {
  result: LabResult
  query: LabQuery
  userData: UserDataPreview | null
  onRestoreQuery: (query: LabQuery) => void
}

export function LocalResearchWorkspace({ result, query, userData, onRestoreQuery }: LocalResearchWorkspaceProps) {
  const { language, number, t } = useI18n()
  const [sql, setSql] = useState(DEFAULT_SQL)
  const [sqlStatus, setSqlStatus] = useState<SqlStatus>('idle')
  const [sqlError, setSqlError] = useState<string | null>(null)
  const [sqlResult, setSqlResult] = useState<LocalSqlResult | null>(null)
  const [notes, setNotes] = useState<WorkspaceNote[]>([])
  const [noteTitle, setNoteTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [noteMessage, setNoteMessage] = useState<string | null>(null)

  const refreshNotes = () => listWorkspaceNotes().then(setNotes).catch(() => setNotes([]))
  useEffect(() => { void refreshNotes() }, [])

  const executeSql = async () => {
    setSqlStatus('loading')
    setSqlError(null)
    try {
      setSqlResult(await runLocalSql(sql, result.records, userData?.records ?? []))
      setSqlStatus('ready')
    } catch (error) {
      setSqlResult(null)
      setSqlError(error instanceof Error ? error.message : t('SQL query failed'))
      setSqlStatus('failed')
    }
  }

  const exportParquet = async () => {
    setSqlStatus('exporting')
    setSqlError(null)
    try {
      const bytes = await exportLocalSqlParquet(sql, result.records, userData?.records ?? [])
      downloadBytes(bytes, `evo-sql-${new Date().toISOString().slice(0, 10)}.parquet`)
      setSqlStatus('ready')
    } catch (error) {
      setSqlError(error instanceof Error ? error.message : t('Parquet export failed'))
      setSqlStatus('failed')
    }
  }

  const saveNote = async () => {
    if (!noteTitle.trim() || !noteText.trim()) {
      setNoteMessage(t('A note title and body are required.'))
      return
    }
    try {
      await saveWorkspaceNote(noteTitle, noteText, query, favorite)
      setNoteTitle('')
      setNoteText('')
      setFavorite(false)
      setNoteMessage(t('Research note saved in this browser'))
      await refreshNotes()
    } catch {
      setNoteMessage(t('Research note could not be saved'))
    }
  }

  const removeNote = async (id: string) => {
    await deleteWorkspaceNote(id)
    await refreshNotes()
  }

  return (
    <div className="local-research-workspace">
      <details className="local-sql-workspace">
        <summary><span>{t('Local SQL / DuckDB-Wasm')}</span><small>{t('Loaded on demand · read only')}</small></summary>
        <p>{t('The occurrences table contains the returned result set. Importing local data adds a user_data table for joins; neither table is uploaded.')}</p>
        <p className="sql-runtime-note">{t('The SQL engine downloads on first use from the version-pinned jsDelivr bundle. Query data remains in the browser worker.')}</p>
        <div className="sql-table-list">
          <code>occurrences</code><span>{number(result.records.length)} {t('rows')}</span>
          <code>user_data</code><span>{number(userData?.recordCount ?? 0)} {t('rows')} {userData?.fields.length ? `· ${userData.fields.join(', ')}` : ''}</span>
        </div>
        <label><span>{t('Read-only SQL')}</span><textarea value={sql} onChange={(event) => setSql(event.target.value)} spellCheck={false} /></label>
        <div className="sql-actions">
          <button type="button" disabled={sqlStatus === 'loading' || sqlStatus === 'exporting'} onClick={() => void executeSql()}>{t(sqlStatus === 'loading' ? 'Running SQL…' : 'Run SQL')}</button>
          <button type="button" disabled={sqlStatus === 'loading' || sqlStatus === 'exporting'} onClick={() => void exportParquet()}>{t(sqlStatus === 'exporting' ? 'Writing Parquet…' : 'Export Parquet')}</button>
        </div>
        {sqlError && <p className="sql-error" role="alert">{sqlError}</p>}
        {sqlResult && (
          <div className="sql-result">
            <header><strong>{number(sqlResult.rows.length)} {t('rows')}</strong><span>{number(Math.round(sqlResult.elapsedMs))} ms{sqlResult.truncated ? ` · ${t('preview truncated')}` : ''}</span></header>
            <div><table><thead><tr>{sqlResult.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{sqlResult.rows.map((row, index) => <tr key={index}>{sqlResult.columns.map((column) => <td key={column}>{cellText(row[column])}</td>)}</tr>)}</tbody></table></div>
          </div>
        )}
      </details>

      <details className="research-notes">
        <summary><span>{t('Local collections & notes')}</span><small>{t('{count} saved', { count: number(notes.length) })}</small></summary>
        <p>{t('Notes pin the current query and dataset version in IndexedDB. They never leave this browser.')}</p>
        <div className="note-editor">
          <input value={noteTitle} onChange={(event) => setNoteTitle(event.target.value)} placeholder={t('Note title')} maxLength={120} />
          <textarea value={noteText} onChange={(event) => setNoteText(event.target.value)} placeholder={t('Interpretation, caveat or next step')} maxLength={4000} />
          <label><input type="checkbox" checked={favorite} onChange={(event) => setFavorite(event.target.checked)} /> {t('Add to favorites')}</label>
          <button type="button" onClick={() => void saveNote()}>{t('Save query note')}</button>
        </div>
        {noteMessage && <p className="note-message" role="status">{noteMessage}</p>}
        <div className="note-list">
          {notes.map((note) => (
            <article key={note.id}>
              <header><strong>{note.favorite ? '★ ' : ''}{note.title}</strong><small>{note.datasetVersion} · {new Date(note.savedAt).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US')}</small></header>
              <p>{note.text}</p>
              <footer><button type="button" onClick={() => onRestoreQuery(note.query)}>{t('Restore query')}</button><button type="button" onClick={() => void removeNote(note.id)}>{t('Delete note')}</button></footer>
            </article>
          ))}
          {!notes.length && <p>{t('No local research notes yet.')}</p>}
        </div>
      </details>
    </div>
  )
}
