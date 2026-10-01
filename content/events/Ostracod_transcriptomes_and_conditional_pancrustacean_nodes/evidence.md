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
      - Nine new ostracod transcriptomes and combined pancrustacean matrices
    clades:
      - Ostracoda
      - Oligostraca
      - Pancrustacea
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Ostracod_transcriptomes_and_conditional_pancrustacean_nodes/evidence.md#/records/claims/0
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
          - referenceId: oakley-2013-ostracod-phylotranscriptomics
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
          - referenceId: oakley-2013-ostracod-phylotranscriptomics
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
        path: content/events/Ostracod_transcriptomes_and_conditional_pancrustacean_nodes
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: oakley-2013-ostracod-phylotranscriptomics DOI-linked primary source
      referenceLinks:
        - referenceId: oakley-2013-ostracod-phylotranscriptomics
          relation: supports
          pages: 215–233
          figure: Figures 1–5; Tables 1–5
          quoteLocator: Transcriptome sequencing; Data subsets; Fossil placement; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Ostracod transcriptomes and conditional pancrustacean nodes

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Nine new 454 transcriptomes were combined with morphology, fossils, ESTs, genomes, mitochondrial proteins and ribosomal data.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:ostracod-phylotranscriptome-topology
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
215–233
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–5; Tables 1–5
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Data acquisition and combined analyses
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Ostracod monophyly and several deep nodes change when fast genes, distant outgroups or data partitions change; no displayed branch is a fossil observation.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:ostracod-phylotranscriptome-topology
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
215–233
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Conditional data combination and sensitivity results
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Nine new ostracod transcriptomes combined with morphology, fossils and existing sequence partitions support major pancrustacean groupings in selected analyses, but ostracod monophyly and several deep nodes change with gene-rate filters, outgroups and data combination.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The datasets and sensitivity analyses are explicit; the claim reports conditional support rather than promoting one tree to uncontested fact.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
转录组、形态矩阵和敏感性分析均明确公开；结论保留基因速率筛选、外群和数据组合造成的拓扑差异。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
九个新介形类转录组与形态、化石及既有序列分区结合后，在部分分析中支持主要泛甲壳类分组；但介形类单系性和若干深层节点会随基因速率过滤、外群和数据组合而改变。
<!-- /evo:text -->
