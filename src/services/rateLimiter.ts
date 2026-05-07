export class RateLimiter {
  private queue: Array<{
    fn: () => Promise<unknown>
    resolve: (value: unknown) => void
    reject: (err: Error) => void
  }> = []
  private processing = false
  private lastRequestTime = 0
  private minGap: number
  private maxQueue: number

  constructor(minGapMs = 200, maxQueueSize = 50) {
    this.minGap = minGapMs
    this.maxQueue = maxQueueSize
  }

  async enqueue<T>(fn: () => Promise<T>): Promise<T> {
    if (this.queue.length >= this.maxQueue) {
      throw new Error('Rate limiter: too many queued requests')
    }
    return new Promise<T>((resolve, reject) => {
      this.queue.push({
        fn: fn as () => Promise<unknown>,
        resolve: (v) => resolve(v as T),
        reject,
      })
      if (!this.processing) {
        this.processQueue()
      }
    })
  }

  private async processQueue(): Promise<void> {
    this.processing = true
    while (this.queue.length > 0) {
      const now = Date.now()
      const wait = Math.max(0, this.lastRequestTime + this.minGap - now)
      if (wait > 0) {
        await new Promise((r) => setTimeout(r, wait))
      }
      const item = this.queue.shift()!
      try {
        const result = await item.fn()
        this.lastRequestTime = Date.now()
        item.resolve(result)
      } catch (err) {
        item.reject(err instanceof Error ? err : new Error(String(err)))
      }
    }
    this.processing = false
  }

  get pending(): number {
    return this.queue.length
  }
}
