---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hominoidea
    commonName: Apes and Humans
    commonNameZh: 人猿总科
    rank: superfamily
    taxonId: txn:40883
    firstAppearance: 25
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea
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
          quoteLocator: Species supermatrix topology for Catarrhini and Hominoidea
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea
      rangeKind: global-composite
      taxonomicConcept: hominoidea — source-bounded sample window — numerical range withheld
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
          locator: Article e49521; Species supermatrix topology for Catarrhini and Hominoidea
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Hominoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Hominoidea is represented in the molecular supermatrix by sampled living apes within Catarrhini; the supported node does not include every fossil hominoid or establish a 25 Ma global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The claim is intentionally limited to the extant sequence sample and separates topology from the atlas display range.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主张有意限制于现生序列样本，并将拓扑与图谱显示范围分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在分子超级矩阵中，Hominoidea 由狭鼻小目内取样的现生猿类代表；有支持的节点不包含每一种化石猿类，也不建立 2500 万年前的全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the living-primate supermatrix does not support the former 25 Ma display start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Macroevolutionary Dynamics and Historical Biogeography of Primate Diversification Inferred from a Species Supermatrix found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
