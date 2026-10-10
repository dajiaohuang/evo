---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Molossus aztecus Saussure, 1860
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
        - itis
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: The study does not provide a domestication or captive-status assessment. No domestic or captive biology is asserted.
      fossil:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/fossil
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 25
          sourceKey: col
          usage:
            licenseAppliesTo: COL26.8 release record
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            version: COL26.8; ChecklistBank dataset 316115, pinned 2026-08-20
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            attribution: Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            url: https://www.checklistbank.org/dataset/316115/taxon/43YHH
            stableId: 43YHH
            locator: COL26.8 accepted species usage 43YHH
          originalFields:
            - id
            - title
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-5cb92bf3-74b7-8042-a14e-7c9cbe95267b
          metadataVariant: 0
          sourceKey: itis
          usage:
            licenseAppliesTo: ITIS nomenclatural authority data only
            stableId: ITIS TSN 946101
            accessedAt: 2026-09-24
            attribution: ITIS (2026-08-26 export), DOI 10.5066/F7KH0KBK; crosswalk exact-matches the COL usage ID and valid ITIS TSN.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            locator: Pinned exact crosswalk row 43YHH; valid ITIS usage TSN 946101
          originalFields:
            - id
            - title
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-591f48c9-7153-882f-aec6-284a4536eeb8
          metadataVariant: 0
          sourceKey: plos-molossus-2025
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0320117
            accessedAt: 2026-09-24
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - locator
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - plos-molossus-2025
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
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
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - plos-molossus-2025
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/locator
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
  catalogue-profile:
    scientificName: Molossus aztecus
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Molossus aztecus
      en: Molossus aztecus
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
      - topic: sources
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
      - topic: overview
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: ecology
        sourceIds:
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Molossus aztecus
            url: https://www.checklistbank.org/dataset/316115/taxon/43YHH
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
            locator: Amniote_Database_Aug_2015.csv row 10619; name Molossus aztecus; reference table row 10619; sparse-table row locators retained per field in data/sources/amniote-lifehistory-2015-authored-records.jsonl.gz.
            accessedAt: 2026-10-02
            availableFields:
              - adult_body_mass_g
              - female_maturity_d
              - litter_or_clutch_size_n
              - gestation_d
              - weaning_d
              - birth_or_hatching_weight_g
            originalReferenceStrings:
              adult_body_mass_g: BC mammals - Wilson, 2003 from median of 5(BC mammals - Wilson, 2003, BC mammals - Wilson, 2003, Jones, K., Bielby, J., Cardillo, M. et al., 2009, BC mammals - Savage et al., 2004, Jones, K., Bielby, J., Cardillo, M. et al., 2009)
              female_maturity_d: Jones, K., Bielby, J., Cardillo, M. et al., 2009
              litter_or_clutch_size_n: Jones, K., Bielby, J., Cardillo, M. et al., 2009
              gestation_d: Jones, K., Bielby, J., Cardillo, M. et al., 2009
              weaning_d: Jones, K., Bielby, J., Cardillo, M. et al., 2009
              birth_or_hatching_weight_g: Jones, K., Bielby, J., Cardillo, M. et al., 2009
            sameNameSourceLabels:
              - Jones, K., Bielby, J., Cardillo, M. et al., 2009
              - BC mammals - Savage et al., 2004
              - BC mammals - Wilson, 2003
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
            locator: MamFuncDat.txt logical TSV row 4293; Scientific=Molossus aztecus; MamFuncDatSources.txt; selected group source labels retained separately.
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
---

