---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Saimiri sciureus (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 普通松鼠猴
      en: Common squirrel monkey
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
        - referenceId: ref-9bfcf032-739c-8641-a2a8-f7c52578bd1e
          metadataVariant: 0
          sourceKey: baker2018
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4TZK2
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
    scientificName: Saimiri sciureus (Linnaeus, 1758)
    authorship: (Linnaeus, 1758)
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
    lifeStatusScope:
      wild: The cited sections do not establish field collection for the full DNA panel; no wild-population inference is made.
      domesticated: Domestication was not assessed.
      captive:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/captive
      fossil: No fossil material or geological time was studied.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4TZK2
            stableId: col:4TZK2@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4TZK2. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-f4856774-3d8e-8dfa-aa03-6d5c899a7a6f
          metadataVariant: 0
          sourceKey: baker2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1186/s13100-018-0114-7
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://link.springer.com/article/10.1186/s13100-018-0114-7
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAssessment
            - licenseAppliesTo
            - rightsEvidenceUrl
            - scope
            - attribution
    systematicSearch:
      date: 2026-09-28
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage 4TZK2; Springer Nature version of record, DOI 10.1186/s13100-018-0114-7.
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
        status: not-assessed
        claims: []
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            sourceIds:
              - baker2018
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
      - id: 7TZ
        scientificName: Cebidae Bonaparte, 1831
        authorship: Bonaparte, 1831
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 628NK
        scientificName: Saimiriinae Miller, 1812
        authorship: Miller, 1812
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 7BQ9
        scientificName: Saimiri Voigt in G. Cuvier, 1831
        authorship: Voigt in G. Cuvier, 1831
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 4TZK2
        scientificName: Saimiri sciureus (Linnaeus, 1758)
        authorship: (Linnaeus, 1758)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
---

# Saimiri sciureus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
32 个体、不同来源的实验室 DNA 面板；结论限于研究标记和作者的物种标注，并保留两份分类可疑样本的说明。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
A 32-individual laboratory DNA panel of mixed provenance; conclusions are limited to the study markers and assignments, including the caveat about two uncertain specimens.
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
Exact accepted COL26.8 usage 4TZK2 was verified in the release-pinned search registry for name, authorship, species rank, accepted status, and sourceDatasetId 2144; its accepted parent chain was followed by stable ID through the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The dossier is keyed to accepted COL26.8 usage 4TZK2. The cited article compares author-labelled Saimiri sciureus and S. boliviensis sample groups and notes older or incomplete specimen labels; it does not independently establish the accepted species concept or override COL taxonomy.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / captive

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/captive -->
The authors report some S. boliviensis samples from a captive breeding colony; individual-level captive status is not fully mapped here.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 4TZK2: verbatim name, authorship, rank, accepted status, sourceDatasetId 2144, and full accepted parent chain.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The article text under its item-level CC BY 4.0 notice. No separately credited figures, images, or supplementary worksheets are reused.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract > Results; Methods > DNA samples; Results > Species informative Alu polymorphisms, paragraph preceding Table 4; Table 4.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
One laboratory Alu insertion marker study on a mixed-provenance 32-individual squirrel-monkey DNA panel; its author-defined species groups and specimen-identification caveats are retained.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Baker JN, Walker JA, Denham MW, et al. (2018). Recently integrated Alu insertions in the squirrel monkey (Saimiri) lineage and application for population analyses. Mobile DNA 9:9. https://doi.org/10.1186/s13100-018-0114-7. Claims paraphrased.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and a focused review of one primary marker study with publisher-verified article-level reuse terms; this is not a multi-database, seven-facet, or range-wide systematic review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the pinned accepted COL usage and parent chain by stable IDs. Reviewed the publisher version-of-record page, abstract, sample methods, species-informative polymorphism results, Table 4 locator, identity caveats, and item-level license notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary-source statements explicitly reporting the 32-individual DNA panel and Alu insertion polymorphism results for the study-labelled S. sciureus and S. boliviensis groups.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only matches; unverified specimen assignments; range-wide distribution; species-boundary or full phylogenetic conclusions; all unassessed facets; results from separately licensed figures or supplementary files.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The selected marker study does not assess diagnostic anatomy, measurements, or morphological variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The selected marker study does not assess development, reproduction, survival, or lifespan.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The selected marker study does not assess habitat, behavior, food, predators, parasites, or ecological interactions.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Within the authors’ 32-individual squirrel-monkey DNA panel, 110 of 382 tested Alu insertion loci were polymorphic for insertion presence or absence; among these, 51 showed the study’s species-informative allele-frequency distributions between its S. sciureus and S. boliviensis groups. The authors note that two specimens labelled S. sciureus clustered more closely with S. boliviensis, so this result is limited to that marker panel and those study assignments and does not independently resolve species boundaries.
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Abstract > Results; Methods > DNA samples; Results > Species informative Alu polymorphisms, paragraph preceding Table 4; Table 4; identity caveat in Results > Population structure.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Laboratory analyses of a 32-individual mixed-provenance DNA panel; the article does not state collection dates in the cited sections. The result is limited to study-labelled S. sciureus and S. boliviensis groups, with the authors’ specimen-identification caveat retained.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Tissue and DNA obtained from museums and research centres, with some captive-colony material reported; individual wild/captive status is not resolved for the full panel. No live field observations are used.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This single marker panel supports a narrow result about recent insertion polymorphisms and sample-group allele-frequency patterns; it does not supply a full species phylogeny, divergence-time estimate, or independently resolved species boundary.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The study’s sample sources are not a range-wide distribution inventory; no native-range or change-through-time claim is made.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence review or bounded fossil-record search was performed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The paper mentions potential relevance to conservation biology but does not provide a formal status, trend, or population-risk assessment.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one bounded molecular-marker result is supported; six facets remain not-assessed and evolution remains partial.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The sample panel includes historical specimen labels and unresolved individual assignments; no species-boundary conclusion is inferred.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No comprehensive facet-by-facet literature search or independent external expert review has been completed.
<!-- /evo:text -->
