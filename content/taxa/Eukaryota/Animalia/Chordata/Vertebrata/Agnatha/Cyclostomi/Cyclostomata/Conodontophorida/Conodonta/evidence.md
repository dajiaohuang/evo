---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Conodonta
    commonName: Conodonts
    commonNameZh: 牙形石类
    rank: class
    taxonId: txn:33816
    firstAppearance: 520
    lastAppearance: 201.4
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Cyclostomata/Conodontophorida/Conodonta
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: donoghue-2000-conodont-affinity DOI 10.1111/j.1469-185X.1999.tb00045.x; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: donoghue-2000-conodont-affinity
          pages: 191–251
          figure: Figures 1–14; character syntheses
          quoteLocator: Conodont anatomy; apparatus reconstruction; chordate phylogeny
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Cyclostomata/Conodontophorida/Conodonta
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
      reviewedAgainstReferenceVersion: sweet-donoghue-2001-conodonts DOI 10.1017/S0022336000017224; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: sweet-donoghue-2001-conodonts
          pages: 1174–1184
          figure: Figures 1–6
          quoteLocator: Abstract; upper Cambrian–Triassic record; apparatus reconstruction and classification limitations
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Cyclostomata/Conodontophorida/Conodonta
      rangeKind: global-composite
      taxonomicConcept: Conodonta historical record
      geographicScope: Published conodont record reviewed across multiple body-fossil and element concepts
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Cyclostomata/Conodontophorida/Conodonta/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: sweet-donoghue-2001-conodonts
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Conodonta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A systematic review integrates conodont soft tissues, feeding apparatuses and character evidence to assess vertebrate and chordate affinity. The synthesis supports a biological-affinity framework but not one exact origin date, direct ancestor or complete conodont range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited systematic synthesis directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond the synthesis supports a biological-affinity framework but not one exact origin date, direct ancestor or complete conodont range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
A systematic review discusses conodont fossils under changing biological concepts, but it does not support the atlas’s former 520–201.4 Ma endpoints as one audited taxon range; that global display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Conodonta historical record: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引系统综述在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Conodonta historical record：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统综述整合牙形石软体、摄食器和性状证据，以评估其脊椎动物与脊索动物亲缘。该综合支持生物亲缘框架，但不提供唯一精确的起源日期、直接祖先或完整延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
系统综述在不断变化的生物学概念下讨论牙形石化石，但不能把图谱原先的 5.20–2.014 亿年前端点证明为一个经过审计的类群延限；该全球显示现予暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 520–201.4 Ma envelope is withheld because the review does not audit one stable taxonomic concept across both endpoints.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
No global interval is displayed until a concept-specific occurrence synthesis supplies independently located older and younger bounds.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
1174–1184; Figures 1–6; review of upper Cambrian–Triassic biostratigraphy and element-based taxonomic limitations; Abstract; record, apparatus reconstruction and classification discussion
<!-- /evo:text -->
