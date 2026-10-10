---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Raphicerus campestris
    rank: species
    sourceDatasetId: null
    name:
      zh: Raphicerus campestris
      en: Raphicerus campestris
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
            title: PBDB accepted record — Raphicerus campestris
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=149590&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:149590; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:149590
            selectedOccurrenceIds:
              - occ:213126
              - occ:213260
              - occ:214076
              - occ:214119
              - occ:214124
              - occ:214207
              - occ:214215
              - occ:220378
              - occ:220387
              - occ:220401
              - occ:220593
              - occ:220622
              - occ:220641
              - occ:220648
              - occ:220659
              - occ:220676
              - occ:220834
              - occ:220861
              - occ:220868
              - occ:220876
              - occ:220888
              - occ:220950
              - occ:220981
              - occ:221015
              - occ:225006
              - occ:225096
              - occ:225194
              - occ:225229
              - occ:225298
              - occ:225761
              - occ:225856
              - occ:225916
              - occ:225932
              - occ:225995
              - occ:226077
              - occ:340503
              - occ:340521
              - occ:340542
              - occ:340561
              - occ:340599
              - occ:340789
              - occ:504051
              - occ:583609
              - occ:819529
              - occ:970845
              - occ:970927
              - occ:971100
              - occ:1106788
            selectedCollectionIds:
              - col:21690
              - col:21693
              - col:21925
              - col:21942
              - col:21943
              - col:21955
              - col:21957
              - col:21866
              - col:21867
              - col:21868
              - col:21896
              - col:21897
              - col:21908
              - col:21909
              - col:21911
              - col:21912
              - col:21940
              - col:21944
              - col:21945
              - col:21946
              - col:21947
              - col:21949
              - col:21950
              - col:21951
              - col:21824
              - col:21825
              - col:21827
              - col:21828
              - col:21829
              - col:21922
              - col:21929
              - col:21933
              - col:21934
              - col:21938
              - col:21956
              - col:32113
              - col:32115
              - col:32119
              - col:32124
              - col:32126
              - col:32138
              - col:51187
              - col:21695
              - col:90070
              - col:115167
              - col:115184
              - col:115205
              - col:115191
            sourceReferenceIds:
              - ref:4792
              - ref:4805
              - ref:5237
              - ref:5214
              - ref:5218
              - ref:5219
              - ref:5227
              - ref:5213
              - ref:5248
              - ref:5249
              - ref:5250
              - ref:4896
              - ref:4892
              - ref:4895
              - ref:4888
              - ref:5236
              - ref:5238
              - ref:5243
              - ref:5242
              - ref:5255
              - ref:8626
              - ref:13638
              - ref:17685
              - ref:30193
              - ref:37301
              - ref:37303
              - ref:37314
              - ref:45190
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

# Raphicerus campestris
