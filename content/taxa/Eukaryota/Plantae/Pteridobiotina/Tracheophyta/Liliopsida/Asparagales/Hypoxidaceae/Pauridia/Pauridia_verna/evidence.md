---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Pauridia verna (Hilliard & B.L.Burtt) Snijman & Kocyan
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
      domesticated: Domestication and cultivar history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed; extant floras are not used to infer fossil records.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 22
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/767C2
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 767C2
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
            url: https://list.worldfloraonline.org/wfo-0001336351-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 767C2 / WFO wfo-0001336351
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
        - referenceId: ref-e97a6c82-af79-875a-a072-ef81915016f7
          metadataVariant: 0
          sourceKey: sanbi_15172_0
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
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
              - sanbi_15172_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/textZh
            sourceIds:
              - sanbi_15172_0
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
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - sanbi_15172_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
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

# Pauridia verna

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 767C2, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 767C2; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Regional account statements retain their source scope; wild, naturalised, and cultivated occurrences are separated only when stated in the cited text.
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

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Pauridia verna (Hilliard & B.L.Burtt) Snijman & Kocyan account; SANBI/WFO archive rows 60930 (Morphology), 60107 (Habitat), 58384 (Diagnostic), source identifier 15172.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Plants 2-4 cm tall. Corm somewhat ovoid, 5-8 mm diam., fibreless proximally, extending into a short, dark brown papery sheath distally; roots arising from proximal third of corm. Cataphylls absent at flowering. Leaves (3)4-6, membranous and shortly sheathing at base for up to 3 cm, spreading, linear, 40-80 x 2-4 mm, tapering evenly upwards, shallowly carinate, slightly succulent, entire. Inflorescences 1 in flower at a time, 1-flowered, ca. as long as leaves; scape hidden by leaf sheaths, ca. 4 x 1-2 mm, laterally compressed, whitish; bract 1, linear, inserted at ovary base, ca. 15 x 2 mm, whitish, somewhat membranous. Flower sessile, partly subterranean, more or less rotate, white with yellow throat, midveins backed with yellowish green on outer tepals, unscented; perigone tube arising from a slender, elongated, ovary beak, somewhat bowl-shaped, 2-4 x 2-3 mm; tepals 6, elliptic, 14-25 mm long, outer 4-8 mm wide, minutely mucronate, inner 2.5-4.0 mm wide. Stamens 6, suberect, outer shorter than inner or subequal, yellow; filaments inserted near base of perigone tube, outer 2.5-3.5 mm long, inner 3-4 mm, ca. as long as anthers; anthers linear, latrorse, 2.5-4.0 mm, pollen yellow. Ovary subterranean, narrowly ovoid, compressed ventrally, 3-5 x 1.5 mm, 3-locular, distal beak 20-47 mm long; style 3.0-6.5 mm long; stigma branches suberect, linear, 2.0-3.5 x 0.5 mm, ca. equalling stamens, yellow, densely papillose. Capsule partially subterranean, beaked, walls thin, disintegrating irregularly. Seeds depressed-ellipsoid, ca. 0.8 x 0.6 mm; testa black, outer periclinal cell walls densely colliculate.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Pauridia verna (Hilliard & B.L.Burtt) Snijman & Kocyan 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 60930; source identifier 15172.0; cited publication: Snijman, DA. 2014. A taxonomic revision of the genus Pauridia (Hypoxidaceae) in southern Africa. Phytotaxa 182(1): 1 - 114. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
The geographic range of Pauridia verna is widely disjunct from that of its sister species P. alticola, which is found along the southwestern section of the Great Escarpment, Northern Cape and in the Cederberg and Kouebokkeveld, Western Cape. P. verna, like P. alticola, has a solitary-flowered inflorescence, distinguished by a short, entirely subterranean scape and the absence of a pedicel. Thus the flower, with its small, yellow, bowl-shaped tube and spreading, white tepals, is sessile and only the well-developed ovary beak, 20-47 mm long, holds the perigone clear of the ground, while the ovary itself remains buried until fruiting. Although remarkably similar in their floral morphology the two species are easily distinguished from each other by differences in the corms and seeds. P. verna has a fibreless corm, sometimes partially covered distally by brown papery sheaths and the seeds have a colliculate testa, unlike P. alticola in which the corm is heavily covered by fibrous tunics and the seed is densely covered by elongated trichomes.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Pauridia verna (Hilliard & B.L.Burtt) Snijman & Kocyan 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 58384; source identifier 15172.0; cited publication: Snijman, DA. 2014. A taxonomic revision of the genus Pauridia (Hypoxidaceae) in southern Africa. Phytotaxa 182(1): 1 - 114. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only the cited regional morphology and available diagnostic descriptions have been assessed; developmental and population variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Scattered colonies are found in small, seasonally wet, bare patches of basaltic gravel, areas fringing tarns and along marshy drainage lines in short, damp turf at elevations ranging from 2550 to 3050 meters above sea-level. This attractive plant is one of several other hardy dwarf geophytes, such as Rhodohypoxis rubella (Baker) Nel (Hypoxidaceae), Moraea alpina Goldblatt and Hesperantha crocopsis Hilliard & Burtt (both Iridaceae), that survive the extreme conditions of repeated freezing and thawing that prevail on the summit of the Drakensberg Escarpment.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Scattered colonies are found in small, seasonally wet, bare patches of basaltic gravel, areas fringing tarns and along marshy drainage lines in short, damp turf at elevations ranging from 2550 to 3050 meters above sea-level. This attractive plant is one of several other hardy dwarf geophytes, such as Rhodohypoxis rubella (Baker) Nel (Hypoxidaceae), Moraea alpina Goldblatt and Hesperantha crocopsis Hilliard & Burtt (both Iridaceae), that survive the extreme conditions of repeated freezing and thawing that prevail on the summit of the Drakensberg Escarpment.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 60107; source identifier 15172.0; cited publication: Snijman, DA. 2014. A taxonomic revision of the genus Pauridia (Hypoxidaceae) in southern Africa. Phytotaxa 182(1): 1 - 114. [All rights reserved]
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The cited habitat excerpt does not establish seasonality, localities, interaction networks, or ecology across the full species range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
This dossier has source-backed morphology/diagnostics and habitat only; life history, evolution, full distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
A systematic literature search and comparison of the regional source concept against the complete COL26.8 species concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
