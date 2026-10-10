---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Spinosaurus aegyptiacus
    rank: species
    sourceDatasetId: null
    name:
      zh: Spinosaurus aegyptiacus
      en: Spinosaurus aegyptiacus
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
            title: PBDB accepted record — Spinosaurus aegyptiacus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53372&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:53372; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:53372
            selectedOccurrenceIds:
              - occ:259976
              - occ:489656
              - occ:510842
              - occ:519800
              - occ:519801
              - occ:1243979
              - occ:1243996
              - occ:1244003
              - occ:1244020
              - occ:1438051
              - occ:1474461
              - occ:1588637
              - occ:1588652
              - occ:1621757
            selectedCollectionIds:
              - col:25127
              - col:49330
              - col:51748
              - col:52887
              - col:163916
              - col:155212
              - col:144705
              - col:163918
              - col:59578
              - col:205828
              - col:224512
              - col:224513
              - col:123828
            sourceReferenceIds:
              - ref:7054
              - ref:70593
              - ref:13037
              - ref:65489
              - ref:13036
              - ref:80641
              - ref:83956
            originalIdentificationMappings:
              - occurrenceId: occ:259976
                originalIdentifiedName: Spinosaurus aegyptiacus n. gen. n. sp.
                acceptedName: Spinosaurus aegyptiacus
                difference: null
              - occurrenceId: occ:519800
                originalIdentifiedName: Spinosaurus marrocanus n. sp.
                acceptedName: Spinosaurus aegyptiacus
                difference: null
              - occurrenceId: occ:519801
                originalIdentifiedName: Sigilmassasaurus brevicollis n. gen. n. sp.
                acceptedName: Spinosaurus aegyptiacus
                difference: null
              - occurrenceId: occ:1438051
                originalIdentifiedName: Spinosaurus marrocanus
                acceptedName: Spinosaurus aegyptiacus
                difference: null
              - occurrenceId: occ:1621757
                originalIdentifiedName: Sigilmassasaurus brevicollis
                acceptedName: Spinosaurus aegyptiacus
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

# Spinosaurus aegyptiacus
