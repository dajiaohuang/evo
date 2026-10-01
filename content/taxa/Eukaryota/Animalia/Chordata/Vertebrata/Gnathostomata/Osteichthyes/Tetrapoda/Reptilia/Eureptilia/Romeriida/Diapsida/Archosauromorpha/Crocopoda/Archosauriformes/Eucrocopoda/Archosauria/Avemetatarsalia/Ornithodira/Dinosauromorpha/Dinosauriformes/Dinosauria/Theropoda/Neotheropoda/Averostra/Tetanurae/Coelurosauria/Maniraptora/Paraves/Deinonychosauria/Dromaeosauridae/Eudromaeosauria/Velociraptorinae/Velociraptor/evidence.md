---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Velociraptor
    commonName: Velociraptor
    commonNameZh: 伶盗龙
    rank: genus
    taxonId: txn:38564
    firstAppearance: 75
    lastAppearance: 71
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Eudromaeosauria/Velociraptorinae/Velociraptor
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: turner-2007-velociraptor-quill-knobs concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: turner-2007-velociraptor-quill-knobs
          relation: supports
          pages: "1721"
          figure: Figure 1; Supporting Online Material
          quoteLocator: Specimen IGM 100/981; ulnar papillae description; comparative interpretation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Eudromaeosauria/Velociraptorinae/Velociraptor
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
      reviewedAgainstReferenceVersion: turner-2007-velociraptor-quill-knobs @ DOI 10.1126/science.1145076
      referenceLinks:
        - relation: supports
          referenceId: turner-2007-velociraptor-quill-knobs
          pages: "1721"
          figure: Figure 1; Supporting Online Material
          quoteLocator: Specimen IGM 100/981; ulnar papillae description; comparative interpretation
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Eudromaeosauria/Velociraptorinae/Velociraptor
      rangeKind: global-composite
      taxonomicConcept: Velociraptor — source-bounded sample window
      geographicScope: Djadokhta Formation IGM 100/981 sample, Mongolia
      olderMa: 75
      youngerMa: 71
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Eudromaeosauria/Velociraptorinae/Velociraptor/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: turner-2007-velociraptor-quill-knobs
          locator: 1721; Specimen IGM 100/981; ulnar papillae description; comparative interpretation
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Velociraptor

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Velociraptor specimen IGM 100/981 preserves regularly spaced ulnar papillae interpreted as quill knobs; this supports attached secondary feathers on that forearm, not powered flight, exact plumage extent or every species in the genus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The bony papillae are directly observed and compared with living birds. High confidence applies to the sampled forearm, while feather form and function remain comparative inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Velociraptor is displayed at 75–71 Ma only as the Campanian specimen interval for IGM 100/981, not the full range of Velociraptor. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Velociraptor uses Turner, A.H.; Makovicky, P.J.; Norell, M.A. (2007) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Djadokhta Formation IGM 100/981 sample, Mongolia; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
骨质乳突是直接观察结果，并与现生鸟类比较。高置信度适用于取样前臂，羽毛形态与功能仍属比较推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Velociraptor 采用 Turner, A.H.; Makovicky, P.J.; Norell, M.A.（2007）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Djadokhta Formation IGM 100/981 sample, Mongolia；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
伶盗龙标本 IGM 100/981 保存规则排列的尺骨乳突，被解释为羽茎瘤；这支持该前臂附着次级飞羽，不证明动力飞行、精确羽被范围或属内每个物种。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Velociraptor 仅以 75–71 Ma 展示为IGM 100/981 标本的坎潘期区间，而非 Velociraptor 完整范围。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the Campanian specimen interval for IGM 100/981, not the full range of Velociraptor; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Feather Quill Knobs in the Dinosaur Velociraptor directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
