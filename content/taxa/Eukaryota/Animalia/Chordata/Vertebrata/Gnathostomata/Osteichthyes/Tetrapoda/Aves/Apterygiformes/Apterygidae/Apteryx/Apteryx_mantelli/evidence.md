---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Apteryx mantelli
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Apteryx mantelli
      en: Apteryx mantelli
    checkedAt: 2026-10-03
    sections:
      - topic: genomeMaterial
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: phylogeneticComparison
        sourceIds:
          - sackton2019FlightLossReader
          - cloutier2019PalaeognathReader
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: ecology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: morphology
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
      - topic: ecology
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
      - topic: ecology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/10/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/10/text/en
      - topic: sources
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/11/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/11/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Apteryx mantelli
            url: https://www.checklistbank.org/dataset/316115/taxon/FYYR
            locator: Pinned accepted name, rank and ancestor closure; matching names do not establish concept equivalence.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetV7
          usage:
            locator: AVONET Supplementary dataset 1.xlsx; AVONET1_BirdLife; Species1=Apteryx mantelli; Sequence=61; Metadata field definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 34480856
            sourceFileMd5: 1445afdcfb6df784010c2ca034544bc8
            sourceFileSha256: eb645e83dddb40f1654a3e8d721998dbca76eff540231b7b809267c1e96f8d3e
            sourceTaxonomy: HBW–BirdLife version 5.0 (December 2020)
            externalConceptId: AVIBASE-DB55CB8C
            scope:
              zh: 历史同名记录的数据导读；仅使用 Inference=NO 且至少一套完整形态测量的记录。保留体重来源和繁殖/留居地理范围限定，不推断当前分类概念等同。
              en: Historical same-name data account, using Inference=NO records with at least one complete morphological set. Mass provenance and breeding/resident geography retained; no current taxonomic concept equivalence inferred.
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
            - sourceTaxonomy
            - externalConceptId
            - scope
        - referenceId: ref-43f38f21-86d6-45b9-a255-7b157984216b
          metadataVariant: 0
          sourceKey: avonetProtocol2022
          usage:
            locator: Measurement protocol, taxonomic harmonization and species-average data; workbook Metadata sheet defines field meanings.
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 支持测量定义、取样与物种均值的解释；不证明 2020 历史分类概念与 COL26.8 完全等同。
              en: Measurement definitions, sampling and species-average interpretation; not proof that historical 2020 species concepts equal COL26.8 concepts.
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
            locator: Amniote_Database_Aug_2015.csv row 856; name Apteryx mantelli; reference table row 856; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - birth_or_hatching_weight_g
              - incubation_d
              - fledging_age_d
              - maximum_longevity_y
            originalReferenceStrings:
              adult_body_mass_g: mean of BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013 & Werner and Griebeler, 2012 from median of 18(Dunning, 1992, Dunning, 1992, Ricklefs, 2010b, BC Birds - Atanasov, 2012b, Dunning, 1992, BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013, Boback and Guyer, 2003, BC Birds - Meyers et al., 2009, Dunning, 1992, Dyke and Kaiser, 2010, Wasser, D.E. and P.W. Sherman, 2010, BC Birds - Meyers et al., 2009, de Magalhaes and Costa, 2009, Bennett, 1986, Werner and Griebeler, 2012, Szekely, Lislevand, and Figuerola, 2007, Werner and Griebeler, 2012, Werner and Griebeler, 2013)
              female_maturity_d: mean of BC Birds - Meyers et al., 2009 and BC Birds - Meyers et al., 2009
              litter_or_clutch_size_n: mean of Dickison, M.R., 2007 & Werner and Griebeler, 2012 from median of 12(Davies, S.J.J.F., 2002, BC Birds - Meyers et al., 2009, BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013, BC Birds - Ziesemann, B., Brunton, D.H., Castro, I.C., 2011, de Magalhaes and Costa, 2009, Dickison, M.R., 2007, Bennett, 1986, Werner and Griebeler, 2012, BC Birds - Wilson, 2003, Szekely, Lislevand, and Figuerola, 2007, Werner and Griebeler, 2012, Werner and Griebeler, 2013)
              birth_or_hatching_weight_g: BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013 from median of 5(BC Birds - Mclennan, J.A., Dew, L., Miles, J., et al, 2004, Calder, W.A. III, 1979, BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013, BC Birds - Mclennan, J.A., Dew, L., Miles, J., et al, 2004, de Magalhaes and Costa, 2009)
              incubation_d: mean of Bennett, 1986 & Ricklefs, 2010b from median of 14(BC Birds - Wilson, 2003, Calder, W.A. III, 1979, BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013, BC Birds - Wilson, 2003, BC Birds - Meyers et al., 2009, BC Birds - Wilson, 2003, Dickison, M.R., 2007, Calder, W.A. III, 1979, Davies, S.J.J.F., 2002, BC Birds - Wilson, 2003, Davies, S.J.J.F., 2002, Ricklefs, 2010b, de Magalhaes and Costa, 2009, Bennett, 1986)
              fledging_age_d: BC Birds - Meyers et al., 2009 from median of 3(BC Birds - Wilson, 2003, BC Birds - Meyers et al., 2009, BC Birds - Meyers et al., 2009)
              maximum_longevity_y: BC Birds - Meyers et al., 2009
            sameNameSourceLabels:
              - Dunning, 1992
              - Szekely, Lislevand, and Figuerola, 2007
              - de Magalhaes and Costa, 2009
              - Ricklefs, 2010b
              - Boback and Guyer, 2003
              - Bennett, 1986
              - Dyke and Kaiser, 2010
              - Werner and Griebeler, 2012
              - Werner and Griebeler, 2013
              - Wasser, D.E. and P.W. Sherman, 2010
              - BC Birds - Meyers et al., 2009
              - BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013
              - BC Birds - Atanasov, 2012b
              - Dickison, M.R., 2007
              - Davies, S.J.J.F., 2002
              - BC Birds - Wilson, 2003
              - BC Birds - Ziesemann, B., Brunton, D.H., Castro, I.C., 2011
              - Calder, W.A. III, 1979
              - BC Birds - Mclennan, J.A., Dew, L., Miles, J., et al, 2004
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
        - sourceKey: sackton2019FlightLossReader
          referenceId: ref-5bd64bcf-d144-4042-85d0-7698b80a8c94
          metadataVariant: 0
          usage:
            title: Convergent regulatory evolution and loss of flight in paleognathous birds
            url: https://doi.org/10.1126/science.aat7244
            accessedAt: 2026-10-03
            locator: Published main Science PDF, all main scientific text and captions; figure 1 pixels only; no supplements or rerun
            scope:
              zh: 所指物种的材料与跨支系比较；实验角色分别保留。
              en: Named species material and cross-lineage comparisons; experimental roles remain separate.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
        - sourceKey: cloutier2019PalaeognathReader
          referenceId: ref-21d5a78e-cddb-4430-8d22-79f8a455bf0b
          metadataVariant: 0
          usage:
            title: Whole-Genome Analyses Resolve the Phylogeny of Flightless Birds (Palaeognathae) in the Presence of an Empirical Anomaly Zone
            url: https://doi.org/10.1093/sysbio/syz019
            accessedAt: 2026-10-03
            locator: "PMC6857515: sampling, selected marker extraction and species-tree methods, selected results, discussion paragraphs 100–109; not whole-paper review"
            scope:
              zh: 所指物种的材料与跨支系比较；实验角色分别保留。
              en: Named species material and cross-lineage comparisons; experimental roles remain separate.
          originalFields:
            - id
            - title
            - authors
            - doi
            - journal
            - volume
            - issue
            - pages
            - publishedYear
            - sourceVersion
            - url
            - accessedAt
            - locator
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Apteryx mantelli
