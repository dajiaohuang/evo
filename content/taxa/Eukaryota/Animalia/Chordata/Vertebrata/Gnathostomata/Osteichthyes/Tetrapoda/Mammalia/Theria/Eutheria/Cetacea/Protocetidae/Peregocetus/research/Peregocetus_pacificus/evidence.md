---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:384282
    scientificName: Peregocetus pacificus
    commonName: Pacific Travelling Whale
    commonNameZh: 太平洋游走鲸
    rank: genus
    parentName: Protocetidae
    extinct: true
    geography:
      - Lowest Yumaque Member, Paracas Formation, Playa Media Luna, Pisco Basin, Peru
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
      - lambert-2019-peregocetus
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae/Peregocetus/research/Peregocetus_pacificus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lambert-2019-peregocetus concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: lambert-2019-peregocetus
          pages: 1352–1359.e3
          figure: Figures 1 and S1
          quoteLocator: Holotype; Geological setting and age
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae/Peregocetus/research/Peregocetus_pacificus
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: lambert-2019-peregocetus concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: lambert-2019-peregocetus
          relation: supports
          pages: 1352–1354; e1–e2
          figure: Figures 1–3; Figure S3; Data S1
          quoteLocator: Systematics; Diagnosis; Phylogenetic Analysis and consensus topology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae/Peregocetus/research/Peregocetus_pacificus
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: lambert-2019-peregocetus concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: lambert-2019-peregocetus
          relation: supports
          pages: 1352; 1357–1358; e1–e3
          figure: Figure 4; Figure S1; Table S1
          quoteLocator: Locality and horizon; Age of MUSM 3580-bearing bed; Paleobiogeography
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae/Peregocetus/research/Peregocetus_pacificus
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: lambert-2019-peregocetus concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: lambert-2019-peregocetus
          relation: supports
          pages: 1354–1357; e2–e3
          figure: Figures 2–4; Figure S4
          quoteLocator: Locomotion; Functional hind limbs; hypothetical swimming and terrestrial postures; Reconstruction limits
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae/Peregocetus/research/Peregocetus_pacificus
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: lambert-2019-peregocetus concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: lambert-2019-peregocetus
          relation: supports
          pages: 1352–1355; e1–e2
          figure: Figures 1–2; Figures S2–S4; Data S2
          quoteLocator: Holotype inventory; Diagnosis; Additional Descriptive Elements; preserved-versus-reconstructed parts
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Protocetidae/Peregocetus/research/Peregocetus_pacificus
      rangeKind: global-composite
      taxonomicConcept: Peregocetus pacificus holotype occurrence
      geographicScope: Lowest Yumaque Member, Paracas Formation, Peru
      olderMa: 42.6
      youngerMa: 42.6
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
        - content/events/Peregocetus_holotype_and_South_Pacific_occurrence/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: lambert-2019-peregocetus
          locator: pp. 1352–1359.e3; Figures 1 and S1
      reviewStatus: automated-audit-passed
---

# Peregocetus pacificus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Peregocetus pacificus is anchored by holotype MUSM 3580 in the lowest Yumaque Member of Peru at an interpreted approximately 42.6 Ma; the value is nannofossil biochronology, not a direct specimen date, genus-wide duration or global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named holotype and stratigraphic setting are direct; the age and dispersal interpretation retain their stated inferential basis.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Lambert et al. establish Peregocetus pacificus gen. et sp. nov. from holotype MUSM 3580 and place it within the paraphyletic Protocetidae in their morphology matrix; that placement is analysis-dependent and not a direct-ancestry claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Systematics, diagnosis and the matrix procedure are directly reported in the primary paper. The claim separates the published taxon diagnosis from the conditional topology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Peregocetus holotype MUSM 3580 is bounded to Playa Media Luna in the Pisco Basin, Peru, at 1.95 m above the base of the Yumaque Member of the Paracas Formation; the paper's westward South Atlantic route is a reconstructed dispersal hypothesis, not an observed track.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The locality, stratigraphic position and mapping procedure are explicitly reported. The distinction between the named occurrence and the route hypothesis follows the paper's own paleobiogeographic analysis.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Peregocetus preserves anatomy used to reconstruct both aquatic swimming and terrestrial weight bearing, including robust limbs and hoof-like phalanges; feeding, gait, swimming performance and habitat behaviour remain inferred rather than directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The paper directly documents the preserved skeleton and compares functional possibilities in hypothetical postures. Behavioural and performance wording is kept inferential because no living activity is observed.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Holotype MUSM 3580 preserves mandibles and most major postcranial regions, including two fused sacrals, a defined femoral head, robust limbs and hoof-like distal phalanges; the articulated presentation includes reconstructed or missing portions.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The holotype inventory, diagnosis and figure captions identify the preserved elements and distinguish reconstructed sections. Confidence applies to the named specimen, not to an invariant protocetid body plan.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名正模与地层背景属于直接证据；年龄和扩散解释保留其声明的推断基础。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
新属新种、正模和原鲸科诊断由主论文直接给出；形态矩阵中的位置依赖取样和编码，不能改写为祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
正模地点、层位高度和地层由论文直接记录；向西穿越南大西洋是古生物地理模型的假说，不是化石直接记录的迁移轨迹。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
论文直接描述保存的肢骨并展示假设的游泳与陆地姿势；行为、步态和性能属于功能推断，故保持中等置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
正模清单、诊断和图注直接区分保存与重建部分；高置信度限定于 MUSM 3580，不外推为所有原鲸科的体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Peregocetus pacificus 由秘鲁 Yumaque 段最下部的正模 MUSM 3580 锚定，解释年龄约为 4260 万年前；该值来自钙质超微化石生物年代学，不是标本直接测年、全属延续或全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Lambert 等以正模 MUSM 3580 建立 Peregocetus pacificus 新属新种，并在形态矩阵中将其置于并系的原鲸科；该位置依赖分析，不是直接祖先主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Peregocetus 正模 MUSM 3580 限定于秘鲁皮斯科盆地 Playa Media Luna，位于帕拉卡斯组 Yumaque 段底部以上 1.95 米；论文提出的向西穿越南大西洋路线是复原的扩散假说，不是观测到的轨迹。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Peregocetus 保存的解剖结构被用于复原水中游泳和陆地承重，包括粗壮肢骨和蹄状指趾骨；摄食、步态、游泳表现和栖息行为仍是推断，而非直接观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
正模 MUSM 3580 保存下颌和大部分主要颅后骨骼，包括两枚愈合骶椎、明确的股骨头、粗壮肢骨和蹄状远端指趾骨；关节相连的展示中包含重建或缺失部分。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 42.6 Ma value is a nannofossil-based biochronological interpretation, not a direct date on MUSM 3580 or a global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded specimen assemblage and its stratigraphic placement in the cited primary study.
<!-- /evo:text -->
