---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:56176
    scientificName: Coniferophyta
    commonName: Conifers
    commonNameZh: 松柏类
    rank: phylum
    parentName: Gymnospermae navigation aggregate
    extinct: false
    geography:
      - Living conifer sample across both hemispheres
      - Fossil calibrations used in the dated analysis
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
    confidence: medium
    referenceIds:
      - leslie-2012-conifer-hemispheres
      - leslie-2018-conifer-evolution
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: leslie-2018-conifer-evolution
      referenceLinks:
        - referenceId: leslie-2018-conifer-evolution
          relation: supports
          pages: 1531–1544
          quoteLocator: Figures 1–3; fossil-record synthesis; conclusions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: leslie-2018-conifer-evolution locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: leslie-2018-conifer-evolution
          pages: 105:1531–1544
          figure: Figures 1–3
          quoteLocator: Abstract; fossil-record synthesis and conclusions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Leslie et al. 2012 DOI 10.1073/pnas.1213621109
      referenceLinks:
        - referenceId: leslie-2012-conifer-hemispheres
          relation: supports
          pages: 16217–16221
          figure: Figure 1; SI Appendix Figures S1–S2 and Table S1
          quoteLocator: "Methods: phylogeny construction, dating and sampling; Results: dated extant-conifer tree"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Leslie et al. 2012 DOI 10.1073/pnas.1213621109
      referenceLinks:
        - referenceId: leslie-2012-conifer-hemispheres
          relation: supports
          pages: 16217–16221
          figure: Figures 1–2; SI Appendix Table S1
          quoteLocator: "Results: divergence-time patterns and diversification-model comparisons; Discussion: hemispheric and regional scope"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Leslie et al. 2012 DOI 10.1073/pnas.1213621109
      referenceLinks:
        - referenceId: leslie-2012-conifer-hemispheres
          relation: supports
          pages: 16217–16221
          figure: "Figure 1; SI Appendix: Fossil calibrations"
          quoteLocator: "Methods: molecular phylogeny and node-calibration scope"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Leslie et al. 2012 DOI 10.1073/pnas.1213621109
      referenceLinks:
        - referenceId: leslie-2012-conifer-hemispheres
          relation: supports
          pages: 16217–16221
          figure: Figures 1–2
          quoteLocator: "Discussion: regional climatic and habitat examples; limitations of a single causal explanation"
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
    - markdown: evidence.md
      field: /records/claim-rationales.zh/5
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
    - markdown: evidence.md
      field: /records/claim-statements.zh/5
  ranges:
    - entityPath: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta
      rangeKind: global-composite
      taxonomicConcept: Coniferophyta review-bounded fossil-to-living navigation range
      geographicScope: Review statement of a fossil record exceeding 300 Myr plus living conifers
      olderMa: 300
      youngerMa: 0
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Coniferophyta/research/Coniferophyta/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: leslie-2018-conifer-evolution
          locator: 1531–1544; Abstract; Figures 1–3; fossil-record synthesis and conclusions
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Coniferophyta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A fossil-informed synthesis relates extant conifer phylogeny to a much richer extinct record; it supports a sampled evolutionary framework but not a precise origin or uninterrupted global range for Coniferophyta.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review integrates living and fossil evidence explicitly, while acknowledging major extinction and sampling gaps that prevent exact endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Coniferophyta is displayed at 300–0 Ma only as a conservative review-bounded fossil-to-living navigation range: the source says the conifer record spans more than 300 million years, not that 300 Ma is an exact origin or specimen-level FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Leslie et al. (2018) explicitly states an extensive fossil record spanning more than 300 million years and discusses extinction-driven sampling limits. Medium confidence uses 300 Ma only as a conservative evidence floor.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Leslie et al. assembled an age-calibrated phylogeny sampling about 80% of living conifer species to compare sampled hemispheric clades; this molecular tree is not a complete total-group taxonomy, direct ancestor sequence or fossil occurrence ledger.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The taxon sample, sequence analysis and fossil-calibration procedure are explicit, while extinct diversity and unsampled living species limit extension beyond the analyzed tree.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The sampled living conifer tree contains broadly Northern- and Southern-Hemisphere lineages and supports a modelled contrast in their evolutionary dynamics; the result does not establish complete present or past distributions for Coniferophyta.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The hemispheric coding and comparative results are direct parts of the primary analysis, but the sample is living-species focused and cannot supply a complete fossil or geographic record.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited conifer analysis uses molecular sequences and fossil calibrations rather than a clade-wide morphological matrix; this profile therefore withholds universal leaf, cone and body-form traits instead of converting calibration fossils into body-character observations.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The methods disclose the molecular dataset and calibration role directly. High confidence applies to the study-scope limitation, not to any claim that conifers lack shared morphology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
Leslie et al. discuss broad climatic and habitat contrasts around sampled living lineages but do not measure one diet, habitat, growth form, body-size distribution or ecological guild for all Coniferophyta; those profile fields remain explicitly ungeneralized.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The primary study tests diversification and hemispheric patterns rather than a universal conifer ecological phenotype; the explicit withholding follows that study boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该综述明确整合现生与化石证据，同时承认重大灭绝与取样空缺，因此不能给出精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Leslie 等（2018）明确指出松柏类拥有超过 3 亿年的广泛化石记录，并讨论灭绝造成的采样限制。中等置信度仅把 300 Ma 用作保守证据下界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
类群取样、序列分析和化石校准流程均有明确说明；灭绝多样性与未取样现生物种限制了对分析树之外的外推。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
半球编码和比较结果属于一手分析的直接组成，但研究以现生物种为主，不能提供完整化石或地理记录。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
方法直接公开了分子数据集与校准的用途；高置信度仅指研究范围限制，并不主张松柏类缺少共享形态。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
一手研究检验的是多样化与半球格局，而非普遍的松柏类生态表型；明确保留空缺符合其研究边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项化石综合把现生松柏类系统关系与更丰富的灭绝记录联系起来；它支持取样演化框架，但不提供松柏类精确起源或连续全球范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Coniferophyta 的 300–0 Ma 仅作为保守的综述限定化石—现生导航范围：来源表述松柏类记录超过 3 亿年，并不表示 300 Ma 是精确起源或标本级首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Leslie 等构建了一个经年代校准、取样约 80% 现生松柏类物种的系统树，用于比较所采样的南北半球支系；这棵分子树不是完整总群分类、直系祖先序列或化石出现清单。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所采样的现生松柏类树包含大体分属北半球和南半球的支系，并支持其演化动态的模型化差异；该结果不能确立松柏门完整的现今或历史分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
所引松柏类分析使用分子序列与化石校准，而不是覆盖全支系的形态矩阵；因此本档案不概括普遍的叶、球果或整体形态性状，也不把校准化石改写为身体性状观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
Leslie 等讨论了所采样现生支系所处的宽泛气候和生境差异，但没有为全部松柏门测定统一的食性、生境、生长型、体型分布或生态功能群；这些档案字段明确不作全门概括。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 300 Ma edge is a conservative display floor for “more than 300 million years,” not a precise conifer origin or oldest-specimen date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Leslie et al. review an extensive conifer fossil record spanning more than 300 Myr and explicitly caution that extant molecular samples omit extinct diversity.
<!-- /evo:text -->
