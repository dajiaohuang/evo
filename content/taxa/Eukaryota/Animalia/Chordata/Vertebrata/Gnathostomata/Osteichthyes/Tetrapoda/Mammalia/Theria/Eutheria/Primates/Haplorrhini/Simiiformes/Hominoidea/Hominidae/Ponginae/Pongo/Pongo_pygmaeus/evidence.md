---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pongo pygmaeus (Linnaeus, 1760)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 婆罗洲猩猩
      en: Bornean orangutan
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
        - referenceId: ref-bbd01d57-7002-817c-a54b-ab3fdedddd1b
          metadataVariant: 0
          sourceKey: scott2024
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
        - referenceId: ref-fce548b4-15f1-866b-aad0-2a2aeb714076
          metadataVariant: 0
          sourceKey: yuliani2023
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
        - referenceId: ref-c72a6d8d-3041-86d6-a20e-d3ce979a0951
          metadataVariant: 0
          sourceKey: banes2016
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
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/3/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4LTT2
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
    scientificName: Pongo pygmaeus (Linnaeus, 1760)
    authorship: (Linnaeus, 1760)
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
      - id: 6224G
        scientificName: Mammalia Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 6226C
        scientificName: Theria Parker & Haswell, 1897
        authorship: Parker & Haswell, 1897
        rank: subclass
        status: accepted
        sourceDatasetId: "2144"
      - id: LG
        scientificName: Eutheria Gill, 1872
        authorship: Gill, 1872
        rank: infraclass
        status: accepted
        sourceDatasetId: "2144"
      - id: 3W7
        scientificName: Primates Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 4DT
        scientificName: Haplorrhini Pocock, 1918
        authorship: Pocock, 1918
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4PM
        scientificName: Simiiformes Haeckel, 1866
        authorship: Haeckel, 1866
        rank: infraorder
        status: accepted
        sourceDatasetId: "2144"
      - id: 58L
        scientificName: Hominoidea Gray, 1825
        authorship: Gray, 1825
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 6256T
        scientificName: Hominidae Gray, 1825
        authorship: Gray, 1825
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: K72
        scientificName: Ponginae Elliot, 1913
        authorship: Elliot, 1913
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 63NZX
        scientificName: Pongo Lacépède, 1799
        authorship: Lacépède, 1799
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 4LTT2
        scientificName: Pongo pygmaeus (Linnaeus, 1760)
        authorship: (Linnaeus, 1760)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication has not been assessed; no domesticated population evidence is used.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 5
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4LTT2
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4LTT2@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4LTT2. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-29b26c37-211f-8387-ac8a-f4be2ae1ff24
          metadataVariant: 0
          sourceKey: yuliani2023
          usage:
            licenseAppliesTo: Article text under the item-level CC BY 4.0 notice; separately credited third-party material is excluded.
            stableId: doi:10.1111/csp2.12916
            accessedAt: 2026-09-24
            locator: Methods §3.1 Field data collection; Results §§4.1–4.3 and Tables 1–2; Discussion §5
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
        - referenceId: ref-5dbc2da8-0c7b-806b-a070-513d52b8eb7b
          metadataVariant: 0
          sourceKey: banes2016
          usage:
            licenseAppliesTo: Article text under the item-level CC BY 4.0 notice; separately credited third-party material is excluded.
            stableId: doi:10.1038/srep22026
            accessedAt: 2026-09-24
            locator: Abstract; Methods, faecal sample collection and mtDNA analysis; Results, mtDNA haplotypes and parentage; Discussion
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
        - referenceId: ref-79b81e17-158b-8026-a3db-4f62191eb9ef
          metadataVariant: 0
          sourceKey: scott2024
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0296688
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
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
            - scope
            - attribution
        - referenceId: ref-88208dd0-bf24-8e69-ad5a-8948ffa23f38
          metadataVariant: 0
          sourceKey: ampeng2021usunapau
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo
            stableId: doi:10.3897/BDJ.9.e60753
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution
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
            - scope
            - attribution
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - scott2024
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
              - scott2024
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
              - yuliani2023
            locator: Results §4.3, population estimates and Table 2; Discussion §5
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
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
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
            sourceIds:
              - banes2016
            locator: Abstract; Methods, faecal sample collection and mtDNA analysis; Results, mtDNA haplotypes and parentage; Discussion
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
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
            sourceIds:
              - ampeng2021usunapau
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/1
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
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
    expertReview:
      status: not-reviewed
