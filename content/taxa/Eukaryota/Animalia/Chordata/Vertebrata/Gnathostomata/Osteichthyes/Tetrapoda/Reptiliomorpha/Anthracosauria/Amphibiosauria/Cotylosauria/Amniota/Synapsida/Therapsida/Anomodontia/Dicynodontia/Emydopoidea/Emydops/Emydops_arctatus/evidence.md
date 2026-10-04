---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Emydops arctatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Emydops arctatus
      en: Emydops arctatus
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
            title: PBDB accepted record — Emydops arctatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=197856&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:197856; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:197856
            selectedOccurrenceIds:
              - occ:794775
              - occ:794791
              - occ:794890
              - occ:1304828
              - occ:1305432
              - occ:1308641
              - occ:1317441
              - occ:1317940
              - occ:1329032
              - occ:1338340
              - occ:1338575
              - occ:1428374
            selectedCollectionIds:
              - col:86282
              - col:86285
              - col:86299
              - col:174666
              - col:174734
              - col:175565
              - col:176923
              - col:177007
              - col:178870
              - col:80176
              - col:180787
              - col:179623
            sourceReferenceIds:
              - ref:29075
              - ref:27216
              - ref:58451
              - ref:37442
              - ref:67683
            originalIdentificationMappings:
              - occurrenceId: occ:794775
                originalIdentifiedName: Emydops minor
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:794791
                originalIdentifiedName: Emydops minor
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:794890
                originalIdentifiedName: Emydops minor
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1304828
                originalIdentifiedName: Emydopsis longus n. sp.
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1305432
                originalIdentifiedName: Emydops minimus
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1308641
                originalIdentifiedName: Emydops minor n. gen. n. sp.
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1317441
                originalIdentifiedName: Dicynodon ictinops n. sp.
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1317940
                originalIdentifiedName: Opisthoctenodon brachyops n. sp.
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1329032
                originalIdentifiedName: Emydopsis minimus n. sp.
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1338340
                originalIdentifiedName: Dicynodon ictinops
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1338575
                originalIdentifiedName: Emydops parvus n. sp.
                acceptedName: Emydops arctatus
                difference: null
              - occurrenceId: occ:1428374
                originalIdentifiedName: Pristerodon brachyops n. sp.
                acceptedName: Emydops arctatus
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

# Emydops arctatus
