---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:95312
    scientificName: Lepidosauria
    commonName: Lizards, snakes & tuatara
    commonNameZh: 蜥蜴、蛇与喙头蜥
    rank: superorder
    parentName: Sauropsida
    extinct: false
    geography:
      - Middle Triassic Italian Alps (Megachirella specimen PZO 628)
      - Late Triassic Ischigualasto Formation, Argentina (Taytalura holotype PVSJ 698)
      - Middle Jurassic Kilmaluag Formation, Isle of Skye, Scotland (Bellairsia specimen NMS G.2022.1.1)
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
      - simoes-2018-megachirella
      - martinez-2021-taytalura
      - talanda-2022-bellairsia
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/research/Lepidosauria
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Simões et al. 2018 DOI 10.1038/s41586-018-0093-3; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: simoes-2018-megachirella
          relation: supports
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator: Geological age and specimen description; CT anatomy; combined-evidence analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/research/Lepidosauria
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/1/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: simoes-2018-megachirella
          relation: supports
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator: Combined-evidence analyses and stem-squamate placement
        - referenceId: martinez-2021-taytalura
          relation: supports
          pages: 235–238
          figure: Figures 1–2; Extended Data Figures 1–10
          quoteLocator: Phylogenetic analyses and early-diverging stem lepidosauromorph placement
        - referenceId: talanda-2022-bellairsia
          relation: supports
          pages: 99–104
          figure: Figures 1–4; Extended Data Figures 1–8
          quoteLocator: Synchrotron anatomy and Bayesian stem-squamate analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/research/Lepidosauria
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/2/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: simoes-2018-megachirella
          relation: supports
          pages: 706–709
          figure: Figure 1; geological context
          quoteLocator: Italian Alps specimen PZO 628 and Middle Triassic horizon
        - referenceId: martinez-2021-taytalura
          relation: supports
          pages: 235–238
          figure: Figure 1; Extended Data Figure 1
          quoteLocator: Ischigualasto Formation, Argentina; holotype PVSJ 698
        - referenceId: talanda-2022-bellairsia
          relation: supports
          pages: 99–104
          figure: Figure 1; Extended Data Figures 1–2
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/2/referenceLinks/2/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/research/Lepidosauria
      claimType: morphology
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/3/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: simoes-2018-megachirella
          relation: supports
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator: CT anatomy of the skull, wrist and shoulder
        - referenceId: martinez-2021-taytalura
          relation: supports
          pages: 235–238
          figure: Figures 1–2; Extended Data Figures 2–7
          quoteLocator: Three-dimensional skull preservation and CT anatomy
        - referenceId: talanda-2022-bellairsia
          relation: supports
          pages: 99–104
          figure: Figures 1–4; Extended Data Figures 1–8
          quoteLocator: ESRF ID19 synchrotron tomography and stem-lizard anatomical description
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/research/Lepidosauria
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/4/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: simoes-2018-megachirella
          relation: supports
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator: CT anatomy and combined-evidence analysis; no taxon-wide ecology result
        - referenceId: martinez-2021-taytalura
          relation: contextualizes
          pages: 235–238
          figure: Figures 1–2; Extended Data Figures 1–10
          quoteLocator: Skull description and phylogenetic analyses
        - referenceId: talanda-2022-bellairsia
          relation: contextualizes
          pages: 99–104
          figure: Figures 1–4; Extended Data Figures 1–8
          quoteLocator: Synchrotron anatomy and stem-squamate analyses
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/research/Lepidosauria
      rangeKind: global-composite
      taxonomicConcept: Lepidosauria
      geographicScope: Global or represented navigation composite
      olderMa: 240
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/research/Lepidosauria/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: simoes-2018-megachirella
          locator: pp. 706–709; Figures 1–2; Extended Data Figures 1–8; geological age, CT anatomy and combined-evidence analyses
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Lepidosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Lepidosauria navigation envelope uses the approximately 240 Ma Megachirella specimen and its tested stem-squamate placement as the older evidence anchor and living lepidosaurs at 0 Ma as the younger edge; this does not make Megachirella a direct ancestor or establish a global lepidosaur first appearance or divergence time.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The only known specimen has archived CT data and was tested in combined morphology–molecule analyses, but compression, character scoring and model settings constrain the placement. Medium confidence applies to the evidence-linked display anchor rather than a universal clade boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The cited analyses place Megachirella on the squamate stem, Taytalura as an early-diverging stem lepidosauromorph, and Bellairsia on the squamate stem; these placements are sampled analytical results and do not resolve every lepidosaur relationship.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Each primary study reports an explicit matrix-based placement supported by imaged anatomy. Medium confidence preserves sensitivity to character scoring, taxon sampling and model constraints.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/1/reviewedAgainstReferenceVersion -->
Simões et al. 2018 DOI 10.1038/s41586-018-0093-3; Martínez et al. 2021 DOI 10.1038/s41586-021-03834-3; Tałanda et al. 2022 DOI 10.1038/s41586-022-05332-6
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profile's named lepidosaur samples come from the Middle Triassic Italian Alps (Megachirella), Late Triassic Ischigualasto Formation of Argentina (Taytalura), and the Middle Jurassic Kilmaluag Formation of Skye, Scotland (Bellairsia specimen NMS G.2022.1.1); these occurrences do not establish a global lepidosaur distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Locality and geological context are stated in the respective primary studies. High confidence is limited to the named specimens and formations, with no inference about unsampled areas.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/2/reviewedAgainstReferenceVersion -->
Simões et al. 2018 DOI 10.1038/s41586-018-0093-3; Martínez et al. 2021 DOI 10.1038/s41586-021-03834-3; Tałanda et al. 2022 DOI 10.1038/s41586-022-05332-6
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/2/referenceLinks/2/quoteLocator -->
Kilmaluag Formation, Skye, Scotland; NMS G.2022.1.1 (Extended Data Fig. 1). Kirtlington elements are separate fragmentary referred comparison material in Extended Data Fig. 4.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
High-resolution imaging exposes complementary early lepidosaur anatomy: Megachirella contributes cranial, wrist and shoulder characters, Taytalura preserves a three-dimensionally exposed CT-resolved skull, and Bellairsia provides synchrotron-resolved stem-lizard anatomy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The specimens and imaging observations are directly reported, while comparative character scoring and their evolutionary interpretation depend on each study's matrix and reconstruction.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/3/reviewedAgainstReferenceVersion -->
Simões et al. 2018 DOI 10.1038/s41586-018-0093-3; Martínez et al. 2021 DOI 10.1038/s41586-021-03834-3; Tałanda et al. 2022 DOI 10.1038/s41586-022-05332-6
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited Megachirella, Taytalura and Bellairsia studies provide locality, anatomy and phylogenetic analyses but do not establish a single Lepidosauria diet, habitat, locomotor mode, body-size distribution or ecological guild; those fields remain explicitly unassigned here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The primary evidence is anatomical and analytical, not direct observation of extinct behaviour. The profile separates specimen context from unsupported taxon-wide ecological inference.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/4/reviewedAgainstReferenceVersion -->
Simões et al. 2018 DOI 10.1038/s41586-018-0093-3; Martínez et al. 2021 DOI 10.1038/s41586-021-03834-3; Tałanda et al. 2022 DOI 10.1038/s41586-022-05332-6
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
唯一已知标本具有存档 CT 数据并在形态—分子联合分析中受检验，但压扁保存、性状编码和模型设置约束其位置；中等置信度适用于有证据连接的显示锚点，而不是普遍类群边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
三项研究都给出基于矩阵的归置并有成像解剖支持；中等置信度保留性状编码、取样和模型设置的敏感性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
各研究直接说明具名标本的地点和地质背景；高置信度仅限这些化石样本，不推断未取样地区。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
成像观察直接支持标本和解剖记录，但比较性状评分及其演化解释仍依赖各研究的矩阵和复原。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
一手证据是解剖和分析结果而非灭绝动物的行为观察，因此不为鳞龙类臆测统一食性、生境、运动、体型分布或生态位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所引分析将 Megachirella 置于有鳞类干群，将 Taytalura 视为早期分化的干群鳞龙形类，并将 Bellairsia 置于有鳞类干群；这些定位是基于采样的分析结果，并未解析所有鳞龙类的亲缘关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本档案所列鳞龙类样本分别来自意大利阿尔卑斯山区的中三叠统（Megachirella）、阿根廷晚三叠世 Ischigualasto 组（Taytalura），以及苏格兰斯凯岛中侏罗世 Kilmaluag 组（Bellairsia 标本 NMS G.2022.1.1）；这些产出记录不能确定鳞龙类的全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
高分辨率成像揭示了互补的早期鳞龙类解剖信息：Megachirella 提供头骨、腕部和肩部性状，Taytalura 保留可经 CT 解析并以三维呈现的头骨，Bellairsia 则提供经同步辐射成像解析的干群蜥蜴解剖结构。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引 Megachirella、Taytalura 和 Bellairsia 研究提供产地、解剖及系统发育分析，但不能确定鳞龙类统一的食性、生境、运动方式、体型分布或生态功能类群；这些字段在此明确暂不赋值。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
鳞龙类导航范围以约 2.40 亿年前 Megachirella 标本及其经检验的有鳞类干群位置作为老端证据锚点，以 0 Ma 的现生鳞龙类作为年轻端；这不把 Megachirella 视为直系祖先，也不建立鳞龙类的全球首现或分化时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 240 Ma older edge follows the Megachirella sample and tested stem-squamate placement; it is not a direct ancestor, divergence date or global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
CT-resolved Megachirella and combined-evidence analyses provide a primary-study anchor for the lepidosaur navigation envelope; 0 Ma reflects living members.
<!-- /evo:text -->