---

# Pongo pygmaeus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
西加里曼丹 Gunung Palung 国家公园一个野生 P. p. wurmbii 种群的形态背景和亲子鉴定结果。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Morphological context and paternity results from one wild P. p. wurmbii population at Gunung Palung National Park, West Kalimantan.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
西加里曼丹 Danau Sentarum 国家公园内外的巢穴调查和模型估算；针对当地 P. p. pygmaeus 种群。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Nest surveys and model estimates inside and around Danau Sentarum National Park, West Kalimantan; focused on the local P. p. pygmaeus population.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
中加里曼丹 Tanjung Puting 国家公园 Camp Leakey 的历史重引入猩猩及后代线粒体证据；仅涉及一个人为转移地点。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Mitochondrial evidence from historically reintroduced orangutans and descendants at Camp Leakey, Tanjung Puting National Park, Central Kalimantan; one human-mediated site only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/3/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage verified against the pinned search and hierarchy registries, including verbatim name, authorship, rank, sourceDatasetId and every accepted parent node.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted usage 4LTT2 only. The added locality observation is assigned only to the accepted species Pongo pygmaeus; it is not assigned to a COL subspecies and does not reassess the catalogue taxonomy.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The dossier combines local evidence from Danau Sentarum, historically reintroduced orangutans at Camp Leakey, a wild P. p. wurmbii population at Gunung Palung, and one 2020 wild sighting at Usun Apau. Each population, locality, and human-intervention history remains separately scoped.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 4LTT2; verbatim scientificName Pongo pygmaeus (Linnaeus, 1760); sourceDatasetId 2144; parent chain includes order Primates (3W7)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and parent classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Nest-survey and population-estimation study for orangutans identified as Pongo pygmaeus pygmaeus in forest transects within and around Danau Sentarum National Park, West Kalimantan. Only paraphrased text results are used.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Yuliani EL, Bakara DO, Ilyas M, Russon AE, Salim A, Sammy J, Sunderland-Groves JL, Sunderland TCH (2023). Conservation Science and Practice 5(4):e12916. https://doi.org/10.1111/csp2.12916. Claims paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Camp Leakey, Tanjung Puting National Park, Central Kalimantan: mitochondrial DNA evidence from historical reintroduced orangutans and their descendants. The study documents one human-mediated reintroduction history and does not estimate natural range-wide gene flow. The article discloses that coauthor B.M.F.G. continued to manage Camp Leakey and a nearby rehabilitation centre.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Banes GL, Galdikas BMF, Vigilant L (2016). Scientific Reports 6:22026. https://doi.org/10.1038/srep22026. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/licenseAppliesTo -->
The article text used for paraphrased claims. No separately credited photographs, figures, or other third-party material are reused.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Abstract; Materials and methods §Study site and population and §Behavioral data collection; Results §Male reproductive success and Table 2.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
The article reports male morph descriptions and paternity findings from one free-ranging Pongo pygmaeus wurmbii population at Gunung Palung National Park, West Kalimantan. These site-specific findings are not a species-wide account.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Scott AM, Banes GL, Setiadi W, Saragih JR, Susanto TW, Mitra Setia T, Knott CD (2024). PLOS ONE 19(2):e0296688. https://doi.org/10.1371/journal.pone.0296688. Claims paraphrased; no images reused.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo -->
Article text used for paraphrased claims; separately credited third-party material is excluded and no figures are reused.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/locator -->
Abstract; Short communication, field survey results; Discussion of the published Sarawak range and unresolved subspecies assignment.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
A wildlife survey record from Usun Apau National Park, Sarawak, Malaysia, during surveys conducted October 2017–October 2020. The article describes one 2020 sighting and associated local observations; it is not a range-wide survey or evidence of an established population.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/attribution -->
Ampeng A, Liam J, Simpson B, Traelholt C, Md Nor S, Abdan-Saleman MSB, Osman S, Zakaria SA, Md-Zain BM (2021). First Bornean orangutan sighting in Usun Apau National Park, Sarawak. Biodiversity Data Journal 9:e60753. https://doi.org/10.3897/BDJ.9.e60753. Claims paraphrased; no figures reused.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
At the genus-level framing used in the article, male orangutans (Pongo spp.) are described as having flanged and unflanged morphs; flanged males are described as larger and as bearing secondary sexual characteristics absent in unflanged males. The article also studies one wild Bornean Pongo pygmaeus wurmbii population, but this background description is not a range-wide diagnosis or individual-level measurement for the COL usage.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Abstract, first two sentences; Materials and methods §Study site and population identifies the focal population as Pongo pygmaeus wurmbii.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Male morphology is described in a 2024 article that reports research at Cabang Panti Research Station, Gunung Palung National Park, West Kalimantan, Indonesia. The description is limited to the article's Bornean orangutan context and is not a range-wide morphometric survey.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
The morphology statement is framed for orangutans (Pongo spp.) and is not an assertion about captive, domesticated, or fossil forms. Separate paternity data in the article concern a free-ranging wild P. p. wurmbii population.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This bounded male-morph description does not cover female or juvenile morphology, individual variation, diagnostic measurements, or the full species range.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
At Gunung Palung National Park, during the article's stated 2009–2014 six-year period, four flanged males sired five offspring. In the broader offspring sample conceived during 2008–2019, paternity was assigned to five of seven offspring; an additional assigned case conceived before the sampling period had unknown sire flange status at conception. These are local paternity results from one population, not a species-wide reproductive rate.
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Results §Male reproductive success, first paragraph and Table 2; Materials and methods §Study site and population and §Sample collection.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Cabang Panti Research Station, Gunung Palung National Park, West Kalimantan, Indonesian Borneo. Paternity evidence covers offspring conceived during 2008–2019, including the stated 2009–2014 interval for the five offspring sired by four flanged males; field observations span 2008–2019 and the article was published in 2024.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
The authors characterize the GPNP population as completely wild; the study site had no feeding stations, ex-captive orangutans, or veterinary care. Paternity was inferred from fecal DNA samples and long-term field observations, not captive breeding records.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The small paternity sample from one Bornean population does not establish species-wide fecundity, interbirth intervals, survival, lifespan, or reproduction across the full range.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Using an updated mean nest-decay rate of 288.3 days, the study estimated about 202 orangutans within Danau Sentarum National Park (95% CI 75.67–541.79) and about 71 outside it (95% CI 20.76–244.63); these are local model-based estimates, not direct counts.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Ten survey locations in and around Danau Sentarum National Park, Kapuas Hulu, West Kalimantan; transect surveys were conducted in 2010–2014, with nest-decay calibration observations spanning 2010–2011. Estimates are model-derived for the sampled landscape.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging orangutans detected through nests in wild and logged forest transects; no captive or domesticated animals are included.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The estimate is local and method-dependent, has wide uncertainty, and does not constitute a species-wide population estimate or complete ecological account.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
At Camp Leakey in Tanjung Puting National Park, the study analyzed mtDNA from 10 presumed unrelated adults reintroduced during the 1970s and 1980s, plus one first-generation offspring sequence used to represent a deceased reintroduced female. Of the 11 mtDNA profiles representing founder lineages, nine clustered with the local P. p. wurmbii mtDNA clade, while two females clustered with P. p. pygmaeus mtDNA from northern West Kalimantan or Sarawak. Both females reproduced with local males; the paper documented at least 22 hybridized or introgressed descendants, of which at least 15 were considered living when published in 2016. This is a human-mediated lineage-mixing history at one site, not evidence of natural species-wide gene flow or a range-wide evolutionary pattern.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
在印度尼西亚中加里曼丹丹戎普丁国家公园的 Camp Leakey 放归点，研究分析了 10 只在 20 世纪 70 至 80 年代放归、推定彼此无亲缘关系的成年个体的线粒体 DNA，并用一只第一代后代的序列代表一只已死亡的放归雌体。代表 11 条放归创始谱系的 mtDNA 序列中，9 条与当地 P. p. wurmbii 线粒体 DNA 支系聚类，另两只雌体则与西加里曼丹北部或砂捞越的 P. p. pygmaeus 聚类。两只雌体都与当地雄性繁殖；截至论文 2016 年发表时，研究记录了至少 22 个杂交或渐渗后代，其中至少 15 个被认为仍存活。这是单一地点的人为介入谱系混合史，不代表自然的全种基因流或整个分布区的演化格局。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Camp Leakey, Tanjung Puting National Park, Central Kalimantan, Indonesia; founder releases occurred in the 1970s and 1980s. The study analyzed 10 presumed unrelated adult reintroduced orangutans plus one offspring sequence representing a deceased reintroduced female; descendant counts are those reported in 2016.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Orangutans sampled through faeces from a free-ranging, historically reintroduced population and descendants; the evidence includes human-mediated translocation and is not a captive-only sample.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Evidence is limited to mitochondrial lineages and descendants from one historical reintroduction site; it does not characterize genome-wide ancestry, natural range-wide gene flow, or the evolutionary history of all populations.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
Across 12 wildlife surveys conducted from October 2017 to October 2020, the authors reported one approximately one-minute observation of Pongo pygmaeus near Libut Camp, Usun Apau National Park, on 17 September 2020 at about 1,020 m elevation; they also reported four nearby nests (three new and one old) and two vocalizations. Relative to the distribution maps cited by the authors, they treated this as a locality record outside the published Sarawak range at that time. This single survey record does not establish a resident population or confirm a range expansion, and the observed individual was not assigned to a subspecies.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
在 2017 年 10 月至 2020 年 10 月开展的 12 次野外调查中，作者报告于 2020 年 9 月 17 日在砂捞越乌孙阿包国家公园 Libut Camp 附近、海拔约 1,020 米处观察到一只猩猩，持续约一分钟；他们还报告了附近 4 个巢（3 个新巢、1 个旧巢）及两次叫声。依据作者引用的分布图，该地点被作为当时已发表砂捞越分布范围以外的记录。单次调查记录不能证明当地存在稳定种群或确认分布范围扩张，观察到的个体也未被鉴定到亚种。
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Abstract; Methods and results, 12 field surveys and the 17 September 2020 Libut Camp observation; Discussion, comparison with the then-published Sarawak range and subspecies uncertainty.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Usun Apau National Park, Sarawak, Malaysian Borneo. Surveys ran October 2017–October 2020; the single reported sighting was on 17 September 2020 near Libut Camp at approximately 1,020 m. The cited range comparison reflects maps available to the authors in 2021.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Reported as a wild orangutan sighting during wildlife surveys. No captive or domesticated evidence is used; the observed individual's subspecies was unresolved.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Evidence is a single locality record from one survey period; it does not establish current occupancy, a resident or breeding population, abundance, or a verified range expansion.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/1 -->
The authors could not assign the individual to P. p. pygmaeus or P. p. morio, and additional aerial and thermal surveys did not confirm other nests or orangutans; a complete current range remains unassessed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence or geological age was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No formal Red List, legal status or range-wide trend assessment was assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The evidence includes local nest-survey ecology, one historically reintroduced population's mitochondrial lineage history, male-morph and paternity observations from one wild Bornean population, and one survey-period locality record; none is a species-wide synthesis.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Morphology, life history, ecology, and evolution remain partial; distribution is now locally supported but incomplete; fossil evidence and formal conservation assessment remain unassessed. No systematic seven-facet literature search or independent external expert review has been completed.
<!-- /evo:text -->
