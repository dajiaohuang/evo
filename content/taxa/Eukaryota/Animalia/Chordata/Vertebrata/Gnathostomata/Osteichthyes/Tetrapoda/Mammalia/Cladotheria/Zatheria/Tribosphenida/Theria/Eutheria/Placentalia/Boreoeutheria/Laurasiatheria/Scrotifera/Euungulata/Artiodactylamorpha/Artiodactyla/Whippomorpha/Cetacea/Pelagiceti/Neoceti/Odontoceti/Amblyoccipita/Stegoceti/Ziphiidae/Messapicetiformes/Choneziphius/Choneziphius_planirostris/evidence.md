---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Choneziphius planirostris
    rank: species
    sourceDatasetId: null
    name:
      zh: Choneziphius planirostris
      en: Choneziphius planirostris
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
            title: PBDB accepted record — Choneziphius planirostris
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=67993&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:67993; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:67993
            selectedOccurrenceIds:
              - occ:481532
              - occ:481533
              - occ:481534
              - occ:528202
              - occ:529516
              - occ:545723
              - occ:622545
              - occ:622621
              - occ:788350
              - occ:788351
              - occ:802471
              - occ:1500912
              - occ:1637307
            selectedCollectionIds:
              - col:48093
              - col:53929
              - col:54102
              - col:57138
              - col:67015
              - col:67025
              - col:47465
              - col:85153
              - col:53889
              - col:208996
              - col:232082
            sourceReferenceIds:
              - ref:12874
              - ref:13661
              - ref:14544
              - ref:14620
              - ref:15444
              - ref:19106
              - ref:14624
              - ref:29207
              - ref:72139
              - ref:14621
            originalIdentificationMappings:
              - occurrenceId: occ:481533
                originalIdentifiedName: Choneziphius planus
                acceptedName: Choneziphius planirostris
                difference: null
              - occurrenceId: occ:481534
                originalIdentifiedName: Choneziphius packardi n. sp.
                acceptedName: Choneziphius planirostris
                difference: null
              - occurrenceId: occ:529516
                originalIdentifiedName: Ziphius planirostris
                acceptedName: Choneziphius planirostris
                difference: recombined as
              - occurrenceId: occ:545723
                originalIdentifiedName: Choneziphius (Ziphius) planirostris
                acceptedName: Choneziphius planirostris
                difference: recombined as
              - occurrenceId: occ:788350
                originalIdentifiedName: Ziphius cuvieri n. sp.
                acceptedName: Choneziphius planirostris
                difference: null
              - occurrenceId: occ:788351
                originalIdentifiedName: Ziphius planus n. sp.
                acceptedName: Choneziphius planirostris
                difference: null
              - occurrenceId: occ:1637307
                originalIdentifiedName: Ziphius planirostris n. sp.
                acceptedName: Choneziphius planirostris
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

# Choneziphius planirostris
