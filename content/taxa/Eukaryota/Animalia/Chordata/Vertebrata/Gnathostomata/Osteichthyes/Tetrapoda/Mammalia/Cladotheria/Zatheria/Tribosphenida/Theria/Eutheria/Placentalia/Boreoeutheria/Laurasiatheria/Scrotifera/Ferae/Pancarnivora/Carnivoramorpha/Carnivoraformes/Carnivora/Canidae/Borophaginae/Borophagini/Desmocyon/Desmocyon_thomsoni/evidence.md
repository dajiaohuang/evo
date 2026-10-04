---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Desmocyon thomsoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Desmocyon thomsoni
      en: Desmocyon thomsoni
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
            title: PBDB accepted record — Desmocyon thomsoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45465&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45465; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45465
            selectedOccurrenceIds:
              - occ:182579
              - occ:182583
              - occ:182639
              - occ:182657
              - occ:182762
              - occ:182780
              - occ:182788
              - occ:182815
              - occ:182855
              - occ:182911
              - occ:182952
              - occ:183014
              - occ:183044
              - occ:183048
              - occ:183056
              - occ:183086
              - occ:183088
              - occ:183119
              - occ:183129
              - occ:183134
              - occ:183138
              - occ:183290
              - occ:183359
              - occ:183379
              - occ:183587
              - occ:183867
              - occ:183889
              - occ:183995
              - occ:184000
              - occ:191802
              - occ:1282378
              - occ:1282386
              - occ:1303809
            selectedCollectionIds:
              - col:17736
              - col:17738
              - col:17748
              - col:17752
              - col:17780
              - col:17785
              - col:17788
              - col:17793
              - col:17796
              - col:17805
              - col:17815
              - col:17820
              - col:17832
              - col:17833
              - col:17835
              - col:17838
              - col:17839
              - col:17846
              - col:17847
              - col:17848
              - col:17850
              - col:17881
              - col:17894
              - col:17899
              - col:17924
              - col:17989
              - col:17997
              - col:18008
              - col:18010
              - col:19388
              - col:170308
              - col:19037
              - col:167841
            sourceReferenceIds:
              - ref:3558
              - ref:2356
              - ref:6294
              - ref:1270
              - ref:9853
              - ref:56906
            originalIdentificationMappings:
              - occurrenceId: occ:182639
                originalIdentifiedName: Tomarctus thomsoni
                acceptedName: Desmocyon thomsoni
                difference: recombined as
              - occurrenceId: occ:183119
                originalIdentifiedName: Nothocyon regulus n. sp.
                acceptedName: Desmocyon thomsoni
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

# Desmocyon thomsoni
