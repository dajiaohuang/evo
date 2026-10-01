---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Diplopoda
    commonName: Millipedes
    commonNameZh: 倍足类
    rank: class
    taxonId: ""
    firstAppearance: 425
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Myriapoda/Diplopoda
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
      reviewedAgainstReferenceVersion: blanke-wesener-2014-diplopoda DOI 10.1016/j.asd.2013.10.003; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: blanke-wesener-2014-diplopoda
          pages: 63–75
          figure: Figures 1–8; supplementary character matrix
          quoteLocator: Imaging and character reassessment; phylogenetic analysis
    - subject:
        kind: taxon
        path: content/topics/atlas/Myriapoda/Diplopoda
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: brookfield-2025 + almond-lawson-1985 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: brookfield-2025-kampecaris-age
          relation: supports
          pages: Article 6
          figure: Geological-age synthesis
          quoteLocator: Abstract and section 1 date Kampecaris obanensis to 425.5 ± 4.5 Ma
        - referenceId: almond-lawson-1985-paleozoic-millipedes
          relation: supports
          pages: 227–237
          figure: Systematic review
          quoteLocator: Pre-Pridoli claims are questionable; reliable Diplopoda occur in the latest Silurian–Lower Devonian
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
    - entityPath: content/topics/atlas/Myriapoda/Diplopoda
      rangeKind: global-composite
      taxonomicConcept: Diplopoda oldest-reviewed-fossil-to-living navigation envelope
      geographicScope: Kampecaris occurrence and living representatives
      olderMa: 425.5
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 4.5
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
        - content/topics/atlas/Myriapoda/Diplopoda/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: brookfield-2025-kampecaris-age
          locator: Abstract; section 1 and geological-age synthesis; Kampecaris obanensis dated to 425.5 ± 4.5 Ma
        - referenceId: almond-lawson-1985-paleozoic-millipedes
          locator: pp. 227–237; review of questionable pre-Pridoli records and reliable latest Silurian–Lower Devonian Diplopoda
      reviewStatus: automated-audit-passed
---

# Diplopoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Reassessed morphology and modern imaging recover a sampled phylogeny for major millipede lineages. The topology does not itself delimit the fossil range, origin or global first appearance of Diplopoda.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the topology does not itself delimit the fossil range, origin or global first appearance of Diplopoda.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The Diplopoda display uses the 425.5 ± 4.5 Ma Kampecaris age with uncertainty stored separately and does not inflate the error margin into a hard 430 Ma edge.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
A recent geological synthesis provides the numerical age and uncertainty, while the earlier systematic review rejects less secure pre-Pridoli assignments.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
近期地质综述给出数值年龄与误差；更早系统综述排除了可靠性较低的前 Pridoli 归属。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
重新评估的形态性状与现代成像恢复了主要千足虫谱系的抽样系统树。该拓扑本身不能限定倍足纲的化石延限、起源或全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
倍足纲显示采用 Kampecaris 的 425.5 ± 4.5 Ma 年龄并单独保存不确定度，不把误差扩张成 430 Ma 的硬边界。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The Kampecaris age is 425.5 ± 4.5 Ma; the uncertainty is retained separately rather than converted to a hard 430 Ma edge.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A recent age synthesis dates the millipede Kampecaris obanensis to 425.5 ± 4.5 Ma, while an earlier systematic review rejects less secure pre-Pridoli claims; living millipedes extend the navigation envelope to the present.
<!-- /evo:text -->
