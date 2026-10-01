---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Citronella costaricensis (Donn.Sm.) R.A.Howard
    authorship: (Donn.Sm.) R.A.Howard
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
      - id: 8XHCH
        scientificName: Cardiopteridales Takht.
        authorship: Takht.
        rank: order
        status: accepted
        sourceDatasetId: "1141"
      - id: M2NNP
        scientificName: Cardiopteridaceae Blume
        authorship: Blume
        rank: family
        status: accepted
        sourceDatasetId: "1141"
      - id: 8WDDM
        scientificName: Citronella D.Don
        authorship: D.Don
        rank: genus
        status: accepted
        sourceDatasetId: "1141"
      - id: VMDR
        scientificName: Citronella costaricensis (Donn.Sm.) R.A.Howard
        authorship: (Donn.Sm.) R.A.Howard
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
            url: https://www.checklistbank.org/dataset/316115/taxon/VMDR
            stableId: col:VMDR@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage VMDR. https://doi.org/10.48580/dgywk.
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
          sourceKey: flora_panama_vmdr_general_6516
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
            sourceRowNumber: 6516
            archiveSourceId: 5A234CE2-BE52-486E-8D78-F7CB3EA83546
            archiveSourceIds:
              - 5A234CE2-BE52-486E-8D78-F7CB3EA83546
            referenceRowNumbers:
              - 7374
            sourceCitations:
              citationBindings:
                - referenceId: ref-a7cd0f5b-52c0-8dd6-a29c-0dc8d1184738
                  metadataVariant: 0
                  usage:
                    identifier: 5A234CE2-BE52-486E-8D78-F7CB3EA83546
                    referenceRowNumber: 7374
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
            stableId: WFO-MBG-Flora-of-Panama:COL:VMDR:row:6516
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 6516; field general; reference rows 7374.
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
          sourceKey: flora_panama_vmdr_habit_6517
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: Trees
            originalLanguage: en
            sourceField: habit
            sourceRowNumber: 6517
            archiveSourceId: FE7EFC3E-332A-41A2-815E-BBADD73183A3
            archiveSourceIds:
              - FE7EFC3E-332A-41A2-815E-BBADD73183A3
            referenceRowNumbers:
              - 7375
            sourceCitations:
              citationBindings:
                - referenceId: ref-a7cd0f5b-52c0-8dd6-a29c-0dc8d1184738
                  metadataVariant: 0
                  usage:
                    identifier: FE7EFC3E-332A-41A2-815E-BBADD73183A3
                    referenceRowNumber: 7375
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
            stableId: WFO-MBG-Flora-of-Panama:COL:VMDR:row:6517
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 6517; field habit; reference rows 7375.
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
          sourceKey: flora_panama_vmdr_general_6518
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/originalSourceText
            originalLanguage: en
            sourceField: general
            sourceRowNumber: 6518
            archiveSourceId: 057145A9-20FF-4302-8CF0-7709E0AB6973
            archiveSourceIds:
              - 057145A9-20FF-4302-8CF0-7709E0AB6973
            referenceRowNumbers:
              - 7376
            sourceCitations:
              citationBindings:
                - referenceId: ref-a7cd0f5b-52c0-8dd6-a29c-0dc8d1184738
                  metadataVariant: 0
                  usage:
                    identifier: 057145A9-20FF-4302-8CF0-7709E0AB6973
                    referenceRowNumber: 7376
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
            stableId: WFO-MBG-Flora-of-Panama:COL:VMDR:row:6518
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 6518; field general; reference rows 7376.
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
          sourceKey: flora_panama_vmdr_distribution_6519
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: This species occurs in Panama and Costa Rica.
            originalLanguage: en
            sourceField: distribution
            sourceRowNumber: 6519
            archiveSourceId: BAAC0DED-3ABB-40FC-96B2-5EE1759E34B0
            archiveSourceIds:
              - BAAC0DED-3ABB-40FC-96B2-5EE1759E34B0
            referenceRowNumbers:
              - 7377
            sourceCitations:
              citationBindings:
                - referenceId: ref-a7cd0f5b-52c0-8dd6-a29c-0dc8d1184738
                  metadataVariant: 0
                  usage:
                    identifier: BAAC0DED-3ABB-40FC-96B2-5EE1759E34B0
                    referenceRowNumber: 7377
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
            stableId: WFO-MBG-Flora-of-Panama:COL:VMDR:row:6519
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 6519; field distribution; reference rows 7377.
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
      queryOrPath: COL26.8 ChecklistBank dataset 316115 usage VMDR; source pack data/sources/flora-panama-descriptions.jsonl.br; source rows are frozen in data/sources/flora-panama-dossiers-batch-2026-09-27.json.
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
              - flora_panama_vmdr_general_6516
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
              - flora_panama_vmdr_general_6518
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
              - flora_panama_vmdr_distribution_6519
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

