---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hippopotamidae
    commonName: Hippopotamuses
    commonNameZh: 河马科
    rank: family
    taxonId: txn:42479
    firstAppearance: 23
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Artiodactyla/Hippopotamidae
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
        - relation: supports
          referenceId: boisserie-2005-hippopotamidae
          pages: 1–26
          quoteLocator: Taxonomic review; cladistic analysis; discussion of revised family membership
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Artiodactyla/Hippopotamidae
      rangeKind: global-composite
      taxonomicConcept: hippopotamidae — source-bounded sample window — numerical range withheld
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
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: boisserie-2005-hippopotamidae
          locator: 1–26; Taxonomic review; cladistic analysis; discussion of revised family membership
      evidenceLevel: withheld-no-range-evidence
  catalogue-profile:
    scientificName: Hippopotamidae
    rank: family
    sourceDatasetId: "2144"
    name:
      zh: Hippopotamidae
      en: Hippopotamidae
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
            title: Catalogue of Life COL26.8 — Hippopotamidae
            url: https://www.checklistbank.org/dataset/316115/taxon/B3L
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
            locator: PanTHERIA WR05 August 2008; 1 authored entries grouped under Hippopotamidae by pinned COL26.8 ancestry.
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
            locator: August 2015 archive; 1 authored same-name records placed under Hippopotamidae by pinned COL ancestry.
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
            locator: EltonTraits 1.0; 1 authored historical entries grouped by pinned COL26.8 ancestry.
            accessedAt: 2026-10-02
            authoredFieldGroupCounts:
              diet: 1
              foraging: 1
              activity: 1
            readingTargets:
              - name: Hippopotamus amphibius
                colId: 3M2JB
                release: COL26.8
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Artiodactyla/Hippopotamidae/Hippopotamus/Hippopotamus_amphibius
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
            locator: Mammal_lifehistories_v2.txt; 1 authored records grouped under pinned COL ancestry.
            accessedAt: 2026-10-03
            readingTargets:
              - colId: 3M2JB
                name: Hippopotamus amphibius
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Artiodactyla/Hippopotamidae/Hippopotamus/Hippopotamus_amphibius
            fieldAccountCounts:
              gestation(mo): 1
              newborn(g): 1
              weaning(mo): 1
              wean mass(g): 1
              AFR(mo): 1
              max. life(mo): 1
              litter size: 1
              litters/year: 1
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

# Hippopotamidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A review and 37-character cladistic analysis of 15 living and fossil hippopotamid taxa revises several historical assignments while retaining Hippopotamidae as the study’s focal family; the resulting membership is a sampled taxonomic hypothesis, not a complete fossil duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The systematic review provides a family-wide morphology audit and explicit cladistic sample. Its revisions and limited taxon set are retained.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统综述提供科级形态审计与明确支序取样；主张保留其修订结果和有限类群集。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项覆盖 15 个现生与化石河马科类群、使用 37 个性状的综述与支序分析修订了若干历史归类，同时保留河马科为研究焦点；所得成员关系是取样分类假说，不是完整化石延续范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the morphology review revises membership but does not securely support the legacy 23 Ma numerical start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of The phylogeny and taxonomy of Hippopotamidae (Mammalia: Artiodactyla): a review based on morphology and cladistic analysis found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
