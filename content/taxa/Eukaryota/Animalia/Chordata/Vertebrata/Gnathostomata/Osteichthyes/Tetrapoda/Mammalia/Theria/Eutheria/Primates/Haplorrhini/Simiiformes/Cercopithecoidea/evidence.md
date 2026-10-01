---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cercopithecoidea
    commonName: Old World monkeys
    commonNameZh: 旧世界猴总科
    rank: superfamily
    taxonId: ""
    colUsageId: 4X9
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
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea
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
      reviewedAt: 2026-09-26
      reviewedAgainstReferenceVersion: COL26.8 ChecklistBank dataset 316115; accepted usage 3WWP2 and parent chain checked 2026-09-26
      referenceLinks:
        - referenceId: col-2026-checklistbank-316115
          relation: supports
          quoteLocator: Accepted parent chain for species usage 3WWP2; superfamily usage 4X9 immediately follows infraorder usage 4PM.
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea
      rangeKind: global-composite
      taxonomicConcept: Cercopithecoidea accepted usage 4X9; numerical temporal range withheld
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
          locator: COL26.8 dataset 316115; accepted usage 4X9 and parent classification (identity/classification only)
      reviewStatus: automated-audit-passed
---

# Cercopithecoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The COL26.8 accepted parent chain for Macaca radiata usage 3WWP2 places Cercopithecoidea (superfamily usage 4X9) immediately below Simiiformes (infraorder usage 4PM); this records checklist placement, not a phylogenetic result.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Pinned COL26.8 usage 4X9 directly establishes Cercopithecoidea (superfamily) at this point in the accepted checklist path. This claim describes that dataset's classification and does not assert universal consensus or phylogenetic relationships.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
固定版 COL26.8 用名 4X9 直接支持 Cercopithecoidea（superfamily）在该已接受清单路径中的位置；此声明只描述该数据集的分类，不推断普遍共识或系统发育关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Cercopithecoidea（总科用名 4X9）置于 Simiiformes（下目用名 4PM）之下；这记录的是清单分类位置，不是系统发育结果。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; no audited fossil-range endpoint is asserted for this selected living-taxon route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The pinned COL26.8 checklist supports accepted identity and classification only; the selected local roadside study does not establish a fossil range or a wild-distribution inventory.
<!-- /evo:text -->
