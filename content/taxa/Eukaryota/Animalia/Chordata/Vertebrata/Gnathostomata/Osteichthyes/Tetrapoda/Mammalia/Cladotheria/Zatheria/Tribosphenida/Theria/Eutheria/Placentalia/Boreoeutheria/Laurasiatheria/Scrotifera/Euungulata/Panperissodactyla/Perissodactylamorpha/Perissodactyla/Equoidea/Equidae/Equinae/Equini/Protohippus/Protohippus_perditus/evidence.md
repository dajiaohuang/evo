---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protohippus perditus
    rank: species
    sourceDatasetId: null
    name:
      zh: Protohippus perditus
      en: Protohippus perditus
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
            title: PBDB accepted record — Protohippus perditus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46299&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46299; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46299
            selectedOccurrenceIds:
              - occ:184121
              - occ:184794
              - occ:184893
              - occ:185074
              - occ:185101
              - occ:185198
              - occ:185381
              - occ:185522
              - occ:185606
              - occ:186823
              - occ:187253
              - occ:187666
              - occ:188343
              - occ:188353
              - occ:188376
              - occ:188426
              - occ:188435
              - occ:188528
              - occ:188541
              - occ:188671
              - occ:188711
              - occ:1247210
              - occ:1267815
              - occ:1386640
            selectedCollectionIds:
              - col:18031
              - col:18109
              - col:18124
              - col:18144
              - col:18155
              - col:18164
              - col:18192
              - col:18206
              - col:18209
              - col:18354
              - col:18442
              - col:18509
              - col:18619
              - col:18620
              - col:18622
              - col:18628
              - col:18629
              - col:18647
              - col:18650
              - col:18680
              - col:18705
              - col:18175
              - col:18306
              - col:190543
            sourceReferenceIds:
              - ref:3510
              - ref:1949
              - ref:1952
              - ref:1833
              - ref:6294
              - ref:53742
              - ref:55149
              - ref:59118
            originalIdentificationMappings:
              - occurrenceId: occ:188343
                originalIdentifiedName: Merychippus perditus
                acceptedName: Protohippus perditus
                difference: recombined as
              - occurrenceId: occ:188353
                originalIdentifiedName: Merychippus perditus
                acceptedName: Protohippus perditus
                difference: recombined as
              - occurrenceId: occ:188541
                originalIdentifiedName: Merychippus perditus
                acceptedName: Protohippus perditus
                difference: recombined as
              - occurrenceId: occ:1386640
                originalIdentifiedName: Equus (Protohippus) perditus n. sp.
                acceptedName: Protohippus perditus
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

# Protohippus perditus
