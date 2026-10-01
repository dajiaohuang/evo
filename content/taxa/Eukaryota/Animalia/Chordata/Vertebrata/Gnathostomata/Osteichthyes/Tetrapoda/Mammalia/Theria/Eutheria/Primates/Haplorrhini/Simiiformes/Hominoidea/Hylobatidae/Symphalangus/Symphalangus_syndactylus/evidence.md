---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Symphalangus syndactylus (Raffles, 1821)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 合趾猿
      en: Siamang
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
        - referenceId: ref-0db15fcc-d070-8c31-aa6b-d6eca85bedd2
          metadataVariant: 0
          sourceKey: sariyati2024siamangmtDNA
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
            url: https://www.checklistbank.org/dataset/316115/taxon/7B78J
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
    scientificName: Symphalangus syndactylus (Raffles, 1821)
    authorship: (Raffles, 1821)
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
      - id: B9K
        scientificName: Hylobatidae Gray, 1871
        authorship: Gray, 1871
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 645SV
        scientificName: Symphalangus Gloger, 1841
        authorship: Gloger, 1841
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 7B78J
        scientificName: Symphalangus syndactylus (Raffles, 1821)
        authorship: (Raffles, 1821)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication was not examined.
      fossil: Fossil evidence was not examined.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 10
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/7B78J
            stableId: col:7B78J@COL26.8
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
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 7B78J. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-2dba8614-0c10-897f-ac9a-35bf7dc8a644
          metadataVariant: 0
          sourceKey: sariyati2024siamangmtDNA
          usage:
            licenseAppliesTo: Article text; claims are paraphrased. No figures, tables, images, or supplementary data are reproduced.
            stableId: doi:10.3897/BDJ.12.e120314
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: item-level-verified
            rightsEvidenceUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC11069032/
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
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
            - rightsEvidenceUrl
            - rightsEvidenceLocator
            - licenseAppliesTo
            - attribution
            - scope
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: Pinned COL26.8 dataset 316115 usage 7B78J; Sariyati et al. 2024, DOI 10.3897/BDJ.12.e120314.
      inclusionCriteria: Exact accepted COL identity and primary article results directly concerning Symphalangus syndactylus.
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
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - sariyati2024siamangmtDNA
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

# Symphalangus syndactylus

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
约 348 bp 线粒体 D-loop；6 份新样本来自马来半岛 Fraser’s Hill 和 Genting Highlands，其余包含公开数据库序列。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Approximately 348 bp of mitochondrial D-loop; six new samples came from Fraser’s Hill and Genting Highlands in Peninsular Malaysia, alongside published database sequences.
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
Exact pinned COL26.8 accepted usage 7B78J verified for verbatim name, authorship, species rank, accepted status and sourceDatasetId 2144; every accepted parent node was followed in the pinned hierarchy registry to the root.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
COL26.8 accepted species usage 7B78J only. The biological evidence concerns one mitochondrial-marker study and its sampled sequences; it does not validate the article authors’ subspecies classification as a complete taxonomic consensus.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The article describes collection from Peninsular Malaysian populations but also acknowledges institutional sample contributions; specimen-by-specimen captive or wild provenance is not fully resolved here.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist 2144
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 7B78J; exact name, authorship, species rank, accepted status, sourceDatasetId 2144; complete accepted parent chain resolved to the root.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 nomenclatural identity and accepted classification only.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Materials and methods, Sample collection and Data resources; Results, Maximum Likelihood tree and Bayesian Inference tree; Figures 4–5; Conclusions.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Sariyati NH, Abdul-Latiff MAB, Aifat NR, Mohd-Ridwan AR, Osman NA, Karuppannan KV, Chan E, Md-Zain BM (2024). Molecular phylogeny confirms the subspecies delineation of the Malayan Siamang and the Sumatran Siamang based on the hypervariable region of mitochondrial DNA. Biodiversity Data Journal 12:e120314. https://doi.org/10.3897/BDJ.12.e120314. CC BY 4.0. Claim paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Single-marker mitochondrial phylogeny using newly collected Peninsular Malaysian siamang faecal samples and published GenBank sequences. Claims are paraphrased; no figures, tables, images, or sequence data are reproduced.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Exact COL26.8 accepted usage, complete accepted parent chain, current indexed dossier shards and one molecular-phylogeny primary article.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Resolved the taxon by stable ID in the pinned COL26.8 search and hierarchy shards. Audited all current compressed dossier shards and their hashes for duplicate IDs and normalized names. Reviewed the article abstract, sample methods, data resources, regional clade results, conclusions, and item-level license. No comprehensive search across other biological facets was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only matches, unsupported range-wide or genome-wide generalization, converting one mitochondrial genealogy into a species-level taxonomic revision, and unassessed morphology, life history, ecology, fossils, or current conservation status.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
No taxon-specific morphology or diagnosis was assessed.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No reproductive, developmental, lifespan, or behavioral evidence was assessed.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No systematic habitat, diet, or species-interaction evidence was assessed.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Using approximately 348 bp of mitochondrial D-loop sequence, Sariyati et al. recovered separate Peninsular Malaysian and Sumatran siamang clades across their phylogenetic analyses. In the maximum-likelihood tree, bootstrap support was 98% for the Peninsular clade and 83% for the Sumatran clade; Bayesian posterior probabilities were 1.00 and 0.98, respectively. The comparison included six newly collected Peninsular Malaysian siamang faecal samples and published GenBank sequences. This is one mitochondrial marker study, not genome-wide evidence or a range-wide population-structure assessment.
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Abstract; Materials and methods, Sample collection and Data resources; Results, Maximum Likelihood tree and Bayesian Inference tree; Figures 4–5; Conclusions.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The article analyzes approximately 348 bp of mitochondrial D-loop sequences, including six newly collected Symphalangus syndactylus faecal samples from Fraser's Hill and Genting Highlands in Peninsular Malaysia plus published GenBank sequences representing Sumatran siamangs and other hylobatids. Regional clade support varies by phylogenetic method; this does not establish genome-wide structure or a species-wide subspecies consensus.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
The article describes new faecal samples from Peninsular Malaysian populations and also acknowledges contributions from Zoo Melaka and Genting Nature Adventure; provenance is not assigned to every comparison sequence. No captive-versus-wild biological comparison is claimed.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The evidence is a single mitochondrial D-loop marker study with limited regional sampling; nuclear-genome evidence, broader population coverage, and independent taxonomic review remain unassessed.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The sequence study does not establish a complete modern distribution or current site occupancy.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil or paleontological search was performed; no fossil presence or absence is claimed.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current formal conservation assessment, population trend, or threat category was verified.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One regional mitochondrial-marker study supports only a bounded evolutionary claim.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Six facets remain not assessed; the evolutionary claim is not genome-wide, range-wide, or independently reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A systematic multi-source search and expert review are incomplete.
<!-- /evo:text -->
