---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hamipterus
    commonName: Hami Pterosaur
    commonNameZh: 哈密翼龙
    rank: genus
    taxonId: txn:304279
    firstAppearance: 120
    lastAppearance: 110
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus
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
      reviewedAgainstReferenceVersion: wang-2017-hamipterus-eggs concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: wang-2017-hamipterus-eggs
          relation: supports
          pages: 1197–1201
          figure: Figures 1–2; Supplementary geological context
          quoteLocator: Locality and stratigraphic levels; egg accumulation; Methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Hamipterus
      rangeKind: global-composite
      taxonomicConcept: Hamipterus tianshanensis egg and embryo site occurrence
      geographicScope: Shengjinkou Formation, Turpan-Hami Basin, Xinjiang, China
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
        - content/events/Hamipterus_egg_and_embryo_assemblage/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: wang-2017-hamipterus-eggs
          locator: pp. 1197–1201; Figures 1–2; Supplementary geological context
      reviewStatus: automated-audit-passed
---

# Hamipterus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Hamipterus is represented by eggs and embryos from at least four stratigraphic levels at the Shengjinkou locality; those repeated local horizons do not establish a global genus range or nesting distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The stratigraphic repetition and locality are directly documented. High confidence is restricted to the excavated site and sampled levels.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
地层重复与地点均有直接记录。高置信度仅限已发掘地点和取样层位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
哈密翼龙由胜金口地点至少四个地层层位中的蛋和胚胎表示；这些重复局部层位不建立全球属级范围或筑巢分布。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The display interval is a broad Lower Cretaceous formation-level envelope and not a direct date on individual eggs.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Eggs and embryos are recorded across at least four stratigraphic levels at the documented Hamipterus locality.
<!-- /evo:text -->
