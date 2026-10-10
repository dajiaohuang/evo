---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeogale sectoria
    rank: species
    sourceDatasetId: null
    name:
      zh: Palaeogale sectoria
      en: Palaeogale sectoria
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
            title: PBDB accepted record — Palaeogale sectoria
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48868&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48868; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48868
            selectedOccurrenceIds:
              - occ:179044
              - occ:179506
              - occ:179578
              - occ:179728
              - occ:179745
              - occ:180137
              - occ:1240826
              - occ:1310174
              - occ:1310175
              - occ:1310765
              - occ:1310766
              - occ:1315317
              - occ:1354162
              - occ:1354163
              - occ:1354164
              - occ:1354165
              - occ:1354180
            selectedCollectionIds:
              - col:17010
              - col:17082
              - col:17090
              - col:17104
              - col:17105
              - col:17180
              - col:163487
              - col:174759
              - col:53979
              - col:53978
              - col:183363
              - col:179140
              - col:36711
              - col:179177
              - col:167513
            sourceReferenceIds:
              - ref:3359
              - ref:6294
              - ref:1034
              - ref:53322
              - ref:57618
              - ref:57672
              - ref:58133
              - ref:54680
            originalIdentificationMappings:
              - occurrenceId: occ:179044
                originalIdentifiedName: Palaeogale infelix n. sp.
                acceptedName: Palaeogale sectoria
                difference: null
              - occurrenceId: occ:1310174
                originalIdentifiedName: Palaeogale ulysses
                acceptedName: Palaeogale sectoria
                difference: null
              - occurrenceId: occ:1310175
                originalIdentifiedName: Palaeogale parvulus
                acceptedName: Palaeogale sectoria
                difference: null
              - occurrenceId: occ:1310765
                originalIdentifiedName: Bunaelurus ulysses n. sp.
                acceptedName: Palaeogale sectoria
                difference: null
              - occurrenceId: occ:1310766
                originalIdentifiedName: Bunaelurus parvulus n. sp.
                acceptedName: Palaeogale sectoria
                difference: null
              - occurrenceId: occ:1354162
                originalIdentifiedName: Palaeogale sectoria n. sp.
                acceptedName: Palaeogale sectoria
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

# Palaeogale sectoria
