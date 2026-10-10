---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Halszkaraptor escuilliei
    rank: species
    sourceDatasetId: null
    name:
      zh: Halszkaraptor escuilliei
      en: Halszkaraptor escuilliei
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: palaeobiology
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: phylogeny
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
          - brownstein2020HalszkaraptorCorrection
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: readingPath
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
          - lee2022Natovenator
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: occurrences
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: timeline
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: evidence
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: sources
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
          - brownstein2020HalszkaraptorCorrection
          - lee2022Natovenator
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Halszkaraptor escuilliei
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=364104&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:364104; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:364104
            selectedOccurrenceIds:
              - occ:1386650
            selectedCollectionIds:
              - col:190544
            sourceReferenceIds:
              - ref:64073
            originalIdentificationMappings:
              - occurrenceId: occ:1386650
                originalIdentifiedName: Halszkaraptor escuilliei n. gen. n. sp.
                acceptedName: Halszkaraptor escuilliei
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
        - referenceId: ref-ec15c01b-6bf0-4cc4-a7f7-82f983ada2f1
          metadataVariant: 0
          sourceKey: brownstein2019Halszkaraptor
          usage:
            title: Halszkaraptor escuilliei and the evolution of the paravian bauplan
            url: https://doi.org/10.1038/s41598-019-52867-2
            locator: Introduction, Results, Discussion, Conclusions, Materials and Methods; associated figure captions.
            accessedAt: 2026-10-03
            scope:
              zh: 具名作者的形态与系统重评及生态解释；不作直接行为资料或后续共识。
              en: Named author’s comparative and phylogenetic reassessment with ecological interpretations; not direct behavioral evidence or later consensus.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-200f7bd8-dad9-4757-b24d-2bf880253cab
          metadataVariant: 0
          sourceKey: cau2020Halszkaraptor
          usage:
            title: The body plan of Halszkaraptor escuilliei (Dinosauria, Theropoda) is not a transitional form along the evolution of dromaeosaurid hypercarnivory
            url: https://doi.org/10.7717/peerj.8672
            locator: Introduction, Results, Discussion, Conclusions, Materials and Methods; associated figure captions.
            accessedAt: 2026-10-03
            scope:
              zh: 具名作者的形态与系统重评及生态解释；不作直接行为资料或后续共识。
              en: Named author’s comparative and phylogenetic reassessment with ecological interpretations; not direct behavioral evidence or later consensus.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-ddefecec-a28e-4471-9701-13b6438391af
          metadataVariant: 0
          sourceKey: brownstein2020HalszkaraptorCorrection
          usage:
            title: "Author Correction: Halszkaraptor escuilliei and the evolution of the paravian bauplan"
            url: https://doi.org/10.1038/s41598-020-60007-4
            locator: "Entire correction: Figures 2 and 6 legends."
            accessedAt: 2026-10-03
            scope:
              zh: 图注缩写与面板编号勘误，不作生态结论撤回。
              en: Caption abbreviation and panel-label correction, not withdrawal of an ecological conclusion.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-61b73848-c367-4856-8e89-8862c823759c
          metadataVariant: 0
          sourceKey: lee2022Natovenator
          usage:
            locator: "Discussion: comparisons with Halszkaraptor; Description and Tables 1–2 for Natovenator rib evidence."
            accessedAt: 2026-10-03
            scope:
              zh: Natovenator 是独立比较标本，不替代 Halszkaraptor 的标本或行为记录。
              en: Natovenator is an independent comparison specimen, not a substitute Halszkaraptor specimen or behavioral record.
          originalFields:
            - id
            - title
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

# Halszkaraptor escuilliei
