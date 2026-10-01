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
    category: origin
    startAge: 152.99
    endAge: 151.46
    regions:
      - Global fossil and molecular sample
    clades:
      - Crown Angiospermae
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Calibration-sensitive_crown-angiosperm_timescale/evidence.md#/records/claims/0
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
          - relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/relation
            referenceId: wu-2026-angiosperm-timescale
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/figure
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
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            referenceId: wu-2026-angiosperm-timescale
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator
      - statement:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/1/statement
        relation:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/1/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/uncertaintyItems/1/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/relation
            referenceId: wu-2026-angiosperm-timescale
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Calibration-sensitive_crown-angiosperm_timescale
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
      reviewedAgainstReferenceVersion: Wu et al. 2026 DOI 10.1038/s41477-026-02311-x
      referenceLinks:
        - relation: supports
          referenceId: wu-2026-angiosperm-timescale
          pages: 1242–1251
          figure: Figures 1–5
          quoteLocator: "Results: Age estimation and Molecular clock analyses; Discussion; Conclusion"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Calibration-sensitive crown-angiosperm timescale

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
25,685 fossil occurrences informed 110 calibrations on a 644-species, 83-gene phylogeny
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:crown-angiosperm-calibration-sensitivity
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
1242–1251
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–5
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The displayed 152.99–151.46 Ma interval is the authors' preferred hard-bound strategy; soft-bound and skew-T strategies yielded 172.53–158.45 Ma and 261.26–212.30 Ma
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:crown-angiosperm-calibration-sensitivity
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 2–3
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Molecular clock analyses; Discussion
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
The result is a calibration-dependent crown model, not a directly observed Jurassic flower or fossil first appearance
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:crown-angiosperm-calibration-sensitivity
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Main; Results; Conclusion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 2026 analysis used 25,685 non-pollen fossil occurrences to construct 110 calibration densities for a 644-species molecular tree; its preferred hard-bound strategy estimated crown Angiospermae at 152.99–151.46 Ma, while less constrained strategies yielded far older intervals, so the result is a calibration-dependent model rather than a fossil first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The fossil dataset, molecular matrix and alternative calibration strategies are explicitly documented, and the preferred result is narrow. Medium confidence preserves the very large sensitivity to calibration-density treatment and prevents the preferred posterior from becoming an observed Jurassic body fossil or a universal crown age.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
化石数据集、分子矩阵和三种替代校准方案均有明确记录，偏好方案的区间很窄。中等置信度保留了结果对校准密度处理的巨大敏感性，防止把偏好后验误写成已观察到的侏罗纪植物体化石或普适冠群年龄。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
2026 年一项分析使用 25,685 条非花粉化石出现记录，为含 644 个物种的分子树构建 110 个校准密度；其偏好的硬边界方案将被子植物冠群估计为 152.99–151.46 Ma，而约束较弱的方案给出远老得多的区间，因此该结果是依赖校准的模型，不是化石首现。
<!-- /evo:text -->
