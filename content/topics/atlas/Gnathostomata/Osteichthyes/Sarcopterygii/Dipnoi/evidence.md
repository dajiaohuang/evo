---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Dipnoi
    commonName: Lungfish
    commonNameZh: 肺鱼类
    rank: subclass
    taxonId: ""
    firstAppearance: 409
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnoi
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: hallstrom-janke-2009-lungfish-est DOI 10.1093/molbev/msn271; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: hallstrom-janke-2009-lungfish-est
          pages: 463–471
          figure: Figures 1–4; supplementary alignments
          quoteLocator: EST dataset; phylogenomic analyses; topology tests
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnoi
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: broughton-2013-bony-fish-tempo; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: broughton-2013-bony-fish-tempo
          pages: Article 2ca8041495ffafd0c92756e75247483e
          figure: Figures 1–3; time-calibrated phylogeny
          quoteLocator: Timescale of bony-fish evolution; crown Sarcopterygii split
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
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnoi
      rangeKind: global-composite
      taxonomicConcept: Living lungfish lineage divergence model
      geographicScope: Twenty-four-calibration bony-fish relaxed-clock analysis
      olderMa: 409
      youngerMa: 0
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
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Dipnoi/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: broughton-2013-bony-fish-tempo
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Dipnoi

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Lungfish EST sequences contribute an explicit phylogenomic test of living lungfish placement among jawed vertebrates. The EST sample neither dates the lungfish fossil record nor establishes an exact Dipnoi origin or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond the EST sample neither dates the lungfish fossil record nor establishes an exact Dipnoi origin or direct ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The calibrated bony-fish clock placed the lineage containing living lungfishes and tetrapods on the 409 Ma side of the coelacanth split; the 409 Ma–present route is model-based, not a Dipnoi fossil range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Living lungfish lineage divergence model: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Living lungfish lineage divergence model：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
肺鱼 EST 序列为现生肺鱼在有颌脊椎动物中的位置提供了明确系统基因组检验。EST 样本既不给肺鱼化石记录定年，也不能确立肺鱼类精确起源或直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
校准后的硬骨鱼分子钟把包含现生肺鱼和四足动物的谱系置于约 4.09 亿年前腔棘鱼分化的一侧；4.09 亿年前至今的路线基于模型，不是肺鱼类化石延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
409 Ma is the model estimate for the coelacanth versus lungfish-plus-tetrapod split, not a Dipnoi fossil FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The route preserves the model boundary and living endpoint without claiming a complete lungfish record.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article 2ca8041495ffafd0c92756e75247483e; Figures 1–3; time-calibrated phylogeny; Timescale of bony-fish evolution; crown Sarcopterygii split
<!-- /evo:text -->
