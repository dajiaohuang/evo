---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Belemnitida
    commonName: Belemnites
    commonNameZh: 箭石类
    rank: order
    taxonId: txn:15832
    firstAppearance: 228
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Belemnitida
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
      reviewedAgainstReferenceVersion: stevens-2023-belemnites
      referenceLinks:
        - referenceId: stevens-2023-belemnites
          relation: supports
          pages: Article 26.1.a13
          quoteLocator: Figures 3–12; character matrix and Bayesian tip-dating
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Belemnitida
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
      reviewedAgainstReferenceVersion: Stevens et al. 2023 DOI 10.26879/1239
      referenceLinks:
        - relation: supports
          referenceId: stevens-2023-belemnites
          pages: Introduction pp. 3–4; Methods pp. 5–7
          figure: Table 1; Appendix 2
          quoteLocator: Twenty-four sampled species; first/last occurrence ages; 253.1 Ma origin offset; K–Pg terminal context
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for the named stages and periods used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Belemnitida
      rangeKind: global-composite
      taxonomicConcept: Belemnitida — tip-dated study and occurrence-calibration envelope
      geographicScope: Twenty-four sampled belemnite species across the group-level study interval
      olderMa: 253.1
      youngerMa: 66
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
        - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Belemnitida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: stevens-2023-belemnites
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Belemnitida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A Bayesian tip-dated morphology analysis tests relationships and diversification in sampled belemnites; topology and node ages remain conditional on character coding, fossil ages and priors.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The published matrix and tip ages permit explicit inference, while model dependence prevents treating its chronogram as a literal complete record.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Stevens et al. publish a 24-species belemnite sample, first and last occurrence inputs, a 253.1 Ma youngest permitted origin offset and terminal K–Pg context, supporting a 253.1–66.0 Ma study-defined envelope rather than exact global FAD, LAD or continuous occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The study exposes its occurrence data and calibration boundary directly. Medium confidence reflects tip-dating and calibration dependence and is limited to the published study envelope.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已发表矩阵和端点年龄允许明确推断，但模型依赖阻止把时间树当作字面完整记录。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
研究直接公开出现数据与校准界限。中等置信度反映尖端定年和校准依赖，并仅适用于论文定义的研究包络。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
贝叶斯端点定年形态分析检验了取样箭石的关系与多样化；拓扑和节点年代仍以性状编码、化石年龄和先验为条件。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Stevens 等公布了 24 个箭石物种样本、首末出现输入、2.531 亿年前的最年轻允许起源偏移值及白垩纪—古近纪界线终止背景，因此支持 2.531–0.660 亿年前的研究定义包络，而非精确全球首现、末现或连续占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older bound is the study calibration’s youngest permitted origin offset and the younger bound is the K–Pg endpoint; this is a study-defined envelope, not proof of exact global FAD or continuous occupancy.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Stevens et al. publish the sampled species, first and last occurrence inputs, a 253.1 Ma origin offset and the terminal K–Pg extinction context.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Introduction pp. 3–4; Methods pp. 5–7; Table 1; Appendix 2, sampled species and first/last occurrence ages; 253.1 Ma origin offset
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
