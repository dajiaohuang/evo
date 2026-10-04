---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Epicyon haydeni
    rank: species
    sourceDatasetId: null
    name:
      zh: Epicyon haydeni
      en: Epicyon haydeni
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
            title: PBDB accepted record — Epicyon haydeni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44847&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44847; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44847
            selectedOccurrenceIds:
              - occ:184025
              - occ:184133
              - occ:184148
              - occ:184260
              - occ:184384
              - occ:184536
              - occ:184805
              - occ:184959
              - occ:184987
              - occ:185067
              - occ:185243
              - occ:185417
              - occ:185617
              - occ:185635
              - occ:185675
              - occ:185736
              - occ:185802
              - occ:185872
              - occ:186242
              - occ:186366
              - occ:186405
              - occ:186483
              - occ:186592
              - occ:186634
              - occ:186673
              - occ:186831
              - occ:186918
              - occ:186919
              - occ:187112
              - occ:187168
              - occ:187307
              - occ:187326
              - occ:187462
              - occ:187463
              - occ:187570
              - occ:187586
              - occ:187601
              - occ:187705
              - occ:187739
              - occ:187756
              - occ:187796
              - occ:187875
              - occ:187940
              - occ:187976
              - occ:188140
              - occ:189305
              - occ:189344
              - occ:190178
              - occ:190375
              - occ:190703
              - occ:191504
              - occ:191544
              - occ:191820
              - occ:191949
              - occ:191984
              - occ:192105
              - occ:192172
              - occ:192345
              - occ:192463
              - occ:192507
              - occ:192536
              - occ:1380247
              - occ:1386622
            selectedCollectionIds:
              - col:18017
              - col:18033
              - col:18034
              - col:18055
              - col:18072
              - col:18086
              - col:18111
              - col:18130
              - col:18135
              - col:18142
              - col:18169
              - col:18198
              - col:18211
              - col:18214
              - col:18218
              - col:18222
              - col:18227
              - col:18236
              - col:18277
              - col:18295
              - col:18299
              - col:18308
              - col:18323
              - col:18326
              - col:18327
              - col:18355
              - col:18364
              - col:18365
              - col:18415
              - col:18430
              - col:18444
              - col:18447
              - col:18468
              - col:18495
              - col:18496
              - col:18497
              - col:18514
              - col:18527
              - col:18532
              - col:18539
              - col:18554
              - col:18560
              - col:18563
              - col:18588
              - col:18816
              - col:18826
              - col:19009
              - col:19036
              - col:19085
              - col:19315
              - col:19322
              - col:19391
              - col:19429
              - col:19436
              - col:19466
              - col:19483
              - col:19517
              - col:19535
              - col:19538
              - col:19543
              - col:188947
              - col:190543
            sourceReferenceIds:
              - ref:3558
              - ref:3175
              - ref:6294
              - ref:6208
              - ref:1032
              - ref:2218
              - ref:6198
              - ref:25209
              - ref:3565
              - ref:57275
              - ref:1052
              - ref:3627
              - ref:1427
              - ref:9619
              - ref:3241
              - ref:59118
            originalIdentificationMappings:
              - occurrenceId: occ:184133
                originalIdentifiedName: Aelurodon validus n. sp.
                acceptedName: Epicyon haydeni
                difference: null
              - occurrenceId: occ:184384
                originalIdentifiedName: Epicyon validus
                acceptedName: Epicyon haydeni
                difference: null
              - occurrenceId: occ:191544
                originalIdentifiedName: Epicyon aphobus
                acceptedName: Epicyon haydeni
                difference: null
              - occurrenceId: occ:191820
                originalIdentifiedName: Aelurodon haydeni
                acceptedName: Epicyon haydeni
                difference: recombined as
              - occurrenceId: occ:192345
                originalIdentifiedName: Epicyon aphobus
                acceptedName: Epicyon haydeni
                difference: null
              - occurrenceId: occ:1380247
                originalIdentifiedName: Osteoborus ricardoensis n. sp.
                acceptedName: Epicyon haydeni
                difference: null
              - occurrenceId: occ:1386622
                originalIdentifiedName: Canis (Epicyon) haydeni n. sp.
                acceptedName: Epicyon haydeni
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

# Epicyon haydeni
