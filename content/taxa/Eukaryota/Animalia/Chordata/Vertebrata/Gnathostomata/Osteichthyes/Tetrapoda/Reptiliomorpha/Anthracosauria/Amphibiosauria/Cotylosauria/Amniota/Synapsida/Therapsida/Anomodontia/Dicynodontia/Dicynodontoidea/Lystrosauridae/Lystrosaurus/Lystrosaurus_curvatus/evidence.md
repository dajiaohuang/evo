---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Lystrosaurus curvatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Lystrosaurus curvatus
      en: Lystrosaurus curvatus
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
            title: PBDB accepted record — Lystrosaurus curvatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=56864&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:56864; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:56864
            selectedOccurrenceIds:
              - occ:922667
              - occ:922677
              - occ:922684
              - occ:922698
              - occ:922707
              - occ:922711
              - occ:922714
              - occ:922719
              - occ:922722
              - occ:980058
              - occ:1304589
              - occ:1315261
              - occ:1320338
              - occ:1320672
              - occ:1343002
              - occ:1343005
              - occ:1413651
              - occ:1418585
              - occ:1418587
              - occ:1418632
              - occ:1418634
            selectedCollectionIds:
              - col:88282
              - col:98602
              - col:105603
              - col:105606
              - col:34815
              - col:80140
              - col:85948
              - col:105610
              - col:117183
              - col:144320
              - col:176503
              - col:144326
              - col:177605
              - col:181691
              - col:195278
              - col:87414
            sourceReferenceIds:
              - ref:27216
              - ref:29040
              - ref:66488
              - ref:27225
            originalIdentificationMappings:
              - occurrenceId: occ:922684
                originalIdentifiedName: Lystrosaurus oviceps
                acceptedName: Lystrosaurus curvatus
                difference: null
              - occurrenceId: occ:922714
                originalIdentifiedName: Lystrosaurus oviceps
                acceptedName: Lystrosaurus curvatus
                difference: null
              - occurrenceId: occ:922719
                originalIdentifiedName: Lystrosaurus oviceps
                acceptedName: Lystrosaurus curvatus
                difference: null
              - occurrenceId: occ:1315261
                originalIdentifiedName: Dicynodon curvatus n. sp.
                acceptedName: Lystrosaurus curvatus
                difference: recombined as
              - occurrenceId: occ:1320338
                originalIdentifiedName: Lystrosaurus platyceps
                acceptedName: Lystrosaurus curvatus
                difference: null
              - occurrenceId: occ:1343005
                originalIdentifiedName: Lystrosaurus platyceps
                acceptedName: Lystrosaurus curvatus
                difference: null
              - occurrenceId: occ:1418587
                originalIdentifiedName: Lystrosaurus jorisseni n. sp.
                acceptedName: Lystrosaurus curvatus
                difference: null
              - occurrenceId: occ:1418632
                originalIdentifiedName: Lystrosaurus theileri n. sp.
                acceptedName: Lystrosaurus curvatus
                difference: null
              - occurrenceId: occ:1418634
                originalIdentifiedName: Lystrosaurus wageri n. sp.
                acceptedName: Lystrosaurus curvatus
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

# Lystrosaurus curvatus
