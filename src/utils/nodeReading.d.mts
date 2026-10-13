export type ReadingGroup = 'introduction' | 'body' | 'life' | 'relationships' | 'research' | 'source-context'
export interface NodeReadingSection {
  id: string
  topic?: string
  group?: ReadingGroup
  title?: { en?: string; zh?: string }
  text: { en?: string; zh?: string }
  sourceIds?: string[]
  locator?: string
  context?: string[]
  contextLanguage?: 'en' | 'zh'
  limitations?: string[]
  originalLanguage?: string
}
export const readingGroupOrder: ReadingGroup[]
export function readingGroup(topic?: string, text?: string): ReadingGroup
export function orderReadingSections<T extends NodeReadingSection>(sections: T[]): Array<T & { group: ReadingGroup; sourceIds: string[] }>
export function paragraphParts(text: string): string[]
export type ReaderInlinePart = { type: 'text' | 'emphasis' | 'code'; text: string }
export function readerInlineParts(text: string): ReaderInlinePart[]
export function readingSectionTitle(section: NodeReadingSection, language: 'en' | 'zh'): string
export function catalogueReadingSections(profile: Omit<import('../data-client/types').CatalogueKnowledgeProfile, 'colId'> | undefined, dossier: import('../data-client/types').CatalogueSpeciesDossier | undefined): NodeReadingSection[]
