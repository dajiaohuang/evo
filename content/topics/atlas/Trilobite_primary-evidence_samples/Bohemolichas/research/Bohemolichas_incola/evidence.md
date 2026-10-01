---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:155131
    scientificName: Bohemolichas incola
    commonName: Gut-content trilobite specimen
    commonNameZh: 保存肠内容物的三叶虫标本
    rank: genus
    parentName: Trilobite evidence samples
    extinct: true
    geography:
      - Šárka Formation
      - Prague Basin
      - Czech Republic
    overview:
      markdown: page.en.md
      field: /records/atlas-profile/overview
    ecology:
      diet:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/diet
      habitat:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/habitat
      locomotion:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/locomotion
      bodySize:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/bodySize
      guild:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/guild
    traits:
      - markdown: page.en.md
        field: /records/atlas-profile/traits/0
      - markdown: page.en.md
        field: /records/atlas-profile/traits/1
      - markdown: page.en.md
        field: /records/atlas-profile/traits/2
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: high
    referenceIds:
      - kraft-2023-trilobite-gut
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: kraft-2023-trilobite-gut primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: kraft-2023-trilobite-gut
          relation: supports
          pages: 545–551; Figures 1–4; Extended Data
    - subject:
        kind: taxon
        path: content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: kraft-2023-trilobite-gut primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: kraft-2023-trilobite-gut
          relation: supports
          pages: 545–551; Figures 1–4; Extended Data
    - subject:
        kind: taxon
        path: content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: kraft-2023-trilobite-gut primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: kraft-2023-trilobite-gut
          relation: supports
          pages: 545–551; Figures 1–4; Extended Data
    - subject:
        kind: taxon
        path: content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: kraft-2023-trilobite-gut primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: kraft-2023-trilobite-gut
          relation: supports
          pages: 545–551; Figures 1–4; Extended Data
    - subject:
        kind: taxon
        path: content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: kraft-2023-trilobite-gut primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: kraft-2023-trilobite-gut
          relation: supports
          pages: 545–551; Figures 1–4; Extended Data
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
  ranges:
    - entityPath: content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola
      rangeKind: global-composite
      taxonomicConcept: Bohemolichas incola gut-content occurrence
      geographicScope: Šárka Formation, Czech Republic
      olderMa: 466
      youngerMa: 463
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
      confidence: high
      claimPaths:
        - content/events/Bohemolichas_gut_contents_and_digestive_inference/evidence.md#/records/claims/0
        - content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: kraft-2023-trilobite-gut
          locator: 545–551; Figures 1–4; Extended Data; Specimen inventory no. 8; Gut-content mapping; Palaeophysiological interpretation
      reviewStatus: automated-audit-passed
---

# Bohemolichas incola

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The profiled specimen is referred to Bohemolichas incola, while PBDB treats Bohemolichas as a subjective synonym of Uralichas; the profile preserves that taxonomic caveat.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is bounded to Bohemolichas incola, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profile is restricted to one Šárka Formation specimen from the Prague Basin and does not define a genus-wide distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field is bounded to Bohemolichas incola, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Ostracod, hyolith and stylophoran remains directly document one meal; prey selectivity, feeding rate and usual diet remain inferred.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field is bounded to Bohemolichas incola, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Synchrotron microtomography maps the alimentary tract and shelly prey remains in inventory specimen 8.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field is bounded to Bohemolichas incola, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 466–463 Ma interval is a formation-level context for the profiled specimen, not a global genus FAD, LAD or continuous duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field is bounded to Bohemolichas incola, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
保存肠内容物的三叶虫标本的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
保存肠内容物的三叶虫标本的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
保存肠内容物的三叶虫标本的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
保存肠内容物的三叶虫标本的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
保存肠内容物的三叶虫标本的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
本档案中的标本归入 Bohemolichas incola，而 PBDB 将 Bohemolichas 作为 Uralichas 的主观异名处理；档案保留这一分类差异说明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本档案限于布拉格盆地 Šárka 组的一件标本，不能确定整个属的分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
介形虫、软舌螺和 Stylophora 类棘皮动物的遗骸直接记录了一次进食；猎物选择性、摄食速率及通常食性仍属推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
同步辐射显微断层成像揭示了馆藏编号为 8 的标本中的消化道及带壳猎物遗骸。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
466–463 Ma 区间是档案标本的组级地层背景，并非该属的全球首现、末现或连续延续时长。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 466–463 Ma interval is a formation-level context for the profiled specimen, not a global genus FAD, LAD or continuous duration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
