---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:19629
    scientificName: Olenoides serratus
    commonName: Burgess Shale gill-branch sample
    commonNameZh: 布尔吉斯页岩鳃支样本
    rank: genus
    parentName: Trilobite evidence samples
    extinct: true
    geography:
      - Burgess Shale
      - British Columbia, Canada
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
    confidence: medium
    referenceIds:
      - hou-2021-trilobite-gill
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: hou-2021-trilobite-gill primary-study locator checked for RC85
      referenceLinks:
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: eabe7377; Figures 3–5; Supplementary materials
          figure: Figures 3–5; Supplementary materials
          quoteLocator: Olenoides serratus articulation and upper limb branch
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: hou-2021-trilobite-gill primary-study locator checked for RC85
      referenceLinks:
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: eabe7377; Figures 3–5; Supplementary materials
          figure: Figures 3–5; Supplementary materials
          quoteLocator: Burgess Shale Olenoides serratus comparative sample
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: hou-2021-trilobite-gill primary-study locator checked for RC85
      referenceLinks:
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: eabe7377; Figures 1–5; Supplementary materials
          figure: Figures 1–5; Supplementary materials
          quoteLocator: Functional comparison of filament geometry and respiratory branch morphology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: hou-2021-trilobite-gill primary-study locator checked for RC85
      referenceLinks:
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: eabe7377; Figures 3–5; Supplementary materials
          figure: Figures 3–5; Supplementary materials
          quoteLocator: Olenoides upper limb branch, body-wall attachment and filament morphology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: hou-2021-trilobite-gill; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: hou-2021-trilobite-gill
          relation: supports
          pages: eabe7377
          figure: Figures 1–5; Supplementary materials
          quoteLocator: Burgess Shale Olenoides serratus comparative sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus
      rangeKind: global-composite
      taxonomicConcept: Olenoides respiratory-appendage sample
      geographicScope: Burgess Shale, Canada
      olderMa: 509
      youngerMa: 505
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
      confidence: medium
      claimPaths:
        - content/events/Trilobite_upper_limb_branch_and_gill_function/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: hou-2021-trilobite-gill
          locator: eabe7377; Figures 1–5; Supplementary materials; Triarthrus imaging; Olenoides articulation; Functional comparison
      reviewStatus: automated-audit-passed
---

# Olenoides serratus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Olenoides serratus is the named Burgess Shale trilobite in the cited appendage comparison; its sample does not establish a direct ancestral relationship.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field is restricted to the named Olenoides serratus comparison specimen and study, without extending the result to unobserved species or ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
This profile is limited to the cited Burgess Shale sample in British Columbia and does not establish a genus-wide distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The locality is explicit in the comparative fossil sample, but one deposit cannot delimit the geographic distribution of Olenoides.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Upper-branch morphology is consistent with a respiratory function, but gas exchange, haemolymph flow, diet and ecological guild are not directly measured.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The functional comparison is explicitly morphology-based, so physiology and behaviour remain bounded interpretations.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Olenoides serratus preserves a partly articulated, filament-bearing upper limb branch with body-wall attachment used in the study's structural comparison.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The branch and its articulation are directly preserved morphology, although the function inferred from them is separate.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Olenoides serratus is bounded here by the cited Burgess Shale sample from British Columbia, Canada; this named locality sample is not a genus-wide distribution or exact complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Olenoides: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
布尔吉斯页岩鳃支样本的分类字段限于 Olenoides serratus 的具名比较标本；不把样本相似性或矩阵位置改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
布尔吉斯页岩鳃支样本的地理字段限于不列颠哥伦比亚的具名样本，不外推为该属的全球分布或起源中心。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
布尔吉斯页岩鳃支样本的生态字段区分附肢形态和呼吸功能解释；气体交换、血淋巴流、食性与行为均未被直接测量。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
布尔吉斯页岩鳃支样本的形态字段限于保存的上肢支、体壁连接和丝状结构，并连接到精确图版和补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
奥莱诺虫属：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
本档案限于所引不列颠哥伦比亚省的布尔吉斯页岩样本，不能据此确定整个属的分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
附肢上支的形态与呼吸功能相符，但气体交换、血淋巴流动、食性及生态功能群并未被直接测定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Olenoides serratus 保存了部分保持连接、带有丝状结构的附肢上支及其体壁附着关系，研究将其用于结构比较。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Olenoides serratus 是所引附肢比较研究中具名的布尔吉斯页岩三叶虫；这一样本不能确立直系祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Olenoides serratus 在此由加拿大不列颠哥伦比亚省所引的布尔吉斯页岩样本约束；这一具名地点样本不是整个属的分布或精确完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Formation-level sample envelope, not a global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
