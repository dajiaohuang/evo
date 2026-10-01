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
    category: phylogenetic
    startAge: 0
    endAge: 0
    regions:
      - 87 living cetacean species sampled in the 2009 analysis
    clades:
      - Neoceti
      - Mysticeti
      - Odontoceti
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Extant-cetacean_molecular_supermatrix/evidence.md#/records/claims/0
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
          - referenceId: mcgowen-2009-cetacean-supermatrix
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
          - referenceId: mcgowen-2009-cetacean-supermatrix
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
        path: content/events/Extant-cetacean_molecular_supermatrix
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
      reviewedAgainstReferenceVersion: McGowen et al. 2009 DOI 10.1016/j.ympev.2009.08.018
      referenceLinks:
        - referenceId: mcgowen-2009-cetacean-supermatrix
          relation: supports
          pages: 891–906
          figure: Table 1; Figures 1–4; Supplementary Figures S1–S3
          quoteLocator: Supermatrix assembly; Phylogeny; Divergence estimation
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Extant-cetacean molecular supermatrix

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The authors merged 37 new RAG1 and PRM1 sequences with 45 nuclear loci, mitochondrial genomes and transposons to sample 87 of 89 cetacean species recognized in their 2009 framework.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:extant-cetacean-supermatrix-tree
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
891–906
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Table 1; Figures 1–4; Supplementary Figures S1–S3
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Data assembly; Phylogenetic analyses; Divergence estimation
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The topology and ages are outputs of a 2009 sample, partition scheme, calibration set and relaxed-clock models; they do not sequence every species accepted by COL26.8 or convert model nodes into fossil observations.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:extant-cetacean-supermatrix-tree
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
893–904
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 2–4; Supplementary Methods and trees
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Taxon sampling; Model selection; Calibration and divergence discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 42,335-character supermatrix sampled 87 of 89 cetacean species recognized in 2009 and produced a model-based living-cetacean tree and relaxed-clock estimates; it is neither current COL26.8 coverage nor direct fossil time.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The assembled loci, sampled taxa and model procedures are explicit and broad for their time, while topology and dates remain sensitive to historical taxonomy, missing species, partitions, calibrations and clock models.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
组合位点、取样类群与模型过程均有明确记录，且在当时覆盖广泛；但拓扑与年代仍受历史分类、缺失物种、分区、校准和时钟模型影响。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一套 42,335 字符的超级矩阵取样了 2009 年框架认可的 89 个鲸类物种中的 87 个，并产生基于模型的现生鲸类树与松弛时钟估计；它既不是当前 COL26.8 覆盖，也不是直接化石时间。
<!-- /evo:text -->
