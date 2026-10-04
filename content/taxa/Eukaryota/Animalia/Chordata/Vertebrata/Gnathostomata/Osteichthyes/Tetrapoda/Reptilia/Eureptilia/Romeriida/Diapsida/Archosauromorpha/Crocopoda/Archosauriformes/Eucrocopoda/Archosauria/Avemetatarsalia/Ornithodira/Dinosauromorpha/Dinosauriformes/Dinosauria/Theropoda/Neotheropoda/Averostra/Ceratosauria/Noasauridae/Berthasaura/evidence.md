---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Berthasaura
    rank: genus
    sourceDatasetId: null
    name:
      zh: Berthasaura
      en: Berthasaura
    reviewStatus: source-linked
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
      - topic: readingPath
        sourceIds:
          - souza2021BerthasauraDescription
          - pierossi2025BerthasauraDentaryAbstract
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
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
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Berthasaura
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=444933
            locator: Recorded PBDB parent closure beneath the already documented Dinosauria COL-compatible storage anchor.
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
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:444933
            readingTargets:
              - name: Berthasaura leopoldinae
                pbdbTaxonId: txn:444934
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Ceratosauria/Noasauridae/Berthasaura/Berthasaura_leopoldinae
            scope:
              zh: 本批物种出现记录的阅读路径，不是整个类群的生态总结。
              en: Reading path through this batch’s species occurrence records, not a whole-group ecological summary.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - pbdbTaxonId
            - readingTargets
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

# Berthasaura
