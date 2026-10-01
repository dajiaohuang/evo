---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Apis mellifera Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 西方蜜蜂
      en: Western honey bee
    reviewStatus: source-linked
    checkedAt: 2026-09-23
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
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-84baafcd-8d79-8515-ab69-2d210b83b0fe
          metadataVariant: 0
          sourceKey: account
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
            url: https://www.checklistbank.org/dataset/316115/taxon/FN46
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
    scientificName: Apis mellifera Linnaeus, 1758
    authorship: Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-25
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
      wild: No wild colonies were studied; the evidence concerns managed observation colonies.
      domesticated: Managed honey bee colonies were used; domestication history and feral populations were not assessed.
      captive:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/captive
      fossil: No fossil occurrence or geological age was assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/FN46
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:FN46@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage FN46; exact name, authorship, rank, status, sourceDatasetId 2144, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage FN46. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-b63219f0-cee4-8ac0-a3bb-7640262ff743
          metadataVariant: 0
          sourceKey: lin2026
          usage:
            licenseAppliesTo: Article text under the article-level CC BY 4.0 notice; separately credited third-party material is excluded.
            stableId: doi:10.1073/pnas.2518687123
            accessedAt: 2026-09-25
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
    systematicSearch:
      date: 2026-09-25
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage FN46; PNAS DOI 10.1073/pnas.2518687123.
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - lin2026
            locator: "Experiment 1: Audience Effects on the Honey Bee Waggle Dance; Discussion."
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
      - id: RT
        scientificName: Arthropoda
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: L2655
        scientificName: Hexapoda
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: H6
        scientificName: Insecta
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: HYM
        scientificName: Hymenoptera
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: null
      - id: KZPW7
        scientificName: Apocrita
        authorship: null
        rank: suborder
        status: accepted
        sourceDatasetId: null
      - id: KZMNP
        scientificName: Aculeata
        authorship: null
        rank: infraorder
        status: accepted
        sourceDatasetId: null
      - id: 625GP
        scientificName: Apoidea
        authorship: null
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 6KD
        scientificName: Apidae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: J5V
        scientificName: Apinae
        authorship: null
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: KLP
        scientificName: Apini
        authorship: null
        rank: tribe
        status: accepted
        sourceDatasetId: "2144"
      - id: YNV
        scientificName: Apis Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: FN46
        scientificName: Apis mellifera Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: species
        status: accepted
        sourceDatasetId: "2144"
---

# Apis mellifera

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
蜂群分工和原生与引入范围的区别；欧洲亚种的日程、生产数字及管理建议不推广到全种。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Colony roles and the distinction between native and introduced range; European-subspecies schedules, production figures and management advice are not generalized to the species.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级及父链；保留亚属写法和未分配的来源 ID，不据名称推导生物学事实。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent chain; subgenus notation and unassigned source IDs are retained. Names do not establish biological traits.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage FN46 verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species represented by COL26.8 accepted usage FN46. The cited experiment manipulated dance-floor audience size in managed honey bee colonies; the result is not a species-wide or wild-colony behavior estimate.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / captive

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/captive -->
Live workers and foragers were observed in managed colonies at the CAS Southwest Center for Biological Diversity apiary in Kunming, China.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Experiment 1: Audience Effects on the Honey Bee Waggle Dance; Discussion; managed-colony methods and audience-size manipulation.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary controlled dance-audience experiments with managed Apis mellifera colonies; article text is paraphrased and no figures are reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Lin T, et al. (2026). PNAS 123(14):e2518687123. https://doi.org/10.1073/pnas.2518687123. Claims paraphrased from article text.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and a focused review of one primary managed-colony waggle-dance experiment; this is not a seven-facet literature review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified accepted COL26.8 usage and the complete parent chain in the pinned registry. Reviewed the primary article's audience manipulation, outcomes, managed-colony setting, and item-level rights notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary article naming Apis mellifera and reporting audience-size manipulation, dance outcomes, study location, dates, and reuse terms.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Wild-colony generalization, global distribution, broad morphology, species-wide life history, phylogeny, fossils, and conservation claims not established by this experiment.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The dance-audience experiment did not assess diagnostic morphology or morphological variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The experiment did not assess development, reproduction, survival, or other species-wide life-history traits.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In the reported audience-manipulation experiments, fewer dance followers led dancers to perform fewer waggle circuits and encode direction and distance less precisely. This is a controlled social-behavior result from managed colonies, not a species-wide estimate or evidence about wild-colony behavior.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Managed observation colonies at the CAS Southwest Center for Biological Diversity apiary in Kunming, China; trials ran April through September 2023. Experiment 1 used 15 trials with manipulated dance-floor audience sizes.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Live workers and foragers from managed colonies; no wild colony was sampled.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
One managed-apiary experiment does not establish behavior across wild colonies, subspecies, genotypes, or geographic populations; diet, habitat selection, and broader ecological interactions were not reviewed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-specific phylogenetic, population-genetic, or comparative evolutionary analysis was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The Kunming apiary location is not a native or global distribution assessment.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence or bounded fossil-record search was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current conservation assessment, population trend, or threat analysis was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One controlled managed-colony study supports a narrow social-behavior claim only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Six facets remain not assessed; this is not a species-wide dossier review.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
