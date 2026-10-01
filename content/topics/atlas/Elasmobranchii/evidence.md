---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Elasmobranchii
    commonName: Sharks & Rays
    commonNameZh: 鲨与鳐类
    rank: subclass
    taxonId: ""
    firstAppearance: 409
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Elasmobranchii
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
      reviewedAgainstReferenceVersion: naylor-2012-elasmobranch-phylogeny DOI 10.1201/b11867-9; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: naylor-2012-elasmobranch-phylogeny
          pages: 47–72
          figure: Phylogenetic trees and taxon appendix
          quoteLocator: 595-species sampling; mitochondrial analyses; topology discussion
    - subject:
        kind: taxon
        path: content/topics/atlas/Elasmobranchii
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: inoue-2010-holocephalan-mitogenomics; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: inoue-2010-holocephalan-mitogenomics
          pages: 2581–2584
          figure: Figure 2; Tables 2–3
          quoteLocator: Divergence-time estimation; elasmobranch fossil constraints and caveats
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/topics/atlas/Elasmobranchii
      rangeKind: global-composite
      taxonomicConcept: Modern elasmobranch lineage model and fossil constraints
      geographicScope: Global model sample; fossil constraints summarized by Inoue et al. 2010
      olderMa: 281
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
      confidence: low
      claimPaths:
        - content/topics/atlas/Elasmobranchii/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: inoue-2010-holocephalan-mitogenomics
          locator: 2581–2584; Figure 2; Tables 2–3; Divergence-time estimation; elasmobranch fossil constraints and caveats
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Elasmobranchii

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mitochondrial sequences from 595 sampled species provide a broad explicit estimate of living elasmobranch relationships. The mitochondrial tree does not define the total fossil range, exact crown age or global origin of Elasmobranchii.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the mitochondrial tree does not define the total fossil range, exact crown age or global origin of Elasmobranchii.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
A calibrated mitogenomic analysis estimated the shark–ray split near 281 Ma, supporting a model-dependent 281 Ma–present window for modern elasmobranch lineages, not a total-group fossil FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Modern elasmobranch lineage model and fossil constraints: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Modern elasmobranch lineage model and fossil constraints：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
595 个抽样物种的线粒体序列提供了广泛而明确的现生板鳃类关系估计。线粒体树不能限定板鳃类的完整化石延限、精确冠群年龄或全球起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
校准后的线粒体基因组分析把鲨—鳐分化估计在约 2.81 亿年前，因此可建立依赖模型的 2.81 亿年前至今现代板鳃类谱系窗口，但不能当作板鳃类总群的化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
281 Ma is the study’s model estimate for the shark–ray split and depends on priors, calibrations and taxon sampling.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval is a model-to-present navigation window for modern elasmobranchs, not the fossil range of total-group Elasmobranchii.
<!-- /evo:text -->
