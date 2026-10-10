---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Maxschlosseria praeterita
    rank: species
    sourceDatasetId: null
    name:
      zh: Maxschlosseria praeterita
      en: Maxschlosseria praeterita
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
            title: PBDB accepted record — Maxschlosseria praeterita
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=315542&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:315542; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:315542
            selectedOccurrenceIds:
              - occ:1312687
              - occ:1312688
              - occ:1312689
              - occ:1312690
              - occ:1312721
              - occ:1312752
              - occ:1312769
              - occ:1313655
              - occ:1313741
              - occ:1313742
              - occ:1313744
              - occ:1313745
              - occ:1313746
              - occ:1313747
              - occ:1313748
              - occ:1313751
              - occ:1313920
              - occ:1313923
              - occ:1313924
            selectedCollectionIds:
              - col:176165
              - col:44956
              - col:176170
              - col:176172
              - col:13779
              - col:176164
              - col:176285
            sourceReferenceIds:
              - ref:57836
              - ref:10312
              - ref:54301
            originalIdentificationMappings:
              - occurrenceId: occ:1312688
                originalIdentifiedName: Maxschlosseria minima
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1312689
                originalIdentifiedName: Maxschlosseria rusticula
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1312690
                originalIdentifiedName: Maxschlosseria consumata
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1312721
                originalIdentifiedName: Maxschlosseria consumata
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1312752
                originalIdentifiedName: Maxschlosseria consumata
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1312769
                originalIdentifiedName: Maxschlosseria minuta
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313655
                originalIdentifiedName: Eostylops obliquatus n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313741
                originalIdentifiedName: Antepithecus plexostephanos n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313742
                originalIdentifiedName: Eochalicotherium minutum n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313744
                originalIdentifiedName: Isotemnus emundatus n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313745
                originalIdentifiedName: Maxschlosseria anatona n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313746
                originalIdentifiedName: Maxschlosseria praeterita n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313747
                originalIdentifiedName: Oldfieldthomasia marginalis n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313748
                originalIdentifiedName: Oldfieldthomasia septa n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313751
                originalIdentifiedName: Ultrapithecus rusticulus n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313920
                originalIdentifiedName: Maxschlosseria minuta
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313923
                originalIdentifiedName: Pleurostylodon minimus n. sp.
                acceptedName: Maxschlosseria praeterita
                difference: null
              - occurrenceId: occ:1313924
                originalIdentifiedName: Infrapithecus expansus n. sp.
                acceptedName: Maxschlosseria praeterita
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

# Maxschlosseria praeterita
