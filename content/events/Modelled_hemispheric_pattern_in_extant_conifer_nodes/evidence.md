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
    category: radiation
    startAge: 8.7
    endAge: 5.2
    regions:
      - Northern and Southern Hemisphere living-species sample
    clades:
      - Conifers
      - Araucariaceae
      - Pinaceae
      - Cupressoideae
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Modelled_hemispheric_pattern_in_extant_conifer_nodes/evidence.md#/records/claims/0
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
            referenceId: leslie-2012-conifer-hemispheres
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
            referenceId: leslie-2012-conifer-hemispheres
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
            referenceId: leslie-2012-conifer-hemispheres
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Modelled_hemispheric_pattern_in_extant_conifer_nodes
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Leslie et al. 2012 DOI 10.1073/pnas.1213621109
      referenceLinks:
        - relation: supports
          referenceId: leslie-2012-conifer-hemispheres
          pages: 16217–16221
          figure: Figures 1–2
          quoteLocator: Results; Discussion; Materials and Methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Modelled hemispheric pattern in extant conifer nodes

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
489 living conifer species and 16 fossil calibrations yield combined medians of 8.7 versus 5.2 Ma
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:conifer-hemisphere-node-pattern
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
16217–16221
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–2
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The displayed endpoints are comparative median node ages, not the duration of one radiation event or the origin of Araucariaceae
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:conifer-hemisphere-node-pattern
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Results and Discussion
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
Absolute ages may be biased young, Gnetales were excluded and the proposed climate mechanism remains interpretive
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:conifer-hemisphere-node-pattern
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Discussion; Materials and Methods
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In a fossil-calibrated time tree sampling 489 living conifer species, predominantly Southern Hemisphere lineages including Araucariaceae had an older combined median extant-node age than sampled Northern Hemisphere Pinaceae and Cupressoideae, 8.7 versus 5.2 Ma; this relative modelled pattern is not a fossil range or family-origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The comparative result is reported from broad living-species sampling and 16 fossil calibrations, and the authors regard the hemispheric difference as robust to several checks. Absolute node ages may be biased young, Gnetales were excluded and sequence coverage was incomplete, so causal climate interpretation remains a hypothesis.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
比较结果来自广泛的现生种取样与 16 个化石校准，作者认为半球差异通过了多项稳健性检查。但绝对节点年龄可能偏年轻，买麻藤目被排除且序列覆盖不完整，因此气候因果解释仍是假说。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在一棵取样 489 个现生针叶树物种的化石校准时间树中，以南半球为主、包括南洋杉科在内的谱系，其现生节点合并中位年龄比取样的北半球松科和柏亚科更老，分别为 8.7 Ma 与 5.2 Ma；这一相对模型格局不是化石延限或科起源年代。
<!-- /evo:text -->
