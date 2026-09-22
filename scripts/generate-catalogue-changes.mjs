import { readJson } from './data-lib.mjs'

export const comparisonPath = 'data/catalogue-of-life/comparisons/2026-08-20--2026-09-11'
const categories = [
  ['addedAccepted', 'Added to the accepted set', '进入接受种集合', 'Includes newly accepted records and records without a unique earlier correspondence.', '包括新转为接受种的记录，以及无法唯一对应上一版的记录。'],
  ['noLongerAccepted', 'Left the accepted set', '离开接受种集合', 'Includes status/rank changes and unresolved correspondence; this does not mean extinction.', '包括状态或等级变化，以及对应关系未解决的记录；不表示灭绝。'],
  ['synonymized', 'Accepted name became a resolving name', '接受名转为可解析名称', 'A subset of records that left the accepted set, with an explicit target.', '离开接受种集合的子集；新记录提供明确的接受名目标。'],
  ['nameOrAuthorshipChanged', 'Name or authorship changed', '名称或命名人变化', 'Same-source record changes, without asserting a confirmed recombination.', '同一来源记录的字段变化，不自动判定为已确认的新组合。'],
  ['idReplacedOrUnstable', 'Identifier replaced', '标识符替换', 'Unique exact source, rank, name, authorship and status correspondence.', '来源、等级、名称、命名人和状态均精确且唯一对应。'],
  ['synonymRepointed', 'Synonym target changed', '异名解析目标变化', 'Target correspondence distinguishes a changed relation from a replaced identifier.', '先核对跨版本目标对应关系，再区分关系变化与单纯换号。'],
  ['synonymTargetIdReplaced', 'Synonym target identifier replaced', '异名目标换号', 'The target record corresponds across releases despite its changed ID.', '目标记录跨版本对应，但标识符发生变化。'],
  ['synonymTargetUnresolved', 'Synonym target correspondence unresolved', '异名目标对应未解决', 'Insufficient evidence to assert that the relation stayed the same or changed.', '证据不足，无法断言解析关系保持不变或已变化。'],
  ['parentRecordChanged', 'Parent identifier changed', '父记录标识符变化', 'Raw parent-record differences are not evolutionary or phylogenetic evidence.', '父记录的原始标识符差异不构成演化或系统发育证据。'],
  ['resolvingStatusChanged', 'Resolving name status changed', '可解析名称状态变化', 'Changes among synonym, ambiguous synonym and misapplied statuses.', '异名、歧义异名和误用名之间的状态变化。'],
]

const escape = (value) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

