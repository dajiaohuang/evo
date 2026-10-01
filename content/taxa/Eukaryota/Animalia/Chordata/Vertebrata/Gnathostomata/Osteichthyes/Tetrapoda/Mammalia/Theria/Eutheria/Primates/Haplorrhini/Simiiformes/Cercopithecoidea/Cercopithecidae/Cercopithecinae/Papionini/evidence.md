---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Papionini
    commonName: Papionins
    commonNameZh: 狒狒族
    rank: tribe
    taxonId: ""
    colUsageId: L4C
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
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini
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
          quoteLocator: Accepted parent chain for species usage 3WWP2; tribe usage L4C immediately follows subfamily usage JB3.
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini
      rangeKind: global-composite
      taxonomicConcept: Papionini accepted usage L4C; numerical temporal range withheld
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
          locator: COL26.8 dataset 316115; accepted usage L4C and parent classification (identity/classification only)
      reviewStatus: automated-audit-passed
---

# Papionini

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The COL26.8 accepted parent chain for Macaca radiata usage 3WWP2 places Papionini (tribe usage L4C) immediately below Cercopithecinae (subfamily usage JB3); this records checklist placement, not a phylogenetic result.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Pinned COL26.8 usage L4C directly establishes Papionini (tribe) at this point in the accepted checklist path. This claim describes that dataset's classification and does not assert universal consensus or phylogenetic relationships.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
固定版 COL26.8 用名 L4C 直接支持 Papionini（tribe）在该已接受清单路径中的位置；此声明只描述该数据集的分类，不推断普遍共识或系统发育关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Papionini（族用名 L4C）置于 Cercopithecinae（亚科用名 JB3）之下；这记录的是清单分类位置，不是系统发育结果。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; no audited fossil-range endpoint is asserted for this selected living-taxon route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The pinned COL26.8 checklist supports accepted identity and classification only; the selected local roadside study does not establish a fossil range or a wild-distribution inventory.
<!-- /evo:text -->
