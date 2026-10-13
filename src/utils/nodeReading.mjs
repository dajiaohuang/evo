// Shared reading order; scientific text, source bindings and scope stay intact.
export const readingGroupOrder = ['introduction', 'body', 'life', 'relationships', 'research', 'source-context']

export function readingGroup(topic = '', text = '') {
  const key = topic.toLowerCase().replaceAll(/[_ -]/g, '')
  if (/^(sources?|methods?|readingpath|taxonomy|classification|nomenclature|taxonomicidentity|identity|evidencescope|researchscope|limitations|coverage|authoringcoverage|availability)$/.test(key)) return 'source-context'
  if (key === 'overview') {
    if (/^(?:本批|本版|本导读只|这个入口概括本批|The local .* route|This batch|This page uses|This guide covers|This entry (?:summarizes|covers).*(?:batch|historical life-history records))/i.test(text.trim())
      || /^(?:\S+\s+){1,4}(?:在固定 COL|是固定 COL|is accepted in pinned COL)/i.test(text.trim())) return 'source-context'
    return 'introduction'
  }
  if (/morph|anatom|form$|appearance|coat|pelage|cranial|body|type.?diagnos|structure|integument|preserved|skeleton|skull|limb|pectoral|dental|teeth/.test(key)) return 'body'
  if (/ecolog|habitat|distribution|range$|lifehistory|development|breeding|diet|feeding|foraging|behavio|movement$|locomot|migration|conservation|physiology|communication|vocalization/.test(key)) return 'life'
  if (/evolution|phylogen|relationships?|topolog|delimitation|geneticdistinct|classificationevidence|populationhistory|lineage|hybridi|mitochondrial|divergence/.test(key)) return 'relationships'
  return 'research'
}

export function orderReadingSections(sections) {
  return sections.map((section, index) => ({ section, index, group: section.group ?? readingGroup(section.topic ?? `${section.id} ${section.title?.en ?? ''}`, section.text.en ?? section.text.zh ?? '') }))
    .sort((a, b) => readingGroupOrder.indexOf(a.group) - readingGroupOrder.indexOf(b.group) || a.index - b.index)
    .map(({ section, group }) => ({ ...section, group, sourceIds: section.sourceIds ?? [] }))
}

export function paragraphParts(text) {
  return text.split(/\n\s*\n/).map(part => part.trim()).filter(Boolean)
}

export function readerInlineParts(text) {
  const parts = []
  let plain = ''
  const flush = () => {
    if (plain) parts.push({ type: 'text', text: plain })
    plain = ''
  }
  const escaped = index => {
    let slashes = 0
    for (let cursor = index - 1; cursor >= 0 && text[cursor] === '\\'; cursor--) slashes++
    return slashes % 2 === 1
  }

  for (let index = 0; index < text.length;) {
    const marker = text[index]
    if ((marker !== '*' && marker !== '`') || escaped(index) || text[index - 1] === marker || text[index + 1] === marker) {
      plain += marker
      index++
      continue
    }
    let end = text.indexOf(marker, index + 1)
    while (end >= 0 && escaped(end)) end = text.indexOf(marker, end + 1)
    if (end <= index + 1 || text[end + 1] === marker) {
      plain += marker
      index++
      continue
    }
    const content = text.slice(index + 1, end)
    const invalidContent = content.includes('\n') || (marker === '*' && (/^\s|\s$/.test(content)))
    if (invalidContent) {
      plain += marker
      index++
      continue
    }
    flush()
    parts.push({ type: marker === '*' ? 'emphasis' : 'code', text: content })
    index = end + 1
  }
  flush()
  return parts
}

export function readingSectionTitle(section, language) {
  if (section.title?.[language]) return section.title[language]
  const fallbackLanguage = language === 'en' ? 'zh' : 'en'
  if (!section.text[language] && section.text[fallbackLanguage] && section.title?.[fallbackLanguage]) return section.title[fallbackLanguage]
  const zh = language === 'zh'
  const topic = (section.topic ?? '').toLowerCase().replaceAll(/[_ -]/g, '')
  const text = section.text[language] ?? ''
  if (section.group === 'body') {
    if (/体重|体长|body mass|body length|forearm/i.test(text)) return zh ? '体型与测量' : 'Body size and measurements'
    if (/叶|花|果|leaves|flowers|fruits/i.test(text)) return zh ? '枝叶、花与果实' : 'Leaves, flowers and fruits'
    if (/鳍|fin\b/i.test(text)) return zh ? '鳍与身体结构' : 'Fins and body structure'
    return zh ? '形态与对应结构' : 'Form and corresponding structures'
  }
  if (/lifehistory|development|breeding/.test(topic)) return zh ? '出生、生长与繁殖' : 'Birth, growth and reproduction'
  if (/habitat|distribution|range|localit/.test(topic)) return zh ? '栖地与已记录地点' : 'Habitats and recorded places'
  if (/diet|feed|forag/.test(topic)) return zh ? '取食与资源利用' : 'Feeding and resource use'
  if (/behavio|social|communicat|vocal/.test(topic)) return zh ? '行为与个体之间的联系' : 'Behaviour and interactions'
  if (/conservation|threat/.test(topic)) return zh ? '种群与保育研究' : 'Population and conservation studies'
  if (section.group === 'relationships') return zh ? '分支与亲缘关系' : 'Branches and relationships'
  if (section.group === 'source-context') return zh ? '材料、方法与适用范围' : 'Material, methods and scope'
  if (section.group === 'introduction') return zh ? '认识这个生物' : 'Meet the organism'
  if (section.group === 'life') return zh ? '生活方式与观察' : 'Life and observations'
  return zh ? '研究中的发现' : 'Findings from a study'
}

export function catalogueReadingSections(profile, dossier) {
  const accountSections = [...(profile?.readingIntroduction ? [profile.readingIntroduction] : []), ...(profile?.sections ?? [])]
  const sections = accountSections.map((section, index) => ({
    ...section, id: `account-${index}`, sourceIds: (section.sourceIds ?? []).map(id => `account:${id}`),
  }))
  if (dossier?.readerSections?.length) {
    for (const section of dossier.readerSections) sections.push({
      ...section, sourceIds: (section.sourceIds ?? []).map(id => `study:${id}`),
    })
  } else for (const [topic, facet] of Object.entries(dossier?.facets ?? {})) {
    for (const [index, claim] of (facet.claims ?? []).entries()) {
      sections.push({
        id: `study-${topic}-${index}`, topic, title: claim.title,
        text: { ...(claim.text ? { en: claim.text } : {}), ...(claim.textZh ? { zh: claim.textZh } : {}) },
        sourceIds: claim.sourceIds.map(id => `study:${id}`), locator: claim.locator,
        context: [claim.placeTimeScope, claim.lifeStatus].filter(Boolean), limitations: facet.gaps ?? [],
        originalLanguage: claim.originalLanguage ?? 'en',
      })
    }
  }
  return orderReadingSections(sections)
}
