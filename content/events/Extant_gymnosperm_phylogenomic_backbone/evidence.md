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
    startAge: 0
    endAge: 0
    regions:
      - Global living-family sample
    clades:
      - Cycadales
      - Ginkgoales
      - Conifers
      - Gnetales
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Extant_gymnosperm_phylogenomic_backbone/evidence.md#/records/claims/0
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
            referenceId: ran-2018-gymnosperm-phylogenomics
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
            referenceId: ran-2018-gymnosperm-phylogenomics
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
            referenceId: ran-2018-gymnosperm-phylogenomics
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Extant_gymnosperm_phylogenomic_backbone
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
      reviewedAgainstReferenceVersion: Ran et al. 2018 DOI 10.1098/rspb.2018.1012
      referenceLinks:
        - relation: supports
          referenceId: ran-2018-gymnosperm-phylogenomics
          pages: 20181012, pp. 1–9
          figure: Figures 1–2
          quoteLocator: "Abstract; Results: Phylogenetic analyses and Evaluation of conflicts; Discussion"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Extant gymnosperm phylogenomic backbone

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
All 13 living gymnosperm families sampled across up to 1,308 nuclear loci
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:extant-gymnosperm-backbone
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–2
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Gene-tree conflict and alternative subset results keep the Gnepine placement a published hypothesis rather than permanent consensus
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:extant-gymnosperm-backbone
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figure 2
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Evaluation of conflicts; Discussion
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
The topology concerns sampled living lineages and supplies neither fossil ranges nor an extinct-seed-plant tree
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:extant-gymnosperm-backbone
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Taxon sampling and phylogenetic scope
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A phylogenomic analysis sampling all 13 living gymnosperm families recovered cycads plus Ginkgo as sister to the remaining extant gymnosperms and Gnetales as sister to Pinaceae; this is an extant-lineage topology hypothesis, not a fossil chronology or a topology for extinct seed plants.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The topology is recovered from a large nuclear-gene matrix with complete living-family sampling, but the study also documents gene-tree conflict and alternative placements in subsets of the data. The atlas therefore presents the Gnepine arrangement as a well-supported published hypothesis rather than permanent consensus.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该拓扑来自覆盖全部现生科的大型核基因矩阵，但研究也记录了基因树冲突以及部分数据子集中的替代位置。因此图谱把 Gnepine 排列呈现为支持较强的已发表假说，而不是永久共识。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项覆盖全部 13 个现生裸子植物科的系统基因组分析，将苏铁类与银杏组成的支系恢复为其余现生裸子植物的姐妹群，并将买麻藤目恢复为松科的姐妹群；这是关于现生谱系的拓扑假说，不是化石年代序列，也不代表已灭绝种子植物的拓扑。
<!-- /evo:text -->
