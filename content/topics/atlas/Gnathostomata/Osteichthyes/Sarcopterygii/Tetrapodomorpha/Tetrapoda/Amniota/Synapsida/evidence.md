---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Synapsida
    commonName: Synapsids
    commonNameZh: 合弓类
    rank: class
    taxonId: ""
    firstAppearance: 308.5
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: mann-reisz-2020-echinerpeton-spine primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: mann-reisz-2020-echinerpeton-spine
          relation: supports
          pages: 8:83
          figure: Figure 1
          quoteLocator: Materials and Methods; Locality and Horizon; Comparative Anatomy; Discussion and Summary
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida
      rangeKind: global-composite
      taxonomicConcept: Synapsida fossil minimum and living-mammal navigation span
      geographicScope: Sydney Mines Formation near Florence, Nova Scotia, Canada; living global continuation
      olderMa: 308.5
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: mann-reisz-2020-echinerpeton-spine
          locator: Article 83; Figure 1; Locality and Horizon; Comparative Anatomy; Discussion
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Synapsida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Echinerpeton material from the 308.5–305.5 Ma Sydney Mines Formation anchors the 308.5–0 Ma Synapsida route; its ophiacodontid assignment is a matrix result and the sample is not the synapsid origin or a global FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The locality, horizon and referred neural spine are directly reported and compared with the type series. The taxonomic assignment is well scoped but remains analytical, so only the sampled fossil minimum is projected.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
产地、层位及所归入的神经棘均有直接报道，并与模式系列比较；分类归属范围明确但仍属分析结果，因此只投影取样化石最低记录。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Sydney Mines 组 308.5–305.5 Ma 的 Echinerpeton 材料锚定 308.5–0 Ma 的合弓类路线；其蛇齿龙科归属是矩阵结果，该样本不是合弓类起源或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
308.5–305.5 Ma is the formation-level Echinerpeton interval; ophiacodontid placement is analytical and does not date synapsid origination.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A referred Echinerpeton neural spine, type-series comparison and locality data anchor a sampled early synapsid occurrence; living mammals extend the route.
<!-- /evo:text -->
