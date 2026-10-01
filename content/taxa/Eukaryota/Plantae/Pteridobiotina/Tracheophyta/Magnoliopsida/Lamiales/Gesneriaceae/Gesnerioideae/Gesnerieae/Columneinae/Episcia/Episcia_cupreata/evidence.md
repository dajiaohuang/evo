---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Episcia cupreata (Hook.) Hanst.
    authorship: (Hook.) Hanst.
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
      - id: 623G4
        scientificName: Gesneriaceae Rich. & Juss.
        authorship: Rich. & Juss.
        rank: family
        status: accepted
        sourceDatasetId: "1141"
      - id: JLJ
        scientificName: Gesnerioideae Burnett
        authorship: Burnett
        rank: subfamily
        status: accepted
        sourceDatasetId: "1141"
      - id: KVCVC
        scientificName: Gesnerieae Dumort.
        authorship: Dumort.
        rank: tribe
        status: accepted
        sourceDatasetId: "1141"
      - id: KV5DL
        scientificName: Columneinae Hanst.
        authorship: Hanst.
        rank: subtribe
        status: accepted
        sourceDatasetId: "1141"
      - id: 4DD6
        scientificName: Episcia Mart.
        authorship: Mart.
        rank: genus
        status: accepted
        sourceDatasetId: "1141"
      - id: 6FVXR
        scientificName: Episcia cupreata (Hook.) Hanst.
        authorship: (Hook.) Hanst.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6FVXR
            stableId: col:6FVXR@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6FVXR. https://doi.org/10.48580/dgywk.
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
          sourceKey: flora_panama_6fvxr_distribution_2527
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: native to Colombia, Venezuela and Brazil, but is widely grown as a house plant in temperate and tropical areas
            originalLanguage: en
            sourceField: distribution
            sourceRowNumber: 2527
            archiveSourceId: C0D5507C-1B0B-4405-B9B3-095352A643B4
            archiveSourceIds:
              - C0D5507C-1B0B-4405-B9B3-095352A643B4
            referenceRowNumbers:
              - 2096
            sourceCitations:
              citationBindings:
                - referenceId: ref-4cbd3ad5-b767-897e-a6bd-5a64710c8dd9
                  metadataVariant: 0
                  usage:
                    identifier: C0D5507C-1B0B-4405-B9B3-095352A643B4
                    referenceRowNumber: 2096
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
            stableId: WFO-MBG-Flora-of-Panama:COL:6FVXR:row:2527
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 2527; field distribution; reference rows 2096.
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
          sourceKey: flora_panama_6fvxr_general_6307
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
            sourceRowNumber: 6307
            archiveSourceId: 2B00B185-16A5-4886-B8BA-EE9C1C62C45A
            archiveSourceIds:
              - 2B00B185-16A5-4886-B8BA-EE9C1C62C45A
            referenceRowNumbers:
              - 7163
            sourceCitations:
              citationBindings:
                - referenceId: ref-4cbd3ad5-b767-897e-a6bd-5a64710c8dd9
                  metadataVariant: 0
                  usage:
                    identifier: 2B00B185-16A5-4886-B8BA-EE9C1C62C45A
                    referenceRowNumber: 7163
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
            stableId: WFO-MBG-Flora-of-Panama:COL:6FVXR:row:6307
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 6307; field general; reference rows 7163.
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
          sourceKey: flora_panama_6fvxr_habit_6308
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: herbs
            originalLanguage: en
            sourceField: habit
            sourceRowNumber: 6308
            archiveSourceId: 0DDD0B17-7BD1-48EB-B458-189AF4F2AB78
            archiveSourceIds:
              - 0DDD0B17-7BD1-48EB-B458-189AF4F2AB78
            referenceRowNumbers:
              - 7164
            sourceCitations:
              citationBindings:
                - referenceId: ref-4cbd3ad5-b767-897e-a6bd-5a64710c8dd9
                  metadataVariant: 0
                  usage:
                    identifier: 0DDD0B17-7BD1-48EB-B458-189AF4F2AB78
                    referenceRowNumber: 7164
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
            stableId: WFO-MBG-Flora-of-Panama:COL:6FVXR:row:6308
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 6308; field habit; reference rows 7164.
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
          sourceKey: flora_panama_6fvxr_general_6309
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
            sourceRowNumber: 6309
            archiveSourceId: CD793049-6C1C-447C-AAB1-3FB53A0CE9C1
            archiveSourceIds:
              - CD793049-6C1C-447C-AAB1-3FB53A0CE9C1
            referenceRowNumbers:
              - 7165
            sourceCitations:
              citationBindings:
                - referenceId: ref-4cbd3ad5-b767-897e-a6bd-5a64710c8dd9
                  metadataVariant: 0
                  usage:
                    identifier: CD793049-6C1C-447C-AAB1-3FB53A0CE9C1
                    referenceRowNumber: 7165
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
            stableId: WFO-MBG-Flora-of-Panama:COL:6FVXR:row:6309
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 6309; field general; reference rows 7165.
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
      queryOrPath: COL26.8 ChecklistBank dataset 316115 usage 6FVXR; source pack data/sources/flora-panama-descriptions.jsonl.br; source rows are frozen in data/sources/flora-panama-dossiers-batch-2026-09-27.json.
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
              - flora_panama_6fvxr_general_6307
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
              - flora_panama_6fvxr_general_6309
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
              - flora_panama_6fvxr_distribution_2527
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

