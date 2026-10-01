---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cyclostomata
    commonName: Lampreys & Hagfish
    commonNameZh: 七鳃鳗与盲鳗
    rank: class
    taxonId: ""
    firstAppearance: 360
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Cyclostomata
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - relation: supports
          referenceId: mallatt-sullivan-1998-cyclostome-monophyly
          pages: 1706–1718
          figure: Figures 1–5; sequence analyses
          quoteLocator: Taxon sampling; alignment; phylogenetic analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Cyclostomata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: janvier-2008-cyclostome-origins; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: janvier-2008-cyclostome-origins
          pages: 1045–1056
          figure: Review diagrams and fossil comparison
          quoteLocator: Abstract; fossil lamprey and hagfish record; molecular-clock contrast
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
    - entityPath: content/topics/atlas/Agnatha/Cyclostomata
      rangeKind: global-composite
      taxonomicConcept: Cyclostome fossil-and-living evidence route
      geographicScope: Undoubted fossil lampreys plus living lampreys and hagfishes
      olderMa: 358
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
        - content/topics/atlas/Agnatha/Cyclostomata/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: janvier-2008-cyclostome-origins
          locator: 1045–1056; Review diagrams and fossil comparison; Abstract; fossil lamprey and hagfish record; molecular-clock contrast
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Cyclostomata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
28S and 18S rDNA from living lampreys and hagfishes support cyclostome monophyly in the sampled analyses. Extant sequence topology does not set the cyclostome fossil first appearance, divergence date or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond extant sequence topology does not set the cyclostome fossil first appearance, divergence date or direct ancestry.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
mallatt-sullivan-1998-cyclostome-monophyly DOI 10.1093/oxfordjournals.molbev.a025897; concrete-locator audit at 2026.08-static-v5-rc44
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Undoubted lampreys are reviewed from about 358 Ma and cyclostomes survive as living lamprey and hagfish lineages, supporting a 358 Ma–present evidence-route window rather than a precise crown origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Cyclostome fossil-and-living evidence route: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Cyclostome fossil-and-living evidence route：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
现生七鳃鳗和盲鳗的 28S、18S rDNA 在所抽样分析中支持圆口类单系。现生序列拓扑不能确定圆口类的化石首现、分歧日期或直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
综述确认约 3.58 亿年前已有无疑义七鳃鳗，而圆口类仍以现生七鳃鳗和盲鳗谱系延续，因此可建立 3.58 亿年前至今的证据路线窗口，但不能据此给出精确冠群起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older bound is a rounded undoubted lamprey record; molecular divergence estimates can be substantially older.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The route spans a directly reviewed fossil anchor to living members and is not a crown-origin estimate.
<!-- /evo:text -->
