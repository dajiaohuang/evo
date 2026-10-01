---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:4789
    scientificName: Xianguangia sinica
    commonName: Chengjiang tentaculate body-plan fossil
    commonNameZh: 澄江触手体制化石
    rank: genus
    parentName: Cnidaria evidence route
    extinct: true
    geography:
      - Chengjiang biota
      - Yunnan, China
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
      - ou-2017-xianguangia
      - zhao-2023-xianguangia
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ou-2017-xianguangia; zhao-2023-xianguangia
      referenceLinks:
        - referenceId: ou-2017-xianguangia
          relation: supports
          pages: 8835–8840
          figure: Figures 1–4; Supplementary Figures
          quoteLocator: 85 new specimens, synonymy, reconstruction and phylogenetic analysis
        - referenceId: zhao-2023-xianguangia
          relation: contradicts
          pages: "2215787"
          figure: Figures 1–6
          quoteLocator: Figure 4 and Supplementary Figure S1; main Bayesian stem-ctenophore result and alternative-coding sensitivity analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica
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
      reviewedAgainstReferenceVersion: ou-2017-xianguangia locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: ou-2017-xianguangia
          pages: 114:8835–8840
          figure: Figures 1–4; Supplementary Figures
          quoteLocator: Specimens, reconstruction and phylogenetic analysis
        - relation: contradicts
          referenceId: zhao-2023-xianguangia
          pages: Article 2215787
          figure: Figures 1–6
          quoteLocator: Figure 4 and Supplementary Figure S1; main Bayesian stem-ctenophore result and alternative-coding sensitivity analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica
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
      reviewedAgainstReferenceVersion: Ou et al. 2017 DOI 10.1073/pnas.1701650114; Zhao et al. 2023 DOI 10.1080/14772019.2023.2215787
      referenceLinks:
        - referenceId: ou-2017-xianguangia
          relation: supports
          pages: 8835–8840
          figure: Figures 1–4; Supplementary Figures
          quoteLocator: 85 new specimens, synonymy, reconstruction and phylogenetic analysis
        - referenceId: zhao-2023-xianguangia
          relation: contextualizes
          pages: "2215787"
          figure: Figures 1–6
          quoteLocator: Figure 4 and Supplementary Figure S1; main Bayesian stem-ctenophore result and alternative-coding sensitivity analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica
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
      reviewedAgainstReferenceVersion: Ou et al. 2017 DOI 10.1073/pnas.1701650114
      referenceLinks:
        - referenceId: ou-2017-xianguangia
          relation: supports
          pages: 8835–8840
          figure: Figures 1–2; Supplementary Figures
          quoteLocator: Chengjiang biota material, locality and specimen sample
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica
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
      reviewedAgainstReferenceVersion: Ou et al. 2017 DOI 10.1073/pnas.1701650114; Zhao et al. 2023 DOI 10.1080/14772019.2023.2215787
      referenceLinks:
        - referenceId: ou-2017-xianguangia
          relation: supports
          pages: 8835–8840
          figure: Figures 1–4
          quoteLocator: Suspension-feeding body-plan reconstruction and ecological discussion
        - referenceId: zhao-2023-xianguangia
          relation: contextualizes
          pages: "2215787"
          figure: Figures 1–6
          quoteLocator: Tentacular reinterpretation and limits on functional inference
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica
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
      reviewedAgainstReferenceVersion: Ou et al. 2017 DOI 10.1073/pnas.1701650114; Zhao et al. 2023 DOI 10.1080/14772019.2023.2215787
      referenceLinks:
        - referenceId: ou-2017-xianguangia
          relation: supports
          pages: 8835–8840
          figure: Figures 1–4; Supplementary Figures
          quoteLocator: Specimen descriptions, tentacle-bearing reconstruction and column-like region
        - referenceId: zhao-2023-xianguangia
          relation: contextualizes
          pages: "2215787"
          figure: Figures 1–6
          quoteLocator: Column reinterpretation as tentacular anatomy
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
    - entityPath: content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica
      rangeKind: global-composite
      taxonomicConcept: Xianguangia extinct body-plan test evidence boundary
      geographicScope: Chengjiang biota, Yunnan, China
      olderMa: 518
      youngerMa: 518
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
        - content/events/Xianguangia_extinct_body-plan_test/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Eumetazoa/Triploblastica/Ctenophora/Dinomischidae/Xianguangia/research/Xianguangia_sinica/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: ou-2017-xianguangia
          locator: 8835–8840; Figures 1–4; Supplementary Figures; 85 new specimens, synonymy, reconstruction and phylogenetic analysis
      reviewStatus: automated-audit-passed
