---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cryptodira
    commonName: Hidden-necked turtles
    commonNameZh: 曲颈龟类
    rank: suborder
    taxonId: txn:37622
    firstAppearance: 155.6
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Cryptodira
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: joyce-2007-mesozoic-turtle-phylogeny concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: joyce-2007-mesozoic-turtle-phylogeny
          relation: supports
          pages: 3–102
          figure: Figures 1–3; Appendices 1–3
          quoteLocator: "pp. 3–7 methods and taxon sample; p. 67 ‘Clade 25: Cryptodira’; pp. 52–86 phylogenetic results"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Cryptodira
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
      reviewedAgainstReferenceVersion: joyce-2007-mesozoic-turtle-phylogeny; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: joyce-2007-mesozoic-turtle-phylogeny
          pages: 3–102
          figure: Figures 1–3; Appendices 1–3
          quoteLocator: "Clade 25: Cryptodira; fossil and living taxon sample; unresolved internal nodes"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Cryptodira
      rangeKind: global-composite
      taxonomicConcept: Crown Cryptodira temporal range
      geographicScope: Crown interval pending a node-specific fossil calibration
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Testudines/Cryptodira/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: joyce-2007-mesozoic-turtle-phylogeny
          locator: "3–102; Figures 1–3; Appendices 1–3; Clade 25: Cryptodira; fossil and living taxon sample; unresolved internal nodes"
      reviewStatus: automated-audit-passed
---

# Cryptodira

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Cryptodira route represents the sampled crown-side turtle clade in Joyce’s morphology matrix; relationships within Cryptodira are partly unresolved, and the analysis does not supply an exact crown origin or global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study directly scores 45 fossil and 22 living species and discusses Cryptodira explicitly. Medium confidence preserves matrix and missing-data sensitivity and withholds any age claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Joyce’s matrix defines and samples Cryptodira but does not validate 155.6 Ma as a crown-cryptodire minimum; the former borrowed display is withheld pending a node-specific calibration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Crown Cryptodira temporal range: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该研究直接编码了 45 个化石种和 22 个现生种，并明确讨论隐颈龟类。中等置信度保留矩阵与缺失数据敏感性，不作年代断言。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Crown Cryptodira temporal range：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
隐颈龟类路线表示 Joyce 形态矩阵中取样的龟类冠群一侧支系；隐颈龟内部部分关系仍未解决，该分析并未给出精确的冠群起源或全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Joyce 的矩阵定义并采样了曲颈龟类，但不能把 1.556 亿年前验证为曲颈龟冠群下限；原先借用的显示暂缓，等待节点专属校准。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The broad Mesozoic turtle matrix does not provide the former 155.6 Ma edge as a validated Cryptodira minimum.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former display is withheld rather than borrowing a Testudines calibration.
<!-- /evo:text -->
