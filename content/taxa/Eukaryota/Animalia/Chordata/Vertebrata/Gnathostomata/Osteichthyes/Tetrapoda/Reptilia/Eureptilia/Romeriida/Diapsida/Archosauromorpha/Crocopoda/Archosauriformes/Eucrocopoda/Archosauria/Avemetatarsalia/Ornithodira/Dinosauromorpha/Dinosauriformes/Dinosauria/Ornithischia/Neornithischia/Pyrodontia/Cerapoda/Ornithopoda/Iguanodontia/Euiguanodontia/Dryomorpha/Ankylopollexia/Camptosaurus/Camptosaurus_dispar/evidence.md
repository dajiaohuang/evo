---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Camptosaurus dispar
    rank: species
    sourceDatasetId: null
    name:
      zh: Camptosaurus dispar
      en: Camptosaurus dispar
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
            title: PBDB accepted record — Camptosaurus dispar
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52979&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52979; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:52979
            selectedOccurrenceIds:
              - occ:408061
              - occ:408062
              - occ:408063
              - occ:408064
              - occ:408091
              - occ:481763
              - occ:519393
              - occ:639372
            selectedCollectionIds:
              - col:39253
              - col:28366
              - col:48130
              - col:49338
              - col:22648
            sourceReferenceIds:
              - ref:7814
              - ref:9097
              - ref:13449
              - ref:10606
              - ref:12893
              - ref:61518
            originalIdentificationMappings:
              - occurrenceId: occ:408061
                originalIdentifiedName: Camptonotus dispar n. sp.
                acceptedName: Camptosaurus dispar
                difference: recombined as
              - occurrenceId: occ:408062
                originalIdentifiedName: Camptosaurus nanus n. sp.
                acceptedName: Camptosaurus dispar
                difference: null
              - occurrenceId: occ:408063
                originalIdentifiedName: Camptosaurus medius n. sp.
                acceptedName: Camptosaurus dispar
                difference: null
              - occurrenceId: occ:408064
                originalIdentifiedName: Camptosaurus browni n. sp.
                acceptedName: Camptosaurus dispar
                difference: null
              - occurrenceId: occ:408091
                originalIdentifiedName: Camptosaurus medius
                acceptedName: Camptosaurus dispar
                difference: null
              - occurrenceId: occ:481763
                originalIdentifiedName: Symphyrophus musculosus n. gen. n. sp.
                acceptedName: Camptosaurus dispar
                difference: null
              - occurrenceId: occ:639372
                originalIdentifiedName: Camptosaurus nanus
                acceptedName: Camptosaurus dispar
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

# Camptosaurus dispar
