---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Myxozoa
    commonName: Myxozoan Parasites
    commonNameZh: 黏体动物
    rank: subphylum
    taxonId: ""
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Myxozoa
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: chang-2015-myxozoa
      referenceLinks:
        - referenceId: chang-2015-myxozoa
          relation: supports
          pages: 14912–14917
          quoteLocator: Figures 1–4; phylogenomic and genome-reduction analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Myxozoa
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
      reviewedAgainstReferenceVersion: chang-2015-myxozoa locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: chang-2015-myxozoa
          pages: 14912–14917
          figure: Figures 1–4
          quoteLocator: Phylogenomic and genome-reduction analyses
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
    - entityPath: content/topics/atlas/Myxozoa
      rangeKind: global-composite
      taxonomicConcept: Myxozoa temporal range
      geographicScope: Temporal interval pending fossil or calibrated origin evidence
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
        - content/topics/atlas/Myxozoa/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: chang-2015-myxozoa
          locator: 14912–14917; Figures 1–4; phylogenomics and genome-reduction analyses
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Myxozoa

## claims / statement

<!-- evo:text /records/claims/0/statement -->
New myxozoan genomes and phylogenomic tests place the sampled parasites within Cnidaria and associate extreme body reduction with genome reduction; this does not identify their exact ancestor or origin time.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Genome-scale comparisons robustly support cnidarian placement for the sampled taxa, while exact sister relationships and historical timing remain less certain.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Myxozoa has no supported scalar temporal range in the cited evidence: phylogenomics resolves a cnidarian placement and genome reduction but provides no fossil or calibrated origin boundary, so the former 0–0 placeholder is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Chang et al. (2015) directly supports topology and genomic reduction, not temporal endpoints. Low confidence prevents a living molecular sample from being misrepresented as a zero-duration range.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组尺度比较稳健支持取样类群的刺胞动物位置，但确切姊妹关系和历史年代仍较不确定。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Chang 等（2015）直接支持拓扑与基因组缩减，而不支持时间端点。低置信度避免把现生分子样本误表为零时长范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
新获得的黏体动物基因组和系统基因组检验把取样寄生类群置于刺胞动物内部，并把极端身体简化与基因组缩减联系起来；这不识别其确切祖先或起源时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现有引证不支持 Myxozoa 的单一时间范围：系统基因组学解析了其刺胞动物位置与基因组缩减，却未提供化石或校准起源边界，因此旧有 0–0 占位值被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Phylogenomic placement and genome reduction in living myxozoans do not date the clade origin or fossil range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The 0–0 placeholder is withheld rather than turning a living genomic sample into a numerical origin.
<!-- /evo:text -->
