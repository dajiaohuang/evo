---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Monsonia glauca R.Knuth
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
            url: https://www.checklistbank.org/dataset/316115/taxon/449YR
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 449YR
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
            url: https://list.worldfloraonline.org/wfo-0001064090-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 449YR / WFO wfo-0001064090
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
            locator: Monsonia glauca R.Knuth account; archive rows 65579 (Morphology), 65432 (Habitat), source identifier 10189.0
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

# Monsonia glauca

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 449YR, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 449YR; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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
Erect, decumbent or prostrate, few-to many-stemmed, suffrutescent, 5 -45 cm high. Roots often tuberous. Stems herbaceous to woody, up to approximately 50 cm long, 1-6 mm in diam. with a double indumentum the first of which is pubescent with curved or straight hairs and the second of few to many long erect gland-based hairs, with sessile and stalked glands. Leaves alternate at the base of the main stems and subopposite to opposite towards their apices and on the lateral branches, those of a pair subequal to unequal, the smaller leaves with lateral branches and/or inflorescences in the axil; petiole with the same indumentum as the stem, 0.4-1.3 x as long as the blade, 10-50 mm long, flattened or thickened at the base; stipules subulate or acicular, with the same indumentum as the stem, 6-12 mm long, mostly straw coloured and subspinescent; blade very narrowly ovate to narrowly ovate, 2.5-5.5(10) x as long as wide, mostly folded upwards along the midrib, 20-70 x 3-20 mm; attenuate or acute and sometimes 1-3-toothed at the apex; truncate or rarely cordate at the base; ciliate, serrate, often with globular pockets of powdery granules on or near the teeths' bases, and sometimes red-tinged at the margin; above granulose and obscurely to conspicuously pubescent, with curved or straight hairs, mostly with sessile and stalked glands; beneath pubescent with curved or straight hairs or with the double indumentum of the stem on the veins, mostly with stalked and sessile glands, often glandular-punctate; main veins subpinnate, 5 or 7, branching from the base, obscurely impressed above, prominent beneath. Inflorescences lateral, axillary or rarely leaf-opposed, 1-3-flowered, 45-150 mm long. Peduncles and pedicels slender, with the same indumentum as the stem and the pedicels, furthermore, with numerous stalked glands; peduncles 1-3 x as long as the pedicels, 10-85 mm long; pedicels 10-75 mm long and geniculate under the fruit; involucral bracts 1-4 per flower, subulate, appressed-pubescent, and with a few scattered long hairs as well. Sepals green to purplish-black, free, narrowly ovate to very narrowly ovate, 2.5-5 x as long as wide, 7 -II x 2-3 mm; outside with a double indumentum the first of which is composed of short curved or straight hairs and the second of few to many long straight erect hairs, mostly with sessile and stalked glands; inside glabrous, with 3 parallel main veins; margins ciliate; mucro terete, with a globular pocket of powdery granules at its base, 0.5-2.5 mm long, greenish, reddish or purplish-black, with the same indumentum as the sepals. Petals obtriangular, 1.3-2.1 x as long as wide, 15-21 x 8-15 mm, 1.7-2.5 x as long as the sepals, 1.5-2 x as long as the stamens, white or creamy, whithering yellow, often with scattered sessile glands, venation greenish to greyish, with 5 main veins, glabrous or inside obscurely villose, ciliate, winged and sparsely pubescent at the base, straight or somewhat obtuse and obscurely crenate Or sinuate at the apex. Stamens monadelphous; groups basally connate for 0.7-1 mm; filaments of each group connate for 2-3 mm; filaments in the central stamens 7-10 mm and 48 in the lateral 5-9 mm long, terete at the apex and obscurely to moderately hairy outside' an ovate, 0.5 x 0.5 mm gland-cavity with two vertical rims is situated on the outer side of the base of each group; anthers elliptic, 1.5-2.1 x 0.7 -1 mm, subintrorse. Pistil 7-10 mm long; ovary obovoid to broadly obovoid, hyalino-hirto-pubescent, terminally rimmed and ridged; beak longitudinally grooved, 4-5 mm long, lanulose with stalked glands in the basal part, pubescent and sometimes also with stalked glands in the apical part; stigmas clavate, 1.7-2 x 0.4-0.7 mm, outside glabrous or obscurely hairy; margin entire or subcrenate; apex acute to obtuse. Fruit 75-130 mm long; mericarps 12-16 x 2 mm and beak 65-115 mm long. Mericarps narrowly obconical, hirsute, with whitish or copper-coloured hairs, some of which, furthermore, have red or purplish spots around their bases; ridged, rimmed, and reticulate at the apex; the rim and oblique ridge conspicuous and sharp-edged; tail hirsute outside and hispid inside where it detaches from the beak-axis, these stiff hairs whitish or copper-coloured, and long at the tail's base, forming a crest. Seed narrowly obovoid, 5-6 x 1.4-1.8 mm, glabrous.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 65579; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
A herb of hot, semi-arid to moderately moist bushveld or scrubby grassveld. Often found in the shade of shrubs or trees. Occasionally a weed of cultivated lands. All. 600-1600 m.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 65432; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
