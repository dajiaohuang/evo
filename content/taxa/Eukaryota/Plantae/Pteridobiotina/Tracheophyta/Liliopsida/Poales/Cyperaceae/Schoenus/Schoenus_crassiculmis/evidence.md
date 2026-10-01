---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Schoenus crassiculmis T.L.Elliott & Muasya
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
            url: https://www.checklistbank.org/dataset/316115/taxon/8XW4Z
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 8XW4Z
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
            url: https://list.worldfloraonline.org/wfo-0001421035-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 8XW4Z / WFO wfo-0001421035
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
        - referenceId: ref-d9893c78-e25d-89dc-a95e-711b7a95abac
          metadataVariant: 0
          sourceKey: sanbi_17820_0
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
              - sanbi_17820_0
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
              - sanbi_17820_0
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
              - sanbi_17820_0
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

# Schoenus crassiculmis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 8XW4Z, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 8XW4Z; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Schoenus crassiculmis T.L.Elliott & Muasya account; SANBI/WFO archive rows 103539 (Morphology), 103475 (Habitat), 103387 (Diagnostic), source identifier 17820.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Caespitose, phyllopodic perennial graminoid, often appearing semi-succulent. Culms terete, robust, (110-)225-327(-468) x 0.5-1.4 mm. Leaves basal, reduced in length and width, 1-4, (7-)18-52(-87) x 0.3-0.5(-1.4) mm, can be straight or curled, often proximally channelled but sometimes flat, margin usually serrate above sheath. Sheaths varying in colour from brown to reddish-purple, firm, attenuate at leaf base, longitudinally striate. Ligule firm, 0.2-1.0 mm long. Inflorescence a pseudolateral panicle, 12-29(-46) x 3-8(-14) mm, proximal rachis length (4-)7-19 mm. Proximal primary inflorescence bracts firm, not channelled, apex acute, rarely slightly widened at base, (22-)33-47(-64) mm long, exceeding length of inflorescence 0.5 times or more, with longitudinal veins. Proximal and subproximal primary inflorescence bracts without membranaceous extensions at base. Spikes 2-13(-16), 4.0-10.0(-20.0) mm long, overlapping, often contracted. Spikelets lanceolate, 3.4-4.8(-6.3) x 0.7-1.4 mm, pedicellate, 1-4(-7) spikelets per spike, reddish-brown in colour. Proximal spikelet prophyll 1 per spikelet, well-developed, with raised central vein extending to mucro, 0.5-2.3 mm long, prophyll mucro 0.8-2.3(-3.8) mm long. Rachilla 0.4-1.8(-3.5) mm long. Glumes 4-7 per spikelet, proximal glume 0.6-1.9 mm long, subproximal glume 0.6-2.1 mm long, with or without narrow hyaline margin, upper glumes longer than basal ones, apex acute to acuminate. Glume mucros usually relatively short, proximal mucro 0.1-0.7(-2.0) mm long, subproximal mucro 0.1-0.7 mm long. Stamens 3 per floret, anthers 1.6-2.7(-3.8) mm long. Stigmas 3-branched, vestigial stigmas of second bisexual floret not observed. Perianth bristles lacking. Nutlet broad elliptic, trigonous, yellowish in colour, 2.0-2.5 x0.7-1.5 mm. Nutlet beak, 0.2-0.9 mm long, hispid.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Schoenus crassiculmis T.L.Elliott & Muasya 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 103539; source identifier 17820.0; cited publication: Elliott, TL; Barrett, RL; Muasya, AM. 2019. A taxonomic revision of Schoenus cuspidatus and allies (Cyperaceae, tribe Schoeneae) - Part 1. S. African J. Bot. 121: 519 - 535. [https://doi.org/10.1016/j.sajb.2018.11.021]. [Copyright held by the South African Association of Botanists (2019); http://www.sciencedirect.com/science/journal/02546299]. [All rights reserved]
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
Schoenus crassiculmis often appears semi-succulent in the field, with basal leaves that are reduced in length. This species also has relatively short proximal and subproximal glumes. Schoenus auritus appears similar in that it also usually appears semi-succulent in the field; however, the leaves of S. crassiculmis never exceed half the length of the culm, whereas those of S. auritus can be longer than half the culm length. In addition, the lower glumes of S. crassiculmis are relatively short (not over half the spikelet length), while S. auritus has longer glumes that mostly exceed half the spikelet length. Bristles and vestigial stigmas have not been observed in S. crassiculmis, but these structures have been observed in S. auritus. Furthermore, S. crassiculmis does not have the membranaceous leaf sheaths that are present in S. auritus. Finally, although the proximal and subproximal primary inflorescence bracts of S. crassiculmis can sometimes be slightly expanded laterally, this expansion is not as notable as in S. auritus.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Schoenus crassiculmis T.L.Elliott & Muasya 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 103387; source identifier 17820.0; cited publication: Elliott, TL; Barrett, RL; Muasya, AM. 2019. A taxonomic revision of Schoenus cuspidatus and allies (Cyperaceae, tribe Schoeneae) - Part 1. S. African J. Bot. 121: 519 - 535. [https://doi.org/10.1016/j.sajb.2018.11.021]. [Copyright held by the South African Association of Botanists (2019); http://www.sciencedirect.com/science/journal/02546299]. [All rights reserved]
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
This species is usually found on sandstone-derived soils on mountain slopes. It has been collected from localities with shale parent material.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：This species is usually found on sandstone-derived soils on mountain slopes. It has been collected from localities with shale parent material.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 103475; source identifier 17820.0; cited publication: Elliott, TL; Barrett, RL; Muasya, AM. 2019. A taxonomic revision of Schoenus cuspidatus and allies (Cyperaceae, tribe Schoeneae) - Part 1. S. African J. Bot. 121: 519 - 535. [https://doi.org/10.1016/j.sajb.2018.11.021]. [Copyright held by the South African Association of Botanists (2019); http://www.sciencedirect.com/science/journal/02546299]. [All rights reserved]
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
