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
    category: morphology
    startAge: 308.5
    endAge: 305.5
    regions:
      - Sydney Mines Formation, Florence, Nova Scotia, Canada
    clades:
      - Synapsida
      - Echinerpeton intermedium
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/A_referred_Echinerpeton_neural_spine/evidence.md#/records/claims/0
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
          - referenceId: mann-reisz-2020-echinerpeton-spine
            relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/relation
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
          - referenceId: mann-reisz-2020-echinerpeton-spine
            relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
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
          - referenceId: mann-reisz-2020-echinerpeton-spine
            relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/relation
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/A_referred_Echinerpeton_neural_spine
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Mann and Reisz 2020 DOI 10.3389/feart.2020.00083
      referenceLinks:
        - referenceId: mann-reisz-2020-echinerpeton-spine
          relation: supports
          figure: Figure 1
          quoteLocator: Materials and Methods; Locality and Horizon; Comparative Anatomy; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# A referred Echinerpeton neural spine

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
ROM VP 83326 was referred to Echinerpeton intermedium after direct comparison with paratype RM 10057 and type-series casts and photographs; its preserved spine is at least 7 cm tall and about 2.3 mm wide.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:echinerpeton-neural-spine-specimen
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figure 1
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Materials and Methods; Comparative Anatomy
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The 308.5–305.5 Ma display interval is the paper's approximate Sydney Mines Formation envelope, not a direct radiometric date on ROM VP 83326 or a global Synapsida first appearance.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:echinerpeton-neural-spine-specimen
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Locality and Horizon
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
Because the centrum and most of the skeleton are absent, the reconstructed spine-to-centrum ratio and proposed display, recognition or thermoregulatory roles are estimates and hypotheses, not observed function or evidence of a direct mammalian ancestor.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:echinerpeton-neural-spine-specimen
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/figure -->
Figure 1
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Comparative Anatomy; Discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Referred specimen ROM VP 83326 documents a hyper-elongated neural spine in Echinerpeton intermedium from the Sydney Mines Formation, but incomplete preservation does not resolve the animal's full outline, spine ratio or sail function.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The bone is described, figured and compared directly with paratype RM 10057 and the type series. Medium confidence preserves uncertainty in referral, incompleteness, reconstructed proportions and untested biological function.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
论文描述并图示了该骨骼，也将其与副模标本 RM 10057 及模式系列直接比较。中等置信度保留归入鉴定、保存不完整、比例复原和未经检验的生物学功能等不确定性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
归入标本 ROM VP 83326 记录了悉尼矿组 Echinerpeton intermedium 的超长神经棘，但保存不完整，不能确定动物整体轮廓、神经棘比例或帆状结构功能。
<!-- /evo:text -->
