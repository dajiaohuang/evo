---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tetrapodomorpha
    commonName: Tetrapodomorph total group
    commonNameZh: 四足形类总群
    rank: clade
    taxonId: ""
    firstAppearance: 392
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: clack-2006-early-tetrapods DOI 10.1016/j.palaeo.2005.07.019; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: clack-2006-early-tetrapods
          pages: 167–189
          figure: Figures 1–11
          quoteLocator: Devonian fossil sequence; comparative anatomy; phylogenetic framework
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: clack-2006-early-tetrapods; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: clack-2006-early-tetrapods
          pages: 167–189
          figure: Figures 1–11
          quoteLocator: Devonian near-tetrapods, early tetrapods, localities and stratigraphic context
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha
      rangeKind: global-composite
      taxonomicConcept: Devonian tetrapodomorph transition study sample
      geographicScope: Multiple Devonian localities synthesized by Clack 2006
      olderMa: 385.3
      youngerMa: 358.86
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: clack-2006-early-tetrapods
          locator: 167–189; Figures 1–11; Devonian near-tetrapods, early tetrapods, localities and stratigraphic context
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Tetrapodomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A systematic synthesis integrates sampled Devonian tetrapodomorph fishes and early digit-bearing tetrapods into an explicit transition framework. The framework does not identify one direct ancestor, an exact Tetrapodomorpha origin, or a complete global fossil range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited systematic synthesis directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the framework does not identify one direct ancestor, an exact Tetrapodomorpha origin, or a complete global fossil range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Clack’s synthesis documents tetrapodomorph and early tetrapod samples across the Late Devonian, supporting a 385.3–358.86 Ma transition-study window rather than a global clade origin or duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Devonian tetrapodomorph transition study sample: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引系统综述在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Devonian tetrapodomorph transition study sample：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统综合把所抽样泥盆纪四足形鱼类与早期有指四足类纳入明确的过渡框架。该框架不识别单一直接祖先，也不确定四足形类精确起源或完整全球化石延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Clack 的综合研究记录了晚泥盆世的四足形类和早期四足动物样本，支持 3.853–3.5886 亿年前的过渡研究窗口，而不是该支系的全球起源或完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The envelope brackets reviewed near-tetrapod and digit-bearing samples; it does not date Tetrapodomorpha as a whole.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval is confined to the transition sample represented in the systematic synthesis.
<!-- /evo:text -->
