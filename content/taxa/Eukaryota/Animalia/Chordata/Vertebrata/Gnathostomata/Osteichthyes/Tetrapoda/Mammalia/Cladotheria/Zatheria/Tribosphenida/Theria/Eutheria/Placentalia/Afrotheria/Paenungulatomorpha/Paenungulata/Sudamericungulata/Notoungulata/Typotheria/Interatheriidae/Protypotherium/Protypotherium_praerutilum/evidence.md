---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protypotherium praerutilum
    rank: species
    sourceDatasetId: null
    name:
      zh: Protypotherium praerutilum
      en: Protypotherium praerutilum
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
            title: PBDB accepted record — Protypotherium praerutilum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=242929&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:242929; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:242929
            selectedOccurrenceIds:
              - occ:1124819
              - occ:1316203
              - occ:1316204
              - occ:1316205
              - occ:1316209
              - occ:1316210
              - occ:1316211
              - occ:1316212
              - occ:1427407
              - occ:1427408
              - occ:1427409
              - occ:1427410
              - occ:1427411
              - occ:1427414
              - occ:1427416
              - occ:1427417
              - occ:1427419
              - occ:1427421
              - occ:1427422
              - occ:1479649
              - occ:1479685
              - occ:1479686
              - occ:1479709
              - occ:1479760
              - occ:1479789
              - occ:1512031
              - occ:1512032
              - occ:1512038
              - occ:1512039
              - occ:1512044
              - occ:1512045
              - occ:1512053
              - occ:1512054
              - occ:1629172
              - occ:1629175
              - occ:1629176
            selectedCollectionIds:
              - col:142533
              - col:176568
              - col:176602
              - col:176590
              - col:176576
              - col:176585
              - col:198564
              - col:198565
              - col:141175
              - col:198566
              - col:140691
              - col:198567
              - col:198568
              - col:198569
              - col:198570
              - col:198571
              - col:198572
              - col:176601
              - col:176599
              - col:176600
              - col:176636
              - col:206239
              - col:210638
              - col:210637
              - col:210786
              - col:210787
              - col:176570
              - col:176624
              - col:87314
            sourceReferenceIds:
              - ref:58224
              - ref:67593
              - ref:70785
              - ref:85306
              - ref:72896
            originalIdentificationMappings:
              - occurrenceId: occ:1124819
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1316203
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1316204
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1316205
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427407
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427408
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427409
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427410
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427411
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427414
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427416
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427417
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427419
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427421
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1427422
                originalIdentifiedName: Protypotherium endiadys
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1479685
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1479760
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1512032
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1512039
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1512045
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
                difference: null
              - occurrenceId: occ:1512054
                originalIdentifiedName: Protypotherium attenuatum
                acceptedName: Protypotherium praerutilum
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

# Protypotherium praerutilum
