---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Prosynthetoceras texanus
    rank: species
    sourceDatasetId: null
    name:
      zh: Prosynthetoceras texanus
      en: Prosynthetoceras texanus
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
            title: PBDB accepted record — Prosynthetoceras texanus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45938&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45938; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45938
            selectedOccurrenceIds:
              - occ:187635
              - occ:187971
              - occ:188135
              - occ:188198
              - occ:188246
              - occ:188312
              - occ:188421
              - occ:188462
              - occ:188466
              - occ:188497
              - occ:188547
              - occ:708374
              - occ:1207808
              - occ:1207810
              - occ:1501900
            selectedCollectionIds:
              - col:18503
              - col:18561
              - col:18586
              - col:18597
              - col:18604
              - col:18615
              - col:18627
              - col:18635
              - col:18636
              - col:18642
              - col:18651
              - col:75945
              - col:18626
            sourceReferenceIds:
              - ref:9614
              - ref:2739
              - ref:2371
              - ref:2690
              - ref:2737
              - ref:6239
              - ref:51367
              - ref:6559
            originalIdentificationMappings:
              - occurrenceId: occ:188198
                originalIdentifiedName: Synthetoceras australis
                acceptedName: Prosynthetoceras texanus
                difference: null
              - occurrenceId: occ:1207808
                originalIdentifiedName: Dromomeryx texanus n. sp.
                acceptedName: Prosynthetoceras texanus
                difference: recombined as
              - occurrenceId: occ:1207810
                originalIdentifiedName: Merycodus grandis n. sp.
                acceptedName: Prosynthetoceras texanus
                difference: null
              - occurrenceId: occ:1501900
                originalIdentifiedName: Synthetoceras (Prosynthetoceras) douglasi n. sp.
                acceptedName: Prosynthetoceras texanus
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

# Prosynthetoceras texanus
