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
      - Global living-taxon sequence samples
    clades:
      - Porifera
      - Ctenophora
      - Metazoa
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Competing_phylogenomic_models_at_the_animal_root/evidence.md#/records/claims/0
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
          - referenceId: simion-2017-porifera-sister
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
          - referenceId: whelan-2017-ctenophora-sister
            relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/1/relation
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/1/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/1/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/1/quoteLocator
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
          - referenceId: simion-2017-porifera-sister
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
          - referenceId: whelan-2017-ctenophora-sister
            relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/1/relation
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/1/pages
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/1/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/1/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Competing_phylogenomic_models_at_the_animal_root
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: simion-2017-porifera-sister
          relation: supports
          pages: 958–967
          figure: Figures 1–4; STAR Methods
          quoteLocator: 1,719-gene superalignment and model comparisons
        - referenceId: whelan-2017-ctenophora-sister
          relation: contradicts
          pages: 1737–1746
          figure: Figures 1–3; Supplementary Figures S1–S15
          quoteLocator: 27 new ctenophore transcriptomes, filtering and alternative root result
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Competing phylogenomic models at the animal root

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Simion et al. assembled 1,719 genes from 97 species; Whelan et al. added 27 ctenophore transcriptomes and tested multiple filtering schemes.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:animal-root-competing-models
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
958–967
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; STAR Methods
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
1,719-gene superalignment and model comparisons
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/relation -->
contradicts
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/pages -->
1737–1746
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/figure -->
Figures 1–3; Supplementary Figures S1–S15
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/quoteLocator -->
27 new ctenophore transcriptomes, filtering and alternative root result
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Bootstrap or posterior support measures fit within a chosen dataset and model; they do not turn either root into a direct observation of the first animal.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:animal-root-competing-models
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
958–967
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–4; STAR Methods
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
1,719-gene superalignment and model comparisons
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/relation -->
contradicts
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/pages -->
1737–1746
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/figure -->
Figures 1–3; Supplementary Figures S1–S15
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/quoteLocator -->
27 new ctenophore transcriptomes, filtering and alternative root result
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
One 1,719-gene analysis supports Porifera-sister under site-heterogeneous models, whereas an independently expanded ctenophore sample supports Ctenophora-sister; the animal root remains model- and sampling-sensitive.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Both primary analyses report strong internal support under different datasets and controls, so confidence in the existence of conflict is high while a single topology is contested.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
simion-2017-porifera-sister @ DOI 10.1016/j.cub.2017.02.031; whelan-2017-ctenophora-sister @ DOI 10.1038/s41559-017-0331-3
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
两项一手分析在不同数据和控制下都报告较强内部支持，因此对“存在冲突”高度可信，但单一拓扑仍有争议。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项包含 1,719 个基因的分析在位点异质模型下支持多孔动物为其他动物的姐妹群，而另一项扩大栉水母取样的独立研究支持栉水母为姐妹群；动物根部位置仍对模型和取样敏感。
<!-- /evo:text -->
