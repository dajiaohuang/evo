---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hexacorallia
    commonName: Hexacorals
    commonNameZh: 六放珊瑚
    rank: subclass
    taxonId: ""
    firstAppearance: 425
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Hexacorallia
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: daly-2007-cnidaria-review
      referenceLinks:
        - referenceId: daly-2007-cnidaria-review
          relation: supports
          pages: 127–182
          quoteLocator: Hexacorallia classification and phylogenetic-pattern sections
    - subject:
        kind: taxon
        path: content/topics/atlas/Hexacorallia
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
      reviewedAgainstReferenceVersion: daly-2007-cnidaria-review locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: daly-2007-cnidaria-review
          pages: 127–182
          figure: Hexacorallia classification
          quoteLocator: Classification and phylogenetic-pattern sections
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
    - entityPath: content/topics/atlas/Hexacorallia
      rangeKind: global-composite
      taxonomicConcept: Crown Hexacorallia temporal range
      geographicScope: Temporal interval pending crown-specific range evidence
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
        - content/topics/atlas/Hexacorallia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: daly-2007-cnidaria-review
          locator: 127–182; Hexacorallia classification and phylogenetic-pattern sections
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Hexacorallia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A systematic synthesis recognizes Hexacorallia within Anthozoa while reviewing competing internal relationships and uneven diversity knowledge; it supplies a classification framework, not a precise origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Broad taxonomic coverage supports the framework, but the review explicitly retains unresolved phylogenetic questions.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Hexacorallia has no supported scalar crown range in the cited evidence: the classification review does not justify transferring a 425 Ma Paleozoic coral occurrence to crown Hexacorallia, so the former 425–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Daly et al. (2007) supports classification and comparative morphology, not a crown-specific temporal boundary. Low confidence blocks grade-to-crown age transfer.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
广泛分类覆盖支持这一框架，但综述明确保留了未解决的系统关系问题。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Daly 等（2007）支持分类与比较形态，而不支持冠群专属时间边界。低置信度阻止把形态级年代转移到冠群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
系统综述把六放珊瑚识别为珊瑚虫纲内部类群，同时回顾相互竞争的内部关系和不均衡的多样性知识；它提供分类框架，而非精确起源年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Hexacorallia 的单一冠群范围：分类综述不足以把 425 Ma 古生代珊瑚记录转移为冠群六放珊瑚，因此旧有 425–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
A classification review cannot transfer the age of Paleozoic coral grades to crown Hexacorallia.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 425–0 Ma display is withheld because taxonomy and morphological comparison do not establish a crown first appearance.
<!-- /evo:text -->
