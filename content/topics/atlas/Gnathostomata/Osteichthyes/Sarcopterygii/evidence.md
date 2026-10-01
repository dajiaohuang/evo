---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Sarcopterygii
    commonName: Lobe-finned Fish
    commonNameZh: 肉鳍鱼类
    rank: class
    taxonId: ""
    firstAppearance: 419
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Zhu et al. 2009 DOI 10.1038/nature07855; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: zhu-2009-guiyu
          relation: supports
          pages: 469–474
          figure: Figures 1–5; Supplementary Figures 1–9
          quoteLocator: Stratigraphic position; holotype description; phylogenetic analysis and Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii
      rangeKind: global-composite
      taxonomicConcept: Sarcopterygii
      geographicScope: Global or represented navigation composite
      olderMa: 419
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
      confidence: high
      claimPaths:
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: zhu-2009-guiyu
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Sarcopterygii

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Sarcopterygii navigation envelope uses the articulated Ludlow Guiyu oneiros specimen at approximately 419 Ma as its evidence-linked older anchor and living sarcopterygians at 0 Ma as its younger edge; the fossil is neither a direct ancestor nor proof of an exact global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study documents an articulated holotype, stratigraphic position and explicit sarcopterygian character analysis. High confidence applies to the presence of a sampled sarcopterygian by about 419 Ma, not to completeness of the global record or ancestry.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究记录关节相连的正模、地层位置和明确的肉鳍鱼性状分析；高置信度适用于约 4.19 亿年前已有所取样肉鳍鱼，不适用于全球记录完整性或祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
肉鳍鱼类导航范围以约 4.19 亿年前鲁德洛世关节相连的 Guiyu oneiros 标本作为有证据连接的老端锚点，以 0 Ma 的现生肉鳍鱼作为年轻端；该化石既不是直系祖先，也不能证明精确的全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 419 Ma older edge follows the articulated Ludlow Guiyu sample; it is not an exact global first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Articulated Guiyu anatomy and its stratigraphic position provide a primary-study sarcopterygian anchor; 0 Ma reflects living members without asserting direct ancestry or record completeness.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 469–474; Figures 1–5; Supplementary Figures 1–9; stratigraphic position, holotype description and phylogenetic analysis
<!-- /evo:text -->
