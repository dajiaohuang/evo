---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Brachycrus laticeps
    rank: species
    sourceDatasetId: null
    name:
      zh: Brachycrus laticeps
      en: Brachycrus laticeps
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
            title: PBDB accepted record — Brachycrus laticeps
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48257&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48257; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48257
            selectedOccurrenceIds:
              - occ:183555
              - occ:183666
              - occ:183718
              - occ:183917
              - occ:189550
              - occ:189584
              - occ:189588
              - occ:189670
              - occ:189779
              - occ:190531
              - occ:190532
              - occ:190567
              - occ:190659
              - occ:190680
              - occ:190688
              - occ:190945
              - occ:191014
              - occ:191029
              - occ:191156
              - occ:191205
              - occ:191328
              - occ:191588
              - occ:191593
              - occ:191659
              - occ:191939
              - occ:191946
              - occ:192047
              - occ:192129
              - occ:192367
              - occ:192652
              - occ:192678
              - occ:192778
              - occ:1211165
              - occ:1211167
            selectedCollectionIds:
              - col:17917
              - col:17952
              - col:17961
              - col:18001
              - col:18866
              - col:18872
              - col:18873
              - col:18894
              - col:18922
              - col:19073
              - col:19074
              - col:19079
              - col:19081
              - col:19083
              - col:19135
              - col:19153
              - col:19162
              - col:19195
              - col:19205
              - col:19273
              - col:19330
              - col:19332
              - col:19356
              - col:19426
              - col:19428
              - col:19452
              - col:19472
              - col:19520
              - col:19557
              - col:19567
              - col:19597
              - col:17920
              - col:17990
            sourceReferenceIds:
              - ref:2070
              - ref:3175
              - ref:2634
              - ref:1080
              - ref:3759
              - ref:2224
              - ref:6294
              - ref:2012
              - ref:2817
              - ref:53351
              - ref:3062
              - ref:3380
            originalIdentificationMappings:
              - occurrenceId: occ:183555
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:183666
                originalIdentifiedName: Brachycrus wilsoni
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:183718
                originalIdentifiedName: Brachycrus wilsoni
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:183917
                originalIdentifiedName: Brachycrus wilsoni n. sp.
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:189584
                originalIdentifiedName: Brachycrus vaughani
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:189588
                originalIdentifiedName: Brachycrus sweetwaterensis
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:190531
                originalIdentifiedName: Brachycrus vaughani
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:190532
                originalIdentifiedName: Brachycrus sweetwaterensis
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:190567
                originalIdentifiedName: Brachycrus vaughani
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:190659
                originalIdentifiedName: Brachycrus sweetwaterensis
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:190680
                originalIdentifiedName: Brachycrus vaughani
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:190688
                originalIdentifiedName: Brachycrus sweetwaterensis
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:190945
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191014
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191029
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191156
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191205
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191588
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191593
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191939
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:191946
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:192047
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:192367
                originalIdentifiedName: Brachycrus vaughani
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:192652
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:192778
                originalIdentifiedName: Brachycrus buwaldi
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:1211165
                originalIdentifiedName: Brachycrus wilsoni n. sp.
                acceptedName: Brachycrus laticeps
                difference: null
              - occurrenceId: occ:1211167
                originalIdentifiedName: Brachycrus wilsoni
                acceptedName: Brachycrus laticeps
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

# Brachycrus laticeps
