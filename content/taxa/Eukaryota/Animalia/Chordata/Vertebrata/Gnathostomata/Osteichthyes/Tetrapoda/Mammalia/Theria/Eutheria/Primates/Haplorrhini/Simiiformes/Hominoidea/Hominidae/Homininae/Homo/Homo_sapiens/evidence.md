---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Homo sapiens Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 智人
      en: Modern human
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
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-22217cd3-309c-83b2-a41d-d8b0e8de0f1c
          metadataVariant: 0
          sourceKey: freidline2023
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
        - referenceId: ref-22892d94-d6b7-81d0-ab11-fff1b982e9f8
          metadataVariant: 0
          sourceKey: smith2024ranis
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
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/6MB3T
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
    scientificName: Homo sapiens Linnaeus, 1758
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-28
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
        - itis
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication is not assessed by this dossier.
      fossil:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/fossil
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 8
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/6MB3T
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:6MB3T@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 6MB3T; sourceDatasetId 2144; Primates classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 6MB3T.
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
        - referenceId: ref-50992f42-620d-8f79-a5c9-f743a359b18a
          metadataVariant: 0
          sourceKey: itis
          usage:
            licenseAppliesTo: ITIS taxonomic database records.
            stableId: ITIS TSN 180092
            accessedAt: 2026-09-24
            locator: Valid species record, Homo sapiens; exact crosswalk from COL usage 6MB3T
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution: Integrated Taxonomic Information System (ITIS), dataset export 2026-08-26, TSN 180092.
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
        - referenceId: ref-779bdfd6-20e0-8a62-a0bb-90aabb995494
          metadataVariant: 0
          sourceKey: jakobsson2025
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1038/s41586-025-09811-4
            accessedAt: 2026-09-24
            locator: Abstract; Main, sampling description and Results, section Unique ancient southern African ancestry
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
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
        - referenceId: ref-257422e8-1717-80b0-a03d-65a5f8609b97
          metadataVariant: 0
          sourceKey: freidline2023
          usage:
            licenseAppliesTo: Article text under the version-of-record CC BY 4.0 notice; separately credited third-party material is excluded.
            stableId: doi:10.1038/s41467-023-38715-y
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/locator
            rightsEvidenceUrl: https://www.nature.com/articles/s41467-023-38715-y
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution
          originalFields:
            - id
            - title
            - url
            - version
            - stableId
            - publishedAt
            - accessedAt
            - locator
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - license
            - licenseAssessment
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-767c3171-14c0-866e-ae31-fdab5848657c
          metadataVariant: 0
          sourceKey: smith2024ranis
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo
            stableId: doi:10.1038/s41559-023-02303-6
            accessedAt: 2026-09-28
            locator: Abstract; Main, Ilsenhöhle stratigraphy and LRJ layers 9–8
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
            attribution: Smith et al. (2024), Nature Ecology & Evolution 8:564–577, https://doi.org/10.1038/s41559-023-02303-6.
          originalFields:
            - id
            - title
            - authors
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
              - freidline2023
            locator: Results—Morphological description of Tam Pà Ling 6 and 7; Figs. 1–2
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
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
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - smith2024ranis
            locator: Abstract; Main, Ranis and LRJ layers 9–8; stable-isotope summary for 52 animal and 10 human remains
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            sourceIds:
              - jakobsson2025
            locator: Abstract; Results, Unique ancient southern African ancestry
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            sourceIds:
              - jakobsson2025
            locator: Main, sampling description; Figure 1
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/textZh
            sourceIds:
              - freidline2023
            locator: Abstract; Results—Context and dating, especially the modeled TPL sequence and TPL 7 stratigraphic position; Fig. 5
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/fossil/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
  atlas-node:
    name: Homo sapiens
    commonName: Modern Humans
    commonNameZh: 现代人类
    rank: species
    taxonId: txn:83088
    firstAppearance: 0.3
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
---

