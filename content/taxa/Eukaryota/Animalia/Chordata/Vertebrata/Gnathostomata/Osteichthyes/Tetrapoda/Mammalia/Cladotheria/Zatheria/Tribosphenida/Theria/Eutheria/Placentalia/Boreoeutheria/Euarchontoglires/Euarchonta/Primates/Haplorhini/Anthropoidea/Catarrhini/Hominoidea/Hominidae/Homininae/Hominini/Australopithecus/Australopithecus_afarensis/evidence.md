---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Australopithecus afarensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Australopithecus afarensis
      en: Australopithecus afarensis
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
            title: PBDB accepted record — Australopithecus afarensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=83055&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:83055; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:83055
            selectedOccurrenceIds:
              - occ:214254
              - occ:220037
              - occ:224349
              - occ:224351
              - occ:224357
              - occ:224359
              - occ:224360
              - occ:224361
              - occ:224363
              - occ:224366
              - occ:224369
              - occ:224371
              - occ:224376
              - occ:224382
              - occ:224385
              - occ:224388
              - occ:224390
              - occ:224392
              - occ:224403
              - occ:224405
              - occ:224407
              - occ:224409
              - occ:224410
              - occ:224411
              - occ:224421
              - occ:224422
              - occ:224428
              - occ:224438
              - occ:224445
              - occ:224664
              - occ:227903
              - occ:228976
              - occ:228977
              - occ:339232
              - occ:640568
              - occ:655351
              - occ:1635468
              - occ:1635955
            selectedCollectionIds:
              - col:21962
              - col:22664
              - col:21756
              - col:21757
              - col:21758
              - col:21759
              - col:21760
              - col:21761
              - col:21762
              - col:21763
              - col:21764
              - col:21765
              - col:21766
              - col:21767
              - col:21768
              - col:21769
              - col:21770
              - col:21771
              - col:21774
              - col:21775
              - col:21776
              - col:21777
              - col:21778
              - col:21779
              - col:21781
              - col:21782
              - col:21783
              - col:21784
              - col:21785
              - col:21800
              - col:22274
              - col:22563
              - col:22567
              - col:32050
              - col:69088
              - col:70721
              - col:231926
              - col:231987
            sourceReferenceIds:
              - ref:5264
              - ref:4845
              - ref:4835
              - ref:4782
              - ref:4849
              - ref:4850
              - ref:4847
              - ref:4451
              - ref:5560
              - ref:5624
              - ref:19923
              - ref:23725
              - ref:85909
              - ref:85997
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

# Australopithecus afarensis
