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
    durationMinutes: 10
    featured: true
    steps:
      - id: ginkgo-wood
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 159
        timeRange:
          - 165
          - 153
        taxonPaths:
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Ginkgophyta/research/Ginkgophyta
        view: evidence
        eventPath: content/events/Tiaojishan_Ginkgo-like_fossil_wood
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/events/Tiaojishan_Ginkgo-like_fossil_wood/evidence.md#/records/claims/0
            relation: supports
      - id: cycadaceae-clock
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 55
        timeRange:
          - 69.31
          - 42.88
        taxonPaths:
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
        view: evidence
        eventPath: content/events/Modelled_crown_age_of_extant_Cycadaceae
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/events/Modelled_crown_age_of_extant_Cycadaceae/evidence.md#/records/claims/0
            relation: supports
      - id: cycad-latitudes
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 34
        timeRange:
          - 66
          - 11.63
        taxonPaths:
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
        view: map
        eventPath: content/events/Modelled_contraction_of_cycad_latitudinal_range
        annotation:
          markdown: evidence.md
          field: /records/story/steps/2/annotation
        claimLinks:
          - claimPath: content/events/Modelled_contraction_of_cycad_latitudinal_range/evidence.md#/records/claims/0
            relation: supports
      - id: living-cycad-radiation
        title:
          markdown: page.en.md
          field: /records/story/steps/3/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/3/text
        age: 6
        timeRange:
          - 12
          - 0
        taxonPaths:
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
        view: evidence
        eventPath: content/events/2011_model_of_living-cycad_radiation
        annotation:
          markdown: evidence.md
          field: /records/story/steps/3/annotation
        claimLinks:
          - claimPath: content/events/2011_model_of_living-cycad_radiation/evidence.md#/records/claims/0
            relation: supports
      - id: conifer-hemispheres
        title:
          markdown: page.en.md
          field: /records/story/steps/4/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/4/text
        age: 7
        timeRange:
          - 8.7
          - 5.2
        taxonPaths:
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
          - content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
        view: diversity
        eventPath: content/events/Modelled_hemispheric_pattern_in_extant_conifer_nodes
        annotation:
          markdown: evidence.md
          field: /records/story/steps/4/annotation
        claimLinks:
          - claimPath: content/events/Modelled_hemispheric_pattern_in_extant_conifer_nodes/evidence.md#/records/claims/0
            relation: supports
      - id: living-backbone
        title:
          markdown: page.en.md
          field: /records/story/steps/5/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/5/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/topics/atlas/Gymnospermae
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Ginkgophyta/research/Ginkgophyta
          - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
        view: tree
        eventPath: content/events/Extant_gymnosperm_phylogenomic_backbone
        annotation:
          markdown: evidence.md
          field: /records/story/steps/5/annotation
        claimLinks:
          - claimPath: content/events/Extant_gymnosperm_phylogenomic_backbone/evidence.md#/records/claims/0
            relation: supports
    evidenceStatus: available-with-limitations
---

# Six boundaries in gymnosperm deep time

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
A specimen occurrence, a whole-plant association and a clade first appearance are three different claims.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
The event dates a modelled crown of living Cycadaceae, not the fossil first appearance of all cycads.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/2/annotation -->
The wide interval summarizes a modelled transition; it is not one precisely dated global extinction pulse.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/3/annotation -->
Living-species radiation, crown age, stem history and fossil first appearance must stay separate.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/4/annotation -->
The comparison excludes Gnetales and does not validate the atlas's provisional Araucariaceae range.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/5/annotation -->
This hypothesis does not replace the global navigation tree or supply chronological branch lengths.
<!-- /evo:text -->
