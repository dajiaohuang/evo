---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Lepisosteiformes
    commonName: Gars
    commonNameZh: 雀鳝目
    rank: order
    taxonId: ""
    firstAppearance: 201.4
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Lepisosteiformes
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
      reviewedAgainstReferenceVersion: wright-2012-gar-phylogeny DOI 10.1016/j.ympev.2012.02.033; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: wright-2012-gar-phylogeny
          pages: 848–856
          figure: Figures 1–5; supplementary matrices
          quoteLocator: Molecular and morphological datasets; species-tree comparisons
    - subject:
        kind: taxon
        path: content/topics/atlas/Lepisosteiformes
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: near-2012-ray-fin-phylogeny; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: near-2012-ray-fin-phylogeny
          pages: 13698–13703
          figure: Figure 1; supplementary calibrations
          quoteLocator: Holostei and living-gar sampling; no order-wide fossil range audit
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
    - entityPath: content/topics/atlas/Lepisosteiformes
      rangeKind: global-composite
      taxonomicConcept: Lepisosteiformes temporal range
      geographicScope: Order-level interval pending a fossil-calibrated Lepisosteiformes-specific locator
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
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
      confidence: low
      claimPaths:
        - content/topics/atlas/Lepisosteiformes/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: near-2012-ray-fin-phylogeny
          locator: 13698–13703; Figure 1; supplementary calibrations; Holostei and living-gar sampling; no order-wide fossil range audit
      reviewStatus: automated-audit-passed
---

# Lepisosteiformes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Gene trees, species-tree analyses and morphology converge on a similar relationship pattern among sampled living gars. The living Lepisosteidae sample does not delimit all fossil Lepisosteiformes or establish an exact order origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the living Lepisosteidae sample does not delimit all fossil Lepisosteiformes or establish an exact order origin.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Living-gar sampling and a calibrated Holostei node do not directly support the former 201.4 Ma–present Lepisosteiformes range; an order-specific occurrence synthesis is required, so the display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Lepisosteiformes temporal range: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Lepisosteiformes temporal range：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基因树、物种树分析和形态数据在所抽样现生雀鳝关系上趋于一致。现生雀鳝科样本不能限定全部化石雀鳝目，也不能确定精确目级起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现生雀鳝采样和全骨鱼校准节点不能直接支持原先 2.014 亿年前至今的雀鳝目范围；必须补充目级出现记录综合，因此该显示暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Living-gar topology and the Holostei node do not establish the order’s fossil endpoints.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 201.4 Ma–present display is withheld rather than inferred from a parent-node calibration.
<!-- /evo:text -->
