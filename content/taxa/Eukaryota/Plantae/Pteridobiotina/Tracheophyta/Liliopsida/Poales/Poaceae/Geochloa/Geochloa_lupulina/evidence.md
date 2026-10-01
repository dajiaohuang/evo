---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Geochloa lupulina (L.f.) N.P.Barker & H.P.Linder
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
      domesticated: Cultivation and domestication are not covered by the cited species accounts; no such conclusion is made.
      fossil: No fossil occurrence claim is made; fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-b7a0da64-36cd-8130-ab0c-cf9d69929170
          metadataVariant: 2
          sourceKey: col-wfo-crosswalk
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://list.worldfloraonline.org/wfo-0000920790-2026-06
            version: COL26.8 released 2026-08-20; WFO 2026-06 snapshot; local crosswalk record 3FP46
            locator: COL ID 3FP46; exact accepted-name-and-authorship mapping to WFO wfo-0000920790
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
        - referenceId: ref-ab6eb1d1-ee34-8eb0-a3d9-0faec2ba98a0
          metadataVariant: 0
          sourceKey: sanbi-grasses
          usage:
            locator: Printed pp. 356–358; SANBI archive source 15479.0, species-specific Morphology and Habitat rows cited per claim.
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
        - referenceId: ref-e43b3217-61ed-89dd-a86b-0d29daea4724
          metadataVariant: 0
          sourceKey: sanbi-strelitzia29
          usage:
            locator: Printed p. 212, Geochloa genus heading and separate species accounts.
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
        - referenceId: ref-79f87cb6-057c-8885-aa67-d670498056c6
          metadataVariant: 0
          sourceKey: linder2010
          usage:
            locator: Printed pp. 322–324, Geochloa diagnosis, distribution and habitat, and included species.
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
              - sanbi-grasses
            locator: Printed pp. 357–358; SANBI archive Morphology row 80676 and Habitat row 80390; Strelitzia 29 p. 212 species account.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            sourceIds:
              - sanbi-grasses
              - linder2010
            locator: Strelitzia 36, species-specific flowering statement on p. 357–358; Linder et al. 2010, p. 323.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
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
              - sanbi-grasses
              - sanbi-strelitzia29
            locator: Printed pp. 357–358; SANBI archive Morphology row 80676 and Habitat row 80390; Strelitzia 29 p. 212 species account.
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
            sourceIds:
              - linder2010
            locator: Linder et al. 2010, pp. 322–324, discussion and included species; DOI 10.3417/2009006.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/textZh
            sourceIds:
              - sanbi-grasses
              - sanbi-strelitzia29
            locator: Printed pp. 357–358; SANBI archive Morphology row 80676 and Habitat row 80390; Strelitzia 29 p. 212 species account.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
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
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Geochloa lupulina

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 3FP46, scientific name, authorship, rank and source dataset 2232; pinned WFO 2026-06 crosswalk records exact accepted-name-and-authorship mapping to wfo-0000920790.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Geochloa lupulina (L.f.) N.P.Barker & H.P.Linder as represented by COL26.8 usage 3FP46. SANBI claims remain attributed to the named regional flora concepts and are not asserted as globally universal.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Biological observations concern regional wild populations described in the cited flora treatments; no exhaustive population survey is implied.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
COL26.8 accepted usage and pinned WFO plant crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Exact accepted-name identity for Geochloa lupulina (L.f.) N.P.Barker & H.P.Linder; the mapping does not by itself prove full species-concept equivalence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Southern African grass treatment; geographic statements remain regional and are not a complete global range survey.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Core Cape regional flora account; its range and habitat summaries are not treated as global or exhaustive.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
The study’s sampled Danthonioideae phylogeny and comparative morphology; claims do not imply divergence dates, genome-wide sampling, or conclusions beyond the study.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The regional grass treatment describes a tufted perennial about 400 mm tall, with a bulbous culm base in densely woolly old sheaths and a compact inflorescence. The species account distinguishes it by usually 1(–3)-nerved glumes, 6–8 mm lemmas and a mostly straight 4–8 mm central awn.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
区域禾草志记载该种为高约 400 mm 的丛生多年生草本，秆基膨大并被旧而密绵毛状的叶鞘包围，花序紧密。物种账户以颖片通常具 1（–3）脉、外稃长 6–8 mm，以及多为直的 4–8 mm 中央芒等特征区分该种。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Species account in a 2015 southern African grass treatment; measurements and diagnostic wording retain that account’s scope.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild flora description; cultivation is not covered.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Variation among populations and stages, full diagnostic comparison, and the range of applicable measurements have not been comprehensively reviewed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The flora account reports flowering October to January, and reports that flowering typically occurs in the first year after fire. Linder et al. describe Geochloa species as geophytes with swollen rhizomes; this supports only the cited growth-form and fire-timing observations, not a complete annual life cycle or reproductive system.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
植物志账户记载花期为10 月至次年 1 月，并称其通常在火后第一年开花。Linder 等将 Geochloa 物种描述为具膨大根茎的地生植物；这些材料仅支持所引生长型与火后开花观察，不构成完整年度生活史或繁殖系统说明。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Regional southern African observations in publications from 2010 and 2015; site-level fire interval and population frequency are not generalized.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild flora observations; cultivated phenology is not covered.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Seed germination, dormancy, pollination, mating system, recruitment and a complete seasonal cycle remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The regional sources place it on sandstone slopes in the southwestern Cape and report flowering after fire; the 2015 account says flowering typically occurs in the first year after fire.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
区域来源记载其生于 southwestern Cape 的砂岩坡地并在火后开花；2015 年账户称其通常在火后第一年开花。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habitat statements are limited to the cited southwestern/southern Cape flora treatments; no global niche or complete interaction network is implied.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild habitats only; cultivated ecology is not covered.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Species interactions, population-level responses, non-fire disturbance, and ecological variation beyond these regional accounts have not been reviewed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Linder et al. erected Geochloa for three species formerly placed in Danthonia and Merxmuellera, using their Danthonioideae molecular phylogeny together with comparative morphology. The paper describes the genus as a geophytic clade and discusses its swollen, starch-storing rhizomes and woolly sheaths; no divergence date or species-level genomic result is inferred here.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
Linder 等依据 Danthonioideae 分子系统发育与比较形态，将此前置于 Danthonia 和 Merxmuellera 的三个物种归入 Geochloa。论文将该属描述为地生植物支系，并讨论其膨大、储存淀粉的根茎及绵毛状叶鞘；此处不推断分歧年代或种级基因组结果。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The claim concerns the 2010 sampled Danthonioideae phylogeny and comparative analysis, not a current genome-wide species tree.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild taxa as treated in the study; no cultivated or fossil lineage claim is made.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Sampling details and support for this species’ exact position, later phylogenetic revisions, reticulation, and any divergence-time evidence have not been comprehensively assessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The 2015 treatment labels the taxon endemic to the Western Cape; the 2012 Core Cape flora summarizes its regional range as Tulbagh to Bredasdorp.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
2015 年植物志将其标为 Western Cape 特有；2012 年 Core Cape 植物志将其区域范围概括为 Tulbagh 至 Bredasdorp。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Regional distribution statements from 2012 and 2015; no global occurrence completeness, introduced range, or dated range change is inferred.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild regional distribution; cultivated and introduced occurrences are not assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A dated, specimen-backed review across the entire native and any introduced range has not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only regional, source-bounded evidence partially supports morphology, life history, ecology, evolution and distribution; fossil and conservation evidence have not been assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence search or external expert review has been completed.
<!-- /evo:text -->
