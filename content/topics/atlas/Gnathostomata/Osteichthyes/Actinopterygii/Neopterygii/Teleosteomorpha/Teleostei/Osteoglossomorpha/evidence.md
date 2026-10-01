---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Osteoglossomorpha
    commonName: Bonytongues and Relatives
    commonNameZh: 骨舌鱼总目
    rank: superorder
    taxonId: ""
    firstAppearance: 145
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Osteoglossomorpha
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
          referenceId: peterson-2022-osteoglossomorpha-phylogenomics
          pages: 1032–1044
          figure: Figures 1–4; supplementary matrices
          quoteLocator: Exon and taxon sampling; topology; biogeographic analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Osteoglossomorpha
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
          quoteLocator: "Results: Elopomorpha–Osteoglossomorpha divergence 239.12–213.05 Ma"
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Osteoglossomorpha
      rangeKind: global-composite
      taxonomicConcept: Crown Osteoglossomorpha molecular-clock interval
      geographicScope: Concatenated ohnologue clock model of Qi et al. 2024
      olderMa: 239.12
      youngerMa: 213.05
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Neopterygii/Teleosteomorpha/Teleostei/Osteoglossomorpha/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: qi-2024-teleost-wgd-dating
          locator: "Article evae128; Figure 1; Supplementary Table S1; Results: Elopomorpha–Osteoglossomorpha divergence 239.12–213.05 Ma"
      reviewStatus: automated-audit-passed
---

# Osteoglossomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 546-exon phylogenomic sample spanning all six living osteoglossomorph families supports a detailed extant topology. The extant family sample does not delimit the whole fossil range or provide a direct origin date for Osteoglossomorpha.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the extant family sample does not delimit the whole fossil range or provide a direct origin date for Osteoglossomorpha.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
peterson-2022-osteoglossomorpha-phylogenomics DOI 10.1093/sysbio/syac001; concrete-locator audit at 2026.08-static-v5-rc44
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The sampled Elopomorpha–Osteoglossomorpha split was estimated between 239.12 and 213.05 Ma; this model interval bounds the represented crown route but is not an osteoglossomorph fossil FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Osteoglossomorpha molecular-clock interval: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Osteoglossomorpha molecular-clock interval：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
覆盖六个现生骨舌鱼总目科的 546 个外显子系统基因组样本，支持细致的现生拓扑。现生科级样本不能限定完整化石延限，也不能提供骨舌鱼总目的直接起源日期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
采样的海鲢形类—骨舌鱼形类分化被估计在 2.3912–2.1305 亿年前；该模型区间约束所代表的冠群路线，但不是骨舌鱼形类的化石首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The interval brackets the split of the sampled osteoglossomorph and elopomorph lineages; it is model-dependent.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The display does not equate a node estimate with a fossil occurrence range.
<!-- /evo:text -->
