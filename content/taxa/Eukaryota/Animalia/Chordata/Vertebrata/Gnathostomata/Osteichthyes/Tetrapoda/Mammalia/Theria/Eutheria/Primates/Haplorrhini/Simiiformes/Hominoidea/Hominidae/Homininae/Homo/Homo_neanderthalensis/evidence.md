---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Homo neanderthalensis
    commonName: Neanderthals
    commonNameZh: 尼安德特人
    rank: species
    taxonId: txn:83087
    firstAppearance: 0.4
    lastAppearance: 0.04
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo/Homo_neanderthalensis
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: prufer-2017-vindija concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: prufer-2017-vindija
          pages: 655–658
          figure: Figures 1–4
          quoteLocator: Specimen dating; genome coverage; demographic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo/Homo_neanderthalensis
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
      reviewedAgainstReferenceVersion: prufer-2017-vindija @ DOI 10.1126/science.aao1887
      referenceLinks:
        - relation: supports
          referenceId: prufer-2017-vindija
          pages: 655–658
          figure: Figures 1–4
          quoteLocator: Specimen dating; genome coverage; demographic analyses
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo/Homo_neanderthalensis
      rangeKind: taxon-range
      taxonomicConcept: Homo neanderthalensis — source-bounded sample window
      geographicScope: Vindija 33.19 specimen age envelope, Croatia
      olderMa: 0.055
      youngerMa: 0.0455
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo/Homo_neanderthalensis/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: prufer-2017-vindija
          locator: 655–658; Specimen dating; genome coverage; demographic analyses
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo/Homo_neanderthalensis
      rangeKind: global-composite
      taxonomicConcept: Vindija 33.19 high-coverage Neanderthal genome occurrence
      geographicScope: Vindija Cave, Croatia
      olderMa: 0.055
      youngerMa: 0.0455
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/1/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/1/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: high
      claimPaths:
        - content/events/Vindija_33.19_high-coverage_Neanderthal_genome/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: prufer-2017-vindija
          locator: 655–658; Figures 1–4; Supplementary Materials
      reviewStatus: automated-audit-passed
---

# Homo neanderthalensis

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Homo neanderthalensis is anchored here by Vindija 33.19, which yielded a high-coverage genome and a greater-than-45.5 ka radiocarbon result within an approximately 55–45.5 ka sample envelope; modelled age and relationships do not define the species’ full range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen and laboratory result are direct, whereas the approximately 52 ka estimate and demographic tree are models.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Homo neanderthalensis is displayed at 0.055–0.0455 Ma only as the dated Vindija specimen envelope, not the complete duration of Neanderthals. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Homo neanderthalensis uses Prüfer, K.; de Filippo, C.; Grote, S.; Mafessoni, F.; Korlević, P.; Hajdinjak, M.; Vernot, B.; Skov, L.; Hsieh, P.; Peyrégne, S.; et al. (2017) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Vindija 33.19 specimen age envelope, Croatia; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本与实验室结果属于直接证据，而约 5.2 万年前估计和种群树属于模型。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Homo neanderthalensis 采用 Prüfer, K.; de Filippo, C.; Grote, S.; Mafessoni, F.; Korlević, P.; Hajdinjak, M.; Vernot, B.; Skov, L.; Hsieh, P.; Peyrégne, S.; et al.（2017）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Vindija 33.19 specimen age envelope, Croatia；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
此处 Homo neanderthalensis 由 Vindija 33.19 锚定，该标本产生高覆盖基因组和大于 4.55 万年的放射性碳结果，处于约 5.5 万—4.55 万年前的样本区间；模型年龄与关系不定义物种完整范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Homo neanderthalensis 仅以 0.055–0.0455 Ma 展示为有测年约束的温迪亚标本包络，而非尼安德特人的完整存续期。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the dated Vindija specimen envelope, not the complete duration of Neanderthals; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A high-coverage Neandertal genome from Vindija Cave in Croatia directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/1/uncertainty/note -->
The approximately 52 ka branch-shortening age, population splits and introgression proportions are model outputs; they do not directly date all Neanderthals or define species taxonomy.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/1/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
