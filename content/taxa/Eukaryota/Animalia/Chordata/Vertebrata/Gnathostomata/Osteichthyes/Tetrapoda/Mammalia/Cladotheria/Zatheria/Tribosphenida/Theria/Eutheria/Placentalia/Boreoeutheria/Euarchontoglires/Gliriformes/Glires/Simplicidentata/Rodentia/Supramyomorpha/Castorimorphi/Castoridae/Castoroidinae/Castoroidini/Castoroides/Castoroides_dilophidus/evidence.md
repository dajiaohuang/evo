---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Castoroides dilophidus
    rank: species
    sourceDatasetId: null
    name:
      zh: Castoroides dilophidus
      en: Castoroides dilophidus
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
            title: PBDB accepted record — Castoroides dilophidus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=400636&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:400636; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:400636
            selectedOccurrenceIds:
              - occ:196040
              - occ:198000
              - occ:198042
              - occ:198282
              - occ:199347
              - occ:199772
              - occ:200018
              - occ:781491
              - occ:1487181
              - occ:1487182
              - occ:1487183
              - occ:1487184
              - occ:1495392
              - occ:1495393
              - occ:1495400
              - occ:1495402
              - occ:1538502
              - occ:1538503
              - occ:1538504
              - occ:1538505
              - occ:1538506
              - occ:1538507
              - occ:1538508
              - occ:1538509
              - occ:1538511
              - occ:1538512
              - occ:1538513
              - occ:1538514
              - occ:1538515
              - occ:1538516
              - occ:1538517
              - occ:1538518
              - occ:1538519
              - occ:1538520
              - occ:1538521
              - occ:1538522
              - occ:1538523
              - occ:1538524
              - occ:1538525
              - occ:1538601
              - occ:1538602
              - occ:1538603
              - occ:1703393
            selectedCollectionIds:
              - col:20145
              - col:20400
              - col:20403
              - col:20440
              - col:20581
              - col:20629
              - col:20653
              - col:84182
              - col:206985
              - col:206986
              - col:80232
              - col:77590
              - col:19759
              - col:207891
              - col:207460
              - col:207894
              - col:58089
              - col:20299
              - col:61311
              - col:216137
              - col:18532
              - col:216138
              - col:26550
              - col:20394
              - col:195048
              - col:154773
              - col:19758
              - col:98318
              - col:216139
              - col:154804
              - col:195099
              - col:216140
              - col:216141
              - col:216142
              - col:216143
              - col:216144
              - col:19748
              - col:216145
              - col:216147
              - col:216159
              - col:74294
              - col:216161
              - col:206995
            sourceReferenceIds:
              - ref:74663
              - ref:2624
              - ref:28175
              - ref:71195
            originalIdentificationMappings:
              - occurrenceId: occ:198000
                originalIdentifiedName: Castoroides leiseyorum n. sp.
                acceptedName: Castoroides dilophidus
                difference: null
              - occurrenceId: occ:198042
                originalIdentifiedName: Castoroides leiseyorum
                acceptedName: Castoroides dilophidus
                difference: null
              - occurrenceId: occ:781491
                originalIdentifiedName: Castoroides leiseyorum
                acceptedName: Castoroides dilophidus
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

# Castoroides dilophidus
