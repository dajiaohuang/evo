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
      - Global fossil-calibrated phylogenetic model
    clades:
      - Neornithes
      - Neoaves
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Fossil-calibrated_modern-bird_time_tree/evidence.md#/records/claims/0
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
          - referenceId: claramunt-cracraft-2015-avian-time-tree
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
          - referenceId: claramunt-cracraft-2015-avian-time-tree
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
        path: content/events/Fossil-calibrated_modern-bird_time_tree
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
      reviewedAgainstReferenceVersion: Claramunt, S. et al. 2015 DOI 10.1126/sciadv.1501005
      referenceLinks:
        - referenceId: claramunt-cracraft-2015-avian-time-tree
          relation: supports
          pages: e1501005
          figure: Figures 1–3; Supplementary Tables S1–S4
          quoteLocator: Molecular datasets; Fossil calibrations; Divergence-time and biogeographic analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Fossil-calibrated modern-bird time tree

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The clock-like exon dataset samples 48 species and the RAG dataset samples 230 species across all orders; calibrated Bayesian analyses infer a Cretaceous neornithine root and rapid boundary-era radiation.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:neornithes-fossil-calibrated-time-tree
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
e1501005
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Tables S1–S4
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Molecular datasets; Fossil calibrations; Divergence-time and biogeographic analyses
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Topology, clock model, calibration choice, priors and geographic coding condition the estimated dates; the result is not a directly dated ancestor or a universally fixed crown-bird origin time.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:neornithes-fossil-calibrated-time-tree
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
e1501005
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Tables S1–S4
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Molecular datasets; Fossil calibrations; Divergence-time and biogeographic analyses
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Bayesian fossil-calibrated analyses of clock-like exons and broader RAG sampling infer a modern-bird common ancestor near 95 Ma and rapid diversification around the K–Pg boundary; dates and geographic histories are model outputs conditioned on topology, calibrations and priors.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study discloses molecular datasets, fossil calibrations and Bayesian procedures. Divergence ages and biogeographic reconstructions remain sensitive to those assumptions rather than directly observed fossil events.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究公开分子数据集、化石校准和贝叶斯步骤；分化年龄与生物地理复原仍对这些假设敏感，而非直接观察到的化石事件。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对时钟性外显子和更广 RAG 取样进行化石校准贝叶斯分析，推断现代鸟共同祖先约在 9500 万年前，并在 K–Pg 边界附近快速分化；年代和地理历史是受拓扑、校准与先验制约的模型输出。
<!-- /evo:text -->
