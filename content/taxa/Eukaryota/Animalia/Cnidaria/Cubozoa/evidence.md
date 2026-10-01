---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cubozoa
    commonName: Box Jellyfishes
    commonNameZh: 箱水母纲
    rank: class
    taxonId: txn:92033
    firstAppearance: 505
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Cubozoa
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
      reviewedAgainstReferenceVersion: bentlage-2010-cubozoa
      referenceLinks:
        - referenceId: bentlage-2010-cubozoa
          relation: supports
          pages: 493–501
          quoteLocator: Figures 1–3; phylogenetic analyses and character discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Cubozoa
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
      reviewedAgainstReferenceVersion: bentlage-2010-cubozoa locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: bentlage-2010-cubozoa
          pages: 493–501
          figure: Figures 1–3
          quoteLocator: Extant phylogenetic analyses and character discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Cubozoa
      rangeKind: global-composite
      taxonomicConcept: Crown Cubozoa temporal range
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
        - content/taxa/Eukaryota/Animalia/Cnidaria/Cubozoa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bentlage-2010-cubozoa
          locator: 493–501; Figures 1–3; extant sampling, phylogenetic analyses and character discussion
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Cubozoa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A multigene analysis tests relationships among sampled box jellyfishes and rejects some morphology-based groupings; it does not date Cubozoa or make sampled species direct ancestors.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Several markers and explicit taxon sampling support the recovered clades, while sparse diversity sampling leaves deeper history incomplete.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Cubozoa has no supported scalar crown range in the cited evidence: the phylogeny samples living box jellies but does not establish a diagnostic 505 Ma crown fossil, so the former 505–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Bentlage et al. (2010) directly supports extant cubozoan relationships, not a Cambrian temporal boundary. Low confidence records that the former older endpoint lacks crown-specific fossil support.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多个标记和明确类群取样支持所得支系，但有限多样性取样使深层历史仍不完整。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Bentlage 等（2010）直接支持现生箱水母关系，而非寒武纪时间边界。低置信度表示旧有较老端点缺少冠群专属化石支持。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
多基因分析检验了取样箱水母之间的关系并否定若干形态分类；它不为箱水母纲定年，也不把取样物种当作直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Cubozoa 的单一冠群范围：系统树采样了现生箱水母，却未确立可鉴定的 505 Ma 冠群化石，因此旧有 505–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited analysis samples living cubozoans and cannot validate the former 505 Ma fossil endpoint.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 505–0 Ma display is withheld because extant topology and tentative stem comparisons do not establish a crown-Cubozoa FAD.
<!-- /evo:text -->
