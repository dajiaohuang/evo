---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Pogona vitticeps (Ahl, 1926)
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
      - id: 64B
        scientificName: Agamidae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "1008"
      - id: 87CD5
        scientificName: Amphibolurinae
        authorship: null
        rank: subfamily
        status: accepted
        sourceDatasetId: "1008"
      - id: 63NN8
        scientificName: Pogona
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "1008"
      - id: 4KV6Z
        scientificName: Pogona vitticeps (Ahl, 1926)
        authorship: (Ahl, 1926)
        rank: species
        status: accepted
        sourceDatasetId: "1008"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Captive-bred lizards from two breeders were studied; domesticated population-level variation was not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4KV6Z
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4KV6Z@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4KV6Z. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-bb4e6d33-9bb5-8b2e-aadd-87e377841ad5
          metadataVariant: 0
          sourceKey: denomme2025pogona
          usage:
            licenseEvidenceLocator: The article-level copyright notice links the Creative Commons Attribution License to the canonical CC BY 4.0 URL.
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0322682
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
              - denomme2025pogona
            locator: Results, Thermal heterogeneity and enclosure temperatures; Methods, Thermal heterogeneity; Fig. 8.
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
    scientificName: Pogona vitticeps
    rank: species
    sourceDatasetId: "1008"
    name:
      zh: Pogona vitticeps
      en: Pogona vitticeps
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
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: morphology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: sources
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Pogona vitticeps
            url: https://www.checklistbank.org/dataset/316115/taxon/4KV6Z
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
            locator: ReptTraits dataset v1-2.xlsx; Data row 9300; Species=Pogona vitticeps; Sources of individual trait val for the same species; Trait definitions.
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
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: Amniote_Database_Aug_2015.csv row 15107; name Pogona vitticeps; reference table row 15107; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - birth_or_hatching_weight_g
              - incubation_d
              - maximum_longevity_y
            originalReferenceStrings:
              adult_body_mass_g: BC Reptiles - Banzato et al., 2012 from median of 7(BC Reptiles - Schilliger, L., Betremieux, O., Rocher, J. et al., 2009, BC Reptiles - Schilliger, L., Betremieux, O., Rocher, J. et al., 2009, BC Reptiles - Schilliger, L., Betremieux, O., Rocher, J. et al., 2009, BC Reptiles - Banzato et al., 2012, BC Reptiles - Tacutu, R., T. Craig, A. Budovsky et al. 2013, Meiri, 2010, Ricklefs, 2010b)
              female_maturity_d: Ricklefs, 2010b
              litter_or_clutch_size_n: Greer, A.E., 1989 from median of 14(Reptile Incubation book, Greer, A.E., 1989, Heatwole, H.F., Taylor, J., 1987, Greer, A.E., 1989, Greer, A.E., 1989, Greer, A.E., 1989, Greer, A.E., 1989, Greer, A.E., 1989, Greer, A.E., 1989, BC Reptiles - Meyers et al., 2009, Greer, A.E., 1989, Heatwole, H.F., Taylor, J., 1987, Greer, A.E., 1989, Reptile Incubation book)
              birth_or_hatching_weight_g: BC Reptiles - Khan, J.J., Richardson, J.M.L., and G.J. Tattersall, 2010
              incubation_d: BC Reptiles - Meyers et al., 2009 from median of 9(BC Reptiles - Meyers et al., 2009, BC Reptiles - Heathcote, 2010, BC Reptiles - Meyers et al., 2009, Greer, A.E., 1989, Greer, A.E., 1989, Greer, A.E., 1989, Reptile Incubation book, Reptile Incubation book, Ricklefs, 2010b)
              maximum_longevity_y: BC Reptiles - Tacutu, R., T. Craig, A. Budovsky et al. 2013
            sameNameSourceLabels:
              - Ricklefs, 2010b
              - Meiri, 2010
              - BC Reptiles - Tacutu, R., T. Craig, A. Budovsky et al. 2013
              - BC Reptiles - Banzato et al., 2012
              - BC Reptiles - Schilliger, L., Betremieux, O., Rocher, J. et al., 2009
              - Reptile Incubation book
              - Heatwole, H.F., Taylor, J., 1987
              - Greer, A.E., 1989
              - BC Reptiles - Meyers et al., 2009
              - BC Reptiles - Khan, J.J., Richardson, J.M.L., and G.J. Tattersall, 2010
              - BC Reptiles - Heathcote, 2010
            sourceVersion: August 2015 archive
            sourceFileSha256: ae16377ebe8a172949c2b8c200a50c5d0c7fc04d34bd3c9704635da4a4d51f53
            scope:
              zh: 历史同名、同科的汇编生活史字段；保留中位数、最长记录与分类继承，不保证当前概念同一。
              en: Historical same-name, same-family compilation fields, retaining medians, longest records and taxonomic inheritance; no current concept-equivalence claim.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - availableFields
            - originalReferenceStrings
            - sameNameSourceLabels
            - sourceVersion
            - sourceFileSha256
            - scope
        - referenceId: ref-50d83663-5d53-4d60-83a3-2b2a8461aa64
          metadataVariant: 0
          sourceKey: amnioteLifeHistoryMethods2015
          usage:
            locator: "Ecological Archives E096-269-D1 metadata: Methods, Class IV definitions; Supplemental Table 9 field definitions."
            accessedAt: 2026-10-02
            scope:
              zh: 中位数、最长寿命最大记录、历史种／亚种数据继承和字段定义。
              en: Medians, maximum longevity, historical species/subspecies inheritance and field definitions.
            sourceRetrievalUrl: https://www.esapubs.org/archive/ecol/E096/269/metadata.php
            sourceVersion: August 2015 archive
            readerBoundaries:
              - No field values treated as independent individual measurements.
              - No guarantee of present taxonomic concept equivalence.
              - Original input papers not individually reviewed.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
            - sourceRetrievalUrl
            - sourceVersion
            - readerBoundaries
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Pogona vitticeps

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The source supports a captive-enclosure temperature comparison in one Brock University study. It does not show that the enclosure design improves wild adaptation, thermoregulation, or overall welfare.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The temperature comparison used captive-bred animals and laboratory enclosures; wild population responses were not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 4KV6Z; exact accepted name, authorship, species rank, sourceDatasetId 1008, and accepted parent chain verified in the pinned hierarchy.
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
Methods, Animals and husbandry and Thermal heterogeneity; Results, Thermal heterogeneity and enclosure temperatures; publisher copyright and license notice.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original study of captive-bred Pogona vitticeps in standard and naturalistic enclosure conditions; the cited thermal comparison is limited to the measured enclosures and time points.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Denommé M, Bakker NL, Tattersall GJ (2025). Influence of enclosure design on the behaviour and welfare of Pogona vitticeps. PLOS ONE 20(6):e0322682. https://doi.org/10.1371/journal.pone.0322682. Findings paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Thermal images from the study's naturalistic enclosures showed greater substrate-temperature variability than standard enclosures: model estimates for the substrate-temperature standard deviation were 1.86 ± 0.07 and 1.39 ± 0.07, respectively (p < 0.001). The result is an enclosure-level measurement and does not by itself demonstrate improved thermoregulation or welfare.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Brock University laboratory study in St. Catharines, Ontario, Canada. Temperature images were collected in May 2024 around 09:00, 11:00, and 15:00; after removing one enclosure of each style from analysis, 11 enclosures per style were represented at each time point.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Captive-bred Pogona vitticeps in laboratory enclosures; no wild animals or fossil material were represented in this temperature comparison.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The temperature analysis measured enclosures and did not establish the lizards' resulting body temperatures or realized thermoregulation.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The authors describe overall behaviour and welfare effects as equivocal; substrate-temperature heterogeneity alone does not establish improved welfare.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, life history, wild ecology, evolution, distribution, fossils, conservation, and independent review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The enclosure study supports a thermal heterogeneity result but does not establish corresponding thermoregulation or welfare effects.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The evidence is limited to captive-bred animals in one laboratory study and does not represent wild populations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Most biological facets and complete geographic, fossil and conservation coverage remain unassessed.
<!-- /evo:text -->
