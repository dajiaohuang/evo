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
    category: transition
    startAge: 286.18
    endAge: 267.2
    regions:
      - Comparative teleost ohnologue dataset
    clades:
      - Teleosteomorpha
      - Teleostei
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Modelled_age_of_teleost_genome_duplication_3R/evidence.md#/records/claims/0
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
            referenceId: qi-2024-teleost-3r-dating
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
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            referenceId: qi-2024-teleost-3r-dating
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
            referenceId: qi-2024-teleost-3r-dating
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Modelled_age_of_teleost_genome_duplication_3R
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
      reviewedAgainstReferenceVersion: Qi et al. 2024 DOI 10.1093/gbe/evae128; Raw_data_for_Ts3R_research repository
      referenceLinks:
        - relation: supports
          referenceId: qi-2024-teleost-3r-dating
          figure: Figures 1–3; Supplementary Figure S1
          quoteLocator: Abstract; Results; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Modelled age of teleost genome duplication 3R

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Independent-locus and gene-birth models applied to 30 ohnologue pairs yielded a 286.18–267.20 Ma 95% highest-posterior-density interval for 3R; the same study estimated crown Teleostei at 254.36–234.16 Ma.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:teleost-3r-model-age
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Figure S1
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Results: The age of Ts3R; Discussion
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The interval is a molecular-model posterior, not a fossil occurrence or an instantaneous cytological observation; different duplicates can resolve after prolonged rediploidization, rearrangement and gene loss.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:teleost-3r-model-age
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 2–3
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Methods; Discussion: delayed rediploidization
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
The authors found 3R predating their crown-teleost interval by 12.84–52.02 million years and did not treat the duplication as a sufficient deterministic cause of later teleost diversity.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:teleost-3r-model-age
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Abstract; Discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Molecular models fitted to 30 teleost ohnologue pairs estimated the 3R whole-genome duplication at 286.18–267.20 Ma and crown Teleostei at 254.36–234.16 Ma, making 3R older by 12.84–52.02 million years; both intervals are model outputs, not fossil first appearances or instantaneous observations.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The analysed duplicate pairs, alternative models and posterior intervals are explicitly reported and the input files are public. Medium confidence preserves dependence on molecular models and calibrations, heterogeneous post-duplication rediploidization, and the paper's rejection of a simple one-event explanation for later teleost diversity.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
所分析的复制基因对、替代模型与后验区间都有明确报告，输入文件也已公开。中等置信度保留分子模型和校准依赖性、复制后异质的再二倍化过程，以及论文对用单一事件解释后续真骨鱼多样性的拒绝。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对 30 对真骨鱼同源复制基因拟合的分子模型将 3R 全基因组复制估计为 286.18–267.20 Ma，将真骨鱼冠群估计为 254.36–234.16 Ma，因此 3R 早 1284 万至 5202 万年；两个区间都是模型输出，不是化石首现或瞬时观测。
<!-- /evo:text -->
