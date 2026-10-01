---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Octocorallia
    commonName: Octocorals
    commonNameZh: 八放珊瑚
    rank: subclass
    taxonId: txn:61472
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Octocorallia
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
      reviewedAgainstReferenceVersion: mcfadden-2006-octocorallia
      referenceLinks:
        - referenceId: mcfadden-2006-octocorallia
          relation: supports
          pages: 513–527
          quoteLocator: Figures 1–4; taxon sampling and phylogenetic results
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Octocorallia
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
      reviewedAgainstReferenceVersion: mcfadden-2006-octocorallia locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: mcfadden-2006-octocorallia
          pages: 513–527
          figure: Figures 1–4
          quoteLocator: Living-taxon sampling and phylogenetic results
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
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Octocorallia
      rangeKind: global-composite
      taxonomicConcept: Crown Octocorallia temporal range
      geographicScope: Temporal interval pending fossil or calibrated crown evidence
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
        - content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/Octocorallia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: mcfadden-2006-octocorallia
          locator: 513–527; Figures 1–4; living-taxon sampling and phylogenetic results
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Octocorallia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mitochondrial protein-coding sequences from 103 genera and 28 families test octocoral relationships, but weak deep resolution leaves the root and several higher groups unsettled.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Wide generic sampling supports many local clades, while limited mitochondrial variation constrains deeper topology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Octocorallia has no supported scalar crown range in the cited evidence: the mitochondrial phylogeny samples living octocorals but supplies no fossil or calibrated crown boundary, so the former 0–0 placeholder is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
McFadden et al. (2006) directly supports extant octocoral topology, not an origin date. Low confidence records the absence of range-fit evidence for numerical endpoints.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
广泛属级取样支持许多局部支系，但有限的线粒体变异限制了深层拓扑。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
McFadden 等（2006）直接支持现生八放珊瑚拓扑，而非起源日期。低置信度表示数值端点缺少适合范围用途的证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
来自 103 个属、28 个科的线粒体蛋白编码序列检验了八放珊瑚关系，但深层解析度较弱，根部及若干高级类群仍未定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Octocorallia 的单一冠群范围：线粒体系统树采样了现生八放珊瑚，却未提供化石或校准冠群边界，因此旧有 0–0 占位值被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited mitochondrial phylogeny samples living octocorals but does not date a fossil first appearance or crown boundary.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The 0–0 placeholder is withheld because extant topology alone is not a temporal range.
<!-- /evo:text -->
