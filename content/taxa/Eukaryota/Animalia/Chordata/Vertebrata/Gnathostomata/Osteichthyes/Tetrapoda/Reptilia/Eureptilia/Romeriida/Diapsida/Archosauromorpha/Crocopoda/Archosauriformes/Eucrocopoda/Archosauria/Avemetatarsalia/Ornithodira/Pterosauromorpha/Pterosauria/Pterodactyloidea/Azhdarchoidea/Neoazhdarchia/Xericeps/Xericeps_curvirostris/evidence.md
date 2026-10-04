---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Xericeps curvirostris
    rank: species
    sourceDatasetId: null
    name:
      zh: Xericeps curvirostris
      en: Xericeps curvirostris
    reviewStatus: source-linked
    checkedAt: 2026-10-03
    sections:
      - topic: referredMaterialRevision
        sourceIds:
          - smith2023KemKemJawRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: stratigraphicInterpretation
        sourceIds:
          - smith2023KemKemJawRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: classificationDiscussion
        sourceIds:
          - smith2023KemKemJawRevision
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: typeMaterial
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: preservation
        sourceIds:
          - martill2018XericepsJawDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: morphology
        sourceIds:
          - martill2018XericepsJawDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: maturity
        sourceIds:
          - martill2018XericepsJawDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: sizeEstimates
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: taxonomicInterpretation
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: readingPath
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
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
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
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
            title: PBDB accepted record — Xericeps curvirostris
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=363920&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:363920; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:363920
            selectedOccurrenceIds:
              - occ:1385606
            selectedCollectionIds:
              - col:96223
            sourceReferenceIds:
              - ref:64004
            originalIdentificationMappings:
              - occurrenceId: occ:1385606
                originalIdentifiedName: Xericeps curvirostris n. gen. n. sp.
                acceptedName: Xericeps curvirostris
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=363920&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:363920; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-382287e7-a809-4c3b-89dc-2645cfc23105
          metadataVariant: 0
          sourceKey: martill2018XericepsJawDescription
          usage:
            title: A new edentulous pterosaur from the Cretaceous Kem Kem beds of south eastern Morocco
            url: https://doi.org/10.1016/j.cretres.2017.09.006
            accessedAt: 2026-10-03
            locator: University of Portsmouth accepted author manuscript PDF, manuscript pp. 1, 3–8 and 13–18; journal version 84:1–12. Other comparisons, references, tables and figure pixels not fully inspected.
            scope:
              zh: 接受稿中正模颌部、保存、尺寸、分类与生态解释的选段导读。
              en: Selected accepted-manuscript passages on type jaw anatomy, preservation, dimensions, classification and ecological interpretation.
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedOnline
            - publishedAt
            - volume
            - pages
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-b9c479a9-9eec-4b54-ba38-2be663f696b1
          metadataVariant: 0
          sourceKey: ibrahim2020XericepsComparison
          usage:
            title: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
            url: https://doi.org/10.3897/zookeys.928.47517
            accessedAt: 2026-10-03
            locator: "Official XML PMC7188693: complete two-paragraph Xericeps account (body paragraph indices 364–365), with Alanqa reinterpretation context read in P5-118. No specimen or phylogenetic rerun."
            scope:
              zh: 2020 年 Xericeps 两段介绍及与 Alanqa 的未决异名比较。
              en: The two 2020 Xericeps account paragraphs and unresolved comparison with Alanqa.
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedOnline
            - journal
            - volume
            - pages
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-c993aed1-b20c-4888-8062-b4c51ccd80fc
          metadataVariant: 0
          sourceKey: smith2023KemKemJawRevision
          usage:
            title: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
            url: https://doi.org/10.1007/s12542-022-00642-6
            accessedAt: 2026-10-03
            locator: Published PDF, printed pp. 531–533, 540, selected jaw-comparison passages on p. 558 and classification discussion on p. 559; front matter and licence on p. 563. Not the whole article, figure pixels, supplements, specimens or a phylogenetic rerun.
            scope:
              zh: 2023 年 Alanqa 与 Xericeps 的颌部归属、材料修订及分类讨论选段。
              en: Selected 2023 passages on Alanqa and Xericeps jaw identity, referred material and classification.
          originalFields:
            - id
            - title
            - doi
            - authors
            - publishedOnline
            - volume
            - pages
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
    pbdbTaxonId: txn:363920
    scientificName: Xericeps curvirostris
    commonName: Xericeps curvirostris
    commonNameZh: Xericeps curvirostris
    rank: species
    parentName: Xericeps
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
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: kemkem-revision-reader-0
        title:
          zh: 2023 年新增归入的一段下颌
          en: An additional lower jaw referred in 2023
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - smith2023KemKemJawRevision
      - id: kemkem-revision-reader-1
        title:
          zh: 同一正模的产层记录存在来源分歧
          en: Sources differ on the horizon of the same type
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - smith2023KemKemJawRevision
      - id: kemkem-revision-reader-2
        title:
          zh: 细分亲缘和未知上颌仍待解决
          en: Finer relationships and an unknown upper jaw remain open
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - smith2023KemKemJawRevision
      - id: xericeps-material-reader-0
        title:
          zh: 正模是一段下颌，不是完整头骨
          en: The type is part of a lower jaw
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
      - id: xericeps-material-reader-1
        title:
          zh: 173 毫米保存长度与约 200 毫米复原
          en: Preserved and reconstructed jaw lengths
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - martill2018XericepsJawDescription
      - id: xericeps-material-reader-2
        title:
          zh: 上弯颌缘与连续腹侧沟
          en: An upcurved jaw and continuous ventral groove
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - martill2018XericepsJawDescription
      - id: xericeps-material-reader-3
        title:
          zh: 骨表面只支持有限的成熟判断
          en: Bone surface supports a limited maturity inference
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - martill2018XericepsJawDescription
      - id: xericeps-material-reader-4
        title:
          zh: 尺寸类别与翼展估计分别阅读
          en: Separate size categories from wingspan estimates
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
      - id: xericeps-material-reader-5
        title:
          zh: 与 Alanqa 的关系仍是待解问题
          en: The relationship to Alanqa remains unresolved
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
      - id: xericeps-material-reader-6
        title:
          zh: 对读颌部形态，不把沉积环境当作食谱
          en: Compare jaws without turning depositional setting into diet
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
        sourceIds:
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
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
          - martill2018XericepsJawDescription
          - ibrahim2020XericepsComparison
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=363920&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=363920&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: martill2018XericepsJawDescription
        referenceId: ref-382287e7-a809-4c3b-89dc-2645cfc23105
        title:
          zh: A new edentulous pterosaur from the Cretaceous Kem Kem beds of south eastern Morocco
          en: A new edentulous pterosaur from the Cretaceous Kem Kem beds of south eastern Morocco
        url: https://doi.org/10.1016/j.cretres.2017.09.006
        scope:
          zh: 接受稿中正模颌部、保存、尺寸、分类与生态解释的选段导读。
          en: Selected accepted-manuscript passages on type jaw anatomy, preservation, dimensions, classification and ecological interpretation.
      - id: ibrahim2020XericepsComparison
        referenceId: ref-b9c479a9-9eec-4b54-ba38-2be663f696b1
        title:
          zh: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
          en: Geology and paleontology of the Upper Cretaceous Kem Kem Group of eastern Morocco
        url: https://doi.org/10.3897/zookeys.928.47517
        scope:
          zh: 2020 年 Xericeps 两段介绍及与 Alanqa 的未决异名比较。
          en: The two 2020 Xericeps account paragraphs and unresolved comparison with Alanqa.
      - id: smith2023KemKemJawRevision
        referenceId: ref-c993aed1-b20c-4888-8062-b4c51ccd80fc
        title:
          zh: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
          en: The pterosaurs of the Cretaceous Kem Kem Group of Morocco
        url: https://doi.org/10.1007/s12542-022-00642-6
        scope:
          zh: 2023 年 Alanqa 与 Xericeps 的颌部归属、材料修订及分类讨论选段。
          en: Selected 2023 passages on Alanqa and Xericeps jaw identity, referred material and classification.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:363919
        label:
          en: Xericeps
          zh: Xericeps
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Xericeps curvirostris
    commonName: Xericeps curvirostris
    commonNameZh: Xericeps curvirostris
    rank: species
    taxonId: txn:363920
    firstAppearance: 100.5
    lastAppearance: 93.9
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:363920
      rangeKind: global-composite
      taxonomicConcept: Xericeps curvirostris
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 100.5
      youngerMa: 93.9
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 100.5–93.9 Ma and last-occurrence bracket 100.5–93.9 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:363920; fea/fla/lea/lla in retained taxa response.
      reviewStatus: not-reviewed
      evidenceLevel: database-derived
---

# Xericeps curvirostris
