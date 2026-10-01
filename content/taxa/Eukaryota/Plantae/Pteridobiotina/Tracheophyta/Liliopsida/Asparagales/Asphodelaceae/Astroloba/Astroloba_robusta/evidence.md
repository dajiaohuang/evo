---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Astroloba robusta P.Reinecke ex Molteno, van Jaarsv. & Gideon F.Sm.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/8WRJX
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 8WRJX
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
            url: https://list.worldfloraonline.org/wfo-0001420888-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 8WRJX / WFO wfo-0001420888
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
        - referenceId: ref-66d34fc4-53b0-84f2-afb9-37da4cb02bbe
          metadataVariant: 0
          sourceKey: sanbi_15902_0
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
              - sanbi_15902_0
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
              - sanbi_15902_0
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
              - sanbi_15902_0
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

# Astroloba robusta

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 8WRJX, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 8WRJX; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Astroloba robusta P.Reinecke ex Molteno, van Jaarsv. & Gideon F.Sm. account; SANBI/WFO archive rows 64775 (Morphology), 64545 (Habitat), 64018 (Diagnostic), source identifier 15902.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Plants caulescent, solitary when young, later proliferating from the base to form small clusters, slow-growing, herbaceous, succulent perennials. Stems initially erect or suberect, occasionally becoming decumbent with age. Branches- developing from the base, rarely reaching to 40 cm in length. Leaves 20-40 x 12-25 mm at widest fleshy part above base, narrowly deltoid, arranged in 5 vertical ranks [quinquefarious], usually spirally-twisted and appearing imbricate; dark green with grey or brown hues, usually with a distinctly glossy sheen, becoming grey-brown in full sun, surface markings variable, usually glabrous, sometimes with occasional white, often elongated, spots or tubercles, often with faint dark striations near the leaf apex; leaves suberect, rarely patent-erect; keels and margins cartilaginous, usually white, margins continuous up until apex; apex curving outwards, occasionally following the angle of the leaf, acuminate or attenuate, mucronate. Inflorescence robust, unbranched, pedunculated, racemose, 10-30 cm long, very rarely up to 50 cm long; peduncle 2-9 bracts below raceme, flowers sessile or sometimes slightly pedicellate, spirally arranged flowers arising in the axils of colourless, membranous, tapering, clasping bracts in upper half; peduncle usually 5-10 mm wide at base; spent peduncles persistent, remaining on the plants for a long time; pedicels 0-0.5 mm long, usually sessile, 1.0-1.5 mm in diameter. Flowers 6-10 x 2.5-4.0 mm, unevenly distributed in raceme, l-9 mm apart, ascending-spreading, tepals fused to form a tube, lobes white never yellow), midribs visible as darker-tinted grey stripes, outer 3 tepals overlap the inner 3; tube slightly narrowing towards the tip before the free portions of the lobes flare; lobes free, recurved, outer lobes more recurved than inner lobes; stamens 5.0-8.5 mm long; ovary 3-4 mm long; style 2.0-3.5 mm long. Fruit an ovoid, cylindrical, trilocular capsule, 10 x 5 mm, pale glaucous-green, upturned and retaining dried sheath of the dead flower at the tip. Seed dark brown to black, angled, with slight wing, 2-3 x 1.0-1.5 mm, including wing. Flowering time: Winter to early spring in the southern hemisphere, May to October, peaking in July and August.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Astroloba robusta P.Reinecke ex Molteno, van Jaarsv. & Gideon F.Sm. 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 64775; source identifier 15902.0; cited publication: Molteno, S; Van Jaarsveld, EJ; Smith, GF. 2017. Astroloba robusta P.Reinecke ex Molteno, Van Jaarsv. & Gideon F.Sm. (Asphodelaceae: Alooideae), a new species from the Great Karoo, South Africa. Bradleya 35: 201 - 211. [All rights reserved]
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
Diagnosis: Astroloba robusta differs from Astroloba foliolosa and Astroloba congesta by its robust peduncles with markedly flattened bases, long basal bracts on the peduncle, sessile or near sessile flowers, and a winter flowering period, mostly in July and August. Both margins of each leaf maintain their identity up to the leaf apex; leaf colour is green with brownish-grey hues, while margins and keels are usually paler or white; the exposed lower leaf surfaces have a glossy appearance due to the almost flat nature of the outer walls of the epidermal cells.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Astroloba robusta P.Reinecke ex Molteno, van Jaarsv. & Gideon F.Sm. 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 64018; source identifier 15902.0; cited publication: Molteno, S; Van Jaarsveld, EJ; Smith, GF. 2017. Astroloba robusta P.Reinecke ex Molteno, Van Jaarsv. & Gideon F.Sm. (Asphodelaceae: Alooideae), a new species from the Great Karoo, South Africa. Bradleya 35: 201 - 211. [All rights reserved]
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
The climate is semi-arid, with hot summer: with temperatures often above 30° Celsius, and winters are cold with frost. Rainfall of between 100 and 300 mm per annum is recorded mainly in summer and autumn. The majority of the natural range of Astroloba robusta closely matches the extent of the 100-150 mm rainfall regime, except at the eastern edge of the species range, where it extends into marginally wetter areas, with rainfall of up to 200 mm per annum. The bulk of the natural range of Astroloba robusta falls within the Gamka Karoo vegetation type (NK11) which is part of the Nama Karoo Biome. Plants are often locally common; sometimes it is even a dominant feature of the vegetation, growing in the open or under nurse bushes. Newly germinated seedlings are almost without exception found within these bushes. This species occurs mostly on flat or gently undulating terrain, as well as on low, rocky, shale slopes. In the south of its range, Astroloba robusta extends into the Koedoesberge-Moordenaars Karoo vegetation type (SKv 6), as well as the succulent-rich Prince Albert Succulent Karoo (SKv 13), both of which are part of the Succulent Karoo Biome. In this region, the species broadly tracks the Swartberg Mountains. The far south-western extension of this species occurs in Western Little Karoo vegetation (SKv 8) just north of the Klein Swartberg Mountains. This vegetation type is also part of the Succulent Karoo Biome. Towards the east of the vast range of this species, the vegetation transitions into Eastern Lower Karoo [vegetation] (NK12), and to the south-east, the vegetation type is Steytlerville Karoo (SKv 14). The former of these two vegetation types is part of the Nama Karoo Biome, the latter of the Succulent Karoo Biome.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：The climate is semi-arid, with hot summer: with temperatures often above 30° Celsius, and winters are cold with frost. Rainfall of between 100 and 300 mm per annum is recorded mainly in summer and autumn. The majority of the natural range of Astroloba robusta closely matches the extent of the 100-150 mm rainfall regime, except at the eastern edge of the species range, where it extends into marginally wetter areas, with rainfall of up to 200 mm per annum. The bulk of the natural range of Astroloba robusta falls within the Gamka Karoo vegetation type (NK11) which is part of the Nama Karoo Biome. Plants are often locally common; sometimes it is even a dominant feature of the vegetation, growing in the open or under nurse bushes. Newly germinated seedlings are almost without exception found within these bushes. This species occurs mostly on flat or gently undulating terrain, as well as on low, rocky, shale slopes. In the south of its range, Astroloba robusta extends into the Koedoesberge-Moordenaars Karoo vegetation type (SKv 6), as well as the succulent-rich Prince Albert Succulent Karoo (SKv 13), both of which are part of the Succulent Karoo Biome. In this region, the species broadly tracks the Swartberg Mountains. The far south-western extension of this species occurs in Western Little Karoo vegetation (SKv 8) just north of the Klein Swartberg Mountains. This vegetation type is also part of the Succulent Karoo Biome. Towards the east of the vast range of this species, the vegetation transitions into Eastern Lower Karoo [vegetation] (NK12), and to the south-east, the vegetation type is Steytlerville Karoo (SKv 14). The former of these two vegetation types is part of the Nama Karoo Biome, the latter of the Succulent Karoo Biome.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 64545; source identifier 15902.0; cited publication: Molteno, S; Van Jaarsveld, EJ; Smith, GF. 2017. Astroloba robusta P.Reinecke ex Molteno, Van Jaarsv. & Gideon F.Sm. (Asphodelaceae: Alooideae), a new species from the Great Karoo, South Africa. Bradleya 35: 201 - 211. [All rights reserved]
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
