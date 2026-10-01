---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Oedera epaleacea Beyers
    rank: species
    sourceDatasetId: "1141"
    checkedAt: 2026-09-23
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication and cultivar history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed; extant records are not used to infer fossils.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 22
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/48VKX
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 48VKX
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-7508b1f1-d459-8c35-a5cc-032ae23afbe8
          metadataVariant: 0
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0000094224-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 48VKX / WFO wfo-0000094224
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-8c4fa5d3-58a5-84ee-a553-50f555fe2d2c
          metadataVariant: 0
          sourceKey: sanbi_6066_0
          usage:
            locator: Oedera epaleacea Beyers account; archive rows 67978 (Morphology), 67247 (Habitat), source identifier 6066.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            licenseAssessment: aggregate-declaration-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - sanbi_6066_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - sanbi_6066_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: not-assessed
      distribution:
        status: not-assessed
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
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

# Oedera epaleacea

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 48VKX, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 48VKX; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Regional account statements retain source scope; native, naturalised, and cultivated occurrences are distinguished only where stated.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1141
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, and source dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List, version 2026-06, exact COL crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact accepted name and authorship identity link only, not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Erect, moderately to densely branched, rounded shrub, up to 0.6 m tall, with a stout trunk up to 50 mm diam. Branches ascending-erect, glabrous, leafy, becoming nude and marked with leaf scars. Leaves alternate, spreading, sessile, entire, midribbed, narrowly oblong, 4-12 x 0.8-1.5 mm, glabrous, densely and distinctly glandular-punctate and foveolate, mucronulate; semi-terete in cross section. Capitula solitary, sessile, terminal, heterogamous, radiate. Involucre campanulate, 4-5 mm wide. Involucral bracts 5- or 6-seriate, 36-17, imbricate, firm and hard basally, scarious apically, midribbed, glabrous; outer ovate, inner gradually longer, narrowly elliptic and apically brown, innermost narrowly obovate or narrowly oblong with a spreading, brown apical limb, up to 10.3 x 1.7 mm, acute. Receptacle slightly convex, shortly squamose, epaleate. Ray florets female, fertile, 13-18; tube cylindrical, 2-3 mm long, with ± stalked glands; lamina spreading, narrowly obovate, 6-10 x 1.3-2.2 mm, yellow with a dorsal, brown stripe, 4-veined, apically minutely 3-lobed; style terete, bifid, 2.5-4.0 mm long; style branches erect-spreading, linear, 0.7-1.5 mm long, glabrous, stylopodium not distinct; cypselas almost terete or angular, narrowly elliptic, 1.8-2.6 x 0.5-0.7 mm, densely pilose; pappus crown-like, of ± connate scales, up to 0.6 mm long. Disc florets 38-42, female sterile; corolla 3.7-5.5 x 0.6-0.9 mm, divided into a lower cylindrical tube with scattered, ± stalked glands on the outside and upper narrowly cyathi-form, glabrous limb; corolla lobes 5, spreading, ovate-triangular, 0.3-0.7 mm long, dorsally gland-dotted; style terete, 2.5-5.3 mm long, shallowly cleft, style branches up to 0.3 mm long, apically rounded and papillate; stylopodium distinct; anthers linear, 1.4-2.2 mm long, with sterile, flat, ovate apical appendage and sterile, flat, subulate, entire tails, 0.2-0.4 mm long; cypselas almost terete, narrowly elliptic to narrowly oblong, 1.5-2.7 x 0.3-0.6 mm, glabrous or sparsely pilose, may be scat-tered with ± stalked glands; pappus crown-like, of ± connate scales, up to 0.6 mm long.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 67978; source 6066.0; publication: Beyers, JBP. 2001. Asteraceae: A new species of Oedera from Western Cape, South Africa. Bothalia 31(1): 41 - 42. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only regional morphology and diagnostic descriptions have been assessed; developmental and population-level variation remains unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
It occurs in arid fynbos where it grows in crevices between rock sheets, in sandstone-derived sandy soils, in full or partial sun.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 67247; source 6066.0; publication: Beyers, JBP. 2001. Asteraceae: A new species of Oedera from Western Cape, South Africa. Bothalia 31(1): 41 - 42. [CC BY]
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Habitat excerpt does not establish seasonality, observation localities, interactions, or ecology across the full range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only source-supported morphology/diagnostics and habitat have been assessed; life history, evolution, full distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Systematic literature review and comparison of the regional account with the complete COL26.8 concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
