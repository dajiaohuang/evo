---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:135928
    scientificName: Morotopithecus bishopi
    commonName: Moroto postcranial sample
    commonNameZh: 莫罗古猿姿势骨骼样本
    rank: genus
    parentName: Hominoidea
    extinct: true
    geography:
      - Moroto I
      - Moroto II
      - Karamoja District, Uganda
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
      - maclatchy-2000-morotopithecus
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/0/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/sourceIds/0
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/1/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/sourceIds/0
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/2/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/sourceIds/0
    readerSources:
      referenceBindings:
        - referenceId: maclatchy-2000-morotopithecus
          metadataVariant: 0
          sourceKey: maclatchy-2000-morotopithecus
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
    readerLimitations:
      en:
        markdown: page.en.md
        field: /records/atlas-profile/readerLimitations/en
      zh:
        markdown: page.zh.md
        field: /records/atlas-profile/readerLimitations/zh
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Proconsulidae/Morotopithecus/research/Morotopithecus_bishopi
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: maclatchy-2000-morotopithecus concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: maclatchy-2000-morotopithecus
          pages: 159–183
          figure: Figures 1–12
          quoteLocator: Specimen descriptions; locality context; functional comparisons
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Proconsulidae/Morotopithecus/research/Morotopithecus_bishopi
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas RC84 package authoring
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: maclatchy-2000-morotopithecus @ DOI 10.1006/jhev.2000.0407
      referenceLinks:
        - referenceId: maclatchy-2000-morotopithecus
          relation: supports
          pages: 159–183
          figure: Figures 1–12; Tables 1–10
          quoteLocator: Specimen descriptions, attribution and functional-comparative discussion of MUZM 60 and MUZM 80
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Proconsulidae/Morotopithecus/research/Morotopithecus_bishopi
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas RC84 package authoring
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: maclatchy-2000-morotopithecus @ DOI 10.1006/jhev.2000.0407
      referenceLinks:
        - referenceId: maclatchy-2000-morotopithecus
          relation: supports
          pages: 159–183
          figure: Figures 1–2
          quoteLocator: Discovery and geochronology; Moroto I and Moroto II locality context for MUZM 60 and MUZM 80
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Proconsulidae/Morotopithecus/research/Morotopithecus_bishopi
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas RC84 package authoring
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: maclatchy-2000-morotopithecus @ DOI 10.1006/jhev.2000.0407
      referenceLinks:
        - referenceId: maclatchy-2000-morotopithecus
          relation: supports
          pages: 159–183
          figure: Figures 3–12; Tables 1–10
          quoteLocator: Shoulder and femoral functional comparisons; discussion of locomotor implications
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Proconsulidae/Morotopithecus/research/Morotopithecus_bishopi
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas RC84 package authoring
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: maclatchy-2000-morotopithecus @ DOI 10.1006/jhev.2000.0407
      referenceLinks:
        - referenceId: maclatchy-2000-morotopithecus
          relation: supports
          pages: 159–183
          figure: Figures 3–12; Tables 1–10
          quoteLocator: Morphological descriptions and measurements of the separate shoulder and femoral material
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Proconsulidae/Morotopithecus/research/Morotopithecus_bishopi
      rangeKind: global-composite
      taxonomicConcept: Morotopithecus Moroto postcranial model occurrence
      geographicScope: Moroto I and Moroto II, Karamoja District, Uganda
      olderMa: 21
      youngerMa: 20.6
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
        - content/events/Morotopithecus_Moroto_postcranial_model/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: maclatchy-2000-morotopithecus
          locator: 159–183; Figures 1–12; Tables 1–10
      reviewStatus: automated-audit-passed
---

# Morotopithecus bishopi

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
Comparative analysis of separate shoulder and femoral specimens from Moroto I and II; functional reconstruction is specimen bounded.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
比较 Moroto I、II 的分离肩部与股骨标本；功能重建受具体标本范围限制。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Morotopithecus is bounded by separate Moroto I and II postcranial specimens MUZM 60 and MUZM 80 in an approximately 21–20.6 Ma locality interval; they are not one skeleton, and locomotor or crown-hominoid placement remains comparative.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named specimens and localities are direct evidence. The statement preserves non-association and functional/topological uncertainty.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
MacLatchy and colleagues attribute the separately described Moroto postcranial specimens MUZM 60 and MUZM 80 to Morotopithecus bishopi for functional comparison, without making them an associated skeleton or a demonstrated direct crown-hominoid ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The paper names and compares the specimens, while their attribution, association and higher-level evolutionary implications remain separate comparative inferences.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profiled Morotopithecus material is bounded to Moroto I and Moroto II in Uganda's Karamoja District; the two locality records do not demonstrate a species-wide distribution or an ape dispersal route.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Named specimens and locality context are directly reported in the primary study, whereas distribution beyond those sampled localities is not observed.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Comparative functional analysis of the separate Moroto shoulder and femoral specimens supports a mixed arboreal locomotor interpretation, while diet, habitual habitat and ecological guild are not directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
Detailed functional comparisons support the locomotor inference, but fossils do not observe behaviour, diet or a complete ecological niche and the specimens are not associated.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
MUZM 60 and MUZM 80 preserve separate shoulder and femoral anatomies described and measured in the Moroto study; the material is not one complete skeleton.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The paper directly figures, measures and compares the two postcranial specimens, with the non-association limiting whole-body reconstruction.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名标本与地点属于直接证据；表述保留非关联性及功能、拓扑不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
论文对具名标本进行归属和比较，但其归属、关联关系及更高阶演化含义仍是彼此独立的比较推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
具名标本与地点背景由一手论文直接报告，而超出这些取样地点的分布并未被观察到。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
细致的功能比较支持运动方式推断，但化石不能直接观察行为、食性或完整生态位，且两件标本并不关联。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
论文直接绘图、测量并比较两件姿势骨骼标本；二者不关联限制了对完整身体的重建。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Morotopithecus 由 Moroto I 与 II 的两件独立头后标本 MUZM 60 和 MUZM 80 约束，处于约 2100 万—2060 万年前的地点区间；它们并非同一骨架，运动方式或冠群猿类位置仍属比较推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
MacLatchy 及同事将分别描述的莫罗姿势骨骼标本 MUZM 60 和 MUZM 80 归于莫罗古猿，用于功能比较；它们并非关联骨架，也未被证明是类人猿冠群的直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
档案中的莫罗古猿材料限定于乌干达卡拉莫贾区的 Moroto I 和 Moroto II；这两处地点记录并不能证明物种整体分布或类人猿扩散路线。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
对分别出土的莫罗肩部和股骨标本所作的比较功能分析支持混合树栖运动方式解释，而食性、惯常栖息地和生态类群均未被直接观察到。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
MUZM 60 和 MUZM 80 保存了莫罗研究中描述和测量的、彼此独立的肩部与股骨解剖结构；这些材料并非一具完整骨架。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The two specimens are not one skeleton, their attribution is locality-comparative, and vertical climbing, suspension and crown-hominoid affinity are functional or phylogenetic interpretations.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
