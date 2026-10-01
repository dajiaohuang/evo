---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:36965
    scientificName: Ichthyostega
    commonName: Ichthyostega
    commonNameZh: 鱼石螈
    rank: genus
    parentName: Stem tetrapodomorphs
    extinct: true
    geography:
      - East Greenland
      - Upper Devonian limnic deposits
    regionalRanges:
      - canonicalRangePath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega/evidence.md#/records/ranges/1
        label: East Greenland Famennian mobility sample
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
      - pierce-2012-ichthyostega-mobility
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: pierce-2012-ichthyostega-mobility; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: pierce-2012-ichthyostega-mobility
          pages: 523–526
          figure: Figures 1–3; Supplementary Figures 1–6
          quoteLocator: East Greenland specimen context
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Pierce et al. 2012 DOI 10.1038/nature11124
      referenceLinks:
        - referenceId: pierce-2012-ichthyostega-mobility
          relation: supports
          pages: 523–526
          figure: Figures 1–3
          quoteLocator: Study introduction and comparative mobility analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Pierce et al. 2012 DOI 10.1038/nature11124
      referenceLinks:
        - referenceId: pierce-2012-ichthyostega-mobility
          relation: supports
          pages: 523–526
          quoteLocator: East Greenland specimen context
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Pierce et al. 2012 DOI 10.1038/nature11124
      referenceLinks:
        - referenceId: pierce-2012-ichthyostega-mobility
          relation: supports
          pages: 523–526
          figure: Figures 1–3; Supplementary Figures 1–6
          quoteLocator: Comparative joint-mobility results and discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Pierce et al. 2012 DOI 10.1038/nature11124
      referenceLinks:
        - referenceId: pierce-2012-ichthyostega-mobility
          relation: supports
          pages: 523–526
          quoteLocator: Methods, mobility reconstruction and discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega
      rangeKind: global-composite
      taxonomicConcept: Ichthyostega
      geographicScope: East Greenland
      olderMa: 372.15
      youngerMa: 358.86
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
        - content/events/Ichthyostega_three-dimensional_joint_mobility/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: pierce-2012-ichthyostega-mobility
          locator: pp. 523–526; Figures 1–3 and Supplementary Information
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnotetrapodomorpha/Tetrapodomorpha/Ichthyostegidae/Ichthyostega/research/Ichthyostega
      rangeKind: taxon-range
      taxonomicConcept: Ichthyostega
      geographicScope: East Greenland
      olderMa: 372.15
      youngerMa: 358.86
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
      evidenceLevel: literature-synthesized
      confidence: high
      claimIds:
        - claim:event:ichthyostega-joint-mobility
        - claim:taxon:ichthyostega:fossil-range
      referenceLocators:
        - referenceId: pierce-2012-ichthyostega-mobility
          locator: pp. 523–526; Figures 1–3; Supplementary Figures 1–6
      reviewStatus: automated-audit-passed
---

# Ichthyostega

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ichthyostega is bounded here by specimens from Famennian Upper Devonian deposits of East Greenland used in the cited mobility study; this bounded sample context is not a global distribution or exact complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Ichthyostega: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The Ichthyostega mobility study analyses the genus as an early tetrapod and tests its limb mechanics against living analogues; the mechanical result is not a complete phylogenetic hypothesis.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The genus-level study and comparison are explicit, but a mobility experiment cannot by itself resolve all early-tetrapod relationships; the claim is kept at the reported scope.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The Ichthyostega specimens reconstructed in the cited study are from East Greenland Upper Devonian deposits; this named sample does not establish a global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The specimen and locality context are explicit in the primary study. The claim does not infer distribution beyond the documented sample.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Three-dimensional reconstruction of Ichthyostega limb joints found no long-axis rotations required for a typical lateral-sequence walk in the tested model, while retaining the possibility that this is a specialization of Ichthyostega.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Micro-CT reconstruction and five living analogues quantitatively constrain feasible motion, but model assumptions and the distinction between feasible motion and observed behaviour remain material limitations.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited Ichthyostega mobility study constrains modeled limb motion but does not directly establish diet, habitat preference or observed locomotor behaviour for the genus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The primary evidence is a reconstruction of joint mobility, not direct observation of an extinct animal. Ecological and behavioural fields remain explicitly unresolved.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
鱼石螈：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
关节活动研究明确以早期四足动物鱼石螈为对象，但运动实验不能解决全部早期四足动物亲缘关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
研究明确给出东格陵兰晚泥盆世标本背景；这一采样地点不构成全球属级分布估计。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
三维重建与五种现生类比对象限制了可行关节运动，但模型假设和行为差异仍然重要。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
论文提供的是关节运动重建而非灭绝动物的直接生态观察，因此食性、生境与行为字段不作臆测。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所引 Ichthyostega 运动能力研究约束了模型中的肢体运动，但未直接确定该属的食性、生境偏好或实际观察到的运动行为。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Ichthyostega 的运动能力研究将该属作为早期四足动物分析，并以现生类比对象检验其肢体力学；这些力学结果并非完整的系统发育假说。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所引研究中重建的 Ichthyostega 标本来自格陵兰东部上泥盆统沉积；这些明确地点的样本不能确定其全球分布范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Ichthyostega 肢体关节的三维重建表明，受检模型无法完成典型侧序步态所需的长轴旋转；研究同时保留了这可能是 Ichthyostega 特化特征的解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Ichthyostega 在此由所引运动研究使用的东格陵兰法门阶晚泥盆世沉积物标本约束；这一有限样本背景不是全球分布或精确完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-level envelope; it does not establish absence outside the cited study sample.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Famennian stage envelope contextualizes the East Greenland specimens reconstructed by Pierce et al.; it is not a global genus duration.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/1/uncertainty/note -->
Famennian stage envelope for the reconstructed East Greenland specimens; not a global genus duration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/1/evidenceBasis -->
The named specimens and joint-mobility study provide a bounded occurrence context.
<!-- /evo:text -->
