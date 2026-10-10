---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Ambystoma mexicanum (Shaw & Nodder, 1798)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-26
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
      domesticated: Laboratory breeding is not treated as domestication; domestication history has not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/CQ4M
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:CQ4M@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage CQ4M; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage CQ4M. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-62ad50f3-355b-884e-a9ab-2a108a62cbd4
          metadataVariant: 0
          sourceKey: nowoshilow2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1038/nature25458
            accessedAt: 2026-09-24
            locator: "Abstract; Methods: genomic DNA preparation; Results: Reduced Pax-family complement"
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
        - referenceId: ref-bb06778b-4d70-8271-a63a-4a34eb321f1f
          metadataVariant: 0
          sourceKey: ramos2025axolotlmovement
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0314257
            accessedAt: 2026-09-26
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314257
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
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
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - scope
    facets:
      morphology:
        status: not-assessed
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - ramos2025axolotlmovement
            locator: Abstract; Methods, Study areas and Data collection; Results, Home range size.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            sourceIds:
              - nowoshilow2018
            locator: Abstract; Methods, genomic DNA preparation; Results, Reduced Pax-family complement
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
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
  catalogue-profile:
    scientificName: Ambystoma mexicanum (Shaw & Nodder, 1798)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Ambystoma mexicanum
      zh: Ambystoma mexicanum
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
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceIds/1
        sourceFields:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceFields/0
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceFields/1
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
        sourceRevisionReview:
          sourceUrl:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceRevisionReview/sourceUrl
          sourceVersion:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceRevisionReview/sourceVersion
          status:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/sourceRevisionReview/status
          affectedFieldScope:
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/3/sourceRevisionReview/affectedFieldScope/0
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/3/sourceRevisionReview/affectedFieldScope/1
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/3/sourceRevisionReview/affectedFieldScope/2
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/3/sourceRevisionReview/affectedFieldScope/3
            - markdown: page.en.md
              field: /records/catalogue-profile/sections/3/sourceRevisionReview/affectedFieldScope/4
          speciesLevelCorrectionsCaptured: false
          correctedValuesSubstituted: false
          allOriginalValuesDeclaredWrong: false
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/5/sourceFields/3
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/7/sourceIds/3
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
            targetPath: content/topics/research/AmphiBIO/Caudata/Ambystomatidae/Ambystoma/Ambystoma_mexicanum
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
            url: https://doi.org/10.6084/m9.figshare.21159229.v3
            targetPath: content/topics/research/AmphibianMorphology/Caudata/Ambystomatidae/Ambystoma/Ambystoma_mexicanum
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/7/readingLinks/1/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/7/readingLinks/1/label/zh
          - kind:
              markdown: page.en.md
              field: /records/catalogue-profile/sections/7/readingLinks/2/kind
            url: https://github.com/p-pottier/AmphiTherm
            targetPath: content/topics/research/AmphiTherm/Caudata/Ambystomatidae/Ambystoma/Ambystoma_mexicanum
            label:
              en:
                markdown: page.en.md
                field: /records/catalogue-profile/sections/7/readingLinks/2/label/en
              zh:
                markdown: page.zh.md
                field: /records/catalogue-profile/sections/7/readingLinks/2/label/zh
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
        sourceReaderKind:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/9/sourceReaderKind
        sourceRowId: "3783"
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
        sourceRowNumber: 3458
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
        text:
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
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
            url: https://www.checklistbank.org/dataset/316115/taxon/CQ4M
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:CQ4M@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage CQ4M; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage CQ4M. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-62ad50f3-355b-884e-a9ab-2a108a62cbd4
          metadataVariant: 0
          sourceKey: nowoshilow2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1038/nature25458
            accessedAt: 2026-09-24
            locator: "Abstract; Methods: genomic DNA preparation; Results: Reduced Pax-family complement"
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
        - referenceId: ref-bb06778b-4d70-8271-a63a-4a34eb321f1f
          metadataVariant: 0
          sourceKey: ramos2025axolotlmovement
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0314257
            accessedAt: 2026-09-26
            locator:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314257
            attribution:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope
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
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - scope
        - referenceId: ref-49e06cbd-4c4a-4a7e-9b4c-07e576ee72c8
          metadataVariant: 0
          sourceKey: itis-distribution
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
            - url
            - doi
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
        - referenceId: ref-6db7bceb-2df2-46ef-90e7-a43ed817725b
          metadataVariant: 0
          sourceKey: amphibio
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
            locator: Caudata.csv, rows 9, 10; Reference.csv rows 4169
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
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh
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
            locator: Cleaned_and_curated_data_Amphitherm.csv, rows 3458, 3459; Metadata_AmphiTherm.xlsx
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
        - referenceId: ref-e350cd85-2c89-4e37-a20d-d60210d83084
          metadataVariant: 0
          sourceKey: primary-pmc10571319-cq4m
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
    distributionSourceEvidence:
      sourceDatasetId: 2144
      sourceTsn: "586244"
      recordedColSourceLink: https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=586244
      identityMethod:
        markdown: evidence.md
        field: /records/catalogue-profile/distributionSourceEvidence/identityMethod
      originalSourceAuthorship: (Shaw and Nodder, 1798)
      colAuthorship: (Shaw & Nodder, 1798)
      exactAuthorship: false
      equivalentAuthorshipRepresentation: true
      nameLocator:
        datasetKey: 2144
        archive: checklistbank-2144-itis-2026-08-26.zip
        member: Name.tsv
        row: 357749
        key: "586244"
      rows:
        - sourceMember: Distribution.tsv
          fields:
            taxonID: "586244"
            area: Middle America
            gazetteer: text
            status: "NULL"
            referenceID: "NULL"
          locator:
            datasetKey: 2144
            archive: checklistbank-2144-itis-2026-08-26.zip
            member: Distribution.tsv
            row: 96830
            key: 586244|Middle America|text|NULL|NULL
    historicalTraitSource:
      path: content/topics/research/AmphiBIO/Caudata/Ambystomatidae/Ambystoma/Ambystoma_mexicanum
      sourceRowId: Anf5993
      identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
      bibliographyAlignment:
        status: unique-within-source-tuple
        method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
        dataRowId: Anf5993
        bibliographyRowId: Anf5988
        sameIdNameMismatch: true
        originalSameIdScientificName: Ambystoma silvense
        candidateBibliographyRowIds:
          - Anf5988
      readerScope:
        markdown: evidence.md
        field: /records/catalogue-profile/historicalTraitSource/readerScope
    additionalTraitSources:
      - kind: amphibian-morphology-reader
        path: content/topics/research/AmphibianMorphology/Caudata/Ambystomatidae/Ambystoma/Ambystoma_mexicanum
        scientificName: Ambystoma mexicanum
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 1
      - kind: amphitherm-source-reader
        path: content/topics/research/AmphiTherm/Caudata/Ambystomatidae/Ambystoma/Ambystoma_mexicanum
        scientificName: Ambystoma mexicanum
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 1
    primaryStudyScopes:
      - doi: 10.1186/s42523-023-00271-7
        referenceId: ref-e350cd85-2c89-4e37-a20d-d60210d83084
        sourceKey: primary-pmc10571319-cq4m
        sourceFile: data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC10571319/article.xml
        sourceConcept: Ambystoma mexicanum
        evidenceRead:
          markdown: evidence.md
          field: /records/catalogue-profile/primaryStudyScopes/0/evidenceRead
        contemporaryConceptEquivalence: not-independently-certified
        rightsBoundary:
          license: CC BY 4.0
          licenseUrl: https://creativecommons.org/licenses/by/4.0/
          attribution: Own factual synthesis and Chinese translation of the original study; no figures reproduced.
        sectionEvidence:
          - sectionOrdinal: 0
            topic: ecology
            heading:
              en: Outdoor mesocosms supplied the axolotl microbiome samples
              zh: 室外中宇宙提供美西螈微生物样本
            referenceId: ref-e350cd85-2c89-4e37-a20d-d60210d83084
            sourceKey: primary-pmc10571319-cq4m
            locator: PMC10571319 reading-sections section 1 (Sec8), paragraphs 1–2
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
              en: Sampling environment and climatic grids have different scopes
              zh: 采样环境与气候栅格的范围不同
            referenceId: ref-e350cd85-2c89-4e37-a20d-d60210d83084
            sourceKey: primary-pmc10571319-cq4m
            locator: PMC10571319 reading-sections section 1 (Sec8), paragraphs 0 and 4
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
  amphibia-collection-placeholder:
    name:
      en: Ambystoma mexicanum
      zh: Ambystoma mexicanum
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
        id: CQ4M
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00000.json.gz
          field: /records/245
          queryName: Ambystoma mexicanum
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 2557
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/472
          queryName: Gyrinus mexicanus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 2601
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/473
          queryName: Siren pisciformis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/474
          queryName: Triton mexicanus
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/475
          queryName: Philhydrus pisciformis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/476
          queryName: Hypochton pisciformis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/477
          queryName: Siredon axolotl
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/478
          queryName: Axolotus pisciformis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/479
          queryName: Sirenodon pisciformis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/480
          queryName: Stegoporus pisciformis
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/481
          queryName: Stegoporus mexicanum
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/482
          queryName: Hemitriton mexicanum
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/483
          queryName: Axolotes guttata
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/484
          queryName: Siren axolotl
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 1
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/485
          queryName: Amblystoma weismanni
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00040.json.gz
          field: /records/486
          queryName: Siredon edule
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/106
          queryName: Ambystoma edule
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/423
          queryName: Siredon alba
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00049.json.gz
          field: /records/424
          queryName: Siredon humboldtii
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00052.json.gz
          field: /records/421
          queryName: "Herpetofauna Mexicana: Lista anotada de las especies de anfibios y reptiles de México, cambios taxonómicos recientes, y nuevas especies"
          queryKind: archived-bibliography
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

