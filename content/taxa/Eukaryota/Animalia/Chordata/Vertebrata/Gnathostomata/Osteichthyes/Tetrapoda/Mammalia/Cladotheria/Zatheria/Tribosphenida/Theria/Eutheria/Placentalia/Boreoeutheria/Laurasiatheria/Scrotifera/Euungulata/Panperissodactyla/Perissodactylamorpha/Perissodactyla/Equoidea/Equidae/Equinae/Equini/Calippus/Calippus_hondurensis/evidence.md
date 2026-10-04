---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Calippus hondurensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Calippus hondurensis
      en: Calippus hondurensis
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
            title: PBDB accepted record — Calippus hondurensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50537&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50537; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50537
            selectedOccurrenceIds:
              - occ:187981
              - occ:188759
              - occ:188808
              - occ:188841
              - occ:188863
              - occ:188884
              - occ:188898
              - occ:188905
              - occ:277289
              - occ:1208249
              - occ:1211739
              - occ:1211745
              - occ:1211748
              - occ:1307640
              - occ:1394920
              - occ:1519384
              - occ:1519418
              - occ:1519494
            selectedCollectionIds:
              - col:18563
              - col:18723
              - col:18736
              - col:18739
              - col:18743
              - col:18746
              - col:18750
              - col:18751
              - col:26549
              - col:20079
              - col:157349
              - col:157350
              - col:157351
              - col:175256
              - col:144596
              - col:175257
              - col:212335
              - col:212341
            sourceReferenceIds:
              - ref:1951
              - ref:1949
              - ref:6294
              - ref:2695
              - ref:7292
              - ref:51407
              - ref:51759
              - ref:64966
            originalIdentificationMappings:
              - occurrenceId: occ:188759
                originalIdentifiedName: Calippus (Grammohippus) hondurensis
                acceptedName: Calippus hondurensis
                difference: recombined as
              - occurrenceId: occ:188898
                originalIdentifiedName: Pliohippus hondurensis
                acceptedName: Calippus hondurensis
                difference: recombined as
              - occurrenceId: occ:1208249
                originalIdentifiedName: Calippus (Grammohippus) castilli
                acceptedName: Calippus hondurensis
                difference: null
              - occurrenceId: occ:1211739
                originalIdentifiedName: Calippus (Grammohippus) hondurensis
                acceptedName: Calippus hondurensis
                difference: recombined as
              - occurrenceId: occ:1211745
                originalIdentifiedName: Calippus (Grammohippus) hondurensis
                acceptedName: Calippus hondurensis
                difference: recombined as
              - occurrenceId: occ:1211748
                originalIdentifiedName: Calippus (Grammohippus) hondurensis
                acceptedName: Calippus hondurensis
                difference: recombined as
              - occurrenceId: occ:1307640
                originalIdentifiedName: Calippus (Grammohippus) hondurensis
                acceptedName: Calippus hondurensis
                difference: recombined as
              - occurrenceId: occ:1394920
                originalIdentifiedName: Calippus (Grammohippus) hondurensis
                acceptedName: Calippus hondurensis
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

# Calippus hondurensis
