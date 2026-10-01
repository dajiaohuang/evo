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
    category: genomics
    startAge: 0.001
    endAge: 0
    regions:
      - Global living-bat molecular sample
    clades:
      - Chiroptera
      - Rhinolophoidea
      - Pteropodidae
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Seven-gene_bat_topology_and_echolocation_scenarios/evidence.md#/records/claims/0
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
          - referenceId: teeling-2000-bat-echolocation-topology
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
          - referenceId: teeling-2000-bat-echolocation-topology
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
        path: content/events/Seven-gene_bat_topology_and_echolocation_scenarios
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Teeling et al. 2000 DOI 10.1038/35003188
      referenceLinks:
        - referenceId: teeling-2000-bat-echolocation-topology
          relation: supports
          pages: 188–192
          figure: Figures 1–3
          quoteLocator: Molecular dataset; Phylogenetic analyses; Echolocation scenarios
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Seven-gene bat topology and echolocation scenarios

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Four nuclear and three mitochondrial genes contributed 8,230 aligned base pairs; analyses group sampled rhinolophoids with megabats rather than other microbats.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:bat-seven-gene-topology
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
188–192
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Molecular dataset; Phylogenetic analyses; Trait scenarios
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Multiple origins or losses of laryngeal echolocation are alternative historical reconstructions; the topology does not directly observe the first flight or sonar event.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:bat-seven-gene-topology
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
188–192
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Molecular dataset; Phylogenetic analyses; Trait scenarios
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An 8,230-base-pair alignment of four nuclear and three mitochondrial genes grouped sampled rhinolophoid microbats with megabats rather than other microbats; repeated gain or loss of laryngeal echolocation is therefore a historical inference from the topology, not a directly observed origin event.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The sequence matrix and multiple phylogenetic analyses are reproducible, but limited loci and taxa, model choice and trait coding leave alternative histories of echolocation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
序列矩阵与多种系统分析可复核，但有限基因与类群、模型选择及性状编码仍容许回声定位的替代历史。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
由 4 个核基因和 3 个线粒体基因构成的 8230 碱基比对把取样的菊头蝠总科小蝙蝠与大蝙蝠归为一支，而非与其他小蝙蝠成支；喉源回声定位的重复获得或丢失因此是从拓扑推导的历史解释，不是直接观察到的起源事件。
<!-- /evo:text -->
