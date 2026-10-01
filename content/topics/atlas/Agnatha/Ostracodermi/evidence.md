---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ostracodermi
    commonName: Armored Jawless Fish
    commonNameZh: 披甲无颌鱼类
    rank: grade
    taxonId: ""
    firstAppearance: 485
    lastAppearance: 359
    extinct: true
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Ostracodermi
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: janvier-1981-fossil-agnathans DOI 10.1080/02724634.1981.10011886; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: janvier-1981-fossil-agnathans
          pages: 121–159
          figure: Phylogenetic diagrams and character review
          quoteLocator: Fossil agnathan groups; craniate phylogeny; classification implications
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Ostracodermi
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
      reviewedAgainstReferenceVersion: janvier-2008-cyclostome-origins; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: janvier-2008-cyclostome-origins
          pages: 1045–1056
          figure: Review diagrams and fossil-group discussion
          quoteLocator: Abstract; fossil agnathans and cyclostome-origin discussion
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
    - entityPath: content/topics/atlas/Agnatha/Ostracodermi
      rangeKind: global-composite
      taxonomicConcept: Ostracodermi historical navigation grade
      geographicScope: Several armored jawless stem-gnathostome lineages, not one clade
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
      confidence: medium
      claimPaths:
        - content/topics/atlas/Agnatha/Ostracodermi/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: janvier-2008-cyclostome-origins
          locator: 1045–1056; Review diagrams and fossil-group discussion; Abstract; fossil agnathans and cyclostome-origin discussion
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Ostracodermi

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A craniate phylogenetic review separates traditional armored fossil ‘agnathans’ among several lineages on the jawed-vertebrate stem. Ostracodermi is therefore retained only as a historical navigation grade, not a monophyletic taxon, direct ancestor or globally bounded range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited systematic synthesis directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond ostracodermi is therefore retained only as a historical navigation grade, not a monophyletic taxon, direct ancestor or globally bounded range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Ostracodermi is retained only as a historical navigation grade spanning several jawless stem-gnathostome lineages, so the former 485–359 Ma composite is withheld rather than treated as a clade range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Ostracodermi historical navigation grade: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引系统综述在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Ostracodermi historical navigation grade：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
颅动物系统综述把传统披甲化石“无颌类”分置于有颌脊椎动物干系的多个谱系。因此“甲胄鱼类”仅保留为历史导航级，不是单系分类单元、直接祖先或具有全球边界的延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
“甲胄鱼类”仅作为涵盖多个无颌有甲颌口类干群谱系的历史导航级保留，因此原先的 4.85–3.59 亿年前复合范围被暂缓，不能当作一个自然支系的延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
A single temporal range is inapplicable to this explicitly non-monophyletic historical grade.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 485–359 Ma composite is withheld rather than presented as the duration of a natural lineage.
<!-- /evo:text -->
