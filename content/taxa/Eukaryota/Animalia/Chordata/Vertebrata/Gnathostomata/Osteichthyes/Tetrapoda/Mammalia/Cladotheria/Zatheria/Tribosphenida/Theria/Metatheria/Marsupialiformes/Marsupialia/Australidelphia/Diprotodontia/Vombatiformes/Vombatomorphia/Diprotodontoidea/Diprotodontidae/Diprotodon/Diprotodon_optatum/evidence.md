---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Diprotodon optatum
    rank: species
    sourceDatasetId: null
    name:
      zh: Diprotodon optatum
      en: Diprotodon optatum
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
            title: PBDB accepted record — Diprotodon optatum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=248227&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:248227; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:248227
            selectedOccurrenceIds:
              - occ:865746
              - occ:866445
              - occ:1093153
              - occ:1093156
              - occ:1093157
              - occ:1093163
              - occ:1093164
              - occ:1093183
              - occ:1093202
              - occ:1093203
              - occ:1096267
              - occ:1130504
              - occ:1321806
              - occ:1341447
              - occ:1343355
              - occ:1343442
              - occ:1347855
              - occ:1348769
              - occ:1349424
              - occ:1379006
              - occ:1410069
              - occ:1506521
              - occ:1506538
            selectedCollectionIds:
              - col:96019
              - col:28298
              - col:136726
              - col:137628
              - col:136725
              - col:137644
              - col:137654
              - col:137655
              - col:138403
              - col:143748
              - col:136076
              - col:181307
              - col:181761
              - col:181784
              - col:182621
              - col:70582
              - col:182835
              - col:188748
              - col:194845
              - col:210195
              - col:210197
            sourceReferenceIds:
              - ref:32587
              - ref:32608
              - ref:44309
              - ref:27362
              - ref:46533
              - ref:58806
              - ref:60283
              - ref:60435
              - ref:60459
              - ref:60812
              - ref:60926
              - ref:60900
              - ref:63356
              - ref:61075
              - ref:72520
            originalIdentificationMappings:
              - occurrenceId: occ:1093153
                originalIdentifiedName: Diprotodon australis
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1093156
                originalIdentifiedName: Diprotodon annextans
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1093157
                originalIdentifiedName: Diprotodon longiceps n. sp.
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1093163
                originalIdentifiedName: Diprotodon optatum n. gen. n. sp.
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1093164
                originalIdentifiedName: Diprotodon australis n. sp.
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1093183
                originalIdentifiedName: Diprotodon australis
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1093202
                originalIdentifiedName: Diprotodon loderi n. sp.
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1093203
                originalIdentifiedName: Diprotodon bennettii n. sp.
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1096267
                originalIdentifiedName: Diprotodon australis
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1348769
                originalIdentifiedName: Diprotodon longiceps
                acceptedName: Diprotodon optatum
                difference: null
              - occurrenceId: occ:1379006
                originalIdentifiedName: Diprotodon australis
                acceptedName: Diprotodon optatum
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

# Diprotodon optatum
