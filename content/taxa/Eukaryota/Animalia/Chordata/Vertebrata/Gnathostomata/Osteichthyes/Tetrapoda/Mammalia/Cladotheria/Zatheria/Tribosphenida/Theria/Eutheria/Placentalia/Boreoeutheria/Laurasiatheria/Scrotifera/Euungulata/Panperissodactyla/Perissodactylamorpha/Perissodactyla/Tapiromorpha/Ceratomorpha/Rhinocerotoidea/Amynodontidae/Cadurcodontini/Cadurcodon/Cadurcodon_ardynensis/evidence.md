---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cadurcodon ardynensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Cadurcodon ardynensis
      en: Cadurcodon ardynensis
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
            title: PBDB accepted record — Cadurcodon ardynensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=253282&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:253282; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:253282
            selectedOccurrenceIds:
              - occ:398748
              - occ:398866
              - occ:431713
              - occ:431730
              - occ:431737
              - occ:431746
              - occ:431748
              - occ:684780
              - occ:1305327
              - occ:1318152
              - occ:1318153
              - occ:1318154
              - occ:1347613
              - occ:1347629
            selectedCollectionIds:
              - col:38303
              - col:38309
              - col:41120
              - col:42194
              - col:42198
              - col:73781
              - col:174716
              - col:177064
              - col:177065
              - col:72147
              - col:182580
            sourceReferenceIds:
              - ref:9225
              - ref:11242
              - ref:11241
              - ref:44020
              - ref:3497
              - ref:58493
              - ref:60749
              - ref:60755
            originalIdentificationMappings:
              - occurrenceId: occ:431713
                originalIdentifiedName: Cadurcotherium ardynense
                acceptedName: Cadurcodon ardynensis
                difference: recombined as
              - occurrenceId: occ:431730
                originalIdentifiedName: Cadurcotherium ardynense
                acceptedName: Cadurcodon ardynensis
                difference: recombined as
              - occurrenceId: occ:431737
                originalIdentifiedName: Cadurcotherium ardynense
                acceptedName: Cadurcodon ardynensis
                difference: recombined as
              - occurrenceId: occ:431746
                originalIdentifiedName: '"Cadurcodon" ardynensis'
                acceptedName: Cadurcodon ardynensis
                difference: null
              - occurrenceId: occ:431748
                originalIdentifiedName: '"Cadurcodon" ardynensis'
                acceptedName: Cadurcodon ardynensis
                difference: null
              - occurrenceId: occ:684780
                originalIdentifiedName: Cadurcotherium ardynense n. sp.
                acceptedName: Cadurcodon ardynensis
                difference: recombined as
              - occurrenceId: occ:1318152
                originalIdentifiedName: Cadurcodon zaisanensis n. sp.
                acceptedName: Cadurcodon ardynensis
                difference: null
              - occurrenceId: occ:1318154
                originalIdentifiedName: Amynodon tuskabakensis n. sp.
                acceptedName: Cadurcodon ardynensis
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

# Cadurcodon ardynensis
