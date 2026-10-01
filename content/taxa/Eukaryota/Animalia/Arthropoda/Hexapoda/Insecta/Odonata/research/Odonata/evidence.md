---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:71353
    scientificName: Odonata
    commonName: Dragonfly and damselfly sampled classification
    commonNameZh: 蜻蜓与豆娘的采样分类
    rank: order
    parentName: Odonatoptera
    extinct: false
    geography:
      - "Saxonagrion type locality: Salagou Formation, Lodève Basin, France"
      - "Targeted-genomics sample: 136 living species representing 46 of 48 families"
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
      - bybee-2021-odonata-targeted-genomics
      - nel-1999-saxonagrion
      - bybee-2016-odonata-fossil-record
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bybee-2021-odonata-targeted-genomics DOI 10.1016/j.ympev.2021.107115; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: bybee-2021-odonata-targeted-genomics
          pages: "107115"
          figure: Figures 1–4; supplementary matrices
          quoteLocator: Taxon and locus sampling; phylogenetic analyses; revised classification
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bybee-2016 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: bybee-2016-odonata-fossil-record
          relation: supports
          pages: Article 46
          figure: Figure 2
          quoteLocator: Fossil-record paragraph identifies Saxonagrion minutus at approximately 268 Ma as the earliest modern odonate
        - referenceId: nel-1999-saxonagrion
          relation: supports
          pages: 883–888
          figure: Systematic palaeontology and figures
          quoteLocator: Upper Permian Salagou Formation fossil; wing-venation attribution to Panodonata
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: "Evo Atlas issue #187 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Bybee et al. 2021 DOI 10.1016/j.ympev.2021.107115; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: bybee-2021-odonata-targeted-genomics
          relation: supports
          pages: 160:107115
          figure: Figures 1–4; supplementary matrices
          quoteLocator: Abstract; taxon and locus sampling; phylogenetic analyses; revised classification
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: "Evo Atlas issue #187 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/3/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: nel-1999-saxonagrion
          relation: supports
          pages: 883–888
          figure: Systematic palaeontology and figures
          quoteLocator: Salagou Formation, Lodève Basin, France; Saxonagrion material
        - referenceId: bybee-2021-odonata-targeted-genomics
          relation: supports
          pages: 160:107115
          figure: Figures 1–4; supplementary matrices
          quoteLocator: 136 living species representing 46 of 48 families
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: "Evo Atlas issue #187 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Bybee et al. 2021 DOI 10.1016/j.ympev.2021.107115; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: bybee-2021-odonata-targeted-genomics
          relation: supports
          pages: 160:107115
          figure: Figures 1–4; supplementary matrices
          quoteLocator: "Abstract and methods: anchored hybrid enrichment, taxon sampling and phylogenetic analyses"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: "Evo Atlas issue #187 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Nel et al. 1999 DOI 10.1016/S0016-6995(99)80870-5; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: nel-1999-saxonagrion
          relation: supports
          pages: 883–888
          figure: Systematic palaeontology and figures
          quoteLocator: Preserved wing venation; Panodonata attribution for Saxonagrion minutus
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
    - markdown: evidence.md
      field: /records/claim-rationales.zh/5
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
    - markdown: evidence.md
      field: /records/claim-statements.zh/5
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata
      rangeKind: global-composite
      taxonomicConcept: Modern Odonata oldest-recognized-fossil-to-living navigation envelope
      geographicScope: Reviewed fossil record and living representatives
      olderMa: 268
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Odonata/research/Odonata/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bybee-2016-odonata-fossil-record
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: nel-1999-saxonagrion
          locator: pp. 883–888; systematic palaeontology and figures; Upper Permian Salagou Formation wing attributed to Panodonata
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Odonata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Targeted sequencing of 478 loci across 136 species and 46 of 48 living families supports an updated sampled Odonata classification. Several backbone relationships remain uncertain, and the living sample does not delimit the order's fossil range or origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond several backbone relationships remain uncertain, and the living sample does not delimit the order's fossil range or origin.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 268–0 Ma Odonata display begins with the earliest fossil recognized as a modern odonate, Saxonagrion minutus, rather than inheriting the older Odonatoptera edge.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The review explicitly identifies the approximately 268 Ma fossil as the earliest modern odonate, providing a concept-matched minimum rather than an origin estimate.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Targeted sequencing of 478 loci from 136 living species representing 46 of 48 living odonate families produced an updated sampled classification; unresolved backbone sections remain and the result is not a complete order history.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary analysis directly reports its locus and taxon sampling and revised classification, while explicitly leaving some backbone relationships unresolved.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Saxonagrion minutus was described from the Upper Permian Salagou Formation in the Lodève Basin, France, while the modern genomic sample covers 136 species in 46 families; neither record supplies a complete Odonata distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary fossil paper fixes one locality and the primary genomic study states its taxon sample. Neither is a census of geographic presence or absence for the order.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/3/reviewedAgainstReferenceVersion -->
Nel et al. 1999 DOI 10.1016/S0016-6995(99)80870-5; Bybee et al. 2021 DOI 10.1016/j.ympev.2021.107115; concrete locators audited 2026-09-01
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The targeted-genomics study tests classification rather than diet, habitat use, flight performance, body size or ecological guild; this profile therefore leaves those fields unassigned rather than inferring them for Odonata.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The study's stated scope is a locus-based phylogenetic classification. It is not an ecological observation dataset, so the profile makes no organism-wide functional inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The primary fossil description attributes Saxonagrion minutus to Panodonata from preserved wing venation; the observation concerns that Upper Permian fossil and is not a diagnostic body plan for all Odonata.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The original description documents wing-venation evidence and its authors' assignment. It does not justify generalizing one fossil's anatomy to the entire order.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
综述明确把约 268 Ma 化石列为最早现代蜻蜓类，提供概念匹配的化石最低界而非起源估计。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
478 个位点、136 个现生物种和 48 个科中 46 个的采样直接支持该研究的更新分类；未解析的骨干关系及未采样谱系仍被保留。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
化石地点与现生采样范围分别由两项一手研究记录；二者都不是蜻蜓目全球出现或缺失的完整普查。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
位点测序和系统发育分析不直接观察食性、栖息地、飞行性能、体型或生态类群，因此档案明确保留这些未赋值字段。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
萨克森蜻蜓的翅脉及作者的泛蜻蜓类归属来自单件上二叠世化石；不会外推为整个蜻蜓目的统一体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对 136 个物种、48 个现生科中的 46 科以及 478 个位点的靶向测序，支持更新后的蜻蜓目抽样分类。若干主干关系仍不确定，现生样本也不能限定该目的化石延限或起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
268–0 Ma 的蜻蜓目显示从被认作现代蜻蜓类最早化石的 Saxonagrion minutus 开始，而不沿用更早的 Odonatoptera 边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
对代表 48 个现生蜻蜓目科中 46 科的 136 个现生物种进行 478 个位点的靶向测序，得到更新的取样分类；主干仍有未解决区段，结果并非完整的目级历史。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Saxonagrion minutus 描述自法国 Lodève 盆地上二叠统 Salagou 组，而现生基因组样本覆盖 46 科 136 种；两类记录都不能提供完整蜻蜓目分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
靶向基因组研究检验的是分类，而不是食性、生境利用、飞行性能、体型或生态功能群；因此本档案将这些字段保留为未指定，而不替蜻蜓目作推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
一手化石描述依据保存的翅脉将 Saxonagrion minutus 归入泛蜻蜓类；该观察仅涉及这件上二叠统化石，不是全部蜻蜓目的诊断性身体构型。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 268 Ma edge marks the earliest fossil recognized as a modern odonate, not the origin of the total group.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A fossil-calibrated odonate synthesis identifies the approximately 268 Ma Saxonagrion minutus as the earliest modern odonate; living Odonata extend the navigation envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article 46; fossil-record paragraph and Figure 2; Saxonagrion minutus at approximately 268 Ma identified as the earliest modern odonate
<!-- /evo:text -->
