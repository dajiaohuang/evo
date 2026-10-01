---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pan paniscus Schwarz, 1929
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 倭黑猩猩
      en: Bonobo
    reviewStatus: source-linked
    checkedAt: 2026-09-29
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-1dffeb8d-aec4-8704-a7d0-5c06aca3d7ce
          metadataVariant: 0
          sourceKey: oelze2016
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-4f45fd9c-4fbd-86cc-ad1d-9413d56fb877
          metadataVariant: 0
          sourceKey: wegdell2025vocal
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/2/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4C92F
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Pan paniscus Schwarz, 1929
    authorship: Schwarz, 1929
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    classificationPath:
      - id: CS5HF
        scientificName: Eukaryota (Chatton, 1925) Whittaker & Margulis, 1978
        authorship: (Chatton, 1925) Whittaker & Margulis, 1978
        rank: domain
        status: accepted
        sourceDatasetId: null
      - id: N
        scientificName: Animalia
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CH2
        scientificName: Chordata
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V3
        scientificName: Vertebrata
        authorship: null
        rank: subphylum
        status: accepted
        sourceDatasetId: null
      - id: 8V4V5
        scientificName: Gnathostomata
        authorship: null
        rank: infraphylum
        status: accepted
        sourceDatasetId: null
      - id: 8VVWB
        scientificName: Osteichthyes
        authorship: null
        rank: parvphylum
        status: accepted
        sourceDatasetId: null
      - id: 9CK8W
        scientificName: Tetrapoda
        authorship: null
        rank: megaclass
        status: accepted
        sourceDatasetId: null
      - id: 6224G
        scientificName: Mammalia Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: 6226C
        scientificName: Theria Parker & Haswell, 1897
        authorship: Parker & Haswell, 1897
        rank: subclass
        status: accepted
        sourceDatasetId: "2144"
      - id: LG
        scientificName: Eutheria Gill, 1872
        authorship: Gill, 1872
        rank: infraclass
        status: accepted
        sourceDatasetId: "2144"
      - id: 3W7
        scientificName: Primates Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 4DT
        scientificName: Haplorrhini Pocock, 1918
        authorship: Pocock, 1918
        rank: suborder
        status: accepted
        sourceDatasetId: "2144"
      - id: 4PM
        scientificName: Simiiformes Haeckel, 1866
        authorship: Haeckel, 1866
        rank: infraorder
        status: accepted
        sourceDatasetId: "2144"
      - id: 58L
        scientificName: Hominoidea Gray, 1825
        authorship: Gray, 1825
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 6256T
        scientificName: Hominidae Gray, 1825
        authorship: Gray, 1825
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: JPH
        scientificName: Homininae Gray, 1825
        authorship: Gray, 1825
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 6D2G
        scientificName: Pan Oken, 1816
        authorship: Oken, 1816
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 4C92F
        scientificName: Pan paniscus Schwarz, 1929
        authorship: Schwarz, 1929
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication has not been assessed; the ecological evidence concerns free-ranging animals only.
      fossil: Fossil occurrence and geological age have not been assessed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 5
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4C92F
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:4C92F@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 4C92F. https://doi.org/10.48580/dgywk
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-9b62fa6b-a06e-8e7b-a1a3-76d2d3fffc5e
          metadataVariant: 0
          sourceKey: oelze2016
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0162091
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution: "Oelze VM et al. (2016). PLOS ONE 11(9): e0162091. https://doi.org/10.1371/journal.pone.0162091. Claims paraphrased."
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-6f4df810-e12e-89a3-a8c2-7d4c18991fbd
          metadataVariant: 0
          sourceKey: wegdell2025vocal
          usage:
            licenseAppliesTo: Article text; claims are paraphrased and no spectrograms, tables, audio, or supplementary files are reproduced.
            stableId: doi:10.1371/journal.pone.0330250
            accessedAt: 2026-09-24
            locator: Abstract; Methods, Ethics statement, Data collection and Call type classification; Results; Discussion.
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0330250
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - locator
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
            - scope
    facets:
      morphology:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - oelze2016
            locator: Results and Discussion, Effects of social rank and sex; Abstract; Materials and Methods, Bonobo models
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/textZh
            sourceIds:
              - wegdell2025vocal
            locator: Abstract; Methods, Data collection and Call type classification; Results; Discussion.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/3
      evolution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
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
---

