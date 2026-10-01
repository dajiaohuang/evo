---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:31508
    scientificName: Ophiuroidea
    commonName: Brittle stars and basket stars
    commonNameZh: 蛇尾与筐蛇尾
    rank: class
    parentName: Echinodermata
    extinct: false
    geography:
      - Wah Wah Formation, Utah, United States (source-bounded Stenaster record)
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
    confidence: medium
    referenceIds:
      - blake-2016-early-asterozoa
      - pbdb-api-2016
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Ophiuroidea/research/Ophiuroidea
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: blake-2016-early-asterozoa @ DOI 10.1016/j.annpal.2016.08.002 plus PBDB occ:1541278 retrieved 2026-08-29
      referenceLinks:
        - relation: supports
          referenceId: blake-2016-early-asterozoa
          pages: 161–181
          quoteLocator: "Abstract; Systematic palaeontology: Stenaster sp."
        - relation: contextualizes
          referenceId: pbdb-api-2016
          quoteLocator: PBDB occurrence occ:1541278, collection col:216850, reference ref:74981; Floian Wah Wah Formation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Ophiuroidea/research/Ophiuroidea
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: blake-2016-early-asterozoa at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-2016-early-asterozoa
          relation: supports
          pages: 161–181
          quoteLocator: "Abstract and Systematic palaeontology: Stenaster sp."
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Ophiuroidea/research/Ophiuroidea
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: blake-2016-early-asterozoa plus PBDB occ:1541278 at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-2016-early-asterozoa
          relation: supports
          pages: 161–181
          quoteLocator: "Systematic palaeontology: Stenaster sp."
        - referenceId: pbdb-api-2016
          relation: contextualizes
          quoteLocator: PBDB occ:1541278, col:216850, Floian Wah Wah Formation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Ophiuroidea/research/Ophiuroidea
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
      reviewedAgainstReferenceVersion: blake-2016-early-asterozoa at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-2016-early-asterozoa
          relation: supports
          pages: 161–181
          quoteLocator: "Study scope and Systematic palaeontology: Stenaster sp."
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Ophiuroidea/research/Ophiuroidea
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: blake-2016-early-asterozoa at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-2016-early-asterozoa
          relation: supports
          pages: 161–181
          quoteLocator: "Systematic palaeontology: Stenaster sp."
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
    - entityPath: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Ophiuroidea/research/Ophiuroidea
      rangeKind: global-composite
      taxonomicConcept: Ophiuroidea — body-fossil record (PBDB txn:31508)
      geographicScope: Global body-fossil record
      olderMa: 477.1
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 5.8
        youngerMa: 0.0117
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Ophiuroidea/research/Ophiuroidea/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: blake-2016-early-asterozoa
          locator: "pp. 161–181; Abstract and Systematic palaeontology: Stenaster sp."
        - referenceId: pbdb-api-2016
          locator: occ:1541278; col:216850; ref:74981; Floian Wah Wah Formation
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Ophiuroidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A class-level ophiuran occurrence represented by Stenaster from the Wah Wah Formation is Floian in age; the atlas therefore uses the Floian base only as a stage ceiling for the Ophiuroidea body-fossil record.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The systematic study reports clear class-level assignment, and PBDB occurrence 1541278 resolves the specimen to a Floian collection. The 477.1 Ma endpoint is the current stage ceiling rather than a point-dated first appearance.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The cited systematic study reports Stenaster as class-level ophiuran material; the profile uses that bounded assignment without claiming a complete ophiuran topology or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The source provides a clear class-level systematic treatment, whereas deeper relationships and whole-class membership are beyond its sampled material.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The cited Stenaster record is from the Floian Wah Wah Formation of Utah, United States; it is a source-bounded occurrence rather than a global ophiuran distribution or origin claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The systematic source and independently resolved PBDB occurrence identify a formation and stage, but neither is a complete geographic census.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The Stenaster systematic record does not establish class-wide diet, habitat preference, locomotor performance, body-size distribution or guild for Ophiuroidea; only source-bounded marine formation context is retained.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The statement preserves the ecological boundary of a systematic fossil study and avoids substituting living brittle-star ecology for the described occurrence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited systematic treatment describes class-level ophiuran anatomy in Stenaster material, which remains a source-bounded fossil observation rather than a class-wide invariant trait list.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The source directly supplies the named systematic evidence; the profile does not extrapolate preservation-limited material to every ophiuran lineage.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统研究支持清楚的纲级鉴定，PBDB occurrence 1541278 将标本解析到弗洛期层位；477.1 Ma 是当前阶底上限，不是点定年的首次出现。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
系统研究为 Stenaster 提供纲级蛇尾类材料，但更深层关系和全纲成员范围超出该样本，故不写成完整拓扑或直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
系统来源和独立解析的 PBDB 记录共同确定了弗洛期 Wah Wah Formation 的样本背景；它们不是全球地理普查。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
Stenaster 的系统记录不支持蛇尾纲全体的饮食、栖息地偏好、运动性能、体型分布或营养类群；仅保留来源限定的海相层位背景。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
来源直接描述 Stenaster 的纲级蛇尾类解剖，但化石材料具有保存和取样边界，不能外推为所有蛇尾类的恒定性状。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所引 Stenaster 记录来自美国犹他州弗洛期 Wah Wah 组；这是来源限定的产出记录，而非蛇尾类全球分布或起源的主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Stenaster 分类记录不能确定整个蛇尾纲的食性、生境偏好、运动性能、体型分布或生态功能群；仅保留来源限定的海相地层背景。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所引分类研究描述了 Stenaster 材料中支持蛇尾类纲级归属的解剖结构；这些仍是来源限定的化石观察，而非整个纲不变的性状清单。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引分类研究将 Stenaster 报告为蛇尾类的纲级材料；本档案采用这一限定归属，不据此提出完整蛇尾类拓扑或直系祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Wah Wah 组以 Stenaster 为代表、可鉴定至纲级的蛇尾化石出现于弗洛期；因此图谱仅把弗洛阶底作为蛇尾纲体化石记录的阶级上限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is the current Floian stage ceiling, not a point-dated first appearance. PBDB occurrence occ:1541278 resolves the cited Stenaster material to a Floian collection.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A systematic asterozoan study provides class-level Ophiuroidea material, and PBDB occurrence occ:1541278 independently resolves Stenaster from the Wah Wah Formation to the Floian.
<!-- /evo:text -->
