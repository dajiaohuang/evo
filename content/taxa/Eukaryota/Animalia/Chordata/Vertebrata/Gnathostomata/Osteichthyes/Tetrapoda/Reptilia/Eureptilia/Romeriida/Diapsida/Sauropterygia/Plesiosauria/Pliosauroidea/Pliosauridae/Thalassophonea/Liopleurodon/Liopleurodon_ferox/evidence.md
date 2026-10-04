---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Liopleurodon ferox
    rank: species
    sourceDatasetId: null
    name:
      zh: Liopleurodon ferox
      en: Liopleurodon ferox
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
            title: PBDB accepted record — Liopleurodon ferox
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=100097&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:100097; original response record indices retained in data/sources/sauropterygia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 262ff66f07b86b04952b63768d1a1ff40af059166c0f8e11f63f9ed76019c860
            pbdbTaxonId: txn:100097
            selectedOccurrenceIds:
              - occ:991278
              - occ:991279
              - occ:1071712
              - occ:1117491
              - occ:1117602
              - occ:1117603
              - occ:1117605
              - occ:1136044
            selectedCollectionIds:
              - col:119668
              - col:109800
              - col:133067
              - col:140700
              - col:52633
              - col:130656
              - col:141861
              - col:144756
            sourceReferenceIds:
              - ref:32159
              - ref:33944
              - ref:42839
              - ref:33960
              - ref:46850
            originalIdentificationMappings:
              - occurrenceId: occ:991278
                originalIdentifiedName: Liopleurodon ferox n. gen. n. sp.
                acceptedName: Liopleurodon ferox
                difference: null
              - occurrenceId: occ:1071712
                originalIdentifiedName: Pliosaurus ferox
                acceptedName: Liopleurodon ferox
                difference: recombined as
              - occurrenceId: occ:1117491
                originalIdentifiedName: Pliosaurus ferox
                acceptedName: Liopleurodon ferox
                difference: recombined as
              - occurrenceId: occ:1117602
                originalIdentifiedName: Pliosaurus ferox
                acceptedName: Liopleurodon ferox
                difference: recombined as
              - occurrenceId: occ:1117603
                originalIdentifiedName: Pliosaurus ferox
                acceptedName: Liopleurodon ferox
                difference: recombined as
              - occurrenceId: occ:1117605
                originalIdentifiedName: Pliosaurus ferox
                acceptedName: Liopleurodon ferox
                difference: recombined as
              - occurrenceId: occ:1136044
                originalIdentifiedName: Pliosaurus ferox
                acceptedName: Liopleurodon ferox
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

# Liopleurodon ferox
