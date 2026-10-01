---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Fusarium graminearum Schwabe
    rank: species
    sourceDatasetId: "2073"
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
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: The study samples a pathogen associated with agricultural crop systems but does not assess domestication of the fungus.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 28
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/6JSTK
            stableId: col:6JSTK@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 6JSTK; name and authorship; rank species; sourceDatasetId 2073; Fungi classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6JSTK. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-572e5132-4ab3-8cb1-a2c2-49ea27782b50
          metadataVariant: 0
          sourceKey: kellyWard2018
          usage:
            licenseAppliesTo: Article and its text under CC0 1.0; separately credited material may carry separate terms. No figures are reproduced.
            stableId: doi:10.1371/journal.pone.0194616
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0194616
            accessedAt: 2026-09-24
            locator: Abstract; Results, Population genomic structure; Figure 1; Materials and Methods, Genome sequencing
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution: Kelly AC, Ward TJ (2018). PLOS ONE 13(3):e0194616. https://doi.org/10.1371/journal.pone.0194616. Claims paraphrased.
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
            - licenseUrl
            - licenseAppliesTo
            - attribution
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: COL26.8 usage 6JSTK; DOI 10.1371/journal.pone.0194616
      inclusionCriteria: Claims directly reported for the paper's North American cereal-crop isolates and genome analyses.
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
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
              - kellyWard2018
            locator: Abstract; Materials and Methods, Genome sequencing; Figure 1
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
              - kellyWard2018
            locator: Abstract; Results, Population genomic structure; Figure 1 and its legend
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Fusarium graminearum

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage, verbatim scientific name including authorship, rank, status, sourceDatasetId, and Fungi classification were checked in the pinned registry release.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal accepted usage 6JSTK. Biological claims describe the 60 North American cereal-crop isolates and analyses in Kelly and Ward (2018), not all isolates or the complete species concept.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The source isolates were collected from cereal crops; their source category does not establish unmanaged wild populations.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying fungal source dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, sourceDatasetId, and classification only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original whole-genome population study of three North American F. graminearum cereal-crop isolate groups; dossier statements are limited to the sampled isolates.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Pinned COL26.8 identity verification and bounded reading of one primary whole-genome population study.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Matched the exact COL usage in the pinned registry and read the article abstract, population-genomics results, Figure 1 description, and sample collection methods. No comprehensive global distribution, ecological, fossil, or conservation review was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Secondary-source range statements, inference beyond the sampled groups, claims from other Fusarium species, and unassessed facets.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The cited genomic study does not provide a species-level morphological assessment.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The cited study does not directly assess the complete reproductive or developmental life history.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The study's population-genomic panel comprised 60 F. graminearum isolates collected from cereal crops in the northern United States and southern Canada: 20 NA1/15ADON, 20 NA2/3ADON, and 20 NX-2 isolates. This describes the source and structure of that sample, not their prevalence across the species' range or all host plants.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
North American cereal-crop isolates selected for the 2018 population-genomic analysis; exact dates and exhaustive site coverage are not claimed here.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Crop-associated field isolates; the study does not resolve wild-host populations or fungal domestication.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This selected population-genomic panel is not a comprehensive host, habitat, or geographic survey; the broader ecological niches and field prevalence remain unassessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Bayesian clustering and phylogenomic analyses of the 60 sampled isolates supported three North American populations (NA1, NA2, and NA3); eight NX-2 isolates had admixed ancestry across the groups. This is population structure in the study panel, not a species-wide phylogeny or global evolutionary history.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Whole-genome data from 60 cereal-crop isolates sampled across North America; group assignments follow the authors' 2018 analyses.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Molecular evidence from archived crop-associated isolates; no current population status is inferred.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The study is geographically limited and does not establish a global species phylogeny, divergence dates, or the present distribution of each population.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The study samples selected North American isolates and does not establish a complete native, introduced, or global range.
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
Only study-bounded crop-isolate sampling and population-genomic evidence from one primary study have been assessed; morphology, life history, distribution, fossil, and conservation facets remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic literature search or complete comparison with the COL26.8 species concept has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
