---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Restio strobilifer Kunth
    rank: species
    sourceDatasetId: "2232"
    checkedAt: 2026-09-23
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication and cultivation history have not been assessed in this batch.
      fossil: Fossil occurrence and geological age have not been assessed; extant source statements do not imply fossil evidence.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 22
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4RTMJ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 4RTMJ
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-7508b1f1-d459-8c35-a5cc-032ae23afbe8
          metadataVariant: 0
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0000512856-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 4RTMJ / WFO wfo-0000512856
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-ac882a0f-dedc-89e0-ac56-c37d6ab1d406
          metadataVariant: 0
          sourceKey: sanbi_17742_0
          usage:
            locator: Restio species account; SANBI/WFO archive rows 80691 (Morphology), source identifier 17742.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-362dd7ca-f01b-8fa4-a744-f8a20b411e3f
          metadataVariant: 0
          sourceKey: sanbi_13974_0
          usage:
            locator: Restio species account; SANBI/WFO archive rows 105065 (Habitat), source identifier 13974.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            sourceIds:
              - sanbi_17742_0
            locator: SANBI cited species account; archive Morphology row 80691, source 17742.0
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
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - sanbi_13974_0
            locator: SANBI cited species account; archive Habitat row 105065, source 13974.0
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
      distribution:
        status: not-assessed
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
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

# Restio strobilifer

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage 4RTMJ, name, authorship, rank, status and source dataset 2232 checked in the pinned registry; WFO 2026-06 crosswalk maps the same COL ID by exact accepted name and authorship to wfo-0000512856.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Restio as represented by COL26.8 usage 4RTMJ; SANBI's regional source account and its own taxonomic scope are retained and not assumed globally equivalent solely from name matching.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Regional flora statements retain the source scope; cultivated, naturalised, and wild observations are distinguished only where stated.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, and source dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List, version 2026-06, exact COL crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact accepted name and authorship identity link only, not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
The source is a South African regional flora treatment and does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
The source is a South African regional flora treatment and does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Culmis magis minusve ramosis; ramis solitariis, erectis, subfastigiatis; vaginis arctis, sub apice hyalino-membranaceo arido bifido-lacerato mucronatis; spicis in ramis solitariis, rarius geminis, his parum remotis, ellipticis vel elliptico-oblongis, multifloris; squamis late ovatis, castaneo-fuscis, florem aequantibus; masculis acutiusculis; femineis rotundatis, anguste hyalino-marginatis; sepalis rigidis; exterioribus lateralibus carina ferrugineo-villosis; staminibus 3; in floribus femineis rudimentariis; pistillo in floribus masculis rudimentario, tristylo; capsulis complanatis, subrotundis, bilocularibus, calyce triplo brevioribus. Mas: Culmi caespitosi, erecti, 18-20-pollicares ramique teretes, fuscescentes, subtilissime verruculoso-punctulati; hi solitarii, erecti, subfastigiati, simplices. Vaginae arctae, fuscae, sub apice hyalino-membranaceo arido bifido-lacerato mucronatae. Spicae in apice ramorum solitariae, rarius geminae, hae remotae, subellipticae, acutae, juniores apice rotundatae, basi attenuatae vaginaque involutae, multiflorae. Squamae arcte undique imbricatae, latae, apice rotundatae fuscae, hyalino-marginatae, margine angusto albido, florem complanatum aequantes, Sepala 6, olivaceo-hyalina; duo exteriora lateralia naviculari-carinata, obtusiuscula, carina retrorsum ferrugineo-villosa, tertium planiusculum, interioribus simillimum, nisi paulo majus; interiora paulo breviora, planiuscula, obtusa. Filamenta 3, linearia, calycem superantia. Pistillum effetum, triangulare, tristylum. Femina: Culmus et vaginae prorsus ut in mare, ille minus ramosus. Spicae solitariae. Squamae latae, acutiusculae, castaneo-fuscae, obsolete hyalino-marginatae, florem aequantes. Sepala 6, rigida, olivaceo-hyalina; exteriora lateralia naviculari-carinata, acutiuscula, carina superne ferrugineo-villosa, tertium paulo brevius, planiusculum, interioribus simillimum; interiora paulo breviora, oblongo-lanceolata, acutiuscula, uninervia, planiuscula. Stamina 3, effeta. Capsula subrotunda, complanata, styli triplicis rudimento terminata, calyce triplo brevior, fusca, bilocularis, utroque margine dehiscens; loculis 1-spermis. Semina solitaria, fusca. Testa simplex. Albumen album.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Restio strobilifer Kunth 的 SANBI 物种条目记录了植株、叶和花序的形态。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year and page locator are preserved in its source citation and archive row. No dated sampling frame or population frequency is provided in this excerpt.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, and cultivated status are not inferred beyond explicit statements in the cited passage.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only the cited regional morphology and diagnostic descriptions have been assessed; developmental and population variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Well-drained to seasonally damp, sandstone slopes and plateaus.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
区域植物志记载 Restio strobilifer Kunth 的生境为：Well-drained to seasonally damp, sandstone slopes and plateaus.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional species account; publication year and page locator are preserved in its source citation and archive row. No dated sampling frame or population frequency is provided in this excerpt.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, and cultivated status are not inferred beyond explicit statements in the cited passage.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Habitat excerpts do not establish seasonality, localities, interactions, or ecology across each full species range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only source-supported morphology/diagnostic and habitat excerpts have been assessed; life history, evolution, distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Systematic literature review and comparison with the complete COL26.8 species concept have not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
