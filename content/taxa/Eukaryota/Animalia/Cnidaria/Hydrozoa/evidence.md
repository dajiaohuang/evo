---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hydrozoa
    commonName: Hydroids and hydromedusae
    commonNameZh: 水螅纲
    rank: class
    taxonId: txn:4596
    firstAppearance: 520
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Hydrozoa
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: cartwright-nawrocki-2010-hydrozoa
      referenceLinks:
        - referenceId: cartwright-nawrocki-2010-hydrozoa
          relation: supports
          pages: 456–472
          quoteLocator: Figures 1–4; character-evolution synthesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Hydrozoa
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
      reviewedAgainstReferenceVersion: cartwright-nawrocki-2010-hydrozoa locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: cartwright-nawrocki-2010-hydrozoa
          pages: 456–472
          figure: Figures 1–4
          quoteLocator: Hydrozoan character-evolution synthesis
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
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Hydrozoa
      rangeKind: global-composite
      taxonomicConcept: Crown Hydrozoa temporal range
      geographicScope: Temporal interval pending diagnostic fossil evidence
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
        - content/taxa/Eukaryota/Animalia/Cnidaria/Hydrozoa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: cartwright-nawrocki-2010-hydrozoa
          locator: 456–472; Figures 1–4; hydrozoan character-evolution synthesis
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Hydrozoa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A synthesis maps colony form, life cycle and medusa characters onto published hydrozoan phylogenies; the inferred gains and losses are comparative reconstructions rather than directly observed ancestral states.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple character systems support the comparative framework, while dependence on published trees and heterogeneous life cycles limits causal certainty.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Hydrozoa has no supported scalar temporal range in the cited evidence: the character-evolution review does not document a diagnostic 520 Ma hydrozoan fossil or crown boundary, so the former 520–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Cartwright and Nawrocki (2010) supports hydrozoan character interpretation, not a dated fossil endpoint. Low confidence records the missing specimen-level basis for 520 Ma.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多类性状系统支持比较框架，但对既有系统树的依赖和异质生活史限制了因果确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Cartwright 与 Nawrocki（2010）支持水螅纲性状解释，而非有年代约束的化石端点。低置信度表示 520 Ma 缺少标本级依据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项综合把群体形态、生活史和水母体性状映射到已发表的水螅纲系统树上；推断的获得与丧失是比较重建，并非直接观察的祖先状态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Hydrozoa 的单一时间范围：性状演化综述未记录可鉴定的 520 Ma 水螅纲化石或冠群边界，因此旧有 520–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited character-evolution review does not identify a diagnostic 520 Ma hydrozoan specimen or crown boundary.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 520–0 Ma display is withheld rather than deriving a fossil FAD from a morphology and character-evolution synthesis.
<!-- /evo:text -->
