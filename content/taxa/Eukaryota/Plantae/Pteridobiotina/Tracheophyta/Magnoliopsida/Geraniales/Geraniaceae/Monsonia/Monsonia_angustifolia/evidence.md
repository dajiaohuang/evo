---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Monsonia angustifolia E.Mey.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/449Y3
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 449Y3
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
            url: https://list.worldfloraonline.org/wfo-0001064076-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 449Y3 / WFO wfo-0001064076
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
            locator: Monsonia angustifolia E.Mey. account; archive rows 65573 (Morphology), 65426 (Habitat), source identifier 10189.0
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

# Monsonia angustifolia

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 449Y3, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 449Y3; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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
Single-or multi-stemmed erect or decumbent annual 15-50 cm high. Stems herbaceous or sometimes semi-succulent, 3 to about 45 em long, 1-5 mm in diam., mostly reddish-or purplish-tinged, with a double indumentum the first of which is composed of a pubescence of curved hairs and the second of long straight erect often gland-based hairs which may be few or many, with few to numerous sessile and stalked glands. Leaves: lower alternate, upper subopposite or opposite; those of a pair unequal; the smaller with lateral branches and/or inflorescences in the axil; petiole with the same indumentum and glands as the stem, 0.2-0.6 x as long as the blade, 5-25 mm long, rarely geniculate at the apex and mostly flattened al the base; stipules subulate or acicular, 2-10 mm long, mostly straw-coloured and often subspinescent, with the same indumentum and glands as the stem or with a single indumentum of short hairs which may be curved or straight and erect; blade linear, narrowly elliptic, or narrowly ovate, 2.5-11 x as long as wide, 8-55 x 2-15 mm, emarginate and mucronate or rarely obtuse and 3-toothed at the apex, obtuse to cuneate or less often truncate at the base, sinuate and serrate, 10 above glabrous, granulate and/or with scattered curved hairs, often with sessile glands, beneath glabrous or granulate, with curved hairs and curved stalked glands on the main veins or rarely on these veins with the double indumentum and glands of the stem, rarely glandular-punctate on both sides; veins pinnate, prominent beneath. Inflorescence lateral, axillary or not, 1-3-flowered, 15-60 mm long. Peduncles and pedicels slender, with the same indumentum and glands as the stem and the pedicels, furthermore, with the stalked glands conspicuous. Peduncles often obsolete, when present 0.1-1.1 x as long as the pedicels, up to 25 mm long, pedicels 5-55 mm long and geniculate under the fruit. Involucral bracts 1-3 per flower. Sepals green, free, narrowly ovate to ovate or narrowly obovate to obovate, 2-4 x as long as wide, 5-10 x 1.5-3 mm, outside with the same indumentum as the stem, with numerous sessile and stalked glands, and, furthermore, with the long hairs more conspicuous than on the stem, inside glabrous, sometimes with 3 parallel main veins; margin ciliate; mucro 0.7-2.5 mm long, terete, dark brown to purplish, straight or frequently curved, with a few scattered short and/or long hairs. Petals narrowly obtriangular to obtriangular, 1.8-3 x as long as wide, 5-15 x 3-6mm, 1-1.6 x as long as the sepals, 1-2 x as long as the stamens, white, mauve, pink, blue, purplish, or rarely yellow, glabrous on both sides; venation mostly dark-blue or greyish and with 5 main veins; base winged and obscurely ciliate; apex obscurely 3-lobed, sinuate, or rarely emarginate. Stamens monadelphous, arranged in a cup-shaped column around the pistil; groups basally connate for 0.5-2 mm; filaments of each group basally connate for 1-3 mm; filaments in the central stamens 5-6mm and in the lateral 4-5 mm long, all terete towards the apex, glabrous; a triangular or ovate, mostly obscure gland-cavity is situated on the outer side of the base of each group; the gland cavities mostly with 2 parallel, vertical rims; anthers elliptic to broadly elliptic, 0.5-1 x 0.5-1 mm, subintrorse. Pistil 4-6 mm long; ovary broadly obovoid, 1.5 x 1.5 mm, hirto-pubescent; beak also hirto-pubescent, 1.5-2 mm long and longitudinally grooved; stigmas linear or clavate, 1-2 x 0.3 mm, outside obscurely pubescent and reddish to purplish, apex acute or obtuse, margin entire to subentire. Fruit 45-95 mm long; mericarps 9-12 x 1.5-2 mm and beak 35-85 mm long; mericarps narrowly obconical, hirsute, rimmed and ridged at the apex; the rim and ridge prominent and sharp-edged, perpendicular to the tailor oblique; the tail hirsute outside, hispid inside where the tails detach from the beak-axis; these stiff hairs whitish or copper-coloured, and long at the tail's base, forming a crest. Seed narrowly obovoid, 4-5 x 1-1.5 mm, glabrous. In both hemispheres the main flowering and fruiting periods occur in late summer and autumn, but in more tropical regions such plants could be found in any month of the year.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 65573; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
A herb that grows under conditions that range from semi-arid and hot to moderately moist and mild. Its habitat varies from grassland, savannah, open forest with sparse grass, low shrubs and grasses, flat treeless country and karooveld to wastelands and roadsides on soils that vary from gravel and sand to silt and clay.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 65426; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
