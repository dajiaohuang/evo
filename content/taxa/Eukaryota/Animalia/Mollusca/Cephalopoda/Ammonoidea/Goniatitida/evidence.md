---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Goniatitida
    commonName: Goniatites
    commonNameZh: 棱菊石类
    rank: order
    taxonId: txn:13602
    firstAppearance: 409
    lastAppearance: 252
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Goniatitida
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: korn-2005-goniatitidae
      referenceLinks:
        - referenceId: korn-2005-goniatitidae
          relation: supports
          pages: 356–365
          quoteLocator: Figures 1–8; occurrence review and biogeographic discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Goniatitida
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
      reviewedAgainstReferenceVersion: Korn et al. 2005 DOI 10.1666/0022-3360(2005)079<0356:TLAFGT>2.0.CO;2
      referenceLinks:
        - relation: supports
          referenceId: korn-2005-goniatitidae
          pages: 356–365
          figure: Figures 2–8
          quoteLocator: "Abstract: early Late Viséan assemblage; pp. 357–359; systematic descriptions"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Goniatitida
      rangeKind: global-composite
      taxonomicConcept: Goniatitida — early Late Viséan Moroccan study sample
      geographicScope: Early Late Viséan ammonoid assemblage from Morocco
      olderMa: 346.7
      youngerMa: 330.3
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
        - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Ammonoidea/Goniatitida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: korn-2005-goniatitidae
          locator: 356–365; Abstract, early Late Viséan assemblage; pp. 357–359 and Figure 2; systematic descriptions and Figures 3–8
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Goniatitida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mississippian Goniatitidae and Entogonitidae material documents a family-level distribution and tests a Lazarus-pattern interpretation within Goniatitida; it is not the order's global history.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Described occurrences and explicit comparisons support the regional family-level pattern, while the narrow taxonomic sample blocks order-wide extrapolation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Korn et al. describe an early Late Viséan Moroccan ammonoid assemblage within Goniatitida; the atlas conservatively displays the enclosing Viséan interval, 346.7–330.3 Ma, as a study-sample window rather than an order-wide FAD or LAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The source names the regional assemblage and relative age directly, while the numerical endpoints are conservative ICS stage bounds. Medium confidence does not extend beyond that sampled assemblage.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已描述的出现记录与明确比较支持区域科级格局，但狭窄分类样本阻止目级外推。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
来源直接给出区域组合及相对年代，数值端点则是保守的 ICS 阶界限。中等置信度不外推到该取样组合之外。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
密西西比亚纪 Goniatitidae 与 Entogonitidae 材料记录了棱菊石目内部科级分布并检验“拉撒路”格局解释；它不是整个目的全球历史。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Korn 等描述了棱菊石目内一个来自摩洛哥、时代为维宪期晚期早段的菊石组合；图谱保守显示包容它的整个维宪期 3.467–3.303 亿年前，作为研究样本窗口，而非该目的全球首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The full Viséan stage envelope conservatively contains the source-described early Late Viséan sample; it is not an order-wide Goniatitida FAD or LAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Korn et al. directly describe an early Late Viséan assemblage within Goniatitida; ICS v2026/06 supplies the enclosing Viséan numerical bounds.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
