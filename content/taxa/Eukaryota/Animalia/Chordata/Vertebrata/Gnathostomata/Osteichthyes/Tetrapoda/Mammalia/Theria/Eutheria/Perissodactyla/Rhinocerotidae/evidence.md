---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Rhinocerotidae Gray, 1821
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: 犀科
      en: Rhinoceros family
    reviewStatus: source-linked
    checkedAt: 2026-09-22
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/1
    sources:
      referenceBindings:
        - referenceId: ref-e33ba710-251e-84e2-a256-ed4bb3745e89
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
            url: https://www.checklistbank.org/dataset/316115/taxon/FNV
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
    name: Rhinocerotidae
    commonName: True Rhinoceroses
    commonNameZh: 真犀牛类
    rank: family
    taxonId: txn:43187
    firstAppearance: 40
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae
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
      reviewedAgainstReferenceVersion: bai-2020-ceratomorpha + price-2009-perissodactyl-phylogeny concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: bai-2020-ceratomorpha
          pages: Article 509
          figure: Figure 7
          quoteLocator: "Phylogenetic analysis: true rhinocerotoids"
        - relation: supports
          referenceId: price-2009-perissodactyl-phylogeny
          pages: 277–292
          quoteLocator: Extant family-level supertree and supermatrix results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae
      rangeKind: global-composite
      taxonomicConcept: Rhinocerotidae numerical range withheld pending a direct family-wide fossil synthesis
      geographicScope: No defensible global numerical scope established
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
        - referenceId: bai-2020-ceratomorpha
          locator: Article 509; Figure 7; true-rhinocerotoid topology and sampled fossil placements
        - referenceId: price-2009-perissodactyl-phylogeny
          locator: pp. 277–292; extant Rhinocerotidae results; no complete fossil family range
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Rhinocerotidae

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
仅支持本条目选用的形态、生境或取食概述；不导入来源中的旧保育数字或全部分类。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Supports the selected morphology, habitat or feeding overview only; older conservation numbers and the source’s full classification are not imported.
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
The ceratomorph character analysis includes Rhinocerotidae within the sampled “true rhinocerotoid” branch, while the living-species data combination independently treats the family as one extant ceratomorph lineage; neither analysis supplies a complete fossil family range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Two primary analyses support the higher placement from fossil morphology and living data respectively. The claim explicitly withholds total duration.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
两项一手分析分别以化石形态和现生数据支持高阶位置；主张明确不陈述总延续范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Ceratomorpha 性状分析把犀科纳入取样的“真正犀总科”分支，而现生物种联合数据分析独立地将该科视为现生 Ceratomorpha 的一个谱系；两项分析都不提供完整的化石科级范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The available sources provide early-rhinocerotoid and living-family topology, not a complete family range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 40–0 Ma display is withheld because the cited studies address early rhinocerotoid relationships and extant species topology without validating a family-wide fossil first appearance.
<!-- /evo:text -->
