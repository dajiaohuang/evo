---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Rhachiocephalus magnus
    rank: species
    sourceDatasetId: null
    name:
      zh: Rhachiocephalus magnus
      en: Rhachiocephalus magnus
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
            title: PBDB accepted record — Rhachiocephalus magnus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=338939&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:338939; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:338939
            selectedOccurrenceIds:
              - occ:1081118
              - occ:1304608
              - occ:1305442
              - occ:1305474
              - occ:1320523
              - occ:1324916
              - occ:1327826
              - occ:1329928
              - occ:1331649
              - occ:1331667
              - occ:1336968
              - occ:1337216
              - occ:1337452
              - occ:1337456
              - occ:1337457
              - occ:1337462
              - occ:1342687
              - occ:1387196
              - occ:1387198
            selectedCollectionIds:
              - col:135700
              - col:174626
              - col:174736
              - col:144272
              - col:177585
              - col:178113
              - col:178523
              - col:179072
              - col:179328
              - col:179335
              - col:180347
              - col:80826
              - col:180461
              - col:180462
              - col:178128
              - col:181609
              - col:181520
            sourceReferenceIds:
              - ref:43411
              - ref:27216
              - ref:29040
              - ref:57014
              - ref:55690
              - ref:6969
              - ref:59882
              - ref:37154
            originalIdentificationMappings:
              - occurrenceId: occ:1304608
                originalIdentifiedName: Platycyclops latirhinus n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1305442
                originalIdentifiedName: Platycyclops rubidgei n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1305474
                originalIdentifiedName: Platycyclops haughtoni
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1320523
                originalIdentifiedName: Oudenodon magnus n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: recombined as
              - occurrenceId: occ:1324916
                originalIdentifiedName: Dicynodon scheepersi n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1329928
                originalIdentifiedName: Kitchingia planifrons n. gen. n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1331649
                originalIdentifiedName: Rhachiocephalus angusticeps n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1331667
                originalIdentifiedName: Platycyclops haughtoni n. gen. n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1336968
                originalIdentifiedName: Eocyclops longus n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1337216
                originalIdentifiedName: Megacyclops whaitsi n. gen. n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1337452
                originalIdentifiedName: Megacyclops rugosus n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1337456
                originalIdentifiedName: Dicynodon scheepersi
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1337457
                originalIdentifiedName: Pelanomodon wesselsi n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1337462
                originalIdentifiedName: Neomegacyclops cyclops n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1387196
                originalIdentifiedName: Megacyclops usiliensis n. sp.
                acceptedName: Rhachiocephalus magnus
                difference: null
              - occurrenceId: occ:1387198
                originalIdentifiedName: Platypodosaurus magnus
                acceptedName: Rhachiocephalus magnus
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

# Rhachiocephalus magnus
