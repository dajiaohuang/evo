interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

export class LRUCache<T> {
  private maxSize: number
  private store: Map<string, CacheEntry<T>>

  constructor(maxSize = 200) {
    this.maxSize = maxSize
    this.store = new Map()
  }

  get(key: string): T | null {
    const entry = this.store.get(key)
    if (!entry) return null
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.store.delete(key)
      return null
    }
    this.store.delete(key)
    this.store.set(key, entry)
    return entry.data
  }

  set(key: string, value: T, ttl: number): void {
    if (this.store.has(key)) {
      this.store.delete(key)
    } else if (this.store.size >= this.maxSize) {
      const oldest = this.store.keys().next().value
      if (oldest) this.store.delete(oldest)
    }
    this.store.set(key, {
      data: value,
      timestamp: Date.now(),
      ttl,
    })
  }

  invalidate(pattern?: RegExp): void {
    if (!pattern) {
      this.store.clear()
      return
    }
    for (const key of this.store.keys()) {
      if (pattern.test(key)) this.store.delete(key)
    }
  }

  has(key: string): boolean {
    return this.get(key) !== null
  }

  get size(): number {
    return this.store.size
  }
}
