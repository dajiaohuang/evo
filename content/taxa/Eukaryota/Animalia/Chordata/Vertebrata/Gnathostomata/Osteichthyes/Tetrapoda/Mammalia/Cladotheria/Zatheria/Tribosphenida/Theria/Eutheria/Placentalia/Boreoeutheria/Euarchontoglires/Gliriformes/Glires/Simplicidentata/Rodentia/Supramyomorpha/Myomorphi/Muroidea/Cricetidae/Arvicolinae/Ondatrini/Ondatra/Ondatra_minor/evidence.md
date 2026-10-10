---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ondatra minor
    rank: species
    sourceDatasetId: null
    name:
      zh: Ondatra minor
      en: Ondatra minor
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
            title: PBDB accepted record — Ondatra minor
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45889&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45889; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45889
            selectedOccurrenceIds:
              - occ:193935
              - occ:193949
              - occ:193956
              - occ:194061
              - occ:194089
              - occ:194096
              - occ:194100
              - occ:194112
              - occ:194128
              - occ:194204
              - occ:195256
              - occ:195649
              - occ:838808
              - occ:1381133
            selectedCollectionIds:
              - col:19815
              - col:19817
              - col:19819
              - col:19889
              - col:19903
              - col:19904
              - col:19905
              - col:19906
              - col:19908
              - col:19917
              - col:20062
              - col:20119
              - col:93106
              - col:189134
            sourceReferenceIds:
              - ref:3787
              - ref:6294
              - ref:1883
              - ref:1885
              - ref:31461
              - ref:60257
            originalIdentificationMappings:
              - occurrenceId: occ:193935
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:193949
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:193956
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:194089
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:194096
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:194100
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:194112
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:838808
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
                difference: recombined as
              - occurrenceId: occ:1381133
                originalIdentifiedName: Pliopotamys minor
                acceptedName: Ondatra minor
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

# Ondatra minor
