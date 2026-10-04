---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bunophorus etsagicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Bunophorus etsagicus
      en: Bunophorus etsagicus
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
            title: PBDB accepted record — Bunophorus etsagicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48674&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48674; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48674
            selectedOccurrenceIds:
              - occ:171086
              - occ:172838
              - occ:172999
              - occ:456871
              - occ:457572
              - occ:457580
              - occ:457587
              - occ:457632
              - occ:457654
              - occ:457696
              - occ:457720
              - occ:457761
              - occ:457779
              - occ:458609
              - occ:458631
              - occ:458662
              - occ:458682
              - occ:458686
              - occ:458697
              - occ:469445
              - occ:469467
              - occ:469589
              - occ:469635
              - occ:469680
              - occ:469709
              - occ:469725
              - occ:469743
              - occ:469756
              - occ:469770
              - occ:469802
              - occ:469831
              - occ:469841
              - occ:469856
              - occ:469888
              - occ:469988
              - occ:470051
              - occ:470061
              - occ:470069
              - occ:470098
              - occ:470150
              - occ:470159
              - occ:470165
              - occ:470181
              - occ:470203
              - occ:470218
              - occ:470229
              - occ:470253
              - occ:470291
              - occ:470301
              - occ:470370
              - occ:470393
              - occ:470421
              - occ:470462
              - occ:471224
              - occ:471295
              - occ:471305
              - occ:471309
              - occ:471530
              - occ:471556
              - occ:1303175
              - occ:1303176
            selectedCollectionIds:
              - col:15694
              - col:15937
              - col:15964
              - col:15680
              - col:15684
              - col:15685
              - col:15692
              - col:15695
              - col:15697
              - col:15700
              - col:15701
              - col:15702
              - col:15703
              - col:15705
              - col:15706
              - col:15707
              - col:46682
              - col:46683
              - col:46692
              - col:46696
              - col:46699
              - col:46700
              - col:46701
              - col:46703
              - col:46704
              - col:46705
              - col:46707
              - col:46711
              - col:46712
              - col:46714
              - col:46718
              - col:46729
              - col:46733
              - col:46734
              - col:46736
              - col:46740
              - col:46741
              - col:46742
              - col:46745
              - col:46746
              - col:46747
              - col:46748
              - col:46751
              - col:46754
              - col:46755
              - col:46760
              - col:46761
              - col:46764
              - col:46767
              - col:46820
              - col:46825
              - col:46826
              - col:46827
              - col:46847
              - col:46849
              - col:15983
              - col:15938
            sourceReferenceIds:
              - ref:1662
              - ref:2104
              - ref:1760
              - ref:11717
              - ref:3335
            originalIdentificationMappings:
              - occurrenceId: occ:456871
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:457580
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:457632
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:457654
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:457696
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:457720
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:457761
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:457779
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:458609
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:458631
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:458662
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:458682
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:458697
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469445
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469467
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469589
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469635
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469680
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469709
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469725
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469743
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469756
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469802
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469831
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469841
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469856
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469888
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:469988
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470051
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470069
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470098
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470150
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470159
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470165
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470203
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470218
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470229
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470291
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470301
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470370
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470393
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470421
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:470462
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:471295
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:471305
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:471309
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:471530
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
                difference: null
              - occurrenceId: occ:471556
                originalIdentifiedName: Hyracotherium cristatum
                acceptedName: Bunophorus etsagicus
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

# Bunophorus etsagicus
