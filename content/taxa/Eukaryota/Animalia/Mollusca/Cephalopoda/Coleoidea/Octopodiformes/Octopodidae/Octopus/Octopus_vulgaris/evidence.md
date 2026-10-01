---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Octopus vulgaris Cuvier, 1797
    authorship: Cuvier, 1797
    rank: species
    sourceDatasetId: "1130"
    checkedAt: 2026-09-26
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
      - id: M2L
        scientificName: Mollusca
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NF3H
        scientificName: Cephalopoda Cuvier, 1795
        authorship: Cuvier, 1795
        rank: class
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NF54
        scientificName: Coleoidea Bather, 1888
        authorship: Bather, 1888
        rank: subclass
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NVY5
        scientificName: Octopodiformes Berthold & Engeser, 1987
        authorship: Berthold & Engeser, 1987
        rank: superorder
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NK44
        scientificName: Octopodidae A. d'Orbigny, 1839
        authorship: A. d'Orbigny, 1839
        rank: family
        status: accepted
        sourceDatasetId: "1130"
      - id: 7PB4N
        scientificName: Octopus Cuvier, 1797
        authorship: Cuvier, 1797
        rank: genus
        status: accepted
        sourceDatasetId: "1130"
      - id: 48KQY
        scientificName: Octopus vulgaris Cuvier, 1797
        authorship: Cuvier, 1797
        rank: species
        status: accepted
        sourceDatasetId: "1130"
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
      domesticated: The source does not assess domestication or a domesticated population.
      captive:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/captive
      fossil: Fossil occurrence and geological age were not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/48KQY
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:48KQY@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-25
            locator: Accepted species usage 48KQY; exact name, authorship, rank, status, sourceDatasetId, and full accepted parent chain.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 48KQY. https://doi.org/10.48580/dgywk.
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
        - referenceId: ref-69bf8a17-5da1-8867-a032-d50b96e7c606
          metadataVariant: 0
          sourceKey: casalini2020octopus
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1038/s41598-020-72151-y
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
            accessedAt: 2026-09-25
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
        - referenceId: ref-abb2343c-f650-8519-a3d6-e6da33eb4ae1
          metadataVariant: 0
          sourceKey: deluca2016octopuspopulation
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0149496
            accessedAt: 2026-09-26
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0149496
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
    systematicSearch:
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 ChecklistBank dataset 316115 usage 48KQY; DOI 10.1038/s41598-020-72151-y.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      date: 2026-09-25
      searcher: Evo source audit
    facets:
      morphology:
        status: not-assessed
        claims: []
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
            translationStatus: translated
            originalLanguage: en
            sourceIds:
              - casalini2020octopus
            locator: Abstract; Results, “Regarding egg clusters”; Table 2; Methods, Animals and feeding-group design.
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
            sourceIds:
              - deluca2016octopuspopulation
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

