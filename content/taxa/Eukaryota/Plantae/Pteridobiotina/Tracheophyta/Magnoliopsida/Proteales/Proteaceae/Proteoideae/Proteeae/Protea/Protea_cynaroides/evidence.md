---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Protea cynaroides (L.) L.
    rank: species
    sourceDatasetId: "1141"
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
      domesticated: Domestication and cultivar history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed; extant records are not used to infer fossils.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 22
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4N2PR
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 4N2PR
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-7508b1f1-d459-8c35-a5cc-032ae23afbe8
          metadataVariant: 0
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0001106756-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 4N2PR / WFO wfo-0001106756
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-c40134d5-38b7-834b-aeb5-84af3ad0eefe
          metadataVariant: 0
          sourceKey: sanbi_14383_0
          usage:
            locator: Protea cynaroides (L.) L. account; archive rows 5550 (Morphology), 31296 (Habitat), source identifier 14383.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            licenseAssessment: aggregate-declaration-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-dcb75f46-5b6d-8001-af55-e45eb4d05261
          metadataVariant: 0
          sourceKey: sanbi_11445_0
          usage:
            locator: Protea cynaroides (L.) L. account; archive rows 44029 (Diagnostic), source identifier 11445.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            licenseAssessment: aggregate-declaration-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - sanbi_14383_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/textZh
            sourceIds:
              - sanbi_11445_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus
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
            sourceIds:
              - sanbi_14383_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
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

# Protea cynaroides

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 4N2PR, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 4N2PR; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Regional account statements retain source scope; native, naturalised, and cultivated occurrences are distinguished only where stated.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1141
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
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Resprouting shrub to 3 m. Leaves long-petiolate, elliptic to rhomboid. Flower heads large, obconic to cup-shaped, 120-300 mm diam., involucral bracts pale or deep pink, often silky outside, style 80-95 mm long.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 5550; source 14383.0; publication: Manning, JC; Goldblatt, P. 2012. Proteaceae. In: J Manning & P Goldblatt (eds), Plants of the Greater Cape Floristic Region 1: The Core Cape flora, Strelitzia 29: 657 - 681. South African National Biodiversity Institute, Pretoria. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
Climatic, geographical and ecological constraints have all influenced P. cynaroides, particularly in respect of the differentiation of local races within the species. Indeed, this protea is something of a paradox: it is at once the most distinctive species in the genus, yet it is also one of the most variable, consisting of innumerable local races or variants differing not only in growth habit and stature, as well as in the colour, size and structure of the flower-head, but also in flowering time. So numerous are the variants within this single species that an entire book could be devoted to them, but only three can be shown here. All, however, are united by a single common character: the glabrous leaves have a prominent petiole or leaf stalk-Several attempts have been made to define these local races more precisely and to give them formal taxonomic rank. To this end the varieties elliptica, glabrata, obtusifolia and albiflora were published by various botanists during the past, though none of these names can satisfactorily be applied to populations in the field. More recently, however, the diverse variants of P. cynaroides were the subject of a detailed study by Dr. Marie Vogts (Die Geografie en die Geografiese variasie van Protea cynaroides, Stellenbosch University, Nov. 1971). She recognized three broad groups based on leaf characters: (1) an oval- to round-leaved variant occurring largely in the western Cape (Plate 16); (2) a broad, elliptic-leaved variant occurring in the Outeniqua and Van Stadens mountains (frontispiece); and (3) a small elliptic-leaved variant characteristic of lower elevations along the coastal belt from George to Port Elizabeth. The elliptic-leaved variants, both large and small, always attract attention on account of their unusual foliage. First appearing on the Langeberg above Swellendam (often in association with broad, round-leaved forms) the elliptic-leaved variants are found mainly along the southern Cape coastal shelf at low elevations (usually below 150 m), between George and Port Elizabeth. There is a reduction in. flower-head size as one progresses eastwards. This trend begins to be noticeable near Knysna, at Noetzie and Kruis-fontein, becoming more marked at Blue Lilies Bush in the Tzitzikama region, with the smallest flower-heads being found on the extreme dwarf form which occurs on the sandy, often winter-waterlogged flats about 25 km west of Port Elizabeth. These extreme, dwarf variants, growing in the vicinity of Lorraine and St. Albans, are of small stature, rarely exceeding 350 mm in height, their flower-heads only about 120 mm in diameter and their tiny, elliptic leaves about 25 mm in width.Apart from differences in leaf form it is the flower-heads themselves which display the greatest degree of variation, particulary with respect to size and colour. In size they range from narrowly goblet shape and 120 mm in diameter in the diminutive Port Elizabeth forms, to colossal shallowly bowl-shaped flower-heads up to 300 mm in diameter in some of the Langeberg and Outeniqua variants. The form and positioning of the inner involucral bracts has a profound effect on the overall shape of the flower-heads. These bracts may be widely splayed and sharply pointed, as in the Grahamstown and Beggarsbush variants. Conversely, some of Outeniqua variants occurring between Cloete's Pass and George, frequently have closely overlapping bracts. One of the most unusual variants has obtuse almost rounded bracts and appears sporadically in the Suuranys mountains near Kareedouw at the eastern end of the Longkloof as well as on the Loerie mountains near Humansdorp.Superimposed on the species east-west variation pattern are the character changes which take place over altitudinal gradients - a phenomenon particularly evident where high mountains rise abruptly from the coastline. This is well demonstrated at localities such as Cape Point, Betty's Bay and Kruisfontein. The populations occurring almost at sea-level, within a few hundred metres of the high water mark, have glabrous or almost completely glabrous involucral bracts, while on the same mountain a mere kilometre or two away at an elevation of 300 metres, the bracts are densely sericeous. Thus, pubescence on the bracts is almost invariably absent in extreme maritime variants but increases in density with elevation and distance from the sea. Usually the bracts are pale pink but deep crimson and even bronzy-red tones are known. Colour is usually intensified by the absence of pubescence in the extreme maritime variants, though these are not the most attractive forms. Rather, it is the pale pink forms with a silvery sheen - an effect created by soft white pubescence overlying the bracts - which are most admired. So called 'white' colour forms are also occasionally encountered. They are not really white but a pale creamy-green. I have only seen these 'white' forms in the Kogelberg Forest Reserve, though they may well occur elsewhere. The combinations resulting from all these variables are legion so it is therefore not surprising that within her three broad groups, Dr. Marie Vogts was able to distinguish at least 80 local variants, characterized by their morphology, colour and flowering times.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了该种的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 44029; source 11445.0; publication: Rourke, JP. 1980. The proteas of southern Africa. Purnell, Cape Town. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only regional morphology and diagnostic descriptions have been assessed; developmental and population-level variation remains unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Moist sandstone slopes.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 31296; source 14383.0; publication: Manning, JC; Goldblatt, P. 2012. Proteaceae. In: J Manning & P Goldblatt (eds), Plants of the Greater Cape Floristic Region 1: The Core Cape flora, Strelitzia 29: 657 - 681. South African National Biodiversity Institute, Pretoria. [CC BY]
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Habitat excerpt does not establish seasonality, observation localities, interactions, or ecology across the full range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only source-supported morphology/diagnostics and habitat have been assessed; life history, evolution, full distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Systematic literature review and comparison of the regional account with the complete COL26.8 concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
