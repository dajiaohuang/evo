---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Cordyceps militaris (L.) Fr.
    rank: species
    sourceDatasetId: "2073"
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
      - id: F
        scientificName: Fungi
        authorship: null
        rank: kingdom
        status: accepted
        sourceDatasetId: "2073"
      - id: SM
        scientificName: Ascomycota
        authorship: null
        rank: phylum
        status: accepted
        sourceDatasetId: "2073"
      - id: J2
        scientificName: Sordariomycetes
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2073"
      - id: 8K4
        scientificName: Cordycipitaceae
        authorship: null
        rank: family
        status: accepted
        sourceDatasetId: "2073"
      - id: 62MKV
        scientificName: Cordyceps
        authorship: null
        rank: genus
        status: accepted
        sourceDatasetId: "2073"
      - id: YCG6
        scientificName: Cordyceps militaris (L.) Fr.
        authorship: (L.) Fr.
        rank: species
        status: accepted
        sourceDatasetId: "2073"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
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
            url: https://www.checklistbank.org/dataset/316115/taxon/YCG6
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:YCG6@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage YCG6. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-73bd4391-f060-8fb9-ae83-aa0b0e5d73d9
          metadataVariant: 0
          sourceKey: yin2012cordyceps
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0051853
            accessedAt: 2026-09-28
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            sourceIds:
              - yin2012cordyceps
            locator: Abstract and study overview; Methods, Differential Expression Analysis (FDR ≤ 0.001 and |log2 RPKM ratio| ≥ 1).
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/2
      ecology:
        status: not-assessed
      evolution:
        status: not-assessed
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

# Cordyceps militaris

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The source compares transcript profiles from the reported artificially cultured mycelium and mature fruiting-body samples. Culture stage and medium differ together, so the results do not isolate a causal stage effect or represent all strains or wild populations.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
No wild field material is reported for the transcriptome comparison; the source does not establish the culture strain's wild origin.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
Artificially cultivated mycelium and fruiting-body material were studied; domesticated population-level variation was not assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage YCG6; exact accepted name, authorship, species rank, sourceDatasetId 2073, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
The article copyright notice states Creative Commons Attribution; DOI-deposited Crossref license metadata gives the CC BY 4.0 URL. The metadata's content-version field is unspecified, so no more specific version label is inferred.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text; this dossier paraphrases findings and does not reproduce figures, tables, or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Introduction study overview; Methods, Sample Preparation and differential-expression threshold; publisher copyright notice and DOI-deposited Crossref license metadata.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original transcriptome and proteome comparison of two artificially cultivated C. militaris sample types; claims are limited to those samples and the study's differential-expression analysis.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Yin Y, Yu G, Chen Y, Jiang S, Wang M, Jin Y, et al. (2012). Genome-Wide Transcriptome and Proteome Analysis on Different Developmental Stages of Cordyceps militaris. PLOS ONE 7(12):e51853. https://doi.org/10.1371/journal.pone.0051853. Findings paraphrased.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
A transcriptome comparison of the study's artificially cultivated Cordyceps militaris mycelium and mature fruiting-body samples identified 2,712 differentially expressed genes: 2,113 were reported as up-regulated in mycelium and 599 in fruiting body under the stated thresholds. This describes the two analyzed samples, not a species-wide developmental rule.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Artificial cultures were incubated at 22°C: mycelium on PDA for 18 days in darkness; fruiting-body material was grown on rice medium through dark and 16:8-hour light:dark phases. The article reports sequencing at BGI in Shenzhen, China, but not the cultivation site or calendar dates.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Artificially cultivated mycelium and mature fruiting-body samples; the source does not identify the strain's wild provenance or assess natural populations.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Mycelium and fruiting-body samples were grown on different media, confounding developmental material with culture conditions.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
The transcriptome comparison reports two sample types without biological replication, so it does not establish strain-wide or species-wide expression patterns.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/2 -->
Morphology, other life-history traits, ecology, evolution, distribution, fossils, conservation, and independent review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The developmental transcriptome result comes from two artificially cultivated sample types on different media, so stage and medium are confounded.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The study does not establish population-level variation or general developmental patterns across strains or natural populations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Most biological facets and complete geographic, fossil, conservation, and external review coverage remain unassessed.
<!-- /evo:text -->
