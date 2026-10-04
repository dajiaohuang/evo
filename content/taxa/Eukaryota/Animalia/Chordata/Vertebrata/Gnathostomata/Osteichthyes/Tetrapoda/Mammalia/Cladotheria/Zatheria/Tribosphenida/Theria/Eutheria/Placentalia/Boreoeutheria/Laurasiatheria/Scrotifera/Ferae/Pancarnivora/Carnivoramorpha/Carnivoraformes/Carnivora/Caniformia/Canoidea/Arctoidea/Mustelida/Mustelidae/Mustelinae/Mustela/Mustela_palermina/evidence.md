---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mustela palermina
    rank: species
    sourceDatasetId: null
    name:
      zh: Mustela palermina
      en: Mustela palermina
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
            title: PBDB accepted record — Mustela palermina
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=376896&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:376896; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:376896
            selectedOccurrenceIds:
              - occ:340886
              - occ:341752
              - occ:356212
              - occ:356295
              - occ:357130
              - occ:357188
              - occ:357219
              - occ:368520
              - occ:368593
              - occ:370433
              - occ:373593
              - occ:374170
              - occ:374266
              - occ:375520
              - occ:375714
              - occ:375801
              - occ:375829
              - occ:375858
              - occ:375894
              - occ:375920
              - occ:381406
              - occ:487327
              - occ:2048232
            selectedCollectionIds:
              - col:32145
              - col:32195
              - col:33973
              - col:33974
              - col:33975
              - col:34009
              - col:34010
              - col:34870
              - col:34872
              - col:35076
              - col:35359
              - col:35369
              - col:35371
              - col:35442
              - col:35459
              - col:35464
              - col:35465
              - col:35466
              - col:35467
              - col:35468
              - col:36214
              - col:48889
              - col:276686
            sourceReferenceIds:
              - ref:8655
              - ref:9345
              - ref:9424
              - ref:9534
              - ref:9643
              - ref:12802
              - ref:93840
            originalIdentificationMappings:
              - occurrenceId: occ:340886
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:341752
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:356212
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:356295
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:357130
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:357188
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:357219
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:368520
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:368593
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:370433
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:373593
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:374170
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:374266
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:375520
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:375714
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:375801
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:375829
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:375858
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:375894
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:375920
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:381406
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:487327
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
              - occurrenceId: occ:2048232
                originalIdentifiedName: Mustela palerminea
                acceptedName: Mustela palermina
                difference: misspelling of
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

# Mustela palermina
