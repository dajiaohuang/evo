---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Saccharomyces cerevisiae (Desm.) Meyen
    rank: species
    sourceDatasetId: "2073"
    checkedAt: 2026-09-27
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
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 27
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4TWCR
            stableId: col:4TWCR@COL26.8
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
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4TWCR. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-a3d941e8-bb9a-8175-adc7-9645086938a1
          metadataVariant: 0
          sourceKey: diezmann2009
          usage:
            licenseAppliesTo: Article text under the article's stated Creative Commons Attribution License; no figures or tables are reproduced.
            stableId: doi:10.1371/journal.pone.0005317
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0005317
            accessedAt: 2026-09-24
            locator: Abstract; Results, population structure and recombination; Table 1; Figure 1; Materials and Methods, Yeast strains
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution: Diezmann S, Dietrich FS (2009). PLOS ONE 4(4):e5317. https://doi.org/10.1371/journal.pone.0005317. Claims paraphrased.
          originalFields:
            - id
            - title
            - url
            - rightsEvidenceUrl
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
            - licenseAppliesTo
            - attribution
        - referenceId: ref-849b502c-e442-8d26-a4da-e228e54ff37f
          metadataVariant: 0
          sourceKey: kato2021CellShrinkage
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1128/mBio.03094-21
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            rightsEvidenceUrl: https://journals.asm.org/doi/10.1128/mBio.03094-21
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
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
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - attribution
    systematicSearch:
      date: 2026-09-27
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: COL26.8 usage 4TWCR; DOI 10.1371/journal.pone.0005317; COL26.8 usage 4TWCR; DOI 10.1128/mBio.03094-21
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
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - kato2021CellShrinkage
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/1
      lifeHistory:
        status: not-assessed
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
              - diezmann2009
            locator: Abstract; Table 1; Materials and Methods, Yeast strains, culturing and DNA extraction
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - diezmann2009
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Saccharomyces cerevisiae

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage, verbatim scientific name including authorship, rank, status, sourceDatasetId, and Fungi classification were checked in the pinned registry release.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species usage 4TWCR in COL26.8. The biological evidence below is limited to the explicitly sampled strains and assays in Diezmann and Dietrich (2009) and Kato et al. (2021), not all strains or the full accepted species concept.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The 2009 paper includes wild-environment isolates identified by source as soil, fruit, and insect-gut material; the 2021 morphology study used laboratory strains. Neither study is a representative survey of wild populations.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
The 2009 paper includes vineyard, brewery, and commercial Saccharomyces boulardii preparation strains; the 2021 morphology study used laboratory strains. Neither establishes species-wide domestication status.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying fungal source dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 4TWCR; accepted scientific name and authorship; rank species; sourceDatasetId 2073; Fungi classification
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, sourceDatasetId, and classification only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original study of a 103-strain panel using five nuclear loci and oxidative-stress assays; dossier claims are paraphrases and retain the study sampling boundary.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article text only. No figure, table, or supplemental video is reproduced; the article page states supplemental material has separate reuse terms.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Observation, cell-area shrinkage results; Fig. 2A-C; Materials and Methods, strain and culture condition and time-lapse imaging/data analysis
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Original time-lapse study of stationary-phase laboratory strains W303-1A and BY4741. The claim concerns measured cell-area change around dye-positive cell death under the reported batch-culture and imaging protocol.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Kato S, Suzuki K, Kenjo T, Kato J, Aoi Y, Nakashimada Y (2021). mBio. https://doi.org/10.1128/mBio.03094-21. Claim paraphrased; no figures or supplemental material reused.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Pinned COL26.8 identity verification and bounded reading of the named primary study for population/ecology claims. Exact COL26.8 identity verification and bounded assessment of one primary study for a cell-morphology claim.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Matched the exact COL usage in the pinned registry; read the paper abstract, methods, results, Table 1, and Figure 1. No comprehensive literature, global distribution, fossil, or conservation search was performed. Matched the accepted COL usage in the pinned registry; read the article abstract, results, figures 1-2 descriptions, and methods. No comprehensive literature search or strain-diversity review was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Claims expressly supported by the original study's named strain panel or five-locus population analysis. Directly reported cell-area measurements for the named laboratory strains under the article's stated conditions.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Claims from uncited secondary sources, study-wide frequencies presented as species-wide rates, global range, and unassessed facets. Cell-volume claims, baseline/species-wide morphology, other strains or environments, and unassessed facets.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In the study's stationary-phase batch-culture time-lapse assays, measured cell area shrank around the onset of PI-positive death in laboratory strains W303-1A and BY4741: mean reductions were 27.2% and 27.0%, respectively. With phloxine B staining, the corresponding mean reductions were 24.8% and 27.9%. W303-1A was grown for 2 days and BY4741 for 1 day to stationary phase; both were imaged hourly for 30 hours at about 24°C. These measurements describe two laboratory strains under the reported protocol, not cell volume, baseline morphology, or species-wide variation.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Results, PI-associated cell-area shrinkage values for W303 and BY4741; Phloxine B values; Materials and Methods, strain/culture and time-lapse imaging including the 30-hour hourly interval and cell-area measurement windows
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Kato et al. 2021 laboratory batch-culture study. W303-1A and BY4741 reached stationary phase after 2 and 1 days, respectively; the time-lapse imaging was hourly for 30 hours at about 24°C.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Two laboratory strains and their reported culture conditions only; no wild or domesticated population status is inferred.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The cited study does not provide a species-level morphological assessment.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/1 -->
The dynamic cell-area observation is limited to two laboratory strains and the study's batch-culture, staining, and imaging protocol; it does not characterize baseline morphology, cell volume, other strain backgrounds, or environmental variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The cited study does not directly assess reproductive or developmental life history for the full accepted species concept.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The study analyzed 103 S. cerevisiae strains whose recorded origins included clinics, Pennsylvania and North Carolina soils, North Carolina and Australian vineyards, fruits, a brewery, commercial S. boulardii preparations, and insect guts. These are the panel's source categories, not estimates of habitat frequency or a complete account of the species' ecology.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
The strain collection included specified U.S. and Australian sites and source categories described in the 2009 paper; collection dates and global coverage are not established by this panel summary.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The panel mixes clinical, commercial, human-associated, and wild-environment isolates; no species-wide wild or domesticated status is inferred.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The paper uses a selected strain panel rather than a representative field survey; source-category counts do not establish habitat preference, prevalence, or global occurrence.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
For the strains with complete sequence data at five nuclear loci, the authors report three population-genetic groups associated with differing ecological and geographic origins; soil isolates showed no detected recombination at those loci in this panel. This is study-specific population structure, not a species phylogeny or complete evolutionary history.
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Abstract, Methodology/Principal Findings; Results, Levels of recombination, genetic diversity and linkage; Figure 1; Table 2
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Five-locus analysis of the study's 2009 strain panel; only isolates with the reported sequence data are represented.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Evidence concerns stored isolates from the listed source categories and laboratory assays; it does not infer current wild-population dynamics.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The bounded five-locus panel does not establish species-wide population structure, a species tree, divergence times, or present-day population processes.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The source is not a systematic or georeferenced range survey; the listed isolate origins do not establish global distribution or occupancy.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No formal conservation assessment or population-trend review was performed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Morphology now includes only a bounded cell-area result from two laboratory strains; baseline morphology, life history, distribution, fossil evidence, and conservation remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Ecology and evolution remain limited to a selected 2009 strain panel and five-locus analysis; those results do not establish complete species-wide accounts.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No systematic literature review or complete comparison with the COL26.8 species concept has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
