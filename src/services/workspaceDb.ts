import type { LabQuery } from './lab'
import manifest from '../../data/manifest.json'

const DATABASE_NAME = 'evo-atlas-workspace'
const QUERY_STORE_NAME = 'query-history'
const NOTE_STORE_NAME = 'research-notes'
const MAX_HISTORY = 20

export interface SavedLabQuery {
  id: string
  savedAt: string
  matched: number
  datasetVersion?: string
  query: LabQuery
}

export interface WorkspaceNote {
  id: string
  savedAt: string
  datasetVersion: string
  title: string
  text: string
  favorite: boolean
  query: LabQuery
}

function openWorkspace(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null)
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, 2)
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(QUERY_STORE_NAME)) {
        request.result.createObjectStore(QUERY_STORE_NAME, { keyPath: 'id' })
      }
      if (!request.result.objectStoreNames.contains(NOTE_STORE_NAME)) {
        request.result.createObjectStore(NOTE_STORE_NAME, { keyPath: 'id' })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function listSavedLabQueries(): Promise<SavedLabQuery[]> {
  const database = await openWorkspace()
  if (!database) return []
  return new Promise((resolve, reject) => {
    const request = database.transaction(QUERY_STORE_NAME, 'readonly').objectStore(QUERY_STORE_NAME).getAll()
    request.onsuccess = () => {
      database.close()
      resolve((request.result as SavedLabQuery[]).sort((a, b) => b.savedAt.localeCompare(a.savedAt)).slice(0, MAX_HISTORY))
    }
    request.onerror = () => {
      database.close()
      reject(request.error)
    }
  })
}

export async function saveLabQuery(query: LabQuery, matched: number): Promise<void> {
  const database = await openWorkspace()
  if (!database) return
  const savedAt = new Date().toISOString()
  const entry: SavedLabQuery = {
    id: `${savedAt}:${crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)}`,
    savedAt,
    matched,
    datasetVersion: manifest.datasetVersion,
    query: structuredClone(query),
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(QUERY_STORE_NAME, 'readwrite')
    transaction.objectStore(QUERY_STORE_NAME).put(entry)
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })

  const history = await new Promise<SavedLabQuery[]>((resolve, reject) => {
    const request = database.transaction(QUERY_STORE_NAME, 'readonly').objectStore(QUERY_STORE_NAME).getAll()
    request.onsuccess = () => resolve(request.result as SavedLabQuery[])
    request.onerror = () => reject(request.error)
  })
  const stale = history.sort((a, b) => b.savedAt.localeCompare(a.savedAt)).slice(MAX_HISTORY)
  if (stale.length) {
    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(QUERY_STORE_NAME, 'readwrite')
      const store = transaction.objectStore(QUERY_STORE_NAME)
      for (const item of stale) store.delete(item.id)
      transaction.oncomplete = () => resolve()
      transaction.onerror = () => reject(transaction.error)
    })
  }
  database.close()
}

export async function listWorkspaceNotes(): Promise<WorkspaceNote[]> {
  const database = await openWorkspace()
  if (!database) return []
  return new Promise((resolve, reject) => {
    const request = database.transaction(NOTE_STORE_NAME, 'readonly').objectStore(NOTE_STORE_NAME).getAll()
    request.onsuccess = () => {
      database.close()
      resolve((request.result as WorkspaceNote[]).sort((left, right) => Number(right.favorite) - Number(left.favorite) || right.savedAt.localeCompare(left.savedAt)))
    }
    request.onerror = () => {
      database.close()
      reject(request.error)
    }
  })
}

export async function saveWorkspaceNote(title: string, text: string, query: LabQuery, favorite = false): Promise<void> {
  const database = await openWorkspace()
  if (!database) return
  const savedAt = new Date().toISOString()
  const entry: WorkspaceNote = {
    id: `${savedAt}:${crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)}`,
    savedAt,
    datasetVersion: manifest.datasetVersion,
    title: title.trim(),
    text: text.trim(),
    favorite,
    query: structuredClone(query),
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(NOTE_STORE_NAME, 'readwrite')
    transaction.objectStore(NOTE_STORE_NAME).put(entry)
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
  database.close()
}

export async function deleteWorkspaceNote(id: string): Promise<void> {
  const database = await openWorkspace()
  if (!database) return
  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(NOTE_STORE_NAME, 'readwrite')
    transaction.objectStore(NOTE_STORE_NAME).delete(id)
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
  database.close()
}
