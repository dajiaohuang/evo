---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:42935
    scientificName: Pakicetus attocki
    commonName: Locality-composite terrestrial whale
    commonNameZh: 地点组合的陆生早期鲸
    rank: genus
    parentName: Pakicetidae
    extinct: true
    geography:
      - H-GSP Locality 62, Ganda Kas, Kala Chitta Hills, Punjab, Pakistan
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
      - thewissen-2001-pakicetid-skeletons
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae/Pakicetus/research/Pakicetus_attocki
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: thewissen-2001-pakicetid-skeletons concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: thewissen-2001-pakicetid-skeletons
          pages: 277–281
          figure: Figures 1–4
          quoteLocator: Locality and specimen descriptions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae/Pakicetus/research/Pakicetus_attocki
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: thewissen-2001-pakicetid-skeletons concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: thewissen-2001-pakicetid-skeletons
          relation: supports
          pages: 277–281
          figure: Figures 2–4
          quoteLocator: Abstract; Pakicetidae and Pakicetus descriptions; cladistic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae/Pakicetus/research/Pakicetus_attocki
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: thewissen-2001-pakicetid-skeletons concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: thewissen-2001-pakicetid-skeletons
          relation: supports
          pages: 277–278
          figure: Figures 1–2
          quoteLocator: Early Eocene Kuldana Formation; single Pakistani site; Locality 62/Ganda Kas specimen context
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae/Pakicetus/research/Pakicetus_attocki
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: thewissen-2001-pakicetid-skeletons concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: thewissen-2001-pakicetid-skeletons
          relation: supports
          pages: 278–279
          figure: Figures 1–2
          quoteLocator: Running adaptations; auditory specializations; terrestrial interpretation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae/Pakicetus/research/Pakicetus_attocki
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: thewissen-2001-pakicetid-skeletons concrete-locator audit at 2026.09-static-v5-rc85
      referenceLinks:
        - referenceId: thewissen-2001-pakicetid-skeletons
          relation: supports
          pages: 277–279
          figure: Figures 1–3
          quoteLocator: Postcranial osteology; H-GSP 96231 skull; H-GSP 92042 humerus; H-GSP 96420 calcaneum
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Cetacea/Pakicetidae/Pakicetus/research/Pakicetus_attocki
      rangeKind: global-composite
      taxonomicConcept: Pakicetus Locality 62 sample occurrence
      geographicScope: H-GSP Locality 62, Ganda Kas, Pakistan
      olderMa: 50
      youngerMa: 48
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/events/Pakicetus_locality-composite_terrestrial_skeleton/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: thewissen-2001-pakicetid-skeletons
          locator: pp. 277–281; Figures 1–4
      reviewStatus: automated-audit-passed
---

# Pakicetus attocki

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pakicetus is anchored here only by the H-GSP Locality 62 sample from Ganda Kas, including separately catalogued cranial and postcranial material within an approximately 50–48 Ma locality envelope; this is not a global genus range or first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study identifies the locality and catalogued material directly. Medium confidence reflects composite association and locality-level dating.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Thewissen et al. report Pakicetus attocki as a wolf-sized early Eocene pakicetid cetacean and use its skeletons in a morphology-based analysis; the sampled placement is a matrix result, not a demonstrated direct ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary paper names the species, family-level context and analysis directly; the ancestry boundary is explicit because the result compares sampled taxa rather than observing lineage descent.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profiled Pakicetus material is bounded to H-GSP Locality 62 at Ganda Kas in the Kala Chitta Hills, Punjab, Pakistan, within the early Eocene Kuldana Formation; this single-site sample does not establish a complete geographic distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary paper directly reports the single site, formation and multiple-individual collection. The claim does not extrapolate that locality to the genus-wide range or a dispersal route.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The described Pakicetus locomotor skeleton is interpreted as terrestrial and running-adapted, while the paper cautions that auditory specializations do not by themselves imply aquatic life; diet, behaviour and performance are not directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The authors explicitly infer terrestrial locomotion from the anatomy and discuss the limits of sensory evidence. Ecological details beyond that locomotor interpretation remain unrecorded by the composite sample.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Skull H-GSP 96231 and separately catalogued postcranial elements including humerus H-GSP 92042 and calcaneum H-GSP 96420 document the Pakicetus reconstruction; the skull retains a cetacean-like ear region and the postcrania show weight-bearing and running features.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The named specimens, preserved regions and functional character descriptions are directly illustrated and described in the primary paper. Confidence is restricted to those catalogued elements and not a complete individual.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究直接识别地点和编号材料；中等置信度反映组合关联与地点级定年。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
分类与矩阵位置由 Thewissen 等直接报告，但形态分析的取样拓扑不等于直接祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
论文直接给出 H-GSP 62 号地点、Ganda Kas、Kala Chitta 山和库尔达纳组；单一地点的复合材料不能外推为属级分布或扩散路线。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
论文明确根据运动骨架解释陆生和奔跑适应，并限制听觉证据的水生含义；食性、行为和运动表现超出直接观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
具名头骨、肱骨和跟骨及其图版定位直接支持这些形态字段；高置信度仅适用于列出的材料，不适用于一具完整个体。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
此处 Pakicetus 仅由 Ganda Kas 的 H-GSP 62 号地点样本锚定，其中包括分别编号的头骨与头后材料，处于约 5000 万—4800 万年前的地点区间；这不是全球属级范围或首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Thewissen 等把 Pakicetus attocki 报告为狼大小的早始新世巴基鲸科鲸类，并将其骨架用于形态分析；该取样位置是矩阵结果，不是已证实的直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
本档案中的 Pakicetus 材料限定于巴基斯坦旁遮普省 Kala Chitta 山 Ganda Kas 的 H-GSP 62 号地点，位于早始新世库尔达纳组；单一地点样本不能确立完整地理分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
论文将所描述的 Pakicetus 运动骨架解释为陆生并适应奔跑，同时指出听觉特化本身不能推出水生；食性、行为和表现并未被直接观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
头骨 H-GSP 96231 以及单独编目的颅后骨骼（包括肱骨 H-GSP 92042 和跟骨 H-GSP 96420）共同记录了 Pakicetus 复原；头骨保留类似鲸类的耳区，颅后骨显示承重和奔跑特征。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The early-Eocene envelope is locality-level and the composite material cannot establish a global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded specimen assemblage and its stratigraphic placement in the cited primary study.
<!-- /evo:text -->
