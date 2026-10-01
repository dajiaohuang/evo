---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:55149
    scientificName: Aglaophyton
    commonName: Aglaophyton
    commonNameZh: 阿格兰蕨属
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
      - edwards-1986-aglaophyton
      - parry-2011-rhynie-age
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Lyonophytales/Lyonophytaceae/Aglaophyton/research/Aglaophyton
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
      reviewedAgainstReferenceVersion: Edwards 1986 DOI 10.1111/j.1095-8339.1986.tb01020.x
      referenceLinks:
        - referenceId: edwards-1986-aglaophyton
          relation: supports
          pages: 173–204
          figure: Reconstruction and conducting-strand figures
          quoteLocator: Abstract; generic diagnosis; redescription and systematic discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Lyonophytales/Lyonophytaceae/Aglaophyton/research/Aglaophyton
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
      reviewedAgainstReferenceVersion: Edwards 1986 DOI 10.1111/j.1095-8339.1986.tb01020.x; Parry et al. 2011 DOI 10.1144/0016-76492010-043
      referenceLinks:
        - referenceId: edwards-1986-aglaophyton
          relation: supports
          pages: 173–204
          quoteLocator: Title, material and Rhynie Chert provenance
        - referenceId: parry-2011-rhynie-age
          relation: contextualizes
          pages: 863–872
          figure: Figure 1
          quoteLocator: Rhynie Outlier geological setting
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Lyonophytales/Lyonophytaceae/Aglaophyton/research/Aglaophyton
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
      reviewedAgainstReferenceVersion: Edwards 1986 DOI 10.1111/j.1095-8339.1986.tb01020.x
      referenceLinks:
        - referenceId: edwards-1986-aglaophyton
          relation: supports
          pages: 173–204
          figure: Whole-plant reconstruction
          quoteLocator: Abstract; growth-form reconstruction and discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Lyonophytales/Lyonophytaceae/Aglaophyton/research/Aglaophyton
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
      reviewedAgainstReferenceVersion: Edwards 1986 DOI 10.1111/j.1095-8339.1986.tb01020.x
      referenceLinks:
        - referenceId: edwards-1986-aglaophyton
          relation: supports
          pages: 173–204
          figure: Reconstruction and conducting-strand figures
          quoteLocator: Abstract; reconstruction; conducting-strand description and rediagnosis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Lyonophytales/Lyonophytaceae/Aglaophyton/research/Aglaophyton
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
      reviewedAgainstReferenceVersion: Parry et al. 2011 DOI 10.1144/0016-76492010-043; Edwards 1986 DOI 10.1111/j.1095-8339.1986.tb01020.x
      referenceLinks:
        - referenceId: parry-2011-rhynie-age
          relation: supports
          pages: 863–872
          figure: Figures 1–4
          quoteLocator: Abstract; ID-TIMS methods and Results; 411.5 ± 1.3 Ma zircon age
        - referenceId: edwards-1986-aglaophyton
          relation: contextualizes
          pages: 173–204
          quoteLocator: Rhynie Chert material and redescription
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
    - entityPath: content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Lyonophytales/Lyonophytaceae/Aglaophyton/research/Aglaophyton
      rangeKind: global-composite
      taxonomicConcept: Aglaophyton major represented Rhynie-chert material
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
        - content/taxa/Eukaryota/Plantae/Bryobiotina/Langiophytophyta/Langiophytopsida/Lyonophytales/Lyonophytaceae/Aglaophyton/research/Aglaophyton/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: edwards-1986-aglaophyton
          locator: pp. 173–204; redescription, reconstruction and Rhynie Chert provenance
        - referenceId: parry-2011-rhynie-age
          locator: pp. 863–872, especially Abstract and Results; 411.5 ± 1.3 Ma ID-TIMS U–Pb zircon age
      reviewStatus: automated-audit-passed
---

# Aglaophyton

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Edwards established Aglaophyton for the plant formerly called Rhynia major after re-examining new and historical material; the profile preserves the paper's refusal to assign the genus to a living higher group.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary redescription explicitly names the genus, gives its basis and discusses higher placement. High confidence is restricted to that taxonomic act and does not imply direct ancestry or current consensus on every higher relationship.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profiled Aglaophyton major material is from the Rhynie Chert of Aberdeenshire, Scotland; this named deposit does not establish the genus's complete geographic distribution or centre of origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The anatomical paper identifies the Rhynie Chert source and the geochronology paper independently identifies the Rhynie Outlier. High confidence applies only to the represented material and locality.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The Aglaophyton reconstruction includes extensive stands of decumbent axes with upright branches, but the fossil study did not measure carbon acquisition, population breadth or a genus-wide ecological guild.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Axis orientation and the stand reconstruction are results of the sampled anatomy, whereas detailed physiology and population ecology were not observed. Medium confidence marks this boundary between reconstruction and unavailable ecology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Aglaophyton major was reconstructed with decumbent axes, dichotomously branching upright axes and terminal sporangia; its three-zoned conducting strand lacks the differential wall thickenings used to diagnose tracheids.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary redescription reports the reconstruction and conducting-strand zones directly from re-examined material. High confidence applies to the studied sample and diagnosis, not to function in every axis or higher-group placement.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The displayed 412.8–410.2 Ma interval is the 411.5 ± 1.3 Ma U–Pb uncertainty window used for the represented Rhynie-chert material; it is not a global Aglaophyton first appearance, last appearance or lineage duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The geochronology study directly reports the zircon age and uncertainty, while the anatomical paper ties the profiled material to Rhynie. Confidence remains medium because the dated andesite constrains the deposit rather than directly dating each fossil specimen.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手再描述明确记录建属依据与高阶归属边界；高置信度仅限该分类处理，不表示直接祖先，也不声称所有更高阶关系已有共识。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
解剖论文与独立年代学论文都明确指向莱尼燧石或莱尼露头；高置信度只适用于具名材料与产地，不推断未取样地区。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
轴的方向和群落复原来自取样解剖，而生理与种群生态没有被直接观察；中等置信度标记复原结果与缺失生态信息之间的边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
一手再描述直接记录复原和导管束分区；高置信度只适用于所研究材料与诊断，不外推每条轴的功能或更高阶归属。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
年代学研究直接报告锆石年龄与误差，解剖论文把材料锚定到莱尼；由于被测安山岩约束产地而非每件化石，置信度保持中等。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Edwards 在重新检视新材料与历史材料后，为原称 Rhynia major 的植物建立 Aglaophyton；本档案保留论文不将该属归入任何现生高阶类群的处理。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
档案中的 Aglaophyton major 材料来自苏格兰阿伯丁郡的莱尼燧石；这一具名产地不能确立该属的完整地理分布或起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Aglaophyton 复原包含由匍匐轴和直立分枝组成的大片群落，但该化石研究没有测量碳获取、种群范围或属级生态功能群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
Aglaophyton major 被复原为具有匍匐轴、二歧直立轴和顶生孢子囊；其三区导管束缺少用于诊断管胞的差异化壁加厚。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
显示的 412.8–410.2 Ma 区间是用于所代表莱尼燧石材料的 411.5 ± 1.3 Ma U–Pb 不确定性窗口；它不是 Aglaophyton 的全球首现、末现或谱系延续时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 411.5 ± 1.3 Ma U–Pb constraint is represented as a bounded locality-age window for the cited Rhynie material, not a global first or last appearance of Aglaophyton.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The anatomical redescription identifies Aglaophyton major in the Rhynie Chert, while the independent ID-TIMS study constrains the Rhynie Outlier with a 411.5 ± 1.3 Ma zircon age.
<!-- /evo:text -->
