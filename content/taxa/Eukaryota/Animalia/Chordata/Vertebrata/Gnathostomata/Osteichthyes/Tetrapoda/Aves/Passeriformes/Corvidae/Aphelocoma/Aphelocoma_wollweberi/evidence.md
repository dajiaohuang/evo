---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Aphelocoma wollweberi
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Aphelocoma wollweberi
      en: Aphelocoma wollweberi
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: ecology
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Aphelocoma wollweberi
            url: https://www.checklistbank.org/dataset/316115/taxon/FCWX
            locator: Pinned accepted name, rank and ancestry; concept equivalence not established.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: Amniote_Database_Aug_2015.csv row 3239; name Aphelocoma wollweberi; reference table row 3239; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - litter_or_clutch_size_n
              - birth_or_hatching_weight_g
              - incubation_d
              - fledging_age_d
              - maximum_longevity_y
            originalReferenceStrings:
              adult_body_mass_g: mean of Bennett, 1986 & BC Birds - Wilson, 2003 from median of 14(Dunning, 1992, Dunning, 1992, BC Birds - Meyers et al., 2009, Dunning, 1992, Dyke and Kaiser, 2010, Dunning, 1992, BC Birds - Wilson, 2003, Wasser, D.E. and P.W. Sherman, 2010, BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013, Boback and Guyer, 2003, BC Birds - Meyers et al., 2009, de Magalhaes and Costa, 2009, Szekely, Lislevand, and Figuerola, 2007, Bennett, 1986)
              litter_or_clutch_size_n: mean of Jetz, Sekercioglu, and Bohning-Gaese, 2008 & Szekely, Lislevand, and Figuerola, 2007 from median of 14(BC Birds - Meyers et al., 2009, BC Birds - Wilson, 2003, BC Birds - Wilson, 2003, Jetz, Sekercioglu, and Bohning-Gaese, 2008, BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013, Boyer, A.G., Cartron, J-L.E., and J.H. Brown, 2009, de Magalhaes and Costa, 2009, Szekely, Lislevand, and Figuerola, 2007, BC Birds - Meyers et al., 2009, BC Birds - Wilson, 2003, Bennett, 1986, BC Birds - Meyers et al., 2009, BC Birds - Wilson, 2003, BC Birds - Wilson, 2003)
              birth_or_hatching_weight_g: mean of BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013 and de Magalhaes and Costa, 2009
              incubation_d: de Magalhaes and Costa, 2009 from median of 7(BC Birds - Meyers et al., 2009, BC Birds - Wilson, 2003, BC Birds - Meyers et al., 2009, BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013, BC Birds - Wilson, 2003, de Magalhaes and Costa, 2009, Bennett, 1986)
              fledging_age_d: mean of Carrier, D.R., Auriemma, J., 1992 & Bennett, 1986 from median of 6(Carrier, D.R., Auriemma, J., 1992, BC Birds - Meyers et al., 2009, BC Birds - Wilson, 2003, BC Birds - Meyers et al., 2009, BC Birds - Wilson, 2003, Bennett, 1986)
              maximum_longevity_y: BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013
            sameNameSourceLabels:
              - Dunning, 1992
              - Szekely, Lislevand, and Figuerola, 2007
              - de Magalhaes and Costa, 2009
              - Boback and Guyer, 2003
              - Bennett, 1986
              - Dyke and Kaiser, 2010
              - Wasser, D.E. and P.W. Sherman, 2010
              - BC Birds - Tacutu, R., T. Craig, A. Budovsky et al. 2013
              - BC Birds - Meyers et al., 2009
              - BC Birds - Wilson, 2003
              - Boyer, A.G., Cartron, J-L.E., and J.H. Brown, 2009
              - Jetz, Sekercioglu, and Bohning-Gaese, 2008
              - Carrier, D.R., Auriemma, J., 1992
              - Lutmerding, J.A. and A.S. Love, 2013
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Aphelocoma wollweberi
