---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Microcebus murinus (J. F. Miller, 1777)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 灰鼠狐猴
      en: Gray mouse lemur
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-9d5ba2ad-6930-89d3-a71e-2af13cb83be2
          metadataVariant: 0
          sourceKey: royo2019
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/42SBX
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Microcebus murinus (J. F. Miller, 1777)
    authorship: (J. F. Miller, 1777)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: N
        scientificName: Animalia
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CH2
        scientificName: Chordata
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V3
        scientificName: Vertebrata
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V5
        scientificName: Gnathostomata
        authorship: null
        rank: infraphylum
        status: accepted
        sourceDatasetId: null
      - id: 8VVWB
        scientificName: Osteichthyes
        authorship: null
        rank: parvphylum
        status: accepted
        sourceDatasetId: null
      - id: 9CK8W
        scientificName: Tetrapoda
        authorship: null
        rank: megaclass
        status: accepted
        sourceDatasetId: null
      - id: 6224G
        scientificName: Mammalia Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 6226C
        scientificName: Theria Parker & Haswell, 1897
        authorship: Parker & Haswell, 1897
        rank: subclass
        status: accepted
        sourceDatasetId: "2144"
      - id: LG
        scientificName: Eutheria Gill, 1872
        authorship: Gill, 1872
        rank: infraclass
        status: accepted
        sourceDatasetId: "2144"
      - id: 3W7
        scientificName: Primates Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 4FM
        scientificName: Strepsirrhini É. Geoffroy Saint-Hilaire, 1812
        authorship: É. Geoffroy Saint-Hilaire, 1812
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4LN
        scientificName: Lemuriformes Gray, 1821
        authorship: Gray, 1821
        rank: infraorder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4XL
        scientificName: Cheirogaleoidea Gray, 1873
        authorship: Gray, 1873
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: "834"
        scientificName: Cheirogaleidae Gray, 1873
        authorship: Gray, 1873
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 63B2M
        scientificName: Microcebus É. Geoffroy Saint-Hilaire, 1834
        authorship: É. Geoffroy Saint-Hilaire, 1834
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 42SBX
        scientificName: Microcebus murinus (J. F. Miller, 1777)
        authorship: (J. F. Miller, 1777)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild: Wild populations were not assessed by the cited experiment; no wild behavioral conclusion is drawn.
      domesticated: Domesticated populations were not assessed.
      captive:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/captive
      fossil: No fossil occurrence claims were assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 10
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/42SBX
            stableId: col:42SBX@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 42SBX. https://doi.org/10.48580/dgywk
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-333a8c90-7ad2-8052-a487-cf991fdab056
          metadataVariant: 0
          sourceKey: royo2019
          usage:
            licenseAppliesTo: The original research article text. Third-party figures, datasets, and referenced content are not reused.
            stableId: doi:10.3389/fnana.2019.00087
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            attribution: Royo J, Aujard F, Pifferi F (2019). Front. Neuroanat. 13:87. doi:10.3389/fnana.2019.00087.
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAssessment
            - licenseAppliesTo
            - attribution
            - scope
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage 42SBX; Royo et al. 2019, DOI 10.3389/fnana.2019.00087.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - royo2019
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Microcebus murinus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
法国 Brunoy 的实验室鼠狐猴群；六只雄性动物中四只维持 24–26°C，两只在 10°C 处理 17 天，低温对照结论限于 n=2。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
A laboratory colony in Brunoy, France; four of six males remained at 24–26°C and two received 17 days at 10°C, so low-temperature comparisons are limited to n=2.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact pinned COL26.8 accepted usage 42SBX verified for verbatim name, authorship, species rank, accepted status, and sourceDatasetId 2144; each accepted parent node was followed by ID through the pinned hierarchy registry to the root.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted nomenclatural usage; biological evidence concerns the captive study sample and protocol stated in each claim.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / captive

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/captive -->
The cited biological evidence concerns six captive laboratory-born and laboratory-raised males: n=4 maintained at 24–26°C and n=2 exposed to 10°C; low-temperature sleep and <21°C EEG-isoelectric findings apply only to the n=2 subset.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 42SBX; exact name, authorship, species rank, accepted status, sourceDatasetId 2144; complete accepted parent chain resolved to root.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Results, Effects of Torpor on Behavioral States; Figure 2C and its <21°C EEG-isoelectric threshold; Figure 3A and Table 1 for 10°C (n=2) versus 25°C/control behavioral-state distributions; Tables 2–3 for low-temperature comparisons and Tb_min correlations. Methods, Experimental Protocol, establishes the four-animal 25°C cohort and two-animal 10°C cohort.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original research article on laboratory EEG observations in six captive male Microcebus murinus: four animals remained at 24–26°C and two were exposed to 10°C; the low-temperature findings apply to the n=2 subset. Third-party content is excluded.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 accepted usage and complete accepted parent chain; one primary laboratory sleep and torpor study.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Resolved the COL identity and each parent by stable ID in release-pinned search and hierarchy shards. Read the primary study methods, abstract, results, limitations, and article license. No broad or multi-facet literature search was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Exact accepted COL identity and a primary item-level licensed study with explicit experimental sample, conditions, and species-specific reported outcomes.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only matches, inference from genus-level summaries, generalization from captive outcomes to wild populations, and unassessed facets.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No taxon-specific morphology or diagnosis was assessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The study included six captive, laboratory-born male gray mouse lemurs: four were maintained at 24–26°C and two were acclimated at 25°C before 17 days at 10°C. In the 10°C subset (n=2), sleep-wake rhythms persisted during torpor, mostly as NREM sleep; when body temperature fell below 21°C, EEG became isoelectric. Group comparisons for this same n=2 subset found reduced NREM2 and increased isoelectric state at 10°C. These results are limited to the studied captive animals and protocol, and do not establish a species-wide threshold or wild-population pattern.
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Results, Effects of Torpor on Behavioral States; Figure 2C and its <21°C EEG-isoelectric threshold; Figure 3A and Table 1 for 10°C (n=2) versus 25°C/control behavioral-state distributions; Tables 2–3 for low-temperature comparisons and Tb_min correlations. Methods, Experimental Protocol, establishes the four-animal 25°C cohort and two-animal 10°C cohort.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Six laboratory-born and laboratory-raised males from the UMR 7179 CNRS/MNHN colony in Brunoy, France; short-day 10:14 light:dark photoperiod. Four animals remained at 24–26°C; two were acclimated for 5 days at 25°C then exposed to 10°C for 17 days. The <21°C EEG-isoelectric observation and low-temperature sleep comparisons apply only to the 10°C n=2 subset. Figure 2C illustrates an individual animal, so the threshold is not asserted as a species-wide constant.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Captive laboratory animals; no wild-population behavior is inferred.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Evidence comes from a small captive male sample under a specific laboratory photoperiod and temperature protocol; other life-history and behavioral facets were not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No systematic wild habitat, diet, or species-interaction evidence was assessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or comparative evolutionary evidence was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No distribution search was performed; no range or locality claim is asserted.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed; no fossil presence or absence is claimed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current formal conservation assessment was verified; no current threat category is asserted.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One primary laboratory study supports only a narrowly scoped sleep and torpor claim.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Six facets remain not assessed and life-history evidence is limited to six captive males under a specific protocol.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Independent expert review and comprehensive multi-source review are incomplete.
<!-- /evo:text -->
