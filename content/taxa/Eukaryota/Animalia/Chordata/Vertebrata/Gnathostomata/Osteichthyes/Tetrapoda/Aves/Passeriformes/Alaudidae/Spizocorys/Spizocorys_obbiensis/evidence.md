---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Spizocorys obbiensis
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: Spizocorys obbiensis
      en: Spizocorys obbiensis
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - eltonTraitsSingleField2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: ecology
        sourceIds:
          - eltonTraitsSingleField2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: sources
        sourceIds:
          - eltonTraitsSingleField2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: ecology
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: ecology
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: ecology
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
      - topic: interpretation
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/7/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/7/text/en
      - topic: overview
        sourceIds:
          - avonetEcologyOnlyV7
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/8/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/8/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Spizocorys obbiensis
            url: https://www.checklistbank.org/dataset/316115/taxon/4Z9B3
            locator: Pinned accepted name, class, family and ancestry; historical concept equivalence not established.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraitsSingleField2014
          usage:
            locator: BirdFuncDat.txt logical TSV row 7948; Scientific=Spizocorys obbiensis; BirdFuncDatSources.txt; selected group source labels retained separately.
            accessedAt: 2026-10-02
            sourceVersion: EltonTraits 1.0; metadata latest update August 2013
            sourceFileSha256: 97216eb1797da077169ebb1ebea275db293b09fc62f8bb8911f9beb98c50d321
            selectedFieldGroups:
              foraging:
                fields:
                  - ForStrat-watbelowsurf
                  - ForStrat-wataroundsurf
                  - ForStrat-ground
                  - ForStrat-understory
                  - ForStrat-midhigh
                  - ForStrat-canopy
                  - ForStrat-aerial
                references:
                  - id: Ref_9
                    verbatim: Handbook of the Birds of the World vol.9.  Del Hoyo J., Elliott A., Sargatal J. & Christie D.A. (1992-2011). Lynx Edicions, Barcelona
                speciesLevel: "1"
            withheldFieldGroups:
              - group: diet
                certainty: C
                reason: uncertainty/interpolation, unresolved source labels or unusable category values
            sourceRecordComment: ""
            associationBoundary: Historical exact same-name and same-family record only. Modern species concept equivalence not established. Mammal ABC flags can include inference from a named congener; no primary species-level observation claim.
            scope:
              zh: 历史同名同科的取食生态；相对权重为文献描述估计，ABC 字段可含同属材料。
              en: Historical same-name, same-family foraging ecology; weights are literature-description estimates, and ABC fields can include congeneric material.
            readerFieldCautions:
              - fieldGroup: diet
                sourceCode: C
                reason: uncertainty/interpolation, unresolved source labels or unusable category values
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - sourceVersion
            - sourceFileSha256
            - selectedFieldGroups
            - withheldFieldGroups
            - sourceRecordComment
            - associationBoundary
            - scope
        - referenceId: ref-23d71769-a573-4f3c-8284-3271a2ef8b53
          metadataVariant: 0
          sourceKey: eltonTraitsMethods2014
          usage:
            locator: Ecological Archives E095-178-D1 metadata.php; Class II B translation/interpolation/limitations; Class IV Tables 1–4.
            accessedAt: 2026-10-02
            scope:
              zh: 文献描述的半定量转换、字段代码、插补与历史分类边界；未读底层文献。
              en: Semiquantitative translation, field codes, interpolation and historical taxonomy; underlying literature not read.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - scope
        - referenceId: ref-a0ada1fe-b948-4d2b-b1d5-6044eda73c61
          metadataVariant: 0
          sourceKey: avonetEcologyOnlyV7
          usage:
            locator: "AVONET1_BirdLife: Species1=Spizocorys obbiensis; Metadata sheet ecological category and breeding/resident latitude definitions."
            sourceVersion: Figshare AVONET version 7; file 34480856
            sourceWorksheet: AVONET1_BirdLife
            sourceFileSha256: eb645e83dddb40f1654a3e8d721998dbca76eff540231b7b809267c1e96f8d3e
            sourceRecordName: Spizocorys obbiensis
            eBirdCrosswalk:
              Species1: Spizocorys obbiensis
              Species2: Spizocorys obbiensis
              Match.type: 1BL to 1eBird
              Match.notes: null
              Avibase.ID1: AVIBASE-D7A55FB3
              Avibase.ID2: AVIBASE-D7A55FB3
              "null": null
            birdTreeCrosswalk:
              Species1: Spizocorys obbiensis
              Species3: Spizocorys obbiensis
              Match.type: 1BL to 1BT
              Match.notes: null
            interpretedEcologicalFields:
              - Habitat
              - Trophic.Niche
              - Primary.Lifestyle
              - Migration
            uninterpretedEcologicalFields: []
            withheldBiometricFields:
              - Beak.Length_Culmen
              - Beak.Length_Nares
              - Beak.Width
              - Beak.Depth
              - Tarsus.Length
              - Wing.Length
              - Kipps.Distance
              - Secondary1
              - Hand-Wing.Index
              - Tail.Length
              - Mass
            originalInference: YES
            originalMassSource: Dunning
            accessedAt: 2026-10-03
            licenseAssessment: CC-BY-4.0-archive-attributed-factual-summary
            scope:
              zh: 有限历史生态类别与地图摘要；不解读形态或体重，底层物种文献未逐条读取，名称不证明概念等同。
              en: Limited historical ecology categories and map summaries; no morphology or mass interpretation, underlying species literature not individually read, matching names do not prove equivalent concepts.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - sourceVersion
            - sourceWorksheet
            - sourceFileSha256
            - sourceRecordName
            - eBirdCrosswalk
            - birdTreeCrosswalk
            - interpretedEcologicalFields
            - uninterpretedEcologicalFields
            - withheldBiometricFields
            - originalInference
            - originalMassSource
            - accessedAt
            - licenseAssessment
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Spizocorys obbiensis
