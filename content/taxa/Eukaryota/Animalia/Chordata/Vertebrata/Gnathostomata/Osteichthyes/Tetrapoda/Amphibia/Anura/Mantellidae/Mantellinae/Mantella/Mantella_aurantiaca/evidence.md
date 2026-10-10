---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Mantella aurantiaca Mocquard, 1900
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-27
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
      wild: The cited experiment distinguishes wild and captive populations; statements retain those sampled settings.
      domesticated: Domestication has not been assessed; captive-breeding status is not treated as domestication.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/736LN
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:736LN@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 736LN; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 736LN. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-c98c9464-13af-8b9a-a555-c13b8443437b
          metadataVariant: 0
          sourceKey: passos2017
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0181931
            accessedAt: 2026-09-24
            locator: "Abstract; Methodology: Study subject and Study sites"
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
        - referenceId: ref-3fdeb7f8-a581-8120-a607-7b086266d6d6
          metadataVariant: 0
          sourceKey: edwards2019mantellamicrohabitat
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.33256/hj29.4.207213
            rightsEvidenceUrl: https://kar.kent.ac.uk/77158/
            accessedAt: 2026-09-27
            locator: "Methods: Data Collection; Results; generalized linear mixed model, Table 2; Discussion."
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
            - rightsEvidenceUrl
            - rightsEvidenceLocator
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
        status: not-assessed
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - passos2017
            locator: Abstract, paragraphs 1–3; Methods, Study sites
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
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            sourceIds:
              - edwards2019mantellamicrohabitat
            locator: Results and Table 2; Discussion on between-site counts and survey-day conditions.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
            translationStatus: translated
            originalLanguage: en
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/textZh
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/3
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
  catalogue-profile:
    scientificName: Mantella aurantiaca Mocquard, 1900
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Mantella aurantiaca
      zh: Mantella aurantiaca
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
            targetPath: content/topics/research/AmphiBIO/Anura/Mantellidae/Mantella/Mantella_aurantiaca
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
            targetPath: content/topics/research/TadpoleTraits/Mantellidae/Mantella/Mantella_aurantiaca
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
            url: https://doi.org/10.6084/m9.figshare.21159229.v3
            targetPath: content/topics/research/AmphibianMorphology/Anura/Mantellidae/Mantella/Mantella_aurantiaca
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
            url: https://www.checklistbank.org/dataset/316115/taxon/736LN
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:736LN@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 736LN; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 736LN. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-c98c9464-13af-8b9a-a555-c13b8443437b
          metadataVariant: 0
          sourceKey: passos2017
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0181931
            accessedAt: 2026-09-24
            locator: "Abstract; Methodology: Study subject and Study sites"
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
        - referenceId: ref-3fdeb7f8-a581-8120-a607-7b086266d6d6
          metadataVariant: 0
          sourceKey: edwards2019mantellamicrohabitat
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.33256/hj29.4.207213
            rightsEvidenceUrl: https://kar.kent.ac.uk/77158/
            accessedAt: 2026-09-27
            locator: "Methods: Data Collection; Results; generalized linear mixed model, Table 2; Discussion."
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
            - rightsEvidenceUrl
            - rightsEvidenceLocator
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
        - referenceId: ref-fd9084a2-752b-4a3e-b904-e62d665705df
          metadataVariant: 0
          sourceKey: amphibian-morphology
          usage:
            locator: Anura.csv, rows 2983, 2984; Reference.csv rows 711
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
      path: content/topics/research/AmphiBIO/Anura/Mantellidae/Mantella/Mantella_aurantiaca
      sourceRowId: Anf3628
      identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
      bibliographyAlignment:
        status: unique-within-source-tuple
        method: Exact Order, Family, Genus and Species fields within the same deposited dataset; original row IDs retained separately.
        dataRowId: Anf3628
        bibliographyRowId: Anf3629
        sameIdNameMismatch: true
        originalSameIdScientificName: Guibemantis tornieri
        candidateBibliographyRowIds:
          - Anf3629
      readerScope:
        markdown: evidence.md
        field: /records/catalogue-profile/historicalTraitSource/readerScope
    additionalTraitSources:
      - kind: tadpole-traits-reader
        path: content/topics/research/TadpoleTraits/Mantellidae/Mantella/Mantella_aurantiaca
        scientificName: Mantella aurantiaca
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 1
      - kind: amphibian-morphology-reader
        path: content/topics/research/AmphibianMorphology/Anura/Mantellidae/Mantella/Mantella_aurantiaca
        scientificName: Mantella aurantiaca
        identityStatus: same-recorded-name-family-and-order-candidate; current-concept-equivalence-unresolved
        biologicalSections: 1
  amphibia-collection-placeholder:
    name:
      en: Mantella aurantiaca
      zh: Mantella aurantiaca
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
        id: 736LN
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00009.json.gz
          field: /records/284
          queryName: Mantella aurantiaca
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 47
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00045.json.gz
          field: /records/187
          queryName: Mantella aurantiaca aurantiaca
          queryKind: archived-synonym-or-higher-taxon
          queryComplete: true
          referenceCount: 0
          biologicalClaimsAssigned: false
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00045.json.gz
          field: /records/188
          queryName: Mantella aurantiaca rubra
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

