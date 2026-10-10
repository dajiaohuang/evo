---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Procolophon trigoniceps
    rank: species
    sourceDatasetId: null
    name:
      zh: Procolophon trigoniceps
      en: Procolophon trigoniceps
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherReptiliaTaxonomy20261002
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          sourceKey: pbdbOtherReptiliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Procolophon trigoniceps
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=56758&show=parent,app,attr
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
          sourceKey: pbdbOtherReptiliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:56758; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:56758
            selectedOccurrenceIds:
              - occ:147521
              - occ:803135
              - occ:803158
              - occ:806914
              - occ:807184
              - occ:832666
              - occ:843491
              - occ:843780
              - occ:843781
              - occ:843782
              - occ:845945
              - occ:847947
              - occ:847948
              - occ:847949
              - occ:848381
              - occ:895255
              - occ:895260
              - occ:895264
              - occ:922675
            selectedCollectionIds:
              - col:13043
              - col:87410
              - col:87414
              - col:27266
              - col:92309
              - col:93720
              - col:94112
              - col:94309
              - col:94365
              - col:99232
              - col:99233
              - col:99234
              - col:98602
            sourceReferenceIds:
              - ref:29612
              - ref:29423
              - ref:29615
              - ref:31113
              - ref:31834
              - ref:31898
              - ref:31974
              - ref:32063
              - ref:32052
              - ref:34125
              - ref:27216
            originalIdentificationMappings:
              - occurrenceId: occ:147521
                originalIdentifiedName: Procolophon trigoniceps n. gen. n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:806914
                originalIdentifiedName: Procolophon minor n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:843491
                originalIdentifiedName: Procolophon brasiliensis n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:843780
                originalIdentifiedName: Procolophon laticeps n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:843781
                originalIdentifiedName: Procolophon griersoni n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:843782
                originalIdentifiedName: Procolophon cuneiceps n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:845945
                originalIdentifiedName: Procolophon pricei n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:847948
                originalIdentifiedName: Procolophon platyrhinus n. sp.
                acceptedName: Procolophon trigoniceps
                difference: null
              - occurrenceId: occ:847949
                originalIdentifiedName: Procolophon sphenorhinus n. sp.
                acceptedName: Procolophon trigoniceps
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

# Procolophon trigoniceps
