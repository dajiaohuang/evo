---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Anolis sagrei Duméril & Bibron, 1837
    rank: species
    sourceDatasetId: "1008"
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
      - id: RP
        scientificName: Reptilia Laurenti, 1768
        authorship: Laurenti, 1768
        rank: class
        status: accepted
        sourceDatasetId: null
      - id: 45C
        scientificName: Squamata Oppel, 1811
        authorship: Oppel, 1811
        rank: order
        status: accepted
        sourceDatasetId: null
      - id: 87BW7
        scientificName: Iguania
        authorship: null
        rank: suborder
        status: accepted
        sourceDatasetId: null
      - id: C683T
        scientificName: Anolidae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "1008"
      - id: WQP
        scientificName: Anolis
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "1008"
      - id: 5V5QJ
        scientificName: Anolis sagrei Duméril & Bibron, 1837
        authorship: Duméril & Bibron, 1837
        rank: species
        status: accepted
        sourceDatasetId: "1008"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated populations have not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5V5QJ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:5V5QJ@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5V5QJ. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-bb18aa4b-222c-88ba-a96d-c00c16040725
          metadataVariant: 0
          sourceKey: takii2017
          usage:
            licenseEvidenceLocator: Publisher copyright notice links the Creative Commons Attribution License to its canonical CC BY 4.0 URL.
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0180776
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
              - takii2017
            locator: Results, HSE-binding activity in lizard tissues; Fig. 4A-B.
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
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
    scientificName: Anolis sagrei
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: Anolis sagrei
      en: Anolis sagrei
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: ecology
        sourceIds:
          - reptTraitsV12
          - reptTraitsProtocol2024
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Anolis sagrei
            url: https://www.checklistbank.org/dataset/316115/taxon/5V5QJ
            locator: Pinned accepted name, family and recorded ancestry; historical concept equivalence not assumed.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-dcd4aa7d-e2ca-478b-b714-1c8c28b388f3
          metadataVariant: 0
          sourceKey: reptTraitsV12
          usage:
            locator: ReptTraits dataset v1-2.xlsx; Data row 1125; Species=Anolis sagrei; Sources of individual trait val for the same species; Trait definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 45408133
            sourceFileMd5: a00be695740e752db2654537bbb0814c
            sourceFileSha256: 74eb6fd0e2626c75bdbeacb50a08b1762eee42e2b3cfda4a0f1134b84971718a
            sourceClassification: Reptile Database 2023 as recorded in workbook
            sourceCitationByField:
              Maximum length ("SVL", mm)/straight carapace length for turtles ("SCL", mm): Meiri 2018
              Maximum female length ("SVL", mm)/straight carapace length for turtles ("SCL", mm): Meiri 2018
              Microhabitat: Meiri 2018
              Diet: Meiri 2018
              Active time: Meiri 2018
              Foraging mode: Meiri 2018
              Reproductive mode: Zimin et al. 2022
              Sex-determining mechanism (GSD or TSD): Nemesházi & Bókony 2023
              Mean number of offspring per litter or number of eggs per clutch: Meiri et al. 2020
              Smallest clutch size: Meiri 2018
              Largest clutch size: Meiri 2018
              Number of litters or clutches produced per year: Scharf et al. 2015
            scope:
              zh: 尺寸、活动、取食与繁殖的已引性状资料；不外推体重、幼体长度、毒性、保护或当前分布。
              en: Cited size, activity, feeding and reproductive traits; no mass, juvenile-length, venom, conservation or current-range inference.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - sourceFileId
            - sourceFileMd5
            - sourceFileSha256
            - sourceClassification
            - sourceCitationByField
            - scope
        - referenceId: ref-d075eefb-2767-428c-ae91-9d089b535c8d
          metadataVariant: 0
          sourceKey: reptTraitsProtocol2024
          usage:
            locator: Methods; Data Records (maximum size, source aggregation, length-to-mass estimates); Usage Notes; workbook Trait definitions and Changes sheets.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-paraphrase
            scope:
              zh: 性状定义、汇总方式与资料缺口；不证明历史名称与固定 COL26.8 概念完全等同。
              en: Trait definitions, aggregation and gaps; not proof of concept equivalence between historical names and pinned COL26.8.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Anolis sagrei

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to a controlled heat-shock tissue assay in Anolis sagrei. It does not establish field heat tolerance, thermal adaptation, survival limits, or a species-wide response.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The paper describes animals collected in Havana and some females imported from the United States; the heat-shock tissue assay itself was conducted on captive-held animals.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 5V5QJ; exact accepted name, authorship, species rank, sourceDatasetId 1008, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text; this dossier paraphrases findings and does not reproduce figures or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods, Care and treatment of lizards and frogs; Results, HSE-binding activity in lizard tissues; Fig. 4A-B; publisher copyright and license notice.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original study of heat-shock factors in lizard and frog tissues and cell systems; the cited tissue response is specific to the Anolis sagrei assay and conditions described.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Takii R, Fujimoto M, Matsuura Y, Wu F, Oshibe N, Takaki E, et al. (2017). HSF1 and HSF3 cooperatively regulate the heat shock response in lizards. PLOS ONE 12(7):e0180776. https://doi.org/10.1371/journal.pone.0180776. Findings paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In a controlled tissue assay, heat-shock-element binding activity in Anolis sagrei brain and heart extracts increased after 42°C for 1 hour and was reduced after 3 hours of recovery at 28°C. This molecular response does not establish a whole-animal thermal limit, field heat tolerance, or thermal adaptation.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Laboratory assay: 42°C heat shock for 1 hour followed by recovery at 28°C for 3 hours. Methods describe Havana collections from 2009–2011 for RNA work and some females imported from the United States in 2013 for tissue extraction; the article does not link the plotted Fig. 4 tissue cohort to one exact collection subset.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Captive-held lizards during heat-shock treatment; not a measurement of free-ranging animals under natural temperatures. The paper does not report a sample size for the plotted tissue assay.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
A tissue-level molecular response is not a measured survival threshold, performance curve, or field thermal-tolerance estimate.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The article does not link the plotted tissue samples to an exact collection subset or report the sample size for that assay.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, life history, broader ecology, evolution, distribution, fossils, and conservation remain unassessed; systematic search are incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One tissue-level heat-shock response is partially supported; it does not measure organismal thermal limits or establish an adaptive response.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The collection subset and sample size for the plotted tissue assay are not resolved in the article.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Other biological facets and complete geographic, fossil, and conservation coverage remain unassessed; systematic search are incomplete.
<!-- /evo:text -->
