---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Callithrix Erxleben, 1777
    rank: genus
    sourceDatasetId: "2144"
    name:
      en: Callithrix reading path
      zh: Callithrix 属阅读路径
    reviewStatus: source-linked
    checkedAt: 2026-10-01
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/1
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/2
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/3
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/4
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/5
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              en: Catalogue of Life COL26.8 — Callithrix Erxleben, 1777
              zh: 生命名录 COL26.8 — Callithrix（Erxleben，1777）
            url: https://www.checklistbank.org/dataset/316115/taxon/3FM4
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
            - scope
        - referenceId: ref-6c8a4826-1425-800b-a23b-6d2d50291af3
          metadataVariant: 0
          sourceKey: sotodacosta2026kuhlii
          usage:
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
            - url
            - scope
        - referenceId: ref-3cf57751-f01d-8d3f-a2dc-a4d4874245a4
          metadataVariant: 0
          sourceKey: rylands1989kuhlii
          usage:
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
            - url
            - scope
        - referenceId: ref-ee5581a1-78a4-8b63-a289-842a681b414f
          metadataVariant: 0
          sourceKey: pinto1993flaviceps
          usage:
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
            - url
            - scope
        - referenceId: ref-fb3a931d-8ca5-8b29-a669-6a599cd91320
          metadataVariant: 0
          sourceKey: passamani2000geoffroyi
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-344fd230-7665-8762-a640-efe873680a69
          metadataVariant: 0
          sourceKey: demiranda2001penicillata
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
  atlas-node:
    name: Callithrix
    commonName: Marmosets
    commonNameZh: 狨属
    rank: genus
    taxonId: ""
    colUsageId: 3FM4
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
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callithrix
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas source audit
      reviewedAt: 2026-09-25
      reviewedAgainstReferenceVersion: COL26.8 ChecklistBank dataset 316115; accepted usage 697NS and complete parent chain checked 2026-09-25
      referenceLinks:
        - referenceId: col-2026-checklistbank-316115
          relation: supports
          quoteLocator: Accepted parent chain for species usage 697NS Callithrix jacchus; genus usage 3FM4 Callithrix is its immediate parent.
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae/Callithrix
      rangeKind: global-composite
      taxonomicConcept: Callithrix accepted route; numerical temporal range withheld
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
      reviewStatus: automated-audit-passed
---

# Callithrix

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned COL26.8 genus name and rank; the guide connects its six fixed-roster species IDs.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定 COL26.8 属名和等级；本导读连接固定名录中的六个种级 ID。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Hair isotope samples from 107 individuals in 30 groups across 14 municipalities in southern Bahia during 2023–2024; mixing models used six sites with dietary-resource baselines.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
支持 2023—2024 年巴伊亚南部 14 个市镇、30 个群体中 107 只个体的毛发同位素样本；食物混合模型使用其中六处地点的资源基线。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Three months of observations on each of two groups in a coastal Atlantic Forest remnant during 1980; the article uses the spelling C. kuhli.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
支持 1980 年在一片大西洋沿岸森林残片对两个群体各进行三个月的观察；文章使用拼法 C. kuhli。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Repeated-transect estimates for five primate species, including C. flaviceps, in montane rainforest in eastern Brazil; density comparisons are local to the surveyed reserve.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
支持巴西东部山地雨林对五种灵长类（包括 C. flaviceps）的重复样线估计；密度比较限于所调查保护区。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
One group observed in a southeastern Brazilian Atlantic Forest fragment from February 1993 to January 1994; diet proportions and seasonal observations refer to that group and period.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
支持 1993 年 2 月至 1994 年 1 月在巴西东南部大西洋森林残片观察的一个群体；食谱比例和季节观察仅适用于该群体和时段。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
Three free-ranging groups observed weekly from March to December 1996 in one cerradão patch and two dense-cerrado patches in Brazil’s Federal District; observed group sizes ranged from 4 to 11.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
支持 1996 年 3—12 月在巴西联邦区一片林状稀树草原和两片密生稀树草原每周观察的三个野生群体；记录群体大小为 4—11 只。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In the COL26.8 accepted parent chain for Callithrix jacchus usage 697NS, Callithrix (usage 3FM4) is the genus immediately above the accepted species usage; this records checklist placement, not a phylogenetic result.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The pinned COL26.8 record gives the accepted usage and complete parent path needed to locate Callithrix in this specific common-marmoset lineage. This claim does not resolve the full circumscription of Callithrix or phylogeny beyond that checklist path.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
固定版本的 COL26.8 记录了普通狨这一特定分类路径中的接受用名及完整父级链。本主张不扩展到狨属的完整界定，也不超出清单路径声称系统发育关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在 COL26.8 对 Callithrix jacchus 接受种用名 697NS 的分类路径中，狨属（Callithrix，用名 3FM4）是该接受种的直接上级属；这记录的是清单分类位置，不是系统发育结果。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; no fossil-range search or numerical endpoint is asserted for this registry-only route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The pinned COL26.8 checklist supports accepted identity and classification only; a separate fossil-range audit has not been completed for Callithrix.
<!-- /evo:text -->
