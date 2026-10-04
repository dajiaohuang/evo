---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Aelurodon ferox
    rank: species
    sourceDatasetId: null
    name:
      zh: Aelurodon ferox
      en: Aelurodon ferox
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
            title: PBDB accepted record — Aelurodon ferox
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43762&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43762; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43762
            selectedOccurrenceIds:
              - occ:184113
              - occ:184249
              - occ:184372
              - occ:184428
              - occ:184450
              - occ:184788
              - occ:184840
              - occ:184872
              - occ:184999
              - occ:185094
              - occ:185159
              - occ:185183
              - occ:185241
              - occ:185274
              - occ:185360
              - occ:185369
              - occ:185514
              - occ:185594
              - occ:185659
              - occ:185928
              - occ:186014
              - occ:186061
              - occ:186132
              - occ:186134
              - occ:186165
              - occ:186171
              - occ:186210
              - occ:186249
              - occ:186256
              - occ:186846
              - occ:186911
              - occ:187047
              - occ:187053
              - occ:187086
              - occ:187134
              - occ:187228
              - occ:187419
              - occ:187450
              - occ:187453
              - occ:188424
              - occ:188468
              - occ:191402
              - occ:192366
              - occ:192370
              - occ:192459
              - occ:1386624
            selectedCollectionIds:
              - col:18031
              - col:18051
              - col:18068
              - col:18075
              - col:18077
              - col:18109
              - col:18120
              - col:18124
              - col:18138
              - col:18152
              - col:18162
              - col:18164
              - col:18167
              - col:18176
              - col:18188
              - col:18192
              - col:18206
              - col:18209
              - col:18217
              - col:18242
              - col:18248
              - col:18260
              - col:18266
              - col:18267
              - col:18270
              - col:18271
              - col:18275
              - col:18281
              - col:18282
              - col:18357
              - col:18361
              - col:18399
              - col:18405
              - col:18411
              - col:18422
              - col:18442
              - col:18461
              - col:18464
              - col:18466
              - col:18628
              - col:18637
              - col:19287
              - col:19519
              - col:19520
              - col:19535
              - col:190543
            sourceReferenceIds:
              - ref:3510
              - ref:3558
              - ref:3418
              - ref:3380
              - ref:3378
              - ref:59118
            originalIdentificationMappings:
              - occurrenceId: occ:186171
                originalIdentifiedName: Tephrocyon marshi n. sp.
                acceptedName: Aelurodon ferox
                difference: null
              - occurrenceId: occ:192459
                originalIdentifiedName: Canis wheelerianus n. sp.
                acceptedName: Aelurodon ferox
                difference: null
              - occurrenceId: occ:1386624
                originalIdentifiedName: Aelurodon ferox n. gen. n. sp.
                acceptedName: Aelurodon ferox
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

# Aelurodon ferox
