---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Oophaga pumilio (Schmidt, 1857)
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
      - id: PH
        scientificName: Amphibia
        authorship: null
        rank: class
        status: accepted
        sourceDatasetId: "2144"
      - id: PW
        scientificName: Anura
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "2144"
      - id: 52K
        scientificName: Dendrobatoidea Cope, 1865
        authorship: Cope, 1865
        rank: superfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 93G
        scientificName: Dendrobatidae Cope, 1865
        authorship: Cope, 1865
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: JF6
        scientificName: Dendrobatinae Cope, 1865
        authorship: Cope, 1865
        rank: subfamily
        status: accepted
        sourceDatasetId: "2144"
      - id: 68KL
        scientificName: Oophaga Bauer, 1994
        authorship: Bauer, 1994
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 49SSQ
        scientificName: Oophaga pumilio (Schmidt, 1857)
        authorship: (Schmidt, 1857)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication and captive populations have not been assessed; no captive or domesticated frogs support these claims.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/49SSQ
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:49SSQ@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 49SSQ. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-104ce3e5-b24b-8032-a534-f97636eec80f
          metadataVariant: 0
          sourceKey: dreher2015
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0130571
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
        - referenceId: ref-a67d98d3-a788-81a2-a015-4ba1ab6c379b
          metadataVariant: 0
          sourceKey: plos2015correction
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator
            licenseAppliesTo: Correction notice text. The corrected figure and any separately credited third-party content are not reused.
            stableId: doi:10.1371/journal.pone.0134628
            accessedAt: 2026-09-28
            locator: "Correction notice: the first author's email and Fig. 4 were corrected. The claims in this dossier do not rely on Fig. 4."
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
              - dreher2015
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
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - dreher2015
            locator: Methods, Predation experiments; Results, Predation experiments and Fig. 2 caption.
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

# Oophaga pumilio

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by the pinned COL26.8 accepted usage. Evidence concerns measured coloration and clay-model predator interactions at six sampled Central American populations; it does not constitute a full species account.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Live frogs were measured in the field and released at their capture sites. The predation experiment used standardized non-toxic clay models placed in frog habitat; model attacks are not observations of live-frog survival.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 49SSQ; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Article copyright notice links to the Creative Commons Attribution License; PLOS policy identifies CC BY 4.0 International as the article-content license.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text. Any separately credited third-party content is excluded; this dossier paraphrases findings and does not reuse images or figures.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Methods, Reflectance Measurements and Visual Modeling and Predation experiments; Results, Overall conspicuousness and Predation experiments.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original live-frog skin reflectance and clay-model predation experiments across six populations in Costa Rica and Panama. Claims do not rely on figures or third-party material.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Dreher CE, Cummings ME, Pröhl H (2015). An Analysis of Predator Selection to Affect Aposematic Coloration in a Poison Frog Species. PLOS ONE 10(6):e0130571. https://doi.org/10.1371/journal.pone.0130571. Findings paraphrased.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseEvidenceLocator -->
Correction copyright notice links to the Creative Commons Attribution License; PLOS policy identifies CC BY 4.0 International as the article-content license.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Publisher correction associated with the 2015 Oophaga pumilio research article. It corrects Fig. 4 and the first author's email; it does not alter the Methods or Results passages cited for these claims.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
The PLOS ONE Staff (2015). Correction: An Analysis of Predator Selection to Affect Aposematic Coloration in a Poison Frog Species. PLOS ONE 10(7):e0134628. https://doi.org/10.1371/journal.pone.0134628. Correction notice paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Researchers measured skin reflectance in 255 live Oophaga pumilio from six populations in Costa Rica and Panama between December 2008 and June 2011. Their visual models found population differences in color and brightness contrast among sampled dorsal and ventral coloration. These measurements describe the sampled populations; they do not establish that selection caused the divergence or characterize every population of the species.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Methods, Reflectance Measurements and Visual Modeling; Results, Color Contrast, Brightness Contrast, and Overall conspicuousness.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Six populations: Sarapiquí and Hitoy Cerere in Costa Rica; Río Gloria, Tierra Oscura, Isla Colón, and Isla Solarte in Panama. Field measurements were collected between December 2008 and June 2011; the article was published 2015-06-25.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Live, free-living frogs were measured in the field and released at their capture sites. No captive or domesticated frogs support the claim.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The study measures color and brightness contrasts, not all morphological traits or within-population variation across the species range.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/1 -->
A population comparison does not by itself establish the evolutionary causes of coloration differences.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
In 20-day experiments at six sampled populations, researchers deployed 1,600 standardized clay frog models per population. Attack rates varied among populations and were higher at the two sampled Panama island populations than at several mainland populations; local versus non-local model origin had no significant overall effect. These are predator interactions with clay models, not mortality or survival measurements of live frogs.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
The six model-placement populations were Sarapiquí, Hitoy Cerere, Río Gloria, Tierra Oscura, Isla Colón, and Isla Solarte in Costa Rica and Panama. The main article gives the live-frog field-work period as December 2008 to June 2011 but does not date each model experiment separately; exact experiment dates remain unknown.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
The focal frogs are free-living; attacks were recorded on non-toxic clay models placed in their habitat, not on live or captive frogs.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Clay-model attacks cannot estimate live-frog mortality, survival, or realized predator selection on natural populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/1 -->
Some imprints were classified only as potential bird marks; other predator classes had few observations, and the result is limited to six populations.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only sampled coloration and clay-model predator-interaction facets are partially supported; life history, evolution, complete distribution, fossils, and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The study covers six selected populations and does not provide a complete species account or prove causal mechanisms of color divergence.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
A reproducible systematic search and independent expert review have not been completed.
<!-- /evo:text -->
