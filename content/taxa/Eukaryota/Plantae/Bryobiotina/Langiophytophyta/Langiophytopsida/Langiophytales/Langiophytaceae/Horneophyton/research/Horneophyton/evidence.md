---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:409636
    scientificName: Horneophyton
    commonName: Horneophyton
    commonNameZh: 角蕨属
    rank: genus
    parentName: Plantae
    extinct: true
    geography:
      - Rhynie Chert, Aberdeenshire, Scotland
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
      - kenrick-long-2026-horneophyton
      - parry-2011-rhynie-age
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Langiophytales/Langiophytaceae/Horneophyton/research/Horneophyton
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Kenrick and Long 2026 DOI 10.1111/nph.70850
      referenceLinks:
        - referenceId: kenrick-long-2026-horneophyton
          relation: supports
          pages: 3149–3164
          figure: Figure 1; Supporting Information Methods S1
          quoteLocator: Materials and Methods; 24 sections, three selected slides and taxonomic verification
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Langiophytales/Langiophytaceae/Horneophyton/research/Horneophyton
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Kenrick and Long 2026 DOI 10.1111/nph.70850; Parry et al. 2011 DOI 10.1144/0016-76492010-043
      referenceLinks:
        - referenceId: kenrick-long-2026-horneophyton
          relation: supports
          pages: 3149–3164
          figure: Figure 1
          quoteLocator: Study site and museum material; NHMUK PI In 24697, NHMUK OC 1938 and NHMUK SC 3137
        - referenceId: parry-2011-rhynie-age
          relation: contextualizes
          pages: 863–872
          figure: Figure 1
          quoteLocator: Rhynie Outlier geological setting
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Langiophytales/Langiophytaceae/Horneophyton/research/Horneophyton
      claimType: ecology
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
      reviewedAgainstReferenceVersion: Kenrick and Long 2026 DOI 10.1111/nph.70850
      referenceLinks:
        - referenceId: kenrick-long-2026-horneophyton
          relation: supports
          pages: 3149–3164
          figure: Figure 1
          quoteLocator: Introduction and study setting; reconstruction; Materials and Methods
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Langiophytales/Langiophytaceae/Horneophyton/research/Horneophyton
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
      reviewedAgainstReferenceVersion: Kenrick and Long 2026 DOI 10.1111/nph.70850
      referenceLinks:
        - referenceId: kenrick-long-2026-horneophyton
          relation: supports
          pages: 3149–3164
          figure: Figures 2–8; Supporting Figures S1–S5
          quoteLocator: Conducting-cell Results; transfer-cell comparison; xylem and phloem reassessment
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Langiophytales/Langiophytaceae/Horneophyton/research/Horneophyton
      claimType: fossil-range
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
      reviewedAgainstReferenceVersion: Parry et al. 2011 DOI 10.1144/0016-76492010-043; Kenrick and Long 2026 DOI 10.1111/nph.70850
      referenceLinks:
        - referenceId: parry-2011-rhynie-age
          relation: supports
          pages: 863–872
          figure: Figures 1–4
          quoteLocator: Abstract; ID-TIMS methods and Results; 411.5 ± 1.3 Ma zircon age
        - referenceId: kenrick-long-2026-horneophyton
          relation: contextualizes
          pages: 3149–3164
          quoteLocator: Rhynie Chert material and named NHMUK slides
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
    - entityPath: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Langiophytales/Langiophytaceae/Horneophyton/research/Horneophyton
      rangeKind: global-composite
      taxonomicConcept: Horneophyton lignieri represented Rhynie-chert material
      geographicScope: Rhynie Chert, Rhynie Outlier, Aberdeenshire, Scotland
      olderMa: 412.8
      youngerMa: 410.2
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
        - content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Langiophytales/Langiophytaceae/Horneophyton/research/Horneophyton/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: kenrick-long-2026-horneophyton
          locator: pp. 3149–3164; Materials and Methods; NHMUK PI In 24697, NHMUK OC 1938 and NHMUK SC 3137; Figures 1–8
        - referenceId: parry-2011-rhynie-age
          locator: pp. 863–872, especially Abstract and Results; 411.5 ± 1.3 Ma ID-TIMS U–Pb zircon age
      reviewStatus: automated-audit-passed
