---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Parus major Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 大山雀
      en: Great tit
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-23c9c793-0bf3-8f66-a9cf-557d6f8947b3
          metadataVariant: 0
          sourceKey: mols2007
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
            url: https://www.checklistbank.org/dataset/316115/taxon/75SVV
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
            locator: Amniote_Database_Aug_2015.csv row 5814; name Parus major; reference table row 5814; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
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
              adult_body_mass_g: mean of Bennett, 1986 & Boback and Guyer, 2003 from median of 16(Dunning, 1992, Dunning, 1992, Dunning, 1992, Dunning, 1992, Bennett, 1986, Dunning, 1992, Boback and Guyer, 2003, Wasser, D.E. and P.W. Sherman, 2010, Dunning, 1992, Dunning, 1992, Dyke and Kaiser, 2010, Boback and Guyer, 2003, Szekely, Lislevand, and Figuerola, 2007, Krist, 2011, Bennett, 1986, de Magalhaes and Costa, 2009)
              female_maturity_d: de Magalhaes and Costa, 2009 from median of 3(Bennett, 1986, de Magalhaes and Costa, 2009, Saether, B-E., Bakke, O., 2000)
              litter_or_clutch_size_n: mean of Jetz, Sekercioglu, and Bohning-Gaese, 2008 & Krist, 2011 from median of 4(Szekely, Lislevand, and Figuerola, 2007, Jetz, Sekercioglu, and Bohning-Gaese, 2008, Krist, 2011, Bennett, 1986)
              birth_or_hatching_weight_g: Bennett, 1986
              incubation_d: Bennett, 1986
              fledging_age_d: Bennett, 1986
              maximum_longevity_y: Wasser, D.E. and P.W. Sherman, 2010
            sameNameSourceLabels:
              - Dunning, 1992
              - Szekely, Lislevand, and Figuerola, 2007
              - de Magalhaes and Costa, 2009
              - Boback and Guyer, 2003
              - Bennett, 1986
              - Dyke and Kaiser, 2010
              - Wasser, D.E. and P.W. Sherman, 2010
              - Krist, 2011
              - Saether, B-E., Bakke, O., 2000
              - Jetz, Sekercioglu, and Bohning-Gaese, 2008
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
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: BirdFuncDat.txt logical TSV row 6883; Scientific=Parus major; BirdFuncDatSources.txt; selected group source labels retained separately.
            accessedAt: 2026-10-02
            sourceVersion: EltonTraits 1.0; metadata latest update August 2013
            sourceFileSha256: 97216eb1797da077169ebb1ebea275db293b09fc62f8bb8911f9beb98c50d321
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
                  - id: Ref_12
                    verbatim: Handbook of the Birds of the World vol.12.  Del Hoyo J., Elliott A., Sargatal J. & Christie D.A. (1992-2011). Lynx Edicions, Barcelona
                certainty: A
              foraging:
                fields:
                  - ForStrat-watbelowsurf
                  - ForStrat-wataroundsurf
                  - ForStrat-ground
                  - ForStrat-understory
                  - ForStrat-midhigh
                  - ForStrat-canopy
                  - ForStrat-aerial
                references:
                  - id: Ref_12
                    verbatim: Handbook of the Birds of the World vol.12.  Del Hoyo J., Elliott A., Sargatal J. & Christie D.A. (1992-2011). Lynx Edicions, Barcelona
                speciesLevel: "1"
            withheldFieldGroups: []
            sourceRecordComment: ""
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
    scientificName: Parus major Linnaeus, 1758
    authorship: Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-25
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
      - id: V2
        scientificName: Aves
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 3RL
        scientificName: Passeriformes
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 626B2
        scientificName: Paridae Vigors, 1825
        authorship: Vigors, 1825
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 6J9Z
        scientificName: Parus Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 75SVV
        scientificName: Parus major Linnaeus, 1758
        authorship: Linnaeus, 1758
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
      wild: Evidence concerns free-living birds captured at sampled European urban and rural sites in 2014–2016.
      domesticated: Domesticated populations were not studied.
      captive: Captive populations were not studied; captured birds were briefly handled for behavioral tests.
      fossil: Fossil occurrences and geological age were not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/75SVV
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:75SVV@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 75SVV; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 75SVV. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-9de315d0-9288-82cd-a0cf-702d8d80f137
          metadataVariant: 0
          sourceKey: senar2017greattit
          usage:
            licenseEvidenceLocator: Article Copyright notice identifies the copyright holders and CC BY terms; the linked license resolves to CC BY 4.0.
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.3389/fevo.2017.00163
            locator: Results, male pecking-rate model and post-hoc sex-stratified analysis; Table 5; Methods, Behavioral tests; Copyright.
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            accessedAt: 2026-09-25
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
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 75SVV; DOI 10.3389/fevo.2017.00163.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      date: 2026-09-25
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
              - senar2017greattit
            locator: Results, male pecking-rate model and post-hoc sex-stratified analysis; Table 5; Methods, Behavioral tests.
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
---

