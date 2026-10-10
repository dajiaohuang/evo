---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ludodactylus sibbicki
    rank: species
    sourceDatasetId: null
    name:
      zh: Ludodactylus sibbicki
      en: Ludodactylus sibbicki
    checkedAt: 2026-10-03
    sections:
      - topic: typeMaterial
        sourceIds:
          - frey2003LudodactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: preservation
        sourceIds:
          - frey2003LudodactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: provenance
        sourceIds:
          - frey2003LudodactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: cranialMorphology
        sourceIds:
          - frey2003LudodactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: associatedPlantMaterial
        sourceIds:
          - frey2003LudodactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: deathHypothesis
        sourceIds:
          - frey2003LudodactylusDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: hyoidComparison
        sourceIds:
          - li2018LudodactylusHyoidComparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
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
          - pbdbPterosaurOccurrences20261002
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
          - pbdbPterosaurOccurrences20261002
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
          - pbdbPterosaurOccurrences20261002
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
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - frey2003LudodactylusDescription
          - li2018LudodactylusHyoidComparison
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Ludodactylus sibbicki
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=163698&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:163698; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:163698
            selectedOccurrenceIds:
              - occ:849620
            selectedCollectionIds:
              - col:77891
            sourceReferenceIds:
              - ref:32115
            originalIdentificationMappings:
              - occurrenceId: occ:849620
                originalIdentifiedName: Ludodactylus sibbicki n. gen. n. sp.
                acceptedName: Ludodactylus sibbicki
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=163698&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:163698; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-7068d485-ba0d-48b1-96a6-513c45ee0243
          metadataVariant: 0
          sourceKey: frey2003LudodactylusDescription
          usage:
            title: A new crested ornithocheirid from the Lower Cretaceous of northeastern Brazil and the unusual death of an unusual pterosaur
            url: https://doi.org/10.1144/gsl.sp.2003.217.01.05
            accessedAt: 2026-10-03
            locator: Chapter 217:55–63, sections Locality and stratigraphy, The new specimen, Diagnosis, Description of Ludodactylus, Associated plant remains and Discussion, accessed via DOKUMEN book OCR. Figures, publisher page layout, specimens and all later revisions not inspected.
            scope:
              zh: 2003 年原始描述的正模、保存、来源、颅骨与叶片解释选段；正文经第三方书籍 OCR 镜像读取。
              en: Selected 2003 original-description passages on the type, preservation, provenance, skull and leaf interpretation; text accessed through a third-party book OCR mirror.
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedAt
            - publishedOnline
            - volume
            - issue
            - pages
            - url
            - accessedAt
            - locator
            - scope
        - referenceId: ref-871dab0b-e4b9-4ca3-af66-5fb87124a7c6
          metadataVariant: 0
          sourceKey: li2018LudodactylusHyoidComparison
          usage:
            title: Convergent evolution of a mobile bony tongue in flighted dinosaurs and pterosaurs
            url: https://doi.org/10.1371/journal.pone.0198078
            accessedAt: 2026-10-03
            locator: "Official PLOS XML: Fig. 6C caption, Results/Hyobranchial length and mobility paragraph (body p index 31), Methods fossil/published-resource scope; S1 Table Ludodactylus row SMNK PAL 3828, Frey et al. 2003. Other supplement rows, matrices and image pixels not fully inspected."
            scope:
              zh: 2018 年舌骨研究中 Ludodactylus 的比较段落与 S1 表对应标本行。
              en: Ludodactylus comparison passages in the 2018 hyoid study and its specimen row in S1 Table.
          originalFields:
            - id
            - doi
            - title
            - authors
            - publishedAt
            - volume
            - issue
            - articleNumber
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
    pbdbTaxonId: txn:163698
    scientificName: Ludodactylus sibbicki
    commonName: Ludodactylus sibbicki
    commonNameZh: Ludodactylus sibbicki
    rank: species
    parentName: Ludodactylus
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/7/text/en
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
      - id: ludodactylus-reader-0
        title:
          zh: 正模是一件带下颌的头骨
          en: The type is a skull with a mandible
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - frey2003LudodactylusDescription
      - id: ludodactylus-reader-1
        title:
          zh: 压扁与石材切割限制头冠复原
          en: Compression and stone cutting limit crest reconstruction
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - frey2003LudodactylusDescription
      - id: ludodactylus-reader-2
        title:
          zh: 产地来自商业来源，地层另有支持
          en: Reported commercial provenance has separate stratigraphic support
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - frey2003LudodactylusDescription
      - id: ludodactylus-reader-3
        title:
          zh: 后方向头冠与牙齿同时存在
          en: A posterior crest occurs together with teeth
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - frey2003LudodactylusDescription
      - id: ludodactylus-reader-4
        title:
          zh: 颌间叶片没有被鉴定为 Yucca
          en: The leaf between the jaws is not identified as Yucca
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - frey2003LudodactylusDescription
      - id: ludodactylus-reader-5
        title:
          zh: 误吞与死亡经过保留为解释
          en: Accidental ingestion and the death sequence remain interpretations
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - frey2003LudodactylusDescription
      - id: ludodactylus-reader-6
        title:
          zh: 舌骨比较支持功能推断，不是保存的舌头
          en: Hyoid comparisons inform function without preserving a tongue
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - li2018LudodactylusHyoidComparison
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
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
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
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
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
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
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
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
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - frey2003LudodactylusDescription
          - li2018LudodactylusHyoidComparison
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=163698&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=163698&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: frey2003LudodactylusDescription
        referenceId: ref-7068d485-ba0d-48b1-96a6-513c45ee0243
        title:
          zh: A new crested ornithocheirid from the Lower Cretaceous of northeastern Brazil and the unusual death of an unusual pterosaur
          en: A new crested ornithocheirid from the Lower Cretaceous of northeastern Brazil and the unusual death of an unusual pterosaur
        url: https://doi.org/10.1144/gsl.sp.2003.217.01.05
        scope:
          zh: 2003 年原始描述的正模、保存、来源、颅骨与叶片解释选段；正文经第三方书籍 OCR 镜像读取。
          en: Selected 2003 original-description passages on the type, preservation, provenance, skull and leaf interpretation; text accessed through a third-party book OCR mirror.
      - id: li2018LudodactylusHyoidComparison
        referenceId: ref-871dab0b-e4b9-4ca3-af66-5fb87124a7c6
        title:
          zh: Convergent evolution of a mobile bony tongue in flighted dinosaurs and pterosaurs
          en: Convergent evolution of a mobile bony tongue in flighted dinosaurs and pterosaurs
        url: https://doi.org/10.1371/journal.pone.0198078
        scope:
          zh: 2018 年舌骨研究中 Ludodactylus 的比较段落与 S1 表对应标本行。
          en: Ludodactylus comparison passages in the 2018 hyoid study and its specimen row in S1 Table.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:163697
        label:
          en: Ludodactylus
          zh: Ludodactylus
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
  atlas-node:
    name: Ludodactylus sibbicki
    commonName: Ludodactylus sibbicki
    commonNameZh: Ludodactylus sibbicki
    rank: species
    taxonId: txn:163698
    firstAppearance: 119.57
    lastAppearance: 113.2
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:163698
      rangeKind: global-composite
      taxonomicConcept: Ludodactylus sibbicki
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
          locator: P5-42 accepted hierarchy oid txn:163698; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Ludodactylus sibbicki
