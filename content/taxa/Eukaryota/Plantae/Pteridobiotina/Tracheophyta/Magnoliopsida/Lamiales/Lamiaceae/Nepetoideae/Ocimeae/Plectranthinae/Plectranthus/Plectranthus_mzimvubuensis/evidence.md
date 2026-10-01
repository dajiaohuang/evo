---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Plectranthus mzimvubuensis van Jaarsv.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/4K4FR
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 4K4FR
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
            url: https://list.worldfloraonline.org/wfo-0000498438-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 4K4FR / WFO wfo-0000498438
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
        - referenceId: ref-8225bc32-d080-82f8-a3ea-ebc6efefdaba
          metadataVariant: 0
          sourceKey: sanbi_6463_0
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
              - sanbi_6463_0
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
              - sanbi_6463_0
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
              - sanbi_6463_0
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

# Plectranthus mzimvubuensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 4K4FR, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 4K4FR; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
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
Plectranthus mzimvubuensis van Jaarsv. account; archive rows 83006 (Morphology), 82775 (Habitat), 82140 (Diagnostic), source identifier 6463.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Perennial, branched, aromatic shrub up to 1 m tall, 3 m diam., scandent and pendent from cliffs. Roots fibrous to slightly fleshy, but bearing distinct oblong to rounded tubers; tubers 25-50 x 14-20 mm, grey, tissue translucent and slightly yellowish. Stems herbaceous, semisucculent, 4-angled, terete in older branches and with a succulent basal caudex. 100 mm diam. Bark smooth, grey. Leaves thin-textured and drying chartaceous, broadly ovate-deltoid to subrotund. (15-)25-50(-75) x (20-)28-50(-60) mm, apex acuminate, with a short drip-tip, base truncate to subcordate, occasionally slightly decurrent on petiole, adaxial surface sparsely strigose becoming glabrescent, abaxial surface prominent reticulate-veined, strigose, becoming less so with age. covered with slightly sunken, translucent gland dots (sessile glandular trichomes) becoming yellowish brown in dried specimens, veins densely strigose and with similar gland dots; margin serrate-dentate with 6-10 pairs of teeth (0.5-)1-2(-4) mm long, ciliate; petiole reddish purple. 10-20(-30) mm long, finely strigose with unbranched, multicellular translucent hairs, sparsely beset with gland-tipped trichomes. Inflorescence short, terminal, verticillate, (30-)70-90(-120) mm long, sometimes with a pair of side branches at base; rachis sparsely strigose, bearing scattered, sessile, yellowish brown gland dots and unbranched, multicellular, glandular trichomes; bracts broadly ovate, acuminate, 7 x 4 mm. Flowers in sessile. 1-3-flowered cymes forming 2-6-flowered verticillasters, the latter 6-12(-18) mm apart; pedicels 5-8 mm long, finely strigose, bearing few, multicellular, gland-tipped trichomes. Calyx up to 4 mm long, accrescent, lengthening to 10-11 mm in fruit, densely covered with sessile, yellowish brown gland dots at base, 2-lipped; upper lip erect, broadly ovate, abruptly acuminate, ± 3 mm long; lower lip 4-toothed, teeth acuminate; tube ± 8 mm long. Corolla pink; tube straight. 9-10 mm long, laterally compressed, 3 mm wide, slightly defiexed forming a swollen saccate base, sparsely beset with translucent hairs, 0.2-3.0 mm long, 2 lipped; upper lip 4-lobed, 8 mm high, becoming re flexed when stigma matures; upper lobes bent forward and forming an ascending, spreading 2-spurred hood, ventral margin of upper lobes overlapping two upper margins of lateral lobes and each lobe forming a characteristic spur up to 2 mm deep, apex of spur beset with translucent hairs, 0.5-1.0 mm long; lower lip boat-shaped, 6 mm long, soon becoming reflexed. Stamens 4, free, fused to tube ± 1.5-2.0 mm from throat, didynamous, lower pair exposed for 14-15 mm, upper pair exposed for 10-11 mm, both pairs becoming reflexed; anthers versatile; pollen cream-coloured. Style 14 mm long extending up to 20 mm when mature, exposed for ± 8 mm. Nutlets rounded, 1.5 x 1.3 mm, dark brown, smooth.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 83006; source 6463.0; publication: Van Jaarsveld, EJ; Van Wyk, AE. 2004. Lamiaceae: Plectranthus mzimvubuensis, a new species from Eastern Cape, South Africa. Bothalia 34: 30 - 32. [CC BY]
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
Plectranthus mzimvubuensis is at once distinguished from P. reflexus Van Jaarsv. & T.J.Edwards by its shorter parallel-sided corolla tube which is 10 mm long, whereas that of P reflexus is longer, 25 mm. and constricted at the mouth. P. mzimvubuensis is a much-branched scrambler from a rootstock tearing distinct root tubers, whereas P. reflexus is an erect shrub with fleshy roots. In both species the lips and stamens become reflexed and the mature style is twice the length of the corolla tube. According to Codd's (1985) key in his treatment for the Flora of southern Africa (28.4: 141), the new' species would key out to ‘28' which includes five species, P. ambiguus. P. ecklonii, P. dolomiticus, P. petiolaris and P. laxiflorus. Of these, the corolla of P. petiolaris, P. laxiflorus and P. dolomiticus are curved like a ‘Dutchman's pipe'. P. mzimvubuensis can be distinguished from P. ecklonii and P. ambiguus by its short corolla of 9-10 mm with the lobes of the upper lips hooded, their lower margins overlapping the lateral lobes and forming two short spurs, each 2 mm long and ending in a translucent hair. 0.5-2.0 mm long. The spurred upper lobes of the corolla are a unique feature in the genus Plectranthus, possibly assisting flying insects in effective pollination. The corolla tube of P. ecklonii is 12-18 mm long and slightly expanding to the throat, whereas the corolla tube of P. ambiguus is 20-25 mm long.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了该种的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 82140; source 6463.0; publication: Van Jaarsveld, EJ; Van Wyk, AE. 2004. Lamiaceae: Plectranthus mzimvubuensis, a new species from Eastern Cape, South Africa. Bothalia 34: 30 - 32. [CC BY]
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
It is endemic to south-facing Ecca Group shale cliff faces (Karoo Supergroup) along the Mzimvubu River. At an altitude of ± 600 m. The vegetation consists of savanna and the rainfall occurs mainly from spring to autumn, 800-1000 mm per annum. The climate is subtropical, with hot summers, dry, sunny, frost-free winters and cool evenings.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 82775; source 6463.0; publication: Van Jaarsveld, EJ; Van Wyk, AE. 2004. Lamiaceae: Plectranthus mzimvubuensis, a new species from Eastern Cape, South Africa. Bothalia 34: 30 - 32. [CC BY]
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
