---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyracodon nebraskensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyracodon nebraskensis
      en: Hyracodon nebraskensis
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
            title: PBDB accepted record — Hyracodon nebraskensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51352&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51352; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51352
            selectedOccurrenceIds:
              - occ:177977
              - occ:177992
              - occ:178207
              - occ:178294
              - occ:179124
              - occ:179262
              - occ:179384
              - occ:179395
              - occ:179510
              - occ:179595
              - occ:179620
              - occ:179653
              - occ:179708
              - occ:179840
              - occ:180031
              - occ:180047
              - occ:180060
              - occ:180087
              - occ:180111
              - occ:180123
              - occ:180141
              - occ:180565
              - occ:180856
              - occ:180957
              - occ:180962
              - occ:181015
              - occ:1366017
            selectedCollectionIds:
              - col:16917
              - col:16918
              - col:16930
              - col:16940
              - col:17014
              - col:17033
              - col:17062
              - col:17064
              - col:17082
              - col:17092
              - col:17094
              - col:17098
              - col:17103
              - col:17115
              - col:17163
              - col:17164
              - col:17165
              - col:17173
              - col:17174
              - col:17175
              - col:17180
              - col:17296
              - col:17344
              - col:17361
              - col:17366
              - col:17379
              - col:118198
            sourceReferenceIds:
              - ref:2716
              - ref:1757
              - ref:1803
              - ref:6294
              - ref:6272
              - ref:1328
              - ref:6205
              - ref:3163
              - ref:1235
              - ref:3169
              - ref:3170
              - ref:2711
              - ref:62305
            originalIdentificationMappings:
              - occurrenceId: occ:179262
                originalIdentifiedName: Hyracodon doddi n. sp.
                acceptedName: Hyracodon nebraskensis
                difference: null
              - occurrenceId: occ:179395
                originalIdentifiedName: Hyracodon nebrascensis
                acceptedName: Hyracodon nebraskensis
                difference: recombined as
              - occurrenceId: occ:180141
                originalIdentifiedName: Hyracodon nebrascensis
                acceptedName: Hyracodon nebraskensis
                difference: recombined as
              - occurrenceId: occ:180565
                originalIdentifiedName: Hyracodon nebrascensis
                acceptedName: Hyracodon nebraskensis
                difference: recombined as
              - occurrenceId: occ:180856
                originalIdentifiedName: Hyracodon nebrascensis
                acceptedName: Hyracodon nebraskensis
                difference: recombined as
              - occurrenceId: occ:1366017
                originalIdentifiedName: Hyracodon arcidens n. sp.
                acceptedName: Hyracodon nebraskensis
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

# Hyracodon nebraskensis
