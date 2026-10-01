---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:53220
    scientificName: Mosasauroidea
    commonName: Mosasauroids
    commonNameZh: 沧龙超科
    rank: superfamily
    parentName: Squamata
    extinct: true
    geography:
      - Middle Turonian Arcadia Park Shale, north-central Texas (Dallasaurus sample)
      - Maastrichtian type area, the Netherlands (sampled Mosasaurus occurrence)
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
      - madzia-cau-2017-mosasauroid-nomenclature
      - bell-polcyn-2005-dallasaurus
      - schulp-et-al-2013-mosasaur-resource-partitioning
      - jagt-et-al-2008-youngest-mosasaurus
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauroidea/research/Mosasauroidea
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: madzia-cau-2017-mosasauroid-nomenclature concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: madzia-cau-2017-mosasauroid-nomenclature
          relation: supports
          pages: Article e3782
          figure: Table 1; Figures 1–7
          quoteLocator: Phylogenetic definitions; sensitivity analyses; Conclusions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauroidea/research/Mosasauroidea
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bell-polcyn-2005-dallasaurus; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: bell-polcyn-2005-dallasaurus
          pages: 177–178, 189–190
          figure: Figures 1–13
          quoteLocator: Age and geological context; systematic palaeontology; phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauroidea/research/Mosasauroidea
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
      reviewedAgainstReferenceVersion: Bell and Polcyn 2005 DOI 10.1017/S0016774600020965; Jagt et al. 2008 Fort Hays Studies Special Issue 3
      referenceLinks:
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–178
          figure: Figures 1–2
          quoteLocator: Age and geological context; two Dallasaurus skeletons from the middle Turonian Arcadia Park Shale
        - referenceId: jagt-et-al-2008-youngest-mosasaurus
          relation: supports
          pages: 73–77
          figure: Figures 1–2
          quoteLocator: NHMM 2007 093 from the highest metre of the Meerssen Member, within one metre below the regional K/Pg boundary
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauroidea/research/Mosasauroidea
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Bell and Polcyn 2005 DOI 10.1017/S0016774600020965; Madzia and Cau 2017 DOI 10.7717/peerj.3782
      referenceLinks:
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–194
          figure: Figures 5–13
          quoteLocator: Systematic paleontology; pectoral and pelvic girdles; plesiopedal limb description; phylogenetic analysis
        - referenceId: madzia-cau-2017-mosasauroid-nomenclature
          relation: supports
          pages: Article e3782
          figure: Table 1; Figures 1–7
          quoteLocator: Phylogenetic definitions and sensitivity analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauroidea/research/Mosasauroidea
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
      reviewedAgainstReferenceVersion: Schulp et al. 2013 DOI 10.1017/S001677460000010X; Bell and Polcyn 2005 DOI 10.1017/S0016774600020965
      referenceLinks:
        - referenceId: schulp-et-al-2013-mosasaur-resource-partitioning
          relation: supports
          pages: 165–169
          figure: Figure 1
          quoteLocator: Tooth-enamel carbon isotopes, reconstructed body sizes and resource-partitioning interpretation for five named taxa
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: contextualizes
          pages: 177–194
          figure: Figures 5–13
          quoteLocator: Dallasaurus sampled anatomy and limb-grade context
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauroidea/research/Mosasauroidea
      rangeKind: global-composite
      taxonomicConcept: Dallasaurus turneri mosasauroid sample
      geographicScope: Middle Turonian Arcadia Park Shale, Texas, United States
      olderMa: 93.9
      youngerMa: 89.8
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauroidea/research/Mosasauroidea/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bell-polcyn-2005-dallasaurus
          locator: 177–178, 189–190; Figures 1–13; Age and geological context; systematic palaeontology; phylogenetic analysis
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Mosasauroidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mosasauroidea is retained as the broader branch-defined mosasauroid navigation clade and is not interchangeable with node-defined Mosasauridae; the nomenclatural analysis does not provide a global range, ancestor chain or first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study explicitly tests clade definitions and tree sensitivity. High confidence applies to the scoped nomenclatural distinction only.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Dallasaurus turneri from the middle Turonian Arcadia Park Shale supports a 93.9–89.8 Ma named mosasauroid sample window; it does not establish a global Mosasauroidea FAD or LAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Dallasaurus turneri mosasauroid sample: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profile's named mosasauroid samples include Dallasaurus turneri from the middle Turonian Arcadia Park Shale of north-central Texas and a latest Maastrichtian Mosasaurus occurrence from the Maastricht type area of the Netherlands; these records do not establish a global Mosasauroidea distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary studies identify the specimens and geological contexts directly. High confidence is limited to those occurrences and does not infer absence or a complete geographic range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Dallasaurus preserves cranial, axial and plesiopedal limb anatomy in two incomplete skeletons, while the cited nomenclatural analysis distinguishes the broader Mosasauroidea branch from node-defined Mosasauridae; limb grade is not treated as the clade definition.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The named specimens, anatomical description and explicit clade definitions are directly reported. High confidence applies to this scoped anatomy-and-definition distinction, not to one universal basal topology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Schulp et al. report tooth-enamel carbon-isotope, body-size and resource-partitioning results for five named mosasaurs in one type-Maastrichtian fauna; the study-bounded marine sample does not establish a single diet, body-size distribution or guild for all Mosasauroidea.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The isotope and size measurements are direct sample data, while resource partitioning and ecological grouping are interpretations limited to five taxa in one fauna. No global ecological extrapolation is made.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主研究明确检验了支系定义和树敏感性。高置信度仅适用于这一有边界的命名学区分。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Dallasaurus turneri mosasauroid sample：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
研究直接识别标本和地质背景；高置信度仅限所列出现记录，不推断缺失或完整地理范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
具名标本、解剖描述和明确支系定义均有直接来源；高置信度限于这一解剖—定义区分，不选定唯一基部拓扑。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
同位素与体型数据来自单一动物群的五个类群；资源分割是取样范围内解释，不外推为整个沧龙超科的统一生态位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
本档案所列沧龙超科样本包括得克萨斯州中北部土仑期中期 Arcadia Park 页岩中的 Dallasaurus turneri，以及荷兰马斯特里赫特阶标准地区的一条最晚马斯特里赫特期 Mosasaurus 产出记录；这些记录不能确定沧龙超科的全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Dallasaurus 的两具不完整骨架保留了头骨、中轴骨骼及原始型肢体结构；所引命名分析则区分了范围较广的沧龙超科分支与按节点定义的沧龙科，不以肢体形态等级作为演化支的定义。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Schulp 等报告了马斯特里赫特阶标准地区一个动物群中五种已命名沧龙的牙釉质碳同位素、体型和资源分配结果；这一受研究范围限定的海生样本不能确定全部沧龙超科统一的食性、体型分布或生态功能类群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
沧龙超科保留为较宽的分支定义沧龙类导航支系，不能与节点定义的沧龙科互换；该命名分析不提供全球范围、祖先链或首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
中土仑期 Arcadia Park 页岩中的 Dallasaurus turneri 支持 9390–8980 万年前的具名沧龙超科样本窗口；它不能确定沧龙超科的全球首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Stage-scale middle Turonian window for the named material; it does not cover all Mosasauroidea.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 101–66 Ma global composite is replaced by a specimen-scoped mosasauroid occurrence.
<!-- /evo:text -->
