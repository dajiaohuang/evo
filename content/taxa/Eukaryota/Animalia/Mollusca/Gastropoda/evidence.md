---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Gastropoda
    commonName: Snails & Slugs
    commonNameZh: 蜗牛与蛞蝓
    rank: class
    taxonId: txn:8304
    firstAppearance: 510
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Gastropoda
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
      reviewedAgainstReferenceVersion: zapata-2014-gastropod-phylogenomics
      referenceLinks:
        - referenceId: zapata-2014-gastropod-phylogenomics
          relation: supports
          pages: "20141739"
          quoteLocator: Figures 1–3; matrix-comparison and topology tests
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Gastropoda
      rangeKind: global-composite
      taxonomicConcept: Gastropoda — numerical range withheld
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
        - referenceId: zapata-2014-gastropod-phylogenomics
          locator: Article 20141739; pp. 2–3, Taxon sampling; Figure 2 matrices; Figure 3 topology
      reviewStatus: automated-audit-passed
---

# Gastropoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Phylogenomic analyses recover major sampled gastropod branches and reject Orthogastropoda; several alternative deep relationships remain sensitive to matrix construction and model choice.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome-scale matrices strongly reject the named historical hypothesis, while conflicting deep nodes keep the broader topology bounded.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组尺度矩阵强力否定该历史假说，但相互冲突的深层节点使更广拓扑仍需限定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统基因组分析恢复了主要取样腹足类支系并否定 Orthogastropoda；若干替代深层关系仍对矩阵构建和模型选择敏感。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 510 Ma–present display is withdrawn because the 56-taxon transcriptome and genome sample supplies topology but no audited fossil occurrence endpoints. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Living phylogenomic sampling cannot be silently converted into a fossil FAD or a clade duration.
<!-- /evo:text -->
