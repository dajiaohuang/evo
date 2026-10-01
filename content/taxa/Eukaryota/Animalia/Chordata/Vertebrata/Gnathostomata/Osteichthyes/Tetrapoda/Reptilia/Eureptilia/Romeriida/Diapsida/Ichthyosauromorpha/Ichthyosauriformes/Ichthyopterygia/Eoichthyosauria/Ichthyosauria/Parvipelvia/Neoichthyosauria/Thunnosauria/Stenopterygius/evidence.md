---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Stenopterygius
    commonName: Narrow-fin Ichthyosaur
    commonNameZh: 狭翼鱼龙
    rank: genus
    taxonId: txn:36574
    firstAppearance: 182.7
    lastAppearance: 174.1
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lindgren-2018-stenopterygius-soft-tissues concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: lindgren-2018-stenopterygius-soft-tissues
          relation: supports
          pages: 359–365
          figure: Figure 1; Extended Data Figure 1
          quoteLocator: Specimen MH 432; geological provenance; Methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Ichthyosauromorpha/Ichthyosauriformes/Ichthyopterygia/Eoichthyosauria/Ichthyosauria/Parvipelvia/Neoichthyosauria/Thunnosauria/Stenopterygius
      rangeKind: global-composite
      taxonomicConcept: Stenopterygius specimen MH 432 occurrence
      geographicScope: Toarcian Posidonia Shale, Holzmaden, Germany
      olderMa: 182.7
      youngerMa: 174.1
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Stenopterygius_skin_and_blubber/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: lindgren-2018-stenopterygius-soft-tissues
          locator: pp. 359–365; Figure 1; Methods
      reviewStatus: automated-audit-passed
---

# Stenopterygius

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Stenopterygius is represented by specimen MH 432 from the Posidonia Shale at Holzmaden; this specimen-level occurrence is not a complete genus duration or a global first or last appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen identity and formation are explicit in the primary study. High confidence applies only to that locality and horizon.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主研究明确给出标本身份和地层。高置信度仅适用于该地点与层位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
狭翼鱼龙由霍尔茨马登波西多尼亚页岩的 MH 432 标本表示；这一标本级记录不是完整属级时长，也不是全球首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The display uses a stage-scale Toarcian envelope broader than the specimen's local stratigraphic information.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen MH 432 is explicitly tied to the Posidonia Shale and Holzmaden in the primary study.
<!-- /evo:text -->
