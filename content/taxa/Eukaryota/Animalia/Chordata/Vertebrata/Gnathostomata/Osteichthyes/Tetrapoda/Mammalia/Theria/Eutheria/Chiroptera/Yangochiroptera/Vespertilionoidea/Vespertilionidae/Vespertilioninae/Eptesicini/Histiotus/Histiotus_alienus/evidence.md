---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Histiotus alienus Thomas, 1916
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
        - itis
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/domesticated
      fossil: No species-level fossil occurrence is asserted; no fossil search was performed.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 25
          sourceKey: col
          usage:
            licenseAppliesTo: COL26.8 release record
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            version: COL26.8; ChecklistBank dataset 316115, pinned 2026-08-20
            publishedAt: 2026-08-20
            accessedAt: 2026-09-24
            attribution: Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            url: https://www.checklistbank.org/dataset/316115/taxon/3M5GD
            stableId: 3M5GD
            locator: COL26.8 accepted species usage 3M5GD
          originalFields:
            - id
            - title
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-0d551e83-ccde-853b-ab3d-4b23e7bc05c2
          metadataVariant: 0
          sourceKey: itis
          usage:
            licenseAppliesTo: ITIS nomenclatural authority data only
            stableId: ITIS TSN 631982
            accessedAt: 2026-09-24
            attribution: ITIS (2026-08-26 export), DOI 10.5066/F7KH0KBK; exact normalized binomial maps to valid TSN 631982.
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            locator: Pinned exact crosswalk row 3M5GD; valid ITIS usage TSN 631982
          originalFields:
            - id
            - title
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - url
            - stableId
            - locator
        - referenceId: ref-debd2bfb-917c-8c91-a8b8-843deb86a63c
          metadataVariant: 0
          sourceKey: zookeys-treatment
          usage:
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo
            stableId: doi:10.3897/zookeys.1174.108553
            accessedAt: 2026-09-24
            attribution:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution
            licenseAssessment: item-level-verified
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
          originalFields:
            - id
            - title
            - url
            - stableId
            - version
            - publishedAt
            - accessedAt
            - license
            - licenseVersion
            - licenseUrl
            - rightsHolder
            - licenseAppliesTo
            - attribution
            - licenseAssessment
            - scope
            - locator
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - zookeys-treatment
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - zookeys-treatment
            locator: Results, paragraph beginning “On 21 November 2018, we captured an adult male”; Fig. 1; specimen MN 91624.
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - zookeys-treatment
            locator: Methods > field survey setting; Results, paragraph describing Cerro Chato Farm; species account > Distribution; Fig. 2.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - zookeys-treatment
            locator: Species account > Materials examined and Distribution, p. 280; Results; Fig. 3; Appendix I.
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
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
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/3
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Histiotus alienus

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
The pinned COL26.8 registry row 3M5GD was verified as accepted rank=species with this full name and authorship and sourceDatasetId 2144. Its COL-ID row in the pinned ITIS 2026-08-26 mammal crosswalk has accepted status and an exact normalized binomial match to valid ITIS TSN 631982; no fuzzy or name-only join was used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
This confirms the versioned nomenclatural usage link between COL26.8 and the ITIS authority record. The treatment itself notes historical uncertainty over whether this taxon was treated as a species or within H. montanus/H. macrotus; this dossier preserves the paper’s scope and does not claim a full biological-concept consensus.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Biological observations are restricted to the type specimen and the adult male collected in a mist net at one Brazilian locality in 2018; no complete population or range assessment was performed.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / domesticated

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/domesticated -->
The treatment concerns museum and field specimens and gives no domestication or captive-status assessment. No domestic biology is asserted.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted COL26.8 name, authorship, rank, status, source dataset and COL identifier only; no biological claims.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Nomenclatural crosswalk for identity corroboration only; it does not establish full biological species-concept equivalence.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/licenseAppliesTo -->
Article text and author-generated material; this dossier paraphrases the text and does not redistribute figures or third-party assets.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/attribution -->
Cláudio VC, Almeida B, Novaes RLM, Navarro MA, Tiepolo LM, Moratelli R (2023), ZooKeys 1174:273–287, https://doi.org/10.3897/zookeys.1174.108553; paraphrased and scope-limited.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Peer-reviewed taxonomic redescription of Histiotus alienus based on the holotype and one newly captured adult male; includes comparative morphology, one foraging/capture observation, habitat and two known localities. It is not a complete life-history, phylogenetic, fossil, or conservation survey.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Species account and comparative treatment, pp. 280–284; Methods, pp. 275–276; Results, pp. 276–277; Figs. 1–3; Appendix I.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The authors provide an amended diagnosis from two known specimens (the female holotype and an adult male collected in 2018) and compare it with congeners. Reported diagnostic measurements include forearm length 43.3–44.5 mm, ear length about 27.5 mm, and medial ear-lobe width about 4.5 mm; the authors describe dark bicolored dorsal fur and a low interaural skin band that fades toward the centre. These are account-level characters, not estimates of within-population variation.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
Species account > Diagnosis and Description, pp. 280–281; Materials examined; Tables 1–2. Measurements are reported by the authors.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Nominal species diagnosis based on two known specimens from southern Brazil; measurements include adult specimens, with the second record an adult male. Sex-specific and population-level variation is not established.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild-caught and historical museum specimens only; no captive or domesticated biology is included.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Diagnosis and measurements are limited to two known specimens; sex, age, seasonal, geographic, and within-population variation are not established.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
The adult male collected in November 2018 was captured about four hours after sunset, at approximately 23:00, and the authors report it had been foraging along a forest-fragment edge beside grassland. This is one event and does not describe the species’ life cycle or reproductive behavior.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Single adult male observation at Cerro Chato Farm, Palmas, Paraná, Brazil, 21 November 2018; captured at ca. 23:00. No seasonal or population-level behavior is inferred.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
One field observation of a wild adult male; no captive observations.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
No reproductive cycle, mating, parental care, development, lifespan, seasonality, or repeated behavior observations were assessed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The 2018 specimen was captured at the edge of a forest fragment adjacent to grassland within a protected area containing natural grasslands and small, isolated moist Araucaria-forest fragments. Across the two known records, the authors describe the species as associated with dense rainforest, Araucaria and riparian forests, and grasslands; this is a two-locality account, not a complete habitat inventory or interaction network.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Cerro Chato Farm, Palmas Grasslands Wildlife Refuge, Paraná, Brazil; observation date 21 November 2018; 1208 m elevation. The broader habitat summary is limited to the two localities known to the authors.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
One field record from a wild adult male plus the type locality; no generalization to unsampled populations.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Host, prey, predator, parasite, symbiont, roost, and habitat-selection evidence were not comprehensively reviewed; the capture setting is one locality only.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The paper does not present a species-level phylogeny, divergence-time estimate, or character-evolution analysis for H. alienus; no separate phylogenetic search was performed.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
As reported in 2023, H. alienus was known from two localities in southern Brazil: the female holotype from Joinville, Santa Catarina, at sea level, and the adult male collected at Palmas, Paraná, at 1208 m. The authors report the new locality as extending the documented distribution about 280 km west at the same latitude.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
The treatment’s literature and specimen records available through 2023; Joinville, Santa Catarina, and Palmas, Paraná, Brazil. The two points do not establish a complete global or national range.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild locality and museum-voucher records; no native/introduced range classification was undertaken.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
Only two historical/documented localities were known to the authors; no global database search, range-boundary modelling, native/introduced classification, or sampling-completeness analysis was performed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil database or paleontological literature search was performed; no absence-of-fossils conclusion is drawn.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
No current IUCN or national conservation registry search was performed. The article cites an older Data Deficient assessment, but it is not independently checked or used as a current status here.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The treatment is limited to two known specimens and one 2018 field observation; it does not establish full life-history, ecological, or geographic coverage.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Evolution, fossil occurrence, and current conservation assessment remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
The article notes historical taxonomic uncertainty for H. alienus; the exact accepted COL-to-ITIS record link does not resolve every biological species-concept question.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
No external domain expert review was completed.
<!-- /evo:text -->
