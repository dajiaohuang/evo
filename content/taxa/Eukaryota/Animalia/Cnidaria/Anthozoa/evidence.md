---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Anthozoa
    commonName: Corals & Anemones
    commonNameZh: 珊瑚与海葵
    rank: class
    taxonId: txn:4742
    firstAppearance: 540
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: zapata-2015-cnidaria
      referenceLinks:
        - referenceId: zapata-2015-cnidaria
          relation: supports
          pages: e0139068
          quoteLocator: Figures 1–3; phylogenomic matrices and topology tests
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa
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
      reviewedAgainstReferenceVersion: zapata-2015-cnidaria locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: zapata-2015-cnidaria
          pages: Article e0139068
          figure: Figures 1–3
          quoteLocator: Phylogenomic matrices and topology tests
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
    - entityPath: content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa
      rangeKind: global-composite
      taxonomicConcept: Crown Anthozoa temporal range
      geographicScope: Crown interval pending fossil or time-calibrated range evidence
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
        - content/taxa/Eukaryota/Animalia/Cnidaria/Anthozoa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: zapata-2015-cnidaria
          locator: Article e0139068; Figures 1–3; phylogenomic matrices and topology tests
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Anthozoa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phylogenomic matrices sampling major cnidarian lineages recover Anthozoa as one of the two principal cnidarian branches; this sampled topology does not specify an anthozoan ancestor or fossil first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple transcriptomic matrices support the principal split, while taxon and model choices still bound internal and root-level inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Anthozoa has no supported scalar temporal range in the cited evidence: the phylogenomic analysis tests relationships among sampled living cnidarians but does not date a crown-Anthozoa fossil boundary, so the former 540–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Zapata et al. (2015) is fit for topology, not a temporal range. Low confidence records that no crown-specific fossil or calibrated boundary was located for the former Anthozoa display.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多个转录组矩阵支持主要分裂，但类群与模型选择仍限制内部及根部推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Zapata 等（2015）适用于拓扑关系，而不适用于时间范围。低置信度表示尚未找到能支持旧 Anthozoa 展示的冠群专属化石或校准边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
覆盖主要刺胞动物支系的系统基因组矩阵把珊瑚虫纲恢复为刺胞动物两大主支之一；该取样拓扑不指定珊瑚虫祖先或化石首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Anthozoa 的单一时间范围：系统基因组研究检验了所采样现生刺胞动物的关系，但未测定冠群珊瑚纲的化石边界，因此旧有 540–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited phylogenomic topology does not provide a fossil occurrence or a time-calibrated crown-Anthozoa boundary.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 540–0 Ma display is withheld rather than converting an extant topology or a stem-medusozoan fossil into an anthozoan FAD.
<!-- /evo:text -->
