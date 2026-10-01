---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hadrosauridae
    commonName: Duck-billed Dinosaurs
    commonNameZh: 鸭嘴龙类
    rank: family
    taxonId: txn:38755
    firstAppearance: 100
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: prieto-marquez-2010-hadrosaurid-biogeography concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: prieto-marquez-2010-hadrosaurid-biogeography
          relation: supports
          pages: 503–525
          figure: Figures 1–5; Tables 1–2
          quoteLocator: Methods; area coding; event-based results; Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae
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
      reviewedAgainstReferenceVersion: prieto-marquez-2010-hadrosaurid-biogeography @ DOI 10.1111/j.1096-3642.2010.00642.x
      referenceLinks:
        - relation: supports
          referenceId: prieto-marquez-2010-hadrosaurid-biogeography
          pages: 503–525
          figure: Figures 1–5; Tables 1–2
          quoteLocator: Methods; area coding; event-based results; Discussion
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae
      rangeKind: global-composite
      taxonomicConcept: Hadrosauridae — source-bounded sample window
      geographicScope: Hadrosaurid fossil areas and intervals sampled by Prieto-Márquez
      olderMa: 100.5
      youngerMa: 66
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: prieto-marquez-2010-hadrosaurid-biogeography
          locator: 503–525; Methods; area coding; event-based results; Discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Hadrosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Hadrosauridae is represented by the taxa and areas sampled in Prieto-Márquez’s event-based historical-biogeographic analysis; inferred dispersal routes are model results, not observed migrations or a complete global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The analysis explicitly combines a sampled phylogeny with geographic areas and time slices. Medium confidence preserves dependence on topology, coding and fossil sampling.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Hadrosauridae is displayed at 100.5–66 Ma only as the source's global historical-biogeography sample, not an exhaustive family record or exact endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Hadrosauridae uses Prieto-Márquez, A. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Hadrosaurid fossil areas and intervals sampled by Prieto-Márquez; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
分析明确联合取样系统树、地理区域与时间片；中等置信度保留对拓扑、编码和化石取样的依赖。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Hadrosauridae 采用 Prieto-Márquez, A.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Hadrosaurid fossil areas and intervals sampled by Prieto-Márquez；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鸭嘴龙科表示 Prieto-Márquez 事件型历史生物地理分析中取样的类群和区域；推断扩散路线是模型结果，不是被观察到的迁徙或完整全球范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Hadrosauridae 仅以 100.5–66 Ma 展示为论文历史生物地理分析所采样的全球记录，而非穷尽的科级记录或精确端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the source's global historical-biogeography sample, not an exhaustive family record or exact endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Global historical biogeography of hadrosaurid dinosaurs directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
