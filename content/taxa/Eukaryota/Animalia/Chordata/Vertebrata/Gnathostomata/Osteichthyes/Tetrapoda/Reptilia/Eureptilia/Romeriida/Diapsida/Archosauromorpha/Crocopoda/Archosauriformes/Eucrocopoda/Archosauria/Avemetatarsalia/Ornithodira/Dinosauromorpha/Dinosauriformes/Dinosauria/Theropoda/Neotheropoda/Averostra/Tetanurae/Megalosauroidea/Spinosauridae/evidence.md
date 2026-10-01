---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Spinosauridae
    commonName: Spinosaurids
    commonNameZh: 棘龙类
    rank: family
    taxonId: txn:38595
    firstAppearance: 139
    lastAppearance: 93
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: hone-holtz-2017-spinosauridae-review concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: hone-holtz-2017-spinosauridae-review
          relation: supports
          pages: 1120–1132
          figure: Figures 1–4; Tables 1–2
          quoteLocator: Systematic revision; material quality; ecological evidence; Conclusions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae
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
      reviewedAgainstReferenceVersion: hone-holtz-2017-spinosauridae-review @ DOI 10.1111/1755-6724.13328
      referenceLinks:
        - relation: supports
          referenceId: hone-holtz-2017-spinosauridae-review
          pages: 1120–1132
          figure: Figures 1–4; Tables 1–2
          quoteLocator: Systematic revision; material quality; ecological evidence; Conclusions
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae
      rangeKind: global-composite
      taxonomicConcept: Spinosauridae — source-bounded sample window
      geographicScope: Named and fragmentary spinosaurid material reviewed by Hone and Holtz
      olderMa: 145
      youngerMa: 93.9
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Megalosauroidea/Spinosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: hone-holtz-2017-spinosauridae-review
          locator: 1120–1132; Systematic revision; material quality; ecological evidence; Conclusions
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Spinosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Spinosauridae is represented by Hone and Holtz’s revision of named and fragmentary material; subfamily assignments and ecological signals are evidence-weighted hypotheses, not a complete family range or uniform semiaquatic ecology.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review explicitly separates diagnostic material from weak referrals and discusses competing ecological evidence. Medium confidence follows those limits.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Spinosauridae is displayed at 145–93.9 Ma only as the review's taxonomically qualified fossil coverage, not exact family FAD/LAD. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Spinosauridae uses Hone, D.W.E.; Holtz, T.R. (2017) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Named and fragmentary spinosaurid material reviewed by Hone and Holtz; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述明确区分诊断性材料与薄弱归入，并讨论相互竞争的生态证据；中等置信度遵循这些限制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Spinosauridae 采用 Hone, D.W.E.; Holtz, T.R.（2017）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Named and fragmentary spinosaurid material reviewed by Hone and Holtz；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
棘龙科由 Hone 与 Holtz 对具名和破碎材料的修订表示；亚科归属与生态信号是按证据权重建立的假说，不是完整科级范围或统一半水生生态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Spinosauridae 仅以 145–93.9 Ma 展示为综述经分类学限定的化石覆盖，而非精确科级首现或末现。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review's taxonomically qualified fossil coverage, not exact family FAD/LAD; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Century of Spinosaurs — A Review and Revision of the Spinosauridae with Comments on Their Ecology directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
