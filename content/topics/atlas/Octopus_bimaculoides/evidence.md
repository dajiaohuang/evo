---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Octopus bimaculoides
    commonName: California two-spot octopus
    commonNameZh: 加州双斑蛸
    rank: species
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: ""
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Octopus_bimaculoides
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
      reviewedAgainstReferenceVersion: albertin-et-al-2015-octopus-genome
      referenceLinks:
        - referenceId: albertin-et-al-2015-octopus-genome
          relation: supports
          pages: 220–224
          figure: Figures 1–3; Extended Data Figures 1–9; Supplementary Notes
          quoteLocator: Genome assembly; gene-family analysis; tissue transcriptomes; whole-genome duplication test
    - subject:
        kind: taxon
        path: content/topics/atlas/Octopus_bimaculoides
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
      reviewedAgainstReferenceVersion: Albertin et al. 2015 DOI 10.1038/nature14668
      referenceLinks:
        - relation: supports
          referenceId: albertin-et-al-2015-octopus-genome
          pages: 220–224
          figure: Figure 1a
          quoteLocator: "Methods: Genome sequencing and assembly; Transcriptome sequencing; BioProjects PRJNA270931 and PRJNA285380"
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
    - entityPath: content/topics/atlas/Octopus_bimaculoides
      rangeKind: global-composite
      taxonomicConcept: Octopus bimaculoides living genomic sample
      geographicScope: One living male genome and twelve-tissue transcriptome sample
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
        - content/topics/atlas/Octopus_bimaculoides/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: albertin-et-al-2015-octopus-genome
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Octopus bimaculoides

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Octopus bimaculoides genome and 12 RNA transcriptomes document gene-family expansions and rearrangement. The study found no evidence for whole-genome duplication but did not exclude duplication followed by extensive gene loss; these samples do not date octopus origins.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome coverage and expression datasets directly support the inventory, while evolutionary causation and lineage timing remain comparative.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Albertin et al. sequenced genomic DNA from one living male Octopus bimaculoides and used 12 RNA transcriptomes from tissue and developmental samples to annotate the assembly. These are present-day research samples, not dates for species origin, fossil first appearance or complete geographic range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The methods and BioProject accessions directly identify the sampled living material. High confidence applies only to present-day sample status, not evolutionary duration.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组覆盖与表达数据直接支持该清单，但演化因果和谱系年代仍属比较推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
方法与 BioProject 登录号直接标识了所取现生材料。高置信度只适用于当代样本状态，不适用于演化延续时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
加州双斑蛸基因组和 12 个 RNA 转录组记录了基因家族扩张与重排。研究未发现全基因组复制的证据，但未排除复制后发生大量基因丢失；这些样本不为章鱼起源定年。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Albertin 等对一只现生雄性加州双斑蛸的基因组 DNA 测序，并用组织及发育样本的 12 个 RNA 转录组注释组装。这些是当代研究样本，不为物种起源、化石首现或完整地理范围定年。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero age denotes a directly documented living research sample; it is not the species origin, a fossil FAD or a complete geographic range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Albertin et al. document genomic DNA from one living male, 12 RNA transcriptomes from tissue and developmental samples, and associated BioProjects.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
220–224; Figure 1a; Methods, Genome sequencing and assembly and Transcriptome sequencing; BioProjects PRJNA270931 and PRJNA285380
<!-- /evo:text -->
