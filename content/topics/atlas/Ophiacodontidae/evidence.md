---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ophiacodontidae
    commonName: Ophiacodontids
    commonNameZh: 蛇齿龙科
    rank: family
    taxonId: ""
    firstAppearance: 308
    lastAppearance: 272
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Ophiacodontidae
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
          quoteLocator: Abstract; family-level diversity analyses; discussion of the Kungurian–Roadian interval
    - subject:
        kind: taxon
        path: content/topics/atlas/Ophiacodontidae
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
          quoteLocator: Abstract; family-level diversity analyses; discussion of the Kungurian–Roadian interval
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
    - entityPath: content/topics/atlas/Ophiacodontidae
      rangeKind: global-composite
      taxonomicConcept: Ophiacodontidae — source-bounded sample window
      geographicScope: Ophiacodontid family occurrences analysed by Brocklehurst et al.
      olderMa: 308
      youngerMa: 272
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/topics/atlas/Ophiacodontidae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: brocklehurst-2013-early-synapsids
          locator: 470–490; Abstract; family-level diversity analyses; discussion of the Kungurian–Roadian interval
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Ophiacodontidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ophiacodontidae is one of the named early-synapsid families tracked in a sampling-standardized Permian diversity analysis, which reports its decline and disappearance from the sampled record without supplying an exact global family origin or extinction instant.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Family identity and sampled diversity history are supported, while the claim refuses to promote analytical bins or incomplete occurrences to exact global endpoints.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Ophiacodontidae is displayed at 308–272 Ma only as the family-level sampled record in the diversity analysis, not exact global endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Ophiacodontidae uses Brocklehurst, N.; Kammerer, C.F.; Fröbisch, J. (2013) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Ophiacodontid family occurrences analysed by Brocklehurst et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源支持科级身份与取样多样性历史；该主张不把分析分箱或不完整出现记录提升为精确全球端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Ophiacodontidae 采用 Brocklehurst, N.; Kammerer, C.F.; Fröbisch, J.（2013）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Ophiacodontid family occurrences analysed by Brocklehurst et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
蛇齿龙科是二叠纪早期合弓类取样标准化多样性分析中单独追踪的具名科之一；研究报告其在取样记录中的衰退与消失，但并未给出精确的全球科级起源或灭绝时刻。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Ophiacodontidae 仅以 308–272 Ma 展示为多样性分析中的科级采样记录，而非精确全球端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the family-level sampled record in the diversity analysis, not exact global endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The early evolution of synapsids, and the influence of sampling on their fossil record directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
