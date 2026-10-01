---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Aloe braamvanwykii Gideon F.Sm. & Figueiredo
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
            url: https://www.checklistbank.org/dataset/316115/taxon/C3FH
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage C3FH
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
            url: https://list.worldfloraonline.org/wfo-0001334189-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL C3FH / WFO wfo-0001334189
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
        - referenceId: ref-9fd1287d-a84f-83b8-a872-e7d45c684570
          metadataVariant: 0
          sourceKey: sanbi_14975_0
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
              - sanbi_14975_0
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
              - sanbi_14975_0
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
              - sanbi_14975_0
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

# Aloe braamvanwykii

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage C3FH, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage C3FH; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Aloe braamvanwykii Gideon F.Sm. & Figueiredo account; SANBI/WFO archive rows 79253 (Morphology), 78938 (Habitat), 78113 (Diagnostic), source identifier 14975.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Small to medium-sized, herbaceous, slow-growing, succulent, perennial, maculate aloe, total height excluding inflorescence 0.17-0.28 m, usually clumped, 5-70 heads, sometimes solitary, a single head up to (17-)22 cm in diameter. Roots cylindrical, 5 mm in diameter. Stems absent or, if rarely present, very short. Leaves few, 12-15, rosulate, rigidly spreading to erect, persistent when dry, dull mid-green, upper surface slightly concave, hardly canaliculate, with numerous scattered white spots throughout, spots arranged in irregular transverse bands; lower surface convex, white spots more distinctly arranged in transverse bands, sometimes confluent yielding milky green surface, texture smooth, linear-attenuate, tapering to apex, 17-26 cm long, 3.5-5.5 cm broad at base, basally sheathing; margins very thin, brown, with triangular marginal teeth, green with light brown tips, ± 4 mm long, same length throughout, evenly spaced at 10-13 mm apart; exudate pale yellowish, drying purple. Inflorescence 1-3, successively, 0.65-0.75 m tall, far exceeding the height of rosette, central raceme longest, 5-7-branched from above middle, branches arcuate-erect. Peduncle 270-420 mm long, 8-14 mm broad at base, basally plano-convex, cylindrical above, light greenish brown with a white, powdery bloom; not sterile bracteate; bracts subtending racemes narrowly triangular, 15-65 mm long, 6-8 mm broad at the base, straw-coloured to light brown, papery, rarely fleshy, many nerved. Racemes cylindrical, 14-17 cm long, 3-5 cm wide; buds erect to suberect, flowers horizontal to drooping when mature. Floral bracts narrowly triangular, long attenuate, amplexicaul around pedicel, 5-9 mm long, 4-5 mm wide, straw-coloured, papery, 3-4 nerved. Pedicels 10-12 mm long, pinkish brown. Flowers: actinomorphic to slightly zygomorphic, unscented, nectariferous; perianth greenish tipped in buds, somewhat bicoloured when mature, light pink to mainly orange-red to bright red with whitish to yellowish longitudinal stripes, tip extremity purplish brown or whitish, lightly pruinose, 20-25 mm long, flattened at base, ± 6 mm across ovary, distinctly narrowed above ovary to ± 3 mm to form globose basal swelling, enlarging to 6-7 mm towards throat and wide open mouth, tubular-cymbiform; outer segments larger than inner segments, lorate, free for ± 7 mm, free portion centrally pinkish red, borders white or light yellowish, acute, segment margins straight, tips slightly recurved; inner segments narrower than outer, with white or yellowish border and more obtuse apex, free for upper 2/3 of their length; stamens with cylindrically threadlike to very slightly flattened, light yellow filaments, 25-28 mm long, all 6 of ± equal length, exserted for 2-5 mm; anthers small, 1-2 mm long, dark brown, versatile; ovary 5-6 mm long, 3 mm in diameter, light green; style as long as or slightly longer than stamens, minutely capitate, with small stigma, exserted 1-2 mm. Fruit an erect, bright green, cylindrical, trilocular capsule, 17-22 mm long, 9-11 mm in diameter, apically truncate, dry remains of tepals shed from around fruit early on, dehiscing loculicidally, chartaceous when dry, apically valves sigmoidally curved outwards. Seeds dark greyish brown, angled, laterally compressed, 2.5-3.0 mm long, with up to 1 mm wide off-white wing stretching around periphery of seed. Chromosome number unknown.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Aloe braamvanwykii Gideon F.Sm. & Figueiredo 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 79253; source identifier 14975.0; cited publication: Smith, GF; Figueiredo, E; Klopper, RR; Crouch, NR. 2012. Summer-flowering species of maculate Aloe L. (Asphodelaceae: Alooideae) in the Aloe zebrina-complex from South Africa: reinstament of four names, and description of A. braamvanwykii Gideon F.Sm. & Figueiredo. Bradleya 30: 155 - 166. [All rights reserved]
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
Plants are long-lived and typically form dense clumps of up to 70 heads. Not only are its flowers the smallest (20-25 mm long) among South African members of the A. zebrina-complex, but they are also characteristic in being an unusual intense red. Also diagnostic are the general small stature of the plants and shorter inflorescences (0.65-0.75 m). An outstanding feature is its concentrated and relatively early (December to February) flowering period.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Aloe braamvanwykii Gideon F.Sm. & Figueiredo 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 78113; source identifier 14975.0; cited publication: Smith, GF; Figueiredo, E; Klopper, RR; Crouch, NR. 2012. Summer-flowering species of maculate Aloe L. (Asphodelaceae: Alooideae) in the Aloe zebrina-complex from South Africa: reinstament of four names, and description of A. braamvanwykii Gideon F.Sm. & Figueiredo. Bradleya 30: 155 - 166. [All rights reserved]
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
Plants are associated with relict stands of Klerksdorp Thornveld, a vegetation type characterized by unevenly scattered Acacia karroo-dominated tree stands in a grassland matrix. Plants mainly grow in full sun in open grassy areas among woody vegetation. Aloe braamvanwykii prefers red sandy loam (often with small stone aggregates) derived from rocks of the Ventersdorp Supergroup, but occasionally can also be found on more clay-rich soils.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Plants are associated with relict stands of Klerksdorp Thornveld, a vegetation type characterized by unevenly scattered Acacia karroo-dominated tree stands in a grassland matrix. Plants mainly grow in full sun in open grassy areas among woody vegetation. Aloe braamvanwykii prefers red sandy loam (often with small stone aggregates) derived from rocks of the Ventersdorp Supergroup, but occasionally can also be found on more clay-rich soils.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 78938; source identifier 14975.0; cited publication: Smith, GF; Figueiredo, E; Klopper, RR; Crouch, NR. 2012. Summer-flowering species of maculate Aloe L. (Asphodelaceae: Alooideae) in the Aloe zebrina-complex from South Africa: reinstament of four names, and description of A. braamvanwykii Gideon F.Sm. & Figueiredo. Bradleya 30: 155 - 166. [All rights reserved]
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
