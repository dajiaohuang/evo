---
schemaVersion: 1
kind: evidence
records:
  event:
    title:
      markdown: page.en.md
      field: /records/event/title
      format: heading
    titleZh:
      markdown: page.zh.md
      field: /records/event/titleZh
      format: heading
    category: calibration
    startAge: 161.5
    endAge: 155.6
    regions:
      - Jagua Formation, Cuba; Bayesian relaxed-clock model
    clades:
      - Testudines
      - Pleurodira
      - Caribemys oxfordiensis
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Caribemys_anchors_a_conservative_crown-turtle_calibration/evidence.md#/records/claims/0
    evidenceItems:
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/0/claimIds/0
        referenceLinks:
          - referenceId: joyce-2013-turtle-calibrations
            relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/relation
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/quoteLocator
    uncertaintyItems:
      - statement:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/uncertaintyItems/0/claimIds/0
        referenceLinks:
          - referenceId: joyce-2013-turtle-calibrations
            relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Caribemys_anchors_a_conservative_crown-turtle_calibration
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Joyce et al. 2013 DOI 10.1666/12-149
      referenceLinks:
        - referenceId: joyce-2013-turtle-calibrations
          relation: supports
          pages: 614–617, 626–629
          figure: Figures 1–2 and 5; Table 1
          quoteLocator: pp. 615–617 and 626–629, Table 1 and Figs. 1–2, 5; Testudines (Node 1), Age of the crown Testudines and Conclusions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Caribemys anchors a conservative crown-turtle calibration

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
MNHNCu P-3209, the holotype of Caribemys oxfordiensis from the Oxfordian Jagua Formation, was treated as a total-group pleurodire inside crown Testudines and used to set a 155.6 Ma hard minimum for Node 1.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:caribemys-crown-turtle-calibration
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
615–617
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–2; Table 1
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Results: Calibration constraints, Testudines (Node 1)
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The 194.90–231.41 Ma posterior interval and 212.33 Ma mean are relaxed-clock outputs under stated priors and topology, not dates measured from MNHNCu P-3209; the analysis explicitly could not resolve whether the turtle crown originated in the Triassic or Jurassic.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:caribemys-crown-turtle-calibration
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
614–617, 626–629
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Table 1; Figure 5
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Materials and Methods; Age of the crown Testudines; Conclusions
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Caribemys holotype MNHNCu P-3209 supports a 155.6 Ma hard minimum for crown Testudines in the cited calibration scheme, whereas the older posterior crown interval is conditional on topology, molecular data, priors and clock model.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The fossil identity and calibration logic are explicitly justified, but minimum age is not crown origin and posterior estimates change with analytical assumptions; the paper does not resolve a Triassic versus Jurassic crown origin.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
化石身份与校准逻辑得到明确论证，但最小年龄并非冠群起源，后验估计随分析假设变化；论文没有解决冠群起源于三叠纪还是侏罗纪。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Caribemys 正模 MNHNCu P-3209 在所引校准方案中支持龟类冠群 1.556 亿年前的硬最小年龄；更老的冠群后验区间则取决于拓扑、分子数据、先验和时钟模型。
<!-- /evo:text -->
