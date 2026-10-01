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
    category: ecological
    startAge: 0
    endAge: 0
    regions:
      - Comparative biomechanical model
    clades:
      - Pteranodon
      - Quetzalcoatlus
      - Pterosauria
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Giant-pterosaur_flight_and_launch_model/evidence.md#/records/claims/0
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
          - referenceId: witton-habib-2010-giant-pterosaur-flight
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
          - referenceId: witton-habib-2010-giant-pterosaur-flight
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
        path: content/events/Giant-pterosaur_flight_and_launch_model
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
      reviewedAgainstReferenceVersion: Witton and Habib 2010 DOI 10.1371/journal.pone.0013982
      referenceLinks:
        - referenceId: witton-habib-2010-giant-pterosaur-flight
          relation: supports
          pages: e13982
          figure: Figures 2 and 6; Tables 1–3
          quoteLocator: Flight performance; Launch mechanisms
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Giant-pterosaur flight and launch model

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Model calculations using reconstructed mass, wing planform, bone strength and non-avian launch kinematics found powered flight and quadrupedal launch mechanically feasible for the sampled giant pterosaur reconstructions.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:giant-pterosaur-launch-model
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
e13982
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 2 and 6; Tables 1–3
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Flap-gliding analysis; Flight performance; Launch mechanisms
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The result is a biomechanical feasibility argument, not an observed launch, a universal gait for all pterosaurs or a direct measurement of extinct body mass and muscle power.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:giant-pterosaur-launch-model
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
e13982
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figure 6
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Launch mechanisms; Discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Comparative scaling, bone mechanics and aerodynamic calculations make powered flight and quadrupedal launch feasible for sampled giant-pterosaur reconstructions, but do not directly observe launch or measure extinct mass, muscle power and kinematics.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The model exposes anatomical assumptions and quantitative performance estimates, but inputs include reconstructed body mass, wing shape and muscle capacity; feasibility is narrower than demonstrated behaviour across Pterosauria.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
模型公开解剖假设与定量性能估计，但输入包括复原体重、翼形和肌肉能力；机械可行性比证明整个翼龙类的实际行为范围更窄。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
比较尺度分析、骨力学与空气动力计算表明取样巨型翼龙复原的动力飞行和四足起飞具有可行性，但没有直接观察起飞，也未测量灭绝动物的体重、肌力和运动学。
<!-- /evo:text -->
