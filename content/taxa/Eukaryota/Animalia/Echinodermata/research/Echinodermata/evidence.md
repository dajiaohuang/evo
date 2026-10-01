---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:30739
    scientificName: Echinodermata
    commonName: Echinoderms
    commonNameZh: 棘皮动物
    rank: phylum
    parentName: Ambulacraria
    extinct: false
    geography:
      - Global marine record
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
      - smith-2013-oldest-echinoderms
      - topper-2019-yanjiahella
      - zamora-2020-yanjiahella
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: smith-2013-oldest-echinoderms @ DOI 10.1038/ncomms2391
      referenceLinks:
        - relation: supports
          referenceId: smith-2013-oldest-echinoderms
          pages: 1, 5
          figure: Figure 3
          quoteLocator: Abstract; Discussion, paragraphs describing the 515–510 Ma articulated faunas
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: smith-2013-oldest-echinoderms @ DOI 10.1038/ncomms2391
      referenceLinks:
        - relation: supports
          referenceId: smith-2013-oldest-echinoderms
          pages: 5–6
          figure: Figure 3
          quoteLocator: Discussion, stereom first-occurrence and skeleton-acquisition paragraphs
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: Topper 2019 DOI 10.1038/s41467-019-09059-3 and Zamora 2020 DOI 10.1038/s41467-020-14920-x
      referenceLinks:
        - relation: supports
          referenceId: topper-2019-yanjiahella
          figure: Figure 3; Supplementary Figures 6–9
          quoteLocator: "Abstract; Results: Morphological characteristics and Phylogenetic significance"
        - relation: contradicts
          referenceId: zamora-2020-yanjiahella
          figure: Figure 2a–d
          quoteLocator: Opening Matters Arising text and Methods phylogenetic reanalysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-2013-oldest-echinoderms primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-2013-oldest-echinoderms
          relation: supports
          pages: 1 and 5–6; Figure 3; Abstract and Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-2013-oldest-echinoderms primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-2013-oldest-echinoderms
          relation: supports
          pages: 1 and 5–6; Figure 3; Abstract and Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-2013-oldest-echinoderms primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-2013-oldest-echinoderms
          relation: supports
          pages: 1 and 5–6; Figure 3; Abstract and Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/6/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/6/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-2013-oldest-echinoderms primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-2013-oldest-echinoderms
          relation: supports
          pages: 1 and 5–6; Figure 3; Abstract and Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/7/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/7/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: smith-2013-oldest-echinoderms primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: smith-2013-oldest-echinoderms
          relation: supports
          pages: 1 and 5–6; Figure 3; Abstract and Discussion
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
    - markdown: evidence.md
      field: /records/claim-rationales.zh/6
    - markdown: evidence.md
      field: /records/claim-rationales.zh/7
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
    - markdown: evidence.md
      field: /records/claim-statements.zh/6
    - markdown: evidence.md
      field: /records/claim-statements.zh/7
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata
      rangeKind: global-composite
      taxonomicConcept: Echinodermata — robust articulated body-fossil record
      geographicScope: Global articulated body-fossil record
      olderMa: 510
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 5
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: high
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata/evidence.md#/records/claims/1
        - content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata/evidence.md#/records/claims/2
        - content/taxa/Eukaryota/Animalia/Echinodermata/research/Echinodermata/evidence.md#/records/claims/7
      referenceLocators:
        - referenceId: smith-2013-oldest-echinoderms
          locator: pp. 1 and 5–6; Figure 3; Abstract and Discussion
        - referenceId: zamora-2020-yanjiahella
          locator: Figure 2a–d; opening Matters Arising text and Methods
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Echinodermata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Articulated echinoderm faunas with at least four markedly differentiated body plans are documented by about 510 Ma; this is an articulated-fauna datum, not the origin time of Echinodermata.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Direct articulated body fossils and their stratigraphic correlation support the approximately 510 Ma datum. The wording deliberately excludes older isolated stereom and model-based lineage-origin estimates.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Diagnostic isolated stereom ossicles occur in the Delgadella anabara Zone of Cambrian Series 2, Stage 3, approximately 520–525 Ma on the source's 2013 calibration; they are skeletal microfossils, not articulated echinoderm bodies.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The occurrence of isolated stereom is direct fossil evidence, while its use as a latest bound on skeleton acquisition is an inference. The published numeric calibration predates the atlas's current formal Stage 3 boundaries and is retained only as source-reported approximation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Yanjiahella biscarpa is a Fortunian deuterostome whose proposed placement as a stem echinoderm is contested because no unambiguous echinoderm synapomorphy or stereom is preserved; it is not used here to set the Echinodermata range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The original analysis recovered Yanjiahella as a stem echinoderm, but a published reanalysis found no unique echinoderm synapomorphy, no stereom and unstable affinities. The approximately 540 Ma assignment therefore cannot anchor a reliable class-level fossil endpoint.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Echinodermata is profiled as a phylum while Yanjiahella’s proposed stem placement remains contested and is not used as direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The taxonomy field is bounded to Echinodermata, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The highlighted earliest articulated faunas are Gondwanan samples; they do not define a global centre of origin or complete Cambrian distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The biogeography field is bounded to Echinodermata, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The earliest samples document multiple marine body plans but do not support one ancestral diet, locomotor mode or ecological guild for the phylum.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The ecology field is bounded to Echinodermata, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/6/statement -->
Diagnostic stereom occurs as isolated ossicles before articulated faunas with at least four differentiated body plans by about 510 Ma.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/6/confidenceRationale -->
The morphology field is bounded to Echinodermata, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/7/statement -->
The 510–0 Ma profile range begins with robust articulated faunas; older isolated stereom and contested Yanjiahella material do not set the body-fossil endpoint.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/7/confidenceRationale -->
The fossil-range field is bounded to Echinodermata, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
约 510 Ma 的时间点由关节保存的直接体化石及地层对比支持；表述明确排除更早的孤立 stereom 骨片和模型推断的谱系起源时间。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
孤立 stereom 的出现属于直接化石证据，但将其解释为骨骼获得的最晚界限仍属推断。论文的数值采用 2013 年标尺，只能作为来源报告的近似值。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
原始分析将 Yanjiahella 恢复为棘皮动物干群，但后续重分析指出其缺少唯一的棘皮动物共有衍征和 stereom，系统位置不稳定，因此不能用约 540 Ma 锚定可靠化石范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
棘皮动物的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
棘皮动物的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
棘皮动物的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/6 -->
棘皮动物的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/7 -->
棘皮动物的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
约 5.10 亿年前已有至少四种体制显著分化、关节保存的棘皮动物群；这是关节化动物群的化石时间点，并非棘皮动物门的起源时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
在来源采用的 2013 年标尺上，寒武系第二统第三阶 Delgadella anabara 带约 5.20–5.25 亿年前出现了具诊断意义的孤立 stereom 骨片；它们是骨骼微体化石，不是关节保存的棘皮动物躯体。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Yanjiahella biscarpa 是幸运期后口动物；由于未保存无歧义的棘皮动物共有衍征或 stereom，其棘皮动物干群位置存在争议，因此本图谱不以它设定棘皮动物门范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
本档案按门级类群介绍棘皮动物；Yanjiahella 被提出的干群位置仍有争议，不据此认定直系祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
所介绍的最早保存关节连接的动物群是冈瓦纳样本；它们不能确定全球起源中心或寒武纪完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
最早的样本记录了多种海生体制，但不足以为整个门确定单一的祖先食性、运动方式或生态功能群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/6 -->
具有诊断意义的立体网状骨骼结构先见于孤立骨片；到约 510 Ma，保存关节连接的动物群已呈现至少四种分化的体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/7 -->
本档案的 510–0 Ma 范围始于证据可靠、保存关节连接的动物群；更早的孤立立体网状骨骼材料及有争议的 Yanjiahella 材料不用于设定这一实体化石端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 510–0 Ma profile range begins with robust articulated faunas; older isolated stereom and contested Yanjiahella material do not set the body-fossil endpoint.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Articulated Gondwanan faunas document at least four differentiated echinoderm body plans by about 510 Ma; isolated stereom and the contested Fortunian Yanjiahella assignment are represented by separate claims.
<!-- /evo:text -->
