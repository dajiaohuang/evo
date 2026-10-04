---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dicynodontoides recurvidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Dicynodontoides recurvidens
      en: Dicynodontoides recurvidens
    reviewStatus: source-linked
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
            title: PBDB accepted record — Dicynodontoides recurvidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=56865&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:56865; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:56865
            selectedOccurrenceIds:
              - occ:1285179
              - occ:1305525
              - occ:1314182
              - occ:1317157
              - occ:1317306
              - occ:1317416
              - occ:1418589
            selectedCollectionIds:
              - col:171146
              - col:174747
              - col:176336
              - col:176830
              - col:176916
              - col:176919
              - col:117183
            sourceReferenceIds:
              - ref:57014
              - ref:29040
              - ref:27202
              - ref:37476
              - ref:58370
              - ref:66836
            originalIdentificationMappings:
              - occurrenceId: occ:1285179
                originalIdentifiedName: Dicynodon duvenhagei n. sp.
                acceptedName: Dicynodontoides recurvidens
                difference: null
              - occurrenceId: occ:1305525
                originalIdentifiedName: Dicynodon recurvidens n. sp.
                acceptedName: Dicynodontoides recurvidens
                difference: recombined as
              - occurrenceId: occ:1314182
                originalIdentifiedName: Dicynodontoides parringtoni n. sp.
                acceptedName: Dicynodontoides recurvidens
                difference: null
              - occurrenceId: occ:1317157
                originalIdentifiedName: Udenodon gracilis n. sp.
                acceptedName: Dicynodontoides recurvidens
                difference: null
              - occurrenceId: occ:1317306
                originalIdentifiedName: Dicynodon clarencei n. sp.
                acceptedName: Dicynodontoides recurvidens
                difference: null
              - occurrenceId: occ:1317416
                originalIdentifiedName: Dicynodon howardi n. sp.
                acceptedName: Dicynodontoides recurvidens
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

# Dicynodontoides recurvidens
