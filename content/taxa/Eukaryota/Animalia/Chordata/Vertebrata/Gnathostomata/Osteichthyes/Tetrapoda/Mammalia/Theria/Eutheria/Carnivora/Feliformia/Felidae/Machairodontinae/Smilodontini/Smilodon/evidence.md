---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Smilodon
    commonName: Saber-toothed Cat
    commonNameZh: 剑齿虎
    rank: genus
    taxonId: txn:41079
    firstAppearance: 2.5
    lastAppearance: 0.01
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Feliformia/Felidae/Machairodontinae/Smilodontini/Smilodon
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
      reviewedAgainstReferenceVersion: paijmans-2017-sabertooth-mitogenomics concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: paijmans-2017-sabertooth-mitogenomics
          pages: 3330–3336.e5
          figure: Figure 2
          quoteLocator: "Summary; Results: phylogenetic analyses of partial mitogenomes"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Feliformia/Felidae/Machairodontinae/Smilodontini/Smilodon
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
      reviewedAgainstReferenceVersion: paijmans-2017-sabertooth-mitogenomics @ DOI 10.1016/j.cub.2017.09.033
      referenceLinks:
        - relation: supports
          referenceId: paijmans-2017-sabertooth-mitogenomics
          pages: 3330–3336.e5
          figure: Figure 2
          quoteLocator: "Summary; Results: phylogenetic analyses of partial mitogenomes"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Feliformia/Felidae/Machairodontinae/Smilodontini/Smilodon
      rangeKind: global-composite
      taxonomicConcept: Smilodon — source-bounded sample window
      geographicScope: Late Pleistocene Smilodon populator mitogenomic sample in Paijmans et al.
      olderMa: 0.012
      youngerMa: 0.01
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Feliformia/Felidae/Machairodontinae/Smilodontini/Smilodon/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: paijmans-2017-sabertooth-mitogenomics
          locator: "3330–3336.e5; Summary; Results: phylogenetic analyses of partial mitogenomes"
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Smilodon

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A partial mitochondrial genome from one Smilodon populator specimen places the sampled lineage with Homotherium in a well-supported machairodont clade within Felidae, distinct from sampled living felid lineages; one Smilodon sample and mitochondrial inheritance limit broader species-level inference.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary ancient-mitogenomic analysis directly supports the sampled placement. The claim retains its single-specimen, mitochondrial and extinct-taxon sampling limits.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Smilodon is displayed at 0.012–0.01 Ma only as the dated ancient-DNA specimen window, not the full genus range. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Smilodon uses Paijmans, J.L.A.; Barnett, R.; Gilbert, M.T.P.; Zepeda-Mendoza, M.L.; Reumer, J.W.F.; de Vos, J.; Zazula, G.; Nagel, D.; Baryshnikov, G.F.; Leonard, J.A.; Rohland, N.; Westbury, M.V.; Barlow, A.; Hofreiter, M. (2017) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Late Pleistocene Smilodon populator mitogenomic sample in Paijmans et al.; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手古线粒体基因组分析直接支持该取样位置；主张保留单标本、线粒体遗传以及灭绝类群取样方面的限制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Smilodon 采用 Paijmans, J.L.A.; Barnett, R.; Gilbert, M.T.P.; Zepeda-Mendoza, M.L.; Reumer, J.W.F.; de Vos, J.; Zazula, G.; Nagel, D.; Baryshnikov, G.F.; Leonard, J.A.; Rohland, N.; Westbury, M.V.; Barlow, A.; Hofreiter, M.（2017）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Late Pleistocene Smilodon populator mitogenomic sample in Paijmans et al.；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一件 Smilodon populator 标本的部分线粒体基因组，把该取样谱系与 Homotherium 一同置于猫科内部支持良好、区别于取样现生猫科各支的剑齿虎类分支；仅一件 Smilodon 样本且证据来自线粒体，限制了更广泛的物种级推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Smilodon 仅以 0.012–0.01 Ma 展示为古 DNA 标本的测年窗口，而非该属完整范围。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the dated ancient-DNA specimen window, not the full genus range; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Evolutionary History of Saber-Toothed Cats Based on Ancient Mitogenomics directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
