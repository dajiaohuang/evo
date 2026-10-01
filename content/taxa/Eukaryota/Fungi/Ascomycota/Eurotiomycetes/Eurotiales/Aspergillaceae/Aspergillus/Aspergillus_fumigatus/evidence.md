---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Aspergillus fumigatus Fresen.
    authorship: Fresen.
    rank: species
    sourceDatasetId: "2073"
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
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication was not studied.
      captive: No captive animal setting applies; fungal isolates were cultured in vitro.
      fossil: No fossil evidence or geological age was assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/HC3H
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:HC3H@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage HC3H; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage HC3H. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-5789ebf7-d113-86e2-a22a-88f60a95f13a
          metadataVariant: 0
          sourceKey: fuller2016
          usage:
            licenseEvidenceLocator: Article copyright and license notice, lines 124–127.
            licenseAppliesTo: Article text; third-party material is excluded when separately credited. No figures or supplemental files are reused.
            stableId: doi:10.1128/mbio.01517-16
            locator: Abstract; Results, light-response sections; Fig. 1 and Figs. S1–S2; Table S1.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            accessedAt: 2026-09-25
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - locator
            - license
            - rightsHolder
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - accessedAt
            - licenseAssessment
            - scope
            - licenseVersion
            - licenseUrl
    systematicSearch:
      date: 2026-09-25
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage HC3H; DOI 10.1128/mbio.01517-16.
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
            locator: Abstract; Results, photopigmentation and photoconidiation sections; Fig. 1 and Figs. S1–S2; strain list in Table S1.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            sourceIds:
              - fuller2016
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
      - id: F
        scientificName: Fungi
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: "2073"
      - id: SM
        scientificName: Ascomycota
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: "2073"
      - id: BD
        scientificName: Eurotiomycetes
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2073"
      - id: 37R
        scientificName: Eurotiales
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2073"
      - id: 6T5
        scientificName: Aspergillaceae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2073"
      - id: 33ZF
        scientificName: Aspergillus
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "2073"
      - id: HC3H
        scientificName: Aspergillus fumigatus Fresen.
        authorship: Fresen.
        rank: species
        status: accepted
        sourceDatasetId: "2073"
---

# Aspergillus fumigatus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage HC3H. The cited paper examines light-responsive development in a defined in-vitro isolate panel; it does not establish a species-wide field response.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Some isolates had environmental origins, but the experiments used laboratory cultures rather than observing wild populations.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Fuller K.K., Cramer R.A., Zegans M.E., Dunlap J.C., Loros J.J. (2016). mBio 7(5):e01517-16. https://doi.org/10.1128/mbio.01517-16. CC BY 4.0. Claims paraphrased; no figures reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
One primary source supports a bounded claim only; article text is paraphrased and no figures or tables are reused.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary in-vitro photobiology study; not a seven-facet literature review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified accepted usage and complete parent chain in the pinned COL26.8 registry; reviewed isolate-panel methods, light-response results, supplementary strain context, and the publisher license notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary article directly testing Aspergillus fumigatus isolates and reporting isolate scope, culture conditions, outcome, and item-level reuse terms.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Natural-population frequencies, field ecology, virulence generalization, diagnostic morphology, species-wide development, distribution, fossils, and conservation claims not established by this assay.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This focused source review did not establish evidence for morphology.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
A controlled study of 15 Aspergillus fumigatus isolates found heterogeneous light responses in culture: most isolates showed light-associated hyphal pigmentation or conidiation, while at least one tested isolate showed no overt response. The outcomes varied among strain backgrounds and are limited to the reported culture conditions.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Laboratory cultures incubated on GMM or RPMI 1640 under constant darkness or white light, with reported assays at 37°C for 48 hours or three days. Field location and collection dates for all isolates are not established by these experiment locators.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
The article tested laboratory cultures from a mix of commonly used laboratory, clinical, and environmental isolates; no field community was observed in these experiments.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The culture assays establish strain-dependent responses under specified laboratory conditions, not a uniform response or phenotype frequency in natural populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This focused source review did not establish evidence for ecology.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This focused source review did not establish evidence for evolution.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
This focused source review did not establish evidence for distribution.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
This focused source review did not establish evidence for fossil.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
This focused source review did not establish evidence for conservation.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in lifeHistory only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
