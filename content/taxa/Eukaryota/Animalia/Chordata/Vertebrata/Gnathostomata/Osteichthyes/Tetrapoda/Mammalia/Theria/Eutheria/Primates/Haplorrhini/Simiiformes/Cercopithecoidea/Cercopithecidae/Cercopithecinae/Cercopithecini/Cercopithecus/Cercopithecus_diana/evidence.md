---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cercopithecus diana (Linnaeus, 1758)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 戴安娜猴
      en: Diana monkey
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
    sources:
      referenceBindings:
        - referenceId: ref-c1e702b9-a975-8eb7-a892-3d443c05f4f3
          metadataVariant: 0
          sourceKey: stephan2016
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5XKC5
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
    scientificName: Cercopithecus diana (Linnaeus, 1758)
    authorship: (Linnaeus, 1758)
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
      - id: 4X9
        scientificName: Cercopithecoidea Gray, 1821
        authorship: Gray, 1821
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 7X9
        scientificName: Cercopithecidae Gray, 1821
        authorship: Gray, 1821
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: JB3
        scientificName: Cercopithecinae Gray, 1821
        authorship: Gray, 1821
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: KPP
        scientificName: Cercopithecini
        authorship: null
        rank: tribe
        status: accepted
        sourceDatasetId: "2144"
      - id: 3L2F
        scientificName: Cercopithecus Linnaeus, 1758
        authorship: Linnaeus, 1758
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 5XKC5
        scientificName: Cercopithecus diana (Linnaeus, 1758)
        authorship: (Linnaeus, 1758)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated or captive populations were not studied or inferred.
      fossil: Fossil occurrence and geological age were not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5XKC5
            stableId: col:5XKC5@COL26.8
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5XKC5. https://doi.org/10.48580/dgywk
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
            - scope
            - rightsHolder
            - licenseVersion
            - licenseUrl
            - licenseAppliesTo
            - attribution
        - referenceId: ref-3b5e87ff-93a4-8be5-aa42-71fdd153b703
          metadataVariant: 0
          sourceKey: stephan2016
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1098/rsos.150639
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            rightsEvidenceUrl: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC4785987/fullTextXML
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
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAssessment
            - licenseAppliesTo
            - attribution
            - scope
            - rightsEvidenceUrl
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage 5XKC5; Europe PMC PMCID PMC4785987; DOI 10.1098/rsos.150639.
      inclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/inclusionCriteria
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
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
            sourceIds:
              - stephan2016
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
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
              - stephan2016
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
      evolution:
        status: not-assessed
        claims: []
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

