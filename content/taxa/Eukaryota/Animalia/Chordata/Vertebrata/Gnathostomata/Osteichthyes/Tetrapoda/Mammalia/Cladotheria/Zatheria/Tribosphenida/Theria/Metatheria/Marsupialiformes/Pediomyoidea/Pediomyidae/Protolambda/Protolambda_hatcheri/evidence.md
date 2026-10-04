---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protolambda hatcheri
    rank: species
    sourceDatasetId: null
    name:
      zh: Protolambda hatcheri
      en: Protolambda hatcheri
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
            title: PBDB accepted record — Protolambda hatcheri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51058&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51058; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51058
            selectedOccurrenceIds:
              - occ:163045
              - occ:163084
              - occ:163099
              - occ:163109
              - occ:163130
              - occ:163150
              - occ:163168
              - occ:163188
              - occ:163206
              - occ:163218
              - occ:163260
              - occ:163302
              - occ:163316
              - occ:163333
              - occ:163359
              - occ:163374
              - occ:163393
              - occ:163396
              - occ:163425
              - occ:163470
              - occ:163481
              - occ:163504
              - occ:163518
              - occ:163543
              - occ:163588
              - occ:163616
              - occ:163686
              - occ:163695
              - occ:163713
              - occ:866682
              - occ:866687
              - occ:1292683
              - occ:1292704
            selectedCollectionIds:
              - col:14505
              - col:14515
              - col:14516
              - col:14517
              - col:14519
              - col:14523
              - col:14527
              - col:14534
              - col:14537
              - col:14538
              - col:14549
              - col:14561
              - col:14565
              - col:14566
              - col:14575
              - col:14576
              - col:14582
              - col:14583
              - col:14585
              - col:14597
              - col:14598
              - col:14604
              - col:14607
              - col:14612
              - col:14624
              - col:14630
              - col:14647
              - col:14649
              - col:14652
              - col:96082
              - col:96083
              - col:172642
              - col:172644
            sourceReferenceIds:
              - ref:1241
              - ref:3198
              - ref:962
              - ref:960
              - ref:3705
              - ref:3640
              - ref:2255
              - ref:1985
              - ref:24649
              - ref:2229
              - ref:32620
              - ref:56083
            originalIdentificationMappings:
              - occurrenceId: occ:163045
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163084
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163099
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163109
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163130
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163150
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163168
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163188
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163206
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163218
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163260
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163302
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163316
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163333
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163359
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163374
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163393
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163396
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163425
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163470
                originalIdentifiedName: '"Pediomys" hatcheri'
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163481
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163504
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163518
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163543
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163588
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163616
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163686
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163695
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:163713
                originalIdentifiedName: '"Pediomys" hatcheri'
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:1292683
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
                difference: recombined as
              - occurrenceId: occ:1292704
                originalIdentifiedName: Pediomys hatcheri
                acceptedName: Protolambda hatcheri
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

# Protolambda hatcheri
