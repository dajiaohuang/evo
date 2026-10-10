---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eurhinodelphis longirostris
    rank: species
    sourceDatasetId: null
    name:
      zh: Eurhinodelphis longirostris
      en: Eurhinodelphis longirostris
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
            title: PBDB accepted record — Eurhinodelphis longirostris
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=69732&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:69732; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:69732
            selectedOccurrenceIds:
              - occ:478754
              - occ:478755
              - occ:494408
              - occ:622596
              - occ:622623
              - occ:666797
              - occ:666813
              - occ:666815
              - occ:700399
              - occ:700400
              - occ:810426
              - occ:848395
              - occ:848397
            selectedCollectionIds:
              - col:47465
              - col:47125
              - col:52049
              - col:67026
              - col:55517
              - col:71798
              - col:71615
              - col:75152
              - col:75264
              - col:37599
              - col:51680
            sourceReferenceIds:
              - ref:12768
              - ref:13419
              - ref:19106
              - ref:24251
              - ref:29779
              - ref:25229
              - ref:29775
            originalIdentificationMappings:
              - occurrenceId: occ:478754
                originalIdentifiedName: Eurhinodelphis longirostris n. sp.
                acceptedName: Eurhinodelphis longirostris
                difference: null
              - occurrenceId: occ:478755
                originalIdentifiedName: Eurhinodelphis ambiguus n. sp.
                acceptedName: Eurhinodelphis longirostris
                difference: null
              - occurrenceId: occ:494408
                originalIdentifiedName: Schizodelphis longirostris
                acceptedName: Eurhinodelphis longirostris
                difference: recombined as
              - occurrenceId: occ:666797
                originalIdentifiedName: Rhabdosteus longirostris
                acceptedName: Eurhinodelphis longirostris
                difference: recombined as
              - occurrenceId: occ:666813
                originalIdentifiedName: Rhabdosteus longirostris
                acceptedName: Eurhinodelphis longirostris
                difference: recombined as
              - occurrenceId: occ:666815
                originalIdentifiedName: Rhabdosteus longirostris
                acceptedName: Eurhinodelphis longirostris
                difference: recombined as
              - occurrenceId: occ:848395
                originalIdentifiedName: Priscodelphinus elegans n. sp.
                acceptedName: Eurhinodelphis longirostris
                difference: null
              - occurrenceId: occ:848397
                originalIdentifiedName: Priscodelphinus pulvinatus n. sp.
                acceptedName: Eurhinodelphis longirostris
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

# Eurhinodelphis longirostris
