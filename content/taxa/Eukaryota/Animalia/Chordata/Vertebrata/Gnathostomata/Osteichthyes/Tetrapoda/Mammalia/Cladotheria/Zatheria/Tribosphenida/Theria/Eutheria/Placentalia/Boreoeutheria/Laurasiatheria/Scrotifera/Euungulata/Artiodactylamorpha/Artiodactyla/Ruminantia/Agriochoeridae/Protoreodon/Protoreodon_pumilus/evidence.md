---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protoreodon pumilus
    rank: species
    sourceDatasetId: null
    name:
      zh: Protoreodon pumilus
      en: Protoreodon pumilus
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
            title: PBDB accepted record — Protoreodon pumilus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43827&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43827; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43827
            selectedOccurrenceIds:
              - occ:175616
              - occ:175621
              - occ:175622
              - occ:175648
              - occ:175677
              - occ:175685
              - occ:175734
              - occ:175769
              - occ:175927
              - occ:175969
              - occ:175973
              - occ:175978
              - occ:176057
              - occ:176076
              - occ:176097
              - occ:176197
              - occ:176239
              - occ:176347
              - occ:176470
              - occ:177192
              - occ:177212
              - occ:177235
              - occ:177256
              - occ:177270
              - occ:177288
              - occ:177294
              - occ:177484
              - occ:177489
              - occ:177490
              - occ:177492
              - occ:177493
              - occ:177508
              - occ:177680
              - occ:177722
              - occ:177732
              - occ:177797
              - occ:807267
              - occ:1629950
              - occ:2069818
              - occ:2069819
              - occ:2069840
            selectedCollectionIds:
              - col:16522
              - col:16524
              - col:16525
              - col:16531
              - col:16534
              - col:16536
              - col:16546
              - col:16555
              - col:16589
              - col:16591
              - col:16593
              - col:16594
              - col:16607
              - col:16611
              - col:16614
              - col:16624
              - col:16626
              - col:16646
              - col:16654
              - col:16786
              - col:16789
              - col:16790
              - col:16791
              - col:16793
              - col:16800
              - col:16801
              - col:16830
              - col:16831
              - col:16832
              - col:16833
              - col:16834
              - col:16835
              - col:16849
              - col:16854
              - col:16856
              - col:16883
              - col:230860
              - col:16657
            sourceReferenceIds:
              - ref:1435
              - ref:6294
              - ref:947
              - ref:3661
              - ref:3665
              - ref:2802
              - ref:1681
              - ref:2052
              - ref:3667
              - ref:3305
              - ref:2072
              - ref:2059
              - ref:3664
              - ref:1084
              - ref:3671
              - ref:2284
              - ref:2761
              - ref:85377
              - ref:95678
            originalIdentificationMappings:
              - occurrenceId: occ:177212
                originalIdentifiedName: Protoreodon annectens
                acceptedName: Protoreodon pumilus
                difference: null
              - occurrenceId: occ:807267
                originalIdentifiedName: Protoreodon medius n. sp.
                acceptedName: Protoreodon pumilus
                difference: null
              - occurrenceId: occ:2069818
                originalIdentifiedName: Protagriochoerus annectens
                acceptedName: Protoreodon pumilus
                difference: null
              - occurrenceId: occ:2069840
                originalIdentifiedName: Protoreodon primus
                acceptedName: Protoreodon pumilus
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

# Protoreodon pumilus
