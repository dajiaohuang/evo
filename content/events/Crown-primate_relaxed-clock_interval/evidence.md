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
    startAge: 79.2
    endAge: 70
    regions:
      - 372-species primate phylogeny
    clades:
      - Primates
      - Strepsirrhini
      - Haplorhini
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Crown-primate_relaxed-clock_interval/evidence.md#/records/claims/0
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
          - referenceId: dos-reis-2018-primate-clock
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
          - referenceId: dos-reis-2018-primate-clock
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
        path: content/events/Crown-primate_relaxed-clock_interval
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
      reviewedAgainstReferenceVersion: dos-reis-2018-primate-clock @ DOI 10.1093/sysbio/syy001
      referenceLinks:
        - referenceId: dos-reis-2018-primate-clock
          relation: supports
          pages: 594–615
          figure: Figures 1–5; Table 3; Supplementary spreadsheet
          quoteLocator: "Results: A Timeline of Primate Evolution; Effect of calibration strategy and relaxed-clock model"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Crown-primate relaxed-clock interval

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The 372-species analysis under the autocorrelated clock and calibration strategy A yields 79.2–70.0 Ma for crown Primates and later intervals for major crown subclades.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:primate-crown-clock-model
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
594–615
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–5; Table 3; Supplementary spreadsheet
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Results: A Timeline of Primate Evolution; Effect of calibration strategy and relaxed-clock model
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
This is a model posterior, not a fossil occurrence: strategy B gives 71.4–63.9 Ma, and clock choice, fossil priors and taxon sampling materially change deep-node estimates.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:primate-crown-clock-model
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
594–615
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–5; Table 3; Supplementary spreadsheet
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Results: A Timeline of Primate Evolution; Effect of calibration strategy and relaxed-clock model
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Under the cited autocorrelated-clock analysis and calibration strategy A, the posterior interval for crown Primates is 79.2–70.0 Ma; this model interval is not a fossil first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Medium confidence reflects reproducible, explicitly sampled phylogenomic modelling while preserving the strong dependence of deep-node ages on calibration strategy, clock model and fossil priors.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
中等置信度反映可复现且取样范围明确的系统发育基因组模型，同时保留深层节点年代对校准策略、时钟模型和化石先验的强依赖。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在所引自相关分子钟分析及校准策略 A 下，灵长目冠群的后验区间为 7,920 万至 7,000 万年前；这一模型区间不是化石首次出现时间。
<!-- /evo:text -->
