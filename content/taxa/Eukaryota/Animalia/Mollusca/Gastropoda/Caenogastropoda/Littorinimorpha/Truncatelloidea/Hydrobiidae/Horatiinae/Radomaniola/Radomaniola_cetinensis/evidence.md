---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Radomaniola cetinensis Grego & Beran, 2025
    rank: species
    sourceDatasetId: "1130"
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
        - worms
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: No domesticated or captive observations are included or inferred.
      fossil: This dossier makes no claim about fossil occurrence. Fossil evidence has not been assessed.
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
            attribution: Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            url: https://www.checklistbank.org/dataset/316115/taxon/V7HBX
            stableId: V7HBX
            locator: COL26.8 accepted species usage V7HBX
          originalFields:
            - id
            - title
            - version
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
        - referenceId: ref-12ba088a-1e58-80f4-a281-c60d05c3f7a7
          metadataVariant: 0
          sourceKey: worms
          usage:
            licenseAppliesTo: WoRMS/MolluscaBase nomenclatural archive crosswalk only
            stableId: urn:lsid:marinespecies.org:taxname:1844769
            attribution: WoRMS Editorial Board (2026), MolluscaBase archive; DOI 10.48580/d4fd.v148
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/locator
          originalFields:
            - id
            - title
            - version
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
        - referenceId: ref-b05f24e7-b546-89d1-a27b-dd5afe0e29c6
          metadataVariant: 0
          sourceKey: paper
          usage:
            stableId: 10.11646/zootaxa.5716.2.2
            accessedAt: 2026-09-24
            locator: Species account pages listed per claim; publisher identifies PDF as subscription or fee access
            licenseAssessment: unknown
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
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
            - rightsHolder
            - licenseAssessment
            - scope
        - referenceId: ref-af43fc6a-b424-82d0-a016-b5a3637514fb
          metadataVariant: 0
          sourceKey: treatment
          usage:
            stableId: AB08878A2A34FFBBFF4125D744B898B4
            accessedAt: 2026-09-24
            locator: Treatment AB08878A2A34FFBBFF4125D744B898B4; original paper pages 212–217; Zenodo DOI 10.5281/zenodo.18233398
            licenseAssessment: unknown
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
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
            - rightsHolder
            - licenseAssessment
            - scope
    systematicSearch:
      date: 2026-09-24
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/scope
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/method
      queryOrPath: COL26.8 IDs V7HBX; archived WoRMS/MolluscaBase archive crosswalk taxon.txt; DOI 10.11646/zootaxa.5716.2.2; treatment AB08878A2A34FFBBFF4125D744B898B4
      inclusionCriteria: Only exact COL-ID to accepted Aphia-ID identity, and statements expressly in the taxon-specific article account.
      exclusionCriteria:
        markdown: evidence.md
        field: /records/catalogue-dossier/systematicSearch/exclusionCriteria
      searcher: Evo source audit
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
              - treatment
            locator: Species account, pp. 212–217; description/diagnosis and associated figures
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
        status: not-assessed
        claims: []
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
              - treatment
            locator: Species account, pp. 212–217; type material, habitat and distribution paragraphs
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - treatment
              - paper
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - treatment
            locator: Species account, pp. 212–217; type locality and distribution section
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
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            originalLanguage: en
            translationStatus: untranslated
            sourceIds:
              - treatment
            locator: Species account, pp. 212–217; authors’ ecological/conservation status paragraph
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
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

# Radomaniola cetinensis

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 taxon ID V7... was joined to the WoRMS/MolluscaBase archive by COL ID, then verified against archive Aphia ID, accepted status, full accepted name and authorship; no name-only or fuzzy match used.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species usage in COL26.8 and archived MolluscaBase accepted taxon concept. This nomenclatural crosswalk does not by itself establish full biological concept equivalence.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
All biological observations and localities in the cited treatment concern wild freshwater snails; claims remain bounded to the paper’s 2001–2022 collection program and each account’s stated localities.
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
Exact COL taxon ID to archived accepted Aphia taxon ID and accepted-name usage; nomenclatural identity evidence only, not biological evidence or proof of complete species-concept equivalence.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Archived accepted usage AphiaID 1844769; crosswalk taxon.txt row verified by exact COL ID, accepted status, accepted name and authorship
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Original taxonomic paper describing five species; biological claims are paraphrased from the corresponding species account only.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Species-level account and underlying type/locality, anatomy, sequence, and author assessment data as cited in its original article pages.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / scope

