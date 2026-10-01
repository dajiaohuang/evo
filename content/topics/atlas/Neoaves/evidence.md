---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Neoaves
    commonName: Neoavian birds
    commonNameZh: 今颚鸟类
    rank: clade
    taxonId: txn:98887
    firstAppearance: 66
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Neoaves
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: suh-2016-neoavian-polytomy concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: suh-2016-neoavian-polytomy
          relation: supports
          pages: 50–62
          figure: Figures 1–3
          quoteLocator: Abstract; phylogenomic forest analysis; incomplete lineage sorting; Conclusions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Neoaves
      rangeKind: global-composite
      taxonomicConcept: Neoaves living-route navigation interval — source-bounded sample window — numerical range withheld
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
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: suh-2016-neoavian-polytomy
          locator: 50–62; Abstract; phylogenomic forest analysis; incomplete lineage sorting; Conclusions
      reviewStatus: automated-audit-passed
---

# Neoaves

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Neoaves is a living-bird navigation clade whose earliest branches remain a hard-polytomy hypothesis in the reviewed phylogenomic signal; the route must not be read as a resolved ancestor sequence or a fossil divergence date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Conflicting gene trees are the central empirical result, and the source argues that some short internodes may be unresolvable. Contested confidence records that genuine signal conflict.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
相互冲突的基因树是核心经验结果，来源认为部分短内部枝可能无法解析；有争议置信度记录这种真实信号冲突。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
新鸟类是现生鸟类导航支系，其最早分支在所综述的系统基因组信号中仍是硬多分叉假说；该路线不能解读为已解决的祖先序列或化石分化日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the phylogenomic study samples living lineages but supplies no range-fit fossil start or temporal interval. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of The phylogenomic forest of bird trees contains a hard polytomy at the root of Neoaves found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
