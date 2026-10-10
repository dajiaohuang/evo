---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dromomeryx borealis
    rank: species
    sourceDatasetId: null
    name:
      zh: Dromomeryx borealis
      en: Dromomeryx borealis
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
            title: PBDB accepted record — Dromomeryx borealis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44550&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44550; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44550
            selectedOccurrenceIds:
              - occ:183397
              - occ:183419
              - occ:183467
              - occ:183550
              - occ:183827
              - occ:183884
              - occ:183888
              - occ:185481
              - occ:189279
              - occ:189672
              - occ:189915
              - occ:189999
              - occ:190128
              - occ:190130
              - occ:190206
              - occ:190289
              - occ:190329
              - occ:190462
              - occ:190775
              - occ:190918
              - occ:190999
              - occ:1207863
              - occ:1207864
              - occ:1303406
            selectedCollectionIds:
              - col:17904
              - col:17905
              - col:17911
              - col:17916
              - col:17976
              - col:17995
              - col:17996
              - col:18203
              - col:18809
              - col:18894
              - col:18953
              - col:18969
              - col:18994
              - col:18995
              - col:19011
              - col:19017
              - col:19028
              - col:19056
              - col:19092
              - col:19120
              - col:19145
              - col:19547
              - col:19088
              - col:17983
            sourceReferenceIds:
              - ref:6222
              - ref:3175
              - ref:3536
              - ref:1080
              - ref:1393
              - ref:6198
              - ref:3117
              - ref:1591
              - ref:3023
              - ref:51379
              - ref:56894
            originalIdentificationMappings:
              - occurrenceId: occ:183397
                originalIdentifiedName: Dromomeryx whitfordi
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:183419
                originalIdentifiedName: Dromomeryx whitfordi
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:183467
                originalIdentifiedName: Dromomeryx whitfordi
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:183550
                originalIdentifiedName: Dromomeryx whitfordi
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:183827
                originalIdentifiedName: Dromomeryx whitfordi
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:183884
                originalIdentifiedName: Dromomeryx whitfordi
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:183888
                originalIdentifiedName: Dromomeryx whitfordi
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:185481
                originalIdentifiedName: Dromomeryx pawniensis n. sp.
                acceptedName: Dromomeryx borealis
                difference: null
              - occurrenceId: occ:1303406
                originalIdentifiedName: Dromomeryx whitfordi n. sp.
                acceptedName: Dromomeryx borealis
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

# Dromomeryx borealis
