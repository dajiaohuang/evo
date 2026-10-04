---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Moschorhinus kitchingi
    rank: species
    sourceDatasetId: null
    name:
      zh: Moschorhinus kitchingi
      en: Moschorhinus kitchingi
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherSynapsidaTaxonomy20261002
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaTaxonomy20261002
          usage:
            title: PBDB accepted record — Moschorhinus kitchingi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=178202&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:178202; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:178202
            selectedOccurrenceIds:
              - occ:922674
              - occ:922681
              - occ:922710
              - occ:1314057
              - occ:1314185
              - occ:1320450
              - occ:1320670
              - occ:1332772
              - occ:1332970
              - occ:1380560
              - occ:1418814
              - occ:1418815
              - occ:1418816
              - occ:1418817
              - occ:1418818
              - occ:1418819
              - occ:1418820
              - occ:1418821
              - occ:1418822
              - occ:1418823
              - occ:1418824
              - occ:1418825
              - occ:1418826
              - occ:1418842
              - occ:1418843
              - occ:1418844
            selectedCollectionIds:
              - col:98602
              - col:105603
              - col:34815
              - col:176319
              - col:176336
              - col:176312
              - col:177604
              - col:179592
              - col:179618
              - col:188978
              - col:117183
              - col:190137
              - col:144333
              - col:196575
              - col:196576
              - col:196577
              - col:195281
              - col:196578
              - col:196579
              - col:179072
              - col:196580
              - col:182579
              - col:181690
              - col:181691
              - col:196588
              - col:105610
            sourceReferenceIds:
              - ref:35271
              - ref:35272
              - ref:27216
              - ref:59471
              - ref:63462
              - ref:66876
            originalIdentificationMappings:
              - occurrenceId: occ:922681
                originalIdentifiedName: Moschorhinus natalensis n. sp.
                acceptedName: Moschorhinus kitchingi
                difference: null
              - occurrenceId: occ:1314185
                originalIdentifiedName: Moschorhinus kitchingi n. gen. n. sp.
                acceptedName: Moschorhinus kitchingi
                difference: null
              - occurrenceId: occ:1320450
                originalIdentifiedName: Moschorhinus esterhuyseni n. sp.
                acceptedName: Moschorhinus kitchingi
                difference: null
              - occurrenceId: occ:1320670
                originalIdentifiedName: Moschorhinus minor n. sp.
                acceptedName: Moschorhinus kitchingi
                difference: null
              - occurrenceId: occ:1332970
                originalIdentifiedName: Moschorhinus warreni n. sp.
                acceptedName: Moschorhinus kitchingi
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

# Moschorhinus kitchingi
