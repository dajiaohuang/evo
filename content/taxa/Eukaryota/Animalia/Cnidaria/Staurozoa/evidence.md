---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Staurozoa
    commonName: Stalked Jellyfishes
    commonNameZh: 十字水母纲
    rank: class
    taxonId: txn:523122
    firstAppearance: 562
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Staurozoa
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: miranda-2016-staurozoa
      referenceLinks:
        - referenceId: miranda-2016-staurozoa
          relation: supports
          pages: e1951
          quoteLocator: Figures 3–8; Table 1; systematic revision
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Staurozoa
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
      reviewedAgainstReferenceVersion: miranda-2016-staurozoa locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: miranda-2016-staurozoa
          pages: Article e1951
          figure: Figures 3–8; Table 1
          quoteLocator: Extant systematic revision
        - relation: contradicts
          referenceId: miranda-2015-haootia
          pages: Article 20142396
          figure: Figure 1
          quoteLocator: Reassessment of the staurozoan comparison
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
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Staurozoa
      rangeKind: global-composite
      taxonomicConcept: Crown Staurozoa temporal range
      geographicScope: Temporal interval pending crown-specific fossil evidence
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
        - content/taxa/Eukaryota/Animalia/Cnidaria/Staurozoa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: miranda-2016-staurozoa
          locator: Article e1951; Figures 3–8; Table 1; extant systematic revision
        - referenceId: miranda-2015-haootia
          locator: Article 20142396; Figure 1; reassessment of the staurozoan comparison
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Staurozoa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A five-marker analysis sampling about half of known stalked-jellyfish species rejects the traditional Cleistocarpida–Eleutherocarpida split and proposes a phylogenetic Staurozoa classification.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The combined dataset and explicit revision strongly support the sampled classification, while unsampled species and homoplastic morphology bound completeness.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Staurozoa has no supported scalar crown range in the cited evidence: extant systematics does not date the crown and the Haootia comparison is contested, so the former 562–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Miranda et al. (2016) supports living staurozoan systematics, while Miranda et al. (2015) shows that Haootia is not a secure crown calibration. Low confidence prevents transfer of that contested fossil to the class boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
联合数据集与明确修订强力支持取样分类，但未取样物种和趋同形态限制了完整性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Miranda 等（2016）支持现生十字水母系统学，而 Miranda 等（2015）表明 Haootia 不能作为稳固冠群校准。低置信度避免把争议化石转移为纲级边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
五标记分析取样约一半已知十字水母物种，否定传统闭囊亚目—开囊亚目划分，并提出系统发育式十字水母分类。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Staurozoa 的单一冠群范围：现生系统学未测定冠群年代，Haootia 的比较归属亦有争议，因此旧有 562–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Extant systematics does not date the crown, and published reassessments do not make Haootia an uncontested staurozoan calibration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 562–0 Ma display is withheld rather than transferring a contested Haootia interpretation to crown Staurozoa.
<!-- /evo:text -->
