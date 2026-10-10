---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Peridyromys murinus
    rank: species
    sourceDatasetId: null
    name:
      zh: Peridyromys murinus
      en: Peridyromys murinus
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
            title: PBDB accepted record — Peridyromys murinus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=131924&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:131924; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:131924
            selectedOccurrenceIds:
              - occ:375274
              - occ:386576
              - occ:386591
              - occ:386604
              - occ:386614
              - occ:386622
              - occ:386628
              - occ:386650
              - occ:625066
              - occ:625067
              - occ:625068
              - occ:691874
              - occ:691892
              - occ:734095
              - occ:1353729
              - occ:1353730
              - occ:1353731
              - occ:1353732
              - occ:1353733
              - occ:1353734
              - occ:1355416
              - occ:1375544
              - occ:1410322
              - occ:1436954
              - occ:1455440
              - occ:1455470
              - occ:1455509
              - occ:1488211
              - occ:1589084
            selectedCollectionIds:
              - col:35441
              - col:36876
              - col:36878
              - col:36879
              - col:36880
              - col:36881
              - col:36882
              - col:36885
              - col:67390
              - col:67192
              - col:67191
              - col:74538
              - col:74539
              - col:78744
              - col:36716
              - col:36715
              - col:36712
              - col:59886
              - col:179146
              - col:183542
              - col:37208
              - col:35750
              - col:194887
              - col:200441
              - col:203089
              - col:203090
              - col:203092
              - col:207106
              - col:180192
            sourceReferenceIds:
              - ref:11577
              - ref:9874
              - ref:19173
              - ref:25040
              - ref:26479
              - ref:61321
              - ref:61379
              - ref:60953
              - ref:50840
              - ref:66266
              - ref:68425
              - ref:69528
              - ref:71300
              - ref:80834
            originalIdentificationMappings:
              - occurrenceId: occ:375274
                originalIdentifiedName: Peridyromys occitanus
                acceptedName: Peridyromys murinus
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

# Peridyromys murinus
