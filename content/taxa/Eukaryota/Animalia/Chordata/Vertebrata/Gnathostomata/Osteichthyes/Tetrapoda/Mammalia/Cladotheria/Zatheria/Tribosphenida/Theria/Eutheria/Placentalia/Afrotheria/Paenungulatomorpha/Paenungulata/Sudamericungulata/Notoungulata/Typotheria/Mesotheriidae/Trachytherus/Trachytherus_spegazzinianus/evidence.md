---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Trachytherus spegazzinianus
    rank: species
    sourceDatasetId: null
    name:
      zh: Trachytherus spegazzinianus
      en: Trachytherus spegazzinianus
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
            title: PBDB accepted record — Trachytherus spegazzinianus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=187919&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:187919; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:187919
            selectedOccurrenceIds:
              - occ:200523
              - occ:496745
              - occ:496746
              - occ:496747
              - occ:1314778
              - occ:1315033
              - occ:1315114
              - occ:1315224
              - occ:1316417
              - occ:1316418
              - occ:1316419
              - occ:1316420
            selectedCollectionIds:
              - col:13276
              - col:14211
              - col:92670
              - col:176269
              - col:146358
              - col:50074
              - col:176650
              - col:176647
            sourceReferenceIds:
              - ref:43122
              - ref:13480
              - ref:13081
              - ref:58252
            originalIdentificationMappings:
              - occurrenceId: occ:496745
                originalIdentifiedName: Eutrachytherus grandis n. sp.
                acceptedName: Trachytherus spegazzinianus
                difference: null
              - occurrenceId: occ:496746
                originalIdentifiedName: Eutrachytherus spegazzinianus
                acceptedName: Trachytherus spegazzinianus
                difference: recombined as
              - occurrenceId: occ:496747
                originalIdentifiedName: Isoproedrium solitarium
                acceptedName: Trachytherus spegazzinianus
                difference: null
              - occurrenceId: occ:1315224
                originalIdentifiedName: Proedium solitarium n. gen. n. sp.
                acceptedName: Trachytherus spegazzinianus
                difference: null
              - occurrenceId: occ:1316417
                originalIdentifiedName: Anatrachytherus soriae n. gen. n. sp.
                acceptedName: Trachytherus spegazzinianus
                difference: null
              - occurrenceId: occ:1316418
                originalIdentifiedName: Ameghinotherium curuzucuatiense n. gen. n. sp.
                acceptedName: Trachytherus spegazzinianus
                difference: null
              - occurrenceId: occ:1316419
                originalIdentifiedName: Coresodon cancellatus n. sp.
                acceptedName: Trachytherus spegazzinianus
                difference: null
              - occurrenceId: occ:1316420
                originalIdentifiedName: Trachytherus spegazzinianus n. gen. n. sp.
                acceptedName: Trachytherus spegazzinianus
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

# Trachytherus spegazzinianus
