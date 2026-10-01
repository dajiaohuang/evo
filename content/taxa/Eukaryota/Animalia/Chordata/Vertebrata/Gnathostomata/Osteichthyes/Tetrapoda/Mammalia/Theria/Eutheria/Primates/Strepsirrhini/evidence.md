---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Strepsirrhini
    commonName: Living Strepsirrhine Line
    commonNameZh: 现生湿鼻猴支系
    rank: suborder
    taxonId: txn:89317
    firstAppearance: 66.8
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: springer-2012-primate-supermatrix concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: springer-2012-primate-supermatrix
          pages: Article e49521
          figure: Figures 1–2
          quoteLocator: Taxon sampling; molecular phylogeny results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini
      rangeKind: global-composite
      taxonomicConcept: strepsirrhini — source-bounded sample window — numerical range withheld
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
        - referenceId: springer-2012-primate-supermatrix
          locator: Article e49521; Taxon sampling; molecular phylogeny results
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Strepsirrhini

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 367-species molecular supermatrix strongly supports Strepsirrhini within the sampled living primates, but the tree omits extinct diversity and inherits the study’s 2012 species concepts; it does not date a fossil first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary analysis explicitly samples 69 nuclear segments and 10 mitochondrial sequences. Scope is restricted to its living species matrix.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手分析明确取样 69 个核基因片段和 10 条线粒体序列；范围仅限于其现生物种矩阵。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一套覆盖 367 个物种的分子超级矩阵在取样现生灵长类中强烈支持湿鼻亚目，但该树不含灭绝多样性并继承研究的 2012 年物种概念；它不测定化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the living-primate supermatrix does not supply a range-fit fossil start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Macroevolutionary Dynamics and Historical Biogeography of Primate Diversification Inferred from a Species Supermatrix found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
