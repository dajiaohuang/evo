---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:304123
    scientificName: Haootia quadriformis
    commonName: Ediacaran muscular-impression cnidarian candidate
    commonNameZh: 埃迪卡拉纪肌肉印痕刺胞动物候选
    rank: genus
    parentName: Cnidaria evidence route
    extinct: true
    geography:
      - Fermeuse Formation
      - Bonavista Peninsula
      - Newfoundland, Canada
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
    confidence: contested
    referenceIds:
      - liu-2014-haootia
      - miranda-2015-haootia
      - mcilroy-2024-haootia
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: liu-2014-haootia; miranda-2015-haootia; mcilroy-2024-haootia
      referenceLinks:
        - referenceId: liu-2014-haootia
          relation: supports
          pages: "20141202"
          figure: Figures 1–4; Supplementary Information
          quoteLocator: Plastotype OUM ÁT.424/p and original muscular-cnidarian reconstruction
        - referenceId: miranda-2015-haootia
          relation: contradicts
          pages: "20142396"
          figure: Figure 1
          quoteLocator: Reassessment of muscle orientation and staurozoan comparison
        - referenceId: mcilroy-2024-haootia
          relation: contextualizes
          pages: "1096"
          figure: Figures 2–8
          quoteLocator: Holotype re-examination and crown-staurozoan hypothesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: liu-2014-haootia locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: liu-2014-haootia
          pages: Article 20141202
          figure: Figures 1–4
          quoteLocator: Approximately 560 Ma; plastotype OUM ÁT.424/p and original reconstruction
        - relation: contradicts
          referenceId: miranda-2015-haootia
          pages: Article 20142396
          figure: Figure 1
          quoteLocator: Reassessment of muscle orientation
        - relation: contextualizes
          referenceId: mcilroy-2024-haootia
          pages: Article 1096
          figure: Figures 2–8
          quoteLocator: Holotype re-examination and crown-staurozoan hypothesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/2/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: liu-2014-haootia
          relation: supports
          pages: "20141202"
          figure: Figures 1–4; Supplementary Information
          quoteLocator: Plastotype OUM ÁT.424/p, diagnosis and original muscular-cnidarian interpretation
        - referenceId: miranda-2015-haootia
          relation: contextualizes
          pages: "20142396"
          figure: Figure 1
          quoteLocator: Reassessment of muscle orientation and staurozoan comparison
        - referenceId: mcilroy-2024-haootia
          relation: contextualizes
          pages: "1096"
          figure: Figures 2–8
          quoteLocator: Holotype re-examination and crown-staurozoan hypothesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: McIlroy et al. 2024 DOI 10.3390/life14091096
      referenceLinks:
        - referenceId: mcilroy-2024-haootia
          relation: supports
          pages: "1096"
          figure: Figures 2–3
          quoteLocator: Holotype NFM F-994, plastotype OUM ÁT.424/p and Fermeuse Formation provenance
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Liu et al. 2014 DOI 10.1098/rspb.2014.1202
      referenceLinks:
        - referenceId: liu-2014-haootia
          relation: supports
          pages: "20141202"
          figure: Figures 1–4
          quoteLocator: Fossil surface context, body orientation and discussion of a muscular cnidarian interpretation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/5/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: liu-2014-haootia
          relation: supports
          pages: "20141202"
          figure: Figures 1–4
          quoteLocator: Plastotype impression, repeated structures and original reconstruction
        - referenceId: miranda-2015-haootia
          relation: contextualizes
          pages: "20142396"
          figure: Figure 1
          quoteLocator: Alternative orientation and muscular-system assessment
        - referenceId: mcilroy-2024-haootia
          relation: contextualizes
          pages: "1096"
          figure: Figures 2–8
          quoteLocator: Later holotype re-examination and anatomical comparison
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
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis
      rangeKind: global-composite
      taxonomicConcept: Haootia muscle and staurozoan interpretation evidence boundary
      geographicScope: Fermeuse Formation, Bonavista Peninsula, Newfoundland, Canada
      olderMa: 560
      youngerMa: 560
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
      evidenceLevel: literature-synthesized
      confidence: contested
      claimPaths:
        - content/events/Haootia_muscle_and_staurozoan_interpretation/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Cnidaria/Haootia/research/Haootia_quadriformis/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: liu-2014-haootia
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Haootia quadriformis

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Haootia preserves repeated aligned impressions in one Ediacaran holotype, but muscle identity, orientation and staurozoan comparison have competing primary interpretations; the specimen does not set a Staurozoa or Cnidaria range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype impression is direct evidence, whereas tissue identity and phylogenetic placement remain explicitly disputed among the inherited sources.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Haootia is displayed at approximately 560 Ma only as the age estimate for its type material used by competing muscular-cnidarian interpretations; it is not a crown-Staurozoa FAD, direct ancestor or global genus duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Liu et al. (2014) documents the type material and original interpretation, while Miranda et al. (2015) and McIlroy et al. (2024) expose competing character readings and McIlroy et al. identify holotype NFM F-994 and plastotype OUM ÁT.424/p. Contested confidence is restricted to the approximately 560 Ma specimen age estimate.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Haootia quadriformis is retained as an Ediacaran cnidarian candidate because the holotype was described in a muscular-cnidarian framework, while later primary studies dispute the staurozoan comparison and keep its precise placement open.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The name and holotype are directly documented, but independent primary reassessment changes the interpretation of the repeated impressions and the strength of the cnidarian placement.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/2/reviewedAgainstReferenceVersion -->
Liu et al. 2014 DOI 10.1098/rspb.2014.1202; Miranda et al. 2015 DOI 10.1098/rspb.2014.2396; McIlroy et al. 2024 DOI 10.3390/life14091096
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The Haootia holotype NFM F-994 comes from the Fermeuse Formation on the Bonavista Peninsula of Newfoundland, Canada; this named occurrence does not establish a complete geographic distribution or origin centre.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The formation, peninsula and holotype provenance are documented in the primary literature. High confidence is limited to the represented locality and does not infer absence elsewhere.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Haootia is associated with a marine Ediacaran depositional setting and an attached or sessile interpretation, but the holotype preserves no direct diet, behaviour or feeding-guild evidence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The depositional context and interpretation of an attached impression are supported by the primary description, whereas feeding and locomotion beyond that interpretation are not directly observed.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The Haootia holotype preserves a roughly quadrate body impression with repeated aligned internal structures; muscle identity and their orientation remain competing interpretations rather than observed histology.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The impression geometry is direct fossil evidence, while tissue identity and orientation are explicitly reassessed in primary literature with materially different conclusions.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/5/reviewedAgainstReferenceVersion -->
Liu et al. 2014 DOI 10.1098/rspb.2014.1202; Miranda et al. 2015 DOI 10.1098/rspb.2014.2396; McIlroy et al. 2024 DOI 10.3390/life14091096
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模印痕是直接证据，但组织身份与系统位置在所继承来源之间仍有明确争议。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Liu 等（2014）记录正模标本与原始解释，Miranda 等（2015）及 McIlroy 等（2024）展示相互竞争的性状解读。争议置信度仅限于有界标本区间。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
正模名称和材料有直接记录，但不同一手研究对重复印痕的组织身份、方向及刺胞动物位置提出了不同解释，因此保留争议置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
主要描述明确给出地层组、半岛和正模产地；高置信度仅适用于所代表地点，不据此推断其他地区缺失。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
沉积背景和附着印痕解释有主要描述支持，但摄食及超出该解释的运动信息并未直接观察到。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
印痕几何是直接化石证据，而组织身份和方向在一手文献中被明确重新评估并得出不同结论。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Haootia 的一件埃迪卡拉纪正模保存重复排列印痕，但肌肉身份、方向及十字水母比较存在相互竞争的一手解释；该标本不设定十字水母纲或刺胞动物门范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Haootia 仅以约 560 Ma 显示，表示其模式材料的年龄估计；这不是冠群十字水母首现、直接祖先或该属全球存续期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Haootia quadriformis 被保留为埃迪卡拉纪刺胞动物候选，因为正模最初在肌肉型刺胞动物框架下描述，而后续一手研究对十字水母比较提出异议，并保留其确切位置的不确定性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Haootia 正模 NFM F-994 来自加拿大纽芬兰博纳维斯塔半岛的 Fermeuse 组；这一具名出现记录不能确立完整地理分布或起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Haootia 与海相埃迪卡拉纪沉积环境及附着或固着解释相关，但正模没有保存直接的食性、行为或摄食功能群证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
Haootia 正模保存了近方形的身体印痕及重复排列的内部结构；肌肉身份及其方向仍是相互竞争的解释，而不是观察到的组织学。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Preservation does not expose histology; published authors differ on muscular correspondence and how strongly the fossil can be assigned to Staurozoa.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen, explicitly bounded geochemical or genomic dataset, or stated model interval in the cited primary studies.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
20141202; approximately 560 Ma; Figures 1–4; Supplementary Information; plastotype OUM ÁT.424/p and original muscular-cnidarian reconstruction
<!-- /evo:text -->
