---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Archosauria
    commonName: Archosaurs
    commonNameZh: 主龙类
    rank: infraclass
    taxonId: ""
    firstAppearance: 247.2
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: butler-2011-ctenosauriscus primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: butler-2011-ctenosauriscus
          relation: supports
          pages: e25693
          figure: Figures 1–16; Text S1; Materials S1
          quoteLocator: Holotype redescription; stratigraphic review; phylogenetic analysis; early-archosaur record discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria
      rangeKind: global-composite
      taxonomicConcept: Crown Archosauria fossil minimum and living navigation span
      geographicScope: Upper Middle Buntsandstein, Bremketal near Göttingen, Germany; living global continuation
      olderMa: 247.2
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
      confidence: medium
      claimPaths:
        - content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: butler-2011-ctenosauriscus
          locator: Article e25693; Figures 1–16; Text S1; Materials S1
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Archosauria

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ctenosauriscus GZG.V.4191 from latest Olenekian strata near 247.2 Ma anchors the 247.2–0 Ma Archosauria route; its pseudosuchian placement and stratigraphic age provide a sampled crown minimum, not a global origin or complete early-archosaur record.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype, stratigraphic correlation and revised character matrix are explicit. The paper also documents sparse and geographically biased Early Triassic sampling, so the route cannot be interpreted as a global FAD.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模、地层对比与修订性状矩阵均有明确记录；论文同时说明早三叠世采样稀疏且有地域偏差，因此该路线不能解释为全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
最新 Olenekian 期、约 247.2 Ma 的 Ctenosauriscus 正模 GZG.V.4191 锚定 247.2–0 Ma 的主龙类路线；其伪鳄类位置与地层年代只提供取样冠群最低记录，不是全球起源或完整早期主龙记录。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
247.2 Ma follows the study’s Olenekian–Anisian boundary calibration and rounded specimen context; it is not an exact origin date or complete global record.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Ctenosauriscus GZG.V.4191, stratigraphic review and a revised character matrix anchor a latest Olenekian pseudosuchian occurrence.
<!-- /evo:text -->
