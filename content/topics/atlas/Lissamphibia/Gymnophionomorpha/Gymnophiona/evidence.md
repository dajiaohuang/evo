---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Gymnophiona
    commonName: Living caecilians
    commonNameZh: 现生无足目
    rank: order
    taxonId: ""
    firstAppearance: 25
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Gymnophionomorpha/Gymnophiona
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Santos et al. 2024 DOI 10.1093/zoolinnean/zlad188
      referenceLinks:
        - relation: supports
          referenceId: santos-2024-ymboirana
          pages: 3–20
          figure: Figures 2–9 and 12–15
          quoteLocator: Systematic palaeontology; Affinities; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Lissamphibia/Gymnophionomorpha/Gymnophiona
      rangeKind: global-composite
      taxonomicConcept: Gymnophiona crown group; provisional fossil-family assignment
      geographicScope: Global crown-group display bound
      olderMa: 25
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
      confidence: low
      claimPaths:
        - content/topics/atlas/Lissamphibia/Gymnophionomorpha/Gymnophiona/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: santos-2024-ymboirana
          locator: pp. 3–20; Figs. 2–9 and 12–15; Systematic palaeontology, Affinities and Discussion
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Gymnophiona

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The approximately 25 Ma holotype of Ymboirana acrux was assigned to the living family Typhlonectidae by comparative anatomy, provisionally supporting a crown-Gymnophiona fossil record while formal phylogenetic testing and unambiguous family synapomorphies remain unavailable.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
A named, CT-scanned partial skeleton and broad living comparison support the record, but the authors explicitly defer a formal phylogenetic analysis; confidence is therefore low.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该主张绑定具名标本或明确数据集及一手来源定位；置信度仅适用于所述样本、方法与边界，不外推为全球首次出现、直接祖先或完整类群覆盖。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
约 2500 万年前的 Ymboirana acrux 正模依据比较解剖被归入现生水栖蚓螈科，暂时支持冠群无足目化石记录，但正式系统发育检验与无歧义的科级共有衍征仍不可用。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint follows an approximately 25 Ma comparative assignment to living Typhlonectidae; a formal phylogenetic test remains pending.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Ymboirana was assigned to Typhlonectidae from CT-informed comparative anatomy, but the authors report no unambiguous family synapomorphy and defer formal phylogenetic testing.
<!-- /evo:text -->
