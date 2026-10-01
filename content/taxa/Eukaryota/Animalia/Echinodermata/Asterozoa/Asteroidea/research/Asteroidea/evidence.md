---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:31341
    scientificName: Asteroidea
    commonName: Starfish
    commonNameZh: 海星
    rank: class
    parentName: Echinodermata
    extinct: false
    geography:
      - Utah, United States (source-bounded Eriaster record)
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
      - blake-guensburg-2005-eriaster
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Asteroidea/research/Asteroidea
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
      reviewedAgainstReferenceVersion: blake-guensburg-2005-eriaster @ DOI 10.1666/0022-3360(2005)079<0395:IOANEO>2.0.CO;2
      referenceLinks:
        - relation: supports
          referenceId: blake-guensburg-2005-eriaster
          pages: 395–399
          figure: Figures 1–2
          quoteLocator: Page 395 Abstract and Stratigraphic positions; Systematic palaeontology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Asteroidea/research/Asteroidea
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
      reviewedAgainstReferenceVersion: blake-guensburg-2005-eriaster at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-guensburg-2005-eriaster
          relation: supports
          pages: 395–399
          figure: Figures 1–2
          quoteLocator: Abstract, stratigraphic positions and Systematic palaeontology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Asteroidea/research/Asteroidea
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
      reviewedAgainstReferenceVersion: blake-guensburg-2005-eriaster at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-guensburg-2005-eriaster
          relation: supports
          pages: 395–399
          quoteLocator: Stratigraphic positions and locality discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Asteroidea/research/Asteroidea
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
      reviewedAgainstReferenceVersion: blake-guensburg-2005-eriaster at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-guensburg-2005-eriaster
          relation: supports
          pages: 395–399
          quoteLocator: Study scope, stratigraphic positions and Systematic palaeontology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Asteroidea/research/Asteroidea
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
      reviewedAgainstReferenceVersion: blake-guensburg-2005-eriaster at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: blake-guensburg-2005-eriaster
          relation: supports
          pages: 395–399
          figure: Figures 1–2
          quoteLocator: Systematic palaeontology of Eriaster ibexensis
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
    - entityPath: content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Asteroidea/research/Asteroidea
      rangeKind: global-composite
      taxonomicConcept: Asteroidea — body-fossil record
      geographicScope: Global body-fossil record
      olderMa: 478
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 1
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Echinodermata/Asterozoa/Asteroidea/research/Asteroidea/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: blake-guensburg-2005-eriaster
          locator: p. 395, Abstract and Stratigraphic positions; pp. 396–398, Figures 1–2 and Systematic palaeontology
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Asteroidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Eriaster ibexensis from the very top Tremadocian of Utah is the oldest supported asteroid body-fossil record used here; Lower Cambrian Asteriacites trace fossils do not set the Asteroidea body-fossil range because their producer and mode of formation are problematic.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Eriaster is a directly described body fossil with a stage-level stratigraphic placement. The endpoint remains sampling-dependent, and the source explicitly distinguishes the problematic older trace-fossil evidence from class-level body fossils.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Eriaster ibexensis is treated as an asteroid body fossil in the cited systematic study; problematic Lower Cambrian Asteriacites traces are not used as an Asteroidea body-fossil assignment.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The study directly describes Eriaster and separates it from the problematic trace evidence, while the profile does not claim a complete asteroid topology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Eriaster ibexensis is a source-bounded very-top-Tremadocian record from Utah, United States; it does not establish a global asteroid distribution or origin centre.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The cited primary study reports the named locality and stratigraphic setting, but one occurrence cannot establish global biogeography.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The Eriaster body-fossil study does not establish class-wide diet, habitat preference, locomotor performance, body-size distribution or guild for Asteroidea; only source-bounded marine depositional context is retained.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
This explicitly limits inference to the scope of a body-fossil systematic study rather than filling ecological fields from living analogues.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited study documents Eriaster ibexensis body-fossil anatomy; the profile keeps this specimen-level morphology separate from problematic trace fossils and from a class-wide trait inventory.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The figures and systematic description support the named fossil anatomy, while preservation and sampling limit generalization to all asteroid lineages.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Eriaster 是具有阶级地层定位的直接体化石，但端点仍受采样影响；来源明确将更老且形成方式有问题的遗迹化石与海星纲体化石区分。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Eriaster 的体化石由系统研究直接描述，且来源区分了有问题的更老遗迹化石；该档案不把有限材料提升为完整海星纲拓扑。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
一手研究直接报告了犹他州具名地点与地层背景；单一出现记录不能建立海星纲全球分布或起源中心。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
Eriaster 是体化石系统研究，而非生态重建；为避免以现生类比填补空白，全纲饮食、偏好栖息地、运动、体型和营养类群均保留未解。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
图件和系统描述直接支持 Eriaster 的具名体化石解剖，但保存与采样限制了外推范围，不能成为海星纲全体性状清单。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Eriaster ibexensis 是来源限定的美国犹他州特马豆克期最顶部记录，不能据此确定海星类的全球分布或起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Eriaster 实体化石研究不能确定整个海星纲的食性、生境偏好、运动性能、体型分布或生态功能群；仅保留来源限定的海相沉积背景。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所引研究记录了 Eriaster ibexensis 实体化石的解剖结构；本档案将这种标本层级的形态与存在归属问题的遗迹化石及全纲性状清单区分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引分类研究将 Eriaster ibexensis 作为海星类实体化石处理；存在归属问题的下寒武统 Asteriacites 遗迹不被用于海星纲实体化石的归属判定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
犹他特马豆克阶最顶部的 Eriaster ibexensis 是本图谱采用的最老可靠海星纲体化石；由于造迹者和形成方式存在问题，下寒武统 Asteriacites 遗迹化石不用于设定海星纲体化石范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The endpoint is rounded from a very-top-Tremadocian occurrence. Older Asteriacites trace fossils are excluded because their producer and mode of formation are problematic.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Eriaster ibexensis provides the oldest supported asteroid body-fossil record used here and is stratigraphically placed at the very top of the Tremadocian.
<!-- /evo:text -->
