---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Whippomorpha
    commonName: Whales, Hippos and Fossil Kin
    commonNameZh: 鲸河马类及化石近亲
    rank: clade
    taxonId: txn:71831
    firstAppearance: 55
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Placentalia/Whippomorpha
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: thewissen-2007-indohyus
          relation: supports
          pages: 1190–1194
          figure: Figures 1–5; Supplementary Information
          quoteLocator: Sindkhatudi sample; raoellid placement; bone-density and isotope evidence
        - referenceId: nikaido-1999-cetartiodactyl-retroposons
          relation: contextualizes
          pages: 10261–10266
          figure: Figures 1–4; Table 1
          quoteLocator: Retroposon presence–absence matrix; whale–hippo topology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Placentalia/Whippomorpha
      rangeKind: global-composite
      taxonomicConcept: Whippomorpha fossil-and-living topology evidence anthology
      geographicScope: Sindkhatudi bone bed, India; sampled living cetartiodactyl topology
      olderMa: 55
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
      confidence: low
      claimPaths:
        - content/topics/atlas/Placentalia/Whippomorpha/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: thewissen-2007-indohyus
          locator: pp. 1190–1194; Figures 1–5; Supplementary Information
        - referenceId: nikaido-1999-cetartiodactyl-retroposons
          locator: pp. 10261–10266; Figures 1–4; Table 1
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Whippomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 55–0 Ma Whippomorpha route uses a rounded early Eocene navigation ceiling and combines the approximately 48.6 Ma Indohyus raoellid sample with living whale–hippo retroposon topology; neither source dates the Whippomorpha crown, and the span is not a direct lineage duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The fossil source supplies bounded morphology, isotopes and a sister-placement test near 48.6 Ma; the molecular source supplies extant topology only. The 55 Ma ceiling preserves nested early-cetacean navigation but is not promoted to a measured crown age.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
thewissen-2007-indohyus, nikaido-1999-cetartiodactyl-retroposons primary-study locators checked for 2026.08-static-v5-rc41
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
化石研究提供约 4,860 万年前的有界形态、同位素与姐妹群位置检验，分子研究只提供现生拓扑。5,500 万年上限用于保留嵌套的早期鲸类导航，不能被提升为实测冠群年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
鲸河马类 5,500 万年至今的路线采用取整后的始新世早期导航上限，并组合约 4,860 万年前 Indohyus 劳氏兽样本与现生鲸—河马逆转座子拓扑；两项研究都未测定鲸河马类冠群年代，该范围也不是一条谱系的直接延续时长。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
55 Ma is a rounded early Eocene navigation ceiling; the cited Indohyus sample is approximately 48.6 Ma and neither it nor living retroposon topology dates the crown.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Indohyus morphology and isotope evidence at approximately 48.6 Ma plus living retroposon topology form an evidence anthology; the older display ceiling preserves nested early-cetacean navigation.
<!-- /evo:text -->
