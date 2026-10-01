---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:69148
    scientificName: Coleoptera
    commonName: Beetles
    commonNameZh: 甲虫
    rank: order
    parentName: Insecta
    extinct: false
    geography:
      - Permian–Triassic beetle fossil localities sampled by Zhao et al.
      - "McKenna et al. phylogenomic sample: 373 beetle species spanning approximately 67% of families"
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
      - zhao-2021-beetle-evolution
      - mckenna-2019-beetle-diversity
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Zhao et al. 2021 DOI 10.7554/eLife.72692; Europe PMC PMC8585485 full text
      referenceLinks:
        - referenceId: zhao-2021-beetle-evolution
          relation: supports
          pages: e72692
          quoteLocator: "Morphological disparity: paragraph explaining three reasons for selecting beetle elytra"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: mckenna-2019-beetle-diversity DOI 10.1073/pnas.1909655116; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: mckenna-2019-beetle-diversity
          pages: 24729–24737
          figure: Figures 1–4; supplementary phylogenies
          quoteLocator: Taxon and gene sampling; phylogeny; diversification analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: zhao-2021 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: zhao-2021-beetle-evolution
          relation: supports
          pages: Article e72692
          figure: Figure 2 and source data
          quoteLocator: Discussion on earliest definite beetles and Methods Diversity analysis with Asselian bins beginning at 298 Ma
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/3/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: zhao-2021-beetle-evolution
          relation: supports
          pages: 10:e72692
          figure: Figure 1 and source data
          quoteLocator: Fossil taxon sampling, localities and Permian–Triassic elytra dataset
        - referenceId: mckenna-2019-beetle-diversity
          relation: supports
          figure: Figures 1–2; supplementary taxon sampling
          quoteLocator: 373 sampled beetle species representing approximately 67% of families
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion: Zhao et al. 2021 DOI 10.7554/eLife.72692; concrete locators audited 2026-09-11
      referenceLinks:
        - referenceId: zhao-2021-beetle-evolution
          relation: supports
          pages: 10:e72692
          figure: Figures 2–4
          quoteLocator: Discussion of end-Permian deforestation, vegetation turnover, disparity and plant associations
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/5/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: mckenna-2019-beetle-diversity
          relation: supports
          pages: 24729–24737
          figure: Figures 1–4; supplementary phylogenies
          quoteLocator: Beetle taxon sampling, genomic phylogeny and diversification analysis
        - referenceId: zhao-2021-beetle-evolution
          relation: supports
          pages: 10:e72692
          figure: Figure 2 and source data
          quoteLocator: Fossil beetle sampling and elytral disparity dataset
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
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera
      rangeKind: global-composite
      taxonomicConcept: Coleoptera earliest-definite-fossil-to-living navigation envelope
      geographicScope: Reviewed global fossil dataset and living representatives
      olderMa: 298
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
        - content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Coleoptera/research/Coleoptera/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: zhao-2021-beetle-evolution
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Coleoptera

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Beetle elytra are hardened forewings that chiefly protect the hindwings and underlying body. Zhao et al. use these commonly preserved fossil structures to compare morphological disparity in Permian and Triassic beetles; this sampled comparison does not establish a single ecology for living Coleoptera.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study explicitly defines elytra and explains their selection for disparity analysis. Confidence applies to that anatomical description and study design, not to classifying all living beetle ecologies.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
A broad beetle phylogeny links sampled genomic changes and plant associations to diversification across Coleoptera. The calibrated tree is a model of sampled lineages, not a direct fossil date for beetle origin or a complete order history.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the calibrated tree is a model of sampled lineages, not a direct fossil date for beetle origin or a complete order history.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The 298–0 Ma Coleoptera display begins at the standardized Asselian bin containing the earliest definite beetles and is not an inferred order-origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The integrated fossil dataset identifies Tshekardocoleidae as the earliest definite beetles and exposes the 298 Ma binning method used for the display edge.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Zhao et al. compare Permian and Triassic beetle elytra from a bounded fossil sample, while McKenna et al. sample 373 living beetles spanning about 67% of families; these records do not constitute a complete geographic distribution for Coleoptera.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The two studies report their fossil localities and taxon sampling directly, but neither study surveys geographic presence and absence across the order.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/3/reviewedAgainstReferenceVersion -->
Zhao et al. 2021 DOI 10.7554/eLife.72692; McKenna et al. 2019 DOI 10.1073/pnas.1909655116; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Zhao et al. link Permian–Triassic beetle disparity changes to vegetation turnover after end-Permian deforestation and discuss plant associations in the sampled lineages; this is a historical ecological interpretation, not direct behaviour or a uniform ecology for living beetles.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The study explicitly tests vegetation and beetle-disparity associations, while the ecological mechanism is reconstructed from fossils and sampled comparisons rather than observed behaviour.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
McKenna et al. use a 373-taxon genomic sample to test beetle relationships and diversification, while Zhao et al. add a fossil elytral sample; the resulting classification is a sampled hypothesis rather than a complete or final Coleoptera taxonomy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
Both primary studies report explicit taxon and character sampling, but unsampled families, missing data and alternative analyses limit order-wide taxonomic resolution.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/5/reviewedAgainstReferenceVersion -->
McKenna et al. 2019 DOI 10.1073/pnas.1909655116; Zhao et al. 2021 DOI 10.7554/eLife.72692; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主研究明确解释了鞘翅及其被选用于形态差异度分析的原因。置信度适用于该解剖描述和研究设计，不表示能够统一归类所有现生甲虫的生态。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
整合化石数据集标识最早明确甲虫，并公开图集 298 Ma 边界所用的时间箱方法。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
两项研究分别报告化石地点与现生采样范围，但都不是对鞘翅目全球存在和缺失的完整普查。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
研究明确检验植被变化与甲虫形态差异的关联，但生态机制来自化石和样本比较，并非直接行为观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
两项一手研究都明确报告了取样类群和性状，但未取样科、缺失数据与替代分析限制了鞘翅目的整体分类解析度。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
甲虫的鞘翅是硬化的前翅，主要保护后翅及下方身体。Zhao 等利用这些常见的化石保存结构比较二叠纪与三叠纪甲虫的形态差异度；这一采样比较不能确定现生鞘翅目统一的生态类型。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
广泛的甲虫系统树把所抽样基因组变化和植物关联与鞘翅目多样化联系起来。经校准的树是抽样谱系的模型，不是甲虫起源的直接化石日期，也不是全目的完整历史。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
298–0 Ma 的鞘翅目显示从包含最早明确甲虫的标准化 Asselian 时间箱开始，并非推断的目级起源日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 298 Ma edge is the standardized Asselian time-bin boundary for the earliest definite beetles, not an origination date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
An integrated fossil dataset identifies Early Permian Tshekardocoleidae as the earliest definite beetles and assigns their first standardized bin an older edge of 298 Ma; living beetles extend the envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Results Figure 2 and source data; Discussion paragraph on the earliest definite beetles; Methods, Diversity analysis, Asselian–Ladinian bins beginning at 298 Ma
<!-- /evo:text -->
