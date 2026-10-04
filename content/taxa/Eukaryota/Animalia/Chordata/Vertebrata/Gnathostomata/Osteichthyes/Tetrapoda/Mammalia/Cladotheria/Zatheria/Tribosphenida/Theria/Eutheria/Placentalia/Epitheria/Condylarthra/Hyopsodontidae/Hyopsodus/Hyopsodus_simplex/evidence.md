---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyopsodus simplex
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyopsodus simplex
      en: Hyopsodus simplex
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
            title: PBDB accepted record — Hyopsodus simplex
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47186&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47186; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47186
            selectedOccurrenceIds:
              - occ:168658
              - occ:168905
              - occ:168912
              - occ:168959
              - occ:170739
              - occ:170741
              - occ:170743
              - occ:170746
              - occ:170748
              - occ:170750
              - occ:170752
              - occ:170754
              - occ:170756
              - occ:170758
              - occ:170761
              - occ:170764
              - occ:170766
              - occ:170768
              - occ:170770
              - occ:170772
              - occ:170774
              - occ:170776
              - occ:170869
              - occ:171085
              - occ:171278
              - occ:171802
              - occ:172170
              - occ:172225
              - occ:172373
              - occ:457606
              - occ:457631
              - occ:457760
              - occ:457778
              - occ:458681
              - occ:458696
              - occ:469444
              - occ:469466
              - occ:469634
              - occ:469755
              - occ:469801
              - occ:469893
              - occ:469987
              - occ:470068
              - occ:470082
              - occ:470097
              - occ:470149
              - occ:470158
              - occ:470188
              - occ:470202
              - occ:470217
              - occ:470228
              - occ:470252
              - occ:470257
              - occ:470265
              - occ:470290
              - occ:470300
              - occ:470431
              - occ:470444
              - occ:470461
              - occ:471232
              - occ:471321
            selectedCollectionIds:
              - col:15450
              - col:15480
              - col:15482
              - col:15485
              - col:15624
              - col:15625
              - col:15626
              - col:15627
              - col:15628
              - col:15629
              - col:15630
              - col:15631
              - col:15632
              - col:15633
              - col:15634
              - col:15635
              - col:15636
              - col:15637
              - col:15638
              - col:15639
              - col:15640
              - col:15641
              - col:15660
              - col:15694
              - col:15725
              - col:15790
              - col:15845
              - col:15859
              - col:15887
              - col:15687
              - col:15692
              - col:15700
              - col:15701
              - col:15706
              - col:15707
              - col:46682
              - col:46683
              - col:46696
              - col:46704
              - col:46707
              - col:46719
              - col:46729
              - col:46734
              - col:46735
              - col:46736
              - col:46740
              - col:46741
              - col:46745
              - col:46746
              - col:46747
              - col:46748
              - col:46750
              - col:46751
              - col:46752
              - col:46754
              - col:46755
              - col:46765
              - col:46766
              - col:46767
              - col:46820
              - col:46829
            sourceReferenceIds:
              - ref:6223
              - ref:1662
              - ref:11717
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

# Hyopsodus simplex
