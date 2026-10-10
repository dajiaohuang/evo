---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pachyacanthus suessii
    rank: species
    sourceDatasetId: null
    name:
      zh: Pachyacanthus suessii
      en: Pachyacanthus suessii
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
            title: PBDB accepted record — Pachyacanthus suessii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=64470&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:64470; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:64470
            selectedOccurrenceIds:
              - occ:513827
              - occ:614659
              - occ:614660
              - occ:787228
              - occ:789014
              - occ:790116
              - occ:790123
              - occ:790124
              - occ:790127
              - occ:874178
              - occ:874179
              - occ:874180
              - occ:874181
              - occ:1674758
            selectedCollectionIds:
              - col:48029
              - col:66064
              - col:47080
              - col:73366
              - col:85507
              - col:73276
              - col:96922
              - col:73367
              - col:59664
              - col:96923
              - col:237418
            sourceReferenceIds:
              - ref:12127
              - ref:18919
              - ref:11981
              - ref:18748
              - ref:33091
              - ref:90036
            originalIdentificationMappings:
              - occurrenceId: occ:513827
                originalIdentifiedName: Pachyacanthus suessii n. gen. n. sp.
                acceptedName: Pachyacanthus suessii
                difference: null
              - occurrenceId: occ:614659
                originalIdentifiedName: Pachyacanthus andrussovi n. sp.
                acceptedName: Pachyacanthus suessii
                difference: null
              - occurrenceId: occ:614660
                originalIdentifiedName: Pachyacanthus bajarunasi n. sp.
                acceptedName: Pachyacanthus suessii
                difference: null
              - occurrenceId: occ:787228
                originalIdentifiedName: Pachyacanthus letochae n. sp.
                acceptedName: Pachyacanthus suessii
                difference: null
              - occurrenceId: occ:789014
                originalIdentifiedName: Cetotherium ambiguum n. sp.
                acceptedName: Pachyacanthus suessii
                difference: null
              - occurrenceId: occ:790116
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:790123
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:790124
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:790127
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:874178
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:874179
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:874180
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:874181
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
              - occurrenceId: occ:1674758
                originalIdentifiedName: Pachyacanthus suessi
                acceptedName: Pachyacanthus suessii
                difference: variant of
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

# Pachyacanthus suessii
