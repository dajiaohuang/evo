---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Hyphessobrycon loweae Costa & Géry, 1994
    authorship: Costa & Géry, 1994
    rank: species
    sourceDatasetId: "1010"
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
      - id: 8VR36
        scientificName: Actinopterygii
        authorship: null
        rank: gigaclass
        status: accepted
        sourceDatasetId: "1010"
      - id: KTWM8
        scientificName: Actinopteri
        authorship: null
        rank: superclass
        status: accepted
        sourceDatasetId: "1010"
      - id: 8V4VD
        scientificName: Teleostei
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "1010"
      - id: X2
        scientificName: Characiformes
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "1010"
      - id: DDF58
        scientificName: Acestrorhamphidae Eigenmann, 1907
        authorship: Eigenmann, 1907
        rank: family
        status: accepted
        sourceDatasetId: "1010"
      - id: V96FY
        scientificName: Hyphessobryconinae Lima, Carvalho & Faria, 2024
        authorship: Lima, Carvalho & Faria, 2024
        rank: subfamily
        status: accepted
        sourceDatasetId: "1010"
      - id: KVD65
        scientificName: Hyphessobrycon Durbin, 1908
        authorship: Durbin, 1908
        rank: genus
        status: accepted
        sourceDatasetId: "1010"
      - id: 3NRY9
        scientificName: Hyphessobrycon loweae Costa & Géry, 1994
        authorship: Costa & Géry, 1994
        rank: species
        status: accepted
        sourceDatasetId: "1010"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
        - plazi_hyphessobrycon_archive
        - ingenito_lima_buckup_2013
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3NRY9
            stableId: col:3NRY9@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3NRY9. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-d6aae674-bf8b-8686-ab44-c6f1eecaa4e7
          metadataVariant: 0
          sourceKey: plazi_hyphessobrycon_archive
          usage:
            licenseAppliesTo: Extracted Plazi archive rows only; it does not apply to the cited journal article, DOI page, PDF, or figures.
            stableId: PlaziArchiveSha256:5a0fd2206af2b824dd67882f2fee9ac1cd4f7f1713fa831cbf3e7f35aad87d84
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
        - referenceId: ref-2aea2fb7-e8a8-8300-a965-6a80308c4959
          metadataVariant: 0
          sourceKey: ingenito_lima_buckup_2013
          usage:
            licenseAppliesTo: Bibliographic citation only; no article prose, PDF, or figures are redistributed.
            stableId: doi:10.1590/S1679-62252013000100004
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
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
              - ingenito_lima_buckup_2013
              - plazi_hyphessobrycon_archive
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
              - ingenito_lima_buckup_2013
              - plazi_hyphessobrycon_archive
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Hyphessobrycon loweae

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Matched the exact Plazi sourceColUsageId to one accepted COL26.8 species usage and checked its name, authorship, source dataset, and pinned accepted parent chain; no fuzzy name match was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Accepted COL26.8 identity 3NRY9; source article treatment 03D2C41AD050FFB7FF28FF17FEFAF17E; source routing does not establish full scientific-concept equivalence across all literature.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims concern taxonomic specimens, collection localities, and habitat reports described in the cited treatment; broader population status and coverage are not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1010
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3NRY9; exact accepted name, authorship, rank, status, sourceDatasetId, and pinned accepted parent chain.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
TreatmentBank description-extension rows 10, 11, 12 for accepted COL26.8 3NRY9; source usage 3NRY9; source ZIP absent, embedded EML not independently rechecked for this batch.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Plazi TreatmentBank, selected Hyphessobrycon treatment rows; the archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Article-scoped extracted treatment records; not a complete species dossier.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Two taxon treatments: Hyphessobrycon peugeoti source treatment pages 34-37; H. loweae treatment pages 38-40. Claim-level DOI pages and Plazi description-extension row locators are recorded on each facet.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Ingenito, Leonardo F. S., Lima, Flávio C. T., Buckup, Paulo A. (2013): A new species of Hyphessobrycon Durbin (Characiformes: Characidae) from the rio Juruena basin, Central Brazil, with notes on H. loweae Costa & Géry. Neotropical Ichthyology 11 (1): 33-44.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Cited taxonomic article; item-level reuse rights remain unknown.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The treatment's comparative diagnosis describes mature male Hyphessobrycon loweae with an elongated, filamentous dorsal fin. Compared with H. peugeoti, the examined H. loweae material is reported with six to seven horizontal scale rows from dorsal-fin origin to lateral line and 17-21 branched anal-fin rays (mode 20), versus five rows and 21-24 rays (mode 22) for H. peugeoti. These are treatment-level diagnostic comparisons, not estimates of all populations.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Plazi description-extension row 10 (diagnosis), row 11 (description); treatment https://treatment.plazi.org/id/03D2C41AD050FFB7FF28FF17FEFAF17E; Ingenito, Leonardo F. S., Lima, Flávio C. T., Buckup, Paulo A. (2013): A new species of Hyphessobrycon Durbin (Characiformes: Characidae) from the rio Juruena basin, Central Brazil, with notes on H. loweae Costa & Géry. Neotropical Ichthyology 11 (1): 33-44. DOI 10.1590/S1679-62252013000100004; article pp. 38-40; archive SHA-256 5a0fd2206af2b824dd67882f2fee9ac1cd4f7f1713fa831cbf3e7f35aad87d84.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Comparative diagnosis and meristic description in the 2013 treatment, pp. 38-40, Plazi rows 10-11. The fin character is explicitly restricted to mature males; the counts describe examined taxonomic material and do not quantify all populations.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
The diagnosis and counts concern specimens described in the taxonomic treatment. Broader population, age-class, and life-status coverage was not assessed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only comparative diagnoses and selected meristic / specimen description data from one taxonomic article are represented; population-wide variation, additional life stages, and unreported characters remain unassessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The cited specimen collection dates and early-dry-season collection note do not establish a full reproductive calendar, development, lifespan, or complete life cycle.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors report clear, slow-flowing streams with abundant submerged vegetation at named H. loweae localities, including Córrego Xavante, upper rio das Mortes, and rio Culuene tributaries near Gaúcha do Norte. They also cite paratypes from the small, densely vegetated Lago do Leo. These are locality-specific reports, not a complete or uniform habitat rule for the species.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Plazi description-extension row 12 (biology_ecology); treatment https://treatment.plazi.org/id/03D2C41AD050FFB7FF28FF17FEFAF17E; Ingenito, Leonardo F. S., Lima, Flávio C. T., Buckup, Paulo A. (2013): A new species of Hyphessobrycon Durbin (Characiformes: Characidae) from the rio Juruena basin, Central Brazil, with notes on H. loweae Costa & Géry. Neotropical Ichthyology 11 (1): 33-44. DOI 10.1590/S1679-62252013000100004; article p. 40; archive SHA-256 5a0fd2206af2b824dd67882f2fee9ac1cd4f7f1713fa831cbf3e7f35aad87d84.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habitat notes in the 2013 treatment, p. 40, Plazi row 12. The cited basis varies by locality and includes personal communications, an author observation, and an earlier published account; dates are not supplied for these habitat observations. The article separately reports upper rio Xingu and upper rio das Mortes drainage records.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The paragraph concerns reported habitat observations and taxonomic collection localities. Cultivated, escaped, and unsampled populations were not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Evidence is limited to the article's named locality and collection-site observations. Habitat preference, environmental tolerances, interactions, sampling completeness, and unsampled populations remain unassessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or population-genetic evidence is assessed in this source slice.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Article-scoped drainage and locality statements are not a current, exhaustive range assessment or temporal trend.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence is assessed in this source slice.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No conservation assessment, population trend, or threat evaluation is assessed in this source slice.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One 2013 taxonomic treatment supports only bounded comparative morphology and locality-specific ecology statements.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Life history, evolution, distribution, fossil, and conservation facets remain not assessed; partial facets retain explicit source and sample boundaries.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The article-level text reuse license is unknown; the archive-level CC0 declaration applies only to extracted Plazi rows, and the original ZIP EML was not rechecked in this checkout.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
No independent external expert review has been completed.
<!-- /evo:text -->
