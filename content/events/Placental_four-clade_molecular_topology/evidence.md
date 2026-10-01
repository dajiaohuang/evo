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
    startAge: 103
    endAge: 79
    regions:
      - Global 42-placental and 2-marsupial molecular sample
    clades:
      - Afrotheria
      - Xenarthra
      - Laurasiatheria
      - Euarchontoglires
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Placental_four-clade_molecular_topology/evidence.md#/records/claims/0
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
          - referenceId: murphy-2001-placental-bayesian
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
          - referenceId: murphy-2001-placental-bayesian
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
        path: content/events/Placental_four-clade_molecular_topology
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
      reviewedAgainstReferenceVersion: Murphy et al. 2001 DOI 10.1126/science.1067179
      referenceLinks:
        - referenceId: murphy-2001-placental-bayesian
          relation: supports
          pages: 2348–2351
          figure: Figures 1–2
          quoteLocator: Dataset and methods; Bayesian phylogeny; Molecular divergence estimates
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Placental four-clade molecular topology

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The 16,397-base-pair matrix combines 19 nuclear and 3 mitochondrial genes; Bayesian and maximum-likelihood analyses recover four major placental clades.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:placental-molecular-four-clades
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
2348–2351
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–2
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Dataset; Bayesian phylogeny; Divergence estimates
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The Afrotheria root, dates and Gondwanan scenario are model-conditioned, later studies test alternatives, and sampled taxa from other packages remain cross-boundary inputs.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:placental-molecular-four-clades
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
2348–2351
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–2
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Dataset; Bayesian phylogeny; Divergence estimates
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 16,397-base-pair dataset of 19 nuclear and 3 mitochondrial genes from 42 placentals and 2 marsupial outgroups recovered Afrotheria, Xenarthra, Laurasiatheria and Euarchontoglires and an Afrotheria-rooted topology under Bayesian and maximum-likelihood analyses; the root, approximately 103 Ma date and Gondwanan scenario remain model-conditioned.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Sequence sampling and methods are explicit, but root placement, clock estimates and tectonic explanation depend on models, calibrations and taxon sampling and have alternatives in later analyses.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
序列取样和方法明确，但根部位置、时钟估算和板块解释依赖模型、校准与类群取样，后续研究存在替代结果。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
取样 42 个胎盘类与 2 个有袋类外群的 16397 碱基矩阵包含 19 个核基因和 3 个线粒体基因，在贝叶斯与最大似然分析中恢复非洲兽、异关节、劳亚兽和灵长总目四大支及非洲兽根部拓扑；根部、约 1.03 亿年日期和冈瓦纳情景仍受模型制约。
<!-- /evo:text -->
