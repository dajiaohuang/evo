---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nanosaurus agilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Nanosaurus agilis
      en: Nanosaurus agilis
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
            title: PBDB accepted record — Nanosaurus agilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52951&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52951; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:52951
            selectedOccurrenceIds:
              - occ:408090
              - occ:408759
              - occ:408777
              - occ:467546
              - occ:477073
              - occ:479359
              - occ:482001
              - occ:482004
              - occ:491451
              - occ:491474
              - occ:491475
              - occ:491507
              - occ:491508
              - occ:541888
              - occ:693183
              - occ:751964
              - occ:1033196
              - occ:1319975
              - occ:1319977
              - occ:1358696
              - occ:1398262
              - occ:1629382
              - occ:1633443
              - occ:1633639
              - occ:1667658
            selectedCollectionIds:
              - col:28366
              - col:39346
              - col:12816
              - col:46465
              - col:47196
              - col:48166
              - col:48168
              - col:49629
              - col:49636
              - col:55486
              - col:74663
              - col:126540
              - col:177492
              - col:11611
              - col:192746
              - col:230770
              - col:231545
              - col:231574
            sourceReferenceIds:
              - ref:10606
              - ref:9097
              - ref:13451
              - ref:75856
              - ref:24821
              - ref:10653
              - ref:12893
              - ref:7809
              - ref:75375
              - ref:15179
              - ref:27086
              - ref:41030
              - ref:10633
              - ref:61877
              - ref:65427
              - ref:85332
              - ref:7811
            originalIdentificationMappings:
              - occurrenceId: occ:408090
                originalIdentifiedName: Laosaurus gracilis
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:408759
                originalIdentifiedName: Laosaurus consors n. sp.
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:408777
                originalIdentifiedName: Laosaurus gracilis
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:477073
                originalIdentifiedName: Othnielosaurus consors
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:479359
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:482001
                originalIdentifiedName: Othnielia rex
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:482004
                originalIdentifiedName: Nanosaurus agilis n. gen. n. sp.
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:491451
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:541888
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:751964
                originalIdentifiedName: Othnielia rex
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1033196
                originalIdentifiedName: Othnielosaurus consors
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1319975
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1319977
                originalIdentifiedName: Drinker nisti n. gen. n. sp.
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1358696
                originalIdentifiedName: Othnielosaurus consors
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1398262
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1629382
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1633443
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1633639
                originalIdentifiedName: Drinker nisti
                acceptedName: Nanosaurus agilis
                difference: null
              - occurrenceId: occ:1667658
                originalIdentifiedName: Nanosaurus rex n. sp.
                acceptedName: Nanosaurus agilis
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

# Nanosaurus agilis
