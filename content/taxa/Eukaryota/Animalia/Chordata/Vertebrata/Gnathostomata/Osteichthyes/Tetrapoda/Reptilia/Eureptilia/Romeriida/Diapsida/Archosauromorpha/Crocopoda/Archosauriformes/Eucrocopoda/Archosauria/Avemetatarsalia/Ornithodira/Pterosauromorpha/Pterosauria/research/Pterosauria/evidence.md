---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:38461
    scientificName: Pterosauria
    commonName: Pterosaurs
    commonNameZh: 翼龙类
    rank: order
    parentName: Archosauria
    extinct: true
    geography:
      - Every continent; fossil record extremely patchy
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
      - wang-2017-hamipterus-eggs
      - cincotta-2022-tupandactylus-feathers
      - witton-habib-2010-giant-pterosaur-flight
      - baron-2021-origin-pterosaurs
      - upchurch-2015-pterosaur-biogeography
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/research/Pterosauria
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: witton-habib-2010-giant-pterosaur-flight
          relation: contextualizes
          pages: 867–873
          figure: Figures 1–5
          quoteLocator: taxonomy
        - referenceId: baron-2021-origin-pterosaurs
          relation: supports
          pages: Article 103777
          quoteLocator: Abstract; Conclusions points 1–2
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/research/Pterosauria
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Dalla Vecchia 2009 DOI 10.13130/2039-4942/6377; audited for 2026.08-static-v5-rc40
      referenceLinks:
        - referenceId: dalla-vecchia-2009-carniadactylus
          relation: supports
          pages: 159–188, especially 160–179
          figure: Figures 1–16
          quoteLocator: Holotype and referred material; geological setting; systematic palaeontology and phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/research/Pterosauria
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: witton-habib-2010-giant-pterosaur-flight
          relation: contextualizes
          pages: 867–873
          figure: Figures 1–5
          quoteLocator: biogeography
        - referenceId: upchurch-2015-pterosaur-biogeography
          relation: supports
          pages: 697–717
          figure: Figures 1–7; Table 1
          quoteLocator: Abstract; Introduction; sections 2 and 5.2
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/research/Pterosauria
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: witton-habib-2010-giant-pterosaur-flight
          relation: supports
          pages: 867–873
          figure: Figures 1–5
          quoteLocator: morphology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/research/Pterosauria
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas automated evidence decomposition
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.09-static-v5-rc154
      referenceLinks:
        - referenceId: witton-habib-2010-giant-pterosaur-flight
          relation: supports
          pages: 867–873
          figure: Figures 1–5
          quoteLocator: ecology
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/research/Pterosauria
      rangeKind: global-composite
      taxonomicConcept: Pterosauria
      geographicScope: Global or represented navigation composite
      olderMa: 228
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Eureptilia/Romeriida/Diapsida/Archosauromorpha/Crocopoda/Archosauriformes/Eucrocopoda/Archosauria/Avemetatarsalia/Ornithodira/Pterosauromorpha/Pterosauria/research/Pterosauria/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: dalla-vecchia-2009-carniadactylus
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Pterosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Review and expanded anatomical analyses place Pterosauria within archosaur Ornithodira near dinosaurs, but its precise origin and closest relatives remain analysis-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to pterosauria:taxonomy.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The Pterosauria navigation envelope retains a rounded 228 Ma older edge for the Norian Carniadactylus sample and a broad 66 Ma younger edge; the named specimens support Late Triassic pterosaur presence but not an exact global first or last appearance, clade-origin date or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The detailed redescription identifies a nearly complete holotype, a referred specimen, their Norian formations and a tested pterosaur placement. Medium confidence preserves stage-scale dating, taxonomic revisions and the composite younger boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Pterosaur remains are reported from every continent, but a 108-taxon analysis finds the record extremely patchy; package dossiers therefore remain tied to named specimens and localities rather than a complete distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to pterosauria:biogeography.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Pterosaurs support a membranous wing primarily on an elongate fourth finger; launch capacity and flight performance are biomechanical model outputs rather than preserved motions.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to pterosauria:morphology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Pterosaurs occupied diverse aerial and coastal guilds, so no single diet, launch mode or habitat is generalized to the entire radiation.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The profile separates directly documented specimens and explicit analyses from global range, behaviour and ancestry inferences; confidence is bounded by the cited primary study and its stated sample. This rationale is specific to pterosauria:ecology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 pterosauria:taxonomy。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
详细再描述确认近完整正模、转归标本、诺利期地层和经检验的翼龙位置；中等置信度保留阶段尺度测年、分类修订和综合性的年轻边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 pterosauria:biogeography。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 pterosauria:morphology。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
档案把直接记录的标本和显式分析与全球延限、行为及祖先推断分开；置信度限定于所引一手研究及其样本。此理由专用于 pterosauria:ecology。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
综述与扩展的解剖系统分析把翼龙目置于主龙类鸟跖类、接近恐龙的位置，但其确切起源与最近亲仍取决于分析方案。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
各大洲均有翼龙遗骸报道，但一项包含 108 个分类单元的分析显示其记录极为斑驳；因此包内档案仍限定于具名标本和地点，而不冒充完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
翼龙以延长的第四指主要支撑膜质翼；起飞能力与飞行性能是生物力学模型输出，不是被保存的动作。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
翼龙占据多样空中与沿海生态位，因此本包不把单一食性、起飞方式或栖息地外推到整个辐射。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
翼龙类导航范围为诺利期 Carniadactylus 样本保留约 2.28 亿年前的取整老端，并保留宽泛的 0.66 亿年前年轻端；具名标本支持晚三叠世已有翼龙，但不能建立精确全球首现、末现、类群起源时间或直系祖先关系。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The rounded 228 Ma older edge follows Norian Carniadactylus material; 66 Ma remains a broad composite younger boundary rather than an exact global LAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A nearly complete Carniadactylus holotype and referred specimen provide a primary-study Late Triassic pterosaur anchor without asserting a global FAD, LAD, origin date or direct ancestry.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 159–188, especially 160–179; Figures 1–16; material, geological setting, systematic palaeontology and phylogenetic analysis
<!-- /evo:text -->
