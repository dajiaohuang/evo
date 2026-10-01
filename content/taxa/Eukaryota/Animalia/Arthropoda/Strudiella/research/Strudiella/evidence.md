---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:243457
    scientificName: Strudiella
    commonName: Contested Late Devonian arthropod (originally interpreted as an insect)
    commonNameZh: 有争议的晚泥盆世节肢动物（原被解释为昆虫）
    rank: genus
    parentName: Early Hexapoda evidence route
    extinct: true
    geography:
      - Strud locality
      - Upper Devonian freshwater sediments, Belgium
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
    confidence: contested
    referenceIds:
      - garrouste-2012-strudiella
      - hornschemeyer-2013-strudiella
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Strudiella/research/Strudiella
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Garrouste et al. 2012 DOI 10.1038/nature11281; Hörnschemeyer et al. 2013 DOI 10.1038/nature11887
      referenceLinks:
        - referenceId: garrouste-2012-strudiella
          relation: supports
          pages: 82–85
          figure: Figures 1–4
          quoteLocator: Diagnosis, systematic description and phylogenetic interpretation
        - referenceId: hornschemeyer-2013-strudiella
          relation: supports
          pages: E3–E4; Figure 1
          figure: Figure 1
          quoteLocator: Re-investigation rejecting the insect interpretation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Strudiella/research/Strudiella
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Garrouste et al. 2012 DOI 10.1038/nature11281; Hörnschemeyer et al. 2013 DOI 10.1038/nature11887
      referenceLinks:
        - referenceId: garrouste-2012-strudiella
          relation: supports
          pages: 82–85
          figure: Figures 1–2
          quoteLocator: Strud locality, Upper Devonian freshwater sediments and specimen provenance
        - referenceId: hornschemeyer-2013-strudiella
          relation: supports
          pages: E3–E4; Figure 1
          figure: Figure 1
          quoteLocator: Re-investigation of the Strud specimen and its locality context
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Strudiella/research/Strudiella
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Garrouste et al. 2012 DOI 10.1038/nature11281; Hörnschemeyer et al. 2013 DOI 10.1038/nature11887
      referenceLinks:
        - referenceId: garrouste-2012-strudiella
          relation: supports
          pages: 82–85
          figure: Figures 2–4
          quoteLocator: Terrestrial interpretation and orthopteroid mandible discussion
        - referenceId: hornschemeyer-2013-strudiella
          relation: supports
          pages: E3–E4; Figure 1
          figure: Figure 1
          quoteLocator: Caution over ecological interpretation of the re-examined arthropod
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Strudiella/research/Strudiella
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Garrouste et al. 2012 DOI 10.1038/nature11281; Hörnschemeyer et al. 2013 DOI 10.1038/nature11887
      referenceLinks:
        - referenceId: garrouste-2012-strudiella
          relation: supports
          pages: 82–85
          figure: Figures 1–3
          quoteLocator: Specimen habitus, appendages and head description
        - referenceId: hornschemeyer-2013-strudiella
          relation: supports
          pages: E3–E4; Figure 1
          figure: Figure 1
          quoteLocator: Critical re-examination of proposed insect characters
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Strudiella/research/Strudiella
      claimType: fossil-range
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
      reviewedAgainstReferenceVersion: Garrouste et al. 2012 DOI 10.1038/nature11281; Hörnschemeyer et al. 2013 DOI 10.1038/nature11887
      referenceLinks:
        - referenceId: garrouste-2012-strudiella
          relation: supports
          pages: 82–85
          figure: Figures 1–2
          quoteLocator: Late Devonian age and Strud specimen context
        - referenceId: hornschemeyer-2013-strudiella
          relation: supports
          pages: E3–E4; Figure 1
          figure: Figure 1
          quoteLocator: Re-investigation of the Late Devonian Strud specimen
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
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Strudiella/research/Strudiella
      rangeKind: global-composite
      taxonomicConcept: Strudiella devonica single contested Strud specimen
      geographicScope: Strud locality, Upper Devonian freshwater sediments, Belgium
      olderMa: 365
      youngerMa: 365
      status: available
      uncertainty:
        olderMa: 5
        youngerMa: 5
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: contested
      claimPaths:
        - content/events/Strudiella_insect_diagnosis_and_re-assessment/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Arthropoda/Strudiella/research/Strudiella/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: garrouste-2012-strudiella
          locator: pp. 82–85; Figures 1–4; Late Devonian Strud locality and specimen description
        - referenceId: hornschemeyer-2013-strudiella
          locator: pp. E3–E4; re-investigation of the same Strud specimen
      reviewStatus: automated-audit-passed
