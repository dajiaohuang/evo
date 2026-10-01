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
    category: geochemical
    startAge: 635
    endAge: 541
    regions:
      - South Oman Salt Basin, Sultanate of Oman
    clades:
      - Demospongiae
      - Rhizaria
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Cryogenian_sponge-biomarker_attribution_test/evidence.md#/records/claims/0
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
          - referenceId: love-2009-sponge-steranes
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
          - referenceId: nettersheim-2019-rhizaria-steranes
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
          - referenceId: love-2009-sponge-steranes
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
          - referenceId: nettersheim-2019-rhizaria-steranes
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
        path: content/events/Cryogenian_sponge-biomarker_attribution_test
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
      reviewedAgainstReferenceVersion: love-2009-sponge-steranes @ DOI 10.1038/nature07673; nettersheim-2019-rhizaria-steranes @ DOI 10.1038/s41559-019-0806-5
      referenceLinks:
        - referenceId: love-2009-sponge-steranes
          relation: supports
          pages: 718–721
          figure: Figures 1–3; Supplementary Tables 1–4
          quoteLocator: MRM sterane measurements and stratigraphic context
        - referenceId: nettersheim-2019-rhizaria-steranes
          relation: contradicts
          pages: 577–581
          figure: Figures 1–3; Supplementary Tables
          quoteLocator: Rhizarian sterol assays and biosynthetic interpretation
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Cryogenian sponge-biomarker attribution test

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Love et al. measured covalently bound and extractable C30 steranes in a dated Oman succession; Nettersheim et al. detected relevant precursors across sampled Rhizaria.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:cryogenian-sponge-biomarker-debate
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
718–721
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Tables 1–4
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
MRM sterane measurements and stratigraphic context
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/relation -->
contradicts
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/pages -->
577–581
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/figure -->
Figures 1–3; Supplementary Tables
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/1/quoteLocator -->
Rhizarian sterol assays and biosynthetic interpretation
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Compound presence, depositional age and biological source are separate propositions; alternative extinct producers and diagenetic pathways are not exhaustively excluded.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:cryogenian-sponge-biomarker-debate
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
718–721
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Tables 1–4
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
MRM sterane measurements and stratigraphic context
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/relation -->
contradicts
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/pages -->
577–581
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/figure -->
Figures 1–3; Supplementary Tables
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/quoteLocator -->
Rhizarian sterol assays and biosynthetic interpretation
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Cryogenian-to-Cambrian 24-isopropylcholestanes are measured compounds, but sampled Rhizaria can synthesize their sterol precursors, so these rocks do not uniquely establish Demospongiae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The geochemical occurrence is replicated, while source-organism attribution is explicitly contradicted by an experimentally sampled alternative source.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
地球化学出现记录可复核，但来源生物归属受到实验取样的替代来源直接挑战。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
成冰纪至寒武纪岩石中确实测得 24-异丙基胆甾烷，但已取样的有孔虫类也能合成其甾醇前体，因此这些岩石不能唯一证明寻常海绵纲已存在。
<!-- /evo:text -->
