---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Deinotherium giganteum
    rank: species
    sourceDatasetId: null
    name:
      zh: Deinotherium giganteum
      en: Deinotherium giganteum
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
            title: PBDB accepted record — Deinotherium giganteum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=90204&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:90204; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:90204
            selectedOccurrenceIds:
              - occ:341636
              - occ:365172
              - occ:371206
              - occ:456981
              - occ:456993
              - occ:457003
              - occ:541085
              - occ:627315
              - occ:645362
              - occ:667188
              - occ:679227
              - occ:687022
              - occ:699387
              - occ:699773
              - occ:706244
              - occ:706299
              - occ:706362
              - occ:706387
              - occ:706428
              - occ:706480
              - occ:706509
              - occ:711941
              - occ:711945
              - occ:711948
              - occ:711963
              - occ:711986
              - occ:712009
              - occ:712014
              - occ:833826
              - occ:1265903
              - occ:1389656
              - occ:1427666
              - occ:1430786
              - occ:1442969
              - occ:1449516
              - occ:1453552
              - occ:1453558
              - occ:1469260
              - occ:1485444
              - occ:1498755
              - occ:1498783
              - occ:1498811
              - occ:1536089
              - occ:1635452
              - occ:1639856
              - occ:1639861
            selectedCollectionIds:
              - col:32191
              - col:34606
              - col:35125
              - col:45044
              - col:45043
              - col:45042
              - col:56563
              - col:67661
              - col:69712
              - col:68547
              - col:73299
              - col:73901
              - col:75087
              - col:75169
              - col:75787
              - col:75794
              - col:75800
              - col:36143
              - col:75802
              - col:75803
              - col:75807
              - col:76295
              - col:76298
              - col:76299
              - col:76303
              - col:76308
              - col:76312
              - col:76314
              - col:92640
              - col:75481
              - col:191070
              - col:197446
              - col:199537
              - col:201497
              - col:202257
              - col:202722
              - col:202726
              - col:37789
              - col:167995
              - col:208566
              - col:208567
              - col:208568
              - col:215636
              - col:175587
              - col:206345
              - col:232481
            sourceReferenceIds:
              - ref:8672
              - ref:9131
              - ref:9455
              - ref:11721
              - ref:15232
              - ref:19320
              - ref:23390
              - ref:24292
              - ref:24615
              - ref:24838
              - ref:25370
              - ref:31215
              - ref:55045
              - ref:64411
              - ref:67327
              - ref:67817
              - ref:68425
              - ref:69317
              - ref:69469
              - ref:69474
              - ref:70425
              - ref:71048
              - ref:72006
              - ref:74393
              - ref:85900
              - ref:86642
              - ref:86646
            originalIdentificationMappings:
              - occurrenceId: occ:341636
                originalIdentifiedName: Deinotherium levius
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:365172
                originalIdentifiedName: Deinotherium levius
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:371206
                originalIdentifiedName: Deinotherium levius
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:645362
                originalIdentifiedName: Deinotherium laevius
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:679227
                originalIdentifiedName: Dinotherium levius
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:687022
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:706244
                originalIdentifiedName: Dinotherium gigantissimum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:706299
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:706362
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:706387
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:706428
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:706480
                originalIdentifiedName: Dinotherium gigantissimum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:706509
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:711941
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:711945
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:711948
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:711963
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:711986
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:712009
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:712014
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:1427666
                originalIdentifiedName: Deinotherium gigantissimum
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:1442969
                originalIdentifiedName: Dinotherium giganteum
                acceptedName: Deinotherium giganteum
                difference: misspelling of
              - occurrenceId: occ:1449516
                originalIdentifiedName: Dinotherium thraciense
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:1498755
                originalIdentifiedName: Deinotherium gigantissimum
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:1498783
                originalIdentifiedName: Deinotherium gigantissimum
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:1498811
                originalIdentifiedName: Deinotherium gigantissimum
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:1635452
                originalIdentifiedName: Deinotherium levius
                acceptedName: Deinotherium giganteum
                difference: null
              - occurrenceId: occ:1639856
                originalIdentifiedName: Deinotherium levius
                acceptedName: Deinotherium giganteum
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

# Deinotherium giganteum
