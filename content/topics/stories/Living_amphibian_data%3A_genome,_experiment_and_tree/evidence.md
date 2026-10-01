---
schemaVersion: 1
kind: evidence
records:
  story:
    title:
      markdown: page.en.md
      field: /records/story/title
      format: heading
    titleZh:
      markdown: page.zh.md
      field: /records/story/titleZh
      format: heading
    dek:
      markdown: page.en.md
      field: /records/story/dek
    theme: blue
    durationMinutes: 7
    featured: true
    steps:
      - id: xenopus-genome
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/topics/atlas/Lissamphibia/Anura
        view: evidence
        eventPath: content/events/Xenopus_tropicalis_draft_genome
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/events/Xenopus_tropicalis_draft_genome/evidence.md#/records/claims/0
            relation: supports
      - id: receptor-knockouts
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/topics/atlas/Lissamphibia/Anura
        view: evidence
        eventPath: content/events/Xenopus_thyroid-receptor_metamorphosis_experiment
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/events/Xenopus_thyroid-receptor_metamorphosis_experiment/evidence.md#/records/claims/0
            relation: supports
      - id: synthetic-timetree
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia
          - content/topics/atlas/Lissamphibia/Anura
          - content/topics/atlas/Lissamphibia/Caudata/research/Caudata
          - content/topics/atlas/Lissamphibia/Gymnophionomorpha/Gymnophiona
        view: tree
        eventPath: content/events/Extant_7,238-species_amphibian_timetree
        annotation:
          markdown: evidence.md
          field: /records/story/steps/2/annotation
        claimLinks:
          - claimPath: content/events/Extant_7,238-species_amphibian_timetree/evidence.md#/records/claims/0
            relation: supports
    evidenceStatus: available-with-limitations
---

# Living amphibian data: genome, experiment and tree

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
Extant genomic comparison does not directly observe lineage origins.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
Experimental causation in one laboratory model is not a universal amphibian rule.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/2/annotation -->
COL26.8 naming coverage, sequence sampling and mature evidence dossiers remain different inventories.
<!-- /evo:text -->
