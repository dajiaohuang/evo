---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thalassodromeus sethi
    rank: species
    sourceDatasetId: null
    name:
      zh: Thalassodromeus sethi
      en: Thalassodromeus sethi
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: typeMaterial
        sourceIds:
          - kellner2002ThalassodromeusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: crestAnatomy
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: crestFunction
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: redescription
        sourceIds:
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: feedingHistory
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: modelMethods
        sourceIds:
          - humphries2007SkimmingModels
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: modelInference
        sourceIds:
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: specimenHistory
        sourceIds:
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: occurrences
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: timeline
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: evidence
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
      - topic: sources
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - kellner2002ThalassodromeusDescription
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Thalassodromeus sethi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=134890&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:134890; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:134890
            selectedOccurrenceIds:
              - occ:784441
            selectedCollectionIds:
              - col:67712
            sourceReferenceIds:
              - ref:28368
            originalIdentificationMappings:
              - occurrenceId: occ:784441
                originalIdentifiedName: Thalassodromeus sethi n. gen. n. sp.
                acceptedName: Thalassodromeus sethi
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
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: pbdbPterosaurTaxonomy20261002
          usage:
            title: Recorded PBDB accepted identity and parent chain
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=134890&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:134890; ancestry below the documented Pterosauria anchor.
            accessedAt: 2026-10-02
            scope:
              zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
              en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-b2435379-b763-40dc-b485-57d769ab5547
          metadataVariant: 0
          sourceKey: kellner2002ThalassodromeusDescription
          usage:
            title: The Function of the Cranial Crest and Jaws of a Unique Pterosaur from the Early Cretaceous of Brazil
            url: https://doi.org/10.1126/science.1073186
            accessedAt: 2026-10-03
            locator: Published PDF pp. 389–392, text and captions read via https://doc.rero.ch/record/14841/files/PAL_E1978.pdf/; images and supplements not inspected.
            scope:
              zh: 2002 年命名论文的正文第 389–392 页：类型、保存、头冠、取食假说与比较尺寸。
              en: "Original 2002 naming-paper text, pp. 389–392: type, preservation, crest, feeding hypothesis and comparative size."
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-fce98715-9b8f-4ece-ac6d-97bc2f960c4e
          metadataVariant: 0
          sourceKey: humphries2007SkimmingModels
          usage:
            title: Did Pterosaurs Feed by Skimming? Physical Modelling and Anatomical Evaluation of an Unusual Feeding Method
            url: https://doi.org/10.1371/journal.pbio.0050204
            accessedAt: 2026-10-03
            locator: "Publisher XML: Introduction model material; Results drag and flight-cost estimates; Discussion Pterosaur Biomechanics and Anatomical Considerations; Materials and Methods physical models, immersion, dimensions and regression assumptions. Not an independent rerun or raw-data audit."
            scope:
              zh: 2007 年掠水模型论文中材料、阻力实验、能量估计、解剖比较与模型限制选段。
              en: Selected 2007 model-paper passages on material, drag trials, energy estimates, anatomy and modelling limitations.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-16d37c25-93a9-4635-9e7b-17e81a598ece
          metadataVariant: 0
          sourceKey: pegas2018ThalassodromeusRevision
          usage:
            title: New information on the osteology and a taxonomic revision of the genus Thalassodromeus (Pterodactyloidea, Tapejaridae, Thalassodrominae)
            url: https://doi.org/10.1080/02724634.2018.1443273
            accessedAt: 2026-10-03
            locator: Published article text on the author ResearchGate page, systematic/type and skull pp. e1443273-2–5, crest discussion pp. 12–13, mandibular taxonomic discussion pp. 13–14 and conclusion p. 15. Not all osteology, images, supplemental matrices or subsequent revisions.
            scope:
              zh: 2018 年作者上传论文的类型与头骨选段、头冠功能讨论、颌骨归属与结论。
              en: Selected author-uploaded 2018 article passages on type and skull, crest functions, jaw referral and conclusions.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - publishedYear
            - sourceVersion
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
  atlas-profile:
    pbdbTaxonId: txn:134890
    scientificName: Thalassodromeus sethi
    commonName: Thalassodromeus sethi
    commonNameZh: Thalassodromeus sethi
    rank: species
    parentName: Thalassodromeus
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/8/text/en
    ecology:
      diet: Not assessed from occurrence counts or depositional setting.
      habitat: Collection environments are not a species-wide habitat assessment.
      locomotion: Not independently assessed.
      bodySize: Not assessed from this occurrence batch.
      guild: Not assessed.
    traits: []
    traitsAssessmentStatus: not-assessed
    evidenceSummary:
      markdown: page.en.md
      field: /records/catalogue-profile/limitations/en
    confidence: low
    referenceIds:
      - ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
      - ref-c4887d31-ff09-4384-b816-a87cb63d0c54
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: thalassodromeus-reader-0
        title:
          zh: 1.42 米包含头冠，不是完整身体长度
          en: The 1.42 m length includes the crest, not the body
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - kellner2002ThalassodromeusDescription
      - id: thalassodromeus-reader-1
        title:
          zh: 大而轻的骨质头冠
          en: A large but lightly built bony crest
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - pegas2018ThalassodromeusRevision
      - id: thalassodromeus-reader-2
        title:
          zh: 血管印痕支持讨论，不直接测得散热
          en: Vascular impressions inform a hypothesis, not measured cooling
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - pegas2018ThalassodromeusRevision
      - id: thalassodromeus-reader-3
        title:
          zh: 重新清修揭露结构，不是新增正模
          en: Further preparation reveals structures, not a new holotype
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - pegas2018ThalassodromeusRevision
      - id: thalassodromeus-reader-4
        title:
          zh: 2002 年的掠水解释与后来的检验
          en: The 2002 skimming interpretation and later tests
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - kellner2002ThalassodromeusDescription
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
      - id: thalassodromeus-reader-5
        title:
          zh: 水槽实验测的是模型颌部阻力
          en: Flume trials measure model-jaw drag
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - humphries2007SkimmingModels
      - id: thalassodromeus-reader-6
        title:
          zh: 模型反对常规掠水，不给出替代菜单
          en: Models challenge habitual skimming without identifying another diet
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
      - id: thalassodromeus-reader-7
        title:
          zh: 旧模型与后续颌骨修订各保留材料范围
          en: Keep older model material separate from later jaw revisions
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
        sourceIds:
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-2
        title:
          en: Begin with named collections and strata
          zh: 从具名采集地和地层开始
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-3
        title:
          en: Age bounds of these records
          zh: 这些记录的年代边界
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-4
        title:
          en: Read preservation setting separately from living habitat
          zh: 保存环境与生活环境分开阅读
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
      - id: pbdb-occurrence-5
        title:
          en: Follow collection records back to references
          zh: 沿采集记录追到文献
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - kellner2002ThalassodromeusDescription
          - humphries2007SkimmingModels
          - pegas2018ThalassodromeusRevision
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=134890&show=parent,app,attr
        scope:
          zh: 仅来源所述材料和数据库记录范围。
          en: Only material and database-record scope described by this source.
      - id: pbdbPterosaurOccurrences20261002
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/occs/list.json?base_id=38461&show=full&ident=latest&order=id&rowcount=yes&limit=all
        scope:
          zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
          en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
      - id: pbdbOccurrenceFields20261002
        referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
        title:
          en: Paleobiology Database Data Service 1.2 — occurrence field documentation
          zh: Paleobiology Database Data Service 1.2 — occurrence field documentation
        url: https://paleobiodb.org/data1.2/occs/list_doc.html
        scope:
          zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
          en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
      - id: pbdbPterosaurTaxonomy20261002
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=134890&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: kellner2002ThalassodromeusDescription
        referenceId: ref-b2435379-b763-40dc-b485-57d769ab5547
        title:
          zh: The Function of the Cranial Crest and Jaws of a Unique Pterosaur from the Early Cretaceous of Brazil
          en: The Function of the Cranial Crest and Jaws of a Unique Pterosaur from the Early Cretaceous of Brazil
        url: https://doi.org/10.1126/science.1073186
        scope:
          zh: 2002 年命名论文的正文第 389–392 页：类型、保存、头冠、取食假说与比较尺寸。
          en: "Original 2002 naming-paper text, pp. 389–392: type, preservation, crest, feeding hypothesis and comparative size."
      - id: humphries2007SkimmingModels
        referenceId: ref-fce98715-9b8f-4ece-ac6d-97bc2f960c4e
        title:
          zh: Did Pterosaurs Feed by Skimming? Physical Modelling and Anatomical Evaluation of an Unusual Feeding Method
          en: Did Pterosaurs Feed by Skimming? Physical Modelling and Anatomical Evaluation of an Unusual Feeding Method
        url: https://doi.org/10.1371/journal.pbio.0050204
        scope:
          zh: 2007 年掠水模型论文中材料、阻力实验、能量估计、解剖比较与模型限制选段。
          en: Selected 2007 model-paper passages on material, drag trials, energy estimates, anatomy and modelling limitations.
      - id: pegas2018ThalassodromeusRevision
        referenceId: ref-16d37c25-93a9-4635-9e7b-17e81a598ece
        title:
          zh: New information on the osteology and a taxonomic revision of the genus Thalassodromeus (Pterodactyloidea, Tapejaridae, Thalassodrominae)
          en: New information on the osteology and a taxonomic revision of the genus Thalassodromeus (Pterodactyloidea, Tapejaridae, Thalassodrominae)
        url: https://doi.org/10.1080/02724634.2018.1443273
        scope:
          zh: 2018 年作者上传论文的类型与头骨选段、头冠功能讨论、颌骨归属与结论。
          en: Selected author-uploaded 2018 article passages on type and skull, crest functions, jaw referral and conclusions.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:134889
        label:
          en: Thalassodromeus
          zh: Thalassodromeus
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Thalassodromeus sethi
    commonName: Thalassodromeus sethi
    commonNameZh: Thalassodromeus sethi
    rank: species
    taxonId: txn:134890
    firstAppearance: 119.57
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:134890
      rangeKind: global-composite
      taxonomicConcept: Thalassodromeus sethi
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 119.57
      youngerMa: 113.2
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 119.57–113.2 Ma and last-occurrence bracket 119.57–113.2 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:134890; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Thalassodromeus sethi
