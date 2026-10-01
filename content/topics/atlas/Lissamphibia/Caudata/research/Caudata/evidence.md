---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: null
    scientificName: Caudata
    commonName: Salamanders
    commonNameZh: 蝾螈
    rank: order
    parentName: Lissamphibia
    extinct: false
    geography:
      - Tiaojishan Formation, western Liaoning, China (Beiyanerpeton sample)
      - Living salamander lineages sampled by Shen et al.
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
      - shen-2013-caudata-markers
      - gao-2012-beiyanerpeton
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Caudata/research/Caudata
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
      reviewedAgainstReferenceVersion: shen-2013-caudata-markers DOI 10.1093/molbev/mst122; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: shen-2013-caudata-markers
          pages: 2235–2248
          figure: Figures 1–5; supplementary markers
          quoteLocator: Marker development; salamander taxon sampling; phylogenetic analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Caudata/research/Caudata
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: gao-2012-beiyanerpeton DOI 10.1073/pnas.1009828109; PMID 22411790
      referenceLinks:
        - relation: supports
          referenceId: gao-2012-beiyanerpeton
          pages: 5767–5772
          figure: Figures 1–3
          quoteLocator: Abstract; holotype and referred specimen descriptions
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Caudata/research/Caudata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: gao-2012-beiyanerpeton; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: gao-2012-beiyanerpeton
          pages: 5767–5772
          figure: Figures 1–4
          quoteLocator: Geological setting; PKUP V0601–V0606; 157 ± 3 Ma overlying unit
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Caudata/research/Caudata
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/3/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: shen-2013-caudata-markers
          relation: supports
          pages: 2235–2248
          figure: Figures 1–5; supplementary markers
          quoteLocator: Marker development, taxon sampling and inferred Caudata topology
        - referenceId: gao-2012-beiyanerpeton
          relation: supports
          pages: 5767–5772
          figure: Figures 1–4
          quoteLocator: Beiyanerpeton diagnosis and salamandroid assignment
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Caudata/research/Caudata
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/4/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: gao-2012-beiyanerpeton
          relation: supports
          pages: 5767–5772
          figure: Figures 1–4
          quoteLocator: Geological setting and western Liaoning locality
        - referenceId: shen-2013-caudata-markers
          relation: supports
          pages: 2235–2248
          figure: Figures 1–5; supplementary taxa
          quoteLocator: Living salamander taxon sampling
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia/Caudata/research/Caudata
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/5/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: shen-2013-caudata-markers
          relation: supports
          pages: 2235–2248
          figure: Figures 1–5; supplementary markers
          quoteLocator: Phylogenomic methods and stated study scope
        - referenceId: gao-2012-beiyanerpeton
          relation: supports
          pages: 5767–5772
          figure: Figures 1–4
          quoteLocator: Specimen anatomy and geological setting, without direct behaviour observations
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
  ranges:
    - entityPath: content/topics/atlas/Lissamphibia/Caudata/research/Caudata
      rangeKind: global-composite
      taxonomicConcept: Beiyanerpeton salamandroid sample within the Caudata route
      geographicScope: Tiaojishan Formation, western Liaoning, China
      olderMa: 160
      youngerMa: 154
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
        - content/topics/atlas/Lissamphibia/Caudata/research/Caudata/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: gao-2012-beiyanerpeton
          locator: 5767–5772; Figures 1–4; Geological setting; PKUP V0601–V0606; 157 ± 3 Ma overlying unit
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Caudata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 102-nuclear-marker toolkit is tested on sampled higher-level salamander relationships and yields an explicit Caudata topology. The marker sample does not define the fossil range, exact crown age or direct ancestors of Caudata.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the marker sample does not define the fossil range, exact crown age or direct ancestors of Caudata.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The Beiyanerpeton series preserves articulated cranial and postcranial skeletons with bony gill structures close to the cheek region; these specimen-level observations do not generalize to all Caudata.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The named articulated skeletons and cheek-region bony gill structures are directly reported, while extension from this specimen series to all Caudata is not supported.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Six Beiyanerpeton specimens and an overlying 157 ± 3 Ma zircon date support a 160–154 Ma study-sample window within the Caudata route; the rock date is not a direct fossil date or order-wide FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Beiyanerpeton salamandroid sample within the Caudata route: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Shen et al. test higher-level salamander relationships with 102 nuclear markers, while Gao et al. describe Beiyanerpeton as a salamandroid sample; the resulting Caudata classification is sampled evidence rather than a final tree or direct-ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The marker toolkit, sampled taxa and fossil diagnosis are directly reported, but the classification remains sensitive to matrix sampling and does not establish ancestor–descendant relationships.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/3/reviewedAgainstReferenceVersion -->
Shen et al. 2013 DOI 10.1093/molbev/mst122; Gao and Shubin 2012 DOI 10.1073/pnas.1009828109; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Gao et al. report Beiyanerpeton from the Tiaojishan Formation of western Liaoning, China, while Shen et al. sample living salamander lineages for markers; these records provide study localities and taxa, not a complete geographic distribution of Caudata.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil locality and molecular sampling are explicit in the primary sources, but neither source surveys presence and absence across all salamanders.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/4/reviewedAgainstReferenceVersion -->
Gao and Shubin 2012 DOI 10.1073/pnas.1009828109; Shen et al. 2013 DOI 10.1093/molbev/mst122; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The cited salamander marker study and Beiyanerpeton fossil description address relationships, anatomy and geological context rather than diet, habitat use, locomotion, body size or ecological guild; those fields remain unassigned for Caudata here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The primary sources state phylogenetic, anatomical and geological aims without an ecological behaviour dataset, so withholding these fields preserves the evidence boundary.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/5/reviewedAgainstReferenceVersion -->
Shen et al. 2013 DOI 10.1093/molbev/mst122; Gao and Shubin 2012 DOI 10.1073/pnas.1009828109; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
正模与归入标本直接记录了关节连接的头颅、躯后骨骼及颊侧骨质鳃结构；这些观察限定于该标本系列，不推广到所有有尾类。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Beiyanerpeton salamandroid sample within the Caudata route：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
标记工具、取样类群和化石诊断均有直接报告，但分类仍会受矩阵取样影响，不能建立祖先序列。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
化石地点和分子取样范围在一手来源中明确，但两者都不覆盖蝾螈类全部地理存在和缺失。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
一手来源说明了系统发育、解剖和地质目标，却没有生态行为数据；保留这些字段未赋值可避免越过证据边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
102 个核标记工具包在所抽样有尾类高阶关系上接受检验，并给出明确拓扑。标记样本不能限定有尾目的化石延限、精确冠群年龄或直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Beiyanerpeton 标本系列保存了关节连接的头颅和躯后骨骼，以及靠近颊部的骨质鳃结构；这些标本层面的观察不外推到所有有尾类。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
六件北燕螈标本及其上覆岩层 1.57±0.03 亿年前的锆石年龄，支持有尾目路线中 1.60–1.54 亿年前的研究样本窗口；岩层年龄不是化石直接测年或目级首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 157 ± 3 Ma date is from overlying trachyandesite, not direct dating of the skeletons.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The interval represents six named salamandroid specimens and not the complete Caudata range.
<!-- /evo:text -->
