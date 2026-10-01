---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ammonoidea
    commonName: Ammonites
    commonNameZh: 菊石类
    rank: subclass
    taxonId: txn:14505
    firstAppearance: 409
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea
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
      reviewedAgainstReferenceVersion: mcgowan-smith-2007-ammonoids
      referenceLinks:
        - referenceId: mcgowan-smith-2007-ammonoids
          relation: supports
          pages: 573–590
          quoteLocator: Figures 1–7; cladistic analysis across the boundary
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea
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
      reviewedAgainstReferenceVersion: McGowan and Smith 2007 DOI 10.1111/j.1475-4983.2007.00653.x
      referenceLinks:
        - relation: supports
          referenceId: mcgowan-smith-2007-ammonoids
          pages: 573–590
          figure: Text-figure 7
          quoteLocator: Abstract; taxon matrix; comparison of the cladogram with the geological timescale
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea
      rangeKind: global-composite
      taxonomicConcept: Ammonoidea — Permian–Triassic boundary study-sample window
      geographicScope: Middle and Late Permian through Induan ammonoids sampled by McGowan and Smith
      olderMa: 274.4
      youngerMa: 250.8
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
        - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: mcgowan-smith-2007-ammonoids
          locator: 573–590; Abstract; taxon matrix; Text-figure 7, cladogram compared with the geological timescale
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Ammonoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A cladistic analysis of ammonoids spanning the Permian–Triassic boundary tests survival and turnover in that sampled interval; it neither covers all Ammonoidea nor fixes their origin and extinction endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The boundary-focused character matrix directly supports local topology, while its interval and taxon sampling preclude a whole-group range claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
McGowan and Smith sample Middle–Late Permian and Induan ammonoids across the Permian–Triassic boundary, supporting a Roadian-to-end-Induan study window of 274.4–250.8 Ma rather than the full Ammonoidea range, a divergence date or continuous global occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The taxon matrix and geological-timescale comparison expose the sampled interval directly. Medium confidence is limited to that study window and its current ICS conversion.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
界线聚焦的性状矩阵直接支持局部拓扑，但其时段和类群取样不能支撑全群范围主张。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
类群矩阵及其与地质时间尺度的比较直接展示了取样区间。中等置信度仅限于该研究窗口及其当前 ICS 数值换算。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
跨二叠纪—三叠纪界线的菊石支序分析检验了该取样区间的存续与更替；它既不覆盖全部菊石亚纲，也不确定其起源和灭绝端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
McGowan 与 Smith 取样了二叠纪中晚期及印度期跨二叠纪—三叠纪界线的菊石，因此支持 2.744–2.508 亿年前从罗德期到印度期末的研究窗口，而不是菊石亚纲完整延限、分化时间或全球连续占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This Roadian-to-end-Induan envelope is the cited cladistic sample window, not the full Ammonoidea range, a divergence estimate or uninterrupted global occupancy.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The paper directly analyzes Middle–Late Permian and Induan ammonoids across the Permian–Triassic boundary; current ICS boundaries convert that named interval to numerical ages.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
