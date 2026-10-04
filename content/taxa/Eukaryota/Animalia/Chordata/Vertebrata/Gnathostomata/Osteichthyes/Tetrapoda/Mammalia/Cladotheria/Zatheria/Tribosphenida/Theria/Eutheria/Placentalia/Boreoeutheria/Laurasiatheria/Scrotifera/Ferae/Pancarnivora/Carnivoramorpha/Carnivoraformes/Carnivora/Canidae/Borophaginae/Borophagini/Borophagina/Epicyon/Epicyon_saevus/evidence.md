---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Epicyon saevus
    rank: species
    sourceDatasetId: null
    name:
      zh: Epicyon saevus
      en: Epicyon saevus
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
            title: PBDB accepted record — Epicyon saevus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44881&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44881; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44881
            selectedOccurrenceIds:
              - occ:184047
              - occ:184132
              - occ:184149
              - occ:184201
              - occ:184266
              - occ:184291
              - occ:184373
              - occ:184383
              - occ:184563
              - occ:184652
              - occ:184834
              - occ:184975
              - occ:184986
              - occ:185250
              - occ:185402
              - occ:185446
              - occ:185479
              - occ:185634
              - occ:185735
              - occ:185803
              - occ:185833
              - occ:185949
              - occ:185971
              - occ:185980
              - occ:186049
              - occ:186055
              - occ:186353
              - occ:186404
              - occ:186411
              - occ:186482
              - occ:186489
              - occ:186591
              - occ:186672
              - occ:186712
              - occ:186714
              - occ:186805
              - occ:186830
              - occ:186848
              - occ:186953
              - occ:186970
              - occ:187046
              - occ:187113
              - occ:187172
              - occ:187322
              - occ:187325
              - occ:187409
              - occ:187461
              - occ:187585
              - occ:187939
              - occ:188785
              - occ:189398
              - occ:190100
              - occ:190348
              - occ:190778
              - occ:190792
              - occ:191772
              - occ:191783
              - occ:191821
              - occ:192462
              - occ:192607
              - occ:192614
              - occ:1380883
              - occ:1386619
            selectedCollectionIds:
              - col:18024
              - col:18033
              - col:18034
              - col:18042
              - col:18059
              - col:18063
              - col:18069
              - col:18072
              - col:18087
              - col:18095
              - col:18118
              - col:18134
              - col:18135
              - col:18171
              - col:18196
              - col:18200
              - col:18202
              - col:18214
              - col:18222
              - col:18227
              - col:18233
              - col:18244
              - col:18245
              - col:18246
              - col:18256
              - col:18258
              - col:18293
              - col:18299
              - col:18301
              - col:18308
              - col:18309
              - col:18323
              - col:18327
              - col:18335
              - col:18336
              - col:18352
              - col:18355
              - col:18358
              - col:18374
              - col:18378
              - col:18398
              - col:18415
              - col:18431
              - col:18446
              - col:18447
              - col:18458
              - col:18468
              - col:18496
              - col:18560
              - col:18731
              - col:18835
              - col:18987
              - col:19035
              - col:19093
              - col:19095
              - col:19383
              - col:19384
              - col:19391
              - col:19535
              - col:19551
              - col:19552
              - col:189022
              - col:190543
            sourceReferenceIds:
              - ref:3558
              - ref:6294
              - ref:1720
              - ref:1032
              - ref:6266
              - ref:2647
              - ref:3627
              - ref:59118
            originalIdentificationMappings:
              - occurrenceId: occ:184291
                originalIdentifiedName: Aelurodon inflatus n. sp.
                acceptedName: Epicyon saevus
                difference: null
              - occurrenceId: occ:1386619
                originalIdentifiedName: Canis saevus n. sp.
                acceptedName: Epicyon saevus
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

# Epicyon saevus
