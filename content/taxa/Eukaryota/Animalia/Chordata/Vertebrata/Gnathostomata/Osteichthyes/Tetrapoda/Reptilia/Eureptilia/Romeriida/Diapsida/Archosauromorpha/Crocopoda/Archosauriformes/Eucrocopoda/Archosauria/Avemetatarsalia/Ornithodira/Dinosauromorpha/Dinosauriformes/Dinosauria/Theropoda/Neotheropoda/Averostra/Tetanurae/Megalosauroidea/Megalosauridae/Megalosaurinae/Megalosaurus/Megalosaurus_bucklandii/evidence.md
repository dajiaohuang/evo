---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Megalosaurus bucklandii
    rank: species
    sourceDatasetId: null
    name:
      zh: Megalosaurus bucklandii
      en: Megalosaurus bucklandii
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
            title: PBDB accepted record — Megalosaurus bucklandii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=53025&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:53025; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:53025
            selectedOccurrenceIds:
              - occ:517897
              - occ:517907
              - occ:517932
              - occ:517953
              - occ:558441
              - occ:566820
              - occ:831529
              - occ:831530
              - occ:832132
              - occ:1633855
            selectedCollectionIds:
              - col:52539
              - col:52541
              - col:52546
              - col:52550
              - col:57120
              - col:59357
              - col:91991
              - col:91992
              - col:36581
              - col:52571
            sourceReferenceIds:
              - ref:14142
              - ref:15587
              - ref:14134
              - ref:14071
              - ref:9842
            originalIdentificationMappings:
              - occurrenceId: occ:517897
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
              - occurrenceId: occ:517907
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
              - occurrenceId: occ:517932
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
              - occurrenceId: occ:517953
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
              - occurrenceId: occ:566820
                originalIdentifiedName: Megalosaurus bucklandii n. sp.
                acceptedName: Megalosaurus bucklandii
                difference: null
              - occurrenceId: occ:831529
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
              - occurrenceId: occ:831530
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
              - occurrenceId: occ:832132
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
              - occurrenceId: occ:1633855
                originalIdentifiedName: Megalosaurus bucklandi
                acceptedName: Megalosaurus bucklandii
                difference: misspelling of
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

# Megalosaurus bucklandii
