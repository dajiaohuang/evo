---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Physcomitrium patens (Hedw.) Mitt.
    rank: species
    sourceDatasetId: "170394"
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
      - id: 9THX2
        scientificName: Bryobiotina Trevis.
        authorship: Trevis.
        rank: subkingdom
        status: accepted
        sourceDatasetId: "170394"
      - id: BJ5TM
        scientificName: Bryophyta Schimp.
        authorship: Schimp.
        rank: phylum
        status: accepted
        sourceDatasetId: "170394"
      - id: CHTRW
        scientificName: Bryopsida Ritgen
        authorship: Ritgen
        rank: class
        status: accepted
        sourceDatasetId: "170394"
      - id: 9JHXV
        scientificName: Funariidae Ochyra
        authorship: Ochyra
        rank: subclass
        status: accepted
        sourceDatasetId: "170394"
      - id: L23DB
        scientificName: Funariales M. Fleisch.
        authorship: M. Fleisch.
        rank: order
        status: accepted
        sourceDatasetId: "170394"
      - id: 9JG2X
        scientificName: Funariaceae Schwägr.
        authorship: Schwägr.
        rank: family
        status: accepted
        sourceDatasetId: "170394"
      - id: 9JM69
        scientificName: Physcomitrium (Brid.) Brid.
        authorship: (Brid.) Brid.
        rank: genus
        status: accepted
        sourceDatasetId: "170394"
      - id: 9M4BT
        scientificName: Physcomitrium patens (Hedw.) Mitt.
        authorship: (Hedw.) Mitt.
        rank: species
        status: accepted
        sourceDatasetId: "170394"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated populations have not been assessed; laboratory culture alone is not treated as evidence of domestication.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/9M4BT
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:9M4BT@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 9M4BT. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-88d27028-cd41-8493-a1b0-e52a8eb16aec
          metadataVariant: 0
          sourceKey: caine2020
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.3389/fpls.2020.00643
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - caine2020
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/2
      lifeHistory:
        status: not-assessed
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

# Physcomitrium patens

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to a laboratory observation of stomatal-lineage cell development on Physcomitrium patens sporophyte epidermis. It does not establish the frequency of this division across plants, populations, or environments, and does not describe a field population.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The cited observation uses laboratory-grown wild-type strains under sterile culture, not a field observation of an unmanaged population.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 9M4BT; exact accepted name, authorship, species rank, sourceDatasetId 170394, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Publisher copyright and license notice states that the article is distributed under the Creative Commons Attribution License (CC BY) and links to https://creativecommons.org/licenses/by/4.0/.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
The published article text; this dossier paraphrases the reported observation and does not reproduce figures or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract, second paragraph; Results, ‘Stomatal Patterning and GMC Spacing Divisions,’ paragraphs 1–2; Figure 5 legend; Materials and Methods, ‘Plant Materials’ and ‘Growth Conditions.’
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original research describing stomatal development in laboratory-grown Physcomitrium patens sporophytes and associated developmental mutants.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Caine RS, Chater CCC, Fleming AJ, Gray JE (2020). Stomata and Sporophytes of the Model Moss Physcomitrium patens. Frontiers in Plant Science 11:643. https://doi.org/10.3389/fpls.2020.00643. Findings paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In laboratory observations of Physcomitrium patens sporophyte epidermis, when two early guard mother cells formed adjacently, one had the potential to undergo an asymmetric spacing division that produced an epidermal spacer cell between the formerly adjacent cells. The illustrated division was followed over approximately two hours.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Results, ‘Stomatal Patterning and GMC Spacing Divisions,’ paragraphs 1–2; Figure 5 legend; the abstract summarizes the same conditional observation.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Laboratory study published in 2020; sterile-cultured Physcomitrium patens wild-type strains Gransden 2004, Gransden D12, and Villersexel were used in the study. The Figure 5 cell sequence spans approximately two hours; no field locality or collection date is reported for that sequence.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Experimental sporophyte tissue from laboratory-grown wild-type moss strains; this is not an in-situ population observation, a domestication result, or fossil evidence.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The observation supports a conditional developmental possibility, not the frequency or prevalence of spacing divisions across strains, populations, or growth environments.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/1 -->
The authors could not track the dissected live samples for longer, and the later fate or renewed identity of the spacer cell remains unclear.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/2 -->
Life history, ecology, evolution, geographic distribution, fossils, conservation, systematic evidence search, and independent expert review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One conditional laboratory observation partially supports stomatal-lineage morphology and does not quantify its frequency or population variation.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The fate of the resulting spacer cell remains unresolved in the cited study.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Six other biological facets, a systematic source search, and independent expert review have not been completed.
<!-- /evo:text -->