# Citronella costaricensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage VMDR; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.
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
Accepted species usage VMDR; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
Citronella costaricensis (Donn.Sm.) R.A.Howard, Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/originalSourceText -->
Trees to 20 m tall; branches sparsely strigose to glabrate. Leaves with petioles 8-15 mm long; blades lanceolate-elliptic to oblong-elliptic, 9-16 cm long, 4-6 cm wide, coriaceous, shining above, gray and dull beneath when dry, sparsely strigose, becoming glabrate, the apex acuminate or acute, the base acute or rounded, the margin entire. Inflorescences extra-axillary, commonly opposing the leaf, paniculate, 9-17 cm long with branches secund-scorpioid to 1 cm long. Flowers sessile, polygamous; calyx 2 mm diam., the lobes triangular and obtuse,
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 6516 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 6516; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 6516; CC BY 4.0. Citation metadata: Citronella costaricensis R.A. Howard, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/title -->
Citronella costaricensis (Donn.Sm.) R.A.Howard, Flora of Panama (habit field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 6517 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 6517; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 6517; CC BY 4.0. Citation metadata: Citronella costaricensis R.A. Howard, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/title -->
Citronella costaricensis (Donn.Sm.) R.A.Howard, Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/originalSourceText -->
0.6-0.8 mm long, 1 mm wide; petals oblong-elliptic, 3.5 mm long, 1.5-2 mm wide, glabrous; fertile stamens 2.6-3 mm long, the sterile stamens shorter than the ovary; fertile pistil 2.5 mm long, the ovary globose, hirsute, the style glabrous, the sterile pistil 1-1.2 mm long, hirsute. Drupes elliptic-obloid, 2-3.5 cm long, 1.3-1.8 cm diam., the apex asymmetrically apiculate, the putamen longitudinally ridged.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 6518 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 6518; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 6518; CC BY 4.0. Citation metadata: Citronella costaricensis R.A. Howard, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/title -->
Citronella costaricensis (Donn.Sm.) R.A.Howard, Flora of Panama (distribution field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 6519 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 6519; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 6519; CC BY 4.0. Citation metadata: Citronella costaricensis R.A. Howard, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
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
Trees to 20 m tall; branches sparsely strigose to glabrate. Leaves with petioles 8-15 mm long; blades lanceolate-elliptic to oblong-elliptic, 9-16 cm long, 4-6 cm wide, coriaceous, shining above, gray and dull beneath when dry, sparsely strigose, becoming glabrate, the apex acuminate or acute, the base acute or rounded, the margin entire. Inflorescences extra-axillary, commonly opposing the leaf, paniculate, 9-17 cm long with branches secund-scorpioid to 1 cm long. Flowers sessile, polygamous; calyx 2 mm diam., the lobes triangular and obtuse,
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Flora of Panama general field; imported row 6516; sourceIds 5A234CE2-BE52-486E-8D78-F7CB3EA83546; reference rows 7374; citations: 5A234CE2-BE52-486E-8D78-F7CB3EA83546: Citronella costaricensis R.A. Howard, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 7374).
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
0.6-0.8 mm long, 1 mm wide; petals oblong-elliptic, 3.5 mm long, 1.5-2 mm wide, glabrous; fertile stamens 2.6-3 mm long, the sterile stamens shorter than the ovary; fertile pistil 2.5 mm long, the ovary globose, hirsute, the style glabrous, the sterile pistil 1-1.2 mm long, hirsute. Drupes elliptic-obloid, 2-3.5 cm long, 1.3-1.8 cm diam., the apex asymmetrically apiculate, the putamen longitudinally ridged.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
Flora of Panama general field; imported row 6518; sourceIds 057145A9-20FF-4302-8CF0-7709E0AB6973; reference rows 7376; citations: 057145A9-20FF-4302-8CF0-7709E0AB6973: Citronella costaricensis R.A. Howard, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 7376).
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
This species occurs in Panama and Costa Rica.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Flora of Panama distribution field; imported row 6519; sourceIds BAAC0DED-3ABB-40FC-96B2-5EE1759E34B0; reference rows 7377; citations: BAAC0DED-3ABB-40FC-96B2-5EE1759E34B0: Citronella costaricensis R.A. Howard, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 7377).
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
