---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cardiocephalus sternbergi
    rank: species
    sourceDatasetId: null
    name:
      zh: Cardiocephalus sternbergi
      en: Cardiocephalus sternbergi
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbResidualAmniotaTaxonomy20261002
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          sourceKey: pbdbResidualAmniotaTaxonomy20261002
          usage:
            title: PBDB accepted record — Cardiocephalus sternbergi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=90715&show=parent,app,attr
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
          sourceKey: pbdbResidualAmniotaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:90715; original response record indices retained in data/sources/amniota-residual-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:90715
            selectedOccurrenceIds:
              - occ:295958
              - occ:296032
              - occ:296149
              - occ:788972
              - occ:1340045
              - occ:1567374
              - occ:1567396
            selectedCollectionIds:
              - col:28145
              - col:28256
              - col:28275
              - col:221391
              - col:221392
            sourceReferenceIds:
              - ref:7693
              - ref:28751
              - ref:28484
              - ref:28729
              - ref:28557
              - ref:77534
            originalIdentificationMappings:
              - occurrenceId: occ:295958
                originalIdentifiedName: Gymnarthrus willoughbyi
                acceptedName: Cardiocephalus sternbergi
                difference: null
              - occurrenceId: occ:296032
                originalIdentifiedName: Cardiocephalus sternbergi n. gen. n. sp.
                acceptedName: Cardiocephalus sternbergi
                difference: null
              - occurrenceId: occ:296149
                originalIdentifiedName: Gymnarthrus willoughbyi
                acceptedName: Cardiocephalus sternbergi
                difference: null
              - occurrenceId: occ:788972
                originalIdentifiedName: Gymnarthrus willoughbyi n. gen. n. sp.
                acceptedName: Cardiocephalus sternbergi
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

# Cardiocephalus sternbergi
