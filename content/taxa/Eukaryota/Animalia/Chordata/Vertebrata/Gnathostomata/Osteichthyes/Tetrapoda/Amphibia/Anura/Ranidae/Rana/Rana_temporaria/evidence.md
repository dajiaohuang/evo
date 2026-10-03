---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Rana temporaria Linnaeus, 1758
    authorship: Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-25
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
      wild: The study monitored spawning at wild breeding ponds in Skåne, southern Sweden.
      domesticated: Domestication was not assessed.
      captive: No captive frogs were used in the monitored wild-spawn study.
      fossil: No fossil occurrence or geological age was assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6WR99
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:6WR99@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6WR99. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-700177e7-e259-8580-ad13-c0aeb93a468b
          metadataVariant: 0
          sourceKey: loman2016
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1002/ece3.2356
            accessedAt: 2026-09-25
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
    systematicSearch:
      date: 2026-09-25
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage 6WR99; Wiley DOI 10.1002/ece3.2356; Crossref version-of-record license metadata.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            sourceIds:
              - loman2016
            locator: Abstract; Methods > Monitoring frog spawn.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - loman2016
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
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
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
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
      - id: FJM
        scientificName: Ranidae Batsch, 1796
        authorship: Batsch, 1796
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 642HY
        scientificName: Rana Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 6WR99
        scientificName: Rana temporaria Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: species
        status: accepted
        sourceDatasetId: "2144"
  catalogue-profile:
    scientificName: Rana temporaria Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Rana temporaria
      zh: Rana temporaria
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceFields/2
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/4/sourceFields/1
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceIds/1
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceFields/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceFields/1
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
        sourceRevisionReview:
          sourceUrl:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceRevisionReview/sourceUrl
          sourceVersion:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceRevisionReview/sourceVersion
          status:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceRevisionReview/status
          affectedFieldScope:
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/5/sourceRevisionReview/affectedFieldScope/0
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/5/sourceRevisionReview/affectedFieldScope/1
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/5/sourceRevisionReview/affectedFieldScope/2
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/5/sourceRevisionReview/affectedFieldScope/3
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/5/sourceRevisionReview/affectedFieldScope/4
          speciesLevelCorrectionsCaptured: false
          correctedValuesSubstituted: false
          allOriginalValuesDeclaredWrong: false
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/6
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/7
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/8
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/6/sourceFields/9
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
            targetPath: content/topics/research/AmphiBIO/Anura/Ranidae/Rana/Rana_temporaria
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
            url: https://doi.org/10.6084/m9.figshare.21159229.v3
            targetPath: content/topics/research/AmphibianMorphology/Anura/Ranidae/Rana/Rana_temporaria
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
            targetPath: content/topics/research/AmphiTherm/Anura/Ranidae/Rana/Rana_temporaria
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
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/10/sourceReaderKind
        sourceRowId: "153"
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
        sourceRowNumber: 135
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
        sourceRowId: "1445"
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
        sourceRowNumber: 1287
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
        sourceRowId: "1603"
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
        sourceRowNumber: 1445
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6WR99
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:6WR99@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6WR99. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-700177e7-e259-8580-ad13-c0aeb93a468b
          metadataVariant: 0
          sourceKey: loman2016
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1002/ece3.2356
            accessedAt: 2026-09-25
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
        - referenceId: ref-fd9084a2-752b-4a3e-b904-e62d665705df
          metadataVariant: 0
          sourceKey: amphibian-morphology
          usage:
            locator: Anura.csv, rows 5206, 5207; Reference.csv rows 4013
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
            - rightsEvidenceUrl
            - licenseAssessment
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
        - referenceId: ref-7cc27c69-2a38-44d1-b4dc-7b8e927b710d
          metadataVariant: 0
          sourceKey: amphitherm
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/5/usage/locator
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
          sourceKey: primary-pmc10548314-6wr99
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/6/usage/locator
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
            - accessedAt
            - license
            - licenseUrl
            - licenseAssessment
            - attribution
            - locator
            - scope
        - referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
          metadataVariant: 0
          sourceKey: primary-pmc12822217-6wr99
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
      path: content/topics/research/AmphiBIO/Anura/Ranidae/Rana/Rana_temporaria
      sourceRowId: Anf5041
      identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
      bibliographyAlignment:
        status: unique-within-source-tuple
        method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
        dataRowId: Anf5041
        bibliographyRowId: Anf5044
        sameIdNameMismatch: true
        originalSameIdScientificName: Rana sierrae
        candidateBibliographyRowIds:
          - Anf5044
      readerScope:
        markdown: evidence.md
        field: /records/catalogue-profile/historicalTraitSource/readerScope
    additionalTraitSources:
      - kind: amphibian-morphology-reader
        path: content/topics/research/AmphibianMorphology/Anura/Ranidae/Rana/Rana_temporaria
        scientificName: Rana temporaria
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 1
      - kind: amphitherm-source-reader
        path: content/topics/research/AmphiTherm/Anura/Ranidae/Rana/Rana_temporaria
        scientificName: Rana temporaria
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 3
    primaryStudyScopes:
      - doi: 10.1093/molbev/msad206
        referenceId: ref-8f62a163-7c26-4c72-a299-615447ed8e15
        sourceKey: primary-pmc10548314-6wr99
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10548314/article.xml
        sourceConcept: 2023 source-labelled Rana temporaria; cited observations distinguished from new genomic analyses
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
              en: A genomic synteny comparator, not a new behaviour experiment
              zh: 基因组共线性对照而非新行为实验
            referenceId: ref-8f62a163-7c26-4c72-a299-615447ed8e15
            sourceKey: primary-pmc10548314-6wr99
            locator: PMC10548314 XML Results1.3/Figure2 caption; Methods4.5 synteny/genome-mining paragraphs
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
      - doi: 10.1186/s12864-025-12414-y
        referenceId: ref-5f7849fc-a964-4472-a99b-63c24eadff41
        sourceKey: primary-pmc12822217-6wr99
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
            sourceKey: primary-pmc12822217-6wr99
            locator: PMC12822217 XML Tab1 tbody row49 sourceRana temporaria accessionGCA_009801035.1
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
            sourceKey: primary-pmc12822217-6wr99
            locator: PMC12822217 XML Tab1 tbody row49 sourceRana temporaria accessionGCA_009801035.1;Tab1caption;Sec3assemblyfilter
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
            sourceKey: primary-pmc12822217-6wr99
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
            sourceKey: primary-pmc12822217-6wr99
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
            sourceKey: primary-pmc12822217-6wr99
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
  amphibia-collection-placeholder:
    name:
      en: Rana temporaria
      zh: Rana temporaria
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
        id: 6WR99
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00015.json.gz
          field: /records/88
          queryName: Rana temporaria
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 8154
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00025.json.gz
          field: /records/119
          queryName: Rana honnorati
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/36
          queryName: Rana hyla
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 16
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/37
          queryName: Rana muta
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/38
          queryName: Rana alpina
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/39
          queryName: Rana campanisona
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/40
          queryName: Rana atra
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/41
          queryName: Rana flaviventris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/42
          queryName: Rana glacialis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/43
          queryName: Rana scotica
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/44
          queryName: Bufo campanisonus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/45
          queryName: Alytes grandis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00039.json.gz
          field: /records/46
          queryName: Rana aragonensis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00047.json.gz
          field: /records/236
          queryName: Rana fusca honnorati
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00047.json.gz
          field: /records/238
          queryName: Rana temporaria marmorata
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00047.json.gz
          field: /records/239
          queryName: Rana temporaria nigromaculata
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00047.json.gz
          field: /records/240
          queryName: Rana temporaria entzi
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00047.json.gz
          field: /records/241
          queryName: Alytes campanisonus campanisonus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00047.json.gz
          field: /records/242
          queryName: Rana temporaria honnorati
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00047.json.gz
          field: /records/243
          queryName: Rana temporaria aragonensis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/358
          queryName: Rana aquatica
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/372
          queryName: Rana mehelyi
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/384
          queryName: Rana platyrrhinus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/386
          queryName: Rana rufa
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/41
          queryName: Rana fusca longipes
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/44
          queryName: Rana muta flavomaculata
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/45
          queryName: Rana muta nigroguttata
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/46
          queryName: Rana muta subconcolor
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/49
          queryName: Rana temporaria acutirostris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/51
          queryName: Rana temporaria canigonensis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/52
          queryName: Rana temporaria cinereus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/53
          queryName: Rana temporaria gracilis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/54
          queryName: Rana temporaria maximus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/55
          queryName: Rana temporaria montanus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/56
          queryName: Rana temporaria obtusirostris
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/57
          queryName: Rana temporaria typus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00050.json.gz
          field: /records/58
          queryName: Rana temporaria verrucosus
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