# Cercopithecus diana

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
Taï 森林（2013 年 8—12 月）与 Tiwai 岛（2014 年 1—3 月）的野生猴群播放实验；结论限于研究群体和实验声音。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Playback experiments with wild groups at Taï Forest (August–December 2013) and Tiwai Island (January–March 2014); findings are limited to those groups and stimuli.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/title -->
Catalogue of Life COL26.8 · source 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank and parent classification; not biological evidence.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted usage 5XKC5 was verified in the release-pinned search registry for scientific name, authorship, species rank, accepted status, and sourceDatasetId 2144; every accepted parent node was followed through the release-pinned hierarchy registry to its root.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The accepted COL26.8 nomenclatural usage is Cercopithecus diana (Linnaeus, 1758). The biological article studies the Diana monkey subspecies C. d. diana and its sampled wild populations; it is not used to establish COL identity or full species-concept circumscription.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Biological observations refer to wild adult male Diana monkeys at Taï Forest, Côte d’Ivoire, and Tiwai Island, Sierra Leone.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted usage 5XKC5: verbatim name, authorship, species rank, accepted status and sourceDatasetId 2144; full accepted parent path resolved to registry root.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The article text as stated in the article's item-level XML license notice. Separately credited material is excluded; no figures, recordings, or underlying data are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Material and methods > Subjects and playback stimuli, paragraph beginning “We tested different groups of Diana monkeys”; Results > Call-related parameters, paragraph beginning “To eagle alarm calls, responses showed frequency transitions”; Discussion.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Stephan C, Zuberbühler K. (2016). Social familiarity affects Diana monkey (Cercopithecus diana diana) alarm call responses in habitat-specific ways. Royal Society Open Science 3(2):150639. https://doi.org/10.1098/rsos.150639. Claims paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Primary playback study of wild Diana monkey alarm-call responses at two West African populations. Claims are paraphrased; no figures, recordings, or third-party material are reused.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 identity and full parent chain; targeted review of one primary playback study with item-level license evidence.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Resolved the COL usage and each parent by stable ID in the release-pinned search and hierarchy registry. Reviewed the article abstract, methods, results, discussion, item-level XML license notice, and associated metadata. This is not a systematic search across the biological literature or facet-specific databases.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / inclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/inclusionCriteria -->
Exact accepted COL identity and statements explicitly reported for Diana monkey callers, receivers, study sites, and playback conditions in the cited primary paper.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only joins; claims about other species; range-wide extrapolation from two study populations; claims about unstudied behaviors or conditions; unassessed morphology, reproduction, phylogeny, fossil record, distribution, and conservation facets.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The selected playback study does not assess anatomical morphology or diagnostic characters.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The playback study tested whether male Diana monkeys distinguished familiar from unfamiliar male callers during responses to predator-specific alarm calls at Taï Forest and Tiwai Island. At both sites, acoustic features of responses varied with caller familiarity, but the direction of the familiar-versus-unfamiliar pattern differed between sites. The authors also report that familiarity affected leopard-induced alarms at Taï but not at Tiwai.
<!-- /evo:text -->

## lifeHistory / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/locator -->
Abstract; Material and methods > Subjects and playback stimuli, paragraph beginning ‘We tested different groups of Diana monkeys’; Results > Call-related parameters, paragraph beginning ‘To eagle alarm calls, responses showed frequency transitions’; Discussion
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Wild Diana monkeys at Taï Forest, Côte d’Ivoire (N=20, August to December 2013), and Tiwai Island, Sierra Leone (N=23, January to March 2014); playback observations and conclusions are restricted to these two study populations.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild adult male Diana monkeys and their alarm-call responses; no captive or domesticated animals are included. The study does not assess development, reproduction, or lifespan.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The study addresses one adult social vocal behavior; development, reproduction, survival, and lifespan were not assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The study examined male-to-male responses to familiar and unfamiliar conspecific alarm callers that signal leopard or eagle stimuli. Its site-specific playback results support a bounded observation about social signaling and predator-associated alarm contexts, not a population-wide measure of predation risk or a complete interaction network.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
Abstract; Introduction; Material and methods > Subjects and playback stimuli, paragraph beginning ‘We tested different groups of Diana monkeys’; Results > Call-related parameters, paragraph beginning ‘To eagle alarm calls, responses showed frequency transitions’; Discussion
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Playback experiments with wild Diana monkeys at Taï Forest, Côte d’Ivoire (August to December 2013), and Tiwai Island, Sierra Leone (January to March 2014); conclusions are restricted to those studied populations and experimental stimuli.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild male callers and receivers in the study populations; no captive or domesticated animals are included.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Two experimental study populations and selected leopard/eagle playback stimuli do not establish a complete interaction network, natural predation rates, range-wide ecology, or seasonality.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
No phylogenetic placement, trait evolution, or divergence-time evidence was assessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Two study locations are not a range-wide inventory and do not establish native-range boundaries or change through time.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed; no fossil-presence or fossil-absence conclusion is made.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current formal conservation assessment, status, trend, or population-risk analysis was reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only bounded behavioral and social-signaling findings from one two-population playback study were assessed; five facets remain not-assessed and the two assessed facets are partial.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The study concerns C. diana diana and does not by itself establish full biological circumscription for the COL accepted species usage.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No comprehensive multi-source search or independent expert review has been completed.
<!-- /evo:text -->
