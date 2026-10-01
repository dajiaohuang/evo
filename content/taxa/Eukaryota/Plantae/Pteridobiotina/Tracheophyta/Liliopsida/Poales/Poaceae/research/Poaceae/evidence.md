---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:53546
    scientificName: Poaceae
    commonName: Grasses
    commonNameZh: 禾本科植物
    rank: family
    parentName: Monocotyledoneae
    extinct: false
    geography:
      - Lameta Formation coprolite phytolith assemblage, central India
      - Living global family context
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
      - prasad-2005-grass-phytoliths
      - stromberg-2011-great-plains-phytoliths
      - gpwg-ii-2012-grass-phylogeny
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae
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
      reviewedAgainstReferenceVersion: gpwg-ii-2012-grass-phylogeny
      referenceLinks:
        - referenceId: gpwg-ii-2012-grass-phylogeny
          relation: supports
          pages: 304–312
          quoteLocator: Figure 1; phylogenetic analyses; C4 optimization
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Grass Phylogeny Working Group II 2012 DOI 10.1111/j.1469-8137.2011.03972.x
      referenceLinks:
        - referenceId: gpwg-ii-2012-grass-phylogeny
          relation: supports
          pages: 304–312
          figure: Figure 1
          quoteLocator: Phylogenetic analyses and C4 optimization
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Prasad et al. 2005 DOI 10.1126/science.1118806
      referenceLinks:
        - referenceId: prasad-2005-grass-phytoliths
          relation: supports
          pages: 310:1177–1180
          figure: Figure 1
          quoteLocator: Lameta Formation stratigraphy and coprolite phytolith assemblages
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Strömberg and McInerney 2011 DOI 10.1666/09067.1
      referenceLinks:
        - referenceId: stromberg-2011-great-plains-phytoliths
          relation: supports
          pages: 50–71
          quoteLocator: Abstract; assemblage interpretation and limitations
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Prasad et al. 2005 DOI 10.1126/science.1118806
      referenceLinks:
        - referenceId: prasad-2005-grass-phytoliths
          relation: supports
          pages: 310:1177–1180
          figure: Figures 2–3
          quoteLocator: Phytolith morphotypes and comparative assignments
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: prasad-2005-grass-phytoliths locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: prasad-2005-grass-phytoliths
          pages: 310:1177–1180
          figure: Figure 1; Figures 2–3
          quoteLocator: Stratigraphy, phytolith morphotypes and Supporting Online Text
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
    - entityPath: content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae
      rangeKind: global-composite
      taxonomicConcept: Poaceae latest-Cretaceous-phytolith-to-living navigation anthology
      geographicScope: Lameta Formation coprolite phytolith assemblage plus living grasses
      olderMa: 67
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
      confidence: contested
      claimPaths:
        - content/taxa/Eukaryota/Plantae/Pteridobiotina/Tracheophyta/Liliopsida/Poales/Poaceae/research/Poaceae/evidence.md#/records/claims/5
      referenceLocators:
        - referenceId: prasad-2005-grass-phytoliths
          locator: 1177–1180; Figure 1 stratigraphy; Figures 2–3 phytolith morphotypes; Supporting Online Text
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Poaceae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A densely sampled plastid phylogeny resolves major grass lineages and maps multiple C4 origins onto that tree; it does not date the Poaceae fossil first appearance or imply one ancestral C4 transition.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The sampled plastid matrix strongly supports many named nodes, while trait origins remain reconstructed and fossil chronology is outside the direct data.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The sampled plastid phylogeny resolves major grass lineages and maps multiple C4 origins, but its reconstructed topology does not date Poaceae or imply one ancestral C4 transition.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary analysis explicitly reports the sampled plastid topology and mapped transitions. Its taxon and genomic sampling delimit the statement, while fossil chronology and unsampled lineages remain outside the direct evidence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The late-Cretaceous grass evidence used here is confined to diagnostic phytolith morphotypes in Lameta Formation dinosaur coprolites in central India; it does not identify a geographic origin or global distribution of grasses.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The source directly documents the sampled assemblage and its stratigraphic setting, but phytolith affinity and one regional assemblage limit broader geographic interpretation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Fourteen central Great Plains palaeosol phytolith assemblages record a regional rise of chloridoid and other potentially C4 PACMAD grasses within heterogeneous mixed C3–C4 habitats; this does not establish global open-grassland dominance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The assemblage analysis directly quantifies its regional phytolith composition, while morphotype-to-photosynthetic-pathway assignment and the limited geographic sample prevent a family-wide or global ecological claim.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Latest-Cretaceous Lameta coprolites preserve phytolith morphotypes interpreted as diagnostic of grasses and assigned to at least five living-grass subclades; these microscopic remains are not a complete grass body plan.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The source directly illustrates and compares the phytolith morphotypes, but taxonomic affinity from isolated microremains remains the limiting interpretation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
Poaceae is displayed at 67–0 Ma only as a latest-Cretaceous-phytolith-to-living navigation anthology: diagnostic Lameta coprolite phytoliths support grass presence but do not establish a body-fossil FAD, exact crown origin or uninterrupted global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
Prasad et al. (2005) directly documents the latest-Cretaceous Lameta phytolith assemblage and comparative morphotypes. Contested confidence reflects taxonomic inference from phytoliths and a bounded assemblage rather than a whole-family body-fossil range.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
取样质体矩阵强力支持多个命名节点，但性状起源仍属重建，化石年代不在其直接数据范围内。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Prasad 等（2005）直接记录晚白垩世拉米塔植硅体组合及比较形态。争议置信度反映该分类归属来自植硅体推断且仅限一个组合，而非全科实体化石范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
取样质体系统树直接解析主要禾本科谱系并映射多次 C4 起源；其取样范围不提供化石年代，也不支持单一起源叙事。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
一手研究直接记录印度中部拉米塔组粪化石中的植硅体组合；单个区域组合与植硅体归属限制了更广泛的地理解释。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
大平原十四个古土壤组合直接量化了区域植硅体变化，但形态到光合途径的对应及有限地域范围不支持全球草原或全科生态结论。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
论文直接图示并比较拉米塔组植硅体形态；孤立微体的分类归属仍具争议，不能改写成完整禾草体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
采样的质体系统发育分析解析了主要禾草谱系，并映射出多次 C4 起源；但重建拓扑不能确定禾本科年代，也不表示只发生过一次祖先 C4 转变。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
此处采用的晚白垩世禾草证据限于印度中部 Lameta 组恐龙粪化石中具有诊断意义的植硅体形态类型，不能确定禾草的地理起源或全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
大平原中部的 14 个古土壤植硅体组合记录了：在异质性的 C3–C4 混合生境中，虎尾草亚科及其他可能采用 C4 光合作用的 PACMAD 禾草在区域内增加；这不能确立开阔草地在全球占主导地位。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
白垩纪最晚期的 Lameta 粪化石保存了被解释为禾草诊断特征的植硅体形态类型，并被归入至少五个现生禾草亚支；这些显微遗存并非完整禾草体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
高密度取样的质体系统树解析了主要禾本科支系，并在树上重建多次 C4 起源；它不为禾本科化石首现定年，也不暗示单次祖先性 C4 转变。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
Poaceae 的 67–0 Ma 仅作为“晚白垩世植硅体—现生类群”导航汇编：拉米塔粪化石中的诊断性植硅体支持禾本科存在，但不能确立实体化石首现、精确冠群起源或连续全球范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 67 Ma edge bounds the dated coprolite assemblage and diagnostic phytolith interpretation; it is not a body-fossil FAD, exact crown origin or continuous occupancy claim.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Prasad et al. report latest-Cretaceous phytolith morphotypes assigned to at least five living-grass subclades; 0 Ma denotes living Poaceae.
<!-- /evo:text -->
