---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Gymnophionomorpha
    commonName: Caecilian total group
    commonNameZh: 无足类总群
    rank: clade
    taxonId: txn:471965
    firstAppearance: 223.04
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Gymnophionomorpha
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
      reviewedAgainstReferenceVersion: Kligman et al. 2023 DOI 10.1038/s41586-022-05646-5
      referenceLinks:
        - relation: supports
          referenceId: kligman-2023-funcusvermis
          pages: 102–107
          figure: Figure 1; Extended Data Figures 2–4
          quoteLocator: Systematic palaeontology; phylogenetic results; Methods
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Lissamphibia/Gymnophionomorpha
      rangeKind: global-composite
      taxonomicConcept: Gymnophionomorpha total group; Funcusvermis is outside crown Gymnophiona
      geographicScope: Global total-group display bound
      olderMa: 223.04
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 0.059
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/topics/atlas/Lissamphibia/Gymnophionomorpha/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: kligman-2023-funcusvermis
          locator: pp. 102–107; Fig. 1; Extended Data Figs. 2–4; Methods and Supplementary Information section 1
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Gymnophionomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Funcusvermis gilmorei from the Norian upper Blue Mesa Member is a stem gymnophionomorph in the published analyses, extending the sampled caecilian total-group record to about 221 Ma without dating crown Gymnophiona.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named elements from at least 76 individuals and a U–Pb-bracketed bonebed directly support the occurrence; medium confidence retains isolated-element association and analysis-dependent topology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该主张绑定具名标本或明确数据集及一手来源定位；置信度仅适用于所述样本、方法与边界，不外推为全球首次出现、直接祖先或完整类群覆盖。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
诺利期上部蓝梅萨段的 Funcusvermis gilmorei 在已发表分析中属于无足类干群，把已取样的蚓螈总群记录延伸至约 2.21 亿年前，但不为冠群无足目定年。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint rounds the dated upper Blue Mesa Member occurrence and is not a crown-caecilian origin time.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Funcusvermis occurs in a U–Pb-bracketed Norian bonebed and was recovered on the caecilian stem in the published analyses.
<!-- /evo:text -->
