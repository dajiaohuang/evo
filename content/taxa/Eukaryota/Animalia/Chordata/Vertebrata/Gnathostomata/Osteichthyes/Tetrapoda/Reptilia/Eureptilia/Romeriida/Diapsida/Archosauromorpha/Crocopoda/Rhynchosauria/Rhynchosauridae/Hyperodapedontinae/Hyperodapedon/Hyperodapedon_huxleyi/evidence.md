---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyperodapedon huxleyi
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyperodapedon huxleyi
      en: Hyperodapedon huxleyi
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherReptiliaTaxonomy20261002
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherReptiliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Hyperodapedon huxleyi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=100723&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherReptiliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:100723; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:100723
            selectedOccurrenceIds:
              - occ:853401
              - occ:1088562
              - occ:1088565
              - occ:1089192
              - occ:1089193
              - occ:1089194
              - occ:1089195
              - occ:1494773
              - occ:1494781
            selectedCollectionIds:
              - col:94787
              - col:112285
              - col:98628
              - col:136902
              - col:136899
              - col:136903
              - col:207798
              - col:105292
            sourceReferenceIds:
              - ref:17140
              - ref:43742
              - ref:43773
              - ref:71703
            originalIdentificationMappings:
              - occurrenceId: occ:1088562
                originalIdentifiedName: Hyperodapedon huxleyi n. sp.
                acceptedName: Hyperodapedon huxleyi
                difference: null
              - occurrenceId: occ:1088565
                originalIdentifiedName: Paradapedon indicus n. sp.
                acceptedName: Hyperodapedon huxleyi
                difference: null
              - occurrenceId: occ:1089192
                originalIdentifiedName: Paradapedon huxleyi
                acceptedName: Hyperodapedon huxleyi
                difference: recombined as
              - occurrenceId: occ:1089193
                originalIdentifiedName: Paradapedon huxleyi
                acceptedName: Hyperodapedon huxleyi
                difference: recombined as
              - occurrenceId: occ:1089194
                originalIdentifiedName: Paradapedon huxleyi
                acceptedName: Hyperodapedon huxleyi
                difference: recombined as
              - occurrenceId: occ:1089195
                originalIdentifiedName: Paradapedon huxleyi
                acceptedName: Hyperodapedon huxleyi
                difference: recombined as
              - occurrenceId: occ:1494773
                originalIdentifiedName: Paradapedon huxleyi
                acceptedName: Hyperodapedon huxleyi
                difference: recombined as
              - occurrenceId: occ:1494781
                originalIdentifiedName: Paradapedon huxleyi
                acceptedName: Hyperodapedon huxleyi
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

# Hyperodapedon huxleyi
