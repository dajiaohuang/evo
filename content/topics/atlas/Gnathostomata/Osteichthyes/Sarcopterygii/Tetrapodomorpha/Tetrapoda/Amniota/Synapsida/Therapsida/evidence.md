---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Therapsida
    commonName: Therapsids
    commonNameZh: 兽孔类
    rank: order
    taxonId: ""
    firstAppearance: 275
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida
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
          quoteLocator: "Abstract; Results and Discussion: therapsid diversity through the Kungurian–Capitanian"
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida
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
          quoteLocator: "Abstract; Results and Discussion: therapsid diversity through the Kungurian–Capitanian"
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida
      rangeKind: global-composite
      taxonomicConcept: Therapsida — source-bounded sample window
      geographicScope: Kungurian–Capitanian family-level record analysed by Brocklehurst et al.
      olderMa: 283.3
      youngerMa: 259.5
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: brocklehurst-2013-early-synapsids
          locator: "470–490; Abstract; Results and Discussion: therapsid diversity through the Kungurian–Capitanian"
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Therapsida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A family-level occurrence analysis distinguishes Therapsida from the historical pelycosaurian grade and finds therapsids diversifying while several early-synapsid families decline; this sampled pattern does not date the clade’s origin or imply direct descent from any sampled genus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source supports the analytical distinction and diversity result. It is not used as a total-group range, crown date or ancestor claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Therapsida is displayed at 283.3–259.5 Ma only as the sampled diversification interval in that analysis, not the origin, survival or full duration of Therapsida. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Therapsida uses Brocklehurst, N.; Kammerer, C.F.; Fröbisch, J. (2013) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Kungurian–Capitanian family-level record analysed by Brocklehurst et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源支持分析中的类群区分与多样性结果；它未被用作总群范围、冠群日期或祖先主张。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Therapsida 采用 Brocklehurst, N.; Kammerer, C.F.; Fröbisch, J.（2013）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Kungurian–Capitanian family-level record analysed by Brocklehurst et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
科级出现记录分析将兽孔目与历史性的盘龙类等级区分开，并发现若干早期合弓类科衰退时兽孔类仍在多样化；这一取样格局不测定该支系起源，也不表示它直接源自任何取样属。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Therapsida 仅以 283.3–259.5 Ma 展示为该分析采样的辐射区间，而非兽孔类起源、延续或完整存续期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the sampled diversification interval in that analysis, not the origin, survival or full duration of Therapsida; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The early evolution of synapsids, and the influence of sampling on their fossil record directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
