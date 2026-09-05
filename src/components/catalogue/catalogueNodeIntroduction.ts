interface CatalogueNodeLike {
  id: string
  scientificName: string
  authorship: string | null
  rank: string
  status: string
  parentId: string | null
  sourceDatasetId: string | null
}

export interface CatalogueNodeIntroductionSource {
  authority: string
  sourceId: string
  title?: string | null
}

export interface CatalogueNodeIntroductionInput {
  node: CatalogueNodeLike
  parent?: Pick<CatalogueNodeLike, 'id' | 'scientificName' | 'rank'> & { authorship?: string | null }
  source?: CatalogueNodeIntroductionSource
  releaseAlias?: string
}

export interface CatalogueNodeIntroductionRecord {
  kind: 'classification-and-source'
  en: string
  zh: string
}

function name(node: { scientificName: string; authorship?: string | null }): string {
  if (!node.authorship || !node.scientificName.endsWith(node.authorship)) return node.scientificName
  return node.scientificName.slice(0, -node.authorship.length).trim()
}

function article(value: string): string { return /^[aeiou]/i.test(value) ? 'an' : 'a' }

export function deriveCatalogueNodeIntroduction(input: CatalogueNodeIntroductionInput): CatalogueNodeIntroductionRecord {
  const { node, parent, source } = input
  const nodeName = name(node)
  const statusEn = node.status === 'accepted' ? 'accepted' : node.status === 'provisionally accepted' ? 'provisionally accepted' : node.status
  const statusZh = node.status === 'accepted' ? '接受' : node.status === 'provisionally accepted' ? '暂定接受' : node.status
  const rankEn = node.rank === 'species' ? 'species' : `${node.rank} taxon`
  const rankZh = node.rank === 'species' ? '物种' : `等级为 ${node.rank} 的分类单元`
  const placementEn = parent && parent.id === node.parentId ? ` It is under ${name(parent)} (${parent.rank}).` : ' It is a root classification entry in this view.'
  const placementZh = parent && parent.id === node.parentId ? ` 隶属于${name(parent)}（${parent.rank}）。` : ' 是此视图中的根分类条目。'
  const sourceEn = source ? ` Source authority: ${source.authority}, source ID ${source.sourceId}${source.title ? ` (${source.title})` : ''}.` : ''
  const sourceZh = source ? ` 来源权威：${source.authority}，来源 ID 为 ${source.sourceId}${source.title ? `（${source.title}）` : ''}。` : ''
  const releaseEn = input.releaseAlias ? ` in release ${input.releaseAlias}` : ''
  const releaseZh = input.releaseAlias ? `（${input.releaseAlias}）` : ''
  return {
    kind: 'classification-and-source',
    en: `${nodeName} is ${article(statusEn)} ${statusEn} ${rankEn}${releaseEn}.${placementEn}${sourceEn} This introduction covers classification and source identity only; it does not assert morphology, ecology, fossil, range, or a species dossier.`,
    zh: `${nodeName}是${statusZh}${rankZh}${releaseZh}。${placementZh}${sourceZh}本简介仅说明分类与来源身份，不代表已有形态、生态、化石、分布或物种专档内容。`,
  }
}
