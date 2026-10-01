---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Bacopa axillaris (Benth.) Standl.
    authorship: (Benth.) Standl.
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
      - id: 3F4
        scientificName: Lamiales Bromhead
        authorship: Bromhead
        rank: order
        status: accepted
        sourceDatasetId: "1141"
      - id: 6262K
        scientificName: Plantaginaceae Juss.
        authorship: Juss.
        rank: family
        status: accepted
        sourceDatasetId: "1141"
      - id: 7NLS8
        scientificName: Gratioloideae (Benth.) Luerss.
        authorship: (Benth.) Luerss.
        rank: subfamily
        status: accepted
        sourceDatasetId: "1141"
      - id: KVDLD
        scientificName: Gratioleae Benth.
        authorship: Benth.
        rank: tribe
        status: accepted
        sourceDatasetId: "1141"
      - id: 374P
        scientificName: Bacopa Aubl.
        authorship: Aubl.
        rank: genus
        status: accepted
        sourceDatasetId: "1141"
      - id: 5VYFY
        scientificName: Bacopa axillaris (Benth.) Standl.
        authorship: (Benth.) Standl.
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
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication and cultivation history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5VYFY
            stableId: col:5VYFY@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5VYFY. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-fcd27cba-8014-86cc-a4a1-3827ba53a501
          metadataVariant: 0
          sourceKey: flora_panama_5vyfy_general_12898
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/originalSourceText
            originalLanguage: en
            sourceField: general
            sourceRowNumber: 12898
            archiveSourceId: C1EA5933-3FC7-48E6-8BF8-2FD448C7E751
            archiveSourceIds:
              - C1EA5933-3FC7-48E6-8BF8-2FD448C7E751
            referenceRowNumbers:
              - 13886
            sourceCitations:
              citationBindings:
                - referenceId: ref-03d6ed1e-1eb7-83da-ab61-2cc4c2005e2e
                  metadataVariant: 0
                  usage:
                    identifier: C1EA5933-3FC7-48E6-8BF8-2FD448C7E751
                    referenceRowNumber: 13886
                    license: ""
                    licenseAssessment: not-verified
                    rightsHolder: ""
                  originalFields:
                    - identifier
                    - citation
                    - referenceRowNumber
                    - title
                    - creator
                    - date
                    - source
                    - language
                    - license
                    - licenseAssessment
                    - rightsHolder
            sourcePackLicenseAssessment: aggregate-declaration-only
            citedWorkLicenseAssessment: not-verified-where-citation-license-is-blank
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: WFO-MBG-Flora-of-Panama:COL:5VYFY:row:12898
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 12898; field general; reference rows 13886.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: aggregate-declaration-only
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
            - originalSourceText
            - originalLanguage
            - sourceField
            - sourceRowNumber
            - archiveSourceId
            - archiveSourceIds
            - referenceRowNumbers
            - sourceCitations
            - sourcePackLicense
            - sourcePackLicenseUrl
            - sourcePackLicenseAssessment
            - citedWorkLicenseAssessment
            - rightsHolder
            - license
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - archiveSha256
            - sourcePackSha256
        - referenceId: ref-fcd27cba-8014-86cc-a4a1-3827ba53a501
          metadataVariant: 0
          sourceKey: flora_panama_5vyfy_habit_12899
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: herbs
            originalLanguage: en
            sourceField: habit
            sourceRowNumber: 12899
            archiveSourceId: 07E7B3E7-6228-45B7-98FA-1BEDC25A5051
            archiveSourceIds:
              - 07E7B3E7-6228-45B7-98FA-1BEDC25A5051
            referenceRowNumbers:
              - 13887
            sourceCitations:
              citationBindings:
                - referenceId: ref-03d6ed1e-1eb7-83da-ab61-2cc4c2005e2e
                  metadataVariant: 0
                  usage:
                    identifier: 07E7B3E7-6228-45B7-98FA-1BEDC25A5051
                    referenceRowNumber: 13887
                    license: ""
                    licenseAssessment: not-verified
                    rightsHolder: ""
                  originalFields:
                    - identifier
                    - citation
                    - referenceRowNumber
                    - title
                    - creator
                    - date
                    - source
                    - language
                    - license
                    - licenseAssessment
                    - rightsHolder
            sourcePackLicenseAssessment: aggregate-declaration-only
            citedWorkLicenseAssessment: not-verified-where-citation-license-is-blank
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: WFO-MBG-Flora-of-Panama:COL:5VYFY:row:12899
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 12899; field habit; reference rows 13887.
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
            - originalSourceText
            - originalLanguage
            - sourceField
            - sourceRowNumber
            - archiveSourceId
            - archiveSourceIds
            - referenceRowNumbers
            - sourceCitations
            - sourcePackLicense
            - sourcePackLicenseUrl
            - sourcePackLicenseAssessment
            - citedWorkLicenseAssessment
            - rightsHolder
            - license
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - archiveSha256
            - sourcePackSha256
        - referenceId: ref-fcd27cba-8014-86cc-a4a1-3827ba53a501
          metadataVariant: 0
          sourceKey: flora_panama_5vyfy_distribution_12900
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: occurs in swamps and other wet places in lowland central Panama. It is also reported from Colombia and Guatemala.
            originalLanguage: en
            sourceField: distribution
            sourceRowNumber: 12900
            archiveSourceId: 00D1EBDE-2E2D-4B30-93A7-A6A2D23E717B
            archiveSourceIds:
              - 00D1EBDE-2E2D-4B30-93A7-A6A2D23E717B
            referenceRowNumbers:
              - 13888
            sourceCitations:
              citationBindings:
                - referenceId: ref-03d6ed1e-1eb7-83da-ab61-2cc4c2005e2e
                  metadataVariant: 0
                  usage:
                    identifier: 00D1EBDE-2E2D-4B30-93A7-A6A2D23E717B
                    referenceRowNumber: 13888
                    license: ""
                    licenseAssessment: not-verified
                    rightsHolder: ""
                  originalFields:
                    - identifier
                    - citation
                    - referenceRowNumber
                    - title
                    - creator
                    - date
                    - source
                    - language
                    - license
                    - licenseAssessment
                    - rightsHolder
            sourcePackLicenseAssessment: aggregate-declaration-only
            citedWorkLicenseAssessment: not-verified-where-citation-license-is-blank
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo
            stableId: WFO-MBG-Flora-of-Panama:COL:5VYFY:row:12900
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 12900; field distribution; reference rows 13888.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
            licenseAssessment: aggregate-declaration-only
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
            - originalSourceText
            - originalLanguage
            - sourceField
            - sourceRowNumber
            - archiveSourceId
            - archiveSourceIds
            - referenceRowNumbers
            - sourceCitations
            - sourcePackLicense
            - sourcePackLicenseUrl
            - sourcePackLicenseAssessment
            - citedWorkLicenseAssessment
            - rightsHolder
            - license
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - archiveSha256
            - sourcePackSha256
    systematicSearch:
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: COL26.8 ChecklistBank dataset 316115 usage 5VYFY; source pack data/sources/flora-panama-descriptions.jsonl.br; source rows are frozen in data/sources/flora-panama-dossiers-batch-2026-09-27.json.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      date: 2026-09-27
      searcher: Evo source audit
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            translationStatus: untranslated
            originalLanguage: en
            sourceIds:
              - flora_panama_5vyfy_general_12898
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            semanticReview:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/semanticReview
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/1
      lifeHistory:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/1
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            translationStatus: untranslated
            originalLanguage: en
            sourceIds:
              - flora_panama_5vyfy_distribution_12900
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/1
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

