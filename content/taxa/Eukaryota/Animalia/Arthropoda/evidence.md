---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Arthropoda
    commonName: Arthropods
    commonNameZh: 节肢动物
    rank: phylum
    taxonId: txn:18891
    firstAppearance: 540
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda
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
      reviewedAgainstReferenceVersion: Holmes and Budd 2022 DOI 10.1038/s42003-022-04146-6 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: holmes-budd-2022-early-trilobites
          relation: supports
          pages: 7:1177
          figure: Figures 1–4; Supplementary analyses
          quoteLocator: Approximately 521 Ma widespread trilobite appearance and early-euarthropod matrix context
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda
      rangeKind: global-composite
      taxonomicConcept: Arthropoda root anchored by a directly sampled descendant clade
      geographicScope: Widespread early trilobite record to living arthropods
      olderMa: 521
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 3
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: holmes-budd-2022-early-trilobites
          locator: article 1177; Figures 1–4 and supplementary analyses
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Arthropoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Arthropoda root display replaces the unsupported 540 Ma value with a 521–0 Ma sampled navigation envelope anchored by widespread trilobites, a contained arthropod clade, and living arthropods; it does not date the origin of Arthropoda.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The approximately 521 Ma widespread trilobite record provides a direct minimum for the broader root entity. It cannot exclude older arthropods or define crown-versus-total-group origins, so the range is deliberately a descendant-anchored navigation envelope.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
约 5.21 亿年前的广布三叶虫记录为更广的节肢动物根实体提供直接最小年龄，但不能排除更老记录或确定冠群与总群起源，因此范围明确为后代类群锚定的导航包络。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
节肢动物门根节点以 5.21 亿年前至今的采样导航包络替代缺乏支持的 5.40 亿年前数值，锚点是作为其内部类群的广布三叶虫及现生节肢动物；它不用于测定节肢动物门的起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older bound is a descendant-clade minimum from widespread trilobites, not the origin of Arthropoda or a crown/total-group equation.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The approximately 521 Ma widespread trilobite record supplies a direct, conservative minimum for the broader arthropod root.
<!-- /evo:text -->
