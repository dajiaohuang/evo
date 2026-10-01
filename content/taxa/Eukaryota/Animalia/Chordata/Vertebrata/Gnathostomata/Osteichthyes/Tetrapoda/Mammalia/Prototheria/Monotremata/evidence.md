---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Monotremata
    commonName: Monotremes
    commonNameZh: 单孔类
    rank: order
    taxonId: txn:39737
    firstAppearance: 110
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Prototheria/Monotremata
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
      reviewedAgainstReferenceVersion: archer-1985-steropodon primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: archer-1985-steropodon
          relation: supports
          pages: 363–366
          figure: Figures 1–2
          quoteLocator: Holotype; Diagnosis and Description; dental comparison
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Prototheria/Monotremata
      rangeKind: global-composite
      taxonomicConcept: Monotremata total-group fossil evidence and living crown continuation
      geographicScope: Griman Creek Formation, Lightning Ridge, Australia; living Australasian continuation
      olderMa: 110
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Prototheria/Monotremata/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: archer-1985-steropodon
          locator: pp. 363–366; Figures 1–2; Diagnosis and Description
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Monotremata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 110–0 Ma Monotremata route is a total-group navigation span anchored by the Griman Creek Steropodon jaw and living monotremes; dental affinity does not make Steropodon a crown member, direct ancestor or global monotreme FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
AM F66763 and its molars are directly described, while monotreme affinity is comparative. The route keeps fossil total-group evidence separate from the living crown endpoint.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
AM F66763 及其臼齿有直接描述，而单孔类亲缘性来自比较；路线把化石总群证据与现生冠群端点分开。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
110–0 Ma 的单孔类路线是总群导航跨度，由 Griman Creek 组 Steropodon 颌骨与现生单孔类共同锚定；牙齿亲缘性不使 Steropodon 成为冠群成员、直系祖先或全球首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
110–100 Ma is the broad Steropodon formation context; dental affinity does not establish crown membership, origination or a global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Steropodon holotype AM F66763 anchors a total-group monotreme occurrence and living monotremes extend the navigation route.
<!-- /evo:text -->
