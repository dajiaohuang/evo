---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Xenocyon falconeri
    rank: species
    sourceDatasetId: null
    name:
      zh: Xenocyon falconeri
      en: Xenocyon falconeri
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
            title: PBDB accepted record — Xenocyon falconeri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=433189&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:433189; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:433189
            selectedOccurrenceIds:
              - occ:368997
              - occ:382561
              - occ:387460
              - occ:421639
              - occ:421679
              - occ:421700
              - occ:724197
              - occ:1630728
              - occ:1631892
            selectedCollectionIds:
              - col:34898
              - col:36373
              - col:37024
              - col:40997
              - col:41003
              - col:41006
              - col:77773
              - col:47129
              - col:231192
            sourceReferenceIds:
              - ref:9364
              - ref:9754
              - ref:9913
              - ref:11051
              - ref:26265
              - ref:85480
              - ref:85585
            originalIdentificationMappings:
              - occurrenceId: occ:368997
                originalIdentifiedName: Canis (Xenocyon) falconeri
                acceptedName: Xenocyon falconeri
                difference: recombined as
              - occurrenceId: occ:382561
                originalIdentifiedName: Canis falconeri
                acceptedName: Xenocyon falconeri
                difference: recombined as
              - occurrenceId: occ:387460
                originalIdentifiedName: Canis (Xenocyon) falconeri
                acceptedName: Xenocyon falconeri
                difference: recombined as
              - occurrenceId: occ:421639
                originalIdentifiedName: Canis falconeri
                acceptedName: Xenocyon falconeri
                difference: recombined as
              - occurrenceId: occ:421679
                originalIdentifiedName: Canis falconeri
                acceptedName: Xenocyon falconeri
                difference: recombined as
              - occurrenceId: occ:421700
                originalIdentifiedName: Canis falconeri
                acceptedName: Xenocyon falconeri
                difference: recombined as
              - occurrenceId: occ:724197
                originalIdentifiedName: Canis falconeri
                acceptedName: Xenocyon falconeri
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

# Xenocyon falconeri
