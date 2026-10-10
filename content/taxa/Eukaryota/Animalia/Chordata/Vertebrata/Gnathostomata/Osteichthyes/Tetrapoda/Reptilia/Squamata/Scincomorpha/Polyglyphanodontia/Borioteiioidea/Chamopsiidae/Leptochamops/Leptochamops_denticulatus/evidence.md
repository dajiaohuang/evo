---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptochamops denticulatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Leptochamops denticulatus
      en: Leptochamops denticulatus
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
            title: PBDB accepted record — Leptochamops denticulatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=67766&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:67766; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:67766
            selectedOccurrenceIds:
              - occ:149331
              - occ:464147
              - occ:464385
              - occ:468937
              - occ:483543
              - occ:487832
              - occ:488074
              - occ:488167
              - occ:488218
              - occ:488241
              - occ:488383
              - occ:491411
              - occ:513665
              - occ:650681
              - occ:650712
              - occ:984180
              - occ:987298
              - occ:987302
              - occ:987303
              - occ:1147410
              - occ:1409245
            selectedCollectionIds:
              - col:13142
              - col:14585
              - col:14514
              - col:14446
              - col:14508
              - col:14519
              - col:14549
              - col:14566
              - col:14568
              - col:14574
              - col:14654
              - col:14421
              - col:52052
              - col:14540
              - col:70343
              - col:14558
              - col:14606
              - col:118461
              - col:118466
              - col:14655
              - col:14537
            sourceReferenceIds:
              - ref:4381
              - ref:803
              - ref:1129
              - ref:3008
              - ref:820
              - ref:13103
              - ref:1414
              - ref:13834
              - ref:2236
              - ref:37933
              - ref:14538
              - ref:1535
              - ref:66164
            originalIdentificationMappings:
              - occurrenceId: occ:987298
                originalIdentifiedName: Chamops denticulatus n. sp.
                acceptedName: Leptochamops denticulatus
                difference: recombined as
              - occurrenceId: occ:987302
                originalIdentifiedName: Chamops denticulatus
                acceptedName: Leptochamops denticulatus
                difference: recombined as
              - occurrenceId: occ:987303
                originalIdentifiedName: Chamops denticulatus
                acceptedName: Leptochamops denticulatus
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

# Leptochamops denticulatus