# Molossus aztecus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
The pinned COL26.8 registry row for 43YHH was verified as accepted rank=species, full scientific name and authorship, and sourceDatasetId 2144. The COL-ID row in the pinned ITIS 2026-08-26 mammal crosswalk was then checked for an accepted exact normalized binomial match, valid ITIS usage, and TSN 946101; no name-only fuzzy match was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
This confirms the versioned nomenclatural usage link between COL26.8 and the ITIS authority record. It does not independently establish full biological species-concept equivalence across studies.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Biological claims refer only to adult specimens and the sampled populations represented in Olímpio et al. 2025; a full wild-range assessment was not performed.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / fossil

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/fossil -->
No fossil occurrence is asserted. The study’s fossilized birth-death model calibration is not treated as a species fossil record.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted COL26.8 name, authorship, rank, status, source dataset and COL identifier only; no biological claims.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Nomenclatural crosswalk for identity corroboration only; it does not establish full biological species-concept equivalence.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article text and author-generated material; this dossier paraphrases text and does not redistribute figures or third-party assets.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Olímpio APM et al. (2025), PLOS ONE 20(4): e0320117, https://doi.org/10.1371/journal.pone.0320117; paraphrased and scope-limited.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Peer-reviewed study of 299 adult specimens from ten Molossus species, cranial geometric morphometrics, mitochondrial COI and cyt b phylogeny, and comparative analyses. Species-level observations are limited to the paper’s reported sample, measurements, and tree; it is not a complete species monograph.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Version of record, Methods > Taxonomic sampling and Molecular analyses; Results > Variability of sizes and shapes in Molossus and Phylogeny and phylogenetic signal; Fig. 6 and Discussion > Phylogenetic implications.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The study examined 12 adult Molossus specimens and reports a mean forearm length of 39.74 mm, classified as medium under its stated length bands. The sample is restricted to adults and this single quantitative size indicator; it does not establish the species’ full morphology or sex- and age-related variation.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Methods > Taxonomic sampling (adult sampling criteria and species sample sizes); Results > Variability of sizes and shapes in Molossus, paragraph beginning “The species also differ in forearm measurements”.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Adult specimens included in the 2025 study’s Neotropical sample; species-level specimen localities were not abstracted here. Forearm length is reported in millimetres as a proxy for body size, using the authors’ size categories.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Study specimens only; the paper does not provide a complete wild, captive, or domesticated status audit for every specimen.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Sex-specific values, age beyond the adult-only criterion, geographic variation, diagnostic characters, and a complete species-level character account were not assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The study does not investigate life cycle, reproduction, development, seasonal timing, or behavior for this species.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The article gives genus-level context about insectivory and possible ecological drivers; species-specific diet, habitat, and interaction evidence for this taxon was not abstracted or assessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The mitochondrial COI + cyt b tree places M. aztecus in the paper’s strongly supported clade with M. fluminensis, M. bondae, M. sinaloae, M. rufus, M. pretiosus, and M. currentium.
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Results > Phylogeny and phylogenetic signal; Fig. 6 (Bayesian tree inferred from mitochondrial COI and cytochrome b sequences).
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The study’s sampled Molossus tree, based on mitochondrial COI and cytochrome b; clade support and sampling are as reported by the authors. This is one study’s phylogenetic result, not a synthesis of all available evidence.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Evolutionary inference for the nominal species in the study’s sampled tree; no population-level or fossil-specimen claim is made.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Nuclear-genome, population-level, and broader comparative phylogenies were not reviewed; no independent replication or conflict search was performed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The paper’s Neotropical sample is not a species-level range treatment. Specimen localities, native or introduced status, range boundaries, and sampling completeness were not abstracted.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No species-level fossil record search was performed. The paper uses a fossilized birth-death calibration in its genus-level phylogeny, which is not evidence of fossils assigned to this species.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current global or national conservation assessment search was performed; no risk category is inferred.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
This is a single-study evidence slice; life history, species-specific ecology, full distribution, fossil occurrence, and conservation assessment remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Morphological evidence is limited to adult-sample forearm measurements and does not provide a complete diagnostic or variation account.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Evolutionary evidence is limited to one mitochondrial phylogenetic analysis and has study-specific sampling and support limits.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
The exact COL-to-ITIS nomenclatural link does not by itself establish full biological species-concept equivalence;
<!-- /evo:text -->
