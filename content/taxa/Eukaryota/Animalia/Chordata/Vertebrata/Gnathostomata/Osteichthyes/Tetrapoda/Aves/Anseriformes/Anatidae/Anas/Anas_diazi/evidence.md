---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Anas diazi
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Anas diazi
      en: Anas diazi
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
            title: Catalogue of Life COL26.8 — Anas diazi
            url: https://www.checklistbank.org/dataset/316115/taxon/DGNF
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
            locator: Amniote_Database_Aug_2015.csv row 276; name Anas diazi; reference table row 276; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
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
              adult_body_mass_g: Werner and Griebeler, 2013 from median of 17(Dunning, 1992, Dunning, 1992, Dunning, 1992, Dunning, 1992, Wasser, D.E. and P.W. Sherman, 2010, Dunning, 1992, Wasser, D.E. and P.W. Sherman, 2010, Dunning, 1992, Boback and Guyer, 2003, Dyke and Kaiser, 2010, Krist, 2011, Werner and Griebeler, 2013, Szekely, Lislevand, and Figuerola, 2007, Werner and Griebeler, 2012, Bennett, 1986, Ricklefs, 2010b, de Magalhaes and Costa, 2009)
              female_maturity_d: de Magalhaes and Costa, 2009 from median of 3(Bennett, 1986, Ricklefs, 2010b, de Magalhaes and Costa, 2009)
              litter_or_clutch_size_n: mean of Bennett, 1986 & Szekely, Lislevand, and Figuerola, 2007 from median of 8(Krist, 2011, Werner and Griebeler, 2013, Szekely, Lislevand, and Figuerola, 2007, Werner and Griebeler, 2012, Jetz, Sekercioglu, and Bohning-Gaese, 2008, Boyer, A.G., Cartron, J-L.E., and J.H. Brown, 2009, Bennett, 1986, de Magalhaes and Costa, 2009)
              birth_or_hatching_weight_g: mean of Bennett, 1986 and de Magalhaes and Costa, 2009
              incubation_d: Ricklefs, 2010b from median of 3(Bennett, 1986, Ricklefs, 2010b, de Magalhaes and Costa, 2009)
              fledging_age_d: mean of Carrier, D.R., Auriemma, J., 1992 and Bennett, 1986
              maximum_longevity_y: Ricklefs, 2010b
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
              - Krist, 2011
              - Boyer, A.G., Cartron, J-L.E., and J.H. Brown, 2009
              - Jetz, Sekercioglu, and Bohning-Gaese, 2008
              - Carrier, D.R., Auriemma, J., 1992
              - Lutmerding, J.A. and A.S. Love, 2013
              - Fransson, T., Kolehmainen, T., Kroon, C. et al., 2010
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

# Anas diazi
