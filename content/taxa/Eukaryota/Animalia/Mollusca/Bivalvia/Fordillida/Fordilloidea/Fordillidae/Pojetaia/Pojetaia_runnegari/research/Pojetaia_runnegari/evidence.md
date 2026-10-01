---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:65583
    scientificName: Pojetaia runnegari
    commonName: Cambrian Pojetaia shell sample
    commonNameZh: 寒武纪波杰塔贝壳样本
    rank: species
    parentName: Bivalvia
    extinct: true
    geography:
      - Ajax Limestone, South Australia
      - Erkeket Formation, South Australia
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
      - vendrasco-et-al-2011-pojetaia
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: vendrasco-et-al-2011-pojetaia
      referenceLinks:
        - referenceId: vendrasco-et-al-2011-pojetaia
          relation: supports
          pages: 825–850
          figure: Figures 1–12; Tables 1–2
          quoteLocator: Pojetaia material; shell microstructure; discussion of foliated aragonite and nacre
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari
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
      reviewedAgainstReferenceVersion: Vendrasco et al. 2011 DOI 10.1111/j.1475-4983.2011.01056.x
      referenceLinks:
        - relation: supports
          referenceId: vendrasco-et-al-2011-pojetaia
          pages: 825–850
          figure: Plate 1
          quoteLocator: pp. 826–829, Materials and methods; more than 50 UNEL 1872 specimens; Botomian unit correlations
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for the named stages and periods used to bound the source sample
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: vendrasco-et-al-2011-pojetaia DOI 10.1111/j.1475-4983.2011.01056.x
      referenceLinks:
        - referenceId: vendrasco-et-al-2011-pojetaia
          relation: supports
          pages: 825–850
          figure: Figures 1–12; Tables 1–2
          quoteLocator: Systematic palaeontology and description of Pojetaia runnegari shell material
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: vendrasco-et-al-2011-pojetaia DOI 10.1111/j.1475-4983.2011.01056.x
      referenceLinks:
        - referenceId: vendrasco-et-al-2011-pojetaia
          relation: supports
          pages: 826–829
          figure: Figure 1; Plate 1
          quoteLocator: Locality and stratigraphic context for Pojetaia material; Ajax Limestone and Erkeket Formation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: vendrasco-et-al-2011-pojetaia DOI 10.1111/j.1475-4983.2011.01056.x
      referenceLinks:
        - referenceId: vendrasco-et-al-2011-pojetaia
          relation: supports
          pages: 825–850
          figure: Figures 1–12
          quoteLocator: Shell-material description and discussion; no direct feeding or locomotion evidence
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
    - entityPath: content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari
      rangeKind: global-composite
      taxonomicConcept: Pojetaia runnegari — Botomian shell-material window
      geographicScope: Ajax Limestone and Erkeket Formation shell sections represented by Vendrasco et al.
      olderMa: 514.5
      youngerMa: 506.5
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
        - content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: vendrasco-et-al-2011-pojetaia
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Pojetaia runnegari

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pojetaia runnegari shell sections preserve laminar inner fabric comparable to foliated aragonite, while undisputed nacre and broader evolutionary precursors remain interpretive.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named shell material supports morphology directly, while diagenesis and comparative homology bound the inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
More than fifty Pojetaia specimens from probably Botomian Ajax Limestone and lowermost Botomian Erkeket Formation units support a Cambrian Stage 4 sample envelope of 514.5–506.5 Ma; this is not an exhaustive global genus FAD or LAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The paper directly documents the shell material and qualified regional correlations. Medium confidence is limited to the conservative Stage 4 envelope because one correlation is explicitly probable.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Vendrasco et al. treat the studied shell material as Pojetaia runnegari; the profile retains that species-level identification while keeping bivalve-wide evolutionary placement conditional.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The named shell material and systematic assignment are reported in the primary study, while higher placement and evolutionary implications are comparative.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The documented Pojetaia runnegari shell sample is bounded to the Ajax Limestone and Erkeket Formation of South Australia; these localities do not establish the complete geographic distribution of the genus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The named formations and regional setting are reported for the studied material, whereas a complete distribution would require additional occurrences.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Pojetaia shell sections document mineralized shell microstructure but do not directly preserve feeding, locomotion, body size or ecological guild; any shallow-marine setting is limited to the sampled formations.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The primary paper describes shell material and its depositional units, but isolated shell sections do not directly resolve organismal behaviour or ecology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名贝壳材料直接支持形态观察，但成岩作用和比较同源性限制了推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
论文直接记录壳体材料及带限定语的区域对比。由于其中一项对比明确为“可能”，中等置信度仅适用于保守的第 4 期包络。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
具名贝壳材料及其系统分类由主论文报告；更高阶位置和演化含义属于比较推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
论文直接报告取样地层和区域环境；完整地理分布需要更多产出，不能由这些地点外推。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
主论文描述贝壳材料和沉积地层，但孤立贝壳切片不能直接解析个体行为或生态，因此保持有界表述。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Pojetaia runnegari 贝壳切片保存可与叶片状霰石比较的层状内织构，而无争议珍珠层及更广演化前体仍属解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
来自“可能为 Botomian”的 Ajax 石灰岩与最下部 Botomian Erkeket 组的 50 余件 Pojetaia 标本，支持 5.145–5.065 亿年前的寒武纪第 4 期样本包络；这不是该属穷尽性的全球首现或末现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Vendrasco 等将所研究的贝壳材料归入 Pojetaia runnegari；本档案保留该物种级鉴定，同时将双壳纲范围的演化位置保持为有条件的比较结论。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
有文献记录的 Pojetaia runnegari 贝壳样本限定于南澳大利亚的 Ajax 石灰岩和 Erkeket 组；这些地点不能确立该属的完整地理分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Pojetaia 贝壳切片记录了矿化贝壳的微结构，但没有直接保存摄食、运动、体型或生态类群；任何浅海环境判断都限定于取样地层。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This Cambrian Stage 4 envelope is limited to the cited shell material and its qualified Botomian correlations; it is not an exhaustive global genus FAD or LAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The study documents more than fifty Pojetaia specimens from probably Botomian and lowermost Botomian units; ICS v2026/06 supplies the conservative Stage 4 bounds.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
825–850; pp. 826–829, Materials and methods; more than 50 UNEL 1872 specimens; Ajax Limestone probably Botomian and Erkeket Formation lowermost Botomian; Plate 1
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
