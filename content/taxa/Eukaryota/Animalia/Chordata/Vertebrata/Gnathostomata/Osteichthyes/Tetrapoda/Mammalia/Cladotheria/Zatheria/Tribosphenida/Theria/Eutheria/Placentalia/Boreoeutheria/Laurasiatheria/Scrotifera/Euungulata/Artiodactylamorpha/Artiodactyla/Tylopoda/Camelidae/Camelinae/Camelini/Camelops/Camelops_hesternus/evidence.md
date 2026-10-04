---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Camelops hesternus
    rank: species
    sourceDatasetId: null
    name:
      zh: Camelops hesternus
      en: Camelops hesternus
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
            title: PBDB accepted record — Camelops hesternus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44383&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44383; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44383
            selectedOccurrenceIds:
              - occ:196745
              - occ:197103
              - occ:197337
              - occ:197866
              - occ:198142
              - occ:198679
              - occ:199228
              - occ:199615
              - occ:199652
              - occ:199673
              - occ:199938
              - occ:740879
              - occ:740882
              - occ:788261
              - occ:838785
              - occ:841229
              - occ:841721
              - occ:1208218
              - occ:1231894
              - occ:1243017
              - occ:1385015
              - occ:1385018
              - occ:1388531
              - occ:1391730
              - occ:1418251
              - occ:1419340
              - occ:1519607
              - occ:1551359
              - occ:1625412
              - occ:1629021
              - occ:1629207
              - occ:1640228
            selectedCollectionIds:
              - col:20283
              - col:20305
              - col:20323
              - col:20387
              - col:20418
              - col:20498
              - col:20569
              - col:20612
              - col:20615
              - col:20617
              - col:20642
              - col:79653
              - col:79654
              - col:85137
              - col:93103
              - col:93251
              - col:93326
              - col:156789
              - col:162127
              - col:163820
              - col:190077
              - col:190079
              - col:190889
              - col:191915
              - col:196762
              - col:20285
              - col:20495
              - col:230003
              - col:226032
              - col:230753
              - col:232555
            sourceReferenceIds:
              - ref:34617
              - ref:2018
              - ref:3014
              - ref:1200
              - ref:1899
              - ref:1936
              - ref:2501
              - ref:1766
              - ref:26756
              - ref:28647
              - ref:3185
              - ref:31525
              - ref:31567
              - ref:51404
              - ref:64907
              - ref:53461
              - ref:63919
              - ref:63921
              - ref:33088
              - ref:53742
              - ref:64797
              - ref:66998
              - ref:69885
              - ref:75881
              - ref:84585
              - ref:85291
              - ref:85310
              - ref:86712
            originalIdentificationMappings:
              - occurrenceId: occ:196745
                originalIdentifiedName: Camelops traviswhitei
                acceptedName: Camelops hesternus
                difference: null
              - occurrenceId: occ:198679
                originalIdentifiedName: Camelops sulcatus n. sp.
                acceptedName: Camelops hesternus
                difference: null
              - occurrenceId: occ:788261
                originalIdentifiedName: Camelops huerfanensis
                acceptedName: Camelops hesternus
                difference: null
              - occurrenceId: occ:838785
                originalIdentifiedName: Camelops huerfanensis
                acceptedName: Camelops hesternus
                difference: null
              - occurrenceId: occ:1208218
                originalIdentifiedName: Camelops aransas n. sp.
                acceptedName: Camelops hesternus
                difference: null
              - occurrenceId: occ:1243017
                originalIdentifiedName: Holomeniscus hesternus
                acceptedName: Camelops hesternus
                difference: recombined as
              - occurrenceId: occ:1391730
                originalIdentifiedName: Holomeniscus sulcatus
                acceptedName: Camelops hesternus
                difference: null
              - occurrenceId: occ:1418251
                originalIdentifiedName: Camelops huerfanensis
                acceptedName: Camelops hesternus
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

# Camelops hesternus
