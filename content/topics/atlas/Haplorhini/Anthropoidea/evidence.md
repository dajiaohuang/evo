---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Anthropoidea
    commonName: Anthropoids
    commonNameZh: 类人猿下目
    rank: infraorder
    taxonId: ""
    firstAppearance: 48.3
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Haplorhini/Anthropoidea
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
          quoteLocator: Higher-level primate topology; Simiiformes sampling
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Haplorhini/Anthropoidea
      rangeKind: global-composite
      taxonomicConcept: anthropoidea — source-bounded sample window — numerical range withheld
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
          locator: Article e49521; Higher-level primate topology; Simiiformes sampling
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Anthropoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The living-primate supermatrix strongly supports the branch labelled Simiiformes in the paper, corresponding to the atlas Anthropoidea route; this name mapping is limited to sampled living relationships and does not settle all fossil anthropoid membership.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The claim makes the nomenclatural correspondence explicit and avoids extending an extant molecular tree to contested fossils.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主张明确名称对应关系，并避免把现生分子树外推到有争议的化石。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
现生灵长类超级矩阵强烈支持论文中标为 Simiiformes 的分支，对应图谱 Anthropoidea 路线；这一名称映射仅限于取样现生关系，并不解决所有化石类人猿类成员资格。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the living-primate supermatrix does not establish fossil membership or a range-fit first appearance. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Macroevolutionary Dynamics and Historical Biogeography of Primate Diversification Inferred from a Species Supermatrix found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
