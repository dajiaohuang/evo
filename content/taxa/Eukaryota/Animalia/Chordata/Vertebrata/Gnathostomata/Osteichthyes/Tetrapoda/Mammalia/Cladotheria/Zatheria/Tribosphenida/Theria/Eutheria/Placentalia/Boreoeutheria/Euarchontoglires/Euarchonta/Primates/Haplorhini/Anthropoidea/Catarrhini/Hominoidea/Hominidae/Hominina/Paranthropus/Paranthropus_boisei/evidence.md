---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paranthropus boisei
    rank: species
    sourceDatasetId: null
    name:
      zh: Paranthropus boisei
      en: Paranthropus boisei
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
            title: PBDB accepted record — Paranthropus boisei
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=83068&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:83068; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:83068
            selectedOccurrenceIds:
              - occ:212654
              - occ:212695
              - occ:212711
              - occ:218200
              - occ:219160
              - occ:219882
              - occ:221769
              - occ:221879
              - occ:221934
              - occ:222022
              - occ:222093
              - occ:222199
              - occ:222390
              - occ:222531
              - occ:222533
              - occ:222627
              - occ:222660
              - occ:222697
              - occ:222725
              - occ:222949
              - occ:222993
              - occ:223042
              - occ:223113
              - occ:223138
              - occ:223208
              - occ:223240
              - occ:223440
              - occ:223680
              - occ:224014
              - occ:224090
              - occ:224157
              - occ:224172
              - occ:226265
              - occ:226535
              - occ:228934
              - occ:228952
              - occ:228974
              - occ:228984
              - occ:229125
              - occ:229167
              - occ:340098
              - occ:340150
              - occ:395169
              - occ:404310
            selectedCollectionIds:
              - col:21520
              - col:21523
              - col:21525
              - col:22269
              - col:22490
              - col:22628
              - col:21346
              - col:21354
              - col:21367
              - col:21370
              - col:21396
              - col:21403
              - col:21441
              - col:21455
              - col:21461
              - col:21462
              - col:21464
              - col:21468
              - col:21495
              - col:21498
              - col:21502
              - col:21504
              - col:21507
              - col:21515
              - col:21543
              - col:21566
              - col:21618
              - col:21657
              - col:21668
              - col:21678
              - col:21681
              - col:21964
              - col:22014
              - col:22499
              - col:22556
              - col:22559
              - col:22581
              - col:22617
              - col:22624
              - col:32080
              - col:32085
              - col:22491
              - col:21445
            sourceReferenceIds:
              - ref:8610
              - ref:5574
              - ref:5627
              - ref:5653
              - ref:4454
              - ref:4469
              - ref:10321
              - ref:4447
              - ref:5263
              - ref:4769
              - ref:4486
              - ref:5637
              - ref:5640
              - ref:4468
              - ref:4732
              - ref:10211
              - ref:9955
            originalIdentificationMappings:
              - occurrenceId: occ:212654
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:212695
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:212711
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:218200
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:219160
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:219882
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:221769
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:221879
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:221934
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222022
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222093
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222199
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222390
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222531
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222533
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222627
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222660
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222697
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222725
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222949
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:222993
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:223042
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:223113
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:223138
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:223208
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:223240
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:223440
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:223680
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:224014
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:224090
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:224157
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:224172
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:226265
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:226535
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:228934
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:228952
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:228984
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:229125
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:229167
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:340098
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:340150
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:395169
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
                difference: recombined as
              - occurrenceId: occ:404310
                originalIdentifiedName: Australopithecus boisei
                acceptedName: Paranthropus boisei
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

# Paranthropus boisei
