---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Petromyzontida
    commonName: Lampreys
    commonNameZh: 七鳃鳗
    rank: order
    taxonId: ""
    firstAppearance: 360
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Cyclostomata/Petromyzontida
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
      reviewedAgainstReferenceVersion: mccauley-2015-lampreys-genomics DOI 10.1093/biosci/biv139; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: mccauley-2015-lampreys-genomics
          pages: 1046–1056
          figure: Figures 1–4; comparative tables
          quoteLocator: Lamprey diversity; genomic resources; model-organism comparison
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Cyclostomata/Petromyzontida
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
          pages: 1045–1050
          figure: Fossil lamprey comparison
          quoteLocator: Abstract and fossil-lamprey record
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
    - entityPath: content/topics/atlas/Agnatha/Cyclostomata/Petromyzontida
      rangeKind: global-composite
      taxonomicConcept: Petromyzontida fossil-and-living evidence route
      geographicScope: Undoubted fossil and living lampreys
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
        - content/topics/atlas/Agnatha/Cyclostomata/Petromyzontida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: janvier-2008-cyclostome-origins
          locator: 1045–1050; Fossil lamprey comparison; Abstract and fossil-lamprey record
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Petromyzontida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A genomics-era synthesis documents living lamprey diversity, life-history variation and comparative genomic resources. It provides a bounded modern taxonomic context, not a fossil range, exact order origin or ancestral life cycle.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited systematic synthesis directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond it provides a bounded modern taxonomic context, not a fossil range, exact order origin or ancestral life cycle.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The reviewed record places undoubted fossil lampreys at about 358 Ma and living lampreys at the present, supporting a bounded 358 Ma–present evidence route but not a global order FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Petromyzontida fossil-and-living evidence route: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引系统综述在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Petromyzontida fossil-and-living evidence route：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基因组时代的综合记录了现生七鳃鳗多样性、生活史差异和比较基因组资源。它只提供限定的现代分类背景，不是化石延限、精确目级起源或祖先生活史。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
综述把无疑义化石七鳃鳗置于约 3.58 亿年前，并确认七鳃鳗延续至今；这支持 3.58 亿年前至今的有限证据路线，而不是该目的全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 358 Ma edge is a reviewed fossil record, not a directly dated order origin.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval connects the undoubted Late Devonian record to living lampreys without asserting continuous sampling.
<!-- /evo:text -->
