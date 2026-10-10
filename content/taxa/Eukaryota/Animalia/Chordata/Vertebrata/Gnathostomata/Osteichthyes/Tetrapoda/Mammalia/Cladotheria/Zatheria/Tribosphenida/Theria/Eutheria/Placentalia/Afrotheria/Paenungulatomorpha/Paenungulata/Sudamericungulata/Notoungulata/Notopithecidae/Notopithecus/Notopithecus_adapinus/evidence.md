---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Notopithecus adapinus
    rank: species
    sourceDatasetId: null
    name:
      zh: Notopithecus adapinus
      en: Notopithecus adapinus
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
            title: PBDB accepted record — Notopithecus adapinus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=65749&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:65749; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:65749
            selectedOccurrenceIds:
              - occ:493750
              - occ:495970
              - occ:1312658
              - occ:1312672
              - occ:1312699
              - occ:1312740
              - occ:1312801
              - occ:1312823
              - occ:1312824
              - occ:1312825
              - occ:1312826
              - occ:1312827
              - occ:1312883
              - occ:1313665
              - occ:1313710
              - occ:1313716
              - occ:1313928
              - occ:1313929
              - occ:1313939
              - occ:1313952
              - occ:1315002
              - occ:1315189
              - occ:1369218
            selectedCollectionIds:
              - col:49902
              - col:50066
              - col:176163
              - col:176164
              - col:176168
              - col:176175
              - col:13779
              - col:176181
              - col:176182
              - col:176185
              - col:176186
              - col:176192
              - col:176178
              - col:176285
              - col:176304
              - col:176494
              - col:176491
            sourceReferenceIds:
              - ref:13081
              - ref:13447
              - ref:57836
              - ref:36444
              - ref:54480
              - ref:10312
              - ref:58073
              - ref:62628
            originalIdentificationMappings:
              - occurrenceId: occ:1312801
                originalIdentifiedName: Notopithecus adapinus n. gen. n. sp.
                acceptedName: Notopithecus adapinus
                difference: null
              - occurrenceId: occ:1313665
                originalIdentifiedName: Adpithecus subtenuis n. sp.
                acceptedName: Notopithecus adapinus
                difference: null
              - occurrenceId: occ:1313710
                originalIdentifiedName: Infrapithecus diversus n. sp.
                acceptedName: Notopithecus adapinus
                difference: null
              - occurrenceId: occ:1313716
                originalIdentifiedName: Epipithecus confluens n. sp.
                acceptedName: Notopithecus adapinus
                difference: null
              - occurrenceId: occ:1313928
                originalIdentifiedName: Adpithecus secans
                acceptedName: Notopithecus adapinus
                difference: null
              - occurrenceId: occ:1313929
                originalIdentifiedName: Adpithecus secans
                acceptedName: Notopithecus adapinus
                difference: null
              - occurrenceId: occ:1313939
                originalIdentifiedName: Adpithecus secans n. sp.
                acceptedName: Notopithecus adapinus
                difference: null
              - occurrenceId: occ:1313952
                originalIdentifiedName: Antepithecus gradatus n. sp.
                acceptedName: Notopithecus adapinus
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

# Notopithecus adapinus
