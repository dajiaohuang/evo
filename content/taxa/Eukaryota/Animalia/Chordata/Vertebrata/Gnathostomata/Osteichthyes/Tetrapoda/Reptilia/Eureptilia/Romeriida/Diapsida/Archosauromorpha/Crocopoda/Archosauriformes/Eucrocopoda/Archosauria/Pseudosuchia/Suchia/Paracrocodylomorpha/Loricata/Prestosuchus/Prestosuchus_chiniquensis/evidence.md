---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Prestosuchus chiniquensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Prestosuchus chiniquensis
      en: Prestosuchus chiniquensis
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
            title: PBDB accepted record — Prestosuchus chiniquensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=100831&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:100831; original response record indices retained in data/sources/other-archosauria-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 95c66a034ee801effe8e70dd0e2d80f080cfb92730dab8e60a52bf5d4a379a25
            pbdbTaxonId: txn:100831
            selectedOccurrenceIds:
              - occ:668708
              - occ:896139
              - occ:896140
              - occ:896145
              - occ:924724
              - occ:924725
              - occ:1380553
              - occ:1381806
              - occ:1651915
            selectedCollectionIds:
              - col:72141
              - col:99412
              - col:99413
              - col:99414
              - col:105826
              - col:105827
              - col:188977
              - col:189345
              - col:234531
            sourceReferenceIds:
              - ref:24388
              - ref:63461
              - ref:63584
              - ref:88209
            originalIdentificationMappings:
              - occurrenceId: occ:668708
                originalIdentifiedName: Prestosuchus loricatus n. sp.
                acceptedName: Prestosuchus chiniquensis
                difference: null
              - occurrenceId: occ:924724
                originalIdentifiedName: Prestosuchus chiniquensis n. gen. n. sp.
                acceptedName: Prestosuchus chiniquensis
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

# Prestosuchus chiniquensis
