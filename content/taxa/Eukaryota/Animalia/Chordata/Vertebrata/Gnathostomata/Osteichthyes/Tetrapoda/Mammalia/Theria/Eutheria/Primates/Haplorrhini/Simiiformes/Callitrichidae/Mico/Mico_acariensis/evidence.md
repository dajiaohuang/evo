---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mico acariensis (M. van Roosmalen, T. van Roosmalen, Mittermeier & Rylands, 2000)
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 阿卡里绒猴
      en: Acarí marmoset
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
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-85c11235-013c-8914-afb6-231b4a4b9124
          metadataVariant: 0
          sourceKey: costa_araujo2023micoacariensis
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
            url: https://www.checklistbank.org/dataset/316115/taxon/42MHS
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
    scientificName: Mico acariensis (M. van Roosmalen, T. van Roosmalen, Mittermeier & Rylands, 2000)
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
      - id: 7KR
        scientificName: Callitrichidae Gray, 1821
        authorship: Gray, 1821
        rank: family
        status: accepted
        sourceDatasetId: "2144"
      - id: 63B9H
        scientificName: Mico Lesson, 1840
        authorship: Lesson, 1840
        rank: genus
        status: accepted
        sourceDatasetId: "2144"
      - id: 42MHS
        scientificName: Mico acariensis (M. van Roosmalen, T. van Roosmalen, Mittermeier & Rylands, 2000)
        authorship: (M. van Roosmalen, T. van Roosmalen, Mittermeier & Rylands, 2000)
        rank: species
        status: accepted
        sourceDatasetId: "2144"
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Captive or domesticated populations were not assessed by this claim.
      fossil: Fossil occurrence and geological age were not assessed.
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
            url: https://www.checklistbank.org/dataset/316115/taxon/42MHS
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            stableId: col:42MHS@COL26.8
            publishedAt: 2026-08-20
            accessedAt: 2026-09-28
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/locator
            licenseAssessment: identity-only
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            attribution: Catalogue of Life (2026), Version 2026-08-20, dataset 316115, usage 42MHS. https://doi.org/10.48580/dgywk
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
        - referenceId: ref-a93271b3-8a3c-820f-a234-77027386a15a
          metadataVariant: 0
          sourceKey: costa_araujo2023micoacariensis
          usage:
            licenseEvidenceLocator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator
            licenseAppliesTo:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo
            stableId: doi:10.5194/pb-10-7-2023
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
              - costa_araujo2023micoacariensis
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/locator
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
              - costa_araujo2023micoacariensis
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/locator
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
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/1
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/2
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
    expertReview:
      status: not-reviewed
      reviewers: []
---

# Mico acariensis

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
巴西亚马逊南中部的绒猴地点记录、分布界定与栖地研究；范围及接触区是作者根据区域记录提出的解释。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
Marmoset locality records, range delineation and habitat study in south-central Amazonia, Brazil; range and contact-zone statements are the authors' interpretations of regional records.
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
Exact COL26.8 accepted species usage was verified by COL ID, verbatim scientific name, authorship, rank, accepted status, sourceDatasetId, and every accepted parent node in the pinned hierarchy.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
One 2023 field-based distribution account that compiles two previously reported localities and three new localities for Mico acariensis. The claim reports the authors' regional range delineation within the Acarí–Sucundurí interfluve; it is not a complete species-wide survey, abundance estimate, or conservation assessment.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
The cited distribution account is based on occurrence localities and field expeditions in southern Amazonia; the claim concerns the reported wild-range delineation.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; pinned source checklist
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/locator -->
Accepted species usage 42MHS; exact accepted name, authorship, species rank, sourceDatasetId 2144, and accepted parent chain verified in the pinned hierarchy.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Pinned COL26.8 accepted-name identity and classification metadata only.
<!-- /evo:text -->