---

# Horneophyton

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Kenrick and Long verified Horneophyton lignieri in a 24-section museum sample and selected three named NHMUK slides for detailed imaging; the profile does not turn the study's evolutionary interpretation into direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study identifies the taxon, specimen pool, selected slides and verification method. High confidence applies to that sampled identity rather than every historical assignment or inferred ancestor state.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profiled Horneophyton lignieri slides contain Rhynie-chert material from Aberdeenshire, Scotland; this museum sample does not establish a complete geographic distribution or origin centre.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary anatomical and geochronological studies independently identify the Rhynie Chert and Rhynie Outlier. High confidence is limited to the represented deposit and does not infer absence elsewhere.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The study context associates Horneophyton lignieri with Rhynie sinter surfaces and reconstructs a sessile rhizoid-bearing plant, but the selected thin sections do not measure ecological breadth, carbon acquisition or a population-wide guild.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The paper reports the deposit context and reconstructed plant form but focuses experimentally on conducting-cell anatomy. Medium confidence distinguishes those contextual observations from unmeasured physiological and population ecology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Confocal imaging of Horneophyton lignieri shows papillate or labyrinthine wall ingrowths in conducting cells and does not recover distinct xylem and phloem; resemblance to transfer cells and transport function remain interpretations.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Named slides, confocal optical sections, three-dimensional renderings and measured cell walls directly support the anatomical observations. High confidence does not extend to the inferred physiological role or a universal ancestral vascular system.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The displayed 412.8–410.2 Ma interval is the 411.5 ± 1.3 Ma U–Pb uncertainty window used for the represented Rhynie-chert Horneophyton material; it is not a global first appearance, last appearance or lineage duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The geochronology study directly reports the zircon age and uncertainty, while the anatomical study ties the profiled slides to Rhynie. Confidence remains medium because the dated andesite constrains the deposit rather than directly dating each slide.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究记录分类核验、24 张切片总体和三张具名详查切片；高置信度限于样本身份，不扩展为所有历史归入或祖先状态。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
解剖与年代研究独立识别莱尼燧石和莱尼露头；高置信度限于所代表产地，不把其他地区的缺失解释为真实不存在。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
论文报告沉积背景与植物复原，但实验重点是导管细胞解剖；中等置信度区分这些背景观察与未测量的生理和种群生态。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
具名切片、共聚焦光学切面、三维渲染和细胞壁测量直接支持解剖观察；高置信度不延伸到推断的生理功能或普适祖先维管系统。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
年代学研究直接报告锆石年龄与误差，解剖研究把具名切片锚定到莱尼；由于被测安山岩约束产地而非每张切片，置信度保持中等。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Kenrick 与 Long 在含 24 张切片的馆藏样本中核验 Horneophyton lignieri，并选择三张具名 NHMUK 切片进行详细成像；本档案不把研究的演化解释改写为直接祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
档案中的 Horneophyton lignieri 切片包含来自苏格兰阿伯丁郡莱尼燧石的材料；这一馆藏样本不能确立完整地理分布或起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
研究背景把 Horneophyton lignieri 与莱尼硅华表面联系起来，并复原为具假根的固着植物；但所选切片没有测量生态范围、碳获取或种群级功能群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Horneophyton lignieri 的共聚焦成像显示导管细胞中乳突状或迷宫状壁内突，且未恢复出独立木质部与韧皮部；与转移细胞的相似性及运输功能仍属解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
显示的 412.8–410.2 Ma 区间是用于所代表莱尼燧石 Horneophyton 材料的 411.5 ± 1.3 Ma U–Pb 不确定性窗口；它不是全球首现、末现或谱系延续时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 411.5 ± 1.3 Ma U–Pb constraint is represented as a bounded locality-age window for the cited Rhynie material, not a global first or last appearance of Horneophyton.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The confocal study identifies Horneophyton lignieri in named Rhynie-chert slides, while the independent ID-TIMS study constrains the Rhynie Outlier with a 411.5 ± 1.3 Ma zircon age.
<!-- /evo:text -->
