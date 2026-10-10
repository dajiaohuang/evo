---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Anteosaurus magnificus
    rank: species
    sourceDatasetId: null
    name:
      zh: Anteosaurus magnificus
      en: Anteosaurus magnificus
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
            title: PBDB accepted record — Anteosaurus magnificus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=362285&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:362285; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:362285
            selectedOccurrenceIds:
              - occ:1340463
              - occ:1340595
              - occ:1428377
              - occ:1428487
              - occ:1428523
              - occ:1428703
              - occ:1428819
              - occ:1428840
              - occ:1428844
              - occ:1428845
              - occ:1428853
              - occ:1428960
              - occ:1428978
              - occ:1428992
              - occ:1429001
            selectedCollectionIds:
              - col:86388
              - col:176355
              - col:93084
              - col:93097
              - col:198675
              - col:198694
              - col:198697
              - col:93096
              - col:176314
              - col:198714
              - col:198715
              - col:198720
              - col:198723
            sourceReferenceIds:
              - ref:27216
              - ref:67683
            originalIdentificationMappings:
              - occurrenceId: occ:1428377
                originalIdentifiedName: Anteosaurus magnificus n. gen. n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428487
                originalIdentifiedName: Anteosaurus abeli
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428523
                originalIdentifiedName: Anteosaurus acutirostris n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428703
                originalIdentifiedName: Anteosaurus minor n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428819
                originalIdentifiedName: Titanognathus lotzi n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428840
                originalIdentifiedName: Anteosaurus crassifrons
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428844
                originalIdentifiedName: Paranteosaurus primus n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428845
                originalIdentifiedName: Anteosaurus levops n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428853
                originalIdentifiedName: Anteosaurus abeli
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428960
                originalIdentifiedName: Anteosaurus abeli n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428978
                originalIdentifiedName: Anteosaurus cruentus n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1428992
                originalIdentifiedName: Dinosuchus vorsteri n. sp.
                acceptedName: Anteosaurus magnificus
                difference: null
              - occurrenceId: occ:1429001
                originalIdentifiedName: Anteosaurus laticeps n. sp.
                acceptedName: Anteosaurus magnificus
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

# Anteosaurus magnificus
