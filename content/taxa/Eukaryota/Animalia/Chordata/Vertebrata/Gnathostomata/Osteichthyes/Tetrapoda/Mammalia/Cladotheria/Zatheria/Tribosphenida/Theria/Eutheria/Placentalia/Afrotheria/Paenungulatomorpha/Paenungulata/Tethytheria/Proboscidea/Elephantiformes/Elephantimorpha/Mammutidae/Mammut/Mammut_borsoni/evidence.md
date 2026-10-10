---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mammut borsoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Mammut borsoni
      en: Mammut borsoni
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Mammut borsoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=95512&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:95512; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:95512
            selectedOccurrenceIds:
              - occ:374357
              - occ:410881
              - occ:410884
              - occ:412037
              - occ:414540
              - occ:414561
              - occ:414603
              - occ:417610
              - occ:422042
              - occ:422075
              - occ:422112
              - occ:429177
              - occ:429183
              - occ:432637
              - occ:474697
              - occ:474714
              - occ:489941
              - occ:489946
              - occ:501612
              - occ:501822
              - occ:659003
              - occ:706478
              - occ:706496
              - occ:706505
              - occ:706508
              - occ:706657
              - occ:711938
              - occ:711940
              - occ:711942
              - occ:711958
              - occ:711966
              - occ:711978
              - occ:711988
              - occ:712013
              - occ:712983
              - occ:713146
              - occ:713771
              - occ:713772
              - occ:713773
              - occ:713774
              - occ:713776
              - occ:713823
              - occ:713824
              - occ:713826
              - occ:1369066
              - occ:1374659
              - occ:1374660
              - occ:1374661
              - occ:1374662
              - occ:1374663
              - occ:1374665
              - occ:1413759
              - occ:1413775
              - occ:1413776
              - occ:1413779
              - occ:1413780
              - occ:1413784
              - occ:1413787
              - occ:1413792
              - occ:1426057
              - occ:1536091
            selectedCollectionIds:
              - col:35374
              - col:39681
              - col:39682
              - col:39842
              - col:40113
              - col:40114
              - col:40123
              - col:40503
              - col:41025
              - col:41026
              - col:41027
              - col:41919
              - col:39685
              - col:42273
              - col:47099
              - col:47100
              - col:49406
              - col:49407
              - col:50913
              - col:50942
              - col:71061
              - col:75803
              - col:36139
              - col:75806
              - col:75807
              - col:75852
              - col:76293
              - col:76294
              - col:76296
              - col:76302
              - col:76305
              - col:76306
              - col:76309
              - col:76314
              - col:76499
              - col:76509
              - col:76540
              - col:76541
              - col:76542
              - col:76543
              - col:76546
              - col:76558
              - col:76559
              - col:76560
              - col:186699
              - col:187636
              - col:185861
              - col:185862
              - col:182686
              - col:185859
              - col:185860
              - col:195290
              - col:195291
              - col:195292
              - col:195293
              - col:195294
              - col:195295
              - col:195296
              - col:195299
              - col:174455
              - col:215636
            sourceReferenceIds:
              - ref:9534
              - ref:10873
              - ref:10720
              - ref:10917
              - ref:11054
              - ref:11201
              - ref:11208
              - ref:12548
              - ref:13151
              - ref:13592
              - ref:23813
              - ref:24838
              - ref:62618
              - ref:62998
              - ref:66506
              - ref:67531
              - ref:74393
            originalIdentificationMappings:
              - occurrenceId: occ:374357
                originalIdentifiedName: '"Mammut" borsoni'
                acceptedName: Mammut borsoni
                difference: null
              - occurrenceId: occ:410881
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:414540
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:414561
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:414603
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:417610
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:429177
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:429183
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:474697
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:474714
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:489941
                originalIdentifiedName: '"Mammut" borsoni'
                acceptedName: Mammut borsoni
                difference: null
              - occurrenceId: occ:489946
                originalIdentifiedName: '"Mammut" borsoni'
                acceptedName: Mammut borsoni
                difference: null
              - occurrenceId: occ:501612
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:501822
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:706478
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:706496
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:706505
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:706508
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:706657
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:711938
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:711940
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:711942
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:711958
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:711966
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:711978
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:711988
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:712013
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:712983
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713146
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713771
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713772
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713773
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713774
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713776
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713823
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713824
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:713826
                originalIdentifiedName: Mastodon borsoni
                acceptedName: Mammut borsoni
                difference: recombined as
              - occurrenceId: occ:1536091
                originalIdentifiedName: Zygolophodon borsoni
                acceptedName: Mammut borsoni
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

# Mammut borsoni
