---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Trianoptiles solitaria (C.B.Clarke) Levyns
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
      wild: Biological claims concern wild regional-flora populations and wild national-assessment scope.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/7CP59
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted taxon usage 7CP59
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
            url: https://list.worldfloraonline.org/wfo-0000590865-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Exact accepted COL 7CP59 / WFO wfo-0000590865 crosswalk row
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
        - referenceId: ref-53558697-a3f4-853c-a785-8a07fb65c1bf
          metadataVariant: 0
          sourceKey: sanbi-archive
          usage:
            locator: Exact COL/WFO-linked morphology row 9190 and habitat row 27417
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
          metadataVariant: 1
          sourceKey: strelitzia29
          usage:
            locator: Trianoptiles genus account, printed p. 96; species morphology, flowering period, habitat and range
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
        - referenceId: ref-f9486d7f-c2f4-8e1a-a65e-d208a577ff92
          metadataVariant: 0
          sourceKey: plantzafrica
          usage:
            locator: Description and ecology sections; genus-level annual habit and amphicarpy account
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
        - referenceId: ref-55265b3b-4af8-8e74-a57c-d67b1a414510
          metadataVariant: 0
          sourceKey: verboom2006
          usage:
            locator: Table 2 p. 83; combined phylogenetic results, Figs. 1–2 and discussion, pp. 85–87
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
        - referenceId: ref-0e841977-9f77-8733-a5ef-4a78fcb3f0b7
          metadataVariant: 0
          sourceKey: sanbi-redlist
          usage:
            locator: National status and criteria, assessment date, justification, distribution, habitat and threats
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/6/usage/scope
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
            locator: Strelitzia 29 (2012), printed p. 96; SANBI e-Flora morphology row 9190
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
              - plantzafrica
            locator: Strelitzia 29 (2012), printed p. 96; SANBI PlantZAfrica, Description and Ecology
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
              - strelitzia29
              - sanbi-redlist
            locator: SANBI e-Flora habitat row 27417; Strelitzia 29 (2012), printed p. 96; where listed, SANBI Red List habitat fields
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
              - verboom2006
            locator: Verboom 2006, Table 2 p. 83; Figs. 1–2 pp. 85–86; results pp. 84–85
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
              - strelitzia29
              - sanbi-redlist
            locator: Strelitzia 29 (2012), printed p. 96; where listed, SANBI Red List distribution fields
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
            locator: SANBI Red List, National Status and Criteria; assessment date and justification
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

# Trianoptiles solitaria

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 7CP59, name, authorship, rank and source dataset 2232 checked against the pinned taxon; WFO 2026-06 crosswalk maps it to wfo-0000590865 by exact accepted name and authorship.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Trianoptiles solitaria (C.B.Clarke) Levyns as represented by COL26.8; regional biological sources do not establish global coverage.
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
SANBI genus-level account for three Trianoptiles species; regional South African treatment, not a global survey.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/scope -->
T. solitaria is represented by one trnL–trnF sequence attributed to Zhang et al. (2004); not genome-wide sampling.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/6/usage/scope -->
South African national conservation assessment, not a global status.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Strelitzia 29 describes a grass-like annual 10–30 cm tall with greenish spikelets.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
SANBI 区域植物志的物种形态记载：Strelitzia 29 describes a grass-like annual 10–30 cm tall with greenish spikelets.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Southern African regional flora evidence; limited to the cited species description.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild flora description; cultivation is not covered.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Regional descriptions are partial; no scope-complete review of morphology and identification has been completed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Strelitzia 29 records flowering August–October. SANBI's genus account describes Trianoptiles species as annuals and amphicarpic, with bisexual aerial spikelets and female partly subterranean spikelets near the plant base; the account does not supply species-specific reproductive rates or a complete life cycle.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
花期记录：Strelitzia 29 records flowering August–October. SANBI 属级条目称 Trianoptiles 各种均为一年生并具双型结实，具有地上两性小穗及植株基部部分地下的雌性小穗；该条目未提供种级繁殖率或完整生活史。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Regional flora account and SANBI genus-level page accessed 2026-09-23; claims retain the stated taxonomic and seasonal scope.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild South African flora account; cultivation is not covered.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Reproductive observations are incomplete; seed output, germination, demographic rates and full life-cycle stages have not been reviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The source-specific habitat description is: The regional flora records damp flats; the SANBI national assessment specifies damp depressions in acid sands.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
区域生境记录：The regional flora records damp flats; the SANBI national assessment specifies damp depressions in acid sands.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional southern African flora or national assessment scope; not a global ecological niche analysis.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild habitat evidence; cultivation is not covered.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Habitat statements are partial; ecological interactions and a scope-complete ecology review remain unassessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Verboom's 2006 plastid phylogeny includes T. solitaria as a trnL–trnF sequence terminal inherited from Zhang et al. (2004). In the analyses, Trianoptiles and Carpha form a sister grouping to the remaining taxa in the relevant clade (bootstrap 93%, posterior probability 1.00). This is a single-locus inherited sequence and a study-tree result, not a genome-wide species history or divergence-time estimate.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
Verboom (2006) 的叶绿体系统发育分析纳入 T. solitaria 的单个 trnL–trnF 序列（引自 Zhang 等 2004），并在其采样树中得到 Trianoptiles 与 Carpha 的姐妹群关系（bootstrap 93%，posterior probability 1.00）。这是单个位点和该研究树的结果，不代表全基因组亲缘或分歧时间。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
One inherited plastid locus for T. solitaria in a 2006 multi-taxon study; no divergence date inferred.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild voucher-derived sequence evidence as reported by the cited study.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
One inherited plastid sequence and study-tree topology do not establish a genome-wide or complete species evolutionary history.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The SANBI national assessment gives the South African range as the Cape Peninsula to Perdeberg south of Malmesbury. Strelitzia 29 lists Cold Bokkeveld Mountains, Paardeberg and Cape Flats, and separately notes Australia; the regional account does not specify the biogeographic status of that Australian record, so it is not used to infer a native or introduced range.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
区域分布记录：The SANBI national assessment gives the South African range as the Cape Peninsula to Perdeberg south of Malmesbury. Strelitzia 29 lists Cold Bokkeveld Mountains, Paardeberg and Cape Flats, and separately notes Australia; the regional account does not specify the biogeographic status of that Australian record, so it is not used to infer a native or introduced range.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Regional flora and national-assessment records dated 2012 or 2013/2015; not a current global occurrence inventory.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild native-range evidence; the Australian mention for T. solitaria is retained as unclassified by the cited account.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Regional distribution is partial; no current global occurrence review has been completed.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
SANBI's national assessment assigns Endangered B1ab(i,ii,iii,iv,v), assessed 2015-05-13. The assessment reports an extent of occurrence of 400 km², area of occupancy below 230 km², four known locations, and threats including habitat degradation by invasive alien plants and eutrophication. This is a South African assessment, not a global status.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
SANBI 南非国家评估列为濒危（EN B1ab(i,ii,iii,iv,v)），评估日期为 2015-05-13；评估报告 EOO 400 km²、AOO 低于 230 km²、已知 4 个地点，并记录入侵植物导致的生境退化及富营养化等威胁。此为南非国家评估，不是全球等级。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
South African national assessment dated 2015; area and location estimates are assessment-era values.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild South African populations; cultivated plants are outside the assessment.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The cited assessment is regional and dated; no current global conservation assessment has been established in this dossier.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Regional evidence is partial; fossil occurrence and one or more of evolution or conservation remain unassessed, and no global scope-complete synthesis has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No reproducible global literature and occurrence review, fossil review, or external expert review has been completed.
<!-- /evo:text -->