---

# Xianguangia sinica

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Xianguangia reconstruction is based on 85 new specimens plus type material, yet column, tentacle and phylum-level interpretations remain disputed; the Chengjiang sample is not a cnidarian global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Expanded material constrains gross anatomy, while competing anatomical readings prevent a definitive stem-cnidarian or range claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Xianguangia is displayed at 518–518 Ma only as the age-bounded Chengjiang specimen sample assessed by competing body-plan interpretations; it is not a crown-anthozoan FAD, direct ancestor or global genus duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Ou et al. (2017) and Zhao et al. (2023) examine the same taxon with materially different column and affinity interpretations. Contested confidence applies to the bounded occurrence, not either higher-level placement.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Xianguangia sinica has competing phylogenetic placements: Ou et al. recover a stem-cnidarian body plan, whereas Zhao et al. recover Xianguangia, Daihua and Dinomischus as Dinomischidae on the ctenophore stem in their main Bayesian analysis, with a polytomy under alternative coding; neither placement is treated as definitive here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The taxon and expanded specimen sample are directly documented, but the column interpretation and matrix placement differ between primary studies, preventing a definitive cnidarian assignment.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The profiled Xianguangia material is from the Chengjiang biota of Yunnan, China; this exceptional deposit records the sampled occurrence and does not establish a complete distribution or geographic origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary study identifies the Chengjiang material and locality. High confidence is limited to the sampled deposit and does not infer absence from other regions.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The Xianguangia reconstruction infers suspension feeding from its tentaculate body plan in a marine Chengjiang setting, while attachment, movement and population-wide ecology are not directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The primary reconstruction links tentacles and suspension feeding, but those functions and any sessile habit remain anatomical inferences bounded to the sampled fossils.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The expanded Xianguangia sample preserves a tentacle-bearing crown and central column-like region in the published reconstruction, but the column’s identity is revised as tentacular anatomy in later primary work.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
Eighty-five new specimens plus type material constrain repeated gross structures, while the independent reanalysis changes the interpretation of the central region and its functional meaning.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
扩展材料约束了总体解剖，但相互竞争的解剖解释阻止作出确定的刺胞动物干群或范围主张。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Ou 等（2017）与 Zhao 等（2023）对同一类群的柱状结构及亲缘关系提出实质不同的解释。争议置信度适用于有界出现记录，而非任一高阶归属。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
分类名称和扩展标本样本有直接记录，但一手研究对柱状结构和矩阵位置的解释不同，无法确定刺胞动物归属。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
主要研究明确识别澄江材料和地点；高置信度仅限取样产地，不据此推断其他地区缺失。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
主要复原把触手与悬浮摄食联系起来，但这些功能以及固着习性仍是有界于取样化石的解剖推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
85 件新标本加上模式材料约束了重复的总体结构，但独立复核改变了中央区域的解释及其功能含义。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
先光海葵重建基于 85 件新标本及模式材料，但柱体、触手和门级归属解释仍有争议；澄江样本不是刺胞动物全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Xianguangia 的 518–518 Ma 仅作为有年代约束、并接受竞争性身体结构解释的澄江标本样本；它不是冠群珊瑚纲首现、直接祖先或该属全球存续期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Xianguangia sinica 有相互竞争的系统发育位置：Ou 等恢复刺胞动物干群体制；Zhao 等的主贝叶斯分析把 Xianguangia、Daihua 与 Dinomischus 作为位于栉水母干群上的 Dinomischidae，替代编码则产生多分支；本档案不把任一位置视为定论。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
档案中的 Xianguangia 材料来自中国云南澄江生物群；这一特殊产地记录了取样出现，但不能确立完整分布或地理起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Xianguangia 复原根据海相澄江环境中的触手体制推断悬浮摄食，但附着、运动及种群范围生态均未被直接观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
扩展的 Xianguangia 样本在已发表复原中保存了具触手的冠部和中央柱状区域，但后续一手研究将该柱状结构重新解释为触手解剖。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Phylogenetic result changes with anatomical coding; suspension feeding is a functional inference and neither analysis establishes direct ancestry.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen, explicitly bounded geochemical or genomic dataset, or stated model interval in the cited primary studies.
<!-- /evo:text -->
