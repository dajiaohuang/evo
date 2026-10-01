---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Lycianthes talamancensis E.Dean & J.Poore
    authorship: E.Dean & J.Poore
    rank: species
    sourceDatasetId: "1141"
    checkedAt: 2026-09-27
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: P
        scientificName: Plantae
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CMQ8S
        scientificName: Pteridobiotina Britton & Brown
        authorship: Britton & Brown
        rank: subkingdom
        status: accepted
        sourceDatasetId: null
      - id: TP
        scientificName: Tracheophyta
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: MG
        scientificName: Magnoliopsida
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: 43W
        scientificName: Solanales Juss. ex Bercht. & J.Presl
        authorship: Juss. ex Bercht. & J.Presl
        rank: order
        status: accepted
        sourceDatasetId: "1141"
      - id: 626XM
        scientificName: Solanaceae Juss.
        authorship: Juss.
        rank: family
        status: accepted
        sourceDatasetId: "1141"
      - id: 628NX
        scientificName: Solanoideae Burnett
        authorship: Burnett
        rank: subfamily
        status: accepted
        sourceDatasetId: "1141"
      - id: KV38J
        scientificName: Capsiceae Dumort.
        authorship: Dumort.
        rank: tribe
        status: accepted
        sourceDatasetId: "1141"
      - id: 5HJQ
        scientificName: Lycianthes (Dunal) Hassl.
        authorship: (Dunal) Hassl.
        rank: genus
        status: accepted
        sourceDatasetId: "1141"
      - id: 7X2WR
        scientificName: Lycianthes talamancensis E.Dean & J.Poore
        authorship: E.Dean & J.Poore
        rank: species
        status: accepted
        sourceDatasetId: "1141"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
        - wfo_2026_06
        - plazi_lycianthes_archive
        - dean_poore_kang_2020
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Cultivated, domesticated, and escaped occurrences were not assessed by this source slice.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/7X2WR
            stableId: col:7X2WR@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 7X2WR; exact name, authorship, rank, status, sourceDatasetId, and complete accepted parent chain.
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 7X2WR. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-9baa58da-dbed-8f44-a2b9-5bc3722d744c
          metadataVariant: 0
          sourceKey: wfo_2026_06
          usage:
            stableId: wfo-1000023516
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: identity-only
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
            - licenseAssessment
            - scope
        - referenceId: ref-3de98d45-4883-8176-a5e2-dc62299f6de0
          metadataVariant: 0
          sourceKey: plazi_lycianthes_archive
          usage:
            licenseAppliesTo: Extracted Plazi archive description records only; this does not apply to the cited journal article, PDF, or figures.
            stableId: PlaziArchiveSha256:19af36d18abcf3f356cbb004c07efdd099e7f5fdd5c904a3b78fae53a4f057d8
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: aggregate-declaration-only
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
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - licenseAssessment
            - attribution
            - scope
        - referenceId: ref-42879df9-2216-86ce-a27a-72133a3cbb63
          metadataVariant: 0
          sourceKey: dean_poore_kang_2020
          usage:
            licenseAppliesTo: Bibliographic citation only; no article PDF, article prose, or figures are redistributed.
            stableId: doi:10.11646/phytotaxa.471.2.2
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            licenseAssessment: unknown
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
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
              - dean_poore_kang_2020
              - plazi_lycianthes_archive
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - dean_poore_kang_2020
              - plazi_lycianthes_archive
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
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
              - dean_poore_kang_2020
              - plazi_lycianthes_archive
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - dean_poore_kang_2020
              - plazi_lycianthes_archive
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
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

