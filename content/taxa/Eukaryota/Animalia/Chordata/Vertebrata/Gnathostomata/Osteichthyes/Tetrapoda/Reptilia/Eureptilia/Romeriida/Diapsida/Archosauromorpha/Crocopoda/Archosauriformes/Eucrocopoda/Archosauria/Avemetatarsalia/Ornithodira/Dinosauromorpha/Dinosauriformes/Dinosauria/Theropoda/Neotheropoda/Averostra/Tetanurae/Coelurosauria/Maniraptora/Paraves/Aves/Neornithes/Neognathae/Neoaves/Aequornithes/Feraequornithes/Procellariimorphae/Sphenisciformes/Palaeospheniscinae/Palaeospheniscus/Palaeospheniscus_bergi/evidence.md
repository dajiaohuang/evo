---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeospheniscus bergi
    rank: species
    sourceDatasetId: null
    name:
      zh: Palaeospheniscus bergi
      en: Palaeospheniscus bergi
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
            title: PBDB accepted record — Palaeospheniscus bergi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53344&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:53344; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:53344
            selectedOccurrenceIds:
              - occ:692531
              - occ:692532
              - occ:692533
              - occ:692534
              - occ:692540
              - occ:692543
              - occ:692546
              - occ:1083485
              - occ:1195719
            selectedCollectionIds:
              - col:47303
              - col:74645
              - col:45887
              - col:136063
              - col:152083
            sourceReferenceIds:
              - ref:25128
              - ref:29788
              - ref:43516
              - ref:50281
            originalIdentificationMappings:
              - occurrenceId: occ:692531
                originalIdentifiedName: Palaeospheniscus medianus
                acceptedName: Palaeospheniscus bergi
                difference: null
              - occurrenceId: occ:692532
                originalIdentifiedName: Palaeospheniscus gracilis
                acceptedName: Palaeospheniscus bergi
                difference: null
              - occurrenceId: occ:692533
                originalIdentifiedName: Neculus rothi
                acceptedName: Palaeospheniscus bergi
                difference: null
              - occurrenceId: occ:692534
                originalIdentifiedName: Palaeospheniscus rothi
                acceptedName: Palaeospheniscus bergi
                difference: null
              - occurrenceId: occ:692540
                originalIdentifiedName: Palaeospheniscus bergi n. sp.
                acceptedName: Palaeospheniscus bergi
                difference: null
              - occurrenceId: occ:692543
                originalIdentifiedName: Palaeospheniscus planus
                acceptedName: Palaeospheniscus bergi
                difference: null
              - occurrenceId: occ:692546
                originalIdentifiedName: Pseudospheniscus concavus
                acceptedName: Palaeospheniscus bergi
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

# Palaeospheniscus bergi
