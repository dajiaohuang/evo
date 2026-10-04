---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Procoptodon browneorum
    rank: species
    sourceDatasetId: null
    name:
      zh: Procoptodon browneorum
      en: Procoptodon browneorum
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Procoptodon browneorum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=248596&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:248596; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:248596
            selectedOccurrenceIds:
              - occ:1084671
              - occ:1088174
              - occ:1088175
              - occ:1088176
              - occ:1088177
              - occ:1088178
              - occ:1088179
              - occ:1088180
              - occ:1088181
              - occ:1088182
              - occ:1088183
              - occ:1088184
              - occ:1088185
              - occ:1088186
              - occ:1088188
              - occ:1088189
              - occ:1088191
              - occ:1088192
              - occ:1088193
              - occ:1088194
              - occ:1088195
              - occ:1088197
              - occ:1088360
              - occ:1088361
              - occ:1088363
              - occ:1088364
              - occ:1088365
              - occ:1088366
              - occ:1088368
              - occ:1088370
              - occ:1088371
              - occ:1088372
              - occ:1088373
              - occ:1088375
              - occ:1088416
              - occ:1320721
              - occ:1321415
              - occ:1321819
              - occ:1350023
            selectedCollectionIds:
              - col:136174
              - col:136437
              - col:136441
              - col:136438
              - col:136736
              - col:136439
              - col:136111
              - col:136110
              - col:136193
              - col:136642
              - col:136434
              - col:136428
              - col:135896
              - col:136429
              - col:136159
              - col:136423
              - col:136172
              - col:136107
              - col:135912
              - col:136221
              - col:136431
              - col:136738
              - col:136760
              - col:136761
              - col:136763
              - col:136764
              - col:136765
              - col:136766
              - col:136768
              - col:136770
              - col:136771
              - col:136772
              - col:136773
              - col:136775
              - col:136783
              - col:28364
              - col:136072
              - col:136076
              - col:182957
            sourceReferenceIds:
              - ref:36547
              - ref:58806
              - ref:61053
            originalIdentificationMappings:
              - occurrenceId: occ:1088174
                originalIdentifiedName: Procoptodon browneorum n. sp.
                acceptedName: Procoptodon browneorum
                difference: null
              - occurrenceId: occ:1321415
                originalIdentifiedName: '"Procoptodon" browneorum'
                acceptedName: Procoptodon browneorum
                difference: null
              - occurrenceId: occ:1321819
                originalIdentifiedName: '"Procoptodon" browneorum'
                acceptedName: Procoptodon browneorum
                difference: null
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

# Procoptodon browneorum
