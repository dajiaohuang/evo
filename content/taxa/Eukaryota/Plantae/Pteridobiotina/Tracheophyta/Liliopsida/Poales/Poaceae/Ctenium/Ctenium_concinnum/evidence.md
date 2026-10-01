---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Ctenium concinnum Nees
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
      domesticated: No cultivated or domesticated observations are included; the source does not establish a domestication history.
      fossil: No fossil claim is made; fossil occurrence has not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 15
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/3254C
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted taxon usage 3254C
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
            url: https://list.worldfloraonline.org/wfo-0000860837-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 3254C / WFO wfo-0000860837
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
        - referenceId: ref-afe9d9ef-dc26-8a26-a94d-a84b9205f316
          metadataVariant: 0
          sourceKey: sanbi
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
              - sanbi
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
              - sanbi
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

# Ctenium concinnum

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 ID, accepted name, authorship, rank, status, and source dataset ID checked in the pinned node. WFO 2026-06 accepted crosswalk row maps the same COL ID to wfo-0000860837 by exact accepted name and authorship.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Ctenium concinnum as represented by COL26.8 usage 3254C. SANBI's regional account and source publication concept are retained as their own scope; name agreement alone does not prove full circumscription equivalence.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Claims come from regional flora accounts; the cited passages do not consistently distinguish native wild plants from naturalised populations.
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
Identity-link evidence only; exact accepted name and authorship mapping, not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Ctenium species account, Strelitzia 36: 182-183; source identifier 15446.0; archived Habitat row 80373 and Morphology row 80653
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional southern African grass account. The cited habitat statement gives no dated observation sites or population frequency; measurements have no stated sample size in the archived excerpt.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Moeaha's species account describes C. concinnum as a tufted perennial 400-700 mm tall, with wiry culms and leaf blades 100-300 mm long by 2-5 mm wide; it also describes the inflorescence and spikelet characters.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Moeaha 的物种条目将 C. concinnum 描述为丛生多年生草本，高 400–700 mm，茎秆纤细，叶片长 100–300 mm、宽 2–5 mm；条目还描述了花序和小穗特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Strelitzia 36 (2015), Ctenium account, pp. 182-183; SANBI/WFO archive Morphology record row 80653, source identifier 15446.0
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Southern African regional species account published in 2015; the excerpt does not state the measured sample size, life stage, or a collection locality for these measurements.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora description; the cited passage does not distinguish wild native plants from naturalised populations.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only one regional account has been reviewed; sample size, developmental variation, and independent diagnostic comparisons remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The 2015 species account records open grassland and bushveld on sandy or sometimes moist soils as habitat for C. concinnum.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
2015 年的物种条目记载，C. concinnum 的生境包括沙质或有时较湿润土壤上的开阔草地和灌丛草原。
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Strelitzia 36 (2015), Ctenium account, pp. 182-183; SANBI/WFO archive Habitat record row 80373, source identifier 15446.0
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Southern African regional account published in 2015; no dated observation sites, sampling frame, or population frequency is stated in the excerpt.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The account does not establish whether each habitat statement concerns native wild or naturalised populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No locality-level observations, seasonality, resource use, species interactions, or population-level evidence has been assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only regional morphology and habitat excerpts have been assessed; five required facets remain unassessed and the two assessed facets are partial.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The source population scope and taxonomic circumscription have not been independently compared with all relevant global literature.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No systematic literature search, fossil review, distribution synthesis, conservation assessment, or external expert review has been completed.
<!-- /evo:text -->
