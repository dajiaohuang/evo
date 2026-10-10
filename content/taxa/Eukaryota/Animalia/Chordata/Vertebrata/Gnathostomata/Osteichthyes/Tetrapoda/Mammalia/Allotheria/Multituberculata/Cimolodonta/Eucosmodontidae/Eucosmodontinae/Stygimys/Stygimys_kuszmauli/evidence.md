---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Stygimys kuszmauli
    rank: species
    sourceDatasetId: null
    name:
      zh: Stygimys kuszmauli
      en: Stygimys kuszmauli
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
            title: PBDB accepted record — Stygimys kuszmauli
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51835&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51835; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51835
            selectedOccurrenceIds:
              - occ:163770
              - occ:163807
              - occ:163818
              - occ:163838
              - occ:163846
              - occ:163858
              - occ:163922
              - occ:163929
              - occ:163944
              - occ:164082
              - occ:164098
              - occ:164132
              - occ:164139
              - occ:164149
              - occ:164152
              - occ:164163
              - occ:164174
              - occ:164176
              - occ:164226
              - occ:164303
              - occ:164309
              - occ:164313
              - occ:164327
              - occ:164330
              - occ:164340
              - occ:164351
              - occ:164356
              - occ:164361
              - occ:164367
              - occ:164375
              - occ:164386
              - occ:164393
              - occ:164405
              - occ:164526
              - occ:641069
              - occ:1630929
              - occ:1630944
              - occ:1630967
            selectedCollectionIds:
              - col:14660
              - col:14663
              - col:14669
              - col:14671
              - col:14672
              - col:14676
              - col:14696
              - col:14698
              - col:14702
              - col:14740
              - col:14741
              - col:14749
              - col:14751
              - col:14753
              - col:14754
              - col:14756
              - col:14757
              - col:14758
              - col:14763
              - col:14771
              - col:14772
              - col:14773
              - col:14775
              - col:14776
              - col:14777
              - col:14778
              - col:14780
              - col:14781
              - col:14784
              - col:14785
              - col:14786
              - col:14787
              - col:14788
              - col:14808
              - col:14739
              - col:14743
              - col:231045
              - col:231047
            sourceReferenceIds:
              - ref:2255
              - ref:962
              - ref:1535
              - ref:19928
              - ref:85522
            originalIdentificationMappings:
              - occurrenceId: occ:163838
                originalIdentifiedName: Stygimys kuszmauli n. sp.
                acceptedName: Stygimys kuszmauli
                difference: null
              - occurrenceId: occ:164163
                originalIdentifiedName: Stygimys cupressus n. sp.
                acceptedName: Stygimys kuszmauli
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

# Stygimys kuszmauli
