---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Filicopsida
    commonName: True Ferns
    commonNameZh: 真蕨类
    rank: class
    taxonId: ""
    firstAppearance: 360
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Filicopsida
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
      reviewedAgainstReferenceVersion: lehtonen-2011-fern-tree
      referenceLinks:
        - referenceId: lehtonen-2011-fern-tree
          relation: supports
          pages: e24851
          quoteLocator: Methods; Figures 1–3; Supporting Information matrices
    - subject:
        kind: taxon
        path: content/topics/atlas/Filicopsida
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: galtier-scott-1985-early-ferns locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: galtier-scott-1985-early-ferns
          pages: 86:289–301
          figure: Two early-diversification diagrams
          quoteLocator: Synopsis and opening discussion
        - relation: contextualizes
          referenceId: lehtonen-2011-fern-tree
          pages: Article e24851
          figure: Figures 1–3
          quoteLocator: Extant-heavy fern topology
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
    - entityPath: content/topics/atlas/Filicopsida
      rangeKind: global-composite
      taxonomicConcept: Filicopsida / true-fern temporal range
      geographicScope: Interval pending reconciliation of historical class and crown/total-group concepts
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: low
      claimPaths:
        - content/topics/atlas/Filicopsida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: lehtonen-2011-fern-tree
          locator: Article e24851; Methods; Figures 1–3; extant-heavy fern topology
        - referenceId: galtier-scott-1985-early-ferns
          locator: 289–301; Synopsis and opening discussion; uncertain Devonian assignments versus Lower Carboniferous Filicales
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Filicopsida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A four-gene supermatrix resolves many sampled fern relationships while retaining poorly supported branches; the result describes an extant-heavy sample, not a complete Filicopsida history or fossil range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Broad taxon sampling supports a useful fern topology, but missing sequence data and sparse extinct sampling preclude stronger historical claims.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Filicopsida has no supported scalar range here: the historical class concept is not aligned with a single crown or total group, and the review questions Devonian fern assignments while recognizing firmer Lower Carboniferous filicalean evidence; the former 360–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Galtier and Scott (1985) explicitly separates questionable Devonian assignments from firmer Lower Carboniferous filicalean evidence, while Lehtonen (2011) is primarily topological. Low confidence records the unresolved taxonomic boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
较广的类群取样支持有用的蕨类拓扑，但缺失序列数据和稀少的灭绝类群取样限制了更强的历史结论。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Galtier 与 Scott（1985）明确区分可疑的泥盆纪归属与更可靠的早石炭世真蕨证据，而 Lehtonen（2011）主要提供拓扑。低置信度记录尚未解决的分类边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
四基因超级矩阵解析了许多取样蕨类关系，同时保留若干低支持分支；该结果描述的是偏重现生类群的样本，不是完整的真蕨类历史或化石范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Filicopsida 在此不发布单一范围：这一历史纲级概念未与单一冠群或总群对齐，综述质疑泥盆纪蕨类归属而认可更可靠的早石炭世真蕨证据；旧有 360–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Extant-heavy topology and uncertain Devonian fern assignments do not support a single 360 Ma-to-present interval for the historical class concept.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 360–0 Ma display is withheld because the systematic review distinguishes questionable Devonian fern-like plants from firmer Lower Carboniferous filicalean evidence.
<!-- /evo:text -->
