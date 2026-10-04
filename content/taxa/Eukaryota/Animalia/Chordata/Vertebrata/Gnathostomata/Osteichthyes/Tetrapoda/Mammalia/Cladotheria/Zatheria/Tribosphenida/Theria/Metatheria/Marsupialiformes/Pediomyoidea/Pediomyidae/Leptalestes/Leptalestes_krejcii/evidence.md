---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptalestes krejcii
    rank: species
    sourceDatasetId: null
    name:
      zh: Leptalestes krejcii
      en: Leptalestes krejcii
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Leptalestes krejcii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50068&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:50068; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50068
            selectedOccurrenceIds:
              - occ:163030
              - occ:163057
              - occ:163098
              - occ:163129
              - occ:163139
              - occ:163259
              - occ:163289
              - occ:163332
              - occ:163360
              - occ:163424
              - occ:163506
              - occ:163567
              - occ:163589
              - occ:163615
              - occ:163646
              - occ:163692
              - occ:163696
              - occ:1292684
            selectedCollectionIds:
              - col:14503
              - col:14508
              - col:14516
              - col:14519
              - col:14521
              - col:14549
              - col:14558
              - col:14566
              - col:14575
              - col:14585
              - col:14604
              - col:14618
              - col:14624
              - col:14630
              - col:14634
              - col:14648
              - col:14649
              - col:172642
            sourceReferenceIds:
              - ref:1822
              - ref:960
              - ref:962
              - ref:1241
              - ref:3310
              - ref:2255
              - ref:3705
              - ref:2229
              - ref:56083
            originalIdentificationMappings:
              - occurrenceId: occ:163030
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163057
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163098
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163129
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163139
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163259
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163289
                originalIdentifiedName: '"Pediomys" krejcii'
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163332
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163360
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163424
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163506
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163567
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163589
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163615
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163646
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163692
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:163696
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
                difference: recombined as
              - occurrenceId: occ:1292684
                originalIdentifiedName: Pediomys krejcii
                acceptedName: Leptalestes krejcii
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

# Leptalestes krejcii
