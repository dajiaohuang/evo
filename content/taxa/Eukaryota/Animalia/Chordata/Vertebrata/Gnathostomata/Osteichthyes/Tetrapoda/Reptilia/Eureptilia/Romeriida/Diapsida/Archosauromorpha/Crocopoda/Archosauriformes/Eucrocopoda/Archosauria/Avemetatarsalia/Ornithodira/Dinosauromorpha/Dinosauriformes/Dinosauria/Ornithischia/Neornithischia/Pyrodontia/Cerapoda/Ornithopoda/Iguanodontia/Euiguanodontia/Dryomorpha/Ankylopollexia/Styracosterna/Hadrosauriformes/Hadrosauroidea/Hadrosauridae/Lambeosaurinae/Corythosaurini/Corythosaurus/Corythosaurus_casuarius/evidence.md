---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Corythosaurus casuarius
    rank: species
    sourceDatasetId: null
    name:
      zh: Corythosaurus casuarius
      en: Corythosaurus casuarius
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
            title: PBDB accepted record — Corythosaurus casuarius
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=56403&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:56403; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:56403
            selectedOccurrenceIds:
              - occ:466860
              - occ:466862
              - occ:467061
              - occ:517537
              - occ:564417
              - occ:564548
              - occ:565022
              - occ:565098
              - occ:565159
              - occ:565162
              - occ:565164
              - occ:565520
              - occ:565608
              - occ:592337
              - occ:647945
              - occ:1124576
              - occ:1171642
            selectedCollectionIds:
              - col:46317
              - col:46319
              - col:46359
              - col:52472
              - col:58903
              - col:58943
              - col:59007
              - col:59017
              - col:59048
              - col:59050
              - col:59052
              - col:59120
              - col:59144
              - col:62721
              - col:70054
              - col:142499
              - col:150978
            sourceReferenceIds:
              - ref:12345
              - ref:12354
              - ref:9646
              - ref:16964
              - ref:12319
              - ref:12118
              - ref:33225
              - ref:9597
              - ref:15355
              - ref:16982
              - ref:12046
            originalIdentificationMappings:
              - occurrenceId: occ:466860
                originalIdentifiedName: Corythosaurus bicristatus n. sp.
                acceptedName: Corythosaurus casuarius
                difference: null
              - occurrenceId: occ:466862
                originalIdentifiedName: Corythosaurus brevicristatus n. sp.
                acceptedName: Corythosaurus casuarius
                difference: null
              - occurrenceId: occ:467061
                originalIdentifiedName: Tetragonosaurus erectofrons n. sp.
                acceptedName: Corythosaurus casuarius
                difference: null
              - occurrenceId: occ:517537
                originalIdentifiedName: Corythosaurus casuarius n. gen. n. sp.
                acceptedName: Corythosaurus casuarius
                difference: null
              - occurrenceId: occ:565022
                originalIdentifiedName: Tetragonosaurus cranibrevis n. sp.
                acceptedName: Corythosaurus casuarius
                difference: null
              - occurrenceId: occ:592337
                originalIdentifiedName: Corythosaurus excavatus n. sp.
                acceptedName: Corythosaurus casuarius
                difference: null
              - occurrenceId: occ:1124576
                originalIdentifiedName: Procheneosaurus erectofrons
                acceptedName: Corythosaurus casuarius
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

# Corythosaurus casuarius
