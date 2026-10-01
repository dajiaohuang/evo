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
    startAge: 485
    endAge: 444
    regions:
      - Global living-chelicerate sequence and morphology samples
    clades:
      - Pycnogonida
      - Xiphosura
      - Arachnida
      - Acari
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Competing_phylogenomic_models_of_Arachnida/evidence.md#/records/claims/0
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
          - referenceId: lozano-fernandez-2019-chelicerate-phylogenomics
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
          - referenceId: howard-2020-arachnid-monophyly
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
          - referenceId: ballesteros-2022-arachnida-paraphyly
            relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/2/relation
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/2/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/2/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/2/quoteLocator
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
          - referenceId: lozano-fernandez-2019-chelicerate-phylogenomics
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
          - referenceId: howard-2020-arachnid-monophyly
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
          - referenceId: ballesteros-2022-arachnida-paraphyly
            relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/2/relation
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/2/pages
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/2/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/2/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Competing_phylogenomic_models_of_Arachnida
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
        - referenceId: lozano-fernandez-2019-chelicerate-phylogenomics
          relation: supports
          pages: "2295"
          figure: Figures 1–4; Supplementary analyses
          quoteLocator: Taxon-rich matrices; Model tests; Arachnida and Acari results
        - referenceId: howard-2020-arachnid-monophyly
          relation: contextualizes
          pages: "100997"
          figure: Figures 1–4; Supplementary matrices
          quoteLocator: 200 slow-gene matrix; Fossil and morphology synthesis; Terrestrialization inference
        - referenceId: ballesteros-2022-arachnida-paraphyly
          relation: contextualizes
          pages: msac021
          figure: Figures 1–6; Supplementary analyses
          quoteLocator: Dense taxon sampling; Heterogeneous models; Total-evidence topology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Competing phylogenomic models of Arachnida

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Dense living-taxon datasets and slowly evolving gene subsets recover either monophyletic Arachnida or Xiphosura nested among terrestrial lineages.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:arachnid-monophyly-conflict
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
2295
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary analyses
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Taxon-rich matrices; Model tests; Arachnida and Acari results
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/relation -->
contextualizes
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/pages -->
100997
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/figure -->
Figures 1–4; Supplementary matrices
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/quoteLocator -->
200 slow-gene matrix; Fossil and morphology synthesis; Terrestrialization inference
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/2/relation -->
contextualizes
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/2/pages -->
msac021
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/2/figure -->
Figures 1–6; Supplementary analyses
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/2/quoteLocator -->
Dense taxon sampling; Heterogeneous models; Total-evidence topology
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Gene choice, compositional heterogeneity, taxon sampling, morphology and model fit change the root; terrestrialization count and timing therefore remain topology-dependent.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:arachnid-monophyly-conflict
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
2295
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary analyses
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Taxon-rich matrices; Model tests; Arachnida and Acari results
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/relation -->
contextualizes
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/pages -->
100997
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/figure -->
Figures 1–4; Supplementary matrices
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/quoteLocator -->
200 slow-gene matrix; Fossil and morphology synthesis; Terrestrialization inference
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/2/relation -->
contextualizes
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/2/pages -->
msac021
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/2/figure -->
Figures 1–6; Supplementary analyses
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/2/quoteLocator -->
Dense taxon sampling; Heterogeneous models; Total-evidence topology
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Genomic-scale chelicerate analyses using different taxon sets, slowly evolving genes, heterogeneous models and total evidence recover mutually incompatible monophyletic or paraphyletic Arachnida; one versus multiple terrestrializations and Cambrian–Ordovician timing are model-dependent historical reconstructions.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Large matrices and explicit sensitivity analyses are available, but well-supported studies disagree under different sampling and evolutionary models.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
lozano-fernandez-2019-chelicerate-phylogenomics source inventory at 2026.08-static-v5-rc31; howard-2020-arachnid-monophyly source inventory at 2026.08-static-v5-rc31; ballesteros-2022-arachnida-paraphyly source inventory at 2026.08-static-v5-rc31
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已有大型矩阵与明确敏感性分析，但高支持度研究在不同取样和演化模型下仍相互冲突。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
采用不同类群集、慢进化基因、异质模型和总证据的螯肢动物基因组尺度分析，恢复彼此不相容的单系或并系蛛形纲；一次或多次陆生化及寒武纪—奥陶纪时间均为模型依赖的历史复原。
<!-- /evo:text -->
