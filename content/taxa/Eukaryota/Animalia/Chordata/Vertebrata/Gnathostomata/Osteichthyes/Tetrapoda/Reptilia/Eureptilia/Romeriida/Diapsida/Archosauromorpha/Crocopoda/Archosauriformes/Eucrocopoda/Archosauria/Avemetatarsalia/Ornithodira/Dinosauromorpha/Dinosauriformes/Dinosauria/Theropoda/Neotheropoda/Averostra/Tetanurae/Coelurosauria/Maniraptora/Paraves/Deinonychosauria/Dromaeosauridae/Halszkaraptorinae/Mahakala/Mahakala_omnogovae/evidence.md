---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mahakala omnogovae
    rank: species
    sourceDatasetId: null
    name:
      zh: Mahakala omnogovae
      en: Mahakala omnogovae
    checkedAt: 2026-10-03
    sections:
      - topic: morphology
        sourceIds:
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
          - turnerPolNorell2011Mahakala
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - turnerPolNorell2011Mahakala
          - cauMadzia2018Hulsanpes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - turnerPolNorell2011Mahakala
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: phylogeny
        sourceIds:
          - turnerPolNorell2011Mahakala
          - cauMadzia2018Hulsanpes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: palaeobiology
        sourceIds:
          - turnerPolNorell2011Mahakala
          - cauMadzia2018Hulsanpes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: occurrences
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: timeline
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
      - topic: evidence
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
      - topic: sources
        sourceIds:
          - pbdbDinosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - turnerPolNorell2011Mahakala
          - cauMadzia2018Hulsanpes
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
    sources:
      referenceBindings:
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Mahakala omnogovae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=133919&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:133919; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:133919
            selectedOccurrenceIds:
              - occ:782321
            selectedCollectionIds:
              - col:51033
            sourceReferenceIds:
              - ref:28248
            originalIdentificationMappings:
              - occurrenceId: occ:782321
                originalIdentifiedName: Mahakala omnogovae n. gen. n. sp.
                acceptedName: Mahakala omnogovae
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Mahakala omnogovae
