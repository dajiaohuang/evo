---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Restio vilis Kunth
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4RTP2
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 4RTP2
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
            url: https://list.worldfloraonline.org/wfo-0000512959-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 4RTP2 / WFO wfo-0000512959
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
            locator: Restio species account; SANBI/WFO archive rows 80692 (Morphology), source identifier 17742.0
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
        - referenceId: ref-7828e207-cb0a-8d61-afd3-3a3003551064
          metadataVariant: 0
          sourceKey: sanbi_14656_0
          usage:
            locator: Restio species account; SANBI/WFO archive rows 105070 (Habitat), source identifier 14656.0
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
            locator: SANBI cited species account; archive Morphology row 80692, source 17742.0
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
              - sanbi_14656_0
            locator: SANBI cited species account; archive Habitat row 105070, source 14656.0
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

# Restio vilis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage 4RTP2, name, authorship, rank, status and source dataset 2232 checked in the pinned registry; WFO 2026-06 crosswalk maps the same COL ID by exact accepted name and authorship to wfo-0000512959.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Restio as represented by COL26.8 usage 4RTP2; SANBI's regional source account and its own taxonomic scope are retained and not assumed globally equivalent solely from name matching.
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
Culmis simplicibus vel ramosis, obsoletius tuberculosis; vaginis arctis, apicem versus hyalino-membranaceis, aridis et laceris, sub apice aristulatis; spicis masculis multifloris, cylindraceis, acutis, in apice culmi vel ramorum per paniculam simplicem dispositis; squamis ovatis, superne hyalinomarginatis, apice subulato-mucronatis, florem paulo superantibus; sepalis exterioribus lateralibus acutatis; antheris...; spicis femineis duabus, terminalibus, approximatis, multifloris,cylindraceo-oblongis; sepalis exterioribus angustato-subulatis, fructum bilocularem duplo superantibus; stylo elongato. Culmi erecti, simplices vel simpliciter ramosi, teretes, subolivaceo-fuscescentes, obsolete et subtilissime punctulato-tuberculosi, sub15-pollicares. Vaginae fuscae. Spicae masculae multiflorae, sessiles vel breviter pedunculatae. Squamae arcte imbricatae. Sepala 6, rigida, dorso ferruginea; exteriora paulo longiora, lateralia naviculari-carinata, carina ferrugineo-villosa, tertium planum; interiora aequalia. Filamenta 3, elongata, linearia. Antherae... Specimina feminea (an vere hujus speciei?) Culmi? simplices. Vaginae ut in speciminibus masculis. Spicae in apice culmi (?) 2, approximatae. Squamae ut in mare, nisi robustiores et longius mucronatae. Sepala 6, rigida, castaneo-fusca; exteriora paulo longiora, lateralia carinata, carina ferrugineo-villosa, tertium et interiora plana. Fructus (capsularis?) obovato-subrotundus, lenticulari-complanatus, stylo persistente elongato apice bifido (stigmatibus delapsis) terminatus, bilocularis, calyce dimidio brevior. Vix a Restione trifloro distinctus; flores feminei in R. vili duplo majores. Suppetunt alia specimina mascula mox descriptis simillima, nisi robustiora; descriptio sequitur: Culmi 1-1.5 pedales, ramosi ramique viriduli et subtilissime punctulati; hi solitarii, elongati. Vaginae arctae, ferrugineae, apicem versus utrinque hyalino-membranaceae et arida, sub apice bifido aristulatae. Spicae (masculae) cylindraceae, acutae, leviter arcuatae, in apice ramorum per paniculam simplicem dispositae, sessiles et breviter pedunculatae. Squamae arcte imbricatae, ovato-ellipticae, acuto-mucronatae, castaneo-fuscae, superne ad utrumque marginem hyalinae, florem paulo superantes. Sepala acutiuscula; exteriora vix longiora, lateralia naviculari-carinata, carina ferrugineo-villosa. Stamina 3. Antherae dorso supra basim affixae, oblongo-lanceolatae, acuto-mucronulatae, uniloculares, flavidae, antice longitudinaliter dehiscentes.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Restio vilis Kunth 的 SANBI 物种条目记录了植株、叶和花序的形态。
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
Seepages in valleys between granite domes.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
区域植物志记载 Restio vilis Kunth 的生境为：Seepages in valleys between granite domes.
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
