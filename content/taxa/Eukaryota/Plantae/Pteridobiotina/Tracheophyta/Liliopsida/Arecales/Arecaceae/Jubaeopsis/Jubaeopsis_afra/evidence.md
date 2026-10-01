---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Jubaeopsis afra Becc.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/Q43SQ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage Q43SQ
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
            url: https://list.worldfloraonline.org/wfo-0000220215-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL Q43SQ / WFO wfo-0000220215
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
        - referenceId: ref-a5c07643-ae97-8125-a530-d06d5d600701
          metadataVariant: 0
          sourceKey: sanbi_2214_0
          usage:
            locator: Jubaeopsis afra Becc. account; SANBI/WFO archive rows 79506 (Morphology), 79036 (Habitat), source identifier 2214.0
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
              - sanbi_2214_0
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
              - sanbi_2214_0
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

# Jubaeopsis afra

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage Q43SQ, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage Q43SQ; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Clustered, pleonanthic, monoecious palm up to 8 m high. Stems up to 0.4 m in diameter, erect to reclining, branching at the base and also aerially by forking, bearing leaf sheath remains distally, eventually becoming bare, marked with close leaf scars. Leaves pinnate, up to approximately 6 m long, arranged in 5 vertical rows, marcescent or neatly abscising; sheaths tubular, soon disintegrating into an interwoven mass of fibres; rachis ± straight or curved; apparent petiole adaxially channelled, abaxially rounded; margins bearing leaf sheath fibre remains or becoming smooth; leaflets reduplicate, the tips mostly asymmetrically 2-lobed, abaxial surface bearing ramenta along the vein. Inflorescence solitary, interfoliar, branching to 1 order, shorter than the leaves; peduncle elongate, prophyll tubular, 2-keeled, enclosed within the leaf sheaths, splitting apically; peduncular bract tubular and entirely enclosing inflorescence in bud, later splitting longitudinally along abaxial face, becoming woody; rachis usually shorter than peduncle, bearing numerous spirally arranged, rather distant, spreading rachillae, each subtended by a low triangular bract; rachillae usually bearing proximally few to numerous spirally arranged triads consisting of 2 lateral staminate flowers and a central pistillate flower, distally bearing paired or solitary staminate flowers; rachilla bracts and floral bracteoles small. Staminate flowers sessile, 12-20 mm long; sepals 3, separate, imbricate, ± triangular, keeled; petals 3, separate, valvate, much larger than the sepals, boat-shaped with triangular tips, stamens (6)7-16, anthers basally sagittate, dorsifixed, introrse; pistillode small, irregularly trifid. Pistillate flowers ovoid, up to 10 mm long; sepals 3, separate, broad, rounded with pointed tips, imbricate; petals 3, separate, ± twice as long as sepals, broad, rounded, imbricate except at the short valvate triangular tips; staminodial ring collar-like, very briefly toothed or consisting of several irregular tooth-like lobes; gynoecium ovoid, trilocular, triovulate, stigmas 3, very short, ovules hemi-anatropous, laterally attached. Fruit 1-seeded, up to 40 mm long and 42 mm in diameter, orange at maturity, globose with a short apical beak, stigmatic remains apical; epicarp smooth, mesocarp thin, fibrous, endocarp thick and bony, with 3 vertical grooves, the pores lateral just below equator. Seed basally attached, endosperm homogeneous with a large central cavity; embryo lateral, next to one of the endocarp pores. Germination remote tubular, eophyll entire, lanceolate.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Jubaeopsis afra Becc. 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 79506; source identifier 2214.0; cited publication: Williams, R; Pooley, ES. 1991. Jubaeopsis caffra Becc. Fl. Pl. Africa 51t.2023. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only the cited regional morphology and available diagnostic descriptions have been assessed; developmental and population variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Restricted to the north banks of two rivers on the subtropical coast of Transkei: the Mtentu and the Msikaba, from their mouths, which are some 10 km apart, to about 5 km inland. Both localities are characterized by steep, forest-covered cliffs, composed of Natal Group sandstone. Found sporadically from the water's edge to the top of the cliffs.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Restricted to the north banks of two rivers on the subtropical coast of Transkei: the Mtentu and the Msikaba, from their mouths, which are some 10 km apart, to about 5 km inland. Both localities are characterized by steep, forest-covered cliffs, composed of Natal Group sandstone. Found sporadically from the water's edge to the top of the cliffs.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 79036; source identifier 2214.0; cited publication: Williams, R; Pooley, ES. 1991. Jubaeopsis caffra Becc. Fl. Pl. Africa 51t.2023. [CC BY]
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
