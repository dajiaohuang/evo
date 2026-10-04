---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Masiakasaurus knopfleri
    rank: species
    sourceDatasetId: null
    name:
      zh: Masiakasaurus knopfleri
      en: Masiakasaurus knopfleri
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
            title: PBDB accepted record — Masiakasaurus knopfleri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=56389&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:56389; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:56389
            selectedOccurrenceIds:
              - occ:483691
              - occ:662960
              - occ:786406
              - occ:786409
              - occ:787590
              - occ:1098567
              - occ:1098568
              - occ:1098569
              - occ:1098570
              - occ:1098571
              - occ:1098572
              - occ:1098573
              - occ:1098574
              - occ:1098575
              - occ:1098576
              - occ:1098577
              - occ:1098578
              - occ:1098580
              - occ:1098581
              - occ:1098582
              - occ:1098583
              - occ:1098584
              - occ:1098585
              - occ:1098586
              - occ:1098587
              - occ:1098588
              - occ:1098589
              - occ:1098590
              - occ:1559642
            selectedCollectionIds:
              - col:25074
              - col:71399
              - col:39265
              - col:84840
              - col:85063
              - col:39266
              - col:55268
              - col:138731
              - col:138732
              - col:32366
              - col:55269
              - col:138733
              - col:138734
              - col:138735
              - col:46894
              - col:91206
              - col:138737
              - col:138738
              - col:84841
              - col:138739
              - col:138740
              - col:138741
              - col:138742
              - col:118203
              - col:138743
              - col:138744
              - col:138745
              - col:138746
              - col:206553
            sourceReferenceIds:
              - ref:23634
              - ref:24130
              - ref:28486
              - ref:44450
              - ref:76780
            originalIdentificationMappings:
              - occurrenceId: occ:483691
                originalIdentifiedName: Masiakasaurus knopfleri n. gen. n. sp.
                acceptedName: Masiakasaurus knopfleri
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

# Masiakasaurus knopfleri
