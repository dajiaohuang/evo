---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pseudopus pannonicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Pseudopus pannonicus
      en: Pseudopus pannonicus
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbSquamataTaxonomy20261002
          - pbdbSquamataOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: occurrences
        sourceIds:
          - pbdbSquamataOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: timeline
        sourceIds:
          - pbdbSquamataOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: evidence
        sourceIds:
          - pbdbSquamataOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: sources
        sourceIds:
          - pbdbSquamataOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-7cfbe846-2f31-41b9-85e2-1587c659364b
          metadataVariant: 0
          sourceKey: pbdbSquamataTaxonomy20261002
          usage:
            title: PBDB accepted record — Pseudopus pannonicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=335218&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-7cfbe846-2f31-41b9-85e2-1587c659364b
          metadataVariant: 0
          sourceKey: pbdbSquamataOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:335218; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:335218
            selectedOccurrenceIds:
              - occ:351328
              - occ:351369
              - occ:351375
              - occ:351412
              - occ:368233
              - occ:1083510
              - occ:1083512
              - occ:1262616
              - occ:1262942
              - occ:1310247
              - occ:1310252
              - occ:1310256
              - occ:1444947
              - occ:1469241
              - occ:1478328
              - occ:1482035
              - occ:1627906
              - occ:1627937
              - occ:1627959
              - occ:1627980
              - occ:1628108
              - occ:1628109
              - occ:1628110
              - occ:1628111
              - occ:1628112
              - occ:1628113
              - occ:1628114
            selectedCollectionIds:
              - col:33396
              - col:33473
              - col:32485
              - col:33480
              - col:34840
              - col:136066
              - col:136067
              - col:167680
              - col:167717
              - col:48294
              - col:48295
              - col:48296
              - col:69917
              - col:37789
              - col:206345
              - col:230517
              - col:196590
              - col:48446
              - col:199746
              - col:75795
              - col:60268
              - col:50935
              - col:50940
              - col:50938
              - col:50936
              - col:196591
            sourceReferenceIds:
              - ref:8882
              - ref:43517
              - ref:54750
              - ref:54770
              - ref:56814
              - ref:54648
              - ref:70425
              - ref:70899
              - ref:85134
              - ref:85147
            originalIdentificationMappings:
              - occurrenceId: occ:351328
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
              - occurrenceId: occ:351369
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
              - occurrenceId: occ:351375
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
              - occurrenceId: occ:351412
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
              - occurrenceId: occ:368233
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
              - occurrenceId: occ:1262616
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
              - occurrenceId: occ:1262942
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
              - occurrenceId: occ:1469241
                originalIdentifiedName: Ophisaurus pannonicus
                acceptedName: Pseudopus pannonicus
                difference: recombined as
            scope:
              zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
              en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - responseSha256
            - pbdbTaxonId
            - selectedOccurrenceIds
            - selectedCollectionIds
            - sourceReferenceIds
            - originalIdentificationMappings
            - scope
        - referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
          metadataVariant: 0
          sourceKey: pbdbOccurrenceFields20261002
          usage:
            locator: "occs/list_doc.html: accepted_no/name; identified_name/modifiers; max_ma/min_ma; collection fields; env, strat and ctaph output blocks; taxa/list_doc.html: parent and app fields."
            accessedAt: 2026-10-02
            scope:
              zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
              en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Pseudopus pannonicus
