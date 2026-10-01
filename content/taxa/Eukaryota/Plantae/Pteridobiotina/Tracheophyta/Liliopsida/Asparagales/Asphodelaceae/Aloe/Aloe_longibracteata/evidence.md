---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Aloe longibracteata Pole-Evans
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
            url: https://www.checklistbank.org/dataset/316115/taxon/C3SX
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage C3SX
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
            url: https://list.worldfloraonline.org/wfo-0000758422-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL C3SX / WFO wfo-0000758422
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
        - referenceId: ref-4e1f793f-f50b-865d-ac17-a11eeda46a6e
          metadataVariant: 0
          sourceKey: sanbi_13236_0
          usage:
            locator: Aloe longibracteata Pole-Evans account; SANBI/WFO archive rows 79338 (Morphology), source identifier 13236.0
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
        - referenceId: ref-7cc83481-d822-8aa1-a684-e3a862064c43
          metadataVariant: 0
          sourceKey: sanbi_17714_0
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
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
              - sanbi_13236_0
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
              - sanbi_17714_0
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
              - sanbi_17714_0
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

# Aloe longibracteata

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage C3SX, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage C3SX; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Aloe longibracteata Pole-Evans account; SANBI/WFO archive rows 78815 (Habitat), 78133 (Diagnostic), source identifier 17714.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Plants acaulescent, solitary, never stoloniferous. Leaves 20-26, densely rosulate, oldest leaves horizontally disposed, triangular-lanceolate, about 10-15 cm, long, 9-10 cm broad (frequently as long as broad) very thick and fleshy, with an additional 10 cm of dried twisted purplish apex; upper surface flat to slightly canaliculate, dark green, sometimes with a reddish tinge, with numerous elongated pale green to dull white distinct or slightly obscure spots, more or less arranged in a series of undulating interrupted transverse bands; lower surface paler green, unspotted, indistinctly lineate; margins sinuate-dentate, usually with pronounced reddish-brown corneous edge armed with stout pungent deltoid brown to reddish-brown teeth about 5-7 mm long, 9-12 mm distant, the interspaces rounded. Inflorescence mostly about 80 cm high, sometimes 1 met., a second sometimes appearing after the first, branched well below the middle usually with 3 racemes, the lowest branch subtended at base by bracts 10 cm and more long. Racemes narrowly long cylindric-acuminate, sub-densely flowered, the terminal 30-40 cm long, lateral shorter, the apical buds sub-erect, dense, completely hidden by their longer bracts, open flowers laxer. Bracts of lowest pedicels 45-50 mm long, more fleshy and amplexicaul low down, more scarious upwards, with the apical 20 mm dry, twisted or coiled, narrowly deltoid-acuminate, many-nerved. Pedicels lowest of terminal racemes 20-25 mm long, gradually shorter upwards, reaching 50 mm in the fruit stage. Perianth 40-45 mm long, with sub-globose basal swelling 9-10 mm diam., constricted above the ovary to 5-6 mm, thence decurved and enlarging towards the throat, Peach-Red (R.C.S. I) with a bloom, the mouth usually yellowish; outer segments free 15 mm, with paler borders, yellowish inside, with about 6 obscure nerves confluent at apex, the apices sub-acute spreading; inner segments broader than the outer and with broader white border, the apices more obtuse more spreading. Filaments flattened, the 3 inner half as broad as the 3 outer and lengthening in advance, with their anthers shedding pollen distinctly in advance of the 3 outer. Anthers and Stigma not, or very shortly exserted. Ovary 8 mm long, 3-5 mm diam. at base, slightly tapering into the style, finely 6-grooved, green. Capsule oblong-cylindrical, 30 mm long, 15 mm diam. at the middle. Plants flower mostly in July-August, although earlier and later flowering forms occur.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Aloe longibracteata Pole-Evans 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 79338; source identifier 13236.0; cited publication: Reynolds, GW. 1974. Aloes of South Africa, 3rd ed. A.A. Balkema, Cape Town. [All rights reserved]
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
It is characterized by its robust spreading leaves, dichotomously branched inflorescence, erect racemes, and extremely long bracts. The bracts at the base of the branches are remarkable in that they attain a length of 10-11 cm. Those in the lower portion of the racemes are from 45-47 mm. long while those in the upper portion measure 25 mm. The flowers are a rich strawberry-pink (K.C.S.). This Aloe would appear to be closely related to A. affinis Berg., which also occurs in the same locality, but it differs from it in possessing shorter and more triangular leaves which are conspicuously spotted. Moreover, the leaves of A. affinis are distinctly erect, whereas those of A. longibracteata are almost always horizontal. The inflorescence usually bears 2 or 3 erect branches which spring from below the middle of the peduncle, while those of A. affinis arise well above the middle. The brightly coloured racemes make it a distinct and attractive ornamental plant.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Aloe longibracteata Pole-Evans 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 78133; source identifier 17714.0; cited publication: Pole-Evans, IB. 1915. Descriptions of some new aloes from the Transvaal. Trans. Roy. Soc. South Africa 5: 25 - 37. [https://www.biodiversitylibrary.org/item/181589#page/87/mode/1up]. [All rights reserved]
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
It occurs in open grass country.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：It occurs in open grass country.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 78815; source identifier 17714.0; cited publication: Pole-Evans, IB. 1915. Descriptions of some new aloes from the Transvaal. Trans. Roy. Soc. South Africa 5: 25 - 37. [https://www.biodiversitylibrary.org/item/181589#page/87/mode/1up]. [All rights reserved]
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
