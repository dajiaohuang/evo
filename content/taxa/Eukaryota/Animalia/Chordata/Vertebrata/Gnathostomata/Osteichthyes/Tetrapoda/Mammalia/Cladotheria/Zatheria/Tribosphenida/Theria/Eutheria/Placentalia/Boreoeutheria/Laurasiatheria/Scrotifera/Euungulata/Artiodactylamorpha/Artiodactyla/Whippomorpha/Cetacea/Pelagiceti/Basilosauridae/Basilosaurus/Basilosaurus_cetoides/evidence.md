---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Basilosaurus cetoides
    rank: species
    sourceDatasetId: null
    name:
      zh: Basilosaurus cetoides
      en: Basilosaurus cetoides
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
            title: PBDB accepted record — Basilosaurus cetoides
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63132&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63132; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:63132
            selectedOccurrenceIds:
              - occ:300826
              - occ:348048
              - occ:348049
              - occ:384535
              - occ:462507
              - occ:462509
              - occ:462676
              - occ:462677
              - occ:462678
              - occ:462679
              - occ:462680
              - occ:462681
              - occ:462684
              - occ:462685
              - occ:462797
              - occ:537345
              - occ:538313
              - occ:545368
              - occ:558243
              - occ:705214
              - occ:715271
              - occ:799212
              - occ:799214
              - occ:1006777
              - occ:1013132
              - occ:1065656
              - occ:1066203
              - occ:1066561
              - occ:1070344
              - occ:1070927
              - occ:1070928
              - occ:1081816
              - occ:1098301
              - occ:1447886
              - occ:1467316
              - occ:1514781
              - occ:1514782
              - occ:1514783
              - occ:1514882
              - occ:1514923
              - occ:2040852
            selectedCollectionIds:
              - col:28983
              - col:32925
              - col:32926
              - col:28986
              - col:45627
              - col:45628
              - col:45629
              - col:45630
              - col:45631
              - col:45632
              - col:45633
              - col:45634
              - col:45637
              - col:45638
              - col:16549
              - col:55689
              - col:55868
              - col:57122
              - col:32916
              - col:75638
              - col:76685
              - col:86948
              - col:86949
              - col:122718
              - col:123919
              - col:131804
              - col:131832
              - col:131913
              - col:132660
              - col:132844
              - col:89613
              - col:135787
              - col:138667
              - col:202045
              - col:204941
              - col:211382
              - col:211383
              - col:211384
              - col:45636
              - col:211430
            sourceReferenceIds:
              - ref:11980
              - ref:12024
              - ref:8335
              - ref:12017
              - ref:12018
              - ref:12023
              - ref:8803
              - ref:15036
              - ref:15087
              - ref:15425
              - ref:15585
              - ref:8819
              - ref:25944
              - ref:10323
              - ref:36198
              - ref:39903
              - ref:42488
              - ref:61712
              - ref:78392
              - ref:68339
              - ref:73044
              - ref:73065
              - ref:73068
              - ref:93377
            originalIdentificationMappings:
              - occurrenceId: occ:300826
                originalIdentifiedName: Alabamornis gigantea n. gen. n. sp.
                acceptedName: Basilosaurus cetoides
                difference: null
              - occurrenceId: occ:705214
                originalIdentifiedName: Basilosaurus cetoides n. gen. n. sp.
                acceptedName: Basilosaurus cetoides
                difference: null
              - occurrenceId: occ:799214
                originalIdentifiedName: Zeuglodon cetoides
                acceptedName: Basilosaurus cetoides
                difference: recombined as
              - occurrenceId: occ:2040852
                originalIdentifiedName: Zeuglodon macrospondylus
                acceptedName: Basilosaurus cetoides
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

# Basilosaurus cetoides
