---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hippopotamidae
    commonName: Hippopotamuses
    commonNameZh: 河马科
    rank: family
    taxonId: txn:42479
    firstAppearance: 23
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Artiodactyla/Hippopotamidae
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: boisserie-2005-hippopotamidae concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: boisserie-2005-hippopotamidae
          pages: 1–26
          quoteLocator: Taxonomic review; cladistic analysis; discussion of revised family membership
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Artiodactyla/Hippopotamidae
      rangeKind: global-composite
      taxonomicConcept: hippopotamidae — source-bounded sample window — numerical range withheld
      geographicScope: No numerical geographic-temporal range exposed
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
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: boisserie-2005-hippopotamidae
          locator: 1–26; Taxonomic review; cladistic analysis; discussion of revised family membership
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Hippopotamidae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A review and 37-character cladistic analysis of 15 living and fossil hippopotamid taxa revises several historical assignments while retaining Hippopotamidae as the study’s focal family; the resulting membership is a sampled taxonomic hypothesis, not a complete fossil duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The systematic review provides a family-wide morphology audit and explicit cladistic sample. Its revisions and limited taxon set are retained.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
系统综述提供科级形态审计与明确支序取样；主张保留其修订结果和有限类群集。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项覆盖 15 个现生与化石河马科类群、使用 37 个性状的综述与支序分析修订了若干历史归类，同时保留河马科为研究焦点；所得成员关系是取样分类假说，不是完整化石延续范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the morphology review revises membership but does not securely support the legacy 23 Ma numerical start. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of The phylogeny and taxonomy of Hippopotamidae (Mammalia: Artiodactyla): a review based on morphology and cladistic analysis found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
