---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Equidae Gray, 1821
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: 马科
      en: Horse family
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
        - referenceId: ref-fa78694a-dc54-8f1f-a33a-c448afcffe67
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
            url: https://www.checklistbank.org/dataset/316115/taxon/9TL
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
    name: Equidae
    commonName: Horses
    commonNameZh: 马科
    rank: family
    taxonId: txn:42984
    firstAppearance: 56
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Equidae
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
      reviewedAgainstReferenceVersion: price-2009-perissodactyl-phylogeny concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: price-2009-perissodactyl-phylogeny
          pages: 277–292
          quoteLocator: "Abstract; Results and Discussion: Equidae resolution"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Equidae
      rangeKind: global-composite
      taxonomicConcept: Equidae numerical range withheld because the cited comprehensive phylogeny samples living species
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
        - referenceId: price-2009-perissodactyl-phylogeny
          locator: pp. 277–292; Equidae results and discussion within the extant-species supertree and supermatrix
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Equidae

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
The sampled living Equidae form one family-level branch in both combined-data perissodactyl analyses, while relationships among extant equids remain poorly agreed across trees; no fossil range or exact family origin follows from this result.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study directly tests all extant equid species in its taxonomy and reports unresolved internal relationships, which the statement preserves.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究直接检验其分类框架中的全部现生马科物种，并报告内部关系未解；表述保留这一限制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在两种奇蹄类联合数据分析中，取样的现生马科均形成一个科级分支，但不同树对现生马类内部关系的一致性仍较差；该结果不推出化石范围或精确科级起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The extant Equidae topology does not establish a complete family fossil range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 56–0 Ma display is withheld because the cited phylogeny resolves living Equidae and cannot directly validate a family-wide fossil first appearance.
<!-- /evo:text -->
