---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Halszkaraptorinae
    rank: subfamily
    sourceDatasetId: null
    name:
      zh: Halszkaraptorinae
      en: Halszkaraptorinae
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - lee2022Natovenator
          - cauMadzia2018Hulsanpes
          - turnerPolNorell2011Mahakala
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - lee2022Natovenator
          - cau2020Halszkaraptor
          - cauMadzia2018Hulsanpes
          - turnerPolNorell2011Mahakala
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: phylogeny
        sourceIds:
          - turnerPolNorell2011Mahakala
          - cauMadzia2018Hulsanpes
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
          - lee2022Natovenator
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: palaeobiology
        sourceIds:
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
          - brownstein2020HalszkaraptorCorrection
          - lee2022Natovenator
          - cauMadzia2018Hulsanpes
          - turnerPolNorell2011Mahakala
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: readingPath
        sourceIds:
          - lee2022Natovenator
          - brownstein2019Halszkaraptor
          - cau2020Halszkaraptor
          - cauMadzia2018Hulsanpes
          - turnerPolNorell2011Mahakala
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: readingPath
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB classification — Halszkaraptorinae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=364102
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
            pbdbTaxonId: txn:364102
            readingTargets:
              - name: Natovenator polydontus
                pbdbTaxonId: txn:468708
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Halszkaraptorinae/Natovenator/Natovenator_polydontus
              - name: Mahakala omnogovae
                pbdbTaxonId: txn:133919
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Halszkaraptorinae/Mahakala/Mahakala_omnogovae
              - name: Halszkaraptor escuilliei
                pbdbTaxonId: txn:364104
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Halszkaraptorinae/Halszkaraptor/Halszkaraptor_escuilliei
              - name: Hulsanpes perlei
                pbdbTaxonId: txn:67680
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Maniraptora/Paraves/Deinonychosauria/Dromaeosauridae/Halszkaraptorinae/Hulsanpes/Hulsanpes_perlei
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
        - referenceId: ref-11b2b6cd-cda3-48a9-9a03-46ade327ce11
          metadataVariant: 0
          sourceKey: cauMadzia2018Hulsanpes
          usage:
            title: Redescription and affinities of Hulsanpes perlei (Dinosauria, Theropoda) from the Upper Cretaceous of Mongolia
            url: https://peerj.com/articles/4868/
            locator: "Discussion: Mahakala 52/82-mm measurement discrepancy and relationship hypothesis; full main text read in P5-78."
            accessedAt: 2026-10-03
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
        - referenceId: ref-07d38353-15a6-48d4-a167-1e44878ccb6b
          metadataVariant: 0
          sourceKey: turnerPolNorell2011Mahakala
          usage:
            title: "Anatomy of Mahakala omnogovae (Theropoda: Dromaeosauridae), Tögrögiin Shiree, Mongolia"
            url: https://doi.org/10.1206/3722.2
            locator: Printed pp. 1–7, 31–35, 47–63; Table 1; diagnosis, forelimb and pedal descriptions, Discussion, Phylogeny, Conclusions and Appendix 2. Selected sections, not complete anatomical monograph reading.
            accessedAt: 2026-10-03
            scope:
              zh: 2011 年对 IGM 100/1033 的选段骨骼描述与作者解释；没有原标本复量或矩阵重算。
              en: Selected 2011 anatomical descriptions and interpretations of IGM 100/1033; no specimen remeasurement or matrix reanalysis.
          originalFields:
            - id
            - title
            - url
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

# Halszkaraptorinae
