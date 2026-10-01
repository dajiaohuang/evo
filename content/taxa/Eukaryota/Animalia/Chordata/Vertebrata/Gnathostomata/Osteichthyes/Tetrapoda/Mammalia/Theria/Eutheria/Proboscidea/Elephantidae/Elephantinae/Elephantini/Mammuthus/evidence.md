---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Mammuthus
    commonName: Mammoths
    commonNameZh: 猛犸象
    rank: genus
    taxonId: txn:43266
    firstAppearance: 5
    lastAppearance: 0.004
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Proboscidea/Elephantidae/Elephantinae/Elephantini/Mammuthus
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: palkopoulou-2018-elephant-genomes concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: palkopoulou-2018-elephant-genomes
          pages: E2566–E2574
          figure: Figures 1–4
          quoteLocator: Genome sampling; phylogeny; admixture graph analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Proboscidea/Elephantidae/Elephantinae/Elephantini/Mammuthus
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
      reviewedAgainstReferenceVersion: palkopoulou-2018-elephant-genomes @ DOI 10.1073/pnas.1720554115
      referenceLinks:
        - relation: supports
          referenceId: palkopoulou-2018-elephant-genomes
          pages: E2566–E2574
          figure: Figures 1–4
          quoteLocator: Genome sampling; phylogeny; admixture graph analyses
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Proboscidea/Elephantidae/Elephantinae/Elephantini/Mammuthus
      rangeKind: global-composite
      taxonomicConcept: Mammuthus — source-bounded sample window
      geographicScope: Late Pleistocene mammoth genomes sampled by Palkopoulou et al.
      olderMa: 0.14
      youngerMa: 0.004
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Proboscidea/Elephantidae/Elephantinae/Elephantini/Mammuthus/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: palkopoulou-2018-elephant-genomes
          locator: E2566–E2574; Genome sampling; phylogeny; admixture graph analyses
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Mammuthus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Genome-scale comparisons of sampled mammoths, living elephants and mastodon place Mammuthus within a reticulate elephantid history with introgression and incomplete lineage sorting; the sampled genomes do not establish the genus’s full fossil duration or one bifurcating ancestor tree.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study provides genome-scale data and explicitly models admixture. The claim avoids extending those individuals to a global range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Mammuthus is displayed at 0.14–0.004 Ma only as the dated genomic specimen envelope, not the full fossil duration of Mammuthus. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Mammuthus uses Palkopoulou, E. et al. (2018) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Pleistocene mammoth genomes sampled by Palkopoulou et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究提供基因组尺度数据并明确建模混合；主张不把这些个体外推为全球范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Mammuthus 采用 Palkopoulou, E. et al.（2018）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Pleistocene mammoth genomes sampled by Palkopoulou et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对取样猛犸、现生象和乳齿象的基因组尺度比较把 Mammuthus 置于包含基因渗入与不完全谱系排序的网状象科历史中；这些取样基因组不建立该属完整化石延续或单一二叉祖先树。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Mammuthus 仅以 0.14–0.004 Ma 展示为有测年约束的基因组标本包络，而非 Mammuthus 完整化石存续期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the dated genomic specimen envelope, not the full fossil duration of Mammuthus; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A comprehensive genomic history of extinct and living elephants directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
