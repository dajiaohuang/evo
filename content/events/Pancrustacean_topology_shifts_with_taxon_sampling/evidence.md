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
      - Ninety transcriptomes and fifteen genomes across Pancrustacea
    clades:
      - Pancrustacea
      - Malacostraca
      - Allotriocarida
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Pancrustacean_topology_shifts_with_taxon_sampling/evidence.md#/records/claims/0
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
          - referenceId: bernot-2023-pancrustacea-sampling
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
          - referenceId: bernot-2023-pancrustacea-sampling
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
        path: content/events/Pancrustacean_topology_shifts_with_taxon_sampling
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
      reviewedAgainstReferenceVersion: bernot-2023-pancrustacea-sampling DOI-linked primary source
      referenceLinks:
        - referenceId: bernot-2023-pancrustacea-sampling
          relation: supports
          pages: msad175
          figure: Figures 2–4; Table 1; Supplementary Tables S1–S4
          quoteLocator: Data set comparison; Taxon sampling experiments; Results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Pancrustacean topology shifts with taxon sampling

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The final 105-taxon matrix includes 90 transcriptomes, 15 genomes and 576 protein-coding genes, compared with a 98-taxon alternative assembled through the same pipeline.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:pancrustacea-taxon-sampling-sensitivity
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
msad175
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 2–4; Table 1
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Dataset comparison and results
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Rejected and recovered clades differ among sampled matrices and models; divergence estimates use thirteen vetted calibrations but remain clock outputs.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:pancrustacea-taxon-sampling-sensitivity
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
msad175
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 3–4
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Topological comparisons and divergence-time analysis
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Using identical ortholog-selection methods, 98- and 105-taxon pancrustacean matrices yield materially different deep topologies; 90 transcriptomes, 15 genomes and 576 protein-coding genes therefore demonstrate sampling sensitivity rather than a final universal crustacean tree.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The compared matrices, occupancies and alternative analyses are directly reported and support the methodological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
两套类群矩阵、直系同源基因占有率与替代分析可直接比较，足以支持取样敏感性而非唯一最终树。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
采用相同直系同源基因筛选方法，含 98 与 105 个分类单元的泛甲壳类矩阵得到实质不同的深层拓扑；因此，90 个转录组、15 个基因组和 576 个蛋白编码基因展示的是取样敏感性，而非最终通用的甲壳类系统树。
<!-- /evo:text -->
