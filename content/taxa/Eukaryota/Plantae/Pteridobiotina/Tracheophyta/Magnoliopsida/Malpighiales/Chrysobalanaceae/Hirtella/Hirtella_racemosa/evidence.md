---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Hirtella racemosa Lam.
    authorship: Lam.
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
      - id: MLP
        scientificName: Malpighiales Juss. ex Bercht. & J.Presl
        authorship: Juss. ex Bercht. & J.Presl
        rank: order
        status: accepted
        sourceDatasetId: "1141"
      - id: 87L
        scientificName: Chrysobalanaceae R.Br.
        authorship: R.Br.
        rank: family
        status: accepted
        sourceDatasetId: "1141"
      - id: 7P64Q
        scientificName: Hirtella L.
        authorship: L.
        rank: genus
        status: accepted
        sourceDatasetId: "1141"
      - id: 6LWCV
        scientificName: Hirtella racemosa Lam.
        authorship: Lam.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6LWCV
            stableId: col:6LWCV@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6LWCV. https://doi.org/10.48580/dgywk.
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
          sourceKey: flora_panama_6lwcv_distribution_3192
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
            sourceField: distribution
            sourceRowNumber: 3192
            archiveSourceId: null
            archiveSourceIds:
              - CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
              - 2F51269F-51C7-488E-A45A-16D9414665D5
            referenceRowNumbers:
              - 101
              - 1901
            sourceCitations:
              citationBindings:
                - referenceId: ref-bbd9b1f0-e580-8dcf-af19-498a8c2615b1
                  metadataVariant: 0
                  usage:
                    identifier: CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
                    referenceRowNumber: 101
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
                - referenceId: ref-a1a722b1-7dd9-8479-af11-b727da5e4842
                  metadataVariant: 0
                  usage:
                    identifier: 2F51269F-51C7-488E-A45A-16D9414665D5
                    referenceRowNumber: 1901
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
            stableId: WFO-MBG-Flora-of-Panama:COL:6LWCV:row:3192
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 3192; field distribution; reference rows 101, 1901.
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
          sourceKey: flora_panama_6lwcv_general_3200
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/originalSourceText
            originalLanguage: en
            sourceField: general
            sourceRowNumber: 3200
            archiveSourceId: null
            archiveSourceIds:
              - CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
              - FC39DE7D-9EC7-4D75-B52C-8797FA295B80
            referenceRowNumbers:
              - 101
              - 1892
            sourceCitations:
              citationBindings:
                - referenceId: ref-bbd9b1f0-e580-8dcf-af19-498a8c2615b1
                  metadataVariant: 0
                  usage:
                    identifier: CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
                    referenceRowNumber: 101
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
                - referenceId: ref-a1a722b1-7dd9-8479-af11-b727da5e4842
                  metadataVariant: 0
                  usage:
                    identifier: FC39DE7D-9EC7-4D75-B52C-8797FA295B80
                    referenceRowNumber: 1892
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
            stableId: WFO-MBG-Flora-of-Panama:COL:6LWCV:row:3200
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 3200; field general; reference rows 101, 1892.
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
          sourceKey: flora_panama_6lwcv_habit_3201
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: Shrub tree
            originalLanguage: en
            sourceField: habit
            sourceRowNumber: 3201
            archiveSourceId: null
            archiveSourceIds:
              - CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
              - F3110582-C14C-4380-9733-AE8DC1217CD4
            referenceRowNumbers:
              - 101
              - 2009
            sourceCitations:
              citationBindings:
                - referenceId: ref-bbd9b1f0-e580-8dcf-af19-498a8c2615b1
                  metadataVariant: 0
                  usage:
                    identifier: CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
                    referenceRowNumber: 101
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
                - referenceId: ref-a1a722b1-7dd9-8479-af11-b727da5e4842
                  metadataVariant: 0
                  usage:
                    identifier: F3110582-C14C-4380-9733-AE8DC1217CD4
                    referenceRowNumber: 2009
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
            stableId: WFO-MBG-Flora-of-Panama:COL:6LWCV:row:3201
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 3201; field habit; reference rows 101, 2009.
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
        - referenceId: ref-fcd27cba-8014-86cc-a4a1-3827ba53a501
          metadataVariant: 0
          sourceKey: flora_panama_6lwcv_general_3204
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/originalSourceText
            originalLanguage: en
            sourceField: general
            sourceRowNumber: 3204
            archiveSourceId: null
            archiveSourceIds:
              - CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
              - 68E38A7B-49E1-4B8C-BF52-55C29F000C65
            referenceRowNumbers:
              - 101
              - 1896
            sourceCitations:
              citationBindings:
                - referenceId: ref-bbd9b1f0-e580-8dcf-af19-498a8c2615b1
                  metadataVariant: 0
                  usage:
                    identifier: CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E
                    referenceRowNumber: 101
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
                - referenceId: ref-a1a722b1-7dd9-8479-af11-b727da5e4842
                  metadataVariant: 0
                  usage:
                    identifier: 68E38A7B-49E1-4B8C-BF52-55C29F000C65
                    referenceRowNumber: 1896
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
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo
            stableId: WFO-MBG-Flora-of-Panama:COL:6LWCV:row:3204
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 3204; field general; reference rows 101, 1896.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution
            licenseAssessment: aggregate-declaration-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
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
      queryOrPath: COL26.8 ChecklistBank dataset 316115 usage 6LWCV; source pack data/sources/flora-panama-descriptions.jsonl.br; source rows are frozen in data/sources/flora-panama-dossiers-batch-2026-09-27.json.
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
              - flora_panama_6lwcv_general_3200
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
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/text
            translationStatus: untranslated
            originalLanguage: en
            sourceIds:
              - flora_panama_6lwcv_general_3204
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus
            semanticReview:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/semanticReview
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
              - flora_panama_6lwcv_distribution_3192
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

