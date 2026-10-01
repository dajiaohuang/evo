---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Monsonia praemorsa E.Mey.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/449ZS
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 449ZS
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
            url: https://list.worldfloraonline.org/wfo-0001064104-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 449ZS / WFO wfo-0001064104
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
            locator: Monsonia praemorsa E.Mey. account; archive rows 65585 (Morphology), 65438 (Habitat), source identifier 10189.0
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

# Monsonia praemorsa

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 449ZS, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 449ZS; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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
Erect, rarely decumbent, suffrutescent, few-to several-stemmed, 10-30 cm high. Roots up to 7 mm in diam., sometimes tuberous and then thicker.. Stems herbaceous to woody, up to approximately 25 cm long, 1-3 mm m diam., with a double indumentum the first of which is puberulent with curved hairs, and the second hispid or rarely velutinous with gland-based hyaline or copper-coloured hairs, with numerous sessile glands. Leaves alternate at the base of the main stems, but subopposite to opposite towards their apices and on the lateral branches, those of a pair often unequal, the smaller leaves with lateral branches and/or inflorescences in the axil; petiole with the same indumentum and glands as the stem, 0.2-0.7 x as long as the blade, 7-20 mm long, often flattened at the base, mostly geniculate at the apex; stipules subulate, with the same indumentum and glands as the stem, 4-16 mm long, mostly reddish; blade very narrowly elliptic, narrowly elliptic, or elliptic (exceptionally narrowly obovate or narrowly ovate), 1.5-4.5(6.3) x as long as wide, mostly folded upwards along the midrib, 20-45 x 5-20 mm; obtuse or emarginate, mucronate or 3-toothed at the apex; truncate or rarely cuneate at the base; serrate and mostly with short stiff hairs at the margin; globular pockets with resinous granules sometimes present on the teeth; above glabrous to granulose and with scattered stiff hairs; beneath with the double indumentum of the stem or with only one of both indumenta on the main veins, granulose with scattered long and/or short hairs between the veins, with sessile glands; main veins pinnate, impressed above, prominent beneath. Inflorescences lateral, leaf-opposed or axillary, 1-2-flowered, (34)50-110 mm long. Peduncles and pedicels slender, with the double indumentum of the stem and, furthermore, sometimes also with obscure to conspicuous stalked glands; peduncles (0.6)1-2.5 x as long as the pedicels, 15-60 mm long; pedicels (10)20-35 mm long, geniculate under the fruit; involucral bracts 2-3 per flower, subulate, with long and short stiff erect hairs. Sepals green, free, ovate, narrowly ovate, narrowly obovate, or narrowly elliptic,2.5-3 x as long as wide, 10-12 x 3-5 mm, outside velutinous or with a double indumentum the first of which is as above and the second is composed of short curved hairs, with numerous stalked and/or sessile glands, inside glabrous, or with stalked and/or sessile glands, with 3 parallel main veins, with ciliate margin, with mucro terete, 1-4 mm long, sometimes curved, greenish to reddish, with scattered long and short hairs, with a globular pocket of white, resinous granules at the base. Petals obtriangular, 1-1.5 x as long as wide, 20-25 x 15-20mm, 1.8-2.2 x as long as the sepals, 1.5-3 x as long as the stamens, white or creamy, venation bluish-grey to purplish, with 5 main veins, outside glabrous or rarely with stalked glands, inside obscurely villose, winged, mostly obscurely ciliate and often also hairy at the base, obscurely lobed Or crenate at the apex. Stamens monadelphous; groups basally connate for 1-2 mm; filaments of each group basally connate for 1-2.5 mm; filaments in the central stamens 8-11 mm and in the lateral 6-8 mm long, mostly terete and reflexed at the apex, glabrous inside, glabrous or hairy outside; a rimmed, mostly obscure gland cavity is situated on the outer side of the base of each group; anthers oblong, those of the long filaments slightly larger, 2.5-4 x 1-2 mm, subintrorse. Pistil 9-12 mm long; ovary obovoid to broadly obovoid, 2-3 x 2 mm, hyaline-hirto-pubescent; beak longitudinally 5-lobed, 5-6 mm long, pubescent or sometimes lanulose at the base, with stalked glands; stigmas linear or clavate, 2-4 x 0.4-0.6 mm, outside hairy and greenish to maroon, entire or obscurely crenate at the margin, obtuse or acute at the apex. Fruit 60-75 mm long; mericarps 13-15 x 1.7-1.8mm and beak 50-60mm long; mericarps hirsute, narrowly and obliquely obovoid, rimmed and obliquely domed or ridged at the apex, with the dome or ridge hirsute, hirsute outside, hispid inside where the tail detaches from the beak-axis; these stiff hairs copper- coloured, and long at the tail's base, forming a crest. Seed narrowly obovoid, 3-5 x 1-2 mm, glabrous.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 65585; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
M. praemorsa is restricted to the grasslands of the humid subtropical coast belt where it grows on sandy or granitic soils. Alt. 0-300 m.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 65438; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
