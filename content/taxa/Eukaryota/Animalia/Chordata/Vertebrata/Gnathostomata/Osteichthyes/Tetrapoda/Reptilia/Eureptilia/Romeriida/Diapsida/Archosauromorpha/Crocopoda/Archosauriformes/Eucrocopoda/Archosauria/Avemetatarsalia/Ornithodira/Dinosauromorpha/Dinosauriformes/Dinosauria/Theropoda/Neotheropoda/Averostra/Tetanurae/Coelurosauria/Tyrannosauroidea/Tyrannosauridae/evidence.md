---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tyrannosauridae
    commonName: Tyrannosaurs
    commonNameZh: 暴龙类
    rank: family
    taxonId: txn:38606
    firstAppearance: 83
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae
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
      reviewedAgainstReferenceVersion: brusatte-2010-tyrannosaur-paleobiology concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: brusatte-2010-tyrannosaur-paleobiology
          relation: supports
          pages: 1481–1485
          figure: Figures 1–3
          quoteLocator: Phylogeny and anatomy synthesis; growth and biomechanics; concluding limitations
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae
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
      reviewedAgainstReferenceVersion: brusatte-2010-tyrannosaur-paleobiology @ DOI 10.1126/science.1193304
      referenceLinks:
        - relation: supports
          referenceId: brusatte-2010-tyrannosaur-paleobiology
          pages: 1481–1485
          figure: Figures 1–3
          quoteLocator: Phylogeny and anatomy synthesis; growth and biomechanics; concluding limitations
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae
      rangeKind: global-composite
      taxonomicConcept: Tyrannosauridae — source-bounded sample window
      geographicScope: Late Cretaceous tyrannosaurid sample synthesized by Brusatte et al.
      olderMa: 84
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Theropoda/Neotheropoda/Averostra/Tetanurae/Coelurosauria/Tyrannosauroidea/Tyrannosauridae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: brusatte-2010-tyrannosaur-paleobiology
          locator: 1481–1485; Phylogeny and anatomy synthesis; growth and biomechanics; concluding limitations
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Tyrannosauridae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Tyrannosauridae is represented by a systematic synthesis of its sampled anatomy, growth and biomechanics; family-wide patterns are review-bounded and do not turn Tyrannosaurus into a proxy for every member or set exact range endpoints.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review integrates several independent specimen studies, while behavior and lineage-wide generalization remain inferential. Medium confidence preserves heterogeneity.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Tyrannosauridae is displayed at 84–66 Ma only as the review-bounded sampled family record, not exact global origination or extinction. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Tyrannosauridae uses Brusatte, S.L.; Norell, M.A.; Carr, T.D.; Erickson, G.M.; Hutchinson, J.R.; Balanoff, A.M.; Bever, G.S.; Choiniere, J.N.; Makovicky, P.J.; Xu, X. (2010) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Cretaceous tyrannosaurid sample synthesized by Brusatte et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
综述整合多项独立标本研究，而行为及全支系概括仍属推断；中等置信度保留异质性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Tyrannosauridae 采用 Brusatte, S.L.; Norell, M.A.; Carr, T.D.; Erickson, G.M.; Hutchinson, J.R.; Balanoff, A.M.; Bever, G.S.; Choiniere, J.N.; Makovicky, P.J.; Xu, X.（2010）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Cretaceous tyrannosaurid sample synthesized by Brusatte et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
暴龙科由对取样解剖、生长和生物力学的系统综合表示；科级格局受综述范围限制，不把霸王龙当作每个成员的替身，也不设定精确范围端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Tyrannosauridae 仅以 84–66 Ma 展示为综述限定的科级采样记录，而非精确全球起源或灭绝。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the review-bounded sampled family record, not exact global origination or extinction; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Tyrannosaur Paleobiology: New Research on Ancient Exemplar Organisms directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
