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
    startAge: 0
    endAge: 0
    regions:
      - Extant comparative genome and transcriptome sample
    clades:
      - Holostei
      - Lepisosteiformes
      - Amiiformes
      - Teleostei
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Genomic_support_for_living_Holostei/evidence.md#/records/claims/0
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
            referenceId: braasch-2016-spotted-gar-genome
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
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            referenceId: braasch-2016-spotted-gar-genome
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/pages
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
            referenceId: braasch-2016-spotted-gar-genome
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/pages
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Genomic_support_for_living_Holostei
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
      reviewedAgainstReferenceVersion: Braasch et al. 2016 DOI 10.1038/ng.3526; assembly GCA_000242695.1 and cited SRA accessions
      referenceLinks:
        - relation: supports
          referenceId: braasch-2016-spotted-gar-genome
          pages: 427–437
          figure: Figures 1b and 2e–f; Supplementary Figure 6
          quoteLocator: Genome assembly and annotation; phylogeny and synteny results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Genomic support for living Holostei

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
A 25-vertebrate phylogenomic matrix of 243 one-to-one proteins (97,794 aligned amino acids), together with bowfin transcriptome data and conserved synteny, supported Holostei and placed gar divergence before the teleost genome duplication.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:holostei-genomic-support
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
427–437
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1b and 2e–f; Supplementary Figure 6
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Genome assembly and annotation; Gar informs vertebrate genome evolution
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
This is present-day genomic evidence derived from one 90× spotted-gar assembly plus comparative transcriptomes and genomes, not a fossil date, proof of morphological stasis or a complete sample of living holostean variation.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:holostei-genomic-support
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
427–437
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Genome assembly and annotation; Online Methods
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
Using gar as an outgroup to the teleost genome duplication does not show that duplication alone caused teleost species richness.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:holostei-genomic-support
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/pages -->
427–437
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 25-vertebrate phylogenomic matrix, bowfin transcriptomic evidence and conserved-synteny comparisons support living gars plus bowfin as Holostei, sister to Teleostei, while the spotted-gar genome supplies a lineage that diverged before teleost genome duplication rather than evidence of morphological stasis.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Independent sequence and synteny evidence support the extant Holostei topology and the gar genome's pre-duplication position. Medium confidence keeps the inference scoped to the sampled genomes and transcriptomes, including one 90× gar assembly, and excludes fossil age, morphological stasis and deterministic diversity claims.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
相互独立的序列与共线性证据支持现生全骨鱼拓扑，并支持雀鳝基因组位于真骨鱼复制事件之前。中等置信度把推断限定在所取样的基因组和转录组，包括单个 90× 雀鳝组装，同时排除化石年代、形态停滞和多样性决定论。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
覆盖 25 种脊椎动物的系统基因组矩阵、弓鳍鱼转录组证据与保守共线性比较支持现生雀鳝类与弓鳍鱼组成全骨鱼类，并与真骨鱼类互为姐妹群；斑点雀鳝基因组代表真骨鱼基因组复制前分出的谱系，而不是形态停滞的证据。
<!-- /evo:text -->
