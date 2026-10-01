---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Pachira aquatica Aubl.
    authorship: Aubl.
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
      - id: 3HP
        scientificName: Malvales Juss. ex Bercht. & J.Presl
        authorship: Juss. ex Bercht. & J.Presl
        rank: order
        status: accepted
        sourceDatasetId: "1141"
      - id: CDB
        scientificName: Malvaceae Juss.
        authorship: Juss.
        rank: family
        status: accepted
        sourceDatasetId: "1141"
      - id: J8B
        scientificName: Bombacoideae Burnett
        authorship: Burnett
        rank: subfamily
        status: accepted
        sourceDatasetId: "1141"
      - id: KV3BD
        scientificName: Bombaceae Kunth
        authorship: Kunth
        rank: tribe
        status: accepted
        sourceDatasetId: "1141"
      - id: 6BMT
        scientificName: Pachira Aubl.
        authorship: Aubl.
        rank: genus
        status: accepted
        sourceDatasetId: "1141"
      - id: 4BPCN
        scientificName: Pachira aquatica Aubl.
        authorship: Aubl.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4BPCN
            stableId: col:4BPCN@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4BPCN. https://doi.org/10.48580/dgywk.
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
          sourceKey: flora_panama_4bpcn_general_2463
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
            sourceRowNumber: 2463
            archiveSourceId: null
            archiveSourceIds:
              - 29C7E193-26B3-44F9-8E97-B2EE9EE1848F
              - 3CAE7E87-A59B-4501-AF00-8D576EEBDC13
            referenceRowNumbers:
              - 71
              - 3436
            sourceCitations:
              citationBindings:
                - referenceId: ref-9badc3de-c117-8148-a688-8a128c4a4e52
                  metadataVariant: 0
                  usage:
                    identifier: 29C7E193-26B3-44F9-8E97-B2EE9EE1848F
                    referenceRowNumber: 71
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
                - referenceId: ref-887a918c-75e8-801e-a30d-081f27dfd4d4
                  metadataVariant: 0
                  usage:
                    identifier: 3CAE7E87-A59B-4501-AF00-8D576EEBDC13
                    referenceRowNumber: 3436
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
            stableId: WFO-MBG-Flora-of-Panama:COL:4BPCN:row:2463
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 2463; field general; reference rows 71, 3436.
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
          sourceKey: flora_panama_4bpcn_habit_2464
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: Tree
            originalLanguage: en
            sourceField: habit
            sourceRowNumber: 2464
            archiveSourceId: null
            archiveSourceIds:
              - 29C7E193-26B3-44F9-8E97-B2EE9EE1848F
              - 1EBBB1AC-A713-4E4D-AE28-6C0F65B7B069
            referenceRowNumbers:
              - 71
              - 3437
            sourceCitations:
              citationBindings:
                - referenceId: ref-9badc3de-c117-8148-a688-8a128c4a4e52
                  metadataVariant: 0
                  usage:
                    identifier: 29C7E193-26B3-44F9-8E97-B2EE9EE1848F
                    referenceRowNumber: 71
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
                - referenceId: ref-887a918c-75e8-801e-a30d-081f27dfd4d4
                  metadataVariant: 0
                  usage:
                    identifier: 1EBBB1AC-A713-4E4D-AE28-6C0F65B7B069
                    referenceRowNumber: 3437
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
            stableId: WFO-MBG-Flora-of-Panama:COL:4BPCN:row:2464
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 2464; field habit; reference rows 71, 3437.
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
          sourceKey: flora_panama_4bpcn_distribution_2465
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
            sourceField: distribution
            sourceRowNumber: 2465
            archiveSourceId: null
            archiveSourceIds:
              - 29C7E193-26B3-44F9-8E97-B2EE9EE1848F
              - B16E5A5C-C025-48B0-9C06-1DA9B5D9B6AC
            referenceRowNumbers:
              - 71
              - 547
            sourceCitations:
              citationBindings:
                - referenceId: ref-9badc3de-c117-8148-a688-8a128c4a4e52
                  metadataVariant: 0
                  usage:
                    identifier: 29C7E193-26B3-44F9-8E97-B2EE9EE1848F
                    referenceRowNumber: 71
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
                - referenceId: ref-887a918c-75e8-801e-a30d-081f27dfd4d4
                  metadataVariant: 0
                  usage:
                    identifier: B16E5A5C-C025-48B0-9C06-1DA9B5D9B6AC
                    referenceRowNumber: 547
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
            stableId: WFO-MBG-Flora-of-Panama:COL:4BPCN:row:2465
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 2465; field distribution; reference rows 71, 547.
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
      queryOrPath: COL26.8 ChecklistBank dataset 316115 usage 4BPCN; source pack data/sources/flora-panama-descriptions.jsonl.br; source rows are frozen in data/sources/flora-panama-dossiers-batch-2026-09-27.json.
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
              - flora_panama_4bpcn_general_2463
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
              - flora_panama_4bpcn_distribution_2465
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

