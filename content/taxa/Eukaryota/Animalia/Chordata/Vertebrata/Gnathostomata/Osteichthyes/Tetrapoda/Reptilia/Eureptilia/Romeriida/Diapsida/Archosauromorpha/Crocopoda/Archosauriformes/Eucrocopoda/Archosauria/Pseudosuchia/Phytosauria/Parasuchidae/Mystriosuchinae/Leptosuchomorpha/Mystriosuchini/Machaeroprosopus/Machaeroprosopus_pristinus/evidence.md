---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Machaeroprosopus pristinus
    rank: species
    sourceDatasetId: null
    name:
      zh: Machaeroprosopus pristinus
      en: Machaeroprosopus pristinus
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
            title: PBDB accepted record — Machaeroprosopus pristinus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=69064&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:69064; original response record indices retained in data/sources/other-archosauria-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 95c66a034ee801effe8e70dd0e2d80f080cfb92730dab8e60a52bf5d4a379a25
            pbdbTaxonId: txn:69064
            selectedOccurrenceIds:
              - occ:475079
              - occ:842110
              - occ:842124
              - occ:842197
              - occ:842201
              - occ:842205
              - occ:842947
              - occ:845919
            selectedCollectionIds:
              - col:47126
              - col:93429
              - col:93432
              - col:93461
              - col:93464
              - col:93466
              - col:93566
              - col:94105
            sourceReferenceIds:
              - ref:14122
              - ref:31697
            originalIdentificationMappings:
              - occurrenceId: occ:475079
                originalIdentifiedName: Pseudopalatus pristinus
                acceptedName: Machaeroprosopus pristinus
                difference: recombined as
              - occurrenceId: occ:842110
                originalIdentifiedName: Pseudopalatus pristinus
                acceptedName: Machaeroprosopus pristinus
                difference: recombined as
              - occurrenceId: occ:842124
                originalIdentifiedName: Pseudopalatus pristinus
                acceptedName: Machaeroprosopus pristinus
                difference: recombined as
              - occurrenceId: occ:842197
                originalIdentifiedName: Pseudopalatus pristinus
                acceptedName: Machaeroprosopus pristinus
                difference: recombined as
              - occurrenceId: occ:842201
                originalIdentifiedName: Pseudopalatus pristinus
                acceptedName: Machaeroprosopus pristinus
                difference: recombined as
              - occurrenceId: occ:842205
                originalIdentifiedName: Pseudopalatus pristinus
                acceptedName: Machaeroprosopus pristinus
                difference: recombined as
              - occurrenceId: occ:842947
                originalIdentifiedName: Pseudopalatus pristinus n. gen. n. sp.
                acceptedName: Machaeroprosopus pristinus
                difference: recombined as
              - occurrenceId: occ:845919
                originalIdentifiedName: Pseudopalatus pristinus
                acceptedName: Machaeroprosopus pristinus
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

# Machaeroprosopus pristinus
