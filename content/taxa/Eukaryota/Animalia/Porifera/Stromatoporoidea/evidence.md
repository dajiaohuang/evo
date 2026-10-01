---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Stromatoporoidea
    commonName: Stromatoporoids
    commonNameZh: 层孔虫类
    rank: class
    taxonId: txn:3338
    firstAppearance: 485
    lastAppearance: 359
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Stromatoporoidea
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: stearn-1975-stromatoporoid-animal
      referenceLinks:
        - referenceId: stearn-1975-stromatoporoid-animal
          relation: supports
          pages: 89–100
          quoteLocator: Comparative anatomy; affinity discussion; concluding synthesis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Stromatoporoidea
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
      reviewedAgainstReferenceVersion: kershaw-jeon-2024-stromatoporoids-extinctions locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: kershaw-jeon-2024-stromatoporoids-extinctions
          pages: 252:104721
          figure: Review synthesis of the two major episodes
          quoteLocator: Abstract; conclusions
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
    - entityPath: content/taxa/Eukaryota/Animalia/Porifera/Stromatoporoidea
      rangeKind: global-composite
      taxonomicConcept: Stromatoporoidea / stromatoporoid-grade temporal range
      geographicScope: Two disjunct fossil episodes; no continuous canonical interval asserted
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
        - content/taxa/Eukaryota/Animalia/Porifera/Stromatoporoidea/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: kershaw-jeon-2024-stromatoporoids-extinctions
          locator: Abstract; two-major-episodes synthesis; conclusions on Palaeozoic and Mesozoic–rare Cenozoic records
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Stromatoporoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Comparative skeletal anatomy supports interpreting stromatoporoids as sponge-grade organisms in the reviewed material, but affinity and character homology remain historical systematic inferences rather than a fixed crown placement.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The review directly compares diagnostic skeletal structures, but its age and the absence of soft anatomy warrant bounded confidence in affinity.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Stromatoporoidea has no published scalar range here: the reviewed record comprises a Palaeozoic Ordovician–Late Devonian episode and a separate Late Triassic–Cretaceous, rarely Cenozoic, stromatoporoid-grade episode, so the former 485–359 Ma continuous display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Kershaw and Jeon (2024) explicitly describe two separated stromatoporoid-grade episodes. Low confidence applies to any attempt to collapse that discontinuous, grade-sensitive record into one taxon-wide scalar interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
该综述直接比较诊断性骨骼结构，但研究年代较早且缺少软体解剖，因此对亲缘判断保持有限置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Kershaw 与 Jeon（2024）明确区分两个彼此分离的层孔虫形态级阶段。低置信度针对把这种不连续且受形态级分类影响的记录压缩为单一类群区间的做法。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
比较骨骼解剖支持把综述材料中的层孔虫解释为海绵型生物，但其亲缘与性状同源仍是历史系统学推断，而非固定的冠群位置。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Stromatoporoidea 在此不发布单一数值范围：综述所示记录包含古生代奥陶纪—晚泥盆世阶段，以及分离的晚三叠世—白垩纪、极少延续至新生代的层孔虫形态级阶段，因此旧有 485–359 Ma 连续展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The literature separates Palaeozoic and Mesozoic–rare Cenozoic stromatoporoid-grade episodes and does not justify a single continuous clade duration.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 485–359 Ma display is withheld because a scalar interval would erase the major post-Devonian gap and the grade-level taxonomic problem.
<!-- /evo:text -->
