---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:40829
    scientificName: Teilhardina (PETM dental samples)
    commonName: PETM Teilhardina dental samples
    commonNameZh: PETM 更猴属牙齿样本
    rank: genus
    parentName: Haplorhini
    extinct: true
    geography:
      - Hengyang Basin, China
      - Dormaal, Belgium
      - Bighorn Basin, Wyoming, United States
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
      - smith-2006-teilhardina
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
        - referenceId: smith-2006-teilhardina
          metadataVariant: 0
          sourceKey: smith-2006-teilhardina
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
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Tarsiiformes/Omomyoidea/Omomyidae/Teilhardina/research/Teilhardina_(PETM_dental_samples)
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
      reviewedAgainstReferenceVersion: smith-2006-teilhardina concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: smith-2006-teilhardina
          pages: 11223–11227
          figure: Figures 1–3
          quoteLocator: Locality sequence; dental samples; carbon-isotope correlation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Tarsiiformes/Omomyoidea/Omomyidae/Teilhardina/research/Teilhardina_(PETM_dental_samples)
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
      reviewedAgainstReferenceVersion: smith-2006-teilhardina @ DOI 10.1073/pnas.0511296103
      referenceLinks:
        - referenceId: smith-2006-teilhardina
          relation: supports
          pages: 11223–11227
          figure: Figures 1–3; Supporting Tables
          quoteLocator: Teilhardina dental identifications and morphological sequence across the correlated PETM sections
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Tarsiiformes/Omomyoidea/Omomyidae/Teilhardina/research/Teilhardina_(PETM_dental_samples)
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas RC84 package authoring
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: smith-2006-teilhardina @ DOI 10.1073/pnas.0511296103
      referenceLinks:
        - referenceId: smith-2006-teilhardina
          relation: supports
          pages: 11223–11227
          figure: Figures 1–3
          quoteLocator: Hengyang, Dormaal and Bighorn Basin section locations and carbon-isotope correlation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Tarsiiformes/Omomyoidea/Omomyidae/Teilhardina/research/Teilhardina_(PETM_dental_samples)
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas RC84 package authoring
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: smith-2006-teilhardina @ DOI 10.1073/pnas.0511296103
      referenceLinks:
        - referenceId: smith-2006-teilhardina
          relation: supports
          pages: 11223–11227
          figure: Figures 1–3; Supporting Tables
          quoteLocator: Dental sample descriptions and PETM section comparison; no associated postcranial or behavioural observation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Tarsiiformes/Omomyoidea/Omomyidae/Teilhardina/research/Teilhardina_(PETM_dental_samples)
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas RC84 package authoring
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: smith-2006-teilhardina @ DOI 10.1073/pnas.0511296103
      referenceLinks:
        - referenceId: smith-2006-teilhardina
          relation: supports
          pages: 11223–11227
          figure: Figures 1–3; Supporting Tables
          quoteLocator: Dental morphology and intercontinental morphological sequence
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Tarsiiformes/Omomyoidea/Omomyidae/Teilhardina/research/Teilhardina_(PETM_dental_samples)
      rangeKind: global-composite
      taxonomicConcept: Teilhardina PETM dental sequence occurrence
      geographicScope: Hengyang Basin, China; Dormaal, Belgium; Bighorn Basin, Wyoming, USA
      olderMa: 56
      youngerMa: 55.8
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
        - content/events/Teilhardina_PETM_dental_sequence/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Tarsiiformes/Omomyoidea/Omomyidae/Teilhardina/research/Teilhardina_(PETM_dental_samples)/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: smith-2006-teilhardina
          locator: 11223–11227; Figures 1–3; Supporting Tables
      reviewStatus: automated-audit-passed
---

# Teilhardina (PETM dental samples)

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
Dental samples from three correlated sections and the paper’s PETM age and dispersal interpretation.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
三个对比地层剖面的牙齿样本，以及论文的 PETM 年代与扩散解释。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Separately catalogued Teilhardina dental samples in China, Belgium and Wyoming occur in correlated PETM sections within an approximately 56–55.8 Ma sequence; correlation and dental taxonomy do not make them one migrating population or a global genus origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary paper directly reports specimens and section correlations. Medium confidence retains taxonomic and correlation dependence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The primary study identifies separately catalogued PETM dental samples as Teilhardina in three sections, while keeping their correlated appearance sequence distinct from a single population, direct ancestry or a crown-Primate diagnosis.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Dental identification is directly reported, but the cross-continental sequence depends on species assignments and correlation rather than association in one population or skeleton.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profiled Teilhardina samples are from the Hengyang Basin in China, Dormaal in Belgium and the Bighorn Basin in Wyoming; these three correlated localities do not establish a complete distribution or migration track.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The paper directly reports the sampled localities and their correlated sequence, while unrecorded localities and movement between them remain outside the specimen evidence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The three correlated Teilhardina samples are dental and stratigraphic evidence; they do not directly record diet, habitual habitat, locomotion, body mass or ecological guild.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary study's named material and figures delimit the evidence to dental samples and section context, so the profile withholds unobserved ecological attributes.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Dental comparisons among separately catalogued Teilhardina samples support the reported PETM morphological sequence; no associated postcranial skeleton is documented by this comparison.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The figures and supporting tables directly support the dental comparison, but sample association, species assignment and broader anatomical reconstruction remain limited.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手论文直接报告标本与剖面对比；中等置信度保留分类和对比依赖性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
牙齿鉴定由一手论文直接报告，但跨洲序列依赖物种归属和地层对比，而非同一种群或同一骨架的关联。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
论文直接报告了取样地点及其对比序列；未取样地点和地点之间的实际移动均超出标本证据范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
一手论文中具名材料和图版把证据限定为牙齿样本及剖面背景，因此档案明确保留未被观察到的生态属性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
图版和补充表格直接支持牙齿比较，但样本关联、物种归属和更广泛的解剖重建仍受限制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
中国、比利时和怀俄明分别编号的 Teilhardina 牙齿样本位于彼此对比的 PETM 剖面中，形成约 5600 万—5580 万年前的出现序列；地层对比与牙齿分类不使其成为同一迁移种群或全球属级起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
一手研究在三个剖面中将分别编目的 PETM 牙齿样本鉴定为更猴属，同时把其对比后的出现序列与单一种群、直接祖先关系或灵长类冠群诊断明确区分。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
档案中的更猴属样本来自中国衡阳盆地、比利时多尔马尔和美国怀俄明州大角盆地；这三个经对比的地点并不能确立完整分布或迁徙路线。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
三个经对比的更猴属样本仅提供牙齿和地层证据；它们并未直接记录食性、惯常栖息地、运动方式、体重或生态类群。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
分别编目的更猴属样本之间的牙齿比较支持所报告的 PETM 形态序列；该比较没有记录关联的颅后骨骼。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The sequence depends on dental taxonomy and carbon-isotope correlation; it is not one migrating population, a direct ancestor series or the origination date of crown Primates.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
