---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Longirostromeryx wellsi
    rank: species
    sourceDatasetId: null
    name:
      zh: Longirostromeryx wellsi
      en: Longirostromeryx wellsi
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
            title: PBDB accepted record — Longirostromeryx wellsi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44570&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44570; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44570
            selectedOccurrenceIds:
              - occ:184206
              - occ:184314
              - occ:184471
              - occ:184626
              - occ:185205
              - occ:185499
              - occ:185745
              - occ:185853
              - occ:186179
              - occ:186236
              - occ:186409
              - occ:186623
              - occ:186707
              - occ:186717
              - occ:186774
              - occ:186807
              - occ:186934
              - occ:187265
              - occ:187559
              - occ:188429
              - occ:191400
              - occ:1207849
              - occ:1207850
              - occ:1207852
              - occ:1207853
              - occ:1379507
            selectedCollectionIds:
              - col:18042
              - col:18063
              - col:18077
              - col:18092
              - col:18164
              - col:18204
              - col:18222
              - col:18233
              - col:18273
              - col:18275
              - col:18300
              - col:18324
              - col:18334
              - col:18336
              - col:18344
              - col:18352
              - col:18369
              - col:18442
              - col:18491
              - col:18628
              - col:19287
              - col:18644
              - col:19519
              - col:18217
              - col:18200
              - col:188779
            sourceReferenceIds:
              - ref:6294
              - ref:1720
              - ref:3564
              - ref:3510
              - ref:3175
              - ref:3356
              - ref:1706
              - ref:2737
              - ref:3380
              - ref:51375
              - ref:63362
            originalIdentificationMappings:
              - occurrenceId: occ:185205
                originalIdentifiedName: Longirostromeryx blicki
                acceptedName: Longirostromeryx wellsi
                difference: null
              - occurrenceId: occ:185745
                originalIdentifiedName: Longirostromeryx serpentis n. sp.
                acceptedName: Longirostromeryx wellsi
                difference: null
              - occurrenceId: occ:186236
                originalIdentifiedName: Longirostromeryx blicki
                acceptedName: Longirostromeryx wellsi
                difference: null
              - occurrenceId: occ:186807
                originalIdentifiedName: Longirostromeryx wellsi n. sp.
                acceptedName: Longirostromeryx wellsi
                difference: null
              - occurrenceId: occ:187265
                originalIdentifiedName: Longirostromeryx blicki
                acceptedName: Longirostromeryx wellsi
                difference: null
              - occurrenceId: occ:188429
                originalIdentifiedName: Longirostromeryx blicki
                acceptedName: Longirostromeryx wellsi
                difference: null
              - occurrenceId: occ:191400
                originalIdentifiedName: Longirostromeryx blicki
                acceptedName: Longirostromeryx wellsi
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

# Longirostromeryx wellsi
