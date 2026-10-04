---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Rakomeryx sinclairi
    rank: species
    sourceDatasetId: null
    name:
      zh: Rakomeryx sinclairi
      en: Rakomeryx sinclairi
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
            title: PBDB accepted record — Rakomeryx sinclairi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45011&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45011; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45011
            selectedOccurrenceIds:
              - occ:183885
              - occ:191030
              - occ:191599
              - occ:191940
              - occ:192130
              - occ:192914
              - occ:1241443
              - occ:1520945
              - occ:1520974
              - occ:1520976
              - occ:1520980
              - occ:1630272
              - occ:1676434
            selectedCollectionIds:
              - col:17995
              - col:19162
              - col:19336
              - col:19427
              - col:19472
              - col:19616
              - col:19426
              - col:212622
              - col:212625
              - col:212626
              - col:212627
              - col:230906
              - col:18994
            sourceReferenceIds:
              - ref:3175
              - ref:6222
              - ref:2070
              - ref:3759
              - ref:53351
              - ref:73434
              - ref:2472
              - ref:73438
            originalIdentificationMappings:
              - occurrenceId: occ:191030
                originalIdentifiedName: Rakomeryx raki n. gen. n. sp.
                acceptedName: Rakomeryx sinclairi
                difference: null
              - occurrenceId: occ:191599
                originalIdentifiedName: Rakomeryx raki
                acceptedName: Rakomeryx sinclairi
                difference: null
              - occurrenceId: occ:191940
                originalIdentifiedName: Rakomeryx raki
                acceptedName: Rakomeryx sinclairi
                difference: null
              - occurrenceId: occ:192130
                originalIdentifiedName: Rakomeryx raki
                acceptedName: Rakomeryx sinclairi
                difference: null
              - occurrenceId: occ:192914
                originalIdentifiedName: Rakomeryx yermonensis n. sp.
                acceptedName: Rakomeryx sinclairi
                difference: null
              - occurrenceId: occ:1630272
                originalIdentifiedName: Cervavus sinclairi n. sp.
                acceptedName: Rakomeryx sinclairi
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

# Rakomeryx sinclairi
