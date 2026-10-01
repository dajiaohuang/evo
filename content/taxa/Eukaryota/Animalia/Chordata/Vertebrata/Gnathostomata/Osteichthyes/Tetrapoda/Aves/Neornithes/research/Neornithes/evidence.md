---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:39241
    scientificName: Neornithes
    commonName: Crown birds
    commonNameZh: 冠群鸟类
    rank: subclass
    parentName: Aves
    extinct: false
    geography:
      - Global today
      - Antarctica and Europe for the two Maastrichtian fossil tests highlighted here
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
    confidence: medium
    referenceIds:
      - torres-2025-vegavis-skull
      - field-2020-asteriornis
      - claramunt-cracraft-2015-avian-time-tree
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/research/Neornithes
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Torres et al. 2025 DOI 10.1038/s41586-024-08390-0
      referenceLinks:
        - referenceId: torres-2025-vegavis-skull
          relation: supports
          quoteLocator: 146–151; Figures 1–4; age statement; phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/research/Neornithes
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Torres et al. 2025 DOI 10.1038/s41586-024-08390-0
      referenceLinks:
        - referenceId: torres-2025-vegavis-skull
          relation: supports
          pages: 146–151
          figure: Figure 1
          quoteLocator: Age and locality statement
        - referenceId: field-2020-asteriornis
          relation: supports
          pages: 397–401
          quoteLocator: Geological setting
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/research/Neornithes
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
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Torres et al. 2025 DOI 10.1038/s41586-024-08390-0
      referenceLinks:
        - referenceId: torres-2025-vegavis-skull
          relation: supports
          pages: 146–151
          figure: Figure 4
          quoteLocator: Introduction and phylogenetic analyses
        - referenceId: field-2020-asteriornis
          relation: contextualizes
          pages: 397–401
          quoteLocator: Phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/research/Neornithes
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Torres et al. 2025 DOI 10.1038/s41586-024-08390-0
      referenceLinks:
        - referenceId: torres-2025-vegavis-skull
          relation: supports
          quoteLocator: Figures 1–3; functional comparisons of feeding apparatus
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/research/Neornithes
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Torres et al. 2025 DOI 10.1038/s41586-024-08390-0
      referenceLinks:
        - referenceId: torres-2025-vegavis-skull
          relation: supports
          pages: 146–151
          figure: Figures 1–4
          quoteLocator: AMNH FARB 30899 description
        - referenceId: field-2020-asteriornis
          relation: contextualizes
          pages: 397–401
          figure: Figures 1–4
          quoteLocator: NHMM 2013 008 description
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
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/research/Neornithes
      rangeKind: global-composite
      taxonomicConcept: Crown Neornithes under the Torres et al. 2025 placement of Vegavis
      geographicScope: Global living crown; fossil minimum tested by Vegavis in Antarctica
      olderMa: 69.2
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 69.2
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Aves/Neornithes/research/Neornithes/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: torres-2025-vegavis-skull
          locator: 146–151; Figures 1–4; age statement; phylogenetic analyses
        - referenceId: field-2020-asteriornis
          locator: 397–401; Figures 1–4; phylogenetic analyses
      reviewStatus: automated-audit-passed
---

# Neornithes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Vegavis AMNH FARB 30899 from 69.2–68.4 Ma supplies the oldest highlighted crown-bird test in this atlas, but its crown-waterfowl membership is a 2025 matrix result and therefore the 69.2 Ma Neornithes range remains topology-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimen age is stratigraphically constrained and its skull is directly imaged, but crown membership changed among published analyses. Medium confidence links the range explicitly to the current topology hypothesis.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The highlighted Maastrichtian crown-bird candidates occur in Antarctica and Europe, whereas living Neornithes are global; these endpoints do not reconstruct a complete Cretaceous distribution or center of origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Named fossil localities and living global distribution are secure at their respective times, but the sparse Cretaceous sample cannot identify an ancestral area. Medium confidence marks that sampling gap.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Neornithes is the crown defined by the common ancestor of living birds and all descendants; Archaeopteryx is outside that crown, while Vegavis and Asteriornis require explicit fossil-placement analyses.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The crown definition and exclusion of Archaeopteryx are stable at this scope. High confidence does not convert contested Cretaceous placements into directly observed membership.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Neornithes has no single crown-wide ecology; the narrow beak, enlarged jaw-muscle attachment and skull of Vegavis support underwater prey capture for that fossil only.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Vegavis feeding anatomy is directly preserved, while functional analogy uses living divers. Medium confidence prevents a single fossil ecology from becoming a crown-wide ancestral state.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Vegavis AMNH FARB 30899 preserves a toothless reduced-maxilla beak, hyperinflated cerebrum and specialized jaw apparatus, while Asteriornis preserves a different Maastrichtian galloanseran character combination.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
CT reconstruction directly documents the Vegavis structures and the Asteriornis holotype provides an independent character mosaic. High confidence concerns morphology, not identical crown placement.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本年龄受地层约束且头骨被直接成像，但其冠群归属在已发表分析间变化；中等置信度把延限明确连接到当前拓扑假说。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
具名化石地点与现生全球分布在各自时期可靠，但稀疏的白垩纪样本不能识别祖先区域；中等置信度标记这一取样缺口。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
冠群定义以及始祖鸟在冠群之外的范围在此层级稳定；高置信度不会把有争议的白垩纪位置转化为直接观察到的成员资格。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
Vegavis 的摄食解剖被直接保存，但功能类比使用现生潜水鸟；中等置信度避免把单一化石生态变成整个冠群的祖先状态。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
CT 重建直接记录 Vegavis 结构，Asteriornis 正模提供独立性状组合；高置信度针对形态，而非两者具有相同冠群位置。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
年代为 6920–6840 万年前的 Vegavis AMNH FARB 30899 是本图谱突出展示的最老冠群鸟测试，但其冠群水禽归属是 2025 年矩阵结果，因此今鸟类 6920 万年前的延限仍依赖拓扑。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本图谱突出的马斯特里赫特期冠群鸟候选分别出现于南极洲和欧洲，现生今鸟类则遍布全球；这些端点不能重建完整白垩纪分布或起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
今鸟类是由所有现生鸟类最近共同祖先及其全部后代定义的冠群；Archaeopteryx 位于该冠群之外，而 Vegavis 与 Asteriornis 必须依赖明确的化石位置分析。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
今鸟类没有单一冠群生态；Vegavis 的狭窄喙、增大的颌肌附着区和头骨只支持该化石进行水下捕食。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Vegavis AMNH FARB 30899 保存无齿、上颌缩小的喙、膨大的大脑和特化颌装置；Asteriornis 则保存另一套马斯特里赫特期鸡雁类性状组合。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is topology-dependent: it applies only if the 2025 combined placement of Vegavis within crown waterfowl is accepted. It is not the crown divergence time.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
AMNH FARB 30899 is from a 69.2–68.4 Ma interval and the combined analysis supports waterfowl affinity; earlier conflicting placements remain explicit, while Asteriornis supplies a younger independent crown test.
<!-- /evo:text -->
