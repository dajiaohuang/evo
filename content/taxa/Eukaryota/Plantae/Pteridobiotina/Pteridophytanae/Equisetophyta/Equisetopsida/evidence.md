---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Equisetopsida
    commonName: Horsetails
    commonNameZh: 木贼类
    rank: class
    taxonId: txn:54758
    firstAppearance: 375
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Pteridophytanae/Equisetophyta/Equisetopsida
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated primary-source review
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Elgorriaga et al. 2018 DOI 10.1002/ajb2.1125; full-text discussion inspected 2026-09-05
      referenceLinks:
        - referenceId: elgorriaga-2018-horsetails
          relation: supports
          figure: Figure 3
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Pteridophytanae/Equisetophyta/Equisetopsida
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
      reviewedAgainstReferenceVersion: elgorriaga-2018-horsetails
      referenceLinks:
        - referenceId: elgorriaga-2018-horsetails
          relation: supports
          pages: 1286–1303
          quoteLocator: Materials and methods; Figures 2–5; phylogenetic results
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Pteridobiotina/Pteridophytanae/Equisetophyta/Equisetopsida
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: elgorriaga-2018-horsetails locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: elgorriaga-2018-horsetails
          pages: 105:1286–1303
          figure: Table 1; Figure 3
          quoteLocator: Premise and fossil-inclusive Sphenopsida analysis
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Famennian numerical boundary
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
    - entityPath: content/taxa/Eukaryota/Plantae/Pteridobiotina/Pteridophytanae/Equisetophyta/Equisetopsida
      rangeKind: global-composite
      taxonomicConcept: Sphenopsida / Equisetopsida Devonian-to-living navigation lineage
      geographicScope: Famennian sphenopsid record through living Equisetum
      olderMa: 372.2
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Plantae/Pteridobiotina/Pteridophytanae/Equisetophyta/Equisetopsida/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: elgorriaga-2018-horsetails
          locator: 1286–1303; premise; Table 1; Figure 3; Devonian Sphenopsida record and fossil-inclusive matrix
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; Famennian boundary
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Equisetopsida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Elgorriaga and colleagues infer progressive size reduction and compact strobili along the Equisetaceae plus Neocalamites lineage, with modern-horsetail-like character combinations present by Jurassic times; this is a topology-dependent trend, not a body plan shared by all Equisetopsida.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The discussion explicitly presents the trend as an implication of the recovered topology and uses tentative language for size reduction.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/0/quoteLocator -->
Discussion immediately before Age of the Equisetum crown group: contrasting Calamitaceae and Equisetaceae plus Neocalamites trajectories
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
A combined living-and-fossil character analysis places Equisetum within sampled sphenopsids and reconstructs horsetail transitions; this is a matrix-dependent topology, not an Equisetopsida origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Living and fossil terminals broaden the comparison, but character coding and incomplete fossils keep the deep branching pattern model-dependent.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Equisetopsida is displayed at 372.2–0 Ma only as a Sphenopsida/Equisetopsida Devonian-to-living navigation lineage; it is not a crown-Equisetum origin date, direct-ancestor chain or claim that one species persisted throughout.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Elgorriaga et al. (2018) explicitly describes Sphenopsida as having a Devonian fossil history and analyses fossil plus living horsetails. Medium confidence is restricted to that broad navigation concept and named-interval conversion.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
讨论明确将该趋势作为所恢复拓扑的推论，并对体型缩小采用试探性措辞。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
现生与化石末端扩大了比较范围，但性状编码和不完整化石使深层分支格局仍依赖模型。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Elgorriaga 等（2018）明确描述楔叶类具有泥盆纪化石史，并分析化石与现生木贼。中等置信度仅限于这一宽泛导航概念及命名区间换算。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Elgorriaga 及同事推断，木贼科与 Neocalamites 所在谱系逐渐缩小并形成紧凑的孢子穗，到侏罗纪已有近似现代木贼的性状组合；这是依赖所恢复拓扑的演化趋势，而非全部木贼类共有的体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
现生与化石性状联合分析把木贼属置于取样楔叶类之中并重建木贼类转变；这是依赖矩阵的拓扑，并非木贼纲起源年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Equisetopsida 的 372.2–0 Ma 仅作为广义楔叶类／木贼纲从泥盆纪到现生的导航谱系；它不是冠群木贼属起源日期、直接祖先链或单一物种持续存在的断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The display follows the broad Sphenopsida concept used in the source, not crown Equisetum; 372.2 Ma is a named-interval conversion rather than a specimen-level date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Elgorriaga et al. synthesize a Devonian sphenopsid fossil history and sample fossil and living horsetails; ICS supplies the Famennian numerical boundary.
<!-- /evo:text -->
