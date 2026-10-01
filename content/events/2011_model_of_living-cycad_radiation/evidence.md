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
    startAge: 12
    endAge: 0
    regions:
      - Global living-cycad sample
    clades:
      - Living Cycadales
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/2011_model_of_living-cycad_radiation/evidence.md#/records/claims/0
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
            referenceId: nagalingum-2011-living-cycad-radiation
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
            referenceId: liu-2022-cycadaceae-palaeogene
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/figure
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/1/relation
            referenceId: coiro-2023-cycad-biogeography
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/1/figure
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
            referenceId: nagalingum-2011-living-cycad-radiation
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/2011_model_of_living-cycad_radiation
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - relation: supports
          referenceId: nagalingum-2011-living-cycad-radiation
          pages: 796–799
          figure: Figure 1; Table 1
          quoteLocator: Abstract; fossil-calibrated timetrees and diversification results
        - relation: contextualizes
          referenceId: liu-2022-cycadaceae-palaeogene
          pages: 217–230
          figure: Figures 2–3; Table 2
          quoteLocator: Molecular dating; Discussion
        - relation: contextualizes
          referenceId: coiro-2023-cycad-biogeography
          pages: 1623–1629
          figure: Figures 2–3; Table 1
          quoteLocator: Total-evidence dating of cycads; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# 2011 model of living-cycad radiation

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Fossil-calibrated timetrees of sampled living cycad species and genera
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:living-cycad-radiation-model
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
796–799
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figure 1; Table 1
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Later fossil, tectonic and total-evidence treatments recover older deep nodes and weaken a simple globally synchronous radiation
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:living-cycad-radiation-model
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
contextualizes
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 2–3; Table 2
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/relation -->
contextualizes
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/1/figure -->
Figures 2–3; Table 1
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
The 12 Ma window concerns sampled living radiations, not Cycadales origin or fossil first appearance
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:living-cycad-radiation-model
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Scope of living-species timetrees
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 2011 fossil-calibrated molecular analysis inferred that most sampled living cycad species originated within roughly the preceding 12 million years, but later fossil-integrated work weakens a simple globally synchronous-radiation narrative; none of these models dates the origin or fossil first appearance of Cycadales.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The 2011 result is a reproducible model estimate for sampled living lineages, while later analyses use different taxon, fossil and calibration treatments and recover much older deep nodes. Medium confidence applies to the documented history of model results and their scope, not to a single universal age for living cycad diversification.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Nagalingum et al. 2011 DOI 10.1126/science.1209926; Liu et al. 2022 DOI 10.1093/aob/mcab118; Coiro et al. 2023 DOI 10.1111/nph.19010
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
2011 年结果是针对取样现生谱系的可复现模型估计；后续分析采用不同的分类取样、化石和校准处理，并恢复出更老的深层节点。中等置信度适用于模型结果及其边界的研究史，不适用于一个普适的现生苏铁多样化年龄。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
2011 年一项化石校准的分子分析推断，多数取样现生苏铁物种形成于约最近 1200 万年内；但后续整合化石的研究削弱了简单的全球同步辐射叙事。任何一套模型都没有给出苏铁目的起源或化石首现年代。
<!-- /evo:text -->
