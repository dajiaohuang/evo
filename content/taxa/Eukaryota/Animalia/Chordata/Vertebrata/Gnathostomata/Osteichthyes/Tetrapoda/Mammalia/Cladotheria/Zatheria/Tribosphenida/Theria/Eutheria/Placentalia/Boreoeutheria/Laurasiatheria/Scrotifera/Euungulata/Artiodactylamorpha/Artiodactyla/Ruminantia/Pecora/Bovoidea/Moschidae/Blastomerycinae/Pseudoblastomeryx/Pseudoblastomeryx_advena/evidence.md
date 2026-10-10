---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pseudoblastomeryx advena
    rank: species
    sourceDatasetId: null
    name:
      zh: Pseudoblastomeryx advena
      en: Pseudoblastomeryx advena
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
            title: PBDB accepted record — Pseudoblastomeryx advena
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44548&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44548; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44548
            selectedOccurrenceIds:
              - occ:181653
              - occ:182580
              - occ:182637
              - occ:182668
              - occ:182768
              - occ:183035
              - occ:183133
              - occ:183136
              - occ:183509
              - occ:183614
              - occ:648274
              - occ:648304
              - occ:1264674
            selectedCollectionIds:
              - col:17532
              - col:17736
              - col:17747
              - col:17756
              - col:17780
              - col:17827
              - col:17847
              - col:17848
              - col:17912
              - col:17927
              - col:28043
              - col:17843
              - col:167866
            sourceReferenceIds:
              - ref:6222
              - ref:1268
              - ref:6294
              - ref:51375
              - ref:9853
            originalIdentificationMappings:
              - occurrenceId: occ:181653
                originalIdentifiedName: Parablastomeryx falkenbachi
                acceptedName: Pseudoblastomeryx advena
                difference: null
              - occurrenceId: occ:182580
                originalIdentifiedName: Blastomeryx tantillus n. sp.
                acceptedName: Pseudoblastomeryx advena
                difference: null
              - occurrenceId: occ:182768
                originalIdentifiedName: Parablastomeryx falkenbachi n. sp.
                acceptedName: Pseudoblastomeryx advena
                difference: null
              - occurrenceId: occ:183133
                originalIdentifiedName: Pseudoblastomeryx falkenbachi
                acceptedName: Pseudoblastomeryx advena
                difference: null
              - occurrenceId: occ:183136
                originalIdentifiedName: Pseudoblastomeryx falkenbachi
                acceptedName: Pseudoblastomeryx advena
                difference: null
              - occurrenceId: occ:183614
                originalIdentifiedName: Pseudoblastomeryx marsa
                acceptedName: Pseudoblastomeryx advena
                difference: null
              - occurrenceId: occ:1264674
                originalIdentifiedName: Parablastomeryx schultzi
                acceptedName: Pseudoblastomeryx advena
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

# Pseudoblastomeryx advena
