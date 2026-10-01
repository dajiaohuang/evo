---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Clitoria falcata Lam.
    authorship: Lam.
    rank: species
    sourceDatasetId: "2304"
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
      - id: "383"
        scientificName: Fabales Bromhead
        authorship: Bromhead
        rank: order
        status: accepted
        sourceDatasetId: "1141"
      - id: 623QT
        scientificName: Fabaceae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2304"
      - id: 9CKD6
        scientificName: Clitoria L.
        authorship: L.
        rank: genus
        status: accepted
        sourceDatasetId: "2304"
      - id: W9GN
        scientificName: Clitoria falcata Lam.
        authorship: Lam.
        rank: species
        status: accepted
        sourceDatasetId: "2304"
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
            url: https://www.checklistbank.org/dataset/316115/taxon/W9GN
            stableId: col:W9GN@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage W9GN. https://doi.org/10.48580/dgywk.
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
          sourceKey: flora_panama_w9gn_habit_5500
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: vine
            originalLanguage: en
            sourceField: habit
            sourceRowNumber: 5500
            archiveSourceId: 15492DC3-A903-4E01-AD46-06D79D3527FD
            archiveSourceIds:
              - 15492DC3-A903-4E01-AD46-06D79D3527FD
            referenceRowNumbers:
              - 6339
            sourceCitations:
              citationBindings:
                - referenceId: ref-f9b4d4ed-feb7-8976-a0bc-09c4fea28cae
                  metadataVariant: 0
                  usage:
                    identifier: 15492DC3-A903-4E01-AD46-06D79D3527FD
                    referenceRowNumber: 6339
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
            stableId: WFO-MBG-Flora-of-Panama:COL:W9GN:row:5500
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 5500; field habit; reference rows 6339.
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
          sourceKey: flora_panama_w9gn_distribution_5501
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/title
            url: https://files.worldfloraonline.org/files/MBG/Flora_Of_Panama/Flora_Of_Panama.zip
            version: WFO MBG DwC-A archive retrieved 2026-09-08
            publishedAt: undated
            originalSourceText: occurs in tropical South America, Central America, the West Indies, and tropical Africa.
            originalLanguage: en
            sourceField: distribution
            sourceRowNumber: 5501
            archiveSourceId: 1B420581-18D8-4204-9632-E1C51880C457
            archiveSourceIds:
              - 1B420581-18D8-4204-9632-E1C51880C457
            referenceRowNumbers:
              - 6340
            sourceCitations:
              citationBindings:
                - referenceId: ref-f9b4d4ed-feb7-8976-a0bc-09c4fea28cae
                  metadataVariant: 0
                  usage:
                    identifier: 1B420581-18D8-4204-9632-E1C51880C457
                    referenceRowNumber: 6340
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
            stableId: WFO-MBG-Flora-of-Panama:COL:W9GN:row:5501
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 5501; field distribution; reference rows 6340.
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
          sourceKey: flora_panama_w9gn_general_5520
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
            sourceRowNumber: 5520
            archiveSourceId: C279CEEF-87DB-4E71-B803-7A25E02A48D6
            archiveSourceIds:
              - C279CEEF-87DB-4E71-B803-7A25E02A48D6
            referenceRowNumbers:
              - 6359
            sourceCitations:
              citationBindings:
                - referenceId: ref-f9b4d4ed-feb7-8976-a0bc-09c4fea28cae
                  metadataVariant: 0
                  usage:
                    identifier: C279CEEF-87DB-4E71-B803-7A25E02A48D6
                    referenceRowNumber: 6359
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
            stableId: WFO-MBG-Flora-of-Panama:COL:W9GN:row:5520
            accessedAt: 2026-09-27
            locator: Imported DwC-A description row 5520; field general; reference rows 6359.
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
      queryOrPath: COL26.8 ChecklistBank dataset 316115 usage W9GN; source pack data/sources/flora-panama-descriptions.jsonl.br; source rows are frozen in data/sources/flora-panama-dossiers-batch-2026-09-27.json.
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
              - flora_panama_w9gn_general_5520
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
              - flora_panama_w9gn_distribution_5501
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

