---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dendropsophus jamesi Moravec, Farková, Vences & Köhler, 2025
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Dendropsophus jamesi
      zh: Dendropsophus jamesi
    checkedAt: 2026-10-02
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
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
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/V5HMP
            locator: Complete paginated accepted-species search under Amphibia PH; recorded classification chain.
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
        - referenceId: ref-49e06cbd-4c4a-4a7e-9b4c-07e576ee72c8
          metadataVariant: 0
          sourceKey: itis-distribution
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - url
            - doi
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
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
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
    distributionSourceEvidence:
      sourceDatasetId: 2144
      sourceTsn: "1271532"
      recordedColSourceLink: https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=1271532
      identityMethod:
        markdown: evidence.md
        field: /records/catalogue-profile/distributionSourceEvidence/identityMethod
      originalSourceAuthorship: Moravec, Farková, Vences and Köhler, 2025
      colAuthorship: Moravec, Farková, Vences & Köhler, 2025
      exactAuthorship: false
      equivalentAuthorshipRepresentation: true
      nameLocator:
        datasetKey: 2144
        archive: checklistbank-2144-itis-2026-08-26.zip
        member: Name.tsv
        row: 975765
        key: "1271532"
      rows:
        - sourceMember: Distribution.tsv
          fields:
            taxonID: "1271532"
            area: South America
            gazetteer: text
            status: "NULL"
            referenceID: "NULL"
          locator:
            datasetKey: 2144
            archive: checklistbank-2144-itis-2026-08-26.zip
            member: Distribution.tsv
            row: 441774
            key: 1271532|South America|text|NULL|NULL
  amphibia-collection-placeholder:
    name:
      en: Dendropsophus jamesi
      zh: Dendropsophus jamesi
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
      - authority: COL26.8
        id: V5HMP
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00004.json.gz
          field: /records/371
          queryName: Dendropsophus jamesi
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Dendropsophus jamesi

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Dendropsophus jamesi
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Accepted name, rank, recorded classification and descendant roster in the pinned catalogue. No biological species synthesis or equivalence with PBDB.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定目录中的接受名称、等级、所记分类和后代名录；没有进行生物学物种综合，也不声明与 PBDB 记录等同。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/locator -->
Name.tsv ID 1271532, row 975765; Distribution.tsv rows 441774; pinned archive SHA-256 d844f03071ea8ddf144d11098543b4066cb5f80d23263beb8f088d144a99b906
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Textual geographic labels in the exact source TSN record. No inferred origin status, complete geographic range, contemporary population or species-concept equivalence beyond the recorded source linkage.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
确切来源 TSN 记录中的文字地理标签；不推断原生状态、完整分布、当代种群，也不将所记来源链接推广为额外的物种概念等同声明。
<!-- /evo:text -->

## catalogue-profile / distributionSourceEvidence / identityMethod

<!-- evo:text /records/catalogue-profile/distributionSourceEvidence/identityMethod -->
COL-supplied direct source TSN plus exact archived scientificName and species rank; authorship representation normalization limited to NFC, whitespace and and/& conjunction.
<!-- /evo:text -->
