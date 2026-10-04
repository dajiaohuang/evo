---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ichthyornis dispar
    rank: species
    sourceDatasetId: null
    name:
      zh: Ichthyornis dispar
      en: Ichthyornis dispar
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
            title: PBDB accepted record — Ichthyornis dispar
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=54877&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:54877; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:54877
            selectedOccurrenceIds:
              - occ:367497
              - occ:367498
              - occ:367499
              - occ:769394
              - occ:771702
              - occ:788952
              - occ:788953
              - occ:1224512
              - occ:1630988
              - occ:1630989
              - occ:1630990
              - occ:1630991
              - occ:1630992
              - occ:1630993
              - occ:1630994
              - occ:1630995
              - occ:1630996
              - occ:1630997
              - occ:1630998
              - occ:1630999
              - occ:1631000
              - occ:1631001
              - occ:1631002
              - occ:1631003
              - occ:1631004
            selectedCollectionIds:
              - col:34755
              - col:34756
              - col:34757
              - col:81932
              - col:82635
              - col:85276
              - col:160666
              - col:197316
              - col:231051
              - col:231050
              - col:231049
              - col:231048
              - col:231052
              - col:231053
              - col:231054
              - col:231055
              - col:231056
              - col:231057
              - col:231058
              - col:231059
              - col:197314
              - col:197308
              - col:197312
              - col:80890
            sourceReferenceIds:
              - ref:7491
              - ref:27720
              - ref:85525
              - ref:34465
              - ref:34448
              - ref:52417
            originalIdentificationMappings:
              - occurrenceId: occ:367498
                originalIdentifiedName: Ichthyornis antecessor
                acceptedName: Ichthyornis dispar
                difference: null
              - occurrenceId: occ:367499
                originalIdentifiedName: Ichthyornis antecessor
                acceptedName: Ichthyornis dispar
                difference: null
              - occurrenceId: occ:769394
                originalIdentifiedName: Plegadornis antecessor n. gen. n. sp.
                acceptedName: Ichthyornis dispar
                difference: null
              - occurrenceId: occ:788952
                originalIdentifiedName: Ichthyornis dispar n. gen. n. sp.
                acceptedName: Ichthyornis dispar
                difference: null
              - occurrenceId: occ:788953
                originalIdentifiedName: Colonosaurus mudgei n. gen. n. sp.
                acceptedName: Ichthyornis dispar
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

# Ichthyornis dispar
