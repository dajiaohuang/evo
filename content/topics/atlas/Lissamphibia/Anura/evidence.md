---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Anura
    commonName: Frogs & Toads
    commonNameZh: 蛙与蟾蜍
    rank: order
    taxonId: ""
    firstAppearance: 190
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Anura
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: feng-2017-frog-phylogenomics DOI 10.1073/pnas.1704632114; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: feng-2017-frog-phylogenomics
          pages: E5864–E5870
          figure: Figures 1–4; supplementary calibrations
          quoteLocator: Phylogenomic sampling; clock models; diversification analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Anura
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: feng-2017-frog-phylogenomics; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: feng-2017-frog-phylogenomics
          pages: E5864–E5870
          figure: Figures 1–4; supplementary calibrations
          quoteLocator: K–Pg diversification estimates for the three sampled Gondwanan clades
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
    - entityPath: content/topics/atlas/Lissamphibia/Anura
      rangeKind: global-composite
      taxonomicConcept: Three sampled Gondwanan frog crown lineages
      geographicScope: Fossil-calibrated phylogenomic sample of Feng et al. 2017
      olderMa: 66
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
        - content/topics/atlas/Lissamphibia/Anura/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: feng-2017-frog-phylogenomics
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Anura

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phylogenomic sampling and fossil-calibrated clocks infer rapid diversification among three sampled Gondwanan frog clades near the K–Pg boundary. The modeled diversification interval is not the fossil first appearance or exact origin of Anura as a whole.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded divergence time statement at the supplied locator. The confidence does not extend beyond the modeled diversification interval is not the fossil first appearance or exact origin of Anura as a whole.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The fossil-calibrated phylogeny inferred rapid diversification of three sampled Gondwanan frog clades near 66 Ma, supporting a 66 Ma–present model window for those lineages, not an Anura fossil FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Three sampled Gondwanan frog crown lineages: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的分歧时间表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Three sampled Gondwanan frog crown lineages：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统基因组抽样与化石校准时钟推断三个冈瓦纳蛙类样本支在 K–Pg 边界附近快速分化。模型化分化区间不是整个无尾目的化石首现或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
化石校准系统树推断三个采样的冈瓦纳蛙类支系在约 6600 万年前快速分化，因此支持这些谱系 6600 万年前至今的模型窗口，而不是无尾目的化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 66 Ma edge summarizes modeled K–Pg diversification in three sampled clades, not the origin of Anura.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The window is restricted to the published phylogenomic diversification result.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
E5864–E5870; Figures 1–4; supplementary calibrations; K–Pg diversification estimates for the three sampled Gondwanan clades
<!-- /evo:text -->