# Lycianthes talamancensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Matched exact Plazi sourceColUsageId to one accepted COL26.8 species usage, cross-checked exact taxon name/authorship and the pinned WFO 2026-06 identifier; no fuzzy name match was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Accepted COL26.8 identity 7X2WR; source article treatment A31687B7FF9B1005FF1F1B6BDBD0AE07; this routing does not claim full scientific-concept equivalence across all literature.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims are bounded to the field-collection and forest-habitat material reported in the cited treatment; the status and coverage of all populations are not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1141
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
The pinned Plazi projection retains wfo-1000023516; only this identifier and exact accepted-name link are used for identity cross-checking.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact accepted-name identity cross-check only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
TreatmentBank description-extension rows 2-25 across three exact COL taxon usages. The source ZIP is absent from this checkout; its EML was not independently rechecked for this dossier batch.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Plazi TreatmentBank, selected Lycianthes treatment records; archive declaration and import hashes are retained in data/sources/plazi-descriptions-import-ledger.json.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Article-scoped extracted treatment records; not a complete species dossier.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Taxon-specific discussion and collection summaries; article pages vary by COL taxon. Each claim gives its page range and Plazi row locator.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Dean, Ellen, Poore, Jennifer, Kang, Hannah (2020): Three new species of Lycianthes (Solanaceae) from Panama. Phytotaxa 471 (2): 113-126.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Cited taxonomic article; item-level reuse rights remain unknown.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Compared with Lycianthes hortulana, the treatment describes L. talamancensis as having longer pedicels (15-22 mm in flower and 27-35 mm in fruit), an entire corolla with moderately hairy adaxial lobes, and longer stamen filaments (1-2 mm).
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Plazi description-extension row 19; original sourceType=diagnosis; treatment https://treatment.plazi.org/id/A31687B7FF9B1005FF1F1B6BDBD0AE07; Dean, Ellen, Poore, Jennifer, Kang, Hannah (2020): Three new species of Lycianthes (Solanaceae) from Panama. Phytotaxa 471 (2): 113-126. pages 122-124; archive SHA-256 19af36d18abcf3f356cbb004c07efdd099e7f5fdd5c904a3b78fae53a4f057d8.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Comparative diagnosis in the 2020 taxonomic treatment, pages 122-124. The traits are stated relative to L. hortulana and are not estimates of variation across all populations.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
The claim is bounded to the taxonomic material discussed in the diagnosis; the paragraph does not characterize the provenance or life status of every individual.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only a comparative taxonomic diagnosis is represented; within-species variation, ontogeny, broader populations, and additional anatomical systems remain unassessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The treatment reports flowering specimens and nearly mature, still-green fruit specimens collected from January through March.
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Plazi description-extension row 22; original sourceType=biology_ecology; treatment https://treatment.plazi.org/id/A31687B7FF9B1005FF1F1B6BDBD0AE07; Dean, Ellen, Poore, Jennifer, Kang, Hannah (2020): Three new species of Lycianthes (Solanaceae) from Panama. Phytotaxa 471 (2): 113-126. pages 122-124; archive SHA-256 19af36d18abcf3f356cbb004c07efdd099e7f5fdd5c904a3b78fae53a4f057d8.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Collection-month summary for specimens cited in the 2020 treatment, pages 122-124; collection months do not establish continuous or complete annual phenology.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
The statement concerns dated taxonomic specimens; population status and complete seasonal coverage were not assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Voucher collection months do not establish complete flowering or fruiting seasons, reproductive success, pollination, or a full life cycle.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The treatment associates reported localities with cloud and wet forest at 2,200-2,850 m, and names Quercus, Podocarpus, Magnolia, Symplocos, and Chusquea in the understory context.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Plazi description-extension row 21; original sourceType=distribution; treatment https://treatment.plazi.org/id/A31687B7FF9B1005FF1F1B6BDBD0AE07; Dean, Ellen, Poore, Jennifer, Kang, Hannah (2020): Three new species of Lycianthes (Solanaceae) from Panama. Phytotaxa 471 (2): 113-126. pages 122-124; archive SHA-256 19af36d18abcf3f356cbb004c07efdd099e7f5fdd5c904a3b78fae53a4f057d8.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habitat and elevation reported for the treatment's cited localities in Panama, pages 122-124; the named plants are contextual co-occurrences, not asserted as obligate associates.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The treatment describes forest settings and taxonomic collections; it does not assess cultivated or escaped populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The treatment slice provides habitat and elevation context only; environmental tolerances, interactions, and sampling completeness remain unassessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or population-genetic evidence is assessed in this source slice.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The treatment reports L. talamancensis as endemic to Panama, with cited localities in Bocas del Toro and Chiriquí provinces.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Plazi description-extension row 21; original sourceType=distribution; treatment https://treatment.plazi.org/id/A31687B7FF9B1005FF1F1B6BDBD0AE07; Dean, Ellen, Poore, Jennifer, Kang, Hannah (2020): Three new species of Lycianthes (Solanaceae) from Panama. Phytotaxa 471 (2): 113-126. pages 122-124; archive SHA-256 19af36d18abcf3f356cbb004c07efdd099e7f5fdd5c904a3b78fae53a4f057d8.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
As-published distribution statement in the 2020 treatment, pages 122-124; it is not a current exhaustive range survey or an independently validated range map.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
The article's endemicity and locality wording is reported as attributed; the source does not separately classify every occurrence as wild, cultivated, or escaped.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The article-scoped localities and endemicity statement do not establish a current, complete range or temporal trend.
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
One 2020 taxonomic treatment supports only bounded comparative morphology, specimen-month, habitat, and reported-locality statements.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other three facets remain not assessed, and all four partially supported facets retain explicit scope gaps.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The article-level text reuse license is unknown; the archive-level CC0 declaration applies only to extracted Plazi records.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
No independent external expert review has been completed.
<!-- /evo:text -->
