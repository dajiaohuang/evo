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
      - Laboratory embryos of Lottia gigantea and Biomphalaria glabrata
    clades:
      - Gastropoda
      - Lottia gigantea
      - Biomphalaria glabrata
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Gastropod_Nodal_chirality_experiment/evidence.md#/records/claims/0
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
          - referenceId: grande-patel-2009-snail-nodal
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
          - referenceId: grande-patel-2009-snail-nodal
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
        path: content/events/Gastropod_Nodal_chirality_experiment
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: grande-patel-2009-snail-nodal DOI-linked primary source
      referenceLinks:
        - referenceId: grande-patel-2009-snail-nodal
          relation: supports
          pages: 1007–1011
          figure: Figures 1–4; Supplementary Figures 1–5
          quoteLocator: nodal and Pitx expression; pharmacological inhibition; sequence accessions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Gastropod Nodal chirality experiment

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
nodal and Pitx are expressed on opposite embryonic sides in dextral Lottia and sinistral Biomphalaria, and inhibitor treatment disrupts Pitx and coiling.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:gastropod-nodal-chirality
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
1007–1011
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary Figures 1–5
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Expression and pharmacological inhibition
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The experiment tests chirality in two living gastropods; it does not directly reconstruct torsion, fossil shell coiling or every molluscan asymmetry mechanism.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:gastropod-nodal-chirality
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
1007–1011
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figure 4
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Interpretive scope
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In Lottia gigantea and Biomphalaria glabrata embryos, nodal and Pitx expression occurs on opposite sides corresponding to adult chirality, and Nodal-pathway inhibition disrupts Pitx expression and shell coiling in the sampled system.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Expression localization, sequence accessions and perturbation phenotypes are directly reported; extrapolation to torsion, other gastropods or the molluscan ancestor is withheld.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
表达位置、序列登录号和抑制表型均有直接记录；结论不外推到扭转、全部腹足类或软体动物祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在巨帽贝 Lottia gigantea 和光滑双脐螺 Biomphalaria glabrata 的胚胎中，nodal 与 Pitx 在与成体手性相应的相反侧表达；抑制 Nodal 通路会扰乱该取样系统的 Pitx 表达和壳旋卷。
<!-- /evo:text -->
