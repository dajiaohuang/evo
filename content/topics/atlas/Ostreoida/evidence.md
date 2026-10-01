---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ostreoida
    commonName: True Oysters
    commonNameZh: 牡蛎类
    rank: order
    taxonId: ""
    firstAppearance: 250
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Ostreoida
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
      reviewedAgainstReferenceVersion: matsumoto-2003-pteriomorphia
      referenceLinks:
        - referenceId: matsumoto-2003-pteriomorphia
          relation: supports
          pages: 429–440
          quoteLocator: Figures 1–3; COI sampling and phylogenetic results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Ostreoida
      rangeKind: global-composite
      taxonomicConcept: Ostreoida historical navigation route — numerical range withheld
      geographicScope: No numerical geographic-temporal range exposed
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
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: matsumoto-2003-pteriomorphia
          locator: 429–440; taxon sampling and COI sequence methods; Figures 1–3
      reviewStatus: automated-audit-passed
---

# Ostreoida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
COI sequences from sampled pteriomorph bivalves test oyster relationships and historical higher ranks; a single mitochondrial locus cannot settle every Ostreoida relationship or fossil endpoint.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The published sequence matrix supports the study-specific topology, while one locus and limited taxon sampling constrain generalization.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已发表序列矩阵支持研究特定拓扑，但单个位点和有限类群取样限制了推广。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
取样翼形亚纲双壳类的 COI 序列检验了牡蛎关系与历史高级阶元；单一线粒体位点不能解决所有牡蛎目关系或化石端点。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 250 Ma–present display is withdrawn because the cited one-locus analysis samples living Pteriomorphia and does not establish fossil endpoints for the historical Ostreoida concept. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The source is fit for the sampled molecular topology, not a global historical range.
<!-- /evo:text -->
