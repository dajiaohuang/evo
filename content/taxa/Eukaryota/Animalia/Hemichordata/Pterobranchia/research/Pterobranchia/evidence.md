---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:33521
    scientificName: Pterobranchia
    commonName: Pterobranchs
    commonNameZh: 羽鳃类
    rank: class
    parentName: Hemichordata
    extinct: false
    geography:
      - Xiaoshiba Lagerstätte, Yunnan, China
      - Approximately 3.7 km southeast of Ala near Kunming (Yunotubus fossil sample)
    overview:
      markdown: page.en.md
      field: /records/atlas-profile/overview
    ecology:
      diet:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/diet
      habitat:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/habitat
      locomotion:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/locomotion
      bodySize:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/bodySize
      guild:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/guild
    traits:
      - markdown: page.en.md
        field: /records/atlas-profile/traits/0
      - markdown: page.en.md
        field: /records/atlas-profile/traits/1
      - markdown: page.en.md
        field: /records/atlas-profile/traits/2
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: medium
    referenceIds:
      - yang-2025-yunotubus
      - halanych-1993-rhabdopleura-feeding
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Hemichordata/Pterobranchia/research/Pterobranchia
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
      reviewedAgainstReferenceVersion: Yang et al. 2025 DOI 10.1186/s13358-025-00406-0
      referenceLinks:
        - referenceId: yang-2025-yunotubus
          relation: supports
          quoteLocator: Figures 1–5; Geological setting; Systematic palaeontology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Hemichordata/Pterobranchia/research/Pterobranchia
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Yang et al. 2025 DOI 10.1186/s13358-025-00406-0
      referenceLinks:
        - referenceId: yang-2025-yunotubus
          relation: supports
          quoteLocator: Figure 1; locality and stratigraphic sections
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Hemichordata/Pterobranchia/research/Pterobranchia
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Yang et al. 2025 DOI 10.1186/s13358-025-00406-0
      referenceLinks:
        - referenceId: yang-2025-yunotubus
          relation: supports
          quoteLocator: Systematic palaeontology; Figures 2–5; phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Hemichordata/Pterobranchia/research/Pterobranchia
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Halanych 1993 DOI 10.2307/1542482
      referenceLinks:
        - referenceId: halanych-1993-rhabdopleura-feeding
          relation: supports
          pages: 417–427
          figure: Figures 1–8
          quoteLocator: Rhabdopleura normani observations; Figures 1–8
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Hemichordata/Pterobranchia/research/Pterobranchia
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Yang et al. 2025 DOI 10.1186/s13358-025-00406-0
      referenceLinks:
        - referenceId: yang-2025-yunotubus
          relation: supports
          figure: Figures 2–5
          quoteLocator: Systematic palaeontology and preserved colony anatomy
        - referenceId: halanych-1993-rhabdopleura-feeding
          relation: supports
          pages: 417–427
          figure: Figures 2–8
          quoteLocator: Living tentacle and ciliary anatomy
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Hemichordata/Pterobranchia/research/Pterobranchia
      rangeKind: global-composite
      taxonomicConcept: Pterobranchia, with Yunotubus as the directly documented fossil minimum
      geographicScope: Global living lineage; direct fossil anchor at the Xiaoshiba Lagerstätte, Yunnan, China
      olderMa: 516
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 518
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Hemichordata/Pterobranchia/research/Pterobranchia/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: yang-2025-yunotubus
          locator: Figures 1–5; Geological setting; Systematic palaeontology; phylogenetic analyses
      reviewStatus: automated-audit-passed
---

# Pterobranchia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Five Yunotubus specimens from the approximately 516 Ma Hongjingshao Formation provide a diagnostic early Cambrian pterobranch minimum, not a Pterobranchia origin date or proof that every older tube fragment belongs to the clade.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Five specimens preserve the tube-and-stolon association in one dated Lagerstätte; medium confidence keeps this direct minimum separate from phylogenetic origin and more fragmentary older candidates.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Yunotubus directly records a pterobranch colony in the approximately 516 Ma Xiaoshiba Lagerstätte of Yunnan; this locality sample does not establish a complete early Cambrian or global pterobranch distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The fossil locality is a direct record, but one study window cannot reconstruct a complete early Cambrian or global distribution; medium confidence is deliberately occurrence-bounded.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Yunotubus combines fusellar tubes, zooids and a connecting stolon recovered within Pterobranchia by sampled morphology matrices, while that placement remains a scored phylogenetic hypothesis rather than observed ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Associated soft and tubular anatomy supports identification, but topology depends on 24-taxon, 39-character analyses; medium confidence preserves the distinction between diagnosis and branch placement.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Video and electron microscopy directly document suspension feeding by millimetre-scale, tube-dwelling zooids of living Rhabdopleura normani; this sampled ecology is not projected unchanged onto fossil pterobranchs.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Feeding currents and particle capture were observed directly in a living species. High confidence is species- and behaviour-specific and does not erase ecological evolution across the fossil radiation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Yunotubus preserves colonial zooids connected by a stolon inside fusellar tubes, whereas living Rhabdopleura supplies direct tentacle and ciliary anatomy; the traits come from different sampled taxa and times.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The cited studies image the listed structures directly, yielding high confidence in their occurrence. They do not establish that every structure was invariant throughout Pterobranchia history.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
五件标本在一个有年代约束的化石库中保存管体—匍匐茎组合；中等置信度把这一直接最小年龄与系统起源及更破碎的早期候选严格分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
该化石地点是直接记录，但单一研究窗口不能重建早寒武世或全球的完整分布；中等置信度被有意限定在出现记录层面。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
伴生软体与管状解剖支持鉴定，但拓扑依赖 24 类群、39 性状的分析；中等置信度保留诊断与分支位置的区别。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
摄食水流和颗粒捕获在一个现生种中被直接观察；高置信度只针对该物种和行为，不抹平化石辐射中的生态演变。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
两项研究直接成像所列结构，因此其存在具有高置信度；但这不证明这些结构在羽鳃类历史中始终不变。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
五件约 5.16 亿年前红井哨组的 Yunotubus 标本提供了诊断性的早寒武纪羽鳃类最小年龄，但不是羽鳃纲起源时间，也不能证明所有更老管状碎片都属于该类群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Yunotubus 结合了半环状生长构造管、个虫和连接匍匐茎，并在取样形态矩阵中落入羽鳃类；该位置仍是性状评分的系统发育假说，而非观察到的祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Yunotubus 保存了由匍匐茎连接并位于半环状构造管内的群体个虫，现生 Rhabdopleura 则提供触手和纤毛解剖的直接观察；这些性状来自不同时代、不同取样类群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Yunotubus 直接记录了约 5.16 亿年前云南小石坝化石库的一处羽鳃类群体；这一地点样本不能确定早寒武世或全球羽鳃类的完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
视频和电子显微镜直接记录了现生 Rhabdopleura normani 毫米级管栖个虫的悬浮摄食；不能把这一取样生态原样外推到化石羽鳃类。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
516 Ma is the rounded age of the diagnostic Yunotubus occurrence, not the origin of Pterobranchia; older fragmentary candidates are not used as a secure endpoint.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Five Yunotubus specimens from Cambrian Stage 3 preserve fusellar tubes, zooids and a stolon; living pterobranchs establish survival to the present.
<!-- /evo:text -->
