---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ontocetus emmonsi
    rank: species
    sourceDatasetId: null
    name:
      zh: Ontocetus emmonsi
      en: Ontocetus emmonsi
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
            title: PBDB accepted record — Ontocetus emmonsi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=62927&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:62927; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:62927
            selectedOccurrenceIds:
              - occ:339383
              - occ:461054
              - occ:461059
              - occ:461076
              - occ:504419
              - occ:565638
              - occ:565652
              - occ:565653
              - occ:621985
              - occ:622643
              - occ:622647
              - occ:722835
              - occ:722836
              - occ:722837
              - occ:722838
              - occ:722839
              - occ:722840
              - occ:722841
              - occ:722842
              - occ:722843
              - occ:722844
              - occ:722845
              - occ:722846
              - occ:722847
              - occ:722848
              - occ:722849
              - occ:722850
              - occ:722851
              - occ:722853
              - occ:722854
              - occ:722855
              - occ:722856
              - occ:722857
              - occ:722858
              - occ:722859
              - occ:722860
              - occ:722861
              - occ:722862
              - occ:722863
              - occ:722864
              - occ:722865
              - occ:722866
              - occ:722867
              - occ:722868
              - occ:722869
              - occ:723048
              - occ:723050
              - occ:723051
              - occ:723078
              - occ:724017
              - occ:724018
              - occ:724019
              - occ:724086
              - occ:802040
              - occ:945358
              - occ:971749
              - occ:975810
              - occ:975892
              - occ:1196032
              - occ:1377272
              - occ:1383261
              - occ:1383298
              - occ:1487208
              - occ:1487209
            selectedCollectionIds:
              - col:32054
              - col:18532
              - col:18535
              - col:18595
              - col:48093
              - col:59155
              - col:53929
              - col:59164
              - col:66958
              - col:67028
              - col:67029
              - col:77577
              - col:57908
              - col:77578
              - col:77579
              - col:51591
              - col:49982
              - col:49983
              - col:77580
              - col:77581
              - col:52582
              - col:77582
              - col:77583
              - col:77584
              - col:77585
              - col:77586
              - col:77588
              - col:77591
              - col:77593
              - col:77594
              - col:77595
              - col:51589
              - col:77596
              - col:77597
              - col:77598
              - col:77599
              - col:77600
              - col:45474
              - col:60036
              - col:77601
              - col:77602
              - col:19753
              - col:77604
              - col:32039
              - col:20482
              - col:77632
              - col:77659
              - col:77745
              - col:77746
              - col:58421
              - col:77750
              - col:59003
              - col:109704
              - col:32052
              - col:116315
              - col:116344
              - col:154720
              - col:188304
              - col:189574
              - col:189573
              - col:206985
              - col:206994
            sourceReferenceIds:
              - ref:5595
              - ref:2613
              - ref:13652
              - ref:16892
              - ref:16904
              - ref:12761
              - ref:19106
              - ref:26222
              - ref:11897
              - ref:26235
              - ref:26261
              - ref:29366
              - ref:63715
              - ref:37350
              - ref:25179
              - ref:63142
              - ref:71195
            originalIdentificationMappings:
              - occurrenceId: occ:339383
                originalIdentifiedName: Alachtherium africanum
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:461054
                originalIdentifiedName: Trichecodon huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:461059
                originalIdentifiedName: Trichecodon huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:461076
                originalIdentifiedName: Trichecodon huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:504419
                originalIdentifiedName: Trichecodon huxleyi n. gen. n. sp.
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:565638
                originalIdentifiedName: Prorosmarus alleni n. gen. n. sp.
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:565652
                originalIdentifiedName: Trichechus huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:565653
                originalIdentifiedName: Trichechus antverpiensis n. sp.
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:621985
                originalIdentifiedName: Alachtherium cretsii
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:622643
                originalIdentifiedName: Alachtherium cretsii n. gen. n. sp.
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:622647
                originalIdentifiedName: Alachtherium cretsii
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:722839
                originalIdentifiedName: Ontocetus emmonsi n. gen. n. sp.
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:723050
                originalIdentifiedName: Trichechus antverpiensis
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:723051
                originalIdentifiedName: Alachtherium antwerpiensis
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:723078
                originalIdentifiedName: Odobenus huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:724017
                originalIdentifiedName: Odobenus huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:724018
                originalIdentifiedName: Odobenus huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:724019
                originalIdentifiedName: Trichechus huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:724086
                originalIdentifiedName: Trichechus huxleyi
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:802040
                originalIdentifiedName: Alachtherium cretsii
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:971749
                originalIdentifiedName: Alachtherium africanum
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:975810
                originalIdentifiedName: Alachtherium antwerpiensis n. sp.
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:975892
                originalIdentifiedName: Odobenus antverpiensis
                acceptedName: Ontocetus emmonsi
                difference: null
              - occurrenceId: occ:1196032
                originalIdentifiedName: Trichecodon huxleyi
                acceptedName: Ontocetus emmonsi
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

# Ontocetus emmonsi
