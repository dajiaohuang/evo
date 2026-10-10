---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Vulpes vulpes (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 赤狐
      en: Red fox
    checkedAt: 2026-10-02
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
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
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
      - topic: ecology
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
      - topic: sources
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
      - topic: overview
        sourceIds:
          - taxonomy
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
      - topic: ecology
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
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
      - topic: sources
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/12/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/12/text/en
    sources:
      referenceBindings:
        - referenceId: ref-8e36ae42-3b58-873b-a2dc-e4ef241ed7f9
          metadataVariant: 0
          sourceKey: account
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5BSG3
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
            locator: Amniote_Database_Aug_2015.csv row 10118; name Vulpes vulpes; reference table row 10118; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
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
              adult_body_mass_g: BC mammals - Savage et al., 2004 from median of 7(BC mammals - Savage et al., 2004, BC mammals - Savage et al., 2004, BC mammals - Savage et al., 2004, Ernest et al., 2003, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              female_maturity_d: mean of de Magalhaes and Costa, 2009 & Ricklefs, 2010b from median of 4(Ernest et al., 2003, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              litter_or_clutch_size_n: mean of Jones, K., Bielby, J., Cardillo, M. et al., 2009 & Garratt et al., 2014 from median of 4(Garratt et al., 2014, Ernest et al., 2003, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              gestation_d: Garratt et al., 2014 from median of 5(Garratt et al., 2014, Ernest et al., 2003, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              weaning_d: Garratt et al., 2014 from median of 5(Garratt et al., 2014, Ernest et al., 2003, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              birth_or_hatching_weight_g: Jones, K., Bielby, J., Cardillo, M. et al., 2009 from median of 5(Garratt et al., 2014, Ernest et al., 2003, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              maximum_longevity_y: Ricklefs, 2010b
            sameNameSourceLabels:
              - Jones, K., Bielby, J., Cardillo, M. et al., 2009
              - de Magalhaes and Costa, 2009
              - Ernest et al., 2003
              - Ricklefs, 2010b
              - BC mammals - Savage et al., 2004
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
            locator: MamFuncDat.txt logical TSV row 4894; Scientific=Vulpes vulpes; MamFuncDatSources.txt; selected group source labels retained separately.
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
                  - id: Ref_1
                    verbatim: Nowak R.M. (1999). Walker's mammals of the world. Sixth edition edn. The Johns Hopkins University Press, Baltimore, Maryland
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
    scientificName: Vulpes vulpes (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-23
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
      fossil: Fossil localities and geological ages are kept separate from extant range statements.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 2
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/5BSG3
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Taxon usage 5BSG3
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
        - referenceId: ref-863710d5-11b3-8d08-aa80-ac2b97f8e3b0
          metadataVariant: 0
          sourceKey: adw
          usage:
            locator: Geographic Range; Habitat; Physical Description; Reproduction; Behavior; Food Habits; Ecosystem Roles
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
        - referenceId: ref-c991633b-b12d-8f98-a2ab-5503cdf57be2
          metadataVariant: 0
          sourceKey: kutsc2013
          usage:
            locator: Abstract; Results; Discussion; Methods; DOI 10.1186/1471-2148-13-114
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-1a285c90-86f2-8861-a7d7-3fed30b913e7
          metadataVariant: 0
          sourceKey: vallparadis2021
          usage:
            locator: Abstract, especially the EVT3 age, dentognathic comparison, and taxonomic conclusion
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-5fe6ac7d-50b0-8555-acea-bc4ee2590c0c
          metadataVariant: 0
          sourceKey: stantons2025
          usage:
            locator: Abstract; specimen GRCA 76272
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-f12ad780-cfa7-8678-ad69-4f544f85c2e6
          metadataVariant: 0
          sourceKey: iucn2021
          usage:
            locator: Assessment record e.T23062A193903628
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-74520504-bad1-8c51-a0d2-6acb1899254e
          metadataVariant: 0
          sourceKey: usfws2021
          usage:
            locator: Overview; distinguishes Sierra Nevada distinct population segment from global species
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/6/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
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
            sourceIds:
              - adw
            locator: Physical Description, paragraphs 1-2
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
            sourceIds:
              - adw
            locator: Reproduction, paragraphs 1-3; Behavior, paragraph 1
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
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
              - adw
            locator: Habitat, paragraph 1; Food Habits, paragraph 1; Ecosystem Roles, paragraph 1
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
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
              - kutsc2013
            locator: Abstract; Results; Discussion; Methods
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
            sourceIds:
              - adw
            locator: Geographic Range, paragraph 1 and biogeographic-region labels
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/textZh
            sourceIds:
              - kutsc2013
            locator: Figure 1; Additional file 1; Methods
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/textZh
            sourceIds:
              - vallparadis2021
            locator: Abstract, paragraphs 1-2
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/1/textZh
            sourceIds:
              - stantons2025
            locator: Abstract; specimen GRCA 76272
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/1/lifeStatus
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
            sourceIds:
              - iucn2021
            locator: Assessment e.T23062A193903628
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
            sourceIds:
              - usfws2021
            locator: Overview; ESA listing information
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/1/lifeStatus
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
---

# Vulpes vulpes

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
支持页面所载毛色、栖境、原生/引入区分及繁殖行为范围；繁殖季的南北对照沿用该旧概述的限定，旧体重、体长、保育等级和全球现状不导入。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Supports the account’s coat variation, habitats, native/introduced distinction and range of breeding behaviors; the south-to-north season contrast remains bounded to this older account. Old mass, length, conservation status and claims about current global conditions are excluded.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级及父链；不据名称推导生态或亲缘事实。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent chain; ecological or relationship claims are not inferred from the name.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 name, author, rank, accepted status, and ITIS source-dataset identity checked against the pinned COL node; each biological source was opened at its taxon account or its paper's explicit Vulpes vulpes treatment.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species Vulpes vulpes as used in COL26.8. Subspecies and regional populations are not treated as interchangeable with the global species concept.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims primarily concern free-living animals; broad range and ecology statements retain the source's geographical and date limits.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
Fur-farm and captive observations are excluded from claims unless explicitly identified; this record makes no domestication claim.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; underlying source dataset 2144 ITIS
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted-name identity, authorship, rank, and source-dataset relation only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Educational secondary account; its own disclaimer says it may not include latest science. Used only for scoped overview statements, not current conservation status or complete global coverage.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Range-wide synthesis of mitochondrial control-region samples and model-based phylogeographic estimates; not a genome-wide species tree or a current census.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Taxonomic reassessment of described Middle Pleistocene material from one site in northeastern Iberia; paper notes fragmentary remains and taxonomic uncertainty.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Re-identification of two dentaries from one cave assemblage; authors say this is the first Grand Canyon record and may be the first Arizona fossil record.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/scope -->
Global assessment record only. The linked assessment revision dates to 2021 and is not described as a current 2026 reassessment.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/6/usage/scope -->
Regional listing for the Sierra Nevada subspecies/population in the United States; does not establish global species status.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The 2007 account describes several coat-color forms and external characters; it also reports variation among populations. The historical account's percentages and measurements are deliberately not propagated as current population estimates.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
2007 年的条目描述了多种毛色型和外部特征，也提及种群间差异。本档案不把该历史条目的比例和测量值当作当前种群估计。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Species account synthesis, dated 2007; geographic sampling frame for the reported variation is not stated at claim level.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
wild species account; captive/fur-farm phenotypes not treated as a separate sample
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
A current, specimen- and population-scoped morphological synthesis has not been completed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The account reports variable mating arrangements, breeding season shifts by latitude, parental provisioning, and a den-based juvenile period; these are secondary-source summaries, not a range-wide primary-data synthesis.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
该条目记载交配关系存在变化、繁殖季随纬度而异、亲代会提供食物，幼体有一段洞穴生活期；这些是二手综述，尚非基于全分布区原始数据的综合分析。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Geographic variation summarized across an unspecified set of sources; account last updated 2007.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
wild red fox observations; captive/farm data excluded from this claim
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Development, survival, senescence, and variation among regions need primary-study coverage and explicit population scopes.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The account lists diverse terrestrial habitats and describes an omnivorous diet, food caching, and possible seed dispersal; these statements do not quantify their frequency or establish global interaction networks.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该条目列出多种陆生栖地，并描述杂食、储藏食物和可能的种子传播；这些叙述未量化发生频率，也未建立全球相互作用网络。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Educational synthesis last updated 2007; individual study locations are not supplied for each claim.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
wild species account; human-managed landscapes are included as habitat context
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Local diet studies, seasonal variation, species interactions, and urban/rural sampling frames are not yet synthesized.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
A 2013 range-wide analysis of 729 mitochondrial control-region sequences reported a Holarctic lineage, three Nearctic lineages, and two Japan-restricted lineages, with several inferred to have formed in the Mid/Late Pleistocene. These are locus- and model-dependent phylogeographic results, not a genome-wide species tree.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
一项 2013 年的广域分析使用 729 条线粒体控制区序列，报告了一个全北界谱系、三个新北界谱系和两个日本特有谱系；研究推断其中若干谱系形成于中/晚更新世。这些结果取决于所用基因位点和模型，不是全基因组物种树。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Samples assembled across the Holarctic; 335 bp mitochondrial control-region alignment; Bayesian coalescent estimates calibrated with fossil tips and root priors.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
modern wild samples, with ancient DNA calibration material treated as such
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Genome-wide phylogeny, competing estimates, and later studies have not been systematically reconciled.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The ADW account reports native occurrence through northern North America and the Palearctic and introduced populations in Australia and the Falkland Islands; it also assigns both native and introduced labels in part of the Neotropics, so that portion remains unresolved here.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
ADW 条目记载赤狐原生分布于北美北部和古北界，澳大利亚与福克兰群岛有引入种群；该条目也给新热带区部分地区同时标注原生与引入，因此此处保留未决。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Secondary account last updated 2007; no explicit map date or locality-level evidence attached to this summary.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
wild native versus introduced populations distinguished where the source does so
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/text -->
A 2013 genetic synthesis used Holarctic sample localities to analyze lineages; its sampling map and sample appendix describe research coverage, not a complete current range polygon.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/textZh -->
2013 年的遗传学综合研究使用全北界多个采样地点分析谱系；其采样地图和样本附录反映研究覆盖范围，并非当前完整分布区边界。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/placeTimeScope -->
Study sampling localities, including central Siberia and multiple European populations; sample dates and locations are source-specific.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/lifeStatus -->
sampled wild populations
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Current locality-level native, introduced, feral, and captive boundaries have not been reconciled to a dated global range dataset.
<!-- /evo:text -->

## fossil / claims / text

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/text -->
Dentognathic material from EVT3, Vallparadís Section, northeastern Iberia (about 0.6 Ma) was attributed to extant V. vulpes by comparison with V. alopecoides; the authors identify it as the earliest well-dated European occurrence, while noting the scarcity and taxonomic uncertainty of the material.
<!-- /evo:text -->

## fossil / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/textZh -->
伊比利亚东北部 Vallparadís 剖面 EVT3（约 0.6 Ma）的牙颌化石，经与 V. alopecoides 比较后被归入现生种 V. vulpes。作者将其视为欧洲年代测定较可靠的最早记录，同时指出材料稀少且分类判断仍有不确定性。
<!-- /evo:text -->

## fossil / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/placeTimeScope -->
EVT3, Vallès-Penedès Basin, northeastern Iberian Peninsula; Middle Pleistocene, ca. 0.6 Ma.
<!-- /evo:text -->

## fossil / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/lifeStatus -->
fossil; distinct from extant range and modern populations
<!-- /evo:text -->

## fossil / claims / text

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/1/text -->
Two dentaries (GRCA 76272) from Stanton's Cave were re-identified as red fox rather than gray fox; the authors call this the first Grand Canyon record and say it may be the first Arizona fossil evidence.
<!-- /evo:text -->

## fossil / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/1/textZh -->
Stanton 洞穴的两件下颌骨（GRCA 76272）经重新鉴定为赤狐而非灰狐；作者称这是大峡谷的首笔记录，并指出它可能也是亚利桑那州首项该种化石证据。
<!-- /evo:text -->

## fossil / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/1/placeTimeScope -->
Stanton's Cave, Grand Canyon National Park, Arizona; cave assemblage reported as Late Pleistocene and early Holocene, but a more precise age for the fox dentaries is not given in the abstract.
<!-- /evo:text -->

## fossil / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/1/lifeStatus -->
fossil material; taxonomic re-identification
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No global fossil occurrence inventory or systematic reassessment of uncertain historic identifications has been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The linked IUCN global assessment is the 2021 record by Hoffmann and Sillero-Zubiri; it must be reported with that assessment year and not represented as a 2026 reassessment.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
关联的 IUCN 全球评估是 Hoffmann 与 Sillero-Zubiri 于 2021 年发布的记录；引用时须保留该评估年份，不能说成 2026 年重新评估。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Global assessment; assessment version 2021.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
wild populations at global assessment scope
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/text -->
The U.S. Fish and Wildlife Service lists the Sierra Nevada distinct population segment of V. v. necator as endangered; this regional subspecies/population listing cannot be generalized to all V. vulpes.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/textZh -->
美国鱼类及野生动物管理局将 V. v. necator 的内华达山脉独立种群列为濒危；这是区域亚种/种群的列名，不能推广到全部 V. vulpes。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/placeTimeScope -->
Sierra Nevada DPS, California, United States; federal listing in 2021.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/1/lifeStatus -->
wild regional population
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The 2021 global assessment's criteria, trend, threats, and regional assessments have not yet been extracted and compared; status currency needs rechecking before any present-tense global claim.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
All seven facets contain cited facts, but every facet remains partial rather than meeting its full subject checklist.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible systematic search and screening log has been completed for this taxon.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Global distribution and conservation currency, fossil occurrence coverage, and primary literature for morphology, life history, and ecology remain incomplete.
<!-- /evo:text -->
