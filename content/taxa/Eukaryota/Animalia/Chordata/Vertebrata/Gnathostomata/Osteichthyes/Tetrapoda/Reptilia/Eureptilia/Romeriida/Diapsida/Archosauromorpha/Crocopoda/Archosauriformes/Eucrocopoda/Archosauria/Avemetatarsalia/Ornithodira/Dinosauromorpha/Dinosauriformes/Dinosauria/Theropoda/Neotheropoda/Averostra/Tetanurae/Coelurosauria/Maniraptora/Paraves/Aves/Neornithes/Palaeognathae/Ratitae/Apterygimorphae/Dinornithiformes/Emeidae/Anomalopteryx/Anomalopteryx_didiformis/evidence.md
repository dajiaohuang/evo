---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Anomalopteryx didiformis
    rank: species
    sourceDatasetId: null
    name:
      zh: Anomalopteryx didiformis
      en: Anomalopteryx didiformis
    checkedAt: 2026-10-03
    sections:
      - topic: genomeMaterial
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: phylogeneticComparison
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: markerCoverage
        sourceIds:
          - cloutier2019PalaeognathReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: occurrences
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: timeline
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: evidence
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: sources
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Anomalopteryx didiformis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=335241&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:335241; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:335241
            selectedOccurrenceIds:
              - occ:1344128
              - occ:1344900
              - occ:1349395
              - occ:1349410
              - occ:1349435
              - occ:1349448
              - occ:1535221
              - occ:1535222
              - occ:1535223
            selectedCollectionIds:
              - col:181849
              - col:182106
              - col:182833
              - col:182103
              - col:182838
              - col:182839
              - col:215392
              - col:215405
              - col:215409
            sourceReferenceIds:
              - ref:60481
              - ref:60544
              - ref:60969
              - ref:74304
            originalIdentificationMappings: []
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
        - sourceKey: sackton2019FlightLossReader
          referenceId: ref-5bd64bcf-d144-4042-85d0-7698b80a8c94
          metadataVariant: 0
          usage:
            title: Convergent regulatory evolution and loss of flight in paleognathous birds
            url: https://doi.org/10.1126/science.aat7244
            accessedAt: 2026-10-03
            locator: Published main Science PDF, all main scientific text and captions; figure 1 pixels only; no supplements or rerun
            scope:
              zh: 所指物种的材料与跨支系比较；实验角色分别保留。
              en: Named species material and cross-lineage comparisons; experimental roles remain separate.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - sourceKey: cloutier2019PalaeognathReader
          referenceId: ref-21d5a78e-cddb-4430-8d22-79f8a455bf0b
          metadataVariant: 0
          usage:
            title: Whole-Genome Analyses Resolve the Phylogeny of Flightless Birds (Palaeognathae) in the Presence of an Empirical Anomaly Zone
            url: https://doi.org/10.1093/sysbio/syz019
            accessedAt: 2026-10-03
            locator: "PMC6857515: sampling, selected marker extraction and species-tree methods, selected results, discussion paragraphs 100–109; not whole-paper review"
            scope:
              zh: 所指物种的材料与跨支系比较；实验角色分别保留。
              en: Named species material and cross-lineage comparisons; experimental roles remain separate.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Anomalopteryx didiformis
