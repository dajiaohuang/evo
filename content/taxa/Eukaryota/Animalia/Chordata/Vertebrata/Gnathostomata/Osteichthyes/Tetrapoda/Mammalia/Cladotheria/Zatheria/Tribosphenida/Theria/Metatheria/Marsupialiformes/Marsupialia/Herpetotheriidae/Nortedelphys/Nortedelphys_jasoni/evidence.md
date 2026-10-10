---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nortedelphys jasoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Nortedelphys jasoni
      en: Nortedelphys jasoni
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
            title: PBDB accepted record — Nortedelphys jasoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43918&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43918; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43918
            selectedOccurrenceIds:
              - occ:163092
              - occ:163253
              - occ:163286
              - occ:163405
              - occ:163612
              - occ:163728
              - occ:837743
              - occ:837744
              - occ:837745
              - occ:837746
              - occ:837747
              - occ:837748
              - occ:866689
            selectedCollectionIds:
              - col:14516
              - col:14549
              - col:14558
              - col:14584
              - col:14630
              - col:14655
              - col:14624
              - col:14585
              - col:14519
              - col:14566
              - col:14604
              - col:96083
            sourceReferenceIds:
              - ref:3310
              - ref:2036
              - ref:1541
              - ref:31410
              - ref:32620
            originalIdentificationMappings:
              - occurrenceId: occ:163092
                originalIdentifiedName: Alphadon jasoni
                acceptedName: Nortedelphys jasoni
                difference: recombined as
              - occurrenceId: occ:163253
                originalIdentifiedName: Alphadon jasoni
                acceptedName: Nortedelphys jasoni
                difference: recombined as
              - occurrenceId: occ:163286
                originalIdentifiedName: Alphadon jasoni n. sp.
                acceptedName: Nortedelphys jasoni
                difference: recombined as
              - occurrenceId: occ:163405
                originalIdentifiedName: Alphadon jasoni
                acceptedName: Nortedelphys jasoni
                difference: recombined as
              - occurrenceId: occ:163612
                originalIdentifiedName: Alphadon jasoni
                acceptedName: Nortedelphys jasoni
                difference: recombined as
              - occurrenceId: occ:163728
                originalIdentifiedName: Alphadon jasoni
                acceptedName: Nortedelphys jasoni
                difference: recombined as
              - occurrenceId: occ:837743
                originalIdentifiedName: Nortedelphys intermedius n. sp.
                acceptedName: Nortedelphys jasoni
                difference: null
              - occurrenceId: occ:837744
                originalIdentifiedName: Nortedelphys intermedius
                acceptedName: Nortedelphys jasoni
                difference: null
              - occurrenceId: occ:837745
                originalIdentifiedName: Nortedelphys intermedius
                acceptedName: Nortedelphys jasoni
                difference: null
              - occurrenceId: occ:837746
                originalIdentifiedName: Nortedelphys intermedius
                acceptedName: Nortedelphys jasoni
                difference: null
              - occurrenceId: occ:837747
                originalIdentifiedName: Nortedelphys intermedius
                acceptedName: Nortedelphys jasoni
                difference: null
              - occurrenceId: occ:837748
                originalIdentifiedName: Nortedelphys intermedius
                acceptedName: Nortedelphys jasoni
                difference: null
              - occurrenceId: occ:866689
                originalIdentifiedName: Alphadon jasoni
                acceptedName: Nortedelphys jasoni
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

# Nortedelphys jasoni
