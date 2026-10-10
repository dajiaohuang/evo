---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Schizogliravus micio
    rank: species
    sourceDatasetId: null
    name:
      zh: Schizogliravus micio
      en: Schizogliravus micio
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
            title: PBDB accepted record — Schizogliravus micio
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=348847&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:348847; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:348847
            selectedOccurrenceIds:
              - occ:409130
              - occ:639694
              - occ:1352275
              - occ:1353462
              - occ:1353467
              - occ:1353470
              - occ:1353474
              - occ:1353484
              - occ:1353727
              - occ:1354087
              - occ:1354110
              - occ:1354130
              - occ:1354131
              - occ:1354132
              - occ:1354133
              - occ:1354134
            selectedCollectionIds:
              - col:34630
              - col:68877
              - col:183381
              - col:31583
              - col:179142
              - col:181092
              - col:36711
              - col:31748
              - col:167537
              - col:183655
              - col:183452
              - col:183508
              - col:36709
              - col:183377
              - col:68878
            sourceReferenceIds:
              - ref:10641
              - ref:19879
              - ref:61220
              - ref:61260
              - ref:61321
              - ref:54680
            originalIdentificationMappings:
              - occurrenceId: occ:409130
                originalIdentifiedName: Peridyromys micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:639694
                originalIdentifiedName: Gliravus itardiensis
                acceptedName: Schizogliravus micio
                difference: null
              - occurrenceId: occ:1352275
                originalIdentifiedName: Gliravus itardiensis
                acceptedName: Schizogliravus micio
                difference: null
              - occurrenceId: occ:1353462
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1353467
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1353470
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1353474
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1353484
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1353727
                originalIdentifiedName: Peridyromys micio n. sp.
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1354087
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1354110
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1354130
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1354131
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1354132
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1354133
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
                difference: recombined as
              - occurrenceId: occ:1354134
                originalIdentifiedName: Butseloglis micio
                acceptedName: Schizogliravus micio
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

# Schizogliravus micio
