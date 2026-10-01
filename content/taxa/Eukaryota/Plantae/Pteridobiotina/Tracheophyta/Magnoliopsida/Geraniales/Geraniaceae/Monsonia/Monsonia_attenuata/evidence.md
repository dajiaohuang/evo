---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Monsonia attenuata Harv. & Sond.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/449Y6
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 449Y6
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
            url: https://list.worldfloraonline.org/wfo-0001064077-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 449Y6 / WFO wfo-0001064077
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
            locator: Monsonia attenuata Harv. & Sond. account; archive rows 65574 (Morphology), 65427 (Habitat), source identifier 10189.0
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

# Monsonia attenuata

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 449Y6, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 449Y6; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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
Erect, single-or few-stemmed perennial, 10-50 cm high. Roots sometimes with tubers of up to 60 x 10 mm. Stems herbaceous to sublignose, 2-40 cm long, 1-4 mm in diam., with a double indumentum the first of which is pubescent with curved hairs and the second is composed of long erect straight mostly gland-based hairs which may be few or many, often with stalked and sessile glands, main stems often branching laterally towards their apices forming terminal clusters of short, densely foliated branches. Leaves alternate, becoming crowded or almost whorled at the stem-apices; petioles with the same indumentum and glands as the stem, 0.1-0.5 x as long as the blade, 10-30 mm long, flattened above and at the base, often geniculate at the apex; stipules subulate to acicular, with the same indumentum and glands as the stem or only with erect hairs of various lengths, 3-25 mm long, mostly reddish; blade simple, linear, 9-20 x as long as wide, 25-75 x 3-10 mm, mostIy folded upwards along the midrib, mostly attenuate and mucronate, less often acute at the apex, truncate at the base, acutely serrate, rarely obscurely so, rarely ciliate at the margin, glabrous, granulose or obscurely to conspicuously puberulent or pubescent on both sides, the veins beneath always with few to many long straight gland-based hairs, often with sessile and stalked glands and, further-more, beneath sometimes glandular-punctate; veins pinnate, only the midrib prominent beneath and impressed above. Inflorescences terminal and/or lateral, when lateral axillary or not, 1-3flowered, 20-70 mm long. Peduncles and pedicels slender, with the same indumentum and glands as the stem, rarely pedicels lanuginose or with the same indumentum as the sepals outside; peduncles obsolete or up to 11 mm long; pedicels 20-65 mm long, geniculate under the fruit; involucral bracts 2-3 per flower, stipule-like, sometimes narrowly triangular and navicular. Sepals green, free, narrowly ovate to narrowly obovate, 2.3-5.5 x as long as wide, 10-15 x 3-6 mm, outside with the same indumentum as the stem, but this often obscure or denser than that on the stem, with numerous sessile and stalked glands, inside glabrous, with I Or 3 parallel main veins, ciliate at the margin; mucro 0.5-7 mm long, terete, reddish-brown, curved, with the same indumentum as the sepals outside. Petals obtriangular to broadly obtriangular, 1.3-2.2 x as long as wide, 20-30 x 9-20 mm, 1.6-2.2 x as long as the sepals, 2-2.3 x as long as the stamens, white to yellow or less often pink, obscurely villose inside and obscurely villose or puberulent outside, often with sessile or stalked glands; venation conspicuously reticulate, greyish-blue to green or blackish, with 5 main veins; base membranously winged and obscurely ciliate; apex crenate to dentate or lobed. Stamens monadelphous, arranged in a cup-shaped column around the pistil; groups basally connate for 0.5-1 mm; filaments of each group basally connate for 1.5-2.5 mm; filaments in the central stamens 7 -11 mm and in the lateral 5-7 mm long, terete and mostly reflexed at the apex, obscurely hairy outside; an obscure to conspicuous ovate gland-cavity with 2 parallel, vertical rims and rarely a subulate apical appendage is situated on the outer side of the base ofeach group; anthers elliptic, those of the long filaments often slightly larger, 2.5-3.6 x 1.2-2 mm. Pistil 10-14 mm long; ovary broadly obovoid, 2 x 2 mm, hirto-pubescent; the beak pubescent and at the base with stalked glands, longitudinally grooved, 5-8 mm long; stigmas clavate or linear, 3-4 x 0.5-0.6 mm, outside pubescent, acute to obtuse al the apex and entire to subentire at the margin. Fruit 55-65 mm long, mericarps 11-13 x 2 mm, beak 45-50 mm long; mericarps narrowly and obliquely obovoid, brown, hirsute, at the apex coarsely reticulate; tail hirsute outside, hispid inside where the tails detach from the beak axis; these stiff hairs long at the tail's base, forming a crest. Seed narrowly obovoid, 4.5 x 1.5 mm, with a few scattered hairs sometimes present.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 65574; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
A typical herb of mountain sides and of rocky ridges on the highveld of Transvaal. Alt. 1300-2600 m.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 65427; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
