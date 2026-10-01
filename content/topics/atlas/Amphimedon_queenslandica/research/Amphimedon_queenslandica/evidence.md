---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: null
    scientificName: Amphimedon queenslandica
    commonName: Great Barrier Reef genome sponge
    commonNameZh: 大堡礁基因组海绵
    rank: species
    parentName: Demospongiae evidence route
    extinct: false
    geography:
      - Great Barrier Reef
      - Australia
    overview:
      markdown: page.en.md
      field: /records/atlas-profile/overview
    ecology:
      diet:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/diet
      habitat:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/habitat
      locomotion:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/locomotion
      bodySize:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/bodySize
      guild:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/guild
    traits:
      - markdown: page.en.md
        field: /records/atlas-profile/traits/0
      - markdown: page.en.md
        field: /records/atlas-profile/traits/1
      - markdown: page.en.md
        field: /records/atlas-profile/traits/2
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: high
    referenceIds:
      - srivastava-2010-amphimedon
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: srivastava-2010-amphimedon
      referenceLinks:
        - referenceId: srivastava-2010-amphimedon
          relation: supports
          pages: 720–726
          quoteLocator: Figures 1–5; genome assembly and comparative analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: srivastava-2010-amphimedon locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: srivastava-2010-amphimedon
          pages: 720–726
          figure: Figures 1–5
          quoteLocator: Genome assembly and comparative analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: srivastava-2010-amphimedon @ DOI 10.1038/nature09201
      referenceLinks:
        - referenceId: srivastava-2010-amphimedon
          relation: supports
          pages: 466:720–726
          figure: Figure 1; Supplementary Note 7
          quoteLocator: Abstract; Main text on sampled sponge phylogeny and limits
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: srivastava-2010-amphimedon @ DOI 10.1038/nature09201
      referenceLinks:
        - referenceId: srivastava-2010-amphimedon
          relation: supports
          pages: 466:720–722
          figure: Figure 1
          quoteLocator: Figure 1 caption; Genome sequencing and annotation
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: srivastava-2010-amphimedon @ DOI 10.1038/nature09201
      referenceLinks:
        - referenceId: srivastava-2010-amphimedon
          relation: supports
          pages: 466:720
          quoteLocator: Abstract
    - subject:
        kind: taxon
        path: content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: srivastava-2010-amphimedon @ DOI 10.1038/nature09201
      referenceLinks:
        - referenceId: srivastava-2010-amphimedon
          relation: supports
          pages: 466:721
          figure: Figure 1
          quoteLocator: "Main text: adult organization and lifestyle"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
    - markdown: evidence.md
      field: /records/claim-rationales.zh/5
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
    - markdown: evidence.md
      field: /records/claim-statements.zh/5
  ranges:
    - entityPath: content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica
      rangeKind: global-composite
      taxonomicConcept: Amphimedon queenslandica species temporal range
      geographicScope: Living genome sample only; species duration not inferred
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
        - content/topics/atlas/Amphimedon_queenslandica/research/Amphimedon_queenslandica/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: srivastava-2010-amphimedon
          locator: 720–726; Figures 1–5; genome assembly and comparative analyses
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Amphimedon queenslandica

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Amphimedon queenslandica draft genome and comparative gene-family analyses document a living demosponge genomic sample; they do not make this species an ancestral animal or a proxy for all Porifera.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named assembly and comparative datasets are directly reported, while ancestral-state and phylum-wide interpretations remain comparative.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Amphimedon queenslandica has no supported scalar species range in the cited evidence: the genome paper samples a living sponge but does not date the species origin or fossil duration, so the former 0–0 placeholder is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Srivastava et al. (2010) directly supports a living genome sample and comparative characters. Low confidence prevents that present-day sample from being converted into a species origination date.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Srivastava et al. report a draft genome from the living demosponge Amphimedon queenslandica; it contains many metazoan signalling, transcription-factor, adhesion and cell-cycle gene families despite the adult sponge lacking eumetazoan organs. This sampled genome does not represent a literal ancestral animal or all Porifera.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The sample and its limits are explicitly discussed by the primary study.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The study figures adult, embryo and larval stages and reports a draft assembly of approximately 167 Mb; genome content is distinct from a reconstruction of ancestral anatomy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Life stages and assembly statistics are direct study outputs; anatomical history is not observed.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The primary study identifies Amphimedon queenslandica as a demosponge from the Great Barrier Reef; this profile maps the living sample locality only.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The abstract names the Great Barrier Reef, without supporting a species-wide map.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The study describes the adult as filtering microbes and particulate organic matter with flagellated collar cells; this is living-species ecology, not an early-animal ecological reconstruction.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The feeding description is explicit, while extension to ancestral animals would be comparative inference.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名基因组组装与比较数据均有直接报告，但祖先状态和门级解释仍属比较推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Srivastava 等（2010）直接支持现生基因组样本与比较性状。低置信度避免把当代样本转换为物种起源日期。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
一手研究明确讨论了取样物种及其解释限度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
生活史阶段和组装统计是直接研究结果；祖先解剖史并未被观察到。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
摘要只指出大堡礁，不能支持物种的完整地图。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
取食描述明确，但外推至祖先动物只能是比较推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
大堡礁海绵 Amphimedon queenslandica 的基因组草图和基因家族比较记录了一个现生寻常海绵样本；它既不是动物祖先，也不能代表全部海绵动物。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Amphimedon queenslandica 的单一物种范围：基因组论文采样了现生海绵，但未测定该物种起源或化石存续期，因此旧有 0–0 占位值被暂缓。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Srivastava 等报告了现生寻常海绵 Amphimedon queenslandica 的草图基因组；尽管成体海绵缺少真后生动物器官，该基因组仍包含许多后生动物信号、转录因子、黏附和细胞周期基因家族。这个取样基因组不代表字面意义的祖先动物或全部海绵动物。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
研究展示成体、胚胎和幼体阶段，并报告约 167 Mb 的草图组装；基因组内容不同于对祖先解剖的复原。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
一手研究将 Amphimedon queenslandica 标为来自大堡礁的寻常海绵；此档案只绘制该现生取样地点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
研究描述成体以具鞭毛的领细胞滤食微生物和颗粒有机物；这是现生物种生态，不是早期动物生态复原。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
A genome from a living sampled species does not date that species' origin or define a fossil duration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The 0–0 placeholder is withheld because the genome paper supplies a living sample and comparative biology, not species-level range evidence.
<!-- /evo:text -->