# Parus major

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
荷兰 12 个商业苹果园，1997–2000 年；6 个综合害虫管理和 6 个有机果园，比较各园有繁殖大山雀的巢箱样区与对照样区。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Twelve commercial apple orchards in the Netherlands, 1997–2000; six integrated-pest-management and six organic orchards, comparing nest-box plots with breeding great tits against control plots.
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
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 75SVV. The evidence concerns handling responses of captured great tits in sampled European urban and rural populations; it is not a global behavior estimate or a complete species account.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text as identified in the article copyright notice. Claim paraphrased; no figure, table, image, or other third-party material reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Senar J.C., Garamszegi L.Z., Tilgar V., Biard C., Moreno-Rueda G., Salmón P., Rivas J.M., Sprau P., Dingemanse N.J., Charmantier A., Demeyrier V., Navalpotro H., Isaksson C. (2017). Frontiers in Ecology and Evolution 5:163. https://doi.org/10.3389/fevo.2017.00163. CC BY 4.0. Claim paraphrased; no figures or tables reused.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Sex-specific pecking responses to brief handling among sampled wild European great tits at urban and paired rural sites.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary comparative field study; not a complete species ecology or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted species usage and every accepted parent node in the pinned COL26.8 registry; reviewed the paired-site sampling, behavioral-test protocol, sex-specific pecking results, and article copyright notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary study directly naming Parus major and reporting sex-specific pecking results from defined urban/rural field samples with a handling protocol.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Global behavior claims, causes of urban/rural differences, selection-versus-plasticity conclusions, complete range or life history, fossils, and conservation claims not established by this study.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
This handling-behavior study does not assess diagnostic morphology or species-wide morphological variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The short handling trial does not establish demographic rates, breeding success, or a complete life-history account.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In a post-hoc analysis separating the sexes, male great tits with pecking measurements had higher pecking rates at urban than at paired rural sites (likelihood-ratio test LRT=4.79, p=0.03); the corresponding habitat effect was not detected in females (p=0.95). The overall habitat effect in the full pecking model was not significant (p=0.10). Pecking was counted during a 15-second handling trial within five minutes after capture. This result describes acute handling responses in the sampled populations; it does not establish a global species pattern, local adaptation, or the cause of the difference.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
按性别分开的事后分析显示，在有啄击数据的大山雀中，城市地点雄鸟的啄击率高于配对的乡村地点（似然比检验 LRT=4.79，p=0.03）；雌鸟未检测到相应的栖息地效应（p=0.95）。完整啄击模型中的总体栖息地效应并不显著（p=0.10）。啄击是在捕获后五分钟内的 15 秒手持测试中计数的。该结果描述的是所采样种群的急性手持反应，不能证明全球性的物种模式、局地适应或差异成因。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Paired urban and rural populations at European localities sampled during 2014–2016. The overall study quantified 1,539 birds at seven paired localities, but pecking/distress-call tests were not recorded in Montpellier and Munich, where only breath rate was measured; the pecking result applies to the sites with those measurements. Barcelona sampling was January–April; other sites were sampled during their local breeding seasons.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-living wild birds captured at study sites and briefly handled for measurements; captive or domesticated populations were not studied.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The handling experiment measures a short acute response in sampled European populations; it does not establish global variation, selection versus plasticity, causal urban mechanisms, or current behavior.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The study does not resolve evolutionary history or distinguish genetic adaptation from phenotypic plasticity.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Seven paired European locality samples are not a complete geographic range assessment.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The study does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The behavior comparison does not establish current population trends, threats, or conservation status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in ecology only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain explicitly not assessed.
<!-- /evo:text -->