# Bacopa axillaris

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage 5VYFY; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The Panama flora records regional descriptions/localities but does not establish whether source plants were wild, naturalized, cultivated, or escaped; no status is inferred.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 5VYFY; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
Bacopa axillaris (Benth.) Standl., Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/originalSourceText -->
Erect, sometimes branched herbs, the stems stout, soft, villous with stout, white, weak, uniseriate hairs mostly ca. 0.5 mm long, also with inconspicuous white, sessile glands; roots stout and fibrous. Leaves opposite, oblong or oblanceolate, apically acute, bluntly serrate in the upper '/2, basally acuminate or cuneate to the slightly clasping insertion; to 5 cm long, 10 mm wide, the mid- vein prominent, the minor veins 3-5 on each side, obscure, strongly ascending, somewhat discolorous, dark green and inconspicuously punctate above, pale beneath and conspicuously glandular punctate with brown sessile discoid glands, usually glabrous on both sides except sometimes on the costa beneath. Inflores- cences geminate fascicles of 3-6 flowers in the leaf axils; pedicels 1-2 mm long, glabrous, sometimes with a few sessile glands, conspicuously broadening upwards; bracts 2, scalelike, narrowly ovate, 0.5 mm long at the pedicel apex. Flowers with the sepals distinct, the outer 3 broadly ovate, ca. 3 mm long, 2 mm wide, apically rounded or emarginate, entire or denticulate, the teeth sometimes with short, stout-based white hairs, otherwise glabrous, mostly with a few scattered white or brown sessile glands, palmately 5-nerved, the inner 2 sepals narrow, acute, prominently costate and reticulate, punctate with white and brown sessile glands, slightly shorter than the outer bracts; corolla white, ca. 3 mm long, slightly exserted from the calyx, tubular, contracted towards the middle, glabrous outside, pubescent at the contracted level inside, 4-lobed, the lobes short; stamens 4, the filaments glabrous, ca. 0.75 mm long, inserted at about the same level in the upper ?/2 of the tube, the anthers yellow, 0.5 mm long, the thecae separate; style 1.5 mm long, terete, the stigma horseshoe shaped, erose, peltate on the style. Capsule narrowly conical, 3 mm long, 4-valved, the valves 3-nerved; placentas flat, obtuse; seeds with a brownish, longitudinal reticulum, faboid rectangular, 0.5 mm long.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 12898 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 12898; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 12898; CC BY 4.0. Citation metadata: Bacopa axillaris Standl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/title -->
Bacopa axillaris (Benth.) Standl., Flora of Panama (habit field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 12899 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 12899; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 12899; CC BY 4.0. Citation metadata: Bacopa axillaris Standl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/title -->
Bacopa axillaris (Benth.) Standl., Flora of Panama (distribution field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 12900 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 12900; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 12900; CC BY 4.0. Citation metadata: Bacopa axillaris Standl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact accepted COL26.8 identity check and bounded review of Flora of Panama general, habit, and distribution source rows; not a systematic seven-facet literature review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified pinned COL26.8 usage and accepted parent chain; matched retained COL ID/WFO ID; preserved every selected description row, original field label, source ID list, reference row, and citation; recorded the archive row and source-pack CC BY declarations separately from blank license metadata on cited publications.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
At least one non-empty general, habit, and distribution description; every selected field row has sourceExcerpt=true, non-empty citations, citationMissingInSource=false, missingSourceIds=[], aligned sourceIds/citation identifiers/reference row numbers, and an archive row declaring CC BY 4.0. That archive license declaration is not extended to underlying cited publications with blank license fields.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
No cross-name matching, no inferred traits, no unverified translation, no current/global range inference, no species-wide life status, and no assumption that a source field alone covers a complete scientific facet.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Erect, sometimes branched herbs, the stems stout, soft, villous with stout, white, weak, uniseriate hairs mostly ca. 0.5 mm long, also with inconspicuous white, sessile glands; roots stout and fibrous. Leaves opposite, oblong or oblanceolate, apically acute, bluntly serrate in the upper '/2, basally acuminate or cuneate to the slightly clasping insertion; to 5 cm long, 10 mm wide, the mid- vein prominent, the minor veins 3-5 on each side, obscure, strongly ascending, somewhat discolorous, dark green and inconspicuously punctate above, pale beneath and conspicuously glandular punctate with brown sessile discoid glands, usually glabrous on both sides except sometimes on the costa beneath. Inflores- cences geminate fascicles of 3-6 flowers in the leaf axils; pedicels 1-2 mm long, glabrous, sometimes with a few sessile glands, conspicuously broadening upwards; bracts 2, scalelike, narrowly ovate, 0.5 mm long at the pedicel apex. Flowers with the sepals distinct, the outer 3 broadly ovate, ca. 3 mm long, 2 mm wide, apically rounded or emarginate, entire or denticulate, the teeth sometimes with short, stout-based white hairs, otherwise glabrous, mostly with a few scattered white or brown sessile glands, palmately 5-nerved, the inner 2 sepals narrow, acute, prominently costate and reticulate, punctate with white and brown sessile glands, slightly shorter than the outer bracts; corolla white, ca. 3 mm long, slightly exserted from the calyx, tubular, contracted towards the middle, glabrous outside, pubescent at the contracted level inside, 4-lobed, the lobes short; stamens 4, the filaments glabrous, ca. 0.75 mm long, inserted at about the same level in the upper ?/2 of the tube, the anthers yellow, 0.5 mm long, the thecae separate; style 1.5 mm long, terete, the stigma horseshoe shaped, erose, peltate on the style. Capsule narrowly conical, 3 mm long, 4-valved, the valves 3-nerved; placentas flat, obtuse; seeds with a brownish, longitudinal reticulum, faboid rectangular, 0.5 mm long.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Flora of Panama general field; imported row 12898; sourceIds C1EA5933-3FC7-48E6-8BF8-2FD448C7E751; reference rows 13886; citations: C1EA5933-3FC7-48E6-8BF8-2FD448C7E751: Bacopa axillaris Standl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 13886).
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Morphological description in the Flora of Panama source version retrieved 2026-09-08; no population sampling frame or observation date is specified in this text. The source is a historical regional flora record, not a current or global account.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
The text does not identify the described plant material as wild, cultivated, domesticated, or escaped; no life status is inferred.
<!-- /evo:text -->

## morphology / claims / semanticReview

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/semanticReview -->
Paragraph manually reviewed for direct morphological content in the Flora of Panama batch audit dated 2026-09-27; this is internal source review, not external expert review.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This facet has not been assessed from the limited Flora of Panama source slice.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/1 -->
The manual paragraph audit mapped 1837 of 1838 eligible general rows to morphology; COL 64BMF row 4323 is retained as a locality-only voucher list with no morphology claim. Broader morphological variation, life stages, populations, and the complete COL concept remain unassessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
This facet has not been assessed from the limited Flora of Panama source slice.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
The source habit field is preserved as the flora’s original plant life-form value; it is not evidence of a life-history or reproductive cycle.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This facet has not been assessed from the limited Flora of Panama source slice.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This facet has not been assessed from the limited Flora of Panama source slice.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
occurs in swamps and other wet places in lowland central Panama. It is also reported from Colombia and Guatemala.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Flora of Panama distribution field; imported row 12900; sourceIds 00D1EBDE-2E2D-4B30-93A7-A6A2D23E717B; reference rows 13888; citations: 00D1EBDE-2E2D-4B30-93A7-A6A2D23E717B: Bacopa axillaris Standl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 13888).
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Historical regional statement within the Flora of Panama source version retrieved 2026-09-08; geographic specificity is limited to the localities literally present in the excerpt. It is not a current range or global inventory.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
The source does not classify the locality record as native, introduced, cultivated, escaped, or wild; those statuses are not inferred.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
This facet has not been assessed from the limited Flora of Panama source slice.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/1 -->
This historical Panama flora statement does not establish the current/global distribution, native versus introduced status, temporal change, or survey completeness.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
This facet has not been assessed from the limited Flora of Panama source slice.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
This facet has not been assessed from the limited Flora of Panama source slice.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
This source slice supports a bounded historical Panama distribution statement only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Paragraph-level review maps eligible general excerpts to partial morphology; the single locality-only voucher list remains unclaimed. Habit is retained as the source plant life-form field and does not support lifeHistory.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Morphology beyond any prior independently sourced claims, lifeHistory, ecology, evolution, fossil, and conservation remain incomplete or not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
No independent external expert review has been completed.
<!-- /evo:text -->
