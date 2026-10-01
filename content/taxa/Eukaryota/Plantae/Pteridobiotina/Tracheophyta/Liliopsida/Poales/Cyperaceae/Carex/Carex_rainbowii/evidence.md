---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Carex rainbowii Luceño, Jim.Mejías, M.Escudero & Martín-Bravo
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
            url: https://www.checklistbank.org/dataset/316115/taxon/RBFZ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage RBFZ
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
            url: https://list.worldfloraonline.org/wfo-0001336267-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL RBFZ / WFO wfo-0001336267
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
        - referenceId: ref-c3c76012-a4f8-844d-aa6b-e749a4ddc3ca
          metadataVariant: 0
          sourceKey: sanbi_7719_0
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
              - sanbi_7719_0
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
              - sanbi_7719_0
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
              - sanbi_7719_0
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

# Carex rainbowii

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage RBFZ, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage RBFZ; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Carex rainbowii Luceño, Jim.Mejías, M.Escudero & Martín-Bravo account; SANBI/WFO archive rows 83893 (Morphology), 83684 (Habitat), 83320 (Diagnostic), source identifier 7719.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Plant caespitose. Stems 450-710 mm, sharply trigonous above, smooth. Leaves slightly shorter, as long as or longer than stems, (4.7) 6.0-10.0(11.1) mm wide, plicate, soft, scabrid on the edges, except basal parts, and on both faces in the apical part; ligule 1-3(8) mm, apex usually rounded, rarely subacute; antiligule absent; lowermost sheaths of the flowering stems foliose, the 2-3 lower most of the sterile shoots scale-like, straw-coloured to light brown, entire to slightly fibrose. Inflorescence 180-350 mm. Lowest bract slightly longer or shorter than inflorescence; sheath 22-55 mm long, the inner side green. Spikes 5-6, heteromorphic, with 1 apical male or androgynecandrous, sometimes with a small male or androgynous spike at its base, and 4-5 lateral female. Apical spike 30-45 mm x 1.8-8.7 mm, fusiform. Female spikes 28-51 x 5-8 mm, arising singly, dense-flowered except sometimes in basal parts, the lowest with a peduncle up to 185 mm, the 1-3 lowest pendulous. Male glumes 5.0-6.2 x 1.0-1.8 mm, lanceolate, narrowly ovate or oblong-elliptic, hyaline to straw-coloured, with a narrow green midrib, uninervate, acuminate to aristate. Female glumes (3.0) 3.5-4.0(5.0) x (1.1)1.3-1.8 mm, ovate, hyaline, with a narrow green midrib, 1-3 nervate, aristate, with an arista up to 1.5(1.8) mm, sometimes reduced to a short mucro. Utricles (3.0)4.0-4.5 x (1.0)1.2-1.6 mm, ovate to ellipsoid-trigonous, straight, with 2 well marked nerves, sometimes with some additional faint nerves, abruptly narrowed into a beak, greenish-brown; beak 1.2-2.0 mm, slightly bidentate to nearly truncate, with a deeper dorsal sinus, smooth. Achenes 2.0-2.8 x 1.11.3 mm, elliptic, trigonous.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Carex rainbowii Luceño, Jim.Mejías, M.Escudero & Martín-Bravo 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 83893; source identifier 7719.0; cited publication: Martin-Bravo, S; Escudero, M; Miguez, M; Jimenez-Mejias, P; Luceno, M. 2013. Molecular and morphological evidence for a new species from South Africa: Carex rainbowii (Cyperaceae). S. African J. Bot. 87: 85 - 91. [http://dx.doi.org/10.1016/j.sajb.2013.03.014]. [Copyright held by the South African Association of Botanists (2013); http://www.sciencedirect.com/science/journal/02546299]. [CC BY]
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
Similar to C. sylvatica, from which it differs mainly by its frequently androgynecandrous upper spike, the dense female spikes and the hyaline female glumes.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Carex rainbowii Luceño, Jim.Mejías, M.Escudero & Martín-Bravo 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 83320; source identifier 7719.0; cited publication: Martin-Bravo, S; Escudero, M; Miguez, M; Jimenez-Mejias, P; Luceno, M. 2013. Molecular and morphological evidence for a new species from South Africa: Carex rainbowii (Cyperaceae). S. African J. Bot. 87: 85 - 91. [http://dx.doi.org/10.1016/j.sajb.2013.03.014]. [Copyright held by the South African Association of Botanists (2013); http://www.sciencedirect.com/science/journal/02546299]. [CC BY]
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
In the holotype population, plants were growing in the shady understory of a montane forest dominated by Podocarpus latifolia (Thunb.) Mirb. and Carissa bispinosa Desf. Other accompanying observed species were Celtis africana Burm. f., Carex spicato-paniculata C. B. Clarke, Schoenoxiphium lehmannii (Nees) Steud., Dietes iridioides (L.) Klatt and Blechnum giganteum Schltdl. The habitat in the paratype population appears to be similar, with plants found in damp and shady places in a forest.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：In the holotype population, plants were growing in the shady understory of a montane forest dominated by Podocarpus latifolia (Thunb.) Mirb. and Carissa bispinosa Desf. Other accompanying observed species were Celtis africana Burm. f., Carex spicato-paniculata C. B. Clarke, Schoenoxiphium lehmannii (Nees) Steud., Dietes iridioides (L.) Klatt and Blechnum giganteum Schltdl. The habitat in the paratype population appears to be similar, with plants found in damp and shady places in a forest.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 83684; source identifier 7719.0; cited publication: Martin-Bravo, S; Escudero, M; Miguez, M; Jimenez-Mejias, P; Luceno, M. 2013. Molecular and morphological evidence for a new species from South Africa: Carex rainbowii (Cyperaceae). S. African J. Bot. 87: 85 - 91. [http://dx.doi.org/10.1016/j.sajb.2013.03.014]. [Copyright held by the South African Association of Botanists (2013); http://www.sciencedirect.com/science/journal/02546299]. [CC BY]
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
