---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Stegosauria
    commonName: Stegosaurs
    commonNameZh: 剑龙类
    rank: suborder
    taxonId: ""
    firstAppearance: 170
    lastAppearance: 140
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Stegosauria
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: maidment-2010-stegosauria-review concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: maidment-2010-stegosauria-review
          relation: supports
          pages: 199–210
          figure: Figures 1–5; supplementary matrix
          quoteLocator: Abstract and pp. 199–201 fossil-record scope; pp. 205–209 phylogeny and limitations
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Stegosauria
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
      reviewedAgainstReferenceVersion: maidment-2010-stegosauria-review @ DOI 10.1007/s00015-010-0023-3
      referenceLinks:
        - relation: supports
          referenceId: maidment-2010-stegosauria-review
          pages: 199–210
          figure: Figures 1–5; supplementary matrix
          quoteLocator: Abstract and pp. 199–201 fossil-record scope; pp. 205–209 phylogeny and limitations
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Stegosauria
      rangeKind: global-composite
      taxonomicConcept: Stegosauria — source-bounded sample window
      geographicScope: Middle Jurassic through Early Cretaceous body-fossil record reviewed by Maidment
      olderMa: 174.7
      youngerMa: 100.5
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria/Ornithischia/Stegosauria/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: maidment-2010-stegosauria-review
          locator: 199–210; Abstract and pp. 199–201 fossil-record scope; pp. 205–209 phylogeny and limitations
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Stegosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The reviewed stegosaur body-fossil record runs from the Middle Jurassic into the Early Cretaceous, with no definitive younger record in that synthesis; these literature bounds are not exact global origination or extinction instants.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review directly inventories named records and an updated sampled phylogeny, while explicitly noting fragmentary material and uncertain basal resolution.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Stegosauria is displayed at 174.7–100.5 Ma only as the review's stage-level body-fossil coverage, not exact origination or extinction instants. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Stegosauria uses Maidment, S.C.R. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Middle Jurassic through Early Cretaceous body-fossil record reviewed by Maidment; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述直接盘点具名记录并更新取样系统发育，同时明确指出材料破碎和基部解析不确定。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Stegosauria 采用 Maidment, S.C.R.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Middle Jurassic through Early Cretaceous body-fossil record reviewed by Maidment；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所综述的剑龙类身体化石记录从中侏罗世延续到早白垩世，该综述未确认更年轻记录；这些文献边界不是精确的全球起源或灭绝时刻。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Stegosauria 仅以 174.7–100.5 Ma 展示为综述覆盖的中侏罗世至早白垩世实体化石记录，而非精确起源或灭绝时刻。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's stage-level body-fossil coverage, not exact origination or extinction instants; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Stegosauria: a historical review of the body fossil record and phylogenetic relationships directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
