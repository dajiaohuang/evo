---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Cyclopia bowieana Harv.
    rank: species
    sourceDatasetId: "2304"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col26
        - wfo2026
        - sanbiArchive
        - strelitzia29
    lifeStatusScope:
      wild: Printed account concerns the South African regional flora; claim scopes stay within its stated account.
      domesticated: Not assessed; no cultivated or managed material is inferred.
      fossil: Not assessed; no fossil conclusion is inferred from this extant flora account.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 24
          sourceKey: col26
          usage:
            licenseAppliesTo: Identity record only; no biological text reused
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/32VQH
            stableId: COL26.8:32VQH
            version: COL26.8 released 2026-08-20; dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted taxon usage 32VQH; rank species; source dataset 2304
            attribution: Catalogue of Life COL26.8 and underlying dataset 2304
            licenseAssessment: identity-only
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-43499f65-2865-819f-a936-29a569ccf911
          metadataVariant: 0
          sourceKey: wfo2026
          usage:
            licenseAppliesTo: WFO nomenclatural data
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0000197634-2026-06
            stableId: wfo:wfo-0000197634-2026-06
            version: WFO Plant List 2026-06, issued 2026-06-21; crosswalk sidecar pinned in this repository
            publishedAt: 2026-06-21
            accessedAt: 2026-09-24
            locator: Accepted species record wfo-0000197634 and exact accepted-name/authorship mapping from COL 32VQH
            attribution: World Flora Online Plant List 2026-06
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
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-29356014-f628-8f48-a502-601f067deb1b
          metadataVariant: 0
          sourceKey: sanbiArchive
          usage:
            licenseAppliesTo: SANBI e-Flora archive data and its declared reusable descriptive extracts; not inferred for the underlying book
            stableId: SANBI e-Flora 1.36 source identifier 14286.0; description row 5040; WFO wfo-0000197634
            accessedAt: 2026-09-24
            locator: Description row 5040, type Morphology, source identifier 14286.0; row 28486, type Habitat, same source identifier
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            licenseAssessment: aggregate-declaration-only
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
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-65408e03-e3b1-81f8-a6d1-624b3b4eb985
          metadataVariant: 0
          sourceKey: strelitzia29
          usage:
            licenseAppliesTo: The Strelitzia 29 book item and its PDF as stated on the item-specific SANBI Opus record
            stableId: SANBI Opus handle 20.500.12143/5609; PDF Manning_et_al_2012_Strelitzia_29.pdf
            accessedAt: 2026-09-24
            locator: Printed p. 549, individual Cyclopia bowieana account; morphology, flowering period, habitat and regional range lines
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
            licenseAssessment: item-level-verified
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
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
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
              - strelitzia29
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
              - strelitzia29
            locator: Printed p. 549, flowering months in the individual Cyclopia bowieana account
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
              - strelitzia29
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
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - strelitzia29
            locator: Printed p. 549, distribution line in the individual Cyclopia bowieana account
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      evolution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
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
---

# Cyclopia bowieana

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
COL26.8 ID 32VQH is accepted species Cyclopia bowieana Harv. (source dataset 2304). The pinned WFO 2026-06 crosswalk maps this exact accepted COL name and authorship to exactly one accepted WFO species, wfo-0000197634. The SANBI e-Flora source row carries that WFO identifier; its individual Strelitzia 29 account spells the same binomial and authorship.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 nominal accepted species concept. SANBI evidence is the individual account printed under Cyclopia bowieana on p. 549 of Strelitzia 29 (2012), scoped to that regional flora account; no equivalence to all populations or later concepts is asserted.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8, ChecklistBank dataset 316115; underlying source dataset 2304
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, COL ID and source dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List 2026-06, pinned exact COL-to-WFO crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact accepted-name and authorship species crosswalk; nomenclatural identity only.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
South African National Biodiversity Institute (SANBI), e-Flora of South Africa v1.36; retain the cited publication citation
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Used to confirm the exact imported WFO identity and field/row locators. The archived [CC BY] citation was not treated as the underlying publication's license.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Schutte, A.L. 2012. Fabaceae: Cyclopia Vent. In Manning & Goldblatt (eds), Strelitzia 29, p. 549. SANBI. Item license CC BY-SA 4.0.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Direct species account in a SANBI-published regional flora; claims below are paraphrased and retain this account's regional scope.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The account describes an erect, robust resprouting or reseeding shrub reaching 1.8 m. Its three-foliolate leaves have linear-oblanceolate leaflets that may be terete or somewhat flattened, usually strongly revolute margins and soft hairs; yellow flowers and bracts clasping the calyx base are noted.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Printed p. 549, individual Cyclopia bowieana account; SANBI e-Flora v1.36 Morphology row 5040 (source identifier 14286.0)
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional flora account; adult plant form as stated in the 2012 account; no sex-specific or population sample is given.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Extant regional flora account; cultivation status not specified.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Developmental stages, sex-specific traits, variation, measured samples and diagnostic limits have not been reviewed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The species account gives a flowering period of October to December.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Phenology stated in the 2012 South African regional account; observation locations and annual sampling are not specified.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild-status observations are not separately described.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Life-cycle stages, reproduction mode, pollination, seed development and geographic or seasonal variation have not been assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The account records mountain fynbos on upper slopes at 1,220–1,830 m as habitat.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Printed p. 549, habitat line in the individual Cyclopia bowieana account; SANBI e-Flora v1.36 Habitat row 28486 (source identifier 14286.0)
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habitat and elevation as reported by the 2012 South African regional flora; not a complete environmental envelope.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional habitat account; management status not specified.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Resources and species interactions, habitat variation, and sampling coverage have not been reviewed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The printed account lists the Langeberg and Outeniqua mountains as the regional range summary.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
The printed regional range summary, abbreviated LB and SE in the source; not a global distribution or a dated locality dataset.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Native, introduced, cultivated and escaped status are not distinguished in this short range summary.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Locality records, coordinate precision, range date, native or introduced status, and unsampled areas have not been assessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-level phylogenetic or comparative study was assessed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil search was conducted.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No qualifying conservation assessment was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only four regional account topics have preliminary evidence; required scientific coverage checks across all seven facets are incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Claims have not received verified translations or independent expert review.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No systematic evidence search across literature and databases has been completed.
<!-- /evo:text -->
