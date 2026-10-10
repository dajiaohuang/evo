---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Periptychus coarctatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Periptychus coarctatus
      en: Periptychus coarctatus
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
            title: PBDB accepted record — Periptychus coarctatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50168&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50168; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50168
            selectedOccurrenceIds:
              - occ:163768
              - occ:163800
              - occ:163825
              - occ:163862
              - occ:163866
              - occ:163869
              - occ:163870
              - occ:163871
              - occ:163872
              - occ:163875
              - occ:163878
              - occ:163879
              - occ:163907
              - occ:163962
              - occ:163976
              - occ:164000
              - occ:164003
              - occ:164008
              - occ:164010
              - occ:164053
              - occ:164059
              - occ:164126
              - occ:164131
              - occ:164137
              - occ:164214
              - occ:164424
              - occ:164442
              - occ:164444
              - occ:164458
              - occ:164461
              - occ:1475098
              - occ:1475116
              - occ:1475118
              - occ:1475226
              - occ:1475251
              - occ:1475262
              - occ:1475274
              - occ:1475298
              - occ:1475309
              - occ:1475321
              - occ:1475345
              - occ:1475615
              - occ:1505137
              - occ:1505164
              - occ:1505177
              - occ:1505199
              - occ:1505202
              - occ:1505222
              - occ:1505225
              - occ:1505237
              - occ:1505250
              - occ:1505258
              - occ:1505321
            selectedCollectionIds:
              - col:14659
              - col:14662
              - col:14670
              - col:14677
              - col:14678
              - col:14679
              - col:14680
              - col:14681
              - col:14682
              - col:14683
              - col:14685
              - col:14686
              - col:14692
              - col:14703
              - col:14706
              - col:14716
              - col:14719
              - col:14720
              - col:14721
              - col:14733
              - col:14736
              - col:14746
              - col:14748
              - col:14750
              - col:14760
              - col:14790
              - col:14792
              - col:14793
              - col:14794
              - col:14795
              - col:176748
              - col:205865
              - col:205867
              - col:205895
              - col:205900
              - col:205901
              - col:205903
              - col:205907
              - col:205908
              - col:205910
              - col:205914
              - col:205928
              - col:209872
              - col:209892
              - col:209904
              - col:209921
              - col:209924
              - col:209943
              - col:209946
              - col:209957
              - col:209968
              - col:209976
              - col:210033
            sourceReferenceIds:
              - ref:2585
              - ref:6294
              - ref:2930
              - ref:3646
              - ref:1419
              - ref:831
              - ref:70613
            originalIdentificationMappings:
              - occurrenceId: occ:1475098
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475116
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475118
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475226
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475251
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475262
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475274
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475298
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475309
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475321
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475345
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1475615
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505137
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505164
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505177
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505199
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505202
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505222
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505225
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505237
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505250
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505258
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
                difference: recombined as
              - occurrenceId: occ:1505321
                originalIdentifiedName: Carsioptychus coarctatus
                acceptedName: Periptychus coarctatus
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

# Periptychus coarctatus
