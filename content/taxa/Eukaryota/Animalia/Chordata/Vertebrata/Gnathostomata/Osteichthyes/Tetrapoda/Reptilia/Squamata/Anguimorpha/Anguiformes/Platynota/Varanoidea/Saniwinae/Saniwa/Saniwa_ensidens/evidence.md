---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Saniwa ensidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Saniwa ensidens
      en: Saniwa ensidens
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbSquamataTaxonomy20261002
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
        - referenceId: ref-7cfbe846-2f31-41b9-85e2-1587c659364b
          metadataVariant: 0
          sourceKey: pbdbSquamataTaxonomy20261002
          usage:
            title: PBDB accepted record — Saniwa ensidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=67591&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-7cfbe846-2f31-41b9-85e2-1587c659364b
          metadataVariant: 0
          sourceKey: pbdbSquamataOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:67591; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:67591
            selectedOccurrenceIds:
              - occ:286286
              - occ:286365
              - occ:521310
              - occ:737701
              - occ:787654
              - occ:787655
              - occ:929639
              - occ:1276747
              - occ:1276763
              - occ:1276790
              - occ:1276856
              - occ:1276857
              - occ:1334989
              - occ:1334990
              - occ:1334991
              - occ:1334992
              - occ:1335019
              - occ:1335020
              - occ:1335021
              - occ:1335022
              - occ:1335023
              - occ:1335024
              - occ:1335025
              - occ:1335026
              - occ:1335027
              - occ:1335028
              - occ:1335029
              - occ:1370003
              - occ:1370010
              - occ:1642558
            selectedCollectionIds:
              - col:15837
              - col:27269
              - col:16431
              - col:16665
              - col:15853
              - col:85026
              - col:106325
              - col:16706
              - col:16786
              - col:16791
              - col:16702
              - col:16705
              - col:99835
              - col:16228
              - col:16210
              - col:16136
              - col:81455
              - col:179978
              - col:118469
              - col:16234
              - col:16278
              - col:179979
              - col:16606
              - col:16211
              - col:186899
              - col:186901
              - col:16654
            sourceReferenceIds:
              - ref:7542
              - ref:59968
              - ref:696
              - ref:28570
              - ref:11982
              - ref:1681
              - ref:14538
              - ref:69854
              - ref:3339
              - ref:87093
            originalIdentificationMappings:
              - occurrenceId: occ:521310
                originalIdentifiedName: Saniwa grandis
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:737701
                originalIdentifiedName: Saniwa brooksi n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:929639
                originalIdentifiedName: Saniwa major n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1276747
                originalIdentifiedName: Saniwa brooksi
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1276763
                originalIdentifiedName: Saniwa brooksi
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1276790
                originalIdentifiedName: Saniwa brooksi
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1276856
                originalIdentifiedName: Saniwa brooksi
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1276857
                originalIdentifiedName: Saniwa brooksi
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1334989
                originalIdentifiedName: Saniwa ensidens n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1334990
                originalIdentifiedName: Thinosaurus leptodus n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335019
                originalIdentifiedName: Thinosaurus agilis n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335020
                originalIdentifiedName: Thinosaurus paucidens n. gen. n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335021
                originalIdentifiedName: Thinosaurus paucidens
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335022
                originalIdentifiedName: Thinosaurus grandis n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335023
                originalIdentifiedName: Saniwa paucidens
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335024
                originalIdentifiedName: Thinosaurus crassus n. sp.
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335025
                originalIdentifiedName: Saniwa crassa
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335026
                originalIdentifiedName: Saniwa crassa
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335027
                originalIdentifiedName: Saniwa crassa
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335028
                originalIdentifiedName: Saniwa crassa
                acceptedName: Saniwa ensidens
                difference: null
              - occurrenceId: occ:1335029
                originalIdentifiedName: Saniwa crassa
                acceptedName: Saniwa ensidens
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

# Saniwa ensidens
