---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Calippus proplacidus
    rank: species
    sourceDatasetId: null
    name:
      zh: Calippus proplacidus
      en: Calippus proplacidus
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
            title: PBDB accepted record — Calippus proplacidus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51031&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51031; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51031
            selectedOccurrenceIds:
              - occ:184598
              - occ:184890
              - occ:186326
              - occ:187654
              - occ:187667
              - occ:188120
              - occ:188130
              - occ:188264
              - occ:188327
              - occ:188341
              - occ:188355
              - occ:188425
              - occ:188472
              - occ:188530
              - occ:188539
              - occ:188550
              - occ:188563
              - occ:188674
              - occ:188680
              - occ:188683
              - occ:188685
              - occ:188700
            selectedCollectionIds:
              - col:18090
              - col:18124
              - col:18284
              - col:18507
              - col:18509
              - col:18583
              - col:18585
              - col:18608
              - col:18618
              - col:18619
              - col:18620
              - col:18628
              - col:18637
              - col:18647
              - col:18650
              - col:18653
              - col:18658
              - col:18680
              - col:18682
              - col:18684
              - col:18686
              - col:18697
            sourceReferenceIds:
              - ref:6294
              - ref:1949
              - ref:3510
              - ref:1951
              - ref:2612
              - ref:1504
              - ref:1833
            originalIdentificationMappings:
              - occurrenceId: occ:186326
                originalIdentifiedName: Calippus francisi
                acceptedName: Calippus proplacidus
                difference: null
              - occurrenceId: occ:188264
                originalIdentifiedName: Calippus francisi
                acceptedName: Calippus proplacidus
                difference: null
              - occurrenceId: occ:188355
                originalIdentifiedName: Merychippus francisi
                acceptedName: Calippus proplacidus
                difference: null
              - occurrenceId: occ:188550
                originalIdentifiedName: Merychippus francisi
                acceptedName: Calippus proplacidus
                difference: null
              - occurrenceId: occ:188685
                originalIdentifiedName: Calippus francisi
                acceptedName: Calippus proplacidus
                difference: null
              - occurrenceId: occ:188700
                originalIdentifiedName: Calippus francisi
                acceptedName: Calippus proplacidus
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

# Calippus proplacidus
