---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:40764
    scientificName: Notharctus (AMNH 143612 and AMNH 143640 foot)
    commonName: Bridger Formation adapiform foot sample
    commonNameZh: 布里杰组北猴足部样本
    rank: genus
    parentName: Adapiformes
    extinct: true
    geography:
      - Bridger Formation
      - Wyoming
      - United States
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
      - maiolino-2012-notharctus
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
        - referenceId: maiolino-2012-notharctus
          metadataVariant: 0
          sourceKey: maiolino-2012-notharctus
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
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes/Adapoidea/Notharctidae/Notharctus/research/Notharctus_(AMNH_143612_and_AMNH_143640_foot)
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: maiolino-2012-notharctus concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: maiolino-2012-notharctus
          pages: Article e29135
          figure: Figures 1–16
          quoteLocator: Specimen association; anatomical comparisons; phylogenetic tests
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes/Adapoidea/Notharctidae/Notharctus/research/Notharctus_(AMNH_143612_and_AMNH_143640_foot)
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Maiolino et al. 2012 DOI 10.1371/journal.pone.0029135; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: maiolino-2012-notharctus
          relation: supports
          pages: e29135
          figure: Figures 3–10; Table 2
          quoteLocator: Materials and Methods; Notharctus specimen association and ray-specific phalangeal comparisons
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes/Adapoidea/Notharctidae/Notharctus/research/Notharctus_(AMNH_143612_and_AMNH_143640_foot)
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Maiolino et al. 2012 DOI 10.1371/journal.pone.0029135; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: maiolino-2012-notharctus
          relation: supports
          pages: e29135
          figure: Figures 3–4
          quoteLocator: Materials and Methods; AMNH 143612 and AMNH 143640; Bridger Formation provenance
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes/Adapoidea/Notharctidae/Notharctus/research/Notharctus_(AMNH_143612_and_AMNH_143640_foot)
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Maiolino et al. 2012 DOI 10.1371/journal.pone.0029135; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: maiolino-2012-notharctus
          relation: supports
          pages: e29135
          figure: Figures 3–10; Table 2
          quoteLocator: Materials and Methods; Results and Discussion delimit the dataset to foot anatomy and functional comparison
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes/Adapoidea/Notharctidae/Notharctus/research/Notharctus_(AMNH_143612_and_AMNH_143640_foot)
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Maiolino et al. 2012 DOI 10.1371/journal.pone.0029135; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: maiolino-2012-notharctus
          relation: supports
          pages: e29135
          figure: Figures 3–10; Table 2
          quoteLocator: Ray-specific phalangeal identification and digit-two grooming-claw functional discussion
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Strepsirrhini/Adapiformes/Adapoidea/Notharctidae/Notharctus/research/Notharctus_(AMNH_143612_and_AMNH_143640_foot)
      rangeKind: global-composite
      taxonomicConcept: Notharctus digit-two grooming phalanx occurrence
      geographicScope: Grizzly Buttes, Bridger B, Bridger Formation, Wyoming, USA
      olderMa: 50
      youngerMa: 48.5
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
      confidence: high
      claimPaths:
        - content/events/Notharctus_digit-two_grooming_phalanx/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: maiolino-2012-notharctus
          locator: e29135; Figures 1–16; Tables 2–8; Tables S1–S6
      reviewStatus: automated-audit-passed
---

# Notharctus (AMNH 143612 and AMNH 143640 foot)

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
Ray-specific comparisons of the named Notharctus foot material AMNH 143612/143640; functional interpretation, not observed grooming.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
针对具名 Notharctus 足部标本 AMNH 143612/143640 的分趾比较；结论属于功能解释，不是梳理行为观察。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Notharctus is bounded here by the semi-articulated AMNH 143612/143640 foot from Bridger B, Wyoming, within an approximately 50–48.5 Ma locality interval; its digit-two anatomy does not establish a global genus range or crown-anthropoid ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named associated foot and stratigraphic setting are direct evidence; functional and higher-topology implications remain comparative.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Maiolino and colleagues treat the semi-articulated AMNH 143612 and AMNH 143640 foot as Notharctus for a ray-specific phalangeal comparison; this attribution and comparison do not establish crown-primate membership or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The named foot and comparative assignment are directly documented, while higher-level placement and ancestry are not tested by specimen association alone.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profiled Notharctus foot is bounded to AMNH 143612 and AMNH 143640 from the Bridger Formation in Wyoming; this specimen provenance does not establish a complete genus distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary study directly identifies the specimens and formation context, while no global presence or absence survey is part of the anatomical comparison.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The cited Notharctus foot study tests phalangeal function rather than diet, habitual habitat, observed locomotion, population body size or ecological guild; those fields therefore remain unresolved in this profile.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The study's evidence is a bounded anatomical and functional comparison, so withholding unobserved ecological attributes follows directly from its scope.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
AMNH 143612 and AMNH 143640 preserve a semi-articulated foot with ray-specific proximal and intermediate phalanges used to infer a digit-two grooming claw; grooming behaviour itself is not observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The bones and ray assignments are illustrated directly, whereas grooming-claw function is a comparative inference and cannot demonstrate behaviour in the fossil animal.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名关联足部与地层背景属于直接证据；功能与高阶拓扑含义仍属比较推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
具名足部及其比较归属有直接记录，但仅凭标本关联不能检验更高阶位置或祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
一手研究直接标明标本及地层背景；该解剖比较并非全球存在—缺失调查。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
研究证据限于解剖和功能比较，因此保留未观察到的生态属性符合其证据范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
骨骼和逐趾归属得到直接图示；理毛爪功能是比较推断，不能证明化石动物的实际行为。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
此处 Notharctus 由怀俄明 Bridger B 的半关节连接足部 AMNH 143612/143640 约束，处于约 5000 万—4850 万年前的地点区间；其第二趾解剖不建立全球属级范围或冠群类人猿祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Maiolino 等人将半关节连接的 AMNH 143612 与 AMNH 143640 足部材料归入北猴属，用于逐趾比较趾骨；这种归属和比较并不能确立灵长类冠群成员身份或直接祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
本档案中的北猴属足部仅限于来自怀俄明州布里杰组的 AMNH 143612 与 AMNH 143640；这些标本的产状不能确立该属的完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所引北猴属足部研究检验的是趾骨功能，而非食性、惯常栖息地、已观察运动、种群体型或生态类群；因此这些字段在本档案中仍属未定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
AMNH 143612 与 AMNH 143640 保存了一套半关节连接的足部，包括可逐趾识别的近节和中节趾骨，并被用于推断第二趾的理毛爪；理毛行为本身并未被观察到。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Grooming-claw function and tree effects are comparative and matrix-based; the specimen does not make Notharctus a crown anthropoid, direct ancestor or global first occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
