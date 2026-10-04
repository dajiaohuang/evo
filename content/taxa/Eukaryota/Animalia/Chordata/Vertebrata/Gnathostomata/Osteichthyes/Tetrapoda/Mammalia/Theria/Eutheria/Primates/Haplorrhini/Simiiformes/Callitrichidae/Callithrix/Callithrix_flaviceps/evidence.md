---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Callithrix flaviceps (Thomas, 1903)
    rank: species
    sourceDatasetId: "2144"
    name:
      en: Buffy-headed Marmoset
      zh: 淡头绒猴
    reviewStatus: source-linked
    checkedAt: 2026-10-01
    sections:
      - topic: population
        sourceIds:
          - pinto1993flaviceps
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: ecology
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: interpretation
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              en: Catalogue of Life COL26.8 — Callithrix flaviceps (Thomas, 1903)
              zh: 生命名录 COL26.8 — Callithrix flaviceps (Thomas, 1903)
            url: https://www.checklistbank.org/dataset/316115/taxon/5WVNT
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-04f7025c-929f-8e5d-ab8a-226d0c5ddf73
          metadataVariant: 0
          sourceKey: mdd_name
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-ee5581a1-78a4-8b63-a289-842a681b414f
          metadataVariant: 0
          sourceKey: pinto1993flaviceps
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-1948a24d-679d-4e46-ac0d-16ed62cf4201
          metadataVariant: 0
          sourceKey: ernestLifeHistories2003
          usage:
            locator: "Mammal_lifehistories_v2.txt: Callithrix flaviceps; original refs=24; metadata Class II B data collection and variable definitions; Class IV units and reference list."
            sourceVersion: Ecological Archives E084-093-D1; 2003 v2
            sourceFileSha256: 9b7a4ef7082c7b37ab76b922cfd5c86fd3e49444fa2db180439cfbe051fef6b9
            sourceRecordName: Callithrix flaviceps
            originalReferenceNumbers:
              - "24"
            availableFocalFields:
              - litter size
            uninterpretedFocalFields:
              - gestation(mo)
              - newborn(g)
              - weaning(mo)
              - wean mass(g)
              - AFR(mo)
              - max. life(mo)
              - litters/year
            withheldFields:
              - mass(g)
            historicalCrosswalk:
              MSW93Binomial: Callithrix flaviceps
              MSW05Binomial: Callithrix flaviceps
              mapping: one-to-one same-name MSW93/MSW05 in separate PanTHERIA supplied SppSynonymID1.0 table; not equivalence to COL
              sourceConceptEquivalenceToCOL: not established
            accessedAt: 2026-10-03
            licenseAssessment: archived-no-restrictions-attributed-factual-summary
            scope:
              zh: 历史生活史汇总：一般等权平均，最高寿命取记录最大值；成年体重不在本批解读，底层物种文献未逐条读取。
              en: "Historical life-history summaries: generally equally weighted averages, maximum lifespan as a record maximum; adult mass not interpreted in this batch, underlying species literature not individually read."
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - sourceVersion
            - sourceFileSha256
            - sourceRecordName
            - originalReferenceNumbers
            - availableFocalFields
            - uninterpretedFocalFields
            - withheldFields
            - historicalCrosswalk
            - accessedAt
            - licenseAssessment
            - scope
    limitations:
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
---

# Callithrix flaviceps

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Pinned accepted name, rank and genus link; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
固定接受名、等级和属级父链；不作为生物学证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Supports the selected English common name only; not occurrence, ecology or a complete range.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
仅支持所选英文普通名；不支持出现记录、生态或完整分布。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Repeated-transect estimates for five primate species, including C. flaviceps, in montane rainforest in eastern Brazil; density comparisons are local to the surveyed reserve.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
支持巴西东部山地雨林对五种灵长类（包括 C. flaviceps）的重复样线估计；密度比较限于所调查保护区。
<!-- /evo:text -->
