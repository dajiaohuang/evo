---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:38862
    scientificName: Triceratops
    commonName: Triceratops
    commonNameZh: 三角龙
    rank: genus
    parentName: Ceratopsia
    extinct: true
    geography:
      - Hell Creek Formation cranial sample, northeastern Montana, United States
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
      - longrich-field-2012-triceratops-taxonomy
      - scannella-2014-triceratops-evolution
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/Ceratopsidae/Chasmosaurinae/Triceratopsini/Triceratops/research/Triceratops
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: longrich-field-2012-triceratops-taxonomy concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: longrich-field-2012-triceratops-taxonomy
          relation: supports
          pages: 7(2):e32623
          figure: Figures 1–9; Tables 1–2
          quoteLocator: Methods; cranial comparisons; ontogenetic tests; Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/Ceratopsidae/Chasmosaurinae/Triceratopsini/Triceratops/research/Triceratops
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
      reviewedAgainstReferenceVersion: longrich-field-2012-triceratops-taxonomy @ DOI 10.1371/journal.pone.0032623
      referenceLinks:
        - relation: supports
          referenceId: longrich-field-2012-triceratops-taxonomy
          pages: 7(2):e32623
          figure: Figures 1–9; Tables 1–2
          quoteLocator: Methods; cranial comparisons; ontogenetic tests; Discussion
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/Ceratopsidae/Chasmosaurinae/Triceratopsini/Triceratops/research/Triceratops
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Scannella et al. 2014 DOI 10.1073/pnas.1313334111
      referenceLinks:
        - referenceId: scannella-2014-triceratops-evolution
          relation: supports
          pages: 10245–10250
          figure: Figures 1–2; Dataset S1
          quoteLocator: "Results: stratigraphic placement and cranial-character variation"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/Ceratopsidae/Chasmosaurinae/Triceratopsini/Triceratops/research/Triceratops
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
      reviewedAgainstReferenceVersion: Scannella et al. 2014 DOI 10.1073/pnas.1313334111
      referenceLinks:
        - referenceId: scannella-2014-triceratops-evolution
          relation: supports
          pages: 10245–10250
          figure: Figure 1; Dataset S1
          quoteLocator: "Methods and Results: Hell Creek Project sample and stratigraphic positions"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/Ceratopsidae/Chasmosaurinae/Triceratopsini/Triceratops/research/Triceratops
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Longrich and Field 2012 DOI 10.1371/journal.pone.0032623; Scannella et al. 2014 DOI 10.1073/pnas.1313334111
      referenceLinks:
        - referenceId: longrich-field-2012-triceratops-taxonomy
          relation: supports
          pages: 7(2):e32623
          figure: Figures 1–9; Tables 1–2
          quoteLocator: Methods, cranial comparisons and ontogenetic tests
        - referenceId: scannella-2014-triceratops-evolution
          relation: supports
          pages: 10245–10250
          figure: Figures 1–3; Dataset S1
          quoteLocator: "Methods and Results: skull sample and stratigraphic analysis"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/Ceratopsidae/Chasmosaurinae/Triceratopsini/Triceratops/research/Triceratops
      rangeKind: global-composite
      taxonomicConcept: Triceratops — source-bounded sample window
      geographicScope: Latest Cretaceous western North American cranial sample in Longrich and Field
      olderMa: 68
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Dinosauromorpha/Dinosauriformes/Dinosauria/Ornithischia/Neornithischia/Pyrodontia/Cerapoda/Marginocephalia/Ceratopsia/Ceratopsidae/Chasmosaurinae/Triceratopsini/Triceratops/research/Triceratops/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: longrich-field-2012-triceratops-taxonomy
          locator: 7(2):e32623; Methods; cranial comparisons; ontogenetic tests; Discussion
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Triceratops

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Triceratops remains a separately diagnosed genus in Longrich and Field’s sampled ontogenetic comparison with Torosaurus; the result is one side of an active taxonomic hypothesis and does not determine the genus’s complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The skull measurements and ontogenetic tests are explicit, but competing studies interpret synonymy differently. Contested confidence records the unresolved taxonomic dispute.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Triceratops is displayed at 68–66 Ma only as the sampled latest-Maastrichtian material used in the Triceratops–Torosaurus test, not complete genus endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Triceratops uses Longrich, N.R.; Field, D.J. (2012) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Latest Cretaceous western North American cranial sample in Longrich and Field; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
In the stratigraphically controlled Hell Creek skull sample, nasal-horn, rostrum and postorbital-horn characters vary among specimens and intermediate character combinations occur in the middle unit; these are sampled cranial observations, not a direct ancestor–descendant series.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The study documents measurements, specimen positions and cranial characters directly, while any evolutionary sequence is an analytical interpretation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
This profile's geographic statement is limited to the northeastern Montana Hell Creek Formation skull sample; it does not assert a genus-wide geographic range or distributional preference.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The localities and stratigraphic placement of the analyzed specimens are explicit, but the study does not establish a complete genus distribution.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The cited cranial and stratigraphic studies do not directly determine diet, habitat preference, locomotion, body size or ecological guild for Triceratops; those profile fields are explicitly withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The studies test cranial variation, ontogeny and stratigraphic distribution rather than the listed ecological attributes.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
头骨测量和个体发育检验明确，但竞争研究对同物异名有不同解释；有争议置信度记录未解决的分类争论。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Triceratops 采用 Longrich, N.R.; Field, D.J.（2012）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Latest Cretaceous western North American cranial sample in Longrich and Field；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
研究直接记录了测量值、标本层位和头骨特征；任何演化序列仍是分析性解释。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
分析标本的地点和地层位置均有明确记录，但不能据此建立该属的完整地理分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
这些研究检验的是头骨变异、个体发育和地层分布，而非所列生态属性，因此相关字段明确保留为空缺。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在具有明确地层约束的 Hell Creek 头骨样本中，鼻角、吻部及眶后角特征在标本间存在差异，中部地层单元中出现了中间型特征组合；这些是采样所得的头骨观察，并非直接的祖先—后代序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本档案的地理说明仅限于蒙大拿州东北部 Hell Creek 组的头骨样本，不代表整个属的地理范围或分布偏好。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所引头骨和地层研究未直接确定 Triceratops 的食性、生境偏好、运动方式、体型或生态功能类群；本档案明确暂不填写这些字段。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
在 Longrich 与 Field 对三角龙和牛角龙的取样个体发育比较中，三角龙仍是独立诊断属；该结果是持续分类争论的一种假说，不决定该属完整范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Triceratops 仅以 68–66 Ma 展示为用于检验 Triceratops–Torosaurus 假说的晚马斯特里赫特期样本，而非该属完整端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the sampled latest-Maastrichtian material used in the Triceratops–Torosaurus test, not complete genus endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Torosaurus Is Not Triceratops: Ontogeny in Chasmosaurine Ceratopsids as a Case Study in Dinosaur Taxonomy directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
