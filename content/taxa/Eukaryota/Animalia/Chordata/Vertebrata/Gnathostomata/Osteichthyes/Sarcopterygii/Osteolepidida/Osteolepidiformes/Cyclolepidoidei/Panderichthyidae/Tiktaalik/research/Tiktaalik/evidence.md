---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:77132
    scientificName: Tiktaalik
    commonName: Tiktaalik
    commonNameZh: 提塔利克鱼
    rank: genus
    parentName: Stem tetrapodomorph navigation grade
    extinct: true
    geography:
      - Fram Formation, southern Ellesmere Island, Nunavut, Canada
    regionalRanges:
      - canonicalRangePath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik/evidence.md#/records/ranges/1
        label: Fram Formation occurrence
    overview:
      markdown: page.en.md
      field: /records/atlas-profile/overview
    ecology:
      diet:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/diet
      habitat:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/habitat
      locomotion:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/locomotion
      bodySize:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/bodySize
      guild:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/guild
    traits:
      - markdown: page.en.md
        field: /records/atlas-profile/traits/0
      - markdown: page.en.md
        field: /records/atlas-profile/traits/1
      - markdown: page.en.md
        field: /records/atlas-profile/traits/2
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: high
    referenceIds:
      - daeschler-2006-tiktaalik-body-plan
      - shubin-2006-tiktaalik-pectoral-fin
    readerSources:
      - id: daeschler-2006-tiktaalik-body-plan
        title:
          en: A Devonian tetrapod-like fish and the evolution of the tetrapod body plan
          zh: A Devonian tetrapod-like fish and the evolution of the tetrapod body plan
        url: https://doi.org/10.1038/nature04639
        scope:
          en:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/0/scope/en
          zh:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/0/scope/zh
      - id: shubin-2006-tiktaalik-pectoral-fin
        title:
          en: The pectoral fin of Tiktaalik roseae and the origin of the tetrapod limb
          zh: The pectoral fin of Tiktaalik roseae and the origin of the tetrapod limb
        url: https://doi.org/10.1038/nature04637
        scope:
          en:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/1/scope/en
          zh:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/1/scope/zh
    readerSections:
      - id: reading-introduction
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/title/zh
            format: heading
        text:
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/text/en
        sourceIds:
          - daeschler-2006-tiktaalik-body-plan
          - shubin-2006-tiktaalik-pectoral-fin
      - id: tiktaalik-reading-0
        title:
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/title/zh
            format: heading
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/title/en
            format: heading
        text:
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/text/en
        sourceIds:
          - daeschler-2006-tiktaalik-body-plan
          - shubin-2006-tiktaalik-pectoral-fin
      - id: tiktaalik-reading-1
        title:
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/title/zh
            format: heading
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/title/en
            format: heading
        text:
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/text/en
        sourceIds:
          - daeschler-2006-tiktaalik-body-plan
          - shubin-2006-tiktaalik-pectoral-fin
      - id: tiktaalik-reading-2
        title:
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/3/title/zh
            format: heading
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/3/title/en
            format: heading
        text:
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/3/text/en
        sourceIds:
          - shubin-2006-tiktaalik-pectoral-fin
    readerLimitations:
      en:
        markdown: page.en.md
        field: /records/atlas-profile/readerLimitations/en
      zh:
        markdown: page.zh.md
        field: /records/atlas-profile/readerLimitations/zh
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: daeschler-2006-tiktaalik-body-plan
          relation: supports
          pages: 757–763
          figure: Figures 2–8
          quoteLocator: taxonomy
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      referenceLinks:
        - referenceId: daeschler-2006-tiktaalik-body-plan
          relation: supports
          pages: 757–763
          figure: Figures 2–8
          quoteLocator: fossil-range
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      referenceLinks:
        - referenceId: daeschler-2006-tiktaalik-body-plan
          relation: supports
          pages: 757–763
          figure: Figures 2–8
          quoteLocator: biogeography
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      referenceLinks:
        - referenceId: daeschler-2006-tiktaalik-body-plan
          relation: supports
          pages: 757–763
          figure: Figures 2–8
          quoteLocator: morphology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      referenceLinks:
        - referenceId: daeschler-2006-tiktaalik-body-plan
          relation: supports
          pages: 757–763
          figure: Figures 2–8
          quoteLocator: ecology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik
      rangeKind: global-composite
      taxonomicConcept: Tiktaalik
      geographicScope: Global or represented navigation composite
      olderMa: 375
      youngerMa: 375
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: high
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: daeschler-2006-tiktaalik-body-plan
          locator: pp. 757–763; Geological setting and age; Figures 2–8
      evidenceLevel: literature-synthesized
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik
      rangeKind: taxon-range
      taxonomicConcept: Tiktaalik roseae
      geographicScope: Fram Formation, southern Ellesmere Island, Nunavut, Canada
      olderMa: 375
      youngerMa: 375
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/1/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/1/evidenceBasis
      confidence: high
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Tiktaalik/research/Tiktaalik/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: daeschler-2006-tiktaalik-body-plan
          locator: pp. 757–763; Geological setting and age; Figures 2–8
      evidenceLevel: literature-synthesized
