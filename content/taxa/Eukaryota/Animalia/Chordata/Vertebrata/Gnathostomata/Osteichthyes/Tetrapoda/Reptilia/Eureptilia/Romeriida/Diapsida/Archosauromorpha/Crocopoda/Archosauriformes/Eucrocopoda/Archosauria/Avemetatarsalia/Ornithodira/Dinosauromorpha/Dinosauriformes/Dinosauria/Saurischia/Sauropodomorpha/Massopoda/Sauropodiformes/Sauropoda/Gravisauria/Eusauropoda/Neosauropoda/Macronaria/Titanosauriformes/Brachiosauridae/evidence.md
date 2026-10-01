---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Brachiosauridae
    commonName: Brachiosaurs
    commonNameZh: 腕龙类
    rank: family
    taxonId: txn:38673
    firstAppearance: 165
    lastAppearance: 145
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Brachiosauridae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: taylor-2009-brachiosaurus-giraffatitan concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: taylor-2009-brachiosaurus-giraffatitan
          relation: supports
          pages: 787–806
          figure: Figures 1–16; Tables 1–3
          quoteLocator: Type-material review; comparative diagnosis; generic separation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Brachiosauridae
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
      reviewedAgainstReferenceVersion: taylor-2009-brachiosaurus-giraffatitan @ DOI 10.1671/039.029.0309
      referenceLinks:
        - relation: supports
          referenceId: taylor-2009-brachiosaurus-giraffatitan
          pages: 787–806
          figure: Figures 1–16; Tables 1–3
          quoteLocator: Type-material review; comparative diagnosis; generic separation
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Brachiosauridae
      rangeKind: global-composite
      taxonomicConcept: Brachiosauridae — source-bounded sample window
      geographicScope: Morrison and Tendaguru type-material comparison in Taylor
      olderMa: 154.8
      youngerMa: 145
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Saurischia/Sauropodomorpha/Massopoda/Sauropodiformes/Sauropoda/Gravisauria/Eusauropoda/Neosauropoda/Macronaria/Titanosauriformes/Brachiosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: taylor-2009-brachiosaurus-giraffatitan
          locator: 787–806; Type-material review; comparative diagnosis; generic separation
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Brachiosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Brachiosauridae is represented by Taylor’s character-by-character separation of Brachiosaurus altithorax from Giraffatitan brancai; that genus-level revision does not define the complete family range or every brachiosaurid member.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The type and referred material are compared in detail and diagnoses are explicit. High confidence is restricted to the revised genera and characters.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Brachiosauridae is displayed at 154.8–145 Ma only as the Late Jurassic type-material comparison for Brachiosaurus and Giraffatitan, not the complete family range. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Brachiosauridae uses Taylor, M.P. (2009) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Morrison and Tendaguru type-material comparison in Taylor; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
模式与归入材料得到详细比较，诊断明确。高置信度仅限修订后的属和字符。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Brachiosauridae 采用 Taylor, M.P.（2009）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Morrison and Tendaguru type-material comparison in Taylor；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
腕龙科由 Taylor 对高胸腕龙与布氏长颈巨龙逐字符分离的研究表示；该属级修订不定义完整科级范围或每个腕龙科成员。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Brachiosauridae 仅以 154.8–145 Ma 展示为Brachiosaurus 与 Giraffatitan 晚侏罗世模式材料的比较区间，而非完整科级范围。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the Late Jurassic type-material comparison for Brachiosaurus and Giraffatitan, not the complete family range; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A re-evaluation of Brachiosaurus altithorax Riggs 1903 (Dinosauria, Sauropoda) and its generic separation from Giraffatitan brancai (Janensch 1914) directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
