---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Brachychirotherium eyermani
    rank: species
    sourceDatasetId: null
    name:
      zh: Brachychirotherium eyermani
      en: Brachychirotherium eyermani
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherArchosauriaTaxonomy20261002
          - pbdbOtherArchosauriaOccurrences20261002
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
          - pbdbOtherArchosauriaOccurrences20261002
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
          - pbdbOtherArchosauriaOccurrences20261002
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
          - pbdbOtherArchosauriaOccurrences20261002
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
          - pbdbOtherArchosauriaOccurrences20261002
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
        - referenceId: ref-d904a353-9f55-4918-a6a5-9ff24bb69837
          metadataVariant: 0
          sourceKey: pbdbArchosauriaTaxonomy20261002
          usage:
            title: PBDB accepted record — Brachychirotherium eyermani
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=64086&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d904a353-9f55-4918-a6a5-9ff24bb69837
          metadataVariant: 0
          sourceKey: pbdbOtherArchosauriaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:64086; original response record indices retained in data/sources/other-archosauria-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 95c66a034ee801effe8e70dd0e2d80f080cfb92730dab8e60a52bf5d4a379a25
            pbdbTaxonId: txn:64086
            selectedOccurrenceIds:
              - occ:468908
              - occ:535868
              - occ:535872
              - occ:536426
              - occ:558126
              - occ:778599
            selectedCollectionIds:
              - col:46622
              - col:55414
              - col:55415
              - col:55412
              - col:57917
              - col:52168
            sourceReferenceIds:
              - ref:12444
              - ref:14907
              - ref:15573
              - ref:27985
            originalIdentificationMappings:
              - occurrenceId: occ:468908
                originalIdentifiedName: Chirotherium eyermani n. sp.
                acceptedName: Brachychirotherium eyermani
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

# Brachychirotherium eyermani
