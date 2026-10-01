---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Croton fragrans Kunth
    authorship: Kunth
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
      - id: 9Y7
        scientificName: Euphorbiaceae A.Juss.
        authorship: A.Juss.
        rank: family
        status: accepted
        sourceDatasetId: "1141"
      - id: V5J47
        scientificName: Crotonoideae Beilschm.
        authorship: Beilschm.
        rank: subfamily
        status: accepted
        sourceDatasetId: "1141"
      - id: V5QK5
        scientificName: Crotoneae Dumort.
        authorship: Dumort.
        rank: tribe
        status: accepted
        sourceDatasetId: "1141"
      - id: 8VWKB
        scientificName: Croton L.
        authorship: L.
        rank: genus
        status: accepted
        sourceDatasetId: "1141"
      - id: ZQ49
        scientificName: Croton fragrans Kunth
        authorship: Kunth
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
            url: https://www.checklistbank.org/dataset/316115/taxon/ZQ49
            stableId: col:ZQ49@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage ZQ49. https://doi.org/10.48580/dgywk.
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
          sourceKey: flora_panama_zq49_distribution_4503
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: Lowland forests, eastern Panama to northern Colombia and Venezuela.
            originalLanguage: en
            sourceField: distribution
            sourceRowNumber: 4503
            archiveSourceId: null
            archiveSourceIds:
              - A041A1E1-C936-4C02-A1FF-A592F68D17D7
              - 550BF9E7-C1AE-4A03-A147-48A33086D546
            referenceRowNumbers:
              - 135
              - 5331
            sourceCitations:
              citationBindings:
                - referenceId: ref-9567ffa6-cba3-8fb9-aba0-3afe1ccad1a9
                  metadataVariant: 0
                  usage:
                    identifier: A041A1E1-C936-4C02-A1FF-A592F68D17D7
                    referenceRowNumber: 135
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
                - referenceId: ref-9d3643b8-6c3c-8fa5-af6a-3d8203b0c39f
                  metadataVariant: 0
                  usage:
                    identifier: 550BF9E7-C1AE-4A03-A147-48A33086D546
                    referenceRowNumber: 5331
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
            stableId: WFO-MBG-Flora-of-Panama:COL:ZQ49:row:4503
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 4503; field distribution; reference rows 135, 5331.
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
          sourceKey: flora_panama_zq49_general_4518
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
            sourceRowNumber: 4518
            archiveSourceId: null
            archiveSourceIds:
              - A041A1E1-C936-4C02-A1FF-A592F68D17D7
              - 6434F54A-4F6E-410F-A31C-D05B6764458E
            referenceRowNumbers:
              - 135
              - 5347
            sourceCitations:
              citationBindings:
                - referenceId: ref-9567ffa6-cba3-8fb9-aba0-3afe1ccad1a9
                  metadataVariant: 0
                  usage:
                    identifier: A041A1E1-C936-4C02-A1FF-A592F68D17D7
                    referenceRowNumber: 135
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
                - referenceId: ref-9d3643b8-6c3c-8fa5-af6a-3d8203b0c39f
                  metadataVariant: 0
                  usage:
                    identifier: 6434F54A-4F6E-410F-A31C-D05B6764458E
                    referenceRowNumber: 5347
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
            stableId: WFO-MBG-Flora-of-Panama:COL:ZQ49:row:4518
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 4518; field general; reference rows 135, 5347.
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
          sourceKey: flora_panama_zq49_habit_4519
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: Shrub
            originalLanguage: en
            sourceField: habit
            sourceRowNumber: 4519
            archiveSourceId: null
            archiveSourceIds:
              - A041A1E1-C936-4C02-A1FF-A592F68D17D7
              - F25E4899-6F19-49E4-ACAA-992B6DEBA664
            referenceRowNumbers:
              - 135
              - 5348
            sourceCitations:
              citationBindings:
                - referenceId: ref-9567ffa6-cba3-8fb9-aba0-3afe1ccad1a9
                  metadataVariant: 0
                  usage:
                    identifier: A041A1E1-C936-4C02-A1FF-A592F68D17D7
                    referenceRowNumber: 135
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
                - referenceId: ref-9d3643b8-6c3c-8fa5-af6a-3d8203b0c39f
                  metadataVariant: 0
                  usage:
                    identifier: F25E4899-6F19-49E4-ACAA-992B6DEBA664
                    referenceRowNumber: 5348
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
            stableId: WFO-MBG-Flora-of-Panama:COL:ZQ49:row:4519
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 4519; field habit; reference rows 135, 5348.
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
      queryOrPath: COL26.8 ChecklistBank dataset 316115 usage ZQ49; source pack data/sources/flora-panama-descriptions.jsonl.br; source rows are frozen in data/sources/flora-panama-dossiers-batch-2026-09-27.json.
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
              - flora_panama_zq49_general_4518
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
              - flora_panama_zq49_distribution_4503
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

