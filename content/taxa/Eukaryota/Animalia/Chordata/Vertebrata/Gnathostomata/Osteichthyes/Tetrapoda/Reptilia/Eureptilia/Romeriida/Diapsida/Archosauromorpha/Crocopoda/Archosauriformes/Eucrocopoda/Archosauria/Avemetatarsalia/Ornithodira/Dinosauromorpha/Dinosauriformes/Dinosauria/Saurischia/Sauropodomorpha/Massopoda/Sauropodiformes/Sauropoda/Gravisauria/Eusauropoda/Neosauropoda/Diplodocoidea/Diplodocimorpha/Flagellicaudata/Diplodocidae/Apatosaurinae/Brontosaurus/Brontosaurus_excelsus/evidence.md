---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Brontosaurus excelsus
    rank: species
    sourceDatasetId: null
    name:
      zh: Brontosaurus excelsus
      en: Brontosaurus excelsus
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
            title: PBDB accepted record — Brontosaurus excelsus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52982&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52982; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:52982
            selectedOccurrenceIds:
              - occ:219974
              - occ:384369
              - occ:408830
              - occ:408839
              - occ:481979
              - occ:491444
              - occ:557971
              - occ:557973
              - occ:557976
              - occ:1123325
              - occ:1123326
              - occ:1123327
              - occ:1581463
            selectedCollectionIds:
              - col:22648
              - col:36576
              - col:39368
              - col:39369
              - col:48161
              - col:49627
              - col:57898
              - col:57900
              - col:57902
              - col:142335
              - col:142336
              - col:142337
              - col:13352
            sourceReferenceIds:
              - ref:13281
              - ref:35184
              - ref:7814
              - ref:7816
              - ref:12893
              - ref:85332
              - ref:46207
            originalIdentificationMappings:
              - occurrenceId: occ:219974
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:408830
                originalIdentifiedName: Brontosaurus excelsus n. gen. n. sp.
                acceptedName: Brontosaurus excelsus
                difference: null
              - occurrenceId: occ:408839
                originalIdentifiedName: Brontosaurus amplus n. sp.
                acceptedName: Brontosaurus excelsus
                difference: null
              - occurrenceId: occ:481979
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:491444
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:557971
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:557973
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:557976
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:1123325
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:1123326
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:1123327
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
                difference: recombined as
              - occurrenceId: occ:1581463
                originalIdentifiedName: Apatosaurus excelsus
                acceptedName: Brontosaurus excelsus
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

# Brontosaurus excelsus
