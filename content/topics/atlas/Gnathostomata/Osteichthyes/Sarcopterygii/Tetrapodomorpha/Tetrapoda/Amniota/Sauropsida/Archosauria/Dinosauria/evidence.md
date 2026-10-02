---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Dinosauria
    commonName: Dinosaurs
    commonNameZh: 恐龙
    rank: superorder
    taxonId: ""
    firstAppearance: 233.2
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  atlas-profile:
    scientificName: Dinosauria
    commonName: Dinosaurs
    commonNameZh: 恐龙
    rank: superorder
    parentName: Archosauria
    extinct: false
    firstAppearance: 233.2
    lastAppearance: 0
    rangeEvidenceLevel: literature-synthesized
    rangeReviewStatus: automated-audit-passed
    rangeProvisional: true
    geography: []
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
      - cabreira-2016-buriolestes
      - baron-2017-dinosaur-relationships
      - langer-2017-dinosaur-tree-reanalysis
      - xu-2012-yutyrannus
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/0/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/sourceIds/0
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/1/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/sourceIds/0
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/sourceIds/1
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/2/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/sourceIds/0
    readerSources:
      - id: cabreira-2016-buriolestes
        title:
          en: Cabreira et al. (2016), the Buriolestes assemblage
          zh: Cabreira 等（2016），Buriolestes 生物组合
        url: https://doi.org/10.1016/j.cub.2016.09.040
        scope:
          en:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/0/scope/en
          zh:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/0/scope/zh
      - id: baron-2017-dinosaur-relationships
        title:
          en: Baron et al. (2017), a dinosaur relationships matrix
          zh: Baron 等（2017），恐龙亲缘关系矩阵
        url: https://doi.org/10.1038/nature21700
        scope:
          en:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/1/scope/en
          zh:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/1/scope/zh
      - id: langer-2017-dinosaur-tree-reanalysis
        title:
          en: Langer et al. (2017), dinosaur tree reanalysis
          zh: Langer 等（2017），恐龙系统树重分析
        url: https://doi.org/10.1038/nature24011
        scope:
          en:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/2/scope/en
          zh:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/2/scope/zh
      - id: xu-2012-yutyrannus
        title:
          en: Xu et al. (2012), Yutyrannus skeletons and integument
          zh: Xu 等（2012），羽王龙骨架与体表结构
        url: https://doi.org/10.1038/nature10906
        scope:
          en:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/3/scope/en
          zh:
            markdown: evidence.md
            field: /records/atlas-profile/readerSources/3/scope/zh
    readerLimitations:
      en:
        markdown: page.en.md
        field: /records/atlas-profile/readerLimitations/en
      zh:
        markdown: page.zh.md
        field: /records/atlas-profile/readerLimitations/zh
  field-claim-overrides:
    geography:
      status: not-assessed
    overview:
      status: not-assessed
    evidenceSummary:
      status: not-assessed
    confidence:
      status: not-assessed
    ecology.diet:
      status: not-assessed
    ecology.habitat:
      status: not-assessed
    ecology.locomotion:
      status: not-assessed
    ecology.bodySize:
      status: not-assessed
    ecology.guild:
      status: not-assessed
    traits[0]:
      status: not-assessed
    traits[1]:
      status: not-assessed
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: cabreira-2016-buriolestes primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: cabreira-2016-buriolestes
          relation: supports
          pages: 3090–3095
          figure: Figures 1–4; Supplemental Information
          quoteLocator: Holotype and assemblage; radiometric context; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
      rangeKind: global-composite
      taxonomicConcept: Dinosauria fossil-sample and living-bird navigation span
      geographicScope: Candelária Sequence, Paraná Basin, Brazil; living bird continuation
      olderMa: 233.2
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: cabreira-2016-buriolestes
          locator: pp. 3090–3095; Figures 1–4; Supplemental Information
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
  classification-support:
    - support: moderate
      groupingBasis:
        markdown: evidence.md
        field: /records/classification-support/0/groupingBasis
      conflicts:
        markdown: evidence.md
        field: /records/classification-support/0/conflicts
      references:
        - open-tree
        - pbdb-api-2016
