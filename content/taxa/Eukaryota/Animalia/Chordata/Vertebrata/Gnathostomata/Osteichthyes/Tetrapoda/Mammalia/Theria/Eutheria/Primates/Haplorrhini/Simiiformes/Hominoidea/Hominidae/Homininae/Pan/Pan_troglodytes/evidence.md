---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pan troglodytes (Blumenbach, 1775)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 黑猩猩
      en: Chimpanzee
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-57ae61d4-ebce-8f58-a956-8cff610f14e0
          metadataVariant: 0
          sourceKey: brysonMorrison2017
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-91f9de53-9da9-8706-a1b1-1368cca08cb8
          metadataVariant: 0
          sourceKey: walker2018
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-f6bccf3a-fda5-8936-afdd-79de74513297
          metadataVariant: 0
          sourceKey: malherbe2024
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/4C92G
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Pan troglodytes (Blumenbach, 1775)
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
      parentChain:
        - id: 6D2G
          name: Pan
          authorship: Oken, 1816
          rank: genus
          status: accepted
        - id: JPH
          name: Homininae
          authorship: Gray, 1825
          rank: subfamily
          status: accepted
        - id: 6256T
          name: Hominidae
          authorship: Gray, 1825
          rank: family
          status: accepted
        - id: 58L
          name: Hominoidea
          authorship: Gray, 1825
          rank: superfamily
          status: accepted
        - id: 4PM
          name: Simiiformes
          authorship: Haeckel, 1866
          rank: infraorder
          status: accepted
        - id: 4DT
          name: Haplorrhini
          authorship: Pocock, 1918
          rank: suborder
          status: accepted
        - id: 3W7
          name: Primates
          authorship: Linnaeus, 1758
          rank: order
          status: accepted
        - id: LG
          name: Eutheria
          authorship: Gill, 1872
          rank: infraclass
          status: accepted
        - id: 6226C
          name: Theria
          authorship: Parker & Haswell, 1897
          rank: subclass
          status: accepted
        - id: 6224G
          name: Mammalia
          authorship: Linnaeus, 1758
          rank: class
          status: accepted
        - id: 9CK8W
          name: Tetrapoda
          authorship: null
          rank: megaclass
          status: accepted
        - id: 8VVWB
          name: Osteichthyes
          authorship: null
          rank: parvphylum
          status: accepted
        - id: 8V4V5
          name: Gnathostomata
          authorship: null
          rank: infraphylum
          status: accepted
        - id: 8V4V3
          name: Vertebrata
          authorship: null
          rank: subphylum
          status: accepted
        - id: CH2
          name: Chordata
          authorship: null
          rank: phylum
          status: accepted
        - id: N
          name: Animalia
          authorship: null
          rank: kingdom
          status: accepted
        - id: CS5HF
          name: Eukaryota
          authorship: (Chatton, 1925) Whittaker & Margulis, 1978
          rank: domain
          status: accepted
      sourceIds:
        - col268
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
      fossil: No fossil evidence is assessed in this record.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 4
          sourceKey: col268
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4C92G
            version: COL26.8; release issued 2026-08-20; dataset DOI 10.48580/dgywk
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-6b9ed236-4cf9-8363-a276-02d8bdeb3639
          metadataVariant: 0
          sourceKey: barrie2022
          usage:
            locator: Abstract; Methods, “Genomic Data”; Results, “Introgression from Western into Eastern Chimpanzees”; Table 1 and Figure 4.
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-c82a2320-5048-8711-a360-d378177b63c9
          metadataVariant: 0
          sourceKey: brysonMorrison2017
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1007/s10764-016-9947-4
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://kar.kent.ac.uk/60186/
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
        - referenceId: ref-0822d899-4785-8ccf-ae63-0405bfa5178b
          metadataVariant: 0
          sourceKey: strindberg2018
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo
            stableId: doi:10.1126/sciadv.aar2964
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            accessedAt: 2026-09-25
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - locator
            - license
            - rightsHolder
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - licenseVersion
            - licenseUrl
            - licenseAssessment
            - scope
            - accessedAt
        - referenceId: ref-264b486a-a2ca-8a3e-a236-b2d1540276b8
          metadataVariant: 0
          sourceKey: curry2023
          usage:
            licenseAppliesTo: The article text; this dossier paraphrases reported results and reproduces no table, figure, or individual-level data.
            stableId: doi:10.1002/zoo.21718
            accessedAt: 2026-09-25
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://researchportal.northumbria.ac.uk/files/70744231/Curry_2021_Zoo_Biology_Manuscript_Repository.pdf
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution
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
        - referenceId: ref-07587278-61f1-8574-a092-60a0077b80d7
          metadataVariant: 0
          sourceKey: walker2018
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/licenseAppliesTo
            stableId: doi:10.1016/j.jhevol.2017.10.010
            accessedAt: 2026-09-25
            locator: Abstract; Methods, §2.1 Study site and subjects; Results, §3 Maturation milestones, Table 2 and Figure 1; Discussion.
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5819610/
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/scope
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
        - referenceId: ref-a60e1c17-13ee-84c4-a363-cd3f477bc91d
          metadataVariant: 0
          sourceKey: humle2016
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/6/usage/licenseAppliesTo
            stableId: doi:10.2305/IUCN.UK.2016-2.RLTS.T15933A17964454.en
            accessedAt: 2026-09-25
            locator: Assessment Information; Geographic Range, Range Description (PDF p. 2); assessment record and errata version.
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://dspace.stir.ac.uk/handle/1893/26837
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/6/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/6/usage/scope
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
        - referenceId: ref-4113d116-728b-8188-aeec-9e7a06777ab9
          metadataVariant: 0
          sourceKey: malherbe2024
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/7/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pbio.3002609
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/7/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3002609
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/7/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/7/usage/scope
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - curry2023
            locator: Abstract; Results, §3.1.1 Adult body mass and §3.1.2 Growth parameters; Tables 2–3 and Figure 1.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - walker2018
            locator: Abstract; Results, §3 Maturation milestones, Table 2 and Figure 1; Discussion.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - malherbe2024
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/1/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/1
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
              - brysonMorrison2017
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - malherbe2024
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
            sourceIds:
              - barrie2022
            locator: Methods, “Genomic Data”; Abstract; Results, “Introgression from Western into Eastern Chimpanzees”; Table 1.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - humle2016
            locator: Geographic Range, Range Description (assessment PDF p. 2).
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - strindberg2018
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/1/textZh
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - humle2016
            locator: Assessment Information; assessment record e.T15933A17964454.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/1/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/1
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
  atlas-node:
    name: Pan troglodytes
    commonName: Chimpanzee
    commonNameZh: 黑猩猩
    rank: species
    taxonId: ""
    colUsageId: 4C92G
    colDatasetId: "2144"
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    firstAppearance: 20
    lastAppearance: 0
    rangeEvidenceLevel: withheld-no-range-evidence
