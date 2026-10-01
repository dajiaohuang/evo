---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Adapiformes
    commonName: Adapiforms
    commonNameZh: 兔猴型下目
    rank: infraorder
    taxonId: txn:40748
    firstAppearance: 56
    lastAppearance: 34
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: silcox-lopez-torres-2017-primate-origins concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: silcox-lopez-torres-2017-primate-origins
          pages: 113–137
          quoteLocator: Early euprimates; Adapoidea and competing crown-primate hypotheses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: silcox-lopez-torres-2017-primate-origins @ DOI 10.1146/annurev-earth-063016-015637
      referenceLinks:
        - relation: supports
          referenceId: silcox-lopez-torres-2017-primate-origins
          pages: 113–137
          quoteLocator: Early euprimates; Adapoidea and competing crown-primate hypotheses
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes
      rangeKind: global-composite
      taxonomicConcept: adapiformes — source-bounded sample window
      geographicScope: Eocene adapiform record synthesized by Silcox and López-Torres
      olderMa: 56
      youngerMa: 34
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: silcox-lopez-torres-2017-primate-origins
          locator: 113–137; Early euprimates; Adapoidea and competing crown-primate hypotheses
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Adapiformes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Adapiformes is reviewed among early euprimate hypotheses using dental, cranial and postcranial evidence, but its relationship to living strepsirrhines and anthropoids varies among analyses; it is not presented as one direct ancestor lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The systematic review explicitly compares competing fossil placements. The statement keeps the group-level claim taxonomic rather than temporal.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
adapiformes is displayed at 56–34 Ma only as the review's sampled Eocene record, not an ancestor chain or exact global endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
adapiformes uses Silcox, M.T.; López-Torres, S. (2017) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Eocene adapiform record synthesized by Silcox and López-Torres; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统综述明确比较相互竞争的化石位置；表述把群级主张限定为分类问题，而非时间问题。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
adapiformes 采用 Silcox, M.T.; López-Torres, S.（2017）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Eocene adapiform record synthesized by Silcox and López-Torres；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
综述依据牙齿、头骨与头后证据讨论早期真灵长类假说中的 Adapiformes，但其与现生湿鼻类和类人猿类的关系随分析而变；它不被呈现为单一直接祖先谱系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
adapiformes 仅以 56–34 Ma 展示为综述采样的始新世记录，而非祖先链或精确全球端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's sampled Eocene record, not an ancestor chain or exact global endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Major Questions in the Study of Primate Origins directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