# Homo sapiens

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
老挝北部单一洞穴地点的化石形态与沉积年代研究；地点年代模型不等同于化石直接测年。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Fossil morphology and site chronology at one cave in northern Laos; modeled site ages are not direct dates on the human fossils.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
德国 Ranis 单一洞穴的稳定同位素研究，包含 10 份人类遗骸和 52 份动物遗骸；饮食推断限于该考古样本。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Stable-isotope study at one cave in Ranis, Germany, with 10 human remains and 52 animal remains; the dietary inference is limited to that archaeological sample.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
固定版本中的接受名、作者、等级与分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Pinned accepted name, authorship, rank, and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 6MB3T, verbatim name and authorship, rank, status, sourceDatasetId and Primates classification verified against the pinned registry search record; exact external ITIS crosswalk maps the name to valid TSN 180092.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 6MB3T. Biological evidence is limited to the selected ancient southern African genomic sample, the Tam Pà Ling fossils, and the early human isotope sample from Ilsenhöhle at Ranis; none is generalized to all human populations or to a complete species history.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The selected study concerns ancient human individuals in archaeological contexts. It does not assess wild versus captive or domesticated status.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / fossil

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/fossil -->
TPL 6 and TPL 7 are fossil human remains attributed to Homo sapiens at Tam Pà Ling cave, northern Laos. The article reports no wild/captive population status and does not establish global first- or last-occurrence limits.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Independent identity crosswalk only; ITIS taxonomic metadata is not biological evidence in this dossier.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article text for the cited Nature version of record, as identified by the article PMC record; third-party items are excluded.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Primary whole-genome study of 28 ancient southern African individuals dated 10,200-150 calibrated years before present. Claims here are paraphrased and limited to the study sample and comparisons. Figures, third-party content and data files are not reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Jakobsson M, Bernhardsson C, McKenna J, et al. (2025). Homo sapiens-specific evolution unveiled by ancient southern African genomes. Nature 650:156-163. https://doi.org/10.1038/s41586-025-09811-4. Claims are paraphrased; article CC BY 4.0.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/locator -->
Abstract; Results—Context and dating; Results—Morphological description of Tam Pà Ling 6 and 7; Figs. 1, 2 and 5; Rights and permissions
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Primary fossil and chronology study of Tam Pà Ling cave, northern Laos. Claims paraphrase article text only; no article prose, figures, tables, supplementary files or third-party material are redistributed.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Freidline SE, Westaway KE, Joannes-Boyau R, et al. (2023). Early presence of Homo sapiens in Southeast Asia by 86–68 kyr at Tam Pà Ling, Northern Laos. Nature Communications 14:3193. https://doi.org/10.1038/s41467-023-38715-y. Claims paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/licenseAppliesTo -->
The article is identified as CC BY 4.0; third-party material may have separate credit-line terms. The dossier and app use paraphrased facts only and reproduce no article text, figures, third-party material or data files.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Primary zooarchaeology, palaeoproteomics, sediment DNA and stable-isotope study at Ilsenhöhle, Ranis, Germany. The human diet inference is limited to the 10 sampled human remains and their archaeological context.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The authors describe TPL 6 as a partial left frontal bone with a modest superciliary arch and no supraorbital torus, and TPL 7 as a proximal left tibial fragment with a fused tibial tuberosity. Taphonomic alteration precluded accurate osteometric analysis of TPL 7. These are descriptions of two fossil specimens, not a species-wide morphology profile.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
作者将 TPL 6 描述为左侧额骨残片，具有较弱的眉弓且没有眶上圆枕；将 TPL 7 描述为近端左胫骨碎片，其胫骨粗隆已经融合。埋藏改造使 TPL 7 无法进行准确的骨测量分析。这些描述仅针对两件化石标本，不代表全物种形态概况。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
TPL cave, Huà Pan Province, northern Laos; the paper describes the two fossil specimens from the late Pleistocene cave sequence. Site chronology is modeled from sediments and associated dating evidence, not directly from these anatomical observations.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Fossil human remains attributed by the authors to Homo sapiens; the article does not assess a living population.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Morphology evidence is limited to a partial frontal bone and a tibial fragment from one locality; it does not describe variation across populations, ages or anatomical systems.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No life-cycle, reproductive, growth, survival or longevity evidence was assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Stable-isotope analysis of collagen from 10 human remains, interpreted with 52 animal remains at Ilsenhöhle in Ranis, indicated a homogeneous dietary signal based on large terrestrial mammals in a cold steppe–tundra setting. This claim applies to the sampled early Homo sapiens and this cave assemblage; it does not describe the diet of Homo sapiens generally.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
对 Ilsenhöhle 的 10 份人类遗骸胶原蛋白进行稳定同位素分析，并结合 52 份动物遗骸，研究指出当地早期 Homo sapiens 的饮食信号较为同质，主要来自大型陆生哺乳动物，环境为寒冷草原／苔原。此主张仅适用于该洞穴考古组合及被采样个体，不代表 Homo sapiens 的普遍饮食。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Ilsenhöhle at Ranis, Thuringia, central Germany. The sampled human remains are associated with LRJ layers 9–8 dated respectively to 47,500–45,770 and 46,820–43,260 calibrated years BP; these are archaeological layer ages, not direct dates on every human specimen.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Ancient human remains attributed to Homo sapiens in an archaeological cave context; this does not describe living, wild or captive populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This isotope inference concerns 10 human remains at one cave and does not establish a general Homo sapiens diet, habitat profile or range-wide ecological pattern.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The article reports fluctuating human presence, sparse human butchery traces and substantial cave-bear and hyena input to the cave assemblage; isotope results alone do not show that every indicated animal taxon was hunted or consumed at the site.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
In the study comparison, the authors report that ancient southern African individuals dated to more than 1,400 calibrated years before present fell outside the range of genetic variation in their modern-day human comparison sample and carried many variants they classify as Homo sapiens-specific. This describes the study samples and operational variant set, not a separate taxonomic unit or all human populations.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Twenty-eight ancient southern African individuals dated 10,200-150 calibrated years before present, compared with the modern and ancient reference samples specified by the study; this is not a species-wide survey.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Ancient human individuals in the study sample; no claim is made about all contemporary Homo sapiens.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
Population-genomic findings are limited to sampled individuals and comparison groups; no complete species evolutionary history or current population review was undertaken.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The study sampled ancient individuals from archaeological sites south of the Limpopo River across southern and central South Africa. These are sample localities and do not delimit the current range of Homo sapiens.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Twenty-eight Holocene individuals dated 10,200-150 calibrated years before present from sampled South African sites in the study.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Ancient archaeological human remains; no inference about present-day range is made.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No current or historical global range inventory was conducted; study localities are not a distribution boundary.
<!-- /evo:text -->

