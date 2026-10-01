---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Ixia minor (G.J.Lewis) Goldblatt & J.C.Manning
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3QFPC
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 3QFPC
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
            url: https://list.worldfloraonline.org/wfo-0001335359-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 3QFPC / WFO wfo-0001335359
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
        - referenceId: ref-2fd9e278-de4a-8514-aa3d-fe2b963bd71e
          metadataVariant: 0
          sourceKey: sanbi_15933_0
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
        - referenceId: ref-4d85e647-18c6-87c9-a02f-7cce759f31dd
          metadataVariant: 0
          sourceKey: sanbi_18638_0
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
              - sanbi_15933_0
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
              - sanbi_15933_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/textZh
            sourceIds:
              - sanbi_18638_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/lifeStatus
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
              - sanbi_15933_0
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

# Ixia minor

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 3QFPC, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 3QFPC; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Ixia minor (G.J.Lewis) Goldblatt & J.C.Manning account; SANBI/WFO archive rows 85212 (Morphology), 84955 (Habitat), 84451 (Diagnostic), source identifier 15933.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Ixia minor (G.J.Lewis) Goldblatt & J.C.Manning account; SANBI/WFO archive rows 95100 (Diagnostic), source identifier 18638.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Plants 200-300 mm high, stem unbranched, sheathed by membranous to dry, brown cataphylls at base. Corm 8-10 mm diam., tunics of fine fibres extending upward as a collar, often in a dense mass. Leaves 2, lower 1 ± basal, upper 1 sheathing stem in lower 1/2 to 2/3, free distally for short distance, blades ± terete or oval in section, up to 1 mm diam., main vein evident only when dry. Spike erect, straight, mostly 2-4-flowered, bracts membranous, translucent, usually flushed purple, outer 5-7 mm long, usually prominently 3-veined, shallowly 3-lobed to acutely 3-toothed, inner bract ± as long as or slightly longer than outer, 2-veined and 2-lobed or 2-toothed. Flowers rotate, bright pink to mauve pink; perianth tube filiform, 3-5 mm long, clasping style; tepals spreading, ovate-elliptic, 12-14 x 5-6 mm. Stamens symmetrically arranged, erect, filaments flattened, ± lanceolate but narrowed and kinked at tips, inserted at mouth of tube, ± white, 1.0(-1.5) mm long, anthers ovoid, ± 1.0 mm long, erect, yellow, thecae acute but abruptly incurved and touching at base, dehiscing fully by longitudinal slits, often more widely at base, yellow. Style dividing opposite base to middle of filaments, branches up to 2 mm long, involute, tubular-falcate, ± compressed, narrowed at tips, stigmatic apically, white. Flowering time: late Jul.-mid-Sept., rarely later.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Ixia minor (G.J.Lewis) Goldblatt & J.C.Manning 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 85212; source identifier 15933.0; cited publication: Goldblatt, P; Manning, JC. 2012. Systematics of the southern African genus Ixia (Iridaceae): 4. Revision of sect. Dichone. Bothalia 42(2): 87 - 110. [CC BY]
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
Ixia minor, treated as var. minor of I. micrandra by Lewis (1962) but raised here to species rank, is evidently closely allied to the more widespread I. micrandra, with which it is easily confused unless floral details are examined carefully. Both share a slender, usually unbranched stem, small corms with fine, netted tunics that extend upward in a collar around the base, and a dry, often brown, upper cataphyll. The critical differences between the two species lie in their flowers: I. minor has flattened, ± wedge-shaped to oblanceolate filaments abruptly narrowed at the tips, shorter and broader anthers, often not dehiscing to the apex and kinked at the base with the bases of the thecae turned inwards and touching, and shorter, wider, strongly arched style branches slightly compressed and narrowed at the tips. To these microscopic details can be added a deep pink to purple-pink tepals, linear filaments, longer, oblong anthers dehiscing to the apex and longer, more slender style branches, ± straight to slightly arched.Annotations by G.J. Lewis on collections of Ixia confusa from the Swartberg indicate that at one time she considered these populations a separate species, which she intended to call I. aestivalis, in part because of their late flowering, from late October to early December. We find that collections from the Swartberg also differ in having slightly shorter filaments, 1-2 mm long, than typical I. confusa (1.5-2.8 mm long), the style sometimes dividing above the mouth of the perianth tube (opposite the middle of the filaments in Goldblatt 7962), and anther dehiscence sometimes not reaching the middle of the thecae. The plants have a small, translucent scale and prophyll on the upper part of the stem, a feature occasionally present in southern populations of I. confusa. Additional study may show that the later-flowering Swartberg populations merit separate taxonomic status but we find no consistent character differences between them. There seems no current threat to the species and we agree with Raimondo et al.'s (2009) (LT, as I. micrandra var. confusa), Least Threat conservation status.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Ixia minor (G.J.Lewis) Goldblatt & J.C.Manning 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 84451; source identifier 15933.0; cited publication: Goldblatt, P; Manning, JC. 2012. Systematics of the southern African genus Ixia (Iridaceae): 4. Revision of sect. Dichone. Bothalia 42(2): 87 - 110. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/text -->
Like Ixia micrandra, I. minor has a slender, usually unbranched stem, small corms with fine, netted tunics that extend upward in a collar around the base, and a dry, often brown, upper cataphyll. The critical differences between the two species lie in their flowers. Ixia minor has flattened, ± wedge-shaped to oblanceolate filaments abruptly narrowed and kinked at the tips, and shorter and broader anthers, often not dehiscing to the apex. The style branches are also shorter, 2-3 mm long, wider, and strongly arched whereas those of I. micrandra are more-or-less straight and (2)3-5 mm long. To these microscopic details can be added a brighter pink perianth. Flowers of I. micrandra have pale pink to purple-pink tepals, straight, filiform filaments and longer, oblong anthers dehiscing to the apex. The leaves of the two species also differ somewhat: those of I. minor are subterete to oval in section, thus when alive without margins or evident central vein, whereas I. micrandra has plane, linear leaf blades with slightly thickened margins and, when dry, a visibly raised main vein. Evidence for their separation is provided by collections of both species made in the Houw Hoek Mtns flowering on the same date and visibly different in appearance.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/textZh -->
SANBI 条目提供了 Ixia minor (G.J.Lewis) Goldblatt & J.C.Manning 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/locator -->
SANBI/WFO archive Diagnostic row 95100; source identifier 18638.0; cited publication: Goldblatt, P; Manning, JC. 2020. Iridaceae of southern Africa. Strelitzia 42: 1 - 1159. South African National Biodiversity Institute, Pretoria. [CC BY]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only the cited regional morphology and available diagnostic descriptions have been assessed; developmental and population variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The habitat, stony sandstone slopes, is the same as that for I. micrandra.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：The habitat, stony sandstone slopes, is the same as that for I. micrandra.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 84955; source identifier 15933.0; cited publication: Goldblatt, P; Manning, JC. 2012. Systematics of the southern African genus Ixia (Iridaceae): 4. Revision of sect. Dichone. Bothalia 42(2): 87 - 110. [CC BY]
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
