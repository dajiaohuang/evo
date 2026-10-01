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
      - Global extant-species model dataset
    clades:
      - Amphibia
      - Anura
      - Caudata
      - Gymnophiona
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Extant_7,238-species_amphibian_timetree/evidence.md#/records/claims/0
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
            referenceId: jetz-2018-amphibian-tree
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
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            referenceId: jetz-2018-amphibian-tree
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
        path: content/events/Extant_7,238-species_amphibian_timetree
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
      reviewedAgainstReferenceVersion: Jetz and Pyron 2018 DOI 10.1038/s41559-018-0515-5; Dryad DOI 10.5061/dryad.cc3n6j5
      referenceLinks:
        - relation: supports
          referenceId: jetz-2018-amphibian-tree
          pages: 850–858
          figure: Figures 1–3
          quoteLocator: Methods pp. 856–857; Supplementary Information
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Extant 7,238-species amphibian timetree

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The 15-gene matrix contains 4,061 amphibian species; remaining species were softly placed within taxonomic constraints.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:extant-amphibian-7238-species-timetree
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
850–858
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Methods pp. 856–857; Supplementary Information
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Model nodes are not fossils or observed origins, and the 2014 taxonomy does not replace current COL26.8 naming coverage.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:extant-amphibian-7238-species-timetree
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
850–858
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Methods pp. 856–857; Supplementary Information
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A posterior set of 10,000 synthetic trees represents 7,238 extant amphibian species, but only 4,061 have molecular data and unsampled species use soft taxonomic placement; these model times are not fossils, COL26.8 coverage or direct sequence evidence for every species.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The paper and archived Dryad dataset expose taxon sampling and inference procedure; medium confidence preserves model, taxonomy and unsampled-placement dependence.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该主张绑定具名标本或明确数据集及一手来源定位；置信度仅适用于所述样本、方法与边界，不外推为全球首次出现、直接祖先或完整类群覆盖。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一组 10,000 棵合成后验树呈现 7,238 个现生两栖物种，但仅 4,061 种具有分子数据，其余使用软性分类位置；这些模型时间不是化石、COL26.8 覆盖或每种的直接序列证据。
<!-- /evo:text -->
