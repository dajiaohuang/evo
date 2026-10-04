---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dasornis emuinus
    rank: species
    sourceDatasetId: null
    name:
      zh: Dasornis emuinus
      en: Dasornis emuinus
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
            title: PBDB accepted record — Dasornis emuinus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=134756&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:134756; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:134756
            selectedOccurrenceIds:
              - occ:784285
              - occ:1016605
              - occ:1016606
              - occ:1016607
              - occ:1396440
              - occ:1396441
              - occ:1538042
              - occ:1538047
              - occ:1538048
              - occ:1538049
            selectedCollectionIds:
              - col:13299
              - col:35132
              - col:91363
              - col:83313
              - col:215472
              - col:8050
            sourceReferenceIds:
              - ref:28336
              - ref:40151
              - ref:65100
              - ref:74648
            originalIdentificationMappings:
              - occurrenceId: occ:784285
                originalIdentifiedName: Lithornis emuinus n. sp.
                acceptedName: Dasornis emuinus
                difference: recombined as
              - occurrenceId: occ:1396440
                originalIdentifiedName: Dasornis londinensis n. gen. n. sp.
                acceptedName: Dasornis emuinus
                difference: null
              - occurrenceId: occ:1396441
                originalIdentifiedName: Argillornis longipennis n. sp.
                acceptedName: Dasornis emuinus
                difference: null
              - occurrenceId: occ:1538042
                originalIdentifiedName: Neptuniavis miranda n. gen. n. sp.
                acceptedName: Dasornis emuinus
                difference: null
              - occurrenceId: occ:1538047
                originalIdentifiedName: Dasornis londinensis
                acceptedName: Dasornis emuinus
                difference: null
              - occurrenceId: occ:1538048
                originalIdentifiedName: Argillornis longipennis
                acceptedName: Dasornis emuinus
                difference: null
              - occurrenceId: occ:1538049
                originalIdentifiedName: Argillornis longipennis
                acceptedName: Dasornis emuinus
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

# Dasornis emuinus
