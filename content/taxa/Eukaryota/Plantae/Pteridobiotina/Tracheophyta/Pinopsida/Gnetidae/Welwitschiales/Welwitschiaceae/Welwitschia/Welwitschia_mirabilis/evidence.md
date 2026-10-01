---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Welwitschia mirabilis Hook.f.
    rank: species
    sourceDatasetId: "2004"
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
      - id: P
        scientificName: Plantae
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: null
      - id: CMQ8S
        scientificName: Pteridobiotina Britton & Brown
        authorship: Britton & Brown
        rank: subkingdom
        status: accepted
        sourceDatasetId: null
      - id: TP
        scientificName: Tracheophyta
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: null
      - id: C7ZVJ
        scientificName: Pinopsida Burnett
        authorship: Burnett
        rank: class
        status: accepted
        sourceDatasetId: "2004"
      - id: C7CGK
        scientificName: Gnetidae Pax
        authorship: Pax
        rank: subclass
        status: accepted
        sourceDatasetId: "2004"
      - id: C8NGJ
        scientificName: Welwitschiales Skottsb. ex Reveal
        authorship: Skottsb. ex Reveal
        rank: order
        status: accepted
        sourceDatasetId: "2004"
      - id: C8MQF
        scientificName: Welwitschiaceae Caruel
        authorship: Caruel
        rank: family
        status: accepted
        sourceDatasetId: "2004"
      - id: 8W4P5
        scientificName: Welwitschia Hook.f.
        authorship: Hook.f.
        rank: genus
        status: accepted
        sourceDatasetId: "2004"
      - id: 5BX2Q
        scientificName: Welwitschia mirabilis Hook.f.
        authorship: Hook.f.
        rank: species
        status: accepted
        sourceDatasetId: "2004"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication has not been assessed; the ex-situ garden specimen is not treated as evidence of domestication.
      fossil: Fossil occurrence and geological age have not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/5BX2Q
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:5BX2Q@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 5BX2Q. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-a89d23f9-69f5-85f8-a811-88305ba215c8
          metadataVariant: 0
          sourceKey: wan2021
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1038/s41467-021-24528-4
            accessedAt: 2026-09-28
            locator: Methods, Plant materials; Results, Genome sequencing and annotation; publisher Rights and permissions statement.
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
            - licenseEvidenceUrl
            - licenseEvidenceLocator
            - licenseAppliesTo
            - attribution
    facets:
      morphology:
        status: not-assessed
      lifeHistory:
        status: not-assessed
      ecology:
        status: not-assessed
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            sourceIds:
              - wan2021
            locator: Methods, Plant materials; Results, Genome sequencing and annotation.
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/2
      distribution:
        status: not-assessed
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
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
---

# Welwitschia mirabilis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to one published reference genome assembly for Welwitschia mirabilis, based on genomic DNA from one male ex-situ botanical-garden accession. It does not describe species-wide genetic variation, field populations, or observed lifespan.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The genome claim uses one plant accession maintained at Shenzhen Fairy Lake Botanical Garden; it is not a direct sample of a documented wild population.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 5BX2Q; exact accepted name, authorship, species rank, sourceDatasetId 2004, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Publisher Rights and permissions section states that the article is licensed under Creative Commons Attribution 4.0 International.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The published article text; this dossier paraphrases assembly results and does not reproduce figures or separately credited third-party content.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original genome-sequencing and comparative analysis of Welwitschia mirabilis; the cited assembly metrics refer to the single genomic DNA accession described in Plant materials.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Wan T et al. (2021). The Welwitschia genome reveals a unique biology underpinning extreme longevity in deserts. Nature Communications 12:4247. https://doi.org/10.1038/s41467-021-24528-4. Findings paraphrased.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The published Welwitschia mirabilis reference assembly is 6.86 Gb and was estimated by the authors to cover 98% of an estimated 7.0-Gb genome. The genomic DNA came from one male plant accession maintained at Shenzhen Fairy Lake Botanical Garden; these assembly statistics do not measure genetic variation across the species.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
The reference-genome plant was accession SZBG 00052740 at Shenzhen Fairy Lake Botanical Garden, China. The article does not report a collection date for this individual; other transcriptome materials described in the paper are excluded from this claim.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
One ex-situ botanical-garden male plant accession supplied genomic DNA; this claim is not based on a population survey or a direct observation of longevity.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The assembly is based on one accession and cannot establish within-species genetic variation, population structure, or the prevalence of genomic features across natural populations.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/1 -->
Genome assembly statistics are not direct measurements of lifespan, field ecology, or population-level evolutionary history.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/2 -->
Morphology, life history, ecology, complete distribution, fossils, and conservation remain unassessed; systematic search and independent expert review are incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only reference-genome assembly statistics from one ex-situ accession are partially supported; population-wide genetic variation and evolutionary mechanisms are not established by this claim.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Other biological facets and complete geographic, fossil, and conservation coverage remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A reproducible systematic search and independent expert review have not been completed.
<!-- /evo:text -->
