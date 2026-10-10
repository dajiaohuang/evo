---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mesotriton alpestris (Laurenti, 1768)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Mesotriton alpestris
      zh: Mesotriton alpestris
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/1
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/2
        readingRouteKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/readingRouteKind
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
        readingLinks:
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/2/readingLinks/0/kind
            url: https://doi.org/10.6084/m9.figshare.4644424.v5
            targetPath: content/topics/research/AmphiBIO/Caudata/Salamandridae/Ichthyosaura/Ichthyosaura_alpestris
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/2/readingLinks/0/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/2/readingLinks/0/label/zh
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/2/readingLinks/1/kind
            url: https://github.com/p-pottier/AmphiTherm
            targetPath: content/topics/research/AmphiTherm/Caudata/Salamandridae/Ichthyosaura/Ichthyosaura_alpestris
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/2/readingLinks/1/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/2/readingLinks/1/label/zh
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
            url: https://www.checklistbank.org/dataset/316115/taxon/73BFQ
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
        - referenceId: ref-6db7bceb-2df2-46ef-90e7-a43ed817725b
          metadataVariant: 0
          sourceKey: amphibio
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
            - doi
            - url
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-b166b4d8-6e5a-4441-9e79-0b1afb15e5ba
          metadataVariant: 0
          sourceKey: tetrapodtraits-revisions
          usage:
            locator: Version 2.0.1 (9 March 2026), body mass and microhabitat revision notice
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - accessedAt
            - licenseAssessment
            - licenseAppliesTo
            - locator
            - scope
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/3/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - datasetUrl
            - version
            - associatedArchivedReleaseDoi
            - accessedAt
            - license
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
  amphibia-collection-placeholder:
    name:
      en: Mesotriton alpestris
      zh: Mesotriton alpestris
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
        id: 73BFQ
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00009.json.gz
          field: /records/444
          queryName: Mesotriton alpestris
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 39
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00025.json.gz
          field: /records/382
          queryName: Triturus alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 398
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00027.json.gz
          field: /records/94
          queryName: Ichthyosaura alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 178
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00028.json.gz
          field: /records/188
          queryName: Triton alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 46
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/402
          queryName: Triton wurfbainii
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/403
          queryName: Triton salamandroides
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/404
          queryName: Lacerta gyrinoides
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/405
          queryName: Gecko gyrinoides
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/406
          queryName: Salamandra alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/408
          queryName: Salamandra rubriventris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/409
          queryName: Molge alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/410
          queryName: Triton zonarius
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/411
          queryName: Triton apuanus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/412
          queryName: Hemitriton alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00036.json.gz
          field: /records/413
          queryName: Molge reiseri
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/246
          queryName: Triton alpestris apuanus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/247
          queryName: Molge alpestris reiseri
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/248
          queryName: Triton alpestris reiseri
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/249
          queryName: Triturus alpestris alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 8
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/250
          queryName: Triturus alpestris reiseri
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/251
          queryName: Triturus alpestris apuanus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/252
          queryName: Triturus alpestris montenegrinus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/253
          queryName: Triturus alpestris winterli
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/254
          queryName: Triturus alpestris bukkiensis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/255
          queryName: Triturus alpestris carpathicus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/256
          queryName: Triturus alpestris satoriensis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/257
          queryName: Triturus alpestris serdarus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/258
          queryName: Triturus alpestris piperianus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/259
          queryName: Triturus alpestris inexpectatus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/260
          queryName: Mesotriton alpestris alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/261
          queryName: Mesotriton alpestris apuanus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/262
          queryName: Ichthyosaura alpestris apuana
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/263
          queryName: Ichthyosaura alpestris inexpectata
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/264
          queryName: Ichthyosaura alpestris alpestris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/265
          queryName: Ichthyosaura alpestris montenegrina
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/266
          queryName: Ichthyosaura alpestris reiseri
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/267
          queryName: Ichthyosaura alpestris carpathica
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/268
          queryName: Ichthyosaura apuana apuana
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/269
          queryName: Ichthyosaura apuana inexpectata
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/270
          queryName: Ichthyosaura reiseri reiseri
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/271
          queryName: Ichthyosaura reiseri carpathica
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00046.json.gz
          field: /records/272
          queryName: Ichthyosaura reiseri montenegrina
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/409
          queryName: Salamandra cincta
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/434
          queryName: Triton igneus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/435
          queryName: Triton neglectus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/8
          queryName: Ichthyosaura alpestris bakonyiensis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/70
          queryName: Triton alpestris immaculatus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/71
          queryName: Triton alpestris lacusnigri
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/72
          queryName: Triturus alpestris lacustris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/73
          queryName: Triturus alpestris veluchiensis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 6
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Mesotriton alpestris

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 — Mesotriton alpestris
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
AmphiBIO_v1.csv row id Anf6512; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf6507 (exact within-source classification/name tuple)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
The Frost 2011 source concept, compilation-wide variable definitions and deposited values. Current species-concept equivalence unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
Frost 2011 来源概念、汇编的变量定义及存档值；与当前物种概念的等同性未确定。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Dataset-wide revision notice; affected original rows remain unverified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
数据集层级修订说明；受影响原始行尚未核定。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 66, 133, 2130, 2140, 2145, 2146, 2147, 2148, 4011, 4012, 4013, 4014, 4015, 4016, 4017, 4103, 4104, 4204; Metadata_AmphiTherm.xlsx
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->
