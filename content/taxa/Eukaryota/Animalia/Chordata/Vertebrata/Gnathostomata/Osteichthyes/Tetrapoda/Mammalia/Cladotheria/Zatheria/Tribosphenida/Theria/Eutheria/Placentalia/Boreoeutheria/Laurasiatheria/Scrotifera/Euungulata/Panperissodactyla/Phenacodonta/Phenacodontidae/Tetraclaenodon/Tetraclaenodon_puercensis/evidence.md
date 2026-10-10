---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tetraclaenodon puercensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Tetraclaenodon puercensis
      en: Tetraclaenodon puercensis
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
            title: PBDB accepted record — Tetraclaenodon puercensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50317&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50317; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50317
            selectedOccurrenceIds:
              - occ:164573
              - occ:164586
              - occ:164613
              - occ:164638
              - occ:164648
              - occ:164649
              - occ:164700
              - occ:164713
              - occ:164719
              - occ:164801
              - occ:164827
              - occ:164849
              - occ:164902
              - occ:164917
              - occ:164943
              - occ:164951
              - occ:164970
              - occ:164980
              - occ:164984
              - occ:165017
              - occ:165031
              - occ:165125
              - occ:165144
              - occ:165150
              - occ:165185
              - occ:165225
              - occ:165257
              - occ:165353
              - occ:165419
              - occ:165450
              - occ:165453
              - occ:165466
              - occ:166547
              - occ:166548
              - occ:1127572
              - occ:1493206
            selectedCollectionIds:
              - col:14811
              - col:14812
              - col:14815
              - col:14816
              - col:14817
              - col:14818
              - col:14824
              - col:14825
              - col:14826
              - col:14832
              - col:14833
              - col:14835
              - col:14858
              - col:14862
              - col:14865
              - col:14867
              - col:14868
              - col:14869
              - col:14870
              - col:14873
              - col:14874
              - col:14886
              - col:14891
              - col:14892
              - col:14893
              - col:14897
              - col:14898
              - col:14906
              - col:14912
              - col:14913
              - col:14914
              - col:14918
              - col:15044
              - col:15045
              - col:143200
              - col:14937
            sourceReferenceIds:
              - ref:3646
              - ref:3657
              - ref:3375
              - ref:3700
              - ref:3591
              - ref:3592
              - ref:3649
              - ref:3157
              - ref:3096
              - ref:3401
              - ref:2905
              - ref:829
              - ref:2953
              - ref:6294
              - ref:46399
            originalIdentificationMappings:
              - occurrenceId: occ:1493206
                originalIdentifiedName: Tetraclaenodon pliciferus
                acceptedName: Tetraclaenodon puercensis
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

# Tetraclaenodon puercensis
