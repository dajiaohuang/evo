---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Coryphodon radians
    rank: species
    sourceDatasetId: null
    name:
      zh: Coryphodon radians
      en: Coryphodon radians
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
            title: PBDB accepted record — Coryphodon radians
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44470&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44470; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44470
            selectedOccurrenceIds:
              - occ:168733
              - occ:168914
              - occ:170879
              - occ:170918
              - occ:172393
              - occ:457687
              - occ:457713
              - occ:457733
              - occ:457741
              - occ:458602
              - occ:469108
              - occ:469653
              - occ:469875
              - occ:469994
              - occ:470031
              - occ:470044
              - occ:470114
              - occ:470128
              - occ:470184
              - occ:470271
              - occ:470319
              - occ:470329
              - occ:470344
              - occ:470400
              - occ:470514
              - occ:470575
              - occ:470594
              - occ:470731
              - occ:470828
              - occ:470851
              - occ:470873
              - occ:470893
              - occ:470913
              - occ:471343
              - occ:471371
              - occ:471381
              - occ:471397
              - occ:471406
              - occ:471455
              - occ:471461
              - occ:471496
              - occ:471576
            selectedCollectionIds:
              - col:15455
              - col:15483
              - col:15661
              - col:15662
              - col:15889
              - col:15695
              - col:15697
              - col:15698
              - col:15699
              - col:15702
              - col:46641
              - col:46698
              - col:46717
              - col:46730
              - col:46732
              - col:46733
              - col:46738
              - col:46739
              - col:46745
              - col:46753
              - col:46757
              - col:46758
              - col:46759
              - col:46762
              - col:46771
              - col:46776
              - col:46778
              - col:46789
              - col:46795
              - col:46797
              - col:46798
              - col:46800
              - col:46801
              - col:46831
              - col:46833
              - col:46834
              - col:46835
              - col:46836
              - col:46840
              - col:46841
              - col:46845
              - col:46852
            sourceReferenceIds:
              - ref:1618
              - ref:4268
              - ref:1616
              - ref:11717
            originalIdentificationMappings: []
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

# Coryphodon radians
