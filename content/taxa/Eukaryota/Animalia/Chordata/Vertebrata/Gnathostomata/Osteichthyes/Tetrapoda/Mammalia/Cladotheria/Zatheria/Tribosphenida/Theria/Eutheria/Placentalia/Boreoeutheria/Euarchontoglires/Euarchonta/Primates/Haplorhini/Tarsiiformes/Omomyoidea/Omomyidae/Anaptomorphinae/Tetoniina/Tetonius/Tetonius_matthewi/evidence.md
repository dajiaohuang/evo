---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tetonius matthewi
    rank: species
    sourceDatasetId: null
    name:
      zh: Tetonius matthewi
      en: Tetonius matthewi
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
            title: PBDB accepted record — Tetonius matthewi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52191&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52191; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52191
            selectedOccurrenceIds:
              - occ:168936
              - occ:169234
              - occ:169303
              - occ:169320
              - occ:169349
              - occ:169355
              - occ:169393
              - occ:169457
              - occ:170667
              - occ:171006
              - occ:171264
              - occ:171427
              - occ:171433
              - occ:171611
              - occ:171791
              - occ:171867
              - occ:171892
              - occ:171904
              - occ:171994
              - occ:172030
              - occ:172155
              - occ:172356
              - occ:457673
              - occ:457701
              - occ:457732
              - occ:458625
              - occ:458676
              - occ:469119
              - occ:469343
              - occ:469369
              - occ:469401
              - occ:469519
              - occ:469535
              - occ:469767
              - occ:469905
              - occ:469924
              - occ:470006
              - occ:470027
              - occ:470280
              - occ:470555
              - occ:470629
              - occ:470838
              - occ:470867
              - occ:470910
              - occ:470975
              - occ:471028
              - occ:471148
              - occ:471170
              - occ:471319
              - occ:471339
              - occ:471359
              - occ:471396
              - occ:471441
              - occ:471479
              - occ:1599698
            selectedCollectionIds:
              - col:15485
              - col:15508
              - col:15510
              - col:15511
              - col:15512
              - col:15513
              - col:15514
              - col:15516
              - col:15592
              - col:15673
              - col:15725
              - col:15742
              - col:15743
              - col:15762
              - col:15790
              - col:15796
              - col:15799
              - col:15801
              - col:15818
              - col:15826
              - col:15845
              - col:15887
              - col:15694
              - col:15695
              - col:15697
              - col:15702
              - col:15705
              - col:46641
              - col:46669
              - col:46672
              - col:46675
              - col:46687
              - col:46688
              - col:46704
              - col:46720
              - col:46721
              - col:46730
              - col:46731
              - col:46753
              - col:46773
              - col:46780
              - col:46795
              - col:46797
              - col:46800
              - col:46805
              - col:46808
              - col:46814
              - col:46816
              - col:46828
              - col:46830
              - col:46831
              - col:46834
              - col:46838
              - col:46843
              - col:226069
            sourceReferenceIds:
              - ref:1123
              - ref:53736
              - ref:11717
              - ref:81902
            originalIdentificationMappings:
              - occurrenceId: occ:169393
                originalIdentifiedName: Tetonius matthewi n. sp.
                acceptedName: Tetonius matthewi
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

# Tetonius matthewi
