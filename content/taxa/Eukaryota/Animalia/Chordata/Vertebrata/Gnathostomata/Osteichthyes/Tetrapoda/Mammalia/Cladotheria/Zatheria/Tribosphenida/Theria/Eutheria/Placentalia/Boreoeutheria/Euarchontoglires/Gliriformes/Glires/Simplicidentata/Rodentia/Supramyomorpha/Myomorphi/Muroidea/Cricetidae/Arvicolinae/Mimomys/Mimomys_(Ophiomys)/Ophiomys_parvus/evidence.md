---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ophiomys parvus
    rank: species
    sourceDatasetId: null
    name:
      zh: Ophiomys parvus
      en: Ophiomys parvus
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
            title: PBDB accepted record — Ophiomys parvus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48635&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48635; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48635
            selectedOccurrenceIds:
              - occ:193816
              - occ:193819
              - occ:193824
              - occ:193830
              - occ:193833
              - occ:193835
              - occ:193839
              - occ:193841
              - occ:193843
              - occ:193846
              - occ:193848
              - occ:193849
              - occ:193851
              - occ:193853
              - occ:193856
              - occ:193861
              - occ:193862
              - occ:193872
              - occ:193883
              - occ:193889
              - occ:194139
              - occ:194147
              - occ:194156
              - occ:194166
              - occ:194188
              - occ:194195
              - occ:194210
              - occ:194745
              - occ:196271
              - occ:196317
              - occ:196349
              - occ:196361
              - occ:196399
              - occ:196976
            selectedCollectionIds:
              - col:19769
              - col:19771
              - col:19773
              - col:19775
              - col:19776
              - col:19777
              - col:19778
              - col:19779
              - col:19780
              - col:19781
              - col:19782
              - col:19783
              - col:19784
              - col:19785
              - col:19786
              - col:19787
              - col:19788
              - col:19794
              - col:19798
              - col:19799
              - col:19910
              - col:19911
              - col:19912
              - col:19913
              - col:19915
              - col:19916
              - col:19919
              - col:19964
              - col:20174
              - col:20181
              - col:20187
              - col:20188
              - col:20199
              - col:20298
            sourceReferenceIds:
              - ref:6294
              - ref:2878
              - ref:3118
              - ref:1883
            originalIdentificationMappings:
              - occurrenceId: occ:193824
                originalIdentifiedName: Mimomys parvus
                acceptedName: Ophiomys parvus
                difference: recombined as
              - occurrenceId: occ:193835
                originalIdentifiedName: Mimomys parvus
                acceptedName: Ophiomys parvus
                difference: recombined as
              - occurrenceId: occ:193856
                originalIdentifiedName: Mimomys parvus
                acceptedName: Ophiomys parvus
                difference: recombined as
              - occurrenceId: occ:193872
                originalIdentifiedName: Mimomys parvus
                acceptedName: Ophiomys parvus
                difference: recombined as
              - occurrenceId: occ:193883
                originalIdentifiedName: Mimomys parvus
                acceptedName: Ophiomys parvus
                difference: recombined as
              - occurrenceId: occ:194156
                originalIdentifiedName: Mimomys parvus n. sp.
                acceptedName: Ophiomys parvus
                difference: recombined as
              - occurrenceId: occ:194166
                originalIdentifiedName: Ophiomys parvus n. sp.
                acceptedName: Ophiomys parvus
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

# Ophiomys parvus