# Pachira aquatica

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage 4BPCN; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.
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
Accepted species usage 4BPCN; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
Pachira aquatica Aubl., Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/originalSourceText -->
Tree 5-23 m. high, the trunk attaining 25-60(-90) cm. in diam., sometimes buttressed, the crown spreading, the bark smooth, grayish to more or less brownish. Leaves 5- to 9-foliolate, the petiole terete, often longitudinally furrowed, dilated at both ends, 4-23.5 cm. long, glabrous; leaflets petiolulate, the petiolule thick, 0.3-2.5 cm. long, often furrowed above and glabrous; blade elliptic to oblong, sometimes lanceolate or slightly obovate, acute or rounded and more or less decurrent at the base, caudate-acuminate, caudate-apiculate or rounded-apiculate and generally mucronulate at the apex, 5-28.5 cm. long and 2.5-14.5 cm. wide, chartaceous to coriaceous, the margins sometimes slightly recurved, generally bright and glabrous above, dull, glabrous or sometimes scatteringly reddish-lepidote or finely tufted- pubescent or seldom lepidote and puberulous beneath, the nerves prominent es- pecially beneath. Flowers solitary or sometimes 2- to 3-nate, attaining 17.5-35 cm. long, the pedicel terete, 1-5.5 cm. long and 0.3-1.1 cm. thick, glabrous to shortly yellowish-brown-tufted-puberulous; receptacle 5-glandular, shortly puberulous to tomentellous with yellowish-brown tufted hairs; calyx campanulate, sometimes campanulate-tubiform, truncate or 5-apiculate, sometimes slightly 5-undulate- apiculate, 1.2-2.1 cm. long and 1.3-2 cm. in diam., shortly puberulous to tomen- tellous with yellowish-brown tufted hairs outside, silky-villose inside; petals acute to more or less obtuse, 17-34 cm. long and 0.8-2.1 cm. wide, greenish, yellowish or whitish, puberulous on both sides; stamens 200-260, 16-31 cm. long, whitish below and scarlet above, the staminal column 4.5-12 cm. long and 0.45-0.8 cm. in diam., tufted-puberulous; outer whorl with 5 dichotomous, epipetalous phalanges, each phalanx with numerous filaments; inner whorl with 5 episepalous phalanges, each phalanx with only 2-8 filaments; anthers ca. 3-5.5 mm. long, reddish; ovary pyri- form, 5-sulcate, ca. 0.5-1 cm. long and 0.45-1 cm. broad, shortly whitish-villose; style more or less dilated and 5-sulcate at the base, 19-31 cm. long, white below and reddish above, villous on the third inferior; stigma lobulate, the lobes ca. 2-3 mm. long. Capsule subglobose, ellipsoid to oblong-ellipsoid, shallowly 5-sulcate longitudinally, rounded to obtuse and emarginate at the apex, 12.5-30 cm. long and 6-10(-12) cm. in diam., the valves to 1. cm. thick, yellowish-brown-scabrous-puber- ulous outside, silky-villous inside; seeds generally 4- to 5-angular, 2-3.2 cm. x 2.2- 6 cm. x 2-2.2 cm., the testa brownish.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 2463 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 2463; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 2463; CC BY 4.0. Citation metadata: A. Robyns, Bull. Jard. Bot. Rtat Brux. 33: 234, pl. 8, jig. 9-11. 1963.-Fig. 3. | Pachira aquatica Aubl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/title -->
Pachira aquatica Aubl., Flora of Panama (habit field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 2464 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 2464; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 2464; CC BY 4.0. Citation metadata: A. Robyns, Bull. Jard. Bot. Rtat Brux. 33: 234, pl. 8, jig. 9-11. 1963.-Fig. 3. | Pachira aquatica Aubl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/title -->
Pachira aquatica Aubl., Flora of Panama (distribution field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/originalSourceText -->
From southern Mexico (Veracruz, Oaxaca, Chiapas, Yucatan) through Central America to Ecuador, northern Peru (Loreto) and northern Brazil (Para, Maran- hao); generally riparious, growing along the often (periodically) inundated river banks and lake shores or at the edge of woods, always on moist ground; often cultivated throughout tropical America and in some isles of the Antilles: Cuba, Jamaica, Haiti and Trinidad; also cultivated in Africa and Asia.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 2465 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 2465; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 2465; CC BY 4.0. Citation metadata: A. Robyns, Bull. Jard. Bot. Rtat Brux. 33: 234, pl. 8, jig. 9-11. 1963.-Fig. 3. | Pachira aquatica Aubl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
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
Tree 5-23 m. high, the trunk attaining 25-60(-90) cm. in diam., sometimes buttressed, the crown spreading, the bark smooth, grayish to more or less brownish. Leaves 5- to 9-foliolate, the petiole terete, often longitudinally furrowed, dilated at both ends, 4-23.5 cm. long, glabrous; leaflets petiolulate, the petiolule thick, 0.3-2.5 cm. long, often furrowed above and glabrous; blade elliptic to oblong, sometimes lanceolate or slightly obovate, acute or rounded and more or less decurrent at the base, caudate-acuminate, caudate-apiculate or rounded-apiculate and generally mucronulate at the apex, 5-28.5 cm. long and 2.5-14.5 cm. wide, chartaceous to coriaceous, the margins sometimes slightly recurved, generally bright and glabrous above, dull, glabrous or sometimes scatteringly reddish-lepidote or finely tufted- pubescent or seldom lepidote and puberulous beneath, the nerves prominent es- pecially beneath. Flowers solitary or sometimes 2- to 3-nate, attaining 17.5-35 cm. long, the pedicel terete, 1-5.5 cm. long and 0.3-1.1 cm. thick, glabrous to shortly yellowish-brown-tufted-puberulous; receptacle 5-glandular, shortly puberulous to tomentellous with yellowish-brown tufted hairs; calyx campanulate, sometimes campanulate-tubiform, truncate or 5-apiculate, sometimes slightly 5-undulate- apiculate, 1.2-2.1 cm. long and 1.3-2 cm. in diam., shortly puberulous to tomen- tellous with yellowish-brown tufted hairs outside, silky-villose inside; petals acute to more or less obtuse, 17-34 cm. long and 0.8-2.1 cm. wide, greenish, yellowish or whitish, puberulous on both sides; stamens 200-260, 16-31 cm. long, whitish below and scarlet above, the staminal column 4.5-12 cm. long and 0.45-0.8 cm. in diam., tufted-puberulous; outer whorl with 5 dichotomous, epipetalous phalanges, each phalanx with numerous filaments; inner whorl with 5 episepalous phalanges, each phalanx with only 2-8 filaments; anthers ca. 3-5.5 mm. long, reddish; ovary pyri- form, 5-sulcate, ca. 0.5-1 cm. long and 0.45-1 cm. broad, shortly whitish-villose; style more or less dilated and 5-sulcate at the base, 19-31 cm. long, white below and reddish above, villous on the third inferior; stigma lobulate, the lobes ca. 2-3 mm. long. Capsule subglobose, ellipsoid to oblong-ellipsoid, shallowly 5-sulcate longitudinally, rounded to obtuse and emarginate at the apex, 12.5-30 cm. long and 6-10(-12) cm. in diam., the valves to 1. cm. thick, yellowish-brown-scabrous-puber- ulous outside, silky-villous inside; seeds generally 4- to 5-angular, 2-3.2 cm. x 2.2- 6 cm. x 2-2.2 cm., the testa brownish.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Flora of Panama general field; imported row 2463; sourceIds 29C7E193-26B3-44F9-8E97-B2EE9EE1848F, 3CAE7E87-A59B-4501-AF00-8D576EEBDC13; reference rows 71, 3436; citations: 29C7E193-26B3-44F9-8E97-B2EE9EE1848F: A. Robyns, Bull. Jard. Bot. Rtat Brux. 33: 234, pl. 8, jig. 9-11. 1963.-Fig. 3. (reference row 71); 3CAE7E87-A59B-4501-AF00-8D576EEBDC13: Pachira aquatica Aubl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 3436).
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
From southern Mexico (Veracruz, Oaxaca, Chiapas, Yucatan) through Central America to Ecuador, northern Peru (Loreto) and northern Brazil (Para, Maran- hao); generally riparious, growing along the often (periodically) inundated river banks and lake shores or at the edge of woods, always on moist ground; often cultivated throughout tropical America and in some isles of the Antilles: Cuba, Jamaica, Haiti and Trinidad; also cultivated in Africa and Asia.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Flora of Panama distribution field; imported row 2465; sourceIds 29C7E193-26B3-44F9-8E97-B2EE9EE1848F, B16E5A5C-C025-48B0-9C06-1DA9B5D9B6AC; reference rows 71, 547; citations: 29C7E193-26B3-44F9-8E97-B2EE9EE1848F: A. Robyns, Bull. Jard. Bot. Rtat Brux. 33: 234, pl. 8, jig. 9-11. 1963.-Fig. 3. (reference row 71); B16E5A5C-C025-48B0-9C06-1DA9B5D9B6AC: Pachira aquatica Aubl., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 547).
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
