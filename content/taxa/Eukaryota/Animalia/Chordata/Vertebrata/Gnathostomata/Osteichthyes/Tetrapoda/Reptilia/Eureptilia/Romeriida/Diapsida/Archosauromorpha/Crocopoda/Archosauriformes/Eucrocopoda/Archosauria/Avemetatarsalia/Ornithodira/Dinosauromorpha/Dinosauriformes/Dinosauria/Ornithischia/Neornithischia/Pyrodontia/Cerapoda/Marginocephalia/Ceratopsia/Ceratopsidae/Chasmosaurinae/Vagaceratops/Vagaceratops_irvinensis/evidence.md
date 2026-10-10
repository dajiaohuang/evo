---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Vagaceratops irvinensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Vagaceratops irvinensis
      en: Vagaceratops irvinensis
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Vagaceratops irvinensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=64731&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:64731; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:64731
            selectedOccurrenceIds:
              - occ:256534
              - occ:256539
              - occ:504695
              - occ:504696
              - occ:796338
              - occ:1206791
              - occ:1206792
            selectedCollectionIds:
              - col:24891
              - col:24893
              - col:51317
              - col:51318
              - col:86515
              - col:156536
              - col:156538
            sourceReferenceIds:
              - ref:6978
              - ref:59189
              - ref:51303
            originalIdentificationMappings:
              - occurrenceId: occ:256534
                originalIdentifiedName: Chasmosaurus irvinensis n. sp.
                acceptedName: Vagaceratops irvinensis
                difference: recombined as
              - occurrenceId: occ:256539
                originalIdentifiedName: Chasmosaurus irvinensis
                acceptedName: Vagaceratops irvinensis
                difference: recombined as
              - occurrenceId: occ:504695
                originalIdentifiedName: Pentaceratops aquilonius n. sp.
                acceptedName: Vagaceratops irvinensis
                difference: null
              - occurrenceId: occ:504696
                originalIdentifiedName: Pentaceratops aquilonius
                acceptedName: Vagaceratops irvinensis
                difference: null
              - occurrenceId: occ:796338
                originalIdentifiedName: Chasmosaurus irvinensis
                acceptedName: Vagaceratops irvinensis
                difference: recombined as
              - occurrenceId: occ:1206791
                originalIdentifiedName: Mercuriceratops gemini
                acceptedName: Vagaceratops irvinensis
                difference: null
              - occurrenceId: occ:1206792
                originalIdentifiedName: Mercuriceratops gemini n. gen. n. sp.
                acceptedName: Vagaceratops irvinensis
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

# Vagaceratops irvinensis
