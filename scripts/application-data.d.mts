import type { Plugin } from 'vite'
export function applicationManifest<T extends { checksums?: unknown }>(source: T): Omit<T, 'checksums'>
export function encodeApplicationData(source: unknown): string
export function applicationDataPlugin(root: string): Plugin
