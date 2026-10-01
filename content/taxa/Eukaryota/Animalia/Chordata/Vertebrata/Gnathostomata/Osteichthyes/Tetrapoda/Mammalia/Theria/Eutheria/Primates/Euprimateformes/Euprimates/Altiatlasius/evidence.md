---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Altiatlasius
    commonName: Altiatlasius
    commonNameZh: 高阿特拉斯猴属
    rank: genus
    taxonId: txn:92577
    firstAppearance: 59.2
    lastAppearance: 56
    extinct: true
    parentRelationshipKind: navigation-parent
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Euprimateformes/Euprimates/Altiatlasius
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: sige-1990-altiatlasius concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: sige-1990-altiatlasius
          pages: 31–56
          figure: Plate 1
          quoteLocator: Holotype and hypodigm; locality and systematic discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Euprimateformes/Euprimates/Altiatlasius
      rangeKind: global-composite
      taxonomicConcept: Altiatlasius dental hypodigm and placement boundary occurrence
      geographicScope: Adrar Mgorn 1, Jbel Guersif Formation, Ouarzazate Basin, Morocco
      olderMa: 59.2
      youngerMa: 56
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
      confidence: low
      claimPaths:
        - content/events/Altiatlasius_dental_hypodigm_and_placement_boundary/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: sige-1990-altiatlasius
          locator: 31–56; Plate 1
      reviewStatus: automated-audit-passed
---

# Altiatlasius

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Altiatlasius is directly represented by a small isolated-tooth hypodigm including holotype THR 141 from Adrar Mgorn 1 within a broad approximately 59.2–56 Ma Thanetian envelope; tooth loci and crown-primate placement remain disputed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimens and locality are documented, but dental association, tooth position and higher placement remain uncertain; the range is not a direct date or global FAD.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本与地点有记录，但牙齿组合、牙位及高阶位置仍不确定；该范围不是直接测年或全球首现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Altiatlasius 的直接证据是一小套孤立牙齿组合，其中包括 Adrar Mgorn 1 的正模 THR 141，处于约 5920 万—5600 万年前的宽泛赞尼特期区间；牙位与冠群灵长类位置仍有争议。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Tooth locus and hypodigm membership are not uniform across later assessments; the original omomyid assignment is a hypothesis, not secure crown-Primate or crown-anthropoid evidence and not a directly dated occurrence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
