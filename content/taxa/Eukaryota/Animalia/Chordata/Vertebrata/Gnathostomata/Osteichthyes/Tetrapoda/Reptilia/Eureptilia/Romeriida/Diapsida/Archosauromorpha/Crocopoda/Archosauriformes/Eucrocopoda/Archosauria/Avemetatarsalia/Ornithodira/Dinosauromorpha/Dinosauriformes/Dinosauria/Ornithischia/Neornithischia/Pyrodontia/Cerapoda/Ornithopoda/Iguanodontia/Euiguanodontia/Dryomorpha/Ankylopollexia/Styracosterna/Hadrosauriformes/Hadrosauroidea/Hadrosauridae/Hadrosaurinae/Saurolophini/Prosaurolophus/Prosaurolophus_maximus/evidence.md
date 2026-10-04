---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Prosaurolophus maximus
    rank: species
    sourceDatasetId: null
    name:
      zh: Prosaurolophus maximus
      en: Prosaurolophus maximus
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
            title: PBDB accepted record — Prosaurolophus maximus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53384&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:53384; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:53384
            selectedOccurrenceIds:
              - occ:219990
              - occ:220096
              - occ:229314
              - occ:562860
              - occ:565102
              - occ:565160
              - occ:565163
              - occ:606109
              - occ:1231949
              - occ:1231950
              - occ:1264445
              - occ:1465954
              - occ:1486214
            selectedCollectionIds:
              - col:22652
              - col:22689
              - col:22692
              - col:58759
              - col:59021
              - col:59049
              - col:59051
              - col:64632
              - col:162137
              - col:162138
              - col:77259
              - col:204697
              - col:206775
            sourceReferenceIds:
              - ref:17718
              - ref:5724
              - ref:5697
              - ref:12319
              - ref:33225
              - ref:15355
              - ref:18647
              - ref:70243
              - ref:54955
              - ref:71097
            originalIdentificationMappings:
              - occurrenceId: occ:219990
                originalIdentifiedName: Prosaurolophus blackfeetensis
                acceptedName: Prosaurolophus maximus
                difference: null
              - occurrenceId: occ:220096
                originalIdentifiedName: Prosaurolophus blackfeetensis
                acceptedName: Prosaurolophus maximus
                difference: null
              - occurrenceId: occ:229314
                originalIdentifiedName: Prosaurolophus blackfeetensis n. sp.
                acceptedName: Prosaurolophus maximus
                difference: null
              - occurrenceId: occ:606109
                originalIdentifiedName: Prosaurolophus maximus n. gen. n. sp.
                acceptedName: Prosaurolophus maximus
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

# Prosaurolophus maximus
