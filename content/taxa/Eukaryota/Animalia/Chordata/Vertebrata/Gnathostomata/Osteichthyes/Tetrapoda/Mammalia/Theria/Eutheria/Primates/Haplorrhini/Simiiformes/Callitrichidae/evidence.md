---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Callitrichidae
    commonName: Marmosets and Tamarins
    commonNameZh: 狨科
    rank: family
    taxonId: ""
    colUsageId: 7KR
    colDatasetId: "2144"
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: taxonomic-parent
    entityKind: taxon
    contentLevel: registry-only
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: col-2026-checklistbank-316115
          relation: supports
          quoteLocator: Accepted parent chain for usage 697NS; family usage 7KR Callitrichidae immediately precedes genus usage 3FM4 Callithrix.
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae
      rangeKind: global-composite
      taxonomicConcept: Callitrichidae accepted route; numerical temporal range withheld
      geographicScope: No numerical geographic-temporal range exposed
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: col-2026-checklistbank-316115
          locator: COL26.8 release dataset 316115; accepted ancestor path recorded for usage 697NS (identity/classification only)
  catalogue-profile:
    scientificName: Callitrichidae
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: Callitrichidae
      en: Callitrichidae
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: interpretation
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Callitrichidae
            url: https://www.checklistbank.org/dataset/316115/taxon/7KR
            locator: Pinned rank and ancestry.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-1948a24d-679d-4e46-ac0d-16ed62cf4201
          metadataVariant: 0
          sourceKey: ernestLifeHistories2003
          usage:
            locator: Mammal_lifehistories_v2.txt; 4 authored records grouped under pinned COL ancestry.
            accessedAt: 2026-10-03
            readingTargets:
              - colId: PQG3
                name: Callimico goeldii
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callimico/Callimico_goeldii
              - colId: 5WVNT
                name: Callithrix flaviceps
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callithrix/Callithrix_flaviceps
              - colId: 697NS
                name: Callithrix jacchus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callithrix/Callithrix_jacchus
              - colId: 3T6ZV
                name: Leontopithecus rosalia
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Leontopithecus/Leontopithecus_rosalia
            fieldAccountCounts:
              gestation(mo): 3
              newborn(g): 3
              weaning(mo): 3
              wean mass(g): 3
              AFR(mo): 3
              max. life(mo): 3
              litter size: 4
              litters/year: 3
            scope:
              zh: 只覆盖本批资料页；未声称全部后代内容已完成。
              en: This batch’s accounts only; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - readingTargets
            - fieldAccountCounts
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Callitrichidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In the COL26.8 accepted parent chain for Callithrix jacchus usage 697NS, Callitrichidae (usage 7KR) is the family immediately above Callithrix (usage 3FM4); this records checklist placement, not a phylogenetic result.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The pinned COL26.8 record gives the accepted usage and complete parent path needed to locate Callitrichidae in this specific common-marmoset lineage. This claim does not resolve the full circumscription of Callitrichidae or phylogeny beyond that checklist path.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
固定版本的 COL26.8 记录了普通狨这一特定分类路径中的接受用名及完整父级链。本主张不扩展到狨科的完整界定，也不超出清单路径声称系统发育关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在 COL26.8 对 Callithrix jacchus 用名 697NS 的接受分类路径中，狨科（Callitrichidae，用名 7KR）是狨属（Callithrix，用名 3FM4）的直接上级科；这记录的是清单分类位置，不是系统发育结果。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; no fossil-range search or numerical endpoint is asserted for this registry-only route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The pinned COL26.8 checklist supports accepted identity and classification only; a separate fossil-range audit has not been completed for Callitrichidae.
<!-- /evo:text -->
