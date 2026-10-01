---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Eocursor
    commonName: Eocursor
    commonNameZh: 曙奔龙
    rank: genus
    taxonId: txn:104623
    firstAppearance: 210
    lastAppearance: 201.3
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Parapredentata/Saphornithischia/Eocursor
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated primary-source review
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Butler et al. 2007 DOI 10.1098/rspb.2007.0367; full-text description inspected 2026-09-05
      referenceLinks:
        - referenceId: butler-2007-eocursor
          relation: supports
          pages: "2042"
          figure: Figure 2a
          quoteLocator: "Systematic palaeontology, Description: lower jaw, dentary preservation and tooth morphology"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Parapredentata/Saphornithischia/Eocursor
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: butler-2007-eocursor concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: butler-2007-eocursor
          relation: supports
          pages: 2041–2046
          figure: Figures 1–3; Electronic Supplementary Material
          quoteLocator: Systematic palaeontology; locality and horizon; phylogenetic analysis
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Parapredentata/Saphornithischia/Eocursor
      rangeKind: global-composite
      taxonomicConcept: Eocursor SAM-PK-K8025
      geographicScope: Lower Elliot Formation, South Africa
      olderMa: 210
      youngerMa: 201.3
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
        - content/events/Eocursor_holotype_SAM-PK-K8025/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: butler-2007-eocursor
          locator: Cited specimen, figures and methods in the linked claim dossier
      reviewStatus: automated-audit-passed
---

# Eocursor

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Eocursor holotype SAM-PK-K8025 has an elongated lower jaw with a low coronoid process and low, triangular tooth crowns in labial view; the poorly preserved front of the dentary does not establish whether a predentary was present.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The anatomical description directly reports the preserved jaw and tooth features and explicitly leaves predentary presence unresolved because of preservation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Eocursor is represented by partial holotype SAM-PK-K8025 from the Lower Elliot Formation; its sampled horizon and analysis-dependent ornithischian placement do not establish a global clade first appearance or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The specimen and formation are direct, while both precise age assignment and basal placement have analytical and stratigraphic uncertainty.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
解剖描述直接报告了保存的下颌与牙齿特征，并因保存状况明确保留前齿骨是否存在的问题。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
标本和地层是直接证据，而精确年代归属与基部位置均有分析和地层不确定性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Eocursor 正模标本 SAM-PK-K8025 的下颌细长，冠突低矮，牙冠从唇侧看呈低矮的三角形；齿骨前端保存不佳，不能确定是否存在前齿骨。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
始奔龙由下埃利奥特组部分正模 SAM-PK-K8025 表示；其取样层位和分析依赖的鸟臀类位置不建立全球支系首现或直接祖先关系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Study-level occurrence or navigation envelope; not a direct date on ancestry and not a demonstrated global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Primary-study specimen, formation or explicitly bounded dossier evidence.
<!-- /evo:text -->
