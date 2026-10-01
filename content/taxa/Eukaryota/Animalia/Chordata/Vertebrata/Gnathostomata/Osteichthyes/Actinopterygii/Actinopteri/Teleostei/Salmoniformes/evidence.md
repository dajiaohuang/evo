---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Salmoniformes
    commonName: Salmon & Trout
    commonNameZh: 鲑与鳟类
    rank: order
    taxonId: txn:35506
    firstAppearance: 56
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Salmoniformes
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
      reviewedAgainstReferenceVersion: crespi-fulton-2004-salmonidae DOI 10.1016/j.ympev.2003.08.012; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: crespi-fulton-2004-salmonidae
          pages: 658–679
          figure: Figures 1–5; sequence matrices
          quoteLocator: Taxon and gene sampling; combined-data topology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Salmoniformes
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
          figure: Figure 1; supplementary chronogram and calibrations
          quoteLocator: Broad actinopterygian clock sample; no audited Salmoniformes endpoint in the atlas locator
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Salmoniformes
      rangeKind: global-composite
      taxonomicConcept: Salmoniformes temporal range
      geographicScope: Order-level range pending a fossil-calibrated Salmoniformes-specific source
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
      confidence: low
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Teleostei/Salmoniformes/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: near-2012-ray-fin-phylogeny
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Salmoniformes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Combined nuclear data provide a documented phylogeny for sampled Salmonidae within the Salmoniformes route. A family-level living sample is not a complete order topology and does not establish the order's fossil origin or global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond a family-level living sample is not a complete order topology and does not establish the order's fossil origin or global range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The bundled broad fish clock and Salmonidae topology do not directly support the former 56 Ma–present Salmoniformes display; an order-specific fossil or clock locator is required, so the range is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Salmoniformes temporal range: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Salmoniformes temporal range：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
组合核基因数据为鲑形目路线中的所抽样鲑科提供了有据系统树。现生科级样本不是完整的目级拓扑，也不能确立该目的化石起源或全球延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有的广义鱼类分子钟和鲑科拓扑不能直接支持原先 5600 万年前至今的鲑形目显示；必须补充目级化石或分子钟精确定位，因此该范围暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited Salmonidae topology does not date Salmoniformes or audit its fossil endpoints.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 56 Ma–present display is withheld instead of transferring a family-level living topology into an order range.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
13698–13703; Figure 1; supplementary chronogram and calibrations; Broad actinopterygian clock sample; no audited Salmoniformes endpoint in the atlas locator
<!-- /evo:text -->
