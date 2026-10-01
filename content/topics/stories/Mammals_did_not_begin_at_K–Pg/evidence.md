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
    theme: violet
    durationMinutes: 6
    featured: false
    steps:
      - id: synapsids
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 300
        timeRange:
          - 320
          - 250
        taxonPaths:
          - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida
        view: tree
        claimLinks:
          - claimPath: content/events/Amniote_diversification/evidence.md#/records/claims/0
            relation: contextualizes
      - id: mesozoic
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 150
        timeRange:
          - 220
          - 66
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia
        view: evidence
        claimLinks: []
      - id: after
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 58
        timeRange:
          - 66
          - 50
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia
          - content/topics/atlas/Placentalia
        view: tree
        eventPath: content/events/K–Pg_mass_extinction
        claimLinks:
          - claimPath: content/events/K–Pg_mass_extinction/evidence.md#/records/claims/0
            relation: contextualizes
    evidenceStatus: blocked-pending-step-evidence
---

# Mammals did not begin at K–Pg
