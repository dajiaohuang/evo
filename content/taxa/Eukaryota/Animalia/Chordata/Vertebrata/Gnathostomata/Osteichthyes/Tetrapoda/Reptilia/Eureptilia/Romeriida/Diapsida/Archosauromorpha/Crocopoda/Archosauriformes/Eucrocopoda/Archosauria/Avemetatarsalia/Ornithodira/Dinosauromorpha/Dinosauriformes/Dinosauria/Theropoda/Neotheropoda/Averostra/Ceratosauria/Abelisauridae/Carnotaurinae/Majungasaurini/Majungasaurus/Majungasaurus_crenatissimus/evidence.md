---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Majungasaurus crenatissimus
    rank: species
    sourceDatasetId: null
    name:
      zh: Majungasaurus crenatissimus
      en: Majungasaurus crenatissimus
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
            title: PBDB accepted record — Majungasaurus crenatissimus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53959&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:53959; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:53959
            selectedOccurrenceIds:
              - occ:343957
              - occ:483685
              - occ:483690
              - occ:483692
              - occ:504368
              - occ:568477
              - occ:648251
              - occ:662959
              - occ:681843
              - occ:681844
              - occ:681845
              - occ:786393
              - occ:786394
              - occ:786395
              - occ:786396
              - occ:786397
              - occ:786398
              - occ:786399
              - occ:786400
              - occ:786401
              - occ:787589
              - occ:909112
              - occ:1064218
              - occ:1135907
              - occ:1559641
            selectedCollectionIds:
              - col:32366
              - col:48389
              - col:39265
              - col:25074
              - col:51252
              - col:59692
              - col:70075
              - col:71399
              - col:55271
              - col:55270
              - col:55268
              - col:84840
              - col:84841
              - col:84842
              - col:84843
              - col:84844
              - col:84845
              - col:84846
              - col:84847
              - col:84848
              - col:85063
              - col:102481
              - col:91206
              - col:144728
              - col:206553
            sourceReferenceIds:
              - ref:8731
              - ref:8733
              - ref:12923
              - ref:13648
              - ref:17093
              - ref:23528
              - ref:24130
              - ref:24665
              - ref:28486
              - ref:17225
              - ref:42471
              - ref:46839
              - ref:76780
            originalIdentificationMappings:
              - occurrenceId: occ:483685
                originalIdentifiedName: Majungatholus atopus
                acceptedName: Majungasaurus crenatissimus
                difference: null
              - occurrenceId: occ:483690
                originalIdentifiedName: Majungatholus atopus
                acceptedName: Majungasaurus crenatissimus
                difference: null
              - occurrenceId: occ:483692
                originalIdentifiedName: Majungatholus atopus
                acceptedName: Majungasaurus crenatissimus
                difference: null
              - occurrenceId: occ:504368
                originalIdentifiedName: Megalosaurus crenatissimus
                acceptedName: Majungasaurus crenatissimus
                difference: recombined as
              - occurrenceId: occ:568477
                originalIdentifiedName: Megalosaurus crenatissimus n. sp.
                acceptedName: Majungasaurus crenatissimus
                difference: recombined as
              - occurrenceId: occ:662959
                originalIdentifiedName: Majungatholus atopus
                acceptedName: Majungasaurus crenatissimus
                difference: null
              - occurrenceId: occ:909112
                originalIdentifiedName: Majungasaurus crenatissimus n. gen.
                acceptedName: Majungasaurus crenatissimus
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

# Majungasaurus crenatissimus
