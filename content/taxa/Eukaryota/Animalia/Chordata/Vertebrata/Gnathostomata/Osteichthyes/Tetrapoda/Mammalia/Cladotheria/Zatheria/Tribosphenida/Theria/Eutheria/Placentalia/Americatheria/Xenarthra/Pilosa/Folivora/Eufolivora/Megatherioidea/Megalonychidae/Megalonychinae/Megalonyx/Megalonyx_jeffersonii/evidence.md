---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Megalonyx jeffersonii
    rank: species
    sourceDatasetId: null
    name:
      zh: Megalonyx jeffersonii
      en: Megalonyx jeffersonii
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
            title: PBDB accepted record — Megalonyx jeffersonii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48050&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48050; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48050
            selectedOccurrenceIds:
              - occ:196707
              - occ:197186
              - occ:199059
              - occ:199200
              - occ:199320
              - occ:199357
              - occ:199608
              - occ:199734
              - occ:599249
              - occ:742161
              - occ:742162
              - occ:742163
              - occ:742164
              - occ:774136
              - occ:788292
              - occ:799821
              - occ:839007
              - occ:840448
              - occ:840465
              - occ:841319
              - occ:841337
              - occ:842280
              - occ:919477
              - occ:919548
              - occ:936310
              - occ:1185086
              - occ:1196521
              - occ:1230180
              - occ:1490850
              - occ:1515331
              - occ:1539088
              - occ:1593098
              - occ:1607362
              - occ:1629187
              - occ:1667059
            selectedCollectionIds:
              - col:20281
              - col:20310
              - col:20556
              - col:20569
              - col:20574
              - col:20584
              - col:20612
              - col:20626
              - col:63563
              - col:79767
              - col:79768
              - col:79757
              - col:79760
              - col:83073
              - col:85145
              - col:87059
              - col:79919
              - col:93208
              - col:93209
              - col:93266
              - col:93268
              - col:93486
              - col:104678
              - col:103358
              - col:108095
              - col:152904
              - col:74292
              - col:161954
              - col:85140
              - col:93373
              - col:216259
              - col:225289
              - col:227368
              - col:230753
              - col:236636
            sourceReferenceIds:
              - ref:2254
              - ref:4222
              - ref:2896
              - ref:1936
              - ref:2018
              - ref:2501
              - ref:2503
              - ref:18288
              - ref:26822
              - ref:27902
              - ref:28649
              - ref:29294
              - ref:31468
              - ref:31502
              - ref:31503
              - ref:3869
              - ref:31535
              - ref:31631
              - ref:1461
              - ref:25320
              - ref:35895
              - ref:49269
              - ref:50339
              - ref:52762
              - ref:71494
              - ref:73090
              - ref:74695
              - ref:81276
              - ref:82811
              - ref:85310
              - ref:89615
            originalIdentificationMappings:
              - occurrenceId: occ:1185086
                originalIdentifiedName: Megalonyx jeffersoni
                acceptedName: Megalonyx jeffersonii
                difference: misspelling of, recombined as
              - occurrenceId: occ:1230180
                originalIdentifiedName: Megalonyx jeffersoni
                acceptedName: Megalonyx jeffersonii
                difference: misspelling of, recombined as
              - occurrenceId: occ:1490850
                originalIdentifiedName: Megalonyx brachycephalus n. sp.
                acceptedName: Megalonyx jeffersonii
                difference: null
              - occurrenceId: occ:1539088
                originalIdentifiedName: Megalonyx jeffersoni
                acceptedName: Megalonyx jeffersonii
                difference: misspelling of, recombined as
              - occurrenceId: occ:1607362
                originalIdentifiedName: Megalonyx jeffersoni
                acceptedName: Megalonyx jeffersonii
                difference: misspelling of, recombined as
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

# Megalonyx jeffersonii
