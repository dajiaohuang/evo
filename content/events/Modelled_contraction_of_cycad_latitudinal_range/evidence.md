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
    startAge: 66
    endAge: 11.63
    regions:
      - Global fossil and living-cycad sample
    clades:
      - Cycadales
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Modelled_contraction_of_cycad_latitudinal_range/evidence.md#/records/claims/0
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
            referenceId: coiro-2023-cycad-biogeography
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/figure
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
            referenceId: coiro-2023-cycad-biogeography
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
            referenceId: coiro-2023-cycad-biogeography
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Modelled_contraction_of_cycad_latitudinal_range
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Coiro et al. 2023 DOI 10.1111/nph.19010
      referenceLinks:
        - relation: supports
          referenceId: coiro-2023-cycad-biogeography
          pages: 1619–1631
          figure: Figures 5–6
          quoteLocator: Methods; Historical biogeography of cycads; Evolution of the latitudinal gradient; Conclusion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Modelled contraction of cycad latitudinal range

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
321 living species, 60 fossil leaf species and time-stratified process-based biogeography
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:cycad-latitudinal-contraction
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
1619–1631
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 5–6
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The broad 66–11.63 Ma display window summarizes a modelled transition and is not one dated extinction pulse
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:cycad-latitudinal-contraction
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Evolution of the latitudinal gradient
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
Fossil omissions, uncertain placements and model assumptions can alter dates, ancestral areas and inferred local extirpation counts
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:cycad-latitudinal-contraction
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Discussion and study limitations
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A species-level total-evidence model combining 321 living cycad species with 60 fossil leaf species inferred a broader high-latitude distribution through the Cretaceous and Palaeogene followed by contraction from the end of the Palaeogene to the middle Miocene; including fossils also increased inferred local extirpations from 22 to 130.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The sampling, fossil placements and process-based biogeographic model are explicit and the contrast between analyses with and without fossils is directly reported. The result remains model- and sample-dependent, omits some important fossils, and does not establish one climatic driver as the sole cause.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
取样、化石位置和过程型生物地理模型均有明确记录，含化石与不含化石分析之间的差异也由论文直接报告。结果仍依赖模型和样本，并遗漏部分重要化石；它也没有证明某一种气候驱动是唯一原因。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一套结合 321 个现生苏铁物种与 60 个化石叶物种的物种级总证据模型，推断苏铁类在白垩纪和古近纪曾具有更广的高纬分布，随后从古近纪末至中新世中期收缩；纳入化石还使推断的局地灭绝次数由 22 次增至 130 次。
<!-- /evo:text -->
