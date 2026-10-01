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
    startAge: 515
    endAge: 473
    regions:
      - Global molecular-clock sample
    clades:
      - Embryophyta
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Modelled_crown-Embryophyta_divergence/evidence.md#/records/claims/0
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
            referenceId: morris-2018-land-plants
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/1/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/1/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/1/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/1/referenceLinks/0/relation
            referenceId: morris-2018-land-plants
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
            referenceId: morris-2018-land-plants
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
            referenceId: morris-2018-land-plants
  claims:
    - subject:
        kind: event
        path: content/events/Modelled_crown-Embryophyta_divergence
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Morris et al. 2018 DOI 10.1073/pnas.1719588115
      referenceLinks:
        - relation: supports
          referenceId: morris-2018-land-plants
          pages: E2274–E2283
          figure: Figure 2; Table 2
          quoteLocator: "Results: Topology, pp. E2276–E2277; Conclusions, p. E2282"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Modelled crown-Embryophyta divergence

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Bayesian relaxed molecular clock using 37 fossil calibrations
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:plants-on-land
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/1/statement -->
Middle Cambrian–Early Ordovician crown-Embryophyta estimate
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/1/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/1/claimIds/0 -->
claim:event:plants-on-land
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Divergence estimates are sensitive to clock models and fossil-calibration strategy
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:plants-on-land
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
Modelled crown divergence is not a direct fossil first appearance or an ecosystem-expansion date
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:plants-on-land
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Bayesian relaxed-clock analyses using 37 fossil calibrations estimate crown Embryophyta to have emerged in a middle Cambrian–Early Ordovician interval, before crown tracheophytes in the Late Ordovician–Silurian; these are modelled divergence times, not direct fossil first appearances.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study integrates seven alternative bryophyte–tracheophyte topologies and a phylogenomic dataset, but its age estimates remain sensitive to clock models and calibration strategy, especially the crown-Embryophyta constraint. It cannot independently support cryptospore, macrofossil, rooting or soil-development observations.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该研究整合了七种苔藓植物—维管植物拓扑和系统基因组数据，但年龄估计仍受分子钟模型与校准策略影响，尤其依赖胚胎植物冠群约束；它不能独立支持隐孢子、大化石、根系或土壤发育观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
采用 37 个化石校准点的贝叶斯松弛时钟分析估计，胚胎植物冠群出现于中寒武世至早奥陶世之间，早于晚奥陶世至志留纪的维管植物冠群；这些是模型估算的分化时间，并非化石直接记录的首次出现。
<!-- /evo:text -->
