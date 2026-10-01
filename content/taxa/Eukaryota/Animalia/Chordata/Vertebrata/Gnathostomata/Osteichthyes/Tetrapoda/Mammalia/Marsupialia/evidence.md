---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Marsupialia
    commonName: Marsupials
    commonNameZh: 有袋类
    rank: infraclass
    taxonId: txn:247806
    firstAppearance: 65.18
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia
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
      reviewedAgainstReferenceVersion: horovitz-2009-earliest-marsupials primary-study locators checked for 2026.08-static-v5-rc41
      referenceLinks:
        - referenceId: horovitz-2009-earliest-marsupials
          relation: supports
          pages: 4:e8278
          figure: Figures 1–5; Tables 1–2; Supporting Information
          quoteLocator: Cranial anatomy; cladistic analysis; fossil record and calibration discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia
      rangeKind: global-composite
      taxonomicConcept: Marsupialia sampled crown minimum and living continuation
      geographicScope: Early Paleocene North American Peradectes record; living global continuation
      olderMa: 65.18
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: horovitz-2009-earliest-marsupials
          locator: Article e8278; Figures 1–5; Tables 1–2; Supporting Information
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Marsupialia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Peradectes-based analyses place a sampled crown-marsupial record by about 65.18 Ma, anchoring the 65.18–0 Ma Marsupialia route; crown placement and biogeographic inferences are analysis-dependent and not an origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study combines new cranial anatomy with a broad cladistic analysis and states the calibration consequence. The route uses that sampled minimum while withholding a crown-origination claim.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究把新的头骨解剖与广泛支序分析结合，并明确说明校准意义；路线采用该取样最低记录，同时不提出冠群起源主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基于 Peradectes 的分析把所取样有袋类冠群记录置于约 65.18 Ma，从而锚定 65.18–0 Ma 的有袋类路线；冠群位置及生物地理推断依赖分析，并非起源日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Approximately 65.18 Ma depends on Peradectes crown placement in the cited morphology analysis; it is a sampled minimum, not a crown-origin date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Cranial anatomy and a broad cladistic analysis place peradectids near living opossums and expose the resulting crown calibration.
<!-- /evo:text -->
