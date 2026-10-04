---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Glamys priscus
    rank: species
    sourceDatasetId: null
    name:
      zh: Glamys priscus
      en: Glamys priscus
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
            title: PBDB accepted record — Glamys priscus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=90867&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:90867; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:90867
            selectedOccurrenceIds:
              - occ:404812
              - occ:408615
              - occ:408616
              - occ:408617
              - occ:408618
              - occ:408619
              - occ:408622
              - occ:408623
              - occ:408624
              - occ:409129
              - occ:474225
              - occ:474344
              - occ:474441
              - occ:667570
              - occ:667572
              - occ:667575
              - occ:667578
              - occ:667581
              - occ:667587
              - occ:741854
              - occ:741863
              - occ:1345946
              - occ:1352274
              - occ:1353468
              - occ:1353471
              - occ:1353479
              - occ:1353488
              - occ:1353757
              - occ:1354231
              - occ:1354692
              - occ:1354693
              - occ:1355174
              - occ:1355175
              - occ:1355176
              - occ:1355177
              - occ:1355178
              - occ:1355179
              - occ:1355180
              - occ:1355182
              - occ:1355184
              - occ:1356759
              - occ:1356769
              - occ:1436645
            selectedCollectionIds:
              - col:38817
              - col:39233
              - col:39236
              - col:39249
              - col:39250
              - col:38861
              - col:39292
              - col:39299
              - col:38859
              - col:34630
              - col:12843
              - col:12849
              - col:12850
              - col:71933
              - col:71932
              - col:71928
              - col:71927
              - col:71931
              - col:71929
              - col:79736
              - col:79737
              - col:31752
              - col:183381
              - col:179142
              - col:181092
              - col:36709
              - col:36711
              - col:60281
              - col:31748
              - col:12844
              - col:84656
              - col:31747
              - col:183992
              - col:183993
              - col:183994
              - col:183995
              - col:183996
              - col:183997
              - col:183998
              - col:184000
              - col:39662
              - col:184230
              - col:200413
            sourceReferenceIds:
              - ref:10459
              - ref:10493
              - ref:10641
              - ref:7272
              - ref:24318
              - ref:26808
              - ref:60613
              - ref:61220
              - ref:61260
              - ref:61321
              - ref:61354
              - ref:61378
              - ref:61468
              - ref:61575
              - ref:68425
            originalIdentificationMappings:
              - occurrenceId: occ:408615
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:408616
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:408617
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:408618
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:408619
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:408622
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:408623
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:408624
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:409129
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:474225
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:474344
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:474441
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:667570
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:667572
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:667575
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:667578
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:667581
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:667587
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:1345946
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:1354692
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:1354693
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
                difference: recombined as
              - occurrenceId: occ:1436645
                originalIdentifiedName: Gliravus priscus
                acceptedName: Glamys priscus
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

# Glamys priscus
