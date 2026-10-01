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
    theme: green
    durationMinutes: 9
    featured: true
    steps:
      - id: modelled-crown
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 494
        timeRange:
          - 515
          - 473
        taxonPaths:
          - content/taxa/Eukaryota/Plantae
        view: evidence
        eventPath: content/events/Modelled_crown-Embryophyta_divergence
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/events/Modelled_crown-Embryophyta_divergence/evidence.md#/records/claims/0
            relation: supports
      - id: dispersed-cryptospores
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 472
        timeRange:
          - 473
          - 471
        taxonPaths:
          - content/taxa/Eukaryota/Plantae
        view: map
        eventPath: content/events/Dapingian_cryptospore_assemblage
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/events/Dapingian_cryptospore_assemblage/evidence.md#/records/claims/0
            relation: supports
      - id: spore-bearing-fragments
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 451
        timeRange:
          - 458.2
          - 445.2
        taxonPaths:
          - content/taxa/Eukaryota/Plantae
        view: evidence
        eventPath: content/events/Late_Ordovician_spore-mass_fragments
        annotation:
          markdown: evidence.md
          field: /records/story/steps/2/annotation
        claimLinks:
          - claimPath: content/events/Late_Ordovician_spore-mass_fragments/evidence.md#/records/claims/0
            relation: supports
          - claimPath: content/events/Late_Ordovician_spore-mass_fragments/evidence.md#/records/claims/1
            relation: supports
      - id: asteroxylon-axes
        title:
          markdown: page.en.md
          field: /records/story/steps/3/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/3/text
        age: 407
        timeRange:
          - 407
          - 407
        taxonPaths:
          - content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Lycopodiophyta/research/Lycopodiophyta
        view: tree
        eventPath: content/events/Asteroxylon_rooting-system_reconstruction
        annotation:
          markdown: evidence.md
          field: /records/story/steps/3/annotation
        claimLinks:
          - claimPath: content/events/Asteroxylon_rooting-system_reconstruction/evidence.md#/records/claims/0
            relation: supports
      - id: metzgeriothallus-bodies
        title:
          markdown: page.en.md
          field: /records/story/steps/4/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/4/text
        age: 385
        timeRange:
          - 387.95
          - 382.31
        taxonPaths:
          - content/taxa/Eukaryota/Plantae/Bryobiotina/Marchantiophyta/research/Marchantiophyta
        view: evidence
        eventPath: content/events/Givetian_Metzgeriothallus_body_fossils
        annotation:
          markdown: evidence.md
          field: /records/story/steps/4/annotation
        claimLinks:
          - claimPath: content/events/Givetian_Metzgeriothallus_body_fossils/evidence.md#/records/claims/0
            relation: supports
          - claimPath: content/events/Givetian_Metzgeriothallus_body_fossils/evidence.md#/records/claims/1
            relation: supports
    evidenceStatus: available-with-limitations
---

# How early land-plant evidence changes shape

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
The Plantae node is navigation context; the claim concerns crown Embryophyta.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
The source-reported numerical ages are retained; they are not silently replaced by the current ICS Dapingian boundaries.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/2/annotation -->
The broad window translates a legacy Caradoc assignment for display; it is not a point date.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/3/annotation -->
A species-level exemplar cannot supply morphology for every lycophyte lineage.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/4/annotation -->
Occurrence, morphology and crown divergence remain separate evidence objects.
<!-- /evo:text -->
