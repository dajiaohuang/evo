---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pleurosternon bullockii
    rank: species
    sourceDatasetId: null
    name:
      zh: Pleurosternon bullockii
      en: Pleurosternon bullockii
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
            title: PBDB accepted record — Pleurosternon bullockii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=156264&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:156264; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:156264
            selectedOccurrenceIds:
              - occ:1040890
              - occ:1040892
              - occ:1040894
              - occ:1040901
              - occ:1042002
              - occ:1042004
              - occ:1042005
              - occ:1049660
              - occ:1118896
              - occ:1127403
              - occ:1135957
              - occ:1453397
              - occ:1453400
              - occ:1453401
              - occ:1453402
            selectedCollectionIds:
              - col:127480
              - col:127481
              - col:127482
              - col:72142
              - col:127647
              - col:129260
              - col:142093
              - col:119505
              - col:53967
            sourceReferenceIds:
              - ref:41527
              - ref:14071
              - ref:41531
              - ref:42104
              - ref:67101
              - ref:31457
              - ref:74160
              - ref:69448
              - ref:14179
            originalIdentificationMappings:
              - occurrenceId: occ:1040890
                originalIdentifiedName: Pleurosternon concinnum n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1040892
                originalIdentifiedName: Pleurosternon ovatum n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1040894
                originalIdentifiedName: Platemys bullockii n. sp.
                acceptedName: Pleurosternon bullockii
                difference: recombined as
              - occurrenceId: occ:1040901
                originalIdentifiedName: Pleurosternon emarginatum n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1042002
                originalIdentifiedName: Pleurosternum bullocki
                acceptedName: Pleurosternon bullockii
                difference: recombined as
              - occurrenceId: occ:1042005
                originalIdentifiedName: Pleurosternum portlandicum n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1049660
                originalIdentifiedName: Mesochelys durlstonensis n. gen. n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1127403
                originalIdentifiedName: Pleurosternum portlandicum
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1453397
                originalIdentifiedName: Megasternon koenigii n. gen. n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1453400
                originalIdentifiedName: Pleurosternon oweni n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1453401
                originalIdentifiedName: Pleurosternon sedgwicki n. sp.
                acceptedName: Pleurosternon bullockii
                difference: null
              - occurrenceId: occ:1453402
                originalIdentifiedName: Pleurosternon vansittarti n. sp.
                acceptedName: Pleurosternon bullockii
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

# Pleurosternon bullockii
