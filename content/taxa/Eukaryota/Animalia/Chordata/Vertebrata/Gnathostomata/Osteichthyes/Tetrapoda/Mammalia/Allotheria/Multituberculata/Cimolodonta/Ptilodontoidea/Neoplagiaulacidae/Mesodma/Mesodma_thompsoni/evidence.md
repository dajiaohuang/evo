---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mesodma thompsoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Mesodma thompsoni
      en: Mesodma thompsoni
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
            title: PBDB accepted record — Mesodma thompsoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48351&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48351; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48351
            selectedOccurrenceIds:
              - occ:163040
              - occ:163054
              - occ:163067
              - occ:163080
              - occ:163118
              - occ:163145
              - occ:163164
              - occ:163179
              - occ:163185
              - occ:163194
              - occ:163200
              - occ:163212
              - occ:163245
              - occ:163298
              - occ:163323
              - occ:163367
              - occ:163412
              - occ:163454
              - occ:163457
              - occ:163475
              - occ:163500
              - occ:163519
              - occ:163527
              - occ:163551
              - occ:163554
              - occ:163606
              - occ:163639
              - occ:163657
              - occ:163669
              - occ:163680
              - occ:163887
              - occ:164099
              - occ:164182
              - occ:164491
              - occ:164538
              - occ:164741
              - occ:458133
              - occ:483582
              - occ:1292674
              - occ:1292693
              - occ:1404233
              - occ:1404244
              - occ:1404248
              - occ:1404255
              - occ:1630926
              - occ:1630940
              - occ:1630964
            selectedCollectionIds:
              - col:14505
              - col:14508
              - col:14514
              - col:14515
              - col:14519
              - col:14523
              - col:14527
              - col:14533
              - col:14534
              - col:14536
              - col:14537
              - col:14538
              - col:14549
              - col:14560
              - col:14566
              - col:14576
              - col:14585
              - col:14595
              - col:14596
              - col:14598
              - col:14604
              - col:14608
              - col:14610
              - col:14615
              - col:14616
              - col:14630
              - col:14634
              - col:14638
              - col:14641
              - col:14644
              - col:14691
              - col:14742
              - col:14760
              - col:14798
              - col:14809
              - col:14829
              - col:45099
              - col:14512
              - col:172642
              - col:172644
              - col:193844
              - col:14802
              - col:14801
              - col:14759
              - col:14743
              - col:231045
              - col:231047
            sourceReferenceIds:
              - ref:1239
              - ref:960
              - ref:1129
              - ref:3198
              - ref:3705
              - ref:1247
              - ref:1984
              - ref:1987
              - ref:2229
              - ref:1536
              - ref:3195
              - ref:1806
              - ref:3034
              - ref:11749
              - ref:13103
              - ref:56083
              - ref:65846
              - ref:85522
            originalIdentificationMappings:
              - occurrenceId: occ:163412
                originalIdentifiedName: Mesodma thompsoni n. sp.
                acceptedName: Mesodma thompsoni
                difference: null
              - occurrenceId: occ:164099
                originalIdentifiedName: Mesodma garfieldensis
                acceptedName: Mesodma thompsoni
                difference: null
              - occurrenceId: occ:164491
                originalIdentifiedName: Mesodma garfieldensis n. sp.
                acceptedName: Mesodma thompsoni
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

# Mesodma thompsoni
