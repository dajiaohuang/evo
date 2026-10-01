---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Micranthus alopecuroides (L.) Eckl.
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
      wild: Claims concern wild populations described by the regional flora.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/42QHS
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted taxon usage 42QHS
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
            url: https://list.worldfloraonline.org/wfo-0000785225-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Exact accepted COL 42QHS / WFO wfo-0000785225 crosswalk row
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
        - referenceId: ref-a2c82bbf-bb8f-8117-a1e3-5aefbf03dc12
          metadataVariant: 1
          sourceKey: sanbi2020
          usage:
            locator: Micranthus account, printed p. 152; flowering-time and distribution/ecology entries
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
        - referenceId: ref-240f872a-55ec-83ef-ae4f-5731c9346cae
          metadataVariant: 0
          sourceKey: sanbi-archive
          usage:
            locator: Source 18638.0; morphology row 98025; habitat row 96936
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, morphology row 98025
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
              - sanbi2020
            locator: Strelitzia 42 (2020), printed p. 152, flowering-time entry
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
            locator: SANBI e-Flora source 18638.0, habitat row 96936
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
              - sanbi2020
            locator: Strelitzia 42 (2020), printed p. 152, distribution paragraph
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

# Micranthus alopecuroides

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 42QHS, name, authorship, rank, and source dataset 2232 checked against the pinned taxon; WFO 2026-06 crosswalk maps it to wfo-0000785225 by exact accepted name and authorship.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Micranthus alopecuroides (L.) Eckl. as represented by COL26.8 usage 42QHS; regional flora evidence remains limited to its southern African source scope.
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
Southern African regional flora account; not a current global range or conservation assessment.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
South African flora description fields; morphology and habitat evidence only, not a global account.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The archived species description records Micranthus alopecuroides (L.) Eckl.: plants mostly 200–450 mm tall, with 2–5 plane or falcate lower leaves and usually dark-blue flowers.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
SANBI 档案对 Micranthus alopecuroides (L.) Eckl. 的形态记载为：株高多为 200–450 mm，下部叶 2–5 枚、扁平或镰形，花通常深蓝。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Source 18638.0 in the SANBI e-Flora archive; South African source-description scope, with no global or current-population inference.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild regional flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Regional source evidence is partial; a systematic scope-complete review of morphology has not been completed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The 2020 flora reports flowering October in the north; November–December farther south; it does not provide a full life-history study.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
2020 年植物志记载花期为 October in the north; November–December farther south；该条目不构成完整生活史研究。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Species account in a 2020 southern African flora, printed p. 152; temporal and geographic scope are limited to that account, not a current global synthesis.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild regional flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Regional source evidence is partial; a systematic scope-complete review of lifeHistory has not been completed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The archived habitat field reports: Well-drained clay or loamy seasonally wet slopes and flats; also recorded on sand, thin clay or sandy gravel, and rocky pavement.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
档案中的生境字段记载：Well-drained clay or loamy seasonally wet slopes and flats; also recorded on sand, thin clay or sandy gravel, and rocky pavement.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Source 18638.0 in the SANBI e-Flora archive; South African source-description scope, with no global or current-population inference.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild regional flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Regional source evidence is partial; a systematic scope-complete review of ecology has not been completed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The 2020 flora reports the regional range as: From the southwestern Cape and Olifants River Valley south and east toward Hermanus and Swellendam. This is not a current global range inventory.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
2020 年植物志记载的区域分布为：From the southwestern Cape and Olifants River Valley south and east toward Hermanus and Swellendam. 这不是当前全球分布清单。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Species account in a 2020 southern African flora, printed p. 152; temporal and geographic scope are limited to that account, not a current global synthesis.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild regional flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Regional source evidence is partial; a systematic scope-complete review of distribution has not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Four facets have limited regional evidence; evolution and fossil occurrence remain unassessed, and conservation is not assessed except where a bounded national source is cited.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence search, fossil review, or external expert review has been completed.
<!-- /evo:text -->
