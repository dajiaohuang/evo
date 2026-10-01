---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Phorusrhacidae
    commonName: Terror Birds
    commonNameZh: 恐鹤类
    rank: family
    taxonId: txn:39461
    firstAppearance: 62
    lastAppearance: 1.8
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Gruiformes/Cariamae/Phorusrhacidae
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
      reviewedAgainstReferenceVersion: degrange-2015-phorusrhacid-phylogeny concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: degrange-2015-phorusrhacid-phylogeny
          relation: supports
          pages: 35(2):e912656
          figure: Figures 1–10; Tables 1–3
          quoteLocator: Systematic paleontology; specimen description; phylogenetic analysis; sensory discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Gruiformes/Cariamae/Phorusrhacidae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: degrange-2015-phorusrhacid-phylogeny @ DOI 10.1080/02724634.2014.912656
      referenceLinks:
        - relation: supports
          referenceId: degrange-2015-phorusrhacid-phylogeny
          pages: 35(2):e912656
          figure: Figures 1–10; Tables 1–3
          quoteLocator: Systematic paleontology; specimen description; phylogenetic analysis; sensory discussion
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Gruiformes/Cariamae/Phorusrhacidae
      rangeKind: global-composite
      taxonomicConcept: Phorusrhacidae — source-bounded sample window
      geographicScope: Playa Los Lobos Llallawavis scagliai sample, Argentina
      olderMa: 3.6
      youngerMa: 2.6
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Gruiformes/Cariamae/Phorusrhacidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: degrange-2015-phorusrhacid-phylogeny
          locator: 35(2):e912656; Systematic paleontology; specimen description; phylogenetic analysis; sensory discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Phorusrhacidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phorusrhacidae is represented by the named Llallawavis specimen and its morphology-matrix placement within terror birds; sensory reconstructions and family relationships are study hypotheses, not a complete range or ancestor chain.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen anatomy and phylogenetic analysis are direct, whereas sensory capabilities and deeper relationships are inferential. Medium confidence keeps both levels distinct.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Phorusrhacidae is displayed at 3.6–2.6 Ma only as the Pliocene Llallawavis specimen interval, not the family-wide FAD or LAD. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Phorusrhacidae uses Degrange, F.J.; Tambussi, C.P.; Taglioretti, M.L.; Dondas, A.; Scaglia, F. (2015) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Playa Los Lobos Llallawavis scagliai sample, Argentina; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本解剖与系统发育分析是直接证据，而感官能力与更深关系属于推断；中等置信度区分两者。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Phorusrhacidae 采用 Degrange, F.J.; Tambussi, C.P.; Taglioretti, M.L.; Dondas, A.; Scaglia, F.（2015）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Playa Los Lobos Llallawavis scagliai sample, Argentina；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
恐鹤科由具名 Llallawavis 标本及其在恐鹤类形态矩阵中的位置表示；感官重建与科内关系属于研究假说，不是完整范围或祖先链。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Phorusrhacidae 仅以 3.6–2.6 Ma 展示为上新世 Llallawavis 标本区间，而非恐鹤科整体首现或末现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the Pliocene Llallawavis specimen interval, not the family-wide FAD or LAD; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A new Mesembriornithinae (Aves, Phorusrhacidae) provides new insights into the phylogeny and sensory capabilities of terror birds directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
