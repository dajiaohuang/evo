---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nothosaurus marchicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Nothosaurus marchicus
      en: Nothosaurus marchicus
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
            title: PBDB accepted record — Nothosaurus marchicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=254246&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:254246; original response record indices retained in data/sources/sauropterygia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 262ff66f07b86b04952b63768d1a1ff40af059166c0f8e11f63f9ed76019c860
            pbdbTaxonId: txn:254246
            selectedOccurrenceIds:
              - occ:1094699
              - occ:1094853
              - occ:1094854
              - occ:1094855
              - occ:1094856
              - occ:1094858
              - occ:1094859
              - occ:1094860
              - occ:1094861
              - occ:1094863
              - occ:1094864
              - occ:1418894
            selectedCollectionIds:
              - col:96875
              - col:138116
              - col:138117
              - col:138118
              - col:138101
              - col:138120
              - col:138121
            sourceReferenceIds:
              - ref:44157
              - ref:44168
              - ref:66892
            originalIdentificationMappings:
              - occurrenceId: occ:1094699
                originalIdentifiedName: Nothosaurus winterswijkensis n. sp.
                acceptedName: Nothosaurus marchicus
                difference: null
              - occurrenceId: occ:1094853
                originalIdentifiedName: Nothosaurus schroederi n. sp.
                acceptedName: Nothosaurus marchicus
                difference: null
              - occurrenceId: occ:1094854
                originalIdentifiedName: Nothosaurus marchius n. sp.
                acceptedName: Nothosaurus marchicus
                difference: variant of
              - occurrenceId: occ:1094855
                originalIdentifiedName: Nothosaurus oldenburgi n. sp.
                acceptedName: Nothosaurus marchicus
                difference: null
              - occurrenceId: occ:1094856
                originalIdentifiedName: Nothosaurus crassus n. sp.
                acceptedName: Nothosaurus marchicus
                difference: null
              - occurrenceId: occ:1094858
                originalIdentifiedName: Nothosaurus procerus n. sp.
                acceptedName: Nothosaurus marchicus
                difference: null
              - occurrenceId: occ:1094859
                originalIdentifiedName: Nothosaurus raabi n. sp.
                acceptedName: Nothosaurus marchicus
                difference: null
              - occurrenceId: occ:1094860
                originalIdentifiedName: Nothosaurus marchius
                acceptedName: Nothosaurus marchicus
                difference: variant of
              - occurrenceId: occ:1094861
                originalIdentifiedName: Nothosaurus marchius
                acceptedName: Nothosaurus marchicus
                difference: variant of
              - occurrenceId: occ:1094863
                originalIdentifiedName: Nothosaurus marchius
                acceptedName: Nothosaurus marchicus
                difference: variant of
              - occurrenceId: occ:1094864
                originalIdentifiedName: Nothosaurus marchius
                acceptedName: Nothosaurus marchicus
                difference: variant of
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

# Nothosaurus marchicus
