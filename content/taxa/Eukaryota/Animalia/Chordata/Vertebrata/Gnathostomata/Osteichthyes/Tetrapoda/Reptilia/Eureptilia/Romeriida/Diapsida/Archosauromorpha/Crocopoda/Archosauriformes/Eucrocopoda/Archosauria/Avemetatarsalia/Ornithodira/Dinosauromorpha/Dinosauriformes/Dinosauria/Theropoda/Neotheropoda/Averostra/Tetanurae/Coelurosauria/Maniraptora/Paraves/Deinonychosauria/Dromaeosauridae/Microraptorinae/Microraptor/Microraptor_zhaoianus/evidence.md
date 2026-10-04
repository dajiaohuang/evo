---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Microraptor zhaoianus
    rank: species
    sourceDatasetId: null
    name:
      zh: Microraptor zhaoianus
      en: Microraptor zhaoianus
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: morphology
        sourceIds:
          - hwang2002MicroraptorZhaoianus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - hwang2002MicroraptorZhaoianus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - hwang2002MicroraptorZhaoianus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - hwang2002MicroraptorZhaoianus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
        sourceIds:
          - hwang2002MicroraptorZhaoianus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: phylogeny
        sourceIds:
          - hwang2002MicroraptorZhaoianus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: occurrences
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
      - topic: timeline
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: evidence
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: sources
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - hwang2002MicroraptorZhaoianus
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Microraptor zhaoianus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=68239&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:68239; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:68239
            selectedOccurrenceIds:
              - occ:535893
              - occ:537524
              - occ:739676
              - occ:1206289
              - occ:1452819
            selectedCollectionIds:
              - col:55426
              - col:55708
              - col:79518
              - col:118207
            sourceReferenceIds:
              - ref:14909
              - ref:14919
              - ref:33218
              - ref:51254
              - ref:69429
            originalIdentificationMappings:
              - occurrenceId: occ:537524
                originalIdentifiedName: Microraptor zhaoianus n. gen. n. sp.
                acceptedName: Microraptor zhaoianus
                difference: null
              - occurrenceId: occ:739676
                originalIdentifiedName: Cryptovolans pauli n. gen. n. sp.
                acceptedName: Microraptor zhaoianus
                difference: null
              - occurrenceId: occ:1206289
                originalIdentifiedName: Archaeoraptor liaoningensis n. gen. n. sp.
                acceptedName: Microraptor zhaoianus
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
        - referenceId: ref-5bb42319-57c5-4fbd-b5d7-dc457c3d47db
          metadataVariant: 0
          sourceKey: hwang2002MicroraptorZhaoianus
          usage:
            title: "New Specimens of Microraptor zhaoianus (Theropoda: Dromaeosauridae) from Northeastern China"
            url: https://doi.org/10.1206%2F0003-0082(2002)381%3C0001%3ANSOMZT%3E2.0.CO%3B2
            locator: "Complete main pp. 1–31: Introduction, Material, Description, Discussion, Phylogenetic Analysis, Conclusions; references pp. 32–33; Appendix 3. Figure 22 visually inspected. Image-only measurements and matrix appendices were not read row by row."
            accessedAt: 2026-10-03
            scope:
              zh: 两件 CAGS 标本的 2002 年骨骼重描述与作者比较分析，不是原标本复量、羽毛专论或活体运动观察。
              en: 2002 anatomical redescription of two CAGS specimens and the authors’ comparative analysis; not specimen remeasurement, a plumage monograph or observed locomotion.
          originalFields:
            - id
            - title
            - url
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

# Microraptor zhaoianus
