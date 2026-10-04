---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Colymbosaurus trochanterius
    rank: species
    sourceDatasetId: null
    name:
      zh: Colymbosaurus trochanterius
      en: Colymbosaurus trochanterius
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbSauropterygiaTaxonomy20261002
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
        - referenceId: ref-f8477a8a-0e70-4404-a0cd-029651abdad2
          metadataVariant: 0
          sourceKey: pbdbSauropterygiaTaxonomy20261002
          usage:
            title: PBDB accepted record — Colymbosaurus trochanterius
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=171645&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-f8477a8a-0e70-4404-a0cd-029651abdad2
          metadataVariant: 0
          sourceKey: pbdbSauropterygiaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:171645; original response record indices retained in data/sources/sauropterygia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 262ff66f07b86b04952b63768d1a1ff40af059166c0f8e11f63f9ed76019c860
            pbdbTaxonId: txn:171645
            selectedOccurrenceIds:
              - occ:890631
              - occ:990831
              - occ:990832
              - occ:990833
              - occ:990834
              - occ:990835
              - occ:990836
              - occ:1072831
              - occ:1117494
              - occ:1171095
              - occ:1284661
            selectedCollectionIds:
              - col:98478
              - col:119504
              - col:119505
              - col:119506
              - col:119507
              - col:119508
              - col:119509
              - col:65030
              - col:130656
              - col:150922
              - col:105872
            sourceReferenceIds:
              - ref:34651
              - ref:38367
              - ref:41491
              - ref:33993
              - ref:14179
              - ref:42894
              - ref:23773
              - ref:48214
              - ref:55639
            originalIdentificationMappings:
              - occurrenceId: occ:890631
                originalIdentifiedName: Plesiosaurus trochanterius n. sp.
                acceptedName: Colymbosaurus trochanterius
                difference: recombined as
              - occurrenceId: occ:990831
                originalIdentifiedName: Plesiosaurus manselii n. sp.
                acceptedName: Colymbosaurus trochanterius
                difference: null
              - occurrenceId: occ:990832
                originalIdentifiedName: Pliosaurus portlandicus n. sp.
                acceptedName: Colymbosaurus trochanterius
                difference: null
              - occurrenceId: occ:990835
                originalIdentifiedName: Colymbosaurus megadeirus n. sp.
                acceptedName: Colymbosaurus trochanterius
                difference: null
              - occurrenceId: occ:990836
                originalIdentifiedName: Colymbosaurus megadeirus
                acceptedName: Colymbosaurus trochanterius
                difference: null
              - occurrenceId: occ:1072831
                originalIdentifiedName: Cimoliosaurus portlandicus
                acceptedName: Colymbosaurus trochanterius
                difference: null
              - occurrenceId: occ:1117494
                originalIdentifiedName: Plesiosaurus trochanterius
                acceptedName: Colymbosaurus trochanterius
                difference: recombined as
              - occurrenceId: occ:1284661
                originalIdentifiedName: Colymbosaurus megadeirus
                acceptedName: Colymbosaurus trochanterius
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

# Colymbosaurus trochanterius
