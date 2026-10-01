---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pleurodira
    commonName: Side-necked turtles
    commonNameZh: 侧颈龟类
    rank: suborder
    taxonId: txn:37589
    firstAppearance: 155.6
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Pleurodira
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: joyce-2013-turtle-calibrations concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: joyce-2013-turtle-calibrations
          relation: supports
          pages: 614–617, 626–629
          figure: Figures 1–2 and 5; Table 1
          quoteLocator: Testudines Node 1; Age of the crown Testudines; Conclusions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Pleurodira
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: joyce-2013-turtle-calibrations; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: joyce-2013-turtle-calibrations
          pages: 614–617, 626–629
          figure: Figures 1–2 and 5; Table 1
          quoteLocator: Testudines Node 1; Caribemys hard minimum; model conclusions
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Pleurodira
      rangeKind: global-composite
      taxonomicConcept: Crown Pleurodira temporal range
      geographicScope: Crown interval pending a Pleurodira-specific fossil calibration
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
      evidenceLevel: literature-synthesized
      confidence: low
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Pleurodira/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: joyce-2013-turtle-calibrations
          locator: 614–617, 626–629; Figures 1–2 and 5; Table 1; Testudines Node 1; Caribemys hard minimum; model conclusions
      reviewStatus: automated-audit-passed
---

# Pleurodira

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Pleurodira display route borrows the 155.6 Ma Caribemys-based hard minimum for crown Testudines as a conservative navigation boundary; that calibration is not a Pleurodira origin date, direct ancestor or audited global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The calibration is explicit and specimen-bound, but its node is crown Testudines rather than Pleurodira. Low confidence is therefore appropriate for this navigation-only reuse.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The cited 155.6 Ma Caribemys minimum constrains crown Testudines rather than Pleurodira specifically, so the former Pleurodira range is withheld pending a node-specific fossil calibration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Pleurodira temporal range: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
校准本身明确且绑定标本，但对应节点是冠群龟类而非侧颈龟类，因此这种仅用于导航的复用采用低置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Pleurodira temporal range：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
侧颈龟类显示路线借用基于 Caribemys 的 1.556 亿年前冠群龟类硬下限作为保守导航边界；该校准不是侧颈龟类的起源日期、直接祖先或经审计的全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
所引 1.556 亿年前的 Caribemys 下限约束的是龟鳖类冠群，而非侧颈龟类专属节点，因此原侧颈龟范围暂缓，等待节点专属化石校准。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 155.6 Ma Caribemys hard minimum constrains crown Testudines in the cited analysis, not Pleurodira specifically.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former Pleurodira display is withheld rather than reusing a different node’s calibration.
<!-- /evo:text -->