export function generateCatalogueChanges({ write, pageHtml, basePath, baseUrl, repositoryUrl, sitemapUrls }) {
  const comparison = readJson(`${comparisonPath}/manifest.json`)
  const count = (value) => Number(value ?? 0).toLocaleString('en-US')
  for (const language of ['en', 'zh']) {
    const zh = language === 'zh'
    const path = `${zh ? 'zh/' : ''}catalogue-changes/`
    const title = zh ? '物种名录的版本变化' : 'How the species checklist changed'
    const description = zh ? '对比 COL26.8 与 COL26.9 的真实固定快照，区分名称、状态、解析关系与换号。' : 'Compare the pinned COL26.8 and COL26.9 snapshots: names, status, resolving relations and identifier changes.'
    const recordLink = (record, input) => record
      ? `<a href="https://www.checklistbank.org/dataset/${input.provenance.checklistBankDatasetKey}/taxon/${encodeURIComponent(record.id)}"><i>${escape(record.name)}</i></a><small>${escape(record.status)} · ${escape(record.rank)} · ${escape(record.id)}</small>`
      : `<span>${zh ? '无唯一对应记录' : 'No unique correspondence'}</span>`
    const rows = categories.map(([key, en, cn, explanation, explanationZh]) => `<tr><th scope="row">${zh ? cn : en}<small>${zh ? explanationZh : explanation}</small></th><td>${count(comparison.summary[key])}</td></tr>`).join('')
    const samples = categories.filter(([key]) => comparison.examples[key]?.length).map(([key, en, cn]) => `<details><summary>${zh ? cn : en} · ${zh ? '示例' : 'examples'}</summary><ul class="directory">${comparison.examples[key].slice(0, 3).map((sample) => `<li><div class="comparison-pair"><div><strong>COL26.8</strong>${recordLink(sample.before, comparison.inputs[0])}</div><div><strong>COL26.9</strong>${recordLink(sample.after, comparison.inputs[1])}</div></div></li>`).join('')}</ul></details>`).join('')
    const sources = comparison.inputs.map(({ provenance, audit }) => `<li><strong>${escape(provenance.releaseAlias)} · ${escape(provenance.releaseDate)}</strong><p>${escape(provenance.citation)}</p><a href="${escape(provenance.doiUrl)}">${escape(provenance.doi)}</a><details><summary>${zh ? '归档与校验值' : 'Archive and checksums'}</summary><p><a href="${escape(provenance.archive.url)}">${zh ? '官方 DwCA 归档' : 'Official DwCA archive'}</a> · ${count(audit.bytes)} bytes</p><code>${escape(audit.sha256)}</code><p>${count(audit.nameUsages)} ${zh ? '名称记录；许可原文' : 'name records; raw license'}: ${escape(provenance.licenseRaw)}</p></details></li>`).join('')
    const body = `<span class="eyebrow">COL26.8 → COL26.9 / ${zh ? '版本对比' : 'RELEASE COMPARISON'}</span><h1>${title}</h1><p class="dek">${description}</p>
      <p class="notice">${zh ? '应用当前仍使用 COL26.8。COL26.9 在此作为对比快照：新增名录记录不会自动获得内容档案、外部来源映射或科学审阅。' : 'The application still uses COL26.8. COL26.9 is adopted here as a comparison snapshot: new checklist records do not automatically gain a dossier, authority mapping or scientific review.'}</p>
      <div class="facts"><div><small>COL26.8 · ${zh ? '严格接受种' : 'strictly accepted species'}</small><strong>${count(comparison.counts.acceptedBefore)}</strong></div><div><small>COL26.9 · ${zh ? '严格接受种' : 'strictly accepted species'}</small><strong>${count(comparison.counts.acceptedAfter)}</strong></div><div><small>${zh ? '净变化' : 'Net change'}</small><strong>+${count(comparison.counts.acceptedNetChange)}</strong></div></div>
      <section><h2>${zh ? '具体发生了什么变化' : 'What changed'}</h2><p>${zh ? '只计入 species 等级且状态为 accepted 的记录。各变化类别可能重叠；“新增”不等于新发现，“离开集合”不等于灭绝。' : 'Only species-ranked records with accepted status enter the totals. Categories may overlap; additions are not discoveries and losses are not extinctions.'}</p><table class="comparison-table"><caption>${zh ? '固定快照的记录级变化' : 'Record changes between pinned snapshots'}</caption><thead><tr><th scope="col">${zh ? '变化类型' : 'Change'}</th><th scope="col">${zh ? '记录数' : 'Records'}</th></tr></thead><tbody>${rows}</tbody></table></section>
      <section><h2>${zh ? '核对真实记录' : 'Inspect real records'}</h2><p>${zh ? '每个链接进入对应版本的 ChecklistBank 记录。下列示例来自确定排序的完整报告，不代表随机样本。' : 'Each link opens the corresponding release in ChecklistBank. Examples follow the report’s deterministic order; they are not a random sample.'}</p>${samples}</section>
      <section><h2>${zh ? '方法与未解决的对应关系' : 'Method and unresolved correspondence'}</h2><p>${zh ? '先在同一非空来源数据集中按使用记录 ID 对应；剩余记录要求来源、等级、名称、命名人和状态在两版中均精确且全局唯一。没有模糊匹配，也不推断物种概念等同。' : 'First match usage IDs within the same nonempty source dataset. Remaining records require an exact, globally unique source, rank, name, authorship and status key in both snapshots. No fuzzy matching or species-concept equivalence is inferred.'}</p><p>${count(comparison.counts.sharedIdsWithDifferentSources)} ${zh ? '个相同 ID 的来源字段发生变化；不能仅凭 ID 将其视为同一个来源记录。' : 'shared IDs have different source fields; ID equality alone cannot establish source-record identity.'}</p><a href="${repositoryUrl}/blob/main/docs/catalogue-release-comparison.md">${zh ? '完整方法与复现命令' : 'Full method and reproduction commands'}</a></section>
      <section><h2>${zh ? '来源与完整差异下载' : 'Sources and complete change downloads'}</h2><ul class="refs">${sources}</ul><p>${comparison.files.length} ${zh ? '个确定性 gzip JSONL 分片，压缩后' : 'deterministic gzip JSONL shards; compressed size'} ${(comparison.files.reduce((sum, file) => sum + file.bytes, 0) / 1024 / 1024).toFixed(2)} MiB. ${zh ? '清单保留逐文件与解压内容的 SHA-256。' : 'The manifest retains SHA-256 for each file and its uncompressed contents.'}</p><div class="actions"><a class="button" href="${repositoryUrl}/tree/main/${comparisonPath}">${zh ? '完整差异文件' : 'Complete change files'}</a><a class="button secondary" href="${repositoryUrl}/blob/main/${comparisonPath}/manifest.json">${zh ? '机器可读报告' : 'Machine-readable report'}</a></div></section>`
    write(`${path}index.html`, pageHtml({ language, title, description, path, alternatePath: `${zh ? '' : 'zh/'}catalogue-changes/`, body,
      breadcrumbs: [{ label: zh ? '首页' : 'Home', url: `${basePath}/${zh ? 'zh/' : ''}` }, { label: title, url: `${baseUrl}/${path}` }] }))
    sitemapUrls.add(`${baseUrl}/${path}`)
  }
  return 2
}

export const catalogueChangesCss = `
.comparison-table{width:100%;border-collapse:collapse;text-align:left}.comparison-table caption{text-align:left;color:var(--muted);padding-block:12px}.comparison-table th,.comparison-table td{padding:14px 8px;border-bottom:1px solid var(--line);vertical-align:top}.comparison-table td{text-align:right;font-variant-numeric:tabular-nums}.comparison-table small,.comparison-pair small{display:block;color:var(--muted);font-weight:400}.comparison-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}details{margin-block:14px}summary{cursor:pointer;min-height:44px;padding-block:10px}details code{overflow-wrap:anywhere}@media(max-width:540px){.comparison-pair{grid-template-columns:1fr}.comparison-table th{width:75%}}`
