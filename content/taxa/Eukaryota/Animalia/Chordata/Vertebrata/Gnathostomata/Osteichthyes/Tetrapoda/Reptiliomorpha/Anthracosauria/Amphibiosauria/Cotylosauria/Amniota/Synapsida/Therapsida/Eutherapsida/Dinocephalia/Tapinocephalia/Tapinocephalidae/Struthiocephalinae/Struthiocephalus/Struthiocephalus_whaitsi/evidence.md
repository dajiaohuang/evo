---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Struthiocephalus whaitsi
    rank: species
    sourceDatasetId: null
    name:
      zh: Struthiocephalus whaitsi
      en: Struthiocephalus whaitsi
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
            title: PBDB accepted record — Struthiocephalus whaitsi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=380512&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:380512; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:380512
            selectedOccurrenceIds:
              - occ:1308851
              - occ:1340473
              - occ:1340596
              - occ:1428090
              - occ:1428399
              - occ:1428836
              - occ:1428848
              - occ:1428854
              - occ:1428871
              - occ:1428983
              - occ:1428990
              - occ:1429003
            selectedCollectionIds:
              - col:31777
              - col:86388
              - col:176355
              - col:92648
              - col:198702
              - col:93096
              - col:176314
              - col:198718
              - col:198720
              - col:198723
            sourceReferenceIds:
              - ref:27216
              - ref:67670
              - ref:67683
            originalIdentificationMappings:
              - occurrenceId: occ:1428090
                originalIdentifiedName: Struthiocephalus kitchingi n. sp.
                acceptedName: Struthiocephalus whaitsi
                difference: null
              - occurrenceId: occ:1428399
                originalIdentifiedName: Moschosaurus longicesps n. sp.
                acceptedName: Struthiocephalus whaitsi
                difference: null
              - occurrenceId: occ:1428836
                originalIdentifiedName: Struthiocephalus rheederi n. sp.
                acceptedName: Struthiocephalus whaitsi
                difference: null
              - occurrenceId: occ:1428871
                originalIdentifiedName: Struthiocephalellus parvus n. sp.
                acceptedName: Struthiocephalus whaitsi
                difference: null
              - occurrenceId: occ:1428983
                originalIdentifiedName: Struthiocephalus whaitsi n. sp.
                acceptedName: Struthiocephalus whaitsi
                difference: null
              - occurrenceId: occ:1428990
                originalIdentifiedName: Struthiocephalus milleri n. sp.
                acceptedName: Struthiocephalus whaitsi
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

# Struthiocephalus whaitsi