# Rana temporaria

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage 6WR99 verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species represented by COL26.8 accepted usage 6WR99. The evidence is local wild-spawn monitoring in Skåne, Sweden, and does not establish global or species-wide breeding phenology.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 6WR99; exact name, authorship, rank, status, sourceDatasetId 2144, and full accepted parent chain.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The version-of-record article text under its item-level CC BY 4.0 license; separately credited third-party material is excluded.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Methods > Monitoring frog spawn and Temperature measurements in ponds; Results > pond and year effects and average breeding time; Figure 5.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary wild breeding-phenology monitoring in Skåne, southern Sweden; only article text is paraphrased, without reusing figures or third-party material.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Loman J (2016). Ecology and Evolution 6:6202–6209. https://doi.org/10.1002/ece3.2356. Claims paraphrased from article text.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and a focused review of one primary wild-spawn monitoring article from southern Sweden; this is not a seven-facet literature review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified accepted COL26.8 usage and parent chain in the pinned registry. Read the publisher article's methods, results, local sampling limits, and version-of-record license metadata. No multi-database or facet-by-facet species review was completed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary article naming Rana temporaria and describing the wild pond monitoring, period, temperature/logger subset, results, and item-level reuse terms.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Global distribution, adult morphology, causal mechanism, species-wide phenology, phylogeny, fossil, and conservation claims not established by this study; secondary-source claims not checked at their originals.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The breeding-phenology study did not assess diagnostic morphology or species-level variation.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
In the author's Skåne monitoring series, start of breeding among local Rana temporaria populations varied by as much as three weeks within a year. The observations span 1990–2015, with the number of monitored ponds varying from 29 to 84 and the most distant ponds separated by 60 kilometres; this is a local monitoring series, not a species-wide phenology estimate.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Skåne province, southern Sweden; monitoring from 1990 through 2015; 29–84 ponds depending on year, maximum pond separation 60 km.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild breeding populations observed through their spawn at ponds.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
在瑞典南部斯科讷的 Rana temporaria 监测序列中，同一年内当地种群的开始繁殖时间最多相差三周。观察持续于 1990–2015 年，每年监测 29–84 处池塘，最远池塘间距为 60 千米。研究通过池塘卵团观察野生繁殖种群；这是地方监测序列，不能作为整个物种的繁殖物候估计。
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
This local time series does not cover the species' range, other life stages, survival, or reproduction outside the monitored ponds and years.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
For 19 Skåne ponds with logger data in 2011–2015, earlier mean breeding time was associated with warmer average logged pond temperatures and larger average breeding congregations, estimated from spawn-clump counts; the reported temperature and congregation terms were statistically significant. Substantial residual pond variation remained, and this observational association does not identify a causal mechanism.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods > Temperature measurements in ponds; Results paragraph beginning ‘There were effects of pond temperature’; Figure 5.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
19 logger ponds in Skåne, southern Sweden; breeding and temperature subset from 2011–2015. Spawn-clump count was used as the breeding-congregation estimate.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild breeding populations; no captive frogs were studied.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在斯科讷 19 处具有 2011–2015 年温度记录仪数据的池塘，较早的平均繁殖时间与较暖的平均池塘温度、以及用卵团数量估计的较大平均繁殖聚集相关；温度和聚集项具有统计学显著性，但池塘之间仍有较大残余差异。这是野生繁殖种群的观察性关联，不能确定因果机制，也不能推广为全分布区的生态结论。
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
A local pond association does not establish mechanism, diet, habitat use across the range, or ecological interactions beyond breeding-site temperature and congregation size.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-specific phylogenetic or comparative evolutionary analysis was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The Skåne study area is not a range-wide distribution assessment.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence or bounded fossil-record search was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current assessment, population trend, or threat analysis was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One regional monitoring study supports only local spawning phenology and pond-level associations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Five facets remain not assessed; the study does not provide global or species-wide coverage.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No multi-source species review or independent external expert review has been completed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/locator -->
Accepted species usage 6WR99; exact name, authorship, rank, status, sourceDatasetId 2144, and full accepted parent chain.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo -->
The version-of-record article text under its item-level CC BY 4.0 license; separately credited third-party material is excluded.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/locator -->
Abstract; Methods > Monitoring frog spawn and Temperature measurements in ponds; Results > pond and year effects and average breeding time; Figure 5.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope -->
Primary wild breeding-phenology monitoring in Skåne, southern Sweden; only article text is paraphrased, without reusing figures or third-party material.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/attribution -->
Loman J (2016). Ecology and Evolution 6:6202–6209. https://doi.org/10.1002/ece3.2356. Claims paraphrased from article text.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/locator -->
AmphiBIO_v1.csv row id Anf5041; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf5044 (exact within-source classification/name tuple)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
The Frost 2011 source concept, compilation-wide variable definitions and deposited values. Current species-concept equivalence unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
Frost 2011 来源概念、汇编的变量定义及存档值；与当前物种概念的等同性未确定。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Deposited source concept, available measurement material and original bibliography. Absolute units and current concept equivalence remain unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
存档来源概念、可用测量材料及原书目；绝对单位与当前概念等同性仍未解决。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
Dataset-wide revision notice; affected original rows remain unverified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
数据集层级修订说明；受影响原始行尚未核定。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/locator -->
Cleaned_and_curated_data_Amphitherm.csv, rows 135, 1260, 1261, 1262, 1263, 1264, 1265, 1287, 1324, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1904, 1905, 1906, 1946, 1947, 1948, 1949, 1968, 1969, 1970, 1971, 1972, 1985, 1986, 1987, 1988, 1989, 2005, 2006, 2007, 2023, 2024, 2025, 2059, 2104, 2576, 2647, 2648, 2997, 2998, 2999, 3054, 3055, 3056, 3118, 3119, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3799, 4092, 4132; Metadata_AmphiTherm.xlsx
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/locator -->
Rana temporaria: XML Results1.1–1.3, Tables1–2 and Figure2 caption, Discussion2.1–2.4, Methods4.1–4.2 and4.4–4.5 read; supplementary specimen/sequence tables, original alignments, deposited reads and cited functional/behavioural experiments not independently reanalysed; no figures or deposited datasets reproduced
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en -->
Limited study sample; population-wide biology and contemporary concept equivalence are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh -->
有限研究样本；种群整体生物学与当代概念等同性未经独立认证。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/locator -->
Rana temporaria: Complete XMLMethods Sec3/Sec5–8 andResults Sec10–15,Tables1–5 andDiscussion Sec17–20 inspected. Table1 61rows extractedpreservingfamilyrowspans/accessionversions/unitlabels/technologycells. Supplementaryxlsx retrievedwithhash, all17sheets extractedread-only; S1name-accessioncrosschecks, S2/S3headers+populatedrowcounts, allS6labels/counts, selectedS8coefficients inspected. RemainingS4/S5/S7/S9–17 extractedbutnotfullyscientificallyinterpreted. SupplementaryPDFdownloaded, webcaptionsreadonly; nopixelinspection. No rawassembly/repeatlibrary/Rpipeline/voucherreview orfullarticle/conceptcertification.; no figures or deposited datasets reproduced
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en -->
Limited study sample; population-wide biology and contemporary concept equivalence are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh -->
有限研究样本；种群整体生物学与当代概念等同性未经独立认证。
<!-- /evo:text -->

