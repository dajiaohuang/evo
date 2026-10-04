---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chendytes lawi
    rank: species
    sourceDatasetId: null
    name:
      zh: Chendytes lawi
      en: Chendytes lawi
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Chendytes lawi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=142718&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:142718; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:142718
            selectedOccurrenceIds:
              - occ:683669
              - occ:789205
              - occ:789225
              - occ:789249
              - occ:800532
              - occ:1022427
              - occ:1022435
              - occ:1022454
              - occ:1022461
              - occ:1022487
              - occ:1022518
              - occ:1022529
              - occ:1022548
              - occ:1038214
              - occ:1038216
              - occ:1311994
              - occ:1312024
              - occ:1312046
              - occ:1312068
              - occ:1312081
              - occ:1312104
              - occ:1410275
              - occ:1410285
              - occ:1410286
              - occ:1410288
              - occ:1410289
              - occ:1535149
              - occ:1555363
              - occ:1703371
            selectedCollectionIds:
              - col:20624
              - col:20639
              - col:20585
              - col:20646
              - col:59063
              - col:120826
              - col:125234
              - col:125235
              - col:120827
              - col:125236
              - col:120829
              - col:120830
              - col:125237
              - col:127154
              - col:123918
              - col:176099
              - col:176095
              - col:176102
              - col:176091
              - col:176094
              - col:176101
              - col:194880
              - col:194881
              - col:194882
              - col:194883
              - col:81921
              - col:176098
              - col:84904
              - col:176097
            sourceReferenceIds:
              - ref:66254
              - ref:28773
              - ref:29329
              - ref:40658
              - ref:41318
              - ref:41319
              - ref:57804
              - ref:66253
              - ref:74333
              - ref:76348
            originalIdentificationMappings:
              - occurrenceId: occ:1038214
                originalIdentifiedName: Chendytes lawi n. gen. n. sp.
                acceptedName: Chendytes lawi
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

# Chendytes lawi
