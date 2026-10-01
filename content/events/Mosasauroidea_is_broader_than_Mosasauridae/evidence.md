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
    startAge: 100.5
    endAge: 89.8
    regions:
      - Cretaceous mosasauroid records; middle Turonian of north-central Texas
    clades:
      - Mosasauroidea
      - Mosasauridae
      - Dallasaurus turneri
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Mosasauroidea_is_broader_than_Mosasauridae/evidence.md#/records/claims/0
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
          - referenceId: madzia-cau-2017-mosasauroid-nomenclature
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
          - referenceId: bell-polcyn-2005-dallasaurus
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
          - referenceId: madzia-cau-2017-mosasauroid-nomenclature
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
        path: content/events/Mosasauroidea_is_broader_than_Mosasauridae
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: madzia-cau-2017-mosasauroid-nomenclature
          relation: supports
          pages: Article e3782
          figure: Table 1; Figures 1–7
          quoteLocator: Phylogenetic definitions; sensitivity analyses
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–194
          figure: Figures 1–13
          quoteLocator: Systematic paleontology; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Mosasauroidea is broader than Mosasauridae

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Table 1 defines Mosasauroidea and Mosasauridae separately; the Dallasaurus skeletons preserve plesiopedal limbs in a taxon recovered within Mosasauridae by the original analysis.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:mosasauroid-clade-boundaries
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
Article e3782
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Table 1; Figures 1–7
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Phylogenetic definitions
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/pages -->
177–194
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/figure -->
Figures 1–13
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/quoteLocator -->
Description; phylogenetic analysis
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Basal mosasauroid relationships and some traditional names are sensitive to analytical strategy; the navigation edge therefore supports discovery and does not assert a single immutable taxonomy.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:mosasauroid-clade-boundaries
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
Article e3782
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–7
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Sensitivity analyses
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mosasauroidea and Mosasauridae are not interchangeable: the former is a broader branch-defined mosasauroid clade, whereas the latter is a node-defined family; Dallasaurus anatomy shows that family placement and fully paddle-like limb specialization are separate character questions.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The clade definitions are explicit in Table 1, while the Dallasaurus skeletons directly preserve plesiopedal limbs. Basal branching remains analysis-sensitive, so the claim distinguishes definitions and anatomy from one universal topology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
表 1 明确列出两个支系定义，Dallasaurus 骨架直接保存较原始的步行型肢体；基部支序仍随分析变化，因此主张只区分定义与解剖，不把单一拓扑写成定论。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Mosasauroidea（沧龙超科）与 Mosasauridae（沧龙科）不可互换：前者是范围更广的支系定义沧龙超科，后者是节点定义的科；Dallasaurus 的解剖还表明科级归属与完全鳍桨化肢体是两个不同问题。
<!-- /evo:text -->
