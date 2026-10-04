---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tapirus (Helicotapirus) veroensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Tapirus (Helicotapirus) veroensis
      en: Tapirus (Helicotapirus) veroensis
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
            title: PBDB accepted record — Tapirus (Helicotapirus) veroensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52070&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52070; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52070
            selectedOccurrenceIds:
              - occ:196828
              - occ:197928
              - occ:197980
              - occ:198126
              - occ:198291
              - occ:198621
              - occ:198881
              - occ:199274
              - occ:199313
              - occ:199339
              - occ:199544
              - occ:199628
              - occ:199846
              - occ:199872
              - occ:200002
              - occ:361729
              - occ:690435
              - occ:740239
              - occ:839005
              - occ:840133
              - occ:841239
              - occ:915923
              - occ:920382
              - occ:931750
              - occ:931751
              - occ:931756
              - occ:931757
              - occ:931760
              - occ:931762
              - occ:1169363
              - occ:1185084
              - occ:1196413
              - occ:1196560
              - occ:1196897
              - occ:1197792
              - occ:1197874
              - occ:1416819
              - occ:1491082
              - occ:1593099
              - occ:1607382
              - occ:1629205
            selectedCollectionIds:
              - col:20289
              - col:20390
              - col:20398
              - col:20415
              - col:20440
              - col:20491
              - col:20520
              - col:20572
              - col:20573
              - col:20580
              - col:20604
              - col:20613
              - col:20636
              - col:20638
              - col:20650
              - col:34269
              - col:74240
              - col:79581
              - col:79919
              - col:93183
              - col:93253
              - col:104797
              - col:105120
              - col:106723
              - col:106724
              - col:106726
              - col:106727
              - col:106728
              - col:106729
              - col:150561
              - col:152904
              - col:154771
              - col:74292
              - col:154804
              - col:154910
              - col:154921
              - col:195939
              - col:85142
              - col:225289
              - col:227368
              - col:230753
            sourceReferenceIds:
              - ref:1961
              - ref:1912
              - ref:2611
              - ref:33964
              - ref:2050
              - ref:3580
              - ref:3567
              - ref:1954
              - ref:1962
              - ref:24936
              - ref:26708
              - ref:31468
              - ref:31489
              - ref:31526
              - ref:35005
              - ref:35165
              - ref:35663
              - ref:48153
              - ref:49269
              - ref:50335
              - ref:50339
              - ref:50371
              - ref:50427
              - ref:50430
              - ref:41104
              - ref:71494
              - ref:81276
              - ref:82811
              - ref:85310
            originalIdentificationMappings:
              - occurrenceId: occ:196828
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:197928
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:197980
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:198291
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:198621
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:198881
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:199274
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:199313
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:199339
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:199544
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:199628
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:199846
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:199872
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:200002
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:361729
                originalIdentifiedName: Tapirus veroensis n. sp.
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:690435
                originalIdentifiedName: Tapirus tennesseae
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: null
              - occurrenceId: occ:740239
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:839005
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:840133
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:841239
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:915923
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:920382
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:931750
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:931751
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:931756
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:931757
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:931760
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:931762
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1169363
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1185084
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1196413
                originalIdentifiedName: Tapirus veroensis sellardsi n. ssp.
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: subspecies not entered
              - occurrenceId: occ:1196560
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1196897
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1197792
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1197874
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1416819
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1491082
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1593099
                originalIdentifiedName: Tapirus excelsus
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: null
              - occurrenceId: occ:1607382
                originalIdentifiedName: Tapirus veroensis
                acceptedName: Tapirus (Helicotapirus) veroensis
                difference: recombined as
              - occurrenceId: occ:1629205
                originalIdentifiedName: Tapirus excelsus
                acceptedName: Tapirus (Helicotapirus) veroensis
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

# Tapirus (Helicotapirus) veroensis
