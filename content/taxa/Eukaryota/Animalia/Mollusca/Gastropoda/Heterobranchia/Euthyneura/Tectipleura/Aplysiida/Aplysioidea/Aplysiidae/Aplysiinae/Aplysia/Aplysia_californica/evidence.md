---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Aplysia californica J. G. Cooper, 1863
    authorship: J. G. Cooper, 1863
    rank: species
    sourceDatasetId: "1130"
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
      wild: No wild individuals were studied in the cited cohort.
      domesticated: Domestication was not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/FQ2Y
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:FQ2Y@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage FQ2Y; exact name, authorship, rank, status, sourceDatasetId 1130, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage FQ2Y. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-24184734-7ef1-8b45-a36a-d7e847e25dbe
          metadataVariant: 0
          sourceKey: kron2020
          usage:
            licenseAppliesTo: Article text under its article-level CC BY notice; separately credited third-party material is excluded.
            stableId: doi:10.3389/fnagi.2020.573764
            accessedAt: 2026-09-25
            locator: Materials and Methods > Animal Rearing; Results > Cohort Weight and Survivorship; Figure 1 and caption; Table 1.
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
      queryOrPath: Pinned COL26.8 dataset 316115 usage FQ2Y; Frontiers DOI 10.3389/fnagi.2020.573764.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - kron2020
            locator: Results > Cohort Weight and Survivorship; Figure 1A and caption.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            sourceIds:
              - kron2020
            locator: Materials and Methods > Animal Rearing; Results > Cohort Weight and Survivorship; Figure 1B and caption.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
      - id: M2L
        scientificName: Mollusca
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NF3Y
        scientificName: Gastropoda Cuvier, 1795
        authorship: Cuvier, 1795
        rank: class
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NVXJ
        scientificName: Heterobranchia Burmeister, 1837
        authorship: Burmeister, 1837
        rank: subclass
        status: accepted
        sourceDatasetId: "1130"
      - id: CFV7Q
        scientificName: Euthyneura Spengel, 1881
        authorship: Spengel, 1881
        rank: infraclass
        status: accepted
        sourceDatasetId: "1130"
      - id: 7VBDS
        scientificName: Tectipleura
        authorship: null
        rank: subterclass
        status: accepted
        sourceDatasetId: "1130"
      - id: Q5
        scientificName: Aplysiida
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NGGN
        scientificName: Aplysioidea Lamarck, 1809
        authorship: Lamarck, 1809
        rank: superfamily
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NFYL
        scientificName: Aplysiidae Lamarck, 1809
        authorship: Lamarck, 1809
        rank: family
        status: accepted
        sourceDatasetId: "1130"
      - id: BG4TV
        scientificName: Aplysiinae Lamarck, 1809
        authorship: Lamarck, 1809
        rank: subfamily
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NPDX
        scientificName: Aplysia Linnaeus, 1767
        authorship: Linnaeus, 1767
        rank: genus
        status: accepted
        sourceDatasetId: "1130"
      - id: FQ2Y
        scientificName: Aplysia californica J. G. Cooper, 1863
        authorship: J. G. Cooper, 1863
        rank: species
        status: accepted
        sourceDatasetId: "1130"
---

# Aplysia californica

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage FQ2Y verified against the pinned ChecklistBank search and hierarchy registries; the accepted name, authorship, species rank, sourceDatasetId, and parent chain match.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species represented by COL26.8 accepted usage FQ2Y. Evidence is from one hatchery cohort derived from a single egg mass and does not estimate wild or species-wide lifespan or body mass.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / captive

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/captive -->
Two hundred animals from one egg mass were reared under standard hatchery conditions at the University of Miami National Resource for Aplysia; natural mortality was tracked for 53 individuals.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1130
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary cohort study of age-associated sensory-neuron changes, cohort mass, and survivorship in hatchery-reared Aplysia californica; article text is paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Kron NS, Schmale MC, Fieber LA (2020). Front. Aging Neurosci. 12:573764. https://doi.org/10.3389/fnagi.2020.573764. Claims paraphrased from article text.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and a focused review of one primary hatchery-cohort study; not a seven-facet species literature review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted COL26.8 usage and parent chain in the pinned registry. Reviewed the article's animal-rearing description, cohort-mass and survivorship results, age bounds, and item-level license notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary article naming Aplysia californica and directly reporting the cohort origin, rearing, body-mass trend, survivorship sample, and license.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Species-wide lifespan, wild population variation, natural range, phylogeny, fossil record, conservation, and claims about unverified SRA data reuse.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In this hatchery cohort, mean body mass increased until an inflection during the ninth month and then declined; the smoothed cohort trend peaked around ages 9–10 months. This is an age-specific weight trend from one cohort, not a diagnostic adult description or species-wide size range.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
University of Miami National Resource for Aplysia hatchery cohort from one egg mass; animals were weighed monthly, with Figure 1 showing a peak around 9–10 months post-hatch.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Hatchery-reared captive animals; no wild size comparison was made.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The cohort weight curve does not establish diagnostic morphology, adult body dimensions, sex differences, or size variation across wild populations.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Among the 53 individuals whose natural mortality was tracked in this single hatchery cohort, median lifespan was 363 days; the final recorded mortality occurred at 422 days post-hatch. These cohort-specific observations do not estimate species-wide longevity or wild survival.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Two hundred animals from a single egg mass were reared at the University of Miami National Resource for Aplysia; natural mortality was recorded for 53 individuals, with the final event at 422 days post-hatch. Study calendar dates were not stated in the locators reviewed.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Captive hatchery cohort; no wild animals were included.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
A single captive cohort and 53 tracked natural mortalities do not establish species-wide, wild, or population-comparative lifespan; reproduction and early development were not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The hatchery cohort study does not assess natural habitat, wild diet, ecological interactions, or range-wide ecology.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-specific evolutionary comparison or population-genetic analysis was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The captive cohort's parental geographic origin is not stated and no distribution assessment was conducted.
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
One captive cohort supports only bounded age-specific mass and survivorship observations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Five facets remain not assessed; these data do not establish wild or species-wide values.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
