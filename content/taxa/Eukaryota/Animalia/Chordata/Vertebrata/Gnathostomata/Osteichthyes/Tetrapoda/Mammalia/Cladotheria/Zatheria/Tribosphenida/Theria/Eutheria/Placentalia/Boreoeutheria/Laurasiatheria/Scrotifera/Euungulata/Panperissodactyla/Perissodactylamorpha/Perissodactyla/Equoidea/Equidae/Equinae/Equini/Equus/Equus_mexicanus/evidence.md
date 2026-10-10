---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Equus mexicanus
    rank: species
    sourceDatasetId: null
    name:
      zh: Equus mexicanus
      en: Equus mexicanus
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
            title: PBDB accepted record — Equus mexicanus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=370384&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:370384; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:370384
            selectedOccurrenceIds:
              - occ:193354
              - occ:194832
              - occ:194842
              - occ:194866
              - occ:195969
              - occ:196038
              - occ:196057
              - occ:196109
              - occ:196193
              - occ:196310
              - occ:196353
              - occ:196427
              - occ:196441
              - occ:196452
              - occ:196500
              - occ:196509
              - occ:196516
              - occ:196546
              - occ:196619
              - occ:196683
              - occ:196789
              - occ:196947
              - occ:197463
              - occ:197760
              - occ:197969
              - occ:198135
              - occ:198368
              - occ:198683
              - occ:198890
              - occ:199090
              - occ:199167
              - occ:199226
              - occ:199397
              - occ:199506
              - occ:199598
              - occ:661598
              - occ:709961
              - occ:841147
              - occ:841189
              - occ:841224
              - occ:939651
              - occ:963656
              - occ:1201162
              - occ:1201163
              - occ:1385014
              - occ:1551357
              - occ:1629017
              - occ:1630265
              - occ:1697662
            selectedCollectionIds:
              - col:19663
              - col:19978
              - col:19981
              - col:19987
              - col:20137
              - col:20144
              - col:20148
              - col:20155
              - col:20164
              - col:20180
              - col:20187
              - col:20205
              - col:20206
              - col:20207
              - col:20216
              - col:20219
              - col:20222
              - col:20235
              - col:20262
              - col:20278
              - col:20288
              - col:20295
              - col:20342
              - col:20382
              - col:20397
              - col:20417
              - col:20454
              - col:20498
              - col:20521
              - col:20558
              - col:20563
              - col:20569
              - col:20590
              - col:20603
              - col:20609
              - col:71277
              - col:76059
              - col:93244
              - col:74235
              - col:93251
              - col:108791
              - col:113257
              - col:155393
              - col:190077
              - col:20495
              - col:226032
              - col:226041
              - col:240612
            sourceReferenceIds:
              - ref:2018
              - ref:3378
              - ref:2618
              - ref:2616
              - ref:3081
              - ref:1794
              - ref:1870
              - ref:6294
              - ref:1319
              - ref:9561
              - ref:6202
              - ref:1907
              - ref:1899
              - ref:1310
              - ref:1200
              - ref:6225
              - ref:1785
              - ref:2784
              - ref:72313
              - ref:25748
              - ref:31520
              - ref:31524
              - ref:31525
              - ref:35981
              - ref:36762
              - ref:50711
              - ref:63919
              - ref:75881
              - ref:85291
              - ref:85415
              - ref:90651
            originalIdentificationMappings:
              - occurrenceId: occ:193354
                originalIdentifiedName: Equus occidentalis
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:194832
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:194842
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:194866
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:195969
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196038
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196057
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196109
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196193
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196310
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196353
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196427
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196441
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196452
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196500
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196509
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196516
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196546
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196619
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196789
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:196947
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:197463
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:197760
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:197969
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:198135
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:198368
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:198683
                originalIdentifiedName: Equus scotti n. sp.
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:198890
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:199090
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:199167
                originalIdentifiedName: Equus pacificus
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:199226
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:199397
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:199506
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:199598
                originalIdentifiedName: Equus pacificus
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:709961
                originalIdentifiedName: Equus occidentalis
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:841147
                originalIdentifiedName: Equus occidentalis
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:841189
                originalIdentifiedName: Equus occidentalis
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:841224
                originalIdentifiedName: Equus pacificus
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:939651
                originalIdentifiedName: Equus pacificus
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:963656
                originalIdentifiedName: Equus occidentalis
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:1201162
                originalIdentifiedName: Equus pacificus
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:1201163
                originalIdentifiedName: Equus occidentalis
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:1385014
                originalIdentifiedName: Equus occidentalis
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:1551357
                originalIdentifiedName: Equus scotti
                acceptedName: Equus mexicanus
                difference: null
              - occurrenceId: occ:1697662
                originalIdentifiedName: Equus pacificus
                acceptedName: Equus mexicanus
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

# Equus mexicanus
