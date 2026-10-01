---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Monsonia grandifolia R.Knuth
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
            url: https://www.checklistbank.org/dataset/316115/taxon/449YT
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 449YT
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
            url: https://list.worldfloraonline.org/wfo-0001064093-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 449YT / WFO wfo-0001064093
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
            locator: Monsonia grandifolia R.Knuth account; archive rows 65580 (Morphology), 65433 (Habitat), source identifier 10189.0
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

# Monsonia grandifolia

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 449YT, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 449YT; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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
Robust, erect, suberect or rarely decumbent, suffrutescent, few-stemmed, 15 -40 cm high. Roots sometimes tuberous. Stems herbaceous to woody, often ribbed and laterally compressed, up to approximately 50 cm long, 1-4 mm in diam., mostly with a double indumentum the first of which is pubescent with curved hairs and the second of few to many long erect gland-based hairs, m6stly profusely glandular, with both stalked and sessile glands. Leaves alternate at the base of the main stems, and subopposite to opposite towards their apices and on the lateral branches, those of a pair often unequal, the smaller leaves with lateral branches and/or inflorescences in the axil; petiole with the same indumentum as the stem, 0.2-0.7 x as long as the blade; stipules subulate to acicular, with the same indumentum as the stem, 7-17 mm long, mostly reddish; blade ovate to very narrowly ovate, angular-ovate, rarely elliptic, 1.3-5 x as long as wide, mostly folded upwards along the midrib, (22)30-75 x (9)13-35 mm, thick-textured; attenuate to acute, sometimes 1-3-toothed or shortly mucronate at the apex; truncate, obtuse or cordate at the base; margin serrate or serrate-crenate, often sinuate or lobed, sometimes ciliate, mostly red tinged; above granulose and pubescent or with the indumentum of the stem, with numerous sessile glands and often also with stalked glands; beneath densely granulose, with the indumentum and glands of the stem all over or only on the veins and then pubescent with erect hairs in between; main veins pinnate or subpinnate, with 5 or 7 branching from the base, impressed above, prominent beneath. Inflorescences axillary, rarely terminal, 1-2-f1owered, 55-130 mm long. Peduncles and pedicels with the same indumentum and glands as the stem, the pedicel, furthermore, mostly extremely glandular and lanulose; peduncles 0.5-1.6(3) x as long as the pedicels, 15-55 mm long, mostly spirally twisted; pedicels 15-60 mm long and geniculate under the fruit; involucral bracts 2-4per flower, subulate or very narrowly ovate, with the same indumentum as the stem. Sepals narrowly ovate to narrowly obovate, green, free, or basally connate for 1-2mm and then with a shallow pouch at the base of each sepal, 2.4-4 x as long as wide, 10-15 x 3-5 mm; outside with the indumentum of the stem and very glandular; inside glabrous, with 3 parallel veins; ciliate at the margin; mucro terete with a globular pocket of yellowish, resinous granules at its base, 4-5.5 mm long, greenish to reddish, with the same indumentum as the sepals. Petals obtriangular, often recurved, 1.5-2.5 x as long as wide, 20-30 x 10-20 mm, 1.5-2.5 x as long as the sepals, 1.5-2 x as long as the stamens, white, pale yellow or creamy; venation greyish-blue; main veins 5 and with few to many sessile glands outside and sparsely villose or rarely also pubescent inside; winged, ciliate and pubescent at the base; apex obscurely dentate, crenate, sinuate or lobed. Stamens monadelphous, arranged in a cup-shaped column around the pistil; groups basally connate for 1-2 mm; filaments ofeach group basally connate for 1.5-4 mm; filaments in the central stamens 9-13 mm and in the lateral 5-11 mm long, pubescent basally, terete at the apex; a transversely ovate to ovate, rimmed gland-cavity is situated on the outer side of the base of each group; anthers oblong to narrowly oblong, 2.5-4 x 1-2 mm, those of the long filaments slightly larger, subintrorse. Pistil 10-15 mm long; ovary obovoid to broadly obovoid, 2-3 x 2-2.5 mm, hyalino-hirsute; beak longitudinally grooved, 6-8 mm long, pubescent, with stalked glands all over or only in the basal part; stigmas clavate to spathulate, 2.5-4 x 0.4-0.7 mm, blackish and glabrous to pubescent outside; the inner side with the lanulose or papillose receptive surface, obscurely to conspicuously serrate to dentate or crenate at the margin, obtuse or acute at the apex. Fruit 65-80 mm long; mericarps 10-15 x 2 mm and beak 50-65 mm long. Mericarps narrowly obovoid, brown, whitish-hirsute, some of the hairs with red spots around their bases, obliquely domed and obscurely rimmed at the apex; hirsute outside, hispid inside where the tail detaches from the beak-axis; these stiff hairs straw-coloured and long, forming a crest at the tail's base. Seed narrowly obovoid, 6 x 2 mm, glabrous.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 65580; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
Found in rocky or stony grassveld of mountain or hillsides. Rarely In swampy meadows. Alt. 800-1800 m.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 65433; source 10189.0; publication: Venter, HJT. 1979. A monograph of Monsonia L. (Geraniaceae). Meded. Landbouwhoogeschool Wageningen 79(9): 1 - 126. [All rights reserved]
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
