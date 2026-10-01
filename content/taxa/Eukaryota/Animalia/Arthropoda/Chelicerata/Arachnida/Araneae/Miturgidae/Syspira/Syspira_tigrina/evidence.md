---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Syspira tigrina Simon, 1895
    authorship: Simon, 1895
    rank: species
    sourceDatasetId: "56185"
    checkedAt: 2026-09-27
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
      - id: KZWYC
        scientificName: Chelicerata
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: CCQKT
        scientificName: Arachnida
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: RN
        scientificName: Araneae
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "56185"
      - id: CV9PN
        scientificName: Miturgidae Simon, 1886
        authorship: Simon, 1886
        rank: family
        status: accepted
        sourceDatasetId: "56185"
      - id: CVQKT
        scientificName: Syspira Simon, 1895
        authorship: Simon, 1895
        rank: genus
        status: accepted
        sourceDatasetId: "56185"
      - id: 5448K
        scientificName: Syspira tigrina Simon, 1895
        authorship: Simon, 1895
        rank: species
        status: accepted
        sourceDatasetId: "56185"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
        - plazi_syspira_archive
        - valdez_jimenez_palacios_cardiel_2025
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Captive, domesticated, and escaped occurrences were not assessed by this source slice.
      fossil: Fossil occurrence and geological age were not assessed by this source slice.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5448K
            stableId: col:5448K@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 5448K; exact name, authorship, rank, status, sourceDatasetId, and complete accepted parent chain.
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5448K. https://doi.org/10.48580/dgywk.
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
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
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - scope
        - referenceId: ref-cadb04aa-d56b-80da-a5af-39addc82c540
          metadataVariant: 0
          sourceKey: plazi_syspira_archive
          usage:
            licenseAppliesTo: Extracted Plazi archive description records only; this does not apply to the cited journal article, PDF, or figures.
            stableId: PlaziArchiveSha256:8b095aa0880e8b281b2e1de8d903e854553f6118e917b786e512ef099a1b9f54
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: aggregate-declaration-only
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
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - licenseAssessment
            - attribution
            - scope
        - referenceId: ref-e5f7b4f3-4ca5-8e70-a88f-963a5aea5a6b
          metadataVariant: 0
          sourceKey: valdez_jimenez_palacios_cardiel_2025
          usage:
            licenseAppliesTo: Bibliographic citation only; no article PDF, article prose, or figures are redistributed.
            stableId: doi:10.11646/zootaxa.5722.3.1
            locator: "Bibliographic record for Zootaxa 5722 (3): 301-325; taxon-specific pages are recorded in each claim locator."
            licenseAssessment: unknown
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - locator
            - license
            - licenseAssessment
            - licenseAppliesTo
            - attribution
            - scope
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
              - valdez_jimenez_palacios_cardiel_2025
              - plazi_syspira_archive
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
              - valdez_jimenez_palacios_cardiel_2025
              - plazi_syspira_archive
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/4
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Syspira tigrina

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Matched the exact Plazi COL usage ID to one accepted COL26.8 species usage and checked its name, authorship, source dataset and pinned accepted parent chain; no fuzzy name match was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Accepted COL26.8 identity 5448K; source article treatment 03B03901922AAE3088E7FC7E72BE2854; this routing does not establish full scientific-concept equivalence across all literature.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The ecology claims concern wild habitat reports or pitfall-trap samples as described in the cited treatment; broader population coverage is not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 56185
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
TreatmentBank description-extension rows for exact COL usages 5448F and 5448K; source ZIP is absent from this checkout, and its EML was not independently rechecked for this batch.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Plazi TreatmentBank, selected Syspira treatment records; archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Article-scoped extracted treatment records; not a complete species dossier.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Valdez-Mondragón, Alejandro, Jiménez, Maria Luisa, Palacios-Cardiel, Carlos (2025): On the sympatric spiders from the Baja California Peninsula: Descriptions of the males of Syspira longipes Simon and S. tigrina Simon (Araneae: Miturgidae), with new synonyms. Zootaxa 5722 (3): 301-325.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Cited taxonomic article; item-level reuse rights remain unknown.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The diagnosis describes a three-stripe dark carapace pattern and sand-colored living specimens of Syspira tigrina. This claim is restricted to those non-palpal characters; the diagnosis and description differ on embolus and cymbial-groove traits, which are not synthesized here.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Plazi description-extension row 14 (diagnosis); treatment https://treatment.plazi.org/id/03B03901922AAE3088E7FC7E72BE2854; original article p. 311; figures 31–64 and 67–68, DOI 10.11646/zootaxa.5722.3.1; archive SHA-256 8b095aa0880e8b281b2e1de8d903e854553f6118e917b786e512ef099a1b9f54. Diagnosis/description conflict was checked against Plazi row 15 (description); conflicting embolus and cymbial-groove wording is excluded.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Species account on p. 311, with figures 31–64 and 67–68; diagnosis-level characters in the 2025 treatment only.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Live coloration is attributed to living specimens; broader life-stage, population, and geographic variation were not assessed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
These are selected characters and descriptions from one taxonomic treatment, not a complete character matrix or assessment of variation across all populations. S. tigrina embolus and cymbial-groove statements conflict between diagnosis and description and are deliberately excluded from an unqualified claim.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No systematic reproductive, developmental, lifespan, or full behavioral life-history search was performed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors describe Syspira tigrina as mainly active at night and cite pitfall-trap collections at study locations where it represented up to 50% of the cursorial spiders collected. The percentage is a local, method-specific sample result, not a species-wide abundance estimate.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Plazi description-extension row 17 (biology_ecology); treatment https://treatment.plazi.org/id/03B03901922AAE3088E7FC7E72BE2854; original article p. 311; figures 31–64 and 67–68, DOI 10.11646/zootaxa.5722.3.1; archive SHA-256 8b095aa0880e8b281b2e1de8d903e854553f6118e917b786e512ef099a1b9f54.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Natural-history account on p. 311; nocturnal activity and pitfall-trap result are limited to the locations and sampling context reported or cited by the treatment.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild-origin pitfall-trap samples and author-reported activity; no captive or species-wide behavior inference is made.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Evidence is limited to the treatment's reported microhabitats, activity statement, and cited pitfall-trap samples; interactions, seasonal ecology, environmental tolerances, and sampling completeness remain unassessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or population-genetic evidence is assessed in this source slice.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The cited account and local observations do not establish a current, complete range or trend.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No conservation assessment, population trend, or threat evaluation is assessed in this source slice.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only two bounded facets are represented from one taxonomic article; five facets remain not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Ecology and morphology claims are limited to the cited treatment, its specimens, locations, and sampling methods.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
For S. tigrina, conflicting embolus and cymbial-groove wording is excluded from any unqualified synthesis.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
The article-level text reuse license is unknown; the retained CC0 declaration applies only to extracted Plazi records.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/4 -->
The source ZIP is absent from this checkout and its embedded EML was not rechecked; no independent external review has been completed.
<!-- /evo:text -->
