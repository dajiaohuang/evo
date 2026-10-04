---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Croizetoceros ramosus
    rank: species
    sourceDatasetId: null
    name:
      zh: Croizetoceros ramosus
      en: Croizetoceros ramosus
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
            title: PBDB accepted record — Croizetoceros ramosus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=335197&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:335197; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:335197
            selectedOccurrenceIds:
              - occ:365126
              - occ:365313
              - occ:365343
              - occ:370112
              - occ:418126
              - occ:422074
              - occ:422110
              - occ:435613
              - occ:435618
              - occ:447646
              - occ:450368
              - occ:474702
              - occ:474720
              - occ:475106
              - occ:475122
              - occ:475127
              - occ:475193
              - occ:475274
              - occ:478745
              - occ:489968
              - occ:497781
              - occ:501616
              - occ:501626
              - occ:501766
              - occ:724185
              - occ:1384781
              - occ:1413732
              - occ:1413740
              - occ:1413749
              - occ:1413763
              - occ:1413774
              - occ:1413782
            selectedCollectionIds:
              - col:34593
              - col:34614
              - col:34617
              - col:35038
              - col:38892
              - col:41026
              - col:41027
              - col:33473
              - col:34840
              - col:44089
              - col:44231
              - col:47099
              - col:47100
              - col:47131
              - col:47132
              - col:47133
              - col:47150
              - col:47188
              - col:47624
              - col:49414
              - col:50274
              - col:50913
              - col:50918
              - col:50935
              - col:77773
              - col:189976
              - col:185861
              - col:185862
              - col:185859
              - col:195290
              - col:195291
              - col:195294
            sourceReferenceIds:
              - ref:9135
              - ref:70370
              - ref:9444
              - ref:10948
              - ref:11054
              - ref:11342
              - ref:11569
              - ref:12548
              - ref:12578
              - ref:13151
              - ref:8651
              - ref:13592
              - ref:26265
              - ref:63872
              - ref:66506
            originalIdentificationMappings:
              - occurrenceId: occ:475193
                originalIdentifiedName: Cervus ramosus
                acceptedName: Croizetoceros ramosus
                difference: recombined as
              - occurrenceId: occ:497781
                originalIdentifiedName: Cervus ramosus
                acceptedName: Croizetoceros ramosus
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

# Croizetoceros ramosus
