---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tarbosaurus bataar
    rank: species
    sourceDatasetId: null
    name:
      zh: Tarbosaurus bataar
      en: Tarbosaurus bataar
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
            title: PBDB accepted record — Tarbosaurus bataar
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63705&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63705; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:63705
            selectedOccurrenceIds:
              - occ:148629
              - occ:387345
              - occ:387360
              - occ:387400
              - occ:393081
              - occ:395224
              - occ:395225
              - occ:403438
              - occ:493052
              - occ:583858
              - occ:602793
              - occ:680824
              - occ:1211890
              - occ:1328397
              - occ:1328398
              - occ:1328399
              - occ:1333016
              - occ:1338363
              - occ:1338364
              - occ:1338365
              - occ:1338367
              - occ:1338410
              - occ:1338411
              - occ:1338420
              - occ:1338653
              - occ:1338654
              - occ:1564994
            selectedCollectionIds:
              - col:13108
              - col:37006
              - col:37011
              - col:37020
              - col:37811
              - col:38023
              - col:38024
              - col:38702
              - col:49800
              - col:38134
              - col:64144
              - col:73437
              - col:69801
              - col:165580
              - col:51972
              - col:179625
              - col:180680
              - col:180681
              - col:180682
              - col:180684
              - col:180699
              - col:180700
              - col:180710
              - col:180812
              - col:180813
              - col:38695
            sourceReferenceIds:
              - ref:4373
              - ref:15110
              - ref:9900
              - ref:9899
              - ref:10082
              - ref:59835
              - ref:9256
              - ref:17707
              - ref:9258
              - ref:34612
              - ref:59137
              - ref:59136
              - ref:10453
              - ref:77256
            originalIdentificationMappings:
              - occurrenceId: occ:393081
                originalIdentifiedName: Albertosaurus periculosus n. sp.
                acceptedName: Tarbosaurus bataar
                difference: null
              - occurrenceId: occ:493052
                originalIdentifiedName: Tyrannosaurus luanchuanensis n. sp.
                acceptedName: Tarbosaurus bataar
                difference: null
              - occurrenceId: occ:583858
                originalIdentifiedName: '"Albertosaurus" periculosus'
                acceptedName: Tarbosaurus bataar
                difference: null
              - occurrenceId: occ:602793
                originalIdentifiedName: Shanshanosaurus huoyanshanensis n. gen. n. sp.
                acceptedName: Tarbosaurus bataar
                difference: null
              - occurrenceId: occ:680824
                originalIdentifiedName: Gorgosaurus lancinator n. sp.
                acceptedName: Tarbosaurus bataar
                difference: null
              - occurrenceId: occ:1328397
                originalIdentifiedName: Gorgosaurus novojilovi n. sp.
                acceptedName: Tarbosaurus bataar
                difference: null
              - occurrenceId: occ:1328398
                originalIdentifiedName: Tarbosaurus efremovi n. gen. n. sp.
                acceptedName: Tarbosaurus bataar
                difference: null
              - occurrenceId: occ:1328399
                originalIdentifiedName: Tyrannosaurus bataar n. sp.
                acceptedName: Tarbosaurus bataar
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

# Tarbosaurus bataar
