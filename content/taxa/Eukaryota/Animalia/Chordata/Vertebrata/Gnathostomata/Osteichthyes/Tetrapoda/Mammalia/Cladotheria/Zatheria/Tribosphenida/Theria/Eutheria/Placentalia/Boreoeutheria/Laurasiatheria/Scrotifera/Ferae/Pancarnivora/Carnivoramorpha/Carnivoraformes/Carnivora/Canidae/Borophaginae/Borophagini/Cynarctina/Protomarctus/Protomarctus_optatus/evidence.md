---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protomarctus optatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Protomarctus optatus
      en: Protomarctus optatus
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
            title: PBDB accepted record — Protomarctus optatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52385&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52385; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52385
            selectedOccurrenceIds:
              - occ:183234
              - occ:183334
              - occ:183553
              - occ:183561
              - occ:183570
              - occ:183661
              - occ:183712
              - occ:183762
              - occ:183860
              - occ:183895
              - occ:183905
              - occ:184009
              - occ:184024
              - occ:189586
              - occ:189956
              - occ:190522
              - occ:190590
              - occ:190839
              - occ:191116
              - occ:191485
              - occ:192034
              - occ:192265
            selectedCollectionIds:
              - col:17872
              - col:17890
              - col:17917
              - col:17918
              - col:17920
              - col:17952
              - col:17961
              - col:17965
              - col:17987
              - col:18000
              - col:18001
              - col:18012
              - col:18016
              - col:18873
              - col:18962
              - col:19073
              - col:19075
              - col:19103
              - col:19188
              - col:19311
              - col:19449
              - col:19510
            sourceReferenceIds:
              - ref:3558
              - ref:1583
              - ref:6294
              - ref:3175
              - ref:2634
              - ref:2608
              - ref:3234
            originalIdentificationMappings:
              - occurrenceId: occ:183553
                originalIdentifiedName: Tomarctus optatus
                acceptedName: Protomarctus optatus
                difference: recombined as
              - occurrenceId: occ:183905
                originalIdentifiedName: Tomarctus optatus n. sp.
                acceptedName: Protomarctus optatus
                difference: recombined as
              - occurrenceId: occ:189586
                originalIdentifiedName: Tomarctus optatus
                acceptedName: Protomarctus optatus
                difference: recombined as
              - occurrenceId: occ:189956
                originalIdentifiedName: Tomarctus optatus
                acceptedName: Protomarctus optatus
                difference: recombined as
              - occurrenceId: occ:190522
                originalIdentifiedName: Tomarctus optatus
                acceptedName: Protomarctus optatus
                difference: recombined as
              - occurrenceId: occ:190590
                originalIdentifiedName: Tomarctus optatus
                acceptedName: Protomarctus optatus
                difference: recombined as
              - occurrenceId: occ:190839
                originalIdentifiedName: Tomarctus optatus
                acceptedName: Protomarctus optatus
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

# Protomarctus optatus
