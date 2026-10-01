---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Teleostei
    commonName: Teleosts
    commonNameZh: 真骨鱼类
    rank: infraclass
    taxonId: ""
    firstAppearance: 251.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei
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
      reviewedAgainstReferenceVersion: betancur-2017-bony-fish-classification DOI 10.1186/s12862-017-0958-3; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: betancur-2017-bony-fish-classification
          pages: "162"
          figure: Figures 1–3; classification appendices
          quoteLocator: Phylogenetic synthesis; nomenclatural framework; classification
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei
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
      reviewedAgainstReferenceVersion: qi-2024-teleost-wgd-dating; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: qi-2024-teleost-wgd-dating
          pages: Article evae128
          figure: Figure 1; Supplementary Table S1
          quoteLocator: "Results: crown Teleostei 254.36–234.16 Ma"
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei
      rangeKind: global-composite
      taxonomicConcept: Crown Teleostei molecular-clock interval
      geographicScope: Concatenated ohnologue clock model of Qi et al. 2024
      olderMa: 254.36
      youngerMa: 234.16
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: qi-2024-teleost-wgd-dating
          locator: "Article evae128; Figure 1; Supplementary Table S1; Results: crown Teleostei 254.36–234.16 Ma"
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Teleostei

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A synthesis links a revised bony-fish classification to explicit molecular and morphological phylogenetic hypotheses. The classification is a navigational taxonomic framework and does not itself establish Teleostei's fossil origin or temporal endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited systematic synthesis directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond the classification is a navigational taxonomic framework and does not itself establish Teleostei's fossil origin or temporal endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Concatenated ohnologue clocks estimated crown Teleostei between 254.36 and 234.16 Ma; the interval is a model result for the divergence event, not a fossil FAD, complete duration or ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Teleostei molecular-clock interval: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引系统综述在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Teleostei molecular-clock interval：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
综合研究把修订的硬骨鱼分类与明确的分子、形态系统假说相连接。该分类是导航性分类框架，本身不能确立真骨鱼类的化石起源或时间端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
串联重复基因分子钟把真骨鱼冠群分化估计在 2.5436–2.3416 亿年前；该区间是分化事件的模型结果，不是化石首现、完整延限或祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The two edges are the reported model interval and do not represent fossil first or last appearances.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A model interval is displayed instead of extending the clade mechanically to the present as a claimed fossil range.
<!-- /evo:text -->
