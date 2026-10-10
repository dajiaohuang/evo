---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Allophaiomys pliocaenicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Allophaiomys pliocaenicus
      en: Allophaiomys pliocaenicus
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
            title: PBDB accepted record — Allophaiomys pliocaenicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43896&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43896; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43896
            selectedOccurrenceIds:
              - occ:196687
              - occ:197396
              - occ:197413
              - occ:197891
              - occ:198063
              - occ:198474
              - occ:199159
              - occ:340884
              - occ:341695
              - occ:341750
              - occ:341802
              - occ:344354
              - occ:356153
              - occ:356209
              - occ:363599
              - occ:367560
              - occ:368986
              - occ:369383
              - occ:374416
              - occ:375017
              - occ:375144
              - occ:375174
              - occ:379662
              - occ:381376
              - occ:415518
              - occ:421626
              - occ:421636
              - occ:421646
              - occ:421650
              - occ:421663
              - occ:421673
              - occ:421685
              - occ:422147
              - occ:422161
              - occ:422174
              - occ:422202
              - occ:422240
              - occ:487512
              - occ:487528
              - occ:487553
              - occ:488143
              - occ:488469
              - occ:488482
              - occ:1033875
              - occ:1433369
              - occ:1487189
            selectedCollectionIds:
              - col:20280
              - col:20333
              - col:20337
              - col:20389
              - col:20406
              - col:20477
              - col:20563
              - col:32145
              - col:32192
              - col:32195
              - col:32194
              - col:32447
              - col:32198
              - col:33973
              - col:34446
              - col:34765
              - col:34898
              - col:34942
              - col:35383
              - col:35427
              - col:35431
              - col:35432
              - col:35907
              - col:36214
              - col:40266
              - col:40995
              - col:40997
              - col:40998
              - col:40999
              - col:41000
              - col:41001
              - col:41004
              - col:41031
              - col:41037
              - col:41049
              - col:41059
              - col:41060
              - col:48978
              - col:48980
              - col:48987
              - col:49054
              - col:49084
              - col:49085
              - col:123875
              - col:34767
              - col:206955
            sourceReferenceIds:
              - ref:2721
              - ref:6294
              - ref:1630
              - ref:1055
              - ref:2875
              - ref:8655
              - ref:8746
              - ref:9043
              - ref:9135
              - ref:9343
              - ref:9388
              - ref:9534
              - ref:9643
              - ref:10889
              - ref:11570
              - ref:11051
              - ref:11056
              - ref:13054
              - ref:40654
              - ref:9117
              - ref:71195
            originalIdentificationMappings:
              - occurrenceId: occ:340884
                originalIdentifiedName: Microtus pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:341695
                originalIdentifiedName: Microtus pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:341750
                originalIdentifiedName: Microtus pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:341802
                originalIdentifiedName: Microtus pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:356153
                originalIdentifiedName: Microtus pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:356209
                originalIdentifiedName: Microtus pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:367560
                originalIdentifiedName: Microtus (Allophaiomys) pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:379662
                originalIdentifiedName: Microtus (Allophaiomys) pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
                difference: recombined as
              - occurrenceId: occ:381376
                originalIdentifiedName: Microtus (Allophaiomys) pliocaenicus
                acceptedName: Allophaiomys pliocaenicus
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

# Allophaiomys pliocaenicus
