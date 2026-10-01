---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:30820
    scientificName: Blastoidea
    commonName: Blastoids
    commonNameZh: 海蕾类
    rank: class
    parentName: Echinodermata
    extinct: true
    geography:
      - Source-bounded Sandbian and Wuchiapingian records
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
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: medium
    referenceIds:
      - bauer-2019-macurdablastus
      - paul-2021-blastoid-hydrospires
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Blastozoa/Blastoidea/research/Blastoidea
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: Bauer 2019 DOI 10.1111/pala.12439 and Paul 2021 DOI 10.1016/j.palaeo.2021.110482
      referenceLinks:
        - relation: supports
          referenceId: bauer-2019-macurdablastus
          pages: 1003–1013
          figure: Figures 1E–F and 2
          quoteLocator: "Abstract; Macurdablastus as a key to understanding Eublastoidea; Systematic palaeontology: Class Blastoidea"
        - relation: supports
          referenceId: paul-2021-blastoid-hydrospires
          quoteLocator: "Introduction, first paragraph: late Sandbian Macurdablastus to Upper Permian Wuchiapingian range"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Blastozoa/Blastoidea/research/Blastoidea
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bauer-2019-macurdablastus at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: bauer-2019-macurdablastus
          relation: supports
          pages: 1003–1013
          figure: Figures 1E–F and 2
          quoteLocator: "Abstract and Systematic palaeontology: Class Blastoidea"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Blastozoa/Blastoidea/research/Blastoidea
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bauer-2019-macurdablastus and paul-2021-blastoid-hydrospires at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: bauer-2019-macurdablastus
          relation: supports
          pages: 1003–1013
          quoteLocator: Macurdablastus occurrence and systematic context
        - referenceId: paul-2021-blastoid-hydrospires
          relation: supports
          quoteLocator: Introduction, reported late Sandbian to Wuchiapingian range
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Blastozoa/Blastoidea/research/Blastoidea
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bauer-2019-macurdablastus and paul-2021-blastoid-hydrospires at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: bauer-2019-macurdablastus
          relation: supports
          pages: 1003–1013
          quoteLocator: Systematic palaeontology and stated study scope
        - referenceId: paul-2021-blastoid-hydrospires
          relation: supports
          quoteLocator: Functional-significance scope and range discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Blastozoa/Blastoidea/research/Blastoidea
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: bauer-2019-macurdablastus and paul-2021-blastoid-hydrospires at 2026.08-static-v5-rc76
      referenceLinks:
        - referenceId: bauer-2019-macurdablastus
          relation: supports
          pages: 1003–1013
          figure: Figures 1E–F and 2
          quoteLocator: "Systematic palaeontology: Class Blastoidea"
        - referenceId: paul-2021-blastoid-hydrospires
          relation: supports
          quoteLocator: Functional and evolutionary significance of blastoid hydrospires
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
    - entityPath: content/taxa/Eukaryota/Animalia/Echinodermata/Blastozoa/Blastoidea/research/Blastoidea
      rangeKind: global-composite
      taxonomicConcept: Blastoidea
      geographicScope: Global or represented navigation composite
      olderMa: 455
      youngerMa: 255
      status: available
      uncertainty:
        olderMa: 3
        youngerMa: 1
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Echinodermata/Blastozoa/Blastoidea/research/Blastoidea/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: bauer-2019-macurdablastus
          locator: "p. 1003; Figures 1E–F and 2; Systematic palaeontology: Class Blastoidea"
        - referenceId: paul-2021-blastoid-hydrospires
          locator: Introduction, first paragraph
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Blastoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The supported blastoid record used here extends from the Sandbian Macurdablastus uniplicatus to a Wuchiapingian last occurrence near 255 Ma; a Permian–Triassic boundary endpoint would be an extinction inference rather than the observed last appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Macurdablastus is directly documented and treated as a blastoid outside Eublastoidea, while the younger endpoint is a literature synthesis of the youngest reported record. Both endpoints remain sensitive to taxonomic revision and future sampling.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Macurdablastus uniplicatus is treated in the cited revision as a blastoid outside Eublastoidea, providing a source-bounded class record rather than a claim about every blastoid relationship.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The revision directly redefines Eublastoidea around a named taxon, but broader blastoid relationships remain subject to taxonomic revision and sampling.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The displayed blastoid evidence is restricted to named Sandbian and Wuchiapingian records in its source studies and does not establish a global distribution, origin centre or extinction geography.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The references document record endpoints, not a geographically complete blastoid occurrence census.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The cited systematic and hydrospire studies do not establish a class-wide diet, habitat preference, locomotor performance, body-size distribution or guild for Blastoidea; these fields remain unresolved.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The evidence is limited to named fossil morphology and a functional discussion, not a whole-class ecology reconstruction.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Macurdablastus is a named blastoid with source-described morphology, and hydrospire interpretation is retained as a source-bounded functional-morphology result rather than a class-wide invariant trait.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The references directly support named anatomical and functional-morphology discussions, but their scope does not cover all blastoid variation.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Macurdablastus 的桑比期出现有直接标本支持，年轻端点则来自对已报道最晚记录的文献综合；两端仍会受分类修订和采样影响。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
修订研究直接处理 Macurdablastus 与 Eublastoidea 的关系，但更广泛的海蕾类关系仍会受分类修订和取样影响，故保持中等置信度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
两项来源记录的是具名桑比期和五家坪期端点，并不是全球海蕾类出现记录普查，不能据此推断起源中心、分布或灭绝地理。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
系统分类与水腔功能讨论都不能建立海蕾类全纲的饮食、栖息地、运动、体型或营养类群；未获支持的生态概括被明确保留。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
来源直接支持具名 Macurdablastus 的形态与水腔功能讨论，但其范围不足以覆盖所有海蕾类变异，故不写成全纲恒定性状。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
所显示的海蕾类证据限于来源研究中具名的桑比期和吴家坪期记录，不能确定全球分布、起源中心或灭绝的地理格局。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
所引分类及呼吸褶研究不能确定整个海蕾纲的食性、生境偏好、运动性能、体型分布或生态功能群；这些字段保持未定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Macurdablastus 是来源文献中具有形态描述的具名海蕾类；呼吸褶的解释保留为来源限定的功能形态学结果，而非整个纲不变的性状。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引修订将 Macurdablastus uniplicatus 作为 Eublastoidea 之外的海蕾类处理，提供来源限定的纲级记录，而非对所有海蕾类亲缘关系的判定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
本图谱采用的有支持冠石纲记录从桑比期 Macurdablastus uniplicatus 延续至约 2.55 亿年前吴家坪期的最晚出现；二叠纪—三叠纪界线端点属于灭绝推断，而不是已观察到的末次出现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is a rounded Sandbian occurrence and the younger endpoint is the reported Wuchiapingian last record. A 251.9 Ma boundary endpoint would be an extinction inference rather than an observed LAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Macurdablastus anchors the Sandbian blastoid record, while the youngest documented occurrence summarized in the cited literature is Wuchiapingian near 255 Ma.
<!-- /evo:text -->
