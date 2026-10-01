---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:183021
    scientificName: Fabaceae
    commonName: Legumes
    commonNameZh: 豆科植物
    rank: family
    parentName: Eudicotyledoneae
    extinct: false
    geography:
      - Corral Bluffs, Colorado, United States
      - Living global family context
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
      - lyson-2019-corral-bluffs-recovery
      - koenen-2021-legume-origin
      - lpwg-2017-legume-classification
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Magnoliopsida/Fabales/Fabaceae/research/Fabaceae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lpwg-2017-legume-classification
      referenceLinks:
        - referenceId: lpwg-2017-legume-classification
          relation: supports
          pages: 44–77
          quoteLocator: Figures 1–2; subfamily diagnoses and classification
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Magnoliopsida/Fabales/Fabaceae/research/Fabaceae
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Lyson et al. 2019 DOI 10.1126/science.aay2268
      referenceLinks:
        - referenceId: lyson-2019-corral-bluffs-recovery
          relation: supports
          pages: 366:977–983
          figure: Figure 3J–K
          quoteLocator: Corral Bluffs fossil occurrence and supplementary stratigraphy
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Magnoliopsida/Fabales/Fabaceae/research/Fabaceae
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Lyson et al. 2019 DOI 10.1126/science.aay2268
      referenceLinks:
        - referenceId: lyson-2019-corral-bluffs-recovery
          relation: supports
          pages: 366:977–983
          quoteLocator: Corral Bluffs fossil inventory and stratigraphic context
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Magnoliopsida/Fabales/Fabaceae/research/Fabaceae
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Lyson et al. 2019 DOI 10.1126/science.aay2268; Koenen et al. 2021 DOI 10.1093/sysbio/syaa041
      referenceLinks:
        - referenceId: lyson-2019-corral-bluffs-recovery
          relation: supports
          pages: 366:977–983
          figure: Figure 3J–K
          quoteLocator: Fossil fruit and leaflets
        - referenceId: koenen-2021-legume-origin
          relation: contextualizes
          pages: 70:508–526
          figure: Figure 5; Supplementary Table S3
          quoteLocator: Oldest unequivocal legume fossil and divergence-time limitations
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Magnoliopsida/Fabales/Fabaceae/research/Fabaceae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lyson-2019-corral-bluffs-recovery locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: lyson-2019-corral-bluffs-recovery
          pages: 366:977–983
          figure: Figure 3J–K
          quoteLocator: 65.35 Ma legume fruit and leaflets; supplementary stratigraphy
        - relation: contextualizes
          referenceId: koenen-2021-legume-origin
          pages: 70:508–526
          figure: Figure 5; Supplementary Table S3
          quoteLocator: Introduction and oldest unequivocal legume fossil; divergence-time limitations
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
    - entityPath: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Magnoliopsida/Fabales/Fabaceae/research/Fabaceae
      rangeKind: global-composite
      taxonomicConcept: Fabaceae Corral-Bluffs-fossil-to-living navigation anthology
      geographicScope: 65.35 Ma Corral Bluffs fruit and leaflets plus living legumes
      olderMa: 65.35
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
        - content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Magnoliopsida/Fabales/Fabaceae/research/Fabaceae/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: lyson-2019-corral-bluffs-recovery
          locator: 977–983; Figure 3J–K; supplementary stratigraphy; 65.35 Ma legume fruit and leaflets
        - referenceId: koenen-2021-legume-origin
          locator: 508–526; Introduction; divergence-time methods and discussion of the oldest unequivocal legume fossil
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Fabaceae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A taxonomically broad legume phylogeny supports six subfamilies and replaces the traditional broad Caesalpinioideae arrangement; this is a sampled classification, not a Fabaceae origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Family-wide sampling and explicit classification criteria strongly support the revision, while taxonomic ranks remain hypotheses rather than chronology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The fossil legume record represented here is the 65.35 Ma Corral Bluffs fruit and leaflets in Colorado, United States; it does not establish a geographic origin or continuous global distribution of Fabaceae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary stratigraphic synthesis directly locates and dates the fossil material. The claim remains confined to that record rather than inferring family-wide history.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The Corral Bluffs fruit and leaflets support a bounded plant fossil record, but they do not directly establish habitat, diet, physiology or one ecological guild for Fabaceae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The cited fossil material is diagnostic for the family record but was not an ecological experiment or a family-wide habitat survey.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
A 65.35 Ma Corral Bluffs fruit and leaflets are assigned to Fabaceae; these structures demonstrate a bounded family-level fossil record rather than a subfamily assignment or universal legume morphology.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The fossil material and age are directly documented, while its subfamily placement and broader ancestral morphology remain unresolved.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Fabaceae is displayed at 65.35–0 Ma only as a Corral-Bluffs-fossil-to-living navigation anthology: the dated fruit and leaflets support family presence but not an exact crown origin, subfamily assignment, direct ancestry or continuous global occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Lyson et al. (2019) directly documents the 65.35 Ma Corral Bluffs fruit and leaflets, and Koenen et al. (2021) explicitly treats it as the oldest unequivocal legume fossil. Medium confidence keeps family presence separate from modelled crown timing.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
科级广泛取样和明确分类标准强力支持修订，但分类等级仍是假说而非年代记录。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Lyson 等（2019）直接记录 65.35 Ma 的科罗尔布拉夫斯果实与小叶，Koenen 等（2021）明确把它视为最老的无争议豆科化石。中等置信度把科级存在与模型化冠群年代严格分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
科罗尔布拉夫斯的化石材料及 65.35 Ma 地层背景有直接记录；本声明只对应这一地点，不推断豆科起源或持续全球分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
果实和小叶可支持受限的植物化石记录，但并不能直接确定豆科的生境、营养、生理或单一生态位。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
科罗尔布拉夫斯果实与小叶及其年代有直接记录；亚科位置和更广泛祖先形态仍未解决，因此不把它们外推为全科性状。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Corral Bluffs 的果实和小叶支持有限范围的植物化石记录，但不能直接确定豆科的生境、食性、生理或单一生态功能群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Corral Bluffs 的 65.35 Ma 果实和小叶被归入豆科；这些结构提供有限范围的科级化石记录，而非亚科归属或豆科通用形态的证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
此处代表的豆科化石记录是美国科罗拉多州 Corral Bluffs 的 65.35 Ma 果实和小叶；它不能确定豆科的地理起源或连续的全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
广泛取样的豆科系统树支持六个亚科并取代传统广义苏木亚科安排；这是取样分类方案，并非豆科起源年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Fabaceae 的 65.35–0 Ma 仅作为“科罗尔布拉夫斯化石—现生类群”导航汇编：有测年约束的果实和小叶支持科级存在，但不能确立精确冠群起源、亚科归属、直接祖先或连续全球占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is a dated family-level fossil occurrence, not an exact crown-Fabaceae origin, subfamily placement or uninterrupted global range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Lyson et al. document the Corral Bluffs fruit and leaflets at 65.35 Ma; Koenen et al. identify this as the oldest unequivocal legume fossil while treating deeper divergence as model-dependent.
<!-- /evo:text -->
