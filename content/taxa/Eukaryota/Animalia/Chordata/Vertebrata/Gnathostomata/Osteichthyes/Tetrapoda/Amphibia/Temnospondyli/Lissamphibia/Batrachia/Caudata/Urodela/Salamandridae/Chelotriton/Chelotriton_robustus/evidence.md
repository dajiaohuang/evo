---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Chelotriton robustus
    rank: species
    sourceTaxonId: txn:393933
    name:
      en: Chelotriton robustus
      zh: Chelotriton robustus
    checkedAt: 2026-10-02
    sections:
      - topic: taxonomy
        title:
          en: Recorded fossil concept
          zh: 来源记载的化石概念
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/0/text/zh
        sourceIds:
          - pbdb
      - topic: fossil
        title:
          en: Fossil occurrence evidence
          zh: 化石出现记录
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/1/text/zh
        sourceIds:
          - pbdb
      - topic: morphology
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc4589347-robustus
        title:
          en: Honeycomb-like sculpture distinguishes the cited robustus material
          zh: 蜂窝样雕纹区别所引 robustus 材料
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/2/text/zh
      - topic: development
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc4589347-robustus
        title:
          en: Ossified wrists are a cited comparison, not a growth curve
          zh: 骨化腕部是引述比较而非生长曲线
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/3/text/zh
      - topic: overview
        readerSectionKind: amphibia-collection-placeholder
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
        sourceIds:
          - amphibia-collection-status
    sources:
      referenceBindings:
        - referenceId: ref-f1e3d50c-c9eb-48f1-8ba8-098589af8953
          metadataVariant: 0
          sourceKey: pbdb
          usage:
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - version
            - url
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
          metadataVariant: 0
          sourceKey: primary-fossil-pmc4589347-robustus
          usage:
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - attribution
            - locator
            - scope
        - referenceId: ref-amphibia-collection-index-2026-10-03
          metadataVariant: 0
          sourceKey: amphibia-collection-status
          usage:
            locator: docs/amphibia-content/reference-index.md
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
    originalBibliography:
      markdown: evidence.md
      field: /records/pbdb-fossil-reader/originalBibliography
    occurrenceEvidence:
      - occurrenceId: occ:1317230
        collectionId: col:71942
        acceptedTaxonId: txn:393933
        taxonomicDifference: null
        referenceId: ref:58367
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography
        locality:
          countryCode: DE
          stateProvince: Rheinland-Pfalz
          county: null
        stratigraphy:
          group: null
          formation: Enspel
          member: null
        olderAgeMa: 27.3
        youngerAgeMa: 23.04
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
    primaryStudyScopes:
      - doi: 10.1371/journal.pone.0137068
        referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
        sourceKey: primary-fossil-pmc4589347-robustus
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC4589347/article.xml
        sourceConcept: 2015 comparative robustus anatomical literature, not MB.Am.45 identity
        evidenceRead:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/primaryStudyScopes/0/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY (version not explicit in XML)
          licenseUrl: https://creativecommons.org/licenses/by/
          attribution: Own factual synthesis and Chinese translation of the original study; no figures reproduced.
        sectionEvidence:
          - sectionOrdinal: 0
            topic: morphology
            heading:
              en: Honeycomb-like sculpture distinguishes the cited robustus material
              zh: 蜂窝样雕纹区别所引 robustus 材料
            referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
            sourceKey: primary-fossil-pmc4589347-robustus
            locator: PMC4589347 XML sec011 paragraph 0; sec014 paragraph 1; sec020 paragraph 10
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/zh
          - sectionOrdinal: 1
            topic: development
            heading:
              en: Ossified wrists are a cited comparison, not a growth curve
              zh: 骨化腕部是引述比较而非生长曲线
            referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
            sourceKey: primary-fossil-pmc4589347-robustus
            locator: PMC4589347 XML sec014 paragraph 3; sec020 paragraphs 8, 10
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/zh
    primaryBiologicalSynthesisComplete: false
  amphibia-collection-placeholder:
    name:
      en: Chelotriton robustus
      zh: Chelotriton robustus
    sections:
      - topic: overview
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
    collectionLedgerPath: docs/amphibia-content/full-roster-literature-collection.json
    concepts:
      - authority: PBDB snapshot2026-10-02
        id: txn:393933
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/70
          queryName: Chelotriton robustus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Chelotriton robustus

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:393933; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/locator -->
Diagnosis and raw XML Material/locality, Affinities, skull outline/roof/other head parts, postcranium, heterochrony, Chelotriton diversity and phylogenetic method paragraphs read; MB.Am.45 genus-only specimen, comparative named taxa kept separate; no original cited specimens, figures or matrix independently examined
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/1/usage/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## pbdb-fossil-reader / originalBibliography

