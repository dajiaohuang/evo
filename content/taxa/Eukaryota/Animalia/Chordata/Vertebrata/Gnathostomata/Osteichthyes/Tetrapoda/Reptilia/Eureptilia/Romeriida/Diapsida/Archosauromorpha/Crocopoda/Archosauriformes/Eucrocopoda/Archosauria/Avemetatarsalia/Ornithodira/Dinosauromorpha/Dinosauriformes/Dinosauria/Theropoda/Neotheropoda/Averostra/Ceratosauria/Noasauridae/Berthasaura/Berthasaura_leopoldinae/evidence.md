---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Berthasaura leopoldinae
    rank: species
    sourceDatasetId: null
    name:
      zh: Berthasaura leopoldinae
      en: Berthasaura leopoldinae
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - souza2021BerthasauraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - souza2021BerthasauraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: evidence
        sourceIds:
          - souza2021BerthasauraDescription
          - pierossi2025BerthasauraDentaryAbstract
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: lifeHistory
        sourceIds:
          - souza2021BerthasauraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
        sourceIds:
          - souza2021BerthasauraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - souza2021BerthasauraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: phylogeny
        sourceIds:
          - souza2021BerthasauraDescription
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
          - souza2021BerthasauraDescription
          - pierossi2025BerthasauraDentaryAbstract
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
            title: PBDB accepted record — Berthasaura leopoldinae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=444934&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:444934; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:444934
            selectedOccurrenceIds:
              - occ:1583175
            selectedCollectionIds:
              - col:160057
            sourceReferenceIds:
              - ref:78692
            originalIdentificationMappings:
              - occurrenceId: occ:1583175
                originalIdentifiedName: Berthasaura leopoldinae n. gen. n. sp.
                acceptedName: Berthasaura leopoldinae
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
        - referenceId: ref-d58112e9-253e-4d0d-9758-2edce6a2d59c
          metadataVariant: 0
          sourceKey: souza2021BerthasauraDescription
          usage:
            title: The first edentulous ceratosaur from South America
            url: https://doi.org/10.1038/s41598-021-01312-4
            accessedAt: 2026-10-03
            locator: "Official Europe PMC PMC8602317 XML: selected front metadata; complete Introduction, Discussion, Methods, Systematic paleontology, Ontogenetic assessment and Phylogenetic analysis; first 14500 characters of Description and comparisons, covering size, cranial anatomy, mandible and selected vertebrae. Remaining postcranial text, images, raw CT and supplements not read."
            scope:
              zh: 2021 年原始描述的正模、无齿颌、部分骨骼、成熟与食性推断；全部头后正文及补充资料未读齐。
              en: 2021 original-description guide to the holotype, toothless jaws, selected anatomy, maturity and diet inference; remaining postcranial text and supplements unread.
          originalFields:
            - id
            - title
            - authors
            - publishedOnline
            - doi
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-107f19dd-9c69-4211-9330-05742ad52aaf
          metadataVariant: 0
          sourceKey: pierossi2025BerthasauraDentaryAbstract
          usage:
            title: Convergent evolution among non-carnivorous, desert-dwelling theropods as revealed by the dentary of the noasaurid Berthasaura leopoldinae (Cretaceous of Brazil)
            url: https://doi.org/10.1111/pala.70014
            accessedAt: 2026-10-03
            locator: Publisher article front metadata and complete abstract only. Read the full text link returned the abstract page. Full article, specimen identifier, methods, images and supplementary data not inspected.
            scope:
              zh: 仅出版商摘要中的新齿骨与发育失齿解释短提示；不是后续研究全文或独立鉴定。
              en: Short notice of the new dentary and developmental tooth-loss interpretation in the publisher abstract only; not full-paper reading or independent identification.
          originalFields:
            - id
            - title
            - authors
            - publishedOnline
            - doi
            - url
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Berthasaura leopoldinae
