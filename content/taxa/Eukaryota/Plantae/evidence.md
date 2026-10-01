---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Plantae
    commonName: Plants
    commonNameZh: 植物
    rank: kingdom
    taxonId: txn:54311
    firstAppearance: 470
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Rubinstein et al. 2010 DOI 10.1111/j.1469-8137.2010.03433.x checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: rubinstein-2010-dapingian-cryptospores
          relation: supports
          pages: 365–369
          figure: Figures 1–2; Supporting Figures S1, S3 and S4
          quoteLocator: "Summary; Results: Zanjón Formation palynological assemblage; Discussion of embryophyte affinity"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Plantae
      rangeKind: global-composite
      taxonomicConcept: Embryophyte evidence within the atlas Plantae root
      geographicScope: Zanjón Formation cryptospore anchor to living representatives
      olderMa: 473
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 2
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: high
      claimPaths:
        - content/taxa/Eukaryota/Plantae/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: rubinstein-2010-dapingian-cryptospores
          locator: pp. 365–369; Figures 1–2 and Supporting Figures S1, S3–S4
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Plantae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Plantae root display uses the approximately 473–471 Ma Zanjón cryptospore assemblage as a sampled embryophyte-on-land anchor and extends to living representatives; it is not a first appearance for all Plantae or a crown-bryophyte record.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The dated cryptospore assemblage is directly described and illustrated, but the root entity is broader than the sampled embryophytes. The range is therefore an explicitly scoped navigation envelope rather than a total-clade origination date.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
有明确年代和图示的隐孢子组合直接支持有胚植物采样记录，但根实体范围更广，因此该范围只是明确限定的导航包络，不是全类群起源时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
植物界根节点以约 4.73–4.71 亿年前的 Zanjón 隐孢子组合为有胚植物登陆的采样锚点，并延伸到现生代表；它不是全部植物界的首现，也不是冠群苔藓植物记录。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint rounds the source's approximately 473–471 Ma assemblage; it is not a first appearance for all Plantae.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Dated cryptospore monads and tetrads provide a direct sampled embryophyte-on-land anchor; living representatives supply the present endpoint.
<!-- /evo:text -->
