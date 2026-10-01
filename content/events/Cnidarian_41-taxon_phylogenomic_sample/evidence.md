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
      - Global living-taxon transcriptome and genome samples
    clades:
      - Anthozoa
      - Medusozoa
      - Cnidaria
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Cnidarian_41-taxon_phylogenomic_sample/evidence.md#/records/claims/0
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
          - referenceId: zapata-2015-cnidaria
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
          - referenceId: zapata-2015-cnidaria
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
        path: content/events/Cnidarian_41-taxon_phylogenomic_sample
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
      reviewedAgainstReferenceVersion: zapata-2015-cnidaria @ DOI 10.1371/journal.pone.0139068
      referenceLinks:
        - referenceId: zapata-2015-cnidaria
          relation: supports
          pages: e0139068
          figure: Figures 1–4; Supplementary Figures S1–S12; BioProject PRJNA263637
          quoteLocator: 41-taxon matrices, partition/model tests and node support
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Cnidarian 41-taxon phylogenomic sample

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Fifteen new transcriptomes were combined with twenty-six public genomes or transcriptomes; raw data and analysis assets were deposited.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:cnidarian-phylogenomic-sample
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
e0139068
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary Figures S1–S12; BioProject PRJNA263637
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
41-taxon matrices, partition/model tests and node support
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
A living-taxon topology does not date fossil specimens, settle extinct placements or make the navigation ontology a complete phylogeny.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:cnidarian-phylogenomic-sample
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
e0139068
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary Figures S1–S12; BioProject PRJNA263637
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
41-taxon matrices, partition/model tests and node support
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 41-taxon phylogenomic matrix supports Anthozoa, Medusozoa, Octocorallia, Hydrozoa and a Staurozoa–Cubozoa–Scyphozoa clade, while Hexacorallia support is weak because Ceriantharia placement is equivocal.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The matrices, raw accessions and alternative topology tests are explicit; confidence is limited to sampled living taxa and stated nodes rather than every cnidarian relationship.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
矩阵、原始登录号和替代拓扑检验均明确；置信度仅适用于取样现生类群和指定节点，而非所有刺胞动物关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一套含 41 个分类单元的系统基因组矩阵支持珊瑚虫纲、水母亚门、八放珊瑚亚纲、水螅纲以及十字水母纲—箱水母纲—钵水母纲支系；但因角海葵目位置不确定，六放珊瑚亚纲的支持较弱。
<!-- /evo:text -->
