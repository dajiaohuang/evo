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
    theme: red
    durationMinutes: 10
    featured: false
    steps:
      - id: end-ordovician
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 444
        timeRange:
          - 446
          - 443
        taxonPaths: []
        view: diversity
        claimLinks: []
      - id: late-devonian
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 372
        timeRange:
          - 376
          - 359
        taxonPaths: []
        view: diversity
        claimLinks: []
      - id: end-permian
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 252
        timeRange:
          - 253
          - 251
        taxonPaths: []
        view: evidence
        eventPath: content/events/End-Permian_mass_extinction
        claimLinks:
          - claimPath: content/events/End-Permian_mass_extinction/evidence.md#/records/claims/0
            relation: supports
      - id: end-triassic
        title:
          markdown: page.en.md
          field: /records/story/steps/3/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/3/text
        age: 201.4
        timeRange:
          - 203
          - 200
        taxonPaths:
          - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
        view: tree
        claimLinks:
          - claimPath: content/events/Competing_early-dinosaur_morphology_matrices/evidence.md#/records/claims/0
            relation: contextualizes
      - id: kpg
        title:
          markdown: page.en.md
          field: /records/story/steps/4/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/4/text
        age: 66
        timeRange:
          - 67
          - 65
        taxonPaths:
          - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves
        view: evidence
        eventPath: content/events/K–Pg_mass_extinction
        claimLinks:
          - claimPath: content/events/K–Pg_mass_extinction/evidence.md#/records/claims/0
            relation: supports
    evidenceStatus: blocked-pending-step-evidence
---

# Five mass extinctions
