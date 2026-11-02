import '@testing-library/jest-dom'

// jsdom has no layout observer. Browser tests verify actual resize delivery.
if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}