# Mantella aurantiaca

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, source dataset and Amphibia classification verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 736LN. The biological paper covers sampled wild and captive males and does not establish all populations or a complete species concept.
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
Playback and phonotaxis study of wild and captive male M. aurantiaca from Mangabe, Mitsinjo Captive Breeding Centre and Chester Zoo; results do not estimate species-wide behaviour or reintroduction outcomes.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Passos LF, Garcia G, Young RJ (2017). Neglecting the call of the wild: Captive frogs like the sound of their own voice. PLOS ONE 12(7): e0181931. https://doi.org/10.1371/journal.pone.0181931. Claims here are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The publisher PDF identified in the Kent repository record. This dossier paraphrases article text and does not reproduce figures, tables, or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Field survey of presence/absence and microhabitat variables at ten forested sites near known breeding ponds in the Mangabe-Ranomena-Sahasarotra protected area, Moramanga district, eastern Madagascar. Claims retain the study's quadrat, site, and survey limitations; they do not establish a complete range, population abundance, or species-wide habitat preference.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Edwards WM, Griffiths RA, Bungard MJ, Rakotondrasoa EF, Razafimanahaka JH, Razafindraibe P, Andriantsimanarilafy RR, Randrianantoandro JC (2019). Microhabitat preference of the critically endangered golden mantella frog in Madagascar. Herpetological Journal 29(4):207-213. https://doi.org/10.33256/hj29.4.207213. Claims paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In this experiment, wild males showed similar phonotaxis responses to calls from wild and captive conspecifics, while Chester Zoo males responded more strongly to calls from their separately housed Chester Zoo conspecific group.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Sampled wild calls at Mangabe, Madagascar, and captive calls at Mitsinjo, Madagascar, and Chester Zoo, United Kingdom; the paper was published in 2017.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The study directly compared wild and captive male frogs; reported responses apply to the sampled animals and test conditions.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
2017 年实验比较野生和圈养雄性 Mantella aurantiaca 的趋声反应。野生雄性对野生与圈养同种鸣声的反应相近，而英国切斯特动物园的雄性对本园另行饲养的同种群体鸣声反应更强。野外鸣声来自马达加斯加 Mangabe，圈养鸣声来自马达加斯加 Mitsinjo 和切斯特动物园；结果仅对应所采样个体及实验条件。
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
Across ten forested sites near known breeding ponds in the Mangabe-Ranomena-Sahasarotra protected area of eastern Madagascar, Mantella aurantiaca detections in 1 m² quadrats were associated with leaf-litter cover, tree-root counts, and surface temperature. The fitted mixed model reported positive coefficients for litter cover and root count and a negative coefficient for surface temperature; the article's adjacent prose describes detections as lower in the densest-root plots and reports a mean of 1.73 roots in occupied quadrats. Because the root-count summaries differ by level of comparison within this study, this record does not infer one monotonic root preference. The authors also caution that counts could vary with survey-day activity and are not a direct estimate of abundance.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
The survey covered ten forested sites in the Mangabe-Ranomena-Sahasarotra protected area near Moramanga, eastern Madagascar; each contained or bordered known breeding ponds. The article states that nine sites were surveyed from 28 November to 12 December 2014 and the tenth in March 2014. Surveys made one visit per site between 07:00 and 14:00; quadrats were placed along transects around breeding pools.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Wild field observations at forest sites near breeding ponds; detections and modeled associations apply to these sampled sites, quadrats, and visits.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/textZh -->
在马达加斯加东部 Mangabe-Ranomena-Sahasarotra 保护区、靠近已知繁殖池的十处林地，1 m² 样方中的 Mantella aurantiaca 检出与落叶覆盖、树根数量及表面温度相关。混合模型中落叶覆盖和根数的系数为正、表面温度系数为负；相邻正文却将最密集根系样地的检出描述为较少，并报告有蛙样方平均有 1.73 条根。由于同一研究不同层次的根数比较不一致，本页不推断单调的根系偏好。九处样地在 2014 年 11 月 28 日至 12 月 12 日调查，第十处在同年 3 月调查；每处仅在 07:00–14:00 访问一次。作者提醒，计数会随调查日活动变化，不能直接视为丰度估计。
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This playback experiment does not establish responses across all wild populations, life stages or field settings, and it does not measure reintroduction success.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
Ten local sites and single visits do not establish habitat use across the species' range, seasons, life stages, or populations; detection counts are not population abundance estimates.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
The paper reports different root-count directions across its fitted model, within-site prose, and denser-root cross-site discussion; no single monotonic root preference is inferred.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/3 -->
The study does not assess diet, reproduction, long-term habitat change, current distribution, or conservation trend.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Ecology now includes one captive/wild-male playback experiment and one ten-site microhabitat field survey; neither establishes species-wide behavior or habitat use.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Morphology, life history, evolution, distribution, fossil evidence and conservation remain unassessed; the selected sources are not a systematic review of the accepted COL26.8 concept.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The field study reports root-count patterns at multiple analysis levels without a single monotonic direction; no population-wide habitat preference is inferred.
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
Playback and phonotaxis study of wild and captive male M. aurantiaca from Mangabe, Mitsinjo Captive Breeding Centre and Chester Zoo; results do not estimate species-wide behaviour or reintroduction outcomes.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/attribution -->
Passos LF, Garcia G, Young RJ (2017). Neglecting the call of the wild: Captive frogs like the sound of their own voice. PLOS ONE 12(7): e0181931. https://doi.org/10.1371/journal.pone.0181931. Claims here are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/licenseAppliesTo -->
The publisher PDF identified in the Kent repository record. This dossier paraphrases article text and does not reproduce figures, tables, or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope -->
Field survey of presence/absence and microhabitat variables at ten forested sites near known breeding ponds in the Mangabe-Ranomena-Sahasarotra protected area, Moramanga district, eastern Madagascar. Claims retain the study's quadrat, site, and survey limitations; they do not establish a complete range, population abundance, or species-wide habitat preference.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/attribution -->
Edwards WM, Griffiths RA, Bungard MJ, Rakotondrasoa EF, Razafimanahaka JH, Razafindraibe P, Andriantsimanarilafy RR, Randrianantoandro JC (2019). Microhabitat preference of the critically endangered golden mantella frog in Madagascar. Herpetological Journal 29(4):207-213. https://doi.org/10.33256/hj29.4.207213. Claims paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/locator -->
AmphiBIO_v1.csv row id Anf3628; column names retained in sourceFields; Metadata.pdf Table 1; bibliography AmphiBIO_v1_references.csv row id Anf3629 (exact within-source classification/name tuple)
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
Tadpole data 2025.4.21.xlsx; Data obtained from literature rows 3332, 3333, 3334, 5458; Picture measurement data rows none; Readme rows 6–50
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

## catalogue-profile / historicalTraitSource / readerScope

<!-- evo:text /records/catalogue-profile/historicalTraitSource/readerScope -->
The paragraphs explicitly describe the historical deposited source concept. They are not generalized to every member of the current species.
<!-- /evo:text -->
