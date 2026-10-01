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
    theme: copper
    durationMinutes: 8
    featured: false
    steps:
      - id: split
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 312
        timeRange:
          - 320
          - 300
        taxonPaths:
          - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida
          - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida
        view: tree
        eventPath: content/events/Amniote_diversification
        claimLinks:
          - claimPath: content/events/Amniote_diversification/evidence.md#/records/claims/0
            relation: supports
      - id: therapsids
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 255
        timeRange:
          - 280
          - 230
        taxonPaths:
          - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida
        view: evidence
        claimLinks: []
      - id: mammals
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 205
        timeRange:
          - 225
          - 180
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia
        view: tree
        claimLinks: []
    evidenceStatus: blocked-pending-step-evidence
---

# From synapsids to mammals
