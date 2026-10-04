---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Balaenoptera musculus (Linnaeus, 1758)
    authorship: (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-27
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
      - id: WP
        scientificName: Cetacea Brisson, 1762
        authorship: Brisson, 1762
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: "62396"
        scientificName: Mysticeti Flower, 1864
        authorship: Flower, 1864
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: "722"
        scientificName: Balaenopteridae Gray, 1864
        authorship: Gray, 1864
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 37H3
        scientificName: Balaenoptera Lacépède, 1804
        authorship: Lacépède, 1804
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: KF8T
        scientificName: Balaenoptera musculus (Linnaeus, 1758)
        authorship: (Linnaeus, 1758)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
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
      wild: The claim concerns free-ranging blue whales tagged in the California Current System.
      domesticated: No domesticated animals were assessed.
      captive: No captive animals were included in the claim.
      fossil: The study does not assess fossil occurrences or geological deposits.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/KF8T
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:KF8T@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage KF8T; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage KF8T. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-229e2f96-60c8-87de-af3e-cc49f2de45fb
          metadataVariant: 0
          sourceKey: fahlbusch2022BlueWhaleFineScaleForaging
          usage:
            licenseEvidenceLocator: "Article first-page copyright notice: © 2022 The Authors, published by the Royal Society under CC BY 4.0."
            licenseAppliesTo: Article text under its article-level CC BY 4.0 license; no third-party figure or table content is reused.
            stableId: doi:10.1098/rspb.2022.1180
            locator: Abstract; Results §§3(b)–3(c); Methods §2(a); first-page CC BY 4.0 copyright notice.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            accessedAt: 2026-09-27
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
    systematicSearch:
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage KF8T; DOI 10.1098/rspb.2022.1180; Proceedings of the Royal Society B article and NOAA repository PDF.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      date: 2026-09-27
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
        claims: []
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - fahlbusch2022BlueWhaleFineScaleForaging
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
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
  catalogue-profile:
    scientificName: Balaenoptera musculus
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Balaenoptera musculus
      en: Balaenoptera musculus
    reviewStatus: source-linked
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
      - topic: overview
        sourceIds:
          - taxonomy
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
      - topic: sources
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
      - topic: overview
        sourceIds:
          - taxonomy
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/14/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/14/text/en
      - topic: ecology
        sourceIds:
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
      - topic: interpretation
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/19/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/19/text/en
      - topic: overview
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/20/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/20/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Balaenoptera musculus
            url: https://www.checklistbank.org/dataset/316115/taxon/KF8T
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
            locator: PanTHERIA_1-0_WR05_Aug2008.txt; MSW05_Binomial=Balaenoptera musculus; metadata.htm Class IV Tables 1–2; Class V C; original References IDs=172;511;543;899;1004;1015;1217;1297;2151;2409;2655.
            sourceWorksheet: PanTHERIA_1-0_WR05_Aug2008.txt
            originalReferenceNumbers:
              - "172"
              - "511"
              - "543"
              - "899"
              - "1004"
              - "1015"
              - "1217"
              - "1297"
              - "2151"
              - "2409"
              - "2655"
            availableFields:
              - 5-1_AdultBodyMass_g
              - 13-1_AdultHeadBodyLen_mm
              - 6-1_DietBreadth
              - 9-1_GestationLen_d
              - 12-1_HabitatBreadth
              - 14-1_InterbirthInterval_d
              - 15-1_LitterSize
              - 16-1_LittersPerYear
              - 17-1_MaxLongevity_m
              - 5-3_NeonateBodyMass_g
              - 13-2_NeonateHeadBodyLen_mm
              - 10-1_PopulationGrpSize
              - 23-1_SexualMaturityAge_d
              - 10-2_SocialGrpSize
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
            locator: Amniote_Database_Aug_2015.csv row 10375; name Balaenoptera musculus; reference table row 10375; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
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
              adult_body_mass_g: Ernest et al., 2003 from median of 3(de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009, Ernest et al., 2003)
              female_maturity_d: Jones, K., Bielby, J., Cardillo, M. et al., 2009 from median of 3(de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009, Ernest et al., 2003)
              litter_or_clutch_size_n: de Magalhaes and Costa, 2009 from median of 3(de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009, Ernest et al., 2003)
              gestation_d: Jones, K., Bielby, J., Cardillo, M. et al., 2009 from median of 5(Gaskin, D.E., 1972, Gaskin, D.E., 1972, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009, Ernest et al., 2003)
              weaning_d: mean of Jones, K., Bielby, J., Cardillo, M. et al., 2009 & Gaskin, D.E., 1972 from median of 4(Gaskin, D.E., 1972, de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009, Ernest et al., 2003)
              birth_or_hatching_weight_g: Ernest et al., 2003 from median of 3(de Magalhaes and Costa, 2009, Jones, K., Bielby, J., Cardillo, M. et al., 2009, Ernest et al., 2003)
              maximum_longevity_y: Carey, J.R. and D.S. Judge, 2002
            sameNameSourceLabels:
              - Jones, K., Bielby, J., Cardillo, M. et al., 2009
              - de Magalhaes and Costa, 2009
              - Ernest et al., 2003
              - Gaskin, D.E., 1972
              - Carey, J.R. and D.S. Judge, 2002
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
            locator: MamFuncDat.txt logical TSV row 5326; Scientific=Balaenoptera musculus; MamFuncDatSources.txt; selected group source labels retained separately.
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
            locator: "Mammal_lifehistories_v2.txt: Balaenoptera musculus; original refs=1,2,23,26,29; metadata Class II B data collection and variable definitions; Class IV units and reference list."
            sourceVersion: Ecological Archives E084-093-D1; 2003 v2
            sourceFileSha256: 9b7a4ef7082c7b37ab76b922cfd5c86fd3e49444fa2db180439cfbe051fef6b9
            sourceRecordName: Balaenoptera musculus
            originalReferenceNumbers:
              - "1"
              - "2"
              - "23"
              - "26"
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
              MSW93Binomial: Balaenoptera musculus
              MSW05Binomial: Balaenoptera musculus
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

# Balaenoptera musculus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage KF8T. The ecological claim concerns selected tagged free-ranging individuals studied in the California Current System; it does not establish a species-wide foraging rule.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Fahlbusch JA, Czapanskiy MF, Calambokidis J, Cade DE, Abrahms B, Hazen EL, Goldbogen JA (2022). Blue whales increase feeding rates at fine-scale ocean features. Proceedings of the Royal Society B 289:20221180. https://doi.org/10.1098/rspb.2022.1180. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Selected blue-whale tag deployments in the California Current System from 2016 to 2020; FTLE is a modelled proxy for aggregative surface-current features and is not a direct prey-density measurement.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary biologging and ocean-current study; not a complete species ecology or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted usage and full accepted parent chain in the pinned COL26.8 registry; reviewed the study area, deployment inclusion, feeding-rate analysis, modelled FTLE proxy, article license notice, and stated scope.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary research directly measuring blue-whale foraging behavior alongside fine-scale surface-current features and reporting a bounded ecology result.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Global range, all-population diet, prey-density causality, population trends, morphology, life history, evolutionary history, fossils, and conservation status are not inferred from this regional tag study.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The foraging study does not document diagnostic morphology or anatomical variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Short tag deployments do not assess the full life cycle, reproduction, or lifespan.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In the California Current System, a 2016–2020 study using data from 10 tagged free-ranging blue whales selected from 23 deployments found that the whales foraged disproportionately within dynamic aggregative submesoscale surface-current features; estimated feeding rates also increased with feature strength. The result is bounded to the selected deployments and a modelled current-feature proxy, and does not establish a species-wide pattern across populations or seasons.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在加利福尼亚洋流系统，一项 2016—2020 年研究从 23 次标签部署中选取 10 头自由活动蓝鲸的数据；研究发现，这些鲸更常在动态聚集型亚中尺度表层洋流特征内觅食，估算摄食率也随特征强度增加。该结果仅适用于所选部署和模型化洋流特征指标，不能据此确立跨种群或跨季节的全物种规律。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Abstract; Results §§3(b) “Feeding site selection” and 3(c) “Influence on feeding rates”; Methods §2(a) for study period and tagged-individual selection.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
California Current System, 2016–2020; ten selected tagged individuals from 23 deployments, with mean deployment duration 7.1 ± 5.0 days; free-ranging blue whales. Feeding habitat features were represented by modelled finite-time Lyapunov exponent (FTLE) values derived from surface-current observations.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging, tagged animals in a regional field study; captive, domesticated, and fossil evidence was not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This regional tag study does not establish feeding ecology across the species' global range, population-level prey availability, or a causal effect of surface-current features on prey density.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The study does not analyze phylogeny or evolutionary history.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
California Current tag locations do not establish the species' global geographic range.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The study does not assess fossil specimens, deposits, or geological occurrences.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The selected ecology result is not a population trend, threat assessment, or formal conservation-status evaluation.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in ecology only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain explicitly not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
