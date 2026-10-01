---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Phoebastria immutabilis (Rothschild, 1893)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 莱桑信天翁
      en: Laysan Albatross
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-c160835c-7035-8ca6-ad59-667bdf1a4f10
          metadataVariant: 0
          sourceKey: usgs2009
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/4GK9K
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Phoebastria immutabilis (Rothschild, 1893)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col26
        - usgs2009
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Not assessed; no domesticated or captive population evidence is used.
      fossil: Not assessed; this extant-population report is not a fossil search.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 14
          sourceKey: col26
          usage:
            licenseAppliesTo: Identity record only; no biological text reused
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4GK9K
            stableId: COL26.8:4GK9K
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted taxon usage 4GK9K; rank species; source dataset 2144
            attribution: Catalogue of Life COL26.8, ChecklistBank dataset 316115, source dataset 2144
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
        - referenceId: ref-0ef8ff82-f4e4-85be-a522-8fb13d0e613f
          metadataVariant: 0
          sourceKey: usgs2009
          usage:
            licenseAppliesTo: The USGS report text cited here; no figures, photographs, or separately copyrighted third-party material are reproduced
            stableId: doi:10.3133/sir20095131; USGS SIR 2009-5131
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - usgs2009
            locator: Species’ Descriptions, Laysan albatross entry (report text gives Harrison 1985 as the measurement source)
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
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - usgs2009
            locator: Executive Summary, first paragraph
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
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - usgs2009
            locator: Executive Summary, first and second paragraphs; Geographic Distribution, Breeding Colonies
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
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - usgs2009
            locator: Executive Summary, first paragraph; Geographic Distribution, Breeding Colonies
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
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
---

# Phoebastria immutabilis

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
美国地质调查局 2009 年北太平洋报告，统计与状态分析截至 2005 年；报告为公有领域，第三方材料除外。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
U.S. Geological Survey 2009 North Pacific report; population and status analyses extend through 2005. The report is public domain except for third-party material.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank, and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
COL26.8 accepted taxon usage 4GK9K, accepted species name Phoebastria immutabilis (Rothschild, 1893), rank species, and source dataset 2144; identity claim is limited to this pinned checklist usage.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The COL26.8 accepted nominal species concept. The USGS report names Phoebastria immutabilis explicitly and treats the Laysan albatross; that matching name is used as source identity, without claiming that a 2009 report resolves all later taxonomic circumscription questions.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The biological source concerns free-ranging albatross populations and breeding colonies in the North Pacific during historical periods through 2005.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8, ChecklistBank dataset 316115; underlying source dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, COL ID and source dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Executive Summary paragraphs 1–3; Species’ Descriptions, Laysan albatross entry; Geographic Distribution, Breeding Colonies; Population Status and Trends, Laysan albatross subsection
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Arata, J.A., Sievert, P.R., and Naughton, M.B. 2009. USGS Scientific Investigations Report 2009-5131. https://doi.org/10.3133/sir20095131
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Report-level rights statement states the report is public domain while requiring permission for individually copyrighted material contained in it; this dossier paraphrases report text only.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The report describes the Laysan albatross as a medium-sized species weighing about 3.2 kg, with reported lengths of 79–81 cm and wingspans of 195–203 cm; it notes males average about 10% heavier than females. It describes a dark sooty-brown upper surface, white head and underparts, pinkish-orange bill with a grey tip, and individual variation in the black-and-white underwing pattern.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Description compiled in a 2009 North Pacific status assessment; measurement and sex-comparison sampling details are not supplied in this entry, and the report cites Harrison 1985.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Species-level account of wild birds; age-specific pattern differences are summarized but not comprehensively sampled here.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Measurement protocol and sample sizes, full sex and age variation, population variation, and diagnostic limits have not been assessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The report characterizes both assessed albatross species as long-lived seabirds with deferred maturity, low fecundity, and high adult survival, and says these traits make populations sensitive to small increases in adult mortality.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
General life-history characterization in a 2009 regional assessment of North Pacific populations; no quantified species-specific age or reproductive schedule is stated in this passage.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild population context; captive life history not covered.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Age at first breeding, annual cycle, pair behavior, egg and chick development, breeding success variation, and species-specific rates need source-level review.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The report describes Laysan albatrosses as open-ocean birds that come to land to breed, and identifies bycatch in commercial fisheries as a major anthropogenic source of post-fledging mortality in the assessment period.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
North Pacific population evidence synthesized in 2009, with status analyses ending in 2005; threat descriptions are historical to the source's review period and are not asserted as current rates.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild birds and breeding populations; the source distinguishes at-sea and colony threats.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Diet, foraging behavior, prey and competitor interactions, habitat requirements by life stage, and study-specific sampling conditions have not been reviewed comprehensively.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No species-level phylogenetic or comparative evolutionary study was assessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The report states that more than 99% of the world's Laysan albatrosses nested in the Northwestern Hawaiian Islands in its assessment and lists the core breeding sites there; it also describes the species as foraging throughout the North Pacific and nesting on oceanic islands from Mexico to Japan.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
A 2009 synthesis with island occurrence and population evidence through 2005; the stated proportion and range are source-era summaries, not a present-day global atlas.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild breeding and foraging range; introduced or captive occurrences are not addressed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Dated locality records, current range, nonbreeding distribution, geographic precision, native or introduced status outside breeding sites, and unsampled areas need review.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No bounded fossil-record search was conducted.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
Historical legal or threat discussion in the report does not establish a current conservation assessment; no current qualifying assessment was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The evidence is a 2009 North Pacific assessment with population analyses through 2005 and only preliminary coverage of four facets.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Evolution, fossils, and current conservation status remain unassessed; morphology, life history, ecology, and distribution lack required breadth.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Claims have no verified Chinese translations, no systematic literature search is recorded, and no independent external review has occurred.
<!-- /evo:text -->
