---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:56475
    scientificName: Testudines
    commonName: Turtles & tortoises
    commonNameZh: 龟鳖类
    rank: order
    parentName: Sauropsida
    extinct: false
    geography:
      - Late Triassic marine deposits of southwestern China (Odontochelys sample)
      - Middle Triassic Vellberg deposits, Germany (Pappochelys sample)
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
      - li-2008-odontochelys
      - schoch-sues-2015-pappochelys
      - joyce-2007-mesozoic-turtle-phylogeny
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/research/Testudines
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Li et al. 2008 DOI 10.1038/nature07533; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: li-2008-odontochelys
          relation: supports
          pages: 497–501
          figure: Figures 1–4
          quoteLocator: Systematic palaeontology; specimen and horizon; Description and Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/research/Testudines
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Li et al. 2008 DOI 10.1038/nature07533; Joyce 2007 DOI 10.3374/0079-032X(2007)48[3:PROMT]2.0.CO;2
      referenceLinks:
        - referenceId: li-2008-odontochelys
          relation: supports
          pages: 497–501
          figure: Figures 1–4
          quoteLocator: Phylogenetic analysis; statement that the new species is basal to all known turtles
        - referenceId: joyce-2007-mesozoic-turtle-phylogeny
          relation: supports
          pages: 3–102
          figure: Figures 1–3; Appendices 1–3
          quoteLocator: Taxon sampling and Mesozoic turtle phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/research/Testudines
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Li et al. 2008 DOI 10.1038/nature07533; Schoch and Sues 2015 DOI 10.1038/nature14472
      referenceLinks:
        - referenceId: li-2008-odontochelys
          relation: supports
          pages: 497–501
          figure: Figure 1; systematic palaeontology
          quoteLocator: Specimen and horizon; southwestern China Late Triassic marine deposits
        - referenceId: schoch-sues-2015-pappochelys
          relation: supports
          pages: 584–587
          figure: Figure 1; Extended Data Figures 1–3
          quoteLocator: Middle Triassic Vellberg locality and specimen description
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/research/Testudines
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Li et al. 2008 DOI 10.1038/nature07533; Schoch and Sues 2015 DOI 10.1038/nature14472
      referenceLinks:
        - referenceId: li-2008-odontochelys
          relation: supports
          pages: 497–501
          figure: Figures 1–4
          quoteLocator: Description of the plastron, neural plates, broadened ribs and incomplete carapace
        - referenceId: schoch-sues-2015-pappochelys
          relation: supports
          pages: 584–587
          figure: Figures 1–5; Extended Data Figures 1–6
          quoteLocator: Description of broadened ribs, paired gastralia and shell-body-plan comparison
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/research/Testudines
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
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Li et al. 2008 DOI 10.1038/nature07533; Schoch and Sues 2015 DOI 10.1038/nature14472
      referenceLinks:
        - referenceId: li-2008-odontochelys
          relation: supports
          pages: 497–501
          figure: Figure 1; Discussion
          quoteLocator: Marine deposits and marginal sea or river-delta habitat interpretation
        - referenceId: schoch-sues-2015-pappochelys
          relation: contextualizes
          pages: 584–587
          figure: Figure 5
          quoteLocator: Shell evolution discussion; specimen and body-plan limits
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/research/Testudines
      rangeKind: global-composite
      taxonomicConcept: Testudines
      geographicScope: Global or represented navigation composite
      olderMa: 220
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/research/Testudines/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: li-2008-odontochelys
          locator: pp. 497–501; Figures 1–4; systematic palaeontology, specimen and horizon, Description and Discussion
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Testudines

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The atlas uses the approximately 220 Ma Odontochelys sample to anchor the older edge of its turtle-line Testudines navigation envelope and living turtles at 0 Ma for the younger edge; Odontochelys is treated as stem evidence, not a crown-Testudines global first appearance or direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Three named specimens directly document the Late Triassic shell mosaic, but phylogenetic placement, shell-evolution sequence and the mapping from a stem turtle to the broad navigation root remain interpretive. Medium confidence is limited to that explicit display convention.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Li et al. place Odontochelys basal to the known fossil and living turtles in their analysis, while the broader Mesozoic turtle matrix of Joyce samples 45 fossil and 22 living species; this profile retains Testudines as a navigation route rather than a single resolved stem-to-crown topology.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Both primary studies state their sampled taxon matrices and topology results. Medium confidence keeps the profile's route distinction separate from a universal turtle phylogeny or an ancestor claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The documented turtle-line samples include Odontochelys from Late Triassic marine deposits in southwestern China and Pappochelys from the Middle Triassic Vellberg deposits of Germany; these named localities do not establish a global Testudines distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary papers identify the specimens, locality and stratigraphic context directly. High confidence is restricted to those study samples and does not infer unsampled range or absence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The cited turtle-line sample records complementary shell mosaics: Odontochelys has a developed plastron, expanded ribs and neural plates without a complete carapace, whereas Pappochelys has broadened ribs and robust paired gastralia without a fused plastron or complete carapace.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Named specimens and figures directly document the anatomical elements, but comparative homology and sequence are interpretations across samples rather than direct ancestor–descendant observations.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Li et al. interpret the marine deposits yielding Odontochelys as marginal sea or river-delta settings, while the cited Pappochelys shell study addresses anatomy and shell evolution; these observations do not establish diet, body size or a single ecological guild for Testudines.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Depositional context is reported directly, but ecological interpretation is specimen- and study-specific. The profile explicitly withholds taxon-wide diet, locomotion, size and guild claims.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
三件具名标本直接记录晚三叠世龟壳镶嵌，但系统位置、龟壳演化顺序以及从干群龟映射到宽泛导航根仍属解释；中等置信度仅适用于这一明确显示约定。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
两项一手研究明确报告了取样矩阵与拓扑结果；中等置信度把龟鳖类导航路线与普遍系统发育或祖先主张分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
论文直接记录标本、地点和地层背景；高置信度仅适用于所列样本，不把未取样区域解释为缺失。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
具名标本和图版直接记录解剖构件，但比较同源性和演化顺序是跨样本的解释，不是直接的祖先—后代观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
沉积环境有直接记录，但生态解释受标本与研究范围限制；食性、运动、体型和生态位不外推到整个龟鳖类。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Li 等的分析将 Odontochelys 置于当时已知化石及现生龟类的基部，而 Joyce 范围更广的中生代龟类矩阵采样了 45 个化石种和 22 个现生种；本档案保留 Testudines 作为导航入口，而非一套已完全解析的干群至冠群拓扑。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
有记录的龟类演化支系样本包括中国西南部晚三叠世海相沉积中的 Odontochelys，以及德国 Vellberg 中三叠世沉积中的 Pappochelys；这些明确地点的记录不能确定 Testudines 的全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所引龟类演化支系样本记录了互补的甲壳镶嵌特征：Odontochelys 具有发育的腹甲、扩展的肋骨和椎板，但没有完整背甲；Pappochelys 具有加宽的肋骨和粗壮的成对腹肋，却没有融合的腹甲或完整背甲。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Li 等将产出 Odontochelys 的海相沉积解释为边缘海或河流三角洲环境，而所引 Pappochelys 甲壳研究讨论解剖结构及甲壳演化；这些观察不能确定 Testudines 的食性、体型或统一的生态功能类群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
图谱以约 2.20 亿年前 Odontochelys 样本锚定龟类谱系 Testudines 导航范围的老端，并以 0 Ma 的现生龟类作为年轻端；Odontochelys 被作为干群证据，不是冠群龟类的全球首现或直系祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 220 Ma older edge follows the Odontochelys stem-turtle sample; 0 Ma reflects living turtles and does not turn the stem fossil into a crown FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Three named Odontochelys specimens anchor the atlas turtle-line display while stem placement, shell assembly and ancestry remain explicit interpretations.
<!-- /evo:text -->
