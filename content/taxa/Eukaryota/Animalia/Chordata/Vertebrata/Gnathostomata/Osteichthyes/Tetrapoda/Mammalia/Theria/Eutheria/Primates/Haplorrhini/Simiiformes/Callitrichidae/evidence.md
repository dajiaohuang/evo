---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Callitrichidae
    commonName: Marmosets and Tamarins
    commonNameZh: 狨科
    rank: family
    taxonId: ""
    colUsageId: 7KR
    colDatasetId: "2144"
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: taxonomic-parent
    entityKind: taxon
    contentLevel: registry-only
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas source audit
      reviewedAt: 2026-09-25
      reviewedAgainstReferenceVersion: COL26.8 ChecklistBank dataset 316115; accepted usage 697NS and complete parent chain checked 2026-09-25
      referenceLinks:
        - referenceId: col-2026-checklistbank-316115
          relation: supports
          quoteLocator: Accepted parent chain for usage 697NS; family usage 7KR Callitrichidae immediately precedes genus usage 3FM4 Callithrix.
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Callitrichidae
      rangeKind: global-composite
      taxonomicConcept: Callitrichidae accepted route; numerical temporal range withheld
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
          locator: COL26.8 release dataset 316115; accepted ancestor path recorded for usage 697NS (identity/classification only)
      reviewStatus: automated-audit-passed
---

# Callitrichidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In the COL26.8 accepted parent chain for Callithrix jacchus usage 697NS, Callitrichidae (usage 7KR) is the family immediately above Callithrix (usage 3FM4); this records checklist placement, not a phylogenetic result.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The pinned COL26.8 record gives the accepted usage and complete parent path needed to locate Callitrichidae in this specific common-marmoset lineage. This claim does not resolve the full circumscription of Callitrichidae or phylogeny beyond that checklist path.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
固定版本的 COL26.8 记录了普通狨这一特定分类路径中的接受用名及完整父级链。本主张不扩展到狨科的完整界定，也不超出清单路径声称系统发育关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在 COL26.8 对 Callithrix jacchus 用名 697NS 的接受分类路径中，狨科（Callitrichidae，用名 7KR）是狨属（Callithrix，用名 3FM4）的直接上级科；这记录的是清单分类位置，不是系统发育结果。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; no fossil-range search or numerical endpoint is asserted for this registry-only route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The pinned COL26.8 checklist supports accepted identity and classification only; a separate fossil-range audit has not been completed for Callitrichidae.
<!-- /evo:text -->
