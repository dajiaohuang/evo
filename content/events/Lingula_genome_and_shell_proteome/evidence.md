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
      - Kasari Bay, Amami Island, Japan; laboratory multi-omics sample
    clades:
      - Brachiopoda
      - Lingula anatina
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Lingula_genome_and_shell_proteome/evidence.md#/records/claims/0
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
          - referenceId: luo-et-al-2015-lingula-genome
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
          - referenceId: luo-et-al-2015-lingula-genome
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
        path: content/events/Lingula_genome_and_shell_proteome
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
      reviewedAgainstReferenceVersion: luo-et-al-2015-lingula-genome DOI-linked primary source
      referenceLinks:
        - referenceId: luo-et-al-2015-lingula-genome
          relation: supports
          pages: Article 8301
          figure: Figures 1–5; Supplementary Notes and Tables
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/0/quoteLocator
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Lingula genome and shell proteome

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
The 425-Mb assembly, staged RNA data and shell proteome identify expanded chitin-synthase families, shared regulatory components and lineage-specific matrix proteins.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:lingula-genome-biomineralization
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
Article 8301
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–5; Supplementary Notes and Tables
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Genome; phylogenomics; shell matrix and biomineralization
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Shared genes do not make brachiopod shell identical to molluscan shell or vertebrate bone; lineage-specific combinations support independent biomineralization histories.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:lingula-genome-biomineralization
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
Article 8301
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/figure -->
Figures 4–5
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Comparative biomineralization discussion
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 425-Mb Lingula anatina genome, embryonic and adult transcriptomes and shell proteome identify chitin-synthase and BMP-related components alongside lineage-specific shell proteins. BMP activity at larval mantle margins suggests a shared biomineralization mechanism, but its functional role requires further testing; the shell toolkit differs from vertebrate bone.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome, transcriptome and proteome datasets directly support gene and protein inventories; pathway recruitment and independent biomineralization are comparative evolutionary inferences, not fossil observations.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/0/quoteLocator -->
Genome sequencing and assembly; shell transcriptome and proteome; Figure 5 and BMP signalling discussion, including the need for further functional analyses
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组、转录组和蛋白组直接支持成分清单；通路征用和独立生物矿化是比较演化推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鸭嘴海豆芽的 4.25 亿碱基对基因组、胚胎和成体转录组及壳蛋白组识别出几丁质合酶、BMP 相关组分与谱系特异壳蛋白。幼体外套膜边缘的 BMP 活性提示可能共享生物矿化机制，但其功能仍需进一步检验；这套成壳组分不同于脊椎动物骨骼。
<!-- /evo:text -->
