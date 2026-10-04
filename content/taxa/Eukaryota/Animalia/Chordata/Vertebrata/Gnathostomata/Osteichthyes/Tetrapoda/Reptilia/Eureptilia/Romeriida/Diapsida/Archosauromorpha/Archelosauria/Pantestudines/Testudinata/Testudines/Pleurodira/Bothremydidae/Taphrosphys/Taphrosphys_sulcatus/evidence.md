---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Taphrosphys sulcatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Taphrosphys sulcatus
      en: Taphrosphys sulcatus
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
            title: PBDB accepted record — Taphrosphys sulcatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=131499&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:131499; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:131499
            selectedOccurrenceIds:
              - occ:281674
              - occ:655846
              - occ:1037876
              - occ:1045300
              - occ:1045301
              - occ:1045302
              - occ:1045303
              - occ:1045304
              - occ:1049670
              - occ:1260989
              - occ:1263228
              - occ:1389569
              - occ:1416811
            selectedCollectionIds:
              - col:26819
              - col:70857
              - col:127082
              - col:48570
              - col:128428
              - col:88034
              - col:128429
              - col:129264
              - col:167780
            sourceReferenceIds:
              - ref:764
              - ref:54671
              - ref:41281
              - ref:35435
              - ref:14442
              - ref:42108
              - ref:39861
            originalIdentificationMappings:
              - occurrenceId: occ:655846
                originalIdentifiedName: Taphrosphys molops
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1045301
                originalIdentifiedName: Taphrosphys molops n. sp.
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1045302
                originalIdentifiedName: Taphrosphys molops
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1045303
                originalIdentifiedName: Taphrosphys leslianus n. sp.
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1045304
                originalIdentifiedName: Taphrosphys longinuchus n. sp.
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1049670
                originalIdentifiedName: Platemys sulcatus n. sp.
                acceptedName: Taphrosphys sulcatus
                difference: recombined as
              - occurrenceId: occ:1260989
                originalIdentifiedName: Taphrosphys molops
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1263228
                originalIdentifiedName: Taphrosphys molops
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1389569
                originalIdentifiedName: Taphrosphys enodis n. sp.
                acceptedName: Taphrosphys sulcatus
                difference: null
              - occurrenceId: occ:1416811
                originalIdentifiedName: Taphrosphys leslianus
                acceptedName: Taphrosphys sulcatus
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

# Taphrosphys sulcatus
