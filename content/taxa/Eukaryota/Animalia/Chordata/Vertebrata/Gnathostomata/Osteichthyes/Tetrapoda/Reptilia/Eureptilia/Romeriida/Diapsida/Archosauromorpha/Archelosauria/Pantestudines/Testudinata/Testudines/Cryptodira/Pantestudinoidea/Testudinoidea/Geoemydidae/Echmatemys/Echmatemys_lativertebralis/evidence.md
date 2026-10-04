---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Echmatemys lativertebralis
    rank: species
    sourceDatasetId: null
    name:
      zh: Echmatemys lativertebralis
      en: Echmatemys lativertebralis
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
            title: PBDB accepted record — Echmatemys lativertebralis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=105389&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:105389; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:105389
            selectedOccurrenceIds:
              - occ:469885
              - occ:897772
              - occ:897800
              - occ:1317242
              - occ:1317244
              - occ:1317246
              - occ:1317251
              - occ:1317254
              - occ:1317255
              - occ:1317257
              - occ:1317260
              - occ:1317262
              - occ:1317264
              - occ:1317265
              - occ:1317267
              - occ:1317268
              - occ:1317272
              - occ:1317276
              - occ:1317277
              - occ:1317278
              - occ:1317280
              - occ:1317287
              - occ:1317291
              - occ:1317292
              - occ:1317294
              - occ:1319238
              - occ:1364173
              - occ:1364175
              - occ:1390243
              - occ:1390671
              - occ:1393428
              - occ:2069769
            selectedCollectionIds:
              - col:46718
              - col:16938
              - col:16900
              - col:15443
              - col:176872
              - col:176873
              - col:176877
              - col:176879
              - col:176880
              - col:176882
              - col:176885
              - col:176886
              - col:176887
              - col:176888
              - col:176890
              - col:176891
              - col:176894
              - col:176898
              - col:176899
              - col:176900
              - col:176902
              - col:176909
              - col:176911
              - col:176912
              - col:176914
              - col:177320
              - col:185696
              - col:185697
              - col:131867
              - col:130809
              - col:17013
              - col:16657
            sourceReferenceIds:
              - ref:11717
              - ref:1235
              - ref:34289
              - ref:58368
              - ref:66519
              - ref:26380
              - ref:64482
              - ref:64538
              - ref:64781
              - ref:95678
            originalIdentificationMappings:
              - occurrenceId: occ:897772
                originalIdentifiedName: Graptemys cordifera
                acceptedName: Echmatemys lativertebralis
                difference: null
              - occurrenceId: occ:897800
                originalIdentifiedName: Chrysemys inornata n. sp.
                acceptedName: Echmatemys lativertebralis
                difference: null
              - occurrenceId: occ:1319238
                originalIdentifiedName: Echmatemys rivalis n. sp.
                acceptedName: Echmatemys lativertebralis
                difference: null
              - occurrenceId: occ:1364173
                originalIdentifiedName: Echmatemys douglassi n. sp.
                acceptedName: Echmatemys lativertebralis
                difference: null
              - occurrenceId: occ:1364175
                originalIdentifiedName: Echmatemys hollandi n. sp.
                acceptedName: Echmatemys lativertebralis
                difference: null
              - occurrenceId: occ:1390243
                originalIdentifiedName: Emys lativertebralis n. sp.
                acceptedName: Echmatemys lativertebralis
                difference: recombined as
              - occurrenceId: occ:1390671
                originalIdentifiedName: Emys shaugnessiana n. sp.
                acceptedName: Echmatemys lativertebralis
                difference: null
              - occurrenceId: occ:1393428
                originalIdentifiedName: Graptemys cordifera n. sp.
                acceptedName: Echmatemys lativertebralis
                difference: null
              - occurrenceId: occ:2069769
                originalIdentifiedName: Echmatemys douglassi
                acceptedName: Echmatemys lativertebralis
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

# Echmatemys lativertebralis
