---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Arabidopsis thaliana (L.) Heynh.
    rank: species
    sourceDatasetId: "1141"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild: Wild-population evidence is distinguished from the Kew cultivation guidance cited for UK flowering and self-sowing.
      domesticated: Domestication and crop status have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 30
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/G26R
            version: COL26.8 released 2026-08-20; pinned registry snapshot in this repository
            locator: Accepted species usage G26R; exact scientificName, authorship, rank, status, and sourceDatasetId fields
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
        - referenceId: ref-28de40fa-0316-845c-a97a-524cc5ab74f6
          metadataVariant: 0
          sourceKey: kewflora
          usage:
            locator: "Kew Species Profiles: Description; Cultivation; Ecology; the page identifies the profile as [KSP] and its source license"
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
        - referenceId: ref-2a6176c1-d258-85dc-a123-c231a22ce773
          metadataVariant: 0
          sourceKey: arab1001
          usage:
            locator: Abstract; Results and Discussion, The Sample; Figure 1A
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
              - kewflora
            locator: POWO page, Kew Species Profiles section 'Description'
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
              - kewflora
            locator: POWO page, General information; Kew Species Profiles section 'Cultivation'
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
              - kewflora
            locator: POWO page, Kew Species Profiles section 'Ecology'
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
              - arab1001
            locator: Abstract; Results and Discussion, The Sample; Figure 1A
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

# Arabidopsis thaliana

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted species usage matched in the pinned COL26.8 registry by COL ID, scientific name, authorship, rank, status, and sourceDatasetId.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species Arabidopsis thaliana as represented by COL26.8 usage G26R. Sample-specific claims are bounded to their cited sources and are not generalized to every accession or habitat.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1141
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted-name identity and source-dataset relation only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Kew botanical profile. UK cultivation timing is not treated as a global phenology estimate.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Whole-genome resequencing and population-history inferences from the study's 1,135 sampled natural inbred lines; not a complete census of the species.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Kew's species profile describes small flowers with four free sepals, four white spatulate petals, six stamens arranged as four median and two longer lateral stamens, and a superior gynoecium of two fused carpels with a false septum bearing about 50 or more ovules.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
邱园物种简介记载，其花有 4 枚离生萼片、4 枚白色匙形花瓣、6 枚雄蕊（4 枚中位、2 枚较长侧位），以及由 2 枚合生心皮构成的上位雌蕊；假隔膜上约有 50 枚以上胚珠。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Species-profile description; no population sample or date-specific measurement is stated.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Botanical species description; the cited account does not separate wild and cultivated floral anatomy.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Vegetative variation, developmental anatomy, and population-level morphology have not been systematically assessed.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Kew describes A. thaliana as an annual. Its UK cultivation guidance says autumn-sown plants flower the following March to June, then die and usually self-sow; this is cultivation guidance for the UK, not a range-wide calendar.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
邱园将该种描述为一年生植物；其英国栽培说明记载，秋播植株通常在次年 3 至 6 月开花，之后死亡并通常自行播种。该时间只适用于所述英国栽培情境，不代表全分布区的物候日历。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Annual life form and UK cultivation schedule as presented by the accessed Kew account; no broader phenological sampling frame is supplied.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Cultivation statements are explicitly limited to the UK gardening context.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Seed dormancy, germination ecology, generation time across accessions, and wild population life-history variation remain unassessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Kew's UK species profile describes A. thaliana as a pioneer of rocky ground, dunes, open sandy and calcareous habitats, and also records it in disturbed sites such as gardens, waste ground, and railway ballast.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
邱园英国物种简介将该种记为岩地、沙丘、开阔沙地和钙质生境的先锋植物，也记录其见于花园、荒地和铁路道砟等受扰动地点。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional UK profile statement; it does not establish habitat frequency or ecology throughout the global range.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild and disturbed-site observations are reported by the regional profile; cultivation observations are not inferred.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Interactions, seasonal resource use, and ecology outside the profile's regional scope have not been assessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
A 2016 study of 1,135 resequenced natural inbred lines sampled across native Eurasian and North African areas and recently colonized North America reported relict populations, primarily in Iberia, and a lineage inferred to have spread north from an unknown glacial refugium. These are study-specific population-history inferences, not a complete species history.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
一项 2016 年研究对来自欧亚及北非原生区、以及近期定殖的北美地区的 1,135 个天然自交系进行了重测序；研究报告了主要位于伊比利亚的遗存种群，并推断另一谱系从位置未知的冰期避难所向北扩散。这些是该研究基于样本得出的种群历史推断，并非完整物种史。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Genome sample and interpretation published in 2016; geographic coverage follows the study's sampled accessions.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Natural inbred accessions; domesticated or cultivated histories are not inferred.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The sampled accessions do not constitute a census; alternative demographic models and later genomic findings have not been reviewed here.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only selected morphology, UK cultivation, regional ecology, and one population-genomic study have been assessed; distribution, fossil evidence, and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
A systematic literature review and comparison of all source concepts with the full COL26.8 species concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
