---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Arctodus pristinus
    rank: species
    sourceDatasetId: null
    name:
      zh: Arctodus pristinus
      en: Arctodus pristinus
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
            title: PBDB accepted record — Arctodus pristinus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44276&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44276; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44276
            selectedOccurrenceIds:
              - occ:193670
              - occ:193749
              - occ:196043
              - occ:196735
              - occ:196761
              - occ:196818
              - occ:196984
              - occ:197036
              - occ:197545
              - occ:197795
              - occ:197994
              - occ:198019
              - occ:198041
              - occ:198117
              - occ:198434
              - occ:198516
              - occ:198650
              - occ:198906
              - occ:745061
              - occ:745062
              - occ:745063
              - occ:1034077
              - occ:1237484
              - occ:1372388
              - occ:1487204
            selectedCollectionIds:
              - col:19746
              - col:19754
              - col:20145
              - col:20283
              - col:20285
              - col:20289
              - col:20299
              - col:20302
              - col:20350
              - col:20384
              - col:20400
              - col:20401
              - col:20403
              - col:20415
              - col:20475
              - col:20479
              - col:20494
              - col:20524
              - col:79921
              - col:79922
              - col:79923
              - col:104698
              - col:77590
            sourceReferenceIds:
              - ref:1457
              - ref:2615
              - ref:1324
              - ref:1482
              - ref:2436
              - ref:1725
              - ref:3580
              - ref:1960
              - ref:1628
              - ref:26822
              - ref:40636
              - ref:53045
              - ref:62831
              - ref:71195
            originalIdentificationMappings:
              - occurrenceId: occ:198516
                originalIdentifiedName: Arctodus haplodon n. sp.
                acceptedName: Arctodus pristinus
                difference: null
              - occurrenceId: occ:1034077
                originalIdentifiedName: Arctodus haplodon
                acceptedName: Arctodus pristinus
                difference: null
              - occurrenceId: occ:1237484
                originalIdentifiedName: Ursus haplodon n. sp.
                acceptedName: Arctodus pristinus
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

# Arctodus pristinus