# Octopus vulgaris

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact accepted COL26.8 usage verified in the release-pinned ChecklistBank search registry, then followed through every accepted parent node in the pinned hierarchy registry.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Exact accepted COL26.8 species usage 48KQY. The reproductive evidence concerns wild-caught sub-adults subsequently maintained as captive broodstock in a recirculating aquaculture system; it does not estimate wild fecundity.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Wild sub-adults were captured near Gallipoli, Italy, as broodstock founders; the measured reproductive result is from captivity.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / captive

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/captive -->
Captive broodstock were maintained in a recirculating aquaculture system and assigned mixed-fish or mixed-crustacean diets.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1130
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The full-text article license block states Creative Commons Attribution 4.0 International and © The Author(s) 2020; the article page identifies an author correction published 2022-08-01.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text under the item-level CC BY 4.0 notice; separately credited third-party content is excluded. Claim paraphrased; no figure or table is reproduced.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Results, “Regarding egg clusters”; Table 2; Methods, Animals and feeding-group design; item-level full-text license statement.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Casalini A, Roncarati A, Emmanuele P, et al. (2020). Evaluation of reproductive performances of the common octopus (Octopus vulgaris) reared in water recirculation systems and fed different diets. Scientific Reports 10:15261. https://doi.org/10.1038/s41598-020-72151-y. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Egg-cluster output from four female captive broodstock per diet in a recirculating system; broodstock were wild-caught sub-adults, so this is not a wild fecundity estimate.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article content covered by its license; separately credited third-party material remains governed by its credit line. This record paraphrases article text and reproduces no figures or tables.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Abstract; Materials and Methods > Sampling; Results > Genetic diversity and population structure; Discussion; Table 1 and Fig. 2.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
De Luca D, Catanese G, Procaccini G, Fiorito G (2016). Octopus vulgaris (Cuvier, 1797) in the Mediterranean Sea: Genetic Diversity and Population Structure. PLoS ONE 11(2):e0149496. https://doi.org/10.1371/journal.pone.0149496. CC BY 4.0. Claim paraphrased; no figures or tables reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Population-genetic study of 193 adult octopuses from seven Mediterranean localities and one nearby Atlantic locality, using 13 microsatellite loci and COI barcoding. Population differentiation applies to these sampled localities and markers, not to all populations or the debated O. vulgaris species complex.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and focused review of one primary captive-broodstock diet experiment on reproductive performance; not a complete species life-history or seven-facet review.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Verified the accepted usage and each accepted parent node in the pinned COL26.8 registry; reviewed broodstock origin, collection location, captivity and diet design, sample size, egg-cluster result, article version/correction, and item-level license notice.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Primary study directly naming O. vulgaris and reporting reproductive outcomes for defined broodstock, diet groups, and sample sizes.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Wild fecundity, natural diet effects, global reproductive rates, distribution, complete ecological relationships, morphology, evolution, fossils, and conservation claims not established by this captive experiment.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The diet experiment does not assess diagnostic morphology or species-level anatomical variation.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
In a captive broodstock experiment, females fed a mixed-crustacean diet produced 78.1±6.5 egg clusters per kg body weight, compared with 31.1±13.3 in the mixed-fish diet group; each diet group contained four females. The broodstock originated as wild sub-adults caught in the Ionian Sea near Gallipoli, Italy, and were then kept in a recirculating aquaculture system in Cesenatico. This diet-group result describes captive reproduction, not fecundity in wild populations.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
在一项圈养亲本实验中，混合甲壳类饲料组雌性每千克体重产卵团数为 78.1±6.5，混合鱼类饲料组为 31.1±13.3；每种饲料组均有四只雌性。亲本为从意大利加利波利附近爱奥尼亚海捕获的野生亚成体，之后在切塞纳蒂科的循环水养殖系统中饲养。该饲料组结果描述的是圈养繁殖，并非野外种群的繁殖力。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Wild sub-adults were caught at the end of February in the Ionian Sea near Gallipoli, Puglia, Italy, and transferred to a recirculating aquaculture system in Cesenatico. The article does not specify the collection/trial calendar year.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild-caught sub-adults became captive broodstock; the reproductive outcome was measured under managed feeding in a recirculating aquaculture system.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
A single captive broodstock comparison with four females per diet does not establish wild fecundity, lifetime reproductive output, natural diet effects, or geographic variation.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Captive feeding groups do not establish natural diet, habitat use, or field ecological interactions.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
In a study of 193 adult Octopus vulgaris collected by local fishers at seven Mediterranean localities and one nearby Atlantic locality, analysis of 13 microsatellite loci distinguished the Ria Formosa Atlantic sample and the Strait of Messina sample from the other sampled groups; the authors reported 23 private alleles in Ria Formosa versus 2–7 in each Mediterranean sample. This is population structure among these samples, not a species-wide phylogeny or a resolution of the debated O. vulgaris complex.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
一项研究分析了当地渔民在地中海七个地点及附近大西洋一个地点采集的 193 只成年普通章鱼。对 13 个微卫星位点的分析显示，葡萄牙里亚福尔摩萨的大西洋样本和墨西拿海峡样本与其他受采样群体有所区分；作者报告里亚福尔摩萨样本有 23 个私有等位基因，而各地中海样本为 2–7 个。该结果描述的是这些样本之间的种群结构，不是物种范围内的系统发育结论，也没有解决 O. vulgaris 复合群的分类争议。
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Abstract; Materials and Methods > Sampling; Results > DNA Barcoding and Genetic diversity; Discussion; Table 1 and Fig. 2.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Seven localities across the Mediterranean Sea and one nearby Atlantic locality (Ria Formosa, Portugal); the article gives the Spanish sample as collected during MEDITS_ES_2014 but does not report collection dates for all samples. Adults were caught near the coast by local fishers.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild-caught adult specimens were received as preserved or freshly dead material; no live animals were used in the study.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
This marker and locality sample does not establish a range-wide species phylogeny, resolve the debated Octopus vulgaris complex, or infer the timing or cause of population differentiation.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Collection near Gallipoli is not a geographic range inventory.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
The study does not assess fossil occurrences or geological age.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The captive trial does not establish wild population trends, threats, or a conservation assessment.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Two focused primary sources support bounded claims in lifeHistory and evolution only.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The other five scientific facets remain explicitly not assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent external expert review has been completed.
<!-- /evo:text -->
