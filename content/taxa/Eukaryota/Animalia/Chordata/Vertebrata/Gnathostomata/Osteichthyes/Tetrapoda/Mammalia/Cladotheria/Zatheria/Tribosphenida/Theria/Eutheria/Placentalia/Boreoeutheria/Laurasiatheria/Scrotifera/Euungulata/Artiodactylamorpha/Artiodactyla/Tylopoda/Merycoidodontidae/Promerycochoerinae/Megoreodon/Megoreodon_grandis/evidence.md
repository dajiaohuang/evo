---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Megoreodon grandis
    rank: species
    sourceDatasetId: null
    name:
      zh: Megoreodon grandis
      en: Megoreodon grandis
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
            title: PBDB accepted record — Megoreodon grandis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50814&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50814; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50814
            selectedOccurrenceIds:
              - occ:181248
              - occ:181276
              - occ:181648
              - occ:181908
              - occ:181939
              - occ:181967
              - occ:182091
              - occ:182474
              - occ:182534
              - occ:647065
              - occ:1654754
              - occ:1654756
            selectedCollectionIds:
              - col:17466
              - col:17472
              - col:17532
              - col:17569
              - col:17584
              - col:17595
              - col:17627
              - col:17704
              - col:17723
              - col:69921
              - col:17478
            sourceReferenceIds:
              - ref:3041
              - ref:3067
              - ref:2651
              - ref:2356
              - ref:3174
              - ref:19303
              - ref:56847
            originalIdentificationMappings:
              - occurrenceId: occ:181248
                originalIdentifiedName: Promerycochoerus loomisi n. sp.
                acceptedName: Megoreodon grandis
                difference: null
              - occurrenceId: occ:181276
                originalIdentifiedName: Megoreodon fricki n. sp.
                acceptedName: Megoreodon grandis
                difference: null
              - occurrenceId: occ:182091
                originalIdentifiedName: Megoreodon hollandi
                acceptedName: Megoreodon grandis
                difference: null
              - occurrenceId: occ:182474
                originalIdentifiedName: Megoreodon hollandi
                acceptedName: Megoreodon grandis
                difference: null
              - occurrenceId: occ:182534
                originalIdentifiedName: Megoreodon hollandi
                acceptedName: Megoreodon grandis
                difference: null
              - occurrenceId: occ:647065
                originalIdentifiedName: Megoreodon hollandi
                acceptedName: Megoreodon grandis
                difference: null
              - occurrenceId: occ:1654754
                originalIdentifiedName: Promerycochoerus grandis n. sp.
                acceptedName: Megoreodon grandis
                difference: recombined as
              - occurrenceId: occ:1654756
                originalIdentifiedName: Promerycochoerus hollandi n. sp.
                acceptedName: Megoreodon grandis
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

# Megoreodon grandis
