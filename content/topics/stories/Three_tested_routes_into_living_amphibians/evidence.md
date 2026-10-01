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
    theme: sage
    durationMinutes: 8
    featured: true
    evidenceStatus: available-with-limitations
    steps:
      - id: temnospondyl-route
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
          - content/topics/atlas/Lissamphibia
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia/Temnospondyli
        view: tree
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/topics/atlas/Lissamphibia/evidence.md#/records/claims/0
            relation: supports
      - id: lepospondyl-route
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
          - content/topics/atlas/Lissamphibia
        view: tree
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/topics/atlas/Lissamphibia/evidence.md#/records/claims/1
            relation: supports
      - id: stereospondyl-caecilian-route
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
          - content/topics/atlas/Lissamphibia
          - content/topics/atlas/Lissamphibia/Gymnophionomorpha
        view: evidence
        annotation:
          markdown: evidence.md
          field: /records/story/steps/2/annotation
        claimLinks:
          - claimPath: content/topics/atlas/Lissamphibia/evidence.md#/records/claims/2
            relation: supports
---

# Three tested routes into living amphibians

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
This is a sampled morphology topology, not an observed ancestor or consensus origin.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
Parsimony step difference is analysis-specific and is not translated into probability or consensus.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/2/annotation -->
The conflict is retained as two published results rather than resolved editorially.
<!-- /evo:text -->
