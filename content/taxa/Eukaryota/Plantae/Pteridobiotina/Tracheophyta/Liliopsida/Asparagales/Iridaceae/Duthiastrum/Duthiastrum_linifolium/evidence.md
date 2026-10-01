---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Duthiastrum linifolium (E.Phillips) M.P.de Vos
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
      domesticated: The cited SANBI treatment does not provide a cultivation or domestication account; no such conclusion is made.
      fossil: No fossil occurrence claim is made; fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-b7a0da64-36cd-8130-ab0c-cf9d69929170
          metadataVariant: 0
          sourceKey: col-wfo-crosswalk
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://list.worldfloraonline.org/wfo-0000789360-2026-06
            version: COL26.8 released 2026-08-20; WFO 2026-06 snapshot; local crosswalk record 384SV
            locator: COL ID 384SV; exact accepted-name-and-authorship mapping to WFO wfo-0000789360
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
        - referenceId: ref-28cef281-7492-84ea-aefa-f157d588d4a2
          metadataVariant: 0
          sourceKey: sanbi-flora
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
        - referenceId: ref-64beffe8-dc44-80ae-aba7-b1fb7da64cf1
          metadataVariant: 0
          sourceKey: sanbi-redlist
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
        - referenceId: ref-ac802712-96e8-85e3-a293-b8de344f32d9
          metadataVariant: 0
          sourceKey: barker2005
          usage:
            locator: Iridaceae section, printed p. 457; species statement cites J. Manning personal communication
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
              - sanbi-flora
              - barker2005
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
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
              - sanbi-flora
              - barker2005
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
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
              - sanbi-flora
            locator: SANBI Biodiversity Advisor, Habitat and Altitude sections; source attribution to Goldblatt & Manning 2020, Strelitzia 42
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
              - sanbi-flora
            locator: SANBI Biodiversity Advisor, Distribution section; Devon record explicitly described as unconfirmed in the source
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
              - sanbi-redlist
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/locator
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

