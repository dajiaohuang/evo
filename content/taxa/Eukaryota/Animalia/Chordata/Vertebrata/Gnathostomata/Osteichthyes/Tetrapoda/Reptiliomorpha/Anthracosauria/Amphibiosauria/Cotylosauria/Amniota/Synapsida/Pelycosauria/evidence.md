---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pelycosauria
    commonName: Pelycosaurs
    commonNameZh: 盘龙类
    rank: order
    taxonId: txn:38883
    firstAppearance: 308
    lastAppearance: 260
    extinct: true
    entityKind: historical-grade
    contentLevel: dossier
    parentRelationshipKind: historical-grade-membership
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Pelycosauria
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
      reviewedAgainstReferenceVersion: brocklehurst-2013-early-synapsids concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: brocklehurst-2013-early-synapsids
          pages: 470–490
          quoteLocator: Abstract; Materials and methods; discussion of pelycosaurian-grade synapsids
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Pelycosauria
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
      reviewedAgainstReferenceVersion: brocklehurst-2013-early-synapsids @ DOI 10.1666/12049
      referenceLinks:
        - relation: supports
          referenceId: brocklehurst-2013-early-synapsids
          pages: 470–490
          quoteLocator: Abstract; Materials and methods; discussion of pelycosaurian-grade synapsids
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Pelycosauria
      rangeKind: global-composite
      taxonomicConcept: Pelycosauria — source-bounded sample window
      geographicScope: Early-synapsid family record sampled by Brocklehurst et al.
      olderMa: 308
      youngerMa: 260
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Pelycosauria/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: brocklehurst-2013-early-synapsids
          locator: 470–490; Abstract; Materials and methods; discussion of pelycosaurian-grade synapsids
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Pelycosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Brocklehurst and colleagues explicitly analyse “pelycosaurian-grade” synapsids as an early, non-crown sampling grade; the atlas therefore retains Pelycosauria only as a historical navigation grade, not a monophyletic ancestor taxon.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The claim is limited to how the cited primary sampling study treats the historical grade. It does not convert diversity bins into an origin, duration or ancestor sequence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Pelycosauria is displayed at 308–260 Ma only as the review's historical pelycosaurian-grade sample, not a monophyletic taxon range. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Pelycosauria uses Brocklehurst, N.; Kammerer, C.F.; Fröbisch, J. (2013) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Early-synapsid family record sampled by Brocklehurst et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该主张仅限于所引一手取样研究如何处理这一历史等级，不把多样性分箱转换成起源时间、延续区间或祖先序列。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Pelycosauria 采用 Brocklehurst, N.; Kammerer, C.F.; Fröbisch, J.（2013）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Early-synapsid family record sampled by Brocklehurst et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Brocklehurst 等明确把“盘龙类级”合弓类作为早期、非冠群的取样等级来分析；因此图谱仅将 Pelycosauria 保留为历史导航等级，而不把它视为单系祖先类群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Pelycosauria 仅以 308–260 Ma 展示为综述所采样的历史性“盘龙类等级”，并非单系类群范围。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's historical pelycosaurian-grade sample, not a monophyletic taxon range; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The early evolution of synapsids, and the influence of sampling on their fossil record directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
