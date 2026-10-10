---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Macaca nemestrina (Linnaeus, 1766)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 南豚尾猕猴
      en: Southern pig-tailed macaque
    checkedAt: 2026-10-02
    sections:
      - topic: ecology
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - holzner2021
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: sources
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
      - topic: overview
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: sources
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
    sources:
      referenceBindings:
        - referenceId: ref-5c035d9d-fd64-8b0f-a94b-28087dbb578a
          metadataVariant: 0
          sourceKey: holzner2021
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
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWNT
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
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: Amniote_Database_Aug_2015.csv row 12147; name Macaca nemestrina; reference table row 12147; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - gestation_d
              - weaning_d
              - birth_or_hatching_weight_g
              - maximum_longevity_y
            originalReferenceStrings:
              adult_body_mass_g: mean of Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000 & Jones, K., Bielby, J., Cardillo, M. et al., 2009 from median of 10(Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000, Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000, Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000, Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000, Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000, Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Ernest et al., 2003, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              female_maturity_d: mean of Ricklefs, 2010b & Ernest et al., 2003 from median of 4(Ricklefs, 2010b, de Magalhaes and Costa, 2009, Ernest et al., 2003, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              litter_or_clutch_size_n: mean of de Magalhaes and Costa, 2009 & Garratt et al., 2014 from median of 4(Garratt et al., 2014, de Magalhaes and Costa, 2009, Ernest et al., 2003, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              gestation_d: de Magalhaes and Costa, 2009 from median of 5(Garratt et al., 2014, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Ernest et al., 2003, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              weaning_d: de Magalhaes and Costa, 2009 from median of 5(Garratt et al., 2014, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Ernest et al., 2003, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              birth_or_hatching_weight_g: Garratt et al., 2014 from median of 5(Garratt et al., 2014, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Ernest et al., 2003, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              maximum_longevity_y: Ricklefs, 2010b
            sameNameSourceLabels:
              - Jones, K., Bielby, J., Cardillo, M. et al., 2009
              - de Magalhaes and Costa, 2009
              - Ernest et al., 2003
              - Ricklefs, 2010b
              - Delson, E., Terranova, C.J., Jungers, W.L. et al., 2000
              - Garratt et al., 2014
              - Carey, J.R. and D.S. Judge, 2002
              - Weigl, R., 2005
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
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: MamFuncDat.txt logical TSV row 687; Scientific=Macaca nemestrina; MamFuncDatSources.txt; selected group source labels retained separately.
            accessedAt: 2026-10-02
            sourceVersion: EltonTraits 1.0; metadata latest update August 2013
            sourceFileSha256: 51acbe6215b3c1f742463ff3fb37ef607150c052e0f7a9dc0d97fcaca61d3f76
            selectedFieldGroups:
              diet:
                fields:
                  - Diet-Inv
                  - Diet-Vend
                  - Diet-Vect
                  - Diet-Vfish
                  - Diet-Vunk
                  - Diet-Scav
                  - Diet-Fruit
                  - Diet-Nect
                  - Diet-Seed
                  - Diet-PlantO
                references:
                  - id: Ref_25
                    verbatim: "Crockett CM, Wilson WL. 1980. The ecological separation of Macaca nemestrina and M. fascicularis in Sumatra. In: Lindburg DG, editor. The macaques: studies in ecology, behavior and evolution. New York: Van Nostrand Reinhold. p 148-81."
                certainty: ABC
              foraging:
                fields:
                  - ForStrat-Value
                  - ForStrat-Comment
                references:
                  - id: metadata:Nowak1999
                    verbatim: Nowak, R. M. 1999. Walker's mammals of the world. Sixth edition. The Johns Hopkins University Press, Baltimore, Maryland, USA. Source assigned to all mammal foraging strata by Table 2 metadata.
                certainty: A
              activity:
                fields:
                  - Activity-Nocturnal
                  - Activity-Crepuscular
                  - Activity-Diurnal
                references:
                  - id: Ref_1
                    verbatim: Nowak R.M. (1999). Walker's mammals of the world. Sixth edition edn. The Johns Hopkins University Press, Baltimore, Maryland
                certainty: ABC
            withheldFieldGroups: []
            sourceRecordComment: null
            associationBoundary: Historical exact same-name and same-family record only. Modern species concept equivalence not established. Mammal ABC flags can include inference from a named congener; no primary species-level observation claim.
            scope:
              zh: 历史同名同科的取食生态；相对权重为文献描述估计，ABC 字段可含同属材料。
              en: Historical same-name, same-family foraging ecology; weights are literature-description estimates, and ABC fields can include congeneric material.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - sourceVersion
            - sourceFileSha256
            - selectedFieldGroups
            - withheldFieldGroups
            - sourceRecordComment
            - associationBoundary
            - scope
        - referenceId: ref-23d71769-a573-4f3c-8284-3271a2ef8b53
          metadataVariant: 0
          sourceKey: eltonTraitsMethods2014
          usage:
            locator: Ecological Archives E095-178-D1 metadata.php; Class II B translation/interpolation/limitations; Class IV Tables 1–4.
            accessedAt: 2026-10-02
            scope:
              zh: 文献描述的半定量转换、字段代码、插补与历史分类边界；未读底层文献。
              en: Semiquantitative translation, field codes, interpolation and historical taxonomy; underlying literature not read.
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Macaca nemestrina (Linnaeus, 1766)
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
        - holzner2021
    lifeStatusScope:
      wild: The selected primary study concerns wild sampled animals; claims retain its sample and locality limits.
      domesticated: Domestication and captive history have not been assessed.
      fossil: Fossil evidence has not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3WWNT
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:3WWNT@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3WWNT.
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
        - referenceId: ref-336dcbf2-7231-89eb-ad17-eca2870c1271
          metadataVariant: 0
          sourceKey: holzner2021
          usage:
            licenseAppliesTo: Published article text; no restricted site-location data or third-party material is reused.
            stableId: doi:10.7717/peerj.12462
            locator: Abstract; Methods Study sites, Detection histories and Occupancy modelling; Results; Discussion
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            accessedAt: 2026-09-24
          originalFields:
            - id
            - title
            - url
            - version
            - publishedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - stableId
            - accessedAt
    facets:
      morphology:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
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
              - holzner2021
            locator: Abstract; Results; Discussion
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
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            sourceIds:
              - holzner2021
            locator: Methods Study sites; Figure 1; Detection histories
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
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
---

# Macaca nemestrina

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
马来西亚半岛 Pasoh Forest Reserve（2013–2017）和 Belum–Temengor 森林综合体的照相机陷阱占域研究；结论限于所采样地点和拟合模型。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Camera-trap occupancy study at Pasoh Forest Reserve (2013–2017) and the Belum–Temengor Forest Complex in Peninsular Malaysia; findings are limited to sampled sites and fitted models.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage verified from ChecklistBank dataset 316115, including verbatim name/authorship, rank, status, sourceDatasetId and classification.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted usage 3WWNT. Biological statements below are limited to the 2021 camera-trap study sites, observation periods and occupancy models.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3WWNT; exact scientific name, authorship, rank, accepted status, sourceDatasetId 2144 and full classification chain
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: pinned COL26.8 taxonomic record and classification.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary camera-trap occupancy study at Pasoh Forest Reserve and Belum-Temengor Forest Complex in Peninsular Malaysia, comparing temporal and spatial patterns under clear-cutting, selective logging and undisturbed conditions. Claims retain the study's site and model limits. No location data, tables, figures or supplementary files are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Holzner A, Rayan DM, Moore J, Tan CKW, Clart L, Kulik L, Kühl H, Ruppert N, Widdig A (2021). Occupancy of wild southern pig-tailed macaques in intact and degraded forests in Peninsular Malaysia. PeerJ 9:e12462. https://doi.org/10.7717/peerj.12462. Claims paraphrased under CC BY 4.0.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No direct, scope-bounded morphology evidence was assessed in the selected source.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No direct, scope-bounded lifeHistory evidence was assessed in the selected source.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Camera-trap occupancy estimates indicated that clear-cutting increased local-extinction probability in the Pasoh Forest Reserve model, while the study detected no clear occupancy difference between selectively logged and undisturbed areas in the Belum-Temengor Forest Complex. These findings concern the sampled sites and fitted models, not a range-wide response.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Pasoh Forest Reserve temporal survey (2013-2017) and Belum-Temengor spatial comparison as modeled in the 2021 study.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild camera-trap detections and occupancy estimates.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The selected paper supports only the bounded claim above; no comprehensive ecology assessment was performed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No direct, scope-bounded evolution evidence was assessed in the selected source.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The study documents detections and modeled site occupancy at Pasoh Forest Reserve and Belum-Temengor Forest Complex in Peninsular Malaysia. These are research sites, not a complete distribution statement for the species.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Two study landscapes and their analyzed camera locations only.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild camera-trap detections.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The selected paper supports only the bounded claim above; no comprehensive distribution assessment was performed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No direct, scope-bounded fossil evidence was assessed in the selected source.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No direct, scope-bounded conservation evidence was assessed in the selected source.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one selected primary study was assessed; unsupported facets remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic current-literature search has been completed.
<!-- /evo:text -->
