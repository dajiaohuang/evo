---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:38049
    scientificName: Mosasauridae
    commonName: True mosasaurs
    commonNameZh: 沧龙科
    rank: family
    parentName: Mosasauroidea
    extinct: true
    geography:
      - North-central Texas (middle Turonian Dallasaurus sample)
      - Maastricht type area, the Netherlands (latest Maastrichtian Mosasaurus sample)
    regionalRanges:
      - canonicalRangePath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae/evidence.md#/records/ranges/1
        label: Dallasaurus middle Turonian occurrence
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
    confidence: high
    referenceIds:
      - bell-polcyn-2005-dallasaurus
      - schulp-et-al-2013-mosasaur-resource-partitioning
      - jagt-et-al-2008-youngest-mosasaurus
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–178, 189–190
          figure: Figure 7
          quoteLocator: Abstract; Systematic palaeontology; Discussion and conclusions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–178
          figure: none
          quoteLocator: Abstract; Age and geological context; middle Turonian (~92 Ma) Dallasaurus interval
        - referenceId: jagt-et-al-2008-youngest-mosasaurus
          relation: supports
          pages: 73–77
          figure: Figures 1–2
          quoteLocator: Abstract; Material; Discussion; NHMM 2007 093 within one metre below the regional K/Pg boundary
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–178
          figure: none
          quoteLocator: Abstract; Age and geological context; north-central Texas
        - referenceId: jagt-et-al-2008-youngest-mosasaurus
          relation: supports
          pages: 73–77
          figure: Figure 1
          quoteLocator: Abstract; locality map and provenance of NHMM 2007 093 in the Maastricht type area
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–178, 187–190
          figure: Figures 5–7
          quoteLocator: Appendicular skeleton; Phylogenetic analysis; Discussion and conclusions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: bell-polcyn-2005-dallasaurus
          relation: supports
          pages: 177–178, 189–190
          figure: Figures 6–7
          quoteLocator: Introduction; plesiopedal/hydropedal definitions; Discussion and conclusions
        - referenceId: schulp-et-al-2013-mosasaur-resource-partitioning
          relation: supports
          pages: 165–169
          figure: Figure 1; Table 1
          quoteLocator: Introduction; Material; Results and discussion; Conclusions
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae
      rangeKind: global-composite
      taxonomicConcept: Mosasauridae
      geographicScope: Sampled middle Turonian north-central Texas occurrence to a latest Maastrichtian occurrence in the Maastricht type area
      olderMa: 92
      youngerMa: 66
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bell-polcyn-2005-dallasaurus
          locator: pp. 177–178; Abstract; Age and geological context; two skeletons from the middle Turonian (~92 Ma) Arcadia Park Shale
        - referenceId: jagt-et-al-2008-youngest-mosasaurus
          locator: pp. 73–77; Abstract; Figs. 1–2; NHMM 2007 093 within one metre below the regional K/Pg boundary
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae
      rangeKind: taxon-range
      taxonomicConcept: Mosasauridae sample represented by Dallasaurus turneri
      geographicScope: North-central Texas, United States
      olderMa: 93.9
      youngerMa: 89.8
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Squamata/Mosasauridae/research/Mosasauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bell-polcyn-2005-dallasaurus
          locator: pp. 177–194; middle Turonian locality and systematic paleontology
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Mosasauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In Bell and Polcyn's sampled analysis, Mosasauridae includes plesiopedal Dallasaurus as well as more derived hydropedal members, so limb grade alone is not treated as a family diagnosis.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The claim follows the study's systematic assignment and explicit 144-character analysis, while remaining bounded to that matrix and not turning Dallasaurus into a direct ancestor or a universal family definition.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 92–66 Ma Mosasauridae display is a two-study sampled envelope: two Dallasaurus skeletons document a middle Turonian (~92 Ma) occurrence, and Mosasaurus hoffmanni NHMM 2007 093 occurs within one metre below the regional K/Pg boundary; neither edge is an exact global family FAD or LAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Both endpoints are tied to named specimens and explicit stratigraphic contexts, but the rounded envelope joins two local samples and therefore cannot establish unsampled global first or last appearances.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profile's geographic examples are restricted to middle Turonian Dallasaurus skeletons from north-central Texas and latest-Maastrichtian Mosasaurus hoffmanni NHMM 2007 093 from the Maastricht type area; they are not a complete Mosasauridae distribution map.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The two localities and stratigraphic positions are directly reported for named specimens, while the claim explicitly withholds a global distribution inference from two sampled regions.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The two incomplete Dallasaurus skeletons preserve cranial, axial and plesiopedal limb characters, and the cited analysis places that condition within Mosasauridae alongside independently acquired hydropedal limbs; this is a character-and-topology result, not a linear ancestor-to-descendant sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Named specimens and figured bones directly support the anatomy, while independent origins of hydropedal limbs depend on the study's character coding and three equally parsimonious trees.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Bell and Polcyn distinguish small plesiopedal from larger hydropedal adaptive grades, while tooth-enamel carbon isotopes from five type-Maastrichtian mosasaur taxa support marine carnivory and resource partitioning; these samples do not establish one family-wide diet, foraging habitat, swimming mode or body size.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The adaptive-grade morphology and five-taxon isotope measurements are direct, but ecological interpretation is sample-bounded and combines body size, diet, diving and habitat effects that the isotope study does not fully separate.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该主张遵循研究中的系统归属和显式 144 性状分析，同时严格限定于该矩阵，不把 Dallasaurus 写成直系祖先或普适的科级定义。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
两个端点都关联到具名标本和明确地层背景，但取整后的包络连接的是两个局部样本，因此不能建立未取样的全球首现或末现。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
两处地点和地层位置均由具名标本直接记录；主张明确拒绝从两个取样地区推演全球分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
具名标本和图示骨骼直接支持解剖记录；鳍桨型肢体独立起源则取决于该研究的性状编码和三棵同等简约树。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
适应等级形态和五类群同位素测量属于直接数据，但生态解释受样本限制，并混合了研究未能完全拆分的体型、食性、潜水和生境效应。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在 Bell 与 Polcyn 的取样分析中，沧龙科既包含步行型的 Dallasaurus，也包含更衍生的鳍桨型成员，因此不能仅凭肢体适应等级诊断该科。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
沧龙科 9200 万至 6600 万年前的显示范围是由两项研究构成的取样包络：两具 Dallasaurus 骨架记录了中土仑期（约 9200 万年前）出现，而 Mosasaurus hoffmanni 标本 NHMM 2007 093 出自区域 K/Pg 界线下方一米以内；两个端点都不是全科精确的全球首现或末现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
本档案的地理实例仅限于得州中北部中土仑期的 Dallasaurus 骨架，以及马斯特里赫特标准地区最晚马斯特里赫特期的 Mosasaurus hoffmanni 标本 NHMM 2007 093；它们不是完整的沧龙科分布图。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
两具不完整 Dallasaurus 骨架保存头部、轴向骨骼及步行型肢体性状；所引分析把这种状态置于沧龙科内部，并与独立获得的鳍桨型肢体并列。这是性状与拓扑结果，不是线性的祖先—后代序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Bell 与 Polcyn 区分了小型步行型和较大型鳍桨型适应等级；马斯特里赫特标准地区五个沧龙类群的牙釉质碳同位素则支持海生肉食与资源分化。这些样本不能建立全科统一的食性、觅食生境、游泳方式或体型。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Rounded two-study display envelope. The 92 Ma edge is the age assigned to the Dallasaurus-bearing interval; the 66 Ma edge represents a specimen within one metre below the regional K/Pg boundary. Neither is an exact global family FAD or LAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Two incomplete Dallasaurus skeletons establish a sampled middle Turonian Mosasauridae occurrence, while Mosasaurus hoffmanni NHMM 2007 093 establishes survival to immediately below the regional K/Pg boundary.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/1/uncertainty/note -->
Stage-level envelope; it does not establish absence outside the cited study sample.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/1/evidenceBasis -->
The stage envelope captures the middle Turonian Dallasaurus skeletons without treating them as a globally complete family range.
<!-- /evo:text -->
