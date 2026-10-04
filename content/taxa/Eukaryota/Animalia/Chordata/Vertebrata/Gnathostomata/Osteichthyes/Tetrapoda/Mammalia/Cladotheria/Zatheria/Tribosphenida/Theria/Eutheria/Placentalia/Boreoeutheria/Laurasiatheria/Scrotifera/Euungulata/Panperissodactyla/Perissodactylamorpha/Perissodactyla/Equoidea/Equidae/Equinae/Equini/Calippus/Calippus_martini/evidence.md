---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Calippus martini
    rank: species
    sourceDatasetId: null
    name:
      zh: Calippus martini
      en: Calippus martini
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
            title: PBDB accepted record — Calippus martini
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44774&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44774; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44774
            selectedOccurrenceIds:
              - occ:184207
              - occ:184225
              - occ:184303
              - occ:184618
              - occ:184658
              - occ:184756
              - occ:184963
              - occ:184979
              - occ:185252
              - occ:185293
              - occ:185451
              - occ:185501
              - occ:185960
              - occ:186784
              - occ:186839
              - occ:187330
              - occ:187337
              - occ:187445
              - occ:187511
              - occ:187541
              - occ:187562
              - occ:187625
              - occ:187778
              - occ:187905
              - occ:188030
              - occ:188278
              - occ:188288
              - occ:188389
              - occ:188508
              - occ:648847
            selectedCollectionIds:
              - col:18042
              - col:18045
              - col:18063
              - col:18092
              - col:18095
              - col:18105
              - col:18130
              - col:18134
              - col:18171
              - col:18179
              - col:18200
              - col:18204
              - col:18244
              - col:18347
              - col:18355
              - col:18447
              - col:18449
              - col:18463
              - col:18481
              - col:18486
              - col:18492
              - col:18501
              - col:18536
              - col:18555
              - col:18569
              - col:18610
              - col:18611
              - col:18623
              - col:18645
              - col:70119
            sourceReferenceIds:
              - ref:1952
              - ref:1831
              - ref:3510
              - ref:3082
              - ref:1317
              - ref:1706
              - ref:6294
              - ref:1951
              - ref:2610
              - ref:1949
              - ref:23539
            originalIdentificationMappings:
              - occurrenceId: occ:184225
                originalIdentifiedName: Calippus martini n. sp.
                acceptedName: Calippus martini
                difference: null
              - occurrenceId: occ:184618
                originalIdentifiedName: Protohippus martini
                acceptedName: Calippus martini
                difference: recombined as
              - occurrenceId: occ:187511
                originalIdentifiedName: Pliohippus martini
                acceptedName: Calippus martini
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

# Calippus martini
