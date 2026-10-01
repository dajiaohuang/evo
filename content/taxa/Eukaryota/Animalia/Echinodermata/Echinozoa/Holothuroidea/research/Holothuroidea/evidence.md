---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:161964
    scientificName: Holothuroidea
    commonName: Sea cucumbers
    commonNameZh: 海参
    rank: class
    parentName: Echinodermata
    extinct: false
    geography:
      - Llandrindod, Wales, United Kingdom (source-bounded Holothurian Bed record)
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
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: high
    referenceIds:
      - botting-muir-2012-holothurian-bed
      - pbdb-api-2016
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Holothuroidea/research/Holothuroidea
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: botting-muir-2012-holothurian-bed @ DOI 10.26879/272 plus PBDB occ:801180 retrieved 2026-08-29
      referenceLinks:
        - relation: supports
          referenceId: botting-muir-2012-holothurian-bed
          figure: Figure 9; holotype Figure 9.1
          quoteLocator: "Systematic palaeontology: Class Holothuroidea and Oesolcucumaria; Remarks; Holotype; Occurrence"
        - relation: contextualizes
          referenceId: pbdb-api-2016
          quoteLocator: "Rejected endpoint candidate: PBDB occ:801180, Holothuroidea <indet. A>, Burgess Shale Stage 4, reference ref:28283"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Holothuroidea/research/Holothuroidea
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: botting-muir-2012-holothurian-bed at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: botting-muir-2012-holothurian-bed
          relation: supports
          figure: Figure 9; holotype Figure 9.1
          quoteLocator: "Systematic palaeontology: Class Holothuroidea and Oesolcucumaria"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Holothuroidea/research/Holothuroidea
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: botting-muir-2012-holothurian-bed at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: botting-muir-2012-holothurian-bed
          relation: supports
          quoteLocator: Holothurian Bed locality, Holotype and Occurrence sections
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Holothuroidea/research/Holothuroidea
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: botting-muir-2012-holothurian-bed at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: botting-muir-2012-holothurian-bed
          relation: supports
          quoteLocator: Fauna and ecology scope; Systematic palaeontology and occurrence sections
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Holothuroidea/research/Holothuroidea
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: botting-muir-2012-holothurian-bed at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: botting-muir-2012-holothurian-bed
          relation: supports
          figure: Figure 9; holotype Figure 9.1
          quoteLocator: Oesolcucumaria remarks, holotype and occurrence
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
    - entityPath: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Holothuroidea/research/Holothuroidea
      rangeKind: global-composite
      taxonomicConcept: Holothuroidea — articulated body-fossil record (PBDB txn:161964)
      geographicScope: Global articulated body-fossil record
      olderMa: 460
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 1.8
        youngerMa: 0.0117
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: high
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Holothuroidea/research/Holothuroidea/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: botting-muir-2012-holothurian-bed
          locator: "Systematic palaeontology: Oesolcucumaria; Remarks; Figure 9; Holotype and Occurrence"
        - referenceId: pbdb-api-2016
          locator: Rejected endpoint candidate occ:801180, Holothuroidea <indet. A>, Burgess Shale Stage 4, ref:28283
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Holothuroidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Oesolcucumaria eostre from the late Darriwilian Holothurian Bed of Wales is the oldest articulated holothurian used here, and its calcareous ring provides an unequivocal class assignment; a disputed Cambrian PBDB identification is not used as the range endpoint.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype and paratypes preserve the diagnostic calcareous ring and an explicit late Darriwilian occurrence. PBDB's Stage 4 class-level first appearance is driven by one indeterminate Burgess Shale census record without a dedicated diagnostic revision, while the cited systematic paper treats proposed Cambrian holothurians as doubtful.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Oesolcucumaria eostre is assigned to Holothuroidea in the cited systematic study by articulated anatomy including a diagnostic calcareous ring; disputed Cambrian material is not used as an equivalent class record.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The holotype and paratypes preserve the diagnostic structure described by the primary study, while the rejected Cambrian candidate lacks an equivalent dedicated revision.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The cited articulated Oesolcucumaria record is from the late Darriwilian Holothurian Bed at Llandrindod, Wales; it does not establish global holothurian distribution or an origin centre.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The study reports a named locality and horizon directly, but one articulated bed cannot stand in for complete class biogeography.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The articulated Holothurian Bed record does not establish class-wide diet, habitat preference, locomotor performance, body-size distribution or guild for Holothuroidea; the profile retains only its marine depositional context.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The study includes fauna and ecology at a fossil-bed scale, not a whole-class reconstruction; unsupported ecological generalizations remain withheld.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Oesolcucumaria eostre preserves an articulated body and diagnostic calcareous ring in the cited Holothurian Bed material; these observations remain specimen- and locality-bounded.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The cited figure, holotype and systematic description directly document the anatomical basis, while the profile does not treat one fossil assemblage as all holothurian morphology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模和副模保存了具诊断意义的石灰环并具有明确的晚达瑞威尔期层位；PBDB 的第四阶首次出现仅由一个缺少专门诊断修订的伯吉斯页岩未定种群落记录驱动，不能作为端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
正模与副模的石灰环和关节相连解剖为海参纲归属提供直接依据；缺少同等专门修订的有争议寒武纪材料不作为等价记录。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
一手研究直接报告了威尔士 Llandrindod 晚达瑞威尔期 Holothurian Bed；一处化石层不能代表海参纲全球分布或起源中心。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
该研究在化石层尺度讨论动物群和生态，而非重建全纲生态；未获支持的饮食、偏好栖息地、运动、体型和营养类群保持未解。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
图 9、正模和系统描述直接记录 Oesolcucumaria 的石灰环与关节相连解剖，但一个地点的材料不能代表所有海参纲形态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所引保存关节连接的 Oesolcucumaria 记录来自威尔士 Llandrindod 的晚达瑞威尔期海参层，不能据此确定海参类的全球分布或起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
海参层中保存关节连接的记录不能确定整个海参纲的食性、生境偏好、运动性能、体型分布或生态功能群；本档案仅保留其海相沉积背景。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所引海参层材料中的 Oesolcucumaria eostre 保存了保持连接的身体及具有诊断意义的钙质环；这些观察仍限定于相应标本和产地。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引分类研究根据保存关节连接的解剖结构，包括具有诊断意义的钙质环，将 Oesolcucumaria eostre 归入海参纲；有争议的寒武纪材料不被用作同等的纲级记录。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
威尔士晚达瑞威尔期海参层的 Oesolcucumaria eostre 是本图谱采用的最老关节保存海参，其石灰环支持无歧义的纲级鉴定；有争议的寒武纪 PBDB 鉴定不用于设定范围端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The endpoint is rounded from the late Darriwilian articulated record. PBDB's Stage 4 value is driven by disputed occurrence occ:801180 and is explicitly rejected as the range endpoint.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Oesolcucumaria eostre preserves a diagnostic calcareous ring and articulated anatomy in the late Darriwilian Holothurian Bed. Proposed Cambrian holothurians lack comparable diagnostic support.
<!-- /evo:text -->
