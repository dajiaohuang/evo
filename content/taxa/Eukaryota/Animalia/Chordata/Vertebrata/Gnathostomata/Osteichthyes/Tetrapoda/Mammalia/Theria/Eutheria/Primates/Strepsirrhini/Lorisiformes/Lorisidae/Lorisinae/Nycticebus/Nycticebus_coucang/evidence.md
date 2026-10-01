---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nycticebus coucang (Boddaert, 1785)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 大懒猴
      en: Greater slow loris
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
        - referenceId: ref-eb79804c-7fb4-8478-ad8e-12cdbb65c152
          metadataVariant: 0
          sourceKey: fuller2024slowlorisvenom
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
            url: https://www.checklistbank.org/dataset/316115/taxon/485JL
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
    scientificName: Nycticebus coucang (Boddaert, 1785)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-28
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
      - id: 4LX
        scientificName: Lorisiformes Gregory, 1915
        authorship: Gregory, 1915
        rank: infraorder
        status: accepted
        sourceDatasetId: "2144"
      - id: C7M
        scientificName: Lorisidae Gray, 1821
        authorship: Gray, 1821
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 628LB
        scientificName: Lorisinae Gray, 1821
        authorship: Gray, 1821
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 65ZL
        scientificName: Nycticebus É. Geoffroy Saint-Hilaire, 1812
        authorship: É. Geoffroy Saint-Hilaire, 1812
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 485JL
        scientificName: Nycticebus coucang (Boddaert, 1785)
        authorship: (Boddaert, 1785)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication was not assessed; rescue-center housing is not domestication.
      fossil: Fossil occurrence and geological age were not assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 1
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/485JL
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:485JL@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 485JL. https://doi.org/10.48580/dgywk
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
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
        - referenceId: ref-656abd74-5a9f-8e84-afc8-693d5e7ac35e
          metadataVariant: 0
          sourceKey: fuller2024slowlorisvenom
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo: Published article text; this dossier paraphrases observations and does not reproduce figures or tables.
            stableId: doi:10.3390/ani14101438
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
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
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
    facets:
      morphology:
        status: not-assessed
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - fuller2024slowlorisvenom
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
      evolution:
        status: not-assessed
      distribution:
        status: not-assessed
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
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
---

# Nycticebus coucang

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
印尼西爪哇 Cikananga 野生动物中心 22 只曾遭捕获的救助成年懒猴；75 次人工猎物呈现试验在 2014 年进行，并非野外观察。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Seventy-five artificial prey-presentation trials with 22 rescued, formerly wild-caught adult lorises at Cikananga Wildlife Center, West Java, Indonesia, in 2014; not field observations.
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
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
One captive prey-presentation study at a wildlife rescue center, not an observation of wild prey capture. Findings are limited to the tested adult rescued sample and artificial home-cage conditions.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The study subjects were originally wild-caught adults confiscated from illegal trade and subsequently observed in rescue-center housing; the behavioral claim is about captive trial conditions, not free-ranging behavior.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 485JL; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Europe PMC full-text JATS article-meta > permissions > license > license-p explicitly states CC BY and links to the CC BY 4.0 deed.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods §2.1 (Slow Loris Subjects and Housing) and §2.3 (Behavioral Experiments); Results §3.2 (Venom-Related Behaviors), first paragraph and Figure 2 caption; Discussion §4.1 (Evidence for Envenomation of Prey); Europe PMC JATS article-meta license-p.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Behavioral observations of 22 adult rescued, originally wild-caught greater slow lorises during 75 artificial home-cage prey presentation trials; results are not field observations.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Fuller G, Wirdateti, Nekaris KAI. (2024). Evaluating the Use of Chemical Weapons for Capturing Prey by a Venomous Mammal, the Greater Slow Loris (Nycticebus coucang). Animals 14(10):1438. https://doi.org/10.3390/ani14101438. Findings paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Across 75 prey-presentation trials involving 22 adult rescued greater slow lorises, the study recorded brachial-gland licking five times; four observations occurred during grooming. In the only non-grooming instance, a male approached a caterpillar, withdrew to a perch, and licked its brachial gland without attempting to capture the caterpillar. This describes one captive rescue-center sample and experimental setting and does not establish how wild slow lorises use venom during prey capture.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Results §3.2, first paragraph, and Figure 2/caption for the five observations, grooming context, and caterpillar trial; Methods §§2.1 and 2.3 for the study subjects and 75 prey-presentation trials; limitations in Methods §2.3 and Discussion §4.1.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Cikananga Wildlife Center (PPSC), West Java, Indonesia; 22 adults (11 male, 11 female) admitted in October 2013 after wild capture and confiscation; 75 home-cage prey trials conducted February-April 2014. Hunger was not controlled and the trials were not field observations.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Originally wild-caught, confiscated adults housed in a wildlife rescue center during artificial home-cage trials; this is not evidence of free-ranging behavior.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The claim describes rescued adults in one center and an artificial prey-presentation setup, not natural prey capture in the wild.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The authors note limitations affecting motivation and prey behavior; the observations do not establish the general function of venom use across populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, life history, evolution, distribution, fossils, conservation, systematic evidence search, and expert review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One experimental behavior result supports a narrow claim for rescued greater slow lorises in captive prey trials.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The study does not establish natural behavior or a species-wide venom-use pattern.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Most biological facets, systematic evidence search, and external expert review remain unassessed.
<!-- /evo:text -->
