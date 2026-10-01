---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    taxonId: ""
    extinct: false
    name: Anthocerotophyta
    commonName: Hornworts
    commonNameZh: 角苔门
    rank: phylum
    firstAppearance: 470
    lastAppearance: 0
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Anthocerotophyta
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated primary-source review
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Li et al. 2020 DOI 10.1038/s41477-020-0618-2; publisher full text inspected 2026-09-05
      referenceLinks:
        - referenceId: li-2020-hornwort-genomes
          relation: supports
          figure: Figure 3b–c
          quoteLocator: Figure 3 caption; Genes related to sporophyte development, opening paragraph
    - subject:
        kind: taxon
        path: content/topics/atlas/Anthocerotophyta
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: li-2020-hornwort-genomes
      referenceLinks:
        - referenceId: li-2020-hornwort-genomes
          relation: supports
          pages: 259–272
          quoteLocator: Figures 1–5; hornwort phylogenomics and comparative genomics
    - subject:
        kind: taxon
        path: content/topics/atlas/Anthocerotophyta
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: li-2020-hornwort-genomes locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: li-2020-hornwort-genomes
          pages: 6:259–272
          figure: Figures 1–5
          quoteLocator: Two hornwort genomes, phylogenomics and comparative genomics
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
  ranges:
    - entityPath: content/topics/atlas/Anthocerotophyta
      rangeKind: global-composite
      taxonomicConcept: Anthocerotophyta temporal range
      geographicScope: Temporal interval pending fossil or calibrated phylum evidence
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: low
      claimPaths:
        - content/topics/atlas/Anthocerotophyta/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: li-2020-hornwort-genomes
          locator: 259–272; Figures 1–5; two hornwort genomes, phylogenomics and comparative genomics
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Anthocerotophyta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Li and colleagues illustrate sporophytes, gametophytes and stomata of Anthoceros agrestis Bonn; these named living materials provide a morphological example for hornworts, without establishing that every hornwort species has identical structures or resolving stomatal homology across land plants.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Figure 3b–c explicitly identifies the illustrated strain and structures; the developmental discussion separately notes that firm evidence for homology is scarce.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Two Anthoceros genome assemblies support hornwort comparative placement and reveal lineage-specific genomic features; two species cannot date Anthocerotophyta or represent every hornwort lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Chromosome-scale data strengthen the sampled comparisons, while species sampling and evolutionary models bound phylum-wide inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Anthocerotophyta has no supported scalar temporal range in the cited evidence: two living hornwort genomes inform phylogenomics but do not establish a 470 Ma fossil or calibrated phylum boundary, so the former 470–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Li et al. (2020) directly supports living-genome comparisons and topology, not a fossil first appearance. Low confidence records the absence of range-fit support for the former 470 Ma endpoint.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
图 3b–c 明确标识所展示的品系和结构；发育讨论另外指出，同源性的确凿证据仍然不足。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
染色体尺度数据加强了取样比较，但物种取样与演化模型限制了门级外推。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Li 等（2020）直接支持现生基因组比较与拓扑，而非化石首现。低置信度表示旧有 470 Ma 端点缺少适合范围用途的证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Li 及同事展示了 Anthoceros agrestis Bonn 品系的孢子体、配子体和气孔；这些具名现生材料提供了角苔的形态实例，但不能证明所有角苔物种具有完全相同的结构，也未解决陆生植物间气孔的同源性问题。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
两套角苔属基因组支持角苔的比较系统位置并揭示谱系特有基因组特征；两个物种不能为角苔门定年，也不能代表全部角苔谱系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
现有引证不支持 Anthocerotophyta 的单一时间范围：两个现生角苔基因组可用于系统基因组学，却不能确立 470 Ma 化石或校准门级边界，因此旧有 470–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Two living hornwort genomes and comparative analyses do not establish a 470 Ma fossil boundary.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 470–0 Ma display is withheld rather than converting extant genome sampling into a phylum first appearance.
<!-- /evo:text -->
