---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Chelotriton ogygius
    rank: species
    sourceTaxonId: txn:393932
    name:
      en: Chelotriton ogygius
      zh: Chelotriton ogygius
    reviewStatus: source-linked
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
      - topic: fossil
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc4589347-ogygius
        title:
          en: An apparently lost type limits comparison at Orsberg
          zh: 模式似已遗失，限制 Orsberg 比较
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/2/text/zh
      - topic: morphology
        readerSectionKind: primary-fossil-research
        sourceIds:
          - primary-fossil-pmc4589347-ogygius
        title:
          en: A historical vertebral count is an estimate from incomplete material
          zh: 历史椎骨数是部分材料估计
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
          sourceKey: primary-fossil-pmc4589347-ogygius
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
    occurrenceEvidence: []
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
        sourceKey: primary-fossil-pmc4589347-ogygius
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC4589347/article.xml
        sourceConcept: 2015 discussion of historical ogygius type and locality; no independently reexamined type
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
            topic: fossil
            heading:
              en: An apparently lost type limits comparison at Orsberg
              zh: 模式似已遗失，限制 Orsberg 比较
            referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
            sourceKey: primary-fossil-pmc4589347-ogygius
            locator: PMC4589347 XML sec007 paragraphs 2, 5; sec009 paragraph 2; sec008 paragraph 0
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
            topic: morphology
            heading:
              en: A historical vertebral count is an estimate from incomplete material
              zh: 历史椎骨数是部分材料估计
            referenceId: ref-e2e04022-53dd-4a54-a9de-957c7d568588
            sourceKey: primary-fossil-pmc4589347-ogygius
            locator: PMC4589347 XML sec007 paragraph 5; sec009 paragraph 2
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
      en: Chelotriton ogygius
      zh: Chelotriton ogygius
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
        id: txn:393932
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/72
          queryName: Chelotriton ogygius
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

# Chelotriton ogygius

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:393932; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
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

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
Partial database and primary-study fossil reader. Specimen identity, preservation, historical assignments and inferred life habits retain separate scopes. Remaining biological synthesis and external expert review are incomplete.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
部分数据库及原研究化石读本。标本身份、保存状况、历史归属及推断生活习性各自限定范围，其余生物学综述及外部专家审评尚未完成。
<!-- /evo:text -->

## pbdb-fossil-reader / primaryStudyScopes / evidenceRead

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/evidenceRead -->
Diagnosis and raw XML Material/locality, Affinities, skull outline/roof/other head parts, postcranium, heterochrony, Chelotriton diversity and phylogenetic method paragraphs read; MB.Am.45 genus-only specimen, comparative named taxa kept separate; no original cited specimens, figures or matrix independently examined
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/en -->
The 2015 authors state that ogygius came from the same locality as MB.Am.45, but comparison is hampered by the apparent loss of its type and only known specimen. The old specimen was illustrated in ventral view, whereas MB.Am.45 preserves dorsal anatomy. Shared locality is therefore not proof of shared species identity, and MB.Am.45’s new cast is not a replacement ogygius type. The bounded empty occurrence query in the database reader does not erase this historical literature record; neither source proves a complete geographic or temporal range.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/zh -->
2015 年作者记 ogygius 与 MB.Am.45 来自同一地点，但模式及唯一已知标本似已遗失，限制比较。旧标本图为腹面，MB.Am.45 保存背面解剖。共享地点不证明同种，新 MB.Am.45 翻模也不是替代 ogygius 模式。数据库读本限定查询未返出现记录，不消除这一历史文献记录；二者都不证明完整地理或时间范围。
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
The paper recounts an older estimate of twelve presacral vertebrae for ogygius: the first ten were preserved, with presumed sacral and proximal tail vertebrae separated by a gap. This remains a historical reconstruction, rather than a new verified count or invariant species character. Other Chelotriton material was reported with different sacral positions, and the authors note vertebral variation even among living salamanders. Without comparable type material, the 2015 study neither resolves ogygius identity nor supplies its feeding, reproduction or growth chronology.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / evidenceSummary

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/zh -->
论文转述 ogygius 较早荐前椎十二枚估计：前十枚保存，推定荐椎及近端尾椎之间有缺口。这是历史重建，不是新核实计数或恒定物种性状。其他 Chelotriton 材料有不同荐椎位置报告，作者提醒现生蝾螈也有椎数变化。缺少可比模式材料，2015 年研究未解决 ogygius 身份，也未提供取食、繁殖或生长年代。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/en -->
Published specimen or comparative scope only; database concept equivalence, species-wide biology and full phylogenetic placement are not independently certified.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/pbdb-fossil-reader/primaryStudyScopes/0/sectionEvidence/1/scope/zh -->
仅限出版标本或比较范围；数据库概念等同性、全物种生物学及完整系统位置未经独立认证。
<!-- /evo:text -->
