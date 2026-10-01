---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pan
    commonName: Chimpanzees
    commonNameZh: 黑猩猩属
    rank: genus
    taxonId: ""
    colUsageId: 6D2G
    colDatasetId: "2144"
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    firstAppearance: 20
    lastAppearance: 0
    rangeEvidenceLevel: withheld-no-range-evidence
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Pan
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas primary-source audit
      reviewedAt: 2026-09-27
      reviewedAgainstReferenceVersion: COL26.8 dataset 316115, accepted usage 4C92G and parent usage 6D2G; cross-checked against the raw dossier on 2026-09-27
      referenceLinks:
        - referenceId: col-2026-checklistbank-316115
          relation: supports
          pages: Accepted usage 4C92G; accepted parent usage 6D2G, Pan
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Pan
      rangeKind: global-composite
      taxonomicConcept: pan accepted COL26.8 usage; numerical temporal and geographic range withheld
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
        - referenceId: col-2026-checklistbank-316115
          locator: COL26.8 release dataset 316115; accepted usage 6D2G (identity/classification only)
      reviewStatus: automated-audit-passed
---

# Pan

## claims / statement

<!-- evo:text /records/claims/0/statement -->
COL26.8 accepted usage 4C92G places Pan troglodytes in Pan (parent usage 6D2G). This records the checklist classification only.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The accepted COL26.8 species record carries the Pan parent usage 6D2G. This is one release-specific classification statement, not a claim of universal consensus or phylogeny.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
COL26.8 接受种级记录包含 Pan 父级用名 6D2G。本陈述仅限该版本的分类记录，不表示普遍共识或系统发育关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
COL26.8 接受用名 4C92G 将 Pan troglodytes 置于 Pan 属中（父级用名 6D2G）。此陈述仅记录该清单版本中的分类位置。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; accepted checklist identity and a local ecology study do not establish a fossil range or a current wild-distribution inventory.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
COL26.8 supports accepted identity and classification only; the selected Bossou community study does not establish fossil range or species-wide distribution.
<!-- /evo:text -->
