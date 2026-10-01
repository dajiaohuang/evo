---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Kalanchoe winteri Gideon F.Sm., N.R.Crouch & Mich.Walters
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3QYQW
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 3QYQW
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
            url: https://list.worldfloraonline.org/wfo-0001421067-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 3QYQW / WFO wfo-0001421067
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
        - referenceId: ref-bf93f2d4-720a-8887-a6b3-f68c92e4e6a0
          metadataVariant: 0
          sourceKey: sanbi_15652_0
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
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
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - sanbi_15652_0
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
              - sanbi_15652_0
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
              - sanbi_15652_0
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

# Kalanchoe winteri

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 3QYQW, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 3QYQW; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Kalanchoe winteri Gideon F.Sm., N.R.Crouch & Mich.Walters account; archive rows 83201 (Morphology), 82646 (Habitat), 82246 (Diagnostic), source identifier 15652.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Perennial, many-leaved, 1-3 rosettes, sparsely to profusely branched from near the base and higher up, smooth, waxy, robust succulent, 0.5(-0.9) m tall in bloom. Stems erect to leaning and curved upwards, smooth, waxy especially at internodes, light green. Leaves opposite, erect to mostly spreading to variously floppy, succulent, sessile, flattened above and below, glabrous, waxy, light green to bluish-green; petiole absent; blade 140-160 x 80-140 cm, obovate to somewhat oblong, not folded lengthwise, occasionally light red-infused; axils often carrying small leafy shoots and short branches that produce flowers in season; base narrow, sometimes distinctly auriculate; apex rounded-obtuse or truncate, usually indented at the tip; margins smooth, slightly lighter green than blade, sometimes infused with red. Inflorescence a slender, erect, densely flowered, cylindrical thyrse consisting of several dichasia terminating in monochasia 0.5(-0.9) m tall. Flowers 13-15 mm long, erect to slanted horizontally, pale yellowish-green to greenish-white (tube) and yellow (lobes), all parts excepting tepal lobes above covered with a substantial white waxy bloom, highly scented, resinous to the touch; pedicels 9-10 mm long. Calyx mid-green, contrasting against lighter green corolla tube; sepals 4, 3-4 mm long, elongated-triangular, acute (sharp-tipped). Corolla light greenish-yellow, tube 11-12 mm long, more or less quadrangular, ellipsoid (cigar-shaped, enlarged in the middle), distinctly 4-angled, lobes 6-8 x 3.5-4.0 mm, triangular, margins slightly to distinctly inrolled, truncated, bright yellow. Stamens 8, inserted just below or in the middle of the corolla tube, 1-2 mm exserted; filaments 3.0-5.5 mm long, thin, light greenish-white; anthers 1.4-1.6 mm long, yellow. Pistil pyriform, consisting of 4 carpels; ovaries 9-10 mm long, light green; styles ± 4 mm long; stigmas very slightly capitate, light yellow, exserted as far as or slightly less than anthers; scales 2.3-2.5 x 1.8-2.1 mm, narrowing at the base, truncate, repand. Follicles not seen. Seeds not seen. Flowering time: May-September, peaking in July.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 83201; source 15652.0; publication: Crouch, NR; Smith, GF; Walters, M; Figueiredo, E. 2016. Kalanchoe winteri Gideon F.Sm., N.R.Crouch & Mich.Walters (Crassulaceae), a new species from the Wolkberg Centre of Endemism, South Africa. Bradleya 34: 217 - 224. [All rights reserved]
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
Kalanchoe winteri differs from K. luciae in consistently having golden yellow instead of whitish, pale yellowish-green, or pale pink corolla lobes, ellipsoid rather than urceolate corolla tubes, and leaf blades that are occasionally red-infused on their margins rather than frequently throughout. It differs from K. thyrsiflora in having ellipsoid corolla tubes instead of cylindrical ones, a corolla lobe length-to-breadth ratio of 2 rather than 1, filaments inserted lower in the corolla tube, and all eight anthers exserted instead of only four. K. winteri differs from both K. luciae and K. thyrsiflora in presenting sometimes distinctly auriculate, mainly wide-spreading rather than erect leaves, and ovaries that are broadest above their middle rather than at this mid-locus.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了该种的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 82246; source 15652.0; publication: Crouch, NR; Smith, GF; Walters, M; Figueiredo, E. 2016. Kalanchoe winteri Gideon F.Sm., N.R.Crouch & Mich.Walters (Crassulaceae), a new species from the Wolkberg Centre of Endemism, South Africa. Bradleya 34: 217 - 224. [All rights reserved]
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
It occurs in Northern Escarpment Quartzite Sourveld, growing on quartzite in grassland vegetation, always in fire protected microhabitats on or near rocks.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 82646; source 15652.0; publication: Crouch, NR; Smith, GF; Walters, M; Figueiredo, E. 2016. Kalanchoe winteri Gideon F.Sm., N.R.Crouch & Mich.Walters (Crassulaceae), a new species from the Wolkberg Centre of Endemism, South Africa. Bradleya 34: 217 - 224. [All rights reserved]
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
