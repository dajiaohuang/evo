---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Cyathocoma bachmannii (Kük.) C.Archer
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
      wild: Claims concern wild populations or wild herbarium vouchers within each source's stated regional scope.
      domesticated: Cultivation is not covered by the cited claims; no domestication claim is made.
      fossil: No fossil claim is made; fossil occurrence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 20
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/32QTH
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted taxon usage 32QTH
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
            url: https://list.worldfloraonline.org/wfo-0000367203-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Exact accepted COL 32QTH / WFO wfo-0000367203 crosswalk row
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
        - referenceId: ref-19cf245f-e6aa-8c84-ace3-37ad317720b0
          metadataVariant: 0
          sourceKey: sanbi-archive
          usage:
            locator: "Exact COL/WFO-linked rows: morphology: 83889; habitat: 83680; morphology2019: 90467; habitat2019: 92030"
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
        - referenceId: ref-15314bce-0db1-88c4-a800-87972212f7d5
          metadataVariant: 0
          sourceKey: strelitzia29
          usage:
            locator: Cyathocoma account, printed p. 86; species morphology, flowering period, habitat and range
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
        - referenceId: ref-1173c35d-79c1-8e92-a967-7c26a73b5d4c
          metadataVariant: 0
          sourceKey: strelitzia41
          usage:
            locator: Cyperaceae account; linked species morphology and habitat rows retained from e-Flora source 18492.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-6b2b2ad8-d261-82fa-a263-1aed7744da0e
          metadataVariant: 0
          sourceKey: sanbi-redlist
          usage:
            locator: National status, criteria, justification, distribution, habitat and population trend
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/scope
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
              - strelitzia29
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
              - strelitzia29
              - strelitzia41
            locator: Strelitzia 29 (2012), printed p. 86; where noted, Strelitzia 41(3) (2019) Eastern Cape account
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
            locator: SANBI e-Flora habitat rows 83680 and 92030
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
              - strelitzia29
              - sanbi-redlist
            locator: Strelitzia 29 (2012), printed p. 86; where specified, SANBI Red List distribution fields
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
            locator: SANBI Red List, national status and criteria; assessment date 2013-07-23; justification
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

# Cyathocoma bachmannii

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 32QTH, scientific name, authorship, rank and source dataset 2232 checked against the pinned COL node; WFO 2026-06 crosswalk maps it to wfo-0000367203 by exact accepted name and authorship.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Cyathocoma bachmannii (Kük.) C.Archer as represented by COL26.8 usage 32QTH; biological claims retain their cited regional and sampling limits.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, and source-dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List, version 2026-06, exact COL crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Identity-link evidence only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
South African flora description fields only; not a global account.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Regional Greater Cape flora account; not a current global range or conservation assessment.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Eastern Cape regional flora evidence only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/scope -->
South African national conservation assessment, not a global status.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The regional flora describes a slenderly tufted perennial sedge 0.3–0.5 m tall, with inrolled leaves, a narrow panicle and brown spikelets. Its detailed species description also records the achene, style base and six bristle-like perianth segments.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
区域植物志对该接受种的形态记载：The regional flora describes a slenderly tufted perennial sedge 0.3–0.5 m tall, with inrolled leaves, a narrow panicle and brown spikelets. Its detailed species description also records the achene, style base and six bristle-like perianth segments.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Strelitzia 29 (2012), printed p. 86; SANBI e-Flora rows morphology: 83889; habitat: 83680; morphology2019: 90467; habitat2019: 92030
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Southern African regional flora evidence; descriptive scope is limited to the cited species account and archive fields.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild flora description; cultivated material is not covered.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Regional descriptions are partial; no scope-complete review of morphology has been completed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The 2019 Eastern Cape flora lists flowering in March, July and August; this is a regional flora observation and does not establish a complete range-wide flowering season.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
区域植物志记录：The 2019 Eastern Cape flora lists flowering in March, July and August; this is a regional flora observation and does not establish a complete range-wide flowering season.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Published regional flora observation; not a complete current or global life-history study.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild flora evidence; cultivation is not covered.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Flowering time alone does not establish a full life cycle, reproductive biology or scope-complete life-history account.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The 1997 species account describes wet to damp heavy black soils beside streamlets or small isolated vleis in freshwater drainage systems. The 2019 Eastern Cape flora separately records marshy grassland in the Indian Ocean Coastal Belt.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
区域植物志的生境记录：The 1997 species account describes wet to damp heavy black soils beside streamlets or small isolated vleis in freshwater drainage systems. The 2019 Eastern Cape flora separately records marshy grassland in the Indian Ocean Coastal Belt.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional South African habitat descriptions; not a global ecological niche assessment.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild habitat evidence; cultivation is not covered.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Regional habitat statements are partial; ecological interactions and a scope-complete ecology review remain unassessed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
SANBI's national assessment reports this South African endemic from Eastern Cape and KwaZulu-Natal, ranging from Maputaland to Port St Johns. This is the scope of that regional assessment, not a global occurrence inventory.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
区域分布记录：SANBI's national assessment reports this South African endemic from Eastern Cape and KwaZulu-Natal, ranging from Maputaland to Port St Johns. This is the scope of that regional assessment, not a global occurrence inventory.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Regional flora or national assessment scope as stated by the source; not a current global occurrence inventory.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild native-range evidence; cultivation and introduced populations are not covered.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Regional distribution evidence is partial; a current, scope-complete global range review has not been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
SANBI's national assessment assigns Vulnerable B2ab(iii,v), assessed 2013-07-23. Its assessment reports an estimated AOO below 200 km², five known locations (suspected up to ten), and ongoing decline from habitat loss and degradation. This is a South African national assessment, not a global status.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 国家评估将该种列为易危（VU B2ab(iii,v)）；评估日期为 2013-07-23。其说明记录 AOO 估计低于 200 km²、已知 5 个地点（推测最多 10 个），并指出栖地丧失与退化造成持续下降。该结论限于南非国家评估，不代表全球等级。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
South African national assessment dated 2013; the estimate and trend are assessment-era values, not current census results.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild South African populations; domesticated or cultivated plants are outside the assessment.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The cited assessment is regional and dated; no current global conservation assessment has been established in this dossier.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Regional evidence is partial; one or more of evolution, fossil occurrence or conservation remain unassessed, and no global scope-complete synthesis has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence review, fossil review, or external expert review has been completed.
<!-- /evo:text -->
