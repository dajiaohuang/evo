---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Stenonychosaurus inequalis
    rank: species
    sourceDatasetId: null
    name:
      zh: Stenonychosaurus inequalis
      en: Stenonychosaurus inequalis
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Stenonychosaurus inequalis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=54467&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:54467; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:54467
            selectedOccurrenceIds:
              - occ:463391
              - occ:472458
              - occ:565514
              - occ:565595
              - occ:796337
              - occ:1123291
              - occ:1331290
              - occ:1331291
              - occ:1331292
              - occ:1331293
              - occ:1331294
              - occ:1331295
              - occ:1331296
              - occ:1543820
            selectedCollectionIds:
              - col:45753
              - col:46951
              - col:59115
              - col:59131
              - col:14519
              - col:142326
              - col:179240
              - col:179241
              - col:179242
              - col:179243
              - col:179244
              - col:179245
              - col:179246
              - col:217170
            sourceReferenceIds:
              - ref:12114
              - ref:16964
              - ref:56332
              - ref:12202
              - ref:46207
              - ref:67471
            originalIdentificationMappings:
              - occurrenceId: occ:463391
                originalIdentifiedName: Stenonychosaurus inequalis n. gen. n. sp.
                acceptedName: Stenonychosaurus inequalis
                difference: null
              - occurrenceId: occ:472458
                originalIdentifiedName: Troodon inequalis
                acceptedName: Stenonychosaurus inequalis
                difference: recombined as
              - occurrenceId: occ:565514
                originalIdentifiedName: Troodon inequalis
                acceptedName: Stenonychosaurus inequalis
                difference: recombined as
              - occurrenceId: occ:796337
                originalIdentifiedName: Saurornithoides inequalis
                acceptedName: Stenonychosaurus inequalis
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

# Stenonychosaurus inequalis
