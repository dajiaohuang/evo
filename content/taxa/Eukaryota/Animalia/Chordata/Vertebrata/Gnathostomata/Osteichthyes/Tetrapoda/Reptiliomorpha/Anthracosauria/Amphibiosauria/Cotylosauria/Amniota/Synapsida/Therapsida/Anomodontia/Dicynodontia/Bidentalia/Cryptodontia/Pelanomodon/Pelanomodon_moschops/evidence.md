---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pelanomodon moschops
    rank: species
    sourceDatasetId: null
    name:
      zh: Pelanomodon moschops
      en: Pelanomodon moschops
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherSynapsidaTaxonomy20261002
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaTaxonomy20261002
          usage:
            title: PBDB accepted record — Pelanomodon moschops
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=338974&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:338974; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:338974
            selectedOccurrenceIds:
              - occ:969252
              - occ:1304770
              - occ:1314155
              - occ:1314302
              - occ:1320447
              - occ:1325631
              - occ:1326926
              - occ:1332734
              - occ:1338343
              - occ:1338353
              - occ:1338359
              - occ:1419113
              - occ:1419114
            selectedCollectionIds:
              - col:114905
              - col:174663
              - col:176330
              - col:80174
              - col:176312
              - col:80226
              - col:179588
              - col:80176
              - col:177563
              - col:180678
              - col:178523
              - col:174741
            sourceReferenceIds:
              - ref:37216
              - ref:37395
              - ref:27216
              - ref:27202
              - ref:58107
              - ref:59246
              - ref:58370
              - ref:66909
            originalIdentificationMappings:
              - occurrenceId: occ:969252
                originalIdentifiedName: Pelanomodon rubidgei n. gen. n. sp.
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1304770
                originalIdentifiedName: Dicynodon moschops n. sp.
                acceptedName: Pelanomodon moschops
                difference: recombined as
              - occurrenceId: occ:1314155
                originalIdentifiedName: Dicynodon sidneyi
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1320447
                originalIdentifiedName: Dicynodon tylorhinus n. sp.
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1325631
                originalIdentifiedName: Dicynodon sidneyi n. sp.
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1326926
                originalIdentifiedName: Propelanomodon devilliersi n. sp.
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1332734
                originalIdentifiedName: Pelanomodon rubidgei
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1338343
                originalIdentifiedName: Pelanomodon halli
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1338353
                originalIdentifiedName: Pelanomodon kitchingi n. sp.
                acceptedName: Pelanomodon moschops
                difference: null
              - occurrenceId: occ:1338359
                originalIdentifiedName: Pelanomodon halli n. sp.
                acceptedName: Pelanomodon moschops
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

# Pelanomodon moschops
