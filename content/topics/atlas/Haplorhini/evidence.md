---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Haplorhini
    commonName: Haplorhines
    commonNameZh: 简鼻猴类
    rank: suborder
    taxonId: ""
    firstAppearance: 66
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Haplorhini
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
          quoteLocator: Molecular phylogeny and node-support results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Haplorhini
      rangeKind: global-composite
      taxonomicConcept: haplorhini — source-bounded sample window — numerical range withheld
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
          locator: Article e49521; Molecular phylogeny and node-support results
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Haplorhini

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The same living-primate supermatrix recovers Haplorhini with strong support in its sampled topology; that result is molecular evidence for sampled relationships, not a complete fossil membership list or a direct observation of the clade’s origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study’s broad living sample supports the node, while extinct taxa and unsampled histories remain outside its matrix.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究的广泛现生取样支持该节点，而灭绝类群与未取样历史不在其矩阵范围内。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
同一现生灵长类超级矩阵在取样拓扑中以强支持恢复简鼻亚目；该结果是取样关系的分子证据，不是完整化石成员清单或对该支系起源的直接观测。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the living-primate supermatrix does not supply a range-fit fossil start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Macroevolutionary Dynamics and Historical Biogeography of Primate Diversification Inferred from a Species Supermatrix found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
