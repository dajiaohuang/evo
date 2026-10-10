---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Neomonachus tropicalis
    rank: species
    sourceDatasetId: null
    name:
      zh: Neomonachus tropicalis
      en: Neomonachus tropicalis
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
            title: PBDB accepted record — Neomonachus tropicalis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=137348&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:137348; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:137348
            selectedOccurrenceIds:
              - occ:742065
              - occ:742066
              - occ:742069
              - occ:899879
              - occ:899880
              - occ:899881
              - occ:899882
              - occ:899883
              - occ:899884
              - occ:899885
              - occ:899886
              - occ:899887
              - occ:899888
              - occ:899889
              - occ:899890
              - occ:899891
              - occ:899893
              - occ:899894
              - occ:899895
              - occ:899896
              - occ:899898
              - occ:1196555
              - occ:1342753
              - occ:1342892
              - occ:1346732
              - occ:1349723
              - occ:1350014
              - occ:1350085
              - occ:1352041
              - occ:1352042
              - occ:1352043
              - occ:1352044
              - occ:1352047
              - occ:1352048
              - occ:1352076
              - occ:1352077
              - occ:1352104
              - occ:1352105
              - occ:1352106
              - occ:1352107
              - occ:1352108
              - occ:1352110
              - occ:1352111
              - occ:1352112
              - occ:1352208
              - occ:1352209
              - occ:1352210
              - occ:1352214
              - occ:1352215
              - occ:1352216
              - occ:1352217
              - occ:1352218
              - occ:1352219
              - occ:1352220
              - occ:1352221
              - occ:1352222
              - occ:1352223
              - occ:1352224
              - occ:1352225
              - occ:1352226
              - occ:1352227
              - occ:1352228
              - occ:1352229
              - occ:1352230
              - occ:1352231
              - occ:1352232
              - occ:1352233
              - occ:1352234
              - occ:1352235
              - occ:1352236
              - occ:1352237
              - occ:1352238
              - occ:1352239
              - occ:1352240
              - occ:1352241
              - occ:1352242
              - occ:1352243
              - occ:1352244
              - occ:1352327
              - occ:1352328
              - occ:1352329
              - occ:1352330
              - occ:1352331
              - occ:1352332
              - occ:1352333
              - occ:1352334
              - occ:1352335
              - occ:1352336
              - occ:1352337
              - occ:1352338
              - occ:1352383
              - occ:1703299
              - occ:2076497
            selectedCollectionIds:
              - col:79755
              - col:79757
              - col:79758
              - col:100337
              - col:100335
              - col:100336
              - col:100338
              - col:100339
              - col:100340
              - col:100341
              - col:100342
              - col:100343
              - col:100344
              - col:100345
              - col:100346
              - col:100347
              - col:20494
              - col:100349
              - col:100350
              - col:100351
              - col:100353
              - col:74292
              - col:181621
              - col:181678
              - col:182448
              - col:182901
              - col:182956
              - col:182092
              - col:182629
              - col:125223
              - col:125225
              - col:125233
              - col:125940
              - col:125943
              - col:125949
              - col:125964
              - col:125965
              - col:125966
              - col:146584
              - col:146580
              - col:126597
              - col:126601
              - col:126603
              - col:126604
              - col:126657
              - col:127037
              - col:136422
              - col:162119
              - col:164193
              - col:164238
              - col:164394
              - col:164399
              - col:175542
              - col:180468
              - col:180469
              - col:181318
              - col:181319
              - col:181320
              - col:181321
              - col:181325
              - col:182093
              - col:182099
              - col:182102
              - col:182846
              - col:182870
              - col:182937
              - col:182938
              - col:182954
              - col:183111
              - col:182963
              - col:182966
              - col:182969
              - col:182970
              - col:182971
              - col:183099
              - col:183101
              - col:183380
              - col:183383
              - col:183384
              - col:183385
              - col:183386
              - col:183387
              - col:183388
              - col:183389
              - col:183390
              - col:183391
              - col:183392
              - col:183393
              - col:183394
              - col:20400
              - col:183395
              - col:280832
            sourceReferenceIds:
              - ref:26822
              - ref:34444
              - ref:50339
              - ref:181621
              - ref:181678
              - ref:60717
              - ref:60307
              - ref:61206
              - ref:61059
              - ref:61209
              - ref:61210
              - ref:61212
              - ref:1063
              - ref:96058
            originalIdentificationMappings:
              - occurrenceId: occ:742065
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:742066
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:742069
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899879
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899880
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899881
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899882
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899883
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899884
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899885
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899886
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899887
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899888
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899889
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899890
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899891
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899893
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899894
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899895
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899896
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:899898
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1196555
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1342753
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1342892
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1346732
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1349723
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1350014
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1350085
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352041
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352042
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352043
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352044
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352047
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352048
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352076
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352077
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352104
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352105
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352106
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352107
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352108
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352110
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352111
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352112
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352208
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352209
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352210
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352214
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352215
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352216
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352217
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352218
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352219
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352220
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352221
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352222
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352223
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352224
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352225
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352226
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352227
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352228
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352229
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352230
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352231
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352232
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352233
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352234
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352235
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352236
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352237
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352238
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352239
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352240
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352241
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352242
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352243
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352244
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352327
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352328
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352329
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352330
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352331
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352332
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352333
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352334
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352335
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352336
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352337
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352338
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:1352383
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
                difference: recombined as
              - occurrenceId: occ:2076497
                originalIdentifiedName: Monachus tropicalis
                acceptedName: Neomonachus tropicalis
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

# Neomonachus tropicalis
