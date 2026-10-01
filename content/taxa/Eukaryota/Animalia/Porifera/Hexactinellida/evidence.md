---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hexactinellida
    commonName: Glass Sponges
    commonNameZh: 六放海绵（玻璃海绵）
    rank: class
    taxonId: txn:3841
    firstAppearance: 551
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Hexactinellida
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: antcliffe-2014-sponge-record locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: antcliffe-2014-sponge-record
          pages: 89:972–1004
          figure: Figures 1–13; Tables 1–2
          quoteLocator: Diagnostic criteria, Soltanieh spicules and candidate reassessment
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Porifera/Hexactinellida
      rangeKind: global-composite
      taxonomicConcept: Hexactinellida basal-Cambrian-spicule-to-living navigation anthology
      geographicScope: Soltanieh Formation siliceous spicules plus living glass sponges
      olderMa: 536
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
      confidence: medium
      claimPaths:
        - content/events/Basal-Cambrian_Soltanieh_sponge_spicules/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Porifera/Hexactinellida/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: antcliffe-2014-sponge-record
          locator: 972–1004; Figures 1–13; Tables 1–2; diagnostic criteria, Soltanieh spicules and candidate reassessment
      reviewStatus: automated-audit-passed
---

# Hexactinellida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Hexactinellida is displayed at 536–0 Ma only as a basal-Cambrian-spicule-to-living navigation anthology: the Soltanieh material is a cautious fossil anchor, not an exact crown-Hexactinellida FAD or continuous occupancy record.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Antcliffe et al. (2014) reassess early sponge candidates and identify the basal-Cambrian siliceous spicules as the oldest reliable material in their review. Medium confidence keeps the class-level placement and living continuation explicit rather than treating 536 Ma as a crown date.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
Antcliffe 等（2014）重新评估早期海绵候选，并把寒武纪初期硅质骨针视为该综述中最早的可靠材料。中等置信度明确保留纲级归属与现生延续的限制，不把 536 Ma 当作冠群日期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Hexactinellida 的 536–0 Ma 仅作为“寒武纪初期骨针—现生类群”导航汇编：索尔塔尼耶材料是谨慎的化石锚点，不是冠群六放海绵的精确首现或连续占据记录。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The basal-Cambrian material is the oldest reliable sponge evidence in the review and is used as a cautious hexactinellid navigation anchor, not an exact crown FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Antcliffe et al. reassess early sponge candidates and retain basal-Cambrian siliceous spicules as reliable; 0 Ma denotes living hexactinellids.
<!-- /evo:text -->
