---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ankylosauria
    commonName: Ankylosaurs
    commonNameZh: 甲龙类
    rank: suborder
    taxonId: ""
    firstAppearance: 170
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Ankylosauria
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: thompson-2012-ankylosauria-phylogeny concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: thompson-2012-ankylosauria-phylogeny
          relation: supports
          pages: 301–312
          figure: Figures 1–4; supplementary matrix
          quoteLocator: Methods; strict-consensus results; discussion of Nodosauridae resolution
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Ankylosauria
      rangeKind: global-composite
      taxonomicConcept: Ankylosauria — numerical range withheld — numerical range withheld
      geographicScope: No numerical geographic-temporal range exposed
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
      claimPaths: []
      referenceLocators:
        - referenceId: thompson-2012-ankylosauria-phylogeny
          locator: 301–312; Methods; strict-consensus results; discussion of Nodosauridae resolution
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Ankylosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ankylosauria is represented by the taxa in Thompson and colleagues’ morphology matrix; recovery of major armoured-dinosaur branches and poor nodosaurid resolution are study results, not a resolved ancestor chain or exact range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study was designed as a comprehensive sampled phylogenetic analysis and reports weakly resolved regions. Medium confidence mirrors those explicit support limits.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该研究旨在进行综合取样系统发育分析，并报告解析较弱区域；中等置信度对应这些明确的支持限制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
甲龙类表示 Thompson 等人形态矩阵中的取样类群；主要装甲恐龙分支的恢复以及结节龙科解析不足是研究结果，不是已解决的祖先链或精确范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the morphology matrix tests relationships but does not provide auditable numerical clade endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Phylogeny of the ankylosaurian dinosaurs (Ornithischia: Thyreophora) found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
