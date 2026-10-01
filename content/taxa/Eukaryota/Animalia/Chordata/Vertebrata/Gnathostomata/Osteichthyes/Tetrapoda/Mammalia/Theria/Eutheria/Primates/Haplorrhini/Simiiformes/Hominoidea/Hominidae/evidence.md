---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hominidae
    commonName: Great Apes & Humans
    commonNameZh: 大型类人猿与人类
    rank: family
    taxonId: txn:40899
    firstAppearance: 20
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae
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
          quoteLocator: Hominoidea and Hominidae taxon sampling and topology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae
      rangeKind: global-composite
      taxonomicConcept: Hominidae — source-bounded sample window — numerical range withheld
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
          locator: Article e49521; Hominoidea and Hominidae taxon sampling and topology
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Hominidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The living-primate supermatrix samples the great-ape family Hominidae within Hominoidea and supports its included relationships, but the analysis neither samples extinct hominids comprehensively nor dates the family from a fossil first occurrence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The molecular sample supports the living family-level topology; explicit fossil and temporal exclusions prevent overreach.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
分子样本支持现生科级拓扑；明确排除化石与时间外推以防过度解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
现生灵长类超级矩阵在 Hominoidea 内取样大猿科 Hominidae 并支持其所含关系，但该分析既未全面取样灭绝人科成员，也未以化石首现测定该科年代。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the living-primate supermatrix tests topology and biogeography but does not furnish a fossil-range endpoint. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Macroevolutionary Dynamics and Historical Biogeography of Primate Diversification Inferred from a Species Supermatrix found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
