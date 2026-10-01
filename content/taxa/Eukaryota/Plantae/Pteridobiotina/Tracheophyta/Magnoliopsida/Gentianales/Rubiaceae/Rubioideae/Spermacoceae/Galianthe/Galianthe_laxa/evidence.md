---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Galianthe laxa (Cham. & Schltdl.) E.L.Cabral
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
        - id: 6JVJ4
          scientificName: Galianthe laxa (Cham. & Schltdl.) E.L.Cabral
          rank: species
          status: accepted
        - id: 4LVY
          scientificName: Galianthe Griseb. ex Lorentz
          rank: genus
          status: accepted
        - id: V5LGW
          scientificName: Spermacoceae Cham. & Schltdl. ex DC.
          rank: tribe
          status: accepted
        - id: V58RX
          scientificName: Rubioideae Bremek. ex Verdc.
          rank: subfamily
          status: accepted
        - id: SGJN5
          scientificName: Rubiaceae Juss.
          rank: family
          status: accepted
        - id: 39D
          scientificName: Gentianales Juss. ex Bercht. & J.Presl
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
            url: https://www.checklistbank.org/dataset/316115/taxon/6JVJ4
            stableId: COL26.8:6JVJ4
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 6JVJ4; source dataset 1141
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
            url: https://list.worldfloraonline.org/wfo-0000968158-2026-06
            stableId: wfo:wfo-0000968158-2026-06
            version: WFO Plant List 2026-06, issued 2026-06-21; crosswalk sidecar pinned in this repository
            publishedAt: 2026-06-21
            accessedAt: 2026-09-27
            locator: Accepted species record wfo-0000968158; exact accepted-name/authorship mapping to COL 6JVJ4
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
            stableId: doi:10.15468/1mtkaw; archive sha256 79455efc837678d0812c4f83247c9f024ab4d8dae43fe72f5c40b2302d50c923; WFO wfo-0000968158
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
        status: not-assessed
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

# Galianthe laxa

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
COL26.8 accepted species ID 6JVJ4 and exact name/authorship map through exactly one accepted WFO usage wfo-0000968158; the Brazilian Flora source record carries the same WFO ID.
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
Brazilian Flora 2020 v393.147, morphology row 95877; WFO wfo-0000968158; source identifier ref-morph-BR-pt-0000968158; reference row 59056; source-reported citation: "R.M. Salas ; Cabral, E.L.; Florentín, J.E.; Fader, A.A.C.; Souza, E.B.; Nepomuceno, F.A.A.; Carmo, J.A.M.; Miguel, L.M.; Nuñez Florentín, M.; Nicora Chequin, R.; Sobrado, S.V. 2020 Galianthe in Flora do Brasil 2020. Jardim Botânico do Rio de Janeiro. Available at: http://floradobrasil.jbrj.gov.br/reflora/floradobrasil/FB14011. Accessed on: Jun. 30, 2021."
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional source fields are retained verbatim with physical archive row locators. A morphology citation is the reference reported by the dataset; rights for the referenced publication are not independently verified. Habitat rows have dataset-level attribution only.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Raiz: tipo e consistência lenhosa(s)/herbácea(s)/pivotante(s). Caule: posição e ramificação(ções) ereto(s)/apoiante(s)/pouco ramificada(s)/delgado(s); superfície(s) consistência e cor glabra(s)/pubescente(s)/puberulento(s)/com cortiça persistente(s)/não alada(s)/esverdeado; seção transversal(ais) tetragonal(ais). Folha: tipo conformação cor pseudoverticilada(s)/elíptica(s)/lanceolada(s)/oval(ais) elíptica(s)/discolor(es)/lustrosa(s)/esverdeada quando seca(s); base peciolada(s)/aguda(s); indumento e margem(ns) pubescente(s)/glabro(s)/inteira; nervação inconspícua(s)/penada(s)/com nervura-central proeminente(s); nervura-lateral evidente(s)/alterno(s) suboposta(s)/4/5/6; estípula(s) multífida(s)/truncada(s)/interpeciolar(es) envolvendo o caule(s)/perene(s)/pubescente(s)/puberulenta(s). Inflorescência: tipo tirsóide(s)/folhosa(s)/laxa(s)/em ramo(s) terminal(ais)/em ramo(s) axilar(es)/longamente pedunculada(s)/inflorescência(s) parcial(ais) fasciculada(s) pauciflora(s). Flor: tipo heterostila(s)/perfeita(s)/actinomorfa(s)/curtamente pedicelada(s)/tetrâmera(s); cálice(s) tetrâmero(s)/lóbulo(s) igual(ais)/com hipanto turbinado(s)/com hipanto glabro(s)/com hipanto puberulento(s)/com hipanto pubescente(s)/lóbulo(s) triangular(es)/lóbulo(s) glabro(s); corola infundibuliforme(s)/branca/externamente glabra(s)/externamente puberulenta(s); corola indumento interno(s) lóbulo(s) glabro(s) sem banda ou anel/anéis/em estilete(s) compr. com anel/anéis de tricoma(s); corola indumento interno(s) tubo com tricoma(s) moniliforme(s)/em estilete(s) compr. em forma de anel/anéis/em brevistila(s) em forma de banda; androceu e gineceu tetrâmero(s)/estame(s) incluso(s) em flor(es) com estilete(s) compr./estame(s) exserto(s) em flor(es) brevistila(s)/com antera(s) dorsifixa(s) oblonga(s) e rimosa(s). Fruto: tipo e indumento cápsula(s) bicarpelar(es) cada carpelo(s) unisseminada(s)/com valva(s) deiscente(s)/não costado(s)/turbinada(s)/glabro(s)/puberulento(s). Semente: formato roliça(s)/elíptica(s)/não alada(s)/quando madura(s) não estrofiolada(s); testa retículo(s).
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Brazilian Flora 2020 v393.147, morphology description row 95877; WFO wfo-0000968158; source identifier ref-morph-BR-pt-0000968158; reference row 59056; dataset-reported citation: "R.M. Salas ; Cabral, E.L.; Florentín, J.E.; Fader, A.A.C.; Souza, E.B.; Nepomuceno, F.A.A.; Carmo, J.A.M.; Miguel, L.M.; Nuñez Florentín, M.; Nicora Chequin, R.; Sobrado, S.V. 2020 Galianthe in Flora do Brasil 2020. Jardim Botânico do Rio de Janeiro. Available at: http://floradobrasil.jbrj.gov.br/reflora/floradobrasil/FB14011. Accessed on: Jun. 30, 2021."
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

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No concrete habitat field is available; an explicit unknown source value is not converted into a biological fact.
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