## catalogue-profile / historicalTraitSource / readerScope

<!-- evo:text /records/catalogue-profile/historicalTraitSource/readerScope -->
The paragraphs explicitly describe the historical deposited source concept. They are not generalized to every member of the current species.
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/evidenceRead -->
Rana temporaria: XML Results1.1–1.3, Tables1–2 and Figure2 caption, Discussion2.1–2.4, Methods4.1–4.2 and4.4–4.5 read; supplementary specimen/sequence tables, original alignments, deposited reads and cited functional/behavioural experiments not independently reanalysed; no figures or deposited datasets reproduced
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/sectionEvidence/0/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / sourceConcept

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sourceConcept -->
Table1source Rana temporaria listedassemblyGCA_009801035.1; conflictingS1quantitativeassignments withheld, no rawgenomeauthentication
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/evidenceRead -->
Rana temporaria: Complete XMLMethods Sec3/Sec5–8 andResults Sec10–15,Tables1–5 andDiscussion Sec17–20 inspected. Table1 61rows extractedpreservingfamilyrowspans/accessionversions/unitlabels/technologycells. Supplementaryxlsx retrievedwithhash, all17sheets extractedread-only; S1name-accessioncrosschecks, S2/S3headers+populatedrowcounts, allS6labels/counts, selectedS8coefficients inspected. RemainingS4/S5/S7/S9–17 extractedbutnotfullyscientificallyinterpreted. SupplementaryPDFdownloaded, webcaptionsreadonly; nopixelinspection. No rawassembly/repeatlibrary/Rpipeline/voucherreview orfullarticle/conceptcertification.; no figures or deposited datasets reproduced
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
PMC12822217 XML Tab1 tbody row49 sourceRana temporaria accessionGCA_009801035.1; data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC12822217/12864_2025_12414_MOESM1_ESM.xlsx Table S1 A61:B61; TableS2/S3headers
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/scope/en -->
This authored section is supported only within the recorded source scope. Its explicit unknowns and conflicts remain unresolved.
<!-- /evo:text -->

## primaryStudyScopes / sectionEvidence / scope

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/1/sectionEvidence/4/scope/zh -->
本节作者内容仅在记录的来源范围内有支持；正文明确的未知项与冲突仍未解决。
<!-- /evo:text -->
