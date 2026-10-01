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
    startAge: 411
    endAge: 407
    regions:
      - Rhynie Chert, Aberdeenshire, Scotland
    clades:
      - Rhyniognatha hirsti
      - Insecta
      - Myriapoda
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Rhyniognatha_insect–myriapod_dispute/evidence.md#/records/claims/0
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
          - referenceId: engel-grimaldi-2004-rhyniognatha
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
          - referenceId: haug-haug-2017-rhyniognatha
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
        path: content/events/Rhyniognatha_insect–myriapod_dispute
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: engel-grimaldi-2004 and haug-haug-2017 DOI-linked primary sources
      referenceLinks:
        - referenceId: engel-grimaldi-2004-rhyniognatha
          relation: supports
          pages: 627–630
          figure: Figures 1–2
          quoteLocator: Mandibular interpretation; basal-insect discussion
        - referenceId: haug-haug-2017-rhyniognatha
          relation: contradicts
          pages: e3402
          figure: Figures 1–7
          quoteLocator: Re-documentation; structural interpretation; Conclusions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Rhyniognatha insect–myriapod dispute

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
NHMUK PI IN 38234 preserves an isolated head fragment whose mandibles were interpreted in 2004 as dicondylic and possibly pterygote-like.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:rhyniognatha-contested-affinity
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
627–630
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–2
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Specimen and mandibular interpretation
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Three-dimensional reanalysis in 2017 found the structures more compatible with a myriapod, possibly a scutigeromorph centipede; insect and flight calibrations are therefore contested.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contradicts
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:rhyniognatha-contested-affinity
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
contradicts
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
e3402
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–7
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Re-documentation and conclusions
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
NHMUK PI IN 38234 was interpreted from its mouthparts as a dicondylic insect with possible pterygote affinity in 2004, but three-dimensional reanalysis in 2017 found a myriapod, possibly centipede, interpretation more likely; it must not be used as an uncontested insect or flight calibration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Both incompatible primary interpretations concern the same named specimen, so retaining the disagreement is better supported than selecting one identification.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
两项互不相容的一手研究针对同一具名标本；并列保留昆虫与多足类解释比选择单一身份更忠实。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
NHMUK PI IN 38234 曾在 2004 年依据口器被解释为双髁类昆虫并可能属于有翅类；但 2017 年的三维复核认为多足类、可能为蜈蚣的解释更合理，因此不得将其作为无争议的昆虫或飞行校准点。
<!-- /evo:text -->
