---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Gaylussacia arassatubensis R.R.Silva & Cervi
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
        - id: 6JZ7L
          scientificName: Gaylussacia arassatubensis R.R.Silva & Cervi
          rank: species
          status: accepted
        - id: 4MHZ
          scientificName: Gaylussacia Kunth
          rank: genus
          status: accepted
        - id: KVXTC
          scientificName: Vaccinieae Rchb.
          rank: tribe
          status: accepted
        - id: KH2
          scientificName: Vaccinioideae Arn.
          rank: subfamily
          status: accepted
        - id: 623P8
          scientificName: Ericaceae Juss.
          rank: family
          status: accepted
        - id: 625QY
          scientificName: Ericales Bercht. & J.Presl
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6JZ7L
            stableId: COL26.8:6JZ7L
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 6JZ7L; source dataset 1141
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
            url: https://list.worldfloraonline.org/wfo-0000695678-2026-06
            stableId: wfo:wfo-0000695678-2026-06
            version: WFO Plant List 2026-06, issued 2026-06-21; crosswalk sidecar pinned in this repository
            publishedAt: 2026-06-21
            accessedAt: 2026-09-27
            locator: Accepted species record wfo-0000695678; exact accepted-name/authorship mapping to COL 6JZ7L
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
            stableId: doi:10.15468/1mtkaw; archive sha256 79455efc837678d0812c4f83247c9f024ab4d8dae43fe72f5c40b2302d50c923; WFO wfo-0000695678
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
            locator: Brazilian Flora 2020 v393.147, habitat field row 40298; dataset DOI 10.15468/1mtkaw; WFO wfo-0000695678
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

# Gaylussacia arassatubensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
COL26.8 accepted species ID 6JZ7L and exact name/authorship map through exactly one accepted WFO usage wfo-0000695678; the Brazilian Flora source record carries the same WFO ID.
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
Brazilian Flora 2020 v393.147, morphology row 90736; WFO wfo-0000695678; source identifier ref-morph-BR-pt-0000695678; reference row 53915; source-reported citation: "Romão, G.O.; Cabral, A.; Santos, F.B.D.; Kinoshita, L.S. 2020 Gaylussacia in Flora do Brasil 2020. Jardim Botânico do Rio de Janeiro. Available at: http://floradobrasil.jbrj.gov.br/reflora/floradobrasil/FB7482. Accessed on: Jun. 30, 2021."; habitat row 40298
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional source fields are retained verbatim with physical archive row locators. A morphology citation is the reference reported by the dataset; rights for the referenced publication are not independently verified. Habitat rows have dataset-level attribution only.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Caule: planta(s) sub fastigiada(s)/corimbiforme(s)/com base procumbente(s)/com catafilo(s) decíduo(s) precocemente; indumento do ramo(s) glabro(s)/pubérulo(s); tricoma(s) na(s) planta(s) simples não glandular(es)/glandular(es)/alvo. Folha: consistência e disposição rigidamente coriácea(s)/não imbricada(s)/concolor(es); formato elíptica(s)/obovada(s)/oblanceolada(s); margem(ns) serrilhada(s) ou crenulada(s) próximo(s) do ápice(s)/ligeiramente revoluta(s); face(s) adaxial glabra(s); face(s) abaxial glabra(s)/pubescente(s) somente na(s) base; glândula(s) diminuta(s) na(s) face(s) abaxial clavada(s)/enegrecida/avermelhada; nervação broquidódroma(s)/nervura(s) ligeiramente proeminente(s) na(s) face(s) abaxial. Inflorescência: tipo racemo(s)/axilar(es)/paucifloro(s); raque tomentosa(s)/híspida(s) glandular(es)/com glândula(s) diminuta(s) clavada(s) ou capitada(s) esparsa(s); bráctea(s) floral(ais) elíptica(s)/oblanceolada(s)/rômbica(s)/obtrulada(s); bractéola(s) lanceolada(s). Flor: cálice(s) e hipanto glabro(s)/ciliado(s) no lobo(s)/híspido(s) glandular(es)/com glândula(s) diminuta(s) clavada(s) esparsa(s); corola campanulada(s)/largamente campanulada(s)/branca; indumento da corola glabra(s); estame(s) com filete(s) reto(s) e achatado(s)/tomentoso(s)/antera(s) com teca(s) longamente tubulosa(s); ovário(s) ínfero(s)/pseudo 10 lóculo(s)/lóculo(s) com 1 óvulo(s). Fruto: tipo nuculânio(s) depresso(s) globoso(s)/liso(s)/glabro(s).
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Brazilian Flora 2020 v393.147, morphology description row 90736; WFO wfo-0000695678; source identifier ref-morph-BR-pt-0000695678; reference row 53915; dataset-reported citation: "Romão, G.O.; Cabral, A.; Santos, F.B.D.; Kinoshita, L.S. 2020 Gaylussacia in Flora do Brasil 2020. Jardim Botânico do Rio de Janeiro. Available at: http://floradobrasil.jbrj.gov.br/reflora/floradobrasil/FB7482. Accessed on: Jun. 30, 2021."
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
