---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ischyromys veterior
    rank: species
    sourceDatasetId: null
    name:
      zh: Ischyromys veterior
      en: Ischyromys veterior
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
            title: PBDB accepted record — Ischyromys veterior
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47384&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47384; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47384
            selectedOccurrenceIds:
              - occ:177909
              - occ:177930
              - occ:177963
              - occ:178079
              - occ:178113
              - occ:178190
              - occ:178254
              - occ:178287
              - occ:178338
              - occ:178391
              - occ:178404
              - occ:178429
              - occ:178448
              - occ:178493
              - occ:178538
              - occ:178582
              - occ:178628
              - occ:178658
              - occ:178720
              - occ:178827
              - occ:178997
              - occ:179029
              - occ:179098
              - occ:179200
              - occ:179226
              - occ:179302
            selectedCollectionIds:
              - col:16902
              - col:16908
              - col:16917
              - col:16920
              - col:16924
              - col:16930
              - col:16935
              - col:16940
              - col:16942
              - col:16952
              - col:16955
              - col:16959
              - col:16960
              - col:16961
              - col:16962
              - col:16963
              - col:16964
              - col:16965
              - col:16977
              - col:16988
              - col:17009
              - col:17010
              - col:17014
              - col:17028
              - col:17031
              - col:17041
            sourceReferenceIds:
              - ref:6294
              - ref:2716
              - ref:3479
              - ref:3637
              - ref:1585
              - ref:1470
              - ref:2280
              - ref:3359
              - ref:1442
              - ref:1570
              - ref:94785
              - ref:3725
              - ref:2813
            originalIdentificationMappings:
              - occurrenceId: occ:178079
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178113
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178254
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178338
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178448
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178538
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178582
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178628
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178658
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:178720
                originalIdentifiedName: Titanotheriomys veterior
                acceptedName: Ischyromys veterior
                difference: recombined as
              - occurrenceId: occ:179029
                originalIdentifiedName: Ischyromys veterior n. sp.
                acceptedName: Ischyromys veterior
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

# Ischyromys veterior
