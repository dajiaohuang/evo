---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Doryteuthis pealeii (Lesueur, 1821)
    rank: species
    sourceDatasetId: "1130"
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
      - id: 7NVXX
        scientificName: Decapodiformes R. E. Young, Vecchione & Donovan, 1998
        authorship: R. E. Young, Vecchione & Donovan, 1998
        rank: superorder
        status: accepted
        sourceDatasetId: "1130"
      - id: 3LT
        scientificName: Myopsida
        authorship: null
        rank: order
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NJJL
        scientificName: Loliginidae Lesueur, 1821
        authorship: Lesueur, 1821
        rank: family
        status: accepted
        sourceDatasetId: "1130"
      - id: 7NXGQ
        scientificName: Doryteuthis Naef, 1912
        authorship: Naef, 1912
        rank: genus
        status: accepted
        sourceDatasetId: "1130"
      - id: 37FV6
        scientificName: Doryteuthis pealeii (Lesueur, 1821)
        authorship: (Lesueur, 1821)
        rank: species
        status: accepted
        sourceDatasetId: "1130"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domesticated populations have not been assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/37FV6
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:37FV6@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 37FV6. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-70dc8032-b92f-8c54-a2c3-d92debc2a4ea
          metadataVariant: 0
          sourceKey: kaplan2013
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.1371/journal.pone.0063714
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
              - kaplan2013
            locator: Results, mantle-length comparison and statolith observations; Figs. 3–5.
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            sourceIds:
              - kaplan2013
            locator: Results, Hatching timeline for squid paralarvae; Fig. 2.
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

# Doryteuthis pealeii

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Evidence is limited to two laboratory trials that reared eggs from wild-caught adults to hatchlings (paralarvae) under controlled CO2 conditions at Woods Hole in 2011. It does not establish wild population effects, long-term survival, or recruitment.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Adult squid were trawled in Vineyard Sound; the egg and hatchling results were obtained after the adults and egg capsules were brought into laboratory culture.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 37FV6; exact accepted name, authorship, species rank, sourceDatasetId 1130, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Publisher article copyright notice identifies the Creative Commons Attribution License; Crossref DOI metadata deposited for the Version of Record specifies https://creativecommons.org/licenses/by/4.0/.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text; this dossier paraphrases findings and does not reproduce figures or separately credited third-party material.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Abstract; Methods, Collection and husbandry, Experimental set-up and Measurement Protocol; Results on hatching, mantle length and statoliths; publisher copyright notice and publisher-deposited Crossref license metadata.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original laboratory study of Doryteuthis pealeii eggs and paralarvae under control and elevated CO2 conditions; claims refer only to the two trials and outcomes reported.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Kaplan MB, Mooney TA, McCorkle DC, Cohen AL (2013). Adverse Effects of Ocean Acidification on Early Development of Squid (Doryteuthis pealeii). PLOS ONE 8(5):e63714. https://doi.org/10.1371/journal.pone.0063714. Findings paraphrased.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
In two laboratory trials, paralarvae reared under elevated CO2 had slightly shorter mantles than controls (1.78 ± 0.01 mm versus 1.81 ± 0.01 mm; the pooled difference was significant but small). Their statoliths had about 25% lower surface area and were more irregular and porous. These are early-stage laboratory measurements, not demonstrated effects on adult form or field performance.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Woods Hole Oceanographic Institution, June–August 2011; eggs from Vineyard Sound adults; culture at approximately 20°C. Gas setpoints were 390 and 2200 μatm; measured gas concentrations averaged 394 ± 6 and 2267 ± 10 ppm, while seawater pCO2 calculations averaged 626 and 2440 μatm for control and treatment.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Laboratory-reared hatchlings from egg capsules laid by wild-caught adults; the study did not rear animals beyond the yolk-sac stage.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
The observed size difference was small and does not establish consequences for wild behavior, survival, or adult morphology.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/1 -->
Statolith observations were made in laboratory-reared paralarvae; later development and recovery were not followed.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/2 -->
Life-history outcomes beyond hatching, ecology, evolution, distribution, fossils, and conservation remain unassessed; systematic search and independent expert review are incomplete.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
Elevated-CO2 rearing delayed the hatching schedule of Doryteuthis pealeii paralarvae in both replicated trials: the time to 90% hatching was about 24 hours later in trial 1 and the delay was shorter than 24 hours in trial 2. The outcome is limited to laboratory hatching timing and does not demonstrate a change in natural recruitment.
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Woods Hole Oceanographic Institution, June–August 2011; Vineyard Sound seawater; eggs from captive-laid capsules of trawled adults. Gas setpoints were 390 and 2200 μatm; measured gas concentrations averaged 394 ± 6 and 2267 ± 10 ppm, with calculated seawater pCO2 means of 626 and 2440 μatm.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Embryos in laboratory egg capsules and newly hatched paralarvae; adults were wild-caught, and paralarvae were not reared past the yolk-sac stage.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The experiment measures hatching time under controlled laboratory conditions, not wild hatching phenology or recruitment success.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/1 -->
The paralarvae were not followed beyond the yolk-sac stage, so subsequent survival and growth are unknown.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/2 -->
Other life-history stages and morphology, ecology, evolution, distribution, fossils, and conservation remain unassessed; systematic search and independent expert review are incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Two experimental findings on hatching timing and hatchling morphology are partially supported; both are limited to laboratory CO2 exposure.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
The trials do not follow paralarvae beyond their yolk-sac stage or establish population-level survival and recruitment effects.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Other biological facets and complete geographic, fossil, and conservation coverage remain unassessed; systematic search and external review are incomplete.
<!-- /evo:text -->
