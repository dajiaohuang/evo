---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Serpianosaurus mirigiolensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Serpianosaurus mirigiolensis
      en: Serpianosaurus mirigiolensis
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
            title: PBDB accepted record — Serpianosaurus mirigiolensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=142015&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:142015; original response record indices retained in data/sources/sauropterygia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 262ff66f07b86b04952b63768d1a1ff40af059166c0f8e11f63f9ed76019c860
            pbdbTaxonId: txn:142015
            selectedOccurrenceIds:
              - occ:797944
              - occ:797945
              - occ:797946
              - occ:797947
              - occ:797948
              - occ:797949
              - occ:797950
              - occ:797951
              - occ:797952
              - occ:797954
              - occ:797955
              - occ:797956
              - occ:1600123
            selectedCollectionIds:
              - col:86830
              - col:86831
              - col:86832
              - col:86833
              - col:86834
              - col:86835
              - col:86836
              - col:86828
              - col:86837
              - col:86838
              - col:86839
              - col:86840
              - col:122057
            sourceReferenceIds:
              - ref:29226
            originalIdentificationMappings:
              - occurrenceId: occ:1600123
                originalIdentifiedName: Serpianosaurus mirigiolensis n. gen. n. sp.
                acceptedName: Serpianosaurus mirigiolensis
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

# Serpianosaurus mirigiolensis
