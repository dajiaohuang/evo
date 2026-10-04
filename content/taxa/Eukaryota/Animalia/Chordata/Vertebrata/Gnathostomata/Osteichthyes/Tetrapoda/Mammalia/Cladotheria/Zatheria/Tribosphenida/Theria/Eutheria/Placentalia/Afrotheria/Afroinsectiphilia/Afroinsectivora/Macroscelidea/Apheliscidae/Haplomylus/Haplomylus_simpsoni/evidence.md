---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Haplomylus simpsoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Haplomylus simpsoni
      en: Haplomylus simpsoni
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
            title: PBDB accepted record — Haplomylus simpsoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46797&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46797; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46797
            selectedOccurrenceIds:
              - occ:166881
              - occ:166908
              - occ:166925
              - occ:166966
              - occ:167032
              - occ:167049
              - occ:167075
              - occ:167085
              - occ:167095
              - occ:167138
              - occ:167145
              - occ:167197
              - occ:167207
              - occ:167220
              - occ:167252
              - occ:167270
              - occ:167304
              - occ:167318
              - occ:167337
              - occ:167416
              - occ:167439
              - occ:167451
              - occ:167476
              - occ:167490
              - occ:167505
              - occ:167512
              - occ:167522
              - occ:167531
              - occ:167566
              - occ:167587
              - occ:167592
              - occ:167613
              - occ:167647
              - occ:167664
              - occ:167685
              - occ:752584
              - occ:1193118
              - occ:1303038
            selectedCollectionIds:
              - col:15084
              - col:15085
              - col:15087
              - col:15091
              - col:15097
              - col:15099
              - col:15102
              - col:15103
              - col:15104
              - col:15110
              - col:15111
              - col:15120
              - col:15122
              - col:15124
              - col:15129
              - col:15132
              - col:15139
              - col:15142
              - col:15147
              - col:15156
              - col:15159
              - col:15160
              - col:15165
              - col:15167
              - col:15170
              - col:15171
              - col:15172
              - col:15174
              - col:15181
              - col:15184
              - col:15185
              - col:15189
              - col:15193
              - col:15198
              - col:15202
              - col:80579
              - col:154182
              - col:174227
            sourceReferenceIds:
              - ref:2953
              - ref:2159
              - ref:27112
              - ref:49988
              - ref:56865
            originalIdentificationMappings: []
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

# Haplomylus simpsoni
