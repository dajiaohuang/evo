---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:70707
    scientificName: Hymenoptera
    commonName: Ants, bees and wasps
    commonNameZh: 蚂蚁、蜜蜂与胡蜂
    rank: order
    parentName: Insecta
    extinct: false
    geography:
      - Triassic xyelid and other hymenopteran fossil localities compiled by Zhang et al.
      - Peters et al. transcriptomic sample across major hymenopteran lineages
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
      - peters-2017-hymenoptera-history
      - zhang-2025-hymenoptera-divergence-dating
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera
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
      reviewedAgainstReferenceVersion: peters-2017-hymenoptera-history DOI 10.1016/j.cub.2017.01.027; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: peters-2017-hymenoptera-history
          pages: 1013–1018
          figure: Figures 1–3; supplemental phylogenies
          quoteLocator: Phylogenomic dataset; topology; fossil-calibrated dating
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: zhang-2025 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: zhang-2025-hymenoptera-divergence-dating
          relation: supports
          pages: 1–31
          figure: Figure 2; Tables S2–S3
          quoteLocator: Brief History of Divergence Dating, oldest undisputed Xyelidae at approximately 242–237 Ma
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/2/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: peters-2017-hymenoptera-history
          relation: supports
          pages: 1013–1018
          figure: Figures 1–3; supplemental phylogenies
          quoteLocator: Transcriptomic taxon sampling across major hymenopteran lineages
        - referenceId: zhang-2025-hymenoptera-divergence-dating
          relation: supports
          pages: 1–31
          figure: Figure 2; Tables S2–S3
          quoteLocator: Fossil calibrations and named hymenopteran occurrences
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion: Peters et al. 2017 DOI 10.1016/j.cub.2017.01.027; concrete locators audited 2026-09-11
      referenceLinks:
        - referenceId: peters-2017-hymenoptera-history
          relation: supports
          pages: 1013–1018
          figure: Figure 1 and supplementary taxon table
          quoteLocator: "Introduction and taxon sampling: parasitoid, predator and pollinator lineages"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion: Zhang et al. 2025 DOI 10.1111/syen.12645; concrete locators audited 2026-09-11
      referenceLinks:
        - referenceId: zhang-2025-hymenoptera-divergence-dating
          relation: supports
          pages: 1–31
          figure: Figure 2; Tables S2–S3
          quoteLocator: "Brief History of Divergence Dating: oldest undisputed xyelid fossil morphology and 242–237 Ma record"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera
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
        - referenceId: peters-2017-hymenoptera-history
          relation: supports
          pages: 1013–1018
          figure: Figures 1–3; supplemental phylogenies
          quoteLocator: Transcriptomic matrix, inferred topology and fossil-calibrated relationships
        - referenceId: zhang-2025-hymenoptera-divergence-dating
          relation: supports
          pages: 1–31
          figure: Figure 2; Tables S2–S3
          quoteLocator: Review of competing fossil and molecular interpretations in Hymenoptera systematics
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
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera
      rangeKind: global-composite
      taxonomicConcept: Hymenoptera oldest-undisputed-fossil-to-living navigation envelope
      geographicScope: Reviewed fossil calibrations and living representatives
      olderMa: 242
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
        - content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Hymenoptera/research/Hymenoptera/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: zhang-2025-hymenoptera-divergence-dating
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Hymenoptera

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Transcriptomic sampling across hymenopteran lineages resolves many relationships and supplies fossil-calibrated divergence estimates. Those estimates depend on sampled taxa, loci, calibrations and clock models and do not equal a global Hymenoptera FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond those estimates depend on sampled taxa, loci, calibrations and clock models and do not equal a global Hymenoptera FAD.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 242–0 Ma Hymenoptera display begins at the older edge of the 242–237 Ma oldest-undisputed xyelid fossil interval and is a fossil minimum, not an origin estimate.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The systematic divergence-dating review explicitly distinguishes the oldest undisputed fossil calibration from inferred deeper order ages.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Peters et al. sample transcriptomes across major hymenopteran lineages and Zhang et al. compile named fossil occurrences including Triassic xyelids; the combined evidence is a study-bounded sample, not a complete geographic map of Hymenoptera.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary phylogenomic sampling and systematic fossil review state their included lineages and records, but neither source is a global presence–absence census.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/2/reviewedAgainstReferenceVersion -->
Peters et al. 2017 DOI 10.1016/j.cub.2017.01.027; Zhang et al. 2025 DOI 10.1111/syen.12645; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The sampled Hymenoptera include parasitoid, predatory and pollinating life-history contexts discussed by Peters et al.; those guild examples document ecological diversity in the sample and are not traits assigned to every hymenopteran.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The study discusses ecological roles in relation to sampled lineages, but the transcriptomic design does not measure behaviour, habitat use or the full order-wide guild distribution.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Zhang et al. identify the oldest undisputed xyelid fossils using preserved hymenopteran body and wing characters; that Triassic fossil morphology is a bounded example and does not define one body plan shared by all Hymenoptera.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The systematic review records the fossil evidence and its diagnostic context, while the sample is too narrow to support an order-wide anatomical generalization.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
Peters et al. infer relationships among sampled hymenopteran lineages from transcriptomes and fossil calibrations, while Zhang et al. review competing fossil and molecular interpretations; the atlas retains this as a sampled, revisable classification rather than a single definitive tree.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The phylogenomic matrix and systematic review directly support the bounded classification statement, but backbone relationships and calibration choices remain sensitive to sampling and model assumptions.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/5/reviewedAgainstReferenceVersion -->
Peters et al. 2017 DOI 10.1016/j.cub.2017.01.027; Zhang et al. 2025 DOI 10.1111/syen.12645; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
分化测年系统综述明确区分最早无争议化石校准与推断的更深目级年龄。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
系统基因组取样和化石综述均说明了纳入的谱系与记录，但两者都不构成膜翅目的全球存在—缺失普查。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
研究讨论了样本中的寄生、捕食和传粉生活史背景，但转录组设计不能测量整个目级的行为或生态分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
综述记录了三叠纪木蜂类化石的保存形态和鉴别背景，但单一有界样本不能概括所有膜翅目的体制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
系统基因组矩阵与系统综述支持有界分类结论，但骨干关系和校准选择仍会随取样和模型假设改变。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
膜翅目各谱系的转录组抽样解决了多项关系，并提供化石校准的分歧估计。这些估计依赖类群、位点、校准和时钟模型，不等同于膜翅目的全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
242–0 Ma 的膜翅目显示以 242–237 Ma 最早无争议广腰类化石区间的老端为起点，是化石最低界而非起源估计。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 242 Ma edge is an oldest-undisputed fossil minimum, not an order-origin estimate.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A systematic review of hymenopteran divergence dating places the oldest undisputed xyelid fossils within approximately 242–237 Ma; living Hymenoptera extend the navigation envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 1–31; Brief History of Divergence Dating; Figure 2; Tables S2–S3; oldest undisputed Xyelidae at approximately 242–237 Ma
<!-- /evo:text -->
