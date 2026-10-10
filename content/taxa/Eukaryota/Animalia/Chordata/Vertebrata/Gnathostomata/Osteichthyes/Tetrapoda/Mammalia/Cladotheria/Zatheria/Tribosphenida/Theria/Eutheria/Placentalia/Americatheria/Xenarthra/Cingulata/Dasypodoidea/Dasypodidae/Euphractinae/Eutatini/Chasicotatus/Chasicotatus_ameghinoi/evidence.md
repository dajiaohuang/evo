---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chasicotatus ameghinoi
    rank: species
    sourceDatasetId: null
    name:
      zh: Chasicotatus ameghinoi
      en: Chasicotatus ameghinoi
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
            title: PBDB accepted record — Chasicotatus ameghinoi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=281434&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:281434; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:281434
            selectedOccurrenceIds:
              - occ:754383
              - occ:1180242
              - occ:1180286
              - occ:1180327
              - occ:1180335
              - occ:1427255
              - occ:1427270
              - occ:1427297
              - occ:1427314
              - occ:1427330
              - occ:1446981
              - occ:1464033
              - occ:1464061
              - occ:1464068
              - occ:1464076
              - occ:1464079
              - occ:1464081
              - occ:1464083
              - occ:1464089
              - occ:1480001
              - occ:1480006
              - occ:1480010
              - occ:1480035
              - occ:1480042
              - occ:1480045
              - occ:1480052
              - occ:1480058
              - occ:1480060
              - occ:1480062
              - occ:1480065
              - occ:1632155
              - occ:1632822
              - occ:1637943
            selectedCollectionIds:
              - col:79180
              - col:152061
              - col:152063
              - col:152067
              - col:152069
              - col:198540
              - col:198542
              - col:198546
              - col:198547
              - col:198548
              - col:201950
              - col:204359
              - col:151498
              - col:151499
              - col:151500
              - col:140925
              - col:87198
              - col:204360
              - col:204363
              - col:204598
              - col:206260
              - col:140932
              - col:192135
              - col:152066
              - col:204362
              - col:152065
              - col:204361
              - col:206263
              - col:192166
              - col:206264
              - col:231228
              - col:230751
              - col:198270
            sourceReferenceIds:
              - ref:71001
              - ref:48756
              - ref:48750
              - ref:67587
              - ref:69165
              - ref:70054
              - ref:70059
              - ref:70799
              - ref:85599
              - ref:85650
              - ref:86160
            originalIdentificationMappings:
              - occurrenceId: occ:754383
                originalIdentifiedName: Chasicotatus ameghinoi n. gen. n. sp.
                acceptedName: Chasicotatus ameghinoi
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

# Chasicotatus ameghinoi
