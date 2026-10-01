---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:54789
    scientificName: Araucariaceae
    commonName: Araucarian conifers
    commonNameZh: 南洋杉科
    rank: family
    parentName: Coniferophyta
    extinct: false
    geography:
      - Hettangian South Hadley Falls Member, Massachusetts, United States
      - Living and fossil taxa sampled in the family-level matrix
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
      - axsmith-2008-holyoke-araucaria
      - escapa-catalano-2013-araucariaceae
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
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
      reviewedAgainstReferenceVersion: escapa-catalano-2013-araucariaceae
      referenceLinks:
        - referenceId: escapa-catalano-2013-araucariaceae
          relation: supports
          pages: 1153–1170
          quoteLocator: Figures 2–6; character matrix; phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: axsmith-2008-holyoke-araucaria locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: axsmith-2008-holyoke-araucaria
          pages: 11.3.13A:1–9
          figure: Figures 1–2
          quoteLocator: Abstract; “Locality and Geological Setting”; description and discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Escapa and Catalano 2013 DOI 10.1086/672369
      referenceLinks:
        - referenceId: escapa-catalano-2013-araucariaceae
          relation: supports
          pages: 1153–1170
          figure: Table 1; Figures 3–6; online Appendix
          quoteLocator: "Methods: taxon and character sampling; Results: combined analyses; Conclusions"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
      claimType: biogeography
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
      reviewedAgainstReferenceVersion: Axsmith, Escapa and Huber 2008 Palaeontologia Electronica 11.3.13A
      referenceLinks:
        - referenceId: axsmith-2008-holyoke-araucaria
          relation: supports
          pages: 11.3.13A:1–9
          figure: Figure 1
          quoteLocator: "Materials and Methods: Holyoke Dam locality, repository specimen J 1430 and South Hadley Falls Member context"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
      claimType: morphology
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
      reviewedAgainstReferenceVersion: Axsmith, Escapa and Huber 2008 Palaeontologia Electronica 11.3.13A
      referenceLinks:
        - referenceId: axsmith-2008-holyoke-araucaria
          relation: supports
          pages: 11.3.13A:4–6
          figure: Figure 2
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/4/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Axsmith et al. 2008 Palaeontologia Electronica 11.3.13A; Escapa and Catalano 2013 DOI 10.1086/672369
      referenceLinks:
        - referenceId: axsmith-2008-holyoke-araucaria
          relation: supports
          pages: 11.3.13A:1–9
          figure: Figures 1–3
          quoteLocator: "Study scope: isolated bract-scale description and stratigraphic/phylogenetic congruence"
        - referenceId: escapa-catalano-2013-araucariaceae
          relation: supports
          pages: 1153–1170
          figure: Table 1; Figures 3–6
          quoteLocator: "Study scope: molecular and morphological character-matrix analyses"
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
    - entityPath: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae
      rangeKind: global-composite
      taxonomicConcept: Araucariaceae Hettangian-specimen-to-living navigation anthology
      geographicScope: Holyoke Araucaria bract-scale specimen plus living Araucariaceae
      olderMa: 201.4
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
        - content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Pinopsida/Cupressidae/Araucariales/Araucariaceae/research/Araucariaceae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: axsmith-2008-holyoke-araucaria
          locator: Abstract; Materials and Methods “Locality and Geological Setting”; Figure 2; Discussion; Hettangian specimen J 1430
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Araucariaceae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A total-evidence analysis combining molecules, morphology and fossils tests relationships among sampled Araucariaceae; fossil placement is character-dependent and does not set a global family origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple evidence partitions support explicit tests, but fossil incompleteness and alternative coding keep several placements uncertain.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Araucariaceae is displayed at 201.4–0 Ma only as a Hettangian-specimen-to-living navigation anthology: Holyoke specimen J 1430 is a bona fide family occurrence but does not establish the family FAD, crown origin or uninterrupted global occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Axsmith et al. (2008) directly describes J 1430 and its Hettangian South Hadley Falls Member context. Medium confidence applies to that family-level specimen plus living continuation, not to older ambiguous araucarian material.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Escapa and Catalano analyze 39 araucariacean species—31 living and eight fossil—using molecular and morphological characters; the recovered family relationships are sampled matrix results, not direct ancestry or an exhaustive record of Araucariaceae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The taxon and character samples and parsimony analyses are explicit. Medium confidence preserves sensitivity to taxon sampling, character coding and incomplete fossil diversity.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Holyoke specimen J 1430 comes from the Hettangian South Hadley Falls Member of the Portland Formation in Massachusetts; this single Lower Jurassic occurrence does not establish a complete family distribution, endemicity or absence elsewhere.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The specimen repository, locality and stratigraphic unit are stated directly in the open primary description; medium confidence also preserves the single-specimen and source-metadata boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Specimen J 1430 is a single bract-scale complex with a wedge-like outline, central seed-bearing region and lateral wings; these directly described characters support the sampled fossil comparison but are not universal family traits.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The specimen dimensions, seed position, wings and comparison are described and figured directly. Medium confidence is limited to J 1430 and preserves the single-specimen and source-metadata boundary.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/4/referenceLinks/0/quoteLocator -->
Description and Comparisons: specimen dimensions, central seed-bearing zone, longitudinally striated lateral wings and Eutacta comparison
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The isolated Holyoke bract-scale and the combined family phylogeny do not directly determine diet, habitat preference, growth observation, whole-plant body size or one ecological guild for Araucariaceae; those fields are explicitly withheld or locality-bounded.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
Both primary studies expose specimen anatomy or character-matrix relationships rather than the listed family-wide ecological attributes, so the profile does not infer them.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多类证据分区支持显式检验，但化石不完整与替代编码使若干位置仍不确定。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Axsmith 等（2008）直接描述 J 1430 及其赫塘期南哈德利瀑布段背景。中等置信度仅适用于该科级标本与现生延续，不延伸到更老且含糊的南洋杉类材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
类群、性状取样和简约法分析均有明确记录；中等置信度保留对类群取样、性状编码和不完整化石多样性的敏感性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
开放的一手描述直接给出标本馆藏、地点与地层单元；中等置信度同时保留单标本和来源元数据边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
论文直接描述并图示了标本尺寸、种子位置、侧翼和比较；中等置信度仅限 J 1430，并保留单标本和来源元数据边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
两项一手研究分别处理标本解剖或性状矩阵关系，而非所列科级生态属性，因此档案不作推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
整合分子、形态和化石的总证据分析检验了取样南洋杉科关系；化石位置依赖性状，不能据此设定该科全球起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Araucariaceae 的 201.4–0 Ma 仅作为“赫塘期标本—现生类群”导航汇编：霍利奥克 J 1430 是可靠的科级记录，但不能确立该科首现、冠群起源或连续全球占据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Escapa 与 Catalano 以分子和形态性状分析了 39 个南洋杉科物种——31 个现生、8 个化石；所得科内关系是取样矩阵结果，不是直系祖先关系，也不是南洋杉科的穷尽记录。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Holyoke 标本 J 1430 来自美国马萨诸塞州波特兰组赫塘期 South Hadley Falls 段；这一处早侏罗世出现不能确立该科的完整分布、特有性或其他地区的缺失。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
标本 J 1430 是一件具有楔形轮廓、中央含种区和侧翼的苞鳞复合体；这些直接描述的性状支持该化石样本的比较，但不是全科普遍性状。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
孤立的 Holyoke 苞鳞与科级联合系统分析都不能直接确定南洋杉科的食性、生境偏好、生长观察、整株体型或统一生态功能群；这些字段被明确保留为空缺或限定于地点背景。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The Hettangian specimen anchors a conservative sample-to-living display; it is not the family FAD, a Triassic absence claim or exact crown origin.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Axsmith et al. describe specimen J 1430 from the Hettangian South Hadley Falls Member as a bona fide Araucariaceae megafossil; 0 Ma denotes living family members.
<!-- /evo:text -->
