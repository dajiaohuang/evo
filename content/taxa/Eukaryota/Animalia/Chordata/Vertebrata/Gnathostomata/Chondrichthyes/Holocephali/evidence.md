---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Holocephali
    commonName: Chimaeras
    commonNameZh: 银鲛类
    rank: subclass
    taxonId: txn:34760
    firstAppearance: 358.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Holocephali
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
      reviewedAgainstReferenceVersion: inoue-2010-holocephalan-mitogenomics DOI 10.1093/molbev/msq147; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: inoue-2010-holocephalan-mitogenomics
          pages: 2576–2586
          figure: Figures 1–4; Tables 1–3
          quoteLocator: Mitogenomic sampling; topology; divergence-time estimation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Holocephali
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
      reviewedAgainstReferenceVersion: inoue-2010-holocephalan-mitogenomics; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: inoue-2010-holocephalan-mitogenomics
          pages: 2579–2584
          figure: Figure 2; Tables 2–3
          quoteLocator: Mitogenomic divergence-time estimation and credible intervals
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Holocephali
      rangeKind: global-composite
      taxonomicConcept: Modern holocephalan lineage model
      geographicScope: Eight living holocephalans representing all three extant families
      olderMa: 421
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Chondrichthyes/Holocephali/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: inoue-2010-holocephalan-mitogenomics
          locator: 2579–2584; Figure 2; Tables 2–3; Mitogenomic divergence-time estimation and credible intervals
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Holocephali

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mitogenomes representing all three living chimaeriform families provide a sampled topology and molecular divergence estimates. The living sample and clock model do not directly date total-group Holocephali or establish its fossil endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the living sample and clock model do not directly date total-group Holocephali or establish its fossil endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The mitogenomic clock estimated the lineage leading to modern holocephalans at 421 Ma (95% credible interval 410–447 Ma), supporting a model-to-present window rather than a fossil FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Modern holocephalan lineage model: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Modern holocephalan lineage model：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
代表现生银鲛目三个科的线粒体基因组，提供了抽样拓扑与分子分歧估计。现生样本和时钟模型不能直接给全头类总群定年，也不能确立其化石端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
线粒体基因组分子钟把通向现代全头类的谱系估计为 4.21 亿年前（95% 可信区间 4.10–4.47 亿年前）；这支持模型至今的窗口，而不是化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 421 Ma mean has a 410–447 Ma credible interval and is calibration- and model-dependent.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval represents the modeled lineage leading to modern holocephalans, not total-group fossil endpoints.
<!-- /evo:text -->
