---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Aulacephalodon bainii
    rank: species
    sourceDatasetId: null
    name:
      zh: Aulacephalodon bainii
      en: Aulacephalodon bainii
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
            title: PBDB accepted record — Aulacephalodon bainii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=302399&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:302399; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:302399
            selectedOccurrenceIds:
              - occ:1304835
              - occ:1305472
              - occ:1307517
              - occ:1308676
              - occ:1314301
              - occ:1314342
              - occ:1316962
              - occ:1317361
              - occ:1320352
              - occ:1320597
              - occ:1325671
              - occ:1326583
              - occ:1327831
              - occ:1328464
              - occ:1331665
              - occ:1336967
              - occ:1337220
              - occ:1337455
              - occ:1338338
              - occ:1338342
            selectedCollectionIds:
              - col:174666
              - col:144272
              - col:174747
              - col:175565
              - col:80174
              - col:176339
              - col:80216
              - col:176310
              - col:171378
              - col:177601
              - col:178198
              - col:178477
              - col:178734
              - col:179335
              - col:180347
              - col:80826
              - col:180462
              - col:180677
              - col:80176
            sourceReferenceIds:
              - ref:27212
              - ref:27216
              - ref:57253
              - ref:57386
              - ref:37395
              - ref:58451
              - ref:37442
            originalIdentificationMappings:
              - occurrenceId: occ:1304835
                originalIdentifiedName: Bainia peavoti n. sp.
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1307517
                originalIdentifiedName: Dicynodon bainii n. sp.
                acceptedName: Aulacephalodon bainii
                difference: recombined as
              - occurrenceId: occ:1308676
                originalIdentifiedName: Dicynodon bolorhinoides n. sp.
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1317361
                originalIdentifiedName: Aulacocephalodon hartzenbergi
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1325671
                originalIdentifiedName: Dicynodon tigriceps n. sp.
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1326583
                originalIdentifiedName: Dicynodon laticeps n. sp.
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1327831
                originalIdentifiedName: Proaulacocephalodon miltoni n. sp.
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1328464
                originalIdentifiedName: Aulacocephalodon vanderhorsti n. sp.
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1338338
                originalIdentifiedName: Bainia haughtoni n. sp.
                acceptedName: Aulacephalodon bainii
                difference: null
              - occurrenceId: occ:1338342
                originalIdentifiedName: Aulacocephalodon pricei n. sp.
                acceptedName: Aulacephalodon bainii
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

# Aulacephalodon bainii
