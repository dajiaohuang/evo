---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Oophaga pumilio (Schmidt, 1857)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-28
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: N
        scientificName: Animalia
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CH2
        scientificName: Chordata
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V3
        scientificName: Vertebrata
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V5
        scientificName: Gnathostomata
        authorship: null
        rank: infraphylum
        status: accepted
        sourceDatasetId: null
      - id: 8VVWB
        scientificName: Osteichthyes
        authorship: null
        rank: parvphylum
        status: accepted
        sourceDatasetId: null
      - id: 9CK8W
        scientificName: Tetrapoda
        authorship: null
        rank: megaclass
        status: accepted
        sourceDatasetId: null
      - id: PH
        scientificName: Amphibia
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: PW
        scientificName: Anura
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 52K
        scientificName: Dendrobatoidea Cope, 1865
        authorship: Cope, 1865
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 93G
        scientificName: Dendrobatidae Cope, 1865
        authorship: Cope, 1865
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: JF6
        scientificName: Dendrobatinae Cope, 1865
        authorship: Cope, 1865
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 68KL
        scientificName: Oophaga Bauer, 1994
        authorship: Bauer, 1994
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 49SSQ
        scientificName: Oophaga pumilio (Schmidt, 1857)
        authorship: (Schmidt, 1857)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication and captive populations have not been assessed; no captive or domesticated frogs support these claims.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/49SSQ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:49SSQ@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 49SSQ. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-104ce3e5-b24b-8032-a534-f97636eec80f
          metadataVariant: 0
          sourceKey: dreher2015
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0130571
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
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
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
        - referenceId: ref-a67d98d3-a788-81a2-a015-4ba1ab6c379b
          metadataVariant: 0
          sourceKey: plos2015correction
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator
            licenseAppliesTo: Correction notice text. The corrected figure and any separately credited third-party content are not reused.
            stableId: doi:10.1371/journal.pone.0134628
            accessedAt: 2026-09-28
            locator: "Correction notice: the first author's email and Fig. 4 were corrected. The claims in this dossier do not rely on Fig. 4."
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
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
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
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
              - dreher2015
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/1
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - dreher2015
            locator: Methods, Predation experiments; Results, Predation experiments and Fig. 2 caption.
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
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
      reviewers: []
  catalogue-profile:
    scientificName: Oophaga pumilio (Schmidt, 1857)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Oophaga pumilio
      zh: Oophaga pumilio
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/1
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/2
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/3
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/4
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/5
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
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/7/sourceFields/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/7/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/7/sourceConceptStatus
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/8/sourceIds/1
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/8/sourceIds/2
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/8/sourceIds/3
        readingRouteKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/8/readingRouteKind
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
        readingLinks:
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/8/readingLinks/0/kind
            url: https://doi.org/10.6084/m9.figshare.4644424.v5
            targetPath: content/topics/research/AmphiBIO/Anura/Dendrobatidae/Oophaga/Oophaga_pumilio
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/8/readingLinks/0/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/8/readingLinks/0/label/zh
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/8/readingLinks/1/kind
            url: https://doi.org/10.6084/m9.figshare.28069802.v4
            targetPath: content/topics/research/TadpoleTraits/Dendrobatidae/Oophaga/Oophaga_pumilio
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/8/readingLinks/1/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/8/readingLinks/1/label/zh
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/8/readingLinks/2/kind
            url: https://github.com/p-pottier/AmphiTherm
            targetPath: content/topics/research/AmphiTherm/Anura/Dendrobatidae/Oophaga/Oophaga_pumilio
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/8/readingLinks/2/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/8/readingLinks/2/label/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/9/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/9/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/9/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/9/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/10/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/10/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/10/sourceReaderKind
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/10/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/11/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/11/sourceIds/0
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/11/sourceReaderKind
        sourceRowId: "3763"
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
        sourceRowNumber: 3438
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/11/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/12/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/12/sourceIds/0
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/12/sourceReaderKind
        sourceRowId: "4123"
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
        sourceRowNumber: 3762
        sourceConceptStatus:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/12/sourceConceptStatus
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/13/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/13/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/14/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/14/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/14/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/14/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/15/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/15/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/15/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/15/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/15/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/15/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/16/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/16/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/16/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/16/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/16/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/16/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/17/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/17/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/17/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/17/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/17/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/17/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/18/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/18/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/18/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/18/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/18/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/18/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/19/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/19/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/19/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/19/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/19/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/19/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/20/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/20/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/20/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/20/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/20/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/20/text/zh
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/21/topic
        title:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/21/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/21/title/zh
            format: heading
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/21/sourceIds/0
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/21/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/21/text/zh
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
          metadataVariant: 1
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/49SSQ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:49SSQ@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 49SSQ. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-104ce3e5-b24b-8032-a534-f97636eec80f
          metadataVariant: 0
          sourceKey: dreher2015
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0130571
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/locator
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
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
        - referenceId: ref-a67d98d3-a788-81a2-a015-4ba1ab6c379b
          metadataVariant: 0
          sourceKey: plos2015correction
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/licenseEvidenceLocator
            licenseAppliesTo: Correction notice text. The corrected figure and any separately credited third-party content are not reused.
            stableId: doi:10.1371/journal.pone.0134628
            accessedAt: 2026-09-28
            locator: "Correction notice: the first author's email and Fig. 4 were corrected. The claims in this dossier do not rely on Fig. 4."
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/attribution
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
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
        - referenceId: ref-6db7bceb-2df2-46ef-90e7-a43ed817725b
          metadataVariant: 0
          sourceKey: amphibio
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
              field: /records/catalogue-profile/sources/referenceBindings/4/usage/locator
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
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh
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
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3438, 3760, 3761, 3762, 3763; Metadata_AmphiTherm.xlsx
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - datasetUrl
            - version
            - associatedArchivedReleaseDoi
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-8f62a163-7c26-4c72-a299-615447ed8e15
          metadataVariant: 0
          sourceKey: primary-pmc10548314-49ssq
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/7/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - attribution
            - locator
            - scope
        - referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
          metadataVariant: 0
          sourceKey: primary-pmc12822217-49ssq
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/8/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/8/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/8/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - year
            - doi
            - url
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - attribution
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
      path: content/topics/research/AmphiBIO/Anura/Dendrobatidae/Oophaga/Oophaga_pumilio
      sourceRowId: Anf1530
      identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
      bibliographyAlignment:
        status: unique-within-source-tuple
        method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
        dataRowId: Anf1530
        bibliographyRowId: Anf1530
        sameIdNameMismatch: false
        originalSameIdScientificName: Oophaga pumilio
        candidateBibliographyRowIds:
          - Anf1530
      readerScope:
        markdown: evidence.md
        field: /records/catalogue-profile/historicalTraitSource/readerScope
    additionalTraitSources:
      - kind: tadpole-traits-reader
        path: content/topics/research/TadpoleTraits/Dendrobatidae/Oophaga/Oophaga_pumilio
        scientificName: Oophaga pumilio
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 2
      - kind: amphitherm-source-reader
        path: content/topics/research/AmphiTherm/Anura/Dendrobatidae/Oophaga/Oophaga_pumilio
        scientificName: Oophaga pumilio
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 2
    primaryStudyScopes:
      - doi: 10.1093/molbev/msad206
        referenceId: ref-8f62a163-7c26-4c72-a299-615447ed8e15
        sourceKey: primary-pmc10548314-49ssq
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10548314/article.xml
        sourceConcept: 2023 source-labelled Oophaga pumilio; cited observations distinguished from new genomic analyses
        evidenceRead:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/0/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY-NC 4.0
          licenseUrl: https://creativecommons.org/licenses/by-nc/4.0/
          attribution: Own factual synthesis and Chinese translation of the original study; no figures reproduced.
        sectionEvidence:
          - sectionOrdinal: 0
            topic: evolution
            heading:
              en: Three complementary searches support a missing opsin hypothesis
              zh: 三种互补搜索支持视蛋白缺失假说
            referenceId: ref-8f62a163-7c26-4c72-a299-615447ed8e15
            sourceKey: primary-pmc10548314-49ssq
            locator: PMC10548314 XML Results1.3; Methods4.5 transcriptomics/synteny/genome-mining paragraphs
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/zh
          - sectionOrdinal: 1
            topic: ecology
            heading:
              en: Visual consequences remain partly inferred from earlier measurements
              zh: 视觉后果部分由较早测量推断
            referenceId: ref-8f62a163-7c26-4c72-a299-615447ed8e15
            sourceKey: primary-pmc10548314-49ssq
            locator: PMC10548314 XML Discussion2.4 paragraphs2,4–5
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/zh
          - sectionOrdinal: 2
            topic: ecology
            heading:
              en: Colour-mediated behaviour is cited background
              zh: 色彩介导行为是被引背景
            referenceId: ref-8f62a163-7c26-4c72-a299-615447ed8e15
            sourceKey: primary-pmc10548314-49ssq
            locator: PMC10548314 XML Discussion2.3 paragraph1
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/zh
      - doi: 10.1186/s12864-025-12414-y
        referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
        sourceKey: primary-pmc12822217-49ssq
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12822217/article.xml
        sourceConcept:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/1/sourceConcept
        evidenceRead:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/1/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY 4.0
          licenseUrl: https://creativecommons.org/licenses/by/4.0/
          attribution: Own factual synthesis and Chinese translation of the original study; no figures reproduced.
        sectionEvidence:
          - sectionOrdinal: 0
            topic: evolution
            heading:
              en: A reference assembly in a comparative genome study
              zh: 比较基因组研究中的参考组装
            referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
            sourceKey: primary-pmc12822217-49ssq
            locator: PMC12822217 XML Tab1 tbody row14 sourceOophaga pumilio accessionGCA_933207985.1
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/0/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/0/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/0/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/0/scope/zh
          - sectionOrdinal: 1
            topic: methods
            heading:
              en: Assembly metadata has limits
              zh: 组装元数据有其限制
            referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
            sourceKey: primary-pmc12822217-49ssq
            locator: PMC12822217 XML Tab1 tbody row14 sourceOophaga pumilio accessionGCA_933207985.1;Tab1caption;Sec3assemblyfilter
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/1/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/1/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/1/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/1/scope/zh
          - sectionOrdinal: 2
            topic: methods
            heading:
              en: Repeat annotations are computational observations
              zh: 重复序列注释是计算观察
            referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
            sourceKey: primary-pmc12822217-49ssq
            locator: PMC12822217 XML Sec3 repeatannotation
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/2/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/2/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/2/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/2/scope/zh
          - sectionOrdinal: 3
            topic: evolution
            heading:
              en: Across-species correlations do not prove this species mechanism
              zh: 跨物种相关性不能证明本种机制
            referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
            sourceKey: primary-pmc12822217-49ssq
            locator: PMC12822217 XML Sec5–8/Sec11–15/Sec17–20
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/3/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/3/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/3/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/3/scope/zh
          - sectionOrdinal: 4
            topic: methods
            heading:
              en: Conflicting source identifiers prevent a repeat-data assignment
              zh: 来源编号冲突阻止重复数据归属
            referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
            sourceKey: primary-pmc12822217-49ssq
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/locator
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/scope/zh
          - sectionOrdinal: 5
            topic: methods
            heading:
              en: The ORF count differs between text and supplement
              zh: 正文与补充表的开放阅读框数不同
            referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
            sourceKey: primary-pmc12822217-49ssq
            locator: PMC12822217 XML Sec13;workbookS6row30
            locatorPrecision: manually-recorded-section-and-paragraph-label
            evidenceSummary:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/5/evidenceSummary/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/5/evidenceSummary/zh
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/5/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/5/scope/zh
  amphibia-collection-placeholder:
    name:
      en: Oophaga pumilio
      zh: Oophaga pumilio
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
        id: 49SSQ
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00011.json.gz
          field: /records/173
          queryName: Oophaga pumilio
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 208
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00022.json.gz
          field: /records/191
          queryName: Dendrobates pumilio
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 99
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00029.json.gz
          field: /records/73
          queryName: Hylaplesia pumilio
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00029.json.gz
          field: /records/74
          queryName: Dendrobates typographus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00029.json.gz
          field: /records/75
          queryName: Dendrobates ignitus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00029.json.gz
          field: /records/76
          queryName: Hylaplesia typographa
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00029.json.gz
          field: /records/77
          queryName: Hylaplesia ignita
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00029.json.gz
          field: /records/78
          queryName: Dendrobates typographicus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00029.json.gz
          field: /records/79
          queryName: Dendrobates galindoi
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Oophaga pumilio

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by the pinned COL26.8 accepted usage. Evidence concerns measured coloration and clay-model predator interactions at six sampled Central American populations; it does not constitute a full species account.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Live frogs were measured in the field and released at their capture sites. The predation experiment used standardized non-toxic clay models placed in frog habitat; model attacks are not observations of live-frog survival.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 49SSQ; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article copyright notice links to the Creative Commons Attribution License; PLOS policy identifies CC BY 4.0 International as the article-content license.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text. Any separately credited third-party content is excluded; this dossier paraphrases findings and does not reuse images or figures.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods, Reflectance Measurements and Visual Modeling and Predation experiments; Results, Overall conspicuousness and Predation experiments.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original live-frog skin reflectance and clay-model predation experiments across six populations in Costa Rica and Panama. Claims do not rely on figures or third-party material.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Dreher CE, Cummings ME, Pröhl H (2015). An Analysis of Predator Selection to Affect Aposematic Coloration in a Poison Frog Species. PLOS ONE 10(6):e0130571. https://doi.org/10.1371/journal.pone.0130571. Findings paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
Correction copyright notice links to the Creative Commons Attribution License; PLOS policy identifies CC BY 4.0 International as the article-content license.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Publisher correction associated with the 2015 Oophaga pumilio research article. It corrects Fig. 4 and the first author's email; it does not alter the Methods or Results passages cited for these claims.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
The PLOS ONE Staff (2015). Correction: An Analysis of Predator Selection to Affect Aposematic Coloration in a Poison Frog Species. PLOS ONE 10(7):e0134628. https://doi.org/10.1371/journal.pone.0134628. Correction notice paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Researchers measured skin reflectance in 255 live Oophaga pumilio from six populations in Costa Rica and Panama between December 2008 and June 2011. Their visual models found population differences in color and brightness contrast among sampled dorsal and ventral coloration. These measurements describe the sampled populations; they do not establish that selection caused the divergence or characterize every population of the species.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Methods, Reflectance Measurements and Visual Modeling; Results, Color Contrast, Brightness Contrast, and Overall conspicuousness.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Six populations: Sarapiquí and Hitoy Cerere in Costa Rica; Río Gloria, Tierra Oscura, Isla Colón, and Isla Solarte in Panama. Field measurements were collected between December 2008 and June 2011; the article was published 2015-06-25.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Live, free-living frogs were measured in the field and released at their capture sites. No captive or domesticated frogs support the claim.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
研究者于 2008 年 12 月至 2011 年 6 月，在哥斯达黎加和巴拿马六个种群测量 255 只活体 Oophaga pumilio 的皮肤反射率。视觉模型显示，所采样背部和腹部颜色的色彩与亮度对比在种群之间不同。样地为 Sarapiquí、Hitoy Cerere、Río Gloria、Tierra Oscura、Isla Colón 和 Isla Solarte。蛙在野外测量后原地放回；这些结果不证明差异由选择造成，也不代表本种全部种群。
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The study measures color and brightness contrasts, not all morphological traits or within-population variation across the species range.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/1 -->
A population comparison does not by itself establish the evolutionary causes of coloration differences.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In 20-day experiments at six sampled populations, researchers deployed 1,600 standardized clay frog models per population. Attack rates varied among populations and were higher at the two sampled Panama island populations than at several mainland populations; local versus non-local model origin had no significant overall effect. These are predator interactions with clay models, not mortality or survival measurements of live frogs.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
The six model-placement populations were Sarapiquí, Hitoy Cerere, Río Gloria, Tierra Oscura, Isla Colón, and Isla Solarte in Costa Rica and Panama. The main article gives the live-frog field-work period as December 2008 to June 2011 but does not date each model experiment separately; exact experiment dates remain unknown.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The focal frogs are free-living; attacks were recorded on non-toxic clay models placed in their habitat, not on live or captive frogs.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
研究者在哥斯达黎加和巴拿马的六个样地分别进行 20 天实验，每处放置 1,600 个标准化黏土蛙模型。模型受攻击率在样地间不同，所采样的两个巴拿马岛屿样地高于若干大陆样地；模型属于本地或非本地型的总体效应不显著。这是捕食者与黏土模型的相互作用，不是活蛙死亡率或存活率测量。样地为 Sarapiquí、Hitoy Cerere、Río Gloria、Tierra Oscura、Isla Colón 和 Isla Solarte；正文没有逐一给出模型实验日期，因此精确实验日期仍未知。
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Clay-model attacks cannot estimate live-frog mortality, survival, or realized predator selection on natural populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
Some imprints were classified only as potential bird marks; other predator classes had few observations, and the result is limited to six populations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only sampled coloration and clay-model predator-interaction facets are partially supported; life history, evolution, complete distribution, fossils, and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The study covers six selected populations and does not provide a complete species account or prove causal mechanisms of color divergence.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A reproducible systematic search and independent expert review have not been completed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/locator -->
Accepted species usage 49SSQ; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article copyright notice links to the Creative Commons Attribution License; PLOS policy identifies CC BY 4.0 International as the article-content license.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text. Any separately credited third-party content is excluded; this dossier paraphrases findings and does not reuse images or figures.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/locator -->
Methods, Reflectance Measurements and Visual Modeling and Predation experiments; Results, Overall conspicuousness and Predation experiments.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope -->
Original live-frog skin reflectance and clay-model predation experiments across six populations in Costa Rica and Panama. Claims do not rely on figures or third-party material.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/attribution -->
Dreher CE, Cummings ME, Pröhl H (2015). An Analysis of Predator Selection to Affect Aposematic Coloration in a Poison Frog Species. PLOS ONE 10(6):e0130571. https://doi.org/10.1371/journal.pone.0130571. Findings paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
Correction copyright notice links to the Creative Commons Attribution License; PLOS policy identifies CC BY 4.0 International as the article-content license.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope -->
Publisher correction associated with the 2015 Oophaga pumilio research article. It corrects Fig. 4 and the first author's email; it does not alter the Methods or Results passages cited for these claims.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/attribution -->
The PLOS ONE Staff (2015). Correction: An Analysis of Predator Selection to Affect Aposematic Coloration in a Poison Frog Species. PLOS ONE 10(7):e0134628. https://doi.org/10.1371/journal.pone.0134628. Correction notice paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/locator -->
AmphiBIO_v1.csv row id Anf1530; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf1530 (exact within-source classification/name tuple)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
The Frost 2011 source concept, compilation-wide variable definitions and deposited values. Current species-concept equivalence unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
Frost 2011 来源概念、汇编的变量定义及存档值；与当前物种概念的等同性未确定。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/locator -->
Tadpole data 2025.4.21.xlsx; Data obtained from literature rows none; Picture measurement data rows 1190; Readme rows 6–50
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
The deposited ASTW-2024 source concept, literature/image evidence distinction, supplied developmental labels and non-conflicting source proportions. No adult morphology or range-wide diagnosis is inferred.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
存档的 ASTW-2024 来源概念、文献与图像证据的区别、所给发育标签及无已发现冲突的来源比例；不推断成体形态或全分布区鉴别特征。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
Dataset-wide revision notice; affected original rows remain unverified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
数据集层级修订说明；受影响原始行尚未核定。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/locator -->
Oophaga pumilio: XML Results1.1–1.3, Tables1–2 and Figure2 caption, Discussion2.1–2.4, Methods4.1–4.2 and4.4–4.5 read; supplementary specimen/sequence tables, original alignments, deposited reads and cited functional/behavioural experiments not independently reanalysed; no figures or deposited datasets reproduced
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en -->
Limited study sample; population-wide biology and contemporary concept equivalence are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh -->
有限研究样本；种群整体生物学与当代概念等同性未经独立认证。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/8/usage/locator -->
Oophaga pumilio: Complete XMLMethods Sec3/Sec5–8 andResults Sec10–15,Tables1–5 andDiscussion Sec17–20 inspected. Table1 61rows extractedpreservingfamilyrowspans/accessionversions/unitlabels/technologycells. Supplementaryxlsx retrievedwithhash, all17sheets extractedread-only; S1name-accessioncrosschecks, S2/S3headers+populatedrowcounts, allS6labels/counts, selectedS8coefficients inspected. RemainingS4/S5/S7/S9–17 extractedbutnotfullyscientificallyinterpreted. SupplementaryPDFdownloaded, webcaptionsreadonly; nopixelinspection. No rawassembly/repeatlibrary/Rpipeline/voucherreview orfullarticle/conceptcertification.; no figures or deposited datasets reproduced
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/8/usage/scope/en -->
Limited study sample; population-wide biology and contemporary concept equivalence are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/8/usage/scope/zh -->
有限研究样本；种群整体生物学与当代概念等同性未经独立认证。
<!-- /evo:text -->