---

# Strudiella

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Strudiella devonica was originally described as a Late Devonian insect, but a later primary re-investigation rejected that identification; its placement is retained as a contested arthropod interpretation.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named specimen and original diagnosis are directly documented, while an independent re-examination disputes the insect characters; the atlas does not force either interpretation beyond the cited material.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profiled Strudiella specimen comes from Upper Devonian freshwater sediments at the Strud locality in Belgium; this records one deposit and not a complete geographic distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Both primary papers identify the Strud locality and its Upper Devonian freshwater setting. High confidence is limited to the named specimen and deposit, without inferring absence elsewhere.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The original reconstruction inferred a terrestrial, probably omnivorous arthropod from the Strud mandible interpretation, but neither feeding behaviour nor a population-wide ecological guild is directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The omnivorous orthopteroid-mandible and terrestrial interpretations occur in the original study, while the later re-examination disputes the key insect identification; ecological language therefore remains conditional.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The nearly complete Strudiella specimen preserves a segmented body, antennae and legs; the proposed dicondylic mandibles and pterygote features are disputed after re-examination.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Gross body preservation is documented in the primary description, but the diagnostic head structures that supported an insect assignment are the subject of a direct critical re-analysis.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The approximately 365 Ma display point is the Strud specimen's Late Devonian deposit age, not a global Strudiella range, insect FAD or arthropod lineage origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The primary description places the specimen in the Late Devonian at about 365 Ma, but one disputed specimen cannot establish genus-wide or insect-wide temporal endpoints.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
同一具名标本的原始昆虫诊断与后续再研究的否定结论均有一手文献支持，因此保留争议分类，不外推为可靠昆虫校准。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
两项一手研究均明确指出 Strud 地点与上泥盆世淡水沉积背景；高置信度仅适用于该标本与沉积地点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
陆生和可能杂食的解释依赖原始颚部鉴定，而关键昆虫鉴定已被再研究质疑，因此生态字段保持条件性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
近乎完整躯体、触角和足可由图版直接核对，但支持昆虫归属的头部性状在一手再研究中存在明确争议。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
约 365 Ma 数值仅转换晚泥盆世 Strud 沉积背景；单一且归属有争议的标本不能给出全球延限或节肢动物谱系起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Strudiella devonica 最初被描述为晚泥盆世昆虫，但后续一手再研究否定了这一鉴定；其位置保留为有争议的节肢动物解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
档案中的 Strudiella 标本来自比利时 Strud 地点的上泥盆世淡水沉积物；这只记录一个沉积地点，不是完整地理分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
原始复原根据 Strud 颚部解释推断其为陆生、可能杂食的节肢动物，但摄食行为和种群层面的生态功能群均未被直接观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
近乎完整的 Strudiella 标本保存了分节躯体、触角和足；所提出的双髁颚与有翅类特征在再研究后存在争议。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
约 365 Ma 的显示点是 Strud 标本的晚泥盆世沉积年龄，不是 Strudiella 的全球延限、昆虫首现或节肢动物谱系起源时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The approximately 365 Ma point is a rounded Late Devonian deposit age for one disputed specimen, not a global range or insect first appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The original description places the nearly complete specimen in Late Devonian freshwater sediments at Strud; a later re-investigation disputes its insect identity.
<!-- /evo:text -->
