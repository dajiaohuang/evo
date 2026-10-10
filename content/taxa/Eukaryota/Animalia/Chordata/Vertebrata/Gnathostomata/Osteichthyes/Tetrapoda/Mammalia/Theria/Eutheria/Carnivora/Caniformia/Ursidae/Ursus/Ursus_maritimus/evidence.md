---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Ursus maritimus Phipps, 1774
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
      - id: VS
        scientificName: Carnivora Bowdich, 1821
        authorship: Bowdich, 1821
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 4CT
        scientificName: Caniformia Kretzoi, 1938
        authorship: Kretzoi, 1938
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: HQQ
        scientificName: Ursidae G. Fischer von Waldheim, 1817
        authorship: G. Fischer von Waldheim, 1817
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 63VHR
        scientificName: Ursus Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 7F2J9
        scientificName: Ursus maritimus Phipps, 1774
        authorship: Phipps, 1774
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild: The claim uses individually marked, free-ranging polar bears sampled by helicopter surveys in western Hudson Bay.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/7F2J9
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:7F2J9@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 7F2J9. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-4f01a1ca-0e36-8c83-a351-ecc91fdcf89c
          metadataVariant: 0
          sourceKey: hostetter2021
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0252748
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            sourceIds:
              - hostetter2021
            locator: Methods, Case study; Results, Case study and Fig. 3; Abstract.
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/2
      ecology:
        status: not-assessed
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
    scientificName: Ursus maritimus
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Ursus maritimus
      en: Ursus maritimus
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: ecology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: ecology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: ecology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: morphology
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
      - topic: ecology
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
      - topic: sources
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/9/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/9/text/en
      - topic: overview
        sourceIds:
          - taxonomy
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
      - topic: ecology
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
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/13/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/13/text/en
      - topic: sources
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/14/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/15/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/15/text/en
      - topic: ecology
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/16/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/16/text/en
      - topic: ecology
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/17/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/17/text/en
      - topic: ecology
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/18/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/18/text/en
      - topic: ecology
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/19/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/19/text/en
      - topic: interpretation
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/20/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/20/text/en
      - topic: overview
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/21/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/21/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Ursus maritimus
            url: https://www.checklistbank.org/dataset/316115/taxon/7F2J9
            locator: Pinned accepted name, family and recorded ancestry; concept equivalence to MSW05 not established.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-2bbbd988-b0a6-4105-b535-f1d77d8eda57
          metadataVariant: 0
          sourceKey: pantheriaWR05
          usage:
            locator: PanTHERIA_1-0_WR05_Aug2008.txt; MSW05_Binomial=Ursus maritimus; metadata.htm Class IV Tables 1–2; Class V C; original References IDs=367;542;543;730;1015;1113;1297;2655.
            sourceWorksheet: PanTHERIA_1-0_WR05_Aug2008.txt
            originalReferenceNumbers:
              - "367"
              - "542"
              - "543"
              - "730"
              - "1015"
              - "1113"
              - "1297"
              - "2655"
            availableFields:
              - 1-1_ActivityCycle
              - 5-1_AdultBodyMass_g
              - 13-1_AdultHeadBodyLen_mm
              - 2-1_AgeatEyeOpening_d
              - 3-1_AgeatFirstBirth_d
              - 18-1_BasalMetRate_mLO2hr
              - 5-2_BasalMetRateMass_g
              - 6-1_DietBreadth
              - 7-1_DispersalAge_d
              - 9-1_GestationLen_d
              - 12-1_HabitatBreadth
              - 22-1_HomeRange_km2
              - 22-2_HomeRange_Indiv_km2
              - 14-1_InterbirthInterval_d
              - 15-1_LitterSize
              - 17-1_MaxLongevity_m
              - 5-3_NeonateBodyMass_g
              - 21-1_PopulationDensity_n/km2
              - 10-1_PopulationGrpSize
              - 23-1_SexualMaturityAge_d
              - 24-1_TeatNumber
              - 12-2_Terrestriality
              - 6-2_TrophicLevel
              - 25-1_WeaningAge_d
              - 5-4_WeaningBodyMass_g
            accessedAt: 2026-10-02
            licenseAssessment: CC0-archive-attributed-summary
            sourceFileId: 5604752
            sourceFileMd5: ca6fcc6935a8ab9cb54b6bfc84aeeb76
            sourceFileSha256: fe84274a39ba73b3c9b6950b78ba44c545852db9809d1549b0071cfdde46df9f
            scope:
              zh: 2008 年历史条目与汇总统计；不使用 *_EXT 字段补值，不证明当前物种概念同一。
              en: Historical 2008 entry and consolidated statistics; no filling from *_EXT fields or current concept-equivalence claim.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - sourceWorksheet
            - originalReferenceNumbers
            - availableFields
            - accessedAt
            - licenseAssessment
            - sourceFileId
            - sourceFileMd5
            - sourceFileSha256
            - scope
        - referenceId: ref-c9ca5cd3-8f21-4b65-b2d1-9f76dd3b9a8b
          metadataVariant: 0
          sourceKey: pantheriaConsolidation2009
          usage:
            locator: Ecological Archives E090-184-D1 metadata.htm; Class IV Table 1 (variable scope), Table 2 (consolidation), Class V B–C (source handling and derived fields).
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 仅解释历史汇总、中位数、部分 GLM 调整及字段边界；不证明 COL26.8 物种概念等同。
              en: Historical consolidation, medians, partial GLM adjustment and variable scopes; not proof of equivalent COL26.8 species concepts.
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
            locator: Amniote_Database_Aug_2015.csv row 10331; name Ursus maritimus; reference table row 10331; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
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
              adult_body_mass_g: Jones, K., Bielby, J., Cardillo, M. et al., 2009 from median of 3(Ernest et al., 2003, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              female_maturity_d: de Magalhaes and Costa, 2009 from median of 3(Ernest et al., 2003, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              litter_or_clutch_size_n: mean of Ernest et al., 2003 & Garratt et al., 2014 from median of 4(Garratt et al., 2014, Ernest et al., 2003, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              gestation_d: mean of Garratt et al., 2014 & de Magalhaes and Costa, 2009 from median of 4(Garratt et al., 2014, Ernest et al., 2003, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              weaning_d: mean of de Magalhaes and Costa, 2009 & Garratt et al., 2014 from median of 4(Garratt et al., 2014, Ernest et al., 2003, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              birth_or_hatching_weight_g: mean of Garratt et al., 2014 & de Magalhaes and Costa, 2009 from median of 4(Garratt et al., 2014, Ernest et al., 2003, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              maximum_longevity_y: Ernest et al., 2003
            sameNameSourceLabels:
              - Jones, K., Bielby, J., Cardillo, M. et al., 2009
              - de Magalhaes and Costa, 2009
              - Ernest et al., 2003
              - Garratt et al., 2014
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
            locator: MamFuncDat.txt logical TSV row 5014; Scientific=Ursus maritimus; MamFuncDatSources.txt; selected group source labels retained separately.
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
        - referenceId: ref-1948a24d-679d-4e46-ac0d-16ed62cf4201
          metadataVariant: 0
          sourceKey: ernestLifeHistories2003
          usage:
            locator: "Mammal_lifehistories_v2.txt: Ursus maritimus; original refs=1,2,11,23,29; metadata Class II B data collection and variable definitions; Class IV units and reference list."
            sourceVersion: Ecological Archives E084-093-D1; 2003 v2
            sourceFileSha256: 9b7a4ef7082c7b37ab76b922cfd5c86fd3e49444fa2db180439cfbe051fef6b9
            sourceRecordName: Ursus maritimus
            originalReferenceNumbers:
              - "1"
              - "2"
              - "11"
              - "23"
              - "29"
            availableFocalFields:
              - gestation(mo)
              - newborn(g)
              - weaning(mo)
              - wean mass(g)
              - AFR(mo)
              - max. life(mo)
              - litter size
              - litters/year
            uninterpretedFocalFields: []
            withheldFields:
              - mass(g)
            historicalCrosswalk:
              MSW93Binomial: Ursus maritimus
              MSW05Binomial: Ursus maritimus
              mapping: one-to-one same-name MSW93/MSW05 in separate PanTHERIA supplied SppSynonymID1.0 table; not equivalence to COL
              sourceConceptEquivalenceToCOL: not established
            accessedAt: 2026-10-03
            licenseAssessment: archived-no-restrictions-attributed-factual-summary
            scope:
              zh: 历史生活史汇总：一般等权平均，最高寿命取记录最大值；成年体重不在本批解读，底层物种文献未逐条读取。
              en: "Historical life-history summaries: generally equally weighted averages, maximum lifespan as a record maximum; adult mass not interpreted in this batch, underlying species literature not individually read."
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - sourceVersion
            - sourceFileSha256
            - sourceRecordName
            - originalReferenceNumbers
            - availableFocalFields
            - uninterpretedFocalFields
            - withheldFields
            - historicalCrosswalk
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

# Ursus maritimus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to a 2012–2018 age-structured capture–recapture case study of independent, free-ranging polar bears in western Hudson Bay. It does not establish species-wide survival or the status of the whole subpopulation.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 7F2J9; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article copyright and license statement says the work is free of all copyright and made available under the Creative Commons CC0 public domain dedication.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The published article text and its stated findings; this dossier paraphrases results and does not reproduce third-party material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Materials and Methods, Case study; Results, Case study and Fig. 3; Discussion, limitations of the western Hudson Bay case study.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original research applying an age-structured Jolly–Seber model to capture–recapture data for western Hudson Bay polar bears from 2012–2018.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Hostetter NJ, Lunn NJ, Richardson ES, Regehr EV, Converse SJ (2021). Age-structured Jolly-Seber model expands inference and improves parameter estimation from capture-recapture data. PLOS ONE 16(6):e0252748. https://doi.org/10.1371/journal.pone.0252748. Findings paraphrased.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
For independent polar bears aged at least two years in a western Hudson Bay case study, an age-structured Jolly–Seber model with quadratic age-dependent survival estimated median survival above 0.95 for ages 7–22, followed by decline at older ages. The model estimated near-zero survival above age 30, but observed ages in the analyzed sample ranged from 2 to 30 years; estimates beyond that range are model results rather than direct observations.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Western Hudson Bay, Canada; 2012–2018; annual capture–recapture sampling in fall (August–September). The analyzed histories cover 296 independent bears and 427 capture events; observed ages ranged from 2 to 30 years.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Free-ranging individuals marked during helicopter surveys; the study analyzed independent females and males aged at least two years. No captive or domesticated bears are represented.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The authors describe the analyzed records as a subset and simplified model case study, not an estimate of the status of the entire western Hudson Bay subpopulation or a management assessment.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
The model's older-age survival values beyond the observed age range are extrapolations; individual and temporal variation in several demographic processes was simplified.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/2 -->
Species-wide survival, broader ecology, evolution, distribution, fossils, and conservation status remain unassessed; systematic search are incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only one age-dependent survival result from a regional case study is partially supported; the study does not establish species-wide survival or population status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The sample is limited to independent bears aged at least two years in western Hudson Bay from 2012–2018, and older-age estimates extend beyond the observed-age range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A reproducible systematic search has not been completed.
<!-- /evo:text -->
