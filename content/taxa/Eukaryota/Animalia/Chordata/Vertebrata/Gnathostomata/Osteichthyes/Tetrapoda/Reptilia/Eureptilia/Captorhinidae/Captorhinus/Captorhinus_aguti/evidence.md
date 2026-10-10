---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Captorhinus aguti
    rank: species
    sourceDatasetId: null
    name:
      zh: Captorhinus aguti
      en: Captorhinus aguti
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherReptiliaTaxonomy20261002
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          sourceKey: pbdbOtherReptiliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Captorhinus aguti
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=134887&show=parent,app,attr
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
          sourceKey: pbdbOtherReptiliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:134887; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:134887
            selectedOccurrenceIds:
              - occ:296038
              - occ:296039
              - occ:296040
              - occ:296041
              - occ:296060
              - occ:296107
              - occ:367508
              - occ:629477
              - occ:631445
              - occ:789389
              - occ:789396
              - occ:789398
              - occ:789746
              - occ:790369
              - occ:1317923
              - occ:1328473
              - occ:1328485
              - occ:1353002
              - occ:1567342
              - occ:1567375
              - occ:1567397
            selectedCollectionIds:
              - col:28256
              - col:28264
              - col:28270
              - col:28267
              - col:67862
              - col:67945
              - col:28250
              - col:85342
              - col:85552
              - col:177003
              - col:67735
              - col:178738
              - col:80691
              - col:221389
              - col:221391
              - col:221392
            sourceReferenceIds:
              - ref:28342
              - ref:17702
              - ref:7693
              - ref:28358
              - ref:28359
              - ref:19393
              - ref:19411
              - ref:28784
              - ref:28483
              - ref:26907
              - ref:59144
              - ref:61256
              - ref:77534
            originalIdentificationMappings:
              - occurrenceId: occ:296038
                originalIdentifiedName: Pariotichus isolomus n. sp.
                acceptedName: Captorhinus aguti
                difference: null
              - occurrenceId: occ:296039
                originalIdentifiedName: Ectocynodon aguti n. sp.
                acceptedName: Captorhinus aguti
                difference: recombined as
              - occurrenceId: occ:296040
                originalIdentifiedName: Captorhinus angusticeps n. gen. n. sp.
                acceptedName: Captorhinus aguti
                difference: null
              - occurrenceId: occ:296041
                originalIdentifiedName: Hypopnous squaliceps n. gen. n. sp.
                acceptedName: Captorhinus aguti
                difference: null
              - occurrenceId: occ:296060
                originalIdentifiedName: Pariotichus aduncus n. sp.
                acceptedName: Captorhinus aguti
                difference: null
              - occurrenceId: occ:789746
                originalIdentifiedName: Bayloria morei n. gen. n. sp.
                acceptedName: Captorhinus aguti
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

# Captorhinus aguti
