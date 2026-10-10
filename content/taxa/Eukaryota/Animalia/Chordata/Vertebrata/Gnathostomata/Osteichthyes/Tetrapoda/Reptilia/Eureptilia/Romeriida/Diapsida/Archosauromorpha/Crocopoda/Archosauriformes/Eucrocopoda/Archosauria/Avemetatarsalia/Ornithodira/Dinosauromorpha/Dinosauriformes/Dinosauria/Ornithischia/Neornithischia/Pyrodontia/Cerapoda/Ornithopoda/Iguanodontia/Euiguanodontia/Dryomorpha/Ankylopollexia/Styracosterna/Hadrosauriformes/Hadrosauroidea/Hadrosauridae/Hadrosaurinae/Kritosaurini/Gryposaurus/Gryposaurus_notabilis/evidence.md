---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gryposaurus notabilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Gryposaurus notabilis
      en: Gryposaurus notabilis
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
            title: PBDB accepted record — Gryposaurus notabilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63251&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63251; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:63251
            selectedOccurrenceIds:
              - occ:467014
              - occ:535209
              - occ:564551
              - occ:564552
              - occ:565047
              - occ:565058
              - occ:565492
              - occ:565518
              - occ:565873
              - occ:870170
            selectedCollectionIds:
              - col:46331
              - col:55317
              - col:58946
              - col:58947
              - col:59012
              - col:59013
              - col:59102
              - col:59119
              - col:59221
              - col:96534
            sourceReferenceIds:
              - ref:14121
              - ref:16964
              - ref:16982
              - ref:17546
              - ref:92747
              - ref:32772
            originalIdentificationMappings:
              - occurrenceId: occ:467014
                originalIdentifiedName: Kritosaurus incurvimanus n. sp.
                acceptedName: Gryposaurus notabilis
                difference: null
              - occurrenceId: occ:535209
                originalIdentifiedName: Gryposaurus incurvimanus
                acceptedName: Gryposaurus notabilis
                difference: null
              - occurrenceId: occ:564552
                originalIdentifiedName: Gryposaurus notabilis n. gen. n. sp.
                acceptedName: Gryposaurus notabilis
                difference: null
              - occurrenceId: occ:565047
                originalIdentifiedName: Gryposaurus incurvimanus
                acceptedName: Gryposaurus notabilis
                difference: null
              - occurrenceId: occ:565058
                originalIdentifiedName: Gryposaurus incurvimanus
                acceptedName: Gryposaurus notabilis
                difference: null
              - occurrenceId: occ:565518
                originalIdentifiedName: Gryposaurus incurvimanus
                acceptedName: Gryposaurus notabilis
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

# Gryposaurus notabilis
