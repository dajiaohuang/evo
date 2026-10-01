---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:19082
    scientificName: Mollisonia symmetrica
    commonName: Mollisonia neuroanatomy sample
    commonNameZh: 莫里逊虫神经解剖样本
    rank: genus
    parentName: Stem-chelicerate evidence route
    extinct: true
    geography:
      - Burgess Shale
      - British Columbia, Canada
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
      - ortega-hernandez-2022-mollisonia-neuroanatomy
      - aria-caron-2019-mollisonia-plenovenatrix
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: ortega-hernandez-2022-mollisonia-neuroanatomy primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: ortega-hernandez-2022-mollisonia-neuroanatomy
          relation: supports
          pages: 410; Figures 1–5; Supplementary Figures
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: ortega-hernandez-2022-mollisonia-neuroanatomy primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: ortega-hernandez-2022-mollisonia-neuroanatomy
          relation: supports
          pages: 410; Figures 1–5; Supplementary Figures
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.08-static-v5-rc43
      referenceLinks:
        - referenceId: ortega-hernandez-2022-mollisonia-neuroanatomy
          relation: supports
          pages: 410; Figures 1–5; Supplementary Figures
        - referenceId: aria-caron-2019-mollisonia-plenovenatrix
          relation: supports
          pages: 586–589
          figure: Figures 1–4
          quoteLocator: Abstract; Supplementary Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: ortega-hernandez-2022-mollisonia-neuroanatomy primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: ortega-hernandez-2022-mollisonia-neuroanatomy
          relation: supports
          pages: 410; Figures 1–5; Supplementary Figures
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: ortega-hernandez-2022-mollisonia-neuroanatomy primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: ortega-hernandez-2022-mollisonia-neuroanatomy
          relation: supports
          pages: 410; Figures 1–5; Supplementary Figures
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica
      rangeKind: global-composite
      taxonomicConcept: Mollisonia symmetrica neuroanatomy sample
      geographicScope: Burgess Shale, Canada
      olderMa: 508.1
      youngerMa: 505
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
        - content/events/Mollisonia_neuroanatomy_and_mosaic_stem_signal/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: ortega-hernandez-2022-mollisonia-neuroanatomy
          locator: 410; Figures 1–5; Supplementary Figures; MCZ 1811 and USNM 305093; Elemental mapping; Alternative topologies
      reviewStatus: automated-audit-passed
---

# Mollisonia symmetrica

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mollisonia symmetrica combines neuroanatomical and appendicular signals that support competing placements; the profile does not select a direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is bounded to Mollisonia symmetrica, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profile is bounded to the cited Burgess Shale specimens and does not infer the genus’s complete distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field is bounded to Mollisonia symmetrica, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profiled Mollisonia symmetrica neural specimens do not establish diet or guild; separately, M. plenovenatrix appendages support a benthic-micropredator interpretation for that species, not every Mollisonia.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field is bounded to Mollisonia symmetrica, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
MCZ 1811 and USNM 305093 preserve optic nerves, a possible compact synganglion and a segmental ventral nerve cord as carbonaceous films.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field is bounded to Mollisonia symmetrica, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 508.1–505 Ma interval is a Burgess Shale sample envelope, not a global genus duration or chelicerate divergence time.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field is bounded to Mollisonia symmetrica, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
莫里逊虫神经解剖样本的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
莫里逊虫神经解剖样本的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
莫里逊虫神经解剖样本的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
莫里逊虫神经解剖样本的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
莫里逊虫神经解剖样本的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Mollisonia symmetrica 的神经解剖与附肢特征支持相互竞争的分类位置解释；本档案不将其选定为直系祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本档案限于所引布尔吉斯页岩标本，不据此推断该属的完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
档案中的对称莫里逊虫神经标本不能确定食性或生态类群；另一个物种 M. plenovenatrix 的附肢支持其底栖微型捕食者解释，但不能外推到所有莫里逊虫。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
MCZ 1811 和 USNM 305093 以碳质薄膜保存了视神经、可能的紧凑联合神经节及分节的腹神经索。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
508.1–505 Ma 区间是布尔吉斯页岩样本包络，并非该属的全球延续时长或螯肢类分化时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 508.1–505 Ma interval is a Burgess Shale sample envelope, not a global genus duration or chelicerate divergence time.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
