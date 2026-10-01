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
    category: genomics
    startAge: 0.001
    endAge: 0
    regions:
      - Living female platypus Glennie; genome assembly and chromosome map
    clades:
      - Ornithorhynchus anatinus
      - Monotremata
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Platypus_draft_genome_and_comparative_mosaic/evidence.md#/records/claims/0
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
          - referenceId: warren-2008-platypus-genome
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
          - referenceId: warren-2008-platypus-genome
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
        path: content/events/Platypus_draft_genome_and_comparative_mosaic
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
      reviewedAgainstReferenceVersion: Warren et al. 2008 DOI 10.1038/nature06936
      referenceLinks:
        - referenceId: warren-2008-platypus-genome
          relation: supports
          pages: 175–183
          figure: Figure 1; Table 1
          quoteLocator: Sequencing and assembly; Comparative genome analysis; Methods; Supplementary Notes 1–24
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Platypus draft genome and comparative mosaic

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Approximately 26.9 million reads produced a 1.84-gigabase draft at about sixfold coverage, with 437 megabases ordered on 20 chromosomes and 18,527 predicted protein-coding genes.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:platypus-genome-mosaic
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
175–183
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figure 1; Table 1
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Sequencing and assembly; Comparative genome analysis; Methods
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Assembly gaps, one-individual sampling, annotation and comparative models prevent direct reconstruction of an ancestral genome or single-gene explanations for organismal traits.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:platypus-genome-mosaic
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
175–183
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figure 1; Table 1
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Sequencing and assembly; Comparative genome analysis; Methods
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The approximately sixfold whole-genome assembly from the female platypus Glennie combined 26.9 million reads into a 1.84-gigabase draft and comparative annotations; these data sample one individual and do not directly reconstruct an ancestral monotreme genome or prove single-gene causes for organismal traits.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Sequence reads, assembly statistics and chromosome assignments are directly documented, but annotation, orthology, molecular dating and trait interpretation are computational comparisons.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
读段、组装统计和染色体定位有直接记录，但注释、直系同源、分子定年与性状解释属于计算比较。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
雌性鸭嘴兽 Glennie 的约六倍全基因组装配将 2690 万条读段组成 18.4 亿碱基草图并进行比较注释；这些数据只取样一个个体，不能直接复原祖先单孔类基因组，也不能证明单基因导致整体性状。
<!-- /evo:text -->
