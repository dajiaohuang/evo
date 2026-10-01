---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Dromaeosauridae
    commonName: Raptors
    commonNameZh: 驰龙类
    rank: family
    taxonId: txn:38561
    firstAppearance: 145
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: turner-2012-dromaeosaurid-systematics concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: turner-2012-dromaeosaurid-systematics
          relation: supports
          pages: 1–206
          figure: Figures 1–3 and 65–69; Appendices 1–3
          quoteLocator: Specimen review; character matrix; phylogenetic results; unstable placements
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae
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
      reviewedAgainstReferenceVersion: turner-2012-dromaeosaurid-systematics @ DOI 10.1206/748.1
      referenceLinks:
        - relation: supports
          referenceId: turner-2012-dromaeosaurid-systematics
          pages: 1–206
          figure: Figures 1–3 and 65–69; Appendices 1–3
          quoteLocator: Specimen review; character matrix; phylogenetic results; unstable placements
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae
      rangeKind: global-composite
      taxonomicConcept: Dromaeosauridae — source-bounded sample window
      geographicScope: Dromaeosaurid specimens reviewed and matrix-sampled by Turner et al.
      olderMa: 167
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: turner-2012-dromaeosaurid-systematics
          locator: 1–206; Specimen review; character matrix; phylogenetic results; unstable placements
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Dromaeosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Dromaeosauridae is represented by Turner and colleagues’ specimen review and large paravian morphology matrix; recovered subclades and unstable taxa are analysis results, not a resolved ancestor chain or exact global duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The monograph documents extensive first-hand scoring and sensitivity, while several placements remain unstable. Medium confidence mirrors the reported support.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Dromaeosauridae is displayed at 167–66 Ma only as the review's sampled Jurassic–Cretaceous envelope, not exact global family endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Dromaeosauridae uses Turner, A.H.; Makovicky, P.J.; Norell, M.A. (2012) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Dromaeosaurid specimens reviewed and matrix-sampled by Turner et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
专著记录大量第一手编码与敏感性分析，而若干位置仍不稳定；中等置信度对应已报告支持度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Dromaeosauridae 采用 Turner, A.H.; Makovicky, P.J.; Norell, M.A.（2012）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Dromaeosaurid specimens reviewed and matrix-sampled by Turner et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
驰龙科由 Turner 等人的标本综述和大型近鸟类形态矩阵表示；恢复的亚支系与不稳定类群是分析结果，不是已解决的祖先链或精确全球时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Dromaeosauridae 仅以 167–66 Ma 展示为综述所采样的侏罗纪—白垩纪包络，而非精确全球科级端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's sampled Jurassic–Cretaceous envelope, not exact global family endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Review of Dromaeosaurid Systematics and Paravian Phylogeny directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
