---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Agnatha
    commonName: Jawless Fish
    commonNameZh: 无颌鱼类
    rank: infraphylum
    taxonId: ""
    firstAppearance: 520
    lastAppearance: 0
    extinct: false
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha
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
      reviewedAgainstReferenceVersion: Shu et al. 1999 DOI 10.1038/46965; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: shu-1999-cambrian-vertebrates
          relation: supports
          pages: 42–46
          figure: Figures 1–5
          quoteLocator: Systematic descriptions of Myllokunmingia and Haikouichthys; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Agnatha
      rangeKind: global-composite
      taxonomicConcept: Agnatha
      geographicScope: Global or represented navigation composite
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
        - content/topics/atlas/Agnatha/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: shu-1999-cambrian-vertebrates
          locator: pp. 42–46; Figures 1–5; systematic descriptions and phylogenetic analysis
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Agnatha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The atlas begins the historical Agnatha navigation grade at a rounded 520 Ma to include the Chengjiang Myllokunmingia and Haikouichthys specimens described as agnathan-grade vertebrates; 0 Ma reflects living cyclostomes in the display group, not a monophyletic crown range, global first appearance or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study names and figures both Cambrian specimens and tests their placement, but soft-tissue interpretation and basal-vertebrate topology remain debated, while Agnatha is explicitly a historical grade. Medium confidence applies only to this bounded navigation envelope.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究命名、图示并分析两件寒武纪标本，但软组织判读和基干脊椎动物拓扑仍有争议，且 Agnatha 在本体中明确是历史等级；中等置信度只适用于这一有界导航范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
图谱把历史性的无颌类导航等级从约 5.20 亿年前开始，以纳入澄江生物群中被描述为无颌脊椎动物等级的 Myllokunmingia 与 Haikouichthys 标本；0 Ma 只表示该显示组包含现生圆口类，不代表单系冠群范围、全球首现或直系祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 520 Ma older edge is rounded from the Chengjiang sample; 0 Ma reflects living cyclostomes inside a historical navigation grade, not a monophyletic crown range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Myllokunmingia and Haikouichthys provide a primary-study Cambrian anchor for the historical agnathan-grade display; the envelope is not a global FAD or ancestry claim.
<!-- /evo:text -->
