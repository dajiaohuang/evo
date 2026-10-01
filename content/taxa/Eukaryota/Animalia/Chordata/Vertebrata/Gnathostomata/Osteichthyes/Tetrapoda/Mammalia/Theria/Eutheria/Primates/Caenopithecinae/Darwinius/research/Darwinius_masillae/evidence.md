---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:147599
    scientificName: Darwinius masillae
    commonName: Messel adapiform
    commonNameZh: 梅塞尔达尔文猴
    rank: genus
    parentName: Adapiformes
    extinct: true
    geography:
      - Messel Pit
      - Hesse
      - Germany
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
      - franzen-2009-darwinius
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
        - referenceId: franzen-2009-darwinius
          metadataVariant: 0
          sourceKey: franzen-2009-darwinius
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
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Caenopithecinae/Darwinius/research/Darwinius_masillae
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
      reviewedAgainstReferenceVersion: franzen-2009-darwinius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: franzen-2009-darwinius
          relation: supports
          pages: e5723; Figures 1–16; Tables 1–4
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Caenopithecinae/Darwinius/research/Darwinius_masillae
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
      reviewedAgainstReferenceVersion: franzen-2009-darwinius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: franzen-2009-darwinius
          relation: supports
          pages: e5723; Figures 1–16; Tables 1–4
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Caenopithecinae/Darwinius/research/Darwinius_masillae
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
      reviewedAgainstReferenceVersion: franzen-2009-darwinius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: franzen-2009-darwinius
          relation: supports
          pages: e5723; Figures 1–16; Tables 1–4
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Caenopithecinae/Darwinius/research/Darwinius_masillae
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
      reviewedAgainstReferenceVersion: franzen-2009-darwinius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: franzen-2009-darwinius
          relation: supports
          pages: e5723; Figures 1–16; Tables 1–4
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Caenopithecinae/Darwinius/research/Darwinius_masillae
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
      reviewedAgainstReferenceVersion: franzen-2009-darwinius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: franzen-2009-darwinius
          relation: supports
          pages: e5723; Figures 1–16; Tables 1–4
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Caenopithecinae/Darwinius/research/Darwinius_masillae
      rangeKind: global-composite
      taxonomicConcept: Darwinius part-and-counterpart holotype occurrence
      geographicScope: Messel Pit, Hesse, Germany
      olderMa: 47.5
      youngerMa: 47.5
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
      confidence: high
      claimPaths:
        - content/events/Darwinius_part-and-counterpart_holotype/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Caenopithecinae/Darwinius/research/Darwinius_masillae/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: franzen-2009-darwinius
          locator: e5723; Figures 1–16; Tables 1–4
      reviewStatus: automated-audit-passed
---

# Darwinius masillae

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
The Messel juvenile part-and-counterpart holotype, its described anatomy, preparation disclosure and proposed paleobiology.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
梅塞尔幼体正反模正模及其解剖描述、制备说明和古生物学解释。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
PMO 214.214 and WDC-MG-210 are the two slabs of the Darwinius masillae holotype; adapiform and higher-level placement remain analysis-bounded rather than ancestral claims.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field for darwinius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profile is restricted to the Messel Pit occurrence in Germany and does not imply a wider genus distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field for darwinius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Gut contents and limb anatomy support plant-feeding and arboreal interpretations for one juvenile, not observed lifetime behaviour for the genus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field for darwinius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The articulated juvenile preserves a complete tail, hands, a right foot, soft-tissue outline and gut contents, with disclosed restoration on one slab.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field for darwinius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 47.5 Ma display point represents the Messel holotype horizon and is not a global adapiform or primate first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field for darwinius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
梅塞尔达尔文猴的分类表述只覆盖具名标本及所引主研究的分析范围；导航归属不表示直系祖先或普适系统树。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
梅塞尔达尔文猴的地理字段只投影主研究记录的具体产地，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
梅塞尔达尔文猴的生态字段区分保存事实与功能推断；未被标本直接记录的饮食、行为、栖息地或性能均明确保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
梅塞尔达尔文猴的形态字段限定于主研究列明的具名标本和精确页码、图版或补充材料，不外推到整个支系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
梅塞尔达尔文猴的年代范围是主研究标本或地层背景的有界投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
PMO 214.214 与 WDC-MG-210 是 Darwinius masillae 正模的两块石板；其兔猴型类及更高阶元位置仍受分析限制，不能视作祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本资料仅限于德国梅塞尔坑的产出，并不意味着该属具有更广分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
肠内容物和肢体解剖支持一个幼体的植食与树栖解释，并非对该属终生行为的直接观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
这件关节连接的幼体保存完整尾、双手、右足、软组织轮廓和肠内容物；其中一块石板存在已披露的修复。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
4,750 万年前的展示点代表梅塞尔正模层位，并非全球兔猴型类或灵长类的首次出现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Parts of plate B were fabricated during preparation and disclosed; sex, life history, ecology and haplorhine placement are interpretations, not direct observations or proof of crown-anthropoid ancestry.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
