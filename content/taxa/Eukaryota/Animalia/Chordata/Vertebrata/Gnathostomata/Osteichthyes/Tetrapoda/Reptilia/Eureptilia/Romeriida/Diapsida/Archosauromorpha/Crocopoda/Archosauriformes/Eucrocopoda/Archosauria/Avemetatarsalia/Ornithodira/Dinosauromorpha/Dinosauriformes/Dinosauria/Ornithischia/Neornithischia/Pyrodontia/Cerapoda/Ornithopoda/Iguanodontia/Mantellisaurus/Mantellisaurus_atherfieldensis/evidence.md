---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mantellisaurus atherfieldensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Mantellisaurus atherfieldensis
      en: Mantellisaurus atherfieldensis
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
            title: PBDB accepted record — Mantellisaurus atherfieldensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=64255&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:64255; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:64255
            selectedOccurrenceIds:
              - occ:256679
              - occ:471741
              - occ:518052
              - occ:522080
              - occ:558456
              - occ:604545
              - occ:606163
              - occ:812305
              - occ:1544143
              - occ:1609063
            selectedCollectionIds:
              - col:24906
              - col:46875
              - col:52568
              - col:53674
              - col:45193
              - col:64408
              - col:22645
              - col:61317
              - col:189306
              - col:227655
            sourceReferenceIds:
              - ref:6982
              - ref:12450
              - ref:50539
              - ref:45932
              - ref:15587
              - ref:29947
              - ref:32089
              - ref:75850
              - ref:82927
            originalIdentificationMappings:
              - occurrenceId: occ:256679
                originalIdentifiedName: Iguanodon atherfieldensis n. sp.
                acceptedName: Mantellisaurus atherfieldensis
                difference: recombined as
              - occurrenceId: occ:471741
                originalIdentifiedName: Iguanodon atherfieldensis
                acceptedName: Mantellisaurus atherfieldensis
                difference: recombined as
              - occurrenceId: occ:518052
                originalIdentifiedName: Mantellodon carpenteri n. gen. n. sp.
                acceptedName: Mantellisaurus atherfieldensis
                difference: null
              - occurrenceId: occ:522080
                originalIdentifiedName: Heterosaurus neocomiensis n. gen. n. sp.
                acceptedName: Mantellisaurus atherfieldensis
                difference: null
              - occurrenceId: occ:558456
                originalIdentifiedName: Iguanodon atherfieldensis
                acceptedName: Mantellisaurus atherfieldensis
                difference: recombined as
              - occurrenceId: occ:604545
                originalIdentifiedName: Iguanodon atherfieldensis
                acceptedName: Mantellisaurus atherfieldensis
                difference: recombined as
              - occurrenceId: occ:606163
                originalIdentifiedName: Dollodon bampingi n. gen. n. sp.
                acceptedName: Mantellisaurus atherfieldensis
                difference: null
              - occurrenceId: occ:812305
                originalIdentifiedName: Iguanodon atherfieldensis
                acceptedName: Mantellisaurus atherfieldensis
                difference: recombined as
              - occurrenceId: occ:1609063
                originalIdentifiedName: Iguanodon atherfieldensis
                acceptedName: Mantellisaurus atherfieldensis
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

# Mantellisaurus atherfieldensis
