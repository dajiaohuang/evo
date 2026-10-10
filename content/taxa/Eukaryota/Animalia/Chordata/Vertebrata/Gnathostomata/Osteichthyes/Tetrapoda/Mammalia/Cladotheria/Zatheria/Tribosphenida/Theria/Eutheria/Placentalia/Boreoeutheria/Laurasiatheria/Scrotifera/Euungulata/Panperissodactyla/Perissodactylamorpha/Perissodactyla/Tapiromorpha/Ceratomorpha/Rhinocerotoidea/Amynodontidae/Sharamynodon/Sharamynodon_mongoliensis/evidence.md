---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sharamynodon mongoliensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Sharamynodon mongoliensis
      en: Sharamynodon mongoliensis
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
            title: PBDB accepted record — Sharamynodon mongoliensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=332921&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:332921; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:332921
            selectedOccurrenceIds:
              - occ:422893
              - occ:431724
              - occ:431738
              - occ:1306546
              - occ:1306548
              - occ:1337274
              - occ:1338537
              - occ:1338868
            selectedCollectionIds:
              - col:41120
              - col:42197
              - col:42198
              - col:174962
              - col:73811
              - col:180389
              - col:28786
              - col:180777
            sourceReferenceIds:
              - ref:11242
              - ref:57191
              - ref:51841
              - ref:60032
              - ref:60056
            originalIdentificationMappings:
              - occurrenceId: occ:422893
                originalIdentifiedName: Amynodon mongoliensis
                acceptedName: Sharamynodon mongoliensis
                difference: recombined as
              - occurrenceId: occ:431724
                originalIdentifiedName: Amynodon mongoliensis
                acceptedName: Sharamynodon mongoliensis
                difference: recombined as
              - occurrenceId: occ:431738
                originalIdentifiedName: Amynodon mongoliensis
                acceptedName: Sharamynodon mongoliensis
                difference: recombined as
              - occurrenceId: occ:1306546
                originalIdentifiedName: Amynodon mongoliensis n. sp.
                acceptedName: Sharamynodon mongoliensis
                difference: recombined as
              - occurrenceId: occ:1306548
                originalIdentifiedName: Amynodon mongoliensis
                acceptedName: Sharamynodon mongoliensis
                difference: recombined as
              - occurrenceId: occ:1338537
                originalIdentifiedName: Amynodon mongoliensis
                acceptedName: Sharamynodon mongoliensis
                difference: recombined as
              - occurrenceId: occ:1338868
                originalIdentifiedName: Amynodon mongoliensis
                acceptedName: Sharamynodon mongoliensis
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

# Sharamynodon mongoliensis
