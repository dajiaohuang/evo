---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:374798
    scientificName: Kretzoiarctos beatrix
    commonName: Kretzoiarctos
    commonNameZh: 克氏熊猫
    rank: genus
    parentName: Ursidae
    extinct: true
    geography:
      - Nombrevilla 2, Calatayud-Daroca Basin
      - ACM/C6-Camí, Vallès-Penedès Basin
      - Spain
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
      - abella-2012-kretzoiarctos
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae/Ailuropodinae/Kretzoiarctos/research/Kretzoiarctos_beatrix
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
      reviewedAgainstReferenceVersion: abella-2012-kretzoiarctos concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: abella-2012-kretzoiarctos
          pages: Article e48985
          figure: Figures 1–4
          quoteLocator: Holotype and referred material; phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae/Ailuropodinae/Kretzoiarctos/research/Kretzoiarctos_beatrix
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: abella-2012-kretzoiarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: abella-2012-kretzoiarctos
          relation: supports
          pages: Article e48985
          figure: Figure 3; Table S1
          quoteLocator: Cladistic Analysis; bootstrap analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae/Ailuropodinae/Kretzoiarctos/research/Kretzoiarctos_beatrix
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
      reviewedAgainstReferenceVersion: abella-2012-kretzoiarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: abella-2012-kretzoiarctos
          relation: supports
          pages: Article e48985
          figure: Figure 1
          quoteLocator: Type locality; Other localities; Chronological range
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae/Ailuropodinae/Kretzoiarctos/research/Kretzoiarctos_beatrix
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
      reviewedAgainstReferenceVersion: abella-2012-kretzoiarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: abella-2012-kretzoiarctos
          relation: supports
          pages: Article e48985
          figure: Figures 1–2
          quoteLocator: Holotype; Paratype; new material
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae/Ailuropodinae/Kretzoiarctos/research/Kretzoiarctos_beatrix
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: abella-2012-kretzoiarctos primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: abella-2012-kretzoiarctos
          relation: supports
          pages: Article e48985
          figure: Figure 3
          quoteLocator: Discussion; Ailuropodini dental features
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Ursidae/Ailuropodinae/Kretzoiarctos/research/Kretzoiarctos_beatrix
      rangeKind: global-composite
      taxonomicConcept: Kretzoiarctos beatrix Spanish sample
      geographicScope: Nombrevilla 2 and Abocador de Can Mata, Spain
      olderMa: 11.8
      youngerMa: 11.2
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
        - content/events/Kretzoiarctos_teeth_and_panda-clade_topology/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: abella-2012-kretzoiarctos
          locator: e48985; Figures 1–4; Tables 1–2; Table S1; Holotype and referred material; Phylogenetic analysis; Dental comparisons
      reviewStatus: automated-audit-passed
---

# Kretzoiarctos beatrix

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Kretzoiarctos beatrix is bounded by Spanish dental specimens including holotype P4 MNCN-CSIC NV-2-42 within an approximately 11.8–11.2 Ma sample envelope; its ailuropodine placement does not make it a direct giant-panda ancestor or global family first.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named dental specimens and localities are direct; topology, diet and biogeographic origin are comparative analyses.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
A published fossil-plus-living ursid morphology matrix recovers Kretzoiarctos within Ailuropodinae, but internal ailuropodine clades are unresolved in its majority-rule bootstrap tree.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The result is a named analysis with explicit weak internal resolution, not a direct-ancestor assertion.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Kretzoiarctos is represented in the study by Nombrevilla 2 and ACM/C6-Camí in Spain; these two Iberian localities do not demonstrate a secure centre of origin or a complete distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The claim is restricted to the two explicitly stated localities.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The study identifies left P4 NV-2-42, right M1 NV-2-40 and partial mandible IPS 46473 with associated P4 as Kretzoiarctos material.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The statement reports named dental and mandibular specimens without extrapolating their anatomy.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The paper interprets dental features as a tendency toward a more herbivorous diet, but the dental sample does not directly observe feeding, habitat, locomotion or a population-wide ecological guild.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The diet statement is a comparative interpretation and its limits are explicit.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该结果是具名分析且内部大熊猫亚科解析度有限，并非直接祖先断言。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
主张严格限于原始研究明确列出的两个西班牙化石地点，不外推分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
陈述只报告具名牙齿与下颌标本，不外推其解剖。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
食性陈述来自牙齿比较解释，并明确保留其不是直接观察的限制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
具名牙齿标本与地点属于直接证据；拓扑、食性和生物地理起源来自比较分析。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Kretzoiarctos beatrix 由西班牙牙齿标本约束，其中包括处于约 1180 万—1120 万年前样本区间的正模上第四前臼齿 MNCN-CSIC NV-2-42；其大熊猫亚科位置不使其成为大熊猫直接祖先或全球科级首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
已发表的化石加现生熊科形态矩阵将 Kretzoiarctos 恢复在大熊猫亚科内，但多数规则自助法树未能解析大熊猫亚科内部支系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
研究中的 Kretzoiarctos 由西班牙 Nombrevilla 2 与 ACM/C6-Camí 材料代表；这两个伊比利亚地点不能证明可靠的起源中心或完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
研究将左 P4 NV-2-42、右 M1 NV-2-40，以及带有关联 P4 的部分下颌 IPS 46473 鉴定为 Kretzoiarctos 材料。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
论文将牙齿特征解释为更偏植食的趋势，但该牙齿样本并未直接观察取食、栖息地、运动或种群尺度的生态类群。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a study-level sampled occurrence envelope, not a direct date on ancestry or a guaranteed global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Holotype MNCN-CSIC NV-2-42 is a left P4; NV-2-40 is a right M1, and IPS 46473 is a partial mandible with c1–m2 and associated P4.
<!-- /evo:text -->
