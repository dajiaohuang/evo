---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eporeodon occidentalis
    rank: species
    sourceDatasetId: null
    name:
      zh: Eporeodon occidentalis
      en: Eporeodon occidentalis
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
            title: PBDB accepted record — Eporeodon occidentalis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49395&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49395; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49395
            selectedOccurrenceIds:
              - occ:180900
              - occ:180901
              - occ:181467
              - occ:181677
              - occ:182387
              - occ:838504
              - occ:1630187
              - occ:1640001
              - occ:2074794
              - occ:2074798
              - occ:2074800
              - occ:2074803
              - occ:2074808
              - occ:2074825
              - occ:2074827
              - occ:2074828
              - occ:2074830
            selectedCollectionIds:
              - col:17349
              - col:93078
              - col:17537
              - col:17670
              - col:17508
              - col:180202
              - col:157001
              - col:212628
              - col:279297
              - col:279298
              - col:212629
              - col:228640
              - col:185944
              - col:278932
              - col:212630
              - col:279305
            sourceReferenceIds:
              - ref:1547
              - ref:31438
              - ref:3264
              - ref:53289
              - ref:3069
              - ref:95967
            originalIdentificationMappings:
              - occurrenceId: occ:180900
                originalIdentifiedName: Eucrotaphus trigonocephalus
                acceptedName: Eporeodon occidentalis
                difference: null
              - occurrenceId: occ:182387
                originalIdentifiedName: Eporeodon thurstoni n. sp.
                acceptedName: Eporeodon occidentalis
                difference: null
              - occurrenceId: occ:1630187
                originalIdentifiedName: Eucrotaphus occidentalis
                acceptedName: Eporeodon occidentalis
                difference: recombined as
              - occurrenceId: occ:1640001
                originalIdentifiedName: Eporeodon davisi n. sp.
                acceptedName: Eporeodon occidentalis
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

# Eporeodon occidentalis