---

## readerSources / scope / en

<!-- evo:text /records/atlas-profile/readerSources/0/scope/en -->
Primary description of the ULBRA-PVT280 holotype and Candelária Sequence assemblage; the local age context does not establish a global dinosaur first appearance.
<!-- /evo:text -->

## readerSources / scope / zh

<!-- evo:text /records/atlas-profile/readerSources/0/scope/zh -->
对 ULBRA-PVT280 正模和 Candelária Sequence 生物组合的一手描述；局地年代背景不能确立全球恐龙首现。
<!-- /evo:text -->

## readerSources / scope / en

<!-- evo:text /records/atlas-profile/readerSources/1/scope/en -->
The 74-taxon, 457-character analysis recovered Ornithoscelida; this is a matrix topology rather than observed ancestry.
<!-- /evo:text -->

## readerSources / scope / zh

<!-- evo:text /records/atlas-profile/readerSources/1/scope/zh -->
这项包含 74 个分类单元、457 项性状的分析恢复 Ornithoscelida；这是矩阵拓扑结果，而非观察到的祖先关系。
<!-- /evo:text -->

## readerSources / scope / en

<!-- evo:text /records/atlas-profile/readerSources/2/scope/en -->
Rescoring and adding taxa recovered the traditional ornithischian–saurischian split, illustrating sensitivity to matrix composition and coding.
<!-- /evo:text -->

## readerSources / scope / zh

<!-- evo:text /records/atlas-profile/readerSources/2/scope/zh -->
重新编码并增加分类单元后，研究恢复传统的鸟臀类—蜥臀类分支，显示结果受矩阵组成与编码影响。
<!-- /evo:text -->

## readerSources / scope / en

<!-- evo:text /records/atlas-profile/readerSources/3/scope/en -->
Three nearly complete Yixian Formation skeletons preserve filamentous integument; function and full-body coverage are not direct observations.
<!-- /evo:text -->

## readerSources / scope / zh

<!-- evo:text /records/atlas-profile/readerSources/3/scope/zh -->
三件义县组近乎完整骨架保存了丝状体表结构；其功能与全身覆盖并非直接观察所得。
<!-- /evo:text -->

# Dinosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Buriolestes ULBRA-PVT280 from the approximately 233.2 Ma assemblage anchors the 233.2–0 Ma Dinosauria route, with living birds extending the navigation span; the specimen does not establish a global dinosaur FAD or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named specimen, assemblage context and morphology matrix are primary evidence. Living continuation belongs to the atlas navigation closure, while the fossil endpoint remains local and sample-bounded.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名标本、组合背景及形态矩阵属于一手证据；现生延续来自图谱导航闭包，而化石端点仍局限于当地样本。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
约 233.2 Ma 生物组合中的 Buriolestes 正模 ULBRA-PVT280 锚定 233.2–0 Ma 的恐龙路线，现生鸟类把导航跨度延续至今；该标本不确立恐龙全球首现或直系祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
233.2 Ma is the rounded assemblage and specimen context, not a global dinosaur FAD, crown-node date or uninterrupted record.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Buriolestes holotype ULBRA-PVT280 anchors a sampled Late Triassic dinosaur occurrence and living birds extend the route to the present.
<!-- /evo:text -->

## classification-support / groupingBasis

<!-- evo:text /records/classification-support/0/groupingBasis -->
Major dinosaur groups are represented as a compact navigation hierarchy.
<!-- /evo:text -->

## classification-support / conflicts

<!-- evo:text /records/classification-support/0/conflicts -->
Alternative hypotheses for early dinosaur relationships are not resolved by this display.
<!-- /evo:text -->
