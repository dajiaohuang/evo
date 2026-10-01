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
      - id: xiushanosteus-body
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 436
        timeRange:
          - 436
          - 436
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Placodermi
        view: evidence
        eventPath: content/events/Articulated_Xiushanosteus_from_the_Chongqing_Lagerstätte
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/events/Articulated_Xiushanosteus_from_the_Chongqing_Lagerstätte/evidence.md#/records/claims/0
            relation: supports
      - id: priscomyzon-disc
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 359.5
        timeRange:
          - 360
          - 359
        taxonPaths:
          - content/topics/atlas/Agnatha/Cyclostomata/Petromyzontida
        view: evidence
        eventPath: content/events/Priscomyzon_preserves_a_Devonian_lamprey_oral_disc
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/events/Priscomyzon_preserves_a_Devonian_lamprey_oral_disc/evidence.md#/records/claims/0
            relation: supports
      - id: myxinikela-mosaic
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 308.5
        timeRange:
          - 310
          - 307
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Myxini
          - content/topics/atlas/Agnatha/Cyclostomata
        view: tree
        eventPath: content/events/Myxinikela_records_a_Carboniferous_stem_hagfish
        annotation:
          markdown: evidence.md
          field: /records/story/steps/2/annotation
        claimLinks:
          - claimPath: content/events/Myxinikela_records_a_Carboniferous_stem_hagfish/evidence.md#/records/claims/0
            relation: supports
    evidenceStatus: available-with-limitations
---

# Three early-fish fossils, three different boundaries

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
Articulation strengthens anatomical association; it does not convert a stem-grade taxon into a crown ancestor.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
A body fossil can preserve adult-like structures while leaving lifecycle and crown-node timing unresolved.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/2/annotation -->
Total-group occurrence and crown-group range are separate evidence objects.
<!-- /evo:text -->