# Duthiastrum linifolium

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 384SV, name, authorship, rank and source dataset 2232; the pinned WFO plant crosswalk records exact accepted-name-and-authorship mapping to wfo-0000789360 (2026-06 snapshot).
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Duthiastrum linifolium (E.Phillips) M.P.de Vos as represented by COL26.8 usage 384SV. SANBI flora-derived claims remain limited to the regional account and its attributed southern African treatment.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Biological claims derive from a regional flora treatment of wild populations; occurrence records are not treated as a complete range survey.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
COL26.8 accepted usage and pinned WFO plant crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity and crosswalk only; it does not establish species-concept equivalence or biological coverage.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Morphological description, habitat, distribution, flowering time, altitude and SANBI status sections; claims retain the underlying flora citation displayed by SANBI.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Regional southern African flora account for the named taxon; not a global synthesis, full occurrence review or population assessment.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Assessment date and justification; assessment history entry under Duthiastrum linifolium; taxon heading uses the variant spelling Duthieastrum linifolium
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
South African national assessment record only. The page says Least Concern was assigned automatically after screening and was not a detailed assessment; not a current reassessment or global status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Literature review and expert communication concerning reproductive morphology of African and Madagascan taxa; this Duthiastrum observation is reported secondarily and does not establish population frequency or a complete life cycle.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The SANBI flora-derived entry describes plants 60–150 mm high, with a 10–15 mm corm, mostly basal linear to narrowly lanceolate leaves, and one- or two-flowered spikes. Flowers are bright yellow, rarely dull orange with a yellow centre; capsules are ellipsoid and stalked, 20–25 mm long. Barker's 2005 review additionally reports, from John Manning's personal communication, that the flowers have subterranean bases.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
SANBI 植物志条目记载植株高 60–150 mm，球茎直径 10–15 mm，叶多基生、线形至狭披针形，花穗具 1–2 朵花。花鲜黄色，少数为暗橙色且中心黄色；蒴果椭圆形、有柄，长 20–25 mm。Barker 2005 年综述另转述 John Manning 的个人通讯，指出该种花的基部位于地下。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI Biodiversity Advisor, Morphological description; Barker 2005, Iridaceae section, printed p. 457 (subterranean floral bases attributed to J. Manning personal communication)
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional taxon description in the 2020 southern African flora; subterranean floral-base observation is reported in 2005 without stated population or sampling scope.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild flora description; cultivated variation is not covered.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The regional account is not a scope-complete review of intraspecific variation, developmental stages or diagnostic comparisons.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The SANBI flora-derived account reports flowers opening around midday and closing at dusk, and a flowering period of March to May. Barker's 2005 review reports that the flower bases are subterranean and, citing John Manning's personal communication, that the ovary and fruit remain buried. The sources do not provide a full annual life cycle or reproductive-system account.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
SANBI 植物志条目记载花约在正午开放、黄昏闭合，花期为 3–5 月。Barker 2005 年综述称花基部位于地下，并转述 John Manning 的个人通讯称子房和果实保持埋于地下。来源未提供完整年度生活史或繁殖系统账户。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
SANBI Biodiversity Advisor, Morphological description (daily flower opening/closing) and Flowering time; Barker 2005, Iridaceae section, printed p. 457 (subterranean ovary and fruit attributed to J. Manning personal communication)
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Flower timing from the 2020 regional flora; subterranean fruiting observation reported in 2005 without geographic sampling, frequency or seasonal duration details.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild regional-flora observation; cultivation timing is not covered.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Seed germination, full seasonal cycle, pollination, mating system and population-level reproductive variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The regional flora account places the species in alluvial washes, mainly in lime-rich silt or on chalky flats; it also reports a regional altitude range of 0–1370 m.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
区域植物志记载其生境为冲积水道，主要见于富石灰的粉砂或白垩质平地；该条目报告的区域海拔范围为 0–1370 m。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habitat and elevation statements from the 2020 southern African flora account; they are not inferred to cover every population or season.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild habitat description; no cultivated ecology is inferred.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Interactions, soils beyond the reported substrate description, disturbance response and ecological variation have not been comprehensively reviewed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The SANBI flora account describes a scattered range in central South Africa within the Vaal–Orange drainage basin, from Kimberley in Northern Cape to Mmbatho in North West and eastward to Kroonstad in Free State. It mentions a recent but unconfirmed sight record near Devon, Gauteng; this regional account is not an exhaustive global range assessment.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
SANBI 植物志将其描述为零散分布于南非中部瓦尔河—奥兰治河流域，范围从 Northern Cape 的 Kimberley 至 North West 的 Mmbatho，并向东至 Free State 的 Kroonstad。条目另提及 Gauteng 的 Devon 附近一条近期但未确认的目击记录；该区域记录不是穷尽的全球分布评估。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Regional range statement from the 2020 flora account; no date-resolved occurrence completeness or extra-regional range is inferred.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild distribution account; horticultural or introduced occurrences are not assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A dated, specimen-backed range review across the full native and any introduced range has not been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
SANBI's South African Red List page records a 2005-06-30 national assessment as Least Concern. The page states that this was an automated status assigned after the taxon was not selected for detailed assessment; its assessment history lists Duthiastrum linifolium, although the current page heading uses the spelling Duthieastrum. This is historical national evidence, not a current detailed or global assessment.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 南非红色名录页面记录该物种于 2005-06-30 的国家评估状态为无危（LC）。页面说明该等级是在该分类单元未被筛选进入详细评估后自动赋予；评估历史将其列作 Duthiastrum linifolium，但当前页面标题拼作 Duthieastrum。本记录是历史国家层级证据，不是当前详细评估或全球评估。
<!-- /evo:text -->

## conservation / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/locator -->
SANBI Red List assessment page, assessment date, automated-status justification and assessment history spelling Duthiastrum linifolium
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
South African national scope; assessment date 2005-06-30, surfaced on Red List version 2024.1; not a global range assessment.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Assessment concerns the wild national taxon; domesticated or cultivated populations are not assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The cited LC entry was assigned automatically rather than through detailed assessment; current population evidence and global conservation status remain unreviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Evolution, fossil occurrence and conservation have not been assessed; the regional flora-derived material only partially supports morphology, life history, ecology and distribution.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence review or external expert review has been completed.
<!-- /evo:text -->
