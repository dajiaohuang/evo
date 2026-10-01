---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Schaueria marginata Nees
    rank: species
    sourceDatasetId: "1141"
    checkedAt: 2026-09-27
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col26
        - wfo2026
        - brazilFlora2020
      classificationPath:
        - id: 4V67P
          scientificName: Schaueria marginata Nees
          rank: species
          status: accepted
        - id: 7DBQ
          scientificName: Schaueria Nees
          rank: genus
          status: accepted
        - id: KVV7S
          scientificName: Tetrameriinae T.F.Daniel, Kiel & McDade
          rank: subtribe
          status: accepted
        - id: KVHP9
          scientificName: Justicieae Dumort.
          rank: tribe
          status: accepted
        - id: "62757"
          scientificName: Acanthoideae Eaton
          rank: subfamily
          status: accepted
        - id: "62332"
          scientificName: Acanthaceae Juss.
          rank: family
          status: accepted
        - id: 3F4
          scientificName: Lamiales Bromhead
          rank: order
          status: accepted
        - id: MG
          scientificName: Magnoliopsida
          rank: class
          status: accepted
        - id: TP
          scientificName: Tracheophyta
          rank: phylum
          status: accepted
        - id: CMQ8S
          scientificName: Pteridobiotina Britton & Brown
          rank: subkingdom
          status: accepted
        - id: P
          scientificName: Plantae
          rank: kingdom
          status: accepted
        - id: CS5HF
          scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
          rank: domain
          status: accepted
    lifeStatusScope:
      wild: Wild status is not specified in these source fields.
      domesticated: Cultivated or managed status is not specified; none is inferred.
      fossil: Fossil applicability is not assessed from this extant-flora source.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 24
          sourceKey: col26
          usage:
            licenseAppliesTo: Nomenclatural identity record only; no biological text reused
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4V67P
            stableId: COL26.8:4V67P
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 4V67P; source dataset 1141
            attribution: Catalogue of Life COL26.8; underlying dataset 1141
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-43499f65-2865-819f-a936-29a569ccf911
          metadataVariant: 0
          sourceKey: wfo2026
          usage:
            licenseAppliesTo: WFO nomenclatural data
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0001044280-2026-06
            stableId: wfo:wfo-0001044280-2026-06
            version: WFO Plant List 2026-06, issued 2026-06-21; crosswalk sidecar pinned in this repository
            publishedAt: 2026-06-21
            accessedAt: 2026-09-27
            locator: Accepted species record wfo-0001044280; exact accepted-name/authorship mapping to COL 4V67P
            attribution: World Flora Online Plant List 2026-06
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-352c188a-fa63-8d4e-a243-10428cf85b9c
          metadataVariant: 0
          sourceKey: brazilFlora2020
          usage:
            licenseAppliesTo: Brazilian Flora 2020 archived dataset fields; not inferred for linked publications, images or PDFs
            stableId: doi:10.15468/1mtkaw; archive sha256 79455efc837678d0812c4f83247c9f024ab4d8dae43fe72f5c40b2302d50c923; WFO wfo-0001044280
            accessedAt: 2026-09-06
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            attribution: "Group Brazil Flora, REFLORA Program (2014): Brazilian Flora 2020, v393.147, doi:10.15468/1mtkaw"
            licenseAssessment: aggregate-declaration-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            originalLanguage: pt
            translationStatus: untranslated
            sourceIds:
              - brazilFlora2020
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
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            originalLanguage: pt
            translationStatus: untranslated
            sourceIds:
              - brazilFlora2020
            locator: Brazilian Flora 2020 v393.147, habitat field row 59818; dataset DOI 10.15468/1mtkaw; WFO wfo-0001044280
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
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
---

