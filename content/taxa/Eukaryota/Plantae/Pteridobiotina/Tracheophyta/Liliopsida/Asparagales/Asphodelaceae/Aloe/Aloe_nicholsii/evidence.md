---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Aloe nicholsii Gideon F.Sm. & N.R.Crouch
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
            url: https://www.checklistbank.org/dataset/316115/taxon/C3VY
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage C3VY
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
            url: https://list.worldfloraonline.org/wfo-0000916909-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL C3VY / WFO wfo-0000916909
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
        - referenceId: ref-adb50ade-f7d0-8c4f-a583-1d32ed375ba7
          metadataVariant: 0
          sourceKey: sanbi_7896_0
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
              - sanbi_7896_0
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
              - sanbi_7896_0
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
              - sanbi_7896_0
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

# Aloe nicholsii

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage C3VY, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage C3VY; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
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
Aloe nicholsii Gideon F.Sm. & N.R.Crouch account; SANBI/WFO archive rows 79354 (Morphology), 78827 (Habitat), 78141 (Diagnostic), source identifier 7896.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Small to medium-sized, herbaceous, slow- growing, succulent, perennial, grass aloe, total height excluding inflorescence ± 300-360 mm, usually clumped, up to 40 heads, sometimes solitary, a single head at mid-rosette up to 160 mm in diameter. Roots cylindrical when young, becoming fusiform with age, central portion 8(-10) mm in diameter. Stems short, stout, ± 60(-140) mm long, 20-45 mm in diameter. Leaves few, distichous becoming semi-rosulate, 9-15, not persistent when dry, narrowly linear-attenuate, tapering to apex, 200-460 mm long, 20-53 mm broad at base, basally sheathing, flaccidly spreading; upper surface distinctly and consistently concave, canaliculate, mid-green to light yellowish green, occasionally with few scattered white spots towards base, smooth; lower surface convex, mid-green to light yellowish green, scattered white spots common towards base; margins with a coarse, faintly ivory-coloured edge, marginal teeth more or less absent, if present, tiny, widely spaced, harmless, triangular; ivory-coloured to greenish white, < 0.5 mm long towards base of leaf, becoming increasingly smaller towards tip of leaf, 5-10 mm distant, ± unevenly and widely spaced; dry leaf sap translucent. Inflorescence an unbranched raceme, 300-460 mm tall, as tall as or exceeding the height of rosette; each rosette producing up to 3 racemes, peduncle sparsely sterile bracteate, denser towards apical part of inflorescence, bracts varying from thickened, somewhat fleshy, light yellowish green with very broad, white margins to light salmon-brown, papery, central part same colour as peduncle when succulent, many-nerved, 18-170 mm long, 10 mm broad at base, tapering to a sharp, harmless tip. Peduncle basally plano-convex, cylindrical above, 260-360 mm long, 6-8 mm broad at base, light yellowish green, dusty bloom lacking. Racemes densely capitate, the flowering portion 30-35 mm long, 50-60 mm in diameter; buds erect to suberect, congested at apex, lowest open flowers suberect to horizontal. Floral bracts amplexicaul around pedicel, large, light yellowish green, somewhat fleshy, to salmon-brown, papery, with 4-7 prominent mid-green or light brown nerves, 10-26 mm long. Pedicels 25-30 mm long. Flowers zygomorphic, unscented, small, 13-16 mm long, slightly stipitate at base, tubular-cymbiform, lightly pruinose, tricoloured, salmon-pink above, greenish below, tip extremity purplish-brown, enlarging towards throat and forming a very slightly open, distinctly upturned mouth; buds similar to open flowers, 5 mm in diameter in middle; buds and flowers not trigonously or cylindrically indented above ovary; outer segments larger than inner segments, lorate to long-triangular, free for most of their length, basally fused for ± 0.5-1.0 mm, free portion with a prominent central nerve, borders the same colour as tepal blade, acute, segment margins folded lengthwise, apex slightly incurved; inner segments narrower than outer, with yellowish white border and more obtusely spreading apex, free for most of their length. Stamens 6, hypogynous; filaments cylindrically thread-like to very slightly flattened, light yellow, 11-13 mm long, all 6 of ± equal length, not exserted; anthers small, 1.0 mm long, bright orange, versatile, included or only very slightly exserted. Ovary 3-5 mm long, 2 mm in diameter, light green; style short, 8 mm long, minutely capitate; stigma small, becoming exserted during female phase of flower. Fruit an erect, bright green, trilocular capsule, cylindrical, 17-19(-22) mm long, 9-10 mm in diameter, apically truncate, dry remains of tepals persisting around fruit for a long time, dehiscing loculicidally, chartaceous to woody when dry. Seeds, dark greyish brown, angled, laterally compressed, with off-white wing stretching around periphery of seed, 2.5-3.0 mm long. Flowering time January to March, peaking in February. Chromosome number unknown.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Aloe nicholsii Gideon F.Sm. & N.R.Crouch 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 79354; source identifier 7896.0; cited publication: Smith, GF; Crouch, NR. 2010. Aloe nicholsii Gideon F.Sm. & N.R.Crouch: A new leptoaloe from KwaZulu-Natal, South Africa. Bradleya 28: 103 - 106. [https://doi.org/10.25223/brad.n28.2010.a10]. [All rights reserved]
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
The species shows affinities with Aloe kraussii Baker, but can be readily distinguished from it on reproductive characters: the flowers are smaller, pruinose, green below and a distinct metallic salmon-pink colour above. The flowers of A. kraussii are lemon-yellow or yellow, with green tips. Our species further differs from the unkeeled-leaf form of Aloe cooperi Baker in having much shorter flowers presented in a denser, capitate raceme, and the flower colour is not orange.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Aloe nicholsii Gideon F.Sm. & N.R.Crouch 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 78141; source identifier 7896.0; cited publication: Smith, GF; Crouch, NR. 2010. Aloe nicholsii Gideon F.Sm. & N.R.Crouch: A new leptoaloe from KwaZulu-Natal, South Africa. Bradleya 28: 103 - 106. [https://doi.org/10.25223/brad.n28.2010.a10]. [All rights reserved]
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
Plants were collected in full sun in open rocky grassland of Northern Zululand Sourveldat an altitude of ± 1290 m, growing in a rocky, clay-loam substrate. Although low rock outcrops are present at the type locality the aloes were not observed to take particular refuge amongst these.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Plants were collected in full sun in open rocky grassland of Northern Zululand Sourveldat an altitude of ± 1290 m, growing in a rocky, clay-loam substrate. Although low rock outcrops are present at the type locality the aloes were not observed to take particular refuge amongst these.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 78827; source identifier 7896.0; cited publication: Smith, GF; Crouch, NR. 2010. Aloe nicholsii Gideon F.Sm. & N.R.Crouch: A new leptoaloe from KwaZulu-Natal, South Africa. Bradleya 28: 103 - 106. [https://doi.org/10.25223/brad.n28.2010.a10]. [All rights reserved]
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
