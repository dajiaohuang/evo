---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gorilla beringei Matschie, 1903
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 东部大猩猩
      en: Eastern gorilla
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
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/1
    sources:
      referenceBindings:
        - referenceId: ref-7408cb2f-1826-8f90-a853-c543556454bd
          metadataVariant: 0
          sourceKey: robbins2023gorillalifehistory
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
        - referenceId: ref-4ebc60ae-6415-885b-a15f-ee8c276b8e50
          metadataVariant: 0
          sourceKey: vanderValk2018mtDNA
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3H3C3
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
    scientificName: Gorilla beringei Matschie, 1903
    authorship: Matschie, 1903
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
      - id: 62SMC
        scientificName: Gorilla I. Geoffroy Saint-Hilaire, 1852
        authorship: I. Geoffroy Saint-Hilaire, 1852
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 3H3C3
        scientificName: Gorilla beringei Matschie, 1903
        authorship: Matschie, 1903
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication has not been assessed; no domesticated animals are included in the cited study.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/3H3C3
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:3H3C3@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 3H3C3. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-3b7652b8-b60f-8fe8-ad39-e378bf6f121d
          metadataVariant: 0
          sourceKey: robbins2016
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0160483
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
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
        - referenceId: ref-fa6bdbbe-475f-8d58-ade9-ba0e1bb3fff5
          metadataVariant: 0
          sourceKey: vanderValk2018mtDNA
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1038/s41598-018-24497-7
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5917027/
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
        - referenceId: ref-ea1fc871-c2d4-8d94-aabc-acd69457822b
          metadataVariant: 0
          sourceKey: robbins2023gorillalifehistory
          usage:
            licenseAppliesTo: Article text paraphrased for this claim. No figures, tables, or supplementary material are reproduced.
            stableId: doi:10.1002/ajpa.24792
            accessedAt: 2026-09-28
            locator: Methods §2.1, Bwindi and Virunga study records; Results §3, age of first parturition, paragraph 1; Discussion §4.1.
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://pure.mpg.de/pubman/item/item_3517901_4
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
            - scope
            - attribution
    facets:
      morphology:
        status: not-assessed
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
              - robbins2023gorillalifehistory
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/1
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - robbins2016
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
      evolution:
        status: partially-supported
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
            sourceIds:
              - vanderValk2018mtDNA
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            sourceIds:
              - robbins2016
            locator: Methods, Study Sites, mountain gorilla populations paragraph; Fig. 1 caption.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/textZh
            sourceIds:
              - vanderValk2018mtDNA
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/1/lifeStatus
            translationStatus: translated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/1
      fossil:
        status: not-assessed
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/fossil/gaps/0
      conservation:
        status: partially-supported
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/textZh
            sourceIds:
              - vanderValk2018mtDNA
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
            translationStatus: translated
            originalLanguage: en
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