# Croton fragrans

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage ZQ49; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.
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
Accepted species usage ZQ49; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
Croton fragrans Kunth, Flora of Panama (distribution field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 4503 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 4503; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 4503; CC BY 4.0. Citation metadata: Muell.-Arg. in DC., Prodr. 15(2): 556, 1866. | Croton fragrans Kunth, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/title -->
Croton fragrans Kunth, Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/originalSourceText -->
Shrub, sometimes arborescent, 2-10 m high; monoecious; twigs and foliage with indumentum of stellate and dendritic hairs. Leaves membranous or chartace- ous; petioles densely stellate-tomentose, ca 1-3.5 cm long; glands at apex of petiole 2-6, patelliform, stalked, ca 0.5-0.8 mm diam (ca as broad as length of stalk); stipules elliptic or obovate, tomentose, the margins laciniate-toothed, ca 4-9 mm long; blades ovate to elliptic, ca 8-20 cm long, 4-12 cm broad, softly stellate or stel- late-hispidulous (1 of the ascending radii often larger than the others) above, paler and more densely stellate (the ca 6-10-radiate hairs mostly 0.5-0.8 mm across) and minutely glandular-punctate beneath, mostly 5- (7-) nerved at base, with ca 5-8 additional veins on either side, the base obtuse or rounded to subcordate, the margins subentire or distinctly crenulate-denticulate, the apex rather abruptly short-acuminate. Inflorescences terminal (sometimes with additional axes in distalmost axils), bisexual or staminate, racemiform (or paniculate by aggrega- tion), becoming ca 10-20 cm long; cymules unisexual, 9 flowers 1-5 at proxi- mal nodes; bracts elliptic-lanceolate, acuminate, more or less laciniate-toothed, ca 2-4 mm long, subtending solitary flowers (or c flowers sometimes several per bract). Staminate flowers with stellate-tomentose pedicels ca 6-9 mm long; calyx whitish stellate-tomentose, 4-5 mm long, divided ca 1/2way or more into; 5 tri- angular lobes; receptacle densely villose; petals obovate, ca 4.5-5 mm long, minutely glandular-punctate, densely whitish-ciliate along the margins and vil- lose on the back; stamens 15 or 16, the filaments glandular-pustulate, glabrous, 3-3.7 mm long, the anthers elliptic-oblong, 1.2-1.3 mm long, glandular-pustulate on the connective. Pistillate flowers with stout tomentose pedicels 2-3 mm long; calyx-segments 5, whitish stellate-tomentose, broadly ovate, reduplicate-valvate, entire, ca 5-5.5 mm long and 4-4.5 mm broad (increasing to 7-8 mm long and broad in fruit); disc ca 2.5 mm across, cut into 5 reniform thickish segments; petals absent, replaced by tufts of stiff hairs; ovary minutely and closely pulverulent- scurfy (the trichomes ca 0.05 mm wide) and glandular-pustulate, the styles free, ca 4-5 mm long, basally thickened, distally 2-4 times bifid into slender tips. Capsules subglobose, closely glandular-scurfy, ca 7.5-8 mm across, the columella slender, ca 4.5 mm long; seeds plump, brownish, minutely beaked, obliquely costate on both faces, 4.3-4.5 mm long, 3.3-3.4 mm wide, the caruncle triangular, ca 1.2- 1.5 mm broad.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 4518 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 4518; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 4518; CC BY 4.0. Citation metadata: Muell.-Arg. in DC., Prodr. 15(2): 556, 1866. | Croton fragrans Kunth, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/title -->
Croton fragrans Kunth, Flora of Panama (habit field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 4519 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 4519; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 4519; CC BY 4.0. Citation metadata: Muell.-Arg. in DC., Prodr. 15(2): 556, 1866. | Croton fragrans Kunth, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
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
Shrub, sometimes arborescent, 2-10 m high; monoecious; twigs and foliage with indumentum of stellate and dendritic hairs. Leaves membranous or chartace- ous; petioles densely stellate-tomentose, ca 1-3.5 cm long; glands at apex of petiole 2-6, patelliform, stalked, ca 0.5-0.8 mm diam (ca as broad as length of stalk); stipules elliptic or obovate, tomentose, the margins laciniate-toothed, ca 4-9 mm long; blades ovate to elliptic, ca 8-20 cm long, 4-12 cm broad, softly stellate or stel- late-hispidulous (1 of the ascending radii often larger than the others) above, paler and more densely stellate (the ca 6-10-radiate hairs mostly 0.5-0.8 mm across) and minutely glandular-punctate beneath, mostly 5- (7-) nerved at base, with ca 5-8 additional veins on either side, the base obtuse or rounded to subcordate, the margins subentire or distinctly crenulate-denticulate, the apex rather abruptly short-acuminate. Inflorescences terminal (sometimes with additional axes in distalmost axils), bisexual or staminate, racemiform (or paniculate by aggrega- tion), becoming ca 10-20 cm long; cymules unisexual, 9 flowers 1-5 at proxi- mal nodes; bracts elliptic-lanceolate, acuminate, more or less laciniate-toothed, ca 2-4 mm long, subtending solitary flowers (or c flowers sometimes several per bract). Staminate flowers with stellate-tomentose pedicels ca 6-9 mm long; calyx whitish stellate-tomentose, 4-5 mm long, divided ca 1/2way or more into; 5 tri- angular lobes; receptacle densely villose; petals obovate, ca 4.5-5 mm long, minutely glandular-punctate, densely whitish-ciliate along the margins and vil- lose on the back; stamens 15 or 16, the filaments glandular-pustulate, glabrous, 3-3.7 mm long, the anthers elliptic-oblong, 1.2-1.3 mm long, glandular-pustulate on the connective. Pistillate flowers with stout tomentose pedicels 2-3 mm long; calyx-segments 5, whitish stellate-tomentose, broadly ovate, reduplicate-valvate, entire, ca 5-5.5 mm long and 4-4.5 mm broad (increasing to 7-8 mm long and broad in fruit); disc ca 2.5 mm across, cut into 5 reniform thickish segments; petals absent, replaced by tufts of stiff hairs; ovary minutely and closely pulverulent- scurfy (the trichomes ca 0.05 mm wide) and glandular-pustulate, the styles free, ca 4-5 mm long, basally thickened, distally 2-4 times bifid into slender tips. Capsules subglobose, closely glandular-scurfy, ca 7.5-8 mm across, the columella slender, ca 4.5 mm long; seeds plump, brownish, minutely beaked, obliquely costate on both faces, 4.3-4.5 mm long, 3.3-3.4 mm wide, the caruncle triangular, ca 1.2- 1.5 mm broad.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Flora of Panama general field; imported row 4518; sourceIds A041A1E1-C936-4C02-A1FF-A592F68D17D7, 6434F54A-4F6E-410F-A31C-D05B6764458E; reference rows 135, 5347; citations: A041A1E1-C936-4C02-A1FF-A592F68D17D7: Muell.-Arg. in DC., Prodr. 15(2): 556, 1866. (reference row 135); 6434F54A-4F6E-410F-A31C-D05B6764458E: Croton fragrans Kunth, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 5347).
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
Lowland forests, eastern Panama to northern Colombia and Venezuela.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Flora of Panama distribution field; imported row 4503; sourceIds A041A1E1-C936-4C02-A1FF-A592F68D17D7, 550BF9E7-C1AE-4A03-A147-48A33086D546; reference rows 135, 5331; citations: A041A1E1-C936-4C02-A1FF-A592F68D17D7: Muell.-Arg. in DC., Prodr. 15(2): 556, 1866. (reference row 135); 550BF9E7-C1AE-4A03-A147-48A33086D546: Croton fragrans Kunth, Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 5331).
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
