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
    category: innovation
    startAge: 0
    endAge: 0
    regions:
      - Thirty-six-specimen carnivoran μCT dataset
    clades:
      - Canidae
      - Hesperocyon
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Hesperocyon_bony-labyrinth_hunting_model/evidence.md#/records/claims/0
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
          - referenceId: schwab-2019-carnivoran-labyrinth
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
          - referenceId: schwab-2019-carnivoran-labyrinth
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
        path: content/events/Hesperocyon_bony-labyrinth_hunting_model
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: schwab-2019-carnivoran-labyrinth DOI-linked primary source
      referenceLinks:
        - referenceId: schwab-2019-carnivoran-labyrinth
          relation: supports
          pages: Article 70
          figure: Figures 1–4; Tables 1–2; Supplementary Datasets 1–2
          quoteLocator: Morphometric sample; Multivariate analyses; Extinct hunting-style estimates
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Hesperocyon bony-labyrinth hunting model

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The 36-specimen sample includes Field Museum Hesperocyon gregarius and Aelurodon skulls, segmented as left bony labyrinths and compared by PCA, CVA and MANOVA.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:hesperocyon-bony-labyrinth-model
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
Article 70
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; Tables 1–2; Supplementary Datasets 1–2
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Morphometric sample; Multivariate analyses; Extinct hunting-style estimates
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The reported 82.05% classification and pounce assignment are proxy-model results conditioned on living categories, scaling and phylogeny; they do not preserve an actual hunt or social behaviour.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:hesperocyon-bony-labyrinth-model
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
Article 70
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–4; Tables 1–2; Supplementary Datasets 1–2
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Morphometric sample; Multivariate analyses; Extinct hunting-style estimates
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 36-specimen μCT and morphometric dataset includes a Hesperocyon gregarius bony labyrinth and assigns it to a pounce category, but the assignment is a comparative proxy with 82.05% overall classification accuracy rather than observed behaviour.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Hesperocyon bony-labyrinth hunting model uses explicit named specimens or disclosed datasets, but placement, function or ecology depends on a sampled matrix or comparative model and is kept separate from observation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
“黄昏犬内耳狩猎模型”的具名标本或已公开数据集是明确的，但位置、功能或生态依赖采样矩阵或比较模型，且已与直接观察分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一套含 36 件标本的微型 CT 与形态测量数据包含 Hesperocyon gregarius 骨迷路，并将其归为扑击型；但这一归类是总体准确率为 82.05% 的比较代理，而非观察到的行为。
<!-- /evo:text -->
