---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Canidae G. Fischer von Waldheim, 1817
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: 犬科
      en: Canid family
    reviewStatus: source-linked
    checkedAt: 2026-09-23
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-80aa26f5-0f78-8c95-addc-14b0d5b10e31
          metadataVariant: 0
          sourceKey: account
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/C3K84
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  atlas-node:
    name: Canidae
    commonName: Dogs & Wolves
    commonNameZh: 犬与狼
    rank: family
    taxonId: txn:41189
    firstAppearance: 40
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canidae
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: nyakatura-2012-carnivora-supertree concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: nyakatura-2012-carnivora-supertree
          pages: Article 12
          figure: Figure 3
          quoteLocator: Canidae subtree and higher caniform topology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Canidae
      rangeKind: global-composite
      taxonomicConcept: Canidae — source-bounded sample window — numerical range withheld
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
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: nyakatura-2012-carnivora-supertree
          locator: Article 12; Canidae subtree and higher caniform topology
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Canidae

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
支持页面所述犬科身体形态线索及科内饮食、社会行为差异；不采用页面中的科级数量、旧分类或管理叙述。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Supports the described canid body-form traits and variation in diet and social behavior; family counts, older classification and management statements are not used.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的名称、作者、等级与父子关系；不是系统发育分歧证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned names, authorship, ranks and parent links; not evidence of phylogenetic divergence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Canidae is recovered as an extant family branch in the complete living-carnivoran supertree, whose canid subtree samples dog-like and fox-like lineages; extinct canid radiations and the family’s earliest fossil range are outside that tree’s direct coverage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study supports living family topology and explicitly discusses the canid subtree. Fossil exclusions prevent temporal overreach.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究支持现生科级拓扑并明确讨论犬科子树；化石排除项防止时间外推。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
犬科在完整现生食肉类超级树中被恢复为一个现生科级分支，其犬科子树取样犬样与狐样谱系；灭绝犬科辐射及该科最早化石范围不在该树直接覆盖内。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the extant-carnivoran supertree does not directly document extinct canid radiations or a fossil family range. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Updating the evolutionary history of Carnivora (Mammalia): a new species-level supertree complete with divergence time estimates found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
