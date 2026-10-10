---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cacajao Lesson, 1840
    rank: genus
    sourceDatasetId: "2144"
    name:
      en: Cacajao reading path
      zh: Cacajao 属阅读路径
    checkedAt: 2026-10-03
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - silva2022cacajao
          - boubli2008ayresi
          - heymann2010ucayalii
          - leon2026ucayalii
          - iucn2021rubicundus
          - salve2025novaesi
          - salve2025rubicundus
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
      - topic: overview
        sourceIds:
          - taxonomy
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: overview
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - vieira2008Mamiraua
          - heymann2025UcayaliiBoundary
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: overview
        sourceIds:
          - taxonomy
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: readingPath
        sourceIds:
          - heymann2025UcayaliiSeasonality
          - vieira2008Mamiraua
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              en: Catalogue of Life COL26.8 — Cacajao Lesson, 1840
              zh: 生命名录 COL26.8 — Cacajao（Lesson，1840）
            url: https://www.checklistbank.org/dataset/316115/taxon/62JQP
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
            catalogueLocator: data/catalogue-of-life/releases/2026-08-20/registry/hierarchy/children/parent-d1.jsonl.gz
            accessedAt: 2026-10-03
            parentId: 62JQP
            readingTargets:
              - colId: BMP3K
                name: Cacajao amuna Silva, Amaral, Roos, Bowler, Röhe, Sampaio, Bertuol, Santana, Silva Júnior, Rylands et al., 2022
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_amuna
              - colId: BSCWK
                name: Cacajao rubicundus (I. Geoffroy Saint-Hilaire & Deville, 1848)
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_rubicundus
              - colId: BSCYK
                name: Cacajao novaesi Hershkovitz, 1987
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_novaesi
              - colId: BSD3J
                name: Cacajao ucayalii Thomas, 1928
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_ucayalii
              - colId: P4C6
                name: Cacajao ayresi Boubli, Silva, Amado, Hrbek, Pontual & Farias, 2008
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_ayresi
              - colId: P4C7
                name: Cacajao calvus (I. Geoffroy Saint-Hilaire, 1847)
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_calvus
              - colId: P4C8
                name: Cacajao hosomi Boubli, Silva, Amado, Hrbek, Pontual & Farias, 2008
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_hosomi
              - colId: P4C9
                name: Cacajao melanocephalus (Humboldt, 1812)
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_melanocephalus
          originalFields:
            - id
            - title
            - url
            - scope
            - catalogueLocator
            - accessedAt
            - parentId
            - readingTargets
        - referenceId: ref-7c364ba2-5000-8633-adff-de1e59e59fb1
          metadataVariant: 0
          sourceKey: silva2022cacajao
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
        - referenceId: ref-05ca255d-4ea5-8c8c-a50c-b978f8e07db6
          metadataVariant: 0
          sourceKey: boubli2008ayresi
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
        - referenceId: ref-fede03b5-28aa-8bf2-abe0-05cd0ca4420a
          metadataVariant: 0
          sourceKey: heymann2010ucayalii
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
        - referenceId: ref-5c07b442-fe04-82a4-ab3c-2a6370234db5
          metadataVariant: 1
          sourceKey: leon2026ucayalii
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
        - referenceId: ref-5e7f2936-e3c6-89c5-a04e-7334e54017fc
          metadataVariant: 0
          sourceKey: iucn2021rubicundus
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
        - referenceId: ref-5a452108-85ac-4d43-9d01-287c31b13a5e
          metadataVariant: 0
          sourceKey: salve2025novaesi
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-f625f3eb-6401-45a2-ad4d-ec5c9720bc39
          metadataVariant: 0
          sourceKey: salve2025rubicundus
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-2bbbd988-b0a6-4105-b535-f1d77d8eda57
          metadataVariant: 0
          sourceKey: pantheriaWR05
          usage:
            locator: PanTHERIA WR05 August 2008; 2 authored entries grouped under Cacajao by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            licenseAssessment: CC0-archive-attributed-summary
            scope:
              zh: 仅概括本批有内容的历史条目，不代表完整后代覆盖。
              en: Only this batch’s authored historical entries; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-c9ca5cd3-8f21-4b65-b2d1-9f76dd3b9a8b
          metadataVariant: 0
          sourceKey: pantheriaConsolidation2009
          usage:
            locator: Ecological Archives E090-184-D1 metadata.htm; Class IV Table 1 (variable scope), Table 2 (consolidation), Class V B–C (source handling and derived fields).
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 仅解释历史汇总、中位数、部分 GLM 调整及字段边界；不证明 COL26.8 物种概念等同。
              en: Historical consolidation, medians, partial GLM adjustment and variable scopes; not proof of equivalent COL26.8 species concepts.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 2 authored same-name records placed under Cacajao by pinned COL ancestry.
            accessedAt: 2026-10-02
            scope:
              zh: 仅本批已写入资料条目的阅读路线，不代表完整后代覆盖。
              en: Route through this batch’s authored records only; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
        - referenceId: ref-50d83663-5d53-4d60-83a3-2b2a8461aa64
          metadataVariant: 0
          sourceKey: amnioteLifeHistoryMethods2015
          usage:
            locator: "Ecological Archives E096-269-D1 metadata: Methods, Class IV definitions; Supplemental Table 9 field definitions."
            accessedAt: 2026-10-02
            scope:
              zh: 中位数、最长寿命最大记录、历史种／亚种数据继承和字段定义。
              en: Medians, maximum longevity, historical species/subspecies inheritance and field definitions.
            sourceRetrievalUrl: https://www.esapubs.org/archive/ecol/E096/269/metadata.php
            sourceVersion: August 2015 archive
            readerBoundaries:
              - No field values treated as independent individual measurements.
              - No guarantee of present taxonomic concept equivalence.
              - Original input papers not individually reviewed.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
            - sourceRetrievalUrl
            - sourceVersion
            - readerBoundaries
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: EltonTraits 1.0; 2 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 2
              foraging: 2
              activity: 2
            readingTargets:
              - name: Cacajao calvus
                colId: P4C7
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_calvus
              - name: Cacajao melanocephalus
                colId: P4C9
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_melanocephalus
            scope:
              zh: 本批资料阅读路线，不是整个类群的生态总结。
              en: Route through this batch, not an ecological summary for the entire group.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - authoredFieldGroupCounts
            - readingTargets
            - scope
        - referenceId: ref-23d71769-a573-4f3c-8284-3271a2ef8b53
          metadataVariant: 0
          sourceKey: eltonTraitsMethods2014
          usage:
            locator: Ecological Archives E095-178-D1 metadata.php; Class II B translation/interpolation/limitations; Class IV Tables 1–4.
            accessedAt: 2026-10-02
            scope:
              zh: 文献描述的半定量转换、字段代码、插补与历史分类边界；未读底层文献。
              en: Semiquantitative translation, field codes, interpolation and historical taxonomy; underlying literature not read.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
        - referenceId: ref-d01c55bb-bcd3-4014-aef5-f79ddfb0dc71
          metadataVariant: 0
          sourceKey: vieira2008Mamiraua
          usage:
            locator: Printed pp45–49, methods, results and Figure 4; PDF pages 5–9.
            accessedAt: 2026-10-03
            scope:
              zh: Mamirauá 巴西红色型的访谈、定向搜索、直接取食与接触观察；不作全年生态或密度推断。
              en: Interviews, targeted searches and direct feeding/contact observations of the Brazilian Mamirauá red form; not annual ecology or density.
            readingTargets:
              - colId: BSCWK
                name: Cacajao rubicundus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_rubicundus
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-42153e14-b23d-4348-9acd-7831595de2c6
          metadataVariant: 0
          sourceKey: heymann2025UcayaliiBoundary
          usage:
            locator: Introduction, paragraph identifying earlier C. calvus rubicundus and C. calvus ucayalii names.
            accessedAt: 2026-10-03
            scope:
              zh: 只用于解释秘鲁旧名资料不能自动归属巴西现行物种；本批不引入其季节性数据。
              en: Only the Peruvian older-name boundary is used; no seasonal data from that study are imported in this batch.
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
        - referenceId: ref-42153e14-b23d-4348-9acd-7831595de2c6
          metadataVariant: 0
          sourceKey: heymann2025UcayaliiSeasonality
          usage:
            locator: Methods, Results and discussion; Figures 1–2; printed pp10–11, PDF pages 2–3.
            accessedAt: 2026-10-03
            scope:
              zh: Quebrada Blanco 的 1985–2022 年机会性目击、两月区间相关分析及明确待检验的栖地移动情景；不作种群数量、因果或实际迁移路线证据。
              en: Opportunistic 1985–2022 Quebrada Blanco encounters, bimonthly correlations and an explicitly hypothetical habitat-shift scenario; not abundance, causality or tracked migration.
            readingTargets:
              - colId: BSD3J
                name: Cacajao ucayalii
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Pitheciidae/Pitheciinae/Cacajao/Cacajao_ucayalii
          originalFields:
            - id
            - title
            - url
            - locator
            - accessedAt
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Cacajao

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned genus identity and classification; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定属级身份与分类；不作为生物学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Systematic comparison of known Cacajao taxa using cytochrome-b sequences, including samples historically assigned to C. calvus subspecies; it is taxonomic evidence, not a field census.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
以细胞色素 b 序列比较已知 Cacajao 分类单元，包括历史上归入 C. calvus 亚种的样本；该研究提供分类证据，不是野外普查。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Black-uakari surveys and specimen comparisons using morphology and molecular data; describes C. ayresi from the Rio Aracá basin.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
支持黑秃乌卡里的野外调查、形态与分子标本比较；描述来自 Rio Aracá 流域的 C. ayresi。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Review of published and unpublished habitat records under the former trinomial C. calvus ucayalii; most recorded localities were terra firme or mixed habitat.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
依据旧三名法 C. calvus ucayalii 汇总已发表和未发表的栖地记录；多数记录地点属于 terra firme 或混合栖地。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Analysis of 1,155 vocalizations from a wild population, describing 12 call types and observed call-tail-wag combinations; local bioacoustic evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
分析一个野生种群的 1,155 次发声，描述 12 种叫声类型及观察到的叫声与摆尾组合；属于局地声学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
A 2021 assessment using the subspecies treatment C. calvus rubicundus; it states that field ecology data were unavailable at that time.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
2021 年评估采用亚种处理 C. calvus rubicundus，并说明当时缺少野外生态数据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en -->
Official ICMBio SALVE assessment of C. novaesi published in 2025; category date is 2019. It supports the species-level name, regional range, habitats and threat assessment, but not a complete ecological account or population estimate.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh -->
ICMBio SALVE 官方评估于 2025 年发布；类别日期为 2019 年。支持 C. novaesi 的种级名称、区域分布、栖地和威胁评估，但不构成完整生态综述或种群估计。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en -->
Official ICMBio SALVE assessment of C. rubicundus published in 2025; category date is 2019. It supports three reported occurrence areas and explicit ecological and population-data gaps.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh -->
ICMBio SALVE 官方评估于 2025 年发布；类别日期为 2019 年。支持 C. rubicundus 的三个报告出现区域，并明确说明生态与种群资料缺口。
<!-- /evo:text -->
