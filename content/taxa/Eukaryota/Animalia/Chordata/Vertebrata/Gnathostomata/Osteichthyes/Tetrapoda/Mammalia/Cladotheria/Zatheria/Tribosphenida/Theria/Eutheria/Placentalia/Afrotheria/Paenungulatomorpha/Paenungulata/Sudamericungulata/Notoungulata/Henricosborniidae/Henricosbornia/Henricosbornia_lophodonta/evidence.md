---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Henricosbornia lophodonta
    rank: species
    sourceDatasetId: null
    name:
      zh: Henricosbornia lophodonta
      en: Henricosbornia lophodonta
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
            title: PBDB accepted record — Henricosbornia lophodonta
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=314556&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:314556; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:314556
            selectedOccurrenceIds:
              - occ:161404
              - occ:161405
              - occ:1309604
              - occ:1309605
              - occ:1311405
              - occ:1311438
              - occ:1312681
              - occ:1312714
              - occ:1312742
              - occ:1312743
              - occ:1312744
              - occ:1313724
              - occ:1313725
              - occ:1313727
              - occ:1313729
              - occ:1313731
              - occ:1313735
              - occ:1313736
              - occ:1313897
              - occ:1313898
              - occ:1313899
              - occ:1313900
              - occ:1313901
              - occ:1313902
              - occ:1313903
              - occ:1313904
              - occ:1313905
              - occ:1525089
            selectedCollectionIds:
              - col:14205
              - col:13781
              - col:176059
              - col:133039
              - col:176165
              - col:44956
              - col:176170
              - col:176172
              - col:176173
              - col:176164
              - col:176285
              - col:176167
            sourceReferenceIds:
              - ref:73732
              - ref:57758
              - ref:57836
              - ref:10369
              - ref:10809
            originalIdentificationMappings:
              - occurrenceId: occ:1313724
                originalIdentifiedName: Henricosbornia alouatina n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313725
                originalIdentifiedName: Henricosbornia subconica n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313727
                originalIdentifiedName: Pantostylops incompletus n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313729
                originalIdentifiedName: Pantostylops typus n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313731
                originalIdentifiedName: Polystylops progrediens n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313735
                originalIdentifiedName: Selenoconus centralis n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313736
                originalIdentifiedName: Selenoconus senex n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313897
                originalIdentifiedName: Henricosbornia lophodonta n. gen. n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313898
                originalIdentifiedName: Microstylops clarus n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313899
                originalIdentifiedName: Prohyracotherium patagonicum n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313900
                originalIdentifiedName: Prohyracotherium matutinum n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313901
                originalIdentifiedName: Selenoconus spiculatus n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313902
                originalIdentifiedName: Pantostylops completus n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313903
                originalIdentifiedName: Hemistylops paucicuspidatus n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313904
                originalIdentifiedName: Hemistylops trigonostyloides n. sp.
                acceptedName: Henricosbornia lophodonta
                difference: null
              - occurrenceId: occ:1313905
                originalIdentifiedName: Microstylops monoconus n. sp.
                acceptedName: Henricosbornia lophodonta
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

# Henricosbornia lophodonta