## catalogue-profile / historicalTraitSource / readerScope

<!-- evo:text /records/catalogue-profile/historicalTraitSource/readerScope -->
The paragraphs explicitly describe the historical deposited source concept. They are not generalized to every member of the current species.
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/evidenceRead -->
Oophaga pumilio: XML Results1.1–1.3, Tables1–2 and Figure2 caption, Discussion2.1–2.4, Methods4.1–4.2 and4.4–4.5 read; supplementary specimen/sequence tables, original alignments, deposited reads and cited functional/behavioural experiments not independently reanalysed; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/1/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/2/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / sourceConcept

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sourceConcept -->
Table1source Oophaga pumilio listedassemblyGCA_933207985.1; conflictingS1quantitativeassignments withheld, no rawgenomeauthentication
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/evidenceRead -->
Oophaga pumilio: Complete XMLMethods Sec3/Sec5–8 andResults Sec10–15,Tables1–5 andDiscussion Sec17–20 inspected. Table1 61rows extractedpreservingfamilyrowspans/accessionversions/unitlabels/technologycells. Supplementaryxlsx retrievedwithhash, all17sheets extractedread-only; S1name-accessioncrosschecks, S2/S3headers+populatedrowcounts, allS6labels/counts, selectedS8coefficients inspected. RemainingS4/S5/S7/S9–17 extractedbutnotfullyscientificallyinterpreted. SupplementaryPDFdownloaded, webcaptionsreadonly; nopixelinspection. No rawassembly/repeatlibrary/Rpipeline/voucherreview orfullarticle/conceptcertification.; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/0/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/0/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/1/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/1/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/2/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/2/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/3/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/3/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / locator

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/locator -->
PMC12822217 XML Tab1 tbody row14 sourceOophaga pumilio accessionGCA_933207985.1; data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12822217/12864_2025_12414_MOESM1_ESM.xlsx Table S1 A49:B49; TableS2/S3headers
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/5/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/5/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->
