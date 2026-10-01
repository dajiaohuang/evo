---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Scleractinia
    commonName: Stony Corals
    commonNameZh: 石珊瑚
    rank: order
    taxonId: txn:6108
    firstAppearance: 245
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Hexacorallia/Scleractinia
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: stolarski-2011-scleractinia
      referenceLinks:
        - referenceId: stolarski-2011-scleractinia
          relation: supports
          pages: 1–10
          figure: Figures 1–4; Additional files 1–4
          quoteLocator: Four-locus sampling, relaxed-clock calibration and deep-water lineages
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Hexacorallia/Scleractinia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: oliver-1996-paleozoic-corals locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: oliver-1996-paleozoic-corals
          pages: 107–110
          figure: Opening range synthesis
          quoteLocator: Abstract; Middle Triassic–Holocene Scleractinia statement
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical Middle Triassic boundary
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Hexacorallia/Scleractinia
      rangeKind: global-composite
      taxonomicConcept: Scleractinia review-bounded fossil-to-living navigation range
      geographicScope: Middle Triassic fossil record through living Scleractinia
      olderMa: 247.2
      youngerMa: 0
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
        - content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Hexacorallia/Scleractinia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: oliver-1996-paleozoic-corals
          locator: p. 107 Abstract; pp. 107–110; Middle Triassic–Holocene Scleractinia synthesis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical Middle Triassic boundary
      reviewStatus: automated-audit-passed
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Hexacorallia/Scleractinia
      rangeKind: taxon-range
      taxonomicConcept: Paleozoic scleractinian clock model evidence boundary
      geographicScope: Global sampled deep- and shallow-water living corals
      olderMa: 425
      youngerMa: 240
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/1/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/1/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Paleozoic_scleractinian_clock_model/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: stolarski-2011-scleractinia
          locator: 1–10; Figures 1–4; Additional files 1–4; Four-locus sampling, relaxed-clock calibration and deep-water lineages
      reviewStatus: automated-audit-passed
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Hexacorallia/Scleractinia
      rangeKind: taxon-range
      taxonomicConcept: Late-Triassic coral photosymbiosis test evidence boundary
      geographicScope: Taurus Mountains near Antalya, Turkey
      olderMa: 213
      youngerMa: 211
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/2/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/2/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Late-Triassic_coral_photosymbiosis_test/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: frankowiak-2016-coral-symbiosis
          locator: e1601122; Figures 1–4; Supplementary Tables S1–S5; Skeleton microstructure and C, O and N isotope measurements
      reviewStatus: automated-audit-passed
---

# Scleractinia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A four-locus relaxed clock places sampled deep scleractinian splits in the Paleozoic, substantially before their skeletal record; this posterior estimate is model-dependent and not a fossil occurrence or exact Scleractinia origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The clock result is explicit, but calibration, loci, taxon sampling and posterior uncertainty require a model-bounded interpretation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Scleractinia is displayed at 247.2–0 Ma as Oliver’s review-bounded Middle Triassic–Holocene fossil-to-living range; it is not the Paleozoic molecular-clock estimate, a symbiosis-event window or an exact crown-origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Oliver (1996), p. 107 and the opening synthesis, directly separates the Middle Triassic–Holocene scleractinian record from Paleozoic coral groups. Medium confidence reflects named-interval conversion and review-level synthesis.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
时钟结果明确，但校准、位点、类群取样和后验不确定性要求采用模型限定解释。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Oliver（1996）第 107 页及开篇综述直接把中三叠世—全新世石珊瑚记录与古生代珊瑚类群区分开。中等置信度反映命名区间换算和综述级综合。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
四位点松弛分子钟把取样深水石珊瑚分支置于古生代，明显早于其骨骼记录；这一后验估计依赖模型，不是化石出现或石珊瑚精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Scleractinia 的 247.2–0 Ma 展示限定于 Oliver 综述中的中三叠世—全新世化石至现生范围；它不是古生代分子钟估计、共生事件窗口或精确冠群起源日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint translates the named Middle Triassic boundary using ICS v2026/06; it is distinct from molecular-clock estimates and individual symbiosis events.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Oliver explicitly reviews living Scleractinia as ranging from the Middle Triassic to Holocene; ICS supplies only the numerical boundary conversion.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/1/uncertainty/note -->
The approximately 425 Ma node is model-derived and does not demonstrate a mineralized Paleozoic scleractinian, rugose ancestry or an exact origination date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/1/evidenceBasis -->
Named specimen, explicitly bounded geochemical or genomic dataset, or stated model interval in the cited primary studies.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/2/uncertainty/note -->
Geochemical proxies infer trophic mode; they do not identify a dinoflagellate species, every colony’s ecology or the original origin of coral symbiosis.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/2/evidenceBasis -->
Named specimen, explicitly bounded geochemical or genomic dataset, or stated model interval in the cited primary studies.
<!-- /evo:text -->
