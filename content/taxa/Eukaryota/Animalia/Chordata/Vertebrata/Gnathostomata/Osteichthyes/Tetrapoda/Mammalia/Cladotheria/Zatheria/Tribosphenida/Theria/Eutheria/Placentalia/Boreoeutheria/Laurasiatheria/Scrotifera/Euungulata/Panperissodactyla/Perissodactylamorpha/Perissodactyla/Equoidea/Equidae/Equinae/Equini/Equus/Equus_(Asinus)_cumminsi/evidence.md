---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Equus (Asinus) cumminsi
    rank: species
    sourceDatasetId: null
    name:
      zh: Equus (Asinus) cumminsi
      en: Equus (Asinus) cumminsi
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
            title: PBDB accepted record — Equus (Asinus) cumminsi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46264&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46264; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46264
            selectedOccurrenceIds:
              - occ:194300
              - occ:194989
              - occ:195035
              - occ:195145
              - occ:195166
              - occ:195177
              - occ:195181
            selectedCollectionIds:
              - col:19929
              - col:20023
              - col:20031
              - col:20050
              - col:20052
              - col:20056
              - col:20059
            sourceReferenceIds:
              - ref:6254
              - ref:1309
              - ref:928
            originalIdentificationMappings:
              - occurrenceId: occ:194300
                originalIdentifiedName: Equus cumminsii
                acceptedName: Equus (Asinus) cumminsi
                difference: recombined as
              - occurrenceId: occ:194989
                originalIdentifiedName: Equus cumminsii
                acceptedName: Equus (Asinus) cumminsi
                difference: recombined as
              - occurrenceId: occ:195035
                originalIdentifiedName: Equus cumminsii
                acceptedName: Equus (Asinus) cumminsi
                difference: recombined as
              - occurrenceId: occ:195145
                originalIdentifiedName: Equus cumminsii
                acceptedName: Equus (Asinus) cumminsi
                difference: recombined as
              - occurrenceId: occ:195166
                originalIdentifiedName: Equus cumminsii
                acceptedName: Equus (Asinus) cumminsi
                difference: recombined as
              - occurrenceId: occ:195177
                originalIdentifiedName: Equus cumminsii
                acceptedName: Equus (Asinus) cumminsi
                difference: recombined as
              - occurrenceId: occ:195181
                originalIdentifiedName: Equus cumminsi
                acceptedName: Equus (Asinus) cumminsi
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

# Equus (Asinus) cumminsi
