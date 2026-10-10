---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ectopistes migratorius
    rank: species
    sourceDatasetId: null
    name:
      zh: Ectopistes migratorius
      en: Ectopistes migratorius
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
            title: PBDB accepted record — Ectopistes migratorius
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=83493&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:83493; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:83493
            selectedOccurrenceIds:
              - occ:398297
              - occ:665535
              - occ:690692
              - occ:769431
              - occ:773220
              - occ:781736
              - occ:915195
              - occ:919166
              - occ:919209
              - occ:919578
              - occ:929963
              - occ:1028858
              - occ:1028962
              - occ:1083808
              - occ:1196116
              - occ:1197420
              - occ:1197768
              - occ:1198071
              - occ:1201120
              - occ:1411849
              - occ:1411850
              - occ:1411851
              - occ:1411852
              - occ:1411853
              - occ:1411854
              - occ:1411855
              - occ:1411856
              - occ:1411874
              - occ:1411883
              - occ:1411897
              - occ:1411922
              - occ:1550565
              - occ:1586600
              - occ:1671596
              - occ:1672038
            selectedCollectionIds:
              - col:13066
              - col:71670
              - col:20636
              - col:82258
              - col:82890
              - col:84181
              - col:103991
              - col:104034
              - col:104035
              - col:104697
              - col:106400
              - col:20302
              - col:124319
              - col:20491
              - col:154722
              - col:93277
              - col:84190
              - col:20571
              - col:20595
              - col:195053
              - col:195054
              - col:195056
              - col:195052
              - col:195058
              - col:195059
              - col:195060
              - col:195061
              - col:195062
              - col:195063
              - col:195065
              - col:195066
              - col:190077
              - col:224189
              - col:192632
              - col:152008
            sourceReferenceIds:
              - ref:10275
              - ref:24234
              - ref:24950
              - ref:27720
              - ref:27864
              - ref:28198
              - ref:35027
              - ref:1461
              - ref:35513
              - ref:39871
              - ref:40654
              - ref:43539
              - ref:50316
              - ref:50406
              - ref:50425
              - ref:50473
              - ref:50707
              - ref:66319
              - ref:66324
              - ref:66325
              - ref:66327
              - ref:75467
              - ref:79248
              - ref:89841
              - ref:89882
            originalIdentificationMappings: []
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

# Ectopistes migratorius
