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
    startAge: 135
    endAge: 130
    regions:
      - Global taxonomic sample
    clades:
      - Angiospermae
      - Magnoliidae
      - Monocotyledoneae
      - Eudicotyledoneae
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Early_angiosperm_crown-lineage_diversification_estimates/evidence.md#/records/claims/0
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
            referenceId: magallon-2015-angiosperms
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
            referenceId: magallon-2015-angiosperms
  claims:
    - subject:
        kind: event
        path: content/events/Early_angiosperm_crown-lineage_diversification_estimates
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Magallón et al. 2015 DOI 10.1111/nph.13264
      referenceLinks:
        - relation: supports
          referenceId: magallon-2015-angiosperms
          pages: 437–453
          figure: Figures 2–3; Supporting Information Table S2
          quoteLocator: Summary; Origin of major angiosperm clades, pp. 448–450
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Early angiosperm crown-lineage diversification estimates

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Metacalibrated crown-lineage estimates from 137 fossil calibrations
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:angiosperm-expansion
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Estimated ages depend on fossil calibrations and molecular-clock models
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:angiosperm-expansion
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The study's metacalibrated clocks estimate that Magnoliidae, Monocotyledoneae and Eudicotyledoneae diversified around 135–130 Ma; these are model-dependent crown-lineage estimates, not direct fossil first appearances or evidence of ecological dominance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The published time-tree directly reports the 135–130 Ma interval, but the estimate depends on its 137 fossil calibrations and penalized-likelihood and Bayesian relaxed-clock models. It cannot independently support pollen, leaf, insect-association or ecological-dominance claims.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
论文直接报告了 135–130 Ma 区间，但该估计依赖 137 个化石校准以及惩罚似然和贝叶斯松弛钟模型；它不能独立支持花粉、叶片、昆虫—植物关联或生态优势主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
该研究经元校准的分子钟估计，木兰类、单子叶植物和真双子叶植物约在 1.35 亿至 1.30 亿年前发生多样化；这些是依赖模型的冠群谱系估计，并非化石直接记录的首次出现，也不能证明其已取得生态优势。
<!-- /evo:text -->
