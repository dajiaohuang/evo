---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Absarokius abbotti
    rank: species
    sourceDatasetId: null
    name:
      zh: Absarokius abbotti
      en: Absarokius abbotti
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
            title: PBDB accepted record — Absarokius abbotti
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44019&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44019; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44019
            selectedOccurrenceIds:
              - occ:169769
              - occ:169912
              - occ:169967
              - occ:169978
              - occ:170035
              - occ:170052
              - occ:170089
              - occ:170127
              - occ:170158
              - occ:170192
              - occ:170229
              - occ:170288
              - occ:170304
              - occ:170329
              - occ:170330
              - occ:170331
              - occ:170351
              - occ:170385
              - occ:170412
              - occ:170612
              - occ:170619
              - occ:170893
              - occ:172119
              - occ:172502
              - occ:172641
              - occ:172775
              - occ:172796
              - occ:172842
              - occ:172866
              - occ:172941
              - occ:172955
              - occ:173989
              - occ:456739
              - occ:458734
              - occ:469663
              - occ:469698
              - occ:469769
              - occ:469862
              - occ:638369
            selectedCollectionIds:
              - col:15537
              - col:15548
              - col:15550
              - col:15551
              - col:15552
              - col:15553
              - col:15554
              - col:15555
              - col:15556
              - col:15557
              - col:15558
              - col:15559
              - col:15560
              - col:15561
              - col:15562
              - col:15563
              - col:15564
              - col:15565
              - col:15566
              - col:15579
              - col:15581
              - col:15662
              - col:15842
              - col:15906
              - col:15917
              - col:15933
              - col:15934
              - col:15937
              - col:15942
              - col:15963
              - col:15964
              - col:16207
              - col:15680
              - col:15690
              - col:46699
              - col:46700
              - col:46705
              - col:46715
              - col:15454
            sourceReferenceIds:
              - ref:1123
              - ref:6214
              - ref:3021
              - ref:6294
              - ref:1284
              - ref:1616
              - ref:6196
              - ref:2104
              - ref:2055
              - ref:1760
              - ref:11717
              - ref:19815
            originalIdentificationMappings:
              - occurrenceId: occ:172796
                originalIdentifiedName: Absarokius noctivagus
                acceptedName: Absarokius abbotti
                difference: null
              - occurrenceId: occ:469769
                originalIdentifiedName: Absarokius noctivagus
                acceptedName: Absarokius abbotti
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

# Absarokius abbotti
