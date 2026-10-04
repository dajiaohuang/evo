---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Stygimys gratus
    rank: species
    sourceDatasetId: null
    name:
      zh: Stygimys gratus
      en: Stygimys gratus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Stygimys gratus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46367&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:46367; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46367
            selectedOccurrenceIds:
              - occ:163819
              - occ:163836
              - occ:163923
              - occ:163930
              - occ:163945
              - occ:164094
              - occ:164140
              - occ:164153
              - occ:164227
              - occ:164304
              - occ:164310
              - occ:164314
              - occ:164331
              - occ:164341
              - occ:164376
              - occ:164394
              - occ:164406
              - occ:164496
              - occ:164525
              - occ:1404236
              - occ:1404257
              - occ:1630943
            selectedCollectionIds:
              - col:14669
              - col:14671
              - col:14696
              - col:14698
              - col:14702
              - col:14741
              - col:14751
              - col:14754
              - col:14763
              - col:14771
              - col:14772
              - col:14773
              - col:14776
              - col:14777
              - col:14785
              - col:14787
              - col:14788
              - col:14798
              - col:14808
              - col:193844
              - col:14759
              - col:231045
            sourceReferenceIds:
              - ref:2255
              - ref:960
              - ref:6294
              - ref:65846
              - ref:85522
            originalIdentificationMappings:
              - occurrenceId: occ:163819
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:163836
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:163923
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:163930
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:163945
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164094
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164140
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164153
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164227
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164304
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164310
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164314
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164331
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164341
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164376
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164394
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164406
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:164496
                originalIdentifiedName: Cimexomys hausoi n. sp.
                acceptedName: Stygimys gratus
                difference: null
              - occurrenceId: occ:164525
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:1404236
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:1404257
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
                difference: recombined as
              - occurrenceId: occ:1630943
                originalIdentifiedName: Cimexomys gratus
                acceptedName: Stygimys gratus
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

# Stygimys gratus
