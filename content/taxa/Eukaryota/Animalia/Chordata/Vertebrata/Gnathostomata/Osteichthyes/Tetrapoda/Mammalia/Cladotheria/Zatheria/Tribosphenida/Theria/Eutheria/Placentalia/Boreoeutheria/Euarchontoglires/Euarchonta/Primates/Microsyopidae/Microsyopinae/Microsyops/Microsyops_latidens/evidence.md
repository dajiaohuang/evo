---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Microsyops latidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Microsyops latidens
      en: Microsyops latidens
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
            title: PBDB accepted record — Microsyops latidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45483&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45483; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45483
            selectedOccurrenceIds:
              - occ:170033
              - occ:170285
              - occ:170495
              - occ:170529
              - occ:170596
              - occ:170827
              - occ:170840
              - occ:170942
              - occ:171184
              - occ:172117
              - occ:172844
              - occ:172959
              - occ:456876
              - occ:457583
              - occ:457592
              - occ:457610
              - occ:458741
              - occ:458747
              - occ:469593
              - occ:469684
              - occ:469714
              - occ:469727
              - occ:469790
              - occ:469833
              - occ:469859
              - occ:470205
              - occ:471078
              - occ:471088
              - occ:471533
              - occ:471558
              - occ:471571
              - occ:1370123
              - occ:1370156
              - occ:1370168
            selectedCollectionIds:
              - col:15552
              - col:15559
              - col:15575
              - col:15576
              - col:15578
              - col:15652
              - col:15654
              - col:15663
              - col:15717
              - col:15842
              - col:15937
              - col:15964
              - col:15680
              - col:15684
              - col:15685
              - col:15687
              - col:15690
              - col:15691
              - col:46692
              - col:46699
              - col:46700
              - col:46701
              - col:46706
              - col:46711
              - col:46714
              - col:46746
              - col:46810
              - col:46811
              - col:46847
              - col:46849
              - col:46851
              - col:186937
              - col:186944
              - col:186945
            sourceReferenceIds:
              - ref:6214
              - ref:1730
              - ref:2311
              - ref:1123
              - ref:2933
              - ref:2104
              - ref:1760
              - ref:11717
              - ref:62695
            originalIdentificationMappings:
              - occurrenceId: occ:172959
                originalIdentifiedName: Cynodontomys latidens
                acceptedName: Microsyops latidens
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

# Microsyops latidens
