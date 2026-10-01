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
    category: innovation
    startAge: 0
    endAge: 0
    regions:
      - Single male Octopus bimaculoides genome and twelve tissue transcriptomes
    clades:
      - Coleoidea
      - Octopus bimaculoides
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Octopus_genome_innovation_test/evidence.md#/records/claims/0
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
          - referenceId: albertin-et-al-2015-octopus-genome
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
          - referenceId: albertin-et-al-2015-octopus-genome
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
        path: content/events/Octopus_genome_innovation_test
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: albertin-et-al-2015-octopus-genome DOI-linked primary source
      referenceLinks:
        - referenceId: albertin-et-al-2015-octopus-genome
          relation: supports
          pages: 220–224
          figure: Figures 1–3; Extended Data Figures 1–9; Supplementary Notes
          quoteLocator: Genome assembly; gene-family analysis; tissue transcriptomes; whole-genome duplication test
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Octopus genome innovation test

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The assembly covers more than 97% of expressed protein-coding genes and supports protocadherin and C2H2 expansions, extensive rearrangement and tissue-biased cephalopod-specific genes.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:octopus-genome-innovation
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
220–224
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3; Extended Data Figures 1–9
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Assembly; gene families; genome linkage; transcriptomes
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Comparative association does not prove that any one expansion caused arms, suckers, eyes or neural complexity, and the study found no whole-genome duplication.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:octopus-genome-innovation
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
220–224
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Mechanism discussion and duplication test
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Octopus bimaculoides assembly and 12 RNA transcriptomes document expanded protocadherin and C2H2 zinc-finger families, extensive rearrangement and tissue-specific expression patterns. The study found no evidence for proposed whole-genome duplication, but did not rule out duplication followed by extensive gene loss.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome coverage, gene-family comparisons and tissue expression are documented datasets; causal language is bounded because these associations do not experimentally recreate cephalopod body-plan evolution.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组覆盖、基因家族比较与组织表达均有数据支持；这些关联不等于实验重建了头足类体制演化。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
加州双斑蛸的基因组组装和 12 个 RNA 转录组显示原钙黏蛋白与 C2H2 锌指家族扩张、广泛重排和组织特异表达模式。研究未发现支持所提出的全基因组复制的证据，但未排除复制后发生大量基因丢失。
<!-- /evo:text -->
