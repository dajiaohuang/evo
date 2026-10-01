---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Lepidodendrales
    commonName: Scale Trees
    commonNameZh: 鳞木
    rank: order
    taxonId: txn:157277
    firstAppearance: 359
    lastAppearance: 299
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Lycophyta/Lepidodendrales
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
      reviewedAgainstReferenceVersion: bateman-1992-arborescent-lycopsids
      referenceLinks:
        - referenceId: bateman-1992-arborescent-lycopsids
          relation: supports
          pages: 500–559
          quoteLocator: Cladistic analysis; character matrix; strict-consensus trees
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Lycophyta/Lepidodendrales
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
      reviewedAgainstReferenceVersion: bateman-1992-arborescent-lycopsids locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: bateman-1992-arborescent-lycopsids
          pages: 79:500–559
          figure: Character matrix and strict-consensus trees
          quoteLocator: Sampled arborescent lycopsids and cladistic scope
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
    - entityPath: content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Lycophyta/Lepidodendrales
      rangeKind: global-composite
      taxonomicConcept: Lepidodendron / Lepidodendrales navigation concept temporal range
      geographicScope: Interval pending resolution of genus-versus-order concept and range evidence
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
        - content/taxa/Eukaryota/Plantae/Viridiplantae/Streptophyta/Embryophyta/Lycophyta/Lepidodendrales/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bateman-1992-arborescent-lycopsids
          locator: 500–559; cladistic matrix, sampled arborescent lycopsids and strict-consensus trees
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Lepidodendrales

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A morphology matrix of anatomically preserved Carboniferous Euramerican arborescent lycopsids tests relationships among Lepidodendrales; it neither identifies a direct ancestor nor establishes the order's global first or last appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The published character matrix directly supports the sampled topology, while preservation, geographic restriction and extinct-taxon sampling limit any order-wide chronology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Lepidodendron has no supported scalar temporal range here because the navigation record mixes a genus-level ID with a broader Lepidodendrales/arborescent-lycopsid concept, and the cited Carboniferous matrix does not define global endpoints; the former 359–299 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Bateman et al. (1992) samples anatomically preserved arborescent lycopsids for cladistic analysis, but the entity concept is not aligned to one global genus range. Low confidence records that unresolved scope mismatch.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已发表的性状矩阵直接支持取样拓扑，但保存状况、地域限制与灭绝类群取样使其不能外推为整个目的年代范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Bateman 等（1992）为支序分析采样了解剖保存的树状石松，但实体概念并未对齐到单一全球属级范围。低置信度记录这一尚未解决的范围错配。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
石炭纪欧美大陆木本石松类的解剖形态矩阵检验了鳞木目内部关系；它既未识别直接祖先，也未确定该目的全球首现或末现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Lepidodendron 在此不发布单一时间范围，因为导航记录混用了属级 ID 与更宽泛的鳞木目／树状石松概念，而所引石炭纪矩阵未定义全球端点；旧有 359–299 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The entity ID names a genus while the navigation scientific name and cited matrix concern broader arborescent lycopsids; endpoints cannot be assigned without concept reconciliation.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 359–299 Ma display is withheld because the sampled Carboniferous matrix does not define a global range for a stable Lepidodendron concept.
<!-- /evo:text -->
