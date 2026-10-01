---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Scyphozoa
    commonName: True Jellyfishes
    commonNameZh: 钵水母纲
    rank: class
    taxonId: txn:4535
    firstAppearance: 505
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Scyphozoa
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
      reviewedAgainstReferenceVersion: bayha-2010-scyphozoa
      referenceLinks:
        - referenceId: bayha-2010-scyphozoa
          relation: supports
          pages: 436–455
          quoteLocator: Figures 1–4; family sampling; phylogenetic results
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Scyphozoa
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bayha-2010-scyphozoa locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: bayha-2010-scyphozoa
          pages: 436–455
          figure: Figures 1–4
          quoteLocator: Family sampling and phylogenetic results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Scyphozoa
      rangeKind: global-composite
      taxonomicConcept: Crown Scyphozoa temporal range
      geographicScope: Temporal interval pending diagnostic crown fossil evidence
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
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Cnidaria/Scyphozoa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bayha-2010-scyphozoa
          locator: 436–455; Figures 1–4; family sampling and phylogenetic results
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Scyphozoa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
An 18S–28S analysis sampling all 19 then-recognized scyphozoan families supports several clades but finds other families or suborders unresolved or non-monophyletic.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Complete family-level sampling for the study's taxonomy is strong, while two loci and unresolved nodes require moderate confidence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Scyphozoa has no supported scalar crown range in the cited evidence: the living-taxon phylogeny does not establish a diagnostic 505 Ma crown scyphozoan, so the former 505–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Bayha et al. (2010) supports relationships among sampled living Scyphozoa, not a Cambrian fossil assignment. Low confidence keeps the unverified class-level endpoint unpublished.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
按研究所用分类实现科级完整取样是一项优势，但仅有两个位点且若干节点未解析，因此采用中等置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Bayha 等（2010）支持所采样现生钵水母的关系，而非寒武纪化石归属。低置信度使未经验证的纲级端点保持不发布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项覆盖当时认可的全部 19 个钵水母科的 18S–28S 分析支持若干支系，但另一些科或亚目仍未解析或并非单系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Scyphozoa 的单一冠群范围：现生类群系统树未确立可鉴定的 505 Ma 冠群钵水母，因此旧有 505–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited analysis samples living scyphozoans and does not validate assignment of Cambrian medusae to the crown class.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 505–0 Ma display is withheld rather than converting broad medusa resemblance into a crown-Scyphozoa FAD.
<!-- /evo:text -->
