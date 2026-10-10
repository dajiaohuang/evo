---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Azygonyx xenicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Azygonyx xenicus
      en: Azygonyx xenicus
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
            title: PBDB accepted record — Azygonyx xenicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46342&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46342; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46342
            selectedOccurrenceIds:
              - occ:166786
              - occ:166930
              - occ:167236
              - occ:167282
              - occ:167291
              - occ:167425
              - occ:167701
            selectedCollectionIds:
              - col:15072
              - col:15088
              - col:15126
              - col:15134
              - col:15136
              - col:15158
              - col:15204
            sourceReferenceIds:
              - ref:1346
              - ref:1668
              - ref:2953
            originalIdentificationMappings:
              - occurrenceId: occ:166786
                originalIdentifiedName: Esthonyx xenicus
                acceptedName: Azygonyx xenicus
                difference: recombined as
              - occurrenceId: occ:166930
                originalIdentifiedName: Esthonyx xenicus
                acceptedName: Azygonyx xenicus
                difference: recombined as
              - occurrenceId: occ:167236
                originalIdentifiedName: Esthonyx xenicus n. sp.
                acceptedName: Azygonyx xenicus
                difference: recombined as
              - occurrenceId: occ:167282
                originalIdentifiedName: Esthonyx xenicus
                acceptedName: Azygonyx xenicus
                difference: recombined as
              - occurrenceId: occ:167291
                originalIdentifiedName: Esthonyx xenicus
                acceptedName: Azygonyx xenicus
                difference: recombined as
              - occurrenceId: occ:167425
                originalIdentifiedName: Esthonyx xenicus
                acceptedName: Azygonyx xenicus
                difference: recombined as
              - occurrenceId: occ:167701
                originalIdentifiedName: Esthonyx xenicus
                acceptedName: Azygonyx xenicus
                difference: recombined as
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

# Azygonyx xenicus
