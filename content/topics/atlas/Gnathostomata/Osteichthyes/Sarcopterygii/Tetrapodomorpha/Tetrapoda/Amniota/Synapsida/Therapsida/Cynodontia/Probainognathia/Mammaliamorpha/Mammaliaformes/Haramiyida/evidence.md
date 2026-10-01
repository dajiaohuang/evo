---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Haramiyida
    commonName: Haramiyidans
    commonNameZh: 贼兽类
    rank: order
    taxonId: ""
    firstAppearance: 205.7
    lastAppearance: 145
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Haramiyida
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
      reviewedAgainstReferenceVersion: bi-2014-euharamiyidans concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: bi-2014-euharamiyidans
          pages: 579–584
          figure: Figures 1–4
          quoteLocator: "Phylogenetic analyses; Supplementary Information: character matrix"
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Haramiyida
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
      reviewedAgainstReferenceVersion: bi-2014-euharamiyidans @ DOI 10.1038/nature13718
      referenceLinks:
        - relation: supports
          referenceId: bi-2014-euharamiyidans
          pages: 579–584
          figure: Figures 1–4
          quoteLocator: "Phylogenetic analyses; Supplementary Information: character matrix"
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Haramiyida
      rangeKind: global-composite
      taxonomicConcept: Haramiyida — source-bounded sample window
      geographicScope: Late Triassic tooth record through Jurassic euharamiyidan skeletons discussed by Bi et al.
      olderMa: 205.7
      youngerMa: 157.3
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Synapsida/Therapsida/Cynodontia/Probainognathia/Mammaliamorpha/Mammaliaformes/Haramiyida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: bi-2014-euharamiyidans
          locator: "579–584; Phylogenetic analyses; Supplementary Information: character matrix"
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Haramiyida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Three Jurassic euharamiyidan skeletons add cranial and postcranial characters to a mammaliaform matrix and support a haramiyidan–multituberculate grouping in that analysis; competing matrices and older tooth-only taxa keep broader Haramiyida placement model-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The fossils and scored characters are direct evidence, while the higher placement and inferred split are analytical results with known alternatives.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Haramiyida is displayed at 205.7–157.3 Ma only as the source's contested haramiyidan sample envelope, not a stable clade FAD/LAD. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Haramiyida uses Bi, S.; Wang, Y.; Guan, J.; Sheng, X.; Meng, J. (2014) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Triassic tooth record through Jurassic euharamiyidan skeletons discussed by Bi et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
化石与已编码性状属于直接证据，而高阶位置和推断分化属于存在替代方案的分析结果。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Haramiyida 采用 Bi, S.; Wang, Y.; Guan, J.; Sheng, X.; Meng, J.（2014）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Triassic tooth record through Jurassic euharamiyidan skeletons discussed by Bi et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
三件侏罗纪真哈拉米亚类骨架向哺乳形类矩阵补充了头骨和头后性状，并在该分析中支持哈拉米亚类—多瘤齿兽类组合；相互竞争的矩阵及更早的仅牙齿类群使广义 Haramiyida 的位置仍依赖模型。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Haramiyida 仅以 205.7–157.3 Ma 展示为来源中存在系统位置争议的哈拉米亚类样本包络，而非稳定类群首末现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the source's contested haramiyidan sample envelope, not a stable clade FAD/LAD; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Three new Jurassic euharamiyidan species reinforce early divergence of mammals directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
