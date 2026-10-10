---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dinohippus mexicanus
    rank: species
    sourceDatasetId: null
    name:
      zh: Dinohippus mexicanus
      en: Dinohippus mexicanus
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
            title: PBDB accepted record — Dinohippus mexicanus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50544&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50544; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50544
            selectedOccurrenceIds:
              - occ:187726
              - occ:187829
              - occ:188060
              - occ:188079
              - occ:188165
              - occ:188209
              - occ:188733
              - occ:188791
              - occ:188797
              - occ:188823
              - occ:188839
              - occ:188855
              - occ:188877
              - occ:188935
              - occ:192808
              - occ:571980
              - occ:571981
              - occ:1211741
              - occ:1307482
              - occ:1307485
              - occ:1307487
              - occ:1307489
              - occ:1307492
              - occ:1307495
              - occ:1307497
              - occ:1307499
              - occ:1307771
              - occ:1307865
              - occ:1384222
              - occ:1384254
              - occ:1394921
              - occ:1462746
              - occ:1519318
              - occ:1519343
              - occ:1519463
              - occ:1519472
              - occ:1639987
            selectedCollectionIds:
              - col:18520
              - col:18548
              - col:18573
              - col:18577
              - col:18595
              - col:18599
              - col:18718
              - col:18733
              - col:18734
              - col:18737
              - col:18738
              - col:18740
              - col:18745
              - col:18755
              - col:19602
              - col:60036
              - col:18532
              - col:157349
              - col:175215
              - col:175216
              - col:175217
              - col:175218
              - col:175219
              - col:175220
              - col:175221
              - col:175222
              - col:189788
              - col:189790
              - col:144596
              - col:20076
              - col:18713
              - col:212307
              - col:212338
              - col:212339
              - col:232513
            sourceReferenceIds:
              - ref:3851
              - ref:51759
              - ref:1181
              - ref:2245
              - ref:1175
              - ref:1176
              - ref:2596
              - ref:6197
              - ref:17249
              - ref:16570
              - ref:57249
              - ref:57305
              - ref:57311
              - ref:63794
              - ref:64966
              - ref:69936
              - ref:86700
            originalIdentificationMappings:
              - occurrenceId: occ:188935
                originalIdentifiedName: Dinohippus mexicanus n. sp.
                acceptedName: Dinohippus mexicanus
                difference: null
              - occurrenceId: occ:1307771
                originalIdentifiedName: Hippotigris ocotensis n. sp.
                acceptedName: Dinohippus mexicanus
                difference: null
              - occurrenceId: occ:1307865
                originalIdentifiedName: Protohippus muelleri n. sp.
                acceptedName: Dinohippus mexicanus
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

# Dinohippus mexicanus
