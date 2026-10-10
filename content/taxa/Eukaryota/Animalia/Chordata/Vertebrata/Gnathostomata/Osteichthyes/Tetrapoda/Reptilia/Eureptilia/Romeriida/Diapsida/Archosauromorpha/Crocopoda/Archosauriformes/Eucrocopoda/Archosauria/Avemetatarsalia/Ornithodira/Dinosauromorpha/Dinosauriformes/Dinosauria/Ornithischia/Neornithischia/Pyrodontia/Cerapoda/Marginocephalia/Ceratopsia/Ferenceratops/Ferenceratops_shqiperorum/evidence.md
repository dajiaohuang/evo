---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ferenceratops shqiperorum
    rank: species
    sourceDatasetId: null
    name:
      zh: Ferenceratops shqiperorum
      en: Ferenceratops shqiperorum
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
            title: PBDB accepted record — Ferenceratops shqiperorum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=517610&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:517610; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:517610
            selectedOccurrenceIds:
              - occ:755319
              - occ:872485
              - occ:883266
              - occ:883267
              - occ:883349
              - occ:970367
              - occ:970487
              - occ:1553459
            selectedCollectionIds:
              - col:80858
              - col:96689
              - col:13334
              - col:67817
              - col:97948
              - col:115075
              - col:115102
              - col:26369
            sourceReferenceIds:
              - ref:27183
              - ref:13939
              - ref:76092
              - ref:37235
              - ref:37254
            originalIdentificationMappings:
              - occurrenceId: occ:755319
                originalIdentifiedName: Zalmoxes shqiperorum n. sp.
                acceptedName: Ferenceratops shqiperorum
                difference: null
              - occurrenceId: occ:872485
                originalIdentifiedName: Zalmoxes shqiperorum
                acceptedName: Ferenceratops shqiperorum
                difference: null
              - occurrenceId: occ:883266
                originalIdentifiedName: Zalmoxes shqiperorum
                acceptedName: Ferenceratops shqiperorum
                difference: null
              - occurrenceId: occ:883267
                originalIdentifiedName: Zalmoxes shqiperorum
                acceptedName: Ferenceratops shqiperorum
                difference: null
              - occurrenceId: occ:883349
                originalIdentifiedName: Zalmoxes shqiperorum
                acceptedName: Ferenceratops shqiperorum
                difference: null
              - occurrenceId: occ:970367
                originalIdentifiedName: Zalmoxes shqiperorum
                acceptedName: Ferenceratops shqiperorum
                difference: null
              - occurrenceId: occ:970487
                originalIdentifiedName: Zalmoxes shqiperorum
                acceptedName: Ferenceratops shqiperorum
                difference: null
              - occurrenceId: occ:1553459
                originalIdentifiedName: Zalmoxes shqiperorum
                acceptedName: Ferenceratops shqiperorum
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

# Ferenceratops shqiperorum
