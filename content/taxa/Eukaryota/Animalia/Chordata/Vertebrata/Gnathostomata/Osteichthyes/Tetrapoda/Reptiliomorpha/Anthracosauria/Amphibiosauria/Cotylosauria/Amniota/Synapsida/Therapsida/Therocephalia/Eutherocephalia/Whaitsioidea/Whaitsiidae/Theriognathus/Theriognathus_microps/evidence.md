---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Theriognathus microps
    rank: species
    sourceDatasetId: null
    name:
      zh: Theriognathus microps
      en: Theriognathus microps
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherSynapsidaTaxonomy20261002
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaTaxonomy20261002
          usage:
            title: PBDB accepted record — Theriognathus microps
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=343308&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:343308; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:343308
            selectedOccurrenceIds:
              - occ:1285189
              - occ:1304584
              - occ:1304773
              - occ:1304944
              - occ:1304945
              - occ:1305438
              - occ:1305449
              - occ:1305481
              - occ:1310202
              - occ:1314156
              - occ:1314186
              - occ:1314305
              - occ:1316966
              - occ:1317313
              - occ:1320451
              - occ:1327833
              - occ:1329017
              - occ:1332763
              - occ:1332766
              - occ:1332773
              - occ:1332781
              - occ:1332782
              - occ:1332783
              - occ:1332966
              - occ:1332967
              - occ:1332969
              - occ:1332983
              - occ:1332995
              - occ:1338348
              - occ:1338906
              - occ:1387418
              - occ:1419970
              - occ:1419971
              - occ:1419972
              - occ:1419973
              - occ:1419974
              - occ:1419975
              - occ:1419976
              - occ:1419977
              - occ:1419978
              - occ:1419979
              - occ:1419980
              - occ:1419981
              - occ:1419982
              - occ:1419983
              - occ:1419984
              - occ:1419985
              - occ:1419986
              - occ:1419987
              - occ:1419988
              - occ:1419989
              - occ:1419990
              - occ:1419991
            selectedCollectionIds:
              - col:89859
              - col:174623
              - col:174663
              - col:80226
              - col:174735
              - col:80223
              - col:174741
              - col:80219
              - col:176330
              - col:176336
              - col:80174
              - col:80216
              - col:176917
              - col:176312
              - col:178477
              - col:178864
              - col:177563
              - col:179592
              - col:80176
              - col:178872
              - col:178900
              - col:171337
              - col:80225
              - col:181520
              - col:178865
              - col:179590
              - col:179588
              - col:178523
              - col:180461
              - col:194382
              - col:196928
              - col:196929
              - col:196930
              - col:196931
              - col:196932
              - col:196933
              - col:196934
              - col:196935
              - col:196936
              - col:196937
              - col:196938
              - col:80178
            sourceReferenceIds:
              - ref:27216
              - ref:59471
              - ref:64090
              - ref:67078
            originalIdentificationMappings:
              - occurrenceId: occ:1285189
                originalIdentifiedName: Notosollasia laticeps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1304584
                originalIdentifiedName: Moschorhynchus brachyrhinus n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1304773
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1304944
                originalIdentifiedName: Notaelurops paucidens n. gen. n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1304945
                originalIdentifiedName: Notosollasia longiceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1305438
                originalIdentifiedName: Moschorhynchus gracilis n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1305449
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1305481
                originalIdentifiedName: Notosollasia laticeps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1310202
                originalIdentifiedName: Alopecopsis atavus n. gen. n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1314156
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1314186
                originalIdentifiedName: Notosollasia laticeps n. gen. n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1314305
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1316966
                originalIdentifiedName: Notosollasia longiceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1317313
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1320451
                originalIdentifiedName: Moschorhynchus latirostris n. gen. n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1327833
                originalIdentifiedName: Notosollasia boonstrai n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1329017
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332763
                originalIdentifiedName: Whaitsia platyceps n. gen. n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332766
                originalIdentifiedName: Whaitsia major n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332773
                originalIdentifiedName: Whaitsia pricei n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332781
                originalIdentifiedName: Notosollasia laticeps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332782
                originalIdentifiedName: Notosollasia laticeps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332783
                originalIdentifiedName: Notosollasia luckhoffi n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332966
                originalIdentifiedName: Notosollasia longiceps n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332967
                originalIdentifiedName: Notosollasia longiceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332969
                originalIdentifiedName: Notosollasia longiceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332983
                originalIdentifiedName: Aneugomphius ictidoceps n. gen. n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1332995
                originalIdentifiedName: Theriognathus microps n. gen. n. sp.
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1338348
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1338906
                originalIdentifiedName: Whaitsia platyceps
                acceptedName: Theriognathus microps
                difference: null
              - occurrenceId: occ:1387418
                originalIdentifiedName: Notosollasia luckhoffi
                acceptedName: Theriognathus microps
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

# Theriognathus microps
