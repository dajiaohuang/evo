---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Papionini
    commonName: Papionins
    commonNameZh: 狒狒族
    rank: tribe
    taxonId: ""
    colUsageId: L4C
    colDatasetId: "2144"
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    parentRelationshipKind: taxonomic-parent
    entityKind: taxon
    contentLevel: registry-only
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: col-2026-checklistbank-316115
          relation: supports
          quoteLocator: Accepted parent chain for species usage 3WWP2; tribe usage L4C immediately follows subfamily usage JB3.
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini
      rangeKind: global-composite
      taxonomicConcept: Papionini accepted usage L4C; numerical temporal range withheld
      geographicScope: No numerical geographic-temporal range exposed
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: col-2026-checklistbank-316115
          locator: COL26.8 dataset 316115; accepted usage L4C and parent classification (identity/classification only)
  catalogue-profile:
    scientificName: Papionini
    rank: tribe
    sourceDatasetId: "2144"
    name:
      zh: Papionini
      en: Papionini
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: morphology
        sourceIds:
          - pantheriaWR05
          - pantheriaConsolidation2009
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - amnioteLifeHistory2015
          - amnioteLifeHistoryMethods2015
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: readingPath
        sourceIds:
          - taxonomy
          - eltonTraits2014
          - eltonTraitsMethods2014
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: overview
        sourceIds:
          - taxonomy
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
      - topic: interpretation
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/5/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/5/text/en
      - topic: overview
        sourceIds:
          - ernestLifeHistories2003
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/6/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/6/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: Catalogue of Life COL26.8 — Papionini
            url: https://www.checklistbank.org/dataset/316115/taxon/L4C
            locator: Pinned name, rank and accepted ancestry.
          originalFields:
            - id
            - title
            - url
            - locator
        - referenceId: ref-2bbbd988-b0a6-4105-b535-f1d77d8eda57
          metadataVariant: 0
          sourceKey: pantheriaWR05
          usage:
            locator: PanTHERIA WR05 August 2008; 10 authored entries grouped under Papionini by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            licenseAssessment: CC0-archive-attributed-summary
            scope:
              zh: 仅概括本批有内容的历史条目，不代表完整后代覆盖。
              en: Only this batch’s authored historical entries; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-c9ca5cd3-8f21-4b65-b2d1-9f76dd3b9a8b
          metadataVariant: 0
          sourceKey: pantheriaConsolidation2009
          usage:
            locator: Ecological Archives E090-184-D1 metadata.htm; Class IV Table 1 (variable scope), Table 2 (consolidation), Class V B–C (source handling and derived fields).
            accessedAt: 2026-10-02
            licenseAssessment: paraphrase-only
            scope:
              zh: 仅解释历史汇总、中位数、部分 GLM 调整及字段边界；不证明 COL26.8 物种概念等同。
              en: Historical consolidation, medians, partial GLM adjustment and variable scopes; not proof of equivalent COL26.8 species concepts.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - licenseAssessment
            - scope
        - referenceId: ref-5a668f4f-a1a7-441f-8149-4ddd1450d47b
          metadataVariant: 0
          sourceKey: amnioteLifeHistory2015
          usage:
            locator: August 2015 archive; 36 authored same-name records placed under Papionini by pinned COL ancestry.
            accessedAt: 2026-10-02
            scope:
              zh: 仅本批已写入资料条目的阅读路线，不代表完整后代覆盖。
              en: Route through this batch’s authored records only; no complete descendant coverage.
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
        - referenceId: ref-50d83663-5d53-4d60-83a3-2b2a8461aa64
          metadataVariant: 0
          sourceKey: amnioteLifeHistoryMethods2015
          usage:
            locator: "Ecological Archives E096-269-D1 metadata: Methods, Class IV definitions; Supplemental Table 9 field definitions."
            accessedAt: 2026-10-02
            scope:
              zh: 中位数、最长寿命最大记录、历史种／亚种数据继承和字段定义。
              en: Medians, maximum longevity, historical species/subspecies inheritance and field definitions.
            sourceRetrievalUrl: https://www.esapubs.org/archive/ecol/E096/269/metadata.php
            sourceVersion: August 2015 archive
            readerBoundaries:
              - No field values treated as independent individual measurements.
              - No guarantee of present taxonomic concept equivalence.
              - Original input papers not individually reviewed.
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
            - sourceRetrievalUrl
            - sourceVersion
            - readerBoundaries
        - referenceId: ref-f9a7d6ec-b8bf-4c66-8345-1c7d45109599
          metadataVariant: 0
          sourceKey: eltonTraits2014
          usage:
            locator: EltonTraits 1.0; 37 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 33
              foraging: 37
              activity: 37
            readingTargets:
              - name: Macaca leonina
                colId: 3WWNK
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_leonina
              - name: Macaca maura
                colId: 3WWNN
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_maura
              - name: Macaca mulatta
                colId: 3WWNQ
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_mulatta
              - name: Macaca nemestrina
                colId: 3WWNT
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_nemestrina
              - name: Macaca nigra
                colId: 732V5
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_nigra
            scope:
              zh: 本批资料阅读路线，不是整个类群的生态总结。
              en: Route through this batch, not an ecological summary for the entire group.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - authoredFieldGroupCounts
            - readingTargets
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
        - referenceId: ref-1948a24d-679d-4e46-ac0d-16ed62cf4201
          metadataVariant: 0
          sourceKey: ernestLifeHistories2003
          usage:
            locator: Mammal_lifehistories_v2.txt; 9 authored records grouped under pinned COL ancestry.
            accessedAt: 2026-10-03
            readingTargets:
              - colId: SST8
                name: Cercocebus galeritus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Cercocebus/Cercocebus_galeritus
              - colId: 3WWP8
                name: Macaca sylvanus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_sylvanus
              - colId: 3WWP7
                name: Macaca sinica
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_sinica
              - colId: 3WWP6
                name: Macaca silenus
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_silenus
              - colId: 3WWNQ
                name: Macaca mulatta
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_mulatta
            fieldAccountCounts:
              gestation(mo): 8
              newborn(g): 8
              weaning(mo): 9
              wean mass(g): 6
              AFR(mo): 8
              max. life(mo): 5
              litter size: 9
              litters/year: 8
            scope:
              zh: 只覆盖本批资料页；未声称全部后代内容已完成。
              en: This batch’s accounts only; no complete descendant coverage.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - licenseEvidenceUrl
            - locator
            - accessedAt
            - readingTargets
            - fieldAccountCounts
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Papionini

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The COL26.8 accepted parent chain for Macaca radiata usage 3WWP2 places Papionini (tribe usage L4C) immediately below Cercopithecinae (subfamily usage JB3); this records checklist placement, not a phylogenetic result.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Pinned COL26.8 usage L4C directly establishes Papionini (tribe) at this point in the accepted checklist path. This claim describes that dataset's classification and does not assert universal consensus or phylogenetic relationships.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
固定版 COL26.8 用名 L4C 直接支持 Papionini（tribe）在该已接受清单路径中的位置；此声明只描述该数据集的分类，不推断普遍共识或系统发育关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
COL26.8 对邦内猕猴用名 3WWP2 的已接受父级链，将 Papionini（族用名 L4C）置于 Cercopithecinae（亚科用名 JB3）之下；这记录的是清单分类位置，不是系统发育结果。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; no audited fossil-range endpoint is asserted for this selected living-taxon route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The pinned COL26.8 checklist supports accepted identity and classification only; the selected local roadside study does not establish a fossil range or a wild-distribution inventory.
<!-- /evo:text -->
