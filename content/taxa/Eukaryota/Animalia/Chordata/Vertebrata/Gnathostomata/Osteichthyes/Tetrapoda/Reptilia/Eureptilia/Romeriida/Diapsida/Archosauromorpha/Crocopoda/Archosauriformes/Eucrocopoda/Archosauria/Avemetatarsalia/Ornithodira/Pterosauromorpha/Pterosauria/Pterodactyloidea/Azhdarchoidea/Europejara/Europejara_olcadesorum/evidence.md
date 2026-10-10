---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Europejara olcadesorum
    rank: species
    sourceDatasetId: null
    name:
      zh: Europejara olcadesorum
      en: Europejara olcadesorum
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: materials
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: bodySize
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: locality
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: phylogeny
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: ecology
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: readingPath
        sourceIds:
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: overview
        sourceIds:
          - pbdbPterosaurTaxonomy20261002
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: occurrences
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
      - topic: timeline
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
      - topic: evidence
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
      - topic: sources
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - vullo2012EuropejaraDescription
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
    sources:
      referenceBindings:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Europejara olcadesorum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=241003&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:241003; original response record indices retained in data/sources/pterosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: bae4c11926f8cde7bd7b1b7418d63b8ba856066f5005a9181b8bdf8dcb047035
            pbdbTaxonId: txn:241003
            selectedOccurrenceIds:
              - occ:1053536
            selectedCollectionIds:
              - col:28006
            sourceReferenceIds:
              - ref:42229
            originalIdentificationMappings:
              - occurrenceId: occ:1053536
                originalIdentifiedName: Europejara olcadesorum n. gen. n. sp.
                acceptedName: Europejara olcadesorum
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
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=241003&show=parent,app,attr
            locator: P5-42 retained accepted hierarchy; oid txn:241003; ancestry below the documented Pterosauria anchor.
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
        - referenceId: ref-7cbbccc9-23ab-41d8-bfa2-bca576289766
          metadataVariant: 0
          sourceKey: vullo2012EuropejaraDescription
          usage:
            title: "A New Crested Pterosaur from the Early Cretaceous of Spain: The First European Tapejarid (Pterodactyloidea: Azhdarchoidea)"
            url: https://doi.org/10.1371/journal.pone.0038900
            accessedAt: 2026-10-03
            locator: "Official PLOS manuscript XML: metadata and all four scientific main sections (Introduction, Materials and Methods, Results, Discussion), including textual figure captions, read in P5-102. No figure pixels, specimens, supplemental Appendix S1 or independent matrix rerun; later literature not comprehensively assembled."
            scope:
              zh: MCCM-LH 9413 的保存、下颌冠、比例估计与 2012 年亲缘、食性和地理假说。
              en: Preservation, mandibular crest and proportional estimates for MCCM-LH 9413, with dated 2012 phylogenetic, feeding and geographic hypotheses.
            readingTargets:
              - name: Europejara olcadesorum
                pbdbTaxonId: txn:241003
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Europejara/Europejara_olcadesorum
              - name: Eopteranodon lii
                pbdbTaxonId: txn:159349
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Eopteranodon/Eopteranodon_lii
              - name: Sinopterus dongi
                pbdbTaxonId: txn:138765
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/Pterodactyloidea/Azhdarchoidea/Neoazhdarchia/Tapejaroidea/Tapejaridae/Sinopterus/Sinopterus_dongi
          originalFields:
            - id
            - title
            - authors
            - doi
            - publishedOnline
            - url
            - accessedAt
            - locator
            - scope
            - readingTargets
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  atlas-profile:
    pbdbTaxonId: txn:241003
    scientificName: Europejara olcadesorum
    commonName: Europejara olcadesorum
    commonNameZh: Europejara olcadesorum
    rank: species
    parentName: Europejara
    extinct: true
    geography: []
    overview:
      markdown: page.en.md
      field: /records/catalogue-profile/sections/0/text/en
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
      - ref-7cbbccc9-23ab-41d8-bfa2-bca576289766
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: europejara-description-0
        title:
          zh: 欧洲记录从一件不完整头骨开始
          en: The European record begins with an incomplete skull
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-1
        title:
          zh: 主板与对板保存头部，没有完整身体
          en: Part and counterpart preserve cranial material rather than a whole body
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-2
        title:
          zh: 向后弯曲的下颌冠参与鉴别
          en: A backward-curving mandibular crest informs diagnosis
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-3
        title:
          zh: 无齿下颌与保存的腭部各有边界
          en: Toothless jaws and the preserved palate have separate limits
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-4
        title:
          zh: 两米翼展和上颌冠是不同层次的复原
          en: Two-metre wingspan and an upper crest are different reconstructions
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-5
        title:
          zh: Las Hoyas 的环境不等于本种全部生活史
          en: Las Hoyas context does not define the species’ entire life history
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-6
        title:
          zh: 早期亲缘结果不能确定地理起点
          en: An early phylogenetic result does not establish geographic origin
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-7
        title:
          zh: 果实与种子传播仍缺直接食性证据
          en: Fruit feeding and seed dispersal lack direct dietary evidence
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: europejara-description-8
        title:
          zh: 把欧洲下颌与中国材料对读
          en: Compare the European mandible with Chinese material
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
        sourceIds:
          - vullo2012EuropejaraDescription
      - id: pbdb-occurrence-1
        title:
          en: Which fossil records this name represents
          zh: 这个名称对应哪些化石记录
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
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
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
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
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
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
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
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
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
        sourceIds:
          - pbdbPterosaurOccurrences20261002
          - pbdbOccurrenceFields20261002
          - vullo2012EuropejaraDescription
    readerSources:
      - id: taxonomy
        referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
        title:
          en: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
          zh: Paleobiology Database — Pterosauria occurrences and accepted hierarchy, 2026-10-02
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=241003&show=parent,app,attr
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
        url: https://paleobiodb.org/data1.2/taxa/single.json?id=241003&show=parent,app,attr
        scope:
          zh: PBDB 接受名、外部 OID 和记录父链；不与 COL 概念等同，不裁决系统发育。
          en: PBDB accepted name, external OID and recorded parent chain; no equivalence with COL or phylogenetic adjudication.
      - id: vullo2012EuropejaraDescription
        referenceId: ref-7cbbccc9-23ab-41d8-bfa2-bca576289766
        title:
          zh: "A New Crested Pterosaur from the Early Cretaceous of Spain: The First European Tapejarid (Pterodactyloidea: Azhdarchoidea)"
          en: "A New Crested Pterosaur from the Early Cretaceous of Spain: The First European Tapejarid (Pterodactyloidea: Azhdarchoidea)"
        url: https://doi.org/10.1371/journal.pone.0038900
        scope:
          zh: MCCM-LH 9413 的保存、下颌冠、比例估计与 2012 年亲缘、食性和地理假说。
          en: Preservation, mandibular crest and proportional estimates for MCCM-LH 9413, with dated 2012 phylogenetic, feeding and geographic hypotheses.
    readerLimitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
    readerRelatedPages:
      - targetId: txn:241001
        label:
          en: Europejara
          zh: Europejara
        context:
          zh: 返回记录父级的阅读入口，保留各出现与采集记录的范围。
          en: Return to the recorded parent reading route, retaining occurrence and collection scope.
      - targetId: txn:159349
        label:
          zh: Eopteranodon lii
          en: Eopteranodon lii
        context:
          zh: 按研究年份对读头部与地理假说，不确认直接祖先。
          en: Compare cranial and geographic interpretations by study date without establishing direct ancestry.
  atlas-node:
    name: Europejara olcadesorum
    commonName: Europejara olcadesorum
    commonNameZh: Europejara olcadesorum
    rank: species
    taxonId: txn:241003
    firstAppearance: 125.77
    lastAppearance: 121.4
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  ranges:
    - entityId: txn:241003
      rangeKind: global-composite
      taxonomicConcept: Europejara olcadesorum
      geographicScope: PBDB database represented occurrences, not a complete geographic distribution
      olderMa: 125.77
      youngerMa: 121.4
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note: PBDB first-occurrence bracket 125.77–121.4 Ma and last-occurrence bracket 125.77–121.4 Ma. Database summary uses all represented occurrences, while reader paragraphs explicitly use the eligible subset. Neither is a direct specimen date, origin or extinction estimate.
      evidenceBasis: Dated accepted-taxonomy app fields retained in P5-42 source snapshots; database-derived appearance brackets.
      confidence: low
      claimIds: []
      referenceLocators:
        - referenceId: ref-bbf448f2-2fdf-40da-91d9-c714754a9cff
          locator: P5-42 accepted hierarchy oid txn:241003; fea/fla/lea/lla in retained taxa response.
      evidenceLevel: database-derived
---

# Europejara olcadesorum
