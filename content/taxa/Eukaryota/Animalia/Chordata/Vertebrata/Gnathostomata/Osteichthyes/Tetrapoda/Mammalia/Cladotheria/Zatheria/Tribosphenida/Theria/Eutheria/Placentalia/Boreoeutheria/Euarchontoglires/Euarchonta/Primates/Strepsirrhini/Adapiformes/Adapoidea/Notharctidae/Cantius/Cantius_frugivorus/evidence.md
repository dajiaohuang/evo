---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cantius frugivorus
    rank: species
    sourceDatasetId: null
    name:
      zh: Cantius frugivorus
      en: Cantius frugivorus
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
            title: PBDB accepted record — Cantius frugivorus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50083&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50083; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50083
            selectedOccurrenceIds:
              - occ:167770
              - occ:167937
              - occ:167975
              - occ:167985
              - occ:168007
              - occ:168017
              - occ:168021
              - occ:168036
              - occ:168045
              - occ:168055
              - occ:168068
              - occ:168076
              - occ:168088
              - occ:168110
              - occ:168147
              - occ:168161
              - occ:168395
              - occ:168429
              - occ:168434
              - occ:168440
              - occ:168472
              - occ:168477
              - occ:168513
              - occ:168528
              - occ:168573
              - occ:168714
              - occ:168858
              - occ:169644
              - occ:170016
              - occ:170384
              - occ:170569
              - occ:170938
              - occ:171647
              - occ:172432
              - occ:172957
              - occ:456861
              - occ:469668
              - occ:469701
              - occ:469835
              - occ:638370
              - occ:1370078
              - occ:1370090
              - occ:1370103
              - occ:1370108
              - occ:1370134
              - occ:1370177
              - occ:1370193
              - occ:1370196
            selectedCollectionIds:
              - col:15221
              - col:15264
              - col:15274
              - col:15277
              - col:15282
              - col:15288
              - col:15290
              - col:15293
              - col:15294
              - col:15297
              - col:15305
              - col:15310
              - col:15314
              - col:15325
              - col:15338
              - col:15341
              - col:15392
              - col:15406
              - col:15409
              - col:15410
              - col:15418
              - col:15419
              - col:15430
              - col:15433
              - col:15443
              - col:15455
              - col:15479
              - col:15526
              - col:15551
              - col:15565
              - col:15577
              - col:15663
              - col:15768
              - col:15895
              - col:15964
              - col:15680
              - col:46699
              - col:46700
              - col:46712
              - col:15454
              - col:186931
              - col:186932
              - col:186934
              - col:186935
              - col:186939
              - col:186946
              - col:186950
              - col:186951
            sourceReferenceIds:
              - ref:6294
              - ref:2078
              - ref:1675
              - ref:1036
              - ref:3647
              - ref:1931
              - ref:3021
              - ref:1760
              - ref:11717
              - ref:19815
              - ref:62695
            originalIdentificationMappings:
              - occurrenceId: occ:168513
                originalIdentifiedName: Pelycodus frugivorus n. sp.
                acceptedName: Cantius frugivorus
                difference: recombined as
              - occurrenceId: occ:170016
                originalIdentifiedName: Pelycodus frugivorus
                acceptedName: Cantius frugivorus
                difference: recombined as
              - occurrenceId: occ:172957
                originalIdentifiedName: Copelemur feretutus n. sp.
                acceptedName: Cantius frugivorus
                difference: null
              - occurrenceId: occ:456861
                originalIdentifiedName: Copelemur feretutus
                acceptedName: Cantius frugivorus
                difference: null
              - occurrenceId: occ:469701
                originalIdentifiedName: Copelemur feretutus
                acceptedName: Cantius frugivorus
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

# Cantius frugivorus