<!-- evo:text /records/catalogue-dossier/systematicSearch/scope -->
Bounded identity/provenance check for the five taxon usages in COL26.8 against the archived MolluscaBase crosswalk; biological claims checked only in each cited taxonomic treatment and its article metadata.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / method

<!-- evo:text /records/catalogue-dossier/systematicSearch/method -->
Opened pinned repository crosswalk and exact COL-ID row; compared Aphia ID, archived accepted status, accepted name and authorship; read the taxon-specific Plazi treatment record and corresponding article account locators. No comprehensive literature, fossil, conservation database, or global distribution search was performed.
<!-- /evo:text -->

## catalogue-dossier / systematicSearch / exclusionCriteria

<!-- evo:text /records/catalogue-dossier/systematicSearch/exclusionCriteria -->
Name-only joins; generic genus/family statements; claims from other species; figures or text for redistribution; unverified formal assessments; inferred fossils or unsearched facets.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
The corresponding taxon account provides a species-level shell and soft-part/anatomical description and diagnostic treatment; the current dossier records the existence and scope of that account without extracting a full character matrix.
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Account published 2025; taxon-specific specimens examined in the original treatment.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Wild species; treatment specimens only.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Measurements, sex/stage coverage, within-species variation, diagnostic character comparison, and specimen-by-specimen sampling have not been independently abstracted.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
The paper’s species-description study was not a systematic life-history or reproductive-behavior search; no life-history claim is made.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
The account reports the following type locality and the treatment’s stated habitat/locality observations: Kotluša spring at Cviljane, Croatia (43°56′57″N, 16°23′56″E; 397 m); collected 2017-03-17; holotype NHMW-MO-113902. Treatment reports 10 localities (its locality numbers 3–12) in the upper Cetina Basin, central Croatia, and southern Livansko Polje in north-west Bosnia and Herzegovina; reported habitats include springs, the Cetina River, and interstitial habitats.
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Only the account’s named collection localities; collection dates are account-specific and no unsampled sites are inferred.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Wild freshwater snails; localities and specimens reported by the authors.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
No complete interaction network, host/resource use, population ecology, seasonal ecology, or habitat-wide survey has been assembled.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
The study assigns this taxon to mitochondrial operational unit mOTU D and reports COI sequence accession(s) PX113150–PX113167; the paper cautions that COI data do not resolve deeper phylogenetic relationships. The mOTU label is not treated as a species-tree placement.
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Species account, pp. 212–217; molecular/mOTU assignment and cited GenBank accession(s); article discussion on limits of COI evidence
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Study-specific sequence sample and analysis published 2025; accession identifiers as reported in the taxon account.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Wild study specimens; molecular evidence from the reported samples only.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
A species-level phylogenetic placement with broader loci, sampling, competing topologies and uncertainty has not been established here.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
Treatment reports 10 localities (its locality numbers 3–12) in the upper Cetina Basin, central Croatia, and southern Livansko Polje in north-west Bosnia and Herzegovina; reported habitats include springs, the Cetina River, and interstitial habitats.
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Reported collection sites and dates in the cited study; geographic extent is limited to the named localities and study period.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild populations; no introduced/native range designation beyond treatment localities.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
No current global checklist of localities, georeferenced range boundary, native/introduced assessment, or sampling-completeness study has been completed.
<!-- /evo:text -->

## facets / fossil / gaps

<!-- evo:text /records/catalogue-dossier/facets/fossil/gaps/0 -->
No fossil database or paleontological literature search was performed; no absence-of-fossils conclusion is drawn.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
The authors assess the species as Vulnerable (VU D2) in the treatment; this is an author assessment, and an independently verified current IUCN or national Red List record was not identified.
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Author-assigned status in the 2025 taxonomic treatment; its assessment scope is limited to the account’s reported locality data.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild taxon; author assessment only, not an independently verified current formal assessment.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
Assessment criteria, evaluator authority, assessment date/validity, population trend and current IUCN or national registry record have not been independently verified.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
The identity link is exact at the archived nomenclatural record level, but species-concept equivalence is not independently reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Only a bounded taxonomic treatment was assessed; life history and fossil evidence remain not-assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
Biological source item-level reuse rights are unverified; all biological statements are untranslated English paraphrases.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/3 -->
Several themes have only local or study-specific partial evidence; no complete systematic search or external review was performed.
<!-- /evo:text -->