## referenceBindings / usage / licenseEvidenceLocator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseEvidenceLocator -->
Publisher page lines 58–66: © Author(s) 2023; the work is distributed under the Creative Commons Attribution 4.0 License.
<!-- /evo:text -->

## referenceBindings / usage / licenseAppliesTo

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/licenseAppliesTo -->
Published article text. This dossier paraphrases the distribution account and does not reproduce Figure 2, the supplement, or third-party photographs.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/locator -->
Article title, publication date, DOI, and citation (publisher page lines 58–76 and 129–132); methods, ten field expeditions during 2015–2018 (lines 144–147); Results and discussion, M. acariensis occurrence records and approximate 17,480 km² regional delineation (lines 149–163).
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Original field-based account of marmoset occurrence, range delineation, and habitat use in south-central Amazonia; the claim is limited to the authors' mapped regional distribution inference for Mico acariensis.
<!-- /evo:text -->

## referenceBindings / usage / attribution

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/attribution -->
Costa-Araújo R, Bergamasco G, Roos C, Farias IP, Hrbek T. (2023). Notes on the distribution and habitat use of marmosets (Callitrichidae: Mico) from south-central Amazonia. Primate Biology 10:7–11. https://doi.org/10.5194/pb-10-7-2023. Findings paraphrased.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
From their occurrence records and regional geomorphology, the authors proposed that the headwaters of the Acarí River might represent a contact zone involving Mico acariensis, M. chrysoleucos, and M. melanurus, where hybridization could occur. This is a proposed scenario, not a confirmed contact zone or a report of observed hybrids or gene flow; the authors called for further surveys, specimens, and samples to determine whether the contact zone exists and to assess population dynamics and hybridization.
<!-- /evo:text -->

## evolution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/locator -->
Results and discussion, final paragraph: authors' contact-zone and possible hybridization hypothesis at the Acarí River headwaters, with the stated need for further surveys, specimens, and samples; publisher page lines 160–163.
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
Acarí River headwaters, south-central Amazonia, Brazil; hypothesis published in 2023 from locality records that include 2015–2018 field expeditions and regional geomorphological context. No timing of a contact event or population-level estimate is reported.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Based on wild locality records and regional biogeographic reasoning; captive and fossil evidence are not included.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The proposed contact zone and potential hybridization were not confirmed in this account; the authors call for additional surveys, specimens, and samples to establish whether the zone exists and assess population dynamics and hybridization.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
In their 2023 account, two previously reported localities and three new localities support the authors' delineation of Mico acariensis as the only marmoset in the Acarí–Sucundurí interfluve. They delimit the reported distribution by the right bank of the Acarí River, the left bank of the Sucundurí River, and the area south to BR-230, covering approximately 17,480 km². This is a regional range inference from the occurrence records discussed in that paper, not a complete species-wide survey or an estimate of current abundance.
<!-- /evo:text -->

## distribution / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/locator -->
Results and discussion, paragraph beginning 'Mico acariensis is among the less-known primates' (publisher page lines 158–163); field survey context in Material and methods (lines 144–147).
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Acarí–Sucundurí interfluve, south-central Amazonia, Brazil; occurrence records presented in the 2023 account, including field expeditions conducted during 2015–2018.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild-range occurrence records and an author-delineated regional distribution; no captive population or fossil record is included.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
The reported area is a regional author-delineated range based on two previously reported and three new localities; the article does not establish a complete, range-wide census or current abundance.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/1 -->
The authors state that the remote region needs additional surveys to clarify geographic distribution, the proposed contact zone, and population dynamics.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/2 -->
Morphology, life history, fossils, conservation status, systematic evidence search, and external expert review remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
One regional occurrence account and one explicitly provisional contact-zone and hybridization hypothesis do not establish complete species-wide distribution, observed hybridization, gene flow, or current population dynamics.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Morphology, life history, ecology, fossils, conservation, systematic evidence search, and external expert review remain unassessed.
<!-- /evo:text -->
