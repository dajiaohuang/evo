---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:226298
    scientificName: Elpistostege
    commonName: Elpistostege
    commonNameZh: 希望螈鱼
    rank: genus
    parentName: Stem tetrapodomorphs
    extinct: true
    geography:
      - Miguasha, Quebec, Canada
      - Escuminac Formation
    regionalRanges:
      - canonicalRangePath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege/evidence.md#/records/ranges/1
        label: Miguasha Frasnian specimen envelope
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
      - cloutier-2020-elpistostege-hand
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: cloutier-2020-elpistostege-hand; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: cloutier-2020-elpistostege-hand
          pages: 549–554
          figure: Figures 1–5; Extended Data Figures 1–2
          quoteLocator: Miguasha, Quebec, Canada locality and MHNM 06-2067
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Cloutier et al. 2020 DOI 10.1038/s41586-020-2100-8
      referenceLinks:
        - referenceId: cloutier-2020-elpistostege-hand
          relation: supports
          pages: 549–554
          figure: Figures 1–5; Extended Data Figures 1–2
          quoteLocator: Comparative anatomy and phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Cloutier et al. 2020 DOI 10.1038/s41586-020-2100-8
      referenceLinks:
        - referenceId: cloutier-2020-elpistostege-hand
          relation: supports
          pages: 549–554
          figure: Figure 1; specimen description
          quoteLocator: Miguasha, Quebec, Canada locality and MHNM 06-2067
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Cloutier et al. 2020 DOI 10.1038/s41586-020-2100-8
      referenceLinks:
        - referenceId: cloutier-2020-elpistostege-hand
          relation: supports
          pages: 549–554
          figure: Figures 2–5; Extended Data Figures 1–2
          quoteLocator: Pectoral-fin description and CT reconstruction
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Cloutier et al. 2020 DOI 10.1038/s41586-020-2100-8
      referenceLinks:
        - referenceId: cloutier-2020-elpistostege-hand
          relation: supports
          pages: 549–554
          quoteLocator: Specimen context and pectoral-fin discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege
      rangeKind: global-composite
      taxonomicConcept: Elpistostege watsoni
      geographicScope: Miguasha, Quebec, Canada
      olderMa: 382.31
      youngerMa: 372.15
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
      confidence: high
      claimPaths:
        - content/events/Elpistostege_digit-bearing_fin_endoskeleton/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: cloutier-2020-elpistostege-hand
          locator: pp. 549–554; Figures 1–5 and Extended Data
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Sarcopterygii/Osteolepidida/Osteolepidiformes/Cyclolepidoidei/Panderichthyidae/Elpistostege/research/Elpistostege
      rangeKind: taxon-range
      taxonomicConcept: Elpistostege watsoni
      geographicScope: Miguasha, Quebec, Canada
      olderMa: 382.31
      youngerMa: 372.15
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/1/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/1/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: high
      claimIds:
        - claim:event:elpistostege-digit-bearing-fin
        - claim:taxon:elpistostege:fossil-range
      referenceLocators:
        - referenceId: cloutier-2020-elpistostege-hand
          locator: pp. 549–554; Figure 1; Figures 2–5; Extended Data Figures 1–2
      reviewStatus: automated-audit-passed
---

# Elpistostege

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Elpistostege is bounded here by articulated specimen MHNM 06-2067 from the Frasnian Escuminac Formation at Miguasha, Quebec, Canada; this named specimen context is not a global distribution or exact complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Elpistostege: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Cloutier et al. place Elpistostege within the elpistostegalian, stem-tetrapodomorph region of their analysed topology; this package preserves that sampled placement without treating it as a fixed universal tree.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary study supplies an explicit specimen-based phylogenetic analysis, but the placement of Elpistostege changes with taxon and character sampling; the claim is limited to that analysis.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The Elpistostege specimen used here is from the Miguasha fossil locality in Quebec, Canada; that named locality is not a global distribution or habitat-preference claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The locality and specimen context are directly reported in the primary study. The claim deliberately stops at the documented occurrence and does not infer an unsampled range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
CT data from articulated Elpistostege specimen MHNM 06-2067 document four proximodistal radial rows, branched carpals and distal elements interpreted as digits or putative digits while lepidotrichia remain present.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The internal anatomy is directly documented, while digit homology and functional interpretation remain hypotheses; medium confidence preserves that distinction.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited Elpistostege pectoral-fin study documents an aquatic fossil setting but does not establish diet, habitat preference or observed locomotor behaviour for the genus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The depositional locality is documented, whereas diet and behaviour are not directly observed in the cited anatomical study; unavailable fields remain unavailable rather than filled from living analogues.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
希望螈鱼：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
一手研究给出基于标本的系统发育分析，但希望螈鱼位置会随取样和特征改变；此声明只保留该分析范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
论文明确记录了魁北克米瓜沙及标本背景；声明不把单一地点外推为全球分布或生境偏好。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
CT 直接显示鳍内骨骼与鳍条，但指同源性和功能解释仍属假说，因此保留中等置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
所引解剖研究记录了水生化石环境，却没有直接观察食性或行为；缺失生态字段保持未解析。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Cloutier 等在其分析的拓扑中，将 Elpistostege 置于希望螈类、四足形类干群所在的区域；本内容包保留这一基于采样的定位，不将其视为固定不变的通用系统树。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
此处采用的 Elpistostege 标本来自加拿大魁北克的 Miguasha 化石地点；该地点记录不代表全球分布或生境偏好。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
关节相连的 Elpistostege 标本 MHNM 06-2067 的 CT 数据记录了沿近端至远端排列的四列辐状骨、分支的腕骨，以及被解释为指或可能的指的远端骨骼，同时仍保留鳞质鳍条。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引 Elpistostege 胸鳍研究记录了水生环境中的化石背景，但未确定该属的食性、生境偏好，也未直接观察其运动行为。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Elpistostege 在此由来自加拿大魁北克省米古沙弗拉斯阶埃斯库米纳克组的关节连接标本 MHNM 06-2067 约束；这一具名标本背景不是全球分布或精确完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-level envelope; it does not establish absence outside the cited study sample.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Frasnian stage envelope contextualizes the Miguasha specimen described and CT-imaged by Cloutier et al.; it is not a global genus duration.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/1/uncertainty/note -->
Frasnian stage envelope for the named Miguasha specimen; not a global genus duration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/1/evidenceBasis -->
The named specimen and CT study provide a bounded regional occurrence context.
<!-- /evo:text -->
