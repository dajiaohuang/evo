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
    startAge: 0
    endAge: 0
    regions:
      - Global living-bird genome sample
    clades:
      - Neoaves
      - Neornithes
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Neoavian_whole-genome_topology/evidence.md#/records/claims/0
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
          - referenceId: jarvis-2014-avian-phylogenomics
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
          - referenceId: jarvis-2014-avian-phylogenomics
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
        path: content/events/Neoavian_whole-genome_topology
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Jarvis, E.D. et al. 2014 DOI 10.1126/science.1253451
      referenceLinks:
        - referenceId: jarvis-2014-avian-phylogenomics
          relation: supports
          pages: 1320–1331
          figure: Figures 1–4; Supplementary phylogenies
          quoteLocator: Genome-scale datasets; Species-tree analyses; Incomplete lineage sorting
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Neoavian whole-genome topology

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The study compares whole-genome and reduced datasets for 48 species and reports major clades including Passerea and Columbea across multiple analyses.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:neoavian-genome-topology
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
1320–1331
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary phylogenies
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Genome-scale datasets; Species-tree analyses; Incomplete lineage sorting
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Some deep branches vary with data type and method because incomplete lineage sorting and convergence complicate inference; 48 representatives do not constitute a complete living-species tree.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:neoavian-genome-topology
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
1320–1331
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary phylogenies
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Genome-scale datasets; Species-tree analyses; Incomplete lineage sorting
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Whole-genome analyses of 48 bird species representing all neoavian orders then recognized recover major early neoavian groupings while exposing difficult branches associated with incomplete lineage sorting and method choice; the tree is sampled extant topology, not fossil chronology or complete species coverage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome-scale matrices and multiple inference methods provide strong reproducible evidence. Rapid early branching, limited species-per-order sampling and gene-tree conflict keep individual deep nodes uncertain.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组级矩阵和多种推断方法提供强可复现证据；快速早期分支、每目有限物种取样和基因树冲突使个别深层节点仍不确定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对代表当时全部今颚鸟类目的 48 种鸟进行全基因组分析，恢复若干早期大支并揭示与不完全谱系分选和方法选择有关的困难节点；该树是取样现生拓扑，而非化石年表或完整物种覆盖。
<!-- /evo:text -->