# Episcia cupreata

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage 6FVXR; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.
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
Accepted species usage 6FVXR; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
Episcia cupreata (Hook.) Hanst., Flora of Panama (distribution field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 2527 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 2527; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 2527; CC BY 4.0. Citation metadata: Episcia cupreata Hanst., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/title -->
Episcia cupreata (Hook.) Hanst., Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/originalSourceText -->
Stoloniferous creeping terrestrial herbs 5-20 cm tall; stems slender and terete, ca. 5 mm in diam., hirsute, the young stems reddish, the stolons to 50 cm long, reddish or green, hirsute with few branches. Leaves grouped at the apex of stolon or branch, equal or subequal in a pair, somewhat bullate, broadly elliptic to oblong ovate, 2.6-8.9 cm long, 1.1-5.0 cm wide, membranous, the apex acute, obtuse or acuminate, the base obliquely rounded to acute or subcordate, crenate to serrate, above dark green, reddish green or with pale green or silvery variegation along the impressed main veins, hirsute, trichomes erect or appressed, below lighter green with prominent veins, the petioles 0.7-4.1 cm long, usually reddish, hirsute. Inflorescences of 1-4 flowers; peduncles short, 1-2 mm long, bibracteate; pedicels 1.1-4.5 cm long, reddish, hirsute. Flowers showy, usually red; floral tube short, rounded, hirsute; sepals lanceolate, slightly connate at base, 4 sepals erect, the fifth curved around corolla spur, 5-12 mm long, 1-3 mm wide, sparsely pilose, the apex acute, subentire, the outside green or reddish, the inside green; corolla scarlet, bright red, orange, at least on the upper side, yellow and sometimes spotted on the lower side, or rarely all yellow, inside yellow with red or purple spots, the throat with colorless papillae, limb orange
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 6307 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 6307; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 6307; CC BY 4.0. Citation metadata: Episcia cupreata Hanst., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/title -->
Episcia cupreata (Hook.) Hanst., Flora of Panama (habit field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 6308 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 6308; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 6308; CC BY 4.0. Citation metadata: Episcia cupreata Hanst., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/title -->
Episcia cupreata (Hook.) Hanst., Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/originalSourceText -->
red or deep red, tube ca. 2.0 cm long, 3-4 mm wide at the oblique base, slightly contracted above the spur, above curved and 6-9 mm wide, widening to a prominent swelling just below the throat, the outside villous; spur obtuse, the limb somewhat oblique, 14-25 mm wide, the lobes nearly equal, rounded, entire to erose, the upper lobes somewhat reflexed, the lower lobes spreading; stamens included, the filaments connate at the base, glabrous, contorted after anthesis, the anthers coherent in a square, each orbicular or oblong, staminode ca. 1 mm long, glabrous with a sterile anther; nectary a single glabrous gland, entire or slightly bilobed, rarely 2 lateral glands; ovary ovoid, 2.5-4 mm long, hirsute, the style glabrate, the stigma bilobed. Capsule globose, 4-6 mm in diam., hirsute; seeds ellipsoid, ca. 0.5 mm long or less, dark brown.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 6309 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 6309; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 6309; CC BY 4.0. Citation metadata: Episcia cupreata Hanst., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
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
Stoloniferous creeping terrestrial herbs 5-20 cm tall; stems slender and terete, ca. 5 mm in diam., hirsute, the young stems reddish, the stolons to 50 cm long, reddish or green, hirsute with few branches. Leaves grouped at the apex of stolon or branch, equal or subequal in a pair, somewhat bullate, broadly elliptic to oblong ovate, 2.6-8.9 cm long, 1.1-5.0 cm wide, membranous, the apex acute, obtuse or acuminate, the base obliquely rounded to acute or subcordate, crenate to serrate, above dark green, reddish green or with pale green or silvery variegation along the impressed main veins, hirsute, trichomes erect or appressed, below lighter green with prominent veins, the petioles 0.7-4.1 cm long, usually reddish, hirsute. Inflorescences of 1-4 flowers; peduncles short, 1-2 mm long, bibracteate; pedicels 1.1-4.5 cm long, reddish, hirsute. Flowers showy, usually red; floral tube short, rounded, hirsute; sepals lanceolate, slightly connate at base, 4 sepals erect, the fifth curved around corolla spur, 5-12 mm long, 1-3 mm wide, sparsely pilose, the apex acute, subentire, the outside green or reddish, the inside green; corolla scarlet, bright red, orange, at least on the upper side, yellow and sometimes spotted on the lower side, or rarely all yellow, inside yellow with red or purple spots, the throat with colorless papillae, limb orange
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Flora of Panama general field; imported row 6307; sourceIds 2B00B185-16A5-4886-B8BA-EE9C1C62C45A; reference rows 7163; citations: 2B00B185-16A5-4886-B8BA-EE9C1C62C45A: Episcia cupreata Hanst., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 7163).
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
red or deep red, tube ca. 2.0 cm long, 3-4 mm wide at the oblique base, slightly contracted above the spur, above curved and 6-9 mm wide, widening to a prominent swelling just below the throat, the outside villous; spur obtuse, the limb somewhat oblique, 14-25 mm wide, the lobes nearly equal, rounded, entire to erose, the upper lobes somewhat reflexed, the lower lobes spreading; stamens included, the filaments connate at the base, glabrous, contorted after anthesis, the anthers coherent in a square, each orbicular or oblong, staminode ca. 1 mm long, glabrous with a sterile anther; nectary a single glabrous gland, entire or slightly bilobed, rarely 2 lateral glands; ovary ovoid, 2.5-4 mm long, hirsute, the style glabrate, the stigma bilobed. Capsule globose, 4-6 mm in diam., hirsute; seeds ellipsoid, ca. 0.5 mm long or less, dark brown.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
Flora of Panama general field; imported row 6309; sourceIds CD793049-6C1C-447C-AAB1-3FB53A0CE9C1; reference rows 7165; citations: CD793049-6C1C-447C-AAB1-3FB53A0CE9C1: Episcia cupreata Hanst., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 7165).
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
native to Colombia, Venezuela and Brazil, but is widely grown as a house plant in temperate and tropical areas
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Flora of Panama distribution field; imported row 2527; sourceIds C0D5507C-1B0B-4405-B9B3-095352A643B4; reference rows 2096; citations: C0D5507C-1B0B-4405-B9B3-095352A643B4: Episcia cupreata Hanst., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 2096).
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
