---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:7411
    scientificName: Micrina
    commonName: Late Atdabanian Micrina scleritome sample
    commonNameZh: 晚阿特达班期小米克里纳虫骨片组合样本
    rank: genus
    parentName: Brachiopod origin dossier route
    extinct: true
    geography:
      - Wilkawillina Limestone
      - Arrowie Basin
      - South Australia
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
      - holmer-et-al-2008-micrina
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
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
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: holmer-et-al-2008-micrina
      referenceLinks:
        - referenceId: holmer-et-al-2008-micrina
          relation: supports
          pages: 724–727
          figure: Figures 2–3
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Holmer et al. 2008 DOI 10.1098/rsbl.2008.0277
      referenceLinks:
        - relation: supports
          referenceId: holmer-et-al-2008-micrina
          pages: 724–728
          figure: Figure 1; Table 1
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/1/referenceLinks/0/quoteLocator
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for the named stages and periods used to bound the source sample
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Holmer et al. 2008 DOI 10.1098/rsbl.2008.0277
      referenceLinks:
        - referenceId: holmer-et-al-2008-micrina
          relation: supports
          pages: 724–727
          figure: Figures 2–3; Table 1
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/2/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Holmer et al. 2008 DOI 10.1098/rsbl.2008.0277
      referenceLinks:
        - referenceId: holmer-et-al-2008-micrina
          relation: supports
          pages: 724–728
          figure: Figure 1; Table 1
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/3/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Holmer et al. 2008 DOI 10.1098/rsbl.2008.0277
      referenceLinks:
        - referenceId: holmer-et-al-2008-micrina
          relation: supports
          pages: 726–727
          figure: Figure 3
          quoteLocator: pp. 726–727, Figure 3, physical reconstruction of a sessile bivalved organism
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Holmer et al. 2008 DOI 10.1098/rsbl.2008.0277
      referenceLinks:
        - referenceId: holmer-et-al-2008-micrina
          relation: supports
          pages: 725–727
          figure: Figures 2–3
          quoteLocator: p. 726, Figure 2, sellate paired scars and mitral apophyses; pp. 726–727, Figure 3, physical bivalved reconstruction
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
    - entityPath: content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
      rangeKind: global-composite
      taxonomicConcept: Micrina — late Atdabanian study-sample window
      geographicScope: Wilkawillina Limestone and broadly synchronous late Atdabanian carbonate units sampled by Holmer et al.
      olderMa: 521
      youngerMa: 514.5
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
        - content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: holmer-et-al-2008-micrina
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Micrina

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Isolated Micrina sellate sclerites with paired muscle scars and mitral apophyses interpreted as muscle platforms support a reconstructed bivalved body and stem-brachiopod model; articulation, valve homology and direct ancestry are not preserved.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Observed sellate scars and mitral apophyses support reconstruction, while the muscle-platform interpretation, whole-body assembly and topology remain comparative hypotheses.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/0/quoteLocator -->
p. 726, Figure 2, sellate paired muscle scars and mitral apophyses; pp. 726–727, Figure 3, reconstruction and brachiopod comparison
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Micrina material from four localities in three broadly synchronous late Atdabanian carbonate units supports a conservative Cambrian Stage 3 study-sample envelope of 521–514.5 Ma, not a global genus range, a brachiopod origin date or a direct-ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The paper explicitly identifies the sampled units and relative age. Medium confidence reflects conversion to the broader modern Stage 3 envelope and the reconstructed nature of the whole body.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/1/referenceLinks/0/quoteLocator -->
p. 725, Wilkawillina Limestone; p. 727, Table 1, four localities in three broadly synchronous late Atdabanian carbonate units
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Micrina is retained as a tommotiid genus represented by isolated mitral and sellate sclerites; sellate paired muscle scars and mitral apophyses interpreted as muscle platforms inform a reconstructed bivalved arrangement, while valve homology and phylogenetic placement remain comparative hypotheses rather than preserved articulation.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Sclerite identities, sellate scars and mitral apophyses are directly documented, whereas the muscle-platform interpretation, whole-body assembly, valve homology and stem position are reconstructed and tested rather than observed in articulation.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/2/referenceLinks/0/quoteLocator -->
p. 726, Figure 2, sclerite morphology, sellate scars and mitral apophyses; pp. 726–727, Figure 3, reconstructed scleritome and comparison
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The represented Micrina material includes the Lower Cambrian Wilkawillina Limestone of the Arrowie Basin, South Australia, among four localities in three broadly synchronous carbonate units; these named collections do not establish a complete geographic distribution or an origin centre.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary study identifies the Wilkawillina locality and Table 1 lists four localities in three broadly synchronous units. High confidence is limited to the stated material localities, without inferring absence elsewhere.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/3/referenceLinks/0/quoteLocator -->
p. 725, Wilkawillina Limestone, Arrowie Basin; p. 727, Table 1, four localities in three broadly synchronous late Atdabanian carbonate units
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The reconstructed Micrina body is interpreted as sessile in an Early Cambrian marine carbonate setting, but diet, locomotion, guild and whole-body dimensions are not directly preserved by the isolated sclerites.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The proposed sessile habit follows the authors’ physical reconstruction and sclerite arrangement, while other ecological traits are withheld because the material is disarticulated skeletal evidence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
Micrina sellate phosphatic sclerites preserve paired muscle scars, whereas mitral sclerites bear apophyses interpreted as muscle platforms; their near-bilateral bivalved assembly is a reconstruction, not a fossil preserving both articulated valves.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
Sellate sclerite form, scars and mitral apophyses are direct observations. The muscle-platform interpretation and anatomical assembly are physically tested but remain inferences from isolated elements.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已观察 sellate 肌痕与 mitral 突起支持重建，但肌肉平台解释、整体组装与拓扑仍是比较假说。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
论文明确标出取样地点、单元及相对年代。中等置信度反映其被换算到更宽的现代第 3 期包络，也反映完整体制为重建结果。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
骨片类型、sellate 肌痕和 mitral 突起有直接记录，但肌肉平台解释、完整躯体组合、壳瓣同源性与干群位置均是经检验的重建，而不是被观察到的关节连接。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
一手研究识别了 Wilkawillina 地点，表 1 列出三个大致同时单元中的四个地点；高置信度仅限于这些具名材料地点，不据此推断其他地区缺失。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
固着习性来自作者对骨片排列的物理重建；由于材料是分离的骨骼证据，其他生态性状均被保留为未解。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
sellate 骨片形态和肌痕以及 mitral 突起是直接观察；肌肉平台解释与解剖组合虽在主要研究中经物理检验，仍由分离元素推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
孤立 Micrina sellate 骨片的成对肌痕，以及被解释为肌肉平台的 mitral 突起，支持双壳躯体重建与腕足动物干群模型；关节连接、壳瓣同源和直接祖先关系并未保存。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
来自三个大体同期晚 Atdabanian 碳酸盐岩单元中四个地点的 Micrina 材料，支持 5.210–5.145 亿年前的保守寒武纪第 3 期研究样本包络，而非该属全球延限、腕足动物起源时间或直接祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Micrina 保留为由分离的 mitral 与 sellate 骨片代表的托莫特虫类属；sellate 的成对肌痕和被解释为肌肉平台的 mitral 突起为双壳式排列重建提供依据，而壳瓣同源性与系统发育位置仍是比较假说，并非保存下来的关节连接。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所代表的 Micrina 材料包括澳大利亚南部 Arrowie 盆地的早寒武世 Wilkawillina 石灰岩，位于三个大致同时碳酸盐岩单元中的四个地点；这些具名采集材料并不能确立完整地理分布或起源中心。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
重建的 Micrina 躯体被解释为生活在早寒武世海洋碳酸盐环境中的固着型动物，但分离骨片并未直接保存食性、运动、功能群或完整躯体尺寸。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
Micrina 的 sellate 磷酸盐骨片保存成对肌痕，而 mitral 骨片具有被解释为肌肉平台的突起；其近两侧对称双壳式组合是重建，而不是保存两片相连壳瓣的化石。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Cambrian Stage 3 is a conservative envelope for the cited late Atdabanian material; it is not a global genus range or an origin date for Brachiopoda.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Holmer et al. identify Micrina material from four localities in three broadly synchronous late Atdabanian carbonate units; ICS v2026/06 supplies the Stage 3 boundaries.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 725–727; p. 725, Figure 1, Lower Cambrian Wilkawillina Limestone; p. 727, Table 1, four localities in three broadly synchronous late Atdabanian carbonate units
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
