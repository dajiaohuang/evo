---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Catarrhini
    commonName: Catarrhines
    commonNameZh: 狭鼻猴类
    rank: parvorder
    taxonId: ""
    firstAppearance: 35.1
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Haplorhini/Anthropoidea/Catarrhini
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
          figure: Figures 1–3
          quoteLocator: Catarrhini topology; ancestral-area analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Haplorhini/Anthropoidea/Catarrhini
      rangeKind: global-composite
      taxonomicConcept: catarrhini — source-bounded sample window — numerical range withheld
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
          locator: Article e49521; Catarrhini topology; ancestral-area analyses
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Catarrhini

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Catarrhini is recovered as a supported higher-level branch in the 367-species living-primate supermatrix, but its internal topology and historical biogeography remain properties of that sequence sample and model, not direct fossil observations.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The molecular matrix supports sampled relationships; the statement withholds fossil range and universal ancestral-area claims.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
分子矩阵支持取样关系；表述不陈述化石范围或普适祖域。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
狭鼻小目在覆盖 367 个物种的现生灵长类超级矩阵中被恢复为有支持的高阶分支，但其内部拓扑与历史生物地理仍是该序列样本和模型的属性，不是直接化石观测。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the living-primate supermatrix does not supply a range-fit fossil start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Macroevolutionary Dynamics and Historical Biogeography of Primate Diversification Inferred from a Species Supermatrix found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
