---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Radinosiphon lomatensis (N.E.Br.) N.E.Br.
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
            locator: Morphology row 98856; diagnostic row 95109; habitat row 96459
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
        - referenceId: ref-44aa7e3e-c728-8ca2-a47d-342be6b49542
          metadataVariant: 0
          sourceKey: redlist2009
          usage:
            locator: Radinosiphon genus entries, printed p. 648; both entries listed as LC
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, morphology row 98856
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
            locator: SANBI e-Flora source 18638.0, diagnostic row 95109
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
            locator: SANBI e-Flora source 18638.0, diagnostic row 95109
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
            locator: SANBI e-Flora source 18638.0, habitat row 96459
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
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/locator
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
              - redlist2009
            locator: Strelitzia 25 (2009), printed p. 648, Radinosiphon lomatensis entry
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

# Radinosiphon lomatensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 4R97P, name, authorship, rank, and source dataset 2232; exact accepted-name-and-authorship WFO 2026-06 crosswalk to wfo-0000784464.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Radinosiphon lomatensis (N.E.Br.) N.E.Br. as represented by COL26.8 usage 4R97P; PZA and flora claims retain their southern African/South African geographic boundaries.
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

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Historical South African national listing only; not a current reassessment or global status.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The SANBI e-Flora morphology field describes Radinosiphon lomatensis (N.E.Br.) N.E.Br.: plants 300–750 mm high, with naked basal stolons, 6–9 mostly basal leaves, and an inclined 2–10-flowered spike; the pale to deep pink flowers have dark-pink median streaks and a (25–)30–45 mm perianth tube.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
SANBI e-Flora 形态字段记载 Radinosiphon lomatensis (N.E.Br.) N.E.Br.：株高 300–750 mm，具裸露的基部匍匐枝；叶 6–9 枚，多基生；倾斜花穗有 2–10 朵浅至深粉色花，具深粉色中线条纹，花被管长 (25–)30–45 mm。
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
The diagnostic field records: Distinguished from Radinosiphon leptostachya by its larger flowers, with longer perianth tube, (25-)30-45 mm long, broader tepals, the uppermost 12-15 x 3-7 mm, slightly longer filaments 6-7 mm long, and anthers 5-6 mm long. Plants of R. lomatensis reproduce vegetatively by slender, naked stolons quite different from the thick, scaly rhizomes developed in R. leptostachya. The species is evidently outcrossing, producing larger capsules with up to 8 seeds per locule, unlike autogamous R. leptostachya, which produces small capsules, 4-6 mm long, containing just 1 or 2 seeds (rarely up to 5 in tropical Africa) per locule.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
档案诊断字段记载：Distinguished from Radinosiphon leptostachya by its larger flowers, with longer perianth tube, (25-)30-45 mm long, broader tepals, the uppermost 12-15 x 3-7 mm, slightly longer filaments 6-7 mm long, and anthers 5-6 mm long. Plants of R. lomatensis reproduce vegetatively by slender, naked stolons quite different from the thick, scaly rhizomes developed in R. leptostachya. The species is evidently outcrossing, producing larger capsules with up to 8 seeds per locule, unlike autogamous R. leptostachya, which produces small capsules, 4-6 mm long, containing just 1 or 2 seeds (rarely up to 5 in tropical Africa) per locule.
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
The archived flora describes it as evidently outcrossing, producing larger capsules with up to eight seeds per locule, and reproducing vegetatively by slender, naked stolons. No seasonal flowering interval or full life-cycle account was located in the cited species sources.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
档案植物志称其显然为异花授粉，产生较大的蒴果，每室最多 8 粒种子，并以细长、裸露的匍匐枝进行营养繁殖。引用的种级来源未提供花期区间或完整生活史账户。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
SANBI 2020 southern African flora; breeding claims are qualified in the source and no season is inferred.
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
Quartzite outcrops in montane grassland.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
SANBI e-Flora 生境字段记载：山地草原中的石英岩露头。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
SANBI e-Flora source 18638.0, southern African species-description fields; no global or current-population inference.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild regional-flora evidence; cultivation is not covered by the cited claim.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Regional evidence is partial; a scope-complete review of ecology has not been completed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
A SANBI PlantZAfrica species article on R. leptostachya describes R. lomatensis as believed endemic to Ehlanzeni District, Mpumalanga, and says both Radinosiphon species in South Africa have been recorded only in Mpumalanga. This is a qualified, regional source statement, not an exhaustive current global occurrence review.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
SANBI 一篇关于 R. leptostachya 的 PlantZAfrica 种级文章称，R. lomatensis 被认为是 Mpumalanga 的 Ehlanzeni District 特有种，并称南非的两种 Radinosiphon 仅在 Mpumalanga 有记录。这是带有不确定性的区域来源陈述，不是当前全球分布的穷尽清单。
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
PlantZAfrica, historical notes, comparative statement about R. lomatensis; Ehlanzeni endemicity is explicitly qualified as believed
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
SANBI’s 2009 Red List volume lists Radinosiphon lomatensis as Least Concern (LC). This is a historical national listing, not a current assessment or global status.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 2009 年红色名录卷册将 Radinosiphon lomatensis 列为无危（LC）。这是历史性的国家名录记录，不代表当前评估或全球等级。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Historical South African national list published 2009; not current or global.
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
