---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Juramaia
    commonName: Juramaia
    commonNameZh: 侏罗兽
    rank: genus
    taxonId: txn:196927
    firstAppearance: 161
    lastAppearance: 159
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Juramaia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: luo-2011-juramaia + celik-phillips-2020-juramaia-tip-dating concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: luo-2011-juramaia
          pages: 442–445
          figure: Figures 1–3
          quoteLocator: Holotype; provenance and age attribution
        - relation: contextualizes
          referenceId: celik-phillips-2020-juramaia-tip-dating
          pages: Article 20200943
          figure: Figure 3; Figures S11–S13
          quoteLocator: Unconstrained tip-dating result and sensitivity analyses
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Juramaia
      rangeKind: global-composite
      taxonomicConcept: Juramaia sinensis holotype attributed occurrence
      geographicScope: Attributed Tiaojishan Formation, Liaoning, China
      olderMa: 161
      youngerMa: 159
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
      confidence: contested
      claimPaths:
        - content/events/Juramaia_specimen_and_conditional_Jurassic_signal/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: luo-2011-juramaia
          locator: 442–445; Figures 1–3
        - referenceId: celik-phillips-2020-juramaia-tip-dating
          locator: 20200943; Figure 3; Figures S11–S13
      reviewStatus: automated-audit-passed
---

# Juramaia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Juramaia sinensis is bounded conditionally by holotype BMNH PM1343B and its original approximately 161–159 Ma Tiaojishan attribution; uncertain collection provenance and a younger tip-dating signal prevent treating that interval as a secure global first appearance or calibration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen is direct, but formation provenance and analytical age conflict are material. Contested confidence preserves both.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本属于直接证据，但地层产地与分析年龄冲突实质重要；争议置信度保留两者。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Juramaia sinensis 由正模 BMNH PM1343B 及原研究约 1.61 亿—1.59 亿年前的髫髻山组归属有条件地约束；不确定的采集产地和更年轻的尖端定年信号，使该区间不能被视为可靠全球首现或校准点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This interval follows the original stratigraphic attribution; collection provenance and a younger tip-dating signal remain explicit and it is not a secure universal calibration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
BMNH PM1343B is reported from approximately 160 Ma strata, but the atlas retains provenance and model-age caveats.
<!-- /evo:text -->
