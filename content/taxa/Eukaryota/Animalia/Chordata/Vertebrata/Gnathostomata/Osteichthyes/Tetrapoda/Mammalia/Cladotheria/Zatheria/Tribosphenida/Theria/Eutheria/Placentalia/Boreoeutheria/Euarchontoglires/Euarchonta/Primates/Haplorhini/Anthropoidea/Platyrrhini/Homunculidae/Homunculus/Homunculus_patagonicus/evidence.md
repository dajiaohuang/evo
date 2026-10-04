---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Homunculus patagonicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Homunculus patagonicus
      en: Homunculus patagonicus
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
            title: PBDB accepted record — Homunculus patagonicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=242914&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:242914; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:242914
            selectedOccurrenceIds:
              - occ:802740
              - occ:1124826
              - occ:1316282
              - occ:1316283
              - occ:1316284
              - occ:1316285
              - occ:1316286
              - occ:1316287
              - occ:1316288
              - occ:1316289
              - occ:1316309
              - occ:1479742
              - occ:1506634
              - occ:1512421
              - occ:1512422
            selectedCollectionIds:
              - col:87314
              - col:142533
              - col:176602
              - col:27313
              - col:176570
              - col:176563
              - col:176581
              - col:176603
              - col:176576
              - col:176593
              - col:176590
            sourceReferenceIds:
              - ref:29404
              - ref:58226
              - ref:58227
              - ref:70785
              - ref:72535
              - ref:72898
              - ref:58229
            originalIdentificationMappings:
              - occurrenceId: occ:802740
                originalIdentifiedName: Killikaike blakei n. gen. n. sp.
                acceptedName: Homunculus patagonicus
                difference: null
              - occurrenceId: occ:1124826
                originalIdentifiedName: Homunculus patagonicus n. gen. n. sp.
                acceptedName: Homunculus patagonicus
                difference: null
              - occurrenceId: occ:1316284
                originalIdentifiedName: Anthropops perfectus n. gen. n. sp.
                acceptedName: Homunculus patagonicus
                difference: null
              - occurrenceId: occ:1316286
                originalIdentifiedName: Pitheculus australis n. gen. n. sp.
                acceptedName: Homunculus patagonicus
                difference: null
              - occurrenceId: occ:1316288
                originalIdentifiedName: Stilotherium grande n. sp.
                acceptedName: Homunculus patagonicus
                difference: null
              - occurrenceId: occ:1512421
                originalIdentifiedName: Ecphantodon ceboides
                acceptedName: Homunculus patagonicus
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

# Homunculus patagonicus
