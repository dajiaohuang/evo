---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Trionyx vindobonensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Trionyx vindobonensis
      en: Trionyx vindobonensis
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbPantestudinesTaxonomy20261002
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Trionyx vindobonensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=360670&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:360670; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:360670
            selectedOccurrenceIds:
              - occ:501988
              - occ:1388812
              - occ:1388813
              - occ:1388814
              - occ:1388815
              - occ:1388816
              - occ:1388817
              - occ:1388818
              - occ:1388819
              - occ:1388820
              - occ:1388821
              - occ:1388822
            selectedCollectionIds:
              - col:51002
              - col:178665
              - col:125335
              - col:190938
              - col:69617
              - col:190939
              - col:190940
              - col:190941
              - col:144047
              - col:45836
              - col:34534
            sourceReferenceIds:
              - ref:13612
              - ref:64242
              - ref:64243
              - ref:64244
              - ref:64245
              - ref:64246
              - ref:64247
              - ref:64248
              - ref:64249
            originalIdentificationMappings:
              - occurrenceId: occ:1388812
                originalIdentifiedName: Trionyx vindobonensis n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388813
                originalIdentifiedName: Trionyx brunhuberi n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388814
                originalIdentifiedName: Trionyx hoernesi n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388815
                originalIdentifiedName: Trionyx petersi n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388816
                originalIdentifiedName: Trionyx gergensi
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388817
                originalIdentifiedName: Trionyx gergensi n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388818
                originalIdentifiedName: Trionyx peneckei n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388819
                originalIdentifiedName: Trionyx rostratus n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388820
                originalIdentifiedName: Trionyx septemcostatus n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388821
                originalIdentifiedName: Trionyx teiritzbergensis n. sp.
                acceptedName: Trionyx vindobonensis
                difference: null
              - occurrenceId: occ:1388822
                originalIdentifiedName: Trionyx teyleri n. sp.
                acceptedName: Trionyx vindobonensis
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

# Trionyx vindobonensis
