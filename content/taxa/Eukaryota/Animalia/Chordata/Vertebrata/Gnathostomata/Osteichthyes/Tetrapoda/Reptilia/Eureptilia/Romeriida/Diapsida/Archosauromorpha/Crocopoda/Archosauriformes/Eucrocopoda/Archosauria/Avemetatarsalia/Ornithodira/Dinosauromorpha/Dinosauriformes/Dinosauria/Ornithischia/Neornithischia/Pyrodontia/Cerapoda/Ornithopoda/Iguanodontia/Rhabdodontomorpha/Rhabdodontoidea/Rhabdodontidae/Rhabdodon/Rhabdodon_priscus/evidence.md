---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Rhabdodon priscus
    rank: species
    sourceDatasetId: null
    name:
      zh: Rhabdodon priscus
      en: Rhabdodon priscus
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
            title: PBDB accepted record — Rhabdodon priscus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=96110&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:96110; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:96110
            selectedOccurrenceIds:
              - occ:486489
              - occ:486492
              - occ:487167
              - occ:487181
              - occ:528124
              - occ:535196
              - occ:825942
              - occ:826618
              - occ:830877
              - occ:872401
              - occ:1116242
              - occ:1116645
              - occ:1278693
              - occ:1431973
              - occ:1549270
            selectedCollectionIds:
              - col:48720
              - col:48849
              - col:48850
              - col:53918
              - col:55387
              - col:91037
              - col:53479
              - col:53480
              - col:59410
              - col:48864
              - col:141601
              - col:141189
              - col:158281
              - col:218895
            sourceReferenceIds:
              - ref:12806
              - ref:13016
              - ref:13019
              - ref:82064
              - ref:56218
              - ref:30636
              - ref:30653
              - ref:30925
              - ref:32943
              - ref:46006
              - ref:54061
              - ref:67929
              - ref:75805
            originalIdentificationMappings:
              - occurrenceId: occ:486489
                originalIdentifiedName: Oligosaurus adelus n. gen. n. sp.
                acceptedName: Rhabdodon priscus
                difference: null
              - occurrenceId: occ:486492
                originalIdentifiedName: Ornithomerus gracilis n. gen. n. sp.
                acceptedName: Rhabdodon priscus
                difference: null
              - occurrenceId: occ:535196
                originalIdentifiedName: Rabdodon priscum n. gen. n. sp.
                acceptedName: Rhabdodon priscus
                difference: recombined as
              - occurrenceId: occ:825942
                originalIdentifiedName: Rhabdodon priscum
                acceptedName: Rhabdodon priscus
                difference: recombined as
              - occurrenceId: occ:826618
                originalIdentifiedName: Rhabdodon priscum
                acceptedName: Rhabdodon priscus
                difference: recombined as
              - occurrenceId: occ:830877
                originalIdentifiedName: Rhabdodon priscum
                acceptedName: Rhabdodon priscus
                difference: recombined as
              - occurrenceId: occ:872401
                originalIdentifiedName: Rhabdodon priscum
                acceptedName: Rhabdodon priscus
                difference: recombined as
              - occurrenceId: occ:1116242
                originalIdentifiedName: Rhabdodon priscum
                acceptedName: Rhabdodon priscus
                difference: recombined as
              - occurrenceId: occ:1116645
                originalIdentifiedName: Rhabdodon priscum
                acceptedName: Rhabdodon priscus
                difference: recombined as
              - occurrenceId: occ:1278693
                originalIdentifiedName: Rhabdodon priscum
                acceptedName: Rhabdodon priscus
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

# Rhabdodon priscus
