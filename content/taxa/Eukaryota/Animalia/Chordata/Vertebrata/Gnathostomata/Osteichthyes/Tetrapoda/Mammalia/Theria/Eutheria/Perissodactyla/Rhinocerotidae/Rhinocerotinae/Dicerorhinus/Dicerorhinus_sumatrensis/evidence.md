---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dicerorhinus sumatrensis (G. Fischer [von Waldheim], 1814)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 苏门答腊犀
      en: Sumatran rhinoceros
    reviewStatus: source-linked
    checkedAt: 2026-09-22
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/1
    sources:
      referenceBindings:
        - referenceId: ref-edde093c-1db7-837f-a916-f94b7fbc5fb5
          metadataVariant: 0
          sourceKey: account
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
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-profile/sources/referenceBindings/1/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/35JV8
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
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Dicerorhinus sumatrensis (G. Fischer [von Waldheim], 1814)
    authorship: (G. Fischer [von Waldheim], 1814)
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-27
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
      - id: 623DW
        scientificName: Perissodactyla Owen, 1848
        authorship: Owen, 1848
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: FNV
        scientificName: Rhinocerotidae Gray, 1821
        authorship: Gray, 1821
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: VC8SJ
        scientificName: Rhinocerotinae Gray, 1868
        authorship: Gray, 1868
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 44JW
        scientificName: Dicerorhinus Gloger, 1841
        authorship: Gloger, 1841
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 35JV8
        scientificName: Dicerorhinus sumatrensis (G. Fischer [von Waldheim], 1814)
        authorship: (G. Fischer [von Waldheim], 1814)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
      sourceIds:
        - col
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: No domesticated individuals were assessed.
      captive: Captive individuals are not identified as a scope of this population-structure claim.
      fossil: The analysis uses genomic specimens and does not constitute an assessment of fossil occurrences or geological deposits.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 1
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/35JV8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:35JV8@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-27
            locator: Accepted species usage 35JV8; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 35JV8. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-de23e9a3-d32f-861c-ac86-253d47d1924a
          metadataVariant: 0
          sourceKey: vonSeth2021SumatranRhinocerosGenomics
          usage:
            licenseEvidenceLocator: Article open-access copyright and licensing notice; CC BY 4.0 license link.
            licenseAppliesTo: Article text under the article-level CC BY 4.0 license; no third-party figure or table content is reused.
            stableId: doi:10.1038/s41467-021-22386-8
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            accessedAt: 2026-09-27
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - locator
            - license
            - rightsHolder
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
            - licenseVersion
            - licenseUrl
            - licenseAssessment
            - scope
            - accessedAt
    systematicSearch:
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 35JV8; DOI 10.1038/s41467-021-22386-8; Nature Communications article and PDF.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      date: 2026-09-27
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: not-assessed
        claims: []
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - vonSeth2021SumatranRhinocerosGenomics
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/locator
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
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
        claims: []
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: not-assessed
        claims: []
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
---

# Dicerorhinus sumatrensis

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
仅支持本条目选用的形态、生境或取食概述；不导入来源中的旧保育数字或全部分类。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Supports the selected morphology, habitat or feeding overview only; older conservation numbers and the source’s full classification are not imported.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的名称、作者、等级与父子关系；不是系统发育分歧证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned names, authorship, ranks and parent links; not evidence of phylogenetic divergence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 35JV8. The claim concerns genomic population structure among sampled historical and modern specimens attributed to Sumatra, the Malay Peninsula, and Borneo; it does not establish a species-level phylogeny or formal management units.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The genomic samples are attributed by the article to regional Sumatran rhinoceros populations; this claim does not independently assess the collection status of every specimen.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Results, “Population structure and demographic history”; Fig. 1b; Methods, “Population structure”; article open-access license notice.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
von Seth J et al. (2021). Genomic insights into the conservation status of the world's last remaining Sumatran rhinoceros populations. Nature Communications 12, 2393. https://doi.org/10.1038/s41467-021-22386-8. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Within-species structure inferred from 21 historical and modern genomes representing sampled populations on Sumatra, the Malay Peninsula, and Borneo; not a species-level phylogeny or formal conservation assessment.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary whole-genome population-structure study; not a complete species-wide or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted usage and full accepted parent chain in the pinned COL26.8 registry; reviewed the article's genome sample, pairwise-distance tree, PCA, population labels, limitations, and item-level CC BY license statement.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary research directly analyzing Dicerorhinus sumatrensis genomes and reporting an explicit within-species population-structure result.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Species-level ancestry, unsampled populations, divergence dates, formal management units, morphology, life history, ecology, distribution, fossil history, and conservation status are not inferred from this claim.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The genomic population-structure analysis does not document diagnostic morphology or anatomical variation.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The selected genomic result does not assess reproduction, survival, development, or lifespan.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The population-genomic analyses do not directly establish habitat use, diet, or species interactions.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
A pairwise-distance phylogeny and principal-component analysis of 21 historical and modern Sumatran rhinoceros genomes recovered three main population groups associated with Sumatra, the Malay Peninsula, and Borneo. The tree and clustering analyses also distinguished northeastern and southwestern lineages within Sumatra. The Malay Peninsula samples grouped together, contrasting with an earlier mitogenome result. These findings describe the sampled populations; they do not establish a species-level ancestry tree or formal conservation units.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
研究者对 21 份历史及现代苏门答腊犀基因组进行成对遗传距离系统发育分析和主成分分析，得到分别与苏门答腊、马来半岛和婆罗洲相关的三个主要种群群组。系统发育树和聚类分析还区分出苏门答腊岛东北部与西南部谱系。马来半岛样本归为同一群，与较早的线粒体基因组研究结果不同。这些发现描述的是本研究取样所见的种群结构，不代表物种级祖先关系树或正式保育单元。
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Results, “Population structure and demographic history,” first paragraph and Fig. 1b; Methods, “Population structure.” The article reports 21 genomes in the population-structure analysis, including three additional lower-coverage genomes.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Historical and modern genomic specimens attributed to Sumatran rhinoceros populations on Sumatra, the Malay Peninsula, and Borneo; analysis published in 2021. The result is limited to the sampled genomes and population labels.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Specimen-derived genomic evidence attributed to natural regional populations; this claim does not characterize captive, domesticated, or fossil individuals.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This one genomic population-structure analysis does not establish species-level phylogenetic placement, divergence dates, formal conservation units, or the other six scientific facets.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Sample localities and population labels do not establish the complete geographic range or current occupancy.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The study does not assess fossil specimens, deposits, or geological occurrences.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
Although the article discusses conservation, this selected claim addresses population structure only and is not a formal status assessment or management-unit recommendation.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One focused primary source supports a bounded claim in evolution only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other six scientific facets remain explicitly not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
