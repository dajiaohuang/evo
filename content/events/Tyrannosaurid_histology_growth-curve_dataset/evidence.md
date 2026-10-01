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
    category: adaptation
    startAge: 83
    endAge: 66
    regions:
      - North American tyrannosaurid specimen series
    clades:
      - Tyrannosauridae
      - Tyrannosaurus
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Tyrannosaurid_histology_growth-curve_dataset/evidence.md#/records/claims/0
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
          - referenceId: erickson-2004-tyrannosaurid-growth
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
          - referenceId: erickson-2004-tyrannosaurid-growth
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
        path: content/events/Tyrannosaurid_histology_growth-curve_dataset
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: erickson-2004-tyrannosaurid-growth @ DOI 10.1038/nature02699
      referenceLinks:
        - referenceId: erickson-2004-tyrannosaurid-growth
          relation: supports
          pages: 772–775
          figure: Figures 1–3; Supplementary Information and specimen tables
          quoteLocator: Histological methods; Growth curves; Life-history comparisons
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Tyrannosaurid histology growth-curve dataset

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Growth marks in a catalogued tyrannosaurid specimen series including FMNH PR 2081 provide histological observations; ages, asymptotic masses and a peak Tyrannosaurus growth rate near 2.1 kilograms per day are fitted estimates conditional on missing marks and body-mass equations.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:tyrannosaurid-histology-growth-curves
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
772–775
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Information and specimen tables
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Histological methods; Growth curves; Life-history comparisons
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The 83–66 Ma atlas window spans sampled tyrannosaurids, not one population; the fitted curve is not a universal dinosaur growth schedule.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:tyrannosaurid-histology-growth-curves
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
772–775
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Information and specimen tables
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Histological methods; Growth curves; Life-history comparisons
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Growth marks in a catalogued tyrannosaurid specimen series including FMNH PR 2081 provide histological observations; ages, asymptotic masses and a peak Tyrannosaurus growth rate near 2.1 kilograms per day are fitted estimates conditional on missing marks and body-mass equations.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Histological marks are repeatable observations, but retrospective ageing, mass estimates and logistic curve parameters are model-dependent and have since been revisited.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
组织学生长线可重复观察，但回推年龄、体重估计与逻辑斯蒂曲线参数依赖模型，且后来已有重新分析。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
包含 FMNH PR 2081 在内的编目暴龙科标本序列，其生长线提供组织学观察；年龄、渐近体重及霸王龙约每日 2.1 千克的峰值生长速率，都是受缺失生长线与体重方程制约的拟合估计。
<!-- /evo:text -->
