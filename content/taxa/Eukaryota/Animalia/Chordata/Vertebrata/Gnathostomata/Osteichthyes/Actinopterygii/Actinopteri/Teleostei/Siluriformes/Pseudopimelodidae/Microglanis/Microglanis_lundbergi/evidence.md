---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Microglanis lundbergi Jarduli & Shibatta, 2013
    authorship: Jarduli & Shibatta, 2013
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
      - id: 6236K
        scientificName: Siluriformes
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "1010"
      - id: KVMJR
        scientificName: Pseudopimelodidae Fernández-Yépez & Antón, 1966
        authorship: Fernández-Yépez & Antón, 1966
        rank: family
        status: accepted
        sourceDatasetId: "1010"
      - id: KVJQM
        scientificName: Microglanis Eigenmann, 1912
        authorship: Eigenmann, 1912
        rank: genus
        status: accepted
        sourceDatasetId: "1010"
      - id: 6RGPT
        scientificName: Microglanis lundbergi Jarduli & Shibatta, 2013
        authorship: Jarduli & Shibatta, 2013
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
        - plazi_archive_6rgpt
        - jarduli_shibatta_2013
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6RGPT
            stableId: col:6RGPT@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 6RGPT; exact name, authorship, rank, status, sourceDatasetId, and complete accepted parent chain.
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6RGPT. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-cb5043aa-82c7-8447-a814-fb339b53bf76
          metadataVariant: 0
          sourceKey: plazi_archive_6rgpt
          usage:
            licenseAppliesTo: Extracted Plazi archive description records only; not the cited journal article, DOI page, PDF, or figures.
            stableId: PlaziArchiveSha256:75f4e69193f65cfa0e32a728ae690f065ed0c860d58e1760adfbd8ca6d3d107e
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
        - referenceId: ref-f8c5c586-11cb-8372-a5ba-a2ba47fc6921
          metadataVariant: 0
          sourceKey: jarduli_shibatta_2013
          usage:
            licenseAppliesTo: Bibliographic citation only; no article prose, PDF, or figures are redistributed.
            stableId: doi:10.1590/S1679-62252013000300004
            locator: Diagnosis p. 508 (Plazi row 4); description pp. 508-509 (row 5); label-based habitat note p. 510 (row 7).
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
              - jarduli_shibatta_2013
              - plazi_archive_6rgpt
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
              - jarduli_shibatta_2013
              - plazi_archive_6rgpt
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

# Microglanis lundbergi

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
The Plazi projection's direct COL identifier 6RGPT was matched to exactly one accepted COL26.8 species usage and checked against its exact name, authorship, source dataset, and accepted parent chain. The projection has no sourceColUsageId or synonym redirect for this record; no fuzzy match was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Accepted COL26.8 identity 6RGPT; source article treatment 03B8FF3BA628895BFED2FC433E406821; this linkage does not establish full scientific-concept equivalence across all literature.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims concern taxonomic specimens, collection records, or habitat observations described in the cited treatment; broader population status and coverage are not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1010
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Description-extension rows 4, 5, 7 for direct COL26.8 usage 6RGPT; source ZIP is absent and embedded EML was not rechecked.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Plazi TreatmentBank, selected fish treatment rows; archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Article-scoped extracted treatment records; not a complete species dossier.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Jarduli, Lucas Ribeiro, Shibatta, Oscar Akio (2013): Description of a new species of Microglanis (Siluriformes: Pseudopimelodidae) from the Amazon basin, Amazonas State, Brazil. Neotropical Ichthyology 11 (3): 507-512.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Cited taxonomic article; item-level reuse rights remain unknown.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The diagnosis describes Microglanis lundbergi by a deeply notched forked caudal fin, two juxtaposed pale elliptical spots on the supraoccipital region, and an adipose-fin base 13.1-16.6% of SL. The description reports orange-brown coloration with pale supraoccipital spots and other preserved-color pattern details. These are treatment-level diagnostic and descriptive observations, not an assessment of variation across all populations. The morphometric table reports n=9, while the listed type series totals 10 specimens; this discrepancy is retained as unresolved.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Plazi description-extension row 4 (diagnosis), row 5 (description); treatment https://treatment.plazi.org/id/03B8FF3BA628895BFED2FC433E406821; original article p. 508 (Plazi row 4) and pp. 508-509 (row 5); DOI 10.1590/S1679-62252013000300004; source archive 95e56920-147b-4e47-bf6f-858c13683b7f.zip; archive SHA-256 75f4e69193f65cfa0e32a728ae690f065ed0c860d58e1760adfbd8ca6d3d107e. Source ZIP absent from checkout; embedded EML not rechecked. Article item-level reuse rights unknown.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Diagnosis on p. 508, description on pp. 508-509, and morphometric table (n=9) in the 2013 treatment. The examined type series listed in that article totals 10; the source does not resolve the difference from the table sample, so no reconciliation is inferred.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Morphology and preserved coloration of specimens described in the treatment; no population-wide variation or live-color claim is made.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Selected diagnostic and descriptive characters come from one taxonomic treatment and its stated comparative or examined samples; neither dossier assesses variation across all populations or life stages. The Microglanis lundbergi article's morphometric table reports n=9 while its listed type series totals 10 specimens; that difference is unresolved.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No systematic reproductive, developmental, lifespan, or full behavioral life-history search was performed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
According to collection-lot labels, the reported individuals were collected in the main channel of the rio Amazonas, in white water, over a bottom rich in organic matter and pieces of wood. This is a label-based habitat observation from the cited treatment, not a species-wide habitat preference or complete distribution statement.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Plazi description-extension row 7 (biology_ecology); treatment https://treatment.plazi.org/id/03B8FF3BA628895BFED2FC433E406821; original article p. 510 (Plazi row 7); DOI 10.1590/S1679-62252013000300004; source archive 95e56920-147b-4e47-bf6f-858c13683b7f.zip; archive SHA-256 75f4e69193f65cfa0e32a728ae690f065ed0c860d58e1760adfbd8ca6d3d107e. Source ZIP absent from checkout; embedded EML not rechecked. Article item-level reuse rights unknown.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habitat note on p. 510 explicitly attributes the observation to collection-lot labels. It is limited to the reported material and location; other localities, dates, and habitat conditions were not inferred from this note.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild collection-label observations only; no broader ecological, abundance, or conservation conclusion is made.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Habitat and diet claims are limited to the selected treatment notes, collection labels, localities, and sample sizes. Sampling completeness, seasonal ecology, trophic importance, and species-wide habitat preferences remain unassessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or population-genetic evidence is assessed in this source slice.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Taxonomic article localities are retained only as reported collection context and do not establish a current, complete range or trend.
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
Only morphology and ecology are partially supported by one taxonomic treatment; five facets remain not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Claims are limited to the treatment rows, stated comparative samples, examined specimens, collection localities, and label-derived observations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The article-level text reuse license is unknown; the ledger CC0 declaration applies only to extracted Plazi rows.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
The source ZIP is absent from this checkout and its embedded EML was not rechecked; no independent external review has been completed.
<!-- /evo:text -->
