---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Atelopus franciscus Lescure, 1974
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-24
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
      wild: The source reports field observations and experiments in natural habitat; claims retain that study context.
      domesticated: Domestication and captive history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 8
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/J8YL
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:J8YL@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage J8YL; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage J8YL. https://doi.org/10.48580/dgywk
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-0f64910d-093f-8f5d-a082-37fcce744782
          metadataVariant: 0
          sourceKey: boistel2011
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0022080
            accessedAt: 2026-09-24
            locator: "Abstract; Methods: Call analysis, Call intensity and Ambient noise measurements"
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - boistel2011
            locator: "Abstract, paragraphs 1–3; Methods: Middle ear biomechanics"
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
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
              - boistel2011
            locator: "Abstract, paragraphs 1–4; Results: Ambient noise and Call attenuation"
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
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
  catalogue-profile:
    scientificName: Atelopus franciscus Lescure, 1974
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Atelopus franciscus
      zh: Atelopus franciscus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
        locator:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/locator
        evidenceAssessment:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/evidenceAssessment
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
        locator:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/locator
        evidenceAssessment:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/evidenceAssessment
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/1
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceFields/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceFields/1
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
        sourceRevisionReview:
          sourceUrl:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceRevisionReview/sourceUrl
          sourceVersion:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceRevisionReview/sourceVersion
          status:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceRevisionReview/status
          affectedFieldScope:
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/2/sourceRevisionReview/affectedFieldScope/0
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/2/sourceRevisionReview/affectedFieldScope/1
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/2/sourceRevisionReview/affectedFieldScope/2
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/2/sourceRevisionReview/affectedFieldScope/3
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/2/sourceRevisionReview/affectedFieldScope/4
          speciesLevelCorrectionsCaptured: false
          correctedValuesSubstituted: false
          allOriginalValuesDeclaredWrong: false
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/0
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceFields/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/3/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/4/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/4/sourceIds/0
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/4/sourceFields/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/4/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/4/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/5/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceIds/0
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceFields/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceFields/1
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceFields/2
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/5/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/5/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/6/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceIds/0
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/6/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/6/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/7/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/7/sourceIds/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/7/sourceIds/1
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/7/sourceIds/2
        readingRouteKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/7/readingRouteKind
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
        readingLinks:
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/7/readingLinks/0/kind
            url: https://doi.org/10.6084/m9.figshare.4644424.v5
            targetPath: content/topics/research/AmphiBIO/Anura/Bufonidae/Atelopus/Atelopus_franciscus
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/7/readingLinks/0/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/7/readingLinks/0/label/zh
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/7/readingLinks/1/kind
            url: https://doi.org/10.6084/m9.figshare.28069802.v4
            targetPath: content/topics/research/TadpoleTraits/Bufonidae/Atelopus/Atelopus_franciscus
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/7/readingLinks/1/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/7/readingLinks/1/label/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/8/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/8/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/8/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/8/sourceConceptStatus
      - topic: overview
        readerSectionKind: amphibia-collection-placeholder
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
        sourceIds:
          - amphibia-collection-status
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 8
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/J8YL
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:J8YL@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage J8YL; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage J8YL. https://doi.org/10.48580/dgywk
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-0f64910d-093f-8f5d-a082-37fcce744782
          metadataVariant: 0
          sourceKey: boistel2011
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0022080
            accessedAt: 2026-09-24
            locator: "Abstract; Methods: Call analysis, Call intensity and Ambient noise measurements"
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/attribution
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-6db7bceb-2df2-46ef-90e7-a43ed817725b
          metadataVariant: 0
          sourceKey: amphibio
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-e5d27423-2f5f-44dd-a167-538d5a5e4e0d
          metadataVariant: 0
          sourceKey: tadpoletraits
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/3/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-b166b4d8-6e5a-4441-9e79-0b1afb15e5ba
          metadataVariant: 0
          sourceKey: tetrapodtraits-revisions
          usage:
            locator: Version 2.0.1 (9 March 2026), body mass and microhabitat revision notice
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - doi
            - url
            - version
            - accessedAt
            - licenseAssessment
            - licenseAppliesTo
            - locator
            - scope
        - referenceId: ref-amphibia-collection-index-2026-10-03
          metadataVariant: 0
          sourceKey: amphibia-collection-status
          usage:
            locator: docs/amphibia-content/reference-index.md
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
    historicalTraitSource:
      path: content/topics/research/AmphiBIO/Anura/Bufonidae/Atelopus/Atelopus_franciscus
      sourceRowId: Anf0474
      identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
      bibliographyAlignment:
        status: unique-within-source-tuple
        method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
        dataRowId: Anf0474
        bibliographyRowId: Anf0474
        sameIdNameMismatch: false
        originalSameIdScientificName: Atelopus franciscus
        candidateBibliographyRowIds:
          - Anf0474
      readerScope:
        markdown: evidence.md
        field: /records/catalogue-profile/historicalTraitSource/readerScope
    additionalTraitSources:
      - kind: tadpole-traits-reader
        path: content/topics/research/TadpoleTraits/Bufonidae/Atelopus/Atelopus_franciscus
        scientificName: Atelopus franciscus
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 1
  amphibia-collection-placeholder:
    name:
      en: Atelopus franciscus
      zh: Atelopus franciscus
    sections:
      - topic: overview
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
    collectionLedgerPath: docs/amphibia-content/full-roster-literature-collection.json
    concepts:
      - authority: COL26.8
        id: J8YL
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00001.json.gz
          field: /records/258
          queryName: Atelopus franciscus
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Atelopus franciscus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, source dataset and Amphibia classification verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage J8YL. The paper examines male calling, anatomy and sound transmission in its study context; it is not a complete species account.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text and other content included under the article license; third-party items credited otherwise are excluded. Only article text is paraphrased here.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Anatomical, acoustic, habitat-transmission and playback study focused on A. franciscus; acoustic environment measurements are explicitly described by the authors as spatial and temporal snapshots.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Boistel R, Aubin T, Cloetens P, Langer M, Gillet B, Josset P, et al. (2011). Whispering to the Deaf: Communication by a Frog without External Vocal Sac or Tympanum in Noisy Environments. PLOS ONE 6(7): e22080. https://doi.org/10.1371/journal.pone.0022080. Claims here are paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The study reports that A. franciscus lacks an external vocal sac and external tympanum; its anatomical and acoustic measurements are specific to the examined material.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Material and experiments reported in the 2011 species-focused study; no population-wide morphological survey is claimed.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Study material is not presented as a representative survey across all wild, captive or developmental states.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
2011 年研究报告，所检查的 Atelopus franciscus 材料没有外部声囊和外部鼓膜。解剖及声学测量仅对应研究材料；不是跨种群或全部发育阶段的形态调查。
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The study's anatomical observations do not describe all external or internal morphology, variation among populations, or developmental stages.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The authors report field responses by males to conspecific calls in a noisy riverbank environment and measure call propagation at less than 8 m under the study conditions.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Natural-habitat and playback measurements reported in the 2011 study; the authors characterize sound-environment measurements as temporal and spatial snapshots.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Field observations concern calling males; they do not establish behaviour across life stages or seasons.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
2011 年研究报告，在嘈杂的河岸环境中，野外雄性会回应同种鸣声；研究条件下测得的鸣声传播距离不足 8 米。声环境测量只是特定地点与时段的截面，不能推广为全分布区、所有季节或发育阶段的行为。
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The acoustic results are limited to the measured settings and do not establish year-round or range-wide behaviour, habitat selection, or population differences.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only bounded anatomical and acoustic evidence has been assessed; five facets remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The measurements do not constitute a complete biological literature search or a species-wide account.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text and other content included under the article license; third-party items credited otherwise are excluded. Only article text is paraphrased here.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope -->
Anatomical, acoustic, habitat-transmission and playback study focused on A. franciscus; acoustic environment measurements are explicitly described by the authors as spatial and temporal snapshots.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/attribution -->
Boistel R, Aubin T, Cloetens P, Langer M, Gillet B, Josset P, et al. (2011). Whispering to the Deaf: Communication by a Frog without External Vocal Sac or Tympanum in Noisy Environments. PLOS ONE 6(7): e22080. https://doi.org/10.1371/journal.pone.0022080. Claims here are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/locator -->
AmphiBIO_v1.csv row id Anf0474; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf0474 (exact within-source classification/name tuple)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
The Frost 2011 source concept, compilation-wide variable definitions and deposited values. Current species-concept equivalence unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
Frost 2011 来源概念、汇编的变量定义及存档值；与当前物种概念的等同性未确定。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/locator -->
Tadpole data 2025.4.21.xlsx; Data obtained from literature rows 530, 531, 532, 533, 534, 535, 536, 537; Picture measurement data rows none; Readme rows 6–50
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
The deposited ASTW-2024 source concept, literature/image evidence distinction, supplied developmental labels and non-conflicting source proportions. No adult morphology or range-wide diagnosis is inferred.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
存档的 ASTW-2024 来源概念、文献与图像证据的区别、所给发育标签及无已发现冲突的来源比例；不推断成体形态或全分布区鉴别特征。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Dataset-wide revision notice; affected original rows remain unverified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
数据集层级修订说明；受影响原始行尚未核定。
<!-- /evo:text -->

## catalogue-profile / historicalTraitSource / readerScope

<!-- evo:text /records/catalogue-profile/historicalTraitSource/readerScope -->
The paragraphs explicitly describe the historical deposited source concept. They are not generalized to every member of the current species.
<!-- /evo:text -->
