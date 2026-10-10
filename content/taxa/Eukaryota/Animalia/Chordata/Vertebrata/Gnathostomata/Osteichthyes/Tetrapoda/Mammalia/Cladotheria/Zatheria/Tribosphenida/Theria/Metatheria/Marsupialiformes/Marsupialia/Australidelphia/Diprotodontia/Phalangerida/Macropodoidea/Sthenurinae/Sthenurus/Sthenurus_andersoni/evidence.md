---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sthenurus andersoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Sthenurus andersoni
      en: Sthenurus andersoni
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
            title: PBDB accepted record — Sthenurus andersoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=248577&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:248577; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:248577
            selectedOccurrenceIds:
              - occ:866466
              - occ:1081502
              - occ:1082584
              - occ:1082586
              - occ:1082589
              - occ:1082590
              - occ:1082594
              - occ:1082595
              - occ:1082597
              - occ:1082601
              - occ:1082602
              - occ:1082605
              - occ:1082611
              - occ:1082613
              - occ:1082614
              - occ:1082615
              - occ:1082616
              - occ:1082617
              - occ:1082625
              - occ:1082628
              - occ:1082641
              - occ:1082655
              - occ:1082969
              - occ:1082970
              - occ:1082972
              - occ:1082973
              - occ:1082974
              - occ:1082975
              - occ:1082976
              - occ:1082977
              - occ:1082978
              - occ:1083532
              - occ:1083533
              - occ:1083534
              - occ:1083535
              - occ:1083536
              - occ:1083878
              - occ:1083879
              - occ:1083881
              - occ:1083882
              - occ:1083883
              - occ:1083884
              - occ:1083885
              - occ:1084310
              - occ:1085664
              - occ:1087117
              - occ:1087351
              - occ:1088391
              - occ:1088417
              - occ:1320714
              - occ:1321329
              - occ:1321824
              - occ:1341565
              - occ:1344525
              - occ:1349090
              - occ:1350025
            selectedCollectionIds:
              - col:28298
              - col:135763
              - col:135895
              - col:135897
              - col:135900
              - col:135901
              - col:135905
              - col:135906
              - col:135908
              - col:135911
              - col:135912
              - col:135914
              - col:135917
              - col:13318
              - col:135919
              - col:135920
              - col:135922
              - col:135923
              - col:135927
              - col:135930
              - col:135935
              - col:135936
              - col:135975
              - col:135976
              - col:135977
              - col:135978
              - col:135979
              - col:135980
              - col:135981
              - col:135982
              - col:135983
              - col:136069
              - col:136070
              - col:136071
              - col:136072
              - col:136073
              - col:136106
              - col:136107
              - col:136109
              - col:136110
              - col:136111
              - col:136112
              - col:136113
              - col:136143
              - col:96015
              - col:136425
              - col:95863
              - col:136766
              - col:136783
              - col:28364
              - col:136773
              - col:136076
              - col:181305
              - col:182001
              - col:182820
              - col:182957
            sourceReferenceIds:
              - ref:36547
              - ref:61066
              - ref:58806
              - ref:60281
              - ref:60521
              - ref:60966
              - ref:61053
            originalIdentificationMappings:
              - occurrenceId: occ:1081502
                originalIdentifiedName: Sthenurus andersoni n. sp.
                acceptedName: Sthenurus andersoni
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

# Sthenurus andersoni
