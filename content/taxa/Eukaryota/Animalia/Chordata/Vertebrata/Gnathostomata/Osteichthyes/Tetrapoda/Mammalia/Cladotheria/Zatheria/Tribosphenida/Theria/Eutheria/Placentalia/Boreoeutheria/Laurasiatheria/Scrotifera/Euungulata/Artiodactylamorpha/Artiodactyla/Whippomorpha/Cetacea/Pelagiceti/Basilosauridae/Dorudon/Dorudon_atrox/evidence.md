---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dorudon atrox
    rank: species
    sourceDatasetId: null
    name:
      zh: Dorudon atrox
      en: Dorudon atrox
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
            title: PBDB accepted record — Dorudon atrox
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=62994&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:62994; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:62994
            selectedOccurrenceIds:
              - occ:148364
              - occ:148365
              - occ:150829
              - occ:150831
              - occ:693603
              - occ:693618
              - occ:740970
              - occ:740974
              - occ:740976
              - occ:780217
              - occ:785973
              - occ:880086
              - occ:1021009
              - occ:1021011
              - occ:1021012
              - occ:1021013
              - occ:1021014
              - occ:1021015
              - occ:1021016
              - occ:1021017
              - occ:1021018
              - occ:1021019
              - occ:1021020
              - occ:1021021
              - occ:1021022
              - occ:1021023
              - occ:1021024
              - occ:1021026
              - occ:1021034
              - occ:1021036
              - occ:1021040
              - occ:1021041
              - occ:1021042
              - occ:1021045
              - occ:1021046
              - occ:1021047
              - occ:1021050
              - occ:1021051
              - occ:1021052
              - occ:1021053
              - occ:1021055
              - occ:1021057
              - occ:1021058
              - occ:1021061
              - occ:1217426
              - occ:1217433
              - occ:1217435
              - occ:1217437
              - occ:1217440
              - occ:1429049
              - occ:1536973
            selectedCollectionIds:
              - col:13102
              - col:13103
              - col:13402
              - col:13403
              - col:74739
              - col:74740
              - col:79676
              - col:79680
              - col:79682
              - col:83938
              - col:96952
              - col:124990
              - col:124991
              - col:124992
              - col:124993
              - col:124994
              - col:124995
              - col:124996
              - col:124997
              - col:124998
              - col:124999
              - col:125000
              - col:125001
              - col:125002
              - col:125003
              - col:125004
              - col:125005
              - col:125006
              - col:125008
              - col:125010
              - col:125013
              - col:125014
              - col:125015
              - col:125016
              - col:125017
              - col:125019
              - col:125020
              - col:125021
              - col:125022
              - col:125023
              - col:125025
              - col:125026
              - col:125028
              - col:159106
              - col:159112
              - col:159113
              - col:159114
              - col:159115
              - col:198761
              - col:32899
            sourceReferenceIds:
              - ref:6026
              - ref:10457
              - ref:33106
              - ref:11950
              - ref:8335
              - ref:26775
              - ref:11955
              - ref:11956
              - ref:33316
              - ref:52063
              - ref:12588
              - ref:74469
            originalIdentificationMappings:
              - occurrenceId: occ:693618
                originalIdentifiedName: Prozeuglodon stromeri n. sp.
                acceptedName: Dorudon atrox
                difference: null
              - occurrenceId: occ:780217
                originalIdentifiedName: Prozeuglodon atrox n. gen. n. sp.
                acceptedName: Dorudon atrox
                difference: recombined as
              - occurrenceId: occ:785973
                originalIdentifiedName: Zeuglodon intermedius n. sp.
                acceptedName: Dorudon atrox
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

# Dorudon atrox
