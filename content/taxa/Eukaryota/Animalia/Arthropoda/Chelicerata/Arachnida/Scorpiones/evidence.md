---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Scorpiones
    commonName: Scorpions
    commonNameZh: 蝎类
    rank: order
    taxonId: txn:243100
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Scorpiones
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
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Anderson et al. 2021, doi:10.1111/pala.12534; withdrawal of Parioscorpio-based Scorpiones range
      referenceLinks:
        - referenceId: anderson-2021-parioscorpio-reassessment
          relation: supports
          quoteLocator: Redescription and rejection of scorpion affinities; phylogenetic conclusions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Scorpiones
      rangeKind: global-composite
      taxonomicConcept: Scorpiones navigation range
      geographicScope: Global range pending an independent scorpion fossil source
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: withheld-no-range-evidence
      confidence: contested
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Scorpiones/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: anderson-2021-parioscorpio-reassessment
          locator: Redescription and rejection of scorpion affinities; phylogenetic conclusions
      reviewStatus: automated-audit-passed
---

# Scorpiones

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Scorpiones range formerly used the Silurian Parioscorpio occurrence as its older endpoint. Anderson et al. (2021) rejected that fossil's scorpion identification, so this atlas withholds the inherited range pending independent scorpion evidence; no origin date is established here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The later redescription invalidates use of Parioscorpio as a scorpion range anchor. This records withdrawal of that inference, not an alternative age estimate.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
后续重新描述否定了用 Parioscorpio 作为蝎类延限锚点的依据。这里记录的是撤回该推断，而非提供另一项年代估算。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
蝎类延限此前以志留纪 Parioscorpio 产出作为较老端点。Anderson 等（2021）否定了该化石的蝎类归属，因此图谱暂不提供这一沿用范围，等待独立的蝎类证据；此处不确定起源年代。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former 437.5 Ma endpoint relied on Parioscorpio, whose scorpion identification was rejected in the 2021 redescription. Zero endpoints are withheld placeholders, not an origin date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Parioscorpio cannot establish the global Scorpiones range. This interval is withheld until independently supported scorpion fossil evidence is supplied.
<!-- /evo:text -->
