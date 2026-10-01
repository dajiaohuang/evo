---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Serpentes
    commonName: Snakes
    commonNameZh: 蛇类
    rank: suborder
    taxonId: ""
    firstAppearance: 167
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Pan-Squamata/Squamata/Serpentes
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: hsiang-2015-snake-origins concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: hsiang-2015-snake-origins
          relation: supports
          pages: 1–22
          figure: Figures 1–6; Additional files 1–12
          quoteLocator: Taxon sampling and matrices; phylogenetic results; ancestral-state reconstructions; Discussion
    - subject:
        kind: taxon
        path: content/topics/atlas/Pan-Squamata/Squamata/Serpentes
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
      reviewedAgainstReferenceVersion: hsiang-2015-snake-origins; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: hsiang-2015-snake-origins
          pages: 1–22
          figure: Figures 1–6; Additional files 1–12
          quoteLocator: "Tip dating: Pan-Serpentes ~128.5 Ma and crown snakes ~110.3 Ma"
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
    - entityPath: content/topics/atlas/Pan-Squamata/Squamata/Serpentes
      rangeKind: global-composite
      taxonomicConcept: Pan-Serpentes tip-dating model
      geographicScope: Combined genomic, phenomic and fossil sample of Hsiang et al. 2015
      olderMa: 128.5
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/topics/atlas/Pan-Squamata/Squamata/Serpentes/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: hsiang-2015-snake-origins
          locator: "1–22; Figures 1–6; Additional files 1–12; Tip dating: Pan-Serpentes ~128.5 Ma and crown snakes ~110.3 Ma"
      reviewStatus: automated-audit-passed
---

# Serpentes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Serpentes route is supported by a combined genomic, phenomic and fossil analysis of sampled snakes; reconstructed early ecology and ancestral states are model results, not observed ancestors or exact clade-origin dates.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple evidence classes are analyzed together and sensitivity tests are reported. Medium confidence separates the sampled topology from ancestral-state and chronology inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Combined tip dating inferred Pan-Serpentes near 128.5 Ma and crown snakes about 20 Myr later; the displayed 128.5 Ma–present route is model-dependent and not a fossil FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Pan-Serpentes tip-dating model: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究联合分析多类证据并报告敏感性检验。中等置信度把取样拓扑与祖先状态及年代推断分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Pan-Serpentes tip-dating model：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
蛇类路线由取样蛇类的基因组、表型和化石联合分析支持；重建的早期生态与祖先状态属于模型结果，不是被观察到的祖先或精确支系起源日期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
综合末端定年把泛蛇类估计在约 1.285 亿年前，而蛇类冠群约晚 2000 万年；所显示的 1.285 亿年前至今路线依赖模型，不是化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
128.5 Ma is a model estimate for Pan-Serpentes; crown Serpentes was inferred about 20 Myr later.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The model-to-present route separates total-group and crown estimates and is not a direct fossil FAD.
<!-- /evo:text -->
