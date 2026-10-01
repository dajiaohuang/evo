---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Saprolegnia parasitica Coker
    rank: species
    sourceDatasetId: "2073"
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
        - oomycota_crosswalk
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
          metadataVariant: 8
          sourceKey: col
          usage:
            licenseAppliesTo: Pinned nomenclatural and taxonomic checklist metadata only.
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/79KQC
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:79KQC@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 79KQC; sourceDatasetId 2073; Oomycota classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 79KQC. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-6bbd7f66-3a76-84cc-aae2-8e78bb3388e6
          metadataVariant: 0
          sourceKey: oomycota_crosswalk
          usage:
            licenseAppliesTo: Declared nomenclatural identifier/name/status fields where CC BY applies; no biological prose copied.
            stableId: indexfungorum:273605@crosswalk-2026-09-09
            accessedAt: 2026-09-24
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            attribution: Species Fungorum / Index Fungorum, via pinned COL26.8 crosswalk; Kew data reuse attribution applies.
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
        - referenceId: ref-5b3be9ec-e6cd-8ff8-a4fb-a533749e04ab
          metadataVariant: 0
          sourceKey: shreves_2024
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.3390/jof10010057
            rightsEvidenceUrl: https://www.mdpi.com/2309-608X/10/1/57
            accessedAt: 2026-09-24
            locator: Methods 2.1; Results 3.3, 3.6; Tables 2–5; conclusions
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
            - rightsEvidenceUrl
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
        status: not-assessed
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - shreves_2024
            locator: Results 3.3; Tables 2–3; Discussion
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            sourceIds:
              - shreves_2024
            locator: Results 3.3; Figure 2; Table 2; ITS sequence analysis methods
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
              - shreves_2024
            locator: Methods 2.1; Results 3.3 and 3.6; Tables 2, 4–5
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
---

# Saprolegnia parasitica

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim name, rank and sourceDatasetId verified against the pinned registry. Species Fungorum source linkage and Index Fungorum NameByKey identifier 273605 resolve to Saprolegnia parasitica Coker; the pinned crosswalk maps this source identity to COL usage 79KQC.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
The dossier concerns nominal species usage 79KQC. The 2024 study's isolates are ITS-assigned S. parasitica from sampled Scottish freshwater salmon aquaculture sites; its results do not characterize every population or strain of the species.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The 2024 study sampled water and Atlantic salmon epidermis at freshwater aquaculture facilities; it does not establish wild-population ecology.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
Aquaculture-associated isolates are discussed, but domestication and captive life history of the oomycete have not been assessed.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2073
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Crosswalk row COL 79KQC; sourceDatasetId 2073; Index Fungorum ID 273605; NameByKey response SHA-256 4d0b50010c46af9e86e2af99cdc0cf45010f0b244f814be5ab013ec0261f5217
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Identity only; retains declared identifier, name and status fields and response hashes, not bulk source database content.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article text under CC BY 4.0; separately credited material retains its own terms. No figures, tables or images are reproduced.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Peer-reviewed study of sampled isolates from 14 anonymized Scottish Atlantic salmon freshwater aquaculture sites; only text claims about this sample and study are used.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Shreves KV et al. (2024). Specific Phylotypes of Saprolegnia parasitica Associated with Atlantic Salmon Freshwater Aquaculture. Journal of Fungi 10(1):57. https://doi.org/10.3390/jof10010057. Claims paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Across the sampled Scottish freshwater salmon farms, the authors report that S. parasitica phylotype S2 was most abundant and was recovered predominantly from fish, while S6 was recovered from both fish and water; these are study-sample patterns, not universal host preferences.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Fourteen anonymized Atlantic salmon freshwater aquaculture sites in Scotland sampled monthly; the claim applies to the isolates and sampling period analyzed in this article.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Association with farmed Atlantic salmon epidermis and tank water; the study does not establish wild-host interactions or causality.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The article samples aquaculture sites only and does not provide a complete account of hosts, free-living ecology, interaction mechanisms or wild populations.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
ITS sequence analysis divided the 151 S. parasitica isolates in this study among five sampled phylotypes, S2–S6; S1 was not isolated at these sites. This is within-study strain-level grouping, not a species-wide phylogeny.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
ITS-based analysis of isolates recovered in the 2024 study from the sampled Scottish aquaculture sites, compared with the paper's reference sequences.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Molecular comparisons among sampled isolates; the study does not infer species divergence times or broad oomycete phylogenetic position.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The study does not provide a comprehensive species-level phylogenetic analysis, population history or divergence-time estimate.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The study reports S. parasitica isolates from Scottish freshwater salmon aquaculture, with phylotypes differing in occurrence among the 14 sampled sites; site identities are anonymized as A–N.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Study-specific records from 14 Scottish aquaculture facilities sampled monthly; site anonymity and the farm-only sampling frame limit geographic precision.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Records are from aquaculture water and farmed fish; they do not establish wild distribution, native status or current occupancy outside sampled facilities.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The study is not an exhaustive distribution survey and does not establish a global range or native/introduced status.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only bounded ecology, isolate-level ITS grouping and farm-sample distribution evidence have been assessed; morphology, life history, fossil evidence and conservation assessment remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
No systematic literature search or complete comparison with the accepted species concept has been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
