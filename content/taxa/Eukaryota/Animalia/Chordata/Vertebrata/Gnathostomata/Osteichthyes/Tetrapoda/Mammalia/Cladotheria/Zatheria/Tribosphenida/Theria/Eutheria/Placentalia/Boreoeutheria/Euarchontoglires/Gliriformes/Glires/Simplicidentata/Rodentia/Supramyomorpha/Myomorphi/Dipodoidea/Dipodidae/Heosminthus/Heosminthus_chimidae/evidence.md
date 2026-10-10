---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Heosminthus chimidae
    rank: species
    sourceDatasetId: null
    name:
      zh: Heosminthus chimidae
      en: Heosminthus chimidae
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
            title: PBDB accepted record — Heosminthus chimidae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=357753&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:357753; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:357753
            selectedOccurrenceIds:
              - occ:1371742
              - occ:1371743
              - occ:1371744
              - occ:1371745
              - occ:1371746
              - occ:1371747
              - occ:1371748
              - occ:1371749
              - occ:1371750
              - occ:1371751
              - occ:1371752
              - occ:1371753
              - occ:1371754
              - occ:1371755
              - occ:1371756
              - occ:1371757
              - occ:1371758
              - occ:1371759
              - occ:1371760
              - occ:1371761
              - occ:1371762
              - occ:1371763
              - occ:1371764
              - occ:1371765
              - occ:1371770
              - occ:1371771
              - occ:1371772
              - occ:1371777
              - occ:1371778
              - occ:1371779
              - occ:1371780
              - occ:1371781
              - occ:1371782
              - occ:1371783
              - occ:1371789
              - occ:1371791
              - occ:1371792
              - occ:1441230
              - occ:1441278
              - occ:1441341
              - occ:1441567
              - occ:1441675
            selectedCollectionIds:
              - col:75601
              - col:187294
              - col:180955
              - col:175169
              - col:187295
              - col:180962
              - col:182072
              - col:187296
              - col:180954
              - col:180953
              - col:75595
              - col:180964
              - col:180956
              - col:187263
              - col:187298
              - col:187293
              - col:182075
              - col:182074
              - col:187299
              - col:182081
              - col:182082
              - col:182078
              - col:187300
              - col:180969
              - col:187301
              - col:180963
              - col:175168
              - col:180960
              - col:187260
              - col:180958
              - col:180959
              - col:180961
              - col:175171
              - col:187304
              - col:180986
              - col:187258
              - col:187257
              - col:182131
              - col:75588
              - col:135791
              - col:201176
              - col:201191
            sourceReferenceIds:
              - ref:62824
              - ref:68908
            originalIdentificationMappings:
              - occurrenceId: occ:1371742
                originalIdentifiedName: Heosminthus chimidae n. sp.
                acceptedName: Heosminthus chimidae
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

# Heosminthus chimidae
