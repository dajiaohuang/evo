---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Richardoestesia gilmorei
    rank: species
    sourceDatasetId: null
    name:
      zh: Richardoestesia gilmorei
      en: Richardoestesia gilmorei
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Richardoestesia gilmorei
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=58874&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:58874; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:58874
            selectedOccurrenceIds:
              - occ:248044
              - occ:248063
              - occ:362795
              - occ:461778
              - occ:461842
              - occ:461879
              - occ:462940
              - occ:462976
              - occ:463127
              - occ:463923
              - occ:464637
              - occ:464711
              - occ:464758
              - occ:464796
              - occ:508632
              - occ:508637
              - occ:790048
              - occ:814080
              - occ:1134774
              - occ:1181769
              - occ:1181770
              - occ:1573452
              - occ:2046297
              - occ:2056666
              - occ:2056670
              - occ:2056677
              - occ:2056685
              - occ:2056692
              - occ:2056699
              - occ:2056705
              - occ:2056716
              - occ:2056722
            selectedCollectionIds:
              - col:14462
              - col:14437
              - col:34320
              - col:45561
              - col:45564
              - col:45565
              - col:45671
              - col:45674
              - col:45684
              - col:45821
              - col:45892
              - col:45894
              - col:45897
              - col:45898
              - col:14457
              - col:14434
              - col:85498
              - col:89605
              - col:68003
              - col:22697
              - col:14463
              - col:34307
              - col:276374
              - col:14423
              - col:14424
              - col:14425
              - col:14426
              - col:146190
              - col:277780
              - col:14427
              - col:14428
              - col:277786
            sourceReferenceIds:
              - ref:13591
              - ref:13752
              - ref:9017
              - ref:11964
              - ref:11751
              - ref:28887
              - ref:30044
              - ref:46717
              - ref:48570
              - ref:93680
              - ref:94184
            originalIdentificationMappings:
              - occurrenceId: occ:463127
                originalIdentifiedName: Richardoestesia gilmorei n. gen. n. sp.
                acceptedName: Richardoestesia gilmorei
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

# Richardoestesia gilmorei
