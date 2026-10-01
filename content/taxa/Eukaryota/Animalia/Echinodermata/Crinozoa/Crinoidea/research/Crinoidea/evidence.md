---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:31590
    scientificName: Crinoidea
    commonName: Sea lilies and feather stars
    commonNameZh: 海百合与海羊齿
    rank: class
    parentName: Echinodermata
    extinct: false
    geography:
      - Source-bounded early crinoid study localities
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
      - guensburg-2020-crinoid-origin
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Crinozoa/Crinoidea/research/Crinoidea
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
      reviewedAgainstReferenceVersion: guensburg-2020-crinoid-origin @ DOI 10.1017/jpa.2019.87
      referenceLinks:
        - relation: supports
          referenceId: guensburg-2020-crinoid-origin
          pages: 311–312
          quoteLocator: Introduction, paragraph beginning 'The known crinoid record begins during the middle Tremadocian'
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Crinozoa/Crinoidea/research/Crinoidea
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
      reviewedAgainstReferenceVersion: guensburg-2020-crinoid-origin at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: guensburg-2020-crinoid-origin
          relation: supports
          pages: 311–312
          quoteLocator: Introduction, discussion of the middle Tremadocian record and problematic Echmatocrinus
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Crinozoa/Crinoidea/research/Crinoidea
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
      reviewedAgainstReferenceVersion: guensburg-2020-crinoid-origin at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: guensburg-2020-crinoid-origin
          relation: supports
          pages: 311–333
          quoteLocator: Abstract, locality and systematic-palaeontology sections
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Crinozoa/Crinoidea/research/Crinoidea
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
      reviewedAgainstReferenceVersion: guensburg-2020-crinoid-origin at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: guensburg-2020-crinoid-origin
          relation: supports
          pages: 311–333
          quoteLocator: Scope of systematic descriptions and early crinoid origin discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Crinozoa/Crinoidea/research/Crinoidea
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
      reviewedAgainstReferenceVersion: guensburg-2020-crinoid-origin at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: guensburg-2020-crinoid-origin
          relation: supports
          pages: 311–333
          quoteLocator: Systematic palaeontology and arm-evolution discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Echinodermata/Crinozoa/Crinoidea/research/Crinoidea
      rangeKind: global-composite
      taxonomicConcept: Crinoidea
      geographicScope: Global or represented navigation composite
      olderMa: 482
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 4.85
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: high
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Echinodermata/Crinozoa/Crinoidea/research/Crinoidea/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: guensburg-2020-crinoid-origin
          locator: pp. 311–312, Introduction
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Crinoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The unproblematic crinoid fossil record begins in the middle Tremadocian; the Middle Cambrian Echmatocrinus is problematic and is not used here as the Crinoidea first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The cited systematic study explicitly states that the known crinoid record begins in the middle Tremadocian and separately identifies Echmatocrinus as problematic. A representative numeric endpoint therefore carries stage-level uncertainty.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The cited systematic study treats named early crinoid taxa and explicitly keeps problematic Middle Cambrian Echmatocrinus outside the unproblematic Crinoidea record used by this profile.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The source makes the record boundary explicit in a systematic treatment; the profile does not turn that bounded treatment into a universal crinoid topology or direct-ancestry claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The cited early-crinoid systematic material supplies source-bounded fossil locality context, not a global distribution, endemicity or dispersal reconstruction for Crinoidea.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary study documents its sampled fossil context, but a systematic sample cannot establish class-wide geographic presence, absence or origin centre.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The cited systematic study does not establish class-wide diet, habitat preference, locomotor performance, body-size distribution or guild for Crinoidea; these fields remain explicitly unresolved beyond marine fossil context.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
This is an evidence-boundary claim: the source is a systematic account of early fossils, not a whole-class ecological reconstruction.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The source documents anatomical characters in named early crinoid taxa, while the profile keeps those observations source-bounded and does not present them as an invariant class-wide character list.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The study directly describes morphology in named specimens; the limitation avoids extrapolating a restricted fossil sample to every crinoid lineage.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统分类研究明确指出无争议的海百合记录始于特马豆克期中期，并将中寒武世 Echmatocrinus 单列为有问题的化石；数值端点因此保留阶级尺度的不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
系统分类研究明确划分无争议的海百合记录与有问题的中寒武世 Echmatocrinus；该档案不会把这一有限处理改写为普遍拓扑或直系祖先结论。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
一手系统研究提供的是取样化石地点背景，不是海百合纲完整分布、特有性或扩散路径；置信度因此只限于来源边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
所引材料是早期化石的系统分类研究，并非全纲生态重建；饮食、栖息地偏好、运动性能、体型分布与营养类群都明确保留未解。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
来源直接描述具名早期海百合类群的解剖性状，但保存和取样范围不能代表所有海百合谱系，因此不外推为全纲不变性状表。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所引分类研究讨论具名的早期海百合类群，并明确将存在归属问题的中寒武世 Echmatocrinus 排除在本档案采用的无争议海百合纲记录之外。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
所引早期海百合分类材料提供了来源限定的化石产地背景，并非海百合纲的全球分布、特有性或扩散重建。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所引分类研究不能确定整个海百合纲的食性、生境偏好、运动性能、体型分布或生态功能群；除海生化石背景外，这些字段明确保持未定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
来源记录了具名早期海百合类群的解剖性状；本档案将这些观察限定在来源范围内，不将其呈现为整个纲不变的性状清单。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
无争议的海百合化石记录始于特马豆克期中期；中寒武世 Echmatocrinus 存在问题，本图谱不以其作为海百合纲首次出现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The numeric endpoint is a rounded representative of the middle Tremadocian; the current canonical Tremadocian spans 486.85–477.1 Ma, and the source does not provide a point-dated global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A systematic study states that the unproblematic crinoid record begins in the middle Tremadocian and excludes the problematic Middle Cambrian Echmatocrinus from that first appearance.
<!-- /evo:text -->
