---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Anas andium
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Anas andium
      en: Anas andium
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: morphology
        sourceIds:
          - avonetV7
          - avonetProtocol2022
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: ecology
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
      - topic: ecology
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
            title: Catalogue of Life COL26.8 — Anas andium
            url: https://www.checklistbank.org/dataset/316115/taxon/DGMZ
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
            locator: AVONET Supplementary dataset 1.xlsx; AVONET1_BirdLife; Species1=Anas andium; Sequence=547; Metadata field definitions.
            accessedAt: 2026-10-02
            licenseAssessment: CC-BY-4.0-attributed-data-summary
            sourceFileId: 34480856
            sourceFileMd5: 1445afdcfb6df784010c2ca034544bc8
            sourceFileSha256: eb645e83dddb40f1654a3e8d721998dbca76eff540231b7b809267c1e96f8d3e
            sourceTaxonomy: HBW–BirdLife version 5.0 (December 2020)
            externalConceptId: AVIBASE-0642F0F9
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
            locator: Amniote_Database_Aug_2015.csv row 265; name Anas andium; reference table row 265; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - litter_or_clutch_size_n
              - incubation_d
              - fledging_age_d
            originalReferenceStrings:
              adult_body_mass_g: mean of Szekely, Lislevand, and Figuerola, 2007 & Boback and Guyer, 2003 from median of 6(Szekely, Lislevand, and Figuerola, 2007, Boback and Guyer, 2003, Dunning, 1992, Dunning, 1992, Bennett, 1986, Werner and Griebeler, 2013)
              litter_or_clutch_size_n: mean of Jetz, Sekercioglu, and Bohning-Gaese, 2008 & Werner and Griebeler, 2013 from median of 4(Bennett, 1986, Jetz, Sekercioglu, and Bohning-Gaese, 2008, Werner and Griebeler, 2013, Boyer, A.G., Cartron, J-L.E., and J.H. Brown, 2009)
              incubation_d: Bennett, 1986
              fledging_age_d: Carrier, D.R., Auriemma, J., 1992
            sameNameSourceLabels:
              - Dunning, 1992
              - Szekely, Lislevand, and Figuerola, 2007
              - Boback and Guyer, 2003
              - Bennett, 1986
              - Werner and Griebeler, 2013
              - Boyer, A.G., Cartron, J-L.E., and J.H. Brown, 2009
              - Jetz, Sekercioglu, and Bohning-Gaese, 2008
              - Carrier, D.R., Auriemma, J., 1992
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

# Anas andium