## fossil / claims / text

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/text -->
The study assigns the TPL 6 frontal bone and TPL 7 tibial fragment from Tam Pà Ling cave, northern Laos, to Homo sapiens. Its abstract reports presence by 70 ± 3 ka for TPL 6 and an extension to 77 ± 9 ka for TPL 7; these are site-context chronology estimates based on modeled sediment ages and associated dating, not direct dates on the hominin fragments. The authors note that TPL 7 may be older than the modeled estimate because the deepest sediment sample was collected 30 cm higher.
<!-- /evo:text -->

## fossil / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/textZh -->
该研究将来自老挝北部 Tam Pà Ling 洞穴的 TPL 6 额骨和 TPL 7 胫骨碎片归为 Homo sapiens。论文摘要报告，TPL 6 将该地人类出现时间确定到距今 70 ± 3 千年，TPL 7 则将记录延伸至 77 ± 9 千年；这些是基于沉积物年龄模型及相关测年证据的地点年代估计，并非直接测得人类化石本身的年龄。作者指出，由于最深处沉积物样本采集位置高出 30 厘米，TPL 7 的年代可能早于模型估计。
<!-- /evo:text -->

## fossil / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/placeTimeScope -->
One fossil locality, Tam Pà Ling cave, northern Laos. The paper's 2-sigma site model places human material within a sequence extending approximately 77 ± 9 to 39 ± 9 ka; TPL 7 may predate the modeled oldest estimate. These are contextual depositional ages, not direct fossil dates.
<!-- /evo:text -->

## fossil / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/fossil/claims/0/lifeStatus -->
Fossil human remains attributed to Homo sapiens; this claim does not describe living, wild or captive populations.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
One cave sequence does not establish a global Homo sapiens fossil range or first/last occurrence. TPL 7 may be older than the modeled site estimate, and no systematic fossil-record review was completed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No conservation assessment, population trend or risk category was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The dossier combines a sample-bounded genomic study, specimen-limited morphology, one site-limited fossil chronology, and a cave-specific isotope study; it is not a systematic species-wide synthesis.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Life history and formal conservation assessment remain unassessed. Ecology has one archaeological cave isotope study; distribution, evolution, morphology and fossil coverage remain partial.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A systematic current literature review and independent expert review have not been completed.
<!-- /evo:text -->
