---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tapirus (Megatapirus) augustus
    rank: species
    sourceDatasetId: null
    name:
      zh: Tapirus (Megatapirus) augustus
      en: Tapirus (Megatapirus) augustus
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
            title: PBDB accepted record — Tapirus (Megatapirus) augustus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=192846&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:192846; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:192846
            selectedOccurrenceIds:
              - occ:150056
              - occ:366201
              - occ:385585
              - occ:385599
              - occ:416079
              - occ:502591
              - occ:835697
              - occ:836050
              - occ:997986
              - occ:1601102
              - occ:1660671
              - occ:1660710
              - occ:1660845
            selectedCollectionIds:
              - col:13293
              - col:34679
              - col:36729
              - col:36730
              - col:40341
              - col:51100
              - col:92781
              - col:92787
              - col:120834
              - col:226365
              - col:235737
              - col:235740
              - col:235746
            sourceReferenceIds:
              - ref:4412
              - ref:9183
              - ref:9836
              - ref:10880
              - ref:13623
              - ref:31293
              - ref:31309
              - ref:38591
              - ref:68936
              - ref:89067
              - ref:89086
            originalIdentificationMappings:
              - occurrenceId: occ:150056
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:366201
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:385585
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:385599
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:416079
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:502591
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:836050
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:997986
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:1601102
                originalIdentifiedName: Tapiris (Megatapirus) augustus n. sp.
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:1660671
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:1660710
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
              - occurrenceId: occ:1660845
                originalIdentifiedName: Megatapirus augustus
                acceptedName: Tapirus (Megatapirus) augustus
                difference: variant of
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

# Tapirus (Megatapirus) augustus
