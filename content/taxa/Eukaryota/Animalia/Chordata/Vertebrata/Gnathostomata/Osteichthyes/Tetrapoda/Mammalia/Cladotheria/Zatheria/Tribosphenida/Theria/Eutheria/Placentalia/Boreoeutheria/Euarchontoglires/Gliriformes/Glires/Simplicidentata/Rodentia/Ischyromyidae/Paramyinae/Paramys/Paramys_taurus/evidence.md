---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paramys taurus
    rank: species
    sourceDatasetId: null
    name:
      zh: Paramys taurus
      en: Paramys taurus
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
            title: PBDB accepted record — Paramys taurus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49918&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49918; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49918
            selectedOccurrenceIds:
              - occ:168940
              - occ:171267
              - occ:171580
              - occ:171726
              - occ:172053
              - occ:286234
              - occ:456736
              - occ:456880
              - occ:457639
              - occ:457665
              - occ:457698
              - occ:457726
              - occ:457751
              - occ:457786
              - occ:458636
              - occ:458667
              - occ:462582
              - occ:462668
              - occ:469085
              - occ:469117
              - occ:469174
              - occ:469503
              - occ:469628
              - occ:469650
              - occ:469689
              - occ:470024
              - occ:470357
              - occ:470491
              - occ:470786
              - occ:470819
              - occ:470883
              - occ:470907
              - occ:470940
              - occ:470955
              - occ:471056
              - occ:471143
              - occ:471199
              - occ:471298
              - occ:471506
              - occ:471535
              - occ:1194049
              - occ:1194050
              - occ:1314862
              - occ:1314909
              - occ:1384127
            selectedCollectionIds:
              - col:15485
              - col:15725
              - col:15759
              - col:15780
              - col:15833
              - col:15458
              - col:15679
              - col:15680
              - col:15692
              - col:15694
              - col:15695
              - col:15697
              - col:15699
              - col:15701
              - col:15703
              - col:15705
              - col:15587
              - col:15592
              - col:46638
              - col:46641
              - col:46646
              - col:46686
              - col:46695
              - col:46697
              - col:46699
              - col:46731
              - col:46759
              - col:46768
              - col:46792
              - col:46794
              - col:46798
              - col:46800
              - col:46803
              - col:46804
              - col:46809
              - col:46814
              - col:46818
              - col:46825
              - col:46845
              - col:46847
              - col:154254
              - col:154262
              - col:118482
              - col:15673
              - col:15085
            sourceReferenceIds:
              - ref:2105
              - ref:1657
              - ref:7530
              - ref:11717
              - ref:49988
              - ref:58065
              - ref:63104
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

# Paramys taurus
