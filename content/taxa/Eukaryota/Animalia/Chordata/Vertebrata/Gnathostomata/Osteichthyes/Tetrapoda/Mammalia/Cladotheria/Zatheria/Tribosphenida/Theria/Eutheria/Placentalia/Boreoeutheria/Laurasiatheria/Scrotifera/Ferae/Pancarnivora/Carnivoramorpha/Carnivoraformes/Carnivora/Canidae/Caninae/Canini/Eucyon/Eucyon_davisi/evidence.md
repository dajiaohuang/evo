---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eucyon davisi
    rank: species
    sourceDatasetId: null
    name:
      zh: Eucyon davisi
      en: Eucyon davisi
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
            title: PBDB accepted record — Eucyon davisi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44836&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44836; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44836
            selectedOccurrenceIds:
              - occ:184171
              - occ:184697
              - occ:185006
              - occ:185232
              - occ:186434
              - occ:186736
              - occ:189692
              - occ:189833
              - occ:189878
              - occ:189895
              - occ:190030
              - occ:190903
              - occ:192304
              - occ:192431
              - occ:192869
              - occ:192882
              - occ:195294
              - occ:375092
              - occ:1196373
              - occ:1217411
              - occ:1217412
              - occ:1217413
              - occ:1217414
              - occ:1217415
              - occ:1217416
              - occ:1217417
              - occ:1425149
              - occ:1630333
              - occ:1630339
              - occ:1636951
              - occ:2063792
            selectedCollectionIds:
              - col:18036
              - col:18097
              - col:18140
              - col:18166
              - col:18304
              - col:18342
              - col:18900
              - col:18936
              - col:18943
              - col:18944
              - col:18970
              - col:19116
              - col:19514
              - col:19533
              - col:19610
              - col:19612
              - col:20063
              - col:35430
              - col:18532
              - col:19095
              - col:18560
              - col:18340
              - col:19272
              - col:19582
              - col:19480
              - col:18755
              - col:197941
              - col:230804
              - col:230919
              - col:232055
            sourceReferenceIds:
              - ref:52058
              - ref:6294
              - ref:1839
              - ref:1800
              - ref:6209
              - ref:3109
              - ref:1751
              - ref:9574
              - ref:50333
              - ref:67462
              - ref:3384
              - ref:86098
              - ref:1082
            originalIdentificationMappings:
              - occurrenceId: occ:190030
                originalIdentifiedName: Canis condoni n. sp.
                acceptedName: Eucyon davisi
                difference: null
              - occurrenceId: occ:2063792
                originalIdentifiedName: Canis condoni
                acceptedName: Eucyon davisi
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

# Eucyon davisi
