---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Callaeas cinereus
    rank: species
    sourceDatasetId: null
    name:
      zh: Callaeas cinereus
      en: Callaeas cinereus
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
            title: PBDB accepted record — Callaeas cinereus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=143844&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:143844; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:143844
            selectedOccurrenceIds:
              - occ:804789
              - occ:804901
              - occ:1408055
              - occ:1408163
              - occ:1535612
              - occ:1535640
              - occ:1535702
              - occ:1535722
              - occ:1535743
              - occ:1535859
              - occ:1535909
              - occ:1535962
              - occ:1535973
            selectedCollectionIds:
              - col:87810
              - col:87814
              - col:100554
              - col:194619
              - col:215583
              - col:215421
              - col:215418
              - col:215416
              - col:215415
              - col:215392
              - col:215389
              - col:215617
              - col:215412
            sourceReferenceIds:
              - ref:29521
              - ref:66128
              - ref:74304
            originalIdentificationMappings:
              - occurrenceId: occ:804789
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:804901
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1408055
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1408163
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535612
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535640
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535702
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535722
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535743
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535859
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535909
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535962
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
                difference: recombined as
              - occurrenceId: occ:1535973
                originalIdentifiedName: Callaeas cinerea
                acceptedName: Callaeas cinereus
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

# Callaeas cinereus
