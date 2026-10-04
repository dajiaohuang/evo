---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ikrandraco avatar
    rank: species
    sourceDatasetId: null
    name:
      zh: Ikrandraco avatar
      en: Ikrandraco avatar
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: nomenclature
        sourceIds:
          - wang2014IkrandracoAnatomy
          - wang2020IkrandracoNameCorrection
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: material
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: preservation
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: dentition
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: morphology
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: lifeHistory
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: feeding
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: phylogeny
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: readingPath
        sourceIds:
          - wang2014IkrandracoAnatomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: occurrences
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
      - topic: timeline
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
      - topic: evidence
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
      - topic: sources
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - wang2014IkrandracoAnatomy
          - wang2020IkrandracoNameCorrection
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/14/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Ikrandraco avatar
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=340925&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:340925; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:340925
            selectedOccurrenceIds:
              - occ:1328956
              - occ:1328957
            selectedCollectionIds:
              - col:105772
              - col:135798
            sourceReferenceIds:
              - ref:59181
            originalIdentificationMappings:
              - occurrenceId: occ:1328956
                originalIdentifiedName: Ikrandraco avatar n. gen. n. sp.
                acceptedName: Ikrandraco avatar
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=340925&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:340925; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-8eb6ee94-1e19-4319-ac83-7363766ae86e
          metadataVariant: 0
          sourceKey: wang2014IkrandracoAnatomy
          usage:
            title: An Early Cretaceous pterosaur with an unusual mandibular crest from China and a potential novel feeding strategy
            url: https://doi.org/10.1038/srep06329
            accessedAt: 2026-10-03
            scope:
              zh: 2014 年两件标本的系统古生物学、形态、表 1–2、讨论与分析方法；摄食为作者假说。
              en: 2014 systematic account, anatomy, Tables 1–2, discussion and analytical methods for two specimens; feeding remains the authors’ hypothesis.
            locator: "PMC5385874 / Europe PMC fullTextXML: front, abstract and introductory context; complete Results, Discussion and Methods text including Tables 1–2 and textual captions. No figure pixels, supplements, specimens or phylogenetic rerun."
            readingTargets:
              - name: Ikrandraco avatar
                pbdbTaxonId: txn:340925
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Ikrandraco/Ikrandraco_avatar
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedYear
            - publishedAt
            - volume
            - pages
            - license
            - url
            - accessedAt
            - scope
            - locator
            - readingTargets
        - referenceId: ref-de2e4f70-2f1a-4198-a63b-681ab3327a69
          metadataVariant: 0
          sourceKey: wang2020IkrandracoNameCorrection
          usage:
            title: "Author Correction: An Early Cretaceous pterosaur with an unusual mandibular crest from China and a potential novel feeding strategy"
            url: https://doi.org/10.1038/s41598-020-70506-z
            accessedAt: 2026-10-03
            scope:
              zh: 2020 年名称可用性、ZooBank 注册与重述模式材料及诊断。
              en: 2020 name availability, ZooBank registration and restated type material and diagnosis.
            locator: "PMC7421578 / Europe PMC fullTextXML: entire correction body and publication metadata; source ZooBank publication and nomenclatural-act LSIDs retained without independent registry audit."
            readingTargets:
              - name: Ikrandraco avatar
                pbdbTaxonId: txn:340925
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Pteranodontoidea/Ikrandraco/Ikrandraco_avatar
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedYear
            - publishedAt
            - volume
            - pages
            - license
            - url
            - accessedAt
            - scope
            - locator
            - readingTargets
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  atlas-profile:
    pbdbTaxonId: txn:340925
    scientificName: Ikrandraco avatar
    commonName: Ikrandraco avatar
    commonNameZh: Ikrandraco avatar
    rank: species
    parentName: Ikrandraco
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/10/text/en
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
      - ref-8eb6ee94-1e19-4319-ac83-7363766ae86e
      - ref-de2e4f70-2f1a-4198-a63b-681ab3327a69
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: ikrandraco-anatomy-0
        title:
          zh: 2014 年形态描述与 2020 年名称更正
          en: The 2014 anatomical account and 2020 name correction
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
          - wang2020IkrandracoNameCorrection
      - id: ikrandraco-anatomy-1
        title:
          zh: 两件标本保存的身体范围不同
          en: The two specimens preserve different parts of the body
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-2
        title:
          zh: 侧向压扁与未知层位限制比较
          en: Lateral flattening and unknown horizons limit comparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-3
        title:
          zh: 低长头部与深下颌骨冠
          en: A low elongated head and deep mandibular crest
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-4
        title:
          zh: 小牙列支持比较，不直接记录食谱
          en: Small teeth support comparisons without recording a diet
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-5
        title:
          zh: 关联双翼与气孔提供骨骼线索
          en: Associated wings and foramina provide skeletal evidence
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-6
        title:
          zh: 融合支持成体解释，测量仍属于个体
          en: Fusion supports adult interpretation while measurements remain individual
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-7
        title:
          zh: 临时掠水与喉囊都是摄食假说
          en: Temporary skimming and a throat pouch are feeding hypotheses
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-8
        title:
          zh: 系统树是 2014 年矩阵的分析结果
          en: The tree is a result from the 2014 matrix
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: ikrandraco-anatomy-9
        title:
          zh: 对读下颌骨冠与大型比较头部
          en: Compare mandibular crests with a large comparative skull
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
        sourceIds:
          - wang2014IkrandracoAnatomy
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
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
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
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
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
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
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
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
            field: /records/catalogue-profile/sections/14/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - wang2014IkrandracoAnatomy
          - wang2020IkrandracoNameCorrection
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=340925&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=340925&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: wang2014IkrandracoAnatomy
        referenceId: ref-8eb6ee94-1e19-4319-ac83-7363766ae86e
        title:
          zh: An Early Cretaceous pterosaur with an unusual mandibular crest from China and a potential novel feeding strategy
          en: An Early Cretaceous pterosaur with an unusual mandibular crest from China and a potential novel feeding strategy
        url: https://doi.org/10.1038/srep06329
        scope:
          zh: 2014 年两件标本的系统古生物学、形态、表 1–2、讨论与分析方法；摄食为作者假说。
          en: 2014 systematic account, anatomy, Tables 1–2, discussion and analytical methods for two specimens; feeding remains the authors’ hypothesis.
      - id: wang2020IkrandracoNameCorrection
        referenceId: ref-de2e4f70-2f1a-4198-a63b-681ab3327a69
        title:
          zh: "Author Correction: An Early Cretaceous pterosaur with an unusual mandibular crest from China and a potential novel feeding strategy"
          en: "Author Correction: An Early Cretaceous pterosaur with an unusual mandibular crest from China and a potential novel feeding strategy"
        url: https://doi.org/10.1038/s41598-020-70506-z
        scope:
          zh: 2020 年名称可用性、ZooBank 注册与重述模式材料及诊断。
          en: 2020 name availability, ZooBank registration and restated type material and diagnosis.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:340924
        label:
          en: Ikrandraco
          zh: Ikrandraco
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Ikrandraco avatar
    commonName: Ikrandraco avatar
    commonNameZh: Ikrandraco avatar
    rank: species
    taxonId: txn:340925
    firstAppearance: 121.4
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:340925
      rangeKind: global-composite
      taxonomicConcept: Ikrandraco avatar
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 121.4
      youngerMa: 113.2
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 121.4–113.2 Ma and last-occurrence bracket 121.4–113.2 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:340925; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Ikrandraco avatar
