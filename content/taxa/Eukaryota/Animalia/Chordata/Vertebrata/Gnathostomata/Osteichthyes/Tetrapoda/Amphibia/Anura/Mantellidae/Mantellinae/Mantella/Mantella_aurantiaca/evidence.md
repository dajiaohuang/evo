---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Mantella aurantiaca Mocquard, 1900
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-27
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
      wild: The cited experiment distinguishes wild and captive populations; statements retain those sampled settings.
      domesticated: Domestication has not been assessed; captive-breeding status is not treated as domestication.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/736LN
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:736LN@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            locator: Accepted species usage 736LN; sourceDatasetId 2144; Amphibia classification
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 736LN. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-c98c9464-13af-8b9a-a555-c13b8443437b
          metadataVariant: 0
          sourceKey: passos2017
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0181931
            accessedAt: 2026-09-24
            locator: "Abstract; Methodology: Study subject and Study sites"
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
        - referenceId: ref-3fdeb7f8-a581-8120-a607-7b086266d6d6
          metadataVariant: 0
          sourceKey: edwards2019mantellamicrohabitat
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.33256/hj29.4.207213
            rightsEvidenceUrl: https://kar.kent.ac.uk/77158/
            accessedAt: 2026-09-27
            locator: "Methods: Data Collection; Results; generalized linear mixed model, Table 2; Discussion."
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
            - rightsEvidenceLocator
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
              - passos2017
            locator: Abstract, paragraphs 1–3; Methods, Study sites
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/text
            sourceIds:
              - edwards2019mantellamicrohabitat
            locator: Results and Table 2; Discussion on between-site counts and survey-day conditions.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus
            translationStatus: untranslated
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/2
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/3
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
    expertReview:
      status: not-reviewed
---

# Mantella aurantiaca

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage, verbatim scientific name, rank, status, source dataset and Amphibia classification verified against the pinned registry search record.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 736LN. The biological paper covers sampled wild and captive males and does not establish all populations or a complete species concept.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2144
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Identity only: accepted name, authorship, rank, status, sourceDatasetId and classification in the pinned COL26.8 registry.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Article text and other content included under the article license; third-party items credited otherwise are excluded. Only article text is paraphrased here.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Playback and phonotaxis study of wild and captive male M. aurantiaca from Mangabe, Mitsinjo Captive Breeding Centre and Chester Zoo; results do not estimate species-wide behaviour or reintroduction outcomes.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Passos LF, Garcia G, Young RJ (2017). Neglecting the call of the wild: Captive frogs like the sound of their own voice. PLOS ONE 12(7): e0181931. https://doi.org/10.1371/journal.pone.0181931. Claims here are paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
The publisher PDF identified in the Kent repository record. This dossier paraphrases article text and does not reproduce figures, tables, or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Field survey of presence/absence and microhabitat variables at ten forested sites near known breeding ponds in the Mangabe-Ranomena-Sahasarotra protected area, Moramanga district, eastern Madagascar. Claims retain the study's quadrat, site, and survey limitations; they do not establish a complete range, population abundance, or species-wide habitat preference.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Edwards WM, Griffiths RA, Bungard MJ, Rakotondrasoa EF, Razafimanahaka JH, Razafindraibe P, Andriantsimanarilafy RR, Randrianantoandro JC (2019). Microhabitat preference of the critically endangered golden mantella frog in Madagascar. Herpetological Journal 29(4):207-213. https://doi.org/10.33256/hj29.4.207213. Claims paraphrased.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In this experiment, wild males showed similar phonotaxis responses to calls from wild and captive conspecifics, while Chester Zoo males responded more strongly to calls from their separately housed Chester Zoo conspecific group.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Sampled wild calls at Mangabe, Madagascar, and captive calls at Mitsinjo, Madagascar, and Chester Zoo, United Kingdom; the paper was published in 2017.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The study directly compared wild and captive male frogs; reported responses apply to the sampled animals and test conditions.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/text -->
Across ten forested sites near known breeding ponds in the Mangabe-Ranomena-Sahasarotra protected area of eastern Madagascar, Mantella aurantiaca detections in 1 m² quadrats were associated with leaf-litter cover, tree-root counts, and surface temperature. The fitted mixed model reported positive coefficients for litter cover and root count and a negative coefficient for surface temperature; the article's adjacent prose describes detections as lower in the densest-root plots and reports a mean of 1.73 roots in occupied quadrats. Because the root-count summaries differ by level of comparison within this study, this record does not infer one monotonic root preference. The authors also caution that counts could vary with survey-day activity and are not a direct estimate of abundance.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/placeTimeScope -->
The survey covered ten forested sites in the Mangabe-Ranomena-Sahasarotra protected area near Moramanga, eastern Madagascar; each contained or bordered known breeding ponds. The article states that nine sites were surveyed from 28 November to 12 December 2014 and the tenth in March 2014. Surveys made one visit per site between 07:00 and 14:00; quadrats were placed along transects around breeding pools.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/1/lifeStatus -->
Wild field observations at forest sites near breeding ponds; detections and modeled associations apply to these sampled sites, quadrats, and visits.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
This playback experiment does not establish responses across all wild populations, life stages or field settings, and it does not measure reintroduction success.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
Ten local sites and single visits do not establish habitat use across the species' range, seasons, life stages, or populations; detection counts are not population abundance estimates.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/2 -->
The paper reports different root-count directions across its fitted model, within-site prose, and denser-root cross-site discussion; no single monotonic root preference is inferred.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/3 -->
The study does not assess diet, reproduction, long-term habitat change, current distribution, or conservation trend.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Ecology now includes one captive/wild-male playback experiment and one ten-site microhabitat field survey; neither establishes species-wide behavior or habitat use.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Morphology, life history, evolution, distribution, fossil evidence and conservation remain unassessed; the selected sources are not a systematic review of the accepted COL26.8 concept.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The field study reports root-count patterns at multiple analysis levels without a single monotonic direction; no population-wide habitat preference is inferred.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
Independent external expert review has not been completed.
<!-- /evo:text -->
