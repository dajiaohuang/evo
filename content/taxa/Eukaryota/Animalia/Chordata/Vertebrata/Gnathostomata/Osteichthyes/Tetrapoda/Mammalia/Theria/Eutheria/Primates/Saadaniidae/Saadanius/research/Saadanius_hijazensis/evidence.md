---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:169687
    scientificName: Saadanius hijazensis
    commonName: Stem-catarrhine sample
    commonNameZh: 狭鼻猴干群萨达猴标本
    rank: genus
    parentName: Catarrhini
    extinct: true
    geography:
      - Middle Shumaysi Formation
      - Western Saudi Arabia
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
      - zalmout-2010-saadanius
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
      referenceBindings:
        - referenceId: zalmout-2010-saadanius
          metadataVariant: 0
          sourceKey: zalmout-2010-saadanius
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
    readerLimitations:
      en:
        markdown: page.en.md
        field: /records/atlas-profile/readerLimitations/en
      zh:
        markdown: page.zh.md
        field: /records/atlas-profile/readerLimitations/zh
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Saadaniidae/Saadanius/research/Saadanius_hijazensis
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: zalmout-2010-saadanius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: zalmout-2010-saadanius
          relation: supports
          pages: 360–365; Figures 1–4; Methods
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Saadaniidae/Saadanius/research/Saadanius_hijazensis
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: zalmout-2010-saadanius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: zalmout-2010-saadanius
          relation: supports
          pages: 360–365; Figures 1–4; Methods
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Saadaniidae/Saadanius/research/Saadanius_hijazensis
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: zalmout-2010-saadanius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: zalmout-2010-saadanius
          relation: supports
          pages: 360–365; Figures 1–4; Methods
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Saadaniidae/Saadanius/research/Saadanius_hijazensis
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: zalmout-2010-saadanius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: zalmout-2010-saadanius
          relation: supports
          pages: 360–365; Figures 1–4; Methods
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Saadaniidae/Saadanius/research/Saadanius_hijazensis
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: zalmout-2010-saadanius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: zalmout-2010-saadanius
          relation: supports
          pages: 360–365; Figures 1–4; Methods
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Saadaniidae/Saadanius/research/Saadanius_hijazensis
      rangeKind: global-composite
      taxonomicConcept: Saadanius holotype stem-catarrhine test occurrence
      geographicScope: Middle Shumaysi Formation, Harrat Al Ujayfa, western Saudi Arabia
      olderMa: 29
      youngerMa: 28
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
        - content/events/Saadanius_holotype_stem-catarrhine_test/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Saadaniidae/Saadanius/research/Saadanius_hijazensis/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: zalmout-2010-saadanius
          locator: 360–365; Figures 1–4; Methods
      reviewStatus: automated-audit-passed
---

# Saadanius hijazensis

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
Partial Shumaysi Formation cranium, the paper’s character matrix and biochronological placement.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
Shumaysi 组部分头骨、论文中的特征矩阵及生物年代学定位。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
SGS-UM 2009-002 was recovered as a stem catarrhine in a 36-character, 19-taxon analysis; this is a sampled topology, not a direct ancestor claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field for saadanius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profile is limited to the Middle Shumaysi Formation in western Saudi Arabia and does not establish a global catarrhine origin centre.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field for saadanius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Dentition permits a bounded dietary inference, while the partial cranium does not preserve locomotion, habitual habitat or feeding behaviour.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field for saadanius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The holotype preserves much of the face, palate and dentition together with a tubular ectotympanic documented by photographs and micro-CT.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field for saadanius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 29–28 Ma envelope follows the study’s biochronological context and is not a direct specimen date, crown-catarrhine FAD or divergence time.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field for saadanius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
狭鼻猴干群萨达猴标本的分类表述只覆盖具名标本及所引主研究的分析范围；导航归属不表示直系祖先或普适系统树。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
狭鼻猴干群萨达猴标本的地理字段只投影主研究记录的具体产地，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
狭鼻猴干群萨达猴标本的生态字段区分保存事实与功能推断；未被标本直接记录的饮食、行为、栖息地或性能均明确保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
狭鼻猴干群萨达猴标本的形态字段限定于主研究列明的具名标本和精确页码、图版或补充材料，不外推到整个支系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
狭鼻猴干群萨达猴标本的年代范围是主研究标本或地层背景的有界投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
SGS-UM 2009-002 在一项含 36 个性状、19 个分类单元的分析中被恢复为狭鼻类干群；这是取样拓扑，不是直接祖先主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本资料仅限于沙特阿拉伯西部 Shumaysi 组中段，不能确立全球狭鼻类起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
牙齿允许作出有边界的食性推断，但局部颅骨没有保存运动方式、惯常栖息地或摄食行为。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
正模保存了面部、腭和牙列的大部分，以及由照片和微型 CT 记录的管状外耳道。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
2,900 万至 2,800 万年前的区间遵循研究的生物年代背景，并非标本直接测年、狭鼻类冠群首次出现或分化时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 29–28 Ma age is biochronological and the stem-catarrhine position follows a 36-character, 19-taxon matrix; it does not directly date the catarrhine crown split or identify an ancestor.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
