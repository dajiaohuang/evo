---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:21421
    scientificName: Phacopida
    commonName: Phacopids
    commonNameZh: 镜眼虫类
    rank: order
    parentName: Trilobita
    extinct: true
    geography:
      - Siluro-Devonian Phacopidae material and ontogenetic series in Crônier et al.
      - Sampled trilobite systematics reviewed by Fortey
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
      - cronier-2011-phacopidae-species
      - fortey-2001-trilobite-systematics
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Phacopida/research/Phacopida
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: cronier-2011-phacopidae-species DOI 10.1016/j.crpv.2010.10.003; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: cronier-2011-phacopidae-species
          pages: 143–153
          figure: Figures 1–6; Tables 1–2
          quoteLocator: Morphological criteria; ontogenetic series; species delimitation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Phacopida/research/Phacopida
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion: cronier-2011-phacopidae-species DOI 10.1016/j.crpv.2010.10.003; concrete locators audited 2026-09-11
      referenceLinks:
        - referenceId: cronier-2011-phacopidae-species
          relation: supports
          pages: 143-153
          figure: Figures 1-6; Tables 1-2
          quoteLocator: Morphological and ontogenetic criteria for Phacopidae species delimitation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Phacopida/research/Phacopida
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion: cronier-2011-phacopidae-species DOI 10.1016/j.crpv.2010.10.003; concrete locators audited 2026-09-11
      referenceLinks:
        - referenceId: cronier-2011-phacopidae-species
          relation: supports
          pages: 143-153
          figure: Figures 1-6; Tables 1-2
          quoteLocator: Siluro-Devonian Phacopidae scope; no order-wide temporal synthesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Phacopida/research/Phacopida
      claimKind: scientific
      claimType: biogeography
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
        - referenceId: cronier-2011-phacopidae-species
          relation: supports
          pages: 143-153
          figure: Figures 1-6; Tables 1-2
          quoteLocator: Siluro-Devonian Phacopidae material and ontogenetic sampling
        - referenceId: fortey-2001-trilobite-systematics
          relation: supports
          pages: 1141-1154
          figure: Systematics review
          quoteLocator: Sampled trilobite classification and unresolved order-level boundaries
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Phacopida/research/Phacopida
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/4/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: cronier-2011-phacopidae-species
          relation: supports
          pages: 143-153
          figure: Figures 1-6; Tables 1-2
          quoteLocator: Morphological and ontogenetic study scope
        - referenceId: fortey-2001-trilobite-systematics
          relation: supports
          pages: 1141-1154
          figure: Systematics review
          quoteLocator: Classification review without an order-wide ecology dataset
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
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Phacopida/research/Phacopida
      rangeKind: global-composite
      taxonomicConcept: Phacopida numerical range withheld pending order-wide range evidence
      geographicScope: No defensible global numerical scope established
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: cronier-2011-phacopidae-species
          locator: pp. 143–153; Figures 1–6; Tables 1–2; Siluro-Devonian Phacopidae species and ontogeny only
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Phacopida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Siluro-Devonian phacopid morphology and ontogeny provide an explicit worked sample for diagnosing species within Phacopida. The study samples Phacopidae and neither revises every phacopid lineage nor fixes order-wide temporal endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond the study samples Phacopidae and neither revises every phacopid lineage nor fixes order-wide temporal endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Crônier et al. use morphological and ontogenetic characters to delimit Siluro-Devonian Phacopidae species; these observations are a bounded family sample, not universal phacopid anatomy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary study directly documents the scored exoskeletal characters and ontogenetic series, while its family- and species-level scope limits order-wide generalization.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The former 488-359 Ma Phacopida display is withheld because the available primary study treats Siluro-Devonian Phacopidae rather than an order-wide first and last occurrence synthesis; no numerical global range is assigned here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The cited study directly documents a Siluro-Devonian family- and species-scoped sample, but it cannot establish order-wide temporal endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Crônier et al. document Siluro-Devonian Phacopidae material and ontogenetic series, while Fortey reviews sampled trilobite systematics; these records are regional and taxon-sampled rather than a complete geographic distribution of Phacopida.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary case study and systematic review identify their included taxa and material, but neither surveys presence and absence across all Phacopida.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/3/reviewedAgainstReferenceVersion -->
cronier-2011-phacopidae-species DOI 10.1016/j.crpv.2010.10.003; fortey-2001-trilobite-systematics DOI 10.1666/0022-3360(2001)075<1141:TSTLY>2.0.CO;2; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited phacopid taxonomy studies focus on morphology, ontogeny and classification, not diet, habitat use, locomotor performance, body size or ecological guild; those fields remain unassigned for Phacopida here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The source designs are explicitly taxonomic and morphological, so withholding ecological fields avoids converting classification samples into observed behaviour or a uniform order ecology.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/4/reviewedAgainstReferenceVersion -->
cronier-2011-phacopidae-species DOI 10.1016/j.crpv.2010.10.003; fortey-2001-trilobite-systematics DOI 10.1666/0022-3360(2001)075<1141:TSTLY>2.0.CO;2; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crônier 等利用形态与个体发育性状划分志留纪—泥盆纪镜眼虫科物种；这些观察是有界的科级样本，不是普遍的镜眼虫目解剖。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
原先的 488—359 Ma 镜眼虫目显示已被撤回，因为现有一手研究处理的是志留纪—泥盆纪镜眼虫科，而不是整个目级类群的首末出现综合；这里不指定全球数值延限。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
Crônier 等记录了志留纪—泥盆纪镜眼虫科材料与个体发育系列，Fortey 则综述了取样的三叶虫系统学；这些记录是区域性和类群取样的，不是镜眼虫目的完整地理分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
所引镜眼虫分类研究聚焦形态、个体发育和分类，而非食性、栖息地利用、运动性能、体型或生态营养类群；这些字段在此对镜眼虫目保留未赋值。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
志留纪—泥盆纪镜眼虫科的形态与个体发育材料，为镜眼虫目内部的物种识别提供了一个明确实例。该研究只抽样镜眼虫科，既未修订镜眼虫目的全部谱系，也未确定全目的时间端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited Phacopidae study is family- and species-scoped and cannot bound the order.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 488–359 Ma display is withheld because the available primary study treats Siluro-Devonian Phacopidae rather than an order-wide first and last occurrence synthesis.
<!-- /evo:text -->
