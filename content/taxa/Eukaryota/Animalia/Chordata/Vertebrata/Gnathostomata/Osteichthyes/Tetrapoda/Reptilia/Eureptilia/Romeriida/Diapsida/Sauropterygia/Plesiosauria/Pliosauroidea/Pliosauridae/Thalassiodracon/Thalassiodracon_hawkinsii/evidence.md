---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thalassiodracon hawkinsii
    rank: species
    sourceDatasetId: null
    name:
      zh: Thalassiodracon hawkinsii
      en: Thalassiodracon hawkinsii
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
            title: PBDB accepted record — Thalassiodracon hawkinsii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=95803&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:95803; original response record indices retained in data/sources/sauropterygia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 262ff66f07b86b04952b63768d1a1ff40af059166c0f8e11f63f9ed76019c860
            pbdbTaxonId: txn:95803
            selectedOccurrenceIds:
              - occ:871895
              - occ:871897
              - occ:871904
              - occ:946851
              - occ:989446
              - occ:991109
              - occ:1110866
              - occ:1162059
            selectedCollectionIds:
              - col:96604
              - col:96605
              - col:96608
              - col:110213
              - col:119083
              - col:118938
              - col:149321
            sourceReferenceIds:
              - ref:32796
              - ref:38377
              - ref:14142
              - ref:34651
              - ref:38375
              - ref:31216
            originalIdentificationMappings:
              - occurrenceId: occ:871895
                originalIdentifiedName: Plesiosaurus hawkinsii
                acceptedName: Thalassiodracon hawkinsii
                difference: recombined as
              - occurrenceId: occ:871897
                originalIdentifiedName: Plesiosaurus etheridgii n. sp.
                acceptedName: Thalassiodracon hawkinsii
                difference: null
              - occurrenceId: occ:871904
                originalIdentifiedName: Plesiosaurus hawkinsii
                acceptedName: Thalassiodracon hawkinsii
                difference: recombined as
              - occurrenceId: occ:946851
                originalIdentifiedName: Plesiosaurus hawkinsi
                acceptedName: Thalassiodracon hawkinsii
                difference: recombined as
              - occurrenceId: occ:989446
                originalIdentifiedName: Plesiosaurus hawkinsii n. sp.
                acceptedName: Thalassiodracon hawkinsii
                difference: recombined as
              - occurrenceId: occ:991109
                originalIdentifiedName: Plesiosaurus eleutheraxon n. sp.
                acceptedName: Thalassiodracon hawkinsii
                difference: null
              - occurrenceId: occ:1110866
                originalIdentifiedName: Plesiosaurus hawkinsi
                acceptedName: Thalassiodracon hawkinsii
                difference: recombined as
              - occurrenceId: occ:1162059
                originalIdentifiedName: Plesiosaurus hawkinsii
                acceptedName: Thalassiodracon hawkinsii
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

# Thalassiodracon hawkinsii
