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
    category: fossil
    startAge: 518
    endAge: 518
    regions:
      - Chengjiang biota, Yunnan, China
    clades:
      - Xianguangia sinica
      - Cnidaria
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Xianguangia_extinct_body-plan_test/evidence.md#/records/claims/0
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
          - referenceId: ou-2017-xianguangia
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
          - referenceId: zhao-2023-xianguangia
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
          - referenceId: ou-2017-xianguangia
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
          - referenceId: zhao-2023-xianguangia
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
        path: content/events/Xianguangia_extinct_body-plan_test
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
      reviewedAgainstReferenceVersion: ou-2017-xianguangia @ DOI 10.1073/pnas.1701650114; zhao-2023-xianguangia @ DOI 10.1080/14772019.2023.2215787
      referenceLinks:
        - referenceId: ou-2017-xianguangia
          relation: supports
          pages: 8835–8840
          figure: Figures 1–4; Supplementary Figures
          quoteLocator: 85 new specimens, synonymy, reconstruction and phylogenetic analysis
        - referenceId: zhao-2023-xianguangia
          relation: contradicts
          pages: "2215787"
          figure: Figures 1–6
          quoteLocator: Figure 4 and Supplementary Figure S1; main Bayesian stem-ctenophore result and alternative-coding sensitivity analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Xianguangia extinct body-plan test

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The combined material preserves a holdfast, internal cavities and pinnule-bearing appendages; specimens once named Chengjiangopenna and Galeaplumosus are treated as parts or synonyms.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:xianguangia-body-plan-test
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
8835–8840
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary Figures
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
85 new specimens, synonymy, reconstruction and phylogenetic analysis
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/relation -->
contradicts
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/pages -->
2215787
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/figure -->
Figures 1–6
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/quoteLocator -->
Figure 4 and Supplementary Figure S1; main Bayesian stem-ctenophore result and alternative-coding sensitivity analyses
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Phylogenetic result changes with anatomical coding; suspension feeding is a functional inference and neither analysis establishes direct ancestry.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:xianguangia-body-plan-test
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
8835–8840
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary Figures
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
85 new specimens, synonymy, reconstruction and phylogenetic analysis
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/relation -->
contradicts
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/pages -->
2215787
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/figure -->
Figures 1–6
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/quoteLocator -->
Figure 4 and Supplementary Figure S1; main Bayesian stem-ctenophore result and alternative-coding sensitivity analyses
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Eighty-five new specimens plus type material unite three named forms as Xianguangia. Ou et al. recover a suspension-feeding stem-cnidarian body plan, whereas Zhao et al. recover Dinomischidae on the ctenophore stem in their main Bayesian analysis and a polytomy under alternative coding.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The expanded specimen sample strongly constrains reconstruction, but column/tentacle identity and matrix placement remain disputed between primary analyses.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
扩大的标本样本有力约束复原，但柱体/触手身份和矩阵位置在一手分析间仍有争议。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对 85 件新标本和模式材料的研究把三个曾命名的形态统一为 Xianguangia。Ou 等恢复悬浮摄食的刺胞动物干群体制；Zhao 等的主贝叶斯分析把 Dinomischidae 恢复在栉水母干群上，而替代编码产生多分支。
<!-- /evo:text -->
