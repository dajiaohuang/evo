---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:56134
    scientificName: Cycadophyta
    commonName: Cycads
    commonNameZh: 苏铁类
    rank: phylum
    parentName: Gymnospermae navigation aggregate
    extinct: false
    geography:
      - Tropical and subtropical living distribution
      - Broader fossil record
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
      - nagalingum-2011-living-cycad-radiation
      - liu-2022-cycadaceae-palaeogene
      - coiro-2023-cycad-biogeography
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: coiro-2023-cycad-biogeography primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiro-2023-cycad-biogeography
          relation: supports
          pages: 1619–1631; Figures 2–6; Table 1
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
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
      reviewedAgainstReferenceVersion: coiro-2023-cycad-biogeography primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiro-2023-cycad-biogeography
          relation: supports
          pages: 1619–1631; Figures 2–6; Table 1
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: coiro-2023-cycad-biogeography primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiro-2023-cycad-biogeography
          relation: supports
          pages: 1619–1631; Figures 2–6; Table 1
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
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
      reviewedAgainstReferenceVersion: coiro-2023-cycad-biogeography primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: coiro-2023-cycad-biogeography
          relation: supports
          pages: 1619–1631; Figures 2–6; Table 1
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: coiro-2023-cycad-biogeography locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: coiro-2023-cycad-biogeography
          pages: 240:1616–1635
          figure: Figure 2; Table 1
          quoteLocator: Methods tree-age prior; Results “Total-evidence dating of cycads”
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
    - entityPath: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta
      rangeKind: global-composite
      taxonomicConcept: Cycadales total-evidence model-to-living navigation interval
      geographicScope: Fossilized birth–death model estimate for crown Cycadales plus living cycads
      olderMa: 330.4
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 34.2
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Cycadophyta/research/Cycadophyta/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: coiro-2023-cycad-biogeography
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Cycadophyta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Coiro et al. combine molecular data from living cycads with leaf morphology from living and fossil taxa in a Bayesian total-evidence analysis to study cycad biogeographic history; its sampled topology is not an immutable total-group topology.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is bounded to Cycadophyta, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Fossil-integrated modelling supports broader high-latitude occupation followed by contraction, but ancestral areas and extirpation counts remain model-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field is bounded to Cycadophyta, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Living cycads are terrestrial primary producers across varied habitats; the profile does not infer one fossil habitat or ecological cause for diversification.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field is bounded to Cycadophyta, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The cited total-evidence datasets combine living cycad characters with fossil leaf taxa; leaf assignments and character coding remain explicit analytical inputs.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field is bounded to Cycadophyta, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Cycadophyta is displayed at 330.4–0 Ma only as a total-evidence model-to-living navigation interval: 330.4 Ma is the fossilized birth–death posterior median for crown Cycadales (95% HPD 296.2–358.9 Ma), not a directly observed fossil FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Coiro et al. (2023), Results and Table 1, reports a Cycadales median age of 330.4 Ma with 95% HPD 296.2–358.9 Ma from the fossilized birth–death analysis. Medium confidence applies to that explicit model output and living continuation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
苏铁类的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
苏铁类的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
苏铁类的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
苏铁类的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
Coiro 等（2023）的结果与表 1 报告化石化出生—死亡分析所得苏铁目中位年龄 330.4 Ma、95% HPD 296.2–358.9 Ma。中等置信度仅适用于这一明确模型输出及现生延续。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Coiro 等将现生苏铁的分子数据与现生及化石类群的叶部形态结合，在贝叶斯全证据分析中研究苏铁的生物地理历史；其取样拓扑不是不可变的全群拓扑。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
纳入化石的模型支持苏铁类曾在高纬度地区分布更广、随后收缩的解释，但祖先分布区及局部灭绝次数仍依赖模型。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
现生苏铁是分布于多种生境的陆生初级生产者；本档案不据此推断单一化石生境或多样化的生态成因。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引全证据数据集结合现生苏铁性状与化石叶类群；叶片归属和性状编码是分析中的明确输入，而非无需检验的结论。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Cycadophyta 的 330.4–0 Ma 仅作为“全证据模型—现生类群”导航区间：330.4 Ma 是冠群苏铁目化石化出生—死亡模型的后验中位数（95% HPD 296.2–358.9 Ma），并非直接观测的化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 330.4 Ma older endpoint is a fossilized birth–death posterior median with 95% HPD 296.2–358.9 Ma, not a directly observed fossil FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Coiro et al. integrate 60 fossil species with living cycads and estimate crown Cycadales at median 330.4 Ma; 0 Ma denotes living members.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Methods tree-age prior; Results “Total-evidence dating of cycads”; Figure 2; Table 1, Cycadales median 330.4 Ma, 95% HPD 296.2–358.9 Ma
<!-- /evo:text -->
