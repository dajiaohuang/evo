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
    durationMinutes: 12
    featured: false
    steps:
      - id: goe-bracket
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 2426
        timeRange:
          - 2460
          - 2426
        taxonPaths:
          - content/topics/atlas/Life
        view: evidence
        eventPath: content/events/Great_Oxidation_interval
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/events/Great_Oxidation_interval/evidence.md#/records/claims/0
            relation: supports
      - id: avalon-after-ice
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 571
        timeRange:
          - 580
          - 565
        taxonPaths:
          - content/topics/atlas/Life
        view: map
        eventPath: content/events/Ediacaran_macroscopic_ecosystems
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/events/Ediacaran_macroscopic_ecosystems/evidence.md#/records/claims/0
            relation: supports
      - id: cambrian-pattern
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 520
        timeRange:
          - 541
          - 485.4
        taxonPaths:
          - content/topics/atlas/Life
        view: evidence
        eventPath: content/events/Cambrian_radiation
        claimLinks:
          - claimPath: content/events/Cambrian_radiation/evidence.md#/records/claims/0
            relation: supports
      - id: ordovician-regions
        title:
          markdown: page.en.md
          field: /records/story/steps/3/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/3/text
        age: 470
        timeRange:
          - 485.4
          - 443.8
        taxonPaths:
          - content/topics/atlas/Life
        view: diversity
        eventPath: content/events/Great_Ordovician_Biodiversification
        claimLinks:
          - claimPath: content/events/Great_Ordovician_Biodiversification/evidence.md#/records/claims/0
            relation: supports
      - id: meishan-clock
        title:
          markdown: page.en.md
          field: /records/story/steps/4/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/4/text
        age: 251.9
        timeRange:
          - 251.941
          - 251.88
        taxonPaths:
          - content/topics/atlas/Life
        view: evidence
        eventPath: content/events/End-Permian_mass_extinction
        annotation:
          markdown: evidence.md
          field: /records/story/steps/4/annotation
        claimLinks:
          - claimPath: content/events/End-Permian_mass_extinction/evidence.md#/records/claims/0
            relation: supports
      - id: recovery-is-not-one-date
        title:
          markdown: page.en.md
          field: /records/story/steps/5/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/5/text
        age: 245
        timeRange:
          - 252
          - 235
        taxonPaths:
          - content/topics/atlas/Life
        view: diversity
        eventPath: content/events/Triassic_ecological_recovery
        claimLinks:
          - claimPath: content/events/Triassic_ecological_recovery/evidence.md#/records/claims/0
            relation: supports
      - id: kpg-synchrony
        title:
          markdown: page.en.md
          field: /records/story/steps/6/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/6/text
        age: 66.043
        timeRange:
          - 66.08
          - 66
        taxonPaths:
          - content/topics/atlas/Life
        view: evidence
        eventPath: content/events/K–Pg_mass_extinction
        annotation:
          markdown: evidence.md
          field: /records/story/steps/6/annotation
        claimLinks:
          - claimPath: content/events/K–Pg_mass_extinction/evidence.md#/records/claims/0
            relation: supports
      - id: petm-proxies
        title:
          markdown: page.en.md
          field: /records/story/steps/7/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/7/text
        age: 56
        timeRange:
          - 56.2
          - 55.8
        taxonPaths:
          - content/topics/atlas/Life
        view: evidence
        eventPath: content/events/Paleocene–Eocene_Thermal_Maximum
        claimLinks:
          - claimPath: content/events/Paleocene–Eocene_Thermal_Maximum/evidence.md#/records/claims/0
            relation: supports
      - id: megafauna-comparison
        title:
          markdown: page.en.md
          field: /records/story/steps/8/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/8/text
        age: 0.04
        timeRange:
          - 0.126
          - 0
        taxonPaths:
          - content/topics/atlas/Life
        view: map
        eventPath: content/events/Quaternary_megafaunal_extinctions
        claimLinks:
          - claimPath: content/events/Quaternary_megafaunal_extinctions/evidence.md#/records/claims/0
            relation: supports
    evidenceStatus: available-with-limitations
---

# How the atlas dates deep-time change

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
The bracket dates a proxy transition, not one global oxygen switch.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
A regional measured succession is not a global FAD.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/4/annotation -->
A calibrated reference section is not every ecosystem worldwide.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/6/annotation -->
Synchrony at this resolution does not make every last fossil simultaneous.
<!-- /evo:text -->
