---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Neochelys salmanticensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Neochelys salmanticensis
      en: Neochelys salmanticensis
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
            title: PBDB accepted record — Neochelys salmanticensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=268034&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:268034; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:268034
            selectedOccurrenceIds:
              - occ:332580
              - occ:332581
              - occ:385158
              - occ:453807
              - occ:458206
              - occ:1135762
              - occ:1626118
              - occ:1626119
              - occ:2065133
            selectedCollectionIds:
              - col:31309
              - col:36689
              - col:40892
              - col:230154
              - col:224595
              - col:224594
            sourceReferenceIds:
              - ref:8458
              - ref:46814
              - ref:9828
              - ref:11750
              - ref:84700
              - ref:94918
            originalIdentificationMappings:
              - occurrenceId: occ:332580
                originalIdentifiedName: Duerochelys arribasi n. gen. n. sp.
                acceptedName: Neochelys salmanticensis
                difference: null
              - occurrenceId: occ:332581
                originalIdentifiedName: Podocnemis armuniensis n. sp.
                acceptedName: Neochelys salmanticensis
                difference: null
              - occurrenceId: occ:385158
                originalIdentifiedName: Podocnemis carbajosai
                acceptedName: Neochelys salmanticensis
                difference: recombined as
              - occurrenceId: occ:453807
                originalIdentifiedName: Neochelys salmanticensis n. gen. n. sp.
                acceptedName: Neochelys salmanticensis
                difference: null
              - occurrenceId: occ:458206
                originalIdentifiedName: Podocnemis entodermica n. sp.
                acceptedName: Neochelys salmanticensis
                difference: null
              - occurrenceId: occ:1135762
                originalIdentifiedName: Podocnemis carbajosai n. sp.
                acceptedName: Neochelys salmanticensis
                difference: recombined as
              - occurrenceId: occ:2065133
                originalIdentifiedName: Neochelys arribasi
                acceptedName: Neochelys salmanticensis
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

# Neochelys salmanticensis
