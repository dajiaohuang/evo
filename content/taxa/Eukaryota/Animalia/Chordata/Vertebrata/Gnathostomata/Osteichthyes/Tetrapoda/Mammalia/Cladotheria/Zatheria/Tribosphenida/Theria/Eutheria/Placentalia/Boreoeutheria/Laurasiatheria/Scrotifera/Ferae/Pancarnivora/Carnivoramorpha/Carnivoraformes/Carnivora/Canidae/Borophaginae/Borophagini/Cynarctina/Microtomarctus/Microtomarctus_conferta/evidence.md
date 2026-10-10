---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Microtomarctus conferta
    rank: species
    sourceDatasetId: null
    name:
      zh: Microtomarctus conferta
      en: Microtomarctus conferta
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
            title: PBDB accepted record — Microtomarctus conferta
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52175&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52175; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52175
            selectedOccurrenceIds:
              - occ:183389
              - occ:183404
              - occ:183432
              - occ:183461
              - occ:183684
              - occ:183797
              - occ:184002
              - occ:184029
              - occ:185490
              - occ:188445
              - occ:190234
              - occ:190812
              - occ:191329
              - occ:191502
              - occ:191603
              - occ:191658
              - occ:191692
              - occ:191702
              - occ:191887
              - occ:191928
              - occ:191963
              - occ:192036
              - occ:192068
              - occ:192071
              - occ:192098
              - occ:192368
              - occ:192458
              - occ:192573
              - occ:192647
              - occ:192905
              - occ:192911
              - occ:1207945
              - occ:1630286
            selectedCollectionIds:
              - col:17904
              - col:17905
              - col:17908
              - col:17911
              - col:17955
              - col:17972
              - col:18011
              - col:18019
              - col:18203
              - col:18631
              - col:19014
              - col:19097
              - col:19274
              - col:19314
              - col:19339
              - col:19356
              - col:19364
              - col:19366
              - col:19410
              - col:19422
              - col:19432
              - col:19449
              - col:19457
              - col:19458
              - col:19463
              - col:19520
              - col:19535
              - col:19548
              - col:19557
              - col:19615
              - col:19616
              - col:156738
              - col:230906
            sourceReferenceIds:
              - ref:3558
              - ref:3175
              - ref:6294
              - ref:3380
              - ref:51388
              - ref:2472
            originalIdentificationMappings:
              - occurrenceId: occ:183461
                originalIdentifiedName: Tomarctus confertus
                acceptedName: Microtomarctus conferta
                difference: recombined as
              - occurrenceId: occ:192368
                originalIdentifiedName: Tomarctus confertus
                acceptedName: Microtomarctus conferta
                difference: recombined as
              - occurrenceId: occ:1630286
                originalIdentifiedName: Tephrocyon confertus n. sp.
                acceptedName: Microtomarctus conferta
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

# Microtomarctus conferta