# Pan paniscus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
刚果民主共和国 LuiKotale 附近 Bompusa 一个习惯化野生社群的毛发稳定同位素研究；样本代表 2008–2010 年。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Stable-isotope study of hair from one habituated wild Bompusa community near LuiKotale, Democratic Republic of the Congo; samples represent 2008–2010.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
刚果民主共和国 Kokolopori 与 LuiKotale 两处、4 个社群的成年倭黑猩猩叫声资料；包括 2011–2022 年录音。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Adult bonobo vocalizations from four communities at Kokolopori and LuiKotale, Democratic Republic of the Congo, recorded during 2011–2022.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage verified against pinned search and hierarchy registries, including verbatim scientific name, authorship, rank, sourceDatasetId and every accepted parent node.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 4C92F. Ecological evidence below concerns one habituated free-ranging Bompusa community at LuiKotale and does not establish species-wide feeding patterns.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Ecological isotope evidence is from non-invasively collected hair of free-ranging bonobos of the Bompusa community at LuiKotale, Democratic Republic of the Congo.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 4C92F; verbatim scientificName Pan paniscus Schwarz, 1929; sourceDatasetId 2144; full accepted parent chain through genus Pan (6D2G) and order Primates (3W7)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and parent classification in pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The published article text, as stated by the article's open-access copyright notice; figures and supplementary materials are not reused.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Materials and Methods §§Study site and sample collection, Bonobo models; Results and Discussion §§Effects of social rank and sex; Tables S1–S2
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary stable-isotope study of non-invasively collected hair from one habituated wild Bompusa community at LuiKotale, near Salonga National Park, DRC. Hair samples collected 2008–2010. Only paraphrased article text is used; figures and supplementary items are excluded.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Wegdell F, Schamberg I, Berthet M, Rothacher Y, Dellwo V, Surbeck M, Townsend SW. (2025). An updated vocal repertoire of wild adult bonobos (Pan paniscus). PLoS ONE 20(9):e0330250. https://doi.org/10.1371/journal.pone.0330250. CC BY 4.0. Claims are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Quantitative vocal-repertoire analysis of 1,509 known-caller vocalizations from 53 wild adult bonobos recorded at two sites and four communities in the Democratic Republic of the Congo over 33 recording months (2,107 recording hours) during 2011–2022. The authors report non-invasive ethics permission from the Institut Congolais pour la Conservation de la Nature and DRC Ministry of Research and Technology, and village access for Kokolopori; data and code are linked from OSF. Funders had no role and no competing interests were declared.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No morphology evidence was assessed in this batch.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Reproduction, development, lifespan and other life-history traits have not been assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In hair isotope data from one habituated wild Bompusa community, lower social rank was associated with lower nitrogen isotope values in males; the study found no corresponding rank relationship among females across reproductive states. These measurements are isotope evidence about feeding ecology and do not by themselves identify exact food items consumed by each individual.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
LuiKotale field site near Salonga National Park, Democratic Republic of the Congo; hair samples from 23 known adults represent 2008–2010, with new samples from Bompusa community in 2010.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-ranging bonobos; samples were collected non-invasively from night nests. One habituated community only; no captive animals are included in this claim.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
In a quantitative analysis of 1,509 known-caller vocalizations from 53 wild adult bonobos in four Democratic Republic of the Congo communities, supervised random-forest classification reliably distinguished 11 of 15 previously defined call types; acoustic overlap remained, so the authors describe the vocal repertoire as graded. The result concerns sampled adult calls and the study’s predefined categories, not call meaning or a complete range-wide inventory.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/textZh -->
在对刚果民主共和国四个群体中 53 只野生成体倭黑猩猩的 1,509 条已知发声者录音进行定量分析时，监督式随机森林分类可靠地区分了 15 种既有叫声类别中的 11 种；声学重叠仍然存在，因此作者将其发声谱系描述为渐变型。该结果仅涉及抽样的成体叫声及研究预先设定的类别，不代表叫声含义，也不是全分布区的完整清单。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
Kokolopori Bonobo Reserve and LuiKotale field site, Democratic Republic of the Congo; four communities; 33 recording months and 2,107 recording hours over 2011–2022.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Habituated free-ranging wild adult bonobos; immature callers and unknown-caller recordings were excluded from the quantitative analysis.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This is one habituated community and does not establish species-wide feeding ecology or variation across the bonobo range.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
Stable isotope associations do not directly identify specific consumed foods for each individual.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
Morphology, independent distribution inventories, fossil evidence and conservation assessments were not assessed in this batch.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/3 -->
The analysis is adult-only, restricted to four communities at two sites and previously defined call categories; rare calls and immature calls were not represented, acoustic overlap persists, and call function or meaning was not tested.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic or evolutionary evidence was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A species-wide distribution inventory was not assessed; the LuiKotale field study does not define the species range.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil evidence or geological age was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No threat status, trend or range-wide conservation assessment was assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One localized isotope study and one multi-community vocal study provide bounded ecology and behavior evidence; morphology, life history, evolution, distribution, fossil evidence, and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic literature search, complete range-wide biological synthesis, or independent expert review has been completed.
<!-- /evo:text -->
