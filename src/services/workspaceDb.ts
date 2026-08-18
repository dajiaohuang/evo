import type { LabQuery } from './lab'

const DATABASE_NAME = 'evo-atlas-workspace'
const STORE_NAME = 'query-history'
const MAX_HISTORY = 20

export interface SavedLabQuery {
  id: string
  savedAt: string
  matched: number
  query: LabQuery
}

function openWorkspace(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null)
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, 1)
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME, { keyPath: 'id' })
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
    const request = database.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).getAll()
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
    query: structuredClone(query),
  }
  await new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, 'readwrite')
    transaction.objectStore(STORE_NAME).put(entry)
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })

  const history = await new Promise<SavedLabQuery[]>((resolve, reject) => {
    const request = database.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).getAll()
    request.onsuccess = () => resolve(request.result as SavedLabQuery[])
    request.onerror = () => reject(request.error)
  })
  const stale = history.sort((a, b) => b.savedAt.localeCompare(a.savedAt)).slice(MAX_HISTORY)
  if (stale.length) {
    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, 'readwrite')
      const store = transaction.objectStore(STORE_NAME)
      for (const item of stale) store.delete(item.id)
      transaction.oncomplete = () => resolve()
      transaction.onerror = () => reject(transaction.error)
    })
  }
  database.close()
}
