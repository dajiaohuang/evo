---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Glossotherium robustum
    rank: species
    sourceDatasetId: null
    name:
      zh: Glossotherium robustum
      en: Glossotherium robustum
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
            title: PBDB accepted record — Glossotherium robustum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=161720&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:161720; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:161720
            selectedOccurrenceIds:
              - occ:661557
              - occ:661614
              - occ:661693
              - occ:661729
              - occ:661760
              - occ:661775
              - occ:837039
              - occ:1038496
              - occ:1118494
              - occ:1142602
              - occ:1453507
              - occ:1460989
              - occ:1461456
              - occ:1461471
              - occ:1461498
              - occ:1492167
              - occ:1516209
              - occ:1540616
              - occ:1632399
              - occ:1632406
              - occ:1639812
              - occ:1639813
              - occ:1639814
              - occ:1640025
              - occ:1640050
              - occ:1640061
              - occ:1640069
              - occ:1640082
              - occ:1640093
              - occ:2063775
            selectedCollectionIds:
              - col:71274
              - col:71279
              - col:71292
              - col:71298
              - col:71302
              - col:71303
              - col:92814
              - col:88836
              - col:142016
              - col:145507
              - col:142142
              - col:147598
              - col:203955
              - col:203957
              - col:203958
              - col:207456
              - col:140159
              - col:140929
              - col:211638
              - col:124715
              - col:149143
              - col:223843
              - col:148419
              - col:212469
              - col:213470
              - col:212835
              - col:213489
              - col:232453
              - col:232457
              - col:231913
            sourceReferenceIds:
              - ref:24014
              - ref:85618
              - ref:24010
              - ref:41346
              - ref:46109
              - ref:69466
              - ref:69878
              - ref:69906
              - ref:86158
              - ref:71494
              - ref:73160
              - ref:74913
              - ref:86610
              - ref:86702
            originalIdentificationMappings:
              - occurrenceId: occ:1118494
                originalIdentifiedName: Mylodon robustus
                acceptedName: Glossotherium robustum
                difference: recombined as
              - occurrenceId: occ:1492167
                originalIdentifiedName: Mylodon robustus
                acceptedName: Glossotherium robustum
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

# Glossotherium robustum
