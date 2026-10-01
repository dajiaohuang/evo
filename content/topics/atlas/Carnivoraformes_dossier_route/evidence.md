---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Carnivoraformes dossier route
    commonName: Stem carnivoraform dossier route
    commonNameZh: 食肉形类干群档案导航
    rank: navigation group
    firstAppearance: 56
    lastAppearance: 0
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Carnivoraformes_dossier_route
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: spaulding-flynn-2012-carnivoramorpha concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: spaulding-flynn-2012-carnivoramorpha
          pages: 653–677
          quoteLocator: Taxon and character sampling; Carnivoraformes and crown Carnivora results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Carnivoraformes_dossier_route
      rangeKind: global-composite
      taxonomicConcept: Carnivoraformes dossier navigation route — numerical range withheld — numerical range withheld
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
        - referenceId: spaulding-flynn-2012-carnivoramorpha
          locator: 653–677; Taxon and character sampling; Carnivoraformes and crown Carnivora results
      reviewStatus: automated-audit-passed
---

# Carnivoraformes dossier route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Carnivoraformes dossier route is an atlas navigation grouping for sampled stem carnivoraform studies; a broad morphology matrix tests those fossils relative to crown Carnivora but does not make the route itself a taxon or ancestor lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source supports the constituent stem relationships. The statement explicitly withholds taxonomic status from the atlas-only route.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源支持组成的干群关系；表述明确不赋予仅属图谱的路线以分类地位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Carnivoraformes 专题路线是图谱中汇集取样干群食肉形类研究的导航组合；广泛形态矩阵检验这些化石相对于冠群食肉目的位置，但不使路线本身成为类群或祖先谱系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the identifier is an editorial dossier route rather than a biological taxon, so a taxon range would be category error. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Phylogeny of the Carnivoramorpha: The impact of postcranial characters found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