# Schaueria marginata

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
COL26.8 accepted species ID 4V67P and exact name/authorship map through exactly one accepted WFO usage wfo-0001044280; the Brazilian Flora source record carries the same WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species concept. Brazilian Flora fields remain regional dataset records; no global, current, complete-range or taxonomic-equivalence claim is made.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8, ChecklistBank dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, COL ID, parent chain and source dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List 2026-06, pinned exact COL-to-WFO crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact accepted-name and authorship species crosswalk; nomenclatural identity only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Brazilian Flora 2020 v393.147, morphology row 96530; WFO wfo-0001044280; source identifier ref-morph-BR-pt-0001044280; reference row 59709; source-reported citation: "Côrtes, A.L.A. 2020 Schaueria in Flora do Brasil 2020. Jardim Botânico do Rio de Janeiro. Available at: http://floradobrasil.jbrj.gov.br/reflora/floradobrasil/FB15377. Accessed on: Jun. 30, 2021."; habitat row 59818
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional source fields are retained verbatim with physical archive row locators. A morphology citation is the reference reported by the dataset; rights for the referenced publication are not independently verified. Habitat rows have dataset-level attribution only.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Caule: formato do caule(s) quadrangular(es); indumento glabro(s) ou hirsuto(s) com tricoma(s) em 2 linha(s) oposta(s) no internó(s). Folha: pedicelo(s) presente(s); lâmina(s) foliar(es) cartácea(s)/lanceolada(s)/base atenuada(s)/ápice(s) aguda(s) a(s) acuminada(s)/face(s) abaxial e adaxial glabra(s) ou hispídula(s)/margem(ns) repando(s). Inflorescência: tipo de inflorescência(s) tirso(s) terminal(ais)/racemo(s) dicasial/dicásio 1 a(s) 3 flor(es)/subtendida(s) 1 bráctea(s) e 2 bractéola(s); bráctea(s) verde/oblonga(s)/face(s) adaxial e abaxial hispídula(s); bractéola(s) verde/triangular(es)/indumento igual(ais) às bráctea(s). Flor: lobo(s) do cálice(s) 5 lobado(s)/desigual(ais)/acrescente(s) no fruto(s); cor do cálice(s) verde; forma do cálice(s) triangular(es); cor da corola branca; tubo da corola cilíndrico(s); corola bilabiada(s) presente(s); lábio(s) superior(es) bilobado(s)/reto(s); lábio(s) inferior(es) trilobado(s)/reto(s); estame(s) 2/exserto(s)/inserido(s) na(s) base corola/filete(s) branco/filete(s) hispídulo(s)/antera(s) biteca(s)/teca(s) paralela(s)/estaminódio(s) ausente(s); gineceu estilete(s) exserto(s) branco/estigma(s) bilobado(s). Fruto: tipo de fruto(s) cápsula(s) estipitada(s)/cabeça(s) clavada(s). Semente: número e forma e ornamentação das semente(s) 4/lenticular(es)/reticulada(s)/margem(ns) com tubérculo(s).
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Brazilian Flora 2020 v393.147, morphology description row 96530; WFO wfo-0001044280; source identifier ref-morph-BR-pt-0001044280; reference row 59709; dataset-reported citation: "Côrtes, A.L.A. 2020 Schaueria in Flora do Brasil 2020. Jardim Botânico do Rio de Janeiro. Available at: http://floradobrasil.jbrj.gov.br/reflora/floradobrasil/FB15377. Accessed on: Jun. 30, 2021."
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Verbatim morphology field in the Brazilian Flora 2020 regional dataset. The field does not establish a global description, sampling coverage, population variation, sex or life stage unless stated in its text.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
The field does not state whether observations concern wild, cultivated, managed or fossil material; none is inferred.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only one source-labelled morphology field is included; its completeness, variation and diagnostic scope have not been assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The source habit field is not treated as life-history evidence; life cycle and reproduction were not assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Terrícola
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habitat or substrate category exactly as recorded in this Brazilian Flora dataset row; no collection locality, survey date, global range or sampling completeness is supplied by the field.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild, cultivated, managed and fossil applicability are not specified by this field.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Only source-labelled habitat field(s) are included; interactions, variation, locality and sampling coverage have not been assessed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-level phylogenetic or comparative evidence was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No locality or range evidence was assessed; the regional flora dataset does not establish a complete distribution.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil search or species-level fossil evidence was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No qualifying conservation assessment was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only source-labelled morphology and/or habitat fields are included; six-facet coverage and required within-facet evidence checks remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No verified Chinese translation, systematic cross-source review or independent expert review has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The dataset license is aggregate-declaration-only for dossier purposes; underlying cited publication rights were not item-level verified.
<!-- /evo:text -->
