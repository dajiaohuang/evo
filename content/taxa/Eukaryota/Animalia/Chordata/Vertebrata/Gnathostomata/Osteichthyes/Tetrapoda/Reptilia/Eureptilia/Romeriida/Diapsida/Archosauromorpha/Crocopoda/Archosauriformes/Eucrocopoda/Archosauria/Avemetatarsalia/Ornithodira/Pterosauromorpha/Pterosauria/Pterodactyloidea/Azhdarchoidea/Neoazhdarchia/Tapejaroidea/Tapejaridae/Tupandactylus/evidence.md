---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tupandactylus
    commonName: Tapejarid Pterosaur
    commonNameZh: 古神翼龙
    rank: genus
    taxonId: txn:163702
    firstAppearance: 115
    lastAppearance: 110
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Tupandactylus
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
      reviewedAgainstReferenceVersion: cincotta-2022-tupandactylus-feathers concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: cincotta-2022-tupandactylus-feathers
          relation: supports
          pages: 684–688
          figure: Figure 1; Extended Data Figure 1
          quoteLocator: Specimen MCT.R.1884; geological provenance; Methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Tupandactylus
      rangeKind: global-composite
      taxonomicConcept: Tupandactylus cf. imperator specimen MCT.R.1884 occurrence
      geographicScope: Crato Formation, Araripe Basin, Brazil
      olderMa: 115
      youngerMa: 110
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
        - content/events/Tupandactylus_feathers_and_melanosomes/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: cincotta-2022-tupandactylus-feathers
          locator: pp. 684–688; Figure 1; Methods
      reviewStatus: automated-audit-passed
---

# Tupandactylus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Tupandactylus is anchored by specimen MCT.R.1884 from the Crato Formation; this provenance supports a sampled occurrence only and does not define the genus-wide range or pterosaur feather origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen and formation are explicitly documented. High confidence stays at the sample level and separates occurrence from soft-tissue evolutionary interpretation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本与地层有明确记录。高置信度停留在样本层级，并把出现记录与软组织演化解释分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
古神翼龙由克拉图组的 MCT.R.1884 标本锚定；该出处仅支持一次取样记录，不定义属级范围或翼龙羽毛起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The numerical envelope is a broad Lower Cretaceous navigation translation and not direct dating of MCT.R.1884.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
MCT.R.1884 is explicitly attributed to the Crato Formation in the specimen description and supplementary provenance.
<!-- /evo:text -->
