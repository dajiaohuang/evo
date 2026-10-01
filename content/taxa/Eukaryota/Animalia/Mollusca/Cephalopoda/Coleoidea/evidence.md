---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Coleoidea
    commonName: Squids & Octopuses
    commonNameZh: 乌贼与章鱼
    rank: subclass
    taxonId: txn:59785
    firstAppearance: 390
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Coleoidea
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: tanner-2017-coleoid-clocks
      referenceLinks:
        - referenceId: tanner-2017-coleoid-clocks
          relation: supports
          pages: "20162818"
          quoteLocator: Figures 1–4; fossil calibrations and posterior chronograms
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Coleoidea
      rangeKind: global-composite
      taxonomicConcept: Coleoidea — numerical range withheld
      geographicScope: No numerical geographic-temporal range exposed
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: tanner-2017-coleoid-clocks
          locator: Article 20162818; Methods, 26 cephalopod species and 180 genes; fossil calibrations; Figures 1–4
      reviewStatus: automated-audit-passed
---

# Coleoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Fossil-calibrated molecular clocks infer Mesozoic turnover and diversification among sampled modern coleoids; posterior node ages are model estimates, not fossil first appearances or the total Coleoidea origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple clock analyses support a broad temporal signal, while calibration, priors and living-taxon sampling make exact ages conditional.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多套时钟分析支持宽泛时间信号，但校准、先验与现生类群取样使精确年龄具有条件性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
化石校准分子钟推断取样现代鞘亚纲在中生代发生更替和多样化；节点后验年龄是模型估计，不是化石首现或整个鞘亚纲起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 390 Ma–present display is withdrawn because the cited ages are molecular-clock posterior estimates rather than occurrence endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Model-dependent node estimates are not silently substituted for a fossil range.
<!-- /evo:text -->
