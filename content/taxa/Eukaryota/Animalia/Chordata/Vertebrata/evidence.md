---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Vertebrata
    commonName: Vertebrates
    commonNameZh: 脊椎动物
    rank: subphylum
    taxonId: txn:67149
    firstAppearance: 520
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata
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
      reviewedAgainstReferenceVersion: shu-1999-chengjiang-vertebrates primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: shu-1999-chengjiang-vertebrates
          relation: supports
          pages: 42–46
          figure: Figures 1–5
          quoteLocator: Descriptions of Myllokunmingia and Haikouichthys; phylogenetic analysis; Supplementary Information
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata
      rangeKind: global-composite
      taxonomicConcept: Vertebrata navigation span anchored by Chengjiang fossil material
      geographicScope: Chengjiang Lagerstätte, Yunnan, China; living global continuation
      olderMa: 520
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: shu-1999-chengjiang-vertebrates
          locator: pp. 42–46; Figures 1–5; descriptions, phylogenetic analysis and Supplementary Information
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Vertebrata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 520–0 Ma Vertebrata route uses a rounded Cambrian navigation ceiling, while Lower Cambrian Chengjiang Myllokunmingia and Haikouichthys material at approximately 518 Ma supplies its direct fossil anchor; neither value dates crown Vertebrata or establishes a global FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary description figures the named fossils and reports the morphology matrix. The 520 Ma ceiling keeps nested Cambrian routes navigable, whereas the direct fossil evidence is approximately 518 Ma; soft-tissue interpretation and basal placement remain sample- and matrix-bounded.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究给出具名化石图版及形态矩阵。5.20 亿年上限用于容纳嵌套的寒武纪导航路线，直接化石证据则约为 5.18 亿年；软组织解释和基干位置仍受样本与矩阵约束。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
脊椎动物 5.20 亿年至今的路线采用取整后的寒武纪导航上限，而约 5.18 亿年前的澄江 Myllokunmingia 与 Haikouichthys 材料构成直接化石锚点；两者都不等于脊椎动物冠群年代或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
520 Ma is a rounded Cambrian navigation ceiling; the directly described Chengjiang vertebrate material is approximately 518 Ma and does not define a crown node or global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Myllokunmingia and Haikouichthys specimens and a sampled morphology matrix provide the approximately 518 Ma fossil anchor; the older display ceiling preserves nested Cambrian navigation and living vertebrates extend the route to the present.
<!-- /evo:text -->
