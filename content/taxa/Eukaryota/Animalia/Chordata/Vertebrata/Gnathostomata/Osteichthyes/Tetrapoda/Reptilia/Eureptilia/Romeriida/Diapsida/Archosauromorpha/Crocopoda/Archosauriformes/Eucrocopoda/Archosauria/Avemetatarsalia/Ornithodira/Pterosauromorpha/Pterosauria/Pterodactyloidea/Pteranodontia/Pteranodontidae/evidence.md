---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pteranodontidae
    commonName: Pteranodons
    commonNameZh: 无齿翼龙类
    rank: family
    taxonId: txn:52933
    firstAppearance: 86
    lastAppearance: 72
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Pteranodontidae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: kellner-2010-pteranodontidae concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: kellner-2010-pteranodontidae
          relation: supports
          pages: 1063–1084
          figure: Figures 1–6
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Pteranodontidae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: kellner-2010-pteranodontidae; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: kellner-2010-pteranodontidae
          pages: 1063–1084
          figure: Figures 1–6
          quoteLocator: Systematic descriptions and stratigraphic discussion, especially pp. 1067–1082
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Pteranodontidae
      rangeKind: global-composite
      taxonomicConcept: Pteranodontid specimens reassessed by Kellner 2010
      geographicScope: Niobrara and Pierre Shale units of the Western Interior, United States
      olderMa: 89.8
      youngerMa: 80.5
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontia/Pteranodontidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: kellner-2010-pteranodontidae
          locator: 1063–1084; Figures 1–6; Systematic descriptions and stratigraphic discussion, especially pp. 1067–1082
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Pteranodontidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pteranodontidae is represented by Kellner’s specimen-based reassessment and named taxonomic sample; the revised assignments and two new taxa are study-bounded and do not constitute a complete family-wide range audit or ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The paper directly compares named skulls, diagnoses and stratigraphic context across the pteranodontid sample. Medium confidence preserves competing genus and species interpretations and withholds family-wide endpoints.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/0/quoteLocator -->
pp. 1063–1065 abstract and taxonomic scope; pp. 1067–1078 systematic descriptions; pp. 1079–1082 species recognition and stratigraphic discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Kellner’s specimen-based revision samples pteranodontids from Coniacian–Campanian Western Interior units, supporting an 89.8–80.5 Ma study window rather than a complete family range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Pteranodontid specimens reassessed by Kellner 2010: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
论文直接比较无齿翼龙科取样中的具名头骨、诊断与地层背景。中等置信度保留竞争性的属种解释，并不推定科级端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Pteranodontid specimens reassessed by Kellner 2010：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
无齿翼龙科由 Kellner 基于标本的重新评估和具名分类样本表示；修订归属与两个新类群受研究范围限制，不构成完整科级范围审计或祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Kellner 的标本修订采样西部内陆科尼亚克期至坎潘期的无齿翼龙科材料，支持 8980–8050 万年前的研究窗口，而不是完整科级延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Rounded Coniacian–Campanian study-sample envelope; taxonomic assignments differ among authors.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval covers the named specimen revision and not every pteranodontid occurrence.
<!-- /evo:text -->
