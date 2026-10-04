---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Canis lepophagus
    rank: species
    sourceDatasetId: null
    name:
      zh: Canis lepophagus
      en: Canis lepophagus
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
            title: PBDB accepted record — Canis lepophagus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44856&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44856; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44856
            selectedOccurrenceIds:
              - occ:193373
              - occ:193898
              - occ:193901
              - occ:193916
              - occ:193936
              - occ:193942
              - occ:193957
              - occ:193965
              - occ:193992
              - occ:194001
              - occ:194012
              - occ:194047
              - occ:194056
              - occ:194070
              - occ:194090
              - occ:194285
              - occ:194362
              - occ:194379
              - occ:194480
              - occ:194719
              - occ:194765
              - occ:194838
              - occ:194983
              - occ:195063
              - occ:195093
              - occ:195134
              - occ:195215
              - occ:195263
              - occ:197294
              - occ:1217423
              - occ:1217424
              - occ:1217425
              - occ:1420200
              - occ:1487198
            selectedCollectionIds:
              - col:19668
              - col:19805
              - col:19807
              - col:19812
              - col:19815
              - col:19816
              - col:19819
              - col:19821
              - col:19839
              - col:19847
              - col:19854
              - col:19879
              - col:19888
              - col:19895
              - col:19903
              - col:19929
              - col:19932
              - col:19934
              - col:19940
              - col:19963
              - col:19965
              - col:19981
              - col:20023
              - col:20033
              - col:20034
              - col:20050
              - col:20060
              - col:20062
              - col:20322
              - col:19954
              - col:19914
              - col:79621
              - col:197002
              - col:206955
            sourceReferenceIds:
              - ref:2673
              - ref:1069
              - ref:1905
              - ref:1894
              - ref:1070
              - ref:2518
              - ref:2886
              - ref:2618
              - ref:1309
              - ref:2044
              - ref:52058
              - ref:3382
              - ref:6254
              - ref:71195
            originalIdentificationMappings:
              - occurrenceId: occ:195063
                originalIdentifiedName: Canis lepophagus n. sp.
                acceptedName: Canis lepophagus
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

# Canis lepophagus
