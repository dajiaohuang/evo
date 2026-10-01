---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Xenarthra
    commonName: Sloths, anteaters and armadillos
    commonNameZh: 异关节总目
    rank: clade
    taxonId: txn:97907
    firstAppearance: 58.3
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Xenarthra
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: oleary-2013-placental-ancestor-model primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: oleary-2013-placental-ancestor-model
          relation: supports
          pages: 662–667
          figure: Figure 1; Table 1; Tables S1–S8
          quoteLocator: Taxon-age table; combined analysis; ghost-lineage chronology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Placentalia/Xenarthra
      rangeKind: global-composite
      taxonomicConcept: Xenarthra sampled/model navigation span
      geographicScope: Combined global phenomic and molecular model inputs
      olderMa: 58.3
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
      evidenceLevel: literature-synthesized
      confidence: low
      claimPaths:
        - content/topics/atlas/Placentalia/Xenarthra/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: oleary-2013-placental-ancestor-model
          locator: pp. 662–667; Figure 1; Table 1; Tables S1–S8
      reviewStatus: automated-audit-passed
---

# Xenarthra

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 58.3–0 Ma Xenarthra route retains the Riostegotherium entry from a combined phenomic–molecular chronology as a sampled/model bound; it is not a securely dated global FAD, crown origin or complete fossil range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source makes fossil ages, ghost lineages and topology explicit inputs to a combined model. The atlas therefore keeps the rounded bound visibly model-conditioned rather than treating it as a direct occurrence endpoint.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源把化石年龄、幽灵谱系与拓扑明确作为联合模型输入；因此图谱将取整边界标为模型条件结果，而非直接出现记录端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
58.3–0 Ma 的异关节类路线保留表型—分子联合年代框架中的 Riostegotherium 条目作为取样/模型边界；它不是可靠测定的全球首现、冠群起源或完整化石范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
58.3 Ma follows the model’s Riostegotherium entry and ghost-lineage treatment; it is not a securely dated global FAD or crown origin.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The combined-data chronology supplies a transparent sampled/model bound while living Xenarthra extend the route to the present.
<!-- /evo:text -->