# Hirtella racemosa

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage 6LWCV; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.
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
Accepted species usage 6LWCV; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
Hirtella racemosa Lam., Flora of Panama (distribution field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/originalSourceText -->
Guerrero and British Honduras to Panama, northern South America, and south in the Amazon Basin to central Brazil, eastern Peru and eastern Bolivia; lowlands, in forests and thickets.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 3192 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 3192; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 3192; CC BY 4.0. Citation metadata: DC. Prodr. 2:529. 1825; Seem. in Bot. Voy. Herald, 119. 1852-53; Standl. & Steyerm. in Field- iana, Bot. 24:450-452. 1946. | Hirtella racemosa Lam., Flora of Panama (WFO),Tropicos.org, 2012 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/title -->
Hirtella racemosa Lam., Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/originalSourceText -->
Shrub or small tree, 2-3 (-6) m. tall, with slender pubescent branchlets 1-1.5 mm. in diameter below the inflorescence; hairs of two types, those of the young foliage and branchlets yellowish, appressed or erect, straight and slender, pointed, multicellular, 0.5-1.5 mm. long, these also abundant in the inflorescence but there mixed with tiny erect white hairs mostly 0.2-0.3 mm. long. Leaves elliptic to oblong, lanceolate, or ovate, glabrate, only a few long yellow hairs persistent on the veins (at least of the lower surface), a few of the hairs with papillose bases; blades subcoriaceous,'lustrous, 1.5-4 cm. wide, 3-8 cm. long, usually 2-3 times as long as wide, narrowed from the middle or above to a broad blunt or pointed acumen 1 cm. long or less, narrowed and rounded at base (or obtusely narrowed, with the extreme base rounded abruptly into the petiole); petiole short, stout, about 0.7
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 3200 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 3200; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 3200; CC BY 4.0. Citation metadata: DC. Prodr. 2:529. 1825; Seem. in Bot. Voy. Herald, 119. 1852-53; Standl. & Steyerm. in Field- iana, Bot. 24:450-452. 1946. | Hirtella racemosa Lam., Flora of Panama (WFO),Tropicos.org, 2012 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/title -->
Hirtella racemosa Lam., Flora of Panama (habit field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 3201 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 3201; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 3201; CC BY 4.0. Citation metadata: DC. Prodr. 2:529. 1825; Seem. in Bot. Voy. Herald, 119. 1852-53; Standl. & Steyerm. in Field- iana, Bot. 24:450-452. 1946. | Hirtella racemosa Lam., Flora of Panama (WFO),Tropicos.org, 2012 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/title -->
Hirtella racemosa Lam., Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/originalSourceText -->
mm. in diameter, 2 mm. long; lateral veins 6-8 pairs, arcuate, slightly raised on both surfaces but not forming conspicuous ribs on either, often hardly visible on the upper; glands occurring on the lower surface of the blade near base, mostly nearly circular, about 0.2 mm. across, with raised rim and depressed center; stipules subpersistent, filiform-subulate, appressed-hairy, 2.5-5 mm. long, usually black in dried material, appressed to the branchlets. Flowers in axillary and terminal racemes 12-15 cm. long (or up to 20-25 cm. including the basal leafy part of the growing branchlet terminated -by the raceme); "racemes" 30- to.40-flowered, flowering from base to apex but apparently always determinate, the terminal (bractless) flower abortive; lateral flowers on filiform "pedicels" 5-8 (-12) mm. long, spreading at right angles or somewhat ascending, each with two tiny bracte- oles near base or about one-third the distance from base to apex, the bracteoles often with sessile or stalked glands on the margins, and borne at the summit of a thickened peduncular portion of the flower-stalk (only the part beyond them being the pedicel proper); bracts subtending the flower-stalks lanceolate, usually re- curved, 1-2 mm. long, with basal marginal glands like those of the leaves (and sometimes a similar gland at apex); petals pink, purple or "rosy mauve", glabrous, broadly elliptic, rounded at both ends, 2-3 mm. wide, 3-5 mm. long; stamens 5-7, much exserted, purple, glabrous, the filaments 1.2-1.6 cm. long, fleshy at base and tapering to the very slender tips, arising separately from the fleshy hypanthium-rim which projects 1 mm. or less above the base of the calyx, absent from the segment of the rim opposite the insertion of the ovary or there represented by vestigial staminodia only; anthers about 0.6 mm. long; hypanthium in anthesis elongate- tubular, with hollow cylindric or oblong one-sided base up to about 1 mm. thick and 2 mm. long, and funnelform throat about 1 mm. long, the interior hairy about the summit of the throat, glabrous below; calyx-lobes oblong or elliptic, usually reflexed at anthesis, entire, rounded or subacute at apex, about 1-1.5 mm. wide, 2.5 mm. long, the outer surface with mixed short white and long yellow hairs, the inner surface glabrous proximally, distally white-tomentulose; ovary hirsute, sessile, attached to one side of the funnelform portion of the hypanthium above the bottom; style as in H. americana, but up to about 1.5 cm. long, arising from the flower toward the side where functional stamens are lacking (i. e. the side toward which the inflated base of the hypanthium is expanded). Fruit oblong- obovoid, sparsely hairy, dark red or purple, up to about 1.5 cm. long and 0.6 cm. in diameter, rounded at apex, the base substipitate.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 3204 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 3204; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 3204; CC BY 4.0. Citation metadata: DC. Prodr. 2:529. 1825; Seem. in Bot. Voy. Herald, 119. 1852-53; Standl. & Steyerm. in Field- iana, Bot. 24:450-452. 1946. | Hirtella racemosa Lam., Flora of Panama (WFO),Tropicos.org, 2012 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
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
Shrub or small tree, 2-3 (-6) m. tall, with slender pubescent branchlets 1-1.5 mm. in diameter below the inflorescence; hairs of two types, those of the young foliage and branchlets yellowish, appressed or erect, straight and slender, pointed, multicellular, 0.5-1.5 mm. long, these also abundant in the inflorescence but there mixed with tiny erect white hairs mostly 0.2-0.3 mm. long. Leaves elliptic to oblong, lanceolate, or ovate, glabrate, only a few long yellow hairs persistent on the veins (at least of the lower surface), a few of the hairs with papillose bases; blades subcoriaceous,'lustrous, 1.5-4 cm. wide, 3-8 cm. long, usually 2-3 times as long as wide, narrowed from the middle or above to a broad blunt or pointed acumen 1 cm. long or less, narrowed and rounded at base (or obtusely narrowed, with the extreme base rounded abruptly into the petiole); petiole short, stout, about 0.7
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Flora of Panama general field; imported row 3200; sourceIds CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E, FC39DE7D-9EC7-4D75-B52C-8797FA295B80; reference rows 101, 1892; citations: CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E: DC. Prodr. 2:529. 1825; Seem. in Bot. Voy. Herald, 119. 1852-53; Standl. & Steyerm. in Field- iana, Bot. 24:450-452. 1946. (reference row 101); FC39DE7D-9EC7-4D75-B52C-8797FA295B80: Hirtella racemosa Lam., Flora of Panama (WFO),Tropicos.org, 2012 Accessed February 2018. (reference row 1892).
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

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
mm. in diameter, 2 mm. long; lateral veins 6-8 pairs, arcuate, slightly raised on both surfaces but not forming conspicuous ribs on either, often hardly visible on the upper; glands occurring on the lower surface of the blade near base, mostly nearly circular, about 0.2 mm. across, with raised rim and depressed center; stipules subpersistent, filiform-subulate, appressed-hairy, 2.5-5 mm. long, usually black in dried material, appressed to the branchlets. Flowers in axillary and terminal racemes 12-15 cm. long (or up to 20-25 cm. including the basal leafy part of the growing branchlet terminated -by the raceme); "racemes" 30- to.40-flowered, flowering from base to apex but apparently always determinate, the terminal (bractless) flower abortive; lateral flowers on filiform "pedicels" 5-8 (-12) mm. long, spreading at right angles or somewhat ascending, each with two tiny bracte- oles near base or about one-third the distance from base to apex, the bracteoles often with sessile or stalked glands on the margins, and borne at the summit of a thickened peduncular portion of the flower-stalk (only the part beyond them being the pedicel proper); bracts subtending the flower-stalks lanceolate, usually re- curved, 1-2 mm. long, with basal marginal glands like those of the leaves (and sometimes a similar gland at apex); petals pink, purple or "rosy mauve", glabrous, broadly elliptic, rounded at both ends, 2-3 mm. wide, 3-5 mm. long; stamens 5-7, much exserted, purple, glabrous, the filaments 1.2-1.6 cm. long, fleshy at base and tapering to the very slender tips, arising separately from the fleshy hypanthium-rim which projects 1 mm. or less above the base of the calyx, absent from the segment of the rim opposite the insertion of the ovary or there represented by vestigial staminodia only; anthers about 0.6 mm. long; hypanthium in anthesis elongate- tubular, with hollow cylindric or oblong one-sided base up to about 1 mm. thick and 2 mm. long, and funnelform throat about 1 mm. long, the interior hairy about the summit of the throat, glabrous below; calyx-lobes oblong or elliptic, usually reflexed at anthesis, entire, rounded or subacute at apex, about 1-1.5 mm. wide, 2.5 mm. long, the outer surface with mixed short white and long yellow hairs, the inner surface glabrous proximally, distally white-tomentulose; ovary hirsute, sessile, attached to one side of the funnelform portion of the hypanthium above the bottom; style as in H. americana, but up to about 1.5 cm. long, arising from the flower toward the side where functional stamens are lacking (i. e. the side toward which the inflated base of the hypanthium is expanded). Fruit oblong- obovoid, sparsely hairy, dark red or purple, up to about 1.5 cm. long and 0.6 cm. in diameter, rounded at apex, the base substipitate.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
Flora of Panama general field; imported row 3204; sourceIds CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E, 68E38A7B-49E1-4B8C-BF52-55C29F000C65; reference rows 101, 1896; citations: CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E: DC. Prodr. 2:529. 1825; Seem. in Bot. Voy. Herald, 119. 1852-53; Standl. & Steyerm. in Field- iana, Bot. 24:450-452. 1946. (reference row 101); 68E38A7B-49E1-4B8C-BF52-55C29F000C65: Hirtella racemosa Lam., Flora of Panama (WFO),Tropicos.org, 2012 Accessed February 2018. (reference row 1896).
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Morphological description in the Flora of Panama source version retrieved 2026-09-08; no population sampling frame or observation date is specified in this text. The source is a historical regional flora record, not a current or global account.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
The text does not identify the described plant material as wild, cultivated, domesticated, or escaped; no life status is inferred.
<!-- /evo:text -->

## morphology / claims / semanticReview

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/semanticReview -->
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
Guerrero and British Honduras to Panama, northern South America, and south in the Amazon Basin to central Brazil, eastern Peru and eastern Bolivia; lowlands, in forests and thickets.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Flora of Panama distribution field; imported row 3192; sourceIds CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E, 2F51269F-51C7-488E-A45A-16D9414665D5; reference rows 101, 1901; citations: CC6342B2-F546-4B5C-8C4F-6DBF564E0E1E: DC. Prodr. 2:529. 1825; Seem. in Bot. Voy. Herald, 119. 1852-53; Standl. & Steyerm. in Field- iana, Bot. 24:450-452. 1946. (reference row 101); 2F51269F-51C7-488E-A45A-16D9414665D5: Hirtella racemosa Lam., Flora of Panama (WFO),Tropicos.org, 2012 Accessed February 2018. (reference row 1901).
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
