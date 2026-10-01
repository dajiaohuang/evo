---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Rhynchospora barrosiana Guagl.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4SSW5
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 4SSW5
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
            url: https://list.worldfloraonline.org/wfo-0000514105-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 4SSW5 / WFO wfo-0000514105
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
        - referenceId: ref-e472b0c1-8c96-807a-acab-a683094f7c58
          metadataVariant: 0
          sourceKey: sanbi_2956_0
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
        - referenceId: ref-b65c932b-25b1-8719-a572-893c95d88aad
          metadataVariant: 0
          sourceKey: sanbi_18492_0
          usage:
            locator: Rhynchospora barrosiana Guagl. account; SANBI/WFO archive rows 92117 (Habitat), source identifier 18492.0
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
              - sanbi_2956_0
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
              - sanbi_2956_0
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
              - sanbi_18492_0
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

# Rhynchospora barrosiana

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 4SSW5, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 4SSW5; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Rhynchospora barrosiana Guagl. account; SANBI/WFO archive rows 83112 (Morphology), 82182 (Diagnostic), source identifier 2956.0
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
Perennial herb 0.3-1.0 m in height, tufted. Rhizome merely linking shoots of tuft. Culms erect, 2-6 noded, trigonous to sharply triangular, the faces flat or concave, margins usually smooth, 1.25-1.5 mm wide (at half length). Radical leaves several to numerous, often spreading, sheaths splitting early, persistent but not forming dark closely enveloping bases to shoots; blades 70-500 mm long, 1.0-3.5 mm wide, usually expanded, channelled above, midrib projecting below, tapering gradually to a triangular or flat apex, glabrous, margins smooth or minutely scabrid. Cauline leaves several, gradually reduced upwards, sheath entire, mouth truncate to broadly U-shaped, generally dark coloured, blade as for radical leaves. Inflorescence compound, usually a terminal cymose head, or 2 or 3 smaller units closely packed forming a pseudo-head, usually wider than long (deep), shortly extended from 1 or more apical culm nodes and leaf sheaths, sometimes accompanied by 1 or 2 heads, or pseudo-heads, from 1 or 2 nodes below; each cymose head of (20-)30-50(-80) closely packed spikelets all held at approximately the same level. Bracts blade(s) of uppermost 1-3 cauline leaves, overreaching or laterally accompanying the terminal head, appearing as fairly conspicuous ‘bracts’, leaf-like but reduced. Spikelets 4.5-5.3(-8.0) mm long, (1.6-)2.2-2.5 mm wide, lanceolate to oval, acute, maturing 1-5 achenes, dark brown at maturity. Glumes numerous, lowest 3-5 sterile, increasing upwards to fertile, 2.7-3.2 mm long (including mucro up to 0.6 mm), midrib projecting, lateral faces appearing nerveless, apex acute to mucronate, all glumes disarticulating early and sequentially from straight rhachilla, abscission scars clear. Hypogynous bristles outside stamens, 3-6(-7) uniform or variable in length within a floret (typically 3 + 3, shorter than, equalling or slightly exceeding achene alone) developed from persistent ‘pedicel’ 0.2-0.3 mm long. Stamens (3-)2(-1); filaments 1.5-2.8 mm long after anthesis. Achene 1.45-1.8 mm long (excluding style base, including ‘pedicel’), 1.05-1.25 mm wide, elliptic to obovoid, biconvex, yellow-brown to chestnut-brown; surface transversely rugose (ridges projecting, about 12 across face of achene). Style deeply bifid; base 0.4-0.8 mm long, 0.7-0.9 mm in breadth across attachment to achene, deltoid in outline.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Rhynchospora barrosiana Guagl. 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 83112; source identifier 2956.0; cited publication: Van Laren, L; Gordon-Gray, KDH; Browning, JBM. 1989. Studies in Cyperaceae in southern Africa. 15. A review of Rhynchospora brownii (Cyperaceae) and its relationships with the African R. angolensis and the South America R. barrosiana. S. African J. Bot. 55(5): 498 - 508. [Copyright held by the South African Association of Botanists (1989); http://www.sciencedirect.com/science/journal/02546299]. [CC BY]
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
R. brownii is best distinguished from R. barrosiana on the nature of the inflorescence units. Laxer branching in the former taxon results in the individual spikelets being mostly clearly defined, arranged in seriated sequence forming, at maturity, a unit cluster generally (but not always) longer than wide and mostly not associated with a conspicuous bract (or bracts) (sometimes the apices of uppermost cauline leaves). In correlation, achenes are slightly larger than those of R. barrosiana; the pericarp surface marked by transverse rows of cells too numerous and too irregular to count, hardly projecting so that the achene surface is almost smooth. R. barrosiana bears inflorescence clusters, usually but not always, fewer in number to a culm than in R. brownii, the branching is close and short producing units of many densely packed spikelets that are generally wider than long (deep); the clusters generally accompanied by the apices of one or more of the upper cauline leaves (‘bracts’) that are conspicuous. In correlation are the smallest achenes of the three taxa (only slightly smaller than those of R. brownii) marked by about 12 ridges across each convex face, the ridges projecting making the achene surface ridged and furrowed.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Rhynchospora barrosiana Guagl. 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 82182; source identifier 2956.0; cited publication: Van Laren, L; Gordon-Gray, KDH; Browning, JBM. 1989. Studies in Cyperaceae in southern Africa. 15. A review of Rhynchospora brownii (Cyperaceae) and its relationships with the African R. angolensis and the South America R. barrosiana. S. African J. Bot. 55(5): 498 - 508. [Copyright held by the South African Association of Botanists (1989); http://www.sciencedirect.com/science/journal/02546299]. [CC BY]
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
Marshy places in grassland. Indian Ocean Coastal Belt.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Marshy places in grassland. Indian Ocean Coastal Belt.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 92117; source identifier 18492.0; cited publication: Archer, C. 2019. Cyperaceae. In: CL Bredenkamp (ed.), A Flora of the Eastern Cape Province, Strelitzia 41(3): 1691 - 1764. South African National Biodiversity Institute, Pretoria. [CC BY]
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
