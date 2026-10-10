---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Promerycochoerus superbus
    rank: species
    sourceDatasetId: null
    name:
      zh: Promerycochoerus superbus
      en: Promerycochoerus superbus
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
            title: PBDB accepted record — Promerycochoerus superbus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49398&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49398; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49398
            selectedOccurrenceIds:
              - occ:181183
              - occ:181191
              - occ:181194
              - occ:181196
              - occ:181206
              - occ:181214
              - occ:181219
              - occ:181322
              - occ:181438
              - occ:181609
              - occ:181793
              - occ:182016
              - occ:182409
              - occ:182412
              - occ:182426
              - occ:182527
              - occ:182564
              - occ:838545
              - occ:838548
              - occ:838555
              - occ:838566
              - occ:993003
              - occ:993006
              - occ:1366268
              - occ:1630186
              - occ:1630189
              - occ:2074792
              - occ:2074795
              - occ:2074805
              - occ:2074810
              - occ:2074826
              - occ:2074831
              - occ:2074832
            selectedCollectionIds:
              - col:17444
              - col:17447
              - col:17448
              - col:17449
              - col:17451
              - col:17452
              - col:17455
              - col:17478
              - col:17506
              - col:17528
              - col:17547
              - col:17603
              - col:17688
              - col:17690
              - col:17696
              - col:17722
              - col:17727
              - col:93079
              - col:93080
              - col:119840
              - col:119841
              - col:157001
              - col:180202
              - col:237946
              - col:212628
              - col:212629
              - col:279381
              - col:279397
              - col:279305
              - col:279380
            sourceReferenceIds:
              - ref:6294
              - ref:2356
              - ref:3637
              - ref:31438
              - ref:3065
              - ref:38401
              - ref:3067
              - ref:53289
              - ref:95967
            originalIdentificationMappings:
              - occurrenceId: occ:181183
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:181191
                originalIdentifiedName: Promerycochoerus montanus
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:181194
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:181196
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:181206
                originalIdentifiedName: Promerycochoerus montanus
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:181214
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:181219
                originalIdentifiedName: Promerycochoerus montanus
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:181322
                originalIdentifiedName: Promerycochoerus montanus
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:181438
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:181609
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:181793
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:182016
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:182409
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:182412
                originalIdentifiedName: Promerycochoerus montanus
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:182426
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:182527
                originalIdentifiedName: Promerycochoerus latidens
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:182564
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:838545
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:838548
                originalIdentifiedName: '"Promerycochoerus" macrostegus'
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:838555
                originalIdentifiedName: '"Promerycochoerus" macrostegus'
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:838566
                originalIdentifiedName: Merycochoerus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:1366268
                originalIdentifiedName: Superdesmatochoerus microcephalus
                acceptedName: Promerycochoerus superbus
                difference: null
              - occurrenceId: occ:1630186
                originalIdentifiedName: Eucrotaphus superbus
                acceptedName: Promerycochoerus superbus
                difference: recombined as
              - occurrenceId: occ:1630189
                originalIdentifiedName: Merycochoerus temporalis
                acceptedName: Promerycochoerus superbus
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

# Promerycochoerus superbus
