---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Brachiopoda
    commonName: Lamp Shells
    commonNameZh: 腕足动物
    rank: phylum
    taxonId: txn:26322
    firstAppearance: 540
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Holmer et al. 2008 DOI 10.1098/rsbl.2008.0277 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: holmer-et-al-2008-micrina
          relation: supports
          pages: 724–728
          figure: Figures 1–3
          quoteLocator: Early Cambrian Micrina material; sclerite articulation, muscle scars and stem-brachiopod comparison
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Brachiopoda
      rangeKind: global-composite
      taxonomicConcept: Total-group Brachiopoda under the Micrina stem-group reconstruction
      geographicScope: Early Cambrian Micrina sample to living brachiopods
      olderMa: 520
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 10
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Brachiopoda/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: holmer-et-al-2008-micrina
          locator: pp. 724–728; Figures 1–3
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Brachiopoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Brachiopoda root display replaces the legacy 540 Ma bound with a rounded 520–0 Ma total-group navigation envelope anchored by Early Cambrian Micrina sclerites reconstructed as a stem brachiopod; it is not a crown-brachiopod FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Micrina sclerites and muscle scars are direct observations, but the bivalved reconstruction and valve homologies are comparative hypotheses. The rounded numeric endpoint represents the Early Cambrian sampled interval rather than an exact origination date.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Micrina 骨片和肌痕是直接观察，而双壳复原及壳瓣同源性属于比较假说；取整端点表示早寒武世采样区间，不是精确起源时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
腕足动物门根节点以取整后的 5.20 亿年前至今总群导航包络替代旧 5.40 亿年前边界，锚点是被复原为干群腕足动物的早寒武世 Micrina 骨片；它不是冠群腕足动物首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is a rounded Early Cambrian sample; the whole-body reconstruction and stem placement remain comparative hypotheses.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Mitral and sellate Micrina sclerites with muscle scars support a bivalved stem-brachiopod reconstruction without setting crown age.
<!-- /evo:text -->
