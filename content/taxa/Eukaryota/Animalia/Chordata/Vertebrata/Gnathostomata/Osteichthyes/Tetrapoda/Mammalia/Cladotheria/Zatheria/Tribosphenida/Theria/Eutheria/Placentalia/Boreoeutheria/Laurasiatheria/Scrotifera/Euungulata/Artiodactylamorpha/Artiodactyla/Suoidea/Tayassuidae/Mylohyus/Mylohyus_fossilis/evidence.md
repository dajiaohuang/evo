---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mylohyus fossilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Mylohyus fossilis
      en: Mylohyus fossilis
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
            title: PBDB accepted record — Mylohyus fossilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45682&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45682; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45682
            selectedOccurrenceIds:
              - occ:196708
              - occ:196830
              - occ:196876
              - occ:197079
              - occ:197393
              - occ:197629
              - occ:197929
              - occ:198507
              - occ:198541
              - occ:198624
              - occ:198855
              - occ:199276
              - occ:199356
              - occ:199540
              - occ:361730
              - occ:690482
              - occ:740912
              - occ:936311
              - occ:1015175
              - occ:1034043
              - occ:1034074
              - occ:1034075
              - occ:1196416
              - occ:1487222
              - occ:1607385
            selectedCollectionIds:
              - col:20281
              - col:20289
              - col:20290
              - col:20302
              - col:20332
              - col:20354
              - col:20390
              - col:20478
              - col:20479
              - col:20491
              - col:20516
              - col:20572
              - col:20584
              - col:20604
              - col:34269
              - col:74246
              - col:79661
              - col:108095
              - col:124089
              - col:126660
              - col:154771
              - col:79757
              - col:227368
            sourceReferenceIds:
              - ref:6294
              - ref:2615
              - ref:3100
              - ref:1628
              - ref:3580
              - ref:3567
              - ref:1962
              - ref:14678
              - ref:24936
              - ref:26764
              - ref:35895
              - ref:39880
              - ref:41113
              - ref:40636
              - ref:40915
              - ref:50335
              - ref:71195
              - ref:82811
            originalIdentificationMappings:
              - occurrenceId: occ:690482
                originalIdentifiedName: Mylohyus exortivus
                acceptedName: Mylohyus fossilis
                difference: null
              - occurrenceId: occ:740912
                originalIdentifiedName: Mylohyus exortivus
                acceptedName: Mylohyus fossilis
                difference: null
              - occurrenceId: occ:1034043
                originalIdentifiedName: Mylohyus exortivus
                acceptedName: Mylohyus fossilis
                difference: null
              - occurrenceId: occ:1034074
                originalIdentifiedName: Mylohyus pennsylvanicus
                acceptedName: Mylohyus fossilis
                difference: null
              - occurrenceId: occ:1034075
                originalIdentifiedName: Mylohyus exortivus n. sp.
                acceptedName: Mylohyus fossilis
                difference: null
              - occurrenceId: occ:1196416
                originalIdentifiedName: Mylohyus gidleyi n. sp.
                acceptedName: Mylohyus fossilis
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

# Mylohyus fossilis
