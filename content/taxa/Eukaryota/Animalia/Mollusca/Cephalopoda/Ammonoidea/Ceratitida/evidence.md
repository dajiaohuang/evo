---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ceratitida
    commonName: Ceratites
    commonNameZh: 齿菊石类
    rank: order
    taxonId: txn:14000
    firstAppearance: 280
    lastAppearance: 201
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ceratitida
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: shigeta-2001-ceratitida-origin
      referenceLinks:
        - referenceId: shigeta-2001-ceratitida-origin
          relation: supports
          pages: 201–213
          quoteLocator: Figures 1–8; internal-shell comparisons and phylogenetic inference
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ceratitida
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
      reviewedAgainstReferenceVersion: Shigeta et al. 2001 DOI 10.2517/prpsj.5.201
      referenceLinks:
        - relation: supports
          referenceId: shigeta-2001-ceratitida-origin
          pages: 201–213
          figure: Figures 1–8
          quoteLocator: "Introduction, pp. 201–202: ranged from early Permian to end of Triassic"
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for the named stages and periods used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ceratitida
      rangeKind: global-composite
      taxonomicConcept: Ceratitida as delimited by Shigeta et al. 2001
      geographicScope: Early Permian through end-Triassic range stated in the comparative study
      olderMa: 298.9
      youngerMa: 201.4
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
        - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Ceratitida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: shigeta-2001-ceratitida-origin
          locator: 201–213; Introduction, pp. 201–202, Ceratitida ranged from early Permian to end of Triassic; Figures 1–8
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Ceratitida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Early internal-shell characters are used to infer relationships near the origin of sampled Ceratitida; this comparative inference is not a directly observed ancestor or a complete global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Internal shell structures provide explicit comparative characters, while preservation and taxon sampling keep the inferred origin hypothesis-dependent.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Shigeta et al. explicitly state that Ceratitida ranged from the Early Permian to the end of the Triassic; the atlas converts those named period bounds to 298.9–201.4 Ma with ICS v2026/06 without implying direct dates, continuous preservation or ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary comparative study states both period-scale endpoints. Medium confidence reflects the coarse verbal bounds, changing numerical standards and the difference between a stated range and a global occurrence audit.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
内壳结构提供明确比较性状，但保存与类群取样使起源推断仍依赖假说。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
一手比较研究明确给出两个纪级端点。中等置信度反映文字界限较粗、数值标准会变化，也区分陈述延限与全球出现记录审计。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
早期内壳性状被用于推断取样齿菊石目近起源关系；这一比较推断不是直接观察的祖先，也不是完整全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Shigeta 等明确陈述齿菊石目从早二叠世延续至三叠纪末；图谱依据 ICS 2026/06 将这些具名纪级界限换算为 2.989–2.014 亿年前，不暗示直接测年、连续保存或祖先关系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The source states period-scale verbal bounds; numerical endpoints are ICS v2026/06 conversions and do not imply continuous preservation or direct ancestry.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Shigeta et al. explicitly state that Ceratitida ranged from the Early Permian to the end of the Triassic.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
