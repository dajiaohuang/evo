---
schemaVersion: 1
kind: evidence
records:
  event:
    title:
      markdown: page.en.md
      field: /records/event/title
      format: heading
    titleZh:
      markdown: page.zh.md
      field: /records/event/titleZh
      format: heading
    category: origin
    startAge: 0
    endAge: 0
    regions:
      - Extant teleost genome sample
    clades:
      - Elopomorpha
      - Osteoglossomorpha
      - Clupeocephala
      - Eloposteoglossocephala
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Genome-structure_support_for_Eloposteoglossocephala/evidence.md#/records/claims/0
    evidenceItems:
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/0/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/relation
            referenceId: parey-2023-teleost-genome-structures
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/quoteLocator
    uncertaintyItems:
      - statement:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/uncertaintyItems/0/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            referenceId: parey-2023-teleost-genome-structures
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/pages
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator
      - statement:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/1/statement
        relation:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/1/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/uncertaintyItems/1/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/relation
            referenceId: parey-2023-teleost-genome-structures
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Genome-structure_support_for_Eloposteoglossocephala
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Parey et al. 2023 DOI 10.1126/science.abq4257; INRAE dataset DOI 10.15454/GWL0GP
      referenceLinks:
        - relation: supports
          referenceId: parey-2023-teleost-genome-structures
          pages: 572–575
          figure: Figures 3A–D and 4; Supplementary Figures S7–S9
          quoteLocator: Results; Discussion; Supplementary Materials
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Genome-structure support for Eloposteoglossocephala

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Seven new elopomorph genomes plus 18 public genomes were analysed with 955 single-copy gene trees and 3,041 adjacency markers; sequence and chromosome-rearrangement methods converged on Elopomorpha plus Osteoglossomorpha.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:eloposteoglossocephala-genome-structure
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
572–575
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 3A–D and 4; Supplementary Figures S7–S9
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
Results; Methods summary
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
The result is a topology for the sampled extant lineages, not a complete species-level teleost tree; the paper found no exclusive unambiguous morphological character for the proposed clade.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:eloposteoglossocephala-genome-structure
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
572–575
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Discussion; Supplementary Materials
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
The inferred ancestral chromosome fusion is reconstructed from extant genome structure and is not a directly observed ancient event or a fossil first appearance.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:eloposteoglossocephala-genome-structure
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/pages -->
572–575
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / figure

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/figure -->
Figure 4; Supplementary Figures S7–S9
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/quoteLocator -->
Chromosome fusion reconstruction
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Across 955 single-copy gene trees and 3,041 chromosome-adjacency markers from seven new elopomorph and 18 public genomes, sequence and genome-structure analyses support Elopomorpha plus Osteoglossomorpha as sister to Clupeocephala; this is an extant-sample topology, not a complete species tree or fossil event.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Multiple sequence- and chromosome-based analyses converge on the same deep teleost split and the supporting genome dataset is archived. Medium confidence limits the result to sampled living lineages, acknowledges the absence of an exclusive unambiguous morphological character, and treats the ancestral fusion as reconstruction rather than direct observation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
多种序列和染色体方法收敛到同一深层真骨鱼分支，支撑基因组数据也已归档。中等置信度把结果限定于所取样现生谱系，承认缺少唯一且无歧义的形态性状，并把祖先染色体融合视为重建而非直接观测。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基于 7 个新测海鲢总目基因组和 18 个公开基因组的 955 棵单拷贝基因树与 3,041 个染色体邻接标记，序列和基因组结构分析共同支持海鲢总目与骨舌鱼总目组成一支、并与鲱头鱼类互为姐妹群；这是现生样本拓扑，不是完整物种树或化石事件。
<!-- /evo:text -->
