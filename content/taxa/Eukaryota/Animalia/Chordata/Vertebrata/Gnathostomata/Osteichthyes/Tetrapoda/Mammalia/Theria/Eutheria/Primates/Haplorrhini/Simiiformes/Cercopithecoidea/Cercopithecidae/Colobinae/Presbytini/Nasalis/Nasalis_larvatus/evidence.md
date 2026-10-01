---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nasalis larvatus (van Wurmb, 1787)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 长鼻猴
      en: Proboscis monkey
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
        - referenceId: ref-18717088-4c2c-81ef-a6b2-4d98ae3d7796
          metadataVariant: 0
          sourceKey: thiry2025
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
            url: https://www.checklistbank.org/dataset/316115/taxon/45QBH
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
    scientificName: Nasalis larvatus (van Wurmb, 1787)
    authorship: (van Wurmb, 1787)
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
      - id: 4DT
        scientificName: Haplorrhini Pocock, 1918
        authorship: Pocock, 1918
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4PM
        scientificName: Simiiformes Haeckel, 1866
        authorship: Haeckel, 1866
        rank: infraorder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4X9
        scientificName: Cercopithecoidea Gray, 1821
        authorship: Gray, 1821
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 7X9
        scientificName: Cercopithecidae Gray, 1821
        authorship: Gray, 1821
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: JCX
        scientificName: Colobinae Jerdon, 1867
        authorship: Jerdon, 1867
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: L6B
        scientificName: Presbytini Gray, 1825
        authorship: Gray, 1825
        rank: tribe
        status: accepted
        sourceDatasetId: "2144"
      - id: 5XPR
        scientificName: Nasalis É. Geoffroy Saint-Hilaire, 1812
        authorship: É. Geoffroy Saint-Hilaire, 1812
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 45QBH
        scientificName: Nasalis larvatus (van Wurmb, 1787)
        authorship: (van Wurmb, 1787)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated populations were not assessed.
      fossil: Fossil occurrence and geological age were not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/45QBH
            stableId: col:45QBH@COL26.8
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
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 45QBH. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-bf396700-9538-8456-a896-6a97b5b46423
          metadataVariant: 0
          sourceKey: thiry2025
          usage:
            licenseAppliesTo: Article text under the item's copyright notice; separately credited third-party material is excluded.
            stableId: doi:10.1371/journal.pone.0316752
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
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
      queryOrPath: Pinned COL26.8 dataset 316115 usage 45QBH; Thiry et al. 2025, DOI 10.1371/journal.pone.0316752.
      inclusionCriteria: Exact accepted COL identity and explicitly reported diet observations or metabarcoding results for Nasalis larvatus.
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
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - thiry2025
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
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

# Nasalis larvatus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
沙巴 Lower Kinabatangan 野生动物保护区的自由活动群体；取食观察和粪便采样分别限于论文列出的地点与日期。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Free-ranging groups in Sabah's Lower Kinabatangan Wildlife Sanctuary; feeding observations and fecal sampling are limited to the sites and dates reported in the article.
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
Exact pinned COL26.8 accepted usage 45QBH verified for verbatim name, authorship, species rank, accepted status, and sourceDatasetId 2144; every accepted parent node was followed in the pinned hierarchy registry to the root.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted usage; the biological claim is limited to sampled wild groups and sites in Lower Kinabatangan Wildlife Sanctuary, Sabah.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The primary study concerns free-ranging proboscis monkeys in riverine forests at Lower Kinabatangan Wildlife Sanctuary, Sabah.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 45QBH; verbatim scientific name and authorship, species rank, accepted status, sourceDatasetId 2144, and complete accepted parent chain resolved to root.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods > Study site (15-month period); Methods > Direct behavioural observations; Methods > DNA metabarcoding method > Faecal sampling (155 samples); Results > Combining methods: Overall proboscis monkey diet.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Thiry V, Boom AF, Stark DJ, et al. (2025). Using DNA metabarcoding and direct behavioural observations to identify the diet of proboscis monkeys (Nasalis larvatus) in the Kinabatangan Floodplain, Sabah. PLoS ONE 20(1):e0316752. https://doi.org/10.1371/journal.pone.0316752. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary dietary ecology study combining direct feeding observations and fecal DNA metabarcoding for multiple free-ranging proboscis monkey groups in the Lower Kinabatangan Wildlife Sanctuary, Sabah. Claim is paraphrased; figures and third-party materials are excluded.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 accepted usage and parent chain; one primary dietary ecology study.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Resolved the COL identity and every parent by stable ID in the release-pinned search and hierarchy shards. Reviewed the cited article abstract, methods, results, limitations, and item-level license. No comprehensive search across other biological facets was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only joins, unbounded extrapolation beyond sampled groups and sites, and unassessed morphology, life history, evolution, distribution, fossils, or conservation status.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No taxon-specific morphology or diagnosis was assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No reproduction, development, lifespan, or demographic evidence was assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In the Lower Kinabatangan Wildlife Sanctuary, Sabah, Thiry et al. combined boat-based feeding observations and trnL metabarcoding of 155 faecal samples to record at least 89 consumed plant taxa belonging to 76 genera and 45 families from sampled proboscis monkey groups. Sampling covered May–August 2015, January–June 2016, and November 2016–March 2017. This is a site- and sampling-bounded diet result, not a complete species-wide diet inventory.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods > Study site (15-month period); Methods > Direct behavioural observations; Methods > DNA metabarcoding method > Faecal sampling (155 samples); Results > Combining methods: Overall proboscis monkey diet.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Free-ranging groups in the Lower Kinabatangan Wildlife Sanctuary, Sabah, Malaysia. Field sampling ran during May–August 2015, January–June 2016, and November 2016–March 2017. Direct feeding observations were along a 21 km Kinabatangan River section; 155 faecal samples were collected under the study's group and site sampling design for DNA metabarcoding. Findings apply to these sampled groups, sites, and periods only.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging proboscis monkeys in wild riverine forest; the study used no captive or domesticated animals.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The article documents sampled diet composition and method-specific limits, not the species-wide diet, complete ecological interactions, or broad seasonal coverage.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or comparative evolutionary evidence was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Study locations do not establish a complete current or historical species range.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed; no fossil presence or absence is claimed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current formal conservation assessment, trend, or threat status was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One bounded dietary ecology study was assessed; six facets remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The findings concern sampled groups and sites in one sanctuary, with direct observation and metabarcoding limitations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review or comprehensive multi-source review has been completed.
<!-- /evo:text -->
