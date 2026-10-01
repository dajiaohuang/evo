---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Graptolithina
    commonName: Graptolites
    commonNameZh: 笔石类
    rank: class
    taxonId: ""
    firstAppearance: 510
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Graptolithina
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Yang et al. 2025 DOI 10.1186/s13358-025-00406-0 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: yang-2025-yunotubus
          relation: supports
          figure: Figures 1–5
          quoteLocator: Geological setting; Systematic palaeontology; tube-and-stolon association; phylogenetic analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Graptolithina
      rangeKind: global-composite
      taxonomicConcept: Graptolithina including living rhabdopleurid graptolites
      geographicScope: Hongjingshao Formation Yunotubus sample to living rhabdopleurids
      olderMa: 516
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 2
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/topics/atlas/Graptolithina/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: yang-2025-yunotubus
          locator: Figures 1–5; Geological setting; Systematic palaeontology; phylogenetic analyses
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Graptolithina

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Graptolithina root display uses 516–0 Ma as a sampled envelope from diagnostic Yunotubus material in the approximately 516 Ma Hongjingshao Formation to living rhabdopleurid graptolites; it is not a graptolite origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Five associated specimens preserve tubes, zooids and a connecting stolon in a dated Lagerstätte, while pterobranch placement depends on a finite morphology matrix. Living rhabdopleurids justify the present endpoint without implying an uninterrupted sampled record.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
五件相连标本在有年代约束的化石库中保存管、个员和连接匍匐茎，但翼鳃类位置依赖有限的形态矩阵；现生杆壁虫支持到现在的端点，却不代表连续化石记录。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
笔石纲根节点采用 5.16 亿年前至今的采样包络，从洪井哨组约 5.16 亿年前具有鉴别特征的 Yunotubus 材料延伸到现生杆壁虫类笔石；它不是笔石起源时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is the approximate age of one diagnostic Lagerstätte sample, not a graptolite origin date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Five Yunotubus specimens preserve tubes, zooids and a connecting stolon used in a sampled pterobranch analysis; living rhabdopleurids support the present endpoint.
<!-- /evo:text -->
