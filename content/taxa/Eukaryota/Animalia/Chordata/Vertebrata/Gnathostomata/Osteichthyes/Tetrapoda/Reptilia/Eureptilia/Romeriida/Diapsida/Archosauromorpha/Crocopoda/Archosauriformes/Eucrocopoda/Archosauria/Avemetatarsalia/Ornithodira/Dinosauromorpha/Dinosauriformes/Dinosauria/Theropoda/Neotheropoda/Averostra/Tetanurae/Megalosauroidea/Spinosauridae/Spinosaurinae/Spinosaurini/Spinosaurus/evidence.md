---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Spinosaurus
    commonName: Spinosaurus
    commonNameZh: 棘龙
    rank: genus
    taxonId: txn:38598
    firstAppearance: 112
    lastAppearance: 93
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae/Spinosaurinae/Spinosaurini/Spinosaurus
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ibrahim-2020-spinosaurus-tail concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: ibrahim-2020-spinosaurus-tail
          relation: supports
          pages: 67–70
          figure: Figures 1–4; Extended Data Figures 1–9
          quoteLocator: Specimen FSAC-KK 11888; tail anatomy; robotic-fluke experiments; Methods
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae/Spinosaurinae/Spinosaurini/Spinosaurus
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
      reviewedAgainstReferenceVersion: ibrahim-2020-spinosaurus-tail @ DOI 10.1038/s41586-020-2190-3
      referenceLinks:
        - relation: supports
          referenceId: ibrahim-2020-spinosaurus-tail
          pages: 67–70
          figure: Figures 1–4; Extended Data Figures 1–9
          quoteLocator: Specimen FSAC-KK 11888; tail anatomy; robotic-fluke experiments; Methods
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae/Spinosaurinae/Spinosaurini/Spinosaurus
      rangeKind: global-composite
      taxonomicConcept: Spinosaurus — source-bounded sample window
      geographicScope: Kem Kem Group FSAC-KK 11888 sample, Morocco
      olderMa: 100.5
      youngerMa: 93.9
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae/Spinosaurinae/Spinosaurini/Spinosaurus/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: ibrahim-2020-spinosaurus-tail
          locator: 67–70; Specimen FSAC-KK 11888; tail anatomy; robotic-fluke experiments; Methods
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Spinosaurus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Spinosaurus aegyptiacus specimen FSAC-KK 11888 preserves a deep, flexible tail tested with physical models for aquatic propulsion; the experiment supports a swimming-performance hypothesis, not directly observed behavior or a genus-wide ecology.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The caudal anatomy and controlled model comparisons are direct, but soft tissue, full-body dynamics and behavior require reconstruction. Medium confidence separates them.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Spinosaurus is displayed at 100.5–93.9 Ma only as the Cenomanian specimen-bearing interval for FSAC-KK 11888, not the complete genus range. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Spinosaurus uses Ibrahim, N.; Maganuco, S.; Dal Sasso, C.; Fabbri, M.; Auditore, M.; Bindellini, G.; Martill, D.M.; Zouhri, S.; Mattarelli, D.A.; Unwin, D.M.; Wiemann, J.; Bonadonna, D.; Amane, A.; Jakubczak, J.; Joger, U.; Lauder, G.V.; Pierce, S.E. (2020) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Kem Kem Group FSAC-KK 11888 sample, Morocco; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
尾部解剖和受控模型比较是直接证据，但软组织、全身动力学与行为需要重建；中等置信度将其分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Spinosaurus 采用 Ibrahim, N.; Maganuco, S.; Dal Sasso, C.; Fabbri, M.; Auditore, M.; Bindellini, G.; Martill, D.M.; Zouhri, S.; Mattarelli, D.A.; Unwin, D.M.; Wiemann, J.; Bonadonna, D.; Amane, A.; Jakubczak, J.; Joger, U.; Lauder, G.V.; Pierce, S.E.（2020）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Kem Kem Group FSAC-KK 11888 sample, Morocco；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
埃及棘龙标本 FSAC-KK 11888 保存深而灵活的尾部，并以物理模型测试水中推进；实验支持游泳性能假说，而非直接观察行为或属级统一生态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Spinosaurus 仅以 100.5–93.9 Ma 展示为FSAC-KK 11888 标本所在的森诺曼期区间，而非该属完整范围。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the Cenomanian specimen-bearing interval for FSAC-KK 11888, not the complete genus range; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Tail-propelled aquatic locomotion in a theropod dinosaur directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