---

# Pan troglodytes

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
CC BY 4.0 野外研究；仅支持几内亚 Bossou 一个群体、2012–2013 年的活动与栖地使用。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
CC BY 4.0 field study; supports activity and habitat use for one Bossou community in Guinea during 2012–2013 only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
贡贝长期野外记录中的已知年龄雌性样本；首次生育含较小、删失子样本。来源为 CC BY-NC-ND 4.0；本页只作归属明确的事实转述。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Known-age female sample from long-term Gombe field records; first-birth timing uses a smaller censored subset. Source is CC BY-NC-ND 4.0; this guide uses attributed factual paraphrase only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
CC BY 4.0 横断面视频研究；证据限于科特迪瓦 Taï 三个相邻群体的棍棒任务。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
CC BY 4.0 cross-sectional video study; evidence is restricted to stick tasks in three neighboring communities at Taï, Côte d’Ivoire.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Pinned accepted name, authorship, rank, and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage record queried at ChecklistBank dataset 316115; name, authorship, species rank, accepted status, source sector, and parent chain were checked from the taxon endpoint.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 usage 4C92G only. The full accepted parent chain to Eukaryota is pinned to release 2026-08-20. Evidence includes population-genomic models, one Bossou community, captive growth cohorts, one Gombe female life-history sample, a dated Red List range/status assessment, and cross-sectional Taï tool-use observations of P. t. verus. These do not form a current range-wide synthesis.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Wild ecology evidence includes one P. t. verus community at Bossou and stick-based extractive foraging in three neighboring P. t. verus communities at Taï; life-history estimates concern Gombe females; genomic and historical conservation claims retain their original sample/version scopes. No claim is generalized to every population.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
No domesticated observations are included. Morphology/growth evidence concerns captive and sanctuary-housed chimpanzees; domestication has not been assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8, ChecklistBank release dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Taxon usage 4C92G and its source endpoint; sourceDatasetKey 2144, sourceId ITIS TSN 573082, sectorKey 1508; name, authorship, rank, status, parentId, and ancestor records are recorded in identity.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name Pan troglodytes, authorship (Blumenbach, 1775), species rank, accepted status, ITIS source dataset 2144, source sector 1508, and COL26.8 parent chain only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Site-pattern analysis of whole-genome data from all five extant Pan lineages; model-based deep population history, not a species-wide census or consensus phylogeny.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The publisher article text; this dossier paraphrases findings and reproduces no figures, tables, or supplementary material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Methods, Behavioral Observations and Feeding Event Locations; Results, Habitat Use and Preferences and Distance of Feeding Events in Noncultivated Habitat Relative to Cultivated Fields and Routes; Table II.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Bryson-Morrison N, Tzanopoulos J, Matsuzawa T, Humle T. (2017). Activity and Habitat Use of Chimpanzees (Pan troglodytes verus) in the Anthropogenic Landscape of Bossou, Guinea, West Africa. International Journal of Primatology 38:282–302. https://doi.org/10.1007/s10764-016-9947-4. CC BY 4.0. Claims are paraphrased; no figures, tables, or supplementary material are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Community-level field study of wild P. t. verus at Bossou, Guinea. Daily follows were conducted for up to six hours from April 2012 to March 2013; 10 adult focal individuals were sampled. Feeding-event distance analyses excluded crop foraging inside cultivated fields.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseEvidenceLocator -->
Article front matter, Copyright and License information: © 2018 The Authors; explicitly states CC BY-NC 4.0 and noncommercial reuse conditions.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
Article text; separately credited third-party material may be excluded. Claims are paraphrased; no figure or table is reused.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Abstract; Results, Abundance estimates and Table 1; Discussion, protected-area network estimate; Methods, nest surveys and spatial models.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Strindberg S., Maisels F., Williamson E.A. et al. (2018). Science Advances 4(4):eaar2964. https://doi.org/10.1126/sciadv.aar2964. CC BY-NC 4.0. Claims paraphrased; no figures or tables reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Primary source supports one historical, model-based conservation result for the central chimpanzee subspecies only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/locator -->
Abstract; Methods, data collection for African sanctuary, zoological, and research populations; Results, §§3.1.1–3.1.2; Tables 2–3 and Figure 1.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Curry BA et al. (2023). Zoo Biology 42(1):98–106. https://doi.org/10.1002/zoo.21718. CC BY 4.0. Claims are paraphrased; no tables, figures, or individual-level data are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Body-mass and growth comparisons across African wildlife sanctuaries, zoological institutions, and research facilities. Subspecies were mixed or unavailable in the captive cohorts; this is not a wild-population body-size estimate.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/licenseAppliesTo -->
The article text; this dossier paraphrases the study results and reproduces no figures, tables, or article text beyond factual summaries.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/attribution -->
Walker KK, Walker CS, Goodall J, Pusey AE. (2018). Journal of Human Evolution 114:131–140. https://doi.org/10.1016/j.jhevol.2017.10.010. CC BY-NC-ND 4.0. Claims are paraphrased; no figures or tables are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/scope -->
A life-history study of 36 known-age wild female chimpanzees at Gombe National Park, Tanzania; first-birth timing was available for a smaller subset and was subject to censoring and dispersal-related sample bias.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/6/usage/licenseAppliesTo -->
The assessment text and map. This dossier paraphrases the assessment's range and category only and does not reproduce its map or wording; commercial redistribution requires separate permission.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/6/usage/attribution -->
Humle T, Maisels F, Oates JF, Plumptre A, Williamson EA. (2016; errata version published 2018). Pan troglodytes. The IUCN Red List of Threatened Species 2016: e.T15933A17964454. https://doi.org/10.2305/IUCN.UK.2016-2.RLTS.T15933A17964454.en. Assessment statements are paraphrased; no map is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/6/usage/scope -->
Species-level IUCN assessment frozen to its 2016 version (errata published in 2018). Its range and Endangered category are historical assessment findings, not verified as the current 2026 assessment.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/7/usage/licenseAppliesTo -->
Article text. Claims are paraphrased; no figure, table, image, or supporting dataset is copied. Third-party credit-line material is excluded.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/7/usage/locator -->
Abstract; Materials and methods §(b) Study site, subjects, and data collection; §(d) Video coding; Results, Development of hand grips; Accuracy of stick insertion depending on hand grip type used; Fitting specific actions to specific food tasks through ontogeny; Discussion.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/7/usage/attribution -->
Malherbe M, Samuni L, Ebel SJ, Kopp KS, Crockford C, Wittig RM. (2024). PLOS Biology 22(5):e3002609. https://doi.org/10.1371/journal.pbio.3002609. CC BY 4.0. Claims are paraphrased; no figures or tables are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/7/usage/scope -->
Cross-sectional video study of 70 habituated wild western chimpanzees (Pan troglodytes verus) from three neighboring communities at Taï National Park, Côte d’Ivoire; 135 videos and 1,460 stick-use events collected from November 2013 to April 2020. Behavioral outcomes are limited to observed stick-based extractive-foraging tasks.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Across the study's three captive settings, adult zoological and research chimpanzees had greater body mass than African sanctuary chimpanzees in both sexes; sanctuary chimpanzees also had slower estimated growth rates. The cohorts included mixed or unknown subspecies, and care-setting differences cannot be treated as wild-species morphology or as a subspecies comparison.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
在该研究比较的三类圈养环境中，动物园和研究机构的成年黑猩猩（雌雄均如此）体重高于非洲野生动物救护中心个体；救护中心个体的估计生长速度也较慢。队列包含不同或未知亚种，照护环境差异不能当作野生全种形态或亚种间比较。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Three captive cohorts: 298 chimpanzees from African sanctuaries, 1,030 zoological chimpanzees, and 442 research-facility chimpanzees. Adult comparisons were adjusted for age; the research data repository was accessed in November 2020.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Captive and sanctuary-housed animals only; no free-ranging wild body-mass cohort is measured in this comparison.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The source measures body mass and growth in captive settings only; wild body size, skeletal and external morphology, geographic variation, and subspecies-specific patterns remain unassessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Among 36 known-age wild female chimpanzees studied at Gombe National Park, mean age at sexual maturity was 11.5 years (range 8.5–13.9), and mean age at first birth was 14.9 years (range 11.1–22.1). First-birth estimates came from a smaller, censored subset and were likely biased low because non-dispersing females were overrepresented; these are population-specific estimates, not fixed species constants.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
在贡贝国家公园研究的 36 只已知年龄野生雌性黑猩猩中，性成熟平均年龄为 11.5 岁（范围 8.5–13.9 岁），首次生育平均年龄为 14.9 岁（范围 11.1–22.1 岁）。首次生育估计来自更小且包含删失记录的子样本；由于未迁出的雌性比例偏高，估计值可能偏低。这些是特定种群的估计，不是全物种固定常数。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Gombe National Park, western Tanzania; known-age wild females followed across long-term community records. The study sample contained 36 females for maturation analysis; first-birth timing was known for fewer animals and includes censored observations.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Free-ranging wild females; no captive reproductive cohort or fossil inference is included.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/text -->
In a cross-sectional video sample of 70 wild western chimpanzees (Pan troglodytes verus) from three neighboring Taï National Park communities, 1,460 stick-use events were recorded in 135 videos collected from November 2013 to April 2020. The model for stick-insertion grips predicted that the multi-digit grip became predominant at about 5.2 years of age and had a 98% predicted probability of use by age 15. Only three females from one group contributed observations above age 45; this task-specific age pattern does not establish a universal species-wide developmental trajectory or a cognitive cause.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/textZh -->
在对 Taï 国家公园三个相邻野生西部黑猩猩群体（Pan troglodytes verus）进行的横断面视频研究中，研究者在 2013 年 11 月至 2020 年 4 月采集的 135 段视频里记录了 70 只个体的 1,460 次棍棒使用事件。棍棒插入动作的模型预测，多指握法约在 5.2 岁成为最常见握法，到 15 岁时预测使用概率为 98%。45 岁以上的数据仅来自一个群体的 3 只雌性；这一特定任务的年龄模式不能证明全物种普遍的发育轨迹或认知成因。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/locator -->
Abstract; Methods §(b); Results, Development of hand grips, especially model predictions for ages 5.18 and 15 years; Discussion; limitation on observations above 45 years.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/placeTimeScope -->
Three neighboring communities (North, East, South) of habituated wild western chimpanzees at Taï National Park, Côte d’Ivoire; November 2013–April 2020. The 135 coded videos represented 70 individuals aged 1–54 years and 1,460 stick-use events; age data are cross-sectional, and only three females in one group contributed observations above 45 years.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/1/lifeStatus -->
Free-ranging wild Pan troglodytes verus in three Taï communities; no captive, domesticated, or fossil observations are included.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The study is one long-term population and focuses on females; male development, interbirth intervals, longevity, and cross-population variation require additional source review.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
Tool-use ontogeny evidence is cross-sectional and restricted to selected stick-based foraging tasks in three neighboring Taï communities; other populations, tools, tasks, and longitudinal skill development remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At Bossou, Guinea, daily behavioral follows of the local wild P. t. verus community (up to 6 h/day; April 2012–March 2013) found mature forest was the most selected habitat overall. Recorded feeding events in noncultivated habitat occurred more often than expected by chance more than 200 m from cultivated fields and less often than expected within 0–100 m and 101–200 m bands. The authors suggested field-associated risk may influence feeding locations. These results describe one site and community, not species-wide habitat use.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在几内亚 Bossou 对当地野生西部黑猩猩群体的每日行为跟踪（每天至多 6 小时，2012 年 4 月至 2013 年 3 月）发现，成熟森林在总体活动中是选择比例最高的栖地类型。在非耕地栖地记录的取食事件中，距耕地超过 200 米的次数高于随机预期，0–100 米和 101–200 米范围内的次数低于预期。作者提出，与耕地相关的风险可能影响取食地点。这些结果描述的是单一地点和群体，不能代表全物种的栖地利用。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods, Behavioral Observations and Feeding Event Locations; Results, Habitat Use and Preferences and Distance of Feeding Events in Noncultivated Habitat Relative to Cultivated Fields and Routes; Table II.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Bossou, Guinea, West Africa; community-level observations from April 2012 to March 2013, with up to six hours of daily follows and 10 adult focal individuals. Distance analyses concern feeding events in noncultivated habitat.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild Pan troglodytes verus observed in a free-ranging community; no captive or fossil observations are included.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
For stick insertion during natural extractive-foraging events in the Taï sample, models using 1,386 observations from 68 individuals estimated 37% fewer insertion attempts with the full-hand-thumb grip and 31% fewer with the multi-digit grip than with the full-hand grip. The study defines attempt count as an operational proxy for accuracy; no substantial age effect was detected in this measure. This result concerns the sampled stick-insertion task and does not establish broad feeding efficiency or species-wide behavior.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/textZh -->
在 Taï 样本的自然觅食棍棒插入事件中，基于 68 只个体的 1,386 条观察所建模型估计：与全手握法相比，全手拇指握法的插入尝试次数少 37%，多指握法少 31%。研究将尝试次数定义为准确性的操作性指标；该指标未显示明显年龄效应。结果仅涉及所采样的棍棒插入任务，不能证明广义取食效率或全物种行为规律。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/locator -->
Methods §(d), Video coding (number-of-attempts definition); Results, Accuracy of stick insertion depending on hand grip type used; Fig. 3 and Table 5.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
Taï National Park, Côte d’Ivoire; 1,386 stick-insertion observations from 68 individuals aged 1–54 years. The outcome is the study-defined number of attempts to insert a stick into a cavity during natural foraging; events without an ascertainable attempt count were excluded.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Free-ranging wild Pan troglodytes verus observed during natural stick-based extractive foraging; no captive or domesticated observations are included.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This is one community at one site over one year. Other chimpanzee populations and subspecies, range-wide habitat use, and long-term ecological trends remain unassessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The added behavioral evidence concerns stick insertion in one Taï study system; it does not cover the full ecological repertoire, other subspecies, or population-wide feeding efficiency.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Brand et al. analyzed whole-genome site patterns from 18 central, 19 eastern, 10 Nigeria–Cameroon, and 11 western chimpanzees, alongside bonobos. Their best-fitting model estimated western-to-eastern chimpanzee introgression and placed the shared ancestor of the four sampled chimpanzee lineages at about 987,000 years ago; the authors identify the estimate as model-based and discuss competing histories.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
Brand 等人分析了 18 只中部、19 只东部、10 只尼日利亚—喀麦隆和 11 只西部黑猩猩的全基因组位点模式，并纳入倭黑猩猩。拟合最佳的模型估计了西部向东部黑猩猩的基因渗入，并将四个受采样黑猩猩谱系的共同祖先时间估为约 987,000 年前；作者说明这是模型估计，并讨论了其他历史模型。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Whole-genome samples from the five extant Pan lineages; dates and introgression proportions are demographic-model estimates with uncertainty, not directly dated specimens.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild chimpanzee and bonobo genomic samples; no captive or fossil samples in the focal analysis.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This is one model-comparison study. Its lineage history has not been reconciled here with later genome-wide analyses, fossil evidence, or every chimpanzee population; no general phylogenetic placement or trait-evolution synthesis is claimed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The 2016 IUCN assessment described a discontinuous chimpanzee range of more than 2.6 million km² from southern Senegal across the forest belt north of the Congo River to western Tanzania and western Uganda, between about 13°N and 7°S. It described four subspecies ranges; this is the assessment's dated range account, not a current range map.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
2016 年 IUCN 评估记载，黑猩猩分布区不连续，面积超过 260 万平方公里，从塞内加尔南部沿刚果河以北的森林带延伸至坦桑尼亚西部和乌干达西部，约介于北纬 13° 至南纬 7°。评估分别描述了四个亚种的分布；这是有明确年代的范围记述，不是当前分布图。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Global species assessment, 2016 version with errata published in 2018; mapped range and four-subspecies treatment reflect that assessment version.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Geographic range of the extant species; not a captive-distribution inventory or fossil occurrence claim.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The range account is an older assessment snapshot; current boundaries, local extirpations, and within-range occupancy have not been reassessed here.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence was reviewed or assigned to this species in this revision.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
A spatial model estimated 128,760 weaned central chimpanzees (Pan troglodytes troglodytes) in Western Equatorial Africa in 2013 (95% CI 114,208–317,039). The study estimated that 80.7% of this subspecies in the modeled region occurred outside the protected-area network. These are regional model results for one subspecies, not a current abundance or conservation-status estimate for all Pan troglodytes.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
一项空间模型估算，2013 年西赤道非洲的中部黑猩猩亚种（Pan troglodytes troglodytes）有 128,760 只已断奶个体（95% 置信区间：114,208–317,039）；研究还估算该模型区域内 80.7% 的该亚种个体位于保护区网络之外。这些是针对一个亚种的区域模型结果，不代表整个 Pan troglodytes 物种的当前数量或保育等级。
<!-- /evo:text -->

