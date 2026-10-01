---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Lingula anatina
    commonName: Duck-bill lamp shell
    commonNameZh: 鸭嘴海豆芽
    rank: species
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:150949
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Lingulata/Lingulida/Linguloidea/Lingulidae/Lingula/Lingula_anatina
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: luo-et-al-2015-lingula-genome
      referenceLinks:
        - referenceId: luo-et-al-2015-lingula-genome
          relation: supports
          pages: Article 8301
          figure: Figures 1–5; Supplementary Notes and Tables
          quoteLocator: Genome assembly; phylogenomics; shell transcriptome and proteome; biomineralization discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Lingulata/Lingulida/Linguloidea/Lingulidae/Lingula/Lingula_anatina
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Luo et al. 2015 DOI 10.1038/ncomms9301
      referenceLinks:
        - relation: supports
          referenceId: luo-et-al-2015-lingula-genome
          pages: Article 8301
          figure: Supplementary Figure 1
          quoteLocator: "Methods: Biological materials; gravid adults collected in July and August at Kasari Bay with coordinates"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Lingulata/Lingulida/Linguloidea/Lingulidae/Lingula/Lingula_anatina
      rangeKind: global-composite
      taxonomicConcept: Lingula anatina living multi-omics sample
      geographicScope: Living gravid adults collected in Kasari Bay, Amami Island, Japan
      olderMa: 0
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
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Lingulata/Lingulida/Linguloidea/Lingulidae/Lingula/Lingula_anatina/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: luo-et-al-2015-lingula-genome
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Lingula anatina

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The living Lingula anatina genome, staged transcriptomes and shell proteome document a sampled phosphate-shell biomineralization toolkit; they do not demonstrate morphological stasis or the lineage's origin time.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome, expression and proteome data directly support molecular inventories, while deep-time stasis and origin claims require independent fossils.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Luo et al. document living gravid Lingula anatina adults collected in July and August at Kasari Bay with exact coordinates, so 0 Ma denotes that present-day collection only and does not date lineage origin, fossil duration or morphological stasis.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biological-materials method and supplementary locality figure directly identify the living collection. High confidence applies only to sampled present-day status.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组、表达与蛋白组数据直接支持分子清单，但深时停滞和起源主张需要独立化石证据。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
生物材料方法与补充地点图直接标识了现生采集。高置信度只适用于已取样的当代状态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
现生鸭嘴海豆芽基因组、分期转录组和贝壳蛋白组记录了一个磷酸盐壳生物矿化工具箱样本；它们不证明形态停滞或谱系起源时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Luo 等记录了 7 月和 8 月在笠利湾按精确坐标采集的现生怀卵鸭嘴海豆芽成体，因此 0 Ma 只表示该当代采集，不为谱系起源、化石延限或形态停滞定年。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero age denotes the documented living collection; it is not a lineage-origin date, fossil range or claim of morphological stasis.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Luo et al. directly document the living collection, exact locality, genome, developmental transcriptomes and shell proteome.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article 8301; Methods, Biological materials; Supplementary Figure 1, gravid adults collected in July and August at Kasari Bay with coordinates
<!-- /evo:text -->