---

# Tiktaalik

## atlas-profile / readerSources / scope

<!-- evo:text /records/atlas-profile/readerSources/0/scope/en -->
The selected anatomical, relationship or time-estimate material described in this account; no complete species history or distribution is inferred.
<!-- /evo:text -->

## atlas-profile / readerSources / scope

<!-- evo:text /records/atlas-profile/readerSources/0/scope/zh -->
用于本文选取的解剖、关系或时间估计材料，不由此推断完整物种史或分布。
<!-- /evo:text -->

## atlas-profile / readerSources / scope

<!-- evo:text /records/atlas-profile/readerSources/1/scope/en -->
The selected anatomical, relationship or time-estimate material described in this account; no complete species history or distribution is inferred.
<!-- /evo:text -->

## atlas-profile / readerSources / scope

<!-- evo:text /records/atlas-profile/readerSources/1/scope/zh -->
用于本文选取的解剖、关系或时间估计材料，不由此推断完整物种史或分布。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Tiktaalik roseae is a Frasnian elpistostegalian tetrapodomorph documented by NUFV 108 and referred material; its intermediate character combination does not establish direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to tiktaalik:taxonomy.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The claim-linked Tiktaalik range in this package is the approximately 375 Ma Fram Formation occurrence, not a global genus duration inferred from absence elsewhere.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to tiktaalik:fossil-range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Documented Tiktaalik material used here comes from the Fram Formation of southern Ellesmere Island, Nunavut, Canada.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to tiktaalik:biogeography.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Tiktaalik combines scales and fin rays with a mobile neck, robust ribs and a pectoral appendage containing wrist-like joints while retaining a fin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to tiktaalik:morphology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The anatomy and depositional setting support shallow marginal-water hypotheses, but habitual terrestrial walking is not directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to tiktaalik:ecology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 tiktaalik:taxonomy。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 tiktaalik:fossil-range。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 tiktaalik:biogeography。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 tiktaalik:morphology。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 tiktaalik:ecology。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Tiktaalik roseae 是由 NUFV 108 与引证材料记录的弗拉斯期希望螈鱼类四足形动物；中间型性状组合并不证明直系祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本包有主张关联的 Tiktaalik 延限仅指约 3.75 亿年前 Fram 组出现记录，不依据其他地区的缺失推定全球属级持续时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
本包使用的 Tiktaalik 材料来自加拿大努纳武特南埃尔斯米尔岛 Fram 组。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Tiktaalik 同时保存鳞片与鳍条、可动颈部、粗壮肋骨以及含腕样关节但仍属鳍的胸附肢。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
解剖与沉积环境支持浅水边缘生境假说，但没有直接观察到经常性陆地行走。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Rounded Fram Formation occurrence; not a global absence-based duration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The approximately 375 Ma display is tied to the Fram Formation material described by Daeschler et al.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/1/uncertainty/note -->
Stage-level envelope; it does not establish absence outside the cited study sample.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/1/evidenceBasis -->
The regional record is tied to the Fram Formation specimens and rounded approximately 375 Ma age reported in the primary description.
<!-- /evo:text -->
