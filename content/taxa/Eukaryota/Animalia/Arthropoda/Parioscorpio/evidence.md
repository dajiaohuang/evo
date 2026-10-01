---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Parioscorpio
    commonName: Parioscorpio (affinity unresolved)
    commonNameZh: Parioscorpio（亲缘未定）
    rank: genus
    taxonId: txn:404117
    firstAppearance: 437.5
    lastAppearance: 436.5
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Parioscorpio
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
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: wendruff-2020-parioscorpio
          relation: supports
          pages: "14"
          figure: Figures 1–4; Supplementary Figures
          quoteLocator: UWGM 2162 and 2163; specimen locality and original description
        - referenceId: anderson-2021-parioscorpio-reassessment
          relation: supports
          quoteLocator: Redescription and phylogenetic conclusions; alternative character codings archived with the study
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Parioscorpio
      rangeKind: global-composite
      taxonomicConcept: Parioscorpio venator type occurrence
      geographicScope: Brandon Bridge Formation, Wisconsin, USA
      olderMa: 437.5
      youngerMa: 436.5
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
        - content/events/Parioscorpio_anatomy_and_the_reassessed_scorpion_hypothesis/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: wendruff-2020-parioscorpio
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Parioscorpio

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Parioscorpio venator is documented from the Silurian Waukesha Lagerstatte in Wisconsin, including holotype UWGM 2162 and paratype UWGM 2163. Its 2021 redescription rejected the scorpion interpretation while leaving exact arthropod affinities unresolved; this occurrence does not date scorpion origins.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The named fossils establish a local occurrence. The original scorpion interpretation was rejected in a subsequent redescription; exact arthropod placement remains unresolved, so the occurrence is not a scorpion-origin calibration.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Wendruff et al. 2020 type specimens and locality; Anderson et al. 2021, doi:10.1111/pala.12534, reassessment and author data archive
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名化石证明局部产出。后续重新描述否定了最初的蝎类解释；确切节肢动物亲缘位置仍未确定，不能用该产出校准蝎类起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Parioscorpio venator 见于威斯康星州志留纪沃基肖化石库，包括正模 UWGM 2162 和副模 UWGM 2163。2021 年重新描述否定了蝎类解释，但其在节肢动物中的确切亲缘位置仍未确定；这一产出不能用于蝎类起源定年。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Conodont-bounded locality age, not a direct date on either specimen or proof of habitat.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
14; Figures 1–4; Supplementary Figures; UWGM 2162 and 2163; Internal anatomy; Depositional and terrestrialization discussion
<!-- /evo:text -->
