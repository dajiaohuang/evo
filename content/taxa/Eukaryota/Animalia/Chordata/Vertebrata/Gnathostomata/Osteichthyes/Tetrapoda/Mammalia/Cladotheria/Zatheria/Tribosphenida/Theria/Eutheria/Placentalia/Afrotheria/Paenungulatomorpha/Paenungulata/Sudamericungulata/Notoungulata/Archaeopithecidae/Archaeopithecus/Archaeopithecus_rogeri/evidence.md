---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Archaeopithecus rogeri
    rank: species
    sourceDatasetId: null
    name:
      zh: Archaeopithecus rogeri
      en: Archaeopithecus rogeri
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
            title: PBDB accepted record — Archaeopithecus rogeri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=187906&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:187906; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:187906
            selectedOccurrenceIds:
              - occ:1312692
              - occ:1312722
              - occ:1312753
              - occ:1312754
              - occ:1312800
              - occ:1313663
              - occ:1313664
              - occ:1313752
              - occ:1313753
              - occ:1313938
              - occ:1378432
              - occ:1378433
              - occ:1378434
              - occ:1378435
              - occ:1378436
              - occ:1378437
              - occ:1378438
              - occ:1378439
              - occ:1378440
              - occ:1378441
              - occ:1378442
            selectedCollectionIds:
              - col:176165
              - col:44956
              - col:176170
              - col:176173
              - col:13779
              - col:176164
              - col:176285
              - col:175743
              - col:13781
              - col:175738
              - col:39295
              - col:175761
              - col:176166
              - col:175739
              - col:176468
              - col:176168
              - col:188571
              - col:188572
            sourceReferenceIds:
              - ref:57836
              - ref:10312
              - ref:36444
              - ref:54480
              - ref:63245
            originalIdentificationMappings:
              - occurrenceId: occ:1312692
                originalIdentifiedName: Acropithecus rigidus
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1312722
                originalIdentifiedName: Acropithecus rigidus
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1312753
                originalIdentifiedName: Acropithecus rigidus
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1312754
                originalIdentifiedName: Acropithecus rigidus
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1312800
                originalIdentifiedName: Archaeopithecus rogeri n. gen. n. sp.
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1313663
                originalIdentifiedName: Adpithecus plenus n. sp.
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1313664
                originalIdentifiedName: Notopithecus fossulatus n. sp.
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1313752
                originalIdentifiedName: Archaeopithecus alternans n. sp.
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1313753
                originalIdentifiedName: Archaeopithecus rigidus n. sp.
                acceptedName: Archaeopithecus rogeri
                difference: null
              - occurrenceId: occ:1313938
                originalIdentifiedName: Acropithecus tersus n. sp.
                acceptedName: Archaeopithecus rogeri
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

# Archaeopithecus rogeri
