---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Amphibia
    commonName: Amphibians
    commonNameZh: 两栖动物
    rank: class
    taxonId: txn:36319
    firstAppearance: 341
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia
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
        - referenceId: milner-sequeira-1993-balanerpeton
          relation: supports
          pages: 331–361
          figure: Figures 1–24
          quoteLocator: Material, locality and horizon; systematic description of Balanerpeton; basal-temnospondyl relationships
        - referenceId: garza-2025-east-kirkton
          relation: supports
          pages: e0321714
          figure: Figures 5–6 and 8–9; Table 3
          quoteLocator: "Results: detrital-zircon U-Pb maximum depositional ages; Discussion of Units 82–83 and MDA limitations"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia
      rangeKind: global-composite
      taxonomicConcept: Amphibia
      geographicScope: Global or represented navigation composite
      olderMa: 341
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 3
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Amphibia/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: milner-sequeira-1993-balanerpeton
          locator: pp. 331–361; Figures 1–24; material, locality, horizon and systematic description
        - referenceId: garza-2025-east-kirkton
          locator: Figures 5–6 and 8–9; Table 3; U–Pb MDA results and limitations for Units 82–83
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Amphibia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The broad Amphibia navigation envelope uses the East Kirkton Balanerpeton sample and its 341 ± 3 Ma detrital-zircon maximum depositional-age constraint as the older evidence anchor and living amphibians at 0 Ma as the younger edge; the MDA is not a direct fossil date, global FAD, crown-Lissamphibia age or direct-ancestor claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
More than thirty described Balanerpeton skeletons support the temnospondyl occurrence, and a recent primary geochronology study constrains the relevant unit. Medium confidence preserves the maximum-depositional-age limitation, remaining stratigraphic alternatives and competing amphibian-root topologies.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Milner and Sequeira 1993 DOI 10.1017/S0263593300006155; Garza et al. 2025 DOI 10.1371/journal.pone.0321714; audited for 2026.08-static-v5-rc40
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
三十余件已描述 Balanerpeton 骨架支持离片椎类记录，近期一手年代学约束相关层位；中等置信度保留最大沉积年龄的限制、仍存的地层替代解释和两栖类根部拓扑竞争。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
广义两栖类导航范围以东柯克顿 Balanerpeton 样本及其 3.41±0.03 亿年前碎屑锆石最大沉积年龄约束作为老端证据锚点，以 0 Ma 的现生两栖类作为年轻端；最大沉积年龄不是化石直接测年、全球首现、现生两栖冠群年龄或直系祖先主张。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 341 ± 3 Ma value is a detrital-zircon maximum depositional age for the East Kirkton unit containing Balanerpeton, not a direct fossil date or crown-Lissamphibia age.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The described Balanerpeton sample and primary U–Pb MDA study anchor the broad amphibian navigation display while preserving competing root topologies and stratigraphic uncertainty.
<!-- /evo:text -->
