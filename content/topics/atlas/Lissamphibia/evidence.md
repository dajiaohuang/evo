---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Lissamphibia
    commonName: Frogs, salamanders & caecilians
    commonNameZh: 蛙、蝾螈与蚓螈
    rank: subclass
    taxonId: ""
    firstAppearance: 250
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia
      claimType: topology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: competing primary matrices at 2026.08-static-v5-rc34
      referenceLinks:
        - referenceId: schoch-2019-dissorophoid-lissamphibia
          relation: supports
          pages: 137–156
          figure: Figure 6
          quoteLocator: Abstract; Phylogenetic analysis; Origin of lissamphibians
        - referenceId: marjanovic-laurin-2019-lissamphibian-origin
          relation: contradicts
          pages: 1–164
          quoteLocator: Abstract; constrained Analyses R2–R6; discussion of lissamphibian origin
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia
      claimType: topology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: competing primary matrices at 2026.08-static-v5-rc34
      referenceLinks:
        - referenceId: marjanovic-laurin-2019-lissamphibian-origin
          relation: supports
          pages: 1–164
          quoteLocator: Abstract; Analyses R1–R6; matrix revision and lissamphibian-origin discussion
        - referenceId: schoch-2019-dissorophoid-lissamphibia
          relation: contradicts
          pages: 137–156
          figure: Figure 6
          quoteLocator: Dissorophoid phylogenetic analysis and lissamphibian-origin results
        - referenceId: kligman-2023-funcusvermis
          relation: contradicts
          pages: 102–107
          figure: Figure 3; Extended Data Figures 5–7
          quoteLocator: Phylogenetic analyses; lissamphibian-origin discussion
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia
      claimType: topology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: competing primary matrices at 2026.08-static-v5-rc34
      referenceLinks:
        - referenceId: pardo-2017-chinlestegophis
          relation: supports
          pages: E5389–E5395
          figure: Figures 1–4; Supplementary Figure S7
          quoteLocator: Systematic palaeontology; CT anatomy; phylogenetic results
        - referenceId: kligman-2023-funcusvermis
          relation: contradicts
          pages: 102–107
          figure: Figure 3; Extended Data Figures 5–7
          quoteLocator: Phylogenetic analyses; comparison with Chinlestegophis
    - subject:
        kind: taxon
        path: content/topics/atlas/Lissamphibia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: kligman-2023-funcusvermis; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: kligman-2023-funcusvermis
          pages: 102–107
          figure: Figure 3; Extended Data Figures 5–7
          quoteLocator: Triassic stem caecilian and competing lissamphibian-origin implications
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
  ranges:
    - entityPath: content/topics/atlas/Lissamphibia
      rangeKind: global-composite
      taxonomicConcept: Lissamphibia origin-hypothesis range
      geographicScope: Competing temnospondyl, lepospondyl and caecilian-stem placements
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
      confidence: contested
      claimPaths:
        - content/topics/atlas/Lissamphibia/evidence.md#/records/claims/3
      referenceLocators:
        - referenceId: kligman-2023-funcusvermis
          locator: 102–107; Figure 3; Extended Data Figures 5–7; Triassic stem caecilian and competing lissamphibian-origin implications
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Lissamphibia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A 33-taxon, 108-character dissorophoid analysis recovered sampled lissamphibians within Amphibamiformes near Gerobatrachus, supporting a monophyletic temnospondyl-origin hypothesis while retaining polytomies, homoplasy and unresolved support.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The published matrix directly supports this sampled topology, but the competing revised matrix recovers a shorter lepospondyl alternative. Contested confidence preserves analysis dependence rather than selecting a winner.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
After documenting 4,200 corrected matrix cells and adding 56 terminal taxa, one expanded morphology analysis recovered a lepospondyl-origin tree as 9–10 steps shorter than constrained temnospondyl alternatives, while reporting generally low bootstrap support.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The step differences and corrections are directly reported, but they describe one morphology matrix and conflict with dissorophoid and Funcusvermis analyses. Contested confidence prevents parsimony score from becoming consensus.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The Chinlestegophis analysis placed two Late Triassic skulls on the caecilian stem and drew stereospondyls into Lissamphibia, whereas the later Funcusvermis analysis recovered a dissorophoid gymnophionomorph stem and did not retain that stereospondyl-caecilian route.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Both studies publish explicit matrices and named material but differ in taxon sampling and recovered topology. Contested confidence presents the conflict without using either result as a settled origin model.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Competing lissamphibian-origin hypotheses change which Paleozoic and Triassic fossils can bound the group, so the former 250 Ma–present composite is withheld pending a declared crown/total definition and hypothesis-specific calibration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Lissamphibia origin-hypothesis range: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is contested and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已发表矩阵直接支持这一取样拓扑，但另一套修订矩阵恢复出步数更短的鳞椎类替代方案。争议置信度保留分析依赖性，不预先选定胜者。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
步数差与修订内容均由研究直接报告，但它们描述的是一套形态矩阵，并与离片椎类和 Funcusvermis 分析冲突。争议置信度避免把简约步数变成共识。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
两项研究都发表了明确矩阵和具名材料，但类群取样与恢复拓扑不同。争议置信度并列呈现冲突，不把任一结果当作已定起源模型。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
Lissamphibia origin-hypothesis range：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。争议置信度反映竞争假说。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项含 33 个类群、108 个性状的离片椎类分析把取样现生两栖类置于 Amphibamiformes 内并接近 Gerobatrachus，支持单系离片椎起源假说，同时保留多分支、趋同与支持度不足。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
一项扩展形态分析记录了 4,200 个修正矩阵单元并新增 56 个末端类群，恢复出的鳞椎类起源树比受约束的离片椎替代方案短 9–10 步，同时报告多数自举支持度较低。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Chinlestegophis 分析把两件晚三叠世头骨置于蚓螈干支，并将立体椎类纳入现生两栖类；后来的 Funcusvermis 分析则恢复出离片椎类的蚓螈形干支，未保留该立体椎—蚓螈路线。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
两栖类起源假说之间的竞争会改变哪些古生代和三叠纪化石能够约束该群，因此原先 2.50 亿年前至今的复合范围暂缓，需先明确冠群／总群定义及对应假说的校准。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Competing placements change which fossils can bound the total or crown group.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 250 Ma–present display is withheld until a declared clade definition and hypothesis-specific calibration are paired.
<!-- /evo:text -->
