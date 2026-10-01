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
    category: topology
    startAge: 247.2
    endAge: 242
    regions:
      - Dont Formation, Dolomites, northern Italy; combined-data phylogenetic model
    clades:
      - Pan-Squamata
      - Megachirella wachtleri
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Megachirella_enters_a_combined-data_squamate_model/evidence.md#/records/claims/0
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
          - referenceId: simoes-2018-megachirella
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
          - referenceId: simoes-2018-megachirella
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
        path: content/events/Megachirella_enters_a_combined-data_squamate_model
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
      reviewedAgainstReferenceVersion: Simões et al. 2018 DOI 10.1038/s41586-018-0093-3
      referenceLinks:
        - referenceId: simoes-2018-megachirella
          relation: supports
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/0/quoteLocator
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Megachirella enters a combined-data squamate model

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Holotype and only specimen PZO 628 was scanned by high-resolution micro-CT, and its segmented skull and skeleton were scored in a combined fossil, living-taxon, morphological and molecular dataset.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:megachirella-ct-stem-squamate
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
706–709
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–2; Extended Data Figures 1–8
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Description; Phylogenetic analyses; Methods
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Stem-squamate placement and pre-Permian–Triassic divergence estimates are outputs of sampled characters, molecular partitions, clock models and priors; the fossil itself does not date the squamate crown or establish a direct ancestor.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:megachirella-ct-stem-squamate
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
706–709
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figure 2; Extended Data Figures 3–8
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Combined-evidence analyses; Divergence-time estimates
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
CT anatomy of the only known Megachirella specimen PZO 628 was scored in a combined morphology–molecule analysis that recovered it on the squamate stem; the same model's divergence estimates are not fossil observations or crown-Squamata FADs.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named skeleton, archived CT data and matrices make the analysis reproducible, while compression, a one-specimen sample, character scoring, molecular partitions and clock priors constrain broader interpretation.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/0/quoteLocator -->
pp. 706–709, Figs. 1–2 and Extended Data Figs. 1–8; CT description, Combined-evidence analyses and Divergence-time estimates
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名骨骼、存档 CT 数据和矩阵使分析可复现；压扁保存、单标本样本、性状评分、分子分区与时钟先验限制了更广泛解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
唯一已知 Megachirella 标本 PZO 628 的 CT 解剖被编码进形态—分子联合分析，并被恢复到有鳞类干群；同一模型给出的分化估计并非化石观察，也不是有鳞类冠群首现。
<!-- /evo:text -->