# Gorilla beringei

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
Virunga 和 Bwindi 的山地大猩猩雌性首次产仔年龄估计；不代表 Grauer 大猩猩。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Female age-at-first-parturition estimates for mountain gorillas at Virunga and Bwindi; not estimates for Grauer's gorillas.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
比较 Grauer 大猩猩与山地大猩猩的线粒体基因组；本文所引多样性结论特指 Grauer 大猩猩样本和该研究模型。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Mitochondrial-genome comparison of Grauer's and mountain gorillas; the cited diversity result is limited to Grauer's samples and the study model.
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
Exact COL26.8 accepted species usage verified in the pinned search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted usage 3H3C3 only. The claim concerns the G. b. beringei populations named in the cited article and does not reassess COL taxonomy or transfer results to G. b. graueri.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Existing dossier evidence covers wild Grauer's gorilla and habituated mountain-gorilla populations; this life-history claim is limited to free-ranging G. b. beringei females at Bwindi and Virunga, with the study's date ranges and sample sizes retained.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 3H3C3; exact scientific name Gorilla beringei Matschie, 1903; rank species; status accepted; sourceDatasetId 2144; hierarchy node and parentId chain from Gorilla (62SMC) through Primates (3W7).
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted COL26.8 usage, authorship, rank, status, dataset and parent classification.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text under the article's Creative Commons Attribution License; separately credited third-party material is excluded.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods, Study Sites, paragraph on mountain gorilla populations and field observations: two populations approximately 30 km apart at nearest point (study groups approximately 45 km apart), separated by cultivated/developed land; three Karisoke groups observed 2006–2008 and six additional groups through 2014; one Bwindi group observed for 13 years. Fig. 1 caption identifies the study sites as Bwindi Impenetrable National Park, Uganda, and Volcanoes National Park, Rwanda. Copyright/license statement identifies the article as CC BY.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary observational comparison of habituated wild gorillas at five field sites; the cited population and effort details concern the mountain gorilla subspecies at Bwindi and Karisoke/Volcanoes only. Paraphrased article text; no figures or third-party material reused.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Robbins MM, Ando C, Fawcett KA, Grueter CC, Hedwig D, Iwata Y, et al. (2016). Behavioral Variation in Gorillas: Evidence of Potential Cultural Traits. PLoS ONE 11(9): e0160483. https://doi.org/10.1371/journal.pone.0160483. Paraphrased; changes made.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article text only; claims are paraphrased. No article figures, maps, supplementary files, sequence data, or third-party materials are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Methods, Sample collection and Mitochondrial genome analyses; Results, Temporal changes in genetic diversity and Geographic distribution of genetic diversity within Grauer’s gorilla; Discussion; Conclusions; Acknowledgements; Data Availability Statement.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
van der Valk T et al. (2018). Significant loss of mitochondrial diversity within the last century due to extinction of peripheral populations in eastern gorillas. Scientific Reports 8:6551. https://doi.org/10.1038/s41598-018-24497-7. CC BY 4.0. Claims are paraphrased; no figures or third-party materials are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Comparative study of complete mitochondrial genomes from Grauer’s gorillas (Gorilla beringei graueri) and mountain gorillas (G. b. beringei), using historical museum specimens and modern samples. The Grauer’s dataset included 68 historical individuals collected 1910–1980 (median 1950) and 29 unique modern individuals; newly collected modern fecal samples were obtained in 2014 from Nkuba in Walikale territory and the high-altitude sector of Kahuzi-Biega National Park, Democratic Republic of the Congo. The authors acknowledge ICCN and the Dian Fossey Gorilla Fund for permission and logistical support for DRC research; no permit number or standalone ethics approval is stated in the article. Claims are limited to mitochondrial markers, the study samples, and its models; the authors declare no competing interests.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
The comparative article reports female life-history data from one western lowland gorilla population and two mountain gorilla populations. This dossier claim concerns first-parturition estimates for habituated, free-ranging G. b. beringei females at Virunga and Bwindi only; it does not represent all Gorilla beringei populations.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/attribution -->
Robbins MM, Akantorana M, Arinaitwe J, Breuer T, Manguette M, McFarlin S, Meder A, Parnell R, Richardson JL, Stephan C, Stokes EJ, Stoinski TS, Vecellio V, Robbins AM (2023). Comparative life history patterns of female gorillas. American Journal of Biological Anthropology 181(4):564–574. https://doi.org/10.1002/ajpa.24792. CC BY 4.0. Claim paraphrased; no figures, tables, or supplementary data reproduced.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No morphology or diagnostic evidence was assessed in this batch.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Among female mountain gorillas identified as Gorilla beringei beringei, mean age at first parturition was 10.1 ± 1.7 years (n = 56) in the Virungas and 10.5 ± 1.3 years (n = 10) in Bwindi; the pairwise comparison was not statistically significant (p = 0.55). This result does not demonstrate equivalence between the two populations and does not cover Grauer's gorilla or every G. beringei population.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
在被鉴定为山地大猩猩 Gorilla beringei beringei 的雌性样本中，Virunga 的初次产仔平均年龄为 10.1 ± 1.7 岁（n = 56），Bwindi 为 10.5 ± 1.3 岁（n = 10）；两地的配对比较未达到统计显著（p = 0.55）。该结果不能证明两个种群等同，也不涵盖格劳尔大猩猩或 G. beringei 的所有种群。
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Results §3, first-parturition paragraph (Virunga and Bwindi means, sample sizes, and pairwise p value); Methods §2.1 for study sites and habituated population records.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Virunga Massif/Volcanoes National Park, Rwanda (demographic records September 1967–December 2017; first-parturition subset n = 56) and Bwindi Impenetrable National Park, Uganda (records April 1993–May 2020; subset n = 10). Article published in 2023.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Free-ranging, habituated mountain gorillas observed in wild populations. No captive animals are included in this claim; the study samples only G. b. beringei at these two sites.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The first-parturition comparison covers two habituated mountain-gorilla populations and small, unequal first-birth samples; p = 0.55 is not evidence of population equivalence.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
This result does not characterize Grauer's gorilla, other Gorilla beringei populations, or the species-wide ranges of reproduction, development, lifespan, and survival.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The comparative behavioral study included mountain gorilla groups from two sites: three groups at Karisoke Research Center in Volcanoes National Park, Rwanda, followed regularly for 2006–2008, with six additional groups observed after group fissions and new group formations through 2014; one group in Bwindi Impenetrable National Park, Uganda, was observed for 13 years. The authors report the nearest points of the two populations as about 30 km apart and study groups about 45 km apart, with cultivated and developed land between them. These study records do not estimate species-wide behavioral frequencies or establish social learning as the cause of variation.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Methods, Study Sites, mountain gorilla populations paragraph; Fig. 1 caption; Discussion, paragraphs on observational inference and further research.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Habituated wild groups at Karisoke/Volcanoes National Park, Rwanda, and Bwindi Impenetrable National Park, Uganda; Rwanda observations began 2006–2008 with additional groups followed through 2014, while Bwindi group observation duration was 13 years (the paper does not state exact calendar endpoints for that duration).
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild, free-ranging, habituated mountain gorilla groups; no captive or domesticated individuals included.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Evidence is restricted to behavioral field observations at two mountain gorilla study areas and does not inventory diet, habitat use, species-wide interactions or all populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
The study discusses potential cultural variants; it does not demonstrate that social learning caused them.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This is one complete-mitochondrial-genome study with finite historical and modern samples; it does not establish nuclear-genome change, genome-wide selection, or a complete evolutionary history across all Gorilla beringei populations.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
In the assembled complete-mitochondrial-genome dataset, Grauer’s gorillas had 20 haplotypes in historical samples and 11 in modern samples, with significantly lower modern haplotype and nucleotide diversity (P = 0.0169 and 0.0062); the difference was not explained by sample-size imbalance. Historical samples came from 68 individuals collected in 1910–1980 (median 1950), compared with 29 unique modern individuals. The authors interpreted the temporal loss as attributable to peripheral-population extirpation rather than a diversity decrease within the currently sampled range. This is mitochondrial evidence for the study’s samples and model, not a nuclear-genome or all-population result.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
在本研究汇总的完整线粒体基因组数据中，格劳尔大猩猩历史样本和现代样本分别记录到 20 与 11 种单倍型，现代样本的单倍型与核苷酸多样性显著较低（P = 0.0169 与 0.0062）；样本量不均衡不能解释这一差异。历史样本来自 68 个体，采集于 1910–1980 年（中位数 1950 年）；现代样本为 29 个不重复个体。作者将时间差异解释为外围种群局部灭绝所致，而不是当前采样范围内多样性下降。这是针对研究样本和模型的线粒体证据，并非核基因组或全部种群的结论。
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Methods, Sample collection and Mitochondrial genome analyses; Results, Temporal changes in genetic diversity; Figure 2; Tables S4–S5; Discussion.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Grauer’s gorilla historical museum samples collected 1910–1980 (median 1950) compared with 29 unique modern mitochondrial-genome individuals; the new modern fecal collection occurred in 2014 at Nkuba and Kahuzi-Biega in the DRC, combined with previously published genomes.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Historical museum specimens and modern fecal samples from free-ranging groups; the article does not assign a living/captive status to every historical specimen. No captive population is used as the Grauer’s temporal comparison.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The paper documents study populations at Bwindi Impenetrable National Park in Uganda and Volcanoes National Park in Rwanda, but the study-site records do not constitute a complete range assessment.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Two field-study locations only: Bwindi Impenetrable National Park, Uganda, and Volcanoes National Park/Karisoke, Rwanda; observation periods reported in the study-sites methods, spanning 2006 through 2014 at Karisoke and a 13-year observation duration at Bwindi.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild, free-ranging mountain gorillas in study groups; these observations do not document all native or other occurrence areas.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/text -->
Historical Grauer’s gorilla museum samples in this study included sites inside and outside the range the authors estimated as current in 2018; modern fecal sampling in 2014 was limited to Nkuba and the high-altitude sector of Kahuzi-Biega National Park. The paper describes former peripheral populations around Baraka Sibatwa and Lubero–Butembo as extinct by 2018, while noting that the exact geographic origins of many previously published sequences were uncertain. These temporal study localities and interpretations do not constitute a complete current range inventory.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/textZh -->
本研究中的格劳尔大猩猩历史博物馆样本涵盖论文作者在 2018 年估计的现今分布范围内外地点；2014 年现代粪便采样仅来自 Nkuba 和卡胡兹—比埃加国家公园高海拔区域。论文称 Baraka Sibatwa 与 Lubero—Butembo 周边的外围种群截至 2018 年已灭绝，同时指出许多既有发表序列的确切地理来源不确定。这些跨时期研究地点与解释并不构成当前完整分布区名录。
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/locator -->
Methods, Sample collection; Results, Geographic distribution of genetic diversity within Grauer’s gorilla; Figure 3 and caption.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/placeTimeScope -->
Historical museum localities and 2014 modern fecal samples from Nkuba and Kahuzi-Biega National Park, Democratic Republic of the Congo; distribution statements are those made by the 2018 study.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/1/lifeStatus -->
Historical museum specimens and non-invasive fecal samples from free-ranging populations; published sequence provenance is sometimes uncertain.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The source concerns two mountain gorilla populations and is not a range-wide distribution survey; geographic precision and native-range boundaries remain unassessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/1 -->
Modern field sampling in this study covered only two DRC regions, and many published sequence origins were uncertain; post-2018 occupancy and a complete current range remain unassessed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil search or fossil taxon evidence was assessed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The genetic evidence and recommendation do not provide a current formal conservation category, present-day abundance, range-wide population trend, or outcome of later protection actions.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
Among historical Grauer’s gorilla samples, unique mitochondrial haplotypes were concentrated in peripheral locations outside the distribution considered current by the 2018 paper. The paper describes the southern Baraka Sibatwa forest and northern populations around Lubero and Butembo as extinct at that time and reports eight unique haplotypes across those two peripheral regions. The authors recommend preserving remaining peripheral populations and habitat connectivity to maintain genetic diversity; this is a study-specific genetic inference and recommendation, not a current formal status or abundance assessment.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
在格劳尔大猩猩历史样本中，特有线粒体单倍型主要集中于 2018 年论文所认定的当时分布范围之外的外围地点。论文称最南端的 Baraka Sibatwa 森林和最北端 Lubero—Butembo 一带种群在当时已灭绝，并报告这两个外围地区合计有 8 种独特单倍型。作者建议保护仍存续的外围种群并改善栖息地连通性，以维持遗传多样性；这是针对该研究的遗传推论和建议，并非当前正式保育等级或数量评估。
<!-- /evo:text -->

## conservation / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/locator -->
Results, Geographic distribution of genetic diversity within Grauer’s gorilla; Figure 3; Discussion, Extirpation of peripheral populations is the main cause for the loss of genetic diversity; Conclusions.
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Historical Grauer’s gorilla samples and the distribution interpreted by the authors in 2018; peripheral sites include Baraka Sibatwa forest and areas around Lubero and Butembo in the DRC.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Historical museum specimens and modern fecal samples from free-ranging populations; the stated conservation recommendation concerns extant peripheral populations, not captive animals.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The dossier draws on a bounded mitochondrial-genome study, two mountain-gorilla behavioral field sites, and one comparative life-history study; these data do not form a species-wide synthesis.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Life history is now partially supported for two G. b. beringei populations. Morphology and fossil evidence remain unassessed; ecology, evolution, distribution, and conservation are locally or study-limited partial facets. No systematic seven-facet literature search or independent external expert review has been completed.
<!-- /evo:text -->
