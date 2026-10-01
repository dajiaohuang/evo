---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Radinosiphon leptostachya (Baker) N.E.Br.
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
      wild: Claims concern wild populations described by the regional flora and SANBI account.
      domesticated: The cited accounts do not provide scope-complete cultivation evidence; no domestication conclusion is made.
      fossil: No fossil occurrence claim is made; fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-240f872a-55ec-83ef-ae4f-5731c9346cae
          metadataVariant: 2
          sourceKey: sanbi-archive
          usage:
            locator: Morphology row 98857; diagnostic row 95110; habitat row 96460
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
        - referenceId: ref-bb9229e3-58be-8651-ac2a-c982100d1492
          metadataVariant: 0
          sourceKey: pza
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, morphology row 98857
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, diagnostic row 95110
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            sourceIds:
              - sanbi-archive
              - pza
            locator: SANBI e-Flora source 18638.0, diagnostic row 95110; PlantZAfrica ecology and species account, accessed 2026-09-23
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, habitat row 96460
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/textZh
            sourceIds:
              - pza
            locator: PlantZAfrica, Ecology; pollinator statement
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: not-assessed
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
              - pza
            locator: PlantZAfrica, Distribution and habitat; species range and South African range are distinguished
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/textZh
            sourceIds:
              - pza
            locator: PlantZAfrica, Conservation Status; no assessment date is provided on that page
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
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

# Radinosiphon leptostachya

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 4R97N, name, authorship, rank, and source dataset 2232; exact accepted-name-and-authorship WFO 2026-06 crosswalk to wfo-0000784462.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Radinosiphon leptostachya (Baker) N.E.Br. as represented by COL26.8 usage 4R97N; PZA and flora claims retain their southern African/South African geographic boundaries.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Southern African flora morphology, diagnostic, reproductive, and habitat description fields only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Species description, conservation status, distribution and habitat, ecology, and historical notes; comparative statements about R. lomatensis are explicitly attributed to this article
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
SANBI regional species account; assertions about R. lomatensis retain the page’s explicit uncertainty and southern African scope.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The SANBI e-Flora morphology field describes Radinosiphon leptostachya (Baker) N.E.Br.: plants (80–)150–500(–750) mm high, with scaly rhizomes and sometimes cormlets, 6–9 mostly basal leaves, and an inclined 2–12-flowered spike with pale to deep pink flowers marked by dark-pink streaks.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
SANBI e-Flora 形态字段记载 Radinosiphon leptostachya (Baker) N.E.Br.：株高 (80–)150–500(–750) mm，具鳞片状根茎、有时生小球茎；叶 6–9 枚，多基生；倾斜花穗有 2–12 朵浅至深粉色花，带深粉色条纹。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
SANBI e-Flora source 18638.0, southern African species-description fields; no global or current-population inference.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
The diagnostic field records: As far as we can determine this is an autogamous species which is prone to the development of local forms varying in flower size, especially perianth tube length and tepal dimensions, several of which were described as distinct species. Among the southern African material we are able distinguish two more-or-less distinct entities, smaller flowered plants corresponding to Radinosiphon leptostachya and larger-flowered, outbreeding plants which we treat as R. lomatensis. Typically, R. leptostachya has flowers with the perianth tube 15-30 mm long, and narrow, almost linear lower tepals 8-12 x 1-2 mm, with the upper tepals at most 3 mm wide. The small capsules, 4-6 mm long, contain just one or two seeds per locule (up to five in tropical African material). The species appears to have a very distinctive means of vegetative reproduction through the development of thick, scaly rhizomes. These do not always elongate, resulting in the formation of clusters of corms.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
档案诊断字段记载：As far as we can determine this is an autogamous species which is prone to the development of local forms varying in flower size, especially perianth tube length and tepal dimensions, several of which were described as distinct species. Among the southern African material we are able distinguish two more-or-less distinct entities, smaller flowered plants corresponding to Radinosiphon leptostachya and larger-flowered, outbreeding plants which we treat as R. lomatensis. Typically, R. leptostachya has flowers with the perianth tube 15-30 mm long, and narrow, almost linear lower tepals 8-12 x 1-2 mm, with the upper tepals at most 3 mm wide. The small capsules, 4-6 mm long, contain just one or two seeds per locule (up to five in tropical African material). The species appears to have a very distinctive means of vegetative reproduction through the development of thick, scaly rhizomes. These do not always elongate, resulting in the formation of clusters of corms.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
SANBI e-Flora source 18638.0, southern African species-description fields; no global or current-population inference.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Regional evidence is partial; a scope-complete review of morphology has not been completed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
SANBI describes it as a cormous deciduous perennial whose aerial parts die back in winter and resprout annually; leaves grow again in spring (September–October), and flowering is reported for December–February. The archived flora characterizes it as apparently autogamous and records thick, scaly rhizomes and clustered corms as vegetative structures.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
SANBI 记载其为落叶球茎多年生植物，地上部分冬季枯萎、每年重新萌发；叶片于春季（9–10 月）再生，花期记为 12 月至次年 2 月。档案植物志称其似为自花授粉，并记载鳞片状根茎及成簇球茎等营养繁殖结构。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
SANBI regional flora fields and June 2024 species account; reported life-cycle observations and breeding biology retain source wording and regional limits.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Regional evidence is partial; a scope-complete review of lifeHistory has not been completed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Quartzite outcrops and crevices in montane grassland.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
SANBI e-Flora 生境字段记载：山地草原中的石英岩露头和裂隙。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
SANBI e-Flora source 18638.0, southern African species-description fields; no global or current-population inference.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
The SANBI species account reports that flowers are visited by insects and names the long-proboscid fly Prosoeca ganglbaueri as a pollinator.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/textZh -->
SANBI 种级账户记载花朵受多种昆虫访问，并列出长喙蝇 Prosoeca ganglbaueri 为传粉者。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
Species account published June 2024; a regional reported interaction, not a complete pollinator inventory.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Regional evidence is partial; a scope-complete review of ecology has not been completed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The SANBI species account reports a native range in South Africa, Eswatini, Mozambique, Zimbabwe, Malawi, Tanzania, and Zambia; within South Africa it reports the eastern part of Mpumalanga. This is a regional flora account, not an exhaustive current global occurrence review.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
SANBI 种级页面记载其原生分布于南非、Eswatini、Mozambique、Zimbabwe、Malawi、Tanzania 和 Zambia；在南非境内记于 Mpumalanga 东部。这是区域植物志账户，不是当前全球分布的穷尽清单。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
SANBI regional source; accessed 2026-09-23; geographic extent and uncertainty are limited to the cited account.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Regional evidence is partial; a scope-complete review of distribution has not been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The SANBI PlantZAfrica species account reports Least Concern (LC) in the Red List of South African Plants; that account does not state a separate assessment date, and the status is national rather than global.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI PlantZAfrica 种级账户称南非植物红色名录将其列为无危（LC）；该账户未注明单独的评估日期，且此等级为南非国家尺度而非全球评估。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
SANBI account accessed 2026-09-23; national status only, with no separate assessment date stated.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
Regional evidence is partial; a scope-complete review of conservation has not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Evidence is regional; evolution and fossil occurrence remain unassessed, and the cited literature does not provide a scope-complete assessment of all themes.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence review or external expert review has been completed.
<!-- /evo:text -->
