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
    category: function
    startAge: 509
    endAge: 443
    regions:
      - Burgess Shale and Beecher’s Trilobite Bed specimen samples
    clades:
      - Olenoides serratus
      - Triarthrus eatoni
      - Trilobita
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Trilobite_upper_limb_branch_and_gill_function/evidence.md#/records/claims/0
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
          - referenceId: hou-2021-trilobite-gill
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
          - referenceId: hou-2021-trilobite-gill
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
        path: content/events/Trilobite_upper_limb_branch_and_gill_function
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
      reviewedAgainstReferenceVersion: hou-2021-trilobite-gill source inventory at 2026.08-static-v5-rc31
      referenceLinks:
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: eabe7377
          figure: Figures 1–5; Supplementary materials
          quoteLocator: Triarthrus imaging; Olenoides articulation; Functional comparison
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Trilobite upper limb branch and gill function

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Triarthrus filaments have a narrow central region and inflated margins, while Olenoides preserves a partial body-wall attachment comparable to lamellate respiratory branches.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:trilobite-upper-limb-gill
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
eabe7377
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–5; Supplementary materials
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Triarthrus imaging; Olenoides articulation; Functional comparison
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Gill function, haemolymph flow and limb-branch homology are functional interpretations from morphology across two taxa and times, not measured gas exchange.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:trilobite-upper-limb-gill
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
eabe7377
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–5; Supplementary materials
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Triarthrus imaging; Olenoides articulation; Functional comparison
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
ESEM and micro-CT observations of Triarthrus eatoni and Olenoides serratus document filament geometry and body-wall attachment consistent with a respiratory upper branch; gas exchange, flow and evolutionary homology remain functional hypotheses rather than direct physiological measurements.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Preserved filaments and articulation are direct, whereas respiratory performance and homology rely on comparison with living arthropods.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
保存的鳃丝与连接方式属于直接证据，而呼吸表现和同源关系依赖与现生节肢动物比较。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对 Triarthrus eatoni 与 Olenoides serratus 的 ESEM 和显微 CT 观察记录了符合呼吸上肢支的鳃丝几何与体壁连接；气体交换、流动和演化同源关系仍是功能假说，而非直接生理测量。
<!-- /evo:text -->
