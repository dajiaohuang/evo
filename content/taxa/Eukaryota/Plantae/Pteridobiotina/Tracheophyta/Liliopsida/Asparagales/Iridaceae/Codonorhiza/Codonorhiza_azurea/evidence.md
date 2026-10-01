---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Codonorhiza azurea (Eckl. ex Baker) Goldblatt & J.C.Manning
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
      wild: Claims concern wild populations described by the cited flora or national assessment.
      domesticated: Cultivation is not covered by cited claims; no domestication claim is made.
      fossil: No fossil occurrence claim is made; fossil evidence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 20
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/WPYJ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage WPYJ
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
            url: https://list.worldfloraonline.org/wfo-0001343994-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Exact accepted COL WPYJ / WFO wfo-0001343994 crosswalk row
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
          metadataVariant: 2
          sourceKey: sanbi2020
          usage:
            locator: Codonorhiza species account, printed p. 163–164; relevant flowering-time/distribution entries
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
        - referenceId: ref-17240331-6ad4-8e0c-aac4-8fde5401507e
          metadataVariant: 0
          sourceKey: sanbi-archive
          usage:
            locator: Source 18638.0; morphology row 98035; habitat row 96946
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
        - referenceId: ref-90a8dd65-a5d0-8e0b-ad53-bd75fe485d58
          metadataVariant: 0
          sourceKey: redlist
          usage:
            locator: National status, assessment date, and scope; distribution fields when used
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
            locator: SANBI e-Flora source 18638.0, morphology row 98035
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
              - sanbi-archive
            locator: SANBI e-Flora source 18638.0, habitat row 96946
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
              - redlist
            locator: National range and provincial distribution fields
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
              - redlist
            locator: National category, criteria/assessment date, and scope; automated-status caveat retained where applicable.
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

# Codonorhiza azurea

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage WPYJ, name, authorship, rank, and source dataset 2232; exact accepted-name-and-authorship WFO 2026-06 crosswalk to wfo-0001343994.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Codonorhiza azurea (Eckl. ex Baker) Goldblatt & J.C.Manning as represented by COL26.8 usage WPYJ; SANBI sources retain their southern African/South African regional scope.
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
Identity-link evidence only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional flora treatment of southern African Iridaceae; geographic statements retain their regional and temporal limits.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
South African flora morphology and habitat description fields only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
South African national assessment only; not a global conservation assessment.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The archived description reports plants 70–180 mm tall, with a 5–7-branched stem, two leaves, and large dark-blue to violet, zygomorphic flowers with dark markings.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
SANBI 档案记载：株高 70–180 mm，茎分 5–7 枝，具两枚叶；花大、深蓝至紫色、左右对称，带深色斑纹。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
SANBI e-Flora South Africa description archive, source 18638.0; South African source scope, not a global assessment.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild regional flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Regional evidence is partial; a scope-complete review of morphology has not been completed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Granite-derived gravel soils rather than the shale-derived clay soils also common in the area.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
花岗岩来源的砾质土，而非当地也常见的页岩来源黏土。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
SANBI e-Flora South Africa description archive, source 18638.0; South African source scope, not a global assessment.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild regional flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Regional evidence is partial; a scope-complete review of ecology has not been completed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
SANBI reports a South African endemic in the Western Cape, with a range from Saron to the Cape Peninsula and Stellenbosch. The national assessment is dated 2012-11-27 and does not establish a current global range.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
SANBI 记为南非西开普特有种，分布范围从 Saron 至开普半岛和 Stellenbosch。 该国家评估日期为 2012-11-27，不构成当前全球分布清单。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
SANBI South African national assessment2012-11-27; not a global range inventory.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild regional flora evidence; cultivated status is not assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Regional evidence is partial; a scope-complete review of distribution has not been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The SANBI national assessment lists Endangered (EN), criterion B1ab(i,ii,iii,iv,v), assessed 2012-11-27. This is a dated South African assessment, not a global status.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 南非国家评估列为濒危（EN），标准 B1ab(i,ii,iii,iv,v)，评估日期 2012-11-27。这是有日期的南非评估，不代表全球等级。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
SANBI South African assessment dated 2012-11-27; not a global status.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild South African populations within the national assessment scope.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
Regional evidence is partial; a scope-complete review of conservation has not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Regional evidence is partial; evolution and fossil occurrence remain unassessed, and not all themes have a scope-complete evidence review.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence search, global conservation review, fossil review, or external expert review has been completed.
<!-- /evo:text -->