## conservation / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/locator -->
Abstract; Results, Abundance estimates and Table 1; Discussion, protected-area network estimate; Methods, nest surveys and spatial models.
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
The model estimates 2013 abundance across the central chimpanzee range in Western Equatorial Africa. Survey data came from 59 sites in five countries during 2003–2013; the modeled region also included Angola (Cabinda), where the paper reports no survey data.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
The estimates concern free-ranging, weaned central chimpanzees inferred from nest-survey data. They do not include captive populations.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/text -->
The 2016 IUCN assessment (errata version published in 2018) classified Pan troglodytes as Endangered and expected declines to continue. This is a historical, assessment-version-specific category and rationale; it is not asserted here as the current 2026 Red List status.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/textZh -->
IUCN 2016 年评估（2018 年发布勘误版）将 Pan troglodytes 列为濒危（Endangered），并预计下降趋势会持续。此处记录的是特定版本的历史评估类别及依据，不将其宣称为 2026 年当前红色名录等级。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/placeTimeScope -->
Global species-level Red List assessment, version 2016-2; errata version published in 2018. The assessment rationale concerns declines reported for the preceding 20–30 years and projected over the following 30–40 years at publication time.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/lifeStatus -->
Wild species conservation assessment; no captive population or fossil status is implied.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
This source covers only the P. t. troglodytes subspecies in one Western Equatorial Africa model and estimates conditions in 2013. It does not establish a current status, a global population estimate for all P. troglodytes subspecies, or an updated IUCN assessment.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/1 -->
The IUCN category is a historical 2016 assessment version. A current global assessment, current population trend, and current threat synthesis were not verified in this revision.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The record contains bounded captive growth, Gombe female maturation, Bossou and Taï behavior, model-based Pan population history, a dated species-level range/category assessment, and regional conservation evidence; these do not constitute a range-wide species synthesis.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Wild morphological variation, broader life-history coverage, current distribution and conservation status, species-assigned fossil evidence, and systematic literature coverage remain incomplete or unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The Taï tool-use age pattern is cross-sectional and limited to selected stick-foraging tasks in three neighboring communities.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
