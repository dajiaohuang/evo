---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Prodeinotherium hobleyi
    rank: species
    sourceDatasetId: null
    name:
      zh: Prodeinotherium hobleyi
      en: Prodeinotherium hobleyi
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
            title: PBDB accepted record — Prodeinotherium hobleyi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=104729&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:104729; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:104729
            selectedOccurrenceIds:
              - occ:213551
              - occ:218534
              - occ:221634
              - occ:221648
              - occ:226907
              - occ:226938
              - occ:226971
              - occ:227160
              - occ:227178
              - occ:400241
              - occ:504073
              - occ:651160
              - occ:651168
              - occ:655667
              - occ:1362161
              - occ:1394782
              - occ:1703242
            selectedCollectionIds:
              - col:21855
              - col:22303
              - col:21338
              - col:21339
              - col:22069
              - col:22070
              - col:22071
              - col:22077
              - col:22078
              - col:38060
              - col:51190
              - col:70421
              - col:70420
              - col:70808
              - col:146600
              - col:192070
              - col:241377
            sourceReferenceIds:
              - ref:4922
              - ref:5569
              - ref:4653
              - ref:5302
              - ref:5322
              - ref:4656
              - ref:5310
              - ref:10163
              - ref:13638
              - ref:23618
              - ref:23747
              - ref:62155
              - ref:64938
              - ref:92503
            originalIdentificationMappings:
              - occurrenceId: occ:1362161
                originalIdentifiedName: Dinotherium hobleyi
                acceptedName: Prodeinotherium hobleyi
                difference: recombined as
              - occurrenceId: occ:1394782
                originalIdentifiedName: Dinotherium hobleyi
                acceptedName: Prodeinotherium hobleyi
                difference: recombined as
              - occurrenceId: occ:1703242
                originalIdentifiedName: Dinotherium hobleyi
                acceptedName: Prodeinotherium hobleyi
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

# Prodeinotherium hobleyi
