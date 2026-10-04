---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Indohyus indirae
    rank: species
    sourceDatasetId: null
    name:
      zh: Indohyus indirae
      en: Indohyus indirae
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
            title: PBDB accepted record — Indohyus indirae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=86796&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:86796; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:86796
            selectedOccurrenceIds:
              - occ:150152
              - occ:150153
              - occ:461460
              - occ:462618
              - occ:462619
              - occ:462620
              - occ:722502
              - occ:805656
              - occ:843156
              - occ:1682300
            selectedCollectionIds:
              - col:13303
              - col:45529
              - col:45588
              - col:77524
              - col:87965
              - col:180536
            sourceReferenceIds:
              - ref:4421
              - ref:11944
              - ref:12021
              - ref:31734
              - ref:11799
              - ref:90492
            originalIdentificationMappings:
              - occurrenceId: occ:150152
                originalIdentifiedName: Raoella dograi n. gen. n. sp.
                acceptedName: Indohyus indirae
                difference: null
              - occurrenceId: occ:150153
                originalIdentifiedName: Kunmunella rajauriensis n. gen. n. sp.
                acceptedName: Indohyus indirae
                difference: null
              - occurrenceId: occ:461460
                originalIdentifiedName: Haqueina haquei n. gen. n. sp.
                acceptedName: Indohyus indirae
                difference: null
              - occurrenceId: occ:462618
                originalIdentifiedName: Kunmunella kalakotensis
                acceptedName: Indohyus indirae
                difference: null
              - occurrenceId: occ:462619
                originalIdentifiedName: Kunmunella transversa n. sp.
                acceptedName: Indohyus indirae
                difference: null
              - occurrenceId: occ:722502
                originalIdentifiedName: Indohyus indirae n. sp.
                acceptedName: Indohyus indirae
                difference: null
              - occurrenceId: occ:805656
                originalIdentifiedName: Kunmunella transversa
                acceptedName: Indohyus indirae
                difference: null
              - occurrenceId: occ:843156
                originalIdentifiedName: Indohyus kalakotensis n. sp.
                acceptedName: Indohyus indirae
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

# Indohyus indirae
