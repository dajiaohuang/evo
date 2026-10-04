---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Homotherium latidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Homotherium latidens
      en: Homotherium latidens
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
            title: PBDB accepted record — Homotherium latidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=364964&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:364964; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:364964
            selectedOccurrenceIds:
              - occ:195993
              - occ:198618
              - occ:198943
              - occ:199214
              - occ:367535
              - occ:368998
              - occ:369060
              - occ:369170
              - occ:442554
              - occ:443371
              - occ:488501
              - occ:488522
              - occ:489585
              - occ:699344
              - occ:724182
              - occ:740566
              - occ:840116
              - occ:842868
              - occ:1384366
              - occ:1384771
              - occ:1384793
              - occ:1384794
              - occ:1384795
              - occ:1672110
            selectedCollectionIds:
              - col:20142
              - col:20491
              - col:20530
              - col:20569
              - col:34764
              - col:34898
              - col:34911
              - col:34920
              - col:43618
              - col:43658
              - col:49087
              - col:49089
              - col:49307
              - col:56733
              - col:77773
              - col:79632
              - col:93182
              - col:93557
              - col:189830
              - col:189976
              - col:189978
              - col:189979
              - col:189980
              - col:237080
            sourceReferenceIds:
              - ref:6294
              - ref:3580
              - ref:6202
              - ref:6225
              - ref:79089
              - ref:9343
              - ref:9373
              - ref:9345
              - ref:11457
              - ref:11465
              - ref:9580
              - ref:85450
              - ref:26265
              - ref:71494
              - ref:31487
              - ref:31687
              - ref:63833
              - ref:63872
              - ref:63874
              - ref:89883
            originalIdentificationMappings:
              - occurrenceId: occ:195993
                originalIdentifiedName: Homotherium serum
                acceptedName: Homotherium latidens
                difference: null
              - occurrenceId: occ:198618
                originalIdentifiedName: Homotherium serum
                acceptedName: Homotherium latidens
                difference: null
              - occurrenceId: occ:198943
                originalIdentifiedName: Homotherium serum
                acceptedName: Homotherium latidens
                difference: null
              - occurrenceId: occ:199214
                originalIdentifiedName: Homotherium serum
                acceptedName: Homotherium latidens
                difference: null
              - occurrenceId: occ:442554
                originalIdentifiedName: Dinobastis latidens
                acceptedName: Homotherium latidens
                difference: recombined as
              - occurrenceId: occ:740566
                originalIdentifiedName: Dinobastis serus
                acceptedName: Homotherium latidens
                difference: null
              - occurrenceId: occ:840116
                originalIdentifiedName: Homotherium serum
                acceptedName: Homotherium latidens
                difference: null
              - occurrenceId: occ:842868
                originalIdentifiedName: Dinobastis serus n. gen. n. sp.
                acceptedName: Homotherium latidens
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

# Homotherium latidens