# Clitoria falcata

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage verified by stable COL ID in the pinned ChecklistBank dataset 316115 and followed through every parent node in the pinned hierarchy registry, preserving each node status as published. The Flora of Panama descriptions are joined by their retained accepted COL ID and WFO ID; same-name similarity is not used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage W9GN; the WFO source profile is a regional historical record and does not prove complete taxonomic-concept equivalence across releases.
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
Accepted species usage W9GN; exact name, authorship, rank, status, dataset ID, and every parent node's pinned ID, rank, name, and status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
Clitoria falcata Lam., Flora of Panama (habit field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 5500 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 5500; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 5500; CC BY 4.0. Citation metadata: Clitoria falcata Lam., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/title -->
Clitoria falcata Lam., Flora of Panama (distribution field)
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 5501 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 5501; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 5501; CC BY 4.0. Citation metadata: Clitoria falcata Lam., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
A source-record excerpt from the historical regional Flora of Panama. It does not establish concept equivalence across taxonomic versions or a current/global inventory.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/title -->
Clitoria falcata Lam., Flora of Panama (general field)
<!-- /evo:text -->

## referenceBindings / usage / originalSourceText

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/originalSourceText -->
Herbaceous vine, twining and scandent; stem filiform, 2-3 mm thick, hollow, pubescence uncinate, densely rufo-pilose, becoming less reddish, pilose hirsute to glabrous near the base, striate, infrequently branched, the internodes 7-16 cm. Leaves trifoliolate, oblong elliptic, occasionally ovate, the apex obtuse, retuse, mucronate, the base obtuse to rotund, 3.5-7(9) cm long, 1.5-5 cm wide, dark green and glabrous above, pale and densely pilose below, becoming scattered pilose with uncinate hairs on nerves, the veins weakly raised above, prominently raised below, primary nerves 7-9 pairs, alternate, obliquely ascending, secondary nerves reticulate; petiole 2.5-4 cm long, weakly 4-angled to terete, abruptly bent at the base forming an acute to right angle with the stem, pubescent; rachis 0.5- 1.5(2.3) cm, similar to petiole; stipules persistent, broadly ovate, acute, striate, pubescence uncinate, sparsely pilose, ciliate, 3-5 mm long, 3-3.5 mm wide; sti- pels persistent, linear lanceolate, acute, striate, pubescent, 3-7 mm long, 0.5-1 mm wide, longer than petiolules, the terminal stipels slightly shorter than lateral stipels; petiolules 4-angled, 3-4 mm long, dark colored, pubescence uncinate, densely pilose. Inflorescence of axillary racemes, 2 or 4(6) flowered, bearing either chasmogamous or cleistogamous flowers, chasmogamous flowers with the peduncle subequal to longer than petiole and rachis, 5-13 cm, the pubescence pilose, uncinate; bracts 4, inner pair not seen, 3-5 mm long, 1.5 mm wide, lan- ceolate, striate, acuminate, pubescence uncinate, pilose ciliate, becoming re- flexed in age, outer pair usually narrower; pedicels 2-4(5) mm; bracteoles 7-12 mm long, 3-3.5 mm wide, lanceolate, striate, acuminate, pubescence uncinate, moderately pilose, ciliate, inserted 0.5-1 mm below the calyx; cleistogamous inflorescences with the peduncle 4-6.5 cm long, pilose and uncinate hairs; the bracts 3-3.5 mm long, 0.7-1.3 mm wide; the pedicels 2-3 mm; the bracteoles 6- 7 mm long, 1.5-2 mm wide, inserted 0.5-1 mm below calyx. Chasmogamous flowers showy, lavender or white, sometimes becoming yellow with age; calyx tube 11-15 mm long, 4-7 mm wide at throat, pubescence uncinate, pilose, the lobes 9-13 mm long, ovate lanceolate, long acuminate, ciliate, 2-4 mm wide at base, the ventral lobe 12-14 mm long; standard 4-5 cm long, 3-4 cm wide, with sparse, appressed hairs denser along nerves and towards the margin, the apex ciliate, the wings extending beyond the keel 5-7 mm, the blade 14-17 mm long, 4-7 mm wide, the claw 9-13 mm long, the keel falcate, 7-9 mm across, 3-4 mm wide, the claw 16-18 mm; staminal column 20-27 mm long, incurved at tip, the free filaments 1-3 mm long, the anthers 1-1.2 mm long, 0.4-0.8 mm wide; ovary ca. 8 mm long, with dense white appressed, ascending hairs, the style 14-18 mm long, bearded, the stigma dilated; cleistogamous flowers inconspicuous, calyx tube 5-6 mm, 1.5 mm wide at the base to 2-3 mm wide at the throat, the lobes 5-7 mm long; corolla lacking. Fruit brown, slightly curved, biconvex, weakly compressed becoming subquadrangular, costate, 3-4.5(5) cm long, 8-9 mm wide, the pubescence uncinate and with few spreading hairs; stipe 8-9 mm long, en- closed in the calyx with the base of fruit; seeds cuboidal with rounded edges, a slight depression on the lateral faces, 4.5 mm long, 4 mm wide, brown, sticky, 5-8 per pod.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
The source pack ledger records CC BY 4.0 at archive level and the imported description row 5520 contains the CC BY 4.0 declaration. Bibliographic citation records on that row have blank license values; this does not verify reuse rights for the cited publications.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The normalized plain-text excerpt as supplied in the Flora of Panama DwC-A description row 5520; not the underlying works listed in sourceCitations. Linked Tropicos pages, images, PDFs, and other third-party materials are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Missouri Botanical Garden, Flora of Panama, WFO MBG DwC-A archive retrieved 2026-09-08, row 5520; CC BY 4.0. Citation metadata: Clitoria falcata Lam., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018..
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
Herbaceous vine, twining and scandent; stem filiform, 2-3 mm thick, hollow, pubescence uncinate, densely rufo-pilose, becoming less reddish, pilose hirsute to glabrous near the base, striate, infrequently branched, the internodes 7-16 cm. Leaves trifoliolate, oblong elliptic, occasionally ovate, the apex obtuse, retuse, mucronate, the base obtuse to rotund, 3.5-7(9) cm long, 1.5-5 cm wide, dark green and glabrous above, pale and densely pilose below, becoming scattered pilose with uncinate hairs on nerves, the veins weakly raised above, prominently raised below, primary nerves 7-9 pairs, alternate, obliquely ascending, secondary nerves reticulate; petiole 2.5-4 cm long, weakly 4-angled to terete, abruptly bent at the base forming an acute to right angle with the stem, pubescent; rachis 0.5- 1.5(2.3) cm, similar to petiole; stipules persistent, broadly ovate, acute, striate, pubescence uncinate, sparsely pilose, ciliate, 3-5 mm long, 3-3.5 mm wide; sti- pels persistent, linear lanceolate, acute, striate, pubescent, 3-7 mm long, 0.5-1 mm wide, longer than petiolules, the terminal stipels slightly shorter than lateral stipels; petiolules 4-angled, 3-4 mm long, dark colored, pubescence uncinate, densely pilose. Inflorescence of axillary racemes, 2 or 4(6) flowered, bearing either chasmogamous or cleistogamous flowers, chasmogamous flowers with the peduncle subequal to longer than petiole and rachis, 5-13 cm, the pubescence pilose, uncinate; bracts 4, inner pair not seen, 3-5 mm long, 1.5 mm wide, lan- ceolate, striate, acuminate, pubescence uncinate, pilose ciliate, becoming re- flexed in age, outer pair usually narrower; pedicels 2-4(5) mm; bracteoles 7-12 mm long, 3-3.5 mm wide, lanceolate, striate, acuminate, pubescence uncinate, moderately pilose, ciliate, inserted 0.5-1 mm below the calyx; cleistogamous inflorescences with the peduncle 4-6.5 cm long, pilose and uncinate hairs; the bracts 3-3.5 mm long, 0.7-1.3 mm wide; the pedicels 2-3 mm; the bracteoles 6- 7 mm long, 1.5-2 mm wide, inserted 0.5-1 mm below calyx. Chasmogamous flowers showy, lavender or white, sometimes becoming yellow with age; calyx tube 11-15 mm long, 4-7 mm wide at throat, pubescence uncinate, pilose, the lobes 9-13 mm long, ovate lanceolate, long acuminate, ciliate, 2-4 mm wide at base, the ventral lobe 12-14 mm long; standard 4-5 cm long, 3-4 cm wide, with sparse, appressed hairs denser along nerves and towards the margin, the apex ciliate, the wings extending beyond the keel 5-7 mm, the blade 14-17 mm long, 4-7 mm wide, the claw 9-13 mm long, the keel falcate, 7-9 mm across, 3-4 mm wide, the claw 16-18 mm; staminal column 20-27 mm long, incurved at tip, the free filaments 1-3 mm long, the anthers 1-1.2 mm long, 0.4-0.8 mm wide; ovary ca. 8 mm long, with dense white appressed, ascending hairs, the style 14-18 mm long, bearded, the stigma dilated; cleistogamous flowers inconspicuous, calyx tube 5-6 mm, 1.5 mm wide at the base to 2-3 mm wide at the throat, the lobes 5-7 mm long; corolla lacking. Fruit brown, slightly curved, biconvex, weakly compressed becoming subquadrangular, costate, 3-4.5(5) cm long, 8-9 mm wide, the pubescence uncinate and with few spreading hairs; stipe 8-9 mm long, en- closed in the calyx with the base of fruit; seeds cuboidal with rounded edges, a slight depression on the lateral faces, 4.5 mm long, 4 mm wide, brown, sticky, 5-8 per pod.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Flora of Panama general field; imported row 5520; sourceIds C279CEEF-87DB-4E71-B803-7A25E02A48D6; reference rows 6359; citations: C279CEEF-87DB-4E71-B803-7A25E02A48D6: Clitoria falcata Lam., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 6359).
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
occurs in tropical South America, Central America, the West Indies, and tropical Africa.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Flora of Panama distribution field; imported row 5501; sourceIds 1B420581-18D8-4204-9632-E1C51880C457; reference rows 6340; citations: 1B420581-18D8-4204-9632-E1C51880C457: Clitoria falcata Lam., Flora of Panama (WFO),Tropicos.org, 2013 Accessed February 2018. (reference row 6340).
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
