---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyopsodus minor
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyopsodus minor
      en: Hyopsodus minor
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
            title: PBDB accepted record — Hyopsodus minor
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47178&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47178; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47178
            selectedOccurrenceIds:
              - occ:168543
              - occ:170744
              - occ:170948
              - occ:172678
              - occ:172684
              - occ:172688
              - occ:172851
              - occ:172987
              - occ:173003
              - occ:173006
              - occ:173009
              - occ:173018
              - occ:173023
              - occ:173026
              - occ:173033
              - occ:173036
              - occ:173049
              - occ:173054
              - occ:173057
              - occ:173060
              - occ:456869
              - occ:457579
              - occ:457590
              - occ:458732
              - occ:458738
              - occ:458745
              - occ:458750
              - occ:469587
              - occ:469679
              - occ:469708
              - occ:469724
              - occ:469736
              - occ:469742
              - occ:469788
              - occ:469821
              - occ:469830
              - occ:470412
              - occ:471293
              - occ:471304
              - occ:471529
              - occ:471555
              - occ:471569
              - occ:1370091
              - occ:1370096
              - occ:1370104
              - occ:1370110
              - occ:1370124
              - occ:1370130
              - occ:1370148
              - occ:1370158
              - occ:1370169
              - occ:1370179
              - occ:1370191
              - occ:1370194
              - occ:1370197
              - occ:1370200
            selectedCollectionIds:
              - col:15437
              - col:15626
              - col:15663
              - col:15924
              - col:15927
              - col:15928
              - col:15939
              - col:15964
              - col:15965
              - col:15966
              - col:15967
              - col:15971
              - col:15973
              - col:15974
              - col:15977
              - col:15978
              - col:15984
              - col:15986
              - col:15987
              - col:15988
              - col:15680
              - col:15684
              - col:15685
              - col:15689
              - col:15690
              - col:15691
              - col:15693
              - col:46692
              - col:46699
              - col:46700
              - col:46701
              - col:46702
              - col:46703
              - col:46706
              - col:46710
              - col:46711
              - col:46763
              - col:46825
              - col:46826
              - col:46847
              - col:46849
              - col:46851
              - col:186932
              - col:186933
              - col:186934
              - col:186935
              - col:186937
              - col:186938
              - col:186943
              - col:186944
              - col:186945
              - col:186946
              - col:186949
              - col:186950
              - col:186951
              - col:186952
            sourceReferenceIds:
              - ref:6223
              - ref:11717
              - ref:62695
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

# Hyopsodus minor
