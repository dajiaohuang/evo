---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Eutriconodonta
    commonName: Eutriconodonts
    commonNameZh: 真三尖齿兽类
    rank: clade
    taxonId: ""
    firstAppearance: 201.4
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Eutriconodonta
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
      reviewedAgainstReferenceVersion: luo-2002-mesozoic-mammal-phylogeny concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: luo-2002-mesozoic-mammal-phylogeny
          pages: 1–78
          quoteLocator: Eutriconodonta sampling; phylogenetic analyses; discussion of unstable Mesozoic groups
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Eutriconodonta
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
      reviewedAgainstReferenceVersion: luo-2002-mesozoic-mammal-phylogeny @ https://www.app.pan.pl/archive/published/app47/app47-001.pdf
      referenceLinks:
        - relation: supports
          referenceId: luo-2002-mesozoic-mammal-phylogeny
          pages: 1–78
          quoteLocator: Eutriconodonta sampling; phylogenetic analyses; discussion of unstable Mesozoic groups
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Eutriconodonta
      rangeKind: global-composite
      taxonomicConcept: Eutriconodonta — source-bounded sample window
      geographicScope: Eutriconodont specimens sampled in Luo et al.'s Mesozoic-mammal synthesis
      olderMa: 201.4
      youngerMa: 66
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Eutriconodonta/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: luo-2002-mesozoic-mammal-phylogeny
          locator: 1–78; Eutriconodonta sampling; phylogenetic analyses; discussion of unstable Mesozoic groups
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Eutriconodonta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Eutriconodonta is recovered as a sampled Mesozoic mammal grouping in the broad morphology analysis, but membership and relationships among “triconodont” taxa change across character sets; the atlas label therefore denotes a tested hypothesis, not a fixed ancestor branch.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source provides a large explicit matrix and alternative analyses. Medium confidence reflects the paper’s reported instability around several fossil groups.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Eutriconodonta is displayed at 201.4–66 Ma only as the matrix sample's broad Mesozoic coverage, not a stable membership list or exact endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Eutriconodonta uses Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L. (2002) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Eutriconodont specimens sampled in Luo et al.'s Mesozoic-mammal synthesis; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源提供大型明确矩阵与替代分析；中等置信度反映论文报告的若干化石类群位置不稳定。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Eutriconodonta 采用 Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L.（2002）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Eutriconodont specimens sampled in Luo et al.'s Mesozoic-mammal synthesis；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在广泛形态分析中，真三尖齿兽目被恢复为一个取样的中生代哺乳类组合，但“三尖齿兽”类群的成员与关系会随性状集改变；因此图谱标签表示经检验的假说，而非固定祖先分支。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Eutriconodonta 仅以 201.4–66 Ma 展示为矩阵样本的宽泛中生代覆盖，而非稳定成员表或精确端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the matrix sample's broad Mesozoic coverage, not a stable membership list or exact endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
In quest for a phylogeny of Mesozoic mammals directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
