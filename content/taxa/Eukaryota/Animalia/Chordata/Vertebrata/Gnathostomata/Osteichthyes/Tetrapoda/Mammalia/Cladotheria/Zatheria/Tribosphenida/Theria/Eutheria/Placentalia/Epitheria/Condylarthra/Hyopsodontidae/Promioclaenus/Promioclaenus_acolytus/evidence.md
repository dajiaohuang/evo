---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Promioclaenus acolytus
    rank: species
    sourceDatasetId: null
    name:
      zh: Promioclaenus acolytus
      en: Promioclaenus acolytus
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
            title: PBDB accepted record — Promioclaenus acolytus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47161&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47161; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47161
            selectedOccurrenceIds:
              - occ:164612
              - occ:164641
              - occ:164698
              - occ:164799
              - occ:164825
              - occ:164847
              - occ:164885
              - occ:164941
              - occ:164953
              - occ:164972
              - occ:165014
              - occ:165063
              - occ:165123
              - occ:165149
              - occ:165183
              - occ:165214
              - occ:165226
              - occ:165258
              - occ:165266
              - occ:165280
              - occ:165311
              - occ:165357
              - occ:165414
              - occ:165449
              - occ:165455
              - occ:165478
              - occ:166302
              - occ:166309
              - occ:166319
              - occ:898207
              - occ:898210
              - occ:1426195
              - occ:1426203
              - occ:1426219
              - occ:1426228
            selectedCollectionIds:
              - col:14815
              - col:14816
              - col:14824
              - col:14832
              - col:14833
              - col:14835
              - col:14851
              - col:14865
              - col:14867
              - col:14868
              - col:14873
              - col:14884
              - col:14886
              - col:14892
              - col:14893
              - col:14896
              - col:14897
              - col:14898
              - col:14899
              - col:14902
              - col:14905
              - col:14906
              - col:14912
              - col:14913
              - col:14915
              - col:14920
              - col:15012
              - col:15013
              - col:15014
              - col:99821
              - col:99822
              - col:198265
              - col:198262
              - col:198263
              - col:198264
            sourceReferenceIds:
              - ref:3375
              - ref:3700
              - ref:3649
              - ref:3096
              - ref:3657
              - ref:3024
              - ref:2905
              - ref:829
              - ref:6294
              - ref:34317
              - ref:67545
            originalIdentificationMappings:
              - occurrenceId: occ:1426219
                originalIdentifiedName: Promioclaenus aquilonius
                acceptedName: Promioclaenus acolytus
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

# Promioclaenus acolytus
