---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chiniquodon theotonicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Chiniquodon theotonicus
      en: Chiniquodon theotonicus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherSynapsidaTaxonomy20261002
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaTaxonomy20261002
          usage:
            title: PBDB accepted record — Chiniquodon theotonicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=100823&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:100823; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:100823
            selectedOccurrenceIds:
              - occ:272318
              - occ:573790
              - occ:895298
              - occ:896143
              - occ:896158
              - occ:896160
              - occ:922130
              - occ:922131
              - occ:924723
              - occ:1417967
            selectedCollectionIds:
              - col:26092
              - col:60294
              - col:99237
              - col:99413
              - col:99421
              - col:99423
              - col:105529
              - col:105826
              - col:92318
            sourceReferenceIds:
              - ref:7234
              - ref:17302
              - ref:34131
              - ref:24667
              - ref:35256
              - ref:66779
            originalIdentificationMappings:
              - occurrenceId: occ:272318
                originalIdentifiedName: Probelesodon lewisi
                acceptedName: Chiniquodon theotonicus
                difference: null
              - occurrenceId: occ:573790
                originalIdentifiedName: Probelesodon lewisi n. gen. n. sp.
                acceptedName: Chiniquodon theotonicus
                difference: null
              - occurrenceId: occ:895298
                originalIdentifiedName: Probelesodon kitchingi
                acceptedName: Chiniquodon theotonicus
                difference: null
              - occurrenceId: occ:896143
                originalIdentifiedName: Belesodon magnificus
                acceptedName: Chiniquodon theotonicus
                difference: null
              - occurrenceId: occ:896158
                originalIdentifiedName: Chiniquodon theotonicus n. gen. n. sp.
                acceptedName: Chiniquodon theotonicus
                difference: null
              - occurrenceId: occ:896160
                originalIdentifiedName: Belesodon magnificus n. gen. n. sp.
                acceptedName: Chiniquodon theotonicus
                difference: null
              - occurrenceId: occ:922130
                originalIdentifiedName: Belesodon magnificus
                acceptedName: Chiniquodon theotonicus
                difference: null
              - occurrenceId: occ:924723
                originalIdentifiedName: Belesodon magnificus
                acceptedName: Chiniquodon theotonicus
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

# Chiniquodon theotonicus
