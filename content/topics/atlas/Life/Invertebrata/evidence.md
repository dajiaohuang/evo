---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Invertebrata
    commonName: Invertebrates
    commonNameZh: 无脊椎动物
    rank: grade
    taxonId: ""
    firstAppearance: 635
    lastAppearance: 0
    extinct: false
    entityKind: informal-group
    contentLevel: dossier
    parentRelationshipKind: display-grouping
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Life/Invertebrata
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
      reviewedAgainstReferenceVersion: pu-2016-gaskiers-ediacara primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: pu-2016-gaskiers-ediacara
          relation: supports
          pages: 955–958
          figure: Figures 1–3
          quoteLocator: Geological setting; CA–ID–TIMS U–Pb ages; relationship to the Avalon assemblages
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Life/Invertebrata
      rangeKind: global-composite
      taxonomicConcept: Invertebrata informal evidence anthology
      geographicScope: Global navigation grouping; primary fossil anchor in Newfoundland, Canada
      olderMa: 635
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
        - content/topics/atlas/Life/Invertebrata/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: pu-2016-gaskiers-ediacara
          locator: pp. 955–958; Figures 1–3; CA–ID–TIMS ages and Avalon assemblage context
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Invertebrata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 635–0 Ma Invertebrata route is an evidence anthology, not a clade range: CA–ID–TIMS dates place Avalon animal assemblages by about 571 Ma, while represented living groups continue to the present; 635 Ma remains an Ediacaran display ceiling rather than an invertebrate FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Invertebrata is explicitly an informal display grouping. The primary geochronology directly constrains one regional assemblage, so it can anchor the anthology without converting the 635 Ma period ceiling into a biological origination claim.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Invertebrata 在本图谱中明确是非正式展示分组；一手年代学只直接约束一个区域组合，因此可为证据选集提供锚点，但不能把 635 Ma 的年代边界改写成生物起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
635–0 Ma 的“无脊椎动物”路线是证据选集而非演化支范围：CA–ID–TIMS 年代把阿瓦隆动物群约束到约 571 Ma，而所代表的现生类群延续至今；635 Ma 只是埃迪卡拉纪展示上限，不是无脊椎动物全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
635 Ma is the Ediacaran display ceiling; the directly dated Avalon assemblages are about 571 Ma and do not define an invertebrate clade origin.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
An informal anthology spans dated Avalon animal assemblages and represented living groups without treating Invertebrata as a clade.
<!-- /evo:text -->