<!-- evo:text /records/pbdb-fossil-reader/originalBibliography -->
R. Estes. 1981. Handbuch der Paläoherpetologie/Encyclopedia of Paleoherpetology. Part 2. Gymnophiona, Caudata. Gustav Fischer Verlag, Stuttgart
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/0/bibliography -->
T. Tütken and J. Absolon. 2015. Late Oligocene ambient temperatures reconstructed by stable isotope analysis of terrestrial and aquatic vertebrate fossils of Enspel, Germany. Palaeobiodiversity and Palaeoenvironments 95:17-31
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
Partial database and primary-study fossil reader. Specimen identity, preservation, historical assignments and inferred life habits retain separate scopes. Remaining biological synthesis are incomplete.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
部分数据库及原研究化石读本。标本身份、保存状况、历史归属及推断生活习性各自限定范围，其余生物学综述及。
<!-- /evo:text -->

## pbdb-fossil-reader / primaryStudyScopes / evidenceRead

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/evidenceRead -->
Diagnosis and raw XML Material/locality, Affinities, skull outline/roof/other head parts, postcranium, heterochrony, Chelotriton diversity and phylogenetic method paragraphs read; MB.Am.45 genus-only specimen, comparative named taxa kept separate; no original cited specimens, figures or matrix independently examined
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/en -->
The paper describes robustus as having honeycomb-like sculpture across bones exposed to the skin, contrasting with predominantly pustular relief in most other Chelotriton material. Its vertebral spine tables are cited as wide plates with pits and very fine pustules. MB.Am.45 combines mostly pustular surfaces with a more honeycomb-like maxillary region; that mixture is not a robustus identification. These are literature-based comparative features, not a new population sample or measurements of skin itself. The authors leave the developmental significance of the sculpture differences uncertain.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/zh -->
论文描述 robustus 与皮肤接触骨面为蜂窝样雕纹，与多数其他 Chelotriton 主要瘤状浮纹对照。其椎骨神经棘顶板引述为带凹窝及细小瘤点的宽板。MB.Am.45 结合多数瘤状骨面及较蜂窝样颌骨区，不是 robustus 鉴定。这些是文献比较特征，不是新种群样本或皮肤本身测量。作者保留雕纹差异发育意义不确定。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/en -->
Robustus is among the taxa cited as having ossified wrist elements, alongside other fossil and living newts. The observation does not determine an age at ossification, developmental rate or complete digit formula for the species. Its relatively small honeycomb-sculptured vertebrae are contrasted with larger pustular vertebrae assigned paradoxus, but body-size differences cannot alone resolve ontogeny or species boundaries. MB.Am.45’s humerus, ulna and radius lengths remain with that unassigned specimen rather than being copied to robustus.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/zh -->
robustus 与其他化石及现生蝾螈一起，被引述有骨化腕部；该观察不确定骨化年龄、发育速率或本种完整指骨式。其较小蜂窝雕纹椎骨与较大、归 paradoxus 的瘤状椎骨对照，但体型差异本身不能解决个体发育或种界。MB.Am.45 的肱骨、尺骨、桡骨长度保留在未归种标本，不能复制给 robustus。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->
