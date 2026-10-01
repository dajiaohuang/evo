---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Life
    commonName: Life on Earth
    commonNameZh: 地球生命
    rank: ""
    taxonId: ""
    firstAppearance: 3700
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Life
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: ohtomo-2014-isua-biogenic-graphite
          relation: supports
          pages: 25–28
          figure: Figures 3–4
          quoteLocator: p. 25 abstract; carbon-isotope analyses; graphite nanostructure; p. 28 conclusion
        - referenceId: pearce-2018-origin-life-window
          relation: contextualizes
          pages: 343–364
          figure: Figure 1; Table 1
          quoteLocator: "Abstract and Introduction: habitability and biosignature boundaries; Discussion: origin interval and uncertainty"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Life
      rangeKind: global-composite
      taxonomicConcept: Life on Earth sampled biosignature-to-living navigation envelope
      geographicScope: Isua Supracrustal Belt, western Greenland; living global biosphere
      olderMa: 3700
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
        - content/topics/atlas/Life/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: ohtomo-2014-isua-biogenic-graphite
          locator: pp. 25–28; p. 25 abstract; Figures 3–4; p. 28 conclusion on isotope and graphite-nanostructure evidence
        - referenceId: pearce-2018-origin-life-window
          locator: pp. 343–364; Abstract and Introduction; Figure 1; Table 1; habitability versus biosignature boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
  classification-support:
    - support: contextual
      groupingBasis:
        markdown: evidence.md
        field: /records/classification-support/0/groupingBasis
      conflicts:
        markdown: evidence.md
        field: /records/classification-support/0/conflicts
      references:
        - open-tree
---

# Life

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Life navigation envelope begins at 3.7 Ga as a conservative sampled biosignature boundary supported by biogenic-graphite evidence and extends to living Earth life at 0 Ma; 3.7 Ga is a minimum age by which life is evidenced, not a precise date for abiogenesis, LUCA or the origin of every lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study combines field context, carbon isotopes and graphite nanostructure to argue for biogenic carbon in 3.7 Ga Isua metasediments, while the synthesis separates the approximately 3.7 Ga biosignature boundary from a much less certain earlier habitability boundary. Metamorphism, preservation and competing abiotic interpretations limit the claim to a conservative evidence minimum.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Ohtomo et al. 2014 DOI 10.1038/ngeo2025 and Pearce et al. 2018 DOI 10.1089/ast.2017.1674; audited for 2026.08-static-v5-rc42
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究结合野外背景、碳同位素和石墨纳米结构，论证 37 亿年前 Isua 变沉积岩中的碳具有生物成因；综合研究则把约 37 亿年前的生物标志边界与更早且不确定性更大的宜居边界分开。变质作用、保存偏差和非生物替代解释使该主张只能作为保守的证据最低年龄。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
生命导航范围从 37 亿年前开始，这是由生物成因石墨证据支持的保守采样生物标志边界，并延续到 0 Ma 的现存地球生命；37 亿年前表示已有生命证据的最低年龄，不是生命自然发生、最后普遍共同祖先或每条谱系起源的精确日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
3.7 Ga is a conservative sampled biosignature boundary, not a measured date for abiogenesis or LUCA. The sparse, metamorphosed early rock record and alternative abiotic interpretations prevent a precise origin endpoint; 0 Ma denotes that life persists.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Carbon-isotope, geological and graphite-nanostructure analyses of 3.7 Ga Isua metasediments support a biogenic interpretation; an interdisciplinary review separates this biosignature boundary from the earlier and less certain habitability boundary.
<!-- /evo:text -->

## classification-support / groupingBasis

<!-- evo:text /records/classification-support/0/groupingBasis -->
Root-level navigation scaffold spanning major living and fossil groups.
<!-- /evo:text -->

## classification-support / conflicts

<!-- evo:text /records/classification-support/0/conflicts -->
The displayed 3.7 Ga boundary represents sampled biosignature evidence, not a resolved date for the origin of life or LUCA.
<!-- /evo:text -->
