---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nothosaurus giganteus
    rank: species
    sourceDatasetId: null
    name:
      zh: Nothosaurus giganteus
      en: Nothosaurus giganteus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbSauropterygiaTaxonomy20261002
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
          - pbdbSauropterygiaOccurrences20261002
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
        - referenceId: ref-f8477a8a-0e70-4404-a0cd-029651abdad2
          metadataVariant: 0
          sourceKey: pbdbSauropterygiaTaxonomy20261002
          usage:
            title: PBDB accepted record — Nothosaurus giganteus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=171758&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-f8477a8a-0e70-4404-a0cd-029651abdad2
          metadataVariant: 0
          sourceKey: pbdbSauropterygiaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:171758; original response record indices retained in data/sources/sauropterygia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 262ff66f07b86b04952b63768d1a1ff40af059166c0f8e11f63f9ed76019c860
            pbdbTaxonId: txn:171758
            selectedOccurrenceIds:
              - occ:895624
              - occ:950448
              - occ:1091733
              - occ:1094787
              - occ:1094803
              - occ:1094804
              - occ:1094805
              - occ:1094806
              - occ:1094807
              - occ:1094808
              - occ:1094809
              - occ:1094810
              - occ:1094828
              - occ:1094829
              - occ:1094830
              - occ:1094831
              - occ:1094832
              - occ:1094833
              - occ:1094834
              - occ:1094835
              - occ:1094836
              - occ:1094837
              - occ:1094838
              - occ:1094839
              - occ:1094840
              - occ:1094841
              - occ:1094842
              - occ:1094843
              - occ:1094844
              - occ:1094845
              - occ:1094846
              - occ:1094847
              - occ:1094848
            selectedCollectionIds:
              - col:99309
              - col:86837
              - col:39763
              - col:138088
              - col:138096
              - col:137680
              - col:59927
              - col:138084
              - col:138097
              - col:138098
              - col:138099
              - col:138100
              - col:138101
              - col:138102
              - col:138083
              - col:138103
              - col:138104
              - col:138085
              - col:138089
              - col:138087
              - col:138105
              - col:138106
              - col:138107
              - col:138108
              - col:138109
              - col:138110
              - col:138111
              - col:138112
              - col:130793
              - col:138113
            sourceReferenceIds:
              - ref:34143
              - ref:36435
              - ref:43878
              - ref:69393
              - ref:44168
              - ref:28567
            originalIdentificationMappings:
              - occurrenceId: occ:950448
                originalIdentifiedName: Paranothosaurus amsleri
                acceptedName: Nothosaurus giganteus
                difference: null
              - occurrenceId: occ:1094787
                originalIdentifiedName: Opeosaurus suevicus n. sp.
                acceptedName: Nothosaurus giganteus
                difference: null
              - occurrenceId: occ:1094803
                originalIdentifiedName: Nothosaurus giganteus n. sp.
                acceptedName: Nothosaurus giganteus
                difference: null
              - occurrenceId: occ:1094804
                originalIdentifiedName: Nothosaurus andriani
                acceptedName: Nothosaurus giganteus
                difference: null
              - occurrenceId: occ:1094805
                originalIdentifiedName: Nothosaurus aduncidens n. sp.
                acceptedName: Nothosaurus giganteus
                difference: null
              - occurrenceId: occ:1094848
                originalIdentifiedName: Nothosaurus angustifrons n. sp.
                acceptedName: Nothosaurus giganteus
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

# Nothosaurus giganteus
