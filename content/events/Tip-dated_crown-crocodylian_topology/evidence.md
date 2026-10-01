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
      - Global fossil and living-taxon model
    clades:
      - Crocodylia
      - Gavialis
      - Tomistoma
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Tip-dated_crown-crocodylian_topology/evidence.md#/records/claims/0
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
          - referenceId: lee-yates-2018-crocodylian-tip-dating
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
          - referenceId: lee-yates-2018-crocodylian-tip-dating
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
        path: content/events/Tip-dated_crown-crocodylian_topology
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
      reviewedAgainstReferenceVersion: Lee, M.S.Y. et al. 2018 DOI 10.1098/rspb.2018.1071
      referenceLinks:
        - referenceId: lee-yates-2018-crocodylian-tip-dating
          relation: supports
          pages: "20181071"
          figure: Figures 1–4
          quoteLocator: Morphological, molecular and stratigraphic data; Bayesian tip dating; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Tip-dated crown-crocodylian topology

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The preferred tip-dated analysis combines 25 living and 92 extinct taxa, 278 morphological characters and 9284 molecular base pairs and recovers a Gavialis–Tomistoma clade.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:crocodylian-tip-dated-topology
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
20181071
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Morphological, molecular and stratigraphic data; Bayesian tip dating; Discussion
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Morphology-only, parsimony and undated analyses differ; inferred divergence times and thoracosaur placement depend on model, priors, weights and sampled characters.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:crocodylian-tip-dated-topology
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
20181071
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–4
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Morphological, molecular and stratigraphic data; Bayesian tip dating; Discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A combined tip-dated analysis of 117 living and fossil crocodyliform taxa, 278 morphological characters and 9284 molecular base pairs groups Gavialis with Tomistoma and places sampled thoracosaurs outside the living crown; alternative analyses differ, so topology and divergence times are model results.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The published matrices and model are reproducible evidence, but priors, clock assumptions, homoplasy weighting and taxon sampling affect the result. No branch is a directly observed ancestor.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
公布的矩阵和模型可复现，但先验、时钟假设、同形性权重和分类取样会影响结果；没有任何分支是直接观察到的祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项结合 117 个现生与化石鳄形类、278 个形态性状和 9284 个分子碱基的尖端定年分析把恒河鳄与马来鳄归为一支，并将取样胸甲鳄置于现生冠群之外；其他分析不同，因此拓扑和分化时间是模型结果。
<!-- /evo:text -->
