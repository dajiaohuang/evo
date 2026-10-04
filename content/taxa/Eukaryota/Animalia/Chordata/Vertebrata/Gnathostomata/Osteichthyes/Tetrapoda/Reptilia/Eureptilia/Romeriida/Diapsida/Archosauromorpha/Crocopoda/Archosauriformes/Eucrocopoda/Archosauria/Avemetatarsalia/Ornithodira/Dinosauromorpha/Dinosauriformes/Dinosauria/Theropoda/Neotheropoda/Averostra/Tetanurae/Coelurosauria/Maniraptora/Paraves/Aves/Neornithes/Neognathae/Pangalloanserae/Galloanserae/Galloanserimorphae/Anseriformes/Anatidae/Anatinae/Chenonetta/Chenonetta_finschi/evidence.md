---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chenonetta finschi
    rank: species
    sourceDatasetId: null
    name:
      zh: Chenonetta finschi
      en: Chenonetta finschi
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
            title: PBDB accepted record — Chenonetta finschi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=143776&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:143776; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:143776
            selectedOccurrenceIds:
              - occ:804816
              - occ:804924
              - occ:1349403
              - occ:1349478
              - occ:1408000
              - occ:1534961
              - occ:1535281
              - occ:1535283
              - occ:1535285
              - occ:1535286
              - occ:1535287
              - occ:1535289
              - occ:1535290
              - occ:1535500
              - occ:1535535
              - occ:1535694
              - occ:1535870
              - occ:1535888
              - occ:1535959
              - occ:1535970
            selectedCollectionIds:
              - col:87814
              - col:87789
              - col:182833
              - col:182840
              - col:100554
              - col:215544
              - col:215421
              - col:215392
              - col:215407
              - col:215410
              - col:215411
              - col:215414
              - col:215403
              - col:215577
              - col:215388
              - col:215418
              - col:215611
              - col:215612
              - col:215617
              - col:215412
            sourceReferenceIds:
              - ref:29521
              - ref:60969
              - ref:66128
              - ref:74330
              - ref:74304
            originalIdentificationMappings:
              - occurrenceId: occ:1408000
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535281
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535283
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535285
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535286
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535287
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535289
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535290
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535500
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535535
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535694
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535870
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535888
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535959
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
                difference: recombined as
              - occurrenceId: occ:1535970
                originalIdentifiedName: Euryanas finschi
                acceptedName: Chenonetta finschi
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

# Chenonetta finschi
