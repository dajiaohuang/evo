---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tapiroidea
    commonName: Tapirs and Relatives
    commonNameZh: 貘及其近亲
    rank: superfamily
    taxonId: txn:43104
    firstAppearance: 55
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Tapiromorpha/Ceratomorpha/Tapiroidea
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bai-2020-ceratomorpha concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: bai-2020-ceratomorpha
          pages: Article 509
          figure: Figures 7–8
          quoteLocator: "Discussion: Tapiroidea and “early Rhinocerotoidea”; Supplementary Table 1"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Tapiromorpha/Ceratomorpha/Tapiroidea
      rangeKind: global-composite
      taxonomicConcept: Tapiroidea numerical range withheld pending a direct global range synthesis
      geographicScope: No defensible global numerical scope established
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
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: bai-2020-ceratomorpha
          locator: Article 509; Figures 7–8 and Tapiroidea discussion; topology evidence without complete global FAD/LAD
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Tapiroidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The study’s most-parsimonious trees recover sampled Tapiroidea as monophyletic after excluding paraphyletic “isectolophids”, but Bayesian resolution differs; this supports a bounded topology claim rather than a universal membership list or first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The statement follows the paper’s specific node result and immediately retains the alternative-analysis caveat.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
表述遵循论文的具体节点结果，并立即保留替代分析限制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
该研究的最简约树在排除并系的“始脊齿兽科”后，把取样貘总科恢复为单系，但贝叶斯解析有所不同；这只支持有边界的拓扑主张，不是普适成员清单或首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited phylogenetic study does not establish the former 55 Ma global edge.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 55–0 Ma display is withheld because the cited primary study supports tapiroid relationships but does not audit a global taxon range.
<!-- /evo:text -->
