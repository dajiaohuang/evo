---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptomeryx speciosus
    rank: species
    sourceDatasetId: null
    name:
      zh: Leptomeryx speciosus
      en: Leptomeryx speciosus
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
            title: PBDB accepted record — Leptomeryx speciosus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47597&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47597; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47597
            selectedOccurrenceIds:
              - occ:177881
              - occ:178054
              - occ:178156
              - occ:178331
              - occ:178347
              - occ:178378
              - occ:178442
              - occ:178525
              - occ:178569
              - occ:178619
              - occ:178654
              - occ:178675
              - occ:178687
              - occ:178760
              - occ:178803
              - occ:178851
              - occ:178855
              - occ:179058
              - occ:179231
              - occ:179713
              - occ:286144
              - occ:1209730
            selectedCollectionIds:
              - col:16893
              - col:16919
              - col:16928
              - col:16942
              - col:16943
              - col:16949
              - col:16959
              - col:16961
              - col:16962
              - col:16963
              - col:16964
              - col:16965
              - col:16966
              - col:16979
              - col:16986
              - col:16988
              - col:16989
              - col:17010
              - col:17031
              - col:17104
              - col:17027
              - col:156988
            sourceReferenceIds:
              - ref:3318
              - ref:50051
              - ref:1470
              - ref:3359
              - ref:1442
              - ref:1818
              - ref:4220
              - ref:2813
              - ref:51442
            originalIdentificationMappings:
              - occurrenceId: occ:177881
                originalIdentifiedName: '"Leptomeryx" speciosus'
                acceptedName: Leptomeryx speciosus
                difference: null
              - occurrenceId: occ:178054
                originalIdentifiedName: Leptomeryx speciosus n. sp.
                acceptedName: Leptomeryx speciosus
                difference: null
              - occurrenceId: occ:178156
                originalIdentifiedName: '"Leptomeryx" speciosus'
                acceptedName: Leptomeryx speciosus
                difference: null
              - occurrenceId: occ:178378
                originalIdentifiedName: '"Leptomeryx" speciosus'
                acceptedName: Leptomeryx speciosus
                difference: null
              - occurrenceId: occ:178442
                originalIdentifiedName: '"Leptomeryx" speciosus'
                acceptedName: Leptomeryx speciosus
                difference: null
              - occurrenceId: occ:178760
                originalIdentifiedName: '"Leptomeryx" speciosus'
                acceptedName: Leptomeryx speciosus
                difference: null
              - occurrenceId: occ:178855
                originalIdentifiedName: '"Leptomeryx" speciosus'
                acceptedName: Leptomeryx speciosus
                difference: null
              - occurrenceId: occ:286144
                originalIdentifiedName: '"Leptomeryx" speciosus'
                acceptedName: Leptomeryx speciosus
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

# Leptomeryx speciosus
