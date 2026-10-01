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
    startAge: 0
    endAge: 0
    regions:
      - BioProject PRJNA183205 and 1KITE transcriptome matrix
    clades:
      - Insecta
      - Pterygota
      - Holometabola
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/1KITE_insect_topology_and_calibrated_time_model/evidence.md#/records/claims/0
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
          - referenceId: misof-2014-insect-phylogenomics
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
          - referenceId: misof-2014-insect-phylogenomics
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
        path: content/events/1KITE_insect_topology_and_calibrated_time_model
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: misof-2014-insect-phylogenomics DOI-linked primary source
      referenceLinks:
        - referenceId: misof-2014-insect-phylogenomics
          relation: supports
          pages: 763–767
          figure: Figures 1–3; Supplementary Tables; BioProject PRJNA183205
          quoteLocator: Taxon and gene sampling; phylogenetic analyses; divergence dating
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# 1KITE insect topology and calibrated time model

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The study samples 144 species, 1,478 protein-coding genes and archived transcriptomes under BioProject PRJNA183205.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:insect-1kite-topology-clock
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
763–767
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–3; Supplementary Tables
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Taxon and gene sampling; archived data
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Topology and node ages depend on sampling, orthology, sequence models, fossil assignments and clock priors; they are not observed fossil first appearances.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:insect-1kite-topology-clock
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
763–767
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Phylogenetic and divergence-time methods
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 1KITE matrix of 1,478 protein-coding genes from 144 sampled insect species resolves many ordinal relationships and estimates calibrated divergence intervals, but its node ages depend on fossil assignments, clock priors, taxon sampling and sequence models.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The archived transcriptome matrix and model pipeline are documented, and the claim keeps topology and model time distinct from fossil observations.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
归档的转录组矩阵与模型流程可复核；节点年代仍依赖化石归属、时钟先验、取样和序列模型。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
1KITE 矩阵包含 144 个昆虫物种的 1,478 个蛋白编码基因，解析了许多目级关系并估算校准分化区间；但节点年龄依赖化石归属、时钟先验、分类单元取样和序列模型。
<!-- /evo:text -->
