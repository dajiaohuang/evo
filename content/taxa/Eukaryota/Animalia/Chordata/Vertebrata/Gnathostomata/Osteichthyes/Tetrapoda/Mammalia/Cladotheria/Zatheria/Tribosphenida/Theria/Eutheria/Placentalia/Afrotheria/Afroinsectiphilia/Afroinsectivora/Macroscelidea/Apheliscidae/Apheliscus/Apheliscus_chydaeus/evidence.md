---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Apheliscus chydaeus
    rank: species
    sourceDatasetId: null
    name:
      zh: Apheliscus chydaeus
      en: Apheliscus chydaeus
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
            title: PBDB accepted record — Apheliscus chydaeus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44157&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44157; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44157
            selectedOccurrenceIds:
              - occ:169039
              - occ:169075
              - occ:169153
              - occ:171288
              - occ:171306
              - occ:171332
              - occ:171364
              - occ:171381
              - occ:171398
              - occ:171412
              - occ:171418
              - occ:171428
              - occ:171485
              - occ:171497
              - occ:171507
              - occ:171523
              - occ:171553
              - occ:171683
              - occ:171686
              - occ:171689
              - occ:171719
              - occ:171774
              - occ:171800
              - occ:171814
              - occ:171845
              - occ:171858
              - occ:171879
              - occ:171886
              - occ:171900
              - occ:171984
              - occ:171986
              - occ:172002
              - occ:172009
              - occ:172018
              - occ:172022
              - occ:172027
              - occ:172041
              - occ:462533
              - occ:462573
              - occ:469907
              - occ:469954
              - occ:470607
              - occ:470638
              - occ:470673
              - occ:470713
              - occ:470870
              - occ:470945
              - occ:471032
              - occ:471106
              - occ:471124
              - occ:471202
              - occ:471430
            selectedCollectionIds:
              - col:15491
              - col:15493
              - col:15504
              - col:15726
              - col:15727
              - col:15729
              - col:15731
              - col:15733
              - col:15736
              - col:15738
              - col:15740
              - col:15742
              - col:15753
              - col:15754
              - col:15755
              - col:15756
              - col:15758
              - col:15774
              - col:15775
              - col:15779
              - col:15788
              - col:15790
              - col:15792
              - col:15793
              - col:15794
              - col:15796
              - col:15797
              - col:15800
              - col:15815
              - col:15816
              - col:15819
              - col:15820
              - col:15822
              - col:15823
              - col:15825
              - col:15829
              - col:15586
              - col:15587
              - col:46721
              - col:46727
              - col:46780
              - col:46782
              - col:46785
              - col:46788
              - col:46798
              - col:46804
              - col:46809
              - col:46813
              - col:46814
              - col:46819
              - col:46838
            sourceReferenceIds:
              - ref:6294
              - ref:1662
              - ref:11717
            originalIdentificationMappings:
              - occurrenceId: occ:171686
                originalIdentifiedName: Apheliscus chydaeus n. sp.
                acceptedName: Apheliscus chydaeus
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

# Apheliscus chydaeus