# Ambystoma mexicanum

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, source dataset and Amphibia classification verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage CQ4M only. The evolutionary evidence is a single laboratory genome and its associated experiments; the ecology evidence is a short VHF post-release study of 18 captive-bred axolotls at two aquatic sites in southern Mexico City. These observations do not constitute a species-wide or range-wide synthesis.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The ecology study released captive-bred animals and followed them for short periods at an artificial wetland and a restored chinampa in southern Mexico City. Those post-release observations are not treated as wild-born population traits or evidence of long-term establishment. The genomic source used laboratory material.
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
Article content except third-party material identified as excluded in individual credit lines; claims paraphrase the article text, not figures or excluded media.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Whole-genome assembly and comparative/evolutionary analysis from a three-year-old d/d adult male axolotl, with follow-up Pax7 gene-editing results; not a survey of population variation.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Nowoshilow S, Schloissnig S, Fei JF, et al. (2018). The axolotl genome and the evolution of key tissue formation regulators. Nature 554: 50–55. https://doi.org/10.1038/nature25458. Claims here are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article content covered by its license; any third-party exclusions remain governed by individual credit lines. This record paraphrases article text and reproduces no figures or tables.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract for site-level mean home-range comparison; Methods §§Study areas, Ethics statement, Study species and transmitters, and Data collection for locations, captive origin, sample sizes and telemetry dates; Results §Home range size for method and estimates.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Ramos AG, Mena H, Schneider D, Zambrano L (2025). Movement ecology of captive-bred axolotls in restored and artificial wetlands: Conservation insights for amphibian reintroductions and translocations. PLoS ONE 20(4):e0314257. https://doi.org/10.1371/journal.pone.0314257. Claim paraphrased; no figures or tables reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
VHF telemetry study of 18 laboratory-born and captive-raised axolotls released to two aquatic sites in southern Mexico City. The claim is limited to post-release home-range estimates at these sites and study windows; it is not a range-wide ecology estimate or evidence of a self-sustaining wild population.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
After release of 18 captive-bred axolotls into two aquatic sites in southern Mexico City, VHF telemetry produced total MCP home-range estimates averaging 2,747 m² for the eight tracked at the artificial La Cantera Oriente wetland and 382 m² for the ten tracked at a restored chinampa in Lake Xochimilco; the difference was statistically significant (p < 0.001).
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
18 只圈养繁殖的美西螈被放归到墨西哥城南部两处水域后，VHF 遥测所得总 MCP 家域估计值中，拉坎特拉东方人工湿地 8 只个体的平均值为 2,747 m²，索奇米尔科湖一处修复 chinampa（水上农田湿地）10 只个体的平均值为 382 m²；差异具有统计学显著性（p < 0.001）。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Two aquatic sites in southern Mexico City. Eight animals at La Cantera Oriente were tracked from 2017-10-27 to 2017-12-07; ten animals at a restored Lake Xochimilco chinampa were released on 2018-03-12 and monitored through 2018-04-20. VHF telemetry; sites and seasons differed.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
All 18 study animals were born and raised in captivity before release into the study wetlands. The short post-release monitoring does not establish wild-born ecology, long-term establishment, or a self-sustaining population.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This short, small-sample post-release study does not establish range-wide habitat use, seasonal or geographic variation, a wild-born baseline, long-term survival and reproduction, or whether site differences caused the home-range contrast.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The authors reported that the assembled axolotl genome lacks Pax3, and that mutation of its Pax7 paralogue produced a phenotype similar to Pax3- or Pax7-mutant mice; the genomic sample came from one three-year-old d/d adult male.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
A single laboratory-bred d/d male supplied genomic DNA; the 2018 article presents comparative genomic and gene-editing results, not a population survey.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
The source concerns laboratory material and experimental mutants; it does not establish the frequency of these genomic traits across wild populations.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
2018 年研究报告，所组装的美西螈基因组缺少 Pax3；其旁系同源基因 Pax7 发生突变后，表型与 Pax3 或 Pax7 突变小鼠相似。基因组 DNA 来自一只三岁的实验室繁殖 d/d 成年雄性。这一单个基因组和编辑实验不能说明野生种群中相关性状的频率，也不能确定变化发生的演化时间。
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
One genome assembly and associated experiments do not resolve genomic variation across the species, the evolutionary timing of the reported changes, or broader evolutionary history.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The record combines a single-individual laboratory-genomics study and short-term post-release ecology from two captive-bred samples; morphology, life history, distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Systematic literature coverage, wild-born ecology, long-term population outcomes and variation across the accepted species concept remain incomplete.
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
Article content except third-party material identified as excluded in individual credit lines; claims paraphrase the article text, not figures or excluded media.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope -->
Whole-genome assembly and comparative/evolutionary analysis from a three-year-old d/d adult male axolotl, with follow-up Pax7 gene-editing results; not a survey of population variation.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/attribution -->
Nowoshilow S, Schloissnig S, Fei JF, et al. (2018). The axolotl genome and the evolution of key tissue formation regulators. Nature 554: 50–55. https://doi.org/10.1038/nature25458. Claims here are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article content covered by its license; any third-party exclusions remain governed by individual credit lines. This record paraphrases article text and reproduces no figures or tables.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/locator -->
Abstract for site-level mean home-range comparison; Methods §§Study areas, Ethics statement, Study species and transmitters, and Data collection for locations, captive origin, sample sizes and telemetry dates; Results §Home range size for method and estimates.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/attribution -->
Ramos AG, Mena H, Schneider D, Zambrano L (2025). Movement ecology of captive-bred axolotls in restored and artificial wetlands: Conservation insights for amphibian reintroductions and translocations. PLoS ONE 20(4):e0314257. https://doi.org/10.1371/journal.pone.0314257. Claim paraphrased; no figures or tables reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope -->
VHF telemetry study of 18 laboratory-born and captive-raised axolotls released to two aquatic sites in southern Mexico City. The claim is limited to post-release home-range estimates at these sites and study windows; it is not a range-wide ecology estimate or evidence of a self-sustaining wild population.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/locator -->
Name.tsv ID 586244, row 357749; Distribution.tsv rows 96830; pinned archive SHA-256 d844f03071ea8ddf144d11098543b4066cb5f80d23263beb8f088d144a99b906
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Textual geographic labels in the exact source TSN record. No inferred origin status, complete geographic range, contemporary population or species-concept equivalence beyond the recorded source linkage.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
确切来源 TSN 记录中的文字地理标签；不推断原生状态、完整分布、当代种群，也不将所记来源链接推广为额外的物种概念等同声明。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/locator -->
AmphiBIO_v1.csv row id Anf5993; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf5988 (exact within-source classification/name tuple)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/en -->
The Frost 2011 source concept, compilation-wide variable definitions and deposited values. Current species-concept equivalence unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/4/usage/scope/zh -->
Frost 2011 来源概念、汇编的变量定义及存档值；与当前物种概念的等同性未确定。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/en -->
Deposited source concept, available measurement material and original bibliography. Absolute units and current concept equivalence remain unresolved.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/5/usage/scope/zh -->
存档来源概念、可用测量材料及原书目；绝对单位与当前概念等同性仍未解决。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/en -->
Dataset-wide revision notice; affected original rows remain unverified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/6/usage/scope/zh -->
数据集层级修订说明；受影响原始行尚未核定。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/en -->
Pinned curated thermal-estimate rows with method and life-stage scope; source concepts are independent of current catalogue concepts.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/7/usage/scope/zh -->
固定清理版本的热生理估计行，保留方法和发育阶段范围；来源概念与当前目录概念分别处理。
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/8/usage/locator -->
Ambystoma mexicanum: Named host sample provenance and comparative microbiome methods only; pooled statistics remain pooled, no supplementary sample allocations inferred; no figures or deposited datasets reproduced
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/8/usage/scope/en -->
Limited study sample; population-wide biology and contemporary concept equivalence are not independently certified.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/8/usage/scope/zh -->
有限研究样本；种群整体生物学与当代概念等同性未经独立认证。
<!-- /evo:text -->

## catalogue-profile / distributionSourceEvidence / identityMethod

<!-- evo:text /records/catalogue-profile/distributionSourceEvidence/identityMethod -->
COL-supplied direct source TSN plus exact archived scientificName and species rank; authorship representation normalization limited to NFC, whitespace and and/& conjunction.
<!-- /evo:text -->

## catalogue-profile / historicalTraitSource / readerScope

<!-- evo:text /records/catalogue-profile/historicalTraitSource/readerScope -->
The paragraphs explicitly describe the historical deposited source concept. They are not generalized to every member of the current species.
<!-- /evo:text -->

## catalogue-profile / primaryStudyScopes / evidenceRead

<!-- evo:text /records/catalogue-profile/primaryStudyScopes/0/evidenceRead -->
Ambystoma mexicanum: Named host sample provenance and comparative microbiome methods only; pooled statistics remain pooled, no supplementary sample allocations inferred; no figures or deposited datasets reproduced
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
