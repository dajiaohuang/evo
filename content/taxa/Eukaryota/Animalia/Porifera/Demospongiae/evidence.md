---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Demospongiae
    commonName: Demosponges
    commonNameZh: 寻常海绵类
    rank: class
    taxonId: txn:2895
    firstAppearance: 540
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Demospongiae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: love-2009-sponge-steranes; nettersheim-2019-rhizaria-steranes
      referenceLinks:
        - referenceId: love-2009-sponge-steranes
          relation: supports
          pages: 718–721
          figure: Figures 1–3; Supplementary Tables 1–4
          quoteLocator: MRM sterane measurements and stratigraphic context
        - referenceId: nettersheim-2019-rhizaria-steranes
          relation: contradicts
          pages: 577–581
          figure: Figures 1–3; Supplementary Tables
          quoteLocator: Rhizarian sterol assays and biosynthetic interpretation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Demospongiae
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: love-2009-sponge-steranes locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: love-2009-sponge-steranes
          pages: 457:718–721
          figure: Figures 1–3; Supplementary Tables 1–4
          quoteLocator: Sterane measurements and Cryogenian stratigraphic context
        - relation: contradicts
          referenceId: nettersheim-2019-rhizaria-steranes
          pages: 3:577–581
          figure: Figures 1–3; Supplementary Tables
          quoteLocator: Rhizarian sterol assays and biomarker-specificity discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Porifera/Demospongiae
      rangeKind: global-composite
      taxonomicConcept: Demospongiae contested biomarker-to-living navigation anthology
      geographicScope: Cryogenian South Oman biomarker record plus living demosponges
      olderMa: 635
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: contested
      claimPaths:
        - content/events/Cryogenian_sponge-biomarker_attribution_test/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Porifera/Demospongiae/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: love-2009-sponge-steranes
          locator: 718–721; Figures 1–3; Supplementary Tables 1–4; South Oman steranes and stratigraphy
        - referenceId: nettersheim-2019-rhizaria-steranes
          locator: 577–581; Figures 1–3; Supplementary Tables; rhizarian sterol biosynthesis and specificity limit
      reviewStatus: automated-audit-passed
---

# Demospongiae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Cryogenian sterane records used on the Demospongiae route are a contested geochemical attribution to sponge-grade sources; they do not establish a demosponge crown origin, body fossil or global first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Published support and counterarguments address biomarker source specificity directly, so contested confidence is retained and no taxonomic endpoint is inferred.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Demospongiae is displayed at 635–0 Ma only as a contested biomarker-to-living navigation anthology: Cryogenian 24-isopropylcholestanes are not taxonomically exclusive to demosponges and do not establish a body-fossil FAD, crown origin or continuous global occupancy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Love et al. (2009) directly document the South Oman steranes and age context, whereas Nettersheim et al. (2019) directly weaken their taxonomic specificity. Contested confidence is therefore attached to the 635 Ma assignment, not to the existence of living demosponges.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
已发表支持与反对意见直接讨论生物标志物来源专一性，因此保留争议置信度，不推断分类端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Love 等（2009）直接记录阿曼南部甾烷及其年代背景，而 Nettersheim 等（2019）直接削弱其分类专一性。因此争议置信度针对 635 Ma 的归属，而非现生寻常海绵的存在。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
寻常海绵路线采用的成冰纪甾烷记录，是对海绵型来源存在争议的地球化学归因；它不确立寻常海绵冠群起源、体化石或全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Demospongiae 的 635–0 Ma 仅作为有争议的“生物标志物—现生类群”导航汇编：成冰纪 24-异丙基胆甾烷并非海绵纲专属，不能确立实体化石首现、冠群起源或连续全球占据。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 635 Ma edge is a contested biomarker attribution, not a demosponge body-fossil FAD, crown divergence date or uninterrupted occupancy claim.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Love et al. report Cryogenian 24-isopropylcholestanes, while Nettersheim et al. demonstrate non-sponge precursor production; the present endpoint denotes living demosponges.
<!-- /evo:text -->
