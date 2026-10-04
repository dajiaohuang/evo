---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Teleoceras medicornutum
    rank: species
    sourceDatasetId: null
    name:
      zh: Teleoceras medicornutum
      en: Teleoceras medicornutum
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
            title: PBDB accepted record — Teleoceras medicornutum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52115&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52115; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52115
            selectedOccurrenceIds:
              - occ:183785
              - occ:184464
              - occ:184896
              - occ:185489
              - occ:186496
              - occ:187317
              - occ:188523
              - occ:188537
              - occ:188622
              - occ:188657
              - occ:188662
              - occ:1220590
              - occ:1220591
              - occ:1220592
              - occ:1220593
              - occ:1220594
              - occ:1220595
              - occ:1220596
              - occ:1220597
              - occ:1220598
              - occ:1220599
              - occ:1220600
              - occ:1220601
              - occ:1220602
              - occ:1220603
              - occ:1220604
              - occ:1220605
              - occ:1220606
              - occ:1220607
              - occ:1220608
              - occ:1220609
              - occ:1220610
              - occ:1220611
              - occ:1220612
              - occ:1220613
              - occ:1220614
              - occ:1220615
              - occ:1220616
              - occ:1220617
              - occ:1220618
              - occ:1220619
              - occ:1220620
              - occ:1220621
              - occ:1220622
              - occ:1220623
              - occ:1220624
              - occ:1220625
              - occ:1220627
            selectedCollectionIds:
              - col:17969
              - col:18077
              - col:18124
              - col:18203
              - col:18310
              - col:18445
              - col:18646
              - col:18650
              - col:18665
              - col:18673
              - col:18674
              - col:17908
              - col:17999
              - col:17976
              - col:17985
              - col:17905
              - col:18019
              - col:17956
              - col:18011
              - col:17903
              - col:17983
              - col:17972
              - col:17904
              - col:18004
              - col:17880
              - col:17955
              - col:18866
              - col:19103
              - col:19092
              - col:19011
              - col:18924
              - col:18989
              - col:18153
              - col:18119
              - col:18144
              - col:18337
              - col:18125
              - col:18345
              - col:18361
              - col:18281
              - col:18217
              - col:18270
              - col:18242
              - col:18465
              - col:18260
              - col:18148
              - col:18049
              - col:17998
            sourceReferenceIds:
              - ref:51441
              - ref:51726
              - ref:2807
              - ref:51739
            originalIdentificationMappings:
              - occurrenceId: occ:183785
                originalIdentifiedName: Teleoceras (Mesoceras) thomsoni
                acceptedName: Teleoceras medicornutum
                difference: null
              - occurrenceId: occ:186496
                originalIdentifiedName: Aphelops planiceps n. sp.
                acceptedName: Teleoceras medicornutum
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

# Teleoceras medicornutum
