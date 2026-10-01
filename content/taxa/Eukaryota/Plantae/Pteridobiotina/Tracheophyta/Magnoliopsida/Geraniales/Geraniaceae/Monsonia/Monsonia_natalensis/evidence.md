---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Monsonia natalensis R.Knuth
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
            url: https://www.checklistbank.org/dataset/316115/taxon/449ZJ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 449ZJ
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
            url: https://list.worldfloraonline.org/wfo-0001064101-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 449ZJ / WFO wfo-0001064101
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
        - referenceId: ref-8d2514c3-7c2b-8424-aa07-88cb76f25069
          metadataVariant: 0
          sourceKey: sanbi_10189_0
          usage:
            locator: Monsonia natalensis R.Knuth account; archive rows 65583 (Morphology), 65436 (Habitat), source identifier 10189.0
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
              - sanbi_10189_0
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
              - sanbi_10189_0
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

# Monsonia natalensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 449ZJ, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 449ZJ; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Decumbent to prostrate, many-stemmed, suffrutescent, approximately 10-25 cm high. Roots woody and sometimes tuberous. Stems herbaceous to woody, up to 50 cm long, 1-3 mm in diam., with a double indumentum the first of which is pubescent with curved hairs and the second is composed of few to many long erect straight gland-based hairs, sometimes with stalked glands, always with sessile glands Leaves alternate at the base of the main stems, opposite towards their apices and on the lateral branches those of a pair often unequal, the smaller leaves with lateral branches and/or inflorescences in the axil; petiole with the same indumentum as the stem or sometimes with the short indumentum lanuginose, 0.3-0.6 x as long as the blade, 8-20 mm long, flattened at the base; stipules acicular to subulate, with the same indumentum and glands as the stem or velutinous, 5 -11 mm long, reddish; blade very narrowly angular-ovate to narrowly angular-ovate, rarely narrowly ovate in the basal leaves, 3.5-6 x as long as wide, mostly folded upwards along the midrib, 20-45 x 5-10 mm, acuminate and mucronate or toothed at the apex; truncate at the base; unevenly serrate at the margin; the teeth with short and long straight erect hairs and furthermore, often thickened by globular pockets of resinous granules; above granulose, obscurely to moderately sericeous and, furthermore, often also with scattered long straight erect gland-based hairs, with sessile glands; beneath lanuginose or velutinous with scattered long straight erect often gland-based hairs on the main veins, densely granulose and pubescent or sericeous in between the veins, with numerous sessile glands; main veins pinnately arranged, impressed above, prominent beneath. Inflorescences axillary and terminal, 1-2-flowered, 50-105 mm long. Peduncles and pedicels slender; the peduncles with the same indumentum and glands as the stem, 15-35 mm long, 0.7-0.8 x as long as the pedicels; the pedicels with a double indumentum the first of which is lanuginose, curved-pubescent or sericeous and the second is composed of long erect gland-based hairs, with numerous stalked and sessile glands, 20-40 mm long and geniculate under the fruit; involucral bracts 2-3 per flower, very narrowly ovate to very narrowly obovate, with the indumentum of the pedicels. Sepals narrowly ovate to ovate, green, free, 2-3.5 x as long as wide, 10-15 x 4 mm; outside with the indumentum and glands of the pedicels and with the long hairs, furthermore, even more dense; inside glabrous, with 3 parallel main veins; margins ciliate; the mucro terete with a globular pocket of resinous granules and a tuft of hairs at its base, 2-3 mm long, greenish, with the same indumentum as the sepals. Petals obtriangular, 2-3.5 x as long as wide, 20-30 x 10-20 mm, 2-3.5 x as long as the sepals, 2-2.5 x as long as the stamens, white or yellow, with venation purplish-brown, with 5 main veins, outside glabrous or rarely obscurely villous, with sessile and subsessile glands, inside obscurely villous, winged, obscurely ciliate and hairy at the base, obscurely crenate or entire at the apex. Stamens monadelphous, arranged in a cup-shaped column around the pistil, groups basally connate for 1.5-2.5 mm; filaments of each group basally connate for 2.5-4 mm; filaments in the central stamens 9-10 mm and in the lateral 7 mm long, apically terete, obscurely hairy inside, more clearly so outside; a narrowly triangular or triangular, rimmed gland is situated on the outer side of the base of each group or on the receptacle outside each group; anthers oblong, equal or subequal, those of the long filaments slightly larger, 2.5-3.5 x 1.3-1.4 mm, subintrorse. Pistil 10-12 mm long; ovary broadly obovoid, 2 x 2 mm, hyalino-hirto-pubescent; beak longitudinally grooved, 5-7 mm long, pubescent, and also with stalked glands in the basal part; stigmas linear to clavate, 2-3 x 0.4-0.6 mm, outside sparsely hairy and blackish, obscurely crenate at the margin, acute or acuminate at the apex.. Fruit with the mericarps 9 x 2 mm and the beak 45 mm long; mencarps narrowly obovoid, hirsute, obliquely domed and reticulate at the apex; the tad hirsute outside, hispid inside where the tails detach from the beak-axis; these stiff hairs somewhat longer at the tail's base, forming a crest. Seed obovoid, 5 x 1.5 mm, glabrous.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 65583; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only regional morphology and diagnostic descriptions have been assessed; developmental and population-level variation remains unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
A plant of mountainous grassland where the climate is hot to very hot and often dry. The soils may be shallow and shaly. Alt. 400-700 m.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 65436; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
