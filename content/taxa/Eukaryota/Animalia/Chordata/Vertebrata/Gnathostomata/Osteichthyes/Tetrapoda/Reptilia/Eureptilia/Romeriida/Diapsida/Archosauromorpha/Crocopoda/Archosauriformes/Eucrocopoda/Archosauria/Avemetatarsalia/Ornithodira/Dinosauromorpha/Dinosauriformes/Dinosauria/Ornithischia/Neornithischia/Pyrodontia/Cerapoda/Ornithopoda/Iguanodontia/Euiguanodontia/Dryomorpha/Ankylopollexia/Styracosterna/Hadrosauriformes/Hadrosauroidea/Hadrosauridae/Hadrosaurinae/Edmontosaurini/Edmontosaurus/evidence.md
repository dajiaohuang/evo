---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Edmontosaurus
    commonName: Edmontosaurus
    commonNameZh: 埃德蒙顿龙
    rank: genus
    taxonId: txn:38761
    firstAppearance: 73
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae/Hadrosaurinae/Edmontosaurini/Edmontosaurus
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated primary-source review
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Campione and Evans 2011 DOI 10.1371/journal.pone.0025186; publisher full text inspected 2026-09-05
      referenceLinks:
        - referenceId: campione-evans-2011-edmontosaur-taxonomy
          relation: supports
          figure: Figures 4–5
          quoteLocator: Discussion of the three longest skulls assigned to Anatotitan copei, allometric scaling and dorsoventral crushing
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae/Hadrosaurinae/Edmontosaurini/Edmontosaurus
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: campione-evans-2011-edmontosaur-taxonomy concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: campione-evans-2011-edmontosaur-taxonomy
          relation: supports
          pages: 1–12
          figure: Figures 2, 4 and 7; Tables 1–3
          quoteLocator: Specimen sample; geometric morphometrics; growth results; taxonomic implications
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae/Hadrosaurinae/Edmontosaurini/Edmontosaurus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: campione-evans-2011-edmontosaur-taxonomy @ DOI 10.1371/journal.pone.0025186
      referenceLinks:
        - relation: supports
          referenceId: campione-evans-2011-edmontosaur-taxonomy
          pages: 1–12
          figure: Figures 2, 4 and 7; Tables 1–3
          quoteLocator: Specimen sample; geometric morphometrics; growth results; taxonomic implications
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
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae/Hadrosaurinae/Edmontosaurini/Edmontosaurus
      rangeKind: global-composite
      taxonomicConcept: Edmontosaurus — source-bounded sample window
      geographicScope: Latest Cretaceous North American edmontosaur cranial sample
      olderMa: 73
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Ornithopoda/Iguanodontia/Euiguanodontia/Dryomorpha/Ankylopollexia/Styracosterna/Hadrosauriformes/Hadrosauroidea/Hadrosauridae/Hadrosaurinae/Edmontosaurini/Edmontosaurus/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: campione-evans-2011-edmontosaur-taxonomy
          locator: 1–12; Specimen sample; geometric morphometrics; growth results; taxonomic implications
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Edmontosaurus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In Campione and Evans's skull sample, the long, low skulls historically assigned to Anatotitan copei fall within or close to Edmontosaurus annectens variation; the authors explain these proportions through size-related allometry and individual variation, with crushing potentially accentuating skull shape.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The measured skull proportions support the study's interpretation, but ontogenetic explanation and preservation effects are inferential and remain limited to the sampled skulls.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Edmontosaurus is bounded by Campione and Evans’s cranial growth and variation sample, which supports a reduced latest-Cretaceous North American species set; the morphometric result does not assign every hadrosaurid skull or define exact genus endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The study measures a broad skull sample and tests ontogenetic variation, but species delimitation remains interpretation of continuous growth data.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Edmontosaurus is displayed at 73–66 Ma only as the stratigraphic envelope of the sampled skulls, not an independently established global genus duration. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Edmontosaurus uses Campione, N.E.; Evans, D.C. (2011) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Latest Cretaceous North American edmontosaur cranial sample; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
头骨比例测量支持研究提出的解释，但个体发育解释和保存效应属于推断，且仅限于所采样的头骨。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
研究测量广泛头骨样本并检验个体发育变异，但物种划分仍是对连续生长数据的解释。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Edmontosaurus 采用 Campione, N.E.; Evans, D.C.（2011）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Latest Cretaceous North American edmontosaur cranial sample；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在 Campione 与 Evans 的头骨样本中，历史上归为 Anatotitan copei 的长而低的头骨处于或接近 Edmontosaurus annectens 的变异范围；作者以随大小变化的异速生长和个体差异解释这些比例，并指出压扁可能使头骨形态更加突出。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
埃德蒙顿龙由 Campione 与 Evans 的头骨生长和变异样本限定，该研究支持较少的北美最晚白垩世物种集合；形态测量结果不归类每个鸭嘴龙科头骨，也不定义精确属级端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Edmontosaurus 仅以 73–66 Ma 展示为所采样头骨的地层包络，而非独立建立的全球属级延续期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the stratigraphic envelope of the sampled skulls, not an independently established global genus duration; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Cranial Growth and Variation in Edmontosaurs (Dinosauria: Hadrosauridae): Implications for Latest Cretaceous Megaherbivore Diversity in North America directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
